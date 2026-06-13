"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getHoroscopePeriods,
  type HoroscopePeriod,
  type HoroscopePeriodType,
} from "./horoscope-periods";

function periodKeysEqual(a: ReturnType<typeof getHoroscopePeriods>, b: ReturnType<typeof getHoroscopePeriods>) {
  return (
    a.weekly.key === b.weekly.key &&
    a.monthly.key === b.monthly.key &&
    a.yearly.key === b.yearly.key
  );
}

export function useHoroscopePeriods() {
  const [now, setNow] = useState(() => new Date());

  const periods = useMemo(() => getHoroscopePeriods(now), [now]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      const next = new Date();
      setNow((prev) => {
        const prevPeriods = getHoroscopePeriods(prev);
        const nextPeriods = getHoroscopePeriods(next);
        return periodKeysEqual(prevPeriods, nextPeriods) ? prev : next;
      });
    }, 60_000);

    return () => window.clearInterval(timer);
  }, []);

  return { now, periods };
}

export function getPeriodForType(
  periods: ReturnType<typeof getHoroscopePeriods>,
  type: HoroscopePeriodType
): HoroscopePeriod {
  return periods[type];
}
