import type { Metadata } from "next";
import EntityIndexPage from "@/components/education/EntityIndexPage";
import { ENTITY_SETS } from "@/lib/education/entity-routes";
import { APP_LANGUAGES, parseAppLanguage } from "@/lib/i18n/language";
import { buildPageMetadata } from "@/lib/seo/metadata";

const SET = ENTITY_SETS.nakshatras;

type Params = { params: Promise<{ locale: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return APP_LANGUAGES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const language = parseAppLanguage(locale);

  return buildPageMetadata({
    language,
    path: SET.path,
    title: SET.title[language],
    description: SET.description[language],
  });
}

export default async function NakshatraIndexRoute({ params }: Params) {
  const { locale } = await params;
  return <EntityIndexPage set={SET} language={parseAppLanguage(locale)} />;
}
