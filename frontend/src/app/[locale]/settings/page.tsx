import type { Metadata } from "next";
import SettingsPageContent from "@/components/settings/SettingsPageContent";
import PublicPageShell from "@/components/layout/PublicPageShell";
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

// Public layout, like every other tab (it sat in the signed-in app frame,
// so the header and scrolling changed when you opened it).
export default function SettingsPage() {
  return (
    <PublicPageShell>
      <div className="mx-auto w-full max-w-4xl px-4 py-6 md:px-8 md:py-10">
        <SettingsPageContent />
      </div>
    </PublicPageShell>
  );
}
