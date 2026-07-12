"use client";

import { useCallback, useMemo } from "react";

export type HapticStrength = "light" | "medium" | "success" | "selection";

const PATTERNS: Record<HapticStrength, number | number[]> = {
  light: 8,
  selection: 6,
  medium: 14,
  success: [10, 40, 12],
};

function canVibrate(): boolean {
  if (typeof window === "undefined") return false;
  if (!("vibrate" in navigator)) return false;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }
  // Prefer real touch contexts — skip mouse desktop
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const touch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  return coarse || touch;
}

/**
 * Soft tactile feedback for mobile taps.
 * No-ops on desktop / reduced-motion / unsupported browsers.
 */
export function haptic(strength: HapticStrength = "light") {
  if (!canVibrate()) return;
  try {
    navigator.vibrate(PATTERNS[strength]);
  } catch {
    // ignore
  }
}

export function useHaptic() {
  const trigger = useCallback((strength: HapticStrength = "light") => {
    haptic(strength);
  }, []);

  return useMemo(
    () => ({
      haptic: trigger,
      light: () => trigger("light"),
      medium: () => trigger("medium"),
      selection: () => trigger("selection"),
      success: () => trigger("success"),
    }),
    [trigger],
  );
}
