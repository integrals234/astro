/**
 * Server-side helpers that assemble the 宿曜 pages from the logic
 * (relations.ts, moon-day.ts) and the content (content.ts).
 */
import { SHUKUS, SHUKU_DISPLAY_ORDER, type Shuku } from "./shuku";
import { relationOf, DISTANCE_LABEL, GROUP_KANJI, RELATION_KANJI, type Relation, type RelationGroup } from "./relations";
import { DAILY_KIND, GROUP_MEANING, SHUKU_PROFILES } from "./content";
import { jstDate, shukuSpansOfDay } from "@/lib/daily/moon-day";

/** Good relations first, the demanding ones last. */
export const GROUP_ORDER: readonly RelationGroup[] = ["eishin", "yuusui", "gyoutai", "mei", "kisei", "ankai"];

export interface PartnerRow {
  partner: Shuku;
  relation: Relation;
}

/** Every 宿 grouped by its relation to `self`, near → far within a group. */
export function partnersByGroup(self: Shuku): { group: RelationGroup; rows: PartnerRow[] }[] {
  const rank = { near: 0, mid: 1, far: 2 } as const;
  return GROUP_ORDER.map((group) => ({
    group,
    rows: SHUKU_DISPLAY_ORDER.map((partner) => ({ partner, relation: relationOf(self, partner) }))
      .filter((r) => r.relation.group === group)
      .sort((x, y) => (x.relation.distance ? rank[x.relation.distance] : -1) - (y.relation.distance ? rank[y.relation.distance] : -1)),
  }));
}

/** 「栄親・近距離」, or 「業胎」 where there is no distance. */
export function relationLabel(r: Relation): string {
  return r.distance ? `${GROUP_KANJI[r.group]}・${DISTANCE_LABEL[r.distance]}` : GROUP_KANJI[r.group];
}

export function pairTitle(a: Shuku, b: Shuku, r: Relation): string {
  return `${a.kanji}と${b.kanji}の相性｜${relationLabel(r)}`;
}

/** One-paragraph answer, used for the meta description and the FAQ. */
export function pairSummary(a: Shuku, b: Shuku, r: Relation): string {
  const group = GROUP_MEANING[r.group];
  const view =
    r.group === "mei"
      ? `${a.kanji}どうしは同じ宿の「命命」の関係です。`
      : `${a.kanji}から見て${b.kanji}は「${RELATION_KANJI[r.kind]}」、${b.kanji}から見て${a.kanji}は「${RELATION_KANJI[r.reverse]}」にあたる「${GROUP_KANJI[r.group]}」の関係${r.distance ? `（${DISTANCE_LABEL[r.distance]}）` : ""}です。`;
  return `宿曜占星術の三九の秘法では、${view}${group.summary}`;
}

export function profileOf(s: Shuku) {
  return SHUKU_PROFILES[s.kanji];
}

/** "HH:MM" in Japan time. */
export const fmtJst = (d: Date) => new Date(d.getTime() + 9 * 3600_000).toISOString().slice(11, 16);

export interface TodayInfo {
  dateLabel: string;
  spans: { kanji: string; slug: string; reading: string; from: string; until: string; startsToday: boolean; endsToday: boolean }[];
  /** The 宿 holding most of the day. */
  main: Shuku;
  /** When this was computed (Japan time), for "updated". */
  computedAt: string;
}

export function todayInfo(now = new Date()): TodayInfo {
  const date = jstDate(now);
  const spans = shukuSpansOfDay(date);
  const main = spans.reduce((x, y) => (y.until.getTime() - y.from.getTime() > x.until.getTime() - x.from.getTime() ? y : x)).shuku;
  return {
    dateLabel: `${date.year}年${date.month}月${date.day}日`,
    spans: spans.map((s) => ({
      kanji: s.shuku.kanji,
      slug: s.shuku.slug,
      reading: s.shuku.reading,
      from: fmtJst(s.from),
      until: fmtJst(s.until),
      startsToday: s.startsToday,
      endsToday: s.endsToday,
    })),
    main,
    computedAt: fmtJst(now),
  };
}

/** Today's 日運 for one 本命宿. */
export function dailyFor(self: Shuku, today: Shuku) {
  const r = relationOf(self, today);
  return { kind: r.kind, ...DAILY_KIND[r.kind] };
}

export { SHUKUS, SHUKU_DISPLAY_ORDER };
