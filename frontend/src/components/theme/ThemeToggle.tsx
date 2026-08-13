"use client";

import { useRef, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { useThemeTransition } from "@/hooks/useThemeTransition";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { settingsCopy } from "@/lib/i18n/settings";

const OPTIONS = [
  { value: "light", label: "light", icon: Sun },
  { value: "dark", label: "dark", icon: Moon },
  { value: "system", label: "system", icon: Monitor },
] as const;

const subscribeToClient = () => () => {};

/**
 * Three-state theme control for the header (Phase 1.3).
 *
 * The only control used to live in /settings, which is where an animation like
 * the circular wipe never gets seen. `/settings` stays the canonical control —
 * both call the same `useThemeTransition` hook.
 *
 * Keeps the pre-mount skeleton: `theme` is unknowable on the server, and
 * rendering a guess produces a hydration mismatch on every page load.
 */
export default function ThemeToggle({
  iconOnly = false,
}: {
  iconOnly?: boolean;
}) {
  const { theme } = useTheme();
  const toggleTheme = useThemeTransition();
  const { language } = useLanguage();
  const copy = settingsCopy[language].appearance;
  const containerRef = useRef<HTMLDivElement>(null);

  const mounted = useSyncExternalStore(
    subscribeToClient,
    () => true,
    () => false,
  );

  if (!mounted) {
    return (
      <div
        className={`animate-pulse rounded-md border border-border bg-washi-elevated ${
          iconOnly ? "h-10 w-10" : "h-9 w-[104px]"
        }`}
        aria-hidden
      />
    );
  }

  const active = theme ?? "system";

  return (
    <div
      ref={containerRef}
      role="group"
      aria-label={copy.title}
      className="washi-segmented gap-0.5 p-0.5"
    >
      {OPTIONS.map((option) => {
        const Icon = option.icon;
        const isActive = active === option.value;

        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            title={copy[option.label]}
            onClick={(event) => toggleTheme(option.value, event.currentTarget)}
            className={`tactile flex items-center justify-center rounded-sm px-2 py-1.5 transition-colors ${
              isActive
                ? "washi-segment-selected"
                : "washi-segment-unselected hover:text-ink"
            }`}
          >
            <Icon size={14} aria-hidden />
            <span className="sr-only">{copy[option.label]}</span>
          </button>
        );
      })}
    </div>
  );
}
