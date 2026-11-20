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

export { nakshatrasIntro };

export const nakshatras = nakshatrasRaw.map((n) => ({
  ...n,
  image: nakshatraImages[n.id],
}));

export { horoscopeSigns } from "./horoscope-signs";

export { educationSections, educationSectionIds } from "./sections";
