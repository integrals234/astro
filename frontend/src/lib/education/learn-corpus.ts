import type { EducationLang, EducationSectionId, WisdomArticle } from "./types";
import { educationSectionIds } from "./sections";
import { getArticlesForSection } from "./articles-content";
import { rashisIntro, rashisOverviewBlocks, rashis } from "./rashi-content";
import { planetsIntro, planets } from "./planets-content";
import { aspectsIntro, universalAspect, specialAspects, conjunctionBlock } from "./aspects-content";
import { nakshatrasIntro, nakshatras } from "./index";

/*
 * The learn hub's content, for one language (performance pass).
 *
 * The hub is a client component, and it used to import the whole corpus —
 * every article and entity in all four languages, ~2MB of JavaScript — so
 * tapping "Learn" on a phone meant downloading and running all of it before
 * the page could change. Now the server cuts it to the visitor's language
 * and the hub receives it as data, not code: the opening section with the
 * page, every other section as a static JSON file when it is needed.
 *
 * Server-only by convention: only the learn page and the section JSON route
 * import this. Client code imports its types alone.
 */

const LANGS = ["ja", "en", "hi", "ko"];

function isLangRecord(value: unknown): value is Record<string, string> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return false;
  const keys = Object.keys(value);
  return keys.length > 0 && keys.includes("en") && keys.every((k) => LANGS.includes(k));
}

/**
 * Every `{ ja, en, hi, ko }` record shrinks to the one language (English as
 * its fallback, as `t()` did). The shape and types stay the same, so the
 * renderers read `text[lang]` exactly as before.
 */
function pick<T>(value: T, lang: EducationLang): T {
  if (Array.isArray(value)) return value.map((item) => pick(item, lang)) as T;
  if (isLangRecord(value)) return { [lang]: value[lang] ?? value.en } as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, pick(item, lang)]),
    ) as T;
  }
  return value;
}

/** Paragraph styling keys off the English source ("Q. ", "A. ", "• "); keep just that. */
const MARKERS = ["Q. ", "A. ", "• "] as const;

function pickArticle(article: WisdomArticle, lang: EducationLang): WisdomArticle {
  return {
    ...pick(article, lang),
    blocks: article.blocks.map((block) => {
      const picked = pick(block, lang);
      if (block.type !== "paragraph" || picked.type !== "paragraph") return picked;
      const marker = MARKERS.find((m) => block.text.en.startsWith(m));
      return marker ? { ...picked, marker } : picked;
    }),
  };
}

/** One section's content: its articles plus, for the visual sections, their guide data. */
export function buildLearnSection(lang: EducationLang, section: EducationSectionId) {
  return {
    articles: getArticlesForSection(section).map((article) => pickArticle(article, lang)),
    ...(section === "rashis"
      ? {
          rashisIntro: pick(rashisIntro, lang),
          rashisOverviewBlocks: pick(rashisOverviewBlocks, lang),
          rashis: pick(rashis, lang),
        }
      : {}),
    ...(section === "planets"
      ? { planetsIntro: pick(planetsIntro, lang), planets: pick(planets, lang) }
      : {}),
    ...(section === "nakshatras"
      ? { nakshatrasIntro: pick(nakshatrasIntro, lang), nakshatras: pick(nakshatras, lang) }
      : {}),
    ...(section === "aspects"
      ? {
          aspectsIntro: pick(aspectsIntro, lang),
          universalAspect: pick(universalAspect, lang),
          specialAspects: pick(specialAspects, lang),
          conjunctionBlock: pick(conjunctionBlock, lang),
        }
      : {}),
  };
}

type Full = {
  articles: WisdomArticle[];
  rashisIntro: typeof rashisIntro;
  rashisOverviewBlocks: typeof rashisOverviewBlocks;
  rashis: typeof rashis;
  planetsIntro: typeof planetsIntro;
  planets: typeof planets;
  nakshatrasIntro: typeof nakshatrasIntro;
  nakshatras: typeof nakshatras;
  aspectsIntro: typeof aspectsIntro;
  universalAspect: typeof universalAspect;
  specialAspects: typeof specialAspects;
  conjunctionBlock: typeof conjunctionBlock;
};
/** A section bundle. Only the owning section's guide fields are present. */
export type LearnSection = Pick<Full, "articles"> & Partial<Omit<Full, "articles">>;

/**
 * What the hub page ships: a title index of every article (for the topic
 * lists' defaults and cross-section "related" links) and the opening
 * section in full. Every other section is a static JSON file
 * (/api/learn/<lang>/<section>), fetched when opened or in idle time.
 */
export function buildLearnCorpus(lang: EducationLang, initialSection: EducationSectionId = "introduction") {
  const articleIndex = educationSectionIds.flatMap((section) =>
    getArticlesForSection(section).map((article) => ({
      id: article.id,
      section,
      title: pick(article.title, lang),
    })),
  );
  return {
    lang,
    articleIndex,
    sections: { [initialSection]: buildLearnSection(lang, initialSection) } as Partial<
      Record<EducationSectionId, LearnSection>
    >,
  };
}

export type LearnCorpus = ReturnType<typeof buildLearnCorpus>;
export type LearnArticleRef = LearnCorpus["articleIndex"][number];
