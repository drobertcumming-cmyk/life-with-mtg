# Life with MTG

The blog of Marjorie Taylor Greene — a fast, static, content-driven site built
with [Astro](https://astro.build). Navy / crimson / cream flag palette, editorial
serif (Newsreader) paired with an American grotesque (Libre Franklin).

Implemented from the Claude Design handoff bundle (see **`project/`** for the
original HTML/CSS prototypes and **`chats/`** for the design conversation).

## Pages

| Route | Page |
| --- | --- |
| `/` | Homepage — split hero, recent posts with category filter, sidebar |
| `/about-me/` | About Me — narrative + signature |
| `/categories/` | Categories overview with live search |
| `/category/[slug]/` | Single category — featured + grid + search (6 pages) |
| `/posts/[slug]/` | Article — share rail, feature image, pull-quote, related (21 pages) |
| `/media/` | Media & press resources |
| `/subscribe/` | Newsletter signup |
| `/contact/` | Contact form |

All content lives in **`src/data/blog.js`** (21 posts, 6 categories). Add a post
there and its article page, category listing, homepage row, and related-post
links are generated automatically.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview  # serve the built site
```

## Deploy (GitHub Pages)

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push
to `main` (and to `implement-mtg-site` while in review). **One-time setup:** in the
repo, go to **Settings → Pages → Source → "GitHub Actions"**. The workflow then
publishes to `https://<owner>.github.io/<repo>/`.

`astro.config.mjs` derives the base path automatically from `GITHUB_REPOSITORY`,
so links and assets are correct whether the site is served at the domain root or
under a `/<repo>/` project path. Override with the `SITE_URL` / `BASE_PATH` env
vars (e.g. when you point a custom domain at it).

## Deploy (Netlify / Vercel — no setup)

Prefer a one-click host? Both are pre-configured and serve at the site root:

- **Netlify** — `netlify.toml` sets build = `npm run build`, publish = `dist`.
  Connect the repo in the Netlify dashboard, or run `npm run build` and drag the
  `dist/` folder onto Netlify's "deploy manually" drop zone.
- **Vercel** — `vercel.json` declares the Astro framework preset. Import the repo
  in Vercel (or `vercel` from the CLI); zero further config.

## Notes / not yet wired

The forms (Subscribe, Contact, footer signups) and the header search box are
**visual only** — matching the approved prototypes. Wire them to an email provider
/ form handler when one is chosen. Media page facts, press email, social handles,
and the media thumbnails are placeholders for her team to supply.
