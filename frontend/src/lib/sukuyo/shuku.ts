/**
 * The 27 宿 of 宿曜占星術.
 *
 * Built from `NAKSHATRAS` (lib/jyotish/nakshatra-data.ts), which already
 * pairs every nakshatra with its 宿 — the same 27 lunar mansions that came
 * to Japan through China (牛宿 is the one left out of the 28-mansion list).
 * Keeping one source means the 宿 the /tools/sukuyo calculator reports and
 * the 宿 these pages describe can never drift apart.
 *
 * `index` follows the nakshatra cycle (婁宿 = Ashwini = 0); relations only
 * depend on distance around the cycle, so where it starts does not matter.
 * Slugs are the nakshatra slugs (/sukuyo/ashwini): unique, already used
 * across the site — several 宿 share a romanised reading (井宿 and 星宿
 * are both せいしゅく; 参宿, 心宿 and 軫宿 are all しんしゅく).
 */
import { NAKSHATRAS } from "@/lib/jyotish/nakshatra-data";

export interface Shuku {
  /** 0–26 around the cycle; 婁宿 (Ashwini) = 0. */
  index: number;
  /** e.g. 婁宿 */
  kanji: string;
  /** e.g. ろうしゅく */
  reading: string;
  /** URL slug, e.g. "ashwini". */
  slug: string;
  /** Engine nakshatra name, e.g. "Ashwini". */
  nakshatra: string;
}

export const SHUKU_COUNT = 27;

const slugify = (name: string) => name.trim().toLowerCase().replace(/\s+/g, "-");

export const SHUKUS: readonly Shuku[] = NAKSHATRAS.map((n, index) => ({
  index,
  kanji: n.sukuyo,
  reading: n.sukuyoReading,
  slug: slugify(n.name),
  nakshatra: n.name,
}));

/**
 * The order 宿曜 tables are usually printed in, beginning with 昴宿 (as in
 * the 宿曜経) — for lists and pickers. Same cycle, different starting point.
 */
export const SHUKU_DISPLAY_ORDER: readonly Shuku[] = (() => {
  const start = SHUKUS.findIndex((s) => s.kanji === "昴宿");
  return SHUKUS.map((_, i) => SHUKUS[(start + i) % SHUKU_COUNT]);
})();

const bySlug = new Map(SHUKUS.map((s) => [s.slug, s]));
const byKanji = new Map(SHUKUS.map((s) => [s.kanji, s]));
const byNakshatra = new Map(SHUKUS.map((s) => [s.nakshatra, s]));

export const shukuBySlug = (slug: string) => bySlug.get(slug) ?? null;
export const shukuByKanji = (kanji: string) => byKanji.get(kanji) ?? null;
export const shukuByNakshatra = (name: string) => byNakshatra.get(name) ?? null;
export const shukuByIndex = (index: number) => SHUKUS[((index % SHUKU_COUNT) + SHUKU_COUNT) % SHUKU_COUNT];

/** The 宿 the Moon is in at a sidereal longitude (degrees). */
export function shukuAtLongitude(siderealLongitude: number): Shuku {
  const lon = ((siderealLongitude % 360) + 360) % 360;
  return shukuByIndex(Math.floor(lon / (360 / SHUKU_COUNT)));
}

export const shukuHref = (s: Shuku) => `/sukuyo/${s.slug}`;
export const pairHref = (a: Shuku, b: Shuku) => `/sukuyo/${a.slug}/${b.slug}`;
