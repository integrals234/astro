import type { AppLanguage } from "@/lib/i18n/language";
import { SITE_NAME, SITE_URL, localeUrl } from "@/lib/seo/site";

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

export function organizationSchema(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    sameAs: ["https://www.instagram.com/jyotishlife.jp/"],
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

/** Wrap nodes in a single `@graph` so a page emits one script tag, not six. */
export function jsonLdGraph(nodes: JsonLdNode[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": nodes,
  });
}
