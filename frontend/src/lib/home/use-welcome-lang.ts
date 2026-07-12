"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";

export function useWelcomeLang() {
  const { language } = useLanguage();
  return { lang: language };
}
