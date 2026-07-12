"use client";

import { createElement, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import type { CourseLanguage, FlashcardGame } from "@/lib/vedic-course/types";
import { getCourseIcon } from "@/lib/vedic-course/icons";
import { t } from "@/lib/vedic-course/utils";
import { FormattedText } from "@/lib/format-inline-text";
import { uiString } from "@/lib/vedic-course/i18n/ui";
import GameShell from "./GameShell";

interface FlashcardDeckProps {
  game: FlashcardGame;
  lang: CourseLanguage;
  onComplete: () => void;
}

export default function FlashcardDeck({ game, lang, onComplete }: FlashcardDeckProps) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [viewed, setViewed] = useState<Set<string>>(new Set());

  const card = game.cards[index];
  const allViewed = viewed.size >= game.cards.length;

  const markViewed = (cardId: string) => {
    setViewed((prev) => {
      const next = new Set(prev);
      next.add(cardId);
      return next;
    });
  };

  const goNext = () => {
    if (index < game.cards.length - 1) {
      setIndex((i) => i + 1);
      setFlipped(false);
    }
  };

  const goPrev = () => {
    if (index > 0) {
      setIndex((i) => i - 1);
      setFlipped(false);
    }
  };

  const handleFlip = () => {
    setFlipped((f) => !f);
    if (!flipped) markViewed(card.id);
  };

  const handleFinish = () => {
    onComplete();
  };

  return (
    <GameShell kind="flashcards" lang={lang} title={game.title} instruction={game.instruction}>
      <div className="flex flex-col items-center">
        <button
          type="button"
          onClick={handleFlip}
          aria-label={uiString("flipCard", lang)}
          className="relative w-full max-w-md aspect-[4/3] perspective-[1000px]"
        >
          <motion.div
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div
              className="washi-card absolute inset-0 flex flex-col items-center justify-center p-8 text-center backface-hidden"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="washi-icon-chip mb-4 h-14 w-14">
                {createElement(getCourseIcon(card?.icon), {
                  size: 28,
                  className: "text-moss",
                })}
              </div>
              <p className="font-header text-xl text-ink">
                <FormattedText text={t(card.front, lang)} />
              </p>
              <p className="mt-4 font-body text-[10px] uppercase tracking-[0.2em] text-text-muted">
                {uiString("tapToFlip", lang)}
              </p>
            </div>
            <div
              className="absolute inset-0 flex flex-col items-center justify-center rounded-lg border border-moss bg-[rgba(124,139,111,0.12)] p-8 text-center"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <p className="text-sm md:text-base text-text leading-relaxed">
                <FormattedText text={t(card.back, lang)} />
              </p>
            </div>
          </motion.div>
        </button>

        <div className="mt-6 flex items-center gap-4">
          <button
            type="button"
            onClick={goPrev}
            aria-label={uiString("previousCard", lang)}
            disabled={index === 0}
            className="rounded-md border border-border p-2.5 text-text-muted hover:text-ink disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="font-body text-xs font-medium uppercase tracking-widest text-text-muted tabular-nums">
            {index + 1} / {game.cards.length}
          </span>
          <button
            type="button"
            onClick={goNext}
            aria-label={uiString("nextCard", lang)}
            disabled={index === game.cards.length - 1}
            className="rounded-md border border-border p-2.5 text-text-muted hover:text-ink disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-1.5">
          {game.cards.map((c, i) => (
            <span
              key={c.id}
              className={`h-2 w-2 rounded-full transition-colors ${
                viewed.has(c.id)
                  ? "bg-moss"
                  : i === index
                    ? "bg-terracotta"
                    : "bg-border"
              }`}
            />
          ))}
        </div>

        {allViewed && (
          <button
            type="button"
            onClick={handleFinish}
            className="washi-btn-primary mt-8 gap-2 px-6 py-3 text-xs uppercase tracking-wider"
          >
            <RotateCcw size={14} />
            {uiString("doneReviewing", lang)}
          </button>
        )}
      </div>
    </GameShell>
  );
}
