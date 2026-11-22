import Link from "@/components/i18n/LocaleLink";
import { chartFormCopy } from "@/lib/chart-i18n";
import { dailyCopy } from "@/lib/daily/daily-copy";
import type { DayReport } from "@/lib/daily/today";
import type { AppLanguage } from "@/lib/i18n/language";
import { tonightCopy } from "@/lib/home/tonight-copy";
import { nakshatraHref, rashiHref, tr } from "@/lib/sky/entity-links";
import { SIGNS } from "@/lib/sky/quick-sky";
import { DAILY_KIND } from "@/lib/sukuyo/content";
import { shukuHref, type Shuku } from "@/lib/sukuyo/shuku";

/**
 * The daily pieces, shared by /today and the daily sections on the sign and
 * nakshatra pages. Server components: computed at render, the pages
 * revalidate hourly.
 */
export const QUALITY_TONE = {
  good: "bg-terracotta/12 text-terracotta",
  mixed: "bg-neutral-tag text-text",
  caution: "bg-moss/12 text-moss",
} as const;

const nakName = (lang: AppLanguage, s: Shuku) => {
  const n = tr(chartFormCopy[lang].nakshatras, s.nakshatra);
  return lang === "ja" ? `${s.kanji}（${n}）` : n;
};

/** Today's Moon: sign, nakshatra/宿 spans with times, tithi. */
export function DailyMoonCard({ report, lang, title }: { report: DayReport; lang: AppLanguage; title?: string }) {
  const copy = dailyCopy[lang];
  const t = chartFormCopy[lang];
  const tonight = tonightCopy[lang];
  const signName = (i: number) => tr(t.signs, SIGNS[i]);
  const d = report.date;
  const dateText = new Intl.DateTimeFormat(lang, { year: "numeric", month: "long", day: "numeric", weekday: "short", timeZone: "UTC" }).format(new Date(Date.UTC(d.year, d.month - 1, d.day)));

  return (
    <section aria-label={title ?? copy.moonNow} className="chart-cover p-5 sm:p-7">
      <p className="text-xs text-text-muted">
        {copy.dateLabel(dateText)} · {copy.updated(report.computedAt)}
      </p>
      <h2 className="mt-2 font-header text-[length:var(--step-3)] leading-tight text-ink">
        {copy.moonInSign(signName(report.sign))}
      </h2>
      {report.signChange ? <p className="mt-1 text-sm text-text-muted">{copy.moonEnters(report.signChange.at, signName(report.signChange.to))}</p> : null}
      <dl className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <dt className="text-xs text-text-muted">{lang === "ja" ? copy.shukuToday : copy.nakshatraToday}</dt>
          <dd className="mt-1 text-sm leading-relaxed text-ink">
            {report.spans.map((s, i) => (
              <span key={s.shuku.slug + i} className="block">
                <Link href={lang === "ja" ? shukuHref(s.shuku) : nakshatraHref(s.shuku.nakshatra)} className="font-medium underline decoration-border underline-offset-4 hover:decoration-terracotta">
                  {nakName(lang, s.shuku)}
                </Link>{" "}
                <span className="text-text-muted">
                  {s.startsToday ? copy.from(s.from) : ""}
                  {s.startsToday && s.endsToday ? " · " : ""}
                  {s.endsToday ? copy.until(s.until) : ""}
                </span>
              </span>
            ))}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-text-muted">{copy.tithi}</dt>
          <dd className="mt-1 text-sm leading-relaxed text-ink">
            {tonight.tithiValue(tonight.paksha[report.tithi.paksha], report.tithi.day)}
            <span className="block text-text-muted">{tonight.illumination(report.tithi.illumination)}</span>
          </dd>
        </div>
      </dl>
    </section>
  );
}

/** 12 Moon signs → today's house, quality and reading. */
export function SignTable({ report, lang, highlight }: { report: DayReport; lang: AppLanguage; highlight?: number }) {
  const copy = dailyCopy[lang];
  const t = chartFormCopy[lang];
  return (
    <ul className="grid gap-2 md:grid-cols-2">
      {report.bySign.map((row) => (
        <li key={row.sign} className={`rounded-[14px] border p-4 ${row.sign === highlight ? "border-terracotta/60 bg-terracotta/5" : "border-border bg-washi-elevated"}`}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Link href={rashiHref(SIGNS[row.sign])} className="font-header text-[length:var(--step-1)] text-ink hover:text-terracotta">
              {tr(t.signs, SIGNS[row.sign])}
            </Link>
            <span className="flex items-center gap-2 text-xs">
              <span className="text-text-muted">{copy.house(row.house)}</span>
              <span className={`rounded-full px-2.5 py-0.5 font-medium ${QUALITY_TONE[row.quality]}`}>{copy.quality[row.quality]}</span>
            </span>
          </div>
          <p className="mt-2 text-sm leading-[1.8] text-text">{copy.houseText[row.house]}</p>
        </li>
      ))}
    </ul>
  );
}

/** 27 birth nakshatras (宿) → today's tara (and, in Japanese, the 宿曜 日運). */
export function NakshatraTable({ report, lang, highlight }: { report: DayReport; lang: AppLanguage; highlight?: string }) {
  const copy = dailyCopy[lang];
  return (
    <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {report.byNakshatra.map((row) => (
        <li key={row.birth.slug} className={`rounded-[14px] border p-4 ${row.birth.slug === highlight ? "border-terracotta/60 bg-terracotta/5" : "border-border bg-washi-elevated"}`}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Link href={lang === "ja" ? shukuHref(row.birth) : nakshatraHref(row.birth.nakshatra)} className="font-medium text-ink hover:text-terracotta">
              {nakName(lang, row.birth)}
            </Link>
            <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${QUALITY_TONE[row.quality]}`}>
              {lang === "ja" ? DAILY_KIND[row.kind].label : copy.taraName[row.tara]}
            </span>
          </div>
          <p className="mt-1.5 text-[13px] leading-[1.75] text-text">
            {lang === "ja" ? DAILY_KIND[row.kind].text : copy.taraText[row.tara]}
          </p>
          {lang === "ja" ? <p className="mt-1 text-[11px] text-text-muted">{copy.taraName[row.tara]}</p> : null}
        </li>
      ))}
    </ul>
  );
}
