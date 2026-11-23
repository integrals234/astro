/**
 * The Moon's day, for the daily fortune pages (今日の運勢).
 *
 * Everything here is computed, not written: which 宿 (nakshatra) and which
 * sign the Moon is in, when it moves on, and how that day relates to a
 * person's own 宿 or Moon sign. The Moon's position uses the same Meeus
 * series + Lahiri ayanamsha as the rest of the site's quick sky (accurate to
 * a fraction of a degree, i.e. a change time good to within minutes).
 *
 * Days are site-zone days (lib/time/site-zone.ts): JST by default, IST for
 * visitors in India — "today" turns over at midnight there, never on the
 * server's clock. `offsetHours` defaults to JST (9).
 *
 * Today's 宿 is the 宿 of the Moon's actual position — the site's stated
 * method — not the 宿曜暦 calendar 宿 some sites use; on some days the two
 * differ, and the pages say so.
 */
import { lahiri, moonTropical } from "@/lib/sky/quick-sky";
import { centuries } from "@/lib/sky/orbits";
import { SHUKU_COUNT, shukuByIndex, type Shuku } from "@/lib/sukuyo/shuku";

const SPAN = 360 / SHUKU_COUNT;
const JST_OFFSET_HOURS = 9;
const norm = (deg: number) => ((deg % 360) + 360) % 360;

/** The Moon's sidereal (Lahiri) longitude at an instant, degrees. */
export function moonSidereal(at: Date): number {
  const t = centuries(at);
  return norm(moonTropical(t) - lahiri(t));
}

export const moonShukuIndex = (at: Date) => Math.floor(moonSidereal(at) / SPAN) % SHUKU_COUNT;
/** 0 = Aries (Mesha) … 11 = Pisces (Meena). */
export const moonSignIndex = (at: Date) => Math.floor(moonSidereal(at) / 30) % 12;

/** The calendar date in Japan at an instant. */
export function jstDate(at: Date, offsetHours = JST_OFFSET_HOURS): { year: number; month: number; day: number } {
  const d = new Date(at.getTime() + offsetHours * 3600_000);
  return { year: d.getUTCFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate() };
}

/** Midnight JST at the start of a Japan date, as an instant. */
export function jstMidnight(date: { year: number; month: number; day: number }, offsetHours = JST_OFFSET_HOURS): Date {
  return new Date(Date.UTC(date.year, date.month - 1, date.day) - offsetHours * 3600_000);
}

/**
 * The next instant after `from` at which `indexAt` changes (the Moon moving
 * into the next 宿 or sign), to the minute. Steps an hour at a time, then
 * bisects. The Moon never crosses two boundaries within an hour.
 */
function nextChange(from: Date, indexAt: (d: Date) => number, maxHours: number): Date | null {
  const start = indexAt(from);
  let lo = from.getTime();
  for (let h = 1; h <= maxHours; h++) {
    const hi = from.getTime() + h * 3600_000;
    if (indexAt(new Date(hi)) !== start) {
      let a = lo;
      let b = hi;
      while (b - a > 60_000) {
        const mid = (a + b) / 2;
        if (indexAt(new Date(mid)) === start) a = mid;
        else b = mid;
      }
      return new Date(Math.round(b / 60_000) * 60_000);
    }
    lo = hi;
  }
  return null;
}

export interface ShukuSpan {
  shuku: Shuku;
  /** Clipped to the day: midnight JST if it began earlier. */
  from: Date;
  /** Clipped to the day: next midnight JST if it continues. */
  until: Date;
  /** True when the Moon actually enters/leaves inside the day. */
  startsToday: boolean;
  endsToday: boolean;
}

/** The 宿 the Moon passes through during one Japan day (one or two). */
export function shukuSpansOfDay(date: { year: number; month: number; day: number }, offsetHours = JST_OFFSET_HOURS): ShukuSpan[] {
  const dayStart = jstMidnight(date, offsetHours);
  const dayEnd = new Date(dayStart.getTime() + 24 * 3600_000);
  const spans: ShukuSpan[] = [];
  let cursor = dayStart;
  let startsToday = false;
  // A 宿 lasts ~24 h (13°20′ at ~13°/day), so a day holds at most three.
  for (let guard = 0; guard < 4 && cursor < dayEnd; guard++) {
    const shuku = shukuByIndex(moonShukuIndex(cursor));
    const change = nextChange(cursor, moonShukuIndex, 30);
    const endsToday = Boolean(change && change < dayEnd);
    const until = endsToday ? change! : dayEnd;
    spans.push({ shuku, from: cursor, until, startsToday, endsToday });
    if (!endsToday) break;
    cursor = until;
    startsToday = true;
  }
  return spans;
}

/** The 宿 that holds most of a Japan day — "today's 宿" for daily readings. */
export function mainShukuOfDay(date: { year: number; month: number; day: number }, offsetHours = JST_OFFSET_HOURS): Shuku {
  const spans = shukuSpansOfDay(date, offsetHours);
  return spans.reduce((a, b) => (b.until.getTime() - b.from.getTime() > a.until.getTime() - a.from.getTime() ? b : a)).shuku;
}

/** When the Moon next changes sign after `from`, to the minute. */
export const nextSignChange = (from: Date) => nextChange(from, moonSignIndex, 72);

/** The house (1–12) today's Moon occupies counted from a natal Moon sign. */
export function moonTransitHouse(natalSign: number, todaySign: number): number {
  return ((((todaySign - natalSign) % 12) + 12) % 12) + 1;
}

/**
 * Chandra gochar, the classical reading of the Moon's transit from the natal
 * Moon: 1, 3, 6, 7, 10, 11 favourable; 4, 8, 12 unfavourable (the 8th —
 * chandrashtama — most of all); 2, 5, 9 mixed.
 */
export const MOON_HOUSE_QUALITY: Record<number, "good" | "mixed" | "caution"> = {
  1: "good",
  2: "mixed",
  3: "good",
  4: "caution",
  5: "mixed",
  6: "good",
  7: "good",
  8: "caution",
  9: "mixed",
  10: "good",
  11: "good",
  12: "caution",
};
