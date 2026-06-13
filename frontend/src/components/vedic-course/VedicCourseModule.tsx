"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Trophy } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";
import { saveVedicCourseProgress } from "@/app/actions/vedic-course";
import { ALL_STEP_IDS, VEDIC_COURSE_CHAPTERS } from "@/lib/vedic-course/content";
import type { CourseLanguage, CourseProgress } from "@/lib/vedic-course/types";
import { isInteractiveStep } from "@/lib/vedic-course/step-utils";
import { uiString } from "@/lib/vedic-course/i18n/ui";
import { computeProgressPercent, t } from "@/lib/vedic-course/utils";
import CourseProgressBar from "./CourseProgressBar";
import ChapterStepper from "./ChapterStepper";
import StepRenderer from "./StepRenderer";
import LanguageSwitcher from "./LanguageSwitcher";

const LANG_STORAGE_KEY = "vedic-course-lang";

interface VedicCourseModuleProps {
  initialProgress: CourseProgress;
}

export default function VedicCourseModule({ initialProgress }: VedicCourseModuleProps) {
  const [lang, setLang] = useState<CourseLanguage>("ja");
  const [currentChapter, setCurrentChapter] = useState(initialProgress.currentChapter);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSlides, setCompletedSlides] = useState<string[]>(
    initialProgress.completedSlides,
  );
  const [interactivePassed, setInteractivePassed] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(LANG_STORAGE_KEY) as CourseLanguage | null;
    if (saved && ["en", "hi", "ja", "ko"].includes(saved)) {
      setLang(saved);
    }
  }, []);

  const handleLangChange = (next: CourseLanguage) => {
    setLang(next);
    localStorage.setItem(LANG_STORAGE_KEY, next);
  };

  const chapter = VEDIC_COURSE_CHAPTERS[currentChapter];
  const step = chapter?.steps[currentStepIndex];
  const isInteractive = step ? isInteractiveStep(step) : false;
  const totalSteps = ALL_STEP_IDS.length;
  const progressPercent = computeProgressPercent(completedSlides, totalSteps);
  const courseComplete = completedSlides.length >= totalSteps;

  const contentSlideNumber = useMemo(() => {
    if (!chapter || !step || step.kind !== "content") return 0;
    return chapter.steps.filter(
      (s) => s.kind === "content" && chapter.steps.indexOf(s) <= currentStepIndex,
    ).length;
  }, [chapter, step, currentStepIndex]);

  const contentSlidesInChapter = useMemo(
    () => chapter?.steps.filter((s) => s.kind === "content").length ?? 0,
    [chapter],
  );

  const debouncedSave = useDebouncedCallback(
    (progress: CourseProgress) => {
      void saveVedicCourseProgress(progress);
    },
    400,
  );

  const persistProgress = useCallback(
    (chapterIndex: number, slides: string[]) => {
      debouncedSave({ currentChapter: chapterIndex, completedSlides: slides });
    },
    [debouncedSave],
  );

  const markStepComplete = useCallback(
    (stepId: string) => {
      setCompletedSlides((prev) => {
        if (prev.includes(stepId)) return prev;
        const next = [...prev, stepId];
        persistProgress(currentChapter, next);
        return next;
      });
    },
    [currentChapter, persistProgress],
  );

  useEffect(() => {
    if (!step) return;
    if (isInteractive) {
      setInteractivePassed(completedSlides.includes(step.id));
    } else {
      setInteractivePassed(true);
    }
  }, [step, completedSlides, isInteractive]);

  const resumeFromProgress = useCallback(() => {
    const savedChapter = Math.min(
      initialProgress.currentChapter,
      VEDIC_COURSE_CHAPTERS.length - 1,
    );
    const ch = VEDIC_COURSE_CHAPTERS[savedChapter];
    const firstIncomplete = ch.steps.findIndex(
      (s) => !initialProgress.completedSlides.includes(s.id),
    );
    setCurrentChapter(savedChapter);
    setCurrentStepIndex(firstIncomplete >= 0 ? firstIncomplete : ch.steps.length - 1);
  }, [initialProgress]);

  useEffect(() => {
    resumeFromProgress();
  }, [resumeFromProgress]);

  const canGoNext = isInteractive ? interactivePassed : true;
  const isLastStepInChapter = currentStepIndex >= (chapter?.steps.length ?? 1) - 1;
  const isLastChapter = currentChapter >= VEDIC_COURSE_CHAPTERS.length - 1;

  const handleNext = () => {
    if (!step || !canGoNext) return;
    if (!isInteractive) markStepComplete(step.id);
    if (!isLastStepInChapter) {
      setCurrentStepIndex((i) => i + 1);
      return;
    }
    if (!isLastChapter) {
      const nextChapter = currentChapter + 1;
      setCurrentChapter(nextChapter);
      setCurrentStepIndex(0);
      persistProgress(nextChapter, completedSlides);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex((i) => i - 1);
      return;
    }
    if (currentChapter > 0) {
      const prevChapter = currentChapter - 1;
      setCurrentChapter(prevChapter);
      setCurrentStepIndex(VEDIC_COURSE_CHAPTERS[prevChapter].steps.length - 1);
    }
  };

  const handleInteractiveComplete = () => {
    if (step) {
      markStepComplete(step.id);
      setInteractivePassed(true);
    }
  };

  const handleSelectChapter = (index: number) => {
    setCurrentChapter(index);
    setCurrentStepIndex(0);
    persistProgress(index, completedSlides);
  };

  if (!chapter || !step) return null;

  return (
    <div className="relative space-y-5 sm:space-y-6">
      {/* Compact lang switch — top-right, minimal footprint on mobile */}
      <div className="absolute -top-1 right-0 z-30 sm:top-0">
        <LanguageSwitcher lang={lang} onChange={handleLangChange} />
      </div>

      <div className="pr-9 sm:pr-0">
        <CourseProgressBar percent={progressPercent} lang={lang} />
      </div>

      <ChapterStepper
        chapters={VEDIC_COURSE_CHAPTERS}
        currentChapter={currentChapter}
        completedSlides={completedSlides}
        lang={lang}
        onSelectChapter={handleSelectChapter}
      />

      {courseComplete ? (
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-shell-bg p-8 sm:p-10 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/15">
            <Trophy size={32} className="text-emerald-300" />
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-shell-warm">
            {uiString("courseComplete", lang)}
          </h3>
          <p className="mt-3 text-sm text-shell-muted max-w-lg mx-auto leading-relaxed">
            {uiString("completeBody", lang)}
          </p>
          <Link
            href="/dashboard"
            className="mt-8 inline-flex items-center gap-2 rounded-xl border border-shell-accent/30 bg-shell-accent/15 px-6 py-3 text-xs font-bold uppercase tracking-wider text-shell-accent transition-all hover:bg-shell-accent/25 hover:text-shell-warm"
          >
            {uiString("goDashboard", lang)}
            <ChevronRight size={16} />
          </Link>
        </div>
      ) : (
        <>
          <div className="rounded-3xl border border-shell-border bg-shell-elevated/30 px-5 py-4 sm:px-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-shell-muted">
              {uiString("chapter", lang, chapter.number)}
              {isInteractive && (
                <span className="ml-2 text-violet-300">· {uiString("game", lang)}</span>
              )}
            </p>
            <h2 className="mt-1 font-serif text-lg sm:text-xl text-shell-warm">
              {t(chapter.title, lang)}
            </h2>
            <p className="mt-1 text-sm text-shell-muted">{t(chapter.subtitle, lang)}</p>
          </div>

          <AnimatePresence mode="wait">
            <StepRenderer
              key={step.id}
              step={step}
              lang={lang}
              contentSlideNumber={contentSlideNumber}
              contentSlidesInChapter={contentSlidesInChapter}
              onInteractiveComplete={handleInteractiveComplete}
            />
          </AnimatePresence>

          <div className="flex items-center justify-between gap-3 pt-1">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentChapter === 0 && currentStepIndex === 0}
              className="inline-flex items-center gap-1.5 rounded-xl border border-shell-border bg-shell-elevated/60 px-4 py-2.5 sm:px-5 sm:py-3 text-xs font-bold uppercase tracking-wider text-shell-muted transition-colors hover:text-shell-warm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
              {uiString("back", lang)}
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!canGoNext}
              className="inline-flex items-center gap-1.5 rounded-xl border border-shell-accent/30 bg-shell-accent/15 px-5 py-2.5 sm:px-6 sm:py-3 text-xs font-bold uppercase tracking-wider text-shell-accent transition-all hover:bg-shell-accent/25 hover:text-shell-warm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-shell-accent/15"
            >
              {isLastStepInChapter && isLastChapter
                ? uiString("finish", lang)
                : uiString("next", lang)}
              <ChevronRight size={16} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
