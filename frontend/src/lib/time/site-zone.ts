/**
 * The site's clock.
 *
 * Every time and every "today" on the site is shown in Japan Standard Time,
 * except for visitors whose IP is in India, who see India Standard Time.
 * The proxy reads Vercel's `x-vercel-ip-country` header and stores the
 * choice in the `jl_tz` cookie; client code reads the cookie, and server-
 * rendered pages render JST and let the client switch.
 *
 * Not affected: a birth time is always the birthplace's local time (the
 * engine resolves that zone), and sunrise/sunset stay the chosen place's.
 */
import type { AppLanguage } from "@/lib/i18n/language";

export type SiteZone = "Asia/Tokyo" | "Asia/Kolkata";

export const ZONE_COOKIE = "jl_tz";
export const DEFAULT_ZONE: SiteZone = "Asia/Tokyo";

/** Hours east of UTC (neither zone has daylight saving). */
export const ZONE_OFFSET: Record<SiteZone, number> = { "Asia/Tokyo": 9, "Asia/Kolkata": 5.5 };

export const ZONE_LABEL: Record<AppLanguage, Record<SiteZone, string>> = {
  ja: { "Asia/Tokyo": "日本時間", "Asia/Kolkata": "インド時間" },
  en: { "Asia/Tokyo": "Japan time", "Asia/Kolkata": "India time" },
  hi: { "Asia/Tokyo": "जापान समय", "Asia/Kolkata": "भारतीय समय" },
  ko: { "Asia/Tokyo": "일본 시간", "Asia/Kolkata": "인도 시간" },
};

export function zoneFromCountry(country: string | null | undefined): SiteZone {
  return country?.toUpperCase() === "IN" ? "Asia/Kolkata" : "Asia/Tokyo";
}

export function isSiteZone(value: unknown): value is SiteZone {
  return value === "Asia/Tokyo" || value === "Asia/Kolkata";
}

/** Client: the zone the proxy chose for this visitor (JST when unknown). */
export function readZoneCookie(): SiteZone {
  if (typeof document === "undefined") return DEFAULT_ZONE;
  const m = /(?:^|;\s*)jl_tz=([^;]+)/.exec(document.cookie);
  const value = m ? decodeURIComponent(m[1]) : null;
  return isSiteZone(value) ? value : DEFAULT_ZONE;
}

/** The calendar date in `zone` at an instant. */
export function zoneDate(zone: SiteZone, at: Date = new Date()): { year: number; month: number; day: number } {
  const d = new Date(at.getTime() + ZONE_OFFSET[zone] * 3600_000);
  return { year: d.getUTCFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate() };
}

/** `YYYY-MM-DD` for today in `zone` (for date inputs). */
export function zoneIsoDate(zone: SiteZone, at: Date = new Date()): string {
  const { year, month, day } = zoneDate(zone, at);
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

/** Wall-clock hour and minute in `zone` at an instant. */
export function zoneTime(zone: SiteZone, at: Date = new Date()): { hour: number; minute: number } {
  const d = new Date(at.getTime() + ZONE_OFFSET[zone] * 3600_000);
  return { hour: d.getUTCHours(), minute: d.getUTCMinutes() };
}
