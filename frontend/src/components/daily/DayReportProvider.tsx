"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useSiteZone } from "@/components/time/useSiteZone";
import { todayReport, tomorrowReport, type DayReport } from "@/lib/daily/today";
import { ZONE_OFFSET, type SiteZone } from "@/lib/time/site-zone";

interface DayState {
  today: DayReport;
  tomorrow?: DayReport;
  zone: SiteZone;
}

const Ctx = createContext<DayState | null>(null);

/**
 * The day the daily pieces show. The server renders the JST day (cached
 * pages, crawlers); in the browser it is recomputed for the visitor's site
 * zone — IST for visitors in India — and for the current moment, so a page
 * cached an hour ago still shows the right "today".
 */
export function DayReportProvider({
  initial,
  initialTomorrow,
  children,
}: {
  initial: DayReport;
  initialTomorrow?: DayReport;
  children: React.ReactNode;
}) {
  const zone = useSiteZone();
  const [state, setState] = useState<DayState>({ today: initial, tomorrow: initialTomorrow, zone: "Asia/Tokyo" });

  useEffect(() => {
    const now = new Date();
    const offset = ZONE_OFFSET[zone];
    // eslint-disable-next-line react-hooks/set-state-in-effect -- recompute in the visitor's zone after hydration
    setState({ today: todayReport(now, offset), tomorrow: initialTomorrow ? tomorrowReport(now, offset) : undefined, zone });
  }, [zone, initialTomorrow]);

  return <Ctx.Provider value={state}>{children}</Ctx.Provider>;
}

export function useDayReport(): DayState {
  const v = useContext(Ctx);
  if (!v) throw new Error("useDayReport needs a DayReportProvider");
  return v;
}
