import Link from "next/link";
import { RELATION_KANJI } from "@/lib/sukuyo/relations";
import { dailyFor, todayInfo } from "@/lib/sukuyo/page-data";
import { shukuHref, type Shuku } from "@/lib/sukuyo/shuku";

const TONE = {
  good: "bg-terracotta/12 text-terracotta",
  mixed: "bg-neutral-tag text-text",
  caution: "bg-moss/12 text-moss",
} as const;

/**
 * Today's 宿 (the Moon's actual position, Japan time) and, on a 宿 page,
 * that 宿's 日運 for today. Server-rendered; the page revalidates hourly.
 */
export default function TodayShukuStrip({ self }: { self?: Shuku }) {
  const info = todayInfo();
  const daily = self ? dailyFor(self, info.main) : null;

  return (
    <section aria-labelledby="today-shuku" className="chart-card p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="today-shuku" className="font-header text-[length:var(--step-1)] text-ink">
          {self ? `${self.kanji}の今日の運勢` : "今日の宿"}
        </h2>
        <p className="text-xs text-text-muted">
          {info.dateLabel}（日本時間）· {info.computedAt} 更新
        </p>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-text">
        今日の月の宿：
        {info.spans.map((s, i) => (
          <span key={s.slug + i}>
            {i > 0 ? " → " : ""}
            <Link href={`/sukuyo/${s.slug}`} className="font-medium text-ink underline decoration-border underline-offset-4 hover:decoration-terracotta">
              {s.kanji}
            </Link>
            <span className="text-text-muted">
              （{s.startsToday ? `${s.from}から` : ""}
              {s.endsToday ? `${s.until}まで` : s.startsToday ? "" : "終日"}）
            </span>
          </span>
        ))}
      </p>

      {daily ? (
        <div className="mt-4 rounded-[14px] border border-border bg-washi p-4">
          <p className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${TONE[daily.tone]}`}>
              {daily.label}（{RELATION_KANJI[daily.kind]}）
            </span>
            <span className="text-xs text-text-muted">{info.main.kanji}の日</span>
          </p>
          <p className="mt-2 text-sm leading-[1.85] text-text">{daily.text}</p>
        </div>
      ) : null}

      <p className="mt-3 text-[11px] leading-relaxed text-text-muted">
        宿は月の実際の位置（天文計算・ラヒリ方式）で判定しています。宿曜暦の日付で宿を割り当てるサイトとは、日によって異なることがあります。
        {self ? null : (
          <>
            {" "}
            <Link href={shukuHref(info.main)} className="underline underline-offset-2">
              {info.main.kanji}の性格と相性
            </Link>
          </>
        )}
      </p>
    </section>
  );
}
