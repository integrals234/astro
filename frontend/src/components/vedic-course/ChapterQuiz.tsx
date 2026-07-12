"use client";

import { useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
import type { CourseLanguage, CourseQuiz } from "@/lib/vedic-course/types";
import { getCourseIcon } from "@/lib/vedic-course/icons";
import { t } from "@/lib/vedic-course/utils";
import { FormattedText } from "@/lib/format-inline-text";

import GameShell from "./GameShell";
import GameFeedback from "./GameFeedback";

interface ChapterQuizProps {
  quiz: CourseQuiz;
  lang: CourseLanguage;
  onCorrect: () => void;
}

export default function ChapterQuiz({ quiz, lang, onCorrect }: ChapterQuizProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleSelect = (optionId: string) => {
    if (isCorrect) return;

    setSelectedId(optionId);
    const correct = optionId === quiz.correctOptionId;
    setShowFeedback(true);

    if (correct) {
      setIsCorrect(true);
      onCorrect();
    }
  };

  return (
    <GameShell kind="quiz" lang={lang}>
      <h3 className="font-header text-2xl md:text-3xl text-ink tracking-tight">
        <FormattedText text={t(quiz.question, lang)} />
      </h3>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {quiz.options.map((option) => {
          const Icon = getCourseIcon(option.icon);
          const isSelected = selectedId === option.id;
          const isAnswer = option.id === quiz.correctOptionId;
          const showCorrect = showFeedback && isAnswer;
          const showWrong = showFeedback && isSelected && !isAnswer;

          return (
            <button
              key={option.id}
              type="button"
              disabled={isCorrect}
              onClick={() => handleSelect(option.id)}
              className={`washi-card group relative flex items-center gap-4 p-4 text-left transition-colors duration-300 ${
                showCorrect
                  ? "border-moss bg-[rgba(124,139,111,0.12)]"
                  : showWrong
                    ? "border-caution bg-[rgba(199,123,78,0.1)]"
                    : isSelected
                      ? "border-terracotta"
                      : "hover:border-terracotta"
              }`}
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md border transition-colors ${
                  showCorrect
                    ? "border-moss bg-[rgba(124,139,111,0.15)]"
                    : showWrong
                      ? "border-caution bg-[rgba(199,123,78,0.12)]"
                      : "border-border bg-washi group-hover:border-terracotta"
                }`}
              >
                <Icon
                  size={20}
                  className={
                    showCorrect
                      ? "text-moss"
                      : showWrong
                        ? "text-terracotta"
                        : "text-terracotta"
                  }
                />
              </div>
              <span className="text-sm font-medium text-ink">
                <FormattedText text={t(option.label, lang)} />
              </span>
              {showCorrect && (
                <CheckCircle2
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-moss"
                />
              )}
              {showWrong && (
                <XCircle
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-terracotta"
                />
              )}
            </button>
          );
        })}
      </div>

      <GameFeedback
        show={showFeedback}
        isCorrect={isCorrect}
        lang={lang}
        explanation={showFeedback ? t(quiz.explanation, lang) : undefined}
      />
    </GameShell>
  );
}
