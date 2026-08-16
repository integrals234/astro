import { track } from "@vercel/analytics";

/**
 * The conversion funnel, as a closed set of events.
 *
 * Before this the only signal that anything worked was an inquiry email landing
 * in a Resend inbox — there was no way to attribute a booking to a landing page,
 * a tool, or a locale, which made every optimisation decision guesswork.
 *
 * Events are declared here rather than as string literals at call sites so that
 * a typo is a type error, and so the funnel is readable in one place.
 */
export type AnalyticsEvent =
  // Chart / tools
  | { name: "chart_generated"; props: { locale: string; source: "home" | "chart" | "tool" } }
  | { name: "chart_saved"; props: { locale: string } }
  | { name: "chart_pdf_downloaded"; props: { locale: string } }
  | { name: "tool_opened"; props: { slug: string; locale: string } }
  | { name: "tool_completed"; props: { slug: string; locale: string } }
  // Booking funnel
  | { name: "pricing_viewed"; props: { locale: string } }
  | { name: "booking_started"; props: { offering: string; locale: string } }
  | { name: "inquiry_submitted"; props: { locale: string; hasMessage: boolean } }
  | { name: "inquiry_failed"; props: { locale: string; reason: string } }
  // Engagement
  | { name: "instagram_clicked"; props: { locale: string; placement: string } }
  | { name: "course_chapter_completed"; props: { chapter: number; locale: string } };

type EventName = AnalyticsEvent["name"];
type PropsOf<N extends EventName> = Extract<AnalyticsEvent, { name: N }>["props"];

/**
 * Fire a funnel event. Safe to call from anywhere in the client tree — Vercel
 * Analytics no-ops when the script has not loaded (ad blockers, local dev).
 *
 * Server-side mirroring of the money events lives in `conversion.ts`; anything
 * that decides spend should read that table rather than this, because this can
 * be blocked client-side.
 */
export function trackEvent<N extends EventName>(name: N, props: PropsOf<N>) {
  try {
    track(name, props as Record<string, string | number | boolean | null>);
    gtagEvent(name, props as Record<string, unknown>);
  } catch {
    // Analytics must never break a user flow.
  }
}

interface GtagWindow {
  gtag?: (command: "event", name: string, params?: Record<string, unknown>) => void;
}

/** Mirror to GA4 when a measurement ID is configured; otherwise a no-op. */
function gtagEvent(name: string, params: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const gtag = (window as GtagWindow).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
