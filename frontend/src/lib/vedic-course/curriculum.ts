/**
 * Beginner curriculum: foundations → building blocks → synthesis → timing → practice → remedies.
 * Overlapping chapters are merged; step ids stay stable for saved progress.
 */
import { chapter1Planets } from "./chapters/ch1-planets";
import { chapter2Signs } from "./chapters/ch2-signs";
import { chapter3Lagna } from "./chapters/ch3-lagna";
import { chapter4Houses } from "./chapters/ch4-houses";
import { chapter5Nakshatras } from "./chapters/ch5-nakshatras";
import { chapter6Aspects } from "./chapters/ch6-aspects";
import { chapter7Practice } from "./chapters/ch7-practice";
import { chapter8Foundations } from "./chapters/ch8-foundations";
import { chapter9WesternVedic } from "./chapters/ch9-western-vedic";
import { chapter10Applications } from "./chapters/ch10-applications";
import { chapter11CognitionKarma } from "./chapters/ch11-cognition-karma";
import { chapter12CosmicCode } from "./chapters/ch12-cosmic-code";
import { chapter13Antidotes } from "./chapters/ch13-antidotes";
import { chapter14Mahadashas } from "./chapters/ch14-mahadashas";
import { chapter15FunctionalPlanets } from "./chapters/ch15-functional-planets";
import { chapter16ParadigmShift } from "./chapters/ch16-paradigm-shift";
import { chapter17PlanetaryStrength } from "./chapters/ch17-planetary-strength";
import { chapter18StrengthModifiers } from "./chapters/ch18-strength-modifiers";
import { chapter19ChartMastery } from "./chapters/ch19-chart-mastery";
import { chapter20NaturalBenefics } from "./chapters/ch20-natural-benefics";
import { chapter21Yogakaraka } from "./chapters/ch21-yogakaraka";
import { chapter22DrishtiMastery } from "./chapters/ch22-drishti-mastery";
import { chapter23Transits } from "./chapters/ch23-transits";
import { chapter24HoroscopeInterpretation } from "./chapters/ch24-horoscope-interpretation";
import { chapter25BirthTimeErrors } from "./chapters/ch25-birth-time-errors";
import { mergeChapters, withChapterMeta } from "./merge-chapters";
import { COURSE_MAP_SLIDE } from "./course-map-slide";

const mergedFoundationsKarma = mergeChapters(chapter8Foundations, chapter11CognitionKarma);

const foundationsAndKarma = withChapterMeta(
  {
    ...mergedFoundationsKarma,
    steps: [COURSE_MAP_SLIDE, ...mergedFoundationsKarma.steps],
  },
  {
    number: 1,
    title: { en: "Foundations & Karma", ja: "基礎とカルマ" },
    subtitle: {
      en: "What Jyotish is, karma types & the Jyotish journey",
      ja: "ジョーティシュとは、カルマの種類と学びの旅",
    },
  },
);

const worldview = withChapterMeta(
  mergeChapters(chapter12CosmicCode, chapter16ParadigmShift),
  {
    number: 3,
    title: { en: "Cosmic Code & Paradigm", ja: "宇宙のコードとパラダイム" },
    subtitle: {
      en: "Information fields, consciousness & six mind-shifts",
      ja: "情報場、意識と6つの心の転換",
    },
  },
);

const lagnaAndBirthTime = withChapterMeta(
  mergeChapters(chapter25BirthTimeErrors, chapter3Lagna),
  {
    number: 7,
    title: { en: "Birth Time & Lagna", ja: "出生時刻とラグナ" },
    subtitle: {
      en: "Accurate timing, the Ascendant & the 1st house",
      ja: "正確な時刻、アセンダントと第1ハウス",
    },
  },
);

const housesAndCharts = withChapterMeta(
  mergeChapters(chapter4Houses, chapter19ChartMastery),
  {
    number: 8,
    title: { en: "Houses & Chart Formats", ja: "ハウスとチャート形式" },
    subtitle: {
      en: "Bhavas, classifications, chart reading & body mapping",
      ja: "バーヴァ、分類、チャート読解と身体対応",
    },
  },
);

const drishti = withChapterMeta(
  mergeChapters(chapter6Aspects, chapter22DrishtiMastery),
  {
    number: 14,
    title: { en: "Drishti — Planetary Aspects", ja: "ドリシュティ — 惑星のアスペクト" },
    subtitle: {
      en: "From basic aspects to full interpretation mastery",
      ja: "基本アスペクトから完全解釈マスターまで",
    },
  },
);

const appliedAndRemedies = withChapterMeta(
  mergeChapters(chapter10Applications, chapter13Antidotes),
  {
    number: 19,
    title: { en: "Applied Jyotish & Remedies", ja: "応用ジョーティシュとレメディ" },
    subtitle: {
      en: "Muhurta, compatibility, gemstones, mantras & rituals",
      ja: "ムフルタ、相性、宝石、マントラと儀式",
    },
  },
);

/** Ascending proficiency path for learning Jyotish from scratch. */
export const VEDIC_COURSE_CHAPTERS = [
  foundationsAndKarma,
  withChapterMeta(chapter9WesternVedic, {
    number: 2,
    title: chapter9WesternVedic.title,
    subtitle: chapter9WesternVedic.subtitle,
  }),
  worldview,
  withChapterMeta(chapter1Planets, { number: 4, title: chapter1Planets.title, subtitle: chapter1Planets.subtitle }),
  withChapterMeta(chapter20NaturalBenefics, {
    number: 5,
    title: chapter20NaturalBenefics.title,
    subtitle: chapter20NaturalBenefics.subtitle,
  }),
  withChapterMeta(chapter2Signs, { number: 6, title: chapter2Signs.title, subtitle: chapter2Signs.subtitle }),
  lagnaAndBirthTime,
  housesAndCharts,
  withChapterMeta(chapter5Nakshatras, { number: 9, title: chapter5Nakshatras.title, subtitle: chapter5Nakshatras.subtitle }),
  withChapterMeta(chapter17PlanetaryStrength, {
    number: 10,
    title: chapter17PlanetaryStrength.title,
    subtitle: chapter17PlanetaryStrength.subtitle,
  }),
  withChapterMeta(chapter18StrengthModifiers, {
    number: 11,
    title: chapter18StrengthModifiers.title,
    subtitle: chapter18StrengthModifiers.subtitle,
  }),
  withChapterMeta(chapter15FunctionalPlanets, {
    number: 12,
    title: chapter15FunctionalPlanets.title,
    subtitle: chapter15FunctionalPlanets.subtitle,
  }),
  withChapterMeta(chapter21Yogakaraka, { number: 13, title: chapter21Yogakaraka.title, subtitle: chapter21Yogakaraka.subtitle }),
  drishti,
  withChapterMeta(chapter14Mahadashas, { number: 15, title: chapter14Mahadashas.title, subtitle: chapter14Mahadashas.subtitle }),
  withChapterMeta(chapter23Transits, { number: 16, title: chapter23Transits.title, subtitle: chapter23Transits.subtitle }),
  withChapterMeta(chapter24HoroscopeInterpretation, {
    number: 17,
    title: chapter24HoroscopeInterpretation.title,
    subtitle: chapter24HoroscopeInterpretation.subtitle,
  }),
  withChapterMeta(chapter7Practice, { number: 18, title: chapter7Practice.title, subtitle: chapter7Practice.subtitle }),
  appliedAndRemedies,
];

export const ALL_STEP_IDS = VEDIC_COURSE_CHAPTERS.flatMap((ch) =>
  ch.steps.map((s) => s.id),
);

export const GAME_STEP_COUNT = VEDIC_COURSE_CHAPTERS.flatMap((ch) =>
  ch.steps.filter((s) => s.kind !== "content"),
).length;

/** Resolve chapter index from completed steps so reordering does not strand progress. */
export function resolveChapterIndex(
  completedSlides: string[],
  savedChapterIndex: number,
): number {
  const completed = new Set(completedSlides);
  for (let i = 0; i < VEDIC_COURSE_CHAPTERS.length; i++) {
    const chapter = VEDIC_COURSE_CHAPTERS[i];
    const hasIncomplete = chapter.steps.some((s) => !completed.has(s.id));
    if (hasIncomplete) return i;
  }
  const max = VEDIC_COURSE_CHAPTERS.length - 1;
  return Math.min(Math.max(0, savedChapterIndex), max);
}
