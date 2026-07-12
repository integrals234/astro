"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, CheckCircle2 } from "lucide-react";
import type { CourseLanguage, OrderGame } from "@/lib/vedic-course/types";
import { getCourseIcon } from "@/lib/vedic-course/icons";
import { t } from "@/lib/vedic-course/utils";
import { FormattedText } from "@/lib/format-inline-text";
import { uiString } from "@/lib/vedic-course/i18n/ui";
import GameShell from "./GameShell";
import GameFeedback from "./GameFeedback";

interface OrderGameViewProps {
  game: OrderGame;
  lang: CourseLanguage;
  onComplete: () => void;
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function OrderGameView({ game, lang, onComplete }: OrderGameViewProps) {
  const correctOrder = game.items.map((i) => i.id);
  const [order, setOrder] = useState(() => shuffle(game.items.map((i) => i.id)));
  const [checked, setChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const itemMap = useMemo(
    () => Object.fromEntries(game.items.map((i) => [i.id, i])),
    [game.items],
  );

  const move = (idx: number, dir: -1 | 1) => {
    if (checked && isCorrect) return;
    const next = [...order];
    const target = idx + dir;
    if (target < 0 || target >= next.length) return;
    [next[idx], next[target]] = [next[target], next[idx]];
    setOrder(next);
    setChecked(false);
  };

  const handleCheck = () => {
    const correct = order.every((id, i) => id === correctOrder[i]);
    setChecked(true);
    setIsCorrect(correct);
    if (correct) onComplete();
  };

  return (
    <GameShell kind="order" lang={lang} title={game.title} instruction={game.instruction}>
      <div className="space-y-2 max-w-lg mx-auto">
        {order.map((id, idx) => {
          const item = itemMap[id];
          const Icon = getCourseIcon(item.icon);
          const showCorrect = checked && id === correctOrder[idx];
          const showWrong = checked && id !== correctOrder[idx];

          return (
            <div
              key={id}
              className={`washi-card flex items-center gap-2 px-3 py-2.5 ${
                showCorrect
                  ? "border-moss bg-[rgba(124,139,111,0.12)]"
                  : showWrong
                    ? "border-caution bg-[rgba(199,123,78,0.1)]"
                    : ""
              }`}
            >
              <span className="w-6 text-center font-body text-xs font-medium text-text-muted tabular-nums">
                {idx + 1}
              </span>
              <Icon size={16} className="text-terracotta shrink-0" />
              <span className="flex-1 text-sm text-ink">
                <FormattedText text={t(item.label, lang)} />
              </span>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => move(idx, -1)}
                  aria-label={`${uiString("moveUp", lang)}: ${t(item.label, lang)}`}
                  disabled={idx === 0 || (checked && isCorrect)}
                  className="rounded-md border border-border p-1.5 text-text-muted hover:text-ink disabled:opacity-30"
                >
                  <ArrowUp size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => move(idx, 1)}
                  aria-label={`${uiString("moveDown", lang)}: ${t(item.label, lang)}`}
                  disabled={idx === order.length - 1 || (checked && isCorrect)}
                  className="rounded-md border border-border p-1.5 text-text-muted hover:text-ink disabled:opacity-30"
                >
                  <ArrowDown size={14} />
                </button>
              </div>
              {showCorrect && <CheckCircle2 size={16} className="text-moss" />}
            </div>
          );
        })}
      </div>

      {!isCorrect && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={handleCheck}
            className="washi-btn-primary px-6 py-3 text-xs uppercase tracking-wider"
          >
            {uiString("checkOrder", lang)}
          </button>
        </div>
      )}

      <GameFeedback
        show={checked}
        isCorrect={isCorrect}
        lang={lang}
        explanation={!isCorrect ? uiString("orderRetry", lang) : undefined}
      />
    </GameShell>
  );
}
