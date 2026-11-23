import { todayReport } from "@/lib/daily/today";
import type { AppLanguage } from "@/lib/i18n/language";
import { DayReportProvider } from "@/components/daily/DayReportProvider";
import { NakshatraDailyView, SignDailyView } from "@/components/daily/EntityDailyViews";

/**
 * "Today" on a sign page (the Moon's transit from that Moon sign) or a
 * nakshatra page (today's tara; in Japanese the 宿曜 日運). The server
 * renders the JST day; the browser switches to the visitor's site zone.
 * The pages revalidate hourly.
 */
export function SignDaily({ engineSign, lang }: { engineSign: string; lang: AppLanguage }) {
  return (
    <DayReportProvider initial={todayReport()}>
      <SignDailyView engineSign={engineSign} lang={lang} />
    </DayReportProvider>
  );
}

export function NakshatraDaily({ slug, lang }: { slug: string; lang: AppLanguage }) {
  return (
    <DayReportProvider initial={todayReport()}>
      <NakshatraDailyView slug={slug} lang={lang} />
    </DayReportProvider>
  );
}
