import type { Metadata } from "next";
import Link from "next/link";
import PublicPageShell from "@/components/layout/PublicPageShell";
import Breadcrumbs from "@/components/education/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { aboutContent, ABOUT_KNOWS_ABOUT } from "@/lib/about/content";
import { uiText } from "@/lib/education";
import { APP_LANGUAGES, parseAppLanguage } from "@/lib/i18n/language";
import { localizedHref } from "@/lib/i18n/routing";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  organizationSchema,
  websiteSchema,
  ORGANIZATION_ID,
  PERSON_ID,
} from "@/lib/seo/schema";
import { getSharedCopy } from "@/lib/i18n/shared";

/**
 * The practitioner as a searchable entity (Phase 3.13).
 *
 * `Person` schema with a stable `@id` and `sameAs` → Instagram, so the
 * practitioner resolves as an entity rather than as page decoration. AI
 * systems weight provenance heavily on YMYL-adjacent topics, and astrology
 * touching health, money and relationships sits squarely in that zone.
 */
type Params = { params: Promise<{ locale: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return APP_LANGUAGES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const language = parseAppLanguage(locale);

  return buildPageMetadata({
    language,
    path: "/about",
    title: `${aboutContent.title[language]} — ${aboutContent.eyebrow[language]}`,
    description: aboutContent.lead[language],
  });
}

export default async function AboutPage({ params }: Params) {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
  const copy = getSharedCopy(language);

  const crumbs = [
    { name: uiText("home", language), path: "/" },
    { name: aboutContent.eyebrow[language], path: "/about" },
  ];

  return (
    <PublicPageShell>
      <JsonLd
        nodes={[
          organizationSchema(),
          websiteSchema(language),
          breadcrumbSchema(language, crumbs),
          {
            "@type": "Person",
            "@id": PERSON_ID,
            name: aboutContent.title[language],
            description: aboutContent.lead[language],
            knowsAbout: ABOUT_KNOWS_ABOUT,
            sameAs: ["https://www.instagram.com/jyotishlife.jp/"],
            worksFor: { "@id": ORGANIZATION_ID },
          },
        ]}
      />

      <div className="mx-auto w-full max-w-3xl px-6 py-12">
        <Breadcrumbs
          crumbs={crumbs}
          language={language}
          label={aboutContent.eyebrow[language]}
        />

        <p className="washi-eyebrow washi-eyebrow-lead mb-4">
          {aboutContent.eyebrow[language]}
        </p>
        <h1 className="font-header text-[length:var(--step-3)] tracking-tight text-ink">
          {aboutContent.title[language]}
        </h1>
        <p className="washi-measure mt-4 font-header text-[length:var(--step-1)] italic text-text-muted">
          {aboutContent.lead[language]}
        </p>

        <hr className="washi-hairline my-10" />

        <p className="washi-measure font-body text-text">
          {aboutContent.body[language]}
        </p>

        <section className="mt-10">
          <h2 className="washi-eyebrow-muted mb-4">
            {aboutContent.knowsAboutHeading[language]}
          </h2>
          <ul className="flex flex-wrap gap-2">
            {ABOUT_KNOWS_ABOUT.map((topic) => (
              <li key={topic} className="washi-badge">
                {topic}
              </li>
            ))}
          </ul>
        </section>

        <div className="washi-glyph-divider" aria-hidden />

        <p className="washi-measure text-xs text-text-muted">
          {aboutContent.disclaimer[language]}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href={localizedHref(language, "/personal-appraisals")}
            className="washi-btn-primary px-6 py-3.5 text-sm"
          >
            {copy.navigation.appraisals}
          </Link>
          <Link
            href={localizedHref(language, "/learn-jyotish")}
            className="washi-btn-secondary px-6 py-3.5 text-sm"
          >
            {copy.navigation.learn}
          </Link>
        </div>
      </div>
    </PublicPageShell>
  );
}
