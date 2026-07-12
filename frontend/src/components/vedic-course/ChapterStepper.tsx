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
            className={`washi-card relative p-3 sm:p-4 text-left transition-colors duration-300 ${
              isActive
                ? "border-terracotta"
                : isComplete
                  ? "hover:border-moss"
                  : isLocked
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:border-terracotta/40"
            }`}
          >
            <div className="flex items-start gap-2 sm:gap-3">
              <div className="washi-icon-chip h-8 w-8 sm:h-9 sm:w-9 shrink-0">
                {isComplete ? (
                  <Check size={16} className="text-moss" />
                ) : (
                  <Icon
                    size={16}
                    className={isActive ? "text-terracotta" : "text-moss"}
                  />
                )}
              </div>
              <div className="min-w-0">
                <p className="font-body text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.18em] sm:tracking-[0.2em] text-text-muted">
                  {uiString("chapter", lang, chapter.number)}
                </p>
                <p className="mt-0.5 font-body text-xs sm:text-sm font-semibold text-ink line-clamp-2 leading-snug">
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
