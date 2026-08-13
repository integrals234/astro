import {
  APP_LANGUAGES,
  DEFAULT_APP_LANGUAGE,
  isAppLanguage,
  type AppLanguage,
} from "@/lib/i18n/language";

/**
 * URL-based locales (Phase 3.2).
 *
 * Japanese is the market and serves from the bare root — `/learn-jyotish`,
 * not `/ja/learn-jyotish`. The other three carry a prefix. Middleware rewrites
 * unprefixed paths to `/ja/...` internally and 301s any literal `/ja/...` back
 * to the bare path, so the two forms never coexist and never split ranking
 * signals.
 *
 * Before this, all four locales shared one URL behind a cookie, and
 * `languageFromCountry` returned `en` for every country except IN/JP/KR —
 * so Googlebot, crawling from US IPs, was served English on a Japanese site.
 */
export const LOCALE_SEGMENT_PATTERN = new RegExp(
  `^/(${APP_LANGUAGES.join("|")})(?=/|$)`,
);

/** Locales that appear in the URL. Japanese is implicit at the root. */
export const PREFIXED_LOCALES = APP_LANGUAGES.filter(
  (language) => language !== DEFAULT_APP_LANGUAGE,
);

/** `""` for Japanese, `"/en"` etc. for the rest. */
export function localeSegment(language: AppLanguage): string {
  return language === DEFAULT_APP_LANGUAGE ? "" : `/${language}`;
}

/**
 * Prefix an app-internal path for a locale. Leaves anything that is not a
 * root-relative path (external URLs, `#anchors`, `mailto:`) untouched.
 */
export function localizedHref(language: AppLanguage, href: string): string {
  if (!href.startsWith("/")) return href;

  const segment = localeSegment(language);
  if (!segment) return href;

  return href === "/" ? segment : `${segment}${href}`;
}

/** Split `/en/chart/saved` into `{ locale: "en", pathname: "/chart/saved" }`. */
export function stripLocale(pathname: string): {
  locale: AppLanguage;
  pathname: string;
} {
  const match = LOCALE_SEGMENT_PATTERN.exec(pathname);
  if (!match || !isAppLanguage(match[1])) {
    return { locale: DEFAULT_APP_LANGUAGE, pathname };
  }

  return {
    locale: match[1],
    pathname: pathname.slice(match[0].length) || "/",
  };
}

/**
 * Rewrite a full pathname into another locale, preserving the page.
 * `("/en/horoscope", "ko")` → `"/ko/horoscope"`; `(_, "ja")` → `"/horoscope"`.
 */
export function switchLocale(pathname: string, language: AppLanguage): string {
  return localizedHref(language, stripLocale(pathname).pathname);
}
