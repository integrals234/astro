import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import PublicPageShell from "@/components/layout/PublicPageShell";
import Breadcrumbs from "@/components/education/Breadcrumbs";
import { uiText } from "@/lib/education";
import {
  LEGAL_DOCUMENTS,
  LEGAL_DRAFT_NOTICE,
  LEGAL_IN_FORCE,
  findLegalDocument,
} from "@/lib/legal/content";
import type { LegalSection } from "@/lib/legal/content";
import { APP_LANGUAGES, parseAppLanguage } from "@/lib/i18n/language";
import type { AppLanguage } from "@/lib/i18n/language";
import { localizedHref } from "@/lib/i18n/routing";
import { buildPageMetadata } from "@/lib/seo/metadata";

/**
 * Legal documents.
 *
 * Indexing is tied to `LEGAL_IN_FORCE` rather than hardcoded: while these are
 * drafts they stay `noindex`, and flipping that one flag after legal review
 * publishes all four at once. Search engines showing a draft 特定商取引法
 * notation would be worse than showing nothing, since that notation is the
 * page a regulator or a wary customer looks for specifically.
 */
type Params = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return APP_LANGUAGES.flatMap((locale) =>
    LEGAL_DOCUMENTS.map((document) => ({ locale, slug: document.slug })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const document = findLegalDocument(slug);
  if (!document) return {};

  const language = parseAppLanguage(locale);

  return buildPageMetadata({
    language,
    path: `/legal/${slug}`,
    title: document.title[language],
    description: document.summary[language],
    noindex: !LEGAL_IN_FORCE,
  });
}

const LAST_UPDATED_LABEL: Record<AppLanguage, string> = {
  en: "Last updated",
  hi: "अंतिम अद्यतन",
  ja: "最終更新日",
  ko: "최종 갱신일",
};

function SectionBlock({
  section,
  language,
}: {
  section: LegalSection;
  language: AppLanguage;
}) {
  return (
    <section id={section.id} className="mt-10 scroll-mt-24">
      <h2 className="font-header text-[length:var(--step-1)] text-ink">
        {section.heading[language]}
      </h2>

      {section.body?.map((paragraph) => (
        <p
          key={paragraph.en}
          className="mt-4 font-body text-sm leading-relaxed text-text"
        >
          {paragraph[language]}
        </p>
      ))}

      {section.bullets ? (
        <ul className="mt-4 space-y-2.5">
          {section.bullets.map((bullet) => (
            <li
              key={bullet.en}
              className="flex items-start gap-2.5 font-body text-sm leading-relaxed text-text"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-moss" />
              {bullet[language]}
            </li>
          ))}
        </ul>
      ) : null}

      {section.rows ? (
        <dl className="mt-5 divide-y divide-border border-y border-border">
          {section.rows.map((row) => (
            <div
              key={row.label.en}
              className="grid gap-1 py-4 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-6"
            >
              <dt className="font-body text-sm font-medium text-ink">
                {row.label[language]}
              </dt>
              <dd className="font-body text-sm leading-relaxed text-text">
                {row.value[language]}
                {row.note ? (
                  <span className="mt-2 block text-xs leading-relaxed text-text-muted">
                    {row.note[language]}
                  </span>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}
    </section>
  );
}

export default async function LegalPage({ params }: Params) {
  const { locale, slug } = await params;
  const document = findLegalDocument(slug);
  if (!document) notFound();

  const language = parseAppLanguage(locale);
  const crumbs = [
    { name: uiText("home", language), path: "/" },
    { name: document.title[language], path: `/legal/${slug}` },
  ];

  return (
    <PublicPageShell>
      <div className="mx-auto w-full max-w-3xl px-6 py-12">
        <Breadcrumbs
          crumbs={crumbs}
          language={language}
          label={document.title[language]}
        />

        <h1 className="font-header text-[length:var(--step-3)] tracking-tight text-ink">
          {document.title[language]}
        </h1>

        <p className="mt-3 text-xs text-text-muted">
          {LAST_UPDATED_LABEL[language]}: {document.lastUpdated}
        </p>

        {LEGAL_IN_FORCE ? null : (
          <div
            role="note"
            className="washi-callout mt-8 flex items-start gap-3 bg-terracotta-tint px-5 py-4"
          >
            <AlertTriangle
              size={16}
              aria-hidden
              className="mt-0.5 shrink-0 text-terracotta-deep"
            />
            <p className="text-sm leading-relaxed text-ink">
              {LEGAL_DRAFT_NOTICE[language]}
            </p>
          </div>
        )}

        <p className="washi-measure mt-8 font-body text-text">
          {document.summary[language]}
        </p>

        {document.sections.map((section) => (
          <SectionBlock
            key={section.id}
            section={section}
            language={language}
          />
        ))}

        <hr className="washi-hairline my-10" />

        <nav aria-label={document.title[language]}>
          <ul className="flex flex-wrap gap-2">
            {LEGAL_DOCUMENTS.filter((entry) => entry.slug !== slug).map(
              (entry) => (
                <li key={entry.slug}>
                  <Link
                    href={localizedHref(language, `/legal/${entry.slug}`)}
                    className="washi-badge transition-colors hover:text-ink"
                  >
                    {entry.title[language]}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>
    </PublicPageShell>
  );
}
