import type { Metadata } from "next";
import LearnJyotishPageClient from "@/components/education/LearnJyotishPageClient";
import JsonLd from "@/components/seo/JsonLd";
import { educationSections, uiText } from "@/lib/education";
import { sectionPath } from "@/lib/education/article-routes";
import { parseAppLanguage } from "@/lib/i18n/language";
import { getSharedCopy } from "@/lib/i18n/shared";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  itemListSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/schema";

type Params = { params: Promise<{ locale: string }> };

const PATH = "/learn-jyotish";

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
  const copy = getSharedCopy(language);

  return buildPageMetadata({
    language,
    path: PATH,
    title: copy.navigation.learn,
    description: copy.navigation.learnDescription,
  });
}

export default async function LearnJyotishPage({ params }: Params) {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
  const copy = getSharedCopy(language);

  return (
    <>
      {/*
        The hub links every section but declared none of them. `ItemList` makes
        the corpus machine-readable instead of inferable from anchors alone.
      */}
      <JsonLd
        nodes={[
          organizationSchema(language),
          websiteSchema(language),
          breadcrumbSchema(language, [
            { name: uiText("home", language), path: "/" },
            { name: copy.navigation.learn, path: PATH },
          ]),
          itemListSchema({
            language,
            path: PATH,
            name: copy.navigation.learn,
            items: educationSections.map((section) => ({
              name: section.label[language],
              path: sectionPath(section.id),
            })),
          }),
        ]}
      />
      <LearnJyotishPageClient />
    </>
  );
}
