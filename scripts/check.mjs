import assert from 'node:assert/strict';
import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
async function files(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => entry.isDirectory() ? files(path.join(dir, entry.name)) : path.join(dir, entry.name)))).flat();
}
let pages = 0;
let links = 0;
for (const file of await files(root)) {
  if (!/\.(html|css)$/.test(file)) continue;
  const content = await readFile(file, 'utf8');
  if (file.endsWith('.html')) {
    pages++;
    assert(!content.includes('{{'), `Unexpanded template: ${file}`);
    assert(!content.includes('>ESSAYS<'), `Old navigation: ${file}`);
    for (const img of content.matchAll(/<img\b[^>]*>/g)) assert(/alt="[^"]+"/.test(img[0]), `Missing alt text: ${file}`);
  }
  const refs = file.endsWith('.css')
    ? [...content.matchAll(/url\(["']?([^\s)'";]+)/g)].map((m) => m[1])
    : [...content.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  for (const ref of refs) {
    if (/^(?:[a-z]+:|\/\/|#)/i.test(ref)) continue;
    const localPath = decodeURIComponent(ref.split(/[?#]/)[0]);
    const target = localPath.startsWith('/')
      ? path.resolve(root, '.' + localPath)
      : path.resolve(path.dirname(file), localPath);
    assert(target === path.resolve(root) || target.startsWith(root), `Link outside site: ${ref} in ${file}`);
    await access(target).catch(() => { throw new Error(`Broken local link: ${ref} in ${path.relative(root, file)}`); });
    links++;
  }
}
assert.equal((await readFile(path.join(root, 'CNAME'), 'utf8')).trim(), 'jonathansacramento.com');
await access(path.join(root, '.nojekyll'));
console.log(`Checked ${pages} HTML pages and ${links} local links/assets; domain and .nojekyll present.`);
