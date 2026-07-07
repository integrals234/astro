"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";
import BackToNavButton from "@/components/education/BackToNavButton";
import { FormattedText } from "@/lib/format-inline-text";
import {
  educationUi,
  generateHoroscopeReading,
  getPeriodForType,
  horoscopeIntro,
  horoscopeSectionLabels,
  horoscopeSigns,
  periodTypeLabel,
  uiText,
  useHoroscopePeriods,
  type BilingualText,
  type EducationLang,
  type HoroscopePeriodType,
  type HoroscopeSignId,
} from "@/lib/education";

function t(text: BilingualText, lang: EducationLang) {
  return text[lang];
}

function formatted(text: BilingualText, lang: EducationLang) {
  return <FormattedText text={t(text, lang)} />;
}

function InfographicImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 400px",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`overflow-hidden bg-transparent leading-none ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1008}
        height={1055}
        unoptimized
        style={{ width: "100%", height: "auto" }}
        className="block h-auto w-full"
        sizes={sizes}
      />
    </div>
  );
}

const horoscopePeriodTypes: HoroscopePeriodType[] = ["weekly", "monthly", "yearly"];

export default function HoroscopeSection({ lang }: { lang: EducationLang }) {
  const navRef = useRef<HTMLElement>(null);
  const { now, periods } = useHoroscopePeriods();
  const [periodType, setPeriodType] = useState<HoroscopePeriodType>("weekly");

  const activePeriod = getPeriodForType(periods, periodType);

  const readingsBySign = useMemo(() => {
    return Object.fromEntries(
      horoscopeSigns.map((sign) => [
        sign.id,
        generateHoroscopeReading(sign, activePeriod),
      ])
    ) as Record<HoroscopeSignId, ReturnType<typeof generateHoroscopeReading>>;
  }, [activePeriod.key, activePeriod.type]);

  const updatedLabel = now.toLocaleString(lang === "ja" ? "ja-JP" : "en-US", {
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
        <p className="mb-3 text-[10px] uppercase tracking-[0.28em] text-shell-accent">
          {uiText("liveForecasts", lang)}
        </p>
        <h2 className="font-serif text-3xl tracking-tight text-shell-warm">
          {uiText("horoscope", lang)}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-shell-muted">
          {horoscopeIntro[lang]}
        </p>
        <p className="mt-3 text-xs text-shell-muted/80">
          {uiText("updated", lang)}: {updatedLabel}
          <span className="mx-2">·</span>
          {activePeriod.rangeLabel[lang]}
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {horoscopePeriodTypes.map((type) => {
          const active = periodType === type;
          const period = getPeriodForType(periods, type);
          return (
            <button
              key={type}
              type="button"
              onClick={() => setPeriodType(type)}
              className={`rounded-xl border px-4 py-2.5 text-left transition-all ${
                active
                  ? "border-shell-accent/50 bg-shell-accent-soft text-shell-warm"
                  : "border-shell-border bg-shell-elevated/40 text-shell-muted hover:text-shell-warm"
              }`}
            >
              <span className="block text-sm font-medium">{periodTypeLabel(type, lang)}</span>
              <span className="mt-0.5 block text-[11px] opacity-80">{period.label[lang]}</span>
            </button>
          );
        })}
      </div>

      <nav
        ref={navRef}
        aria-label={uiText("allSigns", lang)}
        className="rounded-2xl border border-shell-border/70 bg-shell-sidebar/30 px-3 py-3"
      >
        <p className="mb-2.5 text-[10px] font-medium uppercase tracking-[0.22em] text-shell-accent">
          {uiText("allTwelveSigns", lang)}
        </p>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
          {horoscopeSigns.map((sign) => (
            <button
              key={sign.id}
              type="button"
              onClick={() => jumpToSign(sign.id)}
              className="rounded-xl border border-shell-border/60 bg-shell-elevated/30 px-2 py-2 text-center text-shell-muted transition-all hover:border-shell-accent/40 hover:bg-shell-accent-soft/40 hover:text-shell-warm"
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
          const reading = readingsBySign[sign.id];
          return (
            <article
              key={sign.id}
              id={`horoscope-${sign.id}`}
              className="scroll-mt-28 overflow-hidden rounded-2xl border border-shell-border bg-shell-elevated/40"
            >
              {index > 0 ? (
                <div className="border-t border-dashed border-shell-border/50" aria-hidden />
              ) : null}
              <div className="flex flex-col md:flex-row">
                <div className="flex w-full shrink-0 flex-col items-center gap-3 border-shell-border/60 p-4 text-center md:w-52 md:border-r md:p-5 lg:w-60">
                  <div className="w-full max-w-[200px]">
                    <InfographicImage
                      src={sign.image}
                      alt={t(sign.name, lang)}
                      className="rounded-xl"
                      sizes="200px"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-shell-warm">{t(sign.name, lang)}</h3>
                    <p className="text-sm text-shell-accent">{t(sign.sanskrit, lang)}</p>
                    <p className="mt-1 text-xs text-shell-muted">
                      {t(sign.element, lang)} · {t(sign.ruler, lang)}
                    </p>
                  </div>
                  <div className="rounded-full border border-shell-accent/30 bg-shell-accent-soft px-3 py-1 text-[11px] text-shell-warm">
                    {t(horoscopeSectionLabels.mood, lang)}: {t(reading.mood, lang)}
                  </div>
                </div>

                <div className="min-w-0 flex-1 space-y-5 p-6 md:p-8">
                  <div>
                    <p className="mb-2 text-[10px] uppercase tracking-widest text-shell-accent">
                      {periodTypeLabel(periodType, lang)} · {activePeriod.label[lang]}
                    </p>
                    <p className="text-sm leading-relaxed text-shell-muted">
                      {formatted(reading.overview, lang)}
                    </p>
                  </div>

                  {(Object.keys(horoscopeSectionLabels) as Array<keyof typeof horoscopeSectionLabels>)
                    .filter((key) => key !== "mood")
                    .map((key) => (
                      <div
                        key={key}
                        className="rounded-xl border border-shell-border/60 bg-shell-sidebar/50 px-4 py-3"
                      >
                        <p className="mb-1 text-[10px] uppercase tracking-widest text-shell-accent">
                          {t(horoscopeSectionLabels[key], lang)}
                        </p>
                        <p className="text-sm leading-relaxed text-shell-warm/90">
                          {formatted(reading[key], lang)}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
