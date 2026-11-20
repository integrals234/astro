import type { BilingualText, EducationSectionId } from "./types";

/*
 * The nine learn sections. Lives in its own module (re-exported from the
 * barrel) so client components can import the list without pulling the
 * barrel's content modules into their bundle.
 */
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

export const educationSectionIds: EducationSectionId[] = educationSections.map((s) => s.id);
