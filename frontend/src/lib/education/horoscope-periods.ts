import type { BilingualText, EducationLang } from "./types";

export type HoroscopePeriodType = "weekly" | "monthly" | "yearly";

export interface HoroscopePeriod {
  type: HoroscopePeriodType;
  key: string;
  label: BilingualText;
  rangeLabel: BilingualText;
  start: Date;
  end: Date;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function formatEnDate(date: Date) {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatJaDate(date: Date) {
  return date.toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" });
}

function getIsoWeekInfo(date: Date) {
  const d = startOfDay(date);
  const day = d.getDay() || 7;
  d.setDate(d.getDate() + 4 - day);
  const yearStart = new Date(d.getFullYear(), 0, 1);
  const week = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  const isoYear = d.getFullYear();
  return { isoYear, week };
}

function getWeekBounds(date: Date) {
  const start = startOfDay(date);
  const day = start.getDay();
  const mondayOffset = day === 0 ? -6 : 1 - day;
  start.setDate(start.getDate() + mondayOffset);
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  return { start, end };
}

export function getWeeklyPeriod(date: Date): HoroscopePeriod {
  const { start, end } = getWeekBounds(date);
  const { isoYear, week } = getIsoWeekInfo(date);
  const key = `${isoYear}-W${pad(week)}`;

  return {
    type: "weekly",
    key,
    start,
    end,
    label: {
      en: `Week ${week}, ${isoYear}`,
      ja: `${isoYear}年 第${week}週`,
    },
    rangeLabel: {
      en: `${formatEnDate(start)} – ${formatEnDate(end)}`,
      ja: `${formatJaDate(start)} 〜 ${formatJaDate(end)}`,
    },
  };
}

export function getMonthlyPeriod(date: Date): HoroscopePeriod {
  const start = new Date(date.getFullYear(), date.getMonth(), 1);
  const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const key = `${start.getFullYear()}-${pad(start.getMonth() + 1)}`;

  return {
    type: "monthly",
    key,
    start,
    end,
    label: {
      en: start.toLocaleDateString("en-US", { month: "long", year: "numeric" }),
      ja: start.toLocaleDateString("ja-JP", { year: "numeric", month: "long" }),
    },
    rangeLabel: {
      en: `${formatEnDate(start)} – ${formatEnDate(end)}`,
      ja: `${formatJaDate(start)} 〜 ${formatJaDate(end)}`,
    },
  };
}

export function getYearlyPeriod(date: Date): HoroscopePeriod {
  const year = date.getFullYear();
  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);
  const key = String(year);

  return {
    type: "yearly",
    key,
    start,
    end,
    label: { en: String(year), ja: `${year}年` },
    rangeLabel: {
      en: `January 1 – December 31, ${year}`,
      ja: `${year}年1月1日 〜 12月31日`,
    },
  };
}

export function getHoroscopePeriods(date = new Date()) {
  return {
    weekly: getWeeklyPeriod(date),
    monthly: getMonthlyPeriod(date),
    yearly: getYearlyPeriod(date),
  };
}

export function periodTypeLabel(type: HoroscopePeriodType, lang: EducationLang): string {
  const labels: Record<HoroscopePeriodType, BilingualText> = {
    weekly: { en: "Weekly", ja: "週間" },
    monthly: { en: "Monthly", ja: "月間" },
    yearly: { en: "Yearly", ja: "年間" },
  };
  return labels[type][lang];
}
