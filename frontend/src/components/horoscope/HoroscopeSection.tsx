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
        unoptimized
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

const horoscopePeriodTypes: HoroscopePeriodType[] = ["weekly", "monthly", "yearly"];
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

  const readingsBySign = useMemo(() => {
    return Object.fromEntries(
      horoscopeSigns.map((sign) => [
        sign.id,
        generateHoroscopeReading(sign, activePeriod),
      ])
    ) as Record<HoroscopeSignId, ReturnType<typeof generateHoroscopeReading>>;
  }, [activePeriod]);

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
        <h2 className="font-header text-3xl tracking-tight text-ink">
          {uiText("horoscope", lang)}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-text-muted">
          {horoscopeIntro[lang]}
        </p>
        <p className="mt-3 text-xs text-text-muted">
          {uiText("updated", lang)}: {updatedLabel}
          <span className="mx-2">·</span>
          {activePeriod.rangeLabel[lang]}
        </p>
      </div>

      <div className="flex flex-wrap gap-6">
        {horoscopePeriodTypes.map((type) => {
          const active = periodType === type;
          const period = getPeriodForType(periods, type);
          return (
            <button
              key={type}
              type="button"
              onClick={() => setPeriodType(type)}
              className={`border-b-2 px-1 pb-1.5 text-left font-body transition-colors ${
                active
                  ? "border-terracotta text-ink"
                  : "border-transparent text-text-muted hover:text-ink"
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
          const reading = readingsBySign[sign.id];
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
                  <div className="rounded-[4px] bg-neutral-tag px-2.5 py-1 font-body text-[11px] text-text">
                    {t(horoscopeSectionLabels.mood, lang)}: {t(reading.mood, lang)}
                  </div>
                </div>

                <div className="min-w-0 flex-1 space-y-5 p-6 md:p-8">
                  <div>
                    <p className="mb-2 font-body text-[10px] font-semibold uppercase tracking-widest text-terracotta">
                      {periodTypeLabel(periodType, lang)} · {activePeriod.label[lang]}
                    </p>
                    <p className="text-sm leading-relaxed text-text">
                      {formatted(reading.overview, lang)}
                    </p>
                  </div>

                  {(Object.keys(horoscopeSectionLabels) as Array<keyof typeof horoscopeSectionLabels>)
                    .filter((key) => key !== "mood")
                    .map((key) => (
                      <div key={key}>
                        <p className="mb-1 font-body text-sm font-semibold text-terracotta">
                          {t(horoscopeSectionLabels[key], lang)}
                        </p>
                        <p className="text-sm leading-relaxed text-text">
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
