import type { WisdomArticle } from "./types";
import { p1IntroductionArticles } from "./p1-content";
import { p2Articles } from "./p2-content";
import { p3Articles } from "./p3-content";
import { p4Articles } from "./p4-content";
import { planetaryKarakasArticle } from "./planetary-karakas-content";
import { p5Articles } from "./p5-content";
import { p6Articles } from "./p6-content";

/** Display order for Introduction sub-tab topics in the education hub. */
const INTRODUCTION_ARTICLE_ORDER = [
  "faqs-1",
  "faqs-2",
  "faqs-3",
  "jyotish-explained",
  "origins-of-jyotish",
  "predictive-capabilities",
  "preventive-capabilities",
  "benefits-of-jyotish",
  "western-differences",
  "sidereal-zodiac-p3",
  "paradigm-shift",
  "cosmos-individual-1",
  "planetary-forces",
  "jyotish-and-karma",
  "three-types-karma",
  "forecasting-analogies-1",
  "birth-time-errors",
  "chart-interpretation",
] as const satisfies readonly string[];

export const wisdomArticles: WisdomArticle[] = [
  ...p1IntroductionArticles,
  ...p2Articles,
  ...p3Articles,
  planetaryKarakasArticle,
  ...p4Articles,
  ...p5Articles,
  ...p6Articles,
];

export function getArticlesForSection(section: string): WisdomArticle[] {
  const articles = wisdomArticles.filter((a) => a.section === section);
  if (section !== "introduction") return articles;

  const order = new Map<string, number>(
    INTRODUCTION_ARTICLE_ORDER.map((id, index) => [id, index])
  );
  return [...articles].sort((a, b) => {
    const ai = order.get(a.id) ?? Number.MAX_SAFE_INTEGER;
    const bi = order.get(b.id) ?? Number.MAX_SAFE_INTEGER;
    return ai - bi;
  });
}

export function getArticleById(id: string): WisdomArticle | undefined {
  return wisdomArticles.find((a) => a.id === id);
}
