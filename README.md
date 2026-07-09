# Justin Kang — Personal Portfolio

Terminal/systems personal portfolio built with **React + TypeScript + Vite**: near-black scroll-spy sidebar, off-white grid-lined hero, JetBrains Mono details, dark-teal accent, window-chrome project previews. Implemented from the design handoff `design_handoff_portfolio 2/Portfolio Redesign.dc.html`.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to dist/
```

## Editing content

All copy lives in `src/data/` — no component changes needed:

| File | Contents |
| --- | --- |
| `src/data/site.ts` | Name, wordmark, tagline, hero copy, email, links, Proof of Work rows |
| `src/data/projects.ts` | Project rows — empty for now; the homepage shows a "coming soon" state until real projects are added |
| `src/data/skills.ts` | Skill groups (Frontend, Backend / Data, Tools, Exploring) |
| `src/data/experience.ts` | "Experience & Involvement" — section and nav link stay hidden until real roles are added |
| `src/data/now.ts` | Now bar: learning / building / improving / looking for |

Honesty rules baked in: the Proof of Work card shows an em dash until real
counts are set, the Projects section shows an empty state instead of fake
cards, and Experience & Involvement renders nothing without verified entries.

## Assets to supply

- **Resume:** drop `resume.pdf` into `public/` (sidebar Resume link + hero button point at it).
- **Project thumbnails:** 88×64 — use `thumb: { kind: 'image', image: '/path.png' }`
  per project, or keep the glyph tiles.

## Design tokens

Defined as CSS variables at the top of `src/styles.css` (page `#F3F2E9`, ink
`#1A1A15`, accent `#A9B86A`, sidebar gradient `#201F1B → #17160F`, etc.).
Scroll-reveal motion lives in `src/hooks/useRevealAll.ts`.

## Deploy

Static site — deploys anywhere:

- **Vercel / Netlify:** import the repo; framework preset "Vite", build `npm run build`, output `dist`.
- **GitHub Pages:** set `base` in `vite.config.ts` to `'/<repo-name>/'`, build, and publish `dist`.
