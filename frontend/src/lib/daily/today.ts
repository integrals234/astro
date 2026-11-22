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

export const fmtJst = (d: Date) => new Date(d.getTime() + 9 * 3600_000).toISOString().slice(11, 16);

export interface DayReport {
  date: { year: number; month: number; day: number };
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

export function dayReport(date: { year: number; month: number; day: number }, now = new Date()): DayReport {
  const start = jstMidnight(date);
  const end = new Date(start.getTime() + DAY_MS);

  // The Moon changes sign every ~2.3 days: at most once in a day.
  const signAtStart = moonSignIndex(start);
  const change = nextSignChange(start);
  const changesToday = Boolean(change && change < end);
  const hoursFirst = changesToday ? (change!.getTime() - start.getTime()) / 3600_000 : 24;
  const sign = changesToday && hoursFirst < 12 ? moonSignIndex(new Date(change!.getTime() + 60_000)) : signAtStart;

  const spans = shukuSpansOfDay(date);
  const main = spans.reduce((x, y) => (y.until.getTime() - y.from.getTime() > x.until.getTime() - x.from.getTime() ? y : x)).shuku;

  const noon = new Date(start.getTime() + DAY_MS / 2);
  const local = new Date(noon.getTime() + 9 * 3600_000);
  const sky = computeQuickSky({
    year: local.getUTCFullYear(),
    month: local.getUTCMonth() + 1,
    day: local.getUTCDate(),
    hour: 12,
    minute: 0,
    utcOffset: 9,
  });
  const elong = (((sky.moon.longitude - sky.sun.longitude) % 360) + 360) % 360;
  const t = Math.floor(elong / 12) + 1;

  return {
    date,
    sign,
    signChange: changesToday ? { at: fmtJst(change!), to: moonSignIndex(new Date(change!.getTime() + 60_000)) } : null,
    spans: spans.map((s) => ({ shuku: s.shuku, from: fmtJst(s.from), until: fmtJst(s.until), startsToday: s.startsToday, endsToday: s.endsToday })),
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
    computedAt: fmtJst(now),
  };
}

export function todayReport(now = new Date()): DayReport {
  return dayReport(jstDate(now), now);
}

export function tomorrowReport(now = new Date()): DayReport {
  return dayReport(jstDate(new Date(now.getTime() + DAY_MS)), now);
}
