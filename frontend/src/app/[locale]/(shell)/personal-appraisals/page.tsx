import type { Metadata } from "next";
import PersonalAppraisalsPageClient from "@/components/personal-appraisals/PersonalAppraisalsPageClient";
import { getDefaultDialCode } from "@/lib/phone/detect-country";
import { parseAppLanguage } from "@/lib/i18n/language";
import { getSharedCopy } from "@/lib/i18n/shared";
import { buildPageMetadata } from "@/lib/seo/metadata";

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
    path: "/personal-appraisals",
    title: copy.appraisals,
    description: copy.appraisalsDescription,
  });
}

export default async function PersonalAppraisalsPage() {
  const defaultDialCode = await getDefaultDialCode();

  return <PersonalAppraisalsPageClient defaultDialCode={defaultDialCode} />;
}
