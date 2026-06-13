"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp, CheckCircle2 } from "lucide-react";
import type { CourseLanguage, OrderGame } from "@/lib/vedic-course/types";
import { getCourseIcon } from "@/lib/vedic-course/icons";
import { t } from "@/lib/vedic-course/utils";
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
              className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 ${
                showCorrect
                  ? "border-emerald-500/40 bg-emerald-500/10"
                  : showWrong
                    ? "border-red-400/30 bg-red-500/5"
                    : "border-shell-border bg-shell-bg/50"
              }`}
            >
              <span className="w-6 text-center text-xs font-bold text-shell-muted tabular-nums">
                {idx + 1}
              </span>
              <Icon size={16} className="text-shell-accent shrink-0" />
              <span className="flex-1 text-sm text-shell-warm">{t(item.label, lang)}</span>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => move(idx, -1)}
                  disabled={idx === 0 || (checked && isCorrect)}
                  className="rounded-lg border border-shell-border p-1.5 text-shell-muted hover:text-shell-warm disabled:opacity-30"
                >
                  <ArrowUp size={14} />
                </button>
                <button
                  type="button"
                  onClick={() => move(idx, 1)}
                  disabled={idx === order.length - 1 || (checked && isCorrect)}
                  className="rounded-lg border border-shell-border p-1.5 text-shell-muted hover:text-shell-warm disabled:opacity-30"
                >
                  <ArrowDown size={14} />
                </button>
              </div>
              {showCorrect && <CheckCircle2 size={16} className="text-emerald-300" />}
            </div>
          );
        })}
      </div>

      {!isCorrect && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={handleCheck}
            className="rounded-xl border border-shell-accent/30 bg-shell-accent/15 px-6 py-3 text-xs font-bold uppercase tracking-wider text-shell-accent hover:bg-shell-accent/25"
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
