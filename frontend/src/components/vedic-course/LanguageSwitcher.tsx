import type { CourseLanguage } from "@/lib/vedic-course/types";
import { COURSE_LANGUAGES } from "@/lib/vedic-course/utils";
import { courseUi } from "@/lib/vedic-course/i18n/ui";
import { Languages } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface LanguageSwitcherProps {
  lang: CourseLanguage;
  onChange: (lang: CourseLanguage) => void;
}

export default function LanguageSwitcher({ lang, onChange }: LanguageSwitcherProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = COURSE_LANGUAGES.find((l) => l.code === lang);

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={courseUi.language[lang]}
        aria-expanded={open}
        className="flex h-8 w-8 items-center justify-center rounded-lg border border-shell-border/80 bg-shell-bg/80 text-shell-muted backdrop-blur-sm transition-colors hover:border-shell-accent/30 hover:text-shell-warm sm:h-9 sm:w-auto sm:gap-1.5 sm:px-2.5"
      >
        <Languages size={14} className="text-shell-accent" />
        <span className="hidden sm:inline text-[10px] font-bold uppercase tracking-wider">
          {current?.code.toUpperCase()}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1.5 min-w-[9rem] overflow-hidden rounded-xl border border-shell-border bg-shell-elevated/95 py-1 shadow-xl backdrop-blur-md">
          {COURSE_LANGUAGES.map((option) => (
            <button
              key={option.code}
              type="button"
              onClick={() => {
                onChange(option.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-xs transition-colors ${
                option.code === lang
                  ? "bg-shell-accent-soft text-shell-warm"
                  : "text-shell-muted hover:bg-shell-bg hover:text-shell-warm"
              }`}
            >
              <span className="font-medium">{option.native}</span>
              <span className="text-[10px] uppercase tracking-wider opacity-60">
                {option.code}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
