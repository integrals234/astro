import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PublicPageShell from "@/components/layout/PublicPageShell";
import Breadcrumbs from "@/components/education/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import SukuyoResult from "@/components/tools/SukuyoResult";
import CompatibilityResult from "@/components/tools/CompatibilityResult";
import ChartSectionResult from "@/components/tools/ChartSectionResult";
import { uiText } from "@/lib/education";
import {
  TOOL_LANDINGS,
  findToolLanding,
} from "@/lib/tools/landing-content";
import { findToolLongForm } from "@/lib/tools/content";
import { APP_LANGUAGES, parseAppLanguage } from "@/lib/i18n/language";
import { localizedHref } from "@/lib/i18n/routing";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  faqSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/schema";
import { localeUrl, SITE_NAME } from "@/lib/seo/site";

/**
 * Intent-specific tool landing pages (Phase 3.6).
 *
 * The tool is embedded and working above the fold — that is what separates
 * these from doorway pages, along with per-page copy, a per-page FAQ, and
 * only the chart section(s) each one actually needs.
 */
type Params = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return APP_LANGUAGES.flatMap((locale) =>
    TOOL_LANDINGS.map((tool) => ({ locale, slug: tool.slug })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const tool = findToolLanding(slug);
  if (!tool) return {};

  const language = parseAppLanguage(locale);

  return buildPageMetadata({
    language,
    path: `/tools/${slug}`,
    title: tool.title[language],
    description: tool.description[language],
  });
}

export default async function ToolLandingPage({ params }: Params) {
  const { locale, slug } = await params;
  const tool = findToolLanding(slug);
  if (!tool) notFound();

  const language = parseAppLanguage(locale);
  const path = `/tools/${slug}`;
  const longForm = findToolLongForm(slug);

  const crumbs = [
    { name: uiText("home", language), path: "/" },
    { name: uiText("generateChart", language), path: "/chart" },
    { name: tool.title[language], path },
  ];

  return (
    <PublicPageShell>
      <JsonLd
        nodes={[
          organizationSchema(language),
          websiteSchema(language),
          breadcrumbSchema(language, crumbs),
          {
            "@type": "SoftwareApplication",
            "@id": `${localeUrl(language, path)}#app`,
            name: tool.title[language],
            description: tool.description[language],
            applicationCategory: "UtilitiesApplication",
            operatingSystem: "Web",
            url: localeUrl(language, path),
            inLanguage: language,
            publisher: { "@type": "Organization", name: SITE_NAME },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "JPY",
            },
          },
          faqSchema(
            tool.faqs.map((faq) => ({
              question: faq.question[language],
              answer: faq.answer[language],
            })),
          ),
        ]}
      />

      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <Breadcrumbs
          crumbs={crumbs}
          language={language}
          label={tool.title[language]}
        />

        <p className="washi-eyebrow washi-eyebrow-lead mb-4">
          {uiText("generateChart", language)}
        </p>
        <h1 className="font-header text-[length:var(--step-3)] tracking-tight text-ink">
          {tool.title[language]}
        </h1>
        <p className="washi-measure mt-4 font-body text-text-muted">
          {tool.lead[language]}
        </p>

        {/*
          Purpose-built answer first, general workspace below. A visitor with a
          saved profile sees their result without touching a form; the workspace
          remains as the way to enter or change birth details.
        */}
        {tool.resultPanel === "sukuyo" ? (
          <div className="mt-10">
            <SukuyoResult />
          </div>
        ) : null}
        {tool.resultPanel === "compatibility" ? (
          <div className="mt-10">
            <CompatibilityResult />
          </div>
        ) : null}
        {tool.sections ? (
          <div className="mt-10" id="tool-form">
            <ChartSectionResult
              sections={tool.sections}
              toolSlug={tool.slug}
              handoffTool={tool.chartHandoff}
            />
          </div>
        ) : null}

        <hr className="washi-hairline my-14" />

        {/*
          Long-form body. A calculator plus three FAQs does not rank against a
          competitor running thousands of words per page; these sections are
          that depth, written to explain rather than to fill.
        */}
        {longForm ? (
          <article className="washi-measure">
            {longForm.sections.map((section) => (
              <section key={section.heading.en} className="mb-12">
                <h2 className="mb-4 font-header text-[length:var(--step-2)] text-ink">
                  {section.heading[language]}
                </h2>
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph.en}
                    className="mb-4 font-body leading-relaxed text-text"
                  >
                    {paragraph[language]}
                  </p>
                ))}
                {section.bullets ? (
                  <ul className="mt-5 space-y-2">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet.en}
                        className="flex items-start gap-2.5 font-body text-sm text-text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-moss" />
                        {bullet[language]}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>
        ) : null}

        {longForm ? <hr className="washi-hairline my-14" /> : null}

        {/*
         * Question-shaped H2 with the answer in the first sentence — the shape
         * that wins featured snippets and AI Overview citations (Phase 3.12).
         */}
        <section className="washi-measure">
          {tool.faqs.map((faq) => (
            <div key={faq.question.en} className="mb-8">
              <h2 className="mb-3 font-header text-[length:var(--step-2)] text-ink">
                {faq.question[language]}
              </h2>
              <p className="font-body text-text">{faq.answer[language]}</p>
            </div>
          ))}
        </section>

        <div className="washi-glyph-divider" aria-hidden />

        <nav aria-label={uiText("generateChart", language)}>
          <ul className="flex flex-wrap gap-2">
            {TOOL_LANDINGS.filter((entry) => entry.slug !== slug).map(
              (entry) => (
                <li key={entry.slug}>
                  <Link
                    href={localizedHref(language, `/tools/${entry.slug}`)}
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
