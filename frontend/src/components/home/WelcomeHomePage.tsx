"use client";

import { useCallback, useRef, useState } from "react";
import SiteFooter from "@/components/layout/SiteFooter";
import PublicHeader from "@/components/layout/PublicHeader";
import { ChartDataProvider, useChartData } from "@/components/chart/ChartDataProvider";
import { useBirthProfile } from "@/components/profile/ProfileProvider";
import HomeHero from "@/components/home/HomeHero";
import ChartStory, { type StorySubject } from "@/components/home/ChartStory";
import ToolsBrowser from "@/components/tools/ToolsBrowser";
import LearnStory from "@/components/home/LearnStory";
import ReadingClose from "@/components/home/ReadingClose";
import StickyCtaBar from "@/components/home/StickyCtaBar";
import TonightSky from "@/components/celestial/TonightSky";
import PointerLight from "@/components/celestial/PointerLight";
import { useWelcomeLang } from "@/lib/home/use-welcome-lang";
import { uiText } from "@/lib/education/i18n/ui";
import type { ToolSummary } from "@/lib/tools/tool-summary";
import { profilePersonName } from "@/lib/profile/types";

/**
 * The homepage as a five-screen story, each screen with one job:
 *
 *   1. Hero      — the form is the primary action; the sky answers as you type.
 *   2. Your chart — appears once there is one: six beats, swipe or side-by-side.
 *   3. Tools     — seventeen ways to read the same chart, opening in place.
 *   4. Learn     — three words to read a sky (the scroll story).
 *   5. Reading   — a person, then the one closing action: back to the form.
 *
 * It replaced a ~9,500 px phone scroll (banner, hero, full ten-section
 * report, 17-card grid, prose, four starting-point cards, CTA rows). Nothing
 * was deleted from the product: the full report opens from screen 2, the
 * intro prose folds into screen 4, the starting-point links live in screens
 * 3–5 and the footer.
 *
 * Rendered once in both auth states — see git history for why wrapping it
 * in Clerk's <SignedIn>/<SignedOut> emptied the prerendered HTML.
 */
function HomeInner({ tools }: { tools: ToolSummary[] }) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { primary } = useBirthProfile();
  const { data } = useChartData();
  const [subject, setSubject] = useState<StorySubject | null>(null);

  const onComputed = useCallback((s: StorySubject) => {
    setSubject(s);
    // The story section mounts on the next render; bring it into view then.
    window.requestAnimationFrame(() =>
      window.setTimeout(() => document.getElementById("your-chart")?.scrollIntoView({ behavior: "smooth", block: "start" }), 60),
    );
  }, []);

  const shownSubject: StorySubject | null =
    subject ?? (primary ? { name: profilePersonName(primary) || null, place: primary.locationName.split(",")[0] ?? null } : null);

  return (
    <>
      <div ref={heroRef}>
        <HomeHero onComputed={onComputed} />
      </div>
      <TonightSky />
      <ChartStory subject={shownSubject} />
      <ToolsBrowser tools={tools} />
      <LearnStory />
      <ReadingClose />
      <StickyCtaBar heroRef={heroRef} hidden={Boolean(data)} />
    </>
  );
}

export default function WelcomeHomePage({
  tools,
  guide,
}: {
  tools: ToolSummary[];
  /** Server-rendered explanatory guide + FAQ, placed after the story sections. */
  guide?: React.ReactNode;
}) {
  const { lang } = useWelcomeLang();
  return (
    // design-magic: the home page is an always-night stage (`.night` remaps
    // the colour tokens), whatever the site theme.
    <div className="night min-h-screen bg-washi text-text">
      <PointerLight />
      <PublicHeader pageLabel={uiText("home", lang)} maxWidth="max-w-6xl" />
      <main className="page-enter">
        <ChartDataProvider toolSlug="home">
          <HomeInner tools={tools} />
        </ChartDataProvider>
        {guide}
      </main>
      <SiteFooter />
    </div>
  );
}
