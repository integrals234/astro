"use client";

import { Check } from "lucide-react";
import type { CourseChapter, CourseLanguage } from "@/lib/vedic-course/types";
import { uiString } from "@/lib/vedic-course/i18n/ui";
import { t } from "@/lib/vedic-course/utils";

interface ChapterStepperProps {
  chapters: CourseChapter[];
  currentChapter: number;
  completedSlides: string[];
  lang: CourseLanguage;
  onSelectChapter: (index: number) => void;
}

export default function ChapterStepper({
  chapters,
  currentChapter,
  completedSlides,
  lang,
  onSelectChapter,
}: ChapterStepperProps) {
  return (
    <div className="grid gap-2 sm:gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {chapters.map((chapter, index) => {
        const Icon = chapter.icon;
        const isActive = index === currentChapter;
        const isComplete = chapter.steps.every((step) =>
          completedSlides.includes(step.id),
        );
        const isLocked =
          index > 0 &&
          !chapters[index - 1].steps.every((step) =>
            completedSlides.includes(step.id),
          );

        return (
          <button
            key={chapter.id}
            type="button"
            disabled={isLocked}
            onClick={() => !isLocked && onSelectChapter(index)}
            className={`relative rounded-2xl border p-3 sm:p-4 text-left transition-all duration-300 ${
              isActive
                ? "border-shell-accent/40 bg-shell-accent-soft shadow-[0_0_24px_rgba(212,165,116,0.15)]"
                : isComplete
                  ? "border-emerald-500/25 bg-emerald-500/5 hover:border-emerald-500/40"
                  : isLocked
                    ? "border-shell-border bg-shell-bg/40 opacity-50 cursor-not-allowed"
                    : "border-shell-border bg-shell-elevated/40 hover:border-shell-accent/20"
            }`}
          >
            <div className="flex items-start gap-2 sm:gap-3">
              <div
                className={`flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-xl border ${
                  isActive
                    ? "border-shell-accent/30 bg-shell-accent/20"
                    : isComplete
                      ? "border-emerald-500/30 bg-emerald-500/10"
                      : "border-shell-border bg-shell-bg"
                }`}
              >
                {isComplete ? (
                  <Check size={16} className="text-emerald-300" />
                ) : (
                  <Icon
                    size={16}
                    className={isActive ? "text-shell-accent" : "text-shell-muted"}
                  />
                )}
              </div>
              <div className="min-w-0">
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-shell-muted">
                  {uiString("chapter", lang, chapter.number)}
                </p>
                <p className="mt-0.5 text-xs sm:text-sm font-medium text-shell-warm line-clamp-2 leading-snug">
                  {t(chapter.title, lang)}
                </p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
