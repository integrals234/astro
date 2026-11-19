import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
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
import type { EntitySetId } from "@/lib/education/entity-routes";

/** The personal next step from each reference page: find *your* one. */
const PERSONAL_STEP: Record<EntitySetId, { href: string; label: Record<AppLanguage, string> }> = {
  nakshatras: {
    href: "/tools/nakshatra-finder",
    label: { ja: "あなたのナクシャトラを調べる", en: "Find your own nakshatra", hi: "अपना नक्षत्र जानें", ko: "나의 낙샤트라 찾기" },
  },
  rashis: {
    href: "/tools/moon-sign",
    label: { ja: "あなたの月星座を調べる", en: "Find your Moon sign", hi: "अपनी चंद्र राशि जानें", ko: "나의 달 별자리 찾기" },
  },
  grahas: {
    href: "/tools/birth-chart",
    label: { ja: "あなたの出生図で惑星の位置を見る", en: "See where it sits in your chart", hi: "अपनी कुंडली में इसकी स्थिति देखें", ko: "나의 차트에서 위치 보기" },
  },
};
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
  const index = set.entities.findIndex((item) => item.id === entity.id);
  const prev = index > 0 ? set.entities[index - 1] : null;
  const next = index < set.entities.length - 1 ? set.entities[index + 1] : null;
  const personal = PERSONAL_STEP[set.id];

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

      <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-8 md:py-12">
        <Breadcrumbs crumbs={crumbs} language={language} label={setTitle} />

        <header className="mb-8 mt-2">
          <h1 className="ma-title tracking-tight">{name}</h1>
          <p className="mt-1 font-header text-[length:var(--step-1)] text-text-muted">
            {entity.sanskrit[language]}
          </p>
        </header>

        {/* Desktop: the figure and its facts held beside the reading.
            Phone: one column, the long sections folded. */}
        <div className="lg:grid lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            {entity.image ? (
              <figure className="washi-mat mx-auto mb-8 max-w-[260px] lg:max-w-none">
                <Image
                  src={entity.image}
                  alt={name}
                  width={800}
                  height={800}
                  priority
                  sizes="(max-width: 1024px) 260px, 352px"
                />
              </figure>
            ) : null}

            {entity.attributes.length > 0 && (
              <dl className="mb-8 divide-y divide-border border-y border-border text-sm">
                {entity.attributes.map((attribute) => (
                  <div key={attribute.label.en} className="grid grid-cols-[2fr_3fr] gap-3 py-2.5">
                    <dt className="text-text-muted">{attribute.label[language]}</dt>
                    <dd className="text-text">{attribute.value[language]}</dd>
                  </div>
                ))}
              </dl>
            )}

            <Link
              href={localizedHref(language, personal.href)}
              className="washi-btn-primary mb-10 w-full gap-2 text-sm"
            >
              {personal.label[language]}
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>

          <div className="min-w-0">
            <p className="washi-measure mb-8 font-body text-[length:var(--step-1)] leading-[1.9] text-text">
              {entity.description[language]}
            </p>

            {entity.bullets.length > 0 && (
              <section className="mb-9">
                {entity.bulletsLabel ? (
                  <h2 className="mb-3 text-sm text-text-muted">{entity.bulletsLabel[language]}</h2>
                ) : null}
                <ul className="flex flex-wrap gap-2">
                  {entity.bullets.map((bullet) => (
                    <li key={bullet.en} className="rounded-full border border-border px-3.5 py-1.5 text-[13px] text-text">
                      {bullet[language]}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <div className="border-t border-border lg:border-0">
              {entity.sections.map((section, i) => (
                <details
                  key={section.heading.en}
                  open={i === 0}
                  className="disclose disclose-desktop-open washi-measure border-b border-border lg:mb-8 lg:border-0"
                >
                  <summary className="py-2 lg:mb-3 lg:py-0">
                    <h2 className="font-header text-[length:var(--step-1)] text-ink lg:text-[length:var(--step-2)]">
                      {section.heading[language]}
                    </h2>
                    <ChevronDown size={18} aria-hidden className="disclose-chevron text-text-muted" />
                  </summary>
                  <p className="pb-6 font-body leading-[1.9] text-text lg:pb-0">{section.body[language]}</p>
                </details>
              ))}
            </div>

            {/* Previous / next in the set's own order. */}
            <nav className="mt-10 grid grid-cols-2 gap-3" aria-label={setTitle}>
              {prev ? (
                <Link href={localizedHref(language, entityPath(set, prev))} className="washi-card washi-card-interactive flex min-h-[64px] items-center gap-2 p-4 text-sm text-ink">
                  <ArrowLeft size={14} aria-hidden className="shrink-0 text-text-muted" />
                  <span className="min-w-0 truncate">{prev.name[language]}</span>
                </Link>
              ) : <span />}
              {next ? (
                <Link href={localizedHref(language, entityPath(set, next))} className="washi-card washi-card-interactive flex min-h-[64px] items-center justify-end gap-2 p-4 text-right text-sm text-ink">
                  <span className="min-w-0 truncate">{next.name[language]}</span>
                  <ArrowRight size={14} aria-hidden className="shrink-0 text-text-muted" />
                </Link>
              ) : <span />}
            </nav>

            <nav aria-label={entityLabels.allEntries[language]} className="mt-10">
              <h2 className="mb-3 text-sm text-text-muted">{entityLabels.allEntries[language]}</h2>
              <ul className="snap-rail md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
                {siblings.map((sibling) => (
                  <li key={sibling.id}>
                    <Link
                      href={localizedHref(language, entityPath(set, sibling))}
                      className="inline-flex min-h-[40px] items-center whitespace-nowrap rounded-full border border-border px-4 text-[13px] text-text-muted transition-colors hover:border-ink/40 hover:text-ink"
                    >
                      {sibling.name[language]}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </PublicPageShell>
  );
}
