import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PublicPageShell from "@/components/layout/PublicPageShell";
import Breadcrumbs from "@/components/education/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { educationSections, uiText } from "@/lib/education";
import { isEducationSectionId } from "@/lib/education/section-links";
import {
  LEARN_ROOT,
  articlePath,
  articleSummary,
  articlesInSection,
  sectionLabel,
  sectionPath,
} from "@/lib/education/article-routes";
import { APP_LANGUAGES, parseAppLanguage } from "@/lib/i18n/language";
import { localizedHref } from "@/lib/i18n/routing";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/schema";

/**
 * Section hub (Phase 3.3 / 3.7).
 *
 * Hub-and-spoke: each of the eight sections gets a page linking every article
 * in it, and each article links back plus laterally. Statically generated, so
 * ~9 sections × 4 locales is build-time HTML rather than 36 dynamic renders.
 */
type Params = { params: Promise<{ locale: string; section: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return APP_LANGUAGES.flatMap((locale) =>
    educationSections.map((section) => ({ locale, section: section.id })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, section } = await params;
  if (!isEducationSectionId(section)) return {};

  const language = parseAppLanguage(locale);
  const label = sectionLabel(section, language);
  const count = articlesInSection(section).length;

  return buildPageMetadata({
    language,
    path: sectionPath(section),
    title: `${label} | ${uiText("learnJyotish", language)}`,
    description: `${label} — ${uiText("sectionOverview", language)} (${count}).`,
  });
}

export default async function SectionPage({ params }: Params) {
  const { locale, section } = await params;
  if (!isEducationSectionId(section)) notFound();

  const language = parseAppLanguage(locale);
  const label = sectionLabel(section, language);
  const articles = articlesInSection(section);

  const crumbs = [
    { name: uiText("home", language), path: "/" },
    { name: uiText("learnJyotish", language), path: LEARN_ROOT },
    { name: label, path: sectionPath(section) },
  ];

  return (
    <PublicPageShell>
      <JsonLd
        nodes={[
          organizationSchema(),
          websiteSchema(language),
          breadcrumbSchema(language, crumbs),
        ]}
      />

      <div className="mx-auto w-full max-w-4xl px-6 py-12">
        <Breadcrumbs
          crumbs={crumbs}
          language={language}
          label={uiText("learnJyotish", language)}
        />

        <p className="washi-eyebrow washi-eyebrow-lead mb-4">
          {uiText("vedicWisdom", language)}
        </p>
        <h1 className="font-header text-[length:var(--step-3)] tracking-tight text-ink">
          {label}
        </h1>

        <hr className="washi-hairline my-10" />

        <h2 className="washi-eyebrow-muted mb-5">
          {uiText("sectionOverview", language)}
        </h2>

        <ul className="grid gap-3 sm:grid-cols-2">
          {articles.map((article) => (
            <li key={article.id}>
              <Link
                href={localizedHref(language, articlePath(article))}
                className="washi-card group flex h-full flex-col gap-2 p-5 transition-colors"
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="font-header text-[length:var(--step-1)] leading-snug text-ink">
                    {article.title[language]}
                  </span>
                  <ArrowUpRight
                    size={15}
                    aria-hidden
                    className="mt-1 shrink-0 text-terracotta"
                  />
                </span>
                <span className="text-sm text-text-muted">
                  {articleSummary(article, language, 110)}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="washi-glyph-divider" aria-hidden />

        <h2 className="washi-eyebrow-muted mb-4">
          {uiText("exploreSections", language)}
        </h2>
        <ul className="flex flex-wrap gap-2">
          {educationSections
            .filter((entry) => entry.id !== section)
            .map((entry) => (
              <li key={entry.id}>
                <Link
                  href={localizedHref(language, sectionPath(entry.id))}
                  className="washi-badge transition-colors hover:text-ink"
                >
                  {entry.label[language]}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </PublicPageShell>
  );
}
