import type { AppLanguage } from "@/lib/i18n/language";

/**
 * Chart formatting helpers, lifted out of `ChartWorkspace.tsx`.
 *
 * `planetSymbols` previously existed twice — once at module scope and once
 * shadowed inside the component, both byte-identical. One definition here
 * removes the redundant per-render object allocation and the risk of the two
 * copies drifting.
 */
export const SIGN_TO_NUMBER: Record<string, number> = {
  Aries: 1,
  Taurus: 2,
  Gemini: 3,
  Cancer: 4,
  Leo: 5,
  Virgo: 6,
  Libra: 7,
  Scorpio: 8,
  Sagittarius: 9,
  Capricorn: 10,
  Aquarius: 11,
  Pisces: 12,
};

export const NUMBER_TO_SIGN: readonly string[] = [
  "",
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

export const planetSymbols: Record<string, string> = {
  Sun: "☉",
  Moon: "☽",
  Mars: "♂",
  Mercury: "☿",
  Jupiter: "♃",
  Venus: "♀",
  Saturn: "♄",
  Rahu: "☊",
  Ketu: "☋",
};

export function getIntegerDegree(raw: number): number {
  return Math.floor(raw % 30);
}

/** Degrees–minutes–seconds within the current sign, e.g. `14° 03' 27"`. */
export function formatDMS(raw: number): string {
  const l = raw % 30;
  const d = Math.floor(l);
  const mF = (l - d) * 60;
  const m = Math.floor(mF);
  const s = Math.floor((mF - m) * 60);
  return `${d}° ${m.toString().padStart(2, "0")}' ${s.toString().padStart(2, "0")}"`;
}

/**
 * The backend returns dasha dates as `"15 May 2026"`. `Date` parses that
 * fine in most engines, but the explicit `"$2 $1, $3"` reorder — kept from
 * the original — guards against locales where the bare string parses
 * ambiguously.
 */
export function formatDashaDisplayDate(value: string, lang: AppLanguage): string {
  const parsed = new Date(value.replace(/(\d+) (\w+) (\d+)/, "$2 $1, $3"));
  return Number.isNaN(parsed.getTime())
    ? value
    : new Intl.DateTimeFormat(lang, {
        year: "numeric",
        month: "short",
        day: "numeric",
      }).format(parsed);
}
