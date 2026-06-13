import type { LucideIcon } from "lucide-react";

export type CourseLanguage = "en" | "hi" | "ja" | "ko";

export interface LocalizedText {
  en: string;
  ja: string;
  hi?: string;
  ko?: string;
}

export interface CourseSlide {
  id: string;
  kind: "content";
  icon?: string;
  title: LocalizedText;
  body: LocalizedText;
  highlight?: LocalizedText;
  bullets?: LocalizedText[];
}

export interface QuizOption {
  id: string;
  label: LocalizedText;
  icon?: string;
}

export interface CourseQuiz {
  id: string;
  kind: "quiz";
  title?: LocalizedText;
  question: LocalizedText;
  options: QuizOption[];
  correctOptionId: string;
  explanation: LocalizedText;
}

export interface MatchPair {
  leftId: string;
  left: LocalizedText;
  rightId: string;
  right: LocalizedText;
  leftIcon?: string;
}

export interface MatchGame {
  id: string;
  kind: "match";
  title: LocalizedText;
  instruction: LocalizedText;
  pairs: MatchPair[];
}

export interface Flashcard {
  id: string;
  front: LocalizedText;
  back: LocalizedText;
  icon?: string;
}

export interface FlashcardGame {
  id: string;
  kind: "flashcards";
  title: LocalizedText;
  instruction: LocalizedText;
  cards: Flashcard[];
}

export interface OrderItem {
  id: string;
  label: LocalizedText;
  icon?: string;
}

export interface OrderGame {
  id: string;
  kind: "order";
  title: LocalizedText;
  instruction: LocalizedText;
  items: OrderItem[];
}

export interface TrueFalseStatement {
  id: string;
  statement: LocalizedText;
  isTrue: boolean;
  explanation: LocalizedText;
}

export interface TrueFalseGame {
  id: string;
  kind: "true-false";
  title: LocalizedText;
  instruction: LocalizedText;
  statements: TrueFalseStatement[];
}

export interface MultiSelectGame {
  id: string;
  kind: "multi-select";
  title: LocalizedText;
  question: LocalizedText;
  options: QuizOption[];
  correctOptionIds: string[];
  explanation: LocalizedText;
}

export type CourseStep =
  | CourseSlide
  | CourseQuiz
  | MatchGame
  | FlashcardGame
  | OrderGame
  | TrueFalseGame
  | MultiSelectGame;

export interface CourseChapter {
  id: string;
  number: number;
  title: LocalizedText;
  subtitle: LocalizedText;
  icon: LucideIcon;
  steps: CourseStep[];
}

export interface CourseProgress {
  currentChapter: number;
  completedSlides: string[];
}

export type InteractiveStep = Exclude<CourseStep, CourseSlide>;
