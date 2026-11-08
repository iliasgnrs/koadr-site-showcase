# Koadr — marketing site

Multi-page marketing site for Koadr (koadr.dev). React + TypeScript + Vite + Tailwind CSS + React Router.

## Commands

```bash
npm install
npm run dev      # dev server
npm run build    # typecheck, build, then prerender every route to dist/
npm run preview  # serve the production build
npm run lint     # oxlint
npm run deploy   # build + deploy dist/ to Cloudflare Pages
```

`npm run build` runs [scripts/prerender.mjs](scripts/prerender.mjs), which loads each route in headless Chrome and writes real HTML (title, description, canonical, OG/Twitter tags, JSON-LD and page content) to `dist/<route>/index.html`. Crawlers and AI agents get per-route content without executing JavaScript. It needs a Chrome binary; override with `CHROME_PATH`.

## Editing content

All copy lives in [src/content/site.ts](src/content/site.ts). Points to complete before launch:

| Placeholder | Where |
| --- | --- |
| `HOSTED_APP_URL` (`https://app.koadr.dev`) | URLs block at the top |
| `GITHUB_URL` | URLs block at the top |
| `CONTACT_EMAIL` | URLs block at the top |
| Pro pricing (9.90€/mo, 99€/yr suggested) | `pricing.plans` |
| Refund + billing FAQ answers | `pricing.faq` |
| `[COMPANY NAME]`, `[DATE]`, `[CONTACT EMAIL]` | `privacy`, `terms` |

Self-host commands in `selfHost.steps` are generic and flagged to be verified against the repo README.

## Structure

- `src/pages/` — one file per route (non-home routes are lazy-loaded)
- `src/components/` — `Navbar`, `Footer`, `CTASection`, `SectionHeading`, `FeatureCard`, `CodeBlock`, `PricingCard`
- `src/lib/hooks.ts` — theme (system default + toggle) and per-route `<title>` / meta / canonical
- `src/index.css` — Tailwind v4 theme tokens and light/dark variables

## SEO and AI discovery

| File | Purpose |
| --- | --- |
| `index.html` head | Static OG/Twitter/canonical defaults and JSON-LD (`Organization`, `WebSite`, `SoftwareApplication` with offers) |
| `src/lib/hooks.ts` | Per-route title, description, canonical, OG/Twitter updates |
| `src/lib/schema.ts` | Per-route JSON-LD: `FAQPage` on pricing/providers, `BreadcrumbList`, `WebPage` |
| `public/llms.txt` | Machine-readable site summary for LLMs (H1 + links) |
| `public/.well-known/ard.json` | ARD manifest (Agentic Resource Discovery) |
| `public/.well-known/koadr-catalog.json` | Catalog artifact referenced by the ARD entry |
| `public/.well-known/koadr.txt` | Canonical quotable facts for answer engines |
| `public/sitemap.xml` | Published page list with `lastmod` |
| `public/robots.txt` | Crawl rules plus explicit allow for AI crawlers |
| `public/_redirects` | SPA fallback for deep links without a prerendered directory |

When adding a route: add it to `ROUTES` in [`scripts/prerender.mjs`](scripts/prerender.mjs), to `public/sitemap.xml`, and give the page a single `<h1>`. Routes are served with a trailing slash (`/pricing/`); canonicals point at the non-slash form.

## Brand assets

`brand/` holds the original assets; `public/brand/` holds the web copies, favicons are generated from `brand/favicon.webp`. The wordmark is dark-on-transparent, so `logo-invert` flips it in dark mode rather than redrawing it.
