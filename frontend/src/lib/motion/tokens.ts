/** Shared motion language — buttery, paper-soft, never flashy. */

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeOutQuart = [0.25, 1, 0.5, 1] as const;
export const easeInOutSoft = [0.45, 0, 0.55, 1] as const;

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
