# KRISHNA KANT SRIVASTAVA — THE SERIES

A cinematic, streaming-inspired personal portfolio for **Krishna Kant Srivastava**: AI / ML Engineer and Creative Developer.
Every section is an episode, every project is an Original, and the whole site plays like a series.

> A personal portfolio with a fictional streaming-platform aesthetic built using React 18, TypeScript, Tailwind CSS v4, Framer Motion, and Lenis smooth scrolling.

## Run it locally

Requires **Node.js 18+**.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

Production build:

```bash
npm run build
npm run preview
```

The static site is written to `dist/` and can be deployed directly to Vercel, Netlify, GitHub Pages, or any static host.

## Content Management

**All content lives in one centralized file: [`src/data/portfolio.ts`](src/data/portfolio.ts).**

| To change… | Edit in `src/data/portfolio.ts` |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub | `profile` |
| Projects (including featured project SlopeSafe) | `projects` |
| Technical interests and milestones | `achievements` |
| Skills and evidence cross-references | `skillCategories`, `skillEvidence` |
| Seasons and episodes (My Journey) | `seasons` |
| Top 10 row | `topPicks` |
| Play Intro highlight reel | `introSlides` |
| Viewing profiles (Krishna / Recruiter / Developer / Creative) | `viewerProfiles` |
| Opening studio card text | `profile.originalLabel` |

## Architecture & Stack

```
src/
  data/portfolio.ts          ? Single source of truth for all data
  App.tsx                    ? Stages: opening ? profile select ? home; overlays
  components/
    OpeningSequence          ? Cinematic intro with letterbox, studio card & title reveal
    ProfileSelector          ? "Who's watching?" profile switcher (customizes section priority)
    Navbar                   ? Hide-on-scroll navigation, profile switcher, mobile drawer
    Hero                     ? Billboard: pointer parallax, particles, light streaks
    PlayIntro                ? Full-screen highlight reel (auto-timer, pause, arrow controls)
    ContinueWatching         ? Interactive cards with real scroll-progress tracking
    About                    ? The Pilot: summary cards, 3D tilt card
    Seasons / EpisodeCard    ? My Journey as seasons and episodes
    Originals / ProjectCard  ? Pinned horizontal showcase on desktop, swipe rail on touch
    ProjectModal             ? Full-screen project modal overlay with feature breakdowns
    TopPicks                 ? Top 10 streaming billboard row
    Skills                   ? Categorized skill genres with cross-reference evidence
    Achievements             ? Top milestones & certifications
    ResumeViewer/ResumeModal ? Resume preview sheet, PDF viewer, and download
    FinalCTA                 ? TO BE CONTINUED… + contact channels
    CustomCursor, fx.tsx     ? Morphing cursor, magnetic buttons, 3D tilt, canvas particles
  hooks/                     ? Lenis smooth scroll + scroll lock, media queries, watch progress
```

**Stack:** React 18, TypeScript, Vite 6, Tailwind CSS 4, Framer Motion 11, Lenis.

## Keyboard Shortcuts

- **Opening:** `Enter` or `Esc` skips it.
- **Play Intro:** `Space` pauses/resumes, `?` and `?` change slides, `Esc` closes.
- **Project and resume overlays:** `Esc` closes.
