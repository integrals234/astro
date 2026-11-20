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
  /**
   * Optional internal links rendered after the bullets ("related pages").
   * Root-relative, unprefixed hrefs to routes that exist; the page adds the
   * locale prefix.
   */
  links?: { href: string; label: BilingualText }[];
}

/** A question and answer, rendered in a page's FAQ list and its FAQPage JSON-LD. */
export interface GuideFaq {
  question: BilingualText;
  answer: BilingualText;
}

/**
 * Explanatory content for a non-tool page (the home page, /chart), rendered
 * below the page's own UI by <LongFormGuide>.
 */
export interface PageGuide {
  /** Optional metadata override for the page (title ≤32 chars in Japanese). */
  meta?: { title: BilingualText; description: BilingualText };
  sections: ToolSection[];
  faqs: GuideFaq[];
}

export interface ToolLongForm {
  slug: string;
  sections: ToolSection[];
}
