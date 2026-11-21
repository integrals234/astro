"use client";

import { useEffect, useId, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * 渾天儀 — a brass armillary sphere in CSS 3D.
 *
 * The site's signature object. Four engraved rings (meridian, colure,
 * equator, horizon) and the zodiac band tilted at the ecliptic's 23.44°
 * turn slowly around whatever sits at its centre — on the home page, the
 * live preview of the visitor's own sky. On load each ring opens out of a
 * flat disc into its plane (the page's one authored entrance); on a desktop
 * pointer the whole instrument leans toward the cursor.
 *
 * Pure CSS transforms and SVG — no WebGL, no runtime cost beyond the
 * compositor — and fully still under reduced motion. Decorative: hidden
 * from assistive technology; the plate carries its own semantics.
 */
const ECLIPTIC_TILT = 23.44;

/** Two decimals: server and browser Math.cos differ in the last bits (hydration). */
const q = (n: number) => Math.round(n * 100) / 100;

function Ring({
  gradientId,
  radius = 96,
  width = 1.1,
  ticks = 0,
  band,
  labels,
  ghost = false,
}: {
  gradientId: string;
  radius?: number;
  width?: number;
  /** Tick spacing in degrees (0 = none). */
  ticks?: number;
  /** Inner radius for a two-line band. */
  band?: number;
  labels?: readonly string[];
  /** Faint "unlit" engraving rather than polished brass. */
  ghost?: boolean;
}) {
  const stroke = ghost ? "currentColor" : `url(#${gradientId})`;
  const tickEls = [];
  if (ticks) {
    const inner = band ?? radius - 4;
    for (let deg = 0; deg < 360; deg += ticks) {
      const major = deg % 30 === 0;
      const a = (deg * Math.PI) / 180;
      const r1 = major ? inner : inner + (radius - inner) * 0.55;
      tickEls.push(
        <line
          key={deg}
          x1={q(100 + Math.cos(a) * r1)}
          y1={q(100 + Math.sin(a) * r1)}
          x2={q(100 + Math.cos(a) * radius)}
          y2={q(100 + Math.sin(a) * radius)}
          stroke={stroke}
          strokeWidth={major ? 0.7 : 0.35}
          opacity={major ? 0.95 : 0.55}
        />,
      );
    }
  }
  return (
    <svg viewBox="0 0 200 200" aria-hidden>
      <circle cx="100" cy="100" r={radius} fill="none" stroke={stroke} strokeWidth={width} opacity={ghost ? 0.22 : 1} />
      {band ? <circle cx="100" cy="100" r={band} fill="none" stroke={stroke} strokeWidth={width * 0.6} /> : null}
      {tickEls}
      {labels
        ? labels.map((label, i) => {
            // Sign labels sit in the middle of each 30° segment of the band.
            const a = ((i * 30 + 15 - 90) * Math.PI) / 180;
            const r = band ? (band + radius) / 2 : radius - 7;
            return (
              <text
                key={label}
                x={q(100 + Math.cos(a) * r)}
                y={q(100 + Math.sin(a) * r)}
                fill={`url(#${gradientId})`}
                fontSize="5.4"
                textAnchor="middle"
                dominantBaseline="central"
                transform={`rotate(${i * 30 + 15} ${q(100 + Math.cos(a) * r)} ${q(100 + Math.sin(a) * r)})`}
                style={{ fontFamily: "var(--font-header), serif", letterSpacing: "0.04em" }}
              >
                {label}
              </text>
            );
          })
        : null}
    </svg>
  );
}

export default function Armillary({
  signLabels,
  children,
  className = "",
  style,
}: {
  /** Twelve sign labels, Aries first, engraved on the zodiac band. */
  signLabels: readonly string[];
  /** The plate at the centre (faces the viewer; does not spin). */
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const id = useId().replace(/:/g, "");
  const gradientId = `brass-${id}`;
  const root = useRef<HTMLDivElement>(null);

  // Lean toward a desktop pointer (CSS variables, no React re-renders).
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--tilt-x", String(event.clientX / window.innerWidth - 0.5));
        el.style.setProperty("--tilt-y", String(event.clientY / window.innerHeight - 0.5));
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  const ring = (to: string, from: string, delay: number): CSSProperties =>
    ({ transform: to, "--ring-to": to, "--ring-from": from, "--delay": `${delay}ms` }) as CSSProperties;

  return (
    <div ref={root} className={`armillary text-gold ${className}`} style={style}>
      {/* One shared brass gradient for every ring. */}
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f7e3b0" />
            <stop offset="38%" stopColor="#d6ad5f" />
            <stop offset="62%" stopColor="#8f6a2c" />
            <stop offset="100%" stopColor="#e8c983" />
          </linearGradient>
        </defs>
      </svg>
      <div className="armillary-tilt" aria-hidden>
        <div className="armillary-spin">
          <div className="armillary-ring" style={ring("rotateY(0deg)", "rotateY(0deg)", 0)}>
            <Ring gradientId={gradientId} radius={96} width={1.4} ticks={10} />
          </div>
          <div className="armillary-ring" style={ring("rotateY(90deg)", "rotateY(20deg)", 120)}>
            <Ring gradientId={gradientId} radius={94} width={0.9} />
          </div>
          <div className="armillary-ring" style={ring("rotateX(90deg)", "rotateX(10deg)", 240)}>
            <Ring gradientId={gradientId} radius={93} width={0.9} ticks={15} />
          </div>
          <div
            className="armillary-ring"
            style={ring(`rotateZ(${ECLIPTIC_TILT}deg) rotateX(90deg)`, `rotateZ(${ECLIPTIC_TILT}deg) rotateX(20deg)`, 380)}
          >
            <Ring gradientId={gradientId} radius={99} band={86} width={1} ticks={5} labels={signLabels} />
          </div>
          <div className="armillary-ring" style={ring("rotateX(78deg) scale(1.07)", "rotateX(0deg) scale(1.07)", 520)}>
            <Ring gradientId={gradientId} radius={97} width={0.6} ghost />
          </div>
        </div>
      </div>
      {children ? <div className="armillary-plate">{children}</div> : null}
    </div>
  );
}
