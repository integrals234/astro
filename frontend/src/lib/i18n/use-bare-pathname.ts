"use client";

import { usePathname } from "next/navigation";
import { stripLocale } from "@/lib/i18n/routing";

/**
 * The current path with any locale prefix removed (Phase 3.2).
 *
 * Nav active-state and route matching compare against unprefixed paths like
 * `/chart`. `usePathname()` returns the browser path, which for a non-default
 * locale is `/en/chart` — so every comparison would quietly fail and no nav
 * item would ever highlight outside Japanese.
 */
export function useBarePathname(): string {
  return stripLocale(usePathname()).pathname;
}
