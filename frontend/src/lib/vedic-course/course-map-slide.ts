import type { CourseSlide, LocalizedText } from "./types";
import { COURSE_CHAPTER_COUNT, COURSE_PATH } from "./course-path";

function buildMapBullets(): LocalizedText[] {
  return COURSE_PATH.flatMap((phase) =>
    phase.chapters.map((ch, index) => {
      const prefix = index === 0 ? `${phase.label.en} → ` : "    ";
      const prefixJa = index === 0 ? `${phase.label.ja} → ` : "    ";
      return {
        en: `${prefix}Ch ${ch.number}: ${ch.title.en}`,
        ja: `${prefixJa}第${ch.number}章: ${ch.title.ja}`,
      };
    }),
  );
}

export const COURSE_MAP_SLIDE: CourseSlide = {
  id: "ch8-course-map",
  kind: "content",
  icon: "compass",
  title: {
    en: "Your Jyotish Journey — Course Map",
    ja: "あなたのジョーティシュの旅 — コースマップ",
  },
  body: {
    en: `${COURSE_CHAPTER_COUNT} chapters in six phases — from philosophy to reading live charts. Each chapter unlocks the next. Follow the path top to bottom.`,
    ja: `6フェーズ${COURSE_CHAPTER_COUNT}章 — 哲学から実践チャート読解まで。各章が次を解きます。上から順に進めましょう。`,
  },
  bullets: buildMapBullets(),
  highlight: {
    en: "▶ You are here: Chapter 1. Complete the games in each chapter — they reinforce what you just learned.",
    ja: "▶ 現在地：第1章。各章のゲームで定着 — 学んだ直後に試しましょう。",
  },
};

export { COURSE_CHAPTER_COUNT };
