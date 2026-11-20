import { VEDIC_COURSE_CHAPTERS } from "./curriculum";
import { HI_CONTENT } from "./i18n/content-hi";
import { KO_CONTENT } from "./i18n/content-ko";
import { chapterIconName } from "./chapter-icons";
import type { CourseChapter, CourseLanguage } from "./types";

/*
 * The course, already in one language (performance pass).
 *
 * The course module used to bundle every chapter in Japanese and English as
 * JavaScript (~345KB, fetched on the click to /course and not covered by
 * route prefetching), plus a ~250–380KB table for Hindi or Korean. The page
 * now resolves every text on the server and passes the chapters down as
 * data: one language, no translation tables on the client.
 *
 * Each `{ en, ja, hi?, ko? }` text keeps only the visitor's language, so the
 * client's `t(text, lang)` returns it directly and never reaches for a table.
 * Server-only by convention: only the course page imports this.
 */
const LANGS = new Set(["en", "ja", "hi", "ko"]);

type Text = { en: string; ja: string; hi?: string; ko?: string };

function isText(value: unknown): value is Text {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const record = value as Record<string, unknown>;
  return (
    typeof record.en === "string" &&
    typeof record.ja === "string" &&
    Object.keys(record).every((key) => LANGS.has(key))
  );
}

function resolve(text: Text, lang: CourseLanguage): string {
  if (lang === "ja") return text.ja;
  if (lang === "hi") return text.hi ?? HI_CONTENT[text.en] ?? text.en;
  if (lang === "ko") return text.ko ?? KO_CONTENT[text.en] ?? text.en;
  return text.en;
}

function localize<T>(value: T, lang: CourseLanguage): T {
  if (Array.isArray(value)) return value.map((item) => localize(item, lang)) as T;
  if (isText(value)) return { [lang]: resolve(value, lang) } as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, localize(item, lang)]),
    ) as T;
  }
  return value;
}

/** A chapter as the client receives it: text in one language, icon by name. */
export type LocalizedChapter = Omit<CourseChapter, "icon"> & { icon: string };
export type CourseChapters = LocalizedChapter[];

export function buildCourseChapters(lang: CourseLanguage): CourseChapters {
  return VEDIC_COURSE_CHAPTERS.map(({ icon, ...chapter }) => ({
    ...localize(chapter, lang),
    icon: chapterIconName(icon),
  }));
}
