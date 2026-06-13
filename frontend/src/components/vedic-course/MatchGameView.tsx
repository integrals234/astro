"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Link2 } from "lucide-react";
import type { CourseLanguage, MatchGame } from "@/lib/vedic-course/types";
import { getCourseIcon } from "@/lib/vedic-course/icons";
import { t } from "@/lib/vedic-course/utils";
import { uiString } from "@/lib/vedic-course/i18n/ui";
import GameShell from "./GameShell";
import GameFeedback from "./GameFeedback";

interface MatchGameProps {
  game: MatchGame;
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

export default function MatchGameView({ game, lang, onComplete }: MatchGameProps) {
  const rightItems = useMemo(
    () => shuffle(game.pairs.map((p) => ({ id: p.rightId, text: p.right }))),
    [game.pairs],
  );

  const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrongPair, setWrongPair] = useState<{ left: string; right: string } | null>(null);
  const [completed, setCompleted] = useState(false);

  const handleLeft = (leftId: string) => {
    if (matched.has(leftId) || completed) return;
    setSelectedLeft(leftId);
    setWrongPair(null);
  };

  const handleRight = (rightId: string) => {
    if (!selectedLeft || completed) return;
    const pair = game.pairs.find((p) => p.leftId === selectedLeft);
    if (pair?.rightId === rightId) {
      const next = new Set(matched);
      next.add(selectedLeft);
      setMatched(next);
      setSelectedLeft(null);
      if (next.size === game.pairs.length) {
        setCompleted(true);
        onComplete();
      }
    } else {
      setWrongPair({ left: selectedLeft, right: rightId });
      setTimeout(() => {
        setWrongPair(null);
        setSelectedLeft(null);
      }, 700);
    }
  };

  const matchedRightIds = new Set(
    game.pairs.filter((p) => matched.has(p.leftId)).map((p) => p.rightId),
  );

  return (
    <GameShell
      kind="match"
      lang={lang}
      title={game.title}
      instruction={game.instruction}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-shell-muted mb-3">
            {uiString("terms", lang)}
          </p>
          {game.pairs.map((pair) => {
            const Icon = getCourseIcon(pair.leftIcon);
            const isMatched = matched.has(pair.leftId);
            const isSelected = selectedLeft === pair.leftId;
            const isWrong = wrongPair?.left === pair.leftId;

            return (
              <button
                key={pair.leftId}
                type="button"
                disabled={isMatched || completed}
                onClick={() => handleLeft(pair.leftId)}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                  isMatched
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                    : isWrong
                      ? "border-red-400/40 bg-red-500/10"
                      : isSelected
                        ? "border-shell-accent/50 bg-shell-accent-soft text-shell-warm"
                        : "border-shell-border bg-shell-bg/50 text-shell-warm hover:border-shell-accent/25"
                }`}
              >
                <Icon size={16} className="shrink-0 text-shell-accent" />
                <span className="flex-1">{t(pair.left, lang)}</span>
                {isMatched && <CheckCircle2 size={16} className="text-emerald-300" />}
              </button>
            );
          })}
        </div>

        <div className="space-y-2">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-shell-muted mb-3">
            {uiString("meanings", lang)}
          </p>
          {rightItems.map((item) => {
            const isMatched = matchedRightIds.has(item.id);
            const isWrong = wrongPair?.right === item.id;

            return (
              <button
                key={item.id}
                type="button"
                disabled={isMatched || completed || !selectedLeft}
                onClick={() => handleRight(item.id)}
                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all ${
                  isMatched
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-200"
                    : isWrong
                      ? "border-red-400/40 bg-red-500/10"
                      : selectedLeft
                        ? "border-shell-border bg-shell-bg/50 text-shell-warm hover:border-violet-400/30 hover:bg-violet-500/5"
                        : "border-shell-border bg-shell-bg/30 text-shell-muted"
                }`}
              >
                <Link2 size={14} className="shrink-0 opacity-50" />
                <span>{t(item.text, lang)}</span>
              </button>
            );
          })}
        </div>
      </div>

      <GameFeedback
        show={completed}
        isCorrect
        lang={lang}
        message={uiString("allPairsMatched", lang)}
      />
    </GameShell>
  );
}
