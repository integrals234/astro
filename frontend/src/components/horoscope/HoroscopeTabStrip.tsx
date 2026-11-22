"use client";

import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { periodTypeLabel, type HoroscopePeriodType } from "@/lib/education/horoscope-periods";

export type HoroscopeTab = "today" | HoroscopePeriodType;

const TODAY_LABEL = { ja: "今日", en: "Today", hi: "आज", ko: "오늘" } as const;
const PERIODS: HoroscopePeriodType[] = ["weekly", "monthly", "yearly"];

/**
 * The Horoscope tab's own tabs: 今日 | 週間 | 月間 | 年間. "Today" is its own
 * page (/horoscope/today); the three periods switch in place on /horoscope
 * (`onSelect`), or link there by hash from the today page.
 */
export default function HoroscopeTabStrip({
  active,
  onSelect,
  sublabels = {},
}: {
  active: HoroscopeTab;
  /** On /horoscope: switch period without leaving the page. */
  onSelect?: (type: HoroscopePeriodType) => void;
  sublabels?: Partial<Record<HoroscopeTab, string>>;
}) {
  const { language } = useLanguage();
  const cls = (on: boolean) =>
    `block border-b-2 px-1 pb-1.5 text-left font-body transition-colors ${on ? "border-terracotta text-ink" : "border-transparent text-text-muted hover:text-ink"}`;
  const inner = (label: string, sub?: string) => (
    <>
      <span className="block text-sm font-medium">{label}</span>
      {sub ? <span className="mt-0.5 block text-[11px] opacity-80">{sub}</span> : null}
    </>
  );

  return (
    <nav aria-label={language === "ja" ? "運勢の期間" : "Horoscope period"} className="flex flex-wrap gap-6">
      <Link href="/horoscope/today" aria-current={active === "today" ? "page" : undefined} className={cls(active === "today")}>
        {inner(TODAY_LABEL[language], sublabels.today)}
      </Link>
      {PERIODS.map((type) =>
        onSelect ? (
          <button key={type} type="button" aria-pressed={active === type} onClick={() => onSelect(type)} className={cls(active === type)}>
            {inner(periodTypeLabel(type, language), sublabels[type])}
          </button>
        ) : (
          <Link key={type} href={`/horoscope#${type}`} className={cls(false)}>
            {inner(periodTypeLabel(type, language), sublabels[type])}
          </Link>
        ),
      )}
    </nav>
  );
}
