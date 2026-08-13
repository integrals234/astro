import type { Metadata } from "next";
import PremiumPageClient from "@/components/premium/PremiumPageClient";
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
    path: "/premium",
    title: copy.premium.title,
    description: copy.premium.description,
  });
}

export default function PremiumPage() {
  return <PremiumPageClient />;
}
