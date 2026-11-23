"use client";

import Link from "@/components/i18n/LocaleLink";
import { ArrowRight } from "lucide-react";
import { DailyMoonCard, QUALITY_TONE } from "@/components/daily/DailyParts";
import { useDayReport } from "@/components/daily/DayReportProvider";
import { chartFormCopy } from "@/lib/chart-i18n";
import { dailyCopy } from "@/lib/daily/daily-copy";
import type { AppLanguage } from "@/lib/i18n/language";
import { SIGNS } from "@/lib/sky/quick-sky";
import { tr } from "@/lib/sky/entity-links";
import { DAILY_KIND } from "@/lib/sukuyo/content";
import { shukuBySlug } from "@/lib/sukuyo/shuku";

export function SignDailyView({ engineSign, lang }: { engineSign: string; lang: AppLanguage }) {
  const { today: report } = useDayReport();
  const index = SIGNS.findIndex((s) => s.toLowerCase() === engineSign.toLowerCase());
  if (index < 0) return null;
  const row = report.bySign[index];
  const copy = dailyCopy[lang];
  const name = tr(chartFormCopy[lang].signs, SIGNS[index]);
  return (
    <section aria-labelledby="sign-today" className="space-y-4">
      <h2 id="sign-today" className="font-header text-[length:var(--step-2)] text-ink">
        {lang === "ja" ? `${name}（月星座）の${copy.sectionTitle}` : `${copy.sectionTitle}: ${name} (${copy.yourMoonSign})`}
      </h2>
      <div className="chart-card p-5">
        <p className="flex flex-wrap items-center gap-2 text-sm">
          <span className="text-text-muted">{copy.house(row.house)}</span>
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${QUALITY_TONE[row.quality]}`}>{copy.quality[row.quality]}</span>
        </p>
        <p className="mt-2 leading-[1.85] text-text">{copy.houseText[row.house]}</p>
      </div>
      <DailyMoonCard lang={lang} />
      <Link href="/horoscope/today" className="inline-flex items-center gap-1.5 text-sm text-terracotta">
        {copy.title}
        <ArrowRight size={14} aria-hidden />
      </Link>
    </section>
  );
}

export function NakshatraDailyView({ slug, lang }: { slug: string; lang: AppLanguage }) {
  const { today: report } = useDayReport();
  const shuku = shukuBySlug(slug);
  if (!shuku) return null;
  const row = report.byNakshatra.find((r) => r.birth.slug === shuku.slug)!;
  const copy = dailyCopy[lang];
  const name = tr(chartFormCopy[lang].nakshatras, shuku.nakshatra);
  return (
    <section aria-labelledby="nak-today" className="space-y-4">
      <h2 id="nak-today" className="font-header text-[length:var(--step-2)] text-ink">
        {lang === "ja" ? `${name}（${shuku.kanji}）生まれの${copy.sectionTitle}` : `${copy.sectionTitle}: ${name}`}
      </h2>
      <div className="chart-card p-5">
        <p className="flex flex-wrap items-center gap-2 text-sm">
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${QUALITY_TONE[row.quality]}`}>
            {lang === "ja" ? DAILY_KIND[row.kind].label : copy.taraName[row.tara]}
          </span>
          <span className="text-xs text-text-muted">{copy.taraName[row.tara]}</span>
        </p>
        <p className="mt-2 leading-[1.85] text-text">{lang === "ja" ? DAILY_KIND[row.kind].text : copy.taraText[row.tara]}</p>
      </div>
      <DailyMoonCard lang={lang} />
      <Link href="/horoscope/today" className="inline-flex items-center gap-1.5 text-sm text-terracotta">
        {copy.title}
        <ArrowRight size={14} aria-hidden />
      </Link>
    </section>
  );
}
