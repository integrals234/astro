"use client";

import { useCallback, useState } from "react";
import type { EducationLang } from "./types";

const LEGACY_EDUCATION_LANG_STORAGE_KEY = "education-hub-lang";
export const EDUCATION_LANG_STORAGE_KEY = "education-hub-lang-v2";

export function readEducationLang(): EducationLang {
  if (typeof window === "undefined") return "ja";

  const saved = localStorage.getItem(EDUCATION_LANG_STORAGE_KEY);
  if (saved === "en" || saved === "ja") return saved;

  const legacy = localStorage.getItem(LEGACY_EDUCATION_LANG_STORAGE_KEY);
  if (legacy === "ja") {
    localStorage.setItem(EDUCATION_LANG_STORAGE_KEY, "ja");
    return "ja";
  }

  localStorage.setItem(EDUCATION_LANG_STORAGE_KEY, "ja");
  return "ja";
}

export function useEducationLang() {
  const [lang, setLangState] = useState<EducationLang>(readEducationLang);

  const setLang = useCallback((next: EducationLang) => {
    setLangState(next);
    localStorage.setItem(EDUCATION_LANG_STORAGE_KEY, next);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "ja" : "en");
  }, [lang, setLang]);

  return { lang, setLang, toggleLang };
}
