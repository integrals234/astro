import type { BilingualText, WisdomArticleBlockImage } from "./types";

function newEduAsset(filename: string): string {
  return `/assets/new/${encodeURIComponent(filename)}`;
}

export const educationImages = {
  parashara: newEduAsset("Maharshi parashar father of Vedic astrology.jpeg"),
  nakshatrasStellar: newEduAsset("Nakshtras stellar comstillation.jpeg"),
  nakshatraWheel: newEduAsset(
    "1ade205e-4449-4ef2-8cdf-3e1f7b92b7f4_removalai_preview.jpg.jpeg",
  ),
  howRashisDefined: newEduAsset("How rashis are defined.jpeg"),
  signsBodyParts: newEduAsset("1781349155693.png"),
  zodiacWheel: newEduAsset("1781350071511.png"),
  chartFormatsComparison: newEduAsset(
    "Comparison between north Indian and south indian chart formats.jpeg",
  ),
  southIndianChart: newEduAsset("South Indian Vedic chart format.jpeg"),
  trikonaHouses: newEduAsset("Trikona or Trinal Houses.jpeg"),
  kendrasHouses: newEduAsset("Kendras or Angular Houses.jpeg"),
  dusthanasHouses: newEduAsset("Dusthanas or Negative Houses.jpeg"),
  upachayaHouses: newEduAsset("Upachaya or Growing Houses.jpeg"),
  sunAspect7th: newEduAsset("Sun aspects only seventh house.jpeg"),
  marsAspect: newEduAsset("Aspect diagram for mars.jpeg"),
  jupiterAspect: newEduAsset("Aspect diagram for jupiter.jpeg"),
  saturnAspect: newEduAsset("Aspect diagram for saturn.jpeg"),
  gemstone1: newEduAsset("Planet and Gemstone Associations in Jyotish 1.jpeg"),
  gemstone2: newEduAsset("Planet and Gemstone Associations in Jyotish 2.jpeg"),
  gemstone3: newEduAsset("Planet and Gemstone Associations in Jyotish 3.jpeg"),
  vedicRituals: newEduAsset("Conducting Vedic Rituals to Remove Negativity.jpeg"),
} as const;

export function eduImage(
  src: string,
  alt: BilingualText,
): WisdomArticleBlockImage {
  return { type: "image", src, alt };
}
