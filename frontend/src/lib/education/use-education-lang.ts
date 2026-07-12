"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

export function useEducationLang() {
  const { language } = useLanguage();
  return { lang: language };
}
