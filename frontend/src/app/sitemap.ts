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
import {
  revisionOf,
  type ContentCollection,
} from "@/lib/seo/content-revisions";
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
 *
 * `lastModified` comes from `content-revisions.ts` rather than `new Date()`.
 * Stamping build time on every row told Google the whole site changed on every
 * deploy, which makes the field worthless as a recrawl hint.
 */
type Entry = MetadataRoute.Sitemap[number];

const ARTICLE_EXCLUDED_LOCALES = ["en"] as const;

function entry(
  path: string,
  options: {
    collection: ContentCollection;
    priority?: number;
    changeFrequency?: Entry["changeFrequency"];
    excludeLocales?: readonly ("en" | "hi" | "ja" | "ko")[];
  },
): Entry {
  const {
    collection,
    priority = 0.6,
    changeFrequency = "monthly",
    excludeLocales = [],
  } = options;

  return {
    url: localeUrl(DEFAULT_APP_LANGUAGE, path),
    lastModified: revisionOf(collection),
    changeFrequency,
    priority,
    alternates: { languages: languageAlternates(path, excludeLocales) },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const landing: Entry[] = [
    entry("/", { collection: "core", priority: 1, changeFrequency: "weekly" }),
    entry("/chart", {
      collection: "tools",
      priority: 0.9,
      changeFrequency: "weekly",
    }),
    entry("/learn-jyotish", {
      collection: "articles",
      priority: 0.9,
      changeFrequency: "weekly",
    }),
    entry("/horoscope", {
      collection: "horoscope",
      priority: 0.8,
      changeFrequency: "weekly",
    }),
    entry("/personal-appraisals", {
      collection: "appraisals",
      priority: 0.8,
    }),
    entry("/course", { collection: "course", priority: 0.7 }),
    entry("/about", { collection: "core", priority: 0.7 }),
  ];

  // Tool landing pages (Phase 3.6). High priority: free tools are what earn
  // links and rank for high-intent queries.
  const tools: Entry[] = TOOL_LANDINGS.map((tool) =>
    entry(`/tools/${tool.slug}`, {
      collection: "tools",
      priority: 0.9,
      changeFrequency: "monthly",
    }),
  );

  const sectionHubs: Entry[] = educationSections.map((section) =>
    entry(sectionPath(section.id), {
      collection: "articles",
      priority: 0.7,
      changeFrequency: "weekly",
    }),
  );

  const articles: Entry[] = wisdomArticles.map((article) =>
    entry(articlePath(article), {
      collection: "articles",
      priority: 0.6,
      excludeLocales: ARTICLE_EXCLUDED_LOCALES,
    }),
  );

  // Entity corpus (Phase 3.5): original structured data, real prose, real
  // images — indexable in every locale, unlike the article translations.
  const entities: Entry[] = Object.values(ENTITY_SETS).flatMap((set) => [
    entry(set.path, {
      collection: "entities",
      priority: 0.8,
      changeFrequency: "weekly",
    }),
    ...set.entities.map((item) =>
      entry(entityPath(set, item), { collection: "entities", priority: 0.7 }),
    ),
  ]);

  // /legal/* is deliberately absent: those pages are noindex drafts.
  // /blogs and /premium are absent too: /blogs had no content and was removed,
  // and /premium is a noindex waitlist until it becomes the pricing page.
  return [...landing, ...tools, ...sectionHubs, ...articles, ...entities];
}
