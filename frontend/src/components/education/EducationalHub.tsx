"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Orbit,
  Star,
  Eye,
  Languages,
  Sparkles,
  Circle,
  CalendarRange,
  Home,
  Clock,
  OrbitIcon,
  HeartHandshake,
  ChevronDown,
  ArrowUp,
} from "lucide-react";
import AppShell from "@/components/layout/AppShell";
import SiteBrand from "@/components/layout/SiteBrand";
import WisdomArticleView from "@/components/education/WisdomArticleView";
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
  horoscopeIntro,
  horoscopeSigns,
  horoscopeSectionLabels,
  generateHoroscopeReading,
  periodTypeLabel,
  getPeriodForType,
  useHoroscopePeriods,
  getArticlesForSection,
  type EducationLang,
  type EducationSectionId,
  type EducationNavigateTarget,
  type BilingualText,
  type RashiEntry,
  type HoroscopePeriodType,
  type HoroscopeSignId,
  uiText,
  useEducationLang,
  educationUi,
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
  horoscope: CalendarRange,
};

function defaultArticleForSection(section: EducationSectionId): string | null {
  const articles = getArticlesForSection(section);
  return articles[0]?.id ?? null;
}

function educationTopicAnchor(section: EducationSectionId, id: string) {
  return `education-${section}-${id}`;
}

function getScrollRoot(el: Element): Element | null {
  let node = el.parentElement;
  while (node) {
    const { overflowY } = getComputedStyle(node);
    if (/(auto|scroll|overlay)/.test(overflowY)) {
      return node;
    }
    node = node.parentElement;
  }
  return null;
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

function BackToNavButton({
  targetRef,
  lang,
  onBeforeScroll,
  watchKey,
  label,
  className = "",
}: {
  targetRef: React.RefObject<HTMLElement | null>;
  lang: EducationLang;
  onBeforeScroll?: () => void;
  watchKey?: string;
  label?: BilingualText;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);
  const buttonLabel = label
    ? t(label, lang)
    : uiText("backToTopicList", lang);

  useEffect(() => {
    const target = targetRef.current;
    if (!target) return;

    const root = getScrollRoot(target);
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { root, threshold: 0, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [targetRef, watchKey]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          onClick={() => {
            onBeforeScroll?.();
            requestAnimationFrame(() => {
              targetRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
            });
          }}
          aria-label={buttonLabel}
          title={buttonLabel}
          className={`fixed z-30 flex h-10 w-10 items-center justify-center rounded-full border border-shell-border/40 bg-shell-bg/70 text-shell-muted/90 shadow-[0_6px_24px_-10px_rgba(0,0,0,0.55)] backdrop-blur-md transition-[color,background-color,border-color,opacity,transform] duration-200 hover:border-shell-accent/35 hover:bg-shell-accent-soft/70 hover:text-shell-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-shell-accent/40 active:scale-95 bottom-5 right-5 supports-[padding:max(0px)]:bottom-[max(1.25rem,env(safe-area-inset-bottom))] supports-[padding:max(0px)]:right-[max(1.25rem,env(safe-area-inset-right))] md:bottom-8 md:right-8 ${className}`}
        >
          <ArrowUp size={17} strokeWidth={2.25} aria-hidden />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
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
      setPinned(false);
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
    remeasure();

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
        className={`-mx-1 mb-8 rounded-2xl border border-shell-border/70 bg-shell-sidebar/40 px-3 py-3 lg:sticky lg:top-0 lg:z-20 lg:bg-shell-bg/95 lg:backdrop-blur-md ${pinned
            ? "lg:border-shell-accent/25 lg:py-2.5 lg:shadow-[0_10px_30px_-14px_rgba(0,0,0,0.55)]"
            : "lg:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)]"
          }`}
      >
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 text-left"
          onClick={handleToggle}
          aria-expanded={expanded}
          aria-controls="topic-index-list"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-shell-accent">
            {topicLabel}
            <span className="ml-1.5 normal-case tracking-normal text-shell-muted">
              ({tabs.length})
            </span>
          </span>
          <ChevronDown
            size={16}
            className={`shrink-0 text-shell-muted transition-transform duration-200 ${expanded ? "rotate-180" : ""
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
                  className={`rounded-lg px-3 py-1.5 text-left text-xs font-medium leading-snug transition-all ${active
                      ? "bg-shell-accent-soft text-shell-warm border border-shell-accent/40 shadow-[inset_0_-1px_0_0_var(--shell-accent)]"
                      : "text-shell-muted border border-shell-border/50 hover:text-shell-warm hover:bg-white/[0.04]"
                    }`}
                >
                  <span className="mr-1.5 text-[10px] tabular-nums text-shell-accent/75">
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
  visualLabel,
  singleArticleMode = false,
}: {
  section: EducationSectionId;
  articleId: string | null;
  lang: EducationLang;
  onNavigate: (target: EducationNavigateTarget) => void;
  visualTab?: { id: string; label: BilingualText; content: React.ReactNode };
  visualLabel?: BilingualText;
  /** When true, only the selected topic is shown (one page at a time). */
  singleArticleMode?: boolean;
}) {
  const navRef = useRef<HTMLElement>(null);
  const [topicExpanded, setTopicExpanded] = useState(true);
  const skipInitialScrollRef = useRef(true);

  const articles = getArticlesForSection(section);
  const tabs: { id: string; label: BilingualText; content: React.ReactNode }[] = [];

  if (visualTab) {
    tabs.push(visualTab);
  }

  for (const article of articles) {
    tabs.push({
      id: article.id,
      label: article.title,
      content: (
        <WisdomArticleView
          article={article}
          lang={lang}
          onNavigate={onNavigate}
        />
      ),
    });
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
      <p className="text-sm text-shell-muted">
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
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
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
                  className="mb-12 border-t border-dashed border-shell-border/60 pt-12"
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
      {/* Desktop */}
      <div className="shell-header-desktop mx-auto w-full max-w-7xl items-center justify-between gap-6 px-8 py-4">
        <SiteBrand size="lg" className="shrink-0" />
        <nav className="flex shrink-0 items-center gap-4">
          <PublicHeaderActions lang={lang} />
        </nav>
      </div>

      {/* Mobile */}
      <div className="shell-header-mobile mx-auto w-full max-w-7xl items-center gap-2 px-4 py-4">
        <div className="h-10 w-10 shrink-0" aria-hidden />
        <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-0.5 text-center">
          <SiteBrand size="sm" className="shrink-0" />
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-shell-muted">
            {uiText("home", lang)}
          </p>
        </div>
        <nav className="flex shrink-0 items-center gap-2">
          <PublicHeaderActions lang={lang} compact />
        </nav>
      </div>
    </header>
  );
}

function PublicHeaderActions({
  lang,
  compact = false,
}: {
  lang: EducationLang;
  compact?: boolean;
}) {
  return (
    <>
      <Link
        href="/chart"
        className={`inline-flex items-center gap-1.5 rounded-lg border border-shell-border bg-shell-elevated/60 font-medium text-shell-warm transition-all hover:border-shell-accent/40 hover:text-shell-accent ${compact ? "px-2.5 py-2 text-[11px]" : "px-3 py-2 text-xs"
          }`}
      >
        <Sparkles size={14} />
        {compact
          ? uiText("chart", lang)
          : uiText("generateChart", lang)}
      </Link>
      <SignedOut>
        <Link
          href="/sign-in"
          className={`font-medium text-shell-muted transition-colors hover:text-shell-warm ${compact ? "text-[11px]" : "text-xs"
            }`}
        >
          {uiText("signIn", lang)}
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
    </>
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
          {uiText("twelveRashis", lang)}
        </p>
        <h2 className="font-serif text-3xl text-shell-warm tracking-tight">
          {uiText("rashisTitle", lang)}
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
              {formatted(block.title, lang)}
            </h3>
          )}
          <div className="space-y-4">
            {block.paragraphs.map((p, j) => (
              <p key={j} className="text-sm leading-relaxed text-shell-muted">
                {formatted(p, lang)}
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
                  {formatted(sign.description, lang)}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-5 text-xs">
                  <div>
                    <span className="text-shell-accent">{uiText("element", lang)}: </span>
                    <span className="text-shell-warm/90">{t(sign.element, lang)}</span>
                  </div>
                  <div>
                    <span className="text-shell-accent">{uiText("ruler", lang)}: </span>
                    <span className="text-shell-warm/90">{t(sign.ruler, lang)}</span>
                  </div>
                  <div>
                    <span className="text-shell-accent">{uiText("symbol", lang)}: </span>
                    <span className="text-shell-warm/90">{t(sign.symbol, lang)}</span>
                  </div>
                  <div>
                    <span className="text-shell-accent">{uiText("body", lang)}: </span>
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
        <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent mb-3">
          {uiText("navagraha", lang)}
        </p>
        <h2 className="font-serif text-3xl text-shell-warm tracking-tight">
          {uiText("nineGrahas", lang)}
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
                  {formatted(planet.description, lang)}
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
                    {uiText("significations", lang)}
                  </p>
                  <p className="text-sm text-shell-warm/90 leading-relaxed">
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
      visualTab={{
        id: "navagraha-guide",
        label: {
          en: "Nine Grahas (Visual Guide)",
          ja: "九惑星（ビジュアルガイド）",
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
        <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent mb-3">
          {uiText("lunarMansions", lang)}
        </p>
        <h2 className="font-serif text-3xl text-shell-warm tracking-tight">
          {uiText("nakshatras", lang)}
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
                {formatted(nak.description, lang)}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 text-[11px] text-shell-muted/90">
                <span>
                  <span className="text-shell-accent">{uiText("deity", lang)}: </span>
                  {t(nak.deity, lang)}
                </span>
                <span>
                  <span className="text-shell-accent">{uiText("ruler", lang)}: </span>
                  {t(nak.ruler, lang)}
                </span>
                <span>
                  <span className="text-shell-accent">{uiText("symbol", lang)}: </span>
                  {t(nak.symbol, lang)}
                </span>
                <span>
                  <span className="text-shell-accent">{uiText("range", lang)}: </span>
                  {t(nak.range, lang)}
                </span>
              </div>
              <ul className="mt-2 space-y-0.5">
                {nak.qualities.map((q, i) => (
                  <li key={i} className="text-[11px] text-shell-warm/80 before:content-['·'] before:mr-1.5 before:text-shell-accent">
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
      visualTab={{
        id: "nakshatra-guide",
        label: {
          en: "27 Lunar Mansions (Visual Guide)",
          ja: "27ナクシャトラ（ビジュアルガイド）",
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
        <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent mb-3">
          {uiText("drishti", lang)}
        </p>
        <h2 className="font-serif text-3xl text-shell-warm tracking-tight">
          {uiText("aspectsTitle", lang)}
        </h2>
      </div>

      <article className="rounded-2xl border border-shell-border bg-shell-elevated/40 p-6 md:p-8">
        {aspectsIntro.title && (
          <h3 className="font-serif text-xl text-shell-warm mb-4">
            {formatted(aspectsIntro.title, lang)}
          </h3>
        )}
        {aspectsIntro.paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-shell-muted mb-3 last:mb-0">
            {formatted(p, lang)}
          </p>
        ))}
      </article>

      <article className="rounded-2xl border border-shell-border bg-shell-elevated/40 p-6 md:p-8">
        {universalAspect.title && (
          <h3 className="font-serif text-xl text-shell-warm mb-4">
            {formatted(universalAspect.title!, lang)}
          </h3>
        )}
        {universalAspect.paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-shell-muted mb-3">
            {formatted(p, lang)}
          </p>
        ))}
        {universalAspect.bullets && (
          <ul className="space-y-2">
            {universalAspect.bullets.map((b, i) => (
              <li key={i} className="text-sm text-shell-warm/90 before:content-['·'] before:mr-2 before:text-shell-accent">
                {formatted(b, lang)}
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
              {uiText("aspectsHouses", lang)}: {rule.houses}
            </p>
            <p className="text-sm leading-relaxed text-shell-muted">
              {formatted(rule.description, lang)}
            </p>
          </article>
        ))}
      </div>

      <article className="rounded-2xl border border-shell-border bg-shell-elevated/40 p-6 md:p-8">
        {conjunctionBlock.title && (
          <h3 className="font-serif text-xl text-shell-warm mb-4">
            {formatted(conjunctionBlock.title!, lang)}
          </h3>
        )}
        {conjunctionBlock.paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-shell-muted mb-3">
            {formatted(p, lang)}
          </p>
        ))}
        {conjunctionBlock.bullets && (
          <ul className="space-y-2">
            {conjunctionBlock.bullets.map((b, i) => (
              <li key={i} className="text-sm text-shell-warm/90 before:content-['·'] before:mr-2 before:text-shell-accent">
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
          en: "Drishti Guide (Visual)",
          ja: "ドリシュティガイド",
        },
        content: <AspectsVisualGuide lang={lang} />,
      }}
    />
  );
}

const horoscopePeriodTypes: HoroscopePeriodType[] = ["weekly", "monthly", "yearly"];

function HoroscopeSection({ lang }: { lang: EducationLang }) {
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
        <p className="text-[10px] uppercase tracking-[0.28em] text-shell-accent mb-3">
          {uiText("liveForecasts", lang)}
        </p>
        <h2 className="font-serif text-3xl text-shell-warm tracking-tight">
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
              className={`rounded-xl border px-4 py-2.5 text-left transition-all ${active
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

      <nav
        ref={navRef}
        aria-label={uiText("allSigns", lang)}
        className="rounded-2xl border border-shell-border/70 bg-shell-sidebar/30 px-3 py-3"
      >
        <p className="mb-2.5 text-[10px] font-medium uppercase tracking-[0.22em] text-shell-accent">
          {uiText("allTwelveSigns", lang)}
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
          {horoscopeSigns.map((sign) => (
            <button
              key={sign.id}
              type="button"
              onClick={() => jumpToSign(sign.id)}
              className="rounded-xl border border-shell-border/60 bg-shell-elevated/30 px-2 py-2 text-center transition-all hover:border-shell-accent/40 hover:bg-shell-accent-soft/40 hover:text-shell-warm text-shell-muted"
            >
              <span className="block text-[11px] font-medium leading-tight">{t(sign.name, lang)}</span>
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
              className="scroll-mt-28 rounded-2xl border border-shell-border bg-shell-elevated/40 overflow-hidden"
            >
              {index > 0 ? (
                <div className="border-t border-dashed border-shell-border/50" aria-hidden />
              ) : null}
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-52 lg:w-60 shrink-0 md:border-r border-shell-border/60 p-4 md:p-5 flex flex-col items-center text-center gap-3">
                  <div className="w-full max-w-[200px]">
                    <InfographicImage
                      src={sign.image}
                      alt={t(sign.name, lang)}
                      variant="transparent"
                      className="rounded-xl"
                      sizes="200px"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-shell-warm">{t(sign.name, lang)}</h3>
                    <p className="text-sm text-shell-accent">{t(sign.sanskrit, lang)}</p>
                    <p className="text-xs text-shell-muted mt-1">
                      {t(sign.element, lang)} · {t(sign.ruler, lang)}
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
                    <p className="text-sm leading-relaxed text-shell-muted">{formatted(reading.overview, lang)}</p>
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
      {section === "horoscope" && <HoroscopeSection lang={lang} />}
    </SectionFade>
  );
}

function EducationHubInner({ embedded }: { embedded?: boolean }) {
  const [section, setSection] = useState<EducationSectionId>("introduction");
  const [articleId, setArticleId] = useState<string | null>(
    defaultArticleForSection("introduction")
  );
  const { lang, toggleLang } = useEducationLang();

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
    <div className={`${embedded ? "" : "min-h-screen"} bg-shell-bg text-shell-warm`}>
      {!embedded && <PublicHeader lang={lang} />}

      <div className={`mx-auto max-w-7xl ${embedded ? "" : "px-4 py-6 md:px-8 md:py-10"}`}>
        {/* Hero strip */}
        <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="font-serif text-2xl tracking-tight text-shell-warm md:text-3xl">
            {uiText("heroTitle", lang)}
          </h1>
          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex items-center gap-2 self-start rounded-xl border border-shell-border bg-shell-elevated/60 px-4 py-2 text-xs font-medium text-shell-warm transition-colors hover:border-shell-accent/40 sm:self-auto"
          >
            <Languages size={14} className="text-shell-accent" />
            {lang === "en" ? uiText("switchToJa", lang) : uiText("switchToEn", lang)}
          </button>
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
                    className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-left text-xs sm:text-sm transition-all lg:gap-2.5 lg:px-4 lg:py-3 ${active
                        ? "bg-shell-accent-soft text-shell-warm shadow-[inset_3px_0_0_0_var(--shell-accent)]"
                        : "text-shell-muted hover:bg-white/[0.04] hover:text-shell-warm"
                      }`}
                  >
                    <Icon size={16} className={`shrink-0 ${active ? "text-shell-accent" : ""}`} />
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
