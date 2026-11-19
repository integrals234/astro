"use client";

import { useRef } from "react";
import { useGsapEffect, MOTION_OK } from "@/lib/motion/gsap";
import type { QuickSky } from "@/lib/sky/quick-sky";

/**
 * The sky ring — the hero's signature visual.
 *
 * A sidereal zodiac drawn as geometry: twelve 30° signs, twenty-seven 13°20′
 * nakshatra ticks, and two bodies. The Moon (vermilion, the one accent that
 * means "you") and the Sun (ink) glide to their positions as the visitor
 * types a birth date, so the form answers before it is submitted.
 *
 * Orientation follows the chart convention: 0° Aries at the left (where the
 * ascendant sits), longitude increasing counter-clockwise.
 *
 * Motion (GSAP, one owner per element):
 *   - intro: the circles and ticks draw in (DrawSVG), part of the hero
 *     timeline's opening second;
 *   - drift: the whole sky sways ±4° over 26 s — the "soft background
 *     drift", slow enough to read as stillness. Bodies drift with it, so
 *     positions never slip against the signs;
 *   - bodies: CSS rotation about the centre with a 0.7 s ease-out
 *     transition, interruptible as the visitor keeps typing.
 * All of it is skipped under prefers-reduced-motion.
 */
const C = 200;
const R_OUTER = 184;
const R_SIGN = 158;
const R_INNER = 112;
const R_MOON = 171;
const R_SUN = 135;
const NAK = 360 / 27;

const round = (v: number) => Math.round(v * 100) / 100;

/** Screen point for a sidereal longitude (deg) at radius r. */
function at(longitude: number, r: number) {
  const a = (longitude * Math.PI) / 180;
  // Rounded: Node and browsers can disagree in the last float digit of
  // Math.cos/sin, which is a hydration mismatch on every SVG attribute.
  return { x: round(C - r * Math.cos(a)), y: round(C + r * Math.sin(a)) };
}

/** SVG rotation that carries a body from 0° to `longitude` (clockwise-positive SVG). */
const rotationFor = (longitude: number) => -longitude;

export default function SkyRing({
  sky,
  signLabels,
  centerTop,
  centerMain,
  centerSub,
  ariaLabel,
  size = "lg",
}: {
  sky: QuickSky | null;
  /** Localised sign names, Aries first. */
  signLabels: string[];
  centerTop?: string;
  centerMain?: string;
  centerSub?: string;
  ariaLabel: string;
  size?: "lg" | "sm";
}) {
  const root = useRef<SVGSVGElement>(null);
  const moonRot = sky ? rotationFor(sky.moon.longitude) : 0;
  const sunRot = sky ? rotationFor(sky.sun.longitude) : 0;
  const nakStart = sky ? (sky.moon.nakshatraNumber - 1) * NAK : 0;

  // Intro draw + perpetual drift. Runs once, after GSAP loads.
  useGsapEffect(
    root,
    ({ gsap }) => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.from("[data-ring-draw]", {
          drawSVG: "0%",
          duration: 1.4,
          ease: "power2.inOut",
          stagger: 0.12,
        });
        gsap.from("[data-ring-tick]", {
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
          stagger: { each: 0.02, from: "start" },
          delay: 0.5,
        });
        gsap.fromTo(
          "[data-ring-drift]",
          { rotation: -4, svgOrigin: `${C} ${C}` },
          {
            rotation: 4,
            svgOrigin: `${C} ${C}`,
            duration: 26,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          },
        );
      });
      return () => mm.revert();
    },
    [],
  );

  // Arc for the Moon's nakshatra, highlighted on the tick band.
  const arc = (() => {
    const a0 = at(nakStart, R_MOON);
    const a1 = at(nakStart + NAK, R_MOON);
    // Counter-clockwise on screen = sweep-flag 0 with this mapping.
    return `M ${a0.x} ${a0.y} A ${R_MOON} ${R_MOON} 0 0 0 ${a1.x} ${a1.y}`;
  })();

  const moonStart = at(0, R_MOON);
  const sunStart = at(0, R_SUN);

  return (
    <svg
      ref={root}
      viewBox="0 0 400 400"
      role="img"
      aria-label={ariaLabel}
      className={`block h-auto w-full ${size === "sm" ? "max-w-[88px]" : ""}`}
    >
      {/* Rings */}
      <g fill="none" stroke="var(--color-ink)" strokeOpacity={0.55} strokeWidth={1}>
        <circle data-ring-draw cx={C} cy={C} r={R_OUTER} />
        <circle data-ring-draw cx={C} cy={C} r={R_SIGN} strokeOpacity={0.3} />
        {size === "lg" && <circle data-ring-draw cx={C} cy={C} r={R_INNER} strokeOpacity={0.18} />}
      </g>

      {/* Drifting band: sign divisions, nakshatra ticks, sign names. */}
      <g data-ring-drift>
        <g stroke="var(--color-ink)" strokeWidth={1}>
          {Array.from({ length: 12 }, (_, i) => {
            const p0 = at(i * 30, R_SIGN);
            const p1 = at(i * 30, R_OUTER);
            return <line key={`s${i}`} data-ring-tick x1={p0.x} y1={p0.y} x2={p1.x} y2={p1.y} strokeOpacity={0.35} />;
          })}
          {Array.from({ length: 27 }, (_, i) => {
            const p0 = at(i * NAK, R_OUTER - 7);
            const p1 = at(i * NAK, R_OUTER);
            return <line key={`n${i}`} data-ring-tick x1={p0.x} y1={p0.y} x2={p1.x} y2={p1.y} strokeOpacity={0.5} />;
          })}
        </g>
        {size === "lg" &&
          signLabels.map((label, i) => {
            const p = at(i * 30 + 15, (R_SIGN + R_INNER) / 2 + 4);
            return (
              <text
                key={label}
                x={p.x}
                y={p.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="var(--color-text-muted)"
                fontSize={11}
                style={{ fontFamily: "var(--font-body)", letterSpacing: "0.04em" }}
              >
                {label}
              </text>
            );
          })}

      {/* The Moon's nakshatra, lit. */}
      {sky && (
        <path
          d={arc}
          fill="none"
          stroke="var(--color-terracotta)"
          strokeOpacity={0.35}
          strokeWidth={14}
          strokeLinecap="butt"
        />
      )}

      {/* Bodies start at 0° Aries and rotate into place. */}
      {/* Bodies: positioned by a CSS rotation about the centre, so they are
          right before any script runs and glide (0.7 s ease-out) when the
          date changes; instant under reduced motion (globals.css). */}
      <g data-body="sun" className="sky-body" style={{ opacity: sky ? 1 : 0, transform: `rotate(${sunRot}deg)` }}>
        <circle cx={sunStart.x} cy={sunStart.y} r={size === "lg" ? 7 : 12} fill="var(--color-washi)" stroke="var(--color-ink)" strokeWidth={2} />
        <circle cx={sunStart.x} cy={sunStart.y} r={size === "lg" ? 2 : 4} fill="var(--color-ink)" />
      </g>
      <g data-body="moon" className="sky-body" style={{ opacity: sky ? 1 : 0, transform: `rotate(${moonRot}deg)` }}>
        <circle cx={moonStart.x} cy={moonStart.y} r={size === "lg" ? 8 : 14} fill="var(--color-terracotta)" />
      </g>
      </g>

      {size === "lg" && (
        <g textAnchor="middle" style={{ fontFamily: "var(--font-header)" }}>
          {centerTop && (
            <text x={C} y={C - 34} fontSize={12} fill="var(--color-text-muted)" style={{ fontFamily: "var(--font-body)", letterSpacing: "0.08em" }}>
              {centerTop}
            </text>
          )}
          {centerMain && (
            <text x={C} y={C + 6} fontSize={centerMain.length > 9 ? 22 : 28} fill="var(--color-ink)">
              {centerMain}
            </text>
          )}
          {centerSub && (
            <text x={C} y={C + 34} fontSize={12} fill="var(--color-text-muted)" style={{ fontFamily: "var(--font-body)" }}>
              {centerSub}
            </text>
          )}
        </g>
      )}
    </svg>
  );
}
