"use client";

import { useEffect, useState } from "react";
import type { LanguageCode } from "./chart-types";
import { parseChartLang, readChartLang } from "./chart-i18n";

export function useChartLang(): LanguageCode {
  const [lang, setLang] = useState<LanguageCode>(() => readChartLang());

  useEffect(() => {
    const sync = () => setLang(readChartLang());
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<LanguageCode>).detail;
      setLang(parseChartLang(detail ?? null));
    };

    window.addEventListener("chart-lang-change", onChange);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("chart-lang-change", onChange);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return lang;
}
