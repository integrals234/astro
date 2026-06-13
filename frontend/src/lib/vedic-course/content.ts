import { chapter1Planets } from "./chapters/ch1-planets";
import { chapter2Signs } from "./chapters/ch2-signs";
import { chapter3Lagna } from "./chapters/ch3-lagna";
import { chapter4Houses } from "./chapters/ch4-houses";
import { chapter5Nakshatras } from "./chapters/ch5-nakshatras";
import { chapter6Aspects } from "./chapters/ch6-aspects";
import { chapter7Practice } from "./chapters/ch7-practice";

export const VEDIC_COURSE_CHAPTERS = [
  chapter1Planets,
  chapter2Signs,
  chapter3Lagna,
  chapter4Houses,
  chapter5Nakshatras,
  chapter6Aspects,
  chapter7Practice,
];

export const ALL_STEP_IDS = VEDIC_COURSE_CHAPTERS.flatMap((ch) =>
  ch.steps.map((s) => s.id),
);

export const GAME_STEP_COUNT = VEDIC_COURSE_CHAPTERS.flatMap((ch) =>
  ch.steps.filter((s) => s.kind !== "content"),
).length;
