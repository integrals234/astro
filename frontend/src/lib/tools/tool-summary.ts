import type { ToolLanding } from "@/lib/tools/landing-content";

/**
 * What a tool tile needs on the client, in one language.
 *
 * Performance pass: the tools grid used to import TOOL_LANDINGS — 17 tools ×
 * 4 languages including leads and FAQs, ~42KB gzipped — into the homepage's
 * JavaScript just to print titles. Server pages now build these summaries
 * (`toolSummaries` in landing-content.ts) and pass them down as props, so
 * the long copy never leaves the server.
 */
export interface ToolSummary {
  slug: string;
  title: string;
  description: string;
  useCase: string;
  resultPanel?: ToolLanding["resultPanel"];
  sections?: ToolLanding["sections"];
}
