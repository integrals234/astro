"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import BackToNavButton from "@/components/education/BackToNavButton";
import Link from "@/components/i18n/LocaleLink";
// Specific modules, not the "@/lib/education" barrel: the barrel re-exports
// the whole article corpus, which this page never renders.
import { educationUi, uiText } from "@/lib/education/i18n/ui";
import type { HoroscopeSignId } from "@/lib/education/horoscope-engine";
import { forecastForSign, transitCopy } from "@/lib/education/horoscope-transits";
import HoroscopeTabStrip from "@/components/horoscope/HoroscopeTabStrip";
import { todayReport } from "@/lib/daily/today";
import { dailyCopy } from "@/lib/daily/daily-copy";
import { chartFormCopy } from "@/lib/chart-i18n";
import { SIGNS } from "@/lib/sky/quick-sky";
import { tr } from "@/lib/sky/entity-links";
import { getPeriodForType, useHoroscopePeriods } from "@/lib/education/use-horoscope-periods";
import { periodTypeLabel, type HoroscopePeriodType } from "@/lib/education/horoscope-periods";
import { horoscopeSigns } from "@/lib/education/horoscope-signs";
import type { BilingualText, EducationLang } from "@/lib/education/types";

function t(text: BilingualText, lang: EducationLang) {
  return text[lang];
}

const TONE = {
  good: "bg-terracotta/12 text-terracotta",
  mixed: "bg-neutral-tag text-text",
  caution: "bg-moss/12 text-moss",
} as const;

function InfographicImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 400px",
  circle = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  circle?: boolean;
}) {
  return (
    <div className={`overflow-hidden bg-transparent leading-none ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1008}
        height={1055}
        style={
          circle
            ? { width: "100%", height: "100%", objectFit: "cover" }
            : { width: "100%", height: "auto" }
        }
        className={circle ? "block h-full w-full" : "block h-auto w-full"}
        sizes={sizes}
      />
    </div>
  );
}

const dateLocales: Record<EducationLang, string> = {
  en: "en-US",
  hi: "hi-IN",
  ja: "ja-JP",
  ko: "ko-KR",
};

export default function HoroscopeSection({ lang }: { lang: EducationLang }) {
  const navRef = useRef<HTMLElement>(null);
  const { now, periods } = useHoroscopePeriods();
  const [periodType, setPeriodType] = useState<HoroscopePeriodType>("weekly");

  const activePeriod = getPeriodForType(periods, periodType);

  // Deep links from the today page: /horoscope#monthly opens that period;
  // switching keeps the hash in step (shareable, back-button friendly).
  useEffect(() => {
    const fromHash = window.location.hash.slice(1);
    if (fromHash === "weekly" || fromHash === "monthly" || fromHash === "yearly") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- reading the URL once on mount
      setPeriodType(fromHash);
    }
  }, []);
  const selectPeriod = (type: HoroscopePeriodType) => {
    setPeriodType(type);
    window.history.replaceState(null, "", `#${type}`);
  };

  // Today's Moon line for every sign card (the daily page has the detail).
  const today = useMemo(() => todayReport(now), [now]);
  const dc = dailyCopy[lang];

  // Computed from the planets' actual positions for the period (gochar),
  // read from each sign as a Moon sign — no templated text.
  const forecasts = useMemo(() => {
    const weekly = activePeriod.type === "weekly";
    return Object.fromEntries(
      horoscopeSigns.map((sign) => {
        const index = SIGNS.findIndex((x) => x.toLowerCase() === sign.id);
        return [sign.id, forecastForSign(index, activePeriod.start, activePeriod.end, weekly)];
      }),
    ) as Record<HoroscopeSignId, ReturnType<typeof forecastForSign>>;
  }, [activePeriod]);
  const tc = transitCopy[lang];
  const cf = chartFormCopy[lang];
  const shortDate = (d: Date) => d.toLocaleDateString(dateLocales[lang], { month: "short", day: "numeric" });
  const weekday = (d: Date) => d.toLocaleDateString(dateLocales[lang], { weekday: "short", day: "numeric" });

  const updatedLabel = now.toLocaleString(dateLocales[lang], {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  const jumpToSign = (signId: HoroscopeSignId) => {
    document
      .getElementById(`horoscope-${signId}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <p className="washi-eyebrow mb-3">
          {uiText("liveForecasts", lang)}
        </p>
        <h1 className="font-header text-[length:var(--step-3)] tracking-tight text-ink">
          {uiText("horoscopeHeading", lang)}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-text-muted">
          {tc.intro}
        </p>
        <p className="mt-3 text-xs text-text-muted">
          {uiText("updated", lang)}: {updatedLabel}
          <span className="mx-2">·</span>
          {activePeriod.rangeLabel[lang]}
        </p>
      </div>

      <HoroscopeTabStrip
        active={periodType}
        onSelect={selectPeriod}
        sublabels={{
          today: dc.moonInSign(tr(cf.signs, SIGNS[today.sign])),
          weekly: getPeriodForType(periods, "weekly").label[lang],
          monthly: getPeriodForType(periods, "monthly").label[lang],
          yearly: getPeriodForType(periods, "yearly").label[lang],
        }}
      />

      <nav
        ref={navRef}
        aria-label={uiText("allSigns", lang)}
        className="rounded-lg border border-border bg-washi px-3 py-3"
      >
        <p className="washi-eyebrow mb-2.5">
          {uiText("allTwelveSigns", lang)}
        </p>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
          {horoscopeSigns.map((sign) => (
            <button
              key={sign.id}
              type="button"
              onClick={() => jumpToSign(sign.id)}
              className="border-b-2 border-transparent px-1 py-1 text-center font-body text-text-muted transition-colors hover:border-terracotta hover:text-ink"
            >
              <span className="block text-[11px] font-medium leading-tight">
                {t(sign.name, lang)}
              </span>
            </button>
          ))}
        </div>
      </nav>

      <BackToNavButton
        targetRef={navRef}
        lang={lang}
        watchKey={periodType}
        label={educationUi.backToSignList}
      />

      <div className="space-y-8">
        {horoscopeSigns.map((sign, index) => {
          const f = forecasts[sign.id];
          return (
            <article
              key={sign.id}
              id={`horoscope-${sign.id}`}
              className="washi-card scroll-mt-28 overflow-hidden"
            >
              {index > 0 ? (
                <div className="border-t border-dashed border-border" aria-hidden />
              ) : null}
              <div className="flex flex-col md:flex-row">
                <div className="flex w-full shrink-0 flex-col items-center gap-3 border-border p-4 text-center md:w-52 md:border-r md:p-5 lg:w-60">
                  <div className="w-full max-w-[200px]">
                    <InfographicImage
                      src={sign.image}
                      alt={t(sign.name, lang)}
                      className="aspect-square rounded-full ring-[1.5px] ring-terracotta"
                      circle
                      sizes="200px"
                    />
                  </div>
                  <div>
                    <h3 className="font-header text-2xl text-ink">{t(sign.name, lang)}</h3>
                    <p className="mt-0.5 font-body text-xs tracking-[0.03em] text-text-muted">
                      {t(sign.sanskrit, lang)}
                    </p>
                    <div className="mt-2 flex flex-wrap justify-center gap-1.5">
                      <span className="rounded-[4px] bg-neutral-tag px-2 py-0.5 font-body text-[11px] text-text">
                        {t(sign.element, lang)}
                      </span>
                      <span className="rounded-[4px] bg-neutral-tag px-2 py-0.5 font-body text-[11px] text-text">
                        {t(sign.ruler, lang)}
                      </span>
                    </div>
                  </div>
                  <div className={`rounded-full px-3 py-1 font-body text-[11px] font-medium ${TONE[f.tone]}`}>{tc.tone[f.tone]}</div>
                </div>

                <div className="min-w-0 flex-1 space-y-5 p-6 md:p-8">
                  <p className="font-body text-[11px] font-semibold uppercase tracking-widest text-terracotta">
                    {periodTypeLabel(periodType, lang)} · {activePeriod.label[lang]}
                  </p>

                  {(() => {
                    const idx = SIGNS.findIndex((x) => x.toLowerCase() === sign.id);
                    const row = today.bySign[idx];
                    return row ? (
                      <Link href="/horoscope/today" className="block rounded-[12px] border border-border bg-washi p-3 transition-colors hover:border-terracotta/50">
                        <span className="flex flex-wrap items-center gap-2 text-xs">
                          <span className="font-medium text-ink">{dc.sectionTitle}</span>
                          <span className="text-text-muted">{dc.house(row.house)}</span>
                          <span className={`rounded-full px-2 py-0.5 font-medium ${TONE[row.quality]}`}>{dc.quality[row.quality]}</span>
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-text">{dc.houseText[row.house]}</span>
                      </Link>
                    ) : null;
                  })()}

                  {f.sadeSati || f.saturnHard ? (
                    <p className="rounded-[12px] border border-moss/30 bg-moss/5 p-3 text-sm leading-relaxed text-text">
                      {f.sadeSati ? tc.sadeSati : f.saturnHard === 4 ? tc.saturn4 : tc.saturn8}
                    </p>
                  ) : null}

                  <div>
                    <p className="mb-2 font-body text-sm font-semibold text-ink">{tc.planetsTitle}</p>
                    <ul className="space-y-1.5">
                      {f.planets.map((p) => (
                        <li key={p.planet} className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5 border-b border-border/60 pb-1.5 text-sm">
                          <span className="text-text">{tc.inHouse(cf.planets[p.planet] ?? p.planet, p.house, tc.houseTopic[p.house])}</span>
                          <span className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${p.good ? TONE.good : TONE.caution}`}>
                            {p.good ? tc.favourable : tc.challenging}
                          </span>
                          {p.ingress ? (
                            <span className="w-full text-xs text-text-muted">
                              {tc.ingress(cf.planets[p.planet] ?? p.planet, shortDate(p.ingress.date), tr(cf.signs, SIGNS[p.ingress.toSign]))} →{" "}
                              {tc.inHouse("", p.ingress.toHouse, tc.houseTopic[p.ingress.toHouse]).replace(/^[:：]\s*/, "")}
                            </span>
                          ) : null}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {f.days.length ? (
                    <div>
                      <p className="mb-2 font-body text-sm font-semibold text-ink">{tc.daysTitle}</p>
                      <ol className="grid grid-cols-7 gap-1">
                        {f.days.map((d) => (
                          <li key={d.date.toISOString()} className={`rounded-[8px] px-1 py-1.5 text-center text-[11px] ${TONE[d.quality]}`}>
                            {weekday(d.date)}
                          </li>
                        ))}
                      </ol>
                      {f.days.some((d) => d.quality === "good") ? (
                        <p className="mt-2 text-xs text-text">{tc.bestDays(f.days.filter((d) => d.quality === "good").map((d) => weekday(d.date)).join("・"))}</p>
                      ) : null}
                      {f.days.some((d) => d.house === 8) ? (
                        <p className="mt-1 text-xs text-moss">{tc.careDays(f.days.filter((d) => d.house === 8).map((d) => weekday(d.date)).join("・"))}</p>
                      ) : null}
                    </div>
                  ) : null}

                  <Link href="/horoscope/today" className="inline-flex text-sm text-terracotta underline-offset-4 hover:underline">
                    {tc.todayLink} →
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
