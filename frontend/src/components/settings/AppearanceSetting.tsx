"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { settingsCopy } from "@/lib/i18n/settings";

const options = [
  { value: "light", label: "light", icon: Sun },
  { value: "dark", label: "dark", icon: Moon },
  { value: "system", label: "system", icon: Monitor },
] as const;

export default function AppearanceSetting() {
  const { language } = useLanguage();
  const copy = settingsCopy[language].appearance;
  const { theme, setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  const active = theme ?? "system";
  const resolvedLabel =
    active === "system"
      ? `${copy.system} (${resolvedTheme === "dark" ? copy.dark : copy.light})`
      : active === "dark"
        ? copy.dark
        : copy.light;

  return (
    <section className="washi-card overflow-hidden">
      <div className="px-6 py-4 border-b border-border">
        <h3 className="washi-eyebrow-muted">
          {copy.title}
        </h3>
        <p className="text-xs text-text-muted mt-1">
          {copy.description}
        </p>
      </div>

      <div className="p-6 space-y-4">
        {!mounted ? (
          <div className="h-11 rounded-md bg-washi border border-border animate-pulse" />
        ) : (
          <div className="grid grid-cols-3 gap-1 p-1 rounded-md border border-border bg-washi-elevated">
            {options.map((option) => {
              const Icon = option.icon;
              const isActive = active === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setTheme(option.value)}
                  className={`flex flex-col items-center justify-center gap-1.5 px-2 py-3 text-[10px] uppercase tracking-wider transition-colors ${
                    isActive
                      ? "washi-segment-selected"
                      : "washi-segment-unselected hover:text-ink"
                  }`}
                >
                  <Icon
                    size={16}
                    className={isActive ? "text-ink" : "text-text-muted"}
                  />
                  {copy[option.label]}
                </button>
              );
            })}
          </div>
        )}

        <p className="text-xs text-text-muted">
          {copy.currentlyUsing}:{" "}
          <span className="text-terracotta font-medium">
            {mounted ? resolvedLabel : "…"}
          </span>
        </p>
      </div>
    </section>
  );
}
