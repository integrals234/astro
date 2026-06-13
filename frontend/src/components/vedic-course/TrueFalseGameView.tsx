"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import type { CourseLanguage, TrueFalseGame } from "@/lib/vedic-course/types";
import { t } from "@/lib/vedic-course/utils";
import { uiString } from "@/lib/vedic-course/i18n/ui";
import GameShell from "./GameShell";
import GameFeedback from "./GameFeedback";

interface TrueFalseGameViewProps {
  game: TrueFalseGame;
  lang: CourseLanguage;
  onComplete: () => void;
}

export default function TrueFalseGameView({ game, lang, onComplete }: TrueFalseGameViewProps) {
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [feedback, setFeedback] = useState<{ correct: boolean; explanation: string } | null>(null);
  const [finished, setFinished] = useState(false);

  const statement = game.statements[index];
  const required = Math.ceil(game.statements.length * 0.6);

  const handleAnswer = (answer: boolean) => {
    if (feedback || finished) return;
    const correct = answer === statement.isTrue;
    if (correct) setCorrectCount((c) => c + 1);
    setFeedback({
      correct,
      explanation: t(statement.explanation, lang),
    });
  };

  const advanceFinal = () => {
    if (index < game.statements.length - 1) {
      setIndex((i) => i + 1);
      setFeedback(null);
      return;
    }
    setFinished(true);
    if (correctCount >= required) onComplete();
  };

  return (
    <GameShell kind="true-false" lang={lang} title={game.title} instruction={game.instruction}>
      <div className="flex items-center justify-between mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-shell-muted">
        <span>
          {finished
            ? uiString("results", lang)
            : uiString("question", lang, index + 1, game.statements.length)}
        </span>
        <span className="text-shell-accent tabular-nums">
          {uiString("score", lang, correctCount)}
        </span>
      </div>

      {!finished ? (
        <>
          <p className="font-serif text-xl text-shell-warm leading-relaxed">
            {t(statement.statement, lang)}
          </p>

          {!feedback && (
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-sm">
              <button
                type="button"
                onClick={() => handleAnswer(true)}
                className="flex items-center justify-center gap-2 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 py-4 text-sm font-bold text-emerald-200 hover:bg-emerald-500/20 transition-colors"
              >
                <Check size={18} />
                {uiString("trueLabel", lang)}
              </button>
              <button
                type="button"
                onClick={() => handleAnswer(false)}
                className="flex items-center justify-center gap-2 rounded-2xl border border-red-400/30 bg-red-500/10 py-4 text-sm font-bold text-red-200 hover:bg-red-500/20 transition-colors"
              >
                <X size={18} />
                {uiString("falseLabel", lang)}
              </button>
            </div>
          )}

          {feedback && (
            <>
              <GameFeedback
                show
                isCorrect={feedback.correct}
                lang={lang}
                explanation={feedback.explanation}
              />
              <button
                type="button"
                onClick={advanceFinal}
                className="mt-6 w-full rounded-xl border border-shell-accent/30 bg-shell-accent/15 py-3 text-xs font-bold uppercase tracking-wider text-shell-accent hover:bg-shell-accent/25"
              >
                {index < game.statements.length - 1
                  ? uiString("nextQuestion", lang)
                  : uiString("seeResults", lang)}
              </button>
            </>
          )}
        </>
      ) : (
        <>
          <GameFeedback
            show
            isCorrect={correctCount >= required}
            lang={lang}
            message={
              correctCount >= required
                ? uiString("passed", lang, correctCount, game.statements.length)
                : uiString("failed", lang, correctCount, game.statements.length)
            }
          />
          {correctCount < required && (
            <button
              type="button"
              onClick={() => {
                setIndex(0);
                setCorrectCount(0);
                setFeedback(null);
                setFinished(false);
              }}
              className="mt-6 w-full rounded-xl border border-shell-accent/30 bg-shell-accent/15 py-3 text-xs font-bold uppercase tracking-wider text-shell-accent hover:bg-shell-accent/25"
            >
              {uiString("tryAgain", lang)}
            </button>
          )}
        </>
      )}
    </GameShell>
  );
}
