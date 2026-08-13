import type { Metadata } from "next";
import type { AppLanguage } from "@/lib/i18n/language";
import {
  SITE_NAME,
  SITE_URL,
  languageAlternates,
  localeUrl,
} from "@/lib/seo/site";

export interface PageMetadataInput {
  language: AppLanguage;
  /** Unprefixed app path, e.g. `/learn-jyotish/rashis`. */
  path: string;
  title: string;
  description: string;
  /** Omit the site name — for the homepage, where the title already carries it. */
  bareTitle?: boolean;
  noindex?: boolean;
  image?: string;
  /** Locales that are noindex on this path, so hreflang omits them. */
  excludeAlternates?: readonly AppLanguage[];
}

/**
 * Per-route metadata (Phase 3.8).
 *
 * Before this there was exactly one `generateMetadata` sitewide, returning the
 * same title and description for every page, with no `metadataBase`, no
 * canonical, no hreflang and no robots directive.
 *
 * Every page gets a self-referencing absolute canonical and the full four-locale
 * hreflang set, so the locales reinforce each other instead of competing.
 */
export function buildPageMetadata({
  language,
  path,
  title,
  description,
  bareTitle = false,
  noindex = false,
  image,
  excludeAlternates = [],
}: PageMetadataInput): Metadata {
  const url = localeUrl(language, path);
  const fullTitle = bareTitle ? title : `${title} | ${SITE_NAME}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(path, excludeAlternates),
    },
    robots: noindex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: language,
      url,
      title: fullTitle,
      description,
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: fullTitle,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}

/**
 * Indexing directives (Phase 3.9).
 *
 * `/en/learn-jyotish/*` is a verbatim duplicate of a live third-party site.
 * Google canonicalises to the original, so it cannot rank regardless — but it
 * is the most discoverable copy, and removing it costs zero traffic. The
 * translations are not duplicate content and stay indexable; Japanese is the
 * market.
 */
export function isArticleNoindexed(language: AppLanguage): boolean {
  return language === "en";
}
