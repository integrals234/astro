# Design — 静 (shizuka)

The visual system shipped on the `design-upgrade` branch. Tokens live in `frontend/src/app/globals.css` (Tailwind v4, CSS-first; there is no `tailwind.config`).

## Visual world — 星図 (the star atlas) · design-magic

Replaces the earlier calm-paper-only look for the two persuade surfaces (home, /chart) and re-accents the rest of the site. Light and dark are both first-class and sitewide (the theme toggle); no surface forces a theme.

- **Grounds.** Light — a printed orrery: warm paper `#f5f1e8`, sumi ink. Dark — deep space: near-black `#06070b`, ivory type `#f2ead7`, muted `#a8a190`.
- **Accents.** Brass is the one action colour (`--color-terracotta`: `#7d5d1b` light, `#dcb86c` dark). Night indigo / starlight is the sky colour (`--color-moss`). Gold (`#b8955a`) is engraved hairline only. No third hue.
- **Home = a scroll journey over a real 3D sky.** `components/cosmos/scene.ts` (Three.js) draws the solar system with every planet at its calculated position (JPL Keplerian elements, `lib/sky/orbits.ts`), distances compressed. Scroll is the camera's timeline (GSAP ScrollTrigger, `components/home/Journey.tsx`): hero → solar system → the view from Earth (zodiac band appears around it) → 12 rashis → 27 nakshatras → the nine grahas on the band (Rahu/Ketu as shadow discs) → the sky right now. Typing a birth date in the hero time-lapses the system to that moment (`lib/cosmos/bus.ts`). Desktop scrolls with Lenis and settles on the nearest chapter; phones scroll natively. Planet surfaces, rings and labels are painted on canvas in the browser — no image assets.
- **Budget.** The first frame is a CSS poster (`.cosmos-poster`); Three.js loads when the page is idle on desktop and at the first touch/scroll on phones; it renders only while visible; textures are painted in short slices; reduced motion holds everything still except what scrolling moves. Every chapter is server-rendered HTML; the 3D is illustration (`aria-hidden`).
- **Chart workspace = cards.** A cover card (person, birth moment, ascendant degree, timezone, sunrise/sunset, every action; Edit opens the form inside it), four summary seals, a sticky chip bar of sections, and a bento grid of `SectionCard`s (D1 beside D9, three drawings in a row, tables full width, dasha beside yogas). No ornament behind the charts.
- **Type.** Unchanged families per locale (Shippori Mincho / Lora / Noto Serif KR / Martel display); numerals tabular in data.
- **Daily hook.** The journey's last chapter (`TonightFacts.tsx`) — the Moon's nakshatra, phase, tithi and the Sun's rashi right now, computed client-side.

## Direction

Extremely minimal, calm, airy, contemplative. Low visual density, generous space, one idea per screen. The world is **the sky drawn as geometry on paper**: a sidereal ring of 12 signs and 27 nakshatras, a kundli drawn in hairlines, and nothing ornamental around them.

## Colour (two accents, maximum)

| Role | Token (historical name) | Light | Dark |
|---|---|---|---|
| Ground (paper) | `--color-washi` | `#f6f3ed` | `#111318` |
| Raised surface | `--color-washi-elevated` | `#fbfaf7` | `#171a21` |
| Ink | `--color-ink` / `--color-text` | `#1d1c1a` / `#2b2a27` | `#ece8e0` / `#dcd8cf` |
| Muted text | `--color-text-muted` | `#66635b` (≥4.5:1) | `#9d9a92` |
| Accent 1 — 藍 indigo: sky, charts, links, focus, selection | `--color-moss` | `#3b4a6b` | `#a3b3d6` |
| Accent 2 — 朱 vermilion: the primary action, and the Moon marker ("you") | `--color-terracotta` | `#b4532a` | `#e38c62` |
| Hairlines | `--color-border`, `--color-gold` (now an indigo-grey) | `#e2ddd2` | `#2a2f3a` |

Token names are kept from the old washi system so existing call sites re-theme without edits. Do not introduce a third accent.

## Type — one strong idea

One large Shippori Mincho line per screen (`.ma-display`, `.ma-title`); everything around it is quiet Noto Sans JP at 400.

- ja: Shippori Mincho 500/600 (display) · Noto Sans JP 400 (body) · Lora (chart numerals)
- en: Lora (display) · Noto Sans JP (body)
- ko: Noto Serif KR · Noto Sans KR 400
- hi: Martel · Hind
- Body line-height 1.8; `word-break: auto-phrase` for Japanese; `palt`; no synthetic italic on CJK/Devanagari; `overflow-wrap: anywhere` on display headings only.

## Components

- Buttons: pill, flat, `scale(0.97)` on press; primary = vermilion, secondary = ink outline, tertiary = underlined indigo link.
- Cards: 14 px radius, one border, no shadow; linked cards lift 2 px on hover.
- No eyebrow kickers, no side-stripe callouts, no grain, no gradient text, no glyph dividers.
- Disclosure: `<details class="disclose">` (accordion on phones; add `disclose-desktop-open` to show it open on desktop). Content is always in the HTML.
- Sheet (`components/ui/Sheet.tsx`): bottom sheet on phones (drag handle, fling to dismiss), right-side panel on desktop; focus trap, Escape, scroll lock.
- Snap rail (`.snap-rail`): horizontal swipe lists on phones.

## Layout by device

- Phone (<768) and tablet (768–1023) on public pages: compact header, bottom tab bar (Home / Chart / Tools / Learn / Reading), phone sticky CTA above it, one column, swipe rails, accordions, sheets.
- Desktop (≥1024): sticky header, split screens (form ↔ sky ring, chart ↔ readings, figure ↔ facts), sticky side contents on tool, article and entity pages, bento tool grid with hover previews.

## Motion

GSAP owns the three signature moments; Motion (`motion/react`) owns UI. Never both on one element.

1. Hero: headline phrases rise in (GSAP stagger) while the sky ring draws itself and sways ±4° (26 s).
2. Birth chart: the kundli traces itself line by line (DrawSVG), then houses settle.
3. Learn: on desktop a held wheel is scrubbed by scroll from 12 signs → 27 nakshatras → 9 grahas (ScrollTrigger); simplified on phones.

UI motion: transform/opacity, under 300 ms (sheets 300 ms on the drawer curve, exits faster), `ease-out: cubic-bezier(0.23, 1, 0.32, 1)`. Content painted by the server is never hidden for an entrance. Everything has a `prefers-reduced-motion` path.

## Deliberate exceptions

- The impeccable detector flags the warm paper ground as a "cream palette" tell. It is a written brand commitment (`description.txt`: every page background is washi, never pure white) and stays.
