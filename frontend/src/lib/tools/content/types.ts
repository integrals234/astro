import type { BilingualText } from "@/lib/education/types";

/**
 * Long-form explanatory body for a tool page.
 *
 * Tool pages that are a calculator plus three FAQs do not rank against a
 * competitor running 2,600–4,400 words per page. These sections are the depth
 * that closes that gap — and they have to be genuinely explanatory rather than
 * padding, because a page assembled from filler is the scaled-content pattern
 * Google penalises and the exact thing this site's positioning cannot afford.
 *
 * Rendered as `h2` + prose, so each section is independently snippet-eligible
 * and the page reads as a structured article rather than a wall.
 */
export interface ToolSection {
  heading: BilingualText;
  /** Paragraphs. Rendered in order, each as its own `<p>`. */
  body: BilingualText[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: BilingualText[];
}

export interface ToolLongForm {
  slug: string;
  sections: ToolSection[];
}
