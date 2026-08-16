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

  // `noindex` until this becomes the real pricing page. A waitlist with a
  // non-functional button is a thin page, and an indexed one drags on sitewide
  // quality — the same reasoning that removed /blogs.
  return buildPageMetadata({
    language,
    path: "/premium",
    title: copy.premium.title,
    description: copy.premium.description,
    noindex: true,
  });
}

export default function PremiumPage() {
  return <PremiumPageClient />;
}
