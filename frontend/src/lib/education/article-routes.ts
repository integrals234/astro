import { getArticlesForSection, wisdomArticles } from "./articles-content";
import { educationSections } from "./index";
import { stripInlineMarkdown } from "@/lib/format-inline-text";
import type { EducationSectionId, WisdomArticle } from "./types";
import type { AppLanguage } from "@/lib/i18n/language";

/**
 * Real URLs for the article corpus (Phase 3.3).
 *
 * 35 long-form articles already had ids and a hand-authored `related: []`
 * graph, but no addresses — they rendered inside a client hub keyed by
 * `?section=`. Slugs reuse the existing ASCII ids, so every id that was
 * already linked from elsewhere keeps working.
 */
export const LEARN_ROOT = "/learn-jyotish";

export function sectionPath(section: EducationSectionId): string {
  return `${LEARN_ROOT}/${section}`;
}

export function articlePath(article: WisdomArticle): string {
  return `${sectionPath(article.section)}/${article.id}`;
}

export function sectionLabel(
  section: EducationSectionId,
  language: AppLanguage,
): string {
  const entry = educationSections.find((item) => item.id === section);
  return entry ? entry.label[language] : section;
}

/** Every `{ section, slug }` pair, for `generateStaticParams`. */
export function allArticleParams(): Array<{ section: string; slug: string }> {
  return wisdomArticles.map((article) => ({
    section: article.section,
    slug: article.id,
  }));
}

export function articlesInSection(section: EducationSectionId): WisdomArticle[] {
  return getArticlesForSection(section);
}

/**
 * First real prose block, trimmed — used as the meta description and the
 * hub-card excerpt. Answering in the first ~100 characters is also what wins
 * the featured snippet and the AI Overview citation.
 */
export function articleSummary(
  article: WisdomArticle,
  language: AppLanguage,
  limit = 160,
): string {
  const paragraph = article.blocks.find((block) => block.type === "paragraph");
  if (!paragraph || paragraph.type !== "paragraph") return "";

  const text = stripInlineMarkdown(paragraph.text[language] ?? "")
    .replace(/^[QA]\.\s*/, "")
    .replace(/^•\s*/, "")
    .trim();

  return text.length > limit ? `${text.slice(0, limit - 1).trimEnd()}…` : text;
}
