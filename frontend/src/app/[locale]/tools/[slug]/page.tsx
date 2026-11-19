import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import PublicPageShell from "@/components/layout/PublicPageShell";
import Breadcrumbs from "@/components/education/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import SukuyoResult from "@/components/tools/SukuyoResult";
import CompatibilityResult from "@/components/tools/CompatibilityResult";
import NumerologyPanel from "@/components/NumerologyPanel";
import BirthTimeSensitivityPanel from "@/components/BirthTimeSensitivityPanel";
import AnnualForecastPanel from "@/components/AnnualForecastPanel";
import PanchangPanel from "@/components/PanchangPanel";
import BabyNamesPanel from "@/components/BabyNamesPanel";
import NakshatraFinderPanel from "@/components/NakshatraFinderPanel";
import DoshaRemedyReference from "@/components/DoshaRemedyReference";
import GemstonePanel from "@/components/GemstonePanel";
import CareerReportPanel from "@/components/CareerReportPanel";
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
import { TOOL_GROUPS } from "@/lib/home/home-story-copy";
import type { AppLanguage } from "@/lib/i18n/language";

const PAGE_COPY: Record<AppLanguage, { onThisPage: string; tool: string; faq: string; related: string; allTools: string; reading: string }> = {
  ja: { onThisPage: "このページ", tool: "ツール", faq: "よくある質問", related: "関連ツール", allTools: "すべてのツール", reading: "個人鑑定を申し込む" },
  en: { onThisPage: "On this page", tool: "The tool", faq: "Questions", related: "Related tools", allTools: "All tools", reading: "Request a personal reading" },
  hi: { onThisPage: "इस पृष्ठ पर", tool: "उपकरण", faq: "प्रश्न", related: "संबंधित उपकरण", allTools: "सभी उपकरण", reading: "व्यक्तिगत रीडिंग का अनुरोध करें" },
  ko: { onThisPage: "이 페이지", tool: "도구", faq: "자주 묻는 질문", related: "관련 도구", allTools: "모든 도구", reading: "개인 감정 신청하기" },
};

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
    { name: PAGE_COPY[language].allTools, path: "/tools" },
    { name: tool.title[language], path },
  ];
  const pc = PAGE_COPY[language];
  const siblings = (Object.values(TOOL_GROUPS).find((group) => group.includes(slug)) ?? [])
    .filter((s) => s !== slug)
    .map((s) => TOOL_LANDINGS.find((t) => t.slug === s))
    .filter((t): t is (typeof TOOL_LANDINGS)[number] => Boolean(t));

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

      <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-8 md:py-12">
        <Breadcrumbs
          crumbs={crumbs}
          language={language}
          label={tool.title[language]}
        />

        {/*
          Desktop: tool + guide in the main column, a sticky side panel with
          "on this page", sibling tools and the reading. Phone: one column;
          the guide and FAQ fold into accordions (still in the HTML).
        */}
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-14">
        <div className="min-w-0">
        <h1 className="ma-title mt-2 tracking-tight">
          {tool.title[language]}
        </h1>
        <p className="washi-measure mt-4 font-body leading-[1.9] text-text-muted">
          {tool.lead[language]}
        </p>
        <div id="tool" className="scroll-mt-24" />

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
        {tool.resultPanel === "numerology" ? (
          <div className="mt-10">
            <NumerologyPanel />
          </div>
        ) : null}
        {tool.resultPanel === "birthTimeSensitivity" ? (
          <div className="mt-10">
            <BirthTimeSensitivityPanel />
          </div>
        ) : null}
        {tool.resultPanel === "annualForecast" ? (
          <div className="mt-10">
            <AnnualForecastPanel />
          </div>
        ) : null}
        {tool.resultPanel === "panchang" ? (
          <div className="mt-10">
            <PanchangPanel />
          </div>
        ) : null}
        {tool.resultPanel === "babyNames" ? (
          <div className="mt-10">
            <BabyNamesPanel />
          </div>
        ) : null}
        {tool.resultPanel === "nakshatraFinder" ? (
          <div className="mt-10">
            <NakshatraFinderPanel />
          </div>
        ) : null}
        {tool.resultPanel === "gemstone" ? (
          <div className="mt-10">
            <GemstonePanel />
          </div>
        ) : null}
        {tool.resultPanel === "careerReport" ? (
          <div className="mt-10">
            <CareerReportPanel />
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
        {tool.slug === "mangal-dosha" ? <DoshaRemedyReference /> : null}

        <hr className="my-12 h-px border-0 bg-border" />

        {/*
          Long-form body. A calculator plus three FAQs does not rank against a
          competitor running thousands of words per page; these sections are
          that depth, written to explain rather than to fill.
        */}
        {longForm ? (
          <article className="washi-measure border-t border-border lg:border-0">
            {longForm.sections.map((section, index) => (
              <details
                key={section.heading.en}
                id={`guide-${index}`}
                open={index === 0}
                className="disclose disclose-desktop-open scroll-mt-24 border-b border-border lg:mb-12 lg:border-0"
              >
                <summary className="py-2 lg:mb-4 lg:py-0">
                  <h2 className="font-header text-[length:var(--step-1)] text-ink lg:text-[length:var(--step-2)]">
                    {section.heading[language]}
                  </h2>
                  <ChevronDown size={18} aria-hidden className="disclose-chevron text-text-muted" />
                </summary>
                <div className="pb-6 lg:pb-0">
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
                </div>
              </details>
            ))}
          </article>
        ) : null}

        {longForm ? <div className="my-12" /> : null}

        {/*
         * Question-shaped H2 with the answer in the first sentence — the shape
         * that wins featured snippets and AI Overview citations (Phase 3.12).
         */}
        <section id="faq" className="washi-measure scroll-mt-24 border-t border-border" aria-label={pc.faq}>
          {tool.faqs.map((faq) => (
            <details key={faq.question.en} className="disclose border-b border-border">
              <summary className="py-2">
                <h2 className="font-header text-[length:var(--step-1)] text-ink">
                  {faq.question[language]}
                </h2>
                <ChevronDown size={18} aria-hidden className="disclose-chevron text-text-muted" />
              </summary>
              <p className="pb-5 font-body leading-[1.9] text-text">{faq.answer[language]}</p>
            </details>
          ))}
        </section>

        <nav aria-label={pc.related} className="mt-12">
          <p className="mb-3 text-sm text-text-muted">{pc.related}</p>
          <ul className="snap-rail md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
            {TOOL_LANDINGS.filter((entry) => entry.slug !== slug).map(
              (entry) => (
                <li key={entry.slug}>
                  <Link
                    href={localizedHref(language, `/tools/${entry.slug}`)}
                    className="inline-flex min-h-[40px] items-center whitespace-nowrap rounded-full border border-border px-4 text-[13px] text-text-muted transition-colors hover:border-ink/40 hover:text-ink"
                  >
                    {entry.title[language]}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-8 pt-3 text-sm">
            <nav aria-label={pc.onThisPage}>
              <p className="mb-3 text-xs tracking-[0.08em] text-text-muted">{pc.onThisPage}</p>
              <ul className="space-y-2 border-l border-border">
                <li>
                  <a href="#tool" className="-ml-px block border-l border-transparent pl-4 text-text-muted transition-colors hover:border-ink hover:text-ink">
                    {pc.tool}
                  </a>
                </li>
                {longForm?.sections.map((section, index) => (
                  <li key={section.heading.en}>
                    <a href={`#guide-${index}`} className="-ml-px block border-l border-transparent pl-4 leading-snug text-text-muted transition-colors hover:border-ink hover:text-ink">
                      {section.heading[language]}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#faq" className="-ml-px block border-l border-transparent pl-4 text-text-muted transition-colors hover:border-ink hover:text-ink">
                    {pc.faq}
                  </a>
                </li>
              </ul>
            </nav>
            {siblings.length > 0 && (
              <div>
                <p className="mb-3 text-xs tracking-[0.08em] text-text-muted">{pc.related}</p>
                <ul className="space-y-2">
                  {siblings.map((entry) => (
                    <li key={entry.slug}>
                      <Link href={localizedHref(language, `/tools/${entry.slug}`)} className="block leading-snug text-ink transition-colors hover:text-moss">
                        {entry.title[language]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <Link
              href={localizedHref(language, "/personal-appraisals")}
              className="washi-btn-secondary w-full gap-2 px-4 text-xs"
            >
              {pc.reading}
              <ArrowRight size={13} aria-hidden />
            </Link>
          </div>
        </aside>
        </div>
      </div>
    </PublicPageShell>
  );
}
