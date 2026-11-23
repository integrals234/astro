/**
 * Everything the daily pages show for one Japan day, computed once
 * (language-agnostic; the pages add the words). Server-side; the pages
 * revalidate hourly so "today" turns over at midnight JST.
 */
import { computeQuickSky } from "@/lib/sky/quick-sky";
import { SIGNS } from "@/lib/sky/quick-sky";
import { SHUKUS, type Shuku } from "@/lib/sukuyo/shuku";
import { relationOf, taraOf, TARA_QUALITY, type RelationKind, type Tara } from "@/lib/sukuyo/relations";
import {
  jstDate,
  jstMidnight,
  moonSignIndex,
  moonTransitHouse,
  nextSignChange,
  shukuSpansOfDay,
  MOON_HOUSE_QUALITY,
} from "./moon-day";

/** "HH:MM" at a UTC offset (default JST). */
export const fmtAt = (d: Date, offsetHours = 9) => new Date(d.getTime() + offsetHours * 3600_000).toISOString().slice(11, 16);
export const fmtJst = (d: Date) => fmtAt(d, 9);

export interface DayReport {
  date: { year: number; month: number; day: number };
  /** UTC offset the day and all times are in (9 = JST, 5.5 = IST). */
  offsetHours: number;
  /** The sign holding most of the day, and a change inside the day, if any. */
  sign: number;
  signChange: { at: string; to: number } | null;
  spans: { shuku: Shuku; from: string; until: string; startsToday: boolean; endsToday: boolean }[];
  /** The 宿/nakshatra holding most of the day. */
  main: Shuku;
  tithi: { paksha: "Shukla" | "Krishna"; day: number; illumination: number };
  bySign: { sign: number; house: number; quality: "good" | "mixed" | "caution" }[];
  byNakshatra: { birth: Shuku; tara: Tara; quality: "good" | "mixed" | "caution"; kind: RelationKind }[];
  computedAt: string;
}

const DAY_MS = 24 * 3600_000;

export function dayReport(date: { year: number; month: number; day: number }, now = new Date(), offsetHours = 9): DayReport {
  const fmt = (d: Date) => fmtAt(d, offsetHours);
  const start = jstMidnight(date, offsetHours);
  const end = new Date(start.getTime() + DAY_MS);

  // The Moon changes sign every ~2.3 days: at most once in a day.
  const signAtStart = moonSignIndex(start);
  const change = nextSignChange(start);
  const changesToday = Boolean(change && change < end);
  const hoursFirst = changesToday ? (change!.getTime() - start.getTime()) / 3600_000 : 24;
  const sign = changesToday && hoursFirst < 12 ? moonSignIndex(new Date(change!.getTime() + 60_000)) : signAtStart;

  const spans = shukuSpansOfDay(date, offsetHours);
  const main = spans.reduce((x, y) => (y.until.getTime() - y.from.getTime() > x.until.getTime() - x.from.getTime() ? y : x)).shuku;

  const noon = new Date(start.getTime() + DAY_MS / 2);
  const local = new Date(noon.getTime() + offsetHours * 3600_000);
  const sky = computeQuickSky({
    year: local.getUTCFullYear(),
    month: local.getUTCMonth() + 1,
    day: local.getUTCDate(),
    hour: 12,
    minute: 0,
    utcOffset: offsetHours,
  });
  const elong = (((sky.moon.longitude - sky.sun.longitude) % 360) + 360) % 360;
  const t = Math.floor(elong / 12) + 1;

  return {
    date,
    offsetHours,
    sign,
    signChange: changesToday ? { at: fmt(change!), to: moonSignIndex(new Date(change!.getTime() + 60_000)) } : null,
    spans: spans.map((s) => ({ shuku: s.shuku, from: fmt(s.from), until: fmt(s.until), startsToday: s.startsToday, endsToday: s.endsToday })),
    main,
    tithi: {
      paksha: t <= 15 ? "Shukla" : "Krishna",
      day: t <= 15 ? t : t - 15,
      illumination: Math.round(((1 - Math.cos((elong * Math.PI) / 180)) / 2) * 100),
    },
    bySign: SIGNS.map((_, natal) => {
      const house = moonTransitHouse(natal, sign);
      return { sign: natal, house, quality: MOON_HOUSE_QUALITY[house] };
    }),
    byNakshatra: SHUKUS.map((birth) => {
      const tara = taraOf(birth.index, main.index);
      return { birth, tara, quality: TARA_QUALITY[tara], kind: relationOf(birth, main).kind };
    }),
    computedAt: fmt(now),
  };
}

export function todayReport(now = new Date(), offsetHours = 9): DayReport {
  return dayReport(jstDate(now, offsetHours), now, offsetHours);
}

export function tomorrowReport(now = new Date(), offsetHours = 9): DayReport {
  return dayReport(jstDate(new Date(now.getTime() + DAY_MS), offsetHours), now, offsetHours);
}
