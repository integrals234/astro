import type { Metadata } from "next";
import SettingsPageContent from "@/components/settings/SettingsPageContent";
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
    path: "/settings",
    title: copy.navigation.settings,
    description: copy.navigation.settingsDescription,
    noindex: true,
  });
}

export default function SettingsPage() {
  return <SettingsPageContent />;
}
