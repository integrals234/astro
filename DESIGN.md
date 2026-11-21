# Design — 静 (shizuka)

The visual system shipped on the `design-upgrade` branch. Tokens live in `frontend/src/app/globals.css` (Tailwind v4, CSS-first; there is no `tailwind.config`).

## Visual world — 渾天儀 (the armillary sphere) · design-magic

Replaces the earlier calm-paper-only look for the two persuade surfaces (home, /chart) and re-accents the rest of the site.

- **Grounds.** Paper (light mode, reading pages): warm paper `#f5f1e8`, sumi ink. Night lacquer (dark mode, and always on the home page and chart workspace via `.night`): `#0b0f1e` ground, ivory type `#f2ead7`, muted `#aaa28d`.
- **Accents.** Brass is the one action colour (`--color-terracotta`: `#7d5d1b` on paper, `#dcb86c` at night). Night indigo / starlight is the sky colour (`--color-moss`). Gold (`#b8955a`) is engraved hairline only. No third hue.
- **Signature object.** `components/celestial/Armillary.tsx`: CSS-3D brass rings (meridian, colure, equator, horizon, zodiac band at 23.44°) around a plate; rings open from flat discs on load (the one authored entrance), turn slowly, lean toward a desktop pointer. Home hero (live sky ring as plate), /chart empty state and phone form emblem, chart result banner.
- **Sky.** `.night-sky` CSS gradient (first frame is already night) + `components/celestial/Starfield.tsx` (static layer drawn once, ≤48 twinkling stars at ~24 fps, rare meteor, compositor parallax; starts on idle, pauses off-screen, still under reduced motion).
- **Charts.** Every `ChartFigure` sits on an astrolabe: an engraved degree ring inscribed in the chart square, turning once per six minutes; on the night stage the grid is brass.
- **Interaction light.** `PointerLight.tsx`: night cards catch a brass light at the pointer (desktop only).
- **Type.** Unchanged families per locale (Shippori Mincho / Lora / Noto Serif KR / Martel display); numerals tabular in data.
- **Daily hook.** `TonightSky.tsx` — the Moon's nakshatra, phase, tithi and the Sun's rashi right now, computed client-side.

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
