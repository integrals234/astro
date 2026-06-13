"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import type { CourseLanguage, MultiSelectGame } from "@/lib/vedic-course/types";
import { getCourseIcon } from "@/lib/vedic-course/icons";
import { t } from "@/lib/vedic-course/utils";
import { uiString } from "@/lib/vedic-course/i18n/ui";
import GameShell from "./GameShell";
import GameFeedback from "./GameFeedback";

interface MultiSelectGameViewProps {
  game: MultiSelectGame;
  lang: CourseLanguage;
  onComplete: () => void;
}

export default function MultiSelectGameView({ game, lang, onComplete }: MultiSelectGameViewProps) {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const toggle = (id: string) => {
    if (submitted && isCorrect) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleSubmit = () => {
    const correctSet = new Set(game.correctOptionIds);
    const correct =
      selected.size === correctSet.size &&
      [...selected].every((id) => correctSet.has(id));
    setSubmitted(true);
    setIsCorrect(correct);
    if (correct) onComplete();
  };

  return (
    <GameShell kind="multi-select" lang={lang} title={game.title}>
      <h4 className="font-serif text-xl text-shell-warm">{t(game.question, lang)}</h4>
      <p className="mt-2 text-xs text-shell-muted">{uiString("selectAll", lang)}</p>

      <div className="mt-6 grid gap-2 sm:grid-cols-2">
        {game.options.map((option) => {
          const Icon = getCourseIcon(option.icon);
          const isSelected = selected.has(option.id);
          const isAnswer = game.correctOptionIds.includes(option.id);
          const showCorrect = submitted && isAnswer;
          const showWrong = submitted && isSelected && !isAnswer;

          return (
            <button
              key={option.id}
              type="button"
              disabled={submitted && isCorrect}
              onClick={() => toggle(option.id)}
              className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                showCorrect
                  ? "border-emerald-500/50 bg-emerald-500/10"
                  : showWrong
                    ? "border-red-400/40 bg-red-500/10"
                    : isSelected
                      ? "border-shell-accent/40 bg-shell-accent-soft"
                      : "border-shell-border bg-shell-bg/50 hover:border-shell-accent/25"
              }`}
            >
              <Icon size={16} className="text-shell-accent shrink-0" />
              <span className="flex-1 text-shell-warm">{t(option.label, lang)}</span>
              {showCorrect && <CheckCircle2 size={16} className="text-emerald-300" />}
            </button>
          );
        })}
      </div>

      {!isCorrect && (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={selected.size === 0}
          className="mt-6 rounded-xl border border-shell-accent/30 bg-shell-accent/15 px-6 py-3 text-xs font-bold uppercase tracking-wider text-shell-accent hover:bg-shell-accent/25 disabled:opacity-40"
        >
          {uiString("checkAnswers", lang)}
        </button>
      )}

      <GameFeedback
        show={submitted}
        isCorrect={isCorrect}
        lang={lang}
        explanation={submitted ? t(game.explanation, lang) : undefined}
      />
    </GameShell>
  );
}
