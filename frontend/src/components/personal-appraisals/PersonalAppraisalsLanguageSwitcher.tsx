"use client";

import { APPRAISAL_LANGUAGES, type AppraisalLanguage } from "@/lib/personal-appraisals/types";
import { Languages } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface PersonalAppraisalsLanguageSwitcherProps {
  lang: AppraisalLanguage;
  onChange: (lang: AppraisalLanguage) => void;
  ariaLabel: string;
}

export default function PersonalAppraisalsLanguageSwitcher({
  lang,
  onChange,
  ariaLabel,
}: PersonalAppraisalsLanguageSwitcherProps) {
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

  const current = APPRAISAL_LANGUAGES.find((option) => option.code === lang);

  return (
    <div ref={rootRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={ariaLabel}
        aria-expanded={open}
        className="flex h-9 items-center justify-center gap-1.5 rounded-xl border border-shell-border/80 bg-shell-elevated/70 px-3 text-shell-muted backdrop-blur-sm transition-colors hover:border-shell-accent/30 hover:text-shell-warm"
      >
        <Languages size={14} className="text-shell-accent" />
        <span className="text-[10px] font-bold uppercase tracking-wider">
          {current?.code.toUpperCase()}
        </span>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-1.5 min-w-[9rem] overflow-hidden rounded-xl border border-shell-border bg-shell-elevated/95 py-1 shadow-xl backdrop-blur-md">
          {APPRAISAL_LANGUAGES.map((option) => (
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
