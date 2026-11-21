"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { chartFormCopy, type ChartTranslations } from "@/lib/chart-i18n";
import { NAKSHATRAS } from "@/lib/jyotish/nakshatra-data";
import { computeQuickSky, type QuickSky } from "@/lib/sky/quick-sky";
import { tonightCopy } from "@/lib/home/tonight-copy";

/**
 * いまの空 — the sky at this very moment.
 *
 * A daily reason to come back: the Moon's nakshatra and phase, the tithi,
 * and the Sun's rashi, computed in the browser from the current time with
 * the same Meeus + Lahiri approximation as the hero's live preview (no
 * request). Rendered after mount so the server HTML never disagrees with
 * the visitor's clock; refreshes every ten minutes.
 */
function nowSky(): QuickSky {
  const d = new Date();
  return computeQuickSky({
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate(),
    hour: d.getHours(),
    minute: d.getMinutes(),
    utcOffset: -d.getTimezoneOffset() / 60,
  });
}

/** Lit portion of the Moon for an elongation (Moon − Sun, degrees). */
function MoonPhase({ elongation }: { elongation: number }) {
  const r = 26;
  const c = 30;
  const k = Math.cos((elongation * Math.PI) / 180);
  const waxing = elongation < 180;
  const rx = Math.abs(k) * r;
  const limbSweep = waxing ? 1 : 0;
  const termSweep = k > 0 === waxing ? 0 : 1;
  const lit = `M ${c} ${c - r} A ${r} ${r} 0 0 ${limbSweep} ${c} ${c + r} A ${rx} ${r} 0 0 ${termSweep} ${c} ${c - r} Z`;
  return (
    <svg viewBox="0 0 60 60" className="moon-disc h-16 w-16 shrink-0" aria-hidden>
      <circle cx={c} cy={c} r={r} fill="#1c2340" stroke="color-mix(in srgb, #dcb86c 35%, transparent)" strokeWidth="0.6" />
      <path d={lit} fill="#f2ead7" />
    </svg>
  );
}

export default function TonightSky() {
  const { language } = useLanguage();
  const copy = tonightCopy[language];
  const t: ChartTranslations = chartFormCopy[language];
  const [sky, setSky] = useState<QuickSky | null>(null);

  useEffect(() => {
    let alive = true;
    const update = () => Promise.resolve().then(() => alive && setSky(nowSky()));
    void update();
    const timer = window.setInterval(update, 10 * 60 * 1000);
    return () => {
      alive = false;
      window.clearInterval(timer);
    };
  }, []);

  const elongation = sky ? (((sky.moon.longitude - sky.sun.longitude) % 360) + 360) % 360 : 0;
  const tithi = Math.floor(elongation / 12) + 1; // 1–30
  const pakshaKey = tithi <= 15 ? "Shukla" : "Krishna";
  const pakshaDay = tithi <= 15 ? tithi : tithi - 15;
  const illumination = Math.round(((1 - Math.cos((elongation * Math.PI) / 180)) / 2) * 100);
  const nakName = sky ? NAKSHATRAS[sky.moon.nakshatraNumber - 1]?.name : "";

  return (
    <section aria-labelledby="tonight-heading" className="relative mx-auto w-full max-w-6xl px-4 md:px-8">
      <div className="grid gap-8 border-y border-border py-10 md:py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,2fr)] lg:items-center lg:gap-14">
        <div className="min-w-0">
          <h2 id="tonight-heading" className="font-header text-[length:var(--step-2)] text-ink">
            {copy.heading}
          </h2>
          <p className="mt-3 max-w-[30em] text-sm leading-relaxed text-text-muted">{copy.lead}</p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href="#hero-title" className="inline-flex items-center gap-1.5 text-terracotta underline-offset-4 hover:underline">
              {copy.ctaChart}
              <ArrowRight size={14} aria-hidden />
            </a>
            <Link href="/tools/panchang" className="inline-flex items-center gap-1.5 text-text-muted underline-offset-4 hover:text-ink hover:underline">
              {copy.ctaPanchang}
              <ArrowRight size={14} aria-hidden />
            </Link>
          </div>
        </div>

        <dl className="grid min-h-[7.5rem] grid-cols-2 gap-x-6 gap-y-7 md:grid-cols-4" aria-live="polite">
          <div className="col-span-2 flex items-center gap-4 md:col-span-1">
            {sky ? <MoonPhase elongation={elongation} /> : <span className="h-16 w-16 shrink-0 rounded-full bg-neutral-tag" aria-hidden />}
            <div className="min-w-0">
              <dt className="text-xs text-text-muted">{copy.phaseLabel}</dt>
              <dd className="mt-1 font-chart text-sm tabular-nums text-ink">{sky ? copy.illumination(illumination) : "—"}</dd>
            </div>
          </div>
          <div className="min-w-0">
            <dt className="text-xs text-text-muted">{copy.moonLabel}</dt>
            <dd className="mt-1 font-header text-[length:var(--step-1)] text-ink">{sky ? (t.nakshatras[nakName] ?? nakName) : "—"}</dd>
            {sky ? <dd className="mt-0.5 text-xs text-text-muted">{copy.pada(sky.moon.pada)}</dd> : null}
          </div>
          <div className="min-w-0">
            <dt className="text-xs text-text-muted">{copy.tithiLabel}</dt>
            <dd className="mt-1 text-sm leading-snug text-ink">{sky ? copy.tithiValue(copy.paksha[pakshaKey], pakshaDay) : "—"}</dd>
          </div>
          <div className="min-w-0">
            <dt className="text-xs text-text-muted">{copy.sunLabel}</dt>
            <dd className="mt-1 font-header text-[length:var(--step-1)] text-ink">{sky ? (t.signs[sky.sun.sign] ?? sky.sun.sign) : "—"}</dd>
          </div>
          <p className="col-span-2 text-[11px] text-text-muted md:col-span-4">{copy.note}</p>
        </dl>
      </div>
    </section>
  );
}
