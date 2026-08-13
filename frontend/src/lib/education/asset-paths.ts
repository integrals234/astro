/** Maps education content IDs to files in `frontend/public/assets/`. */

import { educationImages } from "./education-images";

export const planetImages = {
  sun: "/assets/sun.webp",
  moon: "/assets/moon.webp",
  mercury: "/assets/mercury.webp",
  venus: "/assets/venus.webp",
  mars: "/assets/mars.webp",
  jupiter: "/assets/jupiter.webp",
  saturn: "/assets/saturn.webp",
  rahu: "/assets/rahu.webp",
  ketu: "/assets/ketu.webp",
} as const;

export const nakshatraImages: Record<string, string | undefined> = {
  ashwini: "/assets/ashwini-nakshatra.webp",
  bharani: "/assets/bharani-nakshatra-1.webp",
  krittika: "/assets/krittika-1.webp",
  rohini: "/assets/rohini-1.webp",
  mrigashira: "/assets/mrigashirsha-1.webp",
  ardra: "/assets/ardra-nakshatra-2.webp",
  punarvasu: "/assets/punarvasu-1.webp",
  pushya: "/assets/pushya-1.webp",
  ashlesha: "/assets/ashlesha-nakshatra-1.webp",
  magha: "/assets/magha-1.webp",
  "purva-phalguni": "/assets/purva-phalguni-1.webp",
  "uttara-phalguni": "/assets/uttara-phalguni-1.webp",
  hasta: "/assets/hasta-1.webp",
  chitra: "/assets/chitra-nakshatra-1.webp",
  swati: "/assets/swati-1.webp",
  vishakha: "/assets/vishakha-nakshatra-1.webp",
  anuradha: "/assets/anuradha-nakshatra-1.webp",
  jyeshtha: "/assets/jyeshtha-1.webp",
  mula: "/assets/moola-1.webp",
  "purva-ashadha": "/assets/purva-ashadha-1.webp",
  "uttara-ashadha": "/assets/uttarashada-nakshatra-1.webp",
  shravana: "/assets/shravana-1.webp",
  dhanishta: "/assets/dhanishta-nakshatra-1.webp",
  shatabhisha: "/assets/shatabhisha-1.webp",
  "purva-bhadrapada": "/assets/purva-bhadrapada-1.webp",
  "uttara-bhadrapada": "/assets/uttarabhadrapada-1.webp",
  revati: "/assets/revati-1.webp",
};

export const aspectImages = {
  overview: educationImages.sunAspect7th,
  mars: educationImages.marsAspect,
  jupiter: educationImages.jupiterAspect,
  saturn: educationImages.saturnAspect,
} as const;

/** Zodiac sign (Rashi) art in `frontend/public/assets/`. */
export const rashiImages = {
  aries: "/assets/aires.webp",
  taurus: "/assets/taurus.webp",
  gemini: "/assets/gemini.webp",
  cancer: "/assets/cancer.webp",
  leo: "/assets/leo.webp",
  virgo: "/assets/virgo.webp",
  libra: "/assets/libra.webp",
  scorpio: "/assets/scorpio.webp",
  sagittarius: "/assets/saggitarius.webp",
  capricorn: "/assets/capricorn.webp",
  aquarius: "/assets/aquaris.webp",
  pisces: "/assets/pices.webp",
} as const;

/** @deprecated Use rashiImages */
export const signImages = rashiImages;
