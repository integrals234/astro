import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import PublicPageShell from "@/components/layout/PublicPageShell";
import ArticleBlocks, { articleHeadingId } from "@/components/education/ArticleBlocks";
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

  // Level-2 headings become the contents list (sticky on desktop, folded on phone).
  const contents = article.blocks
    .map((block, index) => ({ block, index }))
    .filter(({ block }) => block.type === "heading" && block.level === 2)
    .map(({ block, index }) => ({
      id: articleHeadingId(index),
      text: block.type === "heading" ? block.text[language].replace(/\*\*/g, "") : "",
    }));
  const contentsLabel = { ja: "目次", en: "Contents", hi: "विषय-सूची", ko: "목차" }[language];

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

      <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-8 md:py-12">
        <Breadcrumbs
          crumbs={crumbs}
          language={language}
          label={uiText("learnJyotish", language)}
        />

        <div className="lg:grid lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-14">
        {/* Desktop: contents held in the margin while you read. */}
        <aside className="hidden lg:block">
          {contents.length > 1 && (
            <nav aria-label={contentsLabel} className="sticky top-24 pt-24 text-sm">
              <p className="mb-3 text-xs tracking-[0.08em] text-text-muted">{contentsLabel}</p>
              <ol className="space-y-2 border-l border-border">
                {contents.map((item) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} className="-ml-px block border-l border-transparent pl-4 leading-snug text-text-muted transition-colors hover:border-ink hover:text-ink">
                      {item.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}
        </aside>

        <div className="min-w-0 max-w-[44rem]">
        <header className="mb-8 mt-2">
          <p className="mb-3 text-sm text-text-muted">{label}</p>
          <h1 className="ma-title tracking-tight">{title}</h1>
        </header>

        {/* Phone: the same contents, folded above the text. */}
        {contents.length > 1 && (
          <details className="disclose mb-8 border-y border-border lg:hidden">
            <summary className="text-sm text-ink">
              {contentsLabel}
              <ChevronDown size={16} aria-hidden className="disclose-chevron text-text-muted" />
            </summary>
            <ol className="space-y-1 pb-4 text-sm">
              {contents.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="flex min-h-[40px] items-center text-text-muted">
                    {item.text}
                  </a>
                </li>
              ))}
            </ol>
          </details>
        )}

        <div className="washi-measure text-[length:var(--step-0)] leading-[1.9]">
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

        <div className="my-10" />

        <Link
          href={localizedHref(language, sectionPath(section))}
          className="washi-btn-secondary px-4 py-2.5 text-sm"
        >
          ← {label}
        </Link>
        </div>
        </div>
      </div>
    </PublicPageShell>
  );
}
