"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useBirthProfile } from "@/components/profile/ProfileProvider";
import { useChartData } from "@/components/chart/ChartDataProvider";
import Sheet from "@/components/ui/Sheet";
import ToolPanel, { canOpenInPlace } from "@/components/tools/ToolPanel";
import type { ToolSummary } from "@/lib/tools/tool-summary";
import { TOOL_GROUPS, homeStoryCopy, type ToolGroupId } from "@/lib/home/home-story-copy";
import { homeToolsCopy } from "@/lib/home/tools-copy";
import { trackEvent } from "@/lib/analytics/events";
import { profilePersonName } from "@/lib/profile/types";

const GROUP_ORDER: ToolGroupId[] = ["self", "timing", "relations", "life"];
const FEATURED = new Set(["birth-chart", "compatibility"]);

const groupTools = (tools: ToolSummary[], id: ToolGroupId) => {
  const bySlug = new Map(tools.map((tool) => [tool.slug, tool]));
  return TOOL_GROUPS[id].map((slug) => bySlug.get(slug)).filter((t): t is ToolSummary => Boolean(t));
};

/**
 * All seventeen tools, laid out per device:
 *   phone   — four short swipe rails, one per group, each card naming *when*
 *             you'd use the tool (the reason to tap), not just what it is;
 *   desktop — a bento grid with two featured tiles; hovering a tile reveals
 *             its use case, and every tile is a real link (crawlable,
 *             middle-click opens a tab).
 * When the page already has a chart or saved profile, a plain click opens
 * the answer in a sheet instead of leaving the page.
 */
export default function ToolsBrowser({
  tools,
  variant = "home",
  title,
}: {
  /** Built server-side by `toolSummaries(language)`. */
  tools: ToolSummary[];
  variant?: "home" | "hub";
  title?: string;
}) {
  const { language } = useLanguage();
  const copy = homeStoryCopy[language];
  const toolsCopy = homeToolsCopy[language];
  const { primary, isLoaded } = useBirthProfile();
  const { data } = useChartData();
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const openTool = openSlug ? tools.find((tool) => tool.slug === openSlug) ?? null : null;

  const onTileClick = (event: React.MouseEvent, tool: ToolSummary) => {
    trackEvent("tool_opened", { slug: tool.slug, locale: language });
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    if (!canOpenInPlace(tool, Boolean(data), Boolean(primary))) return;
    event.preventDefault();
    setOpenSlug(tool.slug);
  };

  const Title = variant === "home" ? "h2" : "h1";

  return (
    <section aria-labelledby="tools-title" className="mx-auto w-full max-w-6xl px-4 py-14 md:px-8 md:py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10">
        <div className="min-w-0 max-w-2xl">
          <Title id="tools-title" className={variant === "home" ? "ma-title" : "ma-display !text-[length:var(--step-4)]"}>
            {title ?? copy.toolsTitle(tools.length)}
          </Title>
          {title && <p className="ma-lead mt-4">{copy.toolsTitle(tools.length)}</p>}
          <p className="mt-3 text-sm leading-[1.8] text-text-muted">
            {isLoaded && primary && profilePersonName(primary)
              ? toolsCopy.personalised(profilePersonName(primary))
              : toolsCopy.intro}
          </p>
        </div>
        {variant === "home" && (
          <Link href="/tools" className="washi-btn-tertiary hidden min-h-[44px] items-center gap-1.5 text-sm md:inline-flex">
            {copy.allTools}
            <ArrowRight size={14} aria-hidden />
          </Link>
        )}
      </div>

      {/* Phone: one rail per group. */}
      <div className="space-y-7 md:hidden">
        {GROUP_ORDER.map((group) => (
          <div key={group}>
            <h3 className="mb-3 text-sm text-text-muted">{copy.toolGroups[group]}</h3>
            <ul className="snap-rail pb-1">
              {groupTools(tools, group).map((tool) => (
                <li key={tool.slug} className="w-[68vw] max-w-[280px]">
                  <Link
                    href={`/tools/${tool.slug}`}
                    onClick={(e) => onTileClick(e, tool)}
                    className="washi-card washi-card-interactive flex h-full min-h-[116px] flex-col p-4"
                  >
                    <span className="font-header text-[length:var(--step-1)] leading-snug text-ink">{tool.title}</span>
                    <span className="mt-1.5 line-clamp-2 text-[13px] leading-[1.7] text-text-muted">{tool.useCase}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <Link href="/tools" className="washi-btn-secondary w-full gap-2 text-sm">
          {copy.allTools}
          <ArrowRight size={14} aria-hidden />
        </Link>
      </div>

      {/* Tablet + desktop: bento. */}
      <div className="hidden space-y-10 md:block">
        {GROUP_ORDER.map((group) => (
          <div key={group} className="grid gap-x-8 gap-y-3 lg:grid-cols-[10rem_minmax(0,1fr)]">
            <h3 className="pt-4 text-sm text-text-muted">{copy.toolGroups[group]}</h3>
            <ul className="grid grid-flow-row-dense grid-cols-2 gap-3 xl:grid-cols-3">
              {groupTools(tools, group).map((tool) => {
                const featured = FEATURED.has(tool.slug);
                const inPlace = canOpenInPlace(tool, Boolean(data), Boolean(primary));
                return (
                  <li key={tool.slug} className={featured ? "col-span-2" : ""}>
                    <Link
                      href={`/tools/${tool.slug}`}
                      onClick={(e) => onTileClick(e, tool)}
                      className="washi-card washi-card-interactive group relative flex h-full min-h-[128px] flex-col overflow-hidden p-5"
                    >
                      <span className="flex items-start justify-between gap-3">
                        <span className={`font-header leading-snug text-ink [text-wrap:balance] ${featured ? "text-[length:var(--step-2)]" : "text-[17px]"}`}>
                          {tool.title}
                        </span>
                        <ArrowUpRight
                          size={16}
                          aria-hidden
                          className="mt-1 shrink-0 text-text-muted transition-transform duration-200 ease-[var(--ease-out)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                        />
                      </span>
                      {/* Hover preview: when you'd use it ↔ what it does. Focus shows it too. */}
                      <span className="relative mt-2 block min-h-[3.4em] text-[13px] leading-[1.7]">
                        <span className="line-clamp-2 block text-text-muted transition-[opacity,transform] duration-200 ease-[var(--ease-out)] group-hover:-translate-y-1 group-hover:opacity-0 group-focus-visible:opacity-0">
                          {tool.useCase}
                        </span>
                        <span className="absolute inset-x-0 top-0 line-clamp-3 block translate-y-1 text-moss opacity-0 transition-[opacity,transform] duration-200 ease-[var(--ease-out)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                          {tool.description}
                        </span>
                      </span>
                      {inPlace && (
                        <span className="mt-auto pt-3 text-xs text-moss">{copy.viewHere} →</span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <Sheet
        open={Boolean(openTool)}
        onClose={() => setOpenSlug(null)}
        title={openTool?.title ?? ""}
        closeLabel={copy.close}
      >
        {openTool ? <ToolPanel tool={openTool} /> : null}
      </Sheet>
    </section>
  );
}
