"use client";

import Link from "@/components/i18n/LocaleLink";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { trackEvent } from "@/lib/analytics/events";
import { toolHandoffCopy, type ToolHandoffId } from "@/lib/tools/handoff-copy";

/**
 * The bottom of every tool result.
 *
 * A free calculator that just prints a number is a dead end. This names the
 * specific thing the calculation *cannot* answer and offers the reading that
 * can — per tool, not as one generic banner, because "your Guna score is 24"
 * and "Saturn is on your Moon" raise completely different questions.
 *
 * Deliberately honest about the limit rather than urgent about the upsell:
 * overclaiming here would undercut the same page's argument that the tool is a
 * calculation and the reading is a judgement.
 */
export default function BookingHandoff({
  tool,
  offering = "consultation",
}: {
  tool: ToolHandoffId;
  offering?: string;
}) {
  const { language } = useLanguage();
  const copy = toolHandoffCopy[language][tool];

  return (
    <aside className="washi-card mt-10 p-6 md:p-7">
      <p className="washi-eyebrow mb-2">{copy.eyebrow}</p>
      <h3 className="font-body text-lg text-ink">{copy.heading}</h3>
      <p className="washi-measure mt-3 text-sm leading-relaxed text-text-muted">
        {copy.body}
      </p>
      <Link
        href="/personal-appraisals"
        onClick={() =>
          trackEvent("booking_started", { offering, locale: language })
        }
        className="washi-btn-primary mt-5 inline-block"
      >
        {copy.cta}
      </Link>
    </aside>
  );
}
