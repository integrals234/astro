import type { Metadata } from "next";
import LearnJyotishPageClient from "@/components/education/LearnJyotishPageClient";
import { parseAppLanguage } from "@/lib/i18n/language";
import { getSharedCopy } from "@/lib/i18n/shared";
import { buildPageMetadata } from "@/lib/seo/metadata";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
  const copy = getSharedCopy(language);

  return buildPageMetadata({
    language,
    path: "/learn-jyotish",
    title: copy.navigation.learn,
    description: copy.navigation.learnDescription,
  });
}

export default function LearnJyotishPage() {
  return <LearnJyotishPageClient />;
}
