"use client";

import { useSyncExternalStore } from "react";

/*
 * The page a visitor just tapped, until it is on screen.
 *
 * App Router keeps the current page up while the next one loads, which is
 * right, but on a slow phone it read as "my tap did nothing". Navs read this
 * to mark the tapped item active immediately, and <NavProgress> shows a thin
 * bar if the wait gets long. Holds the locale-stripped path; cleared when the
 * pathname changes (or after a long timeout, so it can never stick).
 */
let pending: string | null = null;
let timer: ReturnType<typeof setTimeout> | undefined;
const listeners = new Set<() => void>();

export function setPendingNav(path: string | null) {
  if (pending === path) return;
  pending = path;
  clearTimeout(timer);
  if (path) timer = setTimeout(() => setPendingNav(null), 15000);
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function usePendingNav(): string | null {
  return useSyncExternalStore(subscribe, () => pending, () => null);
}
