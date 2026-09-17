import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { renderSite } from '../scripts/render.mjs';
import { postAgeYears, postAgeText } from '../src/js/post-age.js';

const site = JSON.parse(await readFile(new URL('../src/site.json', import.meta.url)));
const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'})[c]);
const post = (date, slug) => ({date, slug, title:'A title <with> & symbols', dateLabel:date, html:'<p>Article body.</p>'});
async function render(posts) {
  const pages = new Map();
  await renderSite({posts, projects:[], site, escape, write:async (path, html)=>pages.set(path,html)});
  return pages;
}

test('age uses completed years, including anniversaries and leap days', () => {
  const now = new Date('2026-09-17T12:00:00Z');
  assert.equal(postAgeYears('2025-09-18',now),null);
  assert.equal(postAgeYears('2025-09-17',now),1);
  assert.equal(postAgeYears('2015-09-26',now),10);
  assert.equal(postAgeYears('2027-01-01',now),null);
  assert.equal(postAgeYears('2024-02-29',new Date('2025-02-28T12:00:00Z')),null);
  assert.equal(postAgeYears('2024-02-29',new Date('2025-03-01T12:00:00Z')),1);
  assert.equal(postAgeText(1),'Published 1 year ago.');
  assert.equal(postAgeText(9),'Published 9 years ago.');
});

test('new posts extend the archive automatically and render without optional metadata', async () => {
  const pages = await render([post('2026-09-17','new-post'),post('2015-01-01','old-post')]);
  assert.match(pages.get('blog.html'),/Archive \/ 2015 - 2026/);
  assert.match(pages.get('index.html'),/\.\/blog\/new-post\.html/);
  const article = pages.get('blog/new-post.html');
  assert.match(article,/A title &lt;with&gt; &amp; symbols/);
  assert.match(article,/href="\.\.\/blog.html"/);
  assert.match(article,/src="\.\.\/js\/post-age.js"/);
  assert.doesNotMatch(article,/noindex|article-byline|Explore the four designs/);
});

test('single-year and empty archives do not produce invalid year ranges', async () => {
  assert.match((await render([post('2026-09-17','single')])).get('blog.html'),/Archive \/ 2026<\/p>/);
  assert.match((await render([])).get('blog.html'),/>Archive<\/p>/);
});

test('legacy React hash and direct URLs map to the new article', async () => {
  const pages = await render([post('2016-11-19','clean-sql')]);
  assert.match(pages.get('js/legacy-links.js'),/"\/blogpost\/clean-sql":"blog\/clean-sql.html"/);
  assert.match(pages.get('blogpost/clean-sql/index.html'),/url=\.\.\/\.\.\/blog\/clean-sql.html/);
  assert.match(pages.get('blog/index.html'),/url=\.\.\/blog.html/);
  assert.match(pages.get('essays.html'),/url=.\/blog.html/);
  assert.equal([...pages.keys()].some(p=>p.startsWith('templates/')),false);
});
