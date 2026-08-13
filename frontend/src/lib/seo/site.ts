import {
  APP_LANGUAGES,
  DEFAULT_APP_LANGUAGE,
  type AppLanguage,
} from "@/lib/i18n/language";
import { localizedHref } from "@/lib/i18n/routing";

export const SITE_NAME = "Jyotish Life";

/**
 * Canonical origin. Everything SEO-facing must be absolute — Google treats a
 * relative canonical on a multi-locale site as ambiguous.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://jyotishlife.jp"
).replace(/\/$/, "");

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path === "/" ? "" : path}` || SITE_URL;
}

/** Absolute URL of `path` in a given locale. */
export function localeUrl(language: AppLanguage, path: string): string {
  return absoluteUrl(localizedHref(language, path));
}

/**
 * `alternates.languages` for a path, covering all four locales plus
 * `x-default`. English is x-default: it is the only locale a non-JP/HI/KO
 * speaker can read, and the `.jp` ccTLD already geotargets Japan.
 *
 * `exclude` drops locales that are `noindex` on this path — pointing hreflang
 * at a page we have told Google not to index is a contradictory signal. When
 * English is excluded, `x-default` falls back to Japanese, the canonical.
 */
export function languageAlternates(
  path: string,
  exclude: readonly AppLanguage[] = [],
): Record<string, string> {
  const included = APP_LANGUAGES.filter(
    (language) => !exclude.includes(language),
  );

  const alternates: Record<string, string> = {};
  for (const language of included) {
    alternates[language] = localeUrl(language, path);
  }
  alternates["x-default"] = localeUrl(
    included.includes("en") ? "en" : DEFAULT_APP_LANGUAGE,
    path,
  );
  return alternates;
}
