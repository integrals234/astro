"use client";

import type { CourseLanguage, CourseStep } from "@/lib/vedic-course/types";
import SlideCard from "./SlideCard";
import ChapterQuiz from "./ChapterQuiz";
import MatchGameView from "./MatchGameView";
import FlashcardDeck from "./FlashcardDeck";
import OrderGameView from "./OrderGameView";
import TrueFalseGameView from "./TrueFalseGameView";
import MultiSelectGameView from "./MultiSelectGameView";

interface StepRendererProps {
  step: CourseStep;
  lang: CourseLanguage;
  contentSlideNumber: number;
  contentSlidesInChapter: number;
  onInteractiveComplete: () => void;
}

export default function StepRenderer({
  step,
  lang,
  contentSlideNumber,
  contentSlidesInChapter,
  onInteractiveComplete,
}: StepRendererProps) {
  switch (step.kind) {
    case "content":
      return (
        <SlideCard
          slide={step}
          lang={lang}
          slideIndex={contentSlideNumber - 1}
          totalSlides={contentSlidesInChapter}
        />
      );
    case "quiz":
      return <ChapterQuiz quiz={step} lang={lang} onCorrect={onInteractiveComplete} />;
    case "match":
      return <MatchGameView game={step} lang={lang} onComplete={onInteractiveComplete} />;
    case "flashcards":
      return <FlashcardDeck game={step} lang={lang} onComplete={onInteractiveComplete} />;
    case "order":
      return <OrderGameView game={step} lang={lang} onComplete={onInteractiveComplete} />;
    case "true-false":
      return <TrueFalseGameView game={step} lang={lang} onComplete={onInteractiveComplete} />;
    case "multi-select":
      return <MultiSelectGameView game={step} lang={lang} onComplete={onInteractiveComplete} />;
    default:
      return null;
  }
}
