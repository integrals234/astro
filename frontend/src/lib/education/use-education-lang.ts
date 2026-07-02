"use client";

import { useCallback, useEffect, useState } from "react";
import type { EducationLang } from "./types";

export const EDUCATION_LANG_STORAGE_KEY = "education-hub-lang";

export function readEducationLang(): EducationLang {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem(EDUCATION_LANG_STORAGE_KEY);
  return saved === "ja" ? "ja" : "en";
}

export function useEducationLang() {
  const [lang, setLangState] = useState<EducationLang>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLangState(readEducationLang());
    setReady(true);
  }, []);

  const setLang = useCallback((next: EducationLang) => {
    setLangState(next);
    localStorage.setItem(EDUCATION_LANG_STORAGE_KEY, next);
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "en" ? "ja" : "en");
  }, [lang, setLang]);

  return { lang, setLang, toggleLang, ready };
}
