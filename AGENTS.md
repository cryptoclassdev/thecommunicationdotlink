# AGENTS.md

This file provides guidance to Claude Code (claude.ai/code) and Cursor IDE (https://cursor.com) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (Next.js)
pnpm build        # Production build (TS errors ignored via next.config.mjs)
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

Package manager: **pnpm**

## Architecture

Next.js 16 App Router site for a crypto communications agency ("thecommunication.link"). Deployed on Vercel, originally scaffolded with v0.app.

### Routing

All pages live under `app/` using the App Router convention. Most page components are client components (`"use client"`). Key routes:

- `/` - Landing page (hero, services, work showcase, brand marquee)
- `/projects/{metadao,meteora,zcash}` - Individual project case studies
- `/team` - Team member showcase
- `/privacy`, `/terms` - Legal pages

### Component Patterns

- **Page sections** (`components/hero.tsx`, `services.tsx`, `work.tsx`, etc.) compose the landing page
- **UI primitives** (`components/ui/`) are shadcn/ui style (New York variant) plus custom components (video-player, marquee, iphone-mockup, safari-mockup)
- **Animations** use Framer Motion with viewport-triggered patterns (`whileInView`, `viewport={{ once: true }}`, staggered delays)
- **Class merging** via `cn()` from `lib/utils.ts` (clsx + tailwind-merge)

### Styling

Tailwind CSS v4 with OKLCH color system defined in `app/globals.css` as CSS custom properties. Light/dark theme support via `next-themes`. Project-specific brand colors are applied inline per project page.

### Media

Videos and images are hosted on **Vercel Blob** (`lixp9d63v9mlfewl.public.blob.vercel-storage.com`). All asset URLs are centralized in `lib/assets.ts`. Videos use native HTML5 `<video>` with Intersection Observer for mobile play/pause. Images use `next/image` with `remotePatterns` configured for the Blob domain in `next.config.mjs`.

### External Integrations

- **Calendly** - Popup scheduling widget (script loaded in root layout, triggered from navbar CTA)
- **Vercel Analytics** - Usage tracking
- **Vercel Blob** - Media storage

### Data

No API routes or database. Content data is co-located as TypeScript arrays/objects within component files or in `data/` (e.g., `data/metadao-tweets.ts`). Tweet types are defined in `types/tweet.ts`.

### Path Aliases

`@/*` maps to project root (configured in `tsconfig.json`).
