import type { ElementType, ReactNode } from "react";

/**
 * Scroll-driven reveal (Phase 1.6), replacing `ScrollReveal`.
 *
 * Two things changed and both matter:
 *
 * 1. **It is visible by default.** `ScrollReveal` server-rendered
 *    `opacity: 0` as an inline style, and on the homepage and appraisals page
 *    that covered most of the body copy. The content was in the DOM so
 *    crawlers saw it, but it was one JS failure away from an invisible page.
 *    Here the element is plain visible markup; the animation only exists if a
 *    view timeline does.
 *
 * 2. **It is scrubbed, not triggered.** `animation-timeline: view()` binds
 *    progress to scroll position on the compositor thread, so the motion sits
 *    under the reader's finger and reverses when they scroll back. A trigger
 *    plays a fixed 600ms clip regardless, and a JS scroll listener driving
 *    transforms jitters the moment React hydrates or a chart recomputes.
 *
 * Browsers without `animation-timeline` (Firefox today) simply get static
 * content — never a broken layout. Reduced motion resolves to the end state.
 *
 * This is a server component: no hooks, no client bundle, no hydration cost.
 */
export default function Reveal({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
}) {
  return (
    <Tag data-reveal className={className}>
      {children}
    </Tag>
  );
}
