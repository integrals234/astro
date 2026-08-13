import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EntityDetailPage from "@/components/education/EntityDetailPage";
import {
  ENTITY_SETS,
  entityPath,
  entitySummary,
  findEntity,
} from "@/lib/education/entity-routes";
import { APP_LANGUAGES, parseAppLanguage } from "@/lib/i18n/language";
import { buildPageMetadata } from "@/lib/seo/metadata";

const SET = ENTITY_SETS.rashis;

type Params = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return APP_LANGUAGES.flatMap((locale) =>
    SET.entities.map((entity) => ({ locale, slug: entity.id })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const entity = findEntity(SET, slug);
  if (!entity) return {};

  const language = parseAppLanguage(locale);

  return buildPageMetadata({
    language,
    path: entityPath(SET, entity),
    title: `${entity.name[language]} | ${SET.title[language]}`,
    description: entitySummary(entity, language),
    image: entity.image,
  });
}

export default async function RashiDetailRoute({ params }: Params) {
  const { locale, slug } = await params;
  const entity = findEntity(SET, slug);
  if (!entity) notFound();

  return (
    <EntityDetailPage
      set={SET}
      entity={entity}
      language={parseAppLanguage(locale)}
    />
  );
}
