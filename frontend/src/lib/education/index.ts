export * from "./types";
export * from "./i18n/ui";
export * from "./use-education-lang";
export * from "./intro-content";
export * from "./rashi-content";
export * from "./planets-content";
export * from "./aspects-content";
export * from "./articles-content";
export * from "./horoscope-periods";
export * from "./horoscope-engine";
export * from "./use-horoscope-periods";
export * from "./asset-paths";

import { nakshatras as nakshatrasRaw, nakshatrasIntro } from "./nakshatras-content";
import { nakshatraImages } from "./asset-paths";
import type { BilingualText, EducationSectionId } from "./types";

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
  label: BilingualText;
}[] = [
  { id: "introduction", label: { en: "Introduction", hi: "परिचय", ja: "入門", ko: "소개",} },
  { id: "rashis", label: { en: "Rashis (Signs)", hi: "राशियाँ", ja: "ラーシ（星座）", ko: "라시(별자리)",} },
  { id: "planets", label: { en: "Planets (Grahas)", hi: "ग्रह", ja: "惑星（グラハ）", ko: "행성(그라하)",} },
  { id: "nakshatras", label: { en: "Nakshatras", hi: "नक्षत्र", ja: "ナクシャトラ", ko: "낙샤트라",} },
  { id: "houses", label: { en: "Houses (Bhavas)", hi: "भाव", ja: "ハウス（バーヴァ）", ko: "궁(바바)",} },
  { id: "aspects", label: { en: "Aspects (Drishti)", hi: "दृष्टियाँ", ja: "アスペクト（ドリシュティ）", ko: "애스펙트(드리시티)",} },
  { id: "mahadashas", label: { en: "Mahadashas", hi: "महादशाएँ", ja: "マハーダシャー", ko: "마하다샤",} },
  { id: "transits", label: { en: "Transits", hi: "गोचर", ja: "トランジット（ゴーチャラ）", ko: "트랜짓(고차라)",} },
  { id: "remedies", label: { en: "Remedies (Upaye)", hi: "उपाय", ja: "改善法（ウパーヤ）", ko: "개선법(우파야)",} },
];
