# Justin Kang — Portfolio

Terminal-inspired personal portfolio for applied AI, data products, software systems, and selected writing.

**Live site:** https://justin-kang.vercel.app  
**Stack:** React 19 · TypeScript · Vite · CSS · Oxlint

## Overview

This portfolio is built around a systems/terminal visual language: a near-black sidebar, off-white grid background, monospaced labels, muted teal accents, and custom browser/CAD-style project previews.

The site highlights:

- **BuzzBuddy** — agentic iOS impairment-detection app, 3rd place at an MLH × DigitalOcean hackathon.
- **BlastRadius** — agentic code-risk analyst combining real call-graph traversal with an LLM explainer.
- **UrbanPilot** — multi-agent urban planning scenario dashboard using public datasets.
- **Flux (BarelyAtWork)** — voice-to-workflow automation system for Meta Ray-Ban glasses.
- **Skyline Transport** — CADathon-winning overhead gantry/cart system for cleanroom material handling.
- **Exoplanet Transit** — Kepler photometry pipeline that detects and characterizes a real transit signal.
- **Research & Essays** — separate writing archive for selected papers, essays, and analytical writing.

## Tech stack

- **Framework:** React 19 + Vite
- **Language:** TypeScript
- **Styling:** CSS custom properties, responsive grid/flex layouts
- **Linting:** Oxlint
- **Deployment:** Vercel-ready static build

## Local development

```bash
npm install
npm run dev        # start local dev server at http://localhost:5173
npm run lint       # run oxlint
npm run build      # type-check + production build to dist/
npm run preview    # preview the production build locally
```

## Project structure

```txt
.
├── public/                 # static assets, resume, writing PDFs, project writeups
├── src/
│   ├── components/         # reusable UI sections and project/case-study views
│   ├── data/               # editable portfolio content
│   ├── hooks/              # reveal/scroll behavior
│   ├── App.tsx             # app routes and page composition
│   ├── main.tsx            # React entry point
│   └── styles.css          # global styles and design tokens
├── index.html
├── package.json
├── vite.config.ts
└── vercel.json
```

## Editing content

Most portfolio copy lives in `src/data/`, so updates usually do not require component changes.

| File | Purpose |
| --- | --- |
| `src/data/site.ts` | Name, hero copy, status tags, email, resume, GitHub, and LinkedIn links |
| `src/data/projects.ts` | Homepage project cards, tags, descriptions, preview type, links, and case-study routes |
| `src/data/caseStudies.ts` | Full case-study content for all six projects |
| `src/data/writing.ts` | Research & Essays archive entries, featured writing, and writing page copy |
| `src/data/experience.ts` | Experience and involvement entries |
| `src/data/skills.ts` | Skill groups and tools |
| `src/data/now.ts` | Current focus / Now section content |

## Adding a project

Add a new object to `src/data/projects.ts`:

```ts
{
  index: '[ 004 ] · aug_2026',
  title: 'Project Name',
  tags: ['Tag 1', 'Tag 2'],
  desc: 'One-sentence project description.',
  proof: 'Short proof point or technical detail.',
  windowTitle: 'project_name — preview',
  preview: { kind: 'mock', mock: 'urbanpilot' },
  links: [{ label: 'Code ↗', href: 'https://github.com/...' }],
  caseStudy: '/projects/project-name',
}
```

Use `preview: { kind: 'image', src: '/path.png' }` for a real asset, or `preview: { kind: 'mock', mock: 'flux' | 'skyline' | 'urbanpilot' }` for one of the handcrafted UI previews.

## Adding writing

Add finished writing entries to `src/data/writing.ts` and place the final PDF or article asset in `public/writing/`.

Each writing item supports:

- title
- date
- category
- type
- summary
- takeaway
- tags
- CTA label
- link path

## Assets

Expected static assets:

- `public/resume.pdf` — linked from the hero résumé link
- `public/skyline-transport-writeup.pdf`, `public/exoplanet-transit-writeup.pdf` — project writeups
- `public/writing/*.pdf` — writing archive PDFs/articles
- `public/og-image.png` — social-preview image (og:image / twitter:image)
- `public/projects/buzzbuddy-*.jpg` — real device screenshots used in the BuzzBuddy preview

## Design notes

Core styling is defined in `src/styles.css` using CSS variables. The current design direction uses:

- warm off-white page background
- dark charcoal text
- near-black terminal/sidebar surfaces
- muted teal accent color
- thin technical borders
- monospaced labels and UI details
- custom project mockups instead of low-resolution screenshots

## Deployment

Deployed on Vercel with the Vite defaults:

```txt
Build command: npm run build
Output directory: dist
```

`npm run build` runs three stages in order: `tsc -b` (typecheck), `vite build`
(bundle), then `vite-node scripts/prerender.tsx`, which writes a real,
fully-rendered `index.html` for every route in `src/seo.ts`'s `ALL_ROUTES`
(home, `/writing`, and every project's case-study page) with correct
per-route `<title>`/description/OG tags baked in. `vercel.json` only
normalizes URL shape (`cleanUrls`, no trailing slash) — no rewrite rule is
needed, since every route is already a real static file after prerendering.

Every route assumes it's served from the domain root. Deploying under a
subpath (e.g. GitHub Pages project pages) would require reworking the
root-relative paths throughout `src/seo.ts`, `index.html`, and the router in
`src/App.tsx` — not just a Vite `base` config change.
