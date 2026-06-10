# harsimar singh · start screen

My portfolio as a **Windows Phone / Lumia start screen** — black Metro canvas, live tiles
that flip to reveal taglines, duotone photo tiles, and WP8-style app pages.

**Live:** https://resume-bay-beta.vercel.app

## Sections

- **work** — KPMG (CPGRAMS AI chatbot), VAAR Lab (co-founder), Rapido, Zolostays
- **github** — featured projects, each tile opens a detail page
- **skills** — the toolbox

## Stack

React + TypeScript + Vite + Tailwind. No router, no animation libs — the live-tile
flips, Ken Burns pans, and page transitions are pure CSS.

```bash
npm install
npm run dev
```

All content lives in `src/projects.ts`; tile photos in `public/tiles/`.
