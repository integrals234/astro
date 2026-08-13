import type { MetadataRoute } from "next";
import { educationSections } from "@/lib/education";
import { wisdomArticles } from "@/lib/education/articles-content";
import {
  articlePath,
  sectionPath,
} from "@/lib/education/article-routes";
import { ENTITY_SETS, entityPath } from "@/lib/education/entity-routes";
import { TOOL_LANDINGS } from "@/lib/tools/landing-content";
import { DEFAULT_APP_LANGUAGE } from "@/lib/i18n/language";
import { languageAlternates, localeUrl } from "@/lib/seo/site";

/**
 * Sitemap (Phase 3.8). There was none.
 *
 * Each entry is listed once at its Japanese (canonical, unprefixed) URL with
 * the other locales as `alternates.languages`, which is the form Google wants
 * for a multi-locale site — one row per page, not one per locale.
 *
 * Article entries omit `en` from their alternates: `/en/learn-jyotish/*` is
 * `noindex` per Phase 3.9, and advertising a noindexed page as an hreflang
 * alternate is a contradictory signal.
 */
type Entry = MetadataRoute.Sitemap[number];

const ARTICLE_EXCLUDED_LOCALES = ["en"] as const;

function entry(
  path: string,
  options: {
    priority?: number;
    changeFrequency?: Entry["changeFrequency"];
    excludeLocales?: readonly ("en" | "hi" | "ja" | "ko")[];
  } = {},
): Entry {
  const { priority = 0.6, changeFrequency = "monthly", excludeLocales = [] } = options;

  return {
    url: localeUrl(DEFAULT_APP_LANGUAGE, path),
    lastModified: new Date(),
    changeFrequency,
    priority,
    alternates: { languages: languageAlternates(path, excludeLocales) },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const landing: Entry[] = [
    entry("/", { priority: 1, changeFrequency: "weekly" }),
    entry("/chart", { priority: 0.9, changeFrequency: "weekly" }),
    entry("/learn-jyotish", { priority: 0.9, changeFrequency: "weekly" }),
    entry("/horoscope", { priority: 0.8, changeFrequency: "daily" }),
    entry("/personal-appraisals", { priority: 0.8 }),
    entry("/course", { priority: 0.7 }),
    entry("/about", { priority: 0.7 }),
    entry("/blogs", { priority: 0.4 }),
    entry("/premium", { priority: 0.4 }),
  ];

  // Tool landing pages (Phase 3.6). High priority: free tools are what earn
  // links and rank for high-intent queries.
  const tools: Entry[] = TOOL_LANDINGS.map((tool) =>
    entry(`/tools/${tool.slug}`, { priority: 0.9, changeFrequency: "monthly" }),
  );

  const sectionHubs: Entry[] = educationSections.map((section) =>
    entry(sectionPath(section.id), { priority: 0.7, changeFrequency: "weekly" }),
  );

  const articles: Entry[] = wisdomArticles.map((article) =>
    entry(articlePath(article), {
      priority: 0.6,
      excludeLocales: ARTICLE_EXCLUDED_LOCALES,
    }),
  );

  // Entity corpus (Phase 3.5): original structured data, real prose, real
  // images — indexable in every locale, unlike the article translations.
  const entities: Entry[] = Object.values(ENTITY_SETS).flatMap((set) => [
    entry(set.path, { priority: 0.8, changeFrequency: "weekly" }),
    ...set.entities.map((item) =>
      entry(entityPath(set, item), { priority: 0.7 }),
    ),
  ]);

  // /legal/* is deliberately absent: those pages are noindex drafts.
  return [...landing, ...tools, ...sectionHubs, ...articles, ...entities];
}
