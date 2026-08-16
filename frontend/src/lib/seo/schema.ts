import { ABOUT_KNOWS_ABOUT, aboutContent } from "@/lib/about/content";
import { DEFAULT_APP_LANGUAGE, type AppLanguage } from "@/lib/i18n/language";
import { SITE_NAME, SITE_URL, localeUrl } from "@/lib/seo/site";

/**
 * Every profile we actually control. Deliberately short: a `sameAs` pointing at
 * a profile that does not exist is a worse entity signal than omitting it, so
 * new entries only land here once the account is live.
 */
export const SITE_SAME_AS = ["https://www.instagram.com/jyotishlife.jp/"];

/**
 * JSON-LD builders (Phase 3.8). The site had zero structured data.
 *
 * `@id`s are stable absolute URLs so the graph nodes resolve to one another
 * rather than being re-declared per page — that is what lets Google treat the
 * practitioner and the organisation as entities rather than page decoration.
 */
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PERSON_ID = `${SITE_URL}/#practitioner`;

type JsonLdNode = Record<string, unknown>;

/**
 * The organisation as a resolvable entity, not a name tag.
 *
 * `founder` and `publishingPrinciples` point at the practitioner and the About
 * page, which is what lets an answer engine attribute the site's claims to a
 * named human — the differentiator against competitors whose astrology is
 * generated and attributed to nobody.
 */
export function organizationSchema(
  language: AppLanguage = DEFAULT_APP_LANGUAGE,
): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    sameAs: SITE_SAME_AS,
    knowsAbout: ABOUT_KNOWS_ABOUT,
    knowsLanguage: ["ja", "en", "hi", "ko"],
    areaServed: { "@type": "Country", name: "Japan" },
    founder: { "@id": PERSON_ID },
    publishingPrinciples: localeUrl(language, "/about"),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: ["ja", "en", "hi", "ko"],
    },
  };
}

/**
 * The practitioner. Previously inlined on `/about` only, which meant the
 * `founder` and `author` references elsewhere resolved to nothing.
 */
export function personSchema(language: AppLanguage): JsonLdNode {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: aboutContent.title[language],
    description: aboutContent.lead[language],
    knowsAbout: ABOUT_KNOWS_ABOUT,
    sameAs: SITE_SAME_AS,
    worksFor: { "@id": ORGANIZATION_ID },
    url: localeUrl(language, "/about"),
  };
}

export function websiteSchema(language: AppLanguage): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: language,
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export interface BreadcrumbEntry {
  name: string;
  /** Unprefixed app path. */
  path: string;
}

export function breadcrumbSchema(
  language: AppLanguage,
  entries: BreadcrumbEntry[],
): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: entries.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: localeUrl(language, entry.path),
    })),
  };
}

export function articleSchema({
  language,
  path,
  headline,
  description,
}: {
  language: AppLanguage;
  path: string;
  headline: string;
  description: string;
}): JsonLdNode {
  const url = localeUrl(language, path);
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    inLanguage: language,
    mainEntityOfPage: url,
    author: { "@id": ORGANIZATION_ID },
    publisher: { "@id": ORGANIZATION_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

/**
 * `DefinedTerm` is the correct type for a glossary entity corpus — nakshatras,
 * rashis, grahas, bhavas — and almost nobody uses it, which makes it a cheap
 * differentiator for answer engines.
 */
export function definedTermSchema({
  language,
  path,
  name,
  description,
  termSetName,
  termSetPath,
}: {
  language: AppLanguage;
  path: string;
  name: string;
  description: string;
  termSetName: string;
  termSetPath: string;
}): JsonLdNode {
  const url = localeUrl(language, path);
  return {
    "@type": "DefinedTerm",
    "@id": `${url}#term`,
    name,
    description,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      "@id": `${localeUrl(language, termSetPath)}#termset`,
      name: termSetName,
      url: localeUrl(language, termSetPath),
    },
    url,
    inLanguage: language,
  };
}

export function faqSchema(
  entries: Array<{ question: string; answer: string }>,
): JsonLdNode {
  return {
    "@type": "FAQPage",
    mainEntity: entries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: { "@type": "Answer", text: entry.answer },
    })),
  };
}

export interface ServiceOfferInput {
  /** Stable id from the appraisal content, e.g. `written`. */
  id: string;
  name: string;
  description: string;
}

/**
 * The consultation offering as a `Service` with one `Offer` per format.
 *
 * `price` is deliberately absent: every plan is currently "by inquiry", and a
 * fabricated or zero price is a structured-data violation. `priceCurrency` and
 * `availability` are still worth emitting — they establish the offer as a real
 * commercial entity in JPY. Add `price` here the moment the pricing catalogue
 * publishes numbers.
 */
export function serviceSchema({
  language,
  path,
  name,
  description,
  offers,
}: {
  language: AppLanguage;
  path: string;
  name: string;
  description: string;
  offers: ServiceOfferInput[];
}): JsonLdNode {
  const url = localeUrl(language, path);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    serviceType: "Vedic astrology consultation",
    url,
    inLanguage: language,
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Country", name: "Japan" },
    availableLanguage: ["ja", "en", "hi", "ko"],
    offers: offers.map((offer) => ({
      "@type": "Offer",
      "@id": `${url}#offer-${offer.id}`,
      name: offer.name,
      description: offer.description,
      priceCurrency: "JPY",
      availability: "https://schema.org/InStock",
      seller: { "@id": ORGANIZATION_ID },
      url,
    })),
  };
}

/**
 * `ItemList` for hub pages, so the contained set is machine-readable rather
 * than inferred from links alone.
 */
export function itemListSchema({
  language,
  path,
  name,
  items,
}: {
  language: AppLanguage;
  path: string;
  name: string;
  items: Array<{ name: string; path: string }>;
}): JsonLdNode {
  const url = localeUrl(language, path);
  return {
    "@type": "ItemList",
    "@id": `${url}#itemlist`,
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: localeUrl(language, item.path),
    })),
  };
}

/** Wrap nodes in a single `@graph` so a page emits one script tag, not six. */
export function jsonLdGraph(nodes: JsonLdNode[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes,
  });
}
