import type { CourseLanguage } from "../types";
import { HI_CONTENT } from "./content-hi";
import { KO_CONTENT } from "./content-ko";

export function translateContent(en: string, lang: CourseLanguage): string {
  if (lang === "hi") return HI_CONTENT[en] ?? en;
  if (lang === "ko") return KO_CONTENT[en] ?? en;
  return en;
}
