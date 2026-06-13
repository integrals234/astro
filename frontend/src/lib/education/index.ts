export * from "./types";
export * from "./intro-content";
export * from "./rashi-content";
export * from "./planets-content";
export * from "./aspects-content";
export * from "./horoscope-periods";
export * from "./horoscope-engine";
export * from "./use-horoscope-periods";
export * from "./asset-paths";

import { nakshatras as nakshatrasRaw, nakshatrasIntro } from "./nakshatras-content";
import { nakshatraImages } from "./asset-paths";
import type { EducationSectionId } from "./types";

export { nakshatrasIntro };

export const nakshatras = nakshatrasRaw.map((n) => ({
  ...n,
  image: nakshatraImages[n.id],
}));

import { rashis } from "./rashi-content";
import type { HoroscopeSignMeta } from "./horoscope-engine";

export const horoscopeSigns: HoroscopeSignMeta[] = rashis.map((sign) => ({
  id: sign.id as HoroscopeSignMeta["id"],
  name: sign.name,
  sanskrit: sign.sanskrit,
  image: sign.image,
  element: sign.element,
  ruler: sign.ruler,
}));

export const educationSections: {
  id: EducationSectionId;
  label: { en: string; ja: string };
}[] = [
  { id: "introduction", label: { en: "Introduction", ja: "入門" } },
  { id: "rashis", label: { en: "Rashis (Signs)", ja: "ラーシ（星座）" } },
  { id: "planets", label: { en: "Planets (Grahas)", ja: "惑星（グラハ）" } },
  { id: "nakshatras", label: { en: "Nakshatras", ja: "ナクシャトラ" } },
  { id: "aspects", label: { en: "Aspects (Drishti)", ja: "アスペクト（ドリシュティ）" } },
  { id: "horoscope", label: { en: "Horoscope", ja: "ホロスコープ" } },
];
