/**
 * 三九の秘法 — the relation between two 宿.
 *
 * Count forward from your own 宿 (your 宿 = position 1). Positions fall in
 * three bands of nine (一九・二九・三九), and inside each band the same
 * cycle repeats:
 *
 *   1 命/業/胎   2 栄   3 衰   4 安   5 危   6 成   7 壊   8 友   9 親
 *
 * (the first position of each band is 命, 業 and 胎 respectively). The
 * relations come in mirrored pairs — if I am your 栄 you are my 親 — so
 * the six relation groups are 命, 業胎, 栄親, 友衰, 安壊, 危成.
 *
 * Distance (近・中・遠): schools count it differently. This site uses the
 * symmetric reading that matches the classical worked example (本命宿 昴宿:
 * 近距離の栄 = 畢宿, 中距離の栄 = 女宿, 遠距離の栄 = 軫宿): the number of
 * steps between the two 宿 the shorter way round. 栄親・友衰・安壊・危成 then
 * fall at 1–4 steps (近距離), 5–8 (中距離) or 10–13 (遠距離); a pair has one
 * distance, the same from both sides. 命・業・胎 have no distance.
 *
 * The same nine-step cycle is Vedic tara bala (Janma, Sampat, Vipat, Kshema,
 * Pratyak, Sadhana, Naidhana, Mitra, Parama Mitra) — 宿曜 inherited it — so
 * `relationOf` also drives the daily fortune (your 宿 vs the Moon's today).
 */
import { SHUKU_COUNT, type Shuku } from "./shuku";

/** One side's view of the other. */
export type RelationKind = "mei" | "gyou" | "tai" | "ei" | "shin" | "yuu" | "sui" | "an" | "kai" | "ki" | "sei";

/** The pair, seen from neither side. */
export type RelationGroup = "mei" | "gyoutai" | "eishin" | "yuusui" | "ankai" | "kisei";

export type Distance = "near" | "mid" | "far";

export const RELATION_KANJI: Record<RelationKind, string> = {
  mei: "命",
  gyou: "業",
  tai: "胎",
  ei: "栄",
  shin: "親",
  yuu: "友",
  sui: "衰",
  an: "安",
  kai: "壊",
  ki: "危",
  sei: "成",
};

export const GROUP_KANJI: Record<RelationGroup, string> = {
  mei: "命",
  gyoutai: "業胎",
  eishin: "栄親",
  yuusui: "友衰",
  ankai: "安壊",
  kisei: "危成",
};

export const DISTANCE_LABEL: Record<Distance, string> = { near: "近距離", mid: "中距離", far: "遠距離" };

/** Kind by position within a band (index 1–8; index 0 depends on the band). */
const CYCLE: readonly RelationKind[] = ["mei", "ei", "sui", "an", "ki", "sei", "kai", "yuu", "shin"];

const GROUP_OF: Record<RelationKind, RelationGroup> = {
  mei: "mei",
  gyou: "gyoutai",
  tai: "gyoutai",
  ei: "eishin",
  shin: "eishin",
  yuu: "yuusui",
  sui: "yuusui",
  an: "ankai",
  kai: "ankai",
  ki: "kisei",
  sei: "kisei",
};

export interface Relation {
  /** How `from` sees `to`. */
  kind: RelationKind;
  /** How `to` sees `from`. */
  reverse: RelationKind;
  group: RelationGroup;
  /** null for 命・業・胎. */
  distance: Distance | null;
  /** 1–27: where `to` sits counting from `from` (inclusive). */
  position: number;
  /** 0–13: steps between the two, the shorter way round. */
  steps: number;
}

/** Position (1–27) → kind, from the counting side. */
export function kindAtPosition(position: number): RelationKind {
  const d = (((position - 1) % SHUKU_COUNT) + SHUKU_COUNT) % SHUKU_COUNT;
  const inBand = d % 9;
  if (inBand === 0) return d === 0 ? "mei" : d === 9 ? "gyou" : "tai";
  return CYCLE[inBand];
}

export function relationOf(from: Shuku, to: Shuku): Relation {
  const d = (((to.index - from.index) % SHUKU_COUNT) + SHUKU_COUNT) % SHUKU_COUNT;
  const kind = kindAtPosition(d + 1);
  const reverse = kindAtPosition(((SHUKU_COUNT - d) % SHUKU_COUNT) + 1);
  const steps = Math.min(d, SHUKU_COUNT - d);
  const group = GROUP_OF[kind];
  const distance: Distance | null =
    group === "mei" || group === "gyoutai" ? null : steps <= 4 ? "near" : steps <= 8 ? "mid" : "far";
  return { kind, reverse, group, distance, position: d + 1, steps };
}

/** Tara bala: the nine taras, in the same cycle as 命栄衰安危成壊友親. */
export type Tara = "janma" | "sampat" | "vipat" | "kshema" | "pratyak" | "sadhana" | "naidhana" | "mitra" | "paramaMitra";

const TARAS: readonly Tara[] = ["janma", "sampat", "vipat", "kshema", "pratyak", "sadhana", "naidhana", "mitra", "paramaMitra"];

/** Classical reading: 2, 4, 6, 8, 9 favourable; 3, 5, 7 unfavourable; 1 mixed. */
export const TARA_QUALITY: Record<Tara, "good" | "caution" | "mixed"> = {
  janma: "mixed",
  sampat: "good",
  vipat: "caution",
  kshema: "good",
  pratyak: "caution",
  sadhana: "good",
  naidhana: "caution",
  mitra: "good",
  paramaMitra: "good",
};

/** The tara of `today` counted from a birth nakshatra/宿 (both 0–26). */
export function taraOf(birthIndex: number, todayIndex: number): Tara {
  const d = (((todayIndex - birthIndex) % SHUKU_COUNT) + SHUKU_COUNT) % SHUKU_COUNT;
  return TARAS[d % 9];
}
