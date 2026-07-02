import type { CourseChapter } from "./types";

/** Combine steps from multiple chapters while keeping stable step ids for saved progress. */
export function mergeChapters(
  base: CourseChapter,
  ...rest: CourseChapter[]
): CourseChapter {
  return {
    ...base,
    steps: [...base.steps, ...rest.flatMap((ch) => ch.steps)],
  };
}

/** Apply display metadata (order number, title) without changing step ids. */
export function withChapterMeta(
  chapter: CourseChapter,
  meta: Pick<CourseChapter, "number" | "title" | "subtitle"> &
    Partial<Pick<CourseChapter, "icon">>,
): CourseChapter {
  return { ...chapter, ...meta };
}
