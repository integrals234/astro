import { redirect } from "next/navigation";
import { parseAppLanguage } from "@/lib/i18n/language";
import { localizedHref } from "@/lib/i18n/routing";

/** Legacy path. Kept as a redirect so old links and bookmarks still resolve. */
export default async function RecentChartsRedirectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(localizedHref(parseAppLanguage(locale), "/chart/recent"));
}
