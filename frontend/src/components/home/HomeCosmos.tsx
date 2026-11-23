"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import Journey, { JOURNEY_CHAPTERS, chapterDomId } from "@/components/home/Journey";
import { cosmosBus } from "@/lib/cosmos/bus";
import { useSiteZone } from "@/components/time/useSiteZone";
import { smoothScrollTo } from "@/lib/cosmos/smooth";
import { journeyCopy, type JourneyChapterId } from "@/lib/home/journey-copy";

// The canvas wrapper is tiny; Three.js itself loads later, inside it.
const CosmosCanvas = dynamic(() => import("@/components/cosmos/CosmosCanvas"), {
  ssr: false,
  loading: () => <div aria-hidden className="cosmos-poster absolute inset-0" />,
});

const NOW_STAGE = 5.5;
const CHAPTERS: JourneyChapterId[] = ["start", ...JOURNEY_CHAPTERS];

/**
 * The hero and the journey share one sky: a viewport-tall sticky layer
 * (the 3D scene, or its CSS poster) that the hero and the six chapters
 * scroll over; after the last chapter it draws back and fades out (the
 * journey's outro), so the next section starts on a clean page. A small readout says which
 * moment is on screen; on desktop a rail of chapter marks sits at the edge.
 */
export default function HomeCosmos({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const copy = journeyCopy[language];
  const hudDate = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);
  const [birthShown, setBirthShown] = useState(false);

  useEffect(
    () =>
      cosmosBus.subscribe(() => {
        const stage = cosmosBus.getStage();
        setActive(Math.round(stage));
        setBirthShown(Boolean(cosmosBus.getBirth()) && stage < NOW_STAGE);
      }),
    [],
  );

  const fmt = useRef<Intl.DateTimeFormat | null>(null);
  const zone = useSiteZone();
  useEffect(() => {
    fmt.current = new Intl.DateTimeFormat(language, { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", timeZone: zone });
  }, [language, zone]);

  // Written straight to the DOM: the time-lapse updates it ~12×/s.
  const onDate = useCallback((d: Date) => {
    if (hudDate.current && fmt.current) hudDate.current.textContent = fmt.current.format(d);
  }, []);

  return (
    <div className="cosmos-stage relative isolate">
      <div data-cosmos-layer aria-hidden className="pointer-events-none sticky top-0 -z-10 -mb-[100svh] h-[100svh] overflow-hidden">
        <CosmosCanvas onDate={onDate} />
        <div className="cosmos-veil absolute inset-0" />
        <p className="cosmos-hud absolute bottom-5 right-5 hidden text-right md:block">
          <span className="block text-[10px] uppercase tracking-[0.18em] text-text-muted">
            {copy.hudLabel} · {birthShown ? copy.hudBirth : copy.hudNow}
          </span>
          <span ref={hudDate} className="mt-1 block font-chart text-sm tabular-nums text-ink" />
        </p>
      </div>

      <nav data-cosmos-rail aria-label={copy.railLabel} className="journey-rail">
        <ol>
          {CHAPTERS.map((id, i) => (
            <li key={id}>
              <button
                type="button"
                aria-current={active === i ? "step" : undefined}
                onClick={() => {
                  const el = document.getElementById(chapterDomId(id));
                  if (el) smoothScrollTo(el);
                }}
              >
                <span className="journey-rail-label">{copy.chapters[id]}</span>
                <span aria-hidden className="journey-rail-dot" />
              </button>
            </li>
          ))}
        </ol>
      </nav>

      {children}
      <Journey />
    </div>
  );
}
