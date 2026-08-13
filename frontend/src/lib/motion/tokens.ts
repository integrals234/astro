/**
 * Shared motion language — buttery, paper-soft, never flashy.
 *
 * These must stay numerically identical to the CSS easing tokens in
 * `src/app/globals.css` (`--ease-butter`, `--ease-soft`). The two systems
 * animate the same surfaces from different sides, and a drift between them is
 * visible as two different "feels" on one page.
 *
 *   easeOutExpo  ≡ --ease-butter  cubic-bezier(0.16, 1, 0.3, 1)
 *   easeOutQuart ≡ --ease-soft    cubic-bezier(0.25, 1, 0.5, 1)
 *
 * Before Phase 1.4 every animation in the app was a hand-written inline
 * literal and nothing here had a single consumer, so durations drifted across
 * 0.15/0.25/0.35/0.4/0.55/0.6/0.65s with no system behind the numbers.
 */

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeOutQuart = [0.25, 1, 0.5, 1] as const;
export const easeInOutSoft = [0.45, 0, 0.55, 1] as const;

/** The three durations. Anything else is drift. */
export const durationFast = 0.16;
export const durationBase = 0.28;
export const durationSlow = 0.48;

/** Drawer / sheet springs — weighty but snappy */
export const springDrawer = {
  type: "spring" as const,
  stiffness: 380,
  damping: 34,
  mass: 0.85,
};

export const springSoft = {
  type: "spring" as const,
  stiffness: 420,
  damping: 28,
  mass: 0.7,
};

export const springTap = {
  type: "spring" as const,
  stiffness: 520,
  damping: 32,
  mass: 0.55,
};

export const fadeUp = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: easeOutExpo },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.35, ease: easeOutQuart },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const staggerItem = {
  initial: { opacity: 0, y: 12, x: -4 },
  animate: { opacity: 1, y: 0, x: 0 },
  transition: { duration: 0.4, ease: easeOutExpo },
};

export const hoverLift = {
  y: -2,
  transition: springSoft,
};

export const tapPress = {
  scale: 0.97,
  transition: springTap,
};

/**
 * Enter/exit pairs for `AnimatePresence`. `fadeUp` above has no `exit`, which
 * is why every presence-driven surface in the app had to hand-roll one.
 */
export const fadeUpPresence = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: durationBase, ease: easeOutExpo },
};

/** For popovers and toasts, where a slight scale reads as "arriving". */
export const popPresence = {
  initial: { opacity: 0, y: 12, scale: 0.97 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 6, scale: 0.98 },
  transition: { duration: durationBase, ease: easeOutExpo },
};

/** Overlay scrims. */
export const scrimPresence = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: durationFast, ease: easeOutQuart },
};
