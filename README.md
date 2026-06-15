# Bosses of Bangalore

A crowd-nominated tribute wall for Bengaluru's best bosses, named by the people they led. Visitors nominate a boss, browse category leaderboards, and watch a live "Top 100" ranking update in real time.

**Live site:** https://amazing-bosses-clone.vercel.app

---

## What it is

A fast, dependency-free static site. No framework, no build step, no backend. Every page is plain HTML + CSS + vanilla JS, styled with Tailwind via CDN. All the people data lives in a single `people.js` file.

## Tech stack

- HTML + CSS + vanilla JavaScript
- [Tailwind CSS](https://tailwindcss.com) via CDN (inline `tailwind.config` per page)
- Google Fonts: Lora, Inter, JetBrains Mono
- Hosted on [Vercel](https://vercel.com)

## Pages

| File | Page |
|------|------|
| `index.html` | Home: Enter splash, category carousel, live nomination counters, vouch feed, Apple Watch / results countdown |
| `leaderboard.html` | Live overall Top 100 ranking (auto-updating vouches, glowing top 5, real-time overtakes) |
| `awards.html` | Categories: poster cards + top-5 preview per category (Overall / CXO / Engineering / Product) |
| `board.html` | Per-category leaderboard pages (color-themed, reads `?cat=`) |
| `vouchwall.html` | Nomination Wall: the full vouch feed |
| `profile.html` | Individual boss profile (reads `?id=`) |
| `nominate.html` | Nomination form (auto-fills name from a LinkedIn link, anonymous option) |
| `thankyou.html` | Post-submission thank-you page |
| `aboutus.html` | About page |

## Project structure

```
.
├── index.html · leaderboard.html · awards.html · board.html
├── vouchwall.html · profile.html · nominate.html · thankyou.html · aboutus.html
├── people.js                 # the data source (all nominees)
├── sparks.js                 # shared floating-stars background effect
├── pfps/                     # 21 profile photos referenced by people.js
├── images/                   # shared image assets
├── *.png / *.jpg             # logo + category poster images
└── HANDOFF.txt               # detailed developer handoff notes
```

## Run locally

It's static files, so just serve the folder with any static server:

```bash
npx serve
# or
python -m http.server 8000
```

Then open the printed URL (e.g. `http://localhost:3000`). Open it **through the server**, not as a `file://` path, so `people.js` and relative assets load correctly. There is no install/build/watch step.

## Editing content

All nominees live in [`people.js`](people.js) as a single `PEOPLE` object:

```js
"slug-name": { name, sub, why, pfp, cat, votes }
```

`cat` is one of `founders-cxos`, `eng`, or `product`. Add or edit an entry and it flows through the leaderboard, categories, feed, and profile pages automatically. Likes, replies, and nominations are client-side only (stored in the browser) — there is no backend.

## Deploy

The site is deployed to Vercel. From the project folder:

```bash
vercel --prod --yes
```

Pushing to GitHub does not auto-deploy (the repo isn't linked to the Vercel project yet).

---

See [`HANDOFF.txt`](HANDOFF.txt) for full developer notes.
