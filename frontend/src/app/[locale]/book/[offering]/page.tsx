import type { Metadata } from "next";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import Link from "@/components/i18n/LocaleLink";
import PublicPageShell from "@/components/layout/PublicPageShell";
import Breadcrumbs from "@/components/education/Breadcrumbs";
import { uiText } from "@/lib/education";
import { APP_LANGUAGES, parseAppLanguage } from "@/lib/i18n/language";
import { getSharedCopy } from "@/lib/i18n/shared";
import { getAppraisalContent } from "@/lib/personal-appraisals/i18n/content";
import { buildPageMetadata } from "@/lib/seo/metadata";
import {
  BOOKABLE_OFFERING_IDS,
  BOOKING_CATALOG,
  calBookingUrl,
  parseOfferingId,
} from "@/lib/booking/catalog";
import { calEventExists } from "@/lib/booking/availability";
import { bookingCopy } from "@/lib/booking/i18n";

const BookingEmbed = dynamic(() => import("@/components/booking/BookingEmbed"));

type Params = { params: Promise<{ locale: string; offering: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return APP_LANGUAGES.flatMap((locale) =>
    BOOKABLE_OFFERING_IDS.map((offering) => ({ locale, offering })),
  );
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, offering } = await params;
  const language = parseAppLanguage(locale);
  const id = parseOfferingId(offering);
  if (!id) return {};

  const copy = bookingCopy[language];
  const content = getAppraisalContent(language);
  const item = content.offerings.items.find(
    (o) => o.id === BOOKING_CATALOG[id].contentOfferingId,
  );

  // `noindex`: a transaction surface with five near-identical variants is
  // exactly the thin-content pattern that should never reach the index. The
  // page it converts from, /personal-appraisals, is the indexable one.
  return buildPageMetadata({
    language,
    path: `/book/${id}`,
    title: item?.title ?? copy.title,
    description: copy.metaDescription,
    noindex: true,
  });
}

export default async function BookOfferingPage({ params }: Params) {
  const { locale, offering } = await params;
  const language = parseAppLanguage(locale);
  const id = parseOfferingId(offering);
  if (!id) notFound();

  const entry = BOOKING_CATALOG[id];
  const copy = bookingCopy[language];
  const nav = getSharedCopy(language).navigation;
  const content = getAppraisalContent(language);
  const item = content.offerings.items.find(
    (o) => o.id === entry.contentOfferingId,
  );

  // An async offering has no slot to pick, and a live one whose Cal event type
  // has not been created yet must not render a dead embed.
  const bookable =
    entry.kind === "live" &&
    entry.calEventSlug !== null &&
    (await calEventExists(entry.calEventSlug));

  const crumbs = [
    { name: uiText("home", language), path: "/" },
    { name: nav.appraisals, path: "/personal-appraisals" },
    { name: item?.title ?? copy.title, path: `/book/${id}` },
  ];

  return (
    <PublicPageShell>
      <div className="mx-auto w-full max-w-3xl px-6 py-12">
        <Breadcrumbs crumbs={crumbs} language={language} label={copy.title} />

        <p className="washi-eyebrow washi-eyebrow-lead mb-4">{copy.eyebrow}</p>
        <h1 className="font-header text-[length:var(--step-3)] tracking-tight text-ink">
          {item?.title ?? copy.title}
        </h1>
        {item ? (
          <p className="washi-measure mt-4 font-body text-text">
            {item.description}
          </p>
        ) : null}

        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="washi-card p-4">
            <dt className="washi-eyebrow-muted mb-1">{copy.durationLabel}</dt>
            <dd className="font-body text-ink">
              {entry.durationMinutes
                ? copy.minutes(entry.durationMinutes)
                : copy.durationVaries}
            </dd>
          </div>
          <div className="washi-card p-4">
            <dt className="washi-eyebrow-muted mb-1">{copy.priceLabel}</dt>
            <dd className="font-body text-ink">{copy.priceByInquiry}</dd>
          </div>
        </dl>

        {item ? (
          <ul className="mt-8 space-y-2">
            {item.includes.map((line) => (
              <li key={line} className="font-body text-text">
                — {line}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="washi-glyph-divider" aria-hidden />

        {bookable && entry.calEventSlug ? (
          <section aria-labelledby="pick-a-time">
            <h2
              id="pick-a-time"
              className="font-header text-[length:var(--step-1)] text-ink"
            >
              {copy.pickATime}
            </h2>
            <p className="washi-measure mt-2 mb-6 font-body text-sm text-text-muted">
              {copy.timezoneNote}
            </p>
            <BookingEmbed
              src={calBookingUrl(entry.calEventSlug, language, { embed: true })}
              fallbackHref={calBookingUrl(entry.calEventSlug, language, {
                embed: false,
              })}
              offering={id}
              language={language}
            />
          </section>
        ) : (
          <section aria-labelledby="request">
            <h2
              id="request"
              className="font-header text-[length:var(--step-1)] text-ink"
            >
              {copy.requestHeading}
            </h2>
            <p className="washi-measure mt-2 font-body text-text">
              {entry.kind === "async"
                ? copy.asyncExplainer
                : copy.unavailableExplainer}
            </p>
            <Link
              href="/personal-appraisals#inquiry"
              className="washi-btn-primary mt-6 inline-block"
            >
              {copy.requestCta}
            </Link>
          </section>
        )}

        <p className="washi-measure mt-10 text-xs text-text-muted">
          {copy.paymentNote}
        </p>
      </div>
    </PublicPageShell>
  );
}
