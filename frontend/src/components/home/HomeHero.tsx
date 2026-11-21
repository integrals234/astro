"use client";

import { useMemo, useRef, useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { AnimatePresence, m } from "motion/react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useChartData } from "@/components/chart/ChartDataProvider";
import { useBirthProfile } from "@/components/profile/ProfileProvider";
import { useToast } from "@/components/ui/Toaster";
import BirthDetailsFields, {
  birthFromDetails,
  effectiveTime,
  EMPTY_BIRTH_DETAILS,
  isBirthDetailsComplete,
  type BirthDetailsValue,
} from "@/components/shared/BirthDetailsFields";
import SkyRing from "@/components/home/SkyRing";
import Armillary from "@/components/celestial/Armillary";
import Starfield from "@/components/celestial/Starfield";
import { chartFormCopy } from "@/lib/chart-i18n";
import { homeStoryCopy } from "@/lib/home/home-story-copy";
import { tr } from "@/lib/sky/entity-links";
import { NAKSHATRAS } from "@/lib/jyotish/nakshatra-data";
import { useGsapEffect, MOTION_OK } from "@/lib/motion/gsap";
import { SIGNS, estimateUtcOffset, quickSkyFromFields } from "@/lib/sky/quick-sky";
import { trackEvent } from "@/lib/analytics/events";

/**
 * Screen one: the headline, the working form, and the sky answering as the
 * visitor types. The primary action is the form itself — not a link to it.
 *
 * Layout differs by device, not just by column count:
 *   - phone: headline, form, and a slim preview strip that slides in between
 *     the fields and the button once a date exists (the button stays above
 *     the fold at 390×844);
 *   - desktop: a split screen — copy and form on the left, the armillary
 *     sphere on the right with the live sky ring as its plate.
 *
 * design-magic: the whole screen is the night sky (CSS sky + Starfield),
 * and the armillary sphere is the page's signature object.
 */
export default function HomeHero({
  onComputed,
}: {
  /** Called the moment a compute starts, with who it is for. */
  onComputed?: (subject: { name: string | null; place: string | null }) => void;
}) {
  const { language } = useLanguage();
  const copy = homeStoryCopy[language];
  const t = chartFormCopy[language];
  const { compute, status } = useChartData();
  const { upsertProfile } = useBirthProfile();
  const { toast } = useToast();
  const root = useRef<HTMLElement>(null);

  // Noon pre-filled here so the live sky preview has something to show;
  // the visitor changes it (or ticks "unknown").
  const [entry, setEntry] = useState<BirthDetailsValue>({ ...EMPTY_BIRTH_DETAILS, time: "12:00" });
  const [nameOpen, setNameOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const sky = useMemo(() => {
    const offset = entry.location
      ? estimateUtcOffset(entry.location.display_name, Number(entry.location.lon))
      : // No place yet: assume the visitor's own zone — right for most of
        // them, and corrected the moment a place is chosen.
        -new Date().getTimezoneOffset() / 60;
    return quickSkyFromFields(entry.date, effectiveTime(entry), offset);
  }, [entry]);

  const signLabels = SIGNS.map((s) => tr(t.signs, s));
  const moonSign = sky ? (tr(t.signs, sky.moon.sign)) : "";
  const moonNakEngine = sky ? NAKSHATRAS[sky.moon.nakshatraNumber - 1]?.name : "";
  const moonNak = moonNakEngine ? (tr(t.nakshatras, moonNakEngine)) : "";
  const sunSign = sky ? (tr(t.signs, sky.sun.sign)) : "";

  const phrases =
    language === "ja" ? copy.heroTitle.split("|") : copy.heroTitle.split(" ");
  const joiner = language === "ja" ? "" : " ";

  // Signature moment #1: the headline's phrases rise in, staggered, while
  // the sky ring draws itself (SkyRing owns its own timeline).
  useGsapEffect(
    root,
    ({ gsap }) => {
      const h1 = root.current?.querySelector("h1");
      // GSAP arrives after hydration. If the CSS fallback entrance has
      // already begun (1.4 s delay, measured from when the headline was
      // inserted — page load or client navigation alike), let it finish
      // instead of replaying the headline. Never add .is-split-live when
      // skipping: it cancels the fallback that makes the phrases visible.
      const fallback = h1?.querySelector<HTMLElement>(".hero-phrase")?.getAnimations?.()[0];
      if (fallback && Number(fallback.currentTime ?? 0) >= 1350) return;
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        h1?.classList.add("is-split-live");
        gsap.fromTo(
          "[data-hero-phrase]",
          { opacity: 0.01, y: "0.4em" },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.11 },
        );
        // Transform only: the lead and form are painted by the server and
        // must never be hidden again — fading them from 0 after hydration
        // made the lead paragraph the page's LCP, ~3 s late.
        gsap.from("[data-hero-after]", {
          y: 12,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          delay: 0.35,
        });
      });
      return () => mm.revert();
    },
    [],
  );

  const canSubmit = isBirthDetailsComplete(entry) && !submitting;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!canSubmit || !entry.location) return;
    setSubmitting(true);
    const birth = birthFromDetails(entry);
    // Hand the visitor to the result immediately — it shows its own
    // progress — rather than holding them on a disabled button.
    const pending = compute(birth);
    onComputed?.({
      name: entry.name.trim() || null,
      place: entry.location.display_name.split(",")[0]?.trim() || null,
    });
    trackEvent("chart_generated", { locale: language, source: "home" });
    const result = await pending;
    setSubmitting(false);
    if (!result) return;
    try {
      await upsertProfile({
        label: entry.name.trim() || entry.location.display_name,
        locationName: entry.location.display_name,
        birth,
        // Same as the previous home report: never silently replace the
        // visitor's saved "self" with whoever they just looked up.
        isPrimary: false,
        chartData: result,
      });
    } catch {
      toast(t.saveError);
    }
  };

  return (
    <section
      ref={root}
      id="start"
      aria-labelledby="hero-title"
      className="night-sky relative isolate overflow-hidden"
    >
      <Starfield />
      {/* Phone and tablet: the armillary turns behind the headline, so the
          form keeps its place above the fold. */}
      <div aria-hidden className="pointer-events-none absolute -right-[22vw] -top-6 opacity-55 sm:-right-24 lg:hidden">
        <Armillary signLabels={signLabels} style={{ "--size": "min(440px, 96vw)" } as React.CSSProperties} />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl scroll-mt-20 gap-10 px-4 pb-14 pt-6 md:px-8 md:pt-16 lg:min-h-[calc(100svh-4.5rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-12 lg:pb-20">
      <div className="min-w-0">
        <h1 id="hero-title" className="ma-display max-w-[13em] lg:text-[clamp(2.75rem,3.5vw,3.6rem)]">
          {phrases.map((phrase, i) => (
            <span key={`${phrase}-${i}`}>
              <span data-hero-phrase className="hero-phrase">
                {phrase}
              </span>
              {i < phrases.length - 1 ? joiner : null}
            </span>
          ))}
        </h1>

        <p data-hero-after className="ma-lead mt-4 md:mt-7">
          {copy.heroLead}
        </p>

        <form
          data-hero-after
          onSubmit={handleSubmit}
          className="mt-5 max-w-md rounded-[16px] border border-border bg-washi-elevated/85 p-4 shadow-[0_18px_48px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-5 md:mt-9 md:p-6"
          aria-label={copy.submit}
        >
          <BirthDetailsFields
            value={entry}
            onChange={(patch) => setEntry((v) => ({ ...v, ...patch }))}
            idPrefix="hero"
            showName={nameOpen}
          />

          {!nameOpen && (
            <div>
              <button
                type="button"
                onClick={() => setNameOpen(true)}
                className="mt-1 inline-flex min-h-[44px] items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-ink"
              >
                <Plus size={13} aria-hidden />
                {copy.addName}
              </button>
            </div>
          )}

          {/* Phone: the preview strip — the sky answering before submit. */}
          <AnimatePresence initial={false}>
            {sky && (
              <m.div
                key="strip"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
                className="overflow-hidden lg:hidden"
              >
                <div className="mt-3 flex items-center gap-3 rounded-[14px] border border-border bg-washi-elevated p-3" aria-live="polite">
                  <div className="w-14 shrink-0">
                    <SkyRing sky={sky} signLabels={signLabels} ariaLabel={copy.previewLabel} size="sm" />
                  </div>
                  <div className="min-w-0 text-sm leading-relaxed">
                    <p className="text-text-muted">{copy.previewLabel}</p>
                    <p className="text-ink">
                      <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-terracotta align-middle" aria-hidden />
                      {copy.moon} {copy.moonIn(moonSign, moonNak)}
                    </p>
                  </div>
                </div>
              </m.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            data-primary-action
            disabled={!canSubmit}
            className="washi-btn-primary mt-4 w-full gap-2 px-6 text-[length:var(--step-0)] disabled:opacity-60 sm:w-auto"
          >
            {submitting || status === "loading" ? copy.submitting : copy.submit}
            <ArrowRight size={16} aria-hidden />
          </button>
          <p className="mt-3 text-xs text-text-muted">{copy.privacy}</p>
        </form>
      </div>

      {/* Desktop: the armillary sphere with the visitor's live sky as its plate. */}
      <div className="hidden min-w-0 lg:block" aria-live="polite">
        <div className="mx-auto flex max-w-[560px] flex-col items-center">
          <Armillary signLabels={signLabels} style={{ "--size": "min(560px, 44vw)" } as React.CSSProperties}>
          <SkyRing
            sky={sky}
            signLabels={signLabels}
            ariaLabel={copy.previewLabel}
            centerTop={sky ? copy.moon : copy.previewLabel}
            centerMain={sky ? moonNak : undefined}
            centerSub={sky ? `${moonSign} · ${t.ui.pada} ${sky.moon.pada}` : undefined}
          />
          </Armillary>
          <div className="mt-6 min-h-[4.5rem] text-center text-sm leading-relaxed text-text-muted">
            {sky ? (
              <>
                <p>
                  <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-terracotta align-middle" aria-hidden />
                  {copy.moon} {copy.moonIn(moonSign, moonNak)}
                  <span className="mx-3 text-border">|</span>
                  <span className="mr-1.5 inline-block h-2 w-2 rounded-full border-2 border-ink align-middle" aria-hidden />
                  {copy.sun} {copy.sunIn(sunSign)}
                </p>
                <p className="mt-1 text-xs">{copy.previewNote}</p>
              </>
            ) : (
              <p>{copy.previewEmpty}</p>
            )}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
