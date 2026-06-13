import type { CourseLanguage, LocalizedText } from "./types";
import { translateContent } from "./i18n/translate-content";

export type { CourseLanguage };

export const COURSE_LANGUAGES = [
  { code: "en" as const, label: "English", native: "English" },
  { code: "hi" as const, label: "Hindi", native: "हिन्दी" },
  { code: "ja" as const, label: "Japanese", native: "日本語" },
  { code: "ko" as const, label: "Korean", native: "한국어" },
];

export function t(text: LocalizedText, lang: CourseLanguage): string {
  if (lang === "en") return text.en;
  if (lang === "ja") return text.ja;
  if (lang === "hi") return text.hi ?? translateContent(text.en, "hi");
  if (lang === "ko") return text.ko ?? translateContent(text.en, "ko");
  return text.en;
}

export function computeProgressPercent(completedSlides: string[], totalSteps: number): number {
  if (totalSteps === 0) return 0;
  return Math.round((completedSlides.length / totalSteps) * 100);
}

export function isChapterComplete(
  chapterIndex: number,
  chapters: { steps: { id: string }[] }[],
  completedSlides: string[],
): boolean {
  const chapter = chapters[chapterIndex];
  if (!chapter) return false;
  return chapter.steps.every((step) => completedSlides.includes(step.id));
}
