"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import type { CourseLanguage, TrueFalseGame } from "@/lib/vedic-course/types";
import { t } from "@/lib/vedic-course/utils";
import { FormattedText } from "@/lib/format-inline-text";
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
      <div className="flex items-center justify-between mb-6 font-body text-[10px] font-medium uppercase tracking-[0.2em] text-text-muted">
        <span>
          {finished
            ? uiString("results", lang)
            : uiString("question", lang, index + 1, game.statements.length)}
        </span>
        <span className="text-terracotta tabular-nums">
          {uiString("score", lang, correctCount)}
        </span>
      </div>

      {!finished ? (
        <>
          <p className="font-header text-xl text-ink leading-relaxed">
            <FormattedText text={t(statement.statement, lang)} />
          </p>

          {!feedback && (
            <div className="mt-8 grid grid-cols-2 gap-3 max-w-sm">
              <button
                type="button"
                onClick={() => handleAnswer(true)}
                className="flex items-center justify-center gap-2 rounded-lg border border-moss bg-[rgba(124,139,111,0.12)] py-4 text-sm font-semibold text-moss transition-colors hover:bg-[rgba(124,139,111,0.2)]"
              >
                <Check size={18} />
                {uiString("trueLabel", lang)}
              </button>
              <button
                type="button"
                onClick={() => handleAnswer(false)}
                className="flex items-center justify-center gap-2 rounded-lg border border-caution bg-[rgba(199,123,78,0.1)] py-4 text-sm font-semibold text-terracotta transition-colors hover:bg-[rgba(199,123,78,0.18)]"
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
                className="washi-btn-primary mt-6 w-full py-3 text-xs uppercase tracking-wider"
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
              className="washi-btn-primary mt-6 w-full py-3 text-xs uppercase tracking-wider"
            >
              {uiString("tryAgain", lang)}
            </button>
          )}
        </>
      )}
    </GameShell>
  );
}
