"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import TonightFacts from "@/components/home/TonightFacts";
import { homeStoryCopy } from "@/lib/home/home-story-copy";
import { journeyCopy, type JourneyChapterId } from "@/lib/home/journey-copy";
import { tonightCopy } from "@/lib/home/tonight-copy";
import { cosmosBus } from "@/lib/cosmos/bus";
import { getLenis, setLenis, smoothScrollTo } from "@/lib/cosmos/smooth";

/** Chapter order; index + 1 is the scene stage (the hero is stage 0). */
export const JOURNEY_CHAPTERS: readonly Exclude<JourneyChapterId, "start">[] = ["system", "earth", "rashi", "nakshatra", "graha", "now"];
export const chapterDomId = (id: JourneyChapterId) => (id === "start" ? "start" : `journey-${id}`);

const LEARN_HREF = { rashi: "/rashis", nakshatra: "/nakshatras", graha: "/grahas" } as const;

/**
 * The scroll journey — six screens between the hero and the visitor's own
 * chart, each one a short card over the 3D sky (CosmosCanvas, held behind
 * by HomeCosmos). Scroll position is the scene's timeline: GSAP
 * ScrollTrigger turns "how far between chapter n and n+1" into a
 * continuous stage, scrubbed both ways. Desktop scrolls with Lenis and
 * settles gently on the nearest chapter; phones keep native scrolling.
 *
 * Every card is real, server-rendered HTML — the 3D is illustration.
 */
export default function Journey() {
  const { language } = useLanguage();
  const copy = journeyCopy[language];
  const story = homeStoryCopy[language];
  const tonight = tonightCopy[language];
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void (async () => {
      const [{ gsap, loadScrollTrigger }] = await Promise.all([import("@/lib/motion/gsap-core")]);
      const ScrollTrigger = await loadScrollTrigger();
      if (cancelled || !root.current) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const fine = window.matchMedia("(pointer: fine)").matches && window.innerWidth >= 1024;
      const steps = ["start", ...JOURNEY_CHAPTERS].map((id) => document.getElementById(chapterDomId(id as JourneyChapterId)));
      if (steps.some((s) => !s)) return;
      const els = steps as HTMLElement[];

      const ctx = gsap.context(() => {
        // The scene's timeline: stage = i + progress between step centres.
        for (let i = 0; i < els.length - 1; i++) {
          ScrollTrigger.create({
            trigger: els[i],
            start: "center center",
            endTrigger: els[i + 1],
            end: "center center",
            onUpdate: (self) => cosmosBus.setStage(i + self.progress),
            onLeave: () => cosmosBus.setStage(i + 1),
            onLeaveBack: () => cosmosBus.setStage(i),
          });
        }

        // Outro: after the last chapter the camera draws back (stage 6 → 7)
        // while the sky, the chapter rail and the last card fade away, so
        // the next section begins on the page's own ground.
        const outro = document.getElementById("journey-outro");
        const layer = document.querySelector<HTMLElement>("[data-cosmos-layer]");
        const rail = document.querySelector<HTMLElement>("[data-cosmos-rail]");
        if (outro) {
          ScrollTrigger.create({
            trigger: outro,
            start: "top bottom",
            end: "bottom 70%",
            onUpdate: (self) => cosmosBus.setStage(els.length - 1 + self.progress),
            onLeaveBack: () => cosmosBus.setStage(els.length - 1),
          });
          // Finishes while the next section is already rising into view —
          // no empty screen between the sky and the page.
          const fadeOut = { trigger: outro, start: "top bottom", end: "bottom 70%", scrub: reduced ? true : 0.5 };
          if (layer) gsap.fromTo(layer, { opacity: 1 }, { opacity: 0, ease: "power1.in", scrollTrigger: fadeOut });
          if (rail) gsap.fromTo(rail, { opacity: 1 }, { opacity: 0, ease: "none", scrollTrigger: { ...fadeOut, end: "top 50%" } });
        }

        if (!reduced) {
          // Each card rises in as its screen arrives and recedes as it goes;
          // the last one dissolves fully into the outro.
          const cards = gsap.utils.toArray<HTMLElement>("[data-journey-card]");
          cards.forEach((card, i) => {
            const last = i === cards.length - 1;
            gsap.fromTo(
              card,
              { opacity: 0, y: 48 },
              { opacity: 1, y: 0, ease: "none", immediateRender: false, scrollTrigger: { trigger: card, start: "top 92%", end: "top 58%", scrub: 0.6 } },
            );
            gsap.fromTo(
              card,
              { opacity: 1, y: 0, scale: 1 },
              {
                opacity: last ? 0 : 0.15,
                y: last ? -40 : -24,
                scale: last ? 0.97 : 1,
                ease: "none",
                immediateRender: false,
                scrollTrigger: { trigger: card, start: "bottom 32%", end: last ? "bottom 0%" : "bottom 6%", scrub: 0.6 },
              },
            );
          });
        }
      }, root.current);

      // Lenis: desktop pointers only, driven by GSAP's ticker so the two
      // never disagree about where the page is.
      let destroyLenis: (() => void) | undefined;
      if (fine && !reduced) {
        const { default: Lenis } = await import("lenis");
        if (cancelled) {
          ctx.revert();
          return;
        }
        const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 0.9 });
        setLenis(lenis);
        lenis.on("scroll", ScrollTrigger.update);
        const raf = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(raf);
        gsap.ticker.lagSmoothing(0);

        // Settle on the nearest chapter once the wheel stops, if close.
        let timer = 0;
        let snapping = false;
        const onScroll = () => {
          window.clearTimeout(timer);
          if (snapping) return;
          timer = window.setTimeout(() => {
            const vh = window.innerHeight;
            const y = window.scrollY;
            const first = els[0].getBoundingClientRect().top + y;
            const lastEl = els[els.length - 1];
            const last = lastEl.getBoundingClientRect().top + y + lastEl.offsetHeight / 2 - vh / 2;
            // Never pull back from the outro: past the last chapter, scroll is free.
            if (y < first - 4 || y > last + 4) return;
            let best = Infinity;
            let target = y;
            for (const el of els) {
              const centre = el.getBoundingClientRect().top + y + el.offsetHeight / 2 - vh / 2;
              if (Math.abs(centre - y) < best) {
                best = Math.abs(centre - y);
                target = centre;
              }
            }
            if (best > 4 && best < vh * 0.26) {
              snapping = true;
              lenis.scrollTo(Math.max(0, target), { duration: 0.9, onComplete: () => (snapping = false) });
              window.setTimeout(() => (snapping = false), 1200);
            }
          }, 180);
        };
        lenis.on("scroll", onScroll);
        destroyLenis = () => {
          window.clearTimeout(timer);
          gsap.ticker.remove(raf);
          lenis.destroy();
          setLenis(null);
        };
      }

      ScrollTrigger.refresh();
      cleanup = () => {
        destroyLenis?.();
        ctx.revert();
      };
    })();

    return () => {
      cancelled = true;
      cleanup?.();
      if (getLenis()) setLenis(null);
    };
  }, []);

  const chapterTitle = (id: (typeof JOURNEY_CHAPTERS)[number]) => {
    switch (id) {
      case "system":
        return copy.systemTitle;
      case "earth":
        return copy.earthTitle;
      case "now":
        return tonight.heading;
      default:
        return story.learnSteps[id].title;
    }
  };

  const chapterBody = (id: (typeof JOURNEY_CHAPTERS)[number]) => {
    switch (id) {
      case "system":
        return copy.systemBody;
      case "earth":
        return copy.earthBody;
      case "now":
        return tonight.lead;
      default:
        return story.learnSteps[id].body;
    }
  };

  return (
    <section ref={root} aria-label={copy.ariaLabel} className="relative">
      {JOURNEY_CHAPTERS.map((id, i) => (
        <div
          key={id}
          id={chapterDomId(id)}
          className={`journey-step relative flex min-h-[100svh] scroll-mt-0 px-4 md:px-8 ${id === "now" ? "items-center" : "items-end pb-[14svh] md:items-center md:pb-0"}`}
        >
          <div className="mx-auto w-full max-w-6xl">
            <article data-journey-card aria-labelledby={`${chapterDomId(id)}-title`} className={`journey-card ${id === "now" ? "journey-card-wide" : ""}`}>
              <p className="flex items-center gap-3 text-xs text-text-muted">
                <span className="font-chart tabular-nums text-terracotta">{String(i + 1).padStart(2, "0")}</span>
                <span aria-hidden className="h-px w-6 bg-border" />
                <span>{copy.chapters[id]}</span>
              </p>
              <h2 id={`${chapterDomId(id)}-title`} className="mt-3 font-header text-[length:var(--step-3)] leading-[1.15] tracking-tight text-ink [text-wrap:balance]">
                {chapterTitle(id)}
              </h2>
              <p className="mt-4 max-w-[34em] leading-[1.85] text-text">{chapterBody(id)}</p>

              {id === "rashi" || id === "nakshatra" || id === "graha" ? (
                <Link href={LEARN_HREF[id]} className="washi-btn-tertiary mt-5 inline-flex min-h-[44px] items-center gap-1.5 px-0 text-sm">
                  {story.learnSteps[id].cta}
                  <ArrowRight size={14} aria-hidden />
                </Link>
              ) : null}

              {id === "now" ? (
                <>
                  <div className="mt-7">
                    <TonightFacts />
                  </div>
                  <p className="mt-5 text-[11px] leading-relaxed text-text-muted">
                    {tonight.note} {copy.approxNote}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        const hero = document.getElementById("start");
                        if (hero) smoothScrollTo(hero);
                        window.setTimeout(() => document.getElementById("hero-date")?.focus({ preventScroll: true }), 900);
                      }}
                      className="washi-btn-primary gap-2 px-5 text-sm"
                    >
                      {tonight.ctaChart}
                      <ArrowRight size={15} aria-hidden />
                    </button>
                    <Link href="/tools/panchang" className="washi-btn-secondary gap-2 px-5 text-sm">
                      {tonight.ctaPanchang}
                    </Link>
                  </div>
                </>
              ) : null}
            </article>
          </div>
        </div>
      ))}
      {/* The outro: room for the sky to draw back and fade before the next section. */}
      <div id="journey-outro" aria-hidden className="h-[28svh] md:h-[40svh]" />
    </section>
  );
}
