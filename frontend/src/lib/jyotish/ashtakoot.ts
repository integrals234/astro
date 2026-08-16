import {
  findNakshatra,
  rashiIndex,
  RASHIS,
  SIGN_LORDS,
  type NakshatraRow,
  type Rashi,
} from "./nakshatra-data";

/**
 * Ashtakoot Guna Milan — the classical 36-point compatibility score.
 *
 * Everything here is a pure function of two people's Moon positions, which the
 * ephemeris already returns, so this needs no additional backend work.
 *
 * Implemented as eight independent kutas rather than one score, because the
 * breakdown is the honest part: a 28/36 that loses its points on Nadi means
 * something quite different from one that loses them on Vashya, and a single
 * number invites exactly the false precision this site should not be selling.
 */
export interface KutaResult {
  id: KutaId;
  score: number;
  max: number;
  /** Short factual statement of what matched, for rendering under the bar. */
  detail: string;
}

export type KutaId =
  | "varna"
  | "vashya"
  | "tara"
  | "yoni"
  | "grahaMaitri"
  | "gana"
  | "bhakoot"
  | "nadi";

export interface AshtakootInput {
  moonSign: string;
  moonNakshatra: string;
}

export interface AshtakootResult {
  total: number;
  max: 36;
  kutas: KutaResult[];
  /** True when Bhakoot or Nadi scored zero — the two classical dealbreakers. */
  hasMajorDosha: boolean;
}

/* ---------------------------------------------------------------- Varna (1) */

const VARNA_BY_SIGN: Record<Rashi, number> = {
  // 3 = Brahmin (highest), 0 = Shudra. Water signs are Brahmin, fire Kshatriya,
  // earth Vaishya, air Shudra.
  Cancer: 3, Scorpio: 3, Pisces: 3,
  Aries: 2, Leo: 2, Sagittarius: 2,
  Taurus: 1, Virgo: 1, Capricorn: 1,
  Gemini: 0, Libra: 0, Aquarius: 0,
};

function varnaKuta(bride: Rashi, groom: Rashi): KutaResult {
  const b = VARNA_BY_SIGN[bride];
  const g = VARNA_BY_SIGN[groom];
  // Full point unless the groom's varna sits below the bride's.
  const score = g >= b ? 1 : 0;
  return {
    id: "varna",
    score,
    max: 1,
    detail: `${VARNA_NAMES[b]} / ${VARNA_NAMES[g]}`,
  };
}

const VARNA_NAMES = ["Shudra", "Vaishya", "Kshatriya", "Brahmin"];

/* --------------------------------------------------------------- Vashya (2) */

type VashyaGroup = "Chatushpada" | "Manava" | "Jalachara" | "Vanachara" | "Keeta";

/**
 * Whole-sign Vashya groups.
 *
 * Classically Sagittarius and Capricorn split at the half-sign (Sagittarius is
 * Manava in its first half and Chatushpada in its second; Capricorn the reverse
 * with Jalachara). That refinement is dropped here because it changes only
 * those two signs and would need the Moon's degree threaded through every call
 * site for a half-point difference.
 *
 * Known consequence: the ceiling under this table is 35/36 rather than a
 * perfect 36. That is deliberate and tested — a tool that hands out 36/36 reads
 * as a promise, and the page's job is to route the question to a human reading,
 * not to certify a marriage.
 */
const VASHYA_BY_SIGN: Record<Rashi, VashyaGroup> = {
  Aries: "Chatushpada",
  Taurus: "Chatushpada",
  Gemini: "Manava",
  Cancer: "Jalachara",
  Leo: "Vanachara",
  Virgo: "Manava",
  Libra: "Manava",
  Scorpio: "Keeta",
  Sagittarius: "Manava",
  Capricorn: "Chatushpada",
  Aquarius: "Manava",
  Pisces: "Jalachara",
};

function vashyaKuta(bride: Rashi, groom: Rashi): KutaResult {
  const a = VASHYA_BY_SIGN[bride];
  const b = VASHYA_BY_SIGN[groom];
  let score: number;
  if (a === b) score = 2;
  else if (
    (a === "Manava" && b === "Chatushpada") ||
    (a === "Chatushpada" && b === "Manava") ||
    (a === "Jalachara" && b === "Chatushpada") ||
    (a === "Chatushpada" && b === "Jalachara")
  ) {
    score = 1;
  } else if (a === "Vanachara" || b === "Vanachara") score = 0;
  else score = 0.5;

  return { id: "vashya", score, max: 2, detail: `${a} / ${b}` };
}

/* ----------------------------------------------------------------- Tara (3) */

function taraKuta(bride: NakshatraRow, groom: NakshatraRow): KutaResult {
  // Count forward from each nakshatra to the other, take the remainder mod 9.
  // Remainders of 3, 5 and 7 are the inauspicious taras.
  const forward = (from: number, to: number) =>
    ((to - from + 27) % 27) + 1;

  const a = forward(bride.number, groom.number) % 9;
  const b = forward(groom.number, bride.number) % 9;
  const bad = (r: number) => r === 3 || r === 5 || r === 7;

  const good = (bad(a) ? 0 : 1) + (bad(b) ? 0 : 1);
  const score = good === 2 ? 3 : good === 1 ? 1.5 : 0;

  return { id: "tara", score, max: 3, detail: `${a || 9} / ${b || 9}` };
}

/* ----------------------------------------------------------------- Yoni (4) */

/**
 * Yoni animal pairings. Full 4 points for the same animal; 0 for the classical
 * natural-enemy pairs; 2 otherwise. The enemy list is the part that actually
 * drives the score, so it is spelled out rather than derived.
 */
const YONI_ENEMIES: Array<[string, string]> = [
  ["Horse", "Buffalo"],
  ["Elephant", "Sheep"],
  ["Serpent", "Mongoose"],
  ["Dog", "Deer"],
  ["Cat", "Rat"],
  ["Monkey", "Sheep"],
  ["Lion", "Elephant"],
  ["Cow", "Tiger"],
];

function yoniKuta(bride: NakshatraRow, groom: NakshatraRow): KutaResult {
  const a = bride.yoni;
  const b = groom.yoni;
  let score: number;
  if (a === b) score = 4;
  else if (
    YONI_ENEMIES.some(
      ([x, y]) => (x === a && y === b) || (x === b && y === a),
    )
  ) {
    score = 0;
  } else score = 2;

  return { id: "yoni", score, max: 4, detail: `${a} / ${b}` };
}

/* ---------------------------------------------------------- Graha Maitri (5) */

const FRIENDS: Record<string, string[]> = {
  Sun: ["Moon", "Mars", "Jupiter"],
  Moon: ["Sun", "Mercury"],
  Mars: ["Sun", "Moon", "Jupiter"],
  Mercury: ["Sun", "Venus"],
  Jupiter: ["Sun", "Moon", "Mars"],
  Venus: ["Mercury", "Saturn"],
  Saturn: ["Mercury", "Venus"],
};

const ENEMIES: Record<string, string[]> = {
  Sun: ["Venus", "Saturn"],
  Moon: [],
  Mars: ["Mercury"],
  Mercury: ["Moon"],
  Jupiter: ["Mercury", "Venus"],
  Venus: ["Sun", "Moon"],
  Saturn: ["Sun", "Moon", "Mars"],
};

function relation(a: string, b: string): "friend" | "neutral" | "enemy" {
  if (FRIENDS[a]?.includes(b)) return "friend";
  if (ENEMIES[a]?.includes(b)) return "enemy";
  return "neutral";
}

function grahaMaitriKuta(bride: Rashi, groom: Rashi): KutaResult {
  const a = SIGN_LORDS[bride];
  const b = SIGN_LORDS[groom];
  if (a === b) {
    return { id: "grahaMaitri", score: 5, max: 5, detail: `${a} / ${b}` };
  }

  const ab = relation(a, b);
  const ba = relation(b, a);
  const pair = [ab, ba];

  let score: number;
  if (pair.every((r) => r === "friend")) score = 5;
  else if (pair.includes("friend") && pair.includes("neutral")) score = 4;
  else if (pair.every((r) => r === "neutral")) score = 3;
  else if (pair.includes("friend") && pair.includes("enemy")) score = 1;
  else if (pair.includes("neutral") && pair.includes("enemy")) score = 0.5;
  else score = 0;

  return { id: "grahaMaitri", score, max: 5, detail: `${a} / ${b}` };
}

/* ----------------------------------------------------------------- Gana (6) */

function ganaKuta(bride: NakshatraRow, groom: NakshatraRow): KutaResult {
  const a = bride.gana;
  const b = groom.gana;
  let score: number;
  if (a === b) score = 6;
  else if (
    (a === "Deva" && b === "Manushya") ||
    (a === "Manushya" && b === "Deva")
  ) {
    score = 5;
  } else if (a === "Rakshasa" && b === "Manushya") score = 0;
  else if (a === "Manushya" && b === "Rakshasa") score = 1;
  else score = 0; // Deva / Rakshasa in either direction

  return { id: "gana", score, max: 6, detail: `${a} / ${b}` };
}

/* -------------------------------------------------------------- Bhakoot (7) */

function bhakootKuta(bride: Rashi, groom: Rashi): KutaResult {
  const bi = rashiIndex(bride);
  const gi = rashiIndex(groom);
  // Distance both ways, 1-based.
  const d1 = ((gi - bi + 12) % 12) + 1;
  const d2 = ((bi - gi + 12) % 12) + 1;
  const pair = [d1, d2].sort((x, y) => x - y).join("-");

  // 6-8, 5-9 and 2-12 axes are the classical Bhakoot doshas.
  const bad = pair === "6-8" || pair === "5-9" || pair === "2-12";
  return {
    id: "bhakoot",
    score: bad ? 0 : 7,
    max: 7,
    detail: `${d1}-${d2}`,
  };
}

/* ----------------------------------------------------------------- Nadi (8) */

function nadiKuta(bride: NakshatraRow, groom: NakshatraRow): KutaResult {
  const same = bride.nadi === groom.nadi;
  return {
    id: "nadi",
    score: same ? 0 : 8,
    max: 8,
    detail: `${bride.nadi} / ${groom.nadi}`,
  };
}

/* ------------------------------------------------------------------- public */

export function computeAshtakoot(
  bride: AshtakootInput,
  groom: AshtakootInput,
): AshtakootResult | null {
  const bn = findNakshatra(bride.moonNakshatra);
  const gn = findNakshatra(groom.moonNakshatra);
  const bs = RASHIS[rashiIndex(bride.moonSign)];
  const gs = RASHIS[rashiIndex(groom.moonSign)];
  if (!bn || !gn || !bs || !gs) return null;

  const kutas: KutaResult[] = [
    varnaKuta(bs, gs),
    vashyaKuta(bs, gs),
    taraKuta(bn, gn),
    yoniKuta(bn, gn),
    grahaMaitriKuta(bs, gs),
    ganaKuta(bn, gn),
    bhakootKuta(bs, gs),
    nadiKuta(bn, gn),
  ];

  const total = kutas.reduce((sum, k) => sum + k.score, 0);
  const hasMajorDosha = kutas.some(
    (k) => (k.id === "bhakoot" || k.id === "nadi") && k.score === 0,
  );

  return { total, max: 36, kutas, hasMajorDosha };
}
