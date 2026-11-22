import type { Metadata } from "next";
import HoroscopePage from "@/components/horoscope/HoroscopePage";
import { parseAppLanguage } from "@/lib/i18n/language";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { seoPageCopy } from "@/lib/seo/page-copy";

/** Readings are computed for the current week/month/year: refresh hourly. */
export const revalidate = 3600;

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
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
