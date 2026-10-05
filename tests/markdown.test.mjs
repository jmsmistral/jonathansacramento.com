import test from 'node:test';
import assert from 'node:assert/strict';
import { renderMarkdown } from '../scripts/markdown.mjs';

test('margin notes follow paragraph references, with automatic numbering and Markdown', () => {
  const html = renderMarkdown(`First **paragraph[^second]** has context.[^first]

Next paragraph.[^third]

[^first]: A [reference](https://example.com) and \`code\`.
[^second]: Some *context*.
[^third]: Another note.`);
  assert.match(html, /id="note-ref-1".*href="#margin-note-1"/);
  assert.match(html, /id="margin-note-1"[^]*?<em>context<\/em>/);
  assert.match(html, /id="margin-note-2"[^]*?href="https:\/\/example.com"/);
  assert.match(html, /id="margin-note-3"[^]*?Another note\./);
  assert.equal((html.match(/class="sidenote-paragraph"/g) || []).length, 2);
  assert.equal((html.match(/class="margin-notes"/g) || []).length, 2);
  assert.doesNotMatch(html, /\[\^(first|second|third)\]/);
  assert.match(html, /href="#note-ref-3"/);
});

test('note-like syntax stays literal inside code and escaped text', () => {
  const html = renderMarkdown('`[^missing]` and \\[\^escaped].\n\n```text\n[^literal]: not a note\n```');
  assert.doesNotMatch(html, /class="margin-note/);
  assert.match(html, /<code>\[\^missing\]<\/code>/);
  assert.match(html, /\[\^literal\]: not a note/);
});

test('broken note references fail clearly and note state resets between posts', () => {
  assert.throws(() => renderMarkdown('Text.[^missing]'), /Missing margin note definition/);
  assert.throws(() => renderMarkdown('Text.[^a]\n\n[^a]: One\n[^a]: Two'), /Duplicate margin note definition/);
  assert.throws(() => renderMarkdown('Text.[^a] Again.[^a]\n\n[^a]: One'), /Use each margin note label once/);
  assert.throws(() => renderMarkdown('## Heading[^a]\n\n[^a]: One'), /ordinary paragraphs/);
  assert.throws(() => renderMarkdown('Text.[^a]\n\n[^a]: Nested.[^b]\n[^b]: Another'), /cannot contain other margin notes/);
  renderMarkdown('Text.[^a]\n\n[^a]: One');
  assert.match(renderMarkdown('Fresh.[^b]\n\n[^b]: Two'), /id="margin-note-1"/);
  assert.throws(() => renderMarkdown('Another.[^a]'), /Missing margin note definition/);
});

test('existing article features still render without margin notes', () => {
  const html = renderMarkdown('A normal paragraph.\n\n![Diagram](/img/diagram.png)\n\n```sql\nselect 1;\n```');
  assert.match(html, /<p>A normal paragraph\.<\/p>/);
  assert.match(html, /<figure><img src="\.\.\/img\/diagram.png" alt="Diagram"/);
  assert.match(html, /class="hljs language-sql"/);
  assert.doesNotMatch(html, /sidenote-paragraph/);
});
