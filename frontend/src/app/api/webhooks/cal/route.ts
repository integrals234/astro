import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";
import { prisma } from "@/lib/prisma";
import { parseAppLanguage, type AppLanguage } from "@/lib/i18n/language";
import { BOOKABLE_OFFERING_IDS } from "@/lib/booking/catalog";

export const runtime = "nodejs";

/**
 * Cal.com booking webhook.
 *
 * Cal owns the calendar, but a booking that only exists inside Cal cannot be
 * joined to anything: not the locale it came from, not whether the person had
 * already built a chart, not the inquiry-to-session rate. Mirroring it here is
 * what makes the funnel answerable end to end.
 *
 * Cal signs payloads with HMAC-SHA256 over the raw body using the secret shown
 * when the webhook is created. Unlike the Clerk hook this does not use svix —
 * Cal has its own scheme.
 */
type CalPayload = {
  triggerEvent?: string;
  payload?: {
    uid?: string;
    bookingId?: number;
    title?: string;
    startTime?: string;
    type?: string;
    eventType?: { slug?: string };
    attendees?: Array<{ email?: string; name?: string; language?: { locale?: string } }>;
    responses?: { email?: { value?: string }; name?: { value?: string } };
    metadata?: Record<string, unknown>;
  };
};

function verifySignature(rawBody: string, signature: string | null): boolean {
  const secret = process.env.CAL_WEBHOOK_SECRET;
  // Fail closed. An unauthenticated writer here could forge bookings, and a
  // missing secret is a deployment mistake, not a reason to accept anything.
  if (!secret || !signature) return false;

  const expected = createHmac("sha256", secret).update(rawBody).digest("hex");
  const a = Buffer.from(expected, "utf8");
  const b = Buffer.from(signature, "utf8");
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

/** Cal sends the event-type slug; map it back to one of our offerings. */
function offeringFromSlug(slug: string | undefined): string {
  if (!slug) return "unknown";
  const match = BOOKABLE_OFFERING_IDS.find((id) => slug.startsWith(id));
  return match ?? slug.slice(0, 60);
}

function localeFrom(value: string | undefined): AppLanguage | null {
  if (!value) return null;
  const base = value.split("-")[0];
  return ["en", "hi", "ja", "ko"].includes(base) ? parseAppLanguage(base) : null;
}

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature =
    request.headers.get("x-cal-signature-256") ??
    request.headers.get("X-Cal-Signature-256");

  if (!verifySignature(rawBody, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let event: CalPayload;
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const data = event.payload;
  const uid = data?.uid;
  if (!uid) {
    // Nothing to key on. Acknowledged so Cal does not retry forever.
    return NextResponse.json({ ok: true, ignored: "no uid" });
  }

  const attendee = data?.attendees?.[0];
  const email =
    attendee?.email ?? data?.responses?.email?.value ?? "unknown@example.invalid";
  const name = attendee?.name ?? data?.responses?.name?.value ?? null;
  const locale = localeFrom(attendee?.language?.locale);
  const offeringId = offeringFromSlug(data?.eventType?.slug ?? data?.type);

  const status =
    event.triggerEvent === "BOOKING_CANCELLED"
      ? "cancelled"
      : event.triggerEvent === "BOOKING_COMPLETED"
        ? "completed"
        : "scheduled";

  try {
    // Cal retries on any non-2xx, and re-sends on reschedule. The upsert below
    // is idempotent, but the funnel event is not — so establish first-sighting
    // here and only count the conversion once. A booking counted twice corrupts
    // the single number the business is optimised against.
    const alreadySeen = await prisma.booking.findUnique({
      where: { calBookingUid: uid },
      select: { id: true },
    });

    await prisma.booking.upsert({
      where: { calBookingUid: uid },
      create: {
        calBookingUid: uid,
        email,
        name,
        offeringId,
        status,
        locale,
        scheduledAt: data?.startTime ? new Date(data.startTime) : null,
      },
      update: {
        status,
        scheduledAt: data?.startTime ? new Date(data.startTime) : undefined,
      },
    });

    if (!alreadySeen && status === "scheduled" && locale) {
      await prisma.funnelEvent.create({
        data: {
          anonId: "cal-webhook",
          event: "checkout_completed",
          locale,
          path: `/book/${offeringId}`,
          props: { offeringId, source: "cal.com" },
        },
      });
    }
  } catch (error) {
    console.error("[cal-webhook] persist failed", error);
    // 500 so Cal retries — a dropped booking is worse than a duplicate attempt,
    // and the upsert is idempotent on uid.
    return NextResponse.json({ error: "Persist failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
