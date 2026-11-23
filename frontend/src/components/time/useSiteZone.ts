"use client";

import { useSyncExternalStore } from "react";
import { DEFAULT_ZONE, readZoneCookie, type SiteZone } from "@/lib/time/site-zone";

const noop = () => () => {};

/**
 * The visitor's site zone (JST, or IST for visitors in India). JST on the
 * server and during hydration, so server HTML and the first client render
 * agree; the real value applies right after.
 */
export function useSiteZone(): SiteZone {
  return useSyncExternalStore(noop, readZoneCookie, () => DEFAULT_ZONE);
}
