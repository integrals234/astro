import type { Metadata } from "next";
import PersonalAppraisalsPageClient from "@/components/personal-appraisals/PersonalAppraisalsPageClient";
import JsonLd from "@/components/seo/JsonLd";
import { uiText } from "@/lib/education";
import { getDefaultDialCode } from "@/lib/phone/detect-country";
import { parseAppLanguage } from "@/lib/i18n/language";
import { getSharedCopy } from "@/lib/i18n/shared";
import { getAppraisalContent } from "@/lib/personal-appraisals/i18n/content";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbSchema,
  organizationSchema,
  personSchema,
  serviceSchema,
  websiteSchema,
} from "@/lib/seo/schema";

const PATH = "/personal-appraisals";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
  const copy = getSharedCopy(language).navigation;

  return buildPageMetadata({
    language,
    path: PATH,
    title: copy.appraisals,
    description: copy.appraisalsDescription,
  });
}

export default async function PersonalAppraisalsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
  const defaultDialCode = await getDefaultDialCode();

  const nav = getSharedCopy(language).navigation;
  const content = getAppraisalContent(language);

  /*
    This is the only page on the site where money changes hands, and it was
    emitting no structured data at all. `Service` + one `Offer` per consultation
    format is what makes the offering legible as a commercial entity rather than
    as prose.
  */
  return (
    <>
      <JsonLd
        nodes={[
          organizationSchema(language),
          websiteSchema(language),
          personSchema(language),
          breadcrumbSchema(language, [
            { name: uiText("home", language), path: "/" },
            { name: nav.appraisals, path: PATH },
          ]),
          serviceSchema({
            language,
            path: PATH,
            name: content.header.title,
            description: content.header.description,
            offers: content.offerings.items.map((item) => ({
              id: item.id,
              name: item.title,
              description: item.description,
            })),
          }),
        ]}
      />
      <PersonalAppraisalsPageClient defaultDialCode={defaultDialCode} />
    </>
  );
}
