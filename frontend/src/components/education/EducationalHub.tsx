"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Orbit,
  Star,
  Eye,
  Languages,
  Sparkles,
  ArrowRight,
  Circle,
  CalendarRange,
} from "lucide-react";
import AppShell from "@/components/layout/AppShell";
import {
  educationSections,
  introHero,
  introSubtitle,
  introBlocks,
  rashisIntro,
  rashisOverviewBlocks,
  rashis,
  planetsIntro,
  planets,
  nakshatrasIntro,
  nakshatras,
  aspectsIntro,
  universalAspect,
  specialAspects,
  conjunctionBlock,
  horoscopeIntro,
  horoscopeSigns,
  horoscopeSectionLabels,
  generateHoroscopeReading,
  periodTypeLabel,
  getPeriodForType,
  useHoroscopePeriods,
  type EducationLang,
  type EducationSectionId,
  type BilingualText,
  type RashiEntry,
  type HoroscopePeriodType,
  type HoroscopeSignId,
} from "@/lib/education";

const sectionIcons: Record<EducationSectionId, typeof BookOpen> = {
  introduction: BookOpen,
  rashis: Circle,
  planets: Orbit,
  nakshatras: Star,
  aspects: Eye,
  horoscope: CalendarRange,
};

function t(text: BilingualText, lang: EducationLang) {
  return text[lang];
}

/** Infographic display — borderless crops black edges; transparent omits fill for PNG alpha. */
function InfographicImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 400px",
  variant = "borderless",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  variant?: "borderless" | "transparent";
}) {
  if (variant === "transparent") {
    return (
      <div className={`overflow-hidden bg-transparent leading-none ${className}`}>
        <Image
          src={src}
          alt={alt}
          width={1008}
          height={1055}
          unoptimized
          style={{ width: "100%", height: "auto" }}
          className="block w-full h-auto"
          sizes={sizes}
        />
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-[#fafaf8] ${className}`}>
      <div className="scale-[1.03] origin-center">
        <Image
          src={src}
          alt={alt}
          width={750}
          height={500}
          className="w-full h-auto block"
          sizes={sizes}
        />
      </div>
    </div>
  );
}

function SectionFade({
  sectionKey,
  children,
}: {
  sectionKey: string;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={sectionKey}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function PublicHeader({ lang }: { lang: EducationLang }) {
  return (
    <header className="border-b border-shell-border bg-shell-sidebar/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <Link href="/" className="group">
          <span className="font-serif text-xl tracking-tight text-shell-warm group-hover:text-shell-accent transition-colors">
            Astro
          </span>
        </Link>
        <nav className="flex items-center gap-2 md:gap-4">
          <Link
            href="/chart"
            className="inline-flex items-center gap-1.5 rounded-lg border border-shell-border bg-shell-elevated/60 px-3 py-2 text-xs font-medium text-shell-warm hover:border-shell-accent/40 hover:text-shell-accent transition-all"
          >
            <Sparkles size={14} />
            {lang === "ja" ? "チャート作成" : "Generate Chart"}
          </Link>
          <SignedOut>
            <Link
              href="/sign-in"
              className="text-xs font-medium text-shell-muted hover:text-shell-warm transition-colors"
            >
              {lang === "ja" ? "ログイン" : "Sign In"}
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>
      </div>
    </header>
  );
}

function IntroductionSection({ lang }: { lang: EducationLang }) {
  return (
    <div className="space-y-10">
      <div className="max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent mb-3">
          {lang === "ja" ? "インド占星術の基礎" : "Indian Jyotish Basics"}
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-shell-warm tracking-tight">
          {t(introHero, lang)}
        </h2>
        <p className="mt-4 text-sm md:text-base leading-relaxed text-shell-muted">
          {t(introSubtitle, lang)}
        </p>
      </div>

      {introBlocks.map((block, i) => (
        <article
          key={i}
          className="rounded-2xl border border-shell-border bg-shell-elevated/40 p-6 md:p-8"
        >
          {block.title && (
            <h3 className="font-serif text-xl text-shell-warm mb-4">
              {t(block.title, lang)}
            </h3>
          )}
          <div className="space-y-4">
            {block.paragraphs.map((p, j) => (
              <p key={j} className="text-sm leading-relaxed text-shell-muted">
                {t(p, lang)}
              </p>
            ))}
          </div>
        </article>
      ))}

      <Link
        href="/chart"
        className="inline-flex items-center gap-2 rounded-xl bg-shell-accent-soft border border-shell-accent/30 px-5 py-3 text-sm font-medium text-shell-warm hover:bg-shell-accent/20 transition-colors"
      >
        {lang === "ja" ? "あなたのクンダリーを作成する" : "Generate your Kundli"}
        <ArrowRight size={16} className="text-shell-accent" />
      </Link>
    </div>
  );
}

const rashiSectionLabels: Record<keyof RashiEntry["sections"], BilingualText> = {
  nature: { en: "Nature", ja: "性質" },
  career: { en: "Career", ja: "キャリア" },
  relationships: { en: "Relationships", ja: "人間関係" },
  romance: { en: "Romance", ja: "恋愛" },
  health: { en: "Health", ja: "健康" },
  decans: { en: "Decans", ja: "デカン" },
};

function RashisSection({ lang }: { lang: EducationLang }) {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent mb-3">
          {lang === "ja" ? "12のラーシ" : "Twelve Rashis"}
        </p>
        <h2 className="font-serif text-3xl text-shell-warm tracking-tight">
          {lang === "ja" ? "ラーシ（星座）" : "Rashis (Zodiac Signs)"}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-shell-muted">
          {rashisIntro[lang]}
        </p>
      </div>

      {rashisOverviewBlocks.map((block, i) => (
        <article
          key={i}
          className="rounded-2xl border border-shell-border bg-shell-elevated/40 p-6 md:p-8"
        >
          {block.title && (
            <h3 className="font-serif text-xl text-shell-warm mb-4">
              {t(block.title, lang)}
            </h3>
          )}
          <div className="space-y-4">
            {block.paragraphs.map((p, j) => (
              <p key={j} className="text-sm leading-relaxed text-shell-muted">
                {t(p, lang)}
              </p>
            ))}
          </div>
        </article>
      ))}

      <div className="space-y-8">
        {rashis.map((sign) => (
          <article
            key={sign.id}
            className="rounded-2xl border border-shell-border bg-shell-elevated/40 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-64 lg:w-72 xl:w-80 shrink-0 md:border-r border-shell-border/60">
                <InfographicImage
                  src={sign.image}
                  alt={t(sign.name, lang)}
                  variant="transparent"
                  className="rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
              <div className="flex-1 min-w-0 p-6 md:p-8">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <span className="text-[10px] text-shell-muted">#{sign.number}</span>
                  <h3 className="font-serif text-2xl text-shell-warm">
                    {t(sign.name, lang)}
                  </h3>
                  <span className="text-sm text-shell-accent">{t(sign.sanskrit, lang)}</span>
                </div>
                <p className="text-xs text-shell-muted mb-4">{t(sign.dates, lang)}</p>
                <p className="text-sm leading-relaxed text-shell-muted mb-5">
                  {t(sign.description, lang)}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-5 text-xs">
                  <div>
                    <span className="text-shell-accent">{lang === "ja" ? "元素" : "Element"}: </span>
                    <span className="text-shell-warm/90">{t(sign.element, lang)}</span>
                  </div>
                  <div>
                    <span className="text-shell-accent">{lang === "ja" ? "支配星" : "Ruler"}: </span>
                    <span className="text-shell-warm/90">{t(sign.ruler, lang)}</span>
                  </div>
                  <div>
                    <span className="text-shell-accent">{lang === "ja" ? "象徴" : "Symbol"}: </span>
                    <span className="text-shell-warm/90">{t(sign.symbol, lang)}</span>
                  </div>
                  <div>
                    <span className="text-shell-accent">{lang === "ja" ? "身体" : "Body"}: </span>
                    <span className="text-shell-warm/90">{t(sign.bodyPart, lang)}</span>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2 mb-5">
                  {sign.traits.map((trait, i) => (
                    <li
                      key={i}
                      className="rounded-full border border-shell-border/60 bg-shell-sidebar/40 px-3 py-1 text-[11px] text-shell-warm/90"
                    >
                      {t(trait, lang)}
                    </li>
                  ))}
                </ul>
                <div className="space-y-4">
                  {(Object.keys(sign.sections) as Array<keyof typeof sign.sections>).map(
                    (key) => (
                      <div
                        key={key}
                        className="rounded-xl border border-shell-border/60 bg-shell-sidebar/50 px-4 py-3"
                      >
                        <p className="text-[10px] uppercase tracking-widest text-shell-accent mb-1">
                          {t(rashiSectionLabels[key], lang)}
                        </p>
                        <p className="text-sm text-shell-warm/90 leading-relaxed">
                          {t(sign.sections[key], lang)}
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function PlanetsSection({ lang }: { lang: EducationLang }) {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent mb-3">
          Navagraha
        </p>
        <h2 className="font-serif text-3xl text-shell-warm tracking-tight">
          {lang === "ja" ? "9つの惑星（グラハ）" : "The Nine Grahas"}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-shell-muted">
          {planetsIntro[lang]}
        </p>
      </div>

      <div className="space-y-8">
        {planets.map((planet) => (
          <article
            key={planet.id}
            className="rounded-2xl border border-shell-border bg-shell-elevated/40 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-64 lg:w-72 xl:w-80 shrink-0 md:border-r border-shell-border/60">
                <InfographicImage
                  src={planet.image}
                  alt={t(planet.name, lang)}
                  className="rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
              <div className="flex-1 min-w-0 p-6 md:p-8">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                  <h3 className="font-serif text-2xl text-shell-warm">
                    {t(planet.name, lang)}
                  </h3>
                  <span className="text-sm text-shell-accent">{t(planet.sanskrit, lang)}</span>
                </div>
                <p className="text-sm leading-relaxed text-shell-muted mb-5">
                  {t(planet.description, lang)}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
                  {planet.attributes.map((attr, i) => (
                    <div key={i} className="text-xs">
                      <span className="text-shell-accent">{t(attr.label, lang)}: </span>
                      <span className="text-shell-warm/90">{t(attr.value, lang)}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-shell-border/60 bg-shell-sidebar/50 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-widest text-shell-muted mb-1">
                    {lang === "ja" ? "象意" : "Significations"}
                  </p>
                  <p className="text-sm text-shell-warm/90 leading-relaxed">
                    {t(planet.significations, lang)}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function NakshatrasSection({ lang }: { lang: EducationLang }) {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent mb-3">
          {lang === "ja" ? "月の27宿" : "27 Lunar Mansions"}
        </p>
        <h2 className="font-serif text-3xl text-shell-warm tracking-tight">
          {lang === "ja" ? "ナクシャトラ" : "Nakshatras"}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-shell-muted">
          {nakshatrasIntro[lang]}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {nakshatras.map((nak) => (
          <article
            key={nak.id}
            className="rounded-2xl border border-shell-border bg-shell-elevated/40 overflow-hidden flex flex-col"
          >
            {nak.image ? (
              <InfographicImage
                src={nak.image}
                alt={t(nak.name, lang)}
                className="rounded-t-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="flex h-28 items-center justify-center rounded-t-2xl bg-[#fafaf8]">
                <Star size={28} className="text-shell-accent/50" />
              </div>
            )}
            <div className="p-5 flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[10px] text-shell-muted">#{nak.number}</span>
                <h3 className="font-serif text-lg text-shell-warm">
                  {t(nak.name, lang)}
                </h3>
              </div>
              <p className="text-xs text-shell-accent mb-2">{t(nak.sanskrit, lang)}</p>
              <p className="text-xs leading-relaxed text-shell-muted mb-3">
                {t(nak.description, lang)}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 text-[11px] text-shell-muted/90">
                <span>
                  <span className="text-shell-accent">{lang === "ja" ? "神" : "Deity"}: </span>
                  {t(nak.deity, lang)}
                </span>
                <span>
                  <span className="text-shell-accent">{lang === "ja" ? "支配星" : "Ruler"}: </span>
                  {t(nak.ruler, lang)}
                </span>
                <span>
                  <span className="text-shell-accent">{lang === "ja" ? "象徴" : "Symbol"}: </span>
                  {t(nak.symbol, lang)}
                </span>
                <span>
                  <span className="text-shell-accent">{lang === "ja" ? "範囲" : "Range"}: </span>
                  {t(nak.range, lang)}
                </span>
              </div>
              <ul className="mt-2 space-y-0.5">
                {nak.qualities.map((q, i) => (
                  <li key={i} className="text-[11px] text-shell-warm/80 before:content-['·'] before:mr-1.5 before:text-shell-accent">
                    {t(q, lang)}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function AspectsSection({ lang }: { lang: EducationLang }) {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent mb-3">
          Drishti
        </p>
        <h2 className="font-serif text-3xl text-shell-warm tracking-tight">
          {lang === "ja" ? "アスペクト（ドリシュティ）" : "Aspects (Drishti)"}
        </h2>
      </div>

      <article className="rounded-2xl border border-shell-border bg-shell-elevated/40 p-6 md:p-8">
        {aspectsIntro.title && (
          <h3 className="font-serif text-xl text-shell-warm mb-4">
            {t(aspectsIntro.title, lang)}
          </h3>
        )}
        {aspectsIntro.paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-shell-muted mb-3 last:mb-0">
            {t(p, lang)}
          </p>
        ))}
      </article>

      <article className="rounded-2xl border border-shell-border bg-shell-elevated/40 p-6 md:p-8">
        {universalAspect.title && (
          <h3 className="font-serif text-xl text-shell-warm mb-4">
            {t(universalAspect.title, lang)}
          </h3>
        )}
        {universalAspect.paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-shell-muted mb-3">
            {t(p, lang)}
          </p>
        ))}
        {universalAspect.bullets && (
          <ul className="space-y-2">
            {universalAspect.bullets.map((b, i) => (
              <li key={i} className="text-sm text-shell-warm/90 before:content-['·'] before:mr-2 before:text-shell-accent">
                {t(b, lang)}
              </li>
            ))}
          </ul>
        )}
      </article>

      <div className="space-y-5">
        {specialAspects.map((rule, i) => (
          <article
            key={i}
            className="rounded-2xl border border-shell-border bg-shell-elevated/40 p-6 md:p-8"
          >
            <h3 className="font-serif text-xl text-shell-warm mb-1">
              {t(rule.planet, lang)}
            </h3>
            <p className="text-xs text-shell-accent mb-3">
              {lang === "ja" ? "アスペクト先" : "Aspects houses"}: {rule.houses}
            </p>
            <p className="text-sm leading-relaxed text-shell-muted">
              {t(rule.description, lang)}
            </p>
          </article>
        ))}
      </div>

      <article className="rounded-2xl border border-shell-border bg-shell-elevated/40 p-6 md:p-8">
        {conjunctionBlock.title && (
          <h3 className="font-serif text-xl text-shell-warm mb-4">
            {t(conjunctionBlock.title, lang)}
          </h3>
        )}
        {conjunctionBlock.paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-shell-muted mb-3">
            {t(p, lang)}
          </p>
        ))}
        {conjunctionBlock.bullets && (
          <ul className="space-y-2">
            {conjunctionBlock.bullets.map((b, i) => (
              <li key={i} className="text-sm text-shell-warm/90 before:content-['·'] before:mr-2 before:text-shell-accent">
                {t(b, lang)}
              </li>
            ))}
          </ul>
        )}
      </article>
    </div>
  );
}

const horoscopePeriodTypes: HoroscopePeriodType[] = ["weekly", "monthly", "yearly"];

function HoroscopeSection({ lang }: { lang: EducationLang }) {
  const { now, periods } = useHoroscopePeriods();
  const [periodType, setPeriodType] = useState<HoroscopePeriodType>("weekly");
  const [selectedSign, setSelectedSign] = useState<HoroscopeSignId>("aries");

  const activePeriod = getPeriodForType(periods, periodType);
  const selectedMeta = horoscopeSigns.find((sign) => sign.id === selectedSign) ?? horoscopeSigns[0];

  const readingsBySign = useMemo(() => {
    return Object.fromEntries(
      horoscopeSigns.map((sign) => [
        sign.id,
        generateHoroscopeReading(sign, activePeriod),
      ])
    ) as Record<HoroscopeSignId, ReturnType<typeof generateHoroscopeReading>>;
  }, [activePeriod.key, activePeriod.type]);

  const reading = readingsBySign[selectedSign];

  const updatedLabel = now.toLocaleString(lang === "ja" ? "ja-JP" : "en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent mb-3">
          {lang === "ja" ? "自動更新" : "Live Forecasts"}
        </p>
        <h2 className="font-serif text-3xl text-shell-warm tracking-tight">
          {lang === "ja" ? "ホロスコープ" : "Horoscope"}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-shell-muted">
          {horoscopeIntro[lang]}
        </p>
        <p className="mt-3 text-xs text-shell-muted/80">
          {lang === "ja" ? "最終更新" : "Updated"}: {updatedLabel}
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
              <span className="block text-[11px] mt-0.5 opacity-80">{period.label[lang]}</span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
        {horoscopeSigns.map((sign) => {
          const active = selectedSign === sign.id;
          return (
            <button
              key={sign.id}
              type="button"
              onClick={() => setSelectedSign(sign.id)}
              className={`rounded-xl border px-2 py-2 text-center transition-all ${
                active
                  ? "border-shell-accent/50 bg-shell-accent-soft text-shell-warm"
                  : "border-shell-border/60 bg-shell-elevated/30 text-shell-muted hover:text-shell-warm"
              }`}
            >
              <span className="block text-[11px] font-medium leading-tight">{t(sign.name, lang)}</span>
            </button>
          );
        })}
      </div>

      <article className="rounded-2xl border border-shell-border bg-shell-elevated/40 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-52 lg:w-60 shrink-0 md:border-r border-shell-border/60 p-4 md:p-5 flex flex-col items-center text-center gap-3">
            <div className="w-full max-w-[200px]">
              <InfographicImage
                src={selectedMeta.image}
                alt={t(selectedMeta.name, lang)}
                variant="transparent"
                className="rounded-xl"
                sizes="200px"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-shell-warm">{t(selectedMeta.name, lang)}</h3>
              <p className="text-sm text-shell-accent">{t(selectedMeta.sanskrit, lang)}</p>
              <p className="text-xs text-shell-muted mt-1">
                {t(selectedMeta.element, lang)} · {t(selectedMeta.ruler, lang)}
              </p>
            </div>
            <div className="rounded-full border border-shell-accent/30 bg-shell-accent-soft px-3 py-1 text-[11px] text-shell-warm">
              {t(horoscopeSectionLabels.mood, lang)}: {t(reading.mood, lang)}
            </div>
          </div>

          <div className="flex-1 min-w-0 p-6 md:p-8 space-y-5">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-shell-accent mb-2">
                {periodTypeLabel(periodType, lang)} · {activePeriod.label[lang]}
              </p>
              <p className="text-sm leading-relaxed text-shell-muted">{t(reading.overview, lang)}</p>
            </div>

            {(Object.keys(horoscopeSectionLabels) as Array<keyof typeof horoscopeSectionLabels>)
              .filter((key) => key !== "mood")
              .map((key) => (
                <div
                  key={key}
                  className="rounded-xl border border-shell-border/60 bg-shell-sidebar/50 px-4 py-3"
                >
                  <p className="text-[10px] uppercase tracking-widest text-shell-accent mb-1">
                    {t(horoscopeSectionLabels[key], lang)}
                  </p>
                  <p className="text-sm text-shell-warm/90 leading-relaxed">
                    {t(reading[key], lang)}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </article>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {horoscopeSigns
          .filter((sign) => sign.id !== selectedSign)
          .map((sign) => {
            const preview = readingsBySign[sign.id];
            return (
              <button
                key={sign.id}
                type="button"
                onClick={() => setSelectedSign(sign.id)}
                className="rounded-2xl border border-shell-border bg-shell-elevated/30 p-4 text-left hover:border-shell-accent/30 transition-colors"
              >
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h4 className="font-serif text-lg text-shell-warm">{t(sign.name, lang)}</h4>
                  <span className="text-[10px] text-shell-muted">{t(preview.mood, lang)}</span>
                </div>
                <p className="text-xs leading-relaxed text-shell-muted line-clamp-3">
                  {t(preview.overview, lang)}
                </p>
              </button>
            );
          })}
      </div>
    </div>
  );
}

function EducationContent({
  section,
  lang,
}: {
  section: EducationSectionId;
  lang: EducationLang;
}) {
  return (
    <SectionFade sectionKey={`${section}-${lang}`}>
      {section === "introduction" && <IntroductionSection lang={lang} />}
      {section === "rashis" && <RashisSection lang={lang} />}
      {section === "planets" && <PlanetsSection lang={lang} />}
      {section === "nakshatras" && <NakshatrasSection lang={lang} />}
      {section === "aspects" && <AspectsSection lang={lang} />}
      {section === "horoscope" && <HoroscopeSection lang={lang} />}
    </SectionFade>
  );
}

function EducationHubInner({ embedded }: { embedded?: boolean }) {
  const [section, setSection] = useState<EducationSectionId>("introduction");
  const [lang, setLang] = useState<EducationLang>("en");

  const content = (
    <div className={`${embedded ? "" : "min-h-screen"} bg-shell-bg text-shell-warm`}>
      {!embedded && <PublicHeader lang={lang} />}

      <div className={`mx-auto max-w-7xl ${embedded ? "" : "px-4 py-6 md:px-8 md:py-10"}`}>
        {/* Hero strip */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-shell-muted">
              {lang === "ja" ? "学習ハブ" : "Learning Hub"}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl text-shell-warm tracking-tight mt-1">
              {lang === "ja" ? "ヴェーダ占星術を学ぶ" : "Learn Vedic Astrology"}
            </h1>
          </div>
          <button
            type="button"
            onClick={() => setLang(lang === "en" ? "ja" : "en")}
            className="inline-flex items-center gap-2 self-start rounded-xl border border-shell-border bg-shell-elevated/60 px-4 py-2 text-xs font-medium text-shell-warm hover:border-shell-accent/40 transition-colors"
          >
            <Languages size={14} className="text-shell-accent" />
            {lang === "en" ? "日本語" : "English"}
          </button>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Side navigation */}
          <nav className="lg:w-56 shrink-0">
            <div className="flex lg:flex-col gap-1 overflow-x-auto pb-2 lg:pb-0 lg:sticky lg:top-4">
              {educationSections.map((item) => {
                const Icon = sectionIcons[item.id];
                const active = section === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSection(item.id)}
                    className={`flex items-center gap-2.5 rounded-xl px-4 py-3 text-left text-sm whitespace-nowrap transition-all ${
                      active
                        ? "bg-shell-accent-soft text-shell-warm shadow-[inset_3px_0_0_0_var(--shell-accent)]"
                        : "text-shell-muted hover:bg-white/[0.04] hover:text-shell-warm"
                    }`}
                  >
                    <Icon size={16} className={active ? "text-shell-accent" : ""} />
                    {item.label[lang]}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Main content */}
          <main className="min-w-0 flex-1">
            <EducationContent section={section} lang={lang} />
          </main>
        </div>
      </div>
    </div>
  );

  return content;
}

export default function EducationalHub() {
  return (
    <>
      <SignedIn>
        <AppShell>
          <EducationHubInner embedded />
        </AppShell>
      </SignedIn>
      <SignedOut>
        <EducationHubInner />
      </SignedOut>
    </>
  );
}
