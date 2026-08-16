import "server-only";
import { cookies } from "next/headers";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";
import type { AppLanguage } from "@/lib/i18n/language";

/**
 * Server-side funnel recording.
 *
 * The client events in `events.ts` are good enough for engagement, but they are
 * ad-blockable and lossy — which is unacceptable for the one number the
 * business runs on. Anything that decides spend, or that answers "did this page
 * produce a booking", is written here instead.
 *
 * Reads the `jl_anon` cookie set in middleware so a conversion can be traced
 * back across the sign-in boundary to the session that started it.
 */
export const ANON_COOKIE = "jl_anon";

/** Money events only. Engagement noise stays client-side. */
export type ConversionEvent =
  | "inquiry_submitted"
  | "inquiry_failed"
  | "booking_started"
  | "checkout_started"
  | "checkout_completed";

export async function recordConversion(
  event: ConversionEvent,
  {
    locale,
    path,
    props,
  }: {
    locale: AppLanguage;
    path: string;
    props?: Record<string, unknown>;
  },
): Promise<void> {
  try {
    const [cookieStore, session] = await Promise.all([cookies(), auth()]);
    const anonId = cookieStore.get(ANON_COOKIE)?.value;

    await prisma.funnelEvent.create({
      data: {
        // Middleware sets the cookie on every HTML response, so a missing value
        // means a non-browser client. Recorded rather than dropped: an inquiry
        // is worth logging even when it cannot be attributed.
        anonId: anonId ?? "unattributed",
        userId: session.userId ?? null,
        event,
        locale,
        path,
        props: props ? (props as object) : undefined,
      },
    });
  } catch (error) {
    // Never let instrumentation fail the action it is instrumenting — a lost
    // analytics row is cheap, a lost inquiry is not.
    console.error("[conversion] failed to record", event, error);
  }
}
