import { DayReportProvider } from "@/components/daily/DayReportProvider";
import TodayShukuStripView from "@/components/sukuyo/TodayShukuStripView";
import { todayReport } from "@/lib/daily/today";
import type { Shuku } from "@/lib/sukuyo/shuku";

/** Today's 宿 strip: the JST day in the server HTML, the visitor's zone after hydration. */
export default function TodayShukuStrip({ self }: { self?: Shuku }) {
  return (
    <DayReportProvider initial={todayReport()}>
      <TodayShukuStripView self={self} />
    </DayReportProvider>
  );
}
