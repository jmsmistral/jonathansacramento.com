import { postAgeYears, postAgeText } from '../src/js/post-age.js';

export async function renderSite({ posts, projects, site, write, escape: e }) {
  const paths = {
    github: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.86c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 6.82c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.39.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>',
    linkedin: '<path d="M5.2 3.4a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM3.7 9h3v11h-3V9Zm5.6 0h2.9v1.5h.1a3.5 3.5 0 0 1 3.2-1.8c3.3 0 3.9 2.2 3.9 5V20h-3v-5.6c0-1.3 0-2.9-1.8-2.9s-2.2 1.4-2.2 2.8V20h-3.1V9Z"/>',
    x: '<path d="M17.5 3H21l-7.6 8.7L22.3 21h-7l-5.5-6.6L4 21H.5l7.7-8.9L-.2 3H7l5 6 5.5-6ZM16.7 19h1.9L6 5H4l12.7 14Z" transform="translate(2 0) scale(.88 1)"/>',
    email: '<g fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></g>',
  };
  const icon = (name) => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths[name]}</svg>`;
  const socials = () => `<nav class="socials" aria-label="Social links">${Object.entries(site.socials).map(([id,url]) => `<a href="${e(url)}" aria-label="${{github:'GitHub',linkedin:'LinkedIn',x:'X',email:'Email'}[id]}" title="${{github:'GitHub',linkedin:'LinkedIn',x:'X',email:'Email'}[id]}">${icon(id)}</a>`).join('')}</nav>`;
  const nav = (page, prefix) => `<nav class="main-nav" aria-label="Main navigation">${[['index','About'],['blog','Blog'],['code','Code']].map(([id,label]) => `<a href="${prefix}${id}.html"${page===id?' aria-current="page"':page==='article'&&id==='blog'?' aria-current="location"':''}>${label}</a>`).join('')}</nav>`;
  function shell(page, content, title, route) {
    const prefix = page === 'article' ? '../' : './';
    return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="${e(site.description)}">
  <link rel="canonical" href="${e(site.url)}/${route==='index.html'?'':route}">
  <title>${e(title)}${page==='index'?'':` — ${e(site.name)}`}</title>
  <link rel="stylesheet" href="${prefix}css/styles.css">
  ${page==='article'?'<script type="module" src="../js/post-age.js"></script>':''}
  ${page==='index'?'<script src="./js/legacy-links.js" defer></script>':''}
</head>
<body class="theme-afterhours page-${page}">
  <a class="skip-link" href="#content">Skip to content</a>
  <div class="site-shell">
    <header class="site-header"><a class="brand" href="${prefix}index.html">${e(site.name)}<span class="brand-dot"> ~</span></a>${nav(page,prefix)}${socials()}</header>
    <main id="content">${content}</main>
    <footer class="site-footer"><span>${e(site.name)}</span><span>${e(site.footer)}</span></footer>
  </div>
</body>
</html>`;
  }
  const postRows = () => `<div class="post-list">${posts.map(p=>`<a class="post-row" href="./blog/${p.slug}.html"><div class="post-summary"><h3>${e(p.title)}</h3>${p.summary?`<p>${e(p.summary)}</p>`:''}</div><time datetime="${p.date}">${p.dateLabel}</time><span class="row-arrow" aria-hidden="true">↗</span></a>`).join('')}</div>`;
  const projectRows = () => `<div class="project-list">${projects.map(p=>`<a class="project" href="${e(p.url)}"><div class="project-heading"><h3>${e(p.name)}</h3><span aria-hidden="true">↗</span></div><p>${e(p.description)}</p>${p.language?`<span class="project-language">${e(p.language)}</span>`:''}</a>`).join('')}</div>`;
  const sectionHead = (label, number, link, linkText) => `<div class="section-heading"><h2><span>${number}</span>${e(label)}</h2><a href="${link}">${linkText} <span aria-hidden="true">↗</span></a></div>`;
  const hero = `<section class="hero"><div class="hero-copy"><p class="eyebrow">${e(site.homeLabel)}</p><h1>${site.headline.map(e).join('<br>')}</h1><p class="intro">${e(site.intro)}</p>${socials()}</div></section>`;
  const home = `${hero}<div class="home-content"><section class="writing-section">${sectionHead('From the blog','01','./blog.html','All posts')}${postRows()}</section><section class="code-section">${sectionHead(site.codeTitle,'02','./code.html','All projects')}${projectRows()}</section></div>`;
  await write('index.html',shell('index',home,site.name,'index.html'));
  const years = posts.map(p=>Number(p.date.slice(0,4)));
  const first = Math.min(...years), last = Math.max(...years);
  const range = years.length ? ` / ${first===last?first:`${first} - ${last}`}` : '';
  await write('blog.html',shell('blog',`<header class="collection-header"><p class="eyebrow">Archive${range}</p><h1>${e(site.blogTitle)}</h1><p class="intro">${e(site.blogIntro)}</p></header>${postRows()}`,site.blogTitle,'blog.html'));
  await write('code.html',shell('code',`<header class="collection-header"><p class="eyebrow">${e(site.codeLabel)}</p><h1>${e(site.codeTitle)}</h1><p class="intro">${e(site.codeIntro)}</p></header>${projectRows()}`,site.codeTitle,'code.html'));
  for (const p of posts) {
    const age = postAgeYears(p.date);
    const ageNote = `<aside class="post-age-note" data-post-date="${p.date}" aria-label="Post age"${age===null?' hidden':''}><p><strong data-post-age>${age===null?'':postAgeText(age)}</strong> ${e(site.ageNote)}</p></aside>`;
    const article = `<article class="article"><header class="article-header"><a class="back-link" href="../blog.html">← Back to writing</a><p class="eyebrow">${e(p.topic||'Notes')} <span> / </span><time datetime="${p.date}">${p.dateLabel}</time></p><h1>${e(p.title)}</h1>${ageNote}</header><div class="prose">${p.html}</div><div class="article-end"><span>Thanks for reading.</span><a href="../blog.html">More from the blog ↗</a></div></article>`;
    await write(`blog/${p.slug}.html`,shell('article',article,p.title,`blog/${p.slug}.html`));
  }
  const routes = {'/':'index.html','/blog':'blog.html','/code':'code.html','/bio':'index.html','/clients':'index.html'};
  for(const p of posts) routes[`/blogpost/${p.slug}`] = `blog/${p.slug}.html`;
  await write('js/legacy-links.js', `(() => {
  const routes = ${JSON.stringify(routes)};
  function redirect() {
    if (!location.hash.startsWith('#/')) return;
    let route;
    try { route = decodeURIComponent(location.hash.slice(1)).split('?')[0].replace(/\\/$/, '') || '/'; } catch { return; }
    const destination = Object.hasOwn(routes, route) ? routes[route] : 'blog.html';
    location.replace(new URL(destination + location.search, location.href));
  }
  redirect();
  window.addEventListener('hashchange', redirect);
})();\n`);
  const redirect = (target) => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=${target}"><title>Page moved</title></head><body><p>This page has moved. <a href="${target}">Continue</a>.</p></body></html>`;
  for(const [route,target] of Object.entries(routes)) {
    if(route==='/') continue;
    await write(`${route.slice(1)}/index.html`,redirect('../'.repeat(route.split('/').length-1)+target));
  }
  await write('essays.html',redirect('./blog.html'));
  await write('404.html',`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>Page not found</title><style>body{max-width:40em;margin:12vh auto;padding:0 2rem;background:#191b1e;color:#e9e9e7;font:1.1rem/1.7 system-ui}a{color:#b9afdb}</style></head><body><h1>Page not found</h1><p>That address doesn’t match a page on this site.</p><a href="${e(site.url)}/">Return home</a></body></html>`);
  console.log(`Built After Hours: ${posts.length} posts, ${projects.length} projects, and legacy redirects.`);
}
