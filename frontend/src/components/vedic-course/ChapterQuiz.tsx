"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, PartyPopper } from "lucide-react";
import type { CourseLanguage, CourseQuiz } from "@/lib/vedic-course/types";
import { getCourseIcon } from "@/lib/vedic-course/icons";
import { t } from "@/lib/vedic-course/utils";

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
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="rounded-3xl border border-shell-border bg-gradient-to-br from-shell-elevated/90 to-shell-bg/60 p-8 md:p-10"
    >
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-shell-accent/25 bg-shell-accent-soft px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em] text-shell-accent">
        {lang === "ja" ? "章末クイズ" : "Chapter Quiz"}
      </div>

      <h3 className="font-serif text-2xl md:text-3xl text-shell-warm tracking-tight">
        {t(quiz.question, lang)}
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
              className={`group relative flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                showCorrect
                  ? "border-emerald-500/50 bg-emerald-500/10 shadow-[0_0_24px_rgba(52,211,153,0.15)]"
                  : showWrong
                    ? "border-red-400/40 bg-red-500/10"
                    : isSelected
                      ? "border-shell-accent/40 bg-shell-accent-soft"
                      : "border-shell-border bg-shell-bg/50 hover:border-shell-accent/25 hover:bg-shell-elevated/60"
              }`}
            >
              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                  showCorrect
                    ? "border-emerald-500/40 bg-emerald-500/15"
                    : showWrong
                      ? "border-red-400/40 bg-red-500/15"
                      : "border-shell-border bg-shell-elevated group-hover:border-shell-accent/30"
                }`}
              >
                <Icon
                  size={20}
                  className={
                    showCorrect
                      ? "text-emerald-300"
                      : showWrong
                        ? "text-red-300"
                        : "text-shell-accent"
                  }
                />
              </div>
              <span className="text-sm font-medium text-shell-warm">
                {t(option.label, lang)}
              </span>
              {showCorrect && (
                <CheckCircle2
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-300"
                />
              )}
              {showWrong && (
                <XCircle
                  size={18}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-red-300"
                />
              )}
            </button>
          );
        })}
      </div>

      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 24 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="overflow-hidden"
          >
            <div
              className={`rounded-2xl border px-5 py-4 ${
                isCorrect
                  ? "border-emerald-500/30 bg-emerald-500/10"
                  : "border-shell-border bg-shell-bg/60"
              }`}
            >
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <PartyPopper size={20} className="shrink-0 text-emerald-300 mt-0.5" />
                ) : (
                  <XCircle size={20} className="shrink-0 text-shell-muted mt-0.5" />
                )}
                <div>
                  <p
                    className={`text-sm font-medium ${
                      isCorrect ? "text-emerald-200" : "text-shell-warm"
                    }`}
                  >
                    {isCorrect
                      ? lang === "ja"
                        ? "正解！よくできました ✨"
                        : "Correct! Well done ✨"
                      : lang === "ja"
                        ? "もう一度挑戦してみましょう"
                        : "Try again — you've got this"}
                  </p>
                  <p className="mt-1.5 text-sm text-shell-muted leading-relaxed">
                    {t(quiz.explanation, lang)}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
