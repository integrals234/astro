/**
 * Numerology — Mulank, Bhagyank, and an optional Chaldean name number.
 *
 * Deliberately adjacent to, not part of, the Vedic chart system: it needs
 * only a birth date (and optionally a Latin-script name), no ephemeris
 * computation at all. That makes it the one section on this site that
 * still renders when `/api/charts/compute` fails or hasn't run yet —
 * everything else here depends on a successful chart.
 */
export interface NatalDate {
  year: number;
  month: number;
  day: number;
}

/** Repeated digit-sum reduction to a single digit, 1-9. Vedic/Chaldean
 * numerology reduces all the way through — no master-number exception. */
function digitalRoot(n: number): number {
  let value = Math.abs(Math.trunc(n));
  while (value > 9) {
    value = String(value)
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }
  return value;
}

/** The planet classically associated with each root digit 1-9 (Chaldean
 * correspondence, the basis of Vedic numerology's planetary reading). */
const ROOT_PLANETS: Record<number, string> = {
  1: "Sun",
  2: "Moon",
  3: "Jupiter",
  4: "Rahu",
  5: "Mercury",
  6: "Venus",
  7: "Ketu",
  8: "Saturn",
  9: "Mars",
};

/** Chaldean letter values. No letter maps to 9 — the number is treated as
 * complete in itself and never assigned. */
const CHALDEAN_VALUES: Record<string, number> = {
  a: 1, i: 1, j: 1, q: 1, y: 1,
  b: 2, k: 2, r: 2,
  c: 3, g: 3, l: 3, s: 3,
  d: 4, m: 4, t: 4,
  e: 5, h: 5, n: 5, x: 5,
  u: 6, v: 6, w: 6,
  o: 7, z: 7,
  f: 8, p: 8,
};

/** A name computable under the Chaldean table without transliteration —
 * Latin letters, spaces, and a few punctuation marks only. A visitor
 * entering their name in kana or hangul gets no number rather than a
 * wrong one: pushing かな through a Latin letter-value table produces a
 * result that is wrong under every numerology system, not an
 * approximation of a real one. */
const LATIN_NAME_PATTERN = /^[A-Za-z\s'.-]+$/;

export function isChaldeanComputable(name: string): boolean {
  return LATIN_NAME_PATTERN.test(name.trim()) && name.trim().length > 0;
}

export interface NumerologyResult {
  /** Root number of the birth day alone. */
  mulank: number;
  mulankPlanet: string;
  /** Root number of the full date (day + month + year digits summed). */
  bhagyank: number;
  bhagyankPlanet: string;
  /** Only present when the name is Latin-script computable. */
  nameNumber: number | null;
  nameNumberPlanet: string | null;
}

export function computeMulank(birth: NatalDate): number {
  return digitalRoot(birth.day);
}

export function computeBhagyank(birth: NatalDate): number {
  const digits = `${birth.year}${birth.month}${birth.day}`.split("");
  const sum = digits.reduce((total, d) => total + Number(d), 0);
  return digitalRoot(sum);
}

export function computeNameNumber(name: string): number | null {
  if (!isChaldeanComputable(name)) return null;
  const sum = name
    .toLowerCase()
    .split("")
    .reduce((total, ch) => total + (CHALDEAN_VALUES[ch] ?? 0), 0);
  return sum === 0 ? null : digitalRoot(sum);
}

export function computeNumerology(birth: NatalDate, name?: string): NumerologyResult {
  const mulank = computeMulank(birth);
  const bhagyank = computeBhagyank(birth);
  const nameNumber = name ? computeNameNumber(name) : null;
  return {
    mulank,
    mulankPlanet: ROOT_PLANETS[mulank],
    bhagyank,
    bhagyankPlanet: ROOT_PLANETS[bhagyank],
    nameNumber,
    nameNumberPlanet: nameNumber !== null ? ROOT_PLANETS[nameNumber] : null,
  };
}
