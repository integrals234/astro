import type { BilingualText } from "./types";

/*
 * Sign metadata types for /horoscope. The readings themselves are computed
 * from planetary positions in horoscope-transits.ts; the old seeded-template
 * generator that lived here (several signs got identical sentences) is gone.
 */

export type HoroscopeSignId =
  | "aries"
  | "taurus"
  | "gemini"
  | "cancer"
  | "leo"
  | "virgo"
  | "libra"
  | "scorpio"
  | "sagittarius"
  | "capricorn"
  | "aquarius"
  | "pisces";

export interface HoroscopeSignMeta {
  id: HoroscopeSignId;
  name: BilingualText;
  sanskrit: BilingualText;
  image: string;
  element: BilingualText;
  ruler: BilingualText;
}
