import type { CourseLanguage, LocalizedText } from "./types";

export function t(text: LocalizedText, lang: CourseLanguage): string {
  return text[lang];
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
