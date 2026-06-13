import type { CourseStep, CourseLanguage } from "./types";

export function isContentStep(step: CourseStep): step is Extract<CourseStep, { kind: "content" }> {
  return step.kind === "content";
}

export function isInteractiveStep(step: CourseStep): boolean {
  return step.kind !== "content";
}

const GAME_LABELS: Record<CourseStep["kind"], { en: string; hi: string; ja: string; ko: string }> = {
  content: { en: "Lesson", hi: "पाठ", ja: "レッスン", ko: "레슨" },
  quiz: { en: "Chapter Quiz", hi: "अध्याय प्रश्नोत्तरी", ja: "章末クイズ", ko: "챕터 퀴즈" },
  match: { en: "Match Game", hi: "मिलान खेल", ja: "マッチングゲーム", ko: "매칭 게임" },
  flashcards: { en: "Flashcards", hi: "फ़्लैशकार्ड", ja: "フラッシュカード", ko: "플래시카드" },
  order: { en: "Order Challenge", hi: "क्रम चुनौती", ja: "並べ替えチャレンジ", ko: "순서 맞추기" },
  "true-false": { en: "True or False", hi: "सही या गलत", ja: "マルバツクイズ", ko: "참/거짓" },
  "multi-select": {
    en: "Pick All Correct",
    hi: "सभी सही चुनें",
    ja: "正解をすべて選ぶ",
    ko: "정답 모두 선택",
  },
};

export function gameKindLabel(kind: CourseStep["kind"], lang: CourseLanguage): string {
  return GAME_LABELS[kind][lang] ?? GAME_LABELS[kind].en;
}
