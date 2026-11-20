import type { Metadata } from "next";
import WelcomeHomePage from "@/components/home/WelcomeHomePage";
import JsonLd from "@/components/seo/JsonLd";
import { parseAppLanguage } from "@/lib/i18n/language";
import { getSharedCopy } from "@/lib/i18n/shared";
import { toolSummaries } from "@/lib/tools/landing-content";
import LongFormGuide from "@/components/content/LongFormGuide";
import { homeGuide } from "@/lib/tools/content/home-guide";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  faqSchema,
  organizationSchema,
  personSchema,
  websiteSchema,
} from "@/lib/seo/schema";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
  const copy = getSharedCopy(language);

  return buildPageMetadata({
    language,
    path: "/",
    title: copy.metadata.title,
    description: copy.metadata.description,
    bareTitle: true,
  });
}

export default async function HomePage({ params }: Params) {
  const { locale } = await params;
  const language = parseAppLanguage(locale);

  return (
    <>
      {/*
        The homepage emitted no structured data at all, which meant the
        Organization and Person entities were only discoverable from deeper
        pages — the opposite of how an entity graph should be anchored.
      */}
      <JsonLd
        nodes={[
          organizationSchema(language),
          websiteSchema(language),
          personSchema(language),
          ...(homeGuide.faqs.length > 0
            ? [faqSchema(homeGuide.faqs.map((faq) => ({ question: faq.question[language], answer: faq.answer[language] })))]
            : []),
        ]}
      />
      <WelcomeHomePage
        tools={toolSummaries(language)}
        guide={homeGuide.sections.length > 0 ? <LongFormGuide guide={homeGuide} language={language} /> : null}
      />
    </>
  );
}
