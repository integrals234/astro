import type { Metadata } from "next";
import WelcomeHomePage from "@/components/home/WelcomeHomePage";
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
    path: "/",
    title: copy.metadata.title,
    description: copy.metadata.description,
    bareTitle: true,
  });
}

export default function HomePage() {
  return <WelcomeHomePage />;
}
