"use client";

import { useUser } from "@clerk/nextjs";
import { Check, Languages } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { APP_LANGUAGE_OPTIONS } from "@/lib/i18n/language";
import { settingsCopy } from "@/lib/i18n/settings";

export default function LanguageSetting() {
  const { language, setLanguage } = useLanguage();
  const { isSignedIn } = useUser();
  const copy = settingsCopy[language].language;

  return (
    <section
      id="language"
      className="washi-card scroll-mt-6 overflow-hidden"
    >
      <div className="border-b border-border px-6 py-4">
        <div className="flex items-center gap-2">
          <Languages size={15} className="text-moss" />
          <h3 className="washi-eyebrow-muted">
            {copy.title}
          </h3>
        </div>
        <p className="mt-1 text-xs text-text-muted">{copy.description}</p>
      </div>

      <div className="grid gap-2 p-6 sm:grid-cols-2">
        {APP_LANGUAGE_OPTIONS.map((option) => {
          const active = language === option.code;
          return (
            <button
              key={option.code}
              type="button"
              onClick={() => setLanguage(option.code)}
              aria-pressed={active}
              className={`flex items-center justify-between rounded-md border px-4 py-3 text-left font-body transition-colors ${
                active
                  ? "border-terracotta/60 bg-neutral-tag text-ink"
                  : "border-border bg-washi text-text-muted hover:text-ink"
              }`}
            >
              <span>
                <span className="block text-sm font-medium">{option.nativeName}</span>
                {option.nativeName !== option.englishName && (
                  <span className="mt-0.5 block text-[10px] uppercase tracking-wider opacity-60">
                    {option.englishName}
                  </span>
                )}
              </span>
              {active && <Check size={16} className="text-terracotta" />}
            </button>
          );
        })}
      </div>

      <p className="px-6 pb-5 text-xs text-text-muted">
        {isSignedIn ? copy.signedIn : copy.signedOut}
      </p>
    </section>
  );
}
