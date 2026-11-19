# Product

<!-- impeccable:product-schema 1 -->

> Written by `impeccable init` during the design-upgrade branch, **without an interview** — the owner asked for an autonomous run. Facts come from the repo (`description.txt`, `LAUNCH_PLAN.md`, `PRIORITY.md`, the code) and the redesign brief. Lines marked *(inferred)* should be confirmed.

## Platform

web

## Users

Japanese adults, roughly 30–70, curious about astrology but wary of "mystical", flashy or fortune-telling presentation (`description.txt`). Most arrive by search on a phone *(inferred from the SEO plan and Japanese mobile usage)*. Secondary audiences: English, Hindi and Korean readers of the same site.

Their first job: see what their own birth chart says, quickly, without signing up. Later jobs: understand a term (nakshatra, dasha), check a specific question (compatibility, timing), and — for some — request a personal reading.

## Product Purpose

Jyotish Life brings Vedic astrology (ジョーティッシュ) to Japanese readers in a form that is authentic, clear and usable: a free birth chart and 17 free tools that all work from one entry of birth details, a 35-article library plus 48 reference pages (27 nakshatras, 12 rashis, 9 grahas), a 25-chapter course, and paid personal readings by a practising Vedic astrologer.

Success: a first-time visitor sees something true about their own sky within seconds, keeps going (tools, reading), and a fraction book a reading.

## Positioning

- Enter birth details once; every tool answers for that person ("enter once, use everywhere").
- Sidereal (Lahiri) Jyotish explained in plain Japanese, with an explicit bridge to Japan's own 宿曜 (Sukuyō), which descends from the same 27 lunar mansions.
- Readings by a named practitioner, not generated text *(credentials as published on /about; see PRIORITY.md deviation 10)*.

## Operating Context

- Chart maths runs on a FastAPI + Swiss Ephemeris backend on Render's free tier, which can cold-start for 30–60 s. The homepage shows a client-side preview (`lib/sky/quick-sky.ts`) so nobody waits on it to see a first result.
- Auth: Clerk. Data: Prisma/Neon. Hosting: Vercel. Analytics: Vercel Analytics + GA4.
- Japanese is served at the root; `/en`, `/hi`, `/ko` are prefixed.

## Capabilities and Constraints

- All four locales for every new string (`npm run i18n:audit` must pass).
- Static generation for content routes (~566 pages); never wrap public pages in Clerk's `<SignedIn>/<SignedOut>`.
- **消費者契約法:** no fear framing, urgency, guaranteed outcomes or "your difficulty is your fault" copy; astrology is presented as a way to read timing, not a remedy that is sold.
- **景品表示法:** testimonials and trust badges stay empty until genuine, attributed entries exist.
- Legal pages are drafts pending 行政書士 review (noindex).

## Brand Commitments

- Name: Jyotish Life / ジョーティッシュ・ライフ. Instagram: @jyotishlife.jp.
- Calm, premium, editorial register — "a well-typeset book about Indian philosophy, not a fortune-telling app" (`description.txt`).
- Warm paper ground, never pure white (`description.txt` global rule).

## Evidence on Hand

- Real content: articles, entity data and imagery under `frontend/src/lib/education`, tool copy under `frontend/src/lib/tools`.
- Photography: `frontend/public/assets/new/` (banner, hermitage illustration).
- No testimonials, reviews, press or usage numbers exist — do not invent any.

## Product Principles

1. Value before ask: show something true about the visitor's own sky before asking for anything.
2. One entry, every tool.
3. Plain language, calm register, no pressure.
4. Content stays crawlable: progressive disclosure folds text, it never removes it from the HTML.
5. Phone first for reading and doing; desktop uses its width to show things side by side.

## Accessibility & Inclusion

WCAG 2.2 AA. Large tap targets (44 px) on phones. Every animation has a `prefers-reduced-motion` path. Japanese line breaking (`word-break: auto-phrase`), no synthetic italics on CJK or Devanagari.
