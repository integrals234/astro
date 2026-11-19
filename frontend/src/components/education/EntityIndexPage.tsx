import Image from "next/image";
import Link from "next/link";
import PublicPageShell from "@/components/layout/PublicPageShell";
import Breadcrumbs from "@/components/education/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { uiText } from "@/lib/education";
import { entityPath, type EntitySet } from "@/lib/education/entity-routes";
import type { AppLanguage } from "@/lib/i18n/language";
import { localizedHref } from "@/lib/i18n/routing";
import {
  breadcrumbSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/schema";
import { localeUrl } from "@/lib/seo/site";

/** Set hub — the `DefinedTermSet` landing page for one entity family. */
export default function EntityIndexPage({
  set,
  language,
}: {
  set: EntitySet;
  language: AppLanguage;
}) {
  const title = set.title[language];
  const crumbs = [
    { name: uiText("home", language), path: "/" },
    { name: title, path: set.path },
  ];

  return (
    <PublicPageShell>
      <JsonLd
        nodes={[
          organizationSchema(),
          websiteSchema(language),
          breadcrumbSchema(language, crumbs),
          {
            "@type": "DefinedTermSet",
            "@id": `${localeUrl(language, set.path)}#termset`,
            name: title,
            description: set.description[language],
            url: localeUrl(language, set.path),
            inLanguage: language,
            hasDefinedTerm: set.entities.map((entity) => ({
              "@type": "DefinedTerm",
              name: entity.name[language],
              url: localeUrl(language, entityPath(set, entity)),
            })),
          },
        ]}
      />

      <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-8 md:py-12">
        <Breadcrumbs crumbs={crumbs} language={language} label={title} />

        <h1 className="ma-title mt-2 tracking-tight">{title}</h1>
        <p className="washi-measure mt-4 leading-[1.9] text-text-muted">
          {set.description[language]}
        </p>

        {/* Phone: two compact columns (27 cards in ~5 screens, not 14).
            Desktop: hover or focus a card to preview its meaning. */}
        <ul className="mt-10 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-3 xl:grid-cols-4">
          {set.entities.map((entity) => (
            <li key={entity.id}>
              <Link
                href={localizedHref(language, entityPath(set, entity))}
                className="washi-card washi-card-interactive group flex h-full flex-col gap-3 p-3 sm:flex-row sm:items-start sm:gap-4 sm:p-4"
              >
                {entity.image ? (
                  <span className="washi-mat block w-12 shrink-0 sm:w-16">
                    <Image
                      src={entity.image}
                      alt=""
                      width={120}
                      height={120}
                      sizes="64px"
                    />
                  </span>
                ) : null}
                <span className="min-w-0">
                  {entity.number ? (
                    <span className="block text-[11px] tabular-nums text-terracotta">
                      {String(entity.number).padStart(2, "0")}
                    </span>
                  ) : null}
                  <span className="block font-header text-[length:var(--step-1)] leading-snug text-ink">
                    {entity.name[language]}
                  </span>
                  <span className="block text-xs text-text-muted">
                    {entity.sanskrit[language]}
                  </span>
                  <span className="mt-2 hidden text-xs leading-[1.7] text-moss opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 lg:line-clamp-2">
                    {entity.description[language]}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PublicPageShell>
  );
}
