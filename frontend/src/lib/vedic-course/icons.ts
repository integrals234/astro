import {
  Sun,
  Moon,
  Flame,
  Wind,
  Droplets,
  Mountain,
  Sparkles,
  Orbit,
  Compass,
  Eye,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  sun: Sun,
  moon: Moon,
  flame: Flame,
  wind: Wind,
  droplets: Droplets,
  mountain: Mountain,
  sparkles: Sparkles,
  orbit: Orbit,
  compass: Compass,
  eye: Eye,
};

export function getCourseIcon(name?: string): LucideIcon {
  if (!name) return Sparkles;
  return ICON_MAP[name] ?? Sparkles;
}
