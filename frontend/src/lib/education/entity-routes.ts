import { nakshatras } from "./index";
import { planets } from "./planets-content";
import { rashis } from "./rashi-content";
import { educationUi } from "./i18n/ui";
import { entityLabels, rashiSectionLabels } from "./entity-labels";
import type { BilingualText } from "./types";
import type { AppLanguage } from "@/lib/i18n/language";

/**
 * Programmatic entity pages (Phase 3.5) — the main SEO lever.
 *
 * 48 entities × 4 locales, built from structured data the site already owns
 * outright. Every page carries something no template could produce: the
 * existing per-entity prose, the real attribute set, and the actual image
 * asset. Bhavas are deliberately absent — there is no bhava content in the
 * codebase, only house *articles*, and a page assembled purely from a template
 * is exactly the scaled-content pattern Google penalises. 48 real pages beat
 * 60 with 12 thin ones.
 */
export interface EntityAttribute {
  label: BilingualText;
  value: BilingualText;
}

export interface EntitySection {
  heading: BilingualText;
  body: BilingualText;
}

export interface EntityView {
  id: string;
  name: BilingualText;
  sanskrit: BilingualText;
  image?: string;
  /** Ordinal within its set, where the set is ordered (rashis, nakshatras). */
  number?: number;
  attributes: EntityAttribute[];
  description: BilingualText;
  sections: EntitySection[];
  bullets: BilingualText[];
  bulletsLabel?: BilingualText;
}

export type EntitySetId = "nakshatras" | "rashis" | "grahas";

export interface EntitySet {
  id: EntitySetId;
  path: string;
  title: BilingualText;
  description: BilingualText;
  entities: EntityView[];
}

const nakshatraViews: EntityView[] = nakshatras.map((entry) => ({
  id: entry.id,
  name: entry.name,
  sanskrit: entry.sanskrit,
  image: entry.image,
  number: entry.number,
  description: entry.description,
  attributes: [
    { label: educationUi.ruler, value: entry.ruler },
    { label: educationUi.deity, value: entry.deity },
    { label: educationUi.symbol, value: entry.symbol },
    { label: educationUi.range, value: entry.range },
    { label: entityLabels.guna, value: entry.guna },
    { label: entityLabels.natureAttribute, value: entry.nature },
  ],
  sections: [],
  bullets: entry.qualities,
  bulletsLabel: entityLabels.qualities,
}));

const rashiViews: EntityView[] = rashis.map((entry) => ({
  id: entry.id,
  name: entry.name,
  sanskrit: entry.sanskrit,
  image: entry.image,
  number: entry.number,
  description: entry.description,
  attributes: [
    { label: educationUi.ruler, value: entry.ruler },
    { label: educationUi.element, value: entry.element },
    { label: educationUi.symbol, value: entry.symbol },
    { label: educationUi.body, value: entry.bodyPart },
    { label: entityLabels.dates, value: entry.dates },
  ],
  sections: (
    Object.keys(rashiSectionLabels) as Array<keyof typeof rashiSectionLabels>
  ).map((key) => ({
    heading: rashiSectionLabels[key],
    body: entry.sections[key],
  })),
  bullets: entry.traits,
  bulletsLabel: entityLabels.traits,
}));

const grahaViews: EntityView[] = planets.map((entry) => ({
  id: entry.id,
  name: entry.name,
  sanskrit: entry.sanskrit,
  image: entry.image,
  description: entry.description,
  attributes: entry.attributes,
  sections: [
    { heading: educationUi.significations, body: entry.significations },
  ],
  bullets: [],
}));

export const ENTITY_SETS: Record<EntitySetId, EntitySet> = {
  nakshatras: {
    id: "nakshatras",
    path: "/nakshatras",
    title: entityLabels.nakshatrasTitle,
    description: entityLabels.nakshatrasDescription,
    entities: nakshatraViews,
  },
  rashis: {
    id: "rashis",
    path: "/rashis",
    title: entityLabels.rashisTitleLong,
    description: entityLabels.rashisDescription,
    entities: rashiViews,
  },
  grahas: {
    id: "grahas",
    path: "/grahas",
    title: entityLabels.grahasTitle,
    description: entityLabels.grahasDescription,
    entities: grahaViews,
  },
};

export function entityPath(set: EntitySet, entity: EntityView): string {
  return `${set.path}/${entity.id}`;
}

export function findEntity(
  set: EntitySet,
  id: string,
): EntityView | undefined {
  return set.entities.find((entity) => entity.id === id);
}

/**
 * Meta description: the entity's own prose, trimmed. Never a template string —
 * 48 pages sharing one generated sentence is the thin-content failure mode.
 */
export function entitySummary(
  entity: EntityView,
  language: AppLanguage,
  limit = 160,
): string {
  const text = (entity.description[language] ?? "").trim();
  return text.length > limit ? `${text.slice(0, limit - 1).trimEnd()}…` : text;
}
