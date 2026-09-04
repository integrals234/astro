import { computeNameNumber } from "@/lib/numerology";

/**
 * "Numerology harmony" scoring for a candidate name against a birth's
 * Mulank and Bhagyank — used by the Baby Names tool to rank names, not as a
 * standalone numerology feature. Deliberately reuses `computeNameNumber`
 * from `lib/numerology.ts` rather than re-deriving a Chaldean name number.
 *
 * The relationship table below is the classical Naisargika Maitri
 * (natural planetary friendship) table from Parashari Jyotish, applied to
 * the same nine root-digit planets `lib/numerology.ts`'s `ROOT_PLANETS`
 * already uses (1 Sun … 9 Mars). Rahu and Ketu have no natural-friendship
 * row of their own in the classical table; the standard convention (also
 * used by most Jyotish software) is that Rahu follows Saturn's
 * relationships and Ketu follows Mars's, which is what's encoded here.
 *
 * This is presented to visitors as a traditional/complementary layer, not a
 * literal claim — same framing as `numerologyCopy.provenance`.
 */
type Relation = "friend" | "neutral" | "enemy";

/** Row = how the digit's planet naturally regards each other planet. Rahu
 * (4) mirrors Saturn's row, Ketu (7) mirrors Mars's row. */
const NAISARGIKA_MAITRI: Record<number, Partial<Record<number, Relation>>> = {
  1: { 2: "friend", 9: "friend", 3: "friend", 5: "neutral", 6: "enemy", 8: "enemy" }, // Sun
  2: { 1: "friend", 5: "friend", 9: "neutral", 3: "neutral", 6: "neutral", 8: "neutral" }, // Moon
  9: { 1: "friend", 2: "friend", 3: "friend", 6: "neutral", 8: "neutral", 5: "enemy" }, // Mars
  5: { 1: "friend", 6: "friend", 9: "neutral", 3: "neutral", 8: "neutral", 2: "enemy" }, // Mercury
  3: { 1: "friend", 2: "friend", 9: "friend", 8: "neutral", 5: "enemy", 6: "enemy" }, // Jupiter
  6: { 5: "friend", 8: "friend", 9: "neutral", 3: "neutral", 1: "enemy", 2: "enemy" }, // Venus
  8: { 5: "friend", 6: "friend", 3: "neutral", 1: "enemy", 2: "enemy", 9: "enemy" }, // Saturn
  4: { 5: "friend", 6: "friend", 3: "neutral", 1: "enemy", 2: "enemy", 9: "enemy" }, // Rahu ~ Saturn
  7: { 1: "friend", 2: "friend", 3: "friend", 6: "neutral", 8: "neutral", 5: "enemy" }, // Ketu ~ Mars
};

function relation(a: number, b: number): Relation {
  if (a === b) return "friend";
  return NAISARGIKA_MAITRI[a]?.[b] ?? "neutral";
}

const RELATION_POINTS: Record<Relation, number> = {
  friend: 1,
  neutral: 0,
  enemy: -1,
};

/**
 * Combined harmony of a name number against both root numbers, 1-10.
 * Each pairing contributes up to +2 (both directions of the friendship
 * table agreeing the name number is a friend) down to -2; a same-number
 * match is treated as maximally harmonious (a number is its own friend).
 */
export function scoreNameHarmony(
  mulank: number,
  bhagyank: number,
  nameNumber: number,
): number {
  const pairScore = (root: number) =>
    RELATION_POINTS[relation(nameNumber, root)] +
    RELATION_POINTS[relation(root, nameNumber)];

  const raw = pairScore(mulank) + pairScore(bhagyank); // range -8..8
  const normalized = Math.round(((raw + 8) / 16) * 9) + 1; // 1..10
  return Math.min(10, Math.max(1, normalized));
}

/**
 * Scores a candidate name's romaji form against a baby's Mulank/Bhagyank.
 * Returns `null` when the name can't be reduced to a Chaldean number
 * (should not happen for the curated romaji forms in this tool's dataset,
 * but kept honest rather than assumed).
 */
export function scoreCandidateName(
  romaji: string,
  mulank: number,
  bhagyank: number,
): number | null {
  const nameNumber = computeNameNumber(romaji);
  if (nameNumber === null) return null;
  return scoreNameHarmony(mulank, bhagyank, nameNumber);
}
