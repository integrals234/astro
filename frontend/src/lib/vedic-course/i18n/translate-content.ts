import type { CourseLanguage } from "../types";

/*
 * Performance pass: the Hindi and Korean course tables (~634KB of source) were
 * static imports, so every course visitor — mostly Japanese and English —
 * downloaded both. They now load on demand, one per language.
 *
 * `loadCourseTranslations(lang)` returns the pending import (or null when the
 * language needs none / it has already loaded); VedicCourseModule suspends on
 * it with React's `use()`, so both the static render and the client wait
 * for the table before any step is translated. `translateContent` stays
 * synchronous and keeps its loud failure for genuinely missing keys.
 */
type Table = Record<string, string>;
type TranslatedLanguage = "hi" | "ko";

// A function rather than a { hi, ko } map: the localisation audit treats
// locale-keyed objects as translations that must cover all four languages.
const loadTable = (lang: TranslatedLanguage): Promise<Table> =>
  lang === "hi"
    ? import("./content-hi").then((mod) => mod.HI_CONTENT)
    : import("./content-ko").then((mod) => mod.KO_CONTENT);

const tables: Partial<Record<TranslatedLanguage, Table>> = {};

/*
 * React's `use()` reads `status`/`value` on a thenable to tell whether it can
 * return synchronously. Promises are cached per language and marked
 * fulfilled once loaded, so callers can (and must) call `use()` on every
 * render — conditional `use()` changed the render path between a suspended
 * render and its replay (React error #467).
 */
type TrackedPromise<T> = Promise<T> & { status?: "pending" | "fulfilled" | "rejected"; value?: T };

const READY: TrackedPromise<null> = Object.assign(Promise.resolve(null), {
  status: "fulfilled" as const,
  value: null,
});

const pending: Partial<Record<TranslatedLanguage, TrackedPromise<Table>>> = {};

const needsTable = (lang: CourseLanguage): lang is TranslatedLanguage => lang === "hi" || lang === "ko";

/** Always returns the same promise for a language; pass it to `use()` unconditionally. */
export function loadCourseTranslations(lang: CourseLanguage): Promise<Table | null> {
  if (!needsTable(lang)) return READY;
  let promise = pending[lang];
  if (!promise) {
    const tracked: TrackedPromise<Table> = loadTable(lang).then((table) => {
      tables[lang] = table;
      tracked.status = "fulfilled";
      tracked.value = table;
      return table;
    });
    tracked.status = "pending";
    pending[lang] = promise = tracked;
  }
  return promise;
}

export function translateContent(en: string, lang: CourseLanguage): string {
  if (!needsTable(lang)) return en;
  const table = tables[lang];
  if (!table) {
    throw new Error(`Vedic Course ${lang} translations used before loadCourseTranslations("${lang}") resolved`);
  }
  const translated = table[en];
  if (!translated) {
    throw new Error(`Missing ${lang === "hi" ? "Hindi" : "Korean"} Vedic Course translation: ${en}`);
  }
  return translated;
}
