export type EducationLang = "en" | "ja";

export type EducationSectionId =
  | "introduction"
  | "rashis"
  | "planets"
  | "nakshatras"
  | "houses"
  | "aspects"
  | "mahadashas"
  | "transits"
  | "remedies"
  | "horoscope";

export type WisdomBlockType = "heading" | "paragraph";

export interface WisdomArticleBlock {
  type: WisdomBlockType;
  level?: 2 | 3;
  text: BilingualText;
}

export interface WisdomArticle {
  id: string;
  section: EducationSectionId;
  title: BilingualText;
  blocks: WisdomArticleBlock[];
  related: string[];
}

export interface EducationNavigateTarget {
  section: EducationSectionId;
  articleId?: string;
}

export interface BilingualText {
  en: string;
  ja: string;
}

export interface ContentBlock {
  title?: BilingualText;
  paragraphs: BilingualText[];
  bullets?: BilingualText[];
}

export interface PlanetAttribute {
  label: BilingualText;
  value: BilingualText;
}

export interface PlanetEntry {
  id: string;
  image: string;
  name: BilingualText;
  sanskrit: BilingualText;
  attributes: PlanetAttribute[];
  description: BilingualText;
  significations: BilingualText;
}

export interface NakshatraEntry {
  id: string;
  image?: string;
  number: number;
  name: BilingualText;
  sanskrit: BilingualText;
  deity: BilingualText;
  ruler: BilingualText;
  symbol: BilingualText;
  range: BilingualText;
  guna: BilingualText;
  nature: BilingualText;
  description: BilingualText;
  qualities: BilingualText[];
}

export interface AspectRule {
  planet: BilingualText;
  houses: string;
  description: BilingualText;
  image?: string;
}

export interface RashiEntry {
  id: string;
  image: string;
  number: number;
  name: BilingualText;
  sanskrit: BilingualText;
  dates: BilingualText;
  element: BilingualText;
  ruler: BilingualText;
  symbol: BilingualText;
  bodyPart: BilingualText;
  description: BilingualText;
  traits: BilingualText[];
  sections: {
    nature: BilingualText;
    career: BilingualText;
    relationships: BilingualText;
    romance: BilingualText;
    health: BilingualText;
    decans: BilingualText;
  };
}
