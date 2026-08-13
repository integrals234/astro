"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUpPresence } from "@/lib/motion/tokens";
import {
  BookOpen,
  Orbit,
  Star,
  Eye,
  Circle,
  Home,
  Clock,
  OrbitIcon,
  HeartHandshake,
  ChevronDown,
} from "lucide-react";
import BackToNavButton from "@/components/education/BackToNavButton";
import WisdomArticleView from "@/components/education/WisdomArticleView";
import { rashiSectionLabels } from "@/lib/education/entity-labels";
import PublicHeader from "@/components/layout/PublicHeader";
import { FormattedText } from "@/lib/format-inline-text";
import {
  educationSections,
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
  getArticlesForSection,
  type EducationLang,
  type EducationSectionId,
  type EducationNavigateTarget,
  type BilingualText,
  uiText,
  useEducationLang,
} from "@/lib/education";

const sectionIcons: Record<EducationSectionId, typeof BookOpen> = {
  introduction: BookOpen,
  rashis: Circle,
  planets: Orbit,
  nakshatras: Star,
  houses: Home,
  aspects: Eye,
  mahadashas: Clock,
  transits: OrbitIcon,
  remedies: HeartHandshake,
};

function defaultArticleForSection(section: EducationSectionId): string | null {
  const articles = getArticlesForSection(section);
  return articles[0]?.id ?? null;
}

function educationTopicAnchor(section: EducationSectionId, id: string) {
  return `education-${section}-${id}`;
}

function resolveScrollContainer(anchor: HTMLElement): HTMLElement | Window {
  const marked = anchor.closest("[data-education-scroll-root]");
  if (marked instanceof HTMLElement) {
    return marked;
  }
  return window;
}

function getPinThreshold(
  anchor: HTMLElement,
  scrollContainer: HTMLElement | Window
): number {
  if (scrollContainer === window) {
    return window.scrollY + anchor.getBoundingClientRect().top;
  }

  const container = scrollContainer as HTMLElement;
  const containerRect = container.getBoundingClientRect();
  const anchorRect = anchor.getBoundingClientRect();
  return container.scrollTop + (anchorRect.top - containerRect.top);
}

function isPinnedAtThreshold(
  threshold: number,
  scrollContainer: HTMLElement | Window
): boolean {
  const scrollTop =
    scrollContainer === window
      ? window.scrollY
      : (scrollContainer as HTMLElement).scrollTop;

  return scrollTop > threshold + 2;
}

function getScrollTop(scrollContainer: HTMLElement | Window): number {
  return scrollContainer === window
    ? window.scrollY
    : (scrollContainer as HTMLElement).scrollTop;
}

function TopicIndex(props: {
  navRef: React.RefObject<HTMLElement | null>;
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  tabs: { id: string; label: BilingualText }[];
  activeId: string | null;
  onJump: (id: string) => void;
  lang: EducationLang;
}) {
  if (props.tabs.length <= 1) return null;
  return <TopicIndexInner {...props} />;
}

function TopicIndexInner({
  navRef,
  expanded,
  setExpanded,
  tabs,
  activeId,
  onJump,
  lang,
}: {
  navRef: React.RefObject<HTMLElement | null>;
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
  tabs: { id: string; label: BilingualText }[];
  activeId: string | null;
  onJump: (id: string) => void;
  lang: EducationLang;
}) {
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const pinnedRef = useRef<boolean | null>(null);
  const [pinned, setPinned] = useState(false);

  useLayoutEffect(() => {
    const anchor = anchorRef.current;
    if (!anchor) return;

    pinnedRef.current = null;

    const media = window.matchMedia("(min-width: 1024px)");
    if (!media.matches) {
      return;
    }

    const scrollContainer = resolveScrollContainer(anchor);
    let pinThreshold = getPinThreshold(anchor, scrollContainer);
    let rafId = 0;

    const applyPinned = (nowPinned: boolean) => {
      if (pinnedRef.current === nowPinned) return;
      pinnedRef.current = nowPinned;
      setPinned(nowPinned);
      setExpanded(!nowPinned);
    };

    const updatePinned = () => {
      const nowPinned = isPinnedAtThreshold(pinThreshold, scrollContainer);

      if (pinnedRef.current === null) {
        pinnedRef.current = nowPinned;
        setPinned(nowPinned);
        if (getScrollTop(scrollContainer) > 2 && nowPinned) {
          setExpanded(false);
        }
        return;
      }

      applyPinned(nowPinned);
    };

    const remeasure = () => {
      pinThreshold = getPinThreshold(anchor, scrollContainer);
      updatePinned();
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updatePinned);
    };

    scrollContainer.addEventListener("scroll", onScroll, { passive: true });
    if (scrollContainer !== window) {
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    window.addEventListener("resize", remeasure, { passive: true });
    rafId = requestAnimationFrame(remeasure);

    return () => {
      cancelAnimationFrame(rafId);
      scrollContainer.removeEventListener("scroll", onScroll);
      if (scrollContainer !== window) {
        window.removeEventListener("scroll", onScroll);
      }
      window.removeEventListener("resize", remeasure);
    };
  }, [setExpanded, tabs.length]);

  const handleToggle = () => {
    setExpanded((open) => !open);
  };

  const handleJump = (id: string) => {
    onJump(id);
    setExpanded(false);
  };

  const topicLabel =
    uiText("allTopicsJump", lang);

  return (
    <>
      <div
        ref={anchorRef}
        className="hidden lg:block h-px w-full shrink-0 pointer-events-none"
        aria-hidden
      />
      <nav
        ref={navRef}
        aria-label={uiText("topicsInSection", lang)}
        className={`-mx-1 mb-8 rounded-lg border border-border bg-washi-elevated px-3 py-3 lg:sticky lg:top-0 lg:z-20 lg:backdrop-blur-md ${pinned
            ? "lg:border-terracotta/40 lg:py-2.5"
            : ""
          }`}
      >
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 text-left"
          onClick={handleToggle}
          aria-expanded={expanded}
          aria-controls="topic-index-list"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-terracotta">
            {topicLabel}
            <span className="ml-1.5 normal-case tracking-normal text-text-muted">
              ({tabs.length})
            </span>
          </span>
          <ChevronDown
            size={16}
            className={`shrink-0 text-text-muted transition-transform duration-200 ${expanded ? "rotate-180" : ""
              }`}
            aria-hidden
          />
        </button>

        {expanded ? (
          <div
            id="topic-index-list"
            className="mt-3 flex max-h-[min(45vh,20rem)] flex-wrap gap-1.5 overflow-y-auto overscroll-contain pr-1 lg:mt-2.5 lg:max-h-[min(50vh,28rem)]"
          >
            {tabs.map((tab, index) => {
              const active = activeId === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleJump(tab.id)}
                  aria-current={active ? "location" : undefined}
                  className={`rounded-md bg-washi-elevated px-3 py-1.5 text-left text-xs font-medium leading-snug transition-colors ${active
                      ? "text-ink border border-border border-l-[3px] border-l-terracotta"
                      : "text-text-muted border border-border hover:text-ink hover:border-terracotta"
                    }`}
                >
                  <span className="mr-1.5 text-[10px] tabular-nums text-terracotta">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {t(tab.label, lang)}
                </button>
              );
            })}
          </div>
        ) : null}
      </nav>
    </>
  );
}

function ArticleSectionPanel({
  section,
  articleId,
  lang,
  onNavigate,
  visualTab,
  singleArticleMode = false,
  topicOrder = "visual-first",
  tabOrder,
}: {
  section: EducationSectionId;
  articleId: string | null;
  lang: EducationLang;
  onNavigate: (target: EducationNavigateTarget) => void;
  visualTab?: { id: string; label: BilingualText; content: React.ReactNode };
  /** When true, only the selected topic is shown (one page at a time). */
  singleArticleMode?: boolean;
  /** Controls whether the visual guide tab precedes or follows wisdom articles. */
  topicOrder?: "visual-first" | "articles-first";
  /** When set, overrides topicOrder and arranges tabs by this id list. */
  tabOrder?: string[];
}) {
  const navRef = useRef<HTMLElement>(null);
  const [topicExpanded, setTopicExpanded] = useState(true);
  const skipInitialScrollRef = useRef(true);

  const articles = getArticlesForSection(section);
  const tabs: { id: string; label: BilingualText; content: React.ReactNode }[] = [];

  const articleTabs = articles.map((article) => ({
    id: article.id,
    label: article.title,
    content: (
      <WisdomArticleView
        article={article}
        lang={lang}
        onNavigate={onNavigate}
      />
    ),
  }));

  if (tabOrder?.length) {
    const ordered = new Map<string, { id: string; label: BilingualText; content: React.ReactNode }>();
    if (visualTab) ordered.set(visualTab.id, visualTab);
    for (const tab of articleTabs) ordered.set(tab.id, tab);

    for (const id of tabOrder) {
      const tab = ordered.get(id);
      if (tab) tabs.push(tab);
    }
  } else if (topicOrder === "articles-first") {
    tabs.push(...articleTabs);
    if (visualTab) tabs.push(visualTab);
  } else {
    if (visualTab) tabs.push(visualTab);
    tabs.push(...articleTabs);
  }

  const activeId = articleId ?? tabs[0]?.id ?? null;
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0] ?? null;

  const jumpToTopic = (id: string) => {
    onNavigate({ section, articleId: id });
    requestAnimationFrame(() => {
      if (singleArticleMode) {
        navRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        document
          .getElementById(educationTopicAnchor(section, id))
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  useEffect(() => {
    skipInitialScrollRef.current = true;
  }, [section]);

  useEffect(() => {
    if (!articleId || tabs.length <= 1) return;
    if (skipInitialScrollRef.current) {
      skipInitialScrollRef.current = false;
      return;
    }
    if (singleArticleMode) {
      navRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    document
      .getElementById(educationTopicAnchor(section, articleId))
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [articleId, section, tabs.length, singleArticleMode]);

  if (tabs.length === 0) {
    return (
      <p className="text-sm text-text-muted">
        {uiText("noContent", lang)}
      </p>
    );
  }

  return (
    <div>
      <TopicIndex
        navRef={navRef}
        expanded={topicExpanded}
        setExpanded={setTopicExpanded}
        tabs={tabs.map((tab) => ({ id: tab.id, label: tab.label }))}
        activeId={activeId}
        onJump={jumpToTopic}
        lang={lang}
      />
      {tabs.length > 1 ? (
        <BackToNavButton
          targetRef={navRef}
          lang={lang}
          watchKey={singleArticleMode ? `${section}-${activeId}` : section}
          className="lg:hidden"
          onBeforeScroll={() => setTopicExpanded(true)}
        />
      ) : null}
      {singleArticleMode ? (
        activeTab ? (
          <AnimatePresence mode="wait">
            <motion.section
              key={activeTab.id}
              id={educationTopicAnchor(section, activeTab.id)}
              {...fadeUpPresence}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="scroll-mt-4 lg:scroll-mt-28"
            >
              {activeTab.content}
            </motion.section>
          </AnimatePresence>
        ) : null
      ) : (
        <div className="space-y-16">
          {tabs.map((tab, index) => (
            <section
              key={tab.id}
              id={educationTopicAnchor(section, tab.id)}
              className="scroll-mt-4 lg:scroll-mt-28"
            >
              {index > 0 ? (
                <div
                  className="mb-12 border-t border-dashed border-border/60 pt-12"
                  aria-hidden
                />
              ) : null}
              {tab.content}
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

function t(text: BilingualText, lang: EducationLang) {
  return text[lang];
}

function formatted(text: BilingualText, lang: EducationLang) {
  return <FormattedText text={t(text, lang)} />;
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
          style={{ width: "100%", height: "auto" }}
          className="block w-full h-auto"
          sizes={sizes}
        />
      </div>
    );
  }

  return (
    <div className={`overflow-hidden bg-washi-elevated ${className}`}>
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
        {...fadeUpPresence}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}



function RashisSection({ lang }: { lang: EducationLang }) {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.28em] text-terracotta mb-3">
          {uiText("twelveRashis", lang)}
        </p>
        <h2 className="font-header text-3xl text-ink tracking-tight">
          {uiText("rashisTitle", lang)}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-text-muted">
          {rashisIntro[lang]}
        </p>
      </div>

      {rashisOverviewBlocks.map((block, i) => (
        <article
          key={i}
          className="washi-card p-6 md:p-8"
        >
          {block.title && (
            <h3 className="font-header text-xl text-ink mb-4">
              {formatted(block.title, lang)}
            </h3>
          )}
          <div className="space-y-4">
            {block.paragraphs.map((p, j) => (
              <p key={j} className="text-sm leading-relaxed text-text-muted">
                {formatted(p, lang)}
              </p>
            ))}
          </div>
          {block.image ? (
            <InfographicImage
              src={block.image.src}
              alt={t(block.image.alt, lang)}
              className="mt-5 rounded-[var(--radius-card)]"
              sizes="(max-width: 768px) 100vw, 672px"
            />
          ) : null}
        </article>
      ))}

      <div className="space-y-8">
        {rashis.map((sign) => (
          <article
            key={sign.id}
            className="washi-card overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-64 lg:w-72 xl:w-80 shrink-0 md:border-r border-border/60">
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
                  <span className="text-[10px] text-text-muted">#{sign.number}</span>
                  <h3 className="font-header text-2xl text-ink">
                    {t(sign.name, lang)}
                  </h3>
                  <span className="text-sm text-terracotta">{t(sign.sanskrit, lang)}</span>
                </div>
                <p className="text-xs text-text-muted mb-4">{t(sign.dates, lang)}</p>
                <p className="text-sm leading-relaxed text-text-muted mb-5">
                  {formatted(sign.description, lang)}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-5 text-xs">
                  <div>
                    <span className="text-terracotta">{uiText("element", lang)}: </span>
                    <span className="text-ink/90">{t(sign.element, lang)}</span>
                  </div>
                  <div>
                    <span className="text-terracotta">{uiText("ruler", lang)}: </span>
                    <span className="text-ink/90">{t(sign.ruler, lang)}</span>
                  </div>
                  <div>
                    <span className="text-terracotta">{uiText("symbol", lang)}: </span>
                    <span className="text-ink/90">{t(sign.symbol, lang)}</span>
                  </div>
                  <div>
                    <span className="text-terracotta">{uiText("body", lang)}: </span>
                    <span className="text-ink/90">{t(sign.bodyPart, lang)}</span>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2 mb-5">
                  {sign.traits.map((trait, i) => (
                    <li
                      key={i}
                      className="rounded-full border border-border/60 bg-washi/40 px-3 py-1 text-[11px] text-ink/90"
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
                        className="rounded-[var(--radius-card)] border border-border/60 bg-washi/50 px-4 py-3"
                      >
                        <p className="text-[10px] uppercase tracking-widest text-terracotta mb-1">
                          {t(rashiSectionLabels[key], lang)}
                        </p>
                        <p className="text-sm text-ink/90 leading-relaxed">
                          {formatted(sign.sections[key], lang)}
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

function PlanetsVisualGuide({ lang }: { lang: EducationLang }) {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.28em] text-terracotta mb-3">
          {uiText("navagraha", lang)}
        </p>
        <h2 className="font-header text-3xl text-ink tracking-tight">
          {uiText("nineGrahas", lang)}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-text-muted">
          {planetsIntro[lang]}
        </p>
      </div>

      <div className="space-y-8">
        {planets.map((planet) => (
          <article
            key={planet.id}
            className="washi-card overflow-hidden"
          >
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-64 lg:w-72 xl:w-80 shrink-0 md:border-r border-border/60">
                <InfographicImage
                  src={planet.image}
                  alt={t(planet.name, lang)}
                  className="rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
              <div className="flex-1 min-w-0 p-6 md:p-8">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-4">
                  <h3 className="font-header text-2xl text-ink">
                    {t(planet.name, lang)}
                  </h3>
                  <span className="text-sm text-terracotta">{t(planet.sanskrit, lang)}</span>
                </div>
                <p className="text-sm leading-relaxed text-text-muted mb-5">
                  {formatted(planet.description, lang)}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-5">
                  {planet.attributes.map((attr, i) => (
                    <div key={i} className="text-xs">
                      <span className="text-terracotta">{t(attr.label, lang)}: </span>
                      <span className="text-ink/90">{t(attr.value, lang)}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-[var(--radius-card)] border border-border/60 bg-washi/50 px-4 py-3">
                  <p className="text-[10px] uppercase tracking-widest text-text-muted mb-1">
                    {uiText("significations", lang)}
                  </p>
                  <p className="text-sm text-ink/90 leading-relaxed">
                    {formatted(planet.significations, lang)}
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

function PlanetsSection({
  lang,
  articleId,
  onNavigate,
}: {
  lang: EducationLang;
  articleId: string | null;
  onNavigate: (target: EducationNavigateTarget) => void;
}) {
  return (
    <ArticleSectionPanel
      section="planets"
      articleId={articleId}
      lang={lang}
      onNavigate={onNavigate}
      tabOrder={[
        "navagraha-guide",
        "planetary-karakas",
        "planetary-strengths",
        "natural-benefics-malefics",
        "functional-benefics-malefics",
      ]}
      visualTab={{
        id: "navagraha-guide",
        label: {
          en: "Nine Grahas (Visual Guide)", hi: "नौ ग्रह (विजुअल गाइड)", ja: "九惑星（ビジュアルガイド）", ko: "나인 그라하스(비주얼 가이드)",
        },
        content: <PlanetsVisualGuide lang={lang} />,
      }}
    />
  );
}

function NakshatrasVisualGuide({ lang }: { lang: EducationLang }) {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.28em] text-terracotta mb-3">
          {uiText("lunarMansions", lang)}
        </p>
        <h2 className="font-header text-3xl text-ink tracking-tight">
          {uiText("nakshatras", lang)}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-text-muted">
          {nakshatrasIntro[lang]}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {nakshatras.map((nak) => (
          <article
            key={nak.id}
            className="washi-card overflow-hidden flex flex-col"
          >
            {nak.image ? (
              <InfographicImage
                src={nak.image}
                alt={t(nak.name, lang)}
                className="rounded-t-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="flex h-28 items-center justify-center rounded-t-2xl bg-washi-elevated">
                <Star size={28} className="text-terracotta/50" />
              </div>
            )}
            <div className="p-5 flex-1">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[10px] text-text-muted">#{nak.number}</span>
                <h3 className="font-header text-lg text-ink">
                  {t(nak.name, lang)}
                </h3>
              </div>
              <p className="text-xs text-terracotta mb-2">{t(nak.sanskrit, lang)}</p>
              <p className="text-xs leading-relaxed text-text-muted mb-3">
                {formatted(nak.description, lang)}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 text-[11px] text-text-muted/90">
                <span>
                  <span className="text-terracotta">{uiText("deity", lang)}: </span>
                  {t(nak.deity, lang)}
                </span>
                <span>
                  <span className="text-terracotta">{uiText("ruler", lang)}: </span>
                  {t(nak.ruler, lang)}
                </span>
                <span>
                  <span className="text-terracotta">{uiText("symbol", lang)}: </span>
                  {t(nak.symbol, lang)}
                </span>
                <span>
                  <span className="text-terracotta">{uiText("range", lang)}: </span>
                  {t(nak.range, lang)}
                </span>
              </div>
              <ul className="mt-2 space-y-0.5">
                {nak.qualities.map((q, i) => (
                  <li key={i} className="text-[11px] text-ink/80 before:content-['·'] before:mr-1.5 before:text-terracotta">
                    {formatted(q, lang)}
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

function NakshatrasSection({
  lang,
  articleId,
  onNavigate,
}: {
  lang: EducationLang;
  articleId: string | null;
  onNavigate: (target: EducationNavigateTarget) => void;
}) {
  return (
    <ArticleSectionPanel
      section="nakshatras"
      articleId={articleId}
      lang={lang}
      onNavigate={onNavigate}
      tabOrder={[
        "nakshatras-stellar-1",
        "nakshatra-guide",
        "nakshatras-human-physiology",
      ]}
      visualTab={{
        id: "nakshatra-guide",
        label: {
          en: "27 Lunar Mansions (Visual Guide)", hi: "27 चंद्र भवन (विजुअल गाइड)", ja: "27ナクシャトラ（ビジュアルガイド）", ko: "27 루나 맨션(비주얼 가이드)",
        },
        content: <NakshatrasVisualGuide lang={lang} />,
      }}
    />
  );
}

function AspectsVisualGuide({ lang }: { lang: EducationLang }) {
  return (
    <div className="space-y-8">
      <div className="max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.28em] text-terracotta mb-3">
          {uiText("drishti", lang)}
        </p>
        <h2 className="font-header text-3xl text-ink tracking-tight">
          {uiText("aspectsTitle", lang)}
        </h2>
      </div>

      <article className="washi-card p-6 md:p-8">
        {aspectsIntro.title && (
          <h3 className="font-header text-xl text-ink mb-4">
            {formatted(aspectsIntro.title, lang)}
          </h3>
        )}
        {aspectsIntro.paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-text-muted mb-3 last:mb-0">
            {formatted(p, lang)}
          </p>
        ))}
      </article>

      <article className="washi-card p-6 md:p-8">
        {universalAspect.title && (
          <h3 className="font-header text-xl text-ink mb-4">
            {formatted(universalAspect.title!, lang)}
          </h3>
        )}
        {universalAspect.paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-text-muted mb-3">
            {formatted(p, lang)}
          </p>
        ))}
        {universalAspect.bullets && (
          <ul className="space-y-2">
            {universalAspect.bullets.map((b, i) => (
              <li key={i} className="text-sm text-ink/90 before:content-['·'] before:mr-2 before:text-terracotta">
                {formatted(b, lang)}
              </li>
            ))}
          </ul>
        )}
        {universalAspect.image ? (
          <InfographicImage
            src={universalAspect.image.src}
            alt={t(universalAspect.image.alt, lang)}
            className="mt-5 rounded-[var(--radius-card)]"
            sizes="(max-width: 768px) 100vw, 672px"
          />
        ) : null}
      </article>

      <div className="space-y-5">
        {specialAspects.map((rule, i) => (
          <article
            key={i}
            className="washi-card p-6 md:p-8"
          >
            <h3 className="font-header text-xl text-ink mb-1">
              {t(rule.planet, lang)}
            </h3>
            <p className="text-xs text-terracotta mb-3">
              {uiText("aspectsHouses", lang)}: {rule.houses}
            </p>
            {rule.image ? (
              <InfographicImage
                src={rule.image}
                alt={t(rule.planet, lang)}
                className="mb-4 rounded-[var(--radius-card)]"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            ) : null}
            <p className="text-sm leading-relaxed text-text-muted">
              {formatted(rule.description, lang)}
            </p>
          </article>
        ))}
      </div>

      <article className="washi-card p-6 md:p-8">
        {conjunctionBlock.title && (
          <h3 className="font-header text-xl text-ink mb-4">
            {formatted(conjunctionBlock.title!, lang)}
          </h3>
        )}
        {conjunctionBlock.paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-text-muted mb-3">
            {formatted(p, lang)}
          </p>
        ))}
        {conjunctionBlock.bullets && (
          <ul className="space-y-2">
            {conjunctionBlock.bullets.map((b, i) => (
              <li key={i} className="text-sm text-ink/90 before:content-['·'] before:mr-2 before:text-terracotta">
                {formatted(b, lang)}
              </li>
            ))}
          </ul>
        )}
      </article>
    </div>
  );
}

function AspectsSection({
  lang,
  articleId,
  onNavigate,
}: {
  lang: EducationLang;
  articleId: string | null;
  onNavigate: (target: EducationNavigateTarget) => void;
}) {
  return (
    <ArticleSectionPanel
      section="aspects"
      articleId={articleId}
      lang={lang}
      onNavigate={onNavigate}
      visualTab={{
        id: "aspects-guide",
        label: {
          en: "Drishti Guide (Visual)", hi: "दृष्टि गाइड (दृश्य)", ja: "ドリシュティガイド", ko: "드리시티 가이드(시각적)",
        },
        content: <AspectsVisualGuide lang={lang} />,
      }}
    />
  );
}

function EducationContent({
  section,
  articleId,
  lang,
  onNavigate,
}: {
  section: EducationSectionId;
  articleId: string | null;
  lang: EducationLang;
  onNavigate: (target: EducationNavigateTarget) => void;
}) {
  return (
    <SectionFade sectionKey={`${section}-${lang}`}>
      {section === "introduction" && (
        <ArticleSectionPanel
          section="introduction"
          articleId={articleId}
          lang={lang}
          onNavigate={onNavigate}
          singleArticleMode
        />
      )}
      {section === "rashis" && <RashisSection lang={lang} />}
      {section === "planets" && (
        <PlanetsSection lang={lang} articleId={articleId} onNavigate={onNavigate} />
      )}
      {section === "nakshatras" && (
        <NakshatrasSection lang={lang} articleId={articleId} onNavigate={onNavigate} />
      )}
      {section === "houses" && (
        <ArticleSectionPanel
          section="houses"
          articleId={articleId}
          lang={lang}
          onNavigate={onNavigate}
        />
      )}
      {section === "aspects" && (
        <AspectsSection lang={lang} articleId={articleId} onNavigate={onNavigate} />
      )}
      {section === "mahadashas" && (
        <ArticleSectionPanel
          section="mahadashas"
          articleId={articleId}
          lang={lang}
          onNavigate={onNavigate}
        />
      )}
      {section === "transits" && (
        <ArticleSectionPanel
          section="transits"
          articleId={articleId}
          lang={lang}
          onNavigate={onNavigate}
        />
      )}
      {section === "remedies" && (
        <ArticleSectionPanel
          section="remedies"
          articleId={articleId}
          lang={lang}
          onNavigate={onNavigate}
        />
      )}
    </SectionFade>
  );
}

function EducationHubInner({
  embedded,
  initialSection,
}: {
  embedded?: boolean;
  initialSection?: EducationSectionId;
}) {
  const [section, setSection] = useState<EducationSectionId>(
    initialSection ?? "introduction"
  );
  const [articleId, setArticleId] = useState<string | null>(
    defaultArticleForSection(initialSection ?? "introduction")
  );
  const { lang } = useEducationLang();

  const navigateTo = (target: EducationNavigateTarget) => {
    setSection(target.section);
    setArticleId(
      target.articleId ?? defaultArticleForSection(target.section)
    );
  };

  const selectSection = (next: EducationSectionId) => {
    setSection(next);
    setArticleId(defaultArticleForSection(next));
  };

  const content = (
    <div className={`${embedded ? "" : "min-h-screen"} bg-washi text-ink`}>
      {!embedded && <PublicHeader pageLabel={uiText("learnJyotish", lang)} />}

      <div className={`mx-auto max-w-7xl ${embedded ? "" : "px-4 py-6 md:px-8 md:py-10"}`}>
        {/* Hero strip */}
        <div className="mb-6 sm:mb-8">
          <h1 className="font-header text-2xl tracking-tight text-ink md:text-3xl">
            {uiText("heroTitle", lang)}
          </h1>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Side navigation */}
          <nav className="lg:w-56 shrink-0">
            <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-1 lg:sticky lg:top-4">
              {educationSections.map((item) => {
                const Icon = sectionIcons[item.id];
                const active = section === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => selectSection(item.id)}
                    className={`flex items-center gap-2 rounded-md px-3 py-2.5 text-left text-xs sm:text-sm transition-colors lg:gap-2.5 lg:px-4 lg:py-3 ${active
                        ? "text-ink shadow-[inset_3px_0_0_0_var(--color-terracotta)]"
                        : "text-text-muted hover:text-ink"
                      }`}
                  >
                    <Icon size={16} className={`shrink-0 ${active ? "text-terracotta" : ""}`} />
                    <span className="min-w-0 leading-snug">{item.label[lang]}</span>
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Main content */}
          <main className="min-w-0 flex-1">
            <EducationContent
              section={section}
              articleId={articleId}
              lang={lang}
              onNavigate={navigateTo}
            />
          </main>
        </div>
      </div>
    </div>
  );

  return content;
}

export default function EducationalHub({
  initialSection,
}: {
  initialSection?: EducationSectionId;
}) {
  // Rendered once — see the note in WelcomeHomePage on the prerender bailout.
  return (
    <EducationHubInner
      key={initialSection ?? "introduction"}
      initialSection={initialSection}
    />
  );
}
