import type { WisdomArticle } from "./types";
import { p1IntroductionArticles } from "./p1-content";
import { p2Articles } from "./p2-content";
import { p3Articles } from "./p3-content";
import { p4Articles } from "./p4-content";
import { p5Articles } from "./p5-content";
import { p6Articles } from "./p6-content";

export const wisdomArticles: WisdomArticle[] = [
  ...p1IntroductionArticles,
  ...p2Articles,
  ...p3Articles,
  ...p4Articles,
  ...p5Articles,
  ...p6Articles,
];

export function getArticlesForSection(section: string): WisdomArticle[] {
  return wisdomArticles.filter((a) => a.section === section);
}

export function getArticleById(id: string): WisdomArticle | undefined {
  return wisdomArticles.find((a) => a.id === id);
}
