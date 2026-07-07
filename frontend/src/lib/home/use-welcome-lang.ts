"use client";

import { useCallback, useState } from "react";
import type { EducationLang } from "@/lib/education/types";

export const HOME_LANG_STORAGE_KEY = "home-lang-v1";

export function readWelcomeLang(): EducationLang {
  if (typeof window === "undefined") return "ja";

  const saved = localStorage.getItem(HOME_LANG_STORAGE_KEY);
  if (saved === "en" || saved === "ja") return saved;

  localStorage.setItem(HOME_LANG_STORAGE_KEY, "ja");
  return "ja";
}

export function useWelcomeLang() {
  const [lang, setLangState] = useState<EducationLang>(readWelcomeLang);

  const setLang = useCallback((next: EducationLang) => {
    setLangState(next);
    localStorage.setItem(HOME_LANG_STORAGE_KEY, next);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "ja" : "en");
  }, [lang, setLang]);

  return { lang, setLang, toggleLang };
}
