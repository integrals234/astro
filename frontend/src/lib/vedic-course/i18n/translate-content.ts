import type { CourseLanguage } from "../types";
import { HI_CONTENT } from "./content-hi";
import { KO_CONTENT } from "./content-ko";

export function translateContent(en: string, lang: CourseLanguage): string {
  if (lang === "hi") {
    const translated = HI_CONTENT[en];
    if (!translated) throw new Error(`Missing Hindi Vedic Course translation: ${en}`);
    return translated;
  }
  if (lang === "ko") {
    const translated = KO_CONTENT[en];
    if (!translated) throw new Error(`Missing Korean Vedic Course translation: ${en}`);
    return translated;
  }
  return en;
}
