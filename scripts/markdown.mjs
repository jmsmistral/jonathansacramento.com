import { Marked } from 'marked';
import hljs from 'highlight.js';
import path from 'node:path';
import { externalLinkAttributes } from './links.mjs';

const escape = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export function renderMarkdown(source, imageDescriptions = {}, siteUrl) {
  const markdown = new Marked({
    gfm: true,
    extensions: [
      {
        name: 'marginNoteDefinition',
        level: 'block',
        start: (src) => src.search(/^\[\^[a-zA-Z0-9_-]+\]:/m),
        tokenizer(src) {
          const match = /^\[\^([a-zA-Z0-9_-]+)\]:[ \t]+([^\n]+)(?:\n|$)/.exec(src);
          if (match) return { type: 'marginNoteDefinition', raw: match[0], label: match[1], text: match[2].trim() };
        },
        renderer: () => '',
      },
      {
        name: 'marginNoteReference',
        level: 'inline',
        start: (src) => src.indexOf('[^'),
        tokenizer(src) {
          const match = /^\[\^([a-zA-Z0-9_-]+)\]/.exec(src);
          if (match) return { type: 'marginNoteReference', raw: match[0], label: match[1] };
        },
        renderer(token) {
          if (!token.number) throw new Error('Margin notes cannot contain other margin notes.');
          return `<sup class="margin-note-ref" id="note-ref-${token.number}"><a href="#margin-note-${token.number}" aria-label="Margin note ${token.number}">${token.number}</a></sup>`;
        },
      },
    ],
    renderer: {
      link({ href, title, tokens }) {
        return `<a href="${escape(href)}"${externalLinkAttributes(href, siteUrl)}${title ? ` title="${escape(title)}"` : ''}>${this.parser.parseInline(tokens)}</a>`;
      },
      code({ text, lang }) {
        const language = (lang || 'text').split(/\s/)[0];
        const highlighted = hljs.getLanguage(language) ? hljs.highlight(text, { language }).value : escape(text);
        return `<pre tabindex="0" aria-label="${escape(language)} code"><code class="hljs language-${escape(language)}">${highlighted}</code></pre>\n`;
      },
      image({ href, title, text }) {
        const url = href.startsWith('/img/') ? `..${href}` : href;
        const alt = text || imageDescriptions[path.basename(href)];
        if (!alt) throw new Error(`Missing image description: ${href}`);
        return `<img src="${escape(url)}" alt="${escape(alt)}"${title ? ` title="${escape(title)}"` : ''} loading="lazy" decoding="async">`;
      },
      paragraph({ tokens }) {
        const notes = [];
        markdown.walkTokens(tokens, (token) => {
          if (token.type === 'marginNoteReference') notes.push(token);
        });
        const content = this.parser.parseInline(tokens);
        if (notes.length) {
          const margin = notes.map((note) => `<div class="margin-note" id="margin-note-${note.number}" role="note"><p><a class="margin-note-number" href="#note-ref-${note.number}" aria-label="Back to reference ${note.number}">${note.number}.</a> ${markdown.parseInline(note.text)}</p></div>`).join('');
          return `<div class="sidenote-paragraph"><p>${content}</p><aside class="margin-notes" aria-label="Margin notes">${margin}</aside></div>\n`;
        }
        return tokens.length === 1 && tokens[0].type === 'image'
          ? `<figure>${content}</figure>\n` : `<p>${content}</p>\n`;
      },
    },
  });

  const tokens = markdown.lexer(source);
  const definitions = new Map();
  markdown.walkTokens(tokens, (token) => {
    if (token.type !== 'marginNoteDefinition') return;
    if (definitions.has(token.label)) throw new Error(`Duplicate margin note definition: [^${token.label}]`);
    definitions.set(token.label, token.text);
  });

  // Keep margin notes attached to ordinary paragraphs, where they can align reliably.
  const paragraphReferences = new Set();
  for (const token of tokens) {
    if (token.type === 'paragraph') markdown.walkTokens(token.tokens, (child) => {
      if (child.type === 'marginNoteReference') paragraphReferences.add(child);
    });
  }
  const used = new Set();
  let number = 0;
  markdown.walkTokens(tokens, (token) => {
    if (token.type !== 'marginNoteReference') return;
    if (!paragraphReferences.has(token)) throw new Error('Place margin note references in ordinary paragraphs, outside headings, lists, and blockquotes.');
    if (!definitions.has(token.label)) throw new Error(`Missing margin note definition: [^${token.label}]`);
    if (used.has(token.label)) throw new Error(`Use each margin note label once: [^${token.label}]`);
    used.add(token.label);
    token.number = ++number;
    token.text = definitions.get(token.label);
  });
  return markdown.parser(tokens);
}
