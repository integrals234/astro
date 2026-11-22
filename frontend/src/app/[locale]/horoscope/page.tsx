import type { Metadata } from "next";
import HoroscopePage from "@/components/horoscope/HoroscopePage";
import { parseAppLanguage } from "@/lib/i18n/language";
import { getSharedCopy } from "@/lib/i18n/shared";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { seoPageCopy } from "@/lib/seo/page-copy";

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
  const copy = getSharedCopy(language);

  return buildPageMetadata({
    language,
    path: "/horoscope",
    title: seoPageCopy[language].horoscope.title,
    description: seoPageCopy[language].horoscope.description,
  });
}

export default function HoroscopeRoutePage() {
  return <HoroscopePage />;
}
