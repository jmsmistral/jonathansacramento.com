# Jonathan Sacramento

A small static website using the After Hours design. Posts are Markdown; a Node.js build converts them to HTML and highlights code. Visitors do not need React, a server, or external fonts. A small script refreshes post ages; another forwards old React links.

## Build and preview

Use **Node.js 22 or later**:

```sh
npm ci
npm test
npm run build
npm run check
npm run preview
```

Open <http://127.0.0.1:4173>. Stop with **Ctrl+C**. After editing, run `npm run build` and refresh the browser. `npm run check` checks generated local links and assets.

## Change the site

| What to change | File |
| --- | --- |
| Homepage heading, introduction, labels, footer, social links | `src/site.json` |
| Colours, fonts, spacing, mobile layout | `src/css/styles.css` |
| HTML layout and smaller navigation labels | `scripts/render.mjs` |
| Code projects and their GitHub links | `src/projects.json` |
| Post titles, summaries, and topics (optional) | `src/posts.json` |
| Article images | `src/img/` |

The `headline` array in `site.json` puts each entry on its own line. Keep JSON valid: quote strings and separate entries with commas.

## Write a blog post

1. Add a Markdown file under `src/posts/`, named **`YYYYMMDD-Title-with-dashes.md`**. For example, `20260917-Understanding-systems.md` becomes `/blog/understanding-systems.html`, dated 17 September 2026. Use letters, numbers, and single dashes in the filename; keep it stable after publication.
2. Start with the article text, without a title heading or front matter; the build adds the title and date. Use `##` for section headings, normal Markdown links/lists, and fenced code with a language, such as:

   ````markdown
   ## A small example

   ```sql
   select * from events;
   ```

   ![A diagram of the pipeline](/img/pipeline.png)
   ````

3. Put referenced images in `src/img/`. Always write descriptive image alt text.
4. Optionally add an entry to `src/posts.json`, keyed by the lowercase filename title (without the date or `.md`):

   ```json
   "understanding-systems": {
     "title": "Understanding systems",
     "summary": "A short description for the blog list.",
     "topic": "Data engineering"
   }
   ```

5. Build and check locally, then commit the source files and open a pull request.

Posts appear newest first. Archive years come from post dates. Posts at least one year old get the highlighted age note; it is generated at build time and refreshed when opened. `src/image-descriptions.json` supplies descriptions for legacy images only.

## What the build creates

Every build replaces **`dist/`** with the files ready for GitHub Pages:

```text
dist/
  index.html, blog.html, code.html, 404.html
  blog/<post-slug>.html
  css/styles.css, fonts/, img/
  js/post-age.js, js/legacy-links.js
  CNAME, .nojekyll
  blog/index.html, code/index.html, bio/index.html, clients/index.html
  blogpost/<post-slug>/index.html, essays.html
```

The final two lines are redirects for old URLs. Old `/#/blogpost/...` links also work. `dist/` and `node_modules/` are ignored by Git; commit the source and `package-lock.json`, not generated output.

## CI and publishing

The workflow is `.github/workflows/pages.yml`:

| Event | What happens |
| --- | --- |
| PR opened or updated targeting `master` | Install locked dependencies, run tests, build `dist/`, and check links. No deployment or public PR preview. |
| Merge or direct push to `master` | Same checks, then package `dist/` as the **`github-pages`** Actions artifact and deploy it. |
| Manual run from Actions | Same checks; deploys only when the selected branch is `master`. |

The files are created on the GitHub runner. CI does **not** commit them or update a `gh-pages` branch. PR build files disappear with the runner; successful production runs upload the artifact that Pages serves. Failed tests/builds/checks prevent deployment. Branch protection can require the `build` check before merging. If the default branch changes, update both branch triggers and the `refs/heads/master` conditions in the workflow.

## Configure GitHub Pages

This is the production repository, **`jmsmistral/jonathansacramento.com`**. The static site has replaced the React source locally; the earlier version remains in Git history.

1. Commit the migrated source and workflow, and push them on a branch for review. Preserve the existing `gh-pages` branch for rollback. Configure Pages as below before merging to `master`, which triggers deployment.
2. In **Settings → Pages → Build and deployment → Source**, choose **GitHub Actions** (not “Deploy from a branch”).
3. Keep **Custom domain: `jonathansacramento.com`** and **Enforce HTTPS**. Confirm the DNS check passes. Existing correct GitHub Pages DNS records can stay; `CNAME` alone does not configure the domain when using Actions.
4. In **Settings → Environments → github-pages**, ensure deployment rules allow `master`. Allow GitHub Actions in the repository if it is disabled. The workflow uses the automatic GitHub token; no personal access token is needed.
5. Merge to `master`, or run **Actions → Build and publish site → Run workflow** on `master`. Once `deploy` succeeds, check the domain and a direct article URL.

For rollback, switch Pages back to the preserved `gh-pages` branch at `/ (root)`. Do not run the old React deployment command after cutover.

Official references: [Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages) · [Custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).
