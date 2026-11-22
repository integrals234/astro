import type { Metadata } from "next";
import PublicPageShell from "@/components/layout/PublicPageShell";
import Breadcrumbs from "@/components/education/Breadcrumbs";
import JsonLd from "@/components/seo/JsonLd";
import MoonSignFinder from "@/components/daily/MoonSignFinder";
import HoroscopeTabStrip from "@/components/horoscope/HoroscopeTabStrip";
import { DailyMoonCard, NakshatraTable, SignTable } from "@/components/daily/DailyParts";
import { dailyCopy } from "@/lib/daily/daily-copy";
import { todayReport, tomorrowReport } from "@/lib/daily/today";
import { APP_LANGUAGES, parseAppLanguage } from "@/lib/i18n/language";
import { uiText } from "@/lib/education/i18n/ui";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { breadcrumbSchema, organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { chartFormCopy } from "@/lib/chart-i18n";
import { SIGNS } from "@/lib/sky/quick-sky";
import { tr } from "@/lib/sky/entity-links";

/**
 * 今日の運勢 — the day read from the Moon: its sign and nakshatra (宿)
 * today, a reading for each Moon sign (Chandra gochar) and each birth
 * nakshatra (tara bala; in Japanese also the 宿曜 日運). Computed, not
 * written; rebuilt hourly so it turns over at midnight Japan time.
 */
export const revalidate = 3600;
export function generateStaticParams() {
  return APP_LANGUAGES.map((locale) => ({ locale }));
}

type Params = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
  const copy = dailyCopy[language];
  return buildPageMetadata({ language, path: "/horoscope/today", title: copy.metaTitle, description: copy.metaDescription });
}

export default async function TodayPage({ params }: Params) {
  const { locale } = await params;
  const language = parseAppLanguage(locale);
  const copy = dailyCopy[language];
  const t = chartFormCopy[language];
  const today = todayReport();
  const tomorrow = tomorrowReport();

  return (
    <>
      <JsonLd
        nodes={[
          organizationSchema(language),
          websiteSchema(language),
          breadcrumbSchema(language, [
            { name: uiText("home", language), path: "/" },
            { name: uiText("horoscopeHeading", language), path: "/horoscope" },
            { name: copy.title, path: "/horoscope/today" },
          ]),
        ]}
      />
      <PublicPageShell>
        <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-8 md:py-10">
          <Breadcrumbs
            language={language}
            label="Breadcrumb"
            crumbs={[
              { name: uiText("home", language), path: "/" },
              { name: uiText("horoscopeHeading", language), path: "/horoscope" },
              { name: copy.title, path: "/horoscope/today" },
            ]}
          />
          <header className="max-w-3xl">
            <h1 className="font-header text-[length:var(--step-4)] leading-[1.15] tracking-tight text-ink">{copy.title}</h1>
            <p className="mt-4 leading-[1.9] text-text">{copy.lead}</p>
          </header>

          {/* Same tabs as /horoscope: today here, the periods beside it. */}
          <div className="mt-8">
            <HoroscopeTabStrip active="today" sublabels={{ today: copy.moonInSign(tr(t.signs, SIGNS[today.sign])) }} />
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <DailyMoonCard report={today} lang={language} />
            <MoonSignFinder />
          </div>

          <section aria-labelledby="by-sign" className="mt-12">
            <h2 id="by-sign" className="font-header text-[length:var(--step-3)] text-ink">
              {copy.signTableTitle}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-[1.85] text-text-muted">{copy.signTableLead}</p>
            <div className="mt-5">
              <SignTable report={today} lang={language} />
            </div>
          </section>

          <section aria-labelledby="by-nak" className="mt-12">
            <h2 id="by-nak" className="font-header text-[length:var(--step-3)] text-ink">
              {copy.taraTableTitle}
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-[1.85] text-text-muted">{copy.taraTableLead}</p>
            <div className="mt-5">
              <NakshatraTable report={today} lang={language} />
            </div>
          </section>

          <section aria-labelledby="tomorrow" className="mt-12 chart-card p-5 sm:p-6">
            <h2 id="tomorrow" className="font-header text-[length:var(--step-1)] text-ink">
              {copy.tomorrow}
            </h2>
            <p className="mt-2 text-sm text-text">
              {copy.moonInSign(tr(t.signs, SIGNS[tomorrow.sign]))} ·{" "}
              {language === "ja" ? `${tomorrow.main.kanji}（${tr(t.nakshatras, tomorrow.main.nakshatra)}）` : tr(t.nakshatras, tomorrow.main.nakshatra)}
            </p>
          </section>

          <p className="mt-8 max-w-3xl text-[11px] leading-relaxed text-text-muted">{copy.methodNote}</p>
        </div>
      </PublicPageShell>
    </>
  );
}
