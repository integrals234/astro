"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { easeOutExpo } from "@/lib/motion/tokens";

type RevealTag = "div" | "section" | "article" | "li" | "aside";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Delay in seconds */
  delay?: number;
  /** Vertical travel in px */
  y?: number;
  /** Once only (default true) */
  once?: boolean;
  as?: RevealTag;
};

const motionTags = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  aside: motion.aside,
} as const;

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 20,
  once = true,
  as = "div",
}: ScrollRevealProps) {
  const Comp = motionTags[as];

  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.18, margin: "0px 0px -40px 0px" }}
      transition={{ duration: 0.6, delay, ease: easeOutExpo }}
    >
      {children}
    </Comp>
  );
}
