"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import type { AppLanguage } from "./i18n/language";

export function useChartLang(): AppLanguage {
  return useLanguage().language;
}
