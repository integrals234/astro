/** Maps education content IDs to files in `frontend/public/assets/`. */

export const planetImages = {
  sun: "/assets/sun.png",
  moon: "/assets/moon.png",
  mercury: "/assets/mercury.png",
  venus: "/assets/venus.png",
  mars: "/assets/mars.png",
  jupiter: "/assets/jupiter.png",
  saturn: "/assets/saturn.png",
  rahu: "/assets/rahu.png",
  ketu: "/assets/ketu.png",
} as const;

export const nakshatraImages: Record<string, string | undefined> = {
  ashwini: "/assets/Ashwini_Nakshatra.webp",
  bharani: "/assets/Bharani_Nakshatra-1.webp",
  krittika: "/assets/krittika-1.webp",
  rohini: "/assets/rohini-1.webp",
  mrigashira: "/assets/mrigashirsha-1.webp",
  ardra: "/assets/Ardra_Nakshatra-2.webp",
  punarvasu: "/assets/punarvasu-1.webp",
  pushya: "/assets/pushya-1.webp",
  ashlesha: "/assets/Ashlesha_Nakshatra-1.webp",
  magha: "/assets/magha-1.webp",
  "purva-phalguni": "/assets/purva_phalguni-1.webp",
  "uttara-phalguni": "/assets/uttara_phalguni-1.webp",
  hasta: "/assets/hasta-1.webp",
  chitra: "/assets/Chitra_Nakshatra-1.webp",
  swati: "/assets/swati-1.webp",
  vishakha: "/assets/vishakha-nakshatra-1.webp",
  anuradha: "/assets/anuradha-nakshatra-1.webp",
  jyeshtha: "/assets/jyeshtha-1.webp",
  mula: "/assets/moola-1.webp",
  "purva-ashadha": "/assets/purva_ashadha-1.webp",
  "uttara-ashadha": "/assets/uttarashada-nakshatra-1.webp",
  shravana: "/assets/shravana-1.webp",
  dhanishta: "/assets/dhanishta-nakshatra-1.webp",
  shatabhisha: "/assets/shatabhisha-1.webp",
  "purva-bhadrapada": "/assets/purva_bhadrapada-1.webp",
  "uttara-bhadrapada": "/assets/uttarabhadrapada-1.webp",
  revati: "/assets/revati-1.webp",
};

export const aspectImages = {
  overview: "/assets/moon.png",
  mars: "/assets/mars.png",
  jupiter: "/assets/jupiter.png",
  saturn: "/assets/saturn.png",
  rahuKetu: "/assets/rahu.png",
} as const;

/** Zodiac sign art available in assets (for future use). */
export const signImages = {
  aries: "/assets/aires.png",
  taurus: "/assets/taurus.png",
  gemini: "/assets/gemini.png",
  cancer: "/assets/cancer.png",
  leo: "/assets/leo.png",
  virgo: "/assets/virgo.png",
  libra: "/assets/libra.png",
  scorpio: "/assets/scorpio.png",
  sagittarius: "/assets/saggitarius.png",
  capricorn: "/assets/capricorn.png",
  aquarius: "/assets/aquaris.png",
  pisces: "/assets/pices.png",
} as const;
