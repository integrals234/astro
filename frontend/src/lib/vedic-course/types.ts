import type { LucideIcon } from "lucide-react";

export type CourseLanguage = "en" | "ja";

export interface LocalizedText {
  en: string;
  ja: string;
}

export interface CourseSlide {
  id: string;
  kind: "content";
  icon?: string;
  title: LocalizedText;
  body: LocalizedText;
  highlight?: LocalizedText;
}

export interface QuizOption {
  id: string;
  label: LocalizedText;
  icon?: string;
}

export interface CourseQuiz {
  id: string;
  kind: "quiz";
  question: LocalizedText;
  options: QuizOption[];
  correctOptionId: string;
  explanation: LocalizedText;
}

export type CourseStep = CourseSlide | CourseQuiz;

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
