import { rashis } from "./rashi-content";
import type { HoroscopeSignMeta } from "./horoscope-engine";

/** Split from the barrel so /horoscope can import it without the article corpus. */
export const horoscopeSigns: HoroscopeSignMeta[] = rashis.map((sign) => ({
  id: sign.id as HoroscopeSignMeta["id"],
  name: sign.name,
  sanskrit: sign.sanskrit,
  image: sign.image,
  element: sign.element,
  ruler: sign.ruler,
}));
