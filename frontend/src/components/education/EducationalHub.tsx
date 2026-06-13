"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Orbit,
  Star,
  Eye,
  Languages,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import AppShell from "@/components/layout/AppShell";
import {
  educationSections,
  introHero,
  introSubtitle,
  introBlocks,
  signBodyMappings,
  planetsIntro,
  planets,
  nakshatrasIntro,
  nakshatras,
  aspectsIntro,
  universalAspect,
  specialAspects,
  conjunctionBlock,
  aspectSummaryImage,
  type EducationLang,
  type EducationSectionId,
  type BilingualText,
} from "@/lib/education";

const sectionIcons: Record<EducationSectionId, typeof BookOpen> = {
  introduction: BookOpen,
  planets: Orbit,
  nakshatras: Star,
  aspects: Eye,
};

function t(text: BilingualText, lang: EducationLang) {
  return text[lang];
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

      <article className="rounded-2xl border border-shell-border bg-shell-elevated/40 p-6 md:p-8">
        <h3 className="font-serif text-xl text-shell-warm mb-4">
          {lang === "ja" ? "星座と人体の対応" : "Zodiac & Body Correspondences"}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-shell-border text-left">
                <th className="py-2 pr-4 text-shell-accent font-medium">
                  {lang === "ja" ? "星座" : "Sign"}
                </th>
                <th className="py-2 text-shell-accent font-medium">
                  {lang === "ja" ? "身体部位" : "Body Part"}
                </th>
              </tr>
            </thead>
            <tbody>
              {signBodyMappings.map((row, i) => (
                <tr key={i} className="border-b border-shell-border/50">
                  <td className="py-2.5 pr-4 text-shell-warm">{t(row.sign, lang)}</td>
                  <td className="py-2.5 text-shell-muted">{t(row.bodyPart, lang)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </article>

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

      <div className="space-y-6">
        {planets.map((planet) => (
          <article
            key={planet.id}
            className="rounded-2xl border border-shell-border bg-shell-elevated/40 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="relative h-48 md:h-auto md:w-48 shrink-0 bg-shell-sidebar flex items-center justify-center p-6">
                <Image
                  src={planet.image}
                  alt={t(planet.name, lang)}
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <div className="flex-1 p-6 md:p-8">
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

      <div className="grid gap-5 md:grid-cols-2">
        {nakshatras.map((nak) => (
          <article
            key={nak.id}
            className="rounded-2xl border border-shell-border bg-shell-elevated/40 p-5 flex gap-4"
          >
            <div className="relative h-16 w-16 shrink-0 rounded-xl bg-shell-sidebar flex items-center justify-center overflow-hidden">
              {nak.image ? (
                <Image
                  src={nak.image}
                  alt={t(nak.name, lang)}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              ) : (
                <Star size={22} className="text-shell-accent/70" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[10px] text-shell-muted">#{nak.number}</span>
                <h3 className="font-serif text-lg text-shell-warm truncate">
                  {t(nak.name, lang)}
                </h3>
              </div>
              <p className="text-xs text-shell-accent mb-2">{t(nak.sanskrit, lang)}</p>
              <p className="text-xs leading-relaxed text-shell-muted mb-3">
                {t(nak.description, lang)}
              </p>
              <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-[11px] text-shell-muted/90">
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

      <div className="relative h-56 md:h-72 rounded-2xl border border-shell-border bg-shell-sidebar overflow-hidden">
        <Image
          src={aspectSummaryImage}
          alt={lang === "ja" ? "ドリシュティ図" : "Drishti diagram"}
          fill
          className="object-contain p-6"
        />
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
            className="rounded-2xl border border-shell-border bg-shell-elevated/40 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              {rule.image && (
                <div className="relative h-40 md:h-auto md:w-56 shrink-0 bg-shell-sidebar">
                  <Image
                    src={rule.image}
                    alt={t(rule.planet, lang)}
                    fill
                    className="object-contain p-4"
                  />
                </div>
              )}
              <div className="p-6 md:p-8">
                <h3 className="font-serif text-xl text-shell-warm mb-1">
                  {t(rule.planet, lang)}
                </h3>
                <p className="text-xs text-shell-accent mb-3">
                  {lang === "ja" ? "アスペクト先" : "Aspects houses"}: {rule.houses}
                </p>
                <p className="text-sm leading-relaxed text-shell-muted">
                  {t(rule.description, lang)}
                </p>
              </div>
            </div>
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
      {section === "planets" && <PlanetsSection lang={lang} />}
      {section === "nakshatras" && <NakshatrasSection lang={lang} />}
      {section === "aspects" && <AspectsSection lang={lang} />}
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
