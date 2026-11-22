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
import HomeCosmos from "@/components/home/HomeCosmos";
import { smoothScrollTo } from "@/lib/cosmos/smooth";
import { useWelcomeLang } from "@/lib/home/use-welcome-lang";
import { uiText } from "@/lib/education/i18n/ui";
import type { ToolSummary } from "@/lib/tools/tool-summary";
import { profilePersonName } from "@/lib/profile/types";

/**
 * The homepage as a scroll story (design-magic), each part with one job:
 *
 *   1. Hero      — the form is the primary action; the 3D solar system
 *                  time-lapses to the birth moment as it is typed.
 *   2. Journey   — six screens over the same sky: the solar system, the
 *                  view from Earth, rashis, nakshatras, grahas, the sky now.
 *   3. Your chart — appears once there is one: six beats, swipe or side-by-side.
 *   4. Tools     — seventeen ways to read the same chart, opening in place.
 *   5. Learn     — where to go next: course, articles, the 27 mansions.
 *   6. Reading   — a person, then the one closing action: back to the form.
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
      window.setTimeout(() => {
        const el = document.getElementById("your-chart");
        if (el) smoothScrollTo(el, -16);
      }, 60),
    );
  }, []);

  const shownSubject: StorySubject | null =
    subject ?? (primary ? { name: profilePersonName(primary) || null, place: primary.locationName.split(",")[0] ?? null } : null);

  return (
    <>
      <HomeCosmos>
        <div ref={heroRef}>
          <HomeHero onComputed={onComputed} />
        </div>
      </HomeCosmos>
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
    <div className="min-h-screen bg-washi text-text">
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
