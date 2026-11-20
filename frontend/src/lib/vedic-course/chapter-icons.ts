import {
  BookOpen, Brain, Clock, Compass, Crown, Dna, Eye, Gem, Heart, Layers, LayoutGrid,
  Lightbulb, Moon, Orbit, Scale, ScanEye, Shield, Sparkles, Star, Sun, Timer,
  TrendingUp, Trophy, Zap, type LucideIcon,
} from "lucide-react";

/**
 * Chapter icons by name. The chapters reach the client as data (see
 * localized-chapters.ts), and components cannot travel as data — so the
 * server sends the name and the stepper looks the icon up here.
 */
export const CHAPTER_ICONS: Record<string, LucideIcon> = {
  BookOpen, Brain, Clock, Compass, Crown, Dna, Eye, Gem, Heart, Layers, LayoutGrid,
  Lightbulb, Moon, Orbit, Scale, ScanEye, Shield, Sparkles, Star, Sun, Timer,
  TrendingUp, Trophy, Zap,
};

export function chapterIcon(name: string): LucideIcon {
  return CHAPTER_ICONS[name] ?? Sparkles;
}

export function chapterIconName(icon: LucideIcon): string {
  return Object.entries(CHAPTER_ICONS).find(([, value]) => value === icon)?.[0] ?? "Sparkles";
}
