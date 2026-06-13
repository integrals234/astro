export type EducationLang = "en" | "ja";

export type EducationSectionId =
  | "introduction"
  | "planets"
  | "nakshatras"
  | "aspects";

export interface BilingualText {
  en: string;
  ja: string;
}

export interface ContentBlock {
  title?: BilingualText;
  paragraphs: BilingualText[];
  bullets?: BilingualText[];
}

export interface SignBodyMapping {
  sign: BilingualText;
  bodyPart: BilingualText;
}

export interface PlanetAttribute {
  label: BilingualText;
  value: BilingualText;
}

export interface PlanetEntry {
  id: string;
  image?: string;
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
