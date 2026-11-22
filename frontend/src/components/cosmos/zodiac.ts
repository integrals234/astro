/**
 * Canvas art for the geocentric stages: the zodiac band (12 rashis), the
 * nakshatra band (27 mansions) and the text labels that float beside the
 * planets. Redrawn when the theme changes, so the engraving is brass on deep
 * space and sumi ink on paper.
 */
export type CosmosTheme = "dark" | "light";

export const palette = (theme: CosmosTheme) =>
  theme === "dark"
    ? { line: "220,184,108", text: "242,234,215", muted: "170,162,141", accent: "#dcb86c" }
    : { line: "27,26,23", text: "27,26,23", muted: "102,99,91", accent: "#7d5d1b" };

const DEG = Math.PI / 180;
const FONT = '"Noto Serif JP", "Hiragino Mincho ProN", "Yu Mincho", Georgia, serif';
const SANS = '"Noto Sans JP", "Hiragino Sans", system-ui, sans-serif';

/**
 * Sign band from 0.84R to R and nakshatra band from 0.72R to 0.84R — lines
 * only; the names are camera-facing sprites (scene.ts), so they read
 * upright from any side of the band.
 * Angle 0 = sidereal 0° Aries on +x, increasing counter-clockwise (the
 * scene rotates the whole band by the ayanamsha).
 */
export function paintZodiac(theme: CosmosTheme, size: number): HTMLCanvasElement {
  const p = palette(theme);
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d")!;
  const cx = size / 2;
  const R = size * 0.49;
  const ring = (r: number, alpha: number, width: number) => {
    ctx.beginPath();
    ctx.arc(cx, cx, r, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${p.line},${alpha})`;
    ctx.lineWidth = width;
    ctx.stroke();
  };
  // A faint wash inside the band so the labels read over the planets.
  ctx.beginPath();
  ctx.arc(cx, cx, R, 0, Math.PI * 2);
  ctx.arc(cx, cx, R * 0.84, 0, Math.PI * 2, true);
  ctx.fillStyle = `rgba(${p.line},${theme === "dark" ? 0.05 : 0.04})`;
  ctx.fill();
  ring(R, 0.85, size / 900);
  ring(R * 0.84, 0.6, size / 1400);
  for (let deg = 0; deg < 360; deg += 1) {
    const major = deg % 30 === 0;
    const five = deg % 5 === 0;
    const a = deg * DEG;
    const r1 = major ? R * 0.84 : five ? R * 0.965 : R * 0.982;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * r1, cx - Math.sin(a) * r1);
    ctx.lineTo(cx + Math.cos(a) * R, cx - Math.sin(a) * R);
    ctx.strokeStyle = `rgba(${p.line},${major ? 0.8 : five ? 0.5 : 0.25})`;
    ctx.lineWidth = major ? size / 1100 : size / 2400;
    ctx.stroke();
  }
  return c;
}

export function paintNakshatras(theme: CosmosTheme, size: number): HTMLCanvasElement {
  const p = palette(theme);
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d")!;
  const cx = size / 2;
  const R = size * 0.49;
  const span = 360 / 27;
  ctx.beginPath();
  ctx.arc(cx, cx, R * 0.72, 0, Math.PI * 2);
  ctx.strokeStyle = `rgba(${p.line},0.45)`;
  ctx.lineWidth = size / 1600;
  ctx.stroke();
  for (let i = 0; i < 27; i++) {
    const a = i * span * DEG;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * R * 0.72, cx - Math.sin(a) * R * 0.72);
    ctx.lineTo(cx + Math.cos(a) * R * 0.84, cx - Math.sin(a) * R * 0.84);
    ctx.strokeStyle = `rgba(${p.line},0.55)`;
    ctx.lineWidth = size / 1800;
    ctx.stroke();
  }
  return c;
}

/** A planet's name, or a graha marker (glyph disc + name). */
export function paintLabel(
  theme: CosmosTheme,
  text: string,
  opts: { glyph?: string; shadow?: boolean; serif?: boolean; muted?: boolean } = {},
): { canvas: HTMLCanvasElement; aspect: number } {
  const p = palette(theme);
  const scale = 2;
  const fontPx = 26 * scale;
  const probe = document.createElement("canvas").getContext("2d")!;
  probe.font = `${fontPx}px ${opts.serif ? FONT : SANS}`;
  const textW = Math.ceil(probe.measureText(text).width);
  const disc = opts.glyph ? 64 * scale : 0;
  const w = Math.max(textW, disc) + 24 * scale;
  const h = (opts.glyph ? disc + 14 * scale : 0) + fontPx + 16 * scale;
  const c = document.createElement("canvas");
  c.width = w;
  c.height = h;
  const ctx = c.getContext("2d")!;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  if (opts.glyph) {
    const r = disc / 2 - 3 * scale;
    ctx.beginPath();
    ctx.arc(w / 2, r + 3 * scale, r, 0, Math.PI * 2);
    if (opts.shadow) {
      // Rahu and Ketu: shadow points — a dark disc with a thin corona.
      ctx.fillStyle = theme === "dark" ? "#05060a" : "#2b2a27";
      ctx.fill();
      ctx.lineWidth = 3 * scale;
      ctx.strokeStyle = p.accent;
      ctx.stroke();
      ctx.fillStyle = p.accent;
    } else {
      ctx.fillStyle = theme === "dark" ? "rgba(15,17,24,0.92)" : "rgba(251,248,241,0.95)";
      ctx.fill();
      ctx.lineWidth = 2 * scale;
      ctx.strokeStyle = p.accent;
      ctx.stroke();
      ctx.fillStyle = `rgb(${p.text})`;
    }
    ctx.font = `${30 * scale}px ${SANS}`;
    ctx.fillText(opts.glyph, w / 2, r + 4 * scale);
  }
  ctx.font = `${fontPx}px ${opts.serif ? FONT : SANS}`;
  const ty = opts.glyph ? disc + 10 * scale + fontPx / 2 : h / 2;
  // A soft halo keeps the name legible over stars or orbit lines.
  ctx.lineWidth = 8 * scale;
  ctx.strokeStyle = theme === "dark" ? "rgba(6,7,11,0.75)" : "rgba(245,241,232,0.85)";
  ctx.strokeText(text, w / 2, ty);
  ctx.fillStyle = opts.muted ? `rgba(${p.muted},0.95)` : `rgba(${p.text},0.95)`;
  ctx.fillText(text, w / 2, ty);
  return { canvas: c, aspect: w / h };
}
