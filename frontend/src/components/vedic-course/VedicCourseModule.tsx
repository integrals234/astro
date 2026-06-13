"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe, Trophy } from "lucide-react";
import { useDebouncedCallback } from "use-debounce";
import { saveVedicCourseProgress } from "@/app/actions/vedic-course";
import { ALL_STEP_IDS, VEDIC_COURSE_CHAPTERS } from "@/lib/vedic-course/content";
import type { CourseLanguage, CourseProgress } from "@/lib/vedic-course/types";
import { computeProgressPercent, t } from "@/lib/vedic-course/utils";
import CourseProgressBar from "./CourseProgressBar";
import ChapterStepper from "./ChapterStepper";
import SlideCard from "./SlideCard";
import ChapterQuiz from "./ChapterQuiz";

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
  const [quizPassed, setQuizPassed] = useState(false);

  const chapter = VEDIC_COURSE_CHAPTERS[currentChapter];
  const step = chapter?.steps[currentStepIndex];
  const isQuiz = step?.kind === "quiz";
  const totalSteps = ALL_STEP_IDS.length;
  const progressPercent = computeProgressPercent(completedSlides, totalSteps);
  const courseComplete = completedSlides.length >= totalSteps;

  const contentSlideNumber = useMemo(() => {
    if (!chapter || !step || step.kind !== "content") return 0;
    return chapter.steps.filter((s) => s.kind === "content" && chapter.steps.indexOf(s) <= currentStepIndex).length;
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
    if (step.kind === "quiz") {
      setQuizPassed(completedSlides.includes(step.id));
    } else {
      setQuizPassed(true);
    }
  }, [step, completedSlides]);

  const resumeFromProgress = useCallback(() => {
    const savedChapter = Math.min(
      initialProgress.currentChapter,
      VEDIC_COURSE_CHAPTERS.length - 1,
    );
    const ch = VEDIC_COURSE_CHAPTERS[savedChapter];
    const firstIncomplete = ch.steps.findIndex((s) => !initialProgress.completedSlides.includes(s.id));
    setCurrentChapter(savedChapter);
    setCurrentStepIndex(firstIncomplete >= 0 ? firstIncomplete : ch.steps.length - 1);
  }, [initialProgress]);

  useEffect(() => {
    resumeFromProgress();
  }, [resumeFromProgress]);

  const canGoNext = isQuiz ? quizPassed : true;
  const isLastStepInChapter = currentStepIndex >= (chapter?.steps.length ?? 1) - 1;
  const isLastChapter = currentChapter >= VEDIC_COURSE_CHAPTERS.length - 1;

  const handleNext = () => {
    if (!step || !canGoNext) return;

    if (!isQuiz) {
      markStepComplete(step.id);
    }

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

  const handleQuizCorrect = () => {
    if (step?.kind === "quiz") {
      markStepComplete(step.id);
      setQuizPassed(true);
    }
  };

  const handleSelectChapter = (index: number) => {
    setCurrentChapter(index);
    setCurrentStepIndex(0);
    persistProgress(index, completedSlides);
  };

  const toggleLang = () => setLang((l) => (l === "en" ? "ja" : "en"));

  if (!chapter || !step) return null;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <CourseProgressBar percent={progressPercent} lang={lang} />
        <button
          type="button"
          onClick={toggleLang}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-shell-border bg-shell-elevated/60 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-shell-warm transition-colors hover:border-shell-accent/30 hover:bg-shell-accent-soft"
        >
          <Globe size={14} className="text-shell-accent" />
          {lang === "ja" ? "English" : "日本語"}
        </button>
      </div>

      <ChapterStepper
        chapters={VEDIC_COURSE_CHAPTERS}
        currentChapter={currentChapter}
        completedSlides={completedSlides}
        lang={lang}
        onSelectChapter={handleSelectChapter}
      />

      {courseComplete ? (
        <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-shell-bg p-10 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/15">
            <Trophy size={32} className="text-emerald-300" />
          </div>
          <h3 className="font-serif text-3xl text-shell-warm">
            {lang === "ja" ? "コース完了！" : "Course Complete!"}
          </h3>
          <p className="mt-3 text-sm text-shell-muted max-w-md mx-auto leading-relaxed">
            {lang === "ja"
              ? "9つの惑星、12の星座、ラグナ、そして出生図の読み方の基礎をマスターしました。ダッシュボードで自分のチャートを開いて、学んだ5ステップを試してみましょう。"
              : "You've mastered the nine Grahas, twelve Rashis, Lagna, and how to read your chart. Open your birth chart on the Dashboard and try the five-step method."}
          </p>
          <Link
            href="/dashboard"
            className="mt-8 inline-flex items-center gap-2 rounded-xl border border-shell-accent/30 bg-shell-accent/15 px-6 py-3 text-xs font-bold uppercase tracking-wider text-shell-accent transition-all hover:bg-shell-accent/25 hover:text-shell-warm"
          >
            {lang === "ja" ? "ダッシュボードへ" : "Go to Dashboard"}
            <ChevronRight size={16} />
          </Link>
        </div>
      ) : (
        <>
          <div className="rounded-3xl border border-shell-border bg-shell-elevated/30 px-6 py-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-shell-muted">
              {lang === "ja" ? `第${chapter.number}章` : `Chapter ${chapter.number}`}
            </p>
            <h2 className="mt-1 font-serif text-xl text-shell-warm">
              {t(chapter.title, lang)}
            </h2>
            <p className="mt-1 text-sm text-shell-muted">{t(chapter.subtitle, lang)}</p>
          </div>

          <AnimatePresence mode="wait">
            {step.kind === "content" ? (
              <SlideCard
                key={step.id}
                slide={step}
                lang={lang}
                slideIndex={contentSlideNumber - 1}
                totalSlides={contentSlidesInChapter}
              />
            ) : (
              <ChapterQuiz
                key={step.id}
                quiz={step}
                lang={lang}
                onCorrect={handleQuizCorrect}
              />
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between gap-4 pt-2">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentChapter === 0 && currentStepIndex === 0}
              className="inline-flex items-center gap-1.5 rounded-xl border border-shell-border bg-shell-elevated/60 px-5 py-3 text-xs font-bold uppercase tracking-wider text-shell-muted transition-colors hover:text-shell-warm disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
              {lang === "ja" ? "戻る" : "Back"}
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={!canGoNext}
              className="inline-flex items-center gap-1.5 rounded-xl border border-shell-accent/30 bg-shell-accent/15 px-6 py-3 text-xs font-bold uppercase tracking-wider text-shell-accent transition-all hover:bg-shell-accent/25 hover:text-shell-warm disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-shell-accent/15"
            >
              {isLastStepInChapter && isLastChapter
                ? lang === "ja"
                  ? "完了"
                  : "Finish"
                : lang === "ja"
                  ? "次へ"
                  : "Next"}
              <ChevronRight size={16} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
