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
  findLegalDocument,
} from "@/lib/legal/content";
import { APP_LANGUAGES, parseAppLanguage } from "@/lib/i18n/language";
import { localizedHref } from "@/lib/i18n/routing";
import { buildPageMetadata } from "@/lib/seo/metadata";

/**
 * Legal document stubs. Every one is `noindex` until reviewed — see
 * `src/lib/legal/content.ts` for why.
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
    noindex: true,
  });
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

        <div
          role="note"
          className="washi-callout mt-8 flex items-start gap-3 bg-terracotta-tint px-5 py-4"
        >
          <AlertTriangle
            size={16}
            aria-hidden
            className="mt-0.5 shrink-0 text-terracotta-deep"
          />
          <p className="text-sm text-ink">{LEGAL_DRAFT_NOTICE[language]}</p>
        </div>

        <p className="washi-measure mt-8 font-body text-text">
          {document.summary[language]}
        </p>

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
