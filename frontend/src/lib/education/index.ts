export * from "./types";
export * from "./intro-content";
export * from "./planets-content";
export * from "./aspects-content";
export * from "./asset-paths";

import { nakshatras as nakshatrasRaw, nakshatrasIntro } from "./nakshatras-content";
import { nakshatraImages } from "./asset-paths";
import type { EducationSectionId } from "./types";

export { nakshatrasIntro };

export const nakshatras = nakshatrasRaw.map((n) => ({
  ...n,
  image: nakshatraImages[n.id],
}));

export const educationSections: {
  id: EducationSectionId;
  label: { en: string; ja: string };
}[] = [
  { id: "introduction", label: { en: "Introduction", ja: "入門" } },
  { id: "planets", label: { en: "Planets (Grahas)", ja: "惑星（グラハ）" } },
  { id: "nakshatras", label: { en: "Nakshatras", ja: "ナクシャトラ" } },
  { id: "aspects", label: { en: "Aspects (Drishti)", ja: "アスペクト（ドリシュティ）" } },
];
