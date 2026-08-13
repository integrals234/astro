import Image from "next/image";
import Link from "next/link";
import PublicPageShell from "@/components/layout/PublicPageShell";
import Breadcrumbs from "@/components/education/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import { uiText } from "@/lib/education";
import { entityLabels } from "@/lib/education/entity-labels";
import {
  entityPath,
  entitySummary,
  type EntitySet,
  type EntityView,
} from "@/lib/education/entity-routes";
import type { AppLanguage } from "@/lib/i18n/language";
import { localizedHref } from "@/lib/i18n/routing";
import {
  breadcrumbSchema,
  definedTermSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/schema";

/**
 * Entity detail page (Phase 3.5).
 *
 * Structure follows the answer-engine guidance in 3.12: the definition answers
 * the question in the first paragraph, the attributes are a real table (tables
 * get extracted disproportionately), and the whole thing is marked up as a
 * `DefinedTerm` inside its set.
 */
export default function EntityDetailPage({
  set,
  entity,
  language,
}: {
  set: EntitySet;
  entity: EntityView;
  language: AppLanguage;
}) {
  const setTitle = set.title[language];
  const name = entity.name[language];
  const path = entityPath(set, entity);

  const crumbs = [
    { name: uiText("home", language), path: "/" },
    { name: setTitle, path: set.path },
    { name, path },
  ];

  // Lateral links within the set — every entity reaches its neighbours, so no
  // page in the corpus is more than a couple of clicks from any other.
  const siblings = set.entities.filter((item) => item.id !== entity.id);

  return (
    <PublicPageShell>
      <JsonLd
        nodes={[
          organizationSchema(),
          websiteSchema(language),
          breadcrumbSchema(language, crumbs),
          definedTermSchema({
            language,
            path,
            name,
            description: entitySummary(entity, language, 300),
            termSetName: setTitle,
            termSetPath: set.path,
          }),
        ]}
      />

      <div className="mx-auto w-full max-w-3xl px-6 py-12">
        <Breadcrumbs crumbs={crumbs} language={language} label={setTitle} />

        <header className="mb-8">
          <p className="washi-eyebrow washi-eyebrow-lead mb-4">{setTitle}</p>
          <h1 className="font-header text-[length:var(--step-3)] tracking-tight text-ink">
            {name}
          </h1>
          <p className="mt-2 font-header text-[length:var(--step-1)] italic text-text-muted">
            {entity.sanskrit[language]}
          </p>
        </header>

        {entity.image ? (
          <figure className="washi-mat mb-9">
            <Image
              src={entity.image}
              alt={name}
              width={800}
              height={800}
              priority
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </figure>
        ) : null}

        <p className="washi-measure mb-9 font-body text-text">
          {entity.description[language]}
        </p>

        {entity.attributes.length > 0 && (
          <div className="mb-9 overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-left text-sm">
              <tbody>
                {entity.attributes.map((attribute) => (
                  <tr
                    key={attribute.label.en}
                    className="border-b border-border last:border-b-0"
                  >
                    <th
                      scope="row"
                      className="washi-table-header w-2/5 px-4 py-3 align-top font-medium"
                    >
                      {attribute.label[language]}
                    </th>
                    <td className="px-4 py-3 font-chart text-text">
                      {attribute.value[language]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {entity.bullets.length > 0 && (
          <section className="mb-9">
            {entity.bulletsLabel ? (
              <h2 className="washi-eyebrow-muted mb-3">
                {entity.bulletsLabel[language]}
              </h2>
            ) : null}
            <ul className="flex flex-wrap gap-2">
              {entity.bullets.map((bullet) => (
                <li key={bullet.en} className="washi-badge">
                  {bullet[language]}
                </li>
              ))}
            </ul>
          </section>
        )}

        {entity.sections.map((section) => (
          <section key={section.heading.en} className="washi-measure mb-7">
            <h2 className="mb-3 font-header text-[length:var(--step-2)] text-ink">
              {section.heading[language]}
            </h2>
            <p className="font-body text-text">{section.body[language]}</p>
          </section>
        ))}

        <div className="washi-glyph-divider" aria-hidden />

        <nav aria-label={entityLabels.allEntries[language]}>
          <h2 className="washi-eyebrow-muted mb-4">
            {entityLabels.allEntries[language]}
          </h2>
          <ul className="flex flex-wrap gap-2">
            {siblings.map((sibling) => (
              <li key={sibling.id}>
                <Link
                  href={localizedHref(language, entityPath(set, sibling))}
                  className="washi-badge transition-colors hover:text-ink"
                >
                  {sibling.name[language]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </PublicPageShell>
  );
}
