export const APP_LANGUAGES = ["en", "hi", "ja", "ko"] as const;

export type AppLanguage = (typeof APP_LANGUAGES)[number];

export const APP_LANGUAGE_KEY = "app-language";
export const APP_LANGUAGE_COOKIE_MAX_AGE = 60 * 60 * 24 * 365;
export const DEFAULT_APP_LANGUAGE: AppLanguage = "ja";

export const LEGACY_LANGUAGE_STORAGE_KEYS = [
  "chart-lang",
  "vedic-course-lang",
  "personal-appraisals-lang",
  "education-hub-lang-v2",
  "education-hub-lang",
  "home-lang-v1",
] as const;

export const APP_LANGUAGE_OPTIONS: ReadonlyArray<{
  code: AppLanguage;
  nativeName: string;
  englishName: string;
}> = [
  { code: "en", nativeName: "English", englishName: "English" },
  { code: "hi", nativeName: "हिन्दी", englishName: "Hindi" },
  { code: "ja", nativeName: "日本語", englishName: "Japanese" },
  { code: "ko", nativeName: "한국어", englishName: "Korean" },
];

export function isAppLanguage(value: unknown): value is AppLanguage {
  return typeof value === "string" && APP_LANGUAGES.includes(value as AppLanguage);
}

export function parseAppLanguage(
  value: unknown,
  fallback: AppLanguage = DEFAULT_APP_LANGUAGE,
): AppLanguage {
  return isAppLanguage(value) ? value : fallback;
}

export function languageFromCountry(country: string | null): AppLanguage | null {
  if (!country || !/^[A-Za-z]{2}$/.test(country)) return null;

  const normalizedCountry = country.toUpperCase();
  if (normalizedCountry === "XX") return null;

  switch (normalizedCountry) {
    case "IN":
      return "hi";
    case "JP":
      return "ja";
    case "KR":
      return "ko";
    default:
      return "en";
  }
}

export function languageFromAcceptLanguage(header: string | null): AppLanguage | null {
  if (!header) return null;

  const candidates = header
    .split(",")
    .map((entry, index) => {
      const [tag, ...parameters] = entry.trim().split(";");
      const qParameter = parameters.find((parameter) =>
        parameter.trim().toLowerCase().startsWith("q="),
      );
      const quality = qParameter
        ? Number.parseFloat(qParameter.trim().slice(2))
        : 1;

      return {
        language: tag?.split("-")[0]?.toLowerCase(),
        quality: Number.isFinite(quality) ? quality : 0,
        index,
      };
    })
    .filter(
      (candidate): candidate is {
        language: AppLanguage;
        quality: number;
        index: number;
      } => isAppLanguage(candidate.language) && candidate.quality > 0,
    )
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  return candidates[0]?.language ?? null;
}
