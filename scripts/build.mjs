import { cp, mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { Marked } from 'marked';
import hljs from 'highlight.js';

const root = fileURLToPath(new URL('../', import.meta.url));
const src = path.join(root, 'src');
const out = path.join(root, 'dist');
const escape = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const read = (name) => readFile(path.join(src, name), 'utf8');
async function write(name, html) {
  await mkdir(path.dirname(path.join(out, name)), { recursive: true });
  await writeFile(path.join(out, name), html);
}

const imageDescriptions = JSON.parse(await read('image-descriptions.json'));
const markdown = new Marked({
  gfm: true,
  renderer: {
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
      const content = this.parser.parseInline(tokens);
      return tokens.length === 1 && tokens[0].type === 'image'
        ? `<figure>${content}</figure>\n` : `<p>${content}</p>\n`;
    },
  },
});

// The original filenames are the source of dates, titles, and legacy slugs.
const posts = [];
const metadata = JSON.parse(await read('posts.json'));
const slugs = new Set();
for (const filename of (await readdir(path.join(src, 'posts'))).filter((f) => f.endsWith('.md')).sort().reverse()) {
  const match = filename.match(/^(\d{4})(\d{2})(\d{2})-(.+)\.md$/);
  if (!match) throw new Error(`Expected YYYYMMDD-title.md: ${filename}`);
  const [, year, month, day, name] = match;
  const date = `${year}-${month}-${day}`;
  if (new Date(`${date}T12:00:00Z`).toISOString().slice(0, 10) !== date) throw new Error(`Invalid date: ${filename}`);
  const slug = name.toLowerCase();
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slugs.has(slug)) throw new Error(`Invalid or duplicate slug: ${filename}`);
  slugs.add(slug);
  const details = metadata[slug] || {};
  const rawTitle = name.replaceAll('-', ' ');
  posts.push({
    slug,
    summary: details.summary || '',
    topic: details.topic || 'Notes',
    title: details.title || rawTitle[0].toUpperCase() + rawTitle.slice(1),
    date,
    dateLabel: new Date(`${date}T12:00:00Z`).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }),
    html: markdown.parse(await read(`posts/${filename}`)),
  });
}

// dist is generated from scratch; source files are never modified.
await rm(out, { recursive: true, force: true });
await mkdir(out, { recursive: true });
for (const dir of ['css', 'img', 'fonts', 'js']) {
  await cp(path.join(src, dir), path.join(out, dir), { recursive: true });
}
await cp(path.join(src, 'CNAME'), path.join(out, 'CNAME'));
await write('.nojekyll', '');
const projects = JSON.parse(await read('projects.json'));
const site = JSON.parse(await read('site.json'));
const { renderSite } = await import('./render.mjs');
await renderSite({ posts, projects, site, write, escape });
