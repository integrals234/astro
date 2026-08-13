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

      <div className="mx-auto w-full max-w-5xl px-6 py-12">
        <Breadcrumbs crumbs={crumbs} language={language} label={title} />

        <p className="washi-eyebrow washi-eyebrow-lead mb-4">
          {uiText("learnJyotish", language)}
        </p>
        <h1 className="font-header text-[length:var(--step-3)] tracking-tight text-ink">
          {title}
        </h1>
        <p className="washi-measure mt-4 text-text-muted">
          {set.description[language]}
        </p>

        <hr className="washi-hairline my-10" />

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {set.entities.map((entity) => (
            <li key={entity.id}>
              <Link
                href={localizedHref(language, entityPath(set, entity))}
                className="washi-card flex h-full items-center gap-4 p-4"
              >
                {entity.image ? (
                  <span className="washi-mat block w-16 shrink-0 p-1.5">
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
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PublicPageShell>
  );
}
