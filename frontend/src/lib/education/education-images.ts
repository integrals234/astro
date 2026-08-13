import type { BilingualText, WisdomArticleBlockImage } from "./types";

function newEduAsset(filename: string): string {
  return `/assets/new/${encodeURIComponent(filename)}`;
}

export const educationImages = {
  parashara: newEduAsset("maharshi-parashar-father-of-vedic-astrology.webp"),
  nakshatrasStellar: newEduAsset("nakshtras-stellar-comstillation.webp"),
  nakshatraWheel: newEduAsset(
    "1ade205e-4449-4ef2-8cdf-3e1f7b92b7f4.webp",
  ),
  howRashisDefined: newEduAsset("how-rashis-are-defined.webp"),
  signsBodyParts: newEduAsset("1781349155693.webp"),
  zodiacWheel: newEduAsset("1781350071511.webp"),
  chartFormatsComparison: newEduAsset(
    "comparison-between-north-indian-and-south-indian-chart-formats.webp",
  ),
  southIndianChart: newEduAsset("south-indian-vedic-chart-format.webp"),
  trikonaHouses: newEduAsset("trikona-or-trinal-houses.webp"),
  kendrasHouses: newEduAsset("kendras-or-angular-houses.webp"),
  dusthanasHouses: newEduAsset("dusthanas-or-negative-houses.webp"),
  upachayaHouses: newEduAsset("upachaya-or-growing-houses.webp"),
  sunAspect7th: newEduAsset("sun-aspects-only-seventh-house.webp"),
  marsAspect: newEduAsset("aspect-diagram-for-mars.webp"),
  jupiterAspect: newEduAsset("aspect-diagram-for-jupiter.webp"),
  saturnAspect: newEduAsset("aspect-diagram-for-saturn.webp"),
  gemstone1: newEduAsset("planet-and-gemstone-associations-in-jyotish-1.webp"),
  gemstone2: newEduAsset("planet-and-gemstone-associations-in-jyotish-2.webp"),
  gemstone3: newEduAsset("planet-and-gemstone-associations-in-jyotish-3.webp"),
  vedicRituals: newEduAsset("conducting-vedic-rituals-to-remove-negativity.webp"),
  mahadashaPeriodYears: newEduAsset(
    "mahadasha-period-a-period-of-time-measured-in-years.webp",
  ),
  mahadashaSequence: newEduAsset("c.webp"),
  sadeSati: newEduAsset("b.webp"),
  jyotishExplained: newEduAsset("d.webp"),
  jyotishExplainedStars: newEduAsset("f.webp"),
  planetaryAntidotes: newEduAsset("g.webp"),
  planetaryStrengthChart: newEduAsset("h.webp"),
  signRulership: newEduAsset("a.webp"),
} as const;

export function eduImage(
  src: string,
  alt: BilingualText,
): WisdomArticleBlockImage {
  return { type: "image", src, alt };
}
