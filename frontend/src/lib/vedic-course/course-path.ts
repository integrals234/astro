import type { LocalizedText } from "./types";

export interface CoursePathPhase {
  id: string;
  label: LocalizedText;
  chapters: { number: number; title: LocalizedText }[];
}

/** Canonical beginner path — keep in sync with curriculum.ts chapter order. */
export const COURSE_PATH: CoursePathPhase[] = [
  {
    id: "foundations",
    label: { en: "Phase I — Foundations & worldview", ja: "第I章 — 基礎と世界観" },
    chapters: [
      { number: 1, title: { en: "Foundations & Karma", ja: "基礎とカルマ" } },
      { number: 2, title: { en: "Jyotish vs Western Astrology", ja: "ジョーティシュと西洋占星術" } },
      { number: 3, title: { en: "Cosmic Code & Paradigm", ja: "宇宙のコードとパラダイム" } },
    ],
  },
  {
    id: "building-blocks",
    label: { en: "Phase II — Astrological building blocks", ja: "第II章 — 占星術の構成要素" },
    chapters: [
      { number: 4, title: { en: "The 9 Planets", ja: "9つの惑星（グラハ）" } },
      { number: 5, title: { en: "Natural Benefics & Malefics", ja: "生来的吉星と凶星" } },
      { number: 6, title: { en: "The 12 Signs", ja: "12の星座（ラーシ）" } },
    ],
  },
  {
    id: "chart-skeleton",
    label: { en: "Phase III — Chart skeleton", ja: "第III章 — チャートの骨格" },
    chapters: [
      { number: 7, title: { en: "Birth Time & Lagna", ja: "出生時刻とラグナ" } },
      { number: 8, title: { en: "Houses & Chart Formats", ja: "ハウスとチャート形式" } },
      { number: 9, title: { en: "Nakshatras & Moon", ja: "ナクシャトラと月" } },
    ],
  },
  {
    id: "evaluation",
    label: { en: "Phase IV — Evaluating planets", ja: "第IV章 — 惑星の評価" },
    chapters: [
      { number: 10, title: { en: "Planetary Strength & Dignity", ja: "惑星の強さと品位" } },
      { number: 11, title: { en: "Strength Modifiers", ja: "強度修飾因子" } },
      { number: 12, title: { en: "Functional Benefics & Houses", ja: "機能的吉星とハウス" } },
      { number: 13, title: { en: "Yogakaraka", ja: "ヨーガカーラカ" } },
    ],
  },
  {
    id: "timing",
    label: { en: "Phase V — Connections & timing", ja: "第V章 — つながりと時期" },
    chapters: [
      { number: 14, title: { en: "Drishti — Planetary Aspects", ja: "ドリシュティ — 惑星のアスペクト" } },
      { number: 15, title: { en: "Mahadashas & Cosmic Timing", ja: "マハーダシャーと宇宙の時" } },
      { number: 16, title: { en: "Transits & Gochara", ja: "トランジットとゴーチャラ" } },
    ],
  },
  {
    id: "application",
    label: { en: "Phase VI — Reading & application", ja: "第VI章 — 読解と応用" },
    chapters: [
      { number: 17, title: { en: "Reading Horoscopes with Wisdom", ja: "知恵でホロスコープを読む" } },
      { number: 18, title: { en: "Chart Reading Practice", ja: "チャート読解プラクティス" } },
      { number: 19, title: { en: "Applied Jyotish & Remedies", ja: "応用ジョーティシュとレメディ" } },
    ],
  },
];

export const COURSE_CHAPTER_COUNT = COURSE_PATH.reduce(
  (sum, phase) => sum + phase.chapters.length,
  0,
);
