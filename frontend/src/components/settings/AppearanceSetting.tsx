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
    <section className="rounded-3xl border border-shell-border bg-shell-elevated/60 overflow-hidden">
      <div className="px-6 py-4 border-b border-shell-border">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.24em] text-shell-muted">
          {copy.title}
        </h3>
        <p className="text-xs text-shell-muted mt-1">
          {copy.description}
        </p>
      </div>

      <div className="p-6 space-y-4">
        {!mounted ? (
          <div className="h-11 rounded-xl bg-shell-bg/50 border border-shell-border animate-pulse" />
        ) : (
          <div className="grid grid-cols-3 gap-2 p-1 rounded-2xl border border-shell-border bg-shell-bg/60">
            {options.map((option) => {
              const Icon = option.icon;
              const isActive = active === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setTheme(option.value)}
                  className={`flex flex-col items-center justify-center gap-1.5 rounded-xl px-2 py-3 text-[10px] font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? "bg-shell-accent-soft text-shell-warm shadow-[0_0_20px_rgba(212,165,116,0.12)] border border-shell-accent/25"
                      : "text-shell-muted hover:text-shell-warm hover:bg-white/[0.03] border border-transparent"
                  }`}
                >
                  <Icon
                    size={16}
                    className={isActive ? "text-shell-accent" : "text-shell-muted"}
                  />
                  {copy[option.label]}
                </button>
              );
            })}
          </div>
        )}

        <p className="text-xs text-shell-muted">
          {copy.currentlyUsing}:{" "}
          <span className="text-shell-accent font-medium">
            {mounted ? resolvedLabel : "…"}
          </span>
        </p>
      </div>
    </section>
  );
}
