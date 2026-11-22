"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { chartFormCopy } from "@/lib/chart-i18n";
import { dailyCopy } from "@/lib/daily/daily-copy";
import { NAKSHATRAS } from "@/lib/jyotish/nakshatra-data";
import { quickSkyFromFields } from "@/lib/sky/quick-sky";
import { tr } from "@/lib/sky/entity-links";

/**
 * "Don't know your Moon sign?" — a birth date and time give an estimate on
 * the spot (Japan time, the quick-sky series). The exact answer, with the
 * birthplace, is one link away.
 */
export default function MoonSignFinder() {
  const { language } = useLanguage();
  const copy = dailyCopy[language];
  const t = chartFormCopy[language];
  const [date, setDate] = useState("");
  const [time, setTime] = useState("12:00");
  const sky = date ? quickSkyFromFields(date, time, 9) : null;
  const nak = sky ? NAKSHATRAS[sky.moon.nakshatraNumber - 1] : null;

  return (
    <section aria-labelledby="find-moon" className="chart-card p-5 sm:p-6">
      <h2 id="find-moon" className="font-header text-[length:var(--step-1)] text-ink">
        {copy.findTitle}
      </h2>
      <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{copy.findLead}</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <label className="block min-w-0">
          <span className="mb-1.5 block text-xs text-text-muted">{copy.findDate}</span>
          <input type="date" min="1800-01-01" max="2100-12-31" value={date} onChange={(e) => setDate(e.target.value)} className="washi-field w-full min-w-0 p-3 text-base" />
        </label>
        <label className="block min-w-0">
          <span className="mb-1.5 block text-xs text-text-muted">{copy.findTime}</span>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="washi-field w-full min-w-0 p-3 text-base" />
        </label>
      </div>
      <p className="mt-4 min-h-[1.75rem] font-header text-[length:var(--step-1)] text-ink" aria-live="polite">
        {sky && nak ? copy.findResult(tr(t.signs, sky.moon.sign), language === "ja" ? `${tr(t.nakshatras, nak.name)}（${nak.sukuyo}）` : tr(t.nakshatras, nak.name)) : ""}
      </p>
      <Link href="/tools/moon-sign" className="mt-2 inline-flex items-center gap-1.5 text-sm text-terracotta">
        {copy.findExact}
        <ArrowRight size={14} aria-hidden />
      </Link>
    </section>
  );
}
