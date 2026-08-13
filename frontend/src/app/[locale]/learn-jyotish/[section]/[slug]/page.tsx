import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PublicPageShell from "@/components/layout/PublicPageShell";
import ArticleBlocks from "@/components/education/ArticleBlocks";
import Breadcrumbs from "@/components/education/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { uiText } from "@/lib/education";
import {
  getArticleById,
  wisdomArticles,
} from "@/lib/education/articles-content";
import {
  LEARN_ROOT,
  articlePath,
  articleSummary,
  sectionLabel,
  sectionPath,
} from "@/lib/education/article-routes";
import { isEducationSectionId } from "@/lib/education/section-links";
import { APP_LANGUAGES, parseAppLanguage } from "@/lib/i18n/language";
import { localizedHref } from "@/lib/i18n/routing";
import { buildPageMetadata, isArticleNoindexed } from "@/lib/seo/metadata";
import {
  articleSchema,
  breadcrumbSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/schema";

/**
 * Article page (Phase 3.3).
 *
 * 35 articles × 4 locales, all statically generated. The `related: []` array
 * that every article already carried — but that nothing rendered — becomes the
 * contextual internal-link block at the foot of the page: roughly 105
 * hand-chosen links for no authoring cost (Phase 3.7).
 */
type Params = { params: Promise<{ locale: string; section: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return APP_LANGUAGES.flatMap((locale) =>
    wisdomArticles.map((article) => ({
      locale,
      section: article.section,
      slug: article.id,
    })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, section, slug } = await params;
  const article = getArticleById(slug);
  if (!article || article.section !== section) return {};

  const language = parseAppLanguage(locale);

  return buildPageMetadata({
    language,
    path: articlePath(article),
    title: article.title[language],
    description: articleSummary(article, language),
    noindex: isArticleNoindexed(language),
    excludeAlternates: ["en"],
  });
}

export default async function ArticlePage({ params }: Params) {
  const { locale, section, slug } = await params;
  if (!isEducationSectionId(section)) notFound();

  const article = getArticleById(slug);
  if (!article || article.section !== section) notFound();

  const language = parseAppLanguage(locale);
  const title = article.title[language];
  const summary = articleSummary(article, language);
  const label = sectionLabel(section, language);

  const related = article.related
    .map((id) => getArticleById(id))
    .filter((entry) => entry !== undefined);

  const crumbs = [
    { name: uiText("home", language), path: "/" },
    { name: uiText("learnJyotish", language), path: LEARN_ROOT },
    { name: label, path: sectionPath(section) },
    { name: title, path: articlePath(article) },
  ];

  return (
    <PublicPageShell>
      <JsonLd
        nodes={[
          organizationSchema(),
          websiteSchema(language),
          breadcrumbSchema(language, crumbs),
          articleSchema({
            language,
            path: articlePath(article),
            headline: title,
            description: summary,
          }),
        ]}
      />

      <div className="mx-auto w-full max-w-3xl px-6 py-12">
        <Breadcrumbs
          crumbs={crumbs}
          language={language}
          label={uiText("learnJyotish", language)}
        />

        <header className="mb-9">
          <p className="washi-eyebrow washi-eyebrow-lead mb-4">
            {uiText("vedicWisdom", language)}
          </p>
          <h1 className="font-header text-[length:var(--step-3)] tracking-tight text-ink">
            {title}
          </h1>
        </header>

        <div className="washi-measure washi-card p-6 md:p-9">
          <ArticleBlocks blocks={article.blocks} lang={language} />
        </div>

        {related.length > 0 && (
          <aside className="washi-card mt-10 p-5 md:p-6">
            <h2 className="washi-eyebrow washi-eyebrow-lead mb-4">
              {uiText("relatedWisdom", language)}
            </h2>
            <ul className="grid gap-2 sm:grid-cols-2">
              {related.map((entry) => (
                <li key={entry.id}>
                  <Link
                    href={localizedHref(language, articlePath(entry))}
                    className="flex items-start justify-between gap-2 rounded-md border border-border bg-washi-elevated px-4 py-3 transition-colors hover:border-terracotta"
                  >
                    <span className="font-body text-sm leading-snug text-text">
                      {entry.title[language]}
                    </span>
                    <ArrowUpRight
                      size={14}
                      aria-hidden
                      className="mt-0.5 shrink-0 text-terracotta"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <hr className="washi-hairline my-10" />

        <Link
          href={localizedHref(language, sectionPath(section))}
          className="washi-btn-secondary px-4 py-2.5 text-sm"
        >
          ← {label}
        </Link>
      </div>
    </PublicPageShell>
  );
}
