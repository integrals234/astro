/**
 * Procedural planet surfaces, painted on a canvas in the browser — no image
 * downloads. Each map is equirectangular and sampled from 3D noise on the
 * sphere, so there is no seam at the date line.
 *
 * These are impressions, not maps: banded gas giants, a rusty Mars with ice
 * caps, a blue Earth with continents and cloud, cratered Mercury and Moon.
 */

/* ── 3D value noise ── */
function hash(x: number, y: number, z: number) {
  let h = (x * 374761393 + y * 668265263 + z * 2147483647) | 0;
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967295;
}

const fade = (t: number) => t * t * (3 - 2 * t);

function noise3(x: number, y: number, z: number) {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  const zi = Math.floor(z);
  const xf = fade(x - xi);
  const yf = fade(y - yi);
  const zf = fade(z - zi);
  const l = (a: number, b: number, t: number) => a + (b - a) * t;
  const c000 = hash(xi, yi, zi);
  const c100 = hash(xi + 1, yi, zi);
  const c010 = hash(xi, yi + 1, zi);
  const c110 = hash(xi + 1, yi + 1, zi);
  const c001 = hash(xi, yi, zi + 1);
  const c101 = hash(xi + 1, yi, zi + 1);
  const c011 = hash(xi, yi + 1, zi + 1);
  const c111 = hash(xi + 1, yi + 1, zi + 1);
  return l(l(l(c000, c100, xf), l(c010, c110, xf), yf), l(l(c001, c101, xf), l(c011, c111, xf), yf), zf);
}

function fbm(x: number, y: number, z: number, octaves = 4) {
  let sum = 0;
  let amp = 0.5;
  let f = 1;
  for (let i = 0; i < octaves; i++) {
    sum += amp * noise3(x * f, y * f, z * f);
    f *= 2.03;
    amp *= 0.5;
  }
  return sum / (1 - Math.pow(0.5, octaves));
}

type RGB = [number, number, number];
const hex = (h: string): RGB => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const smooth = (e0: number, e1: number, v: number) => {
  const t = clamp01((v - e0) / (e1 - e0));
  return t * t * (3 - 2 * t);
};

export type SurfaceKind = "mercury" | "venus" | "earth" | "clouds" | "moon" | "mars" | "jupiter" | "saturn";

/** RGBA for one point of the sphere. */
function shade(kind: SurfaceKind, x: number, y: number, z: number, lat: number): [number, number, number, number] {
  switch (kind) {
    case "mercury":
    case "moon": {
      const n = fbm(x * 3, y * 3, z * 3, 5);
      const maria = kind === "moon" ? smooth(0.5, 0.62, fbm(x * 1.4 + 9, y * 1.4, z * 1.4, 3)) : 0;
      const base = kind === "moon" ? mix(hex("#a7a39b"), hex("#d6d2c8"), n) : mix(hex("#6f6a63"), hex("#b3aca1"), n);
      const c = mix(base, kind === "moon" ? hex("#5f5c58") : hex("#55504a"), maria * 0.7);
      return [c[0], c[1], c[2], 255];
    }
    case "venus": {
      const warp = fbm(x * 2, y * 2, z * 2, 4);
      const band = 0.5 + 0.5 * Math.sin(lat * 7 + warp * 5);
      const c = mix(hex("#c79c58"), hex("#f1dfb4"), band * 0.7 + warp * 0.3);
      return [c[0], c[1], c[2], 255];
    }
    case "earth": {
      const n = fbm(x * 1.8 + 3, y * 1.8, z * 1.8, 5);
      const ice = smooth(1.15, 1.3, Math.abs(lat)) ;
      let c: RGB;
      if (n > 0.53) {
        const dry = fbm(x * 3, y * 3 + 5, z * 3, 3);
        const k = smooth(0.53, 0.7, n);
        c = mix(mix(hex("#3d6b34"), hex("#8c7b4f"), smooth(0.45, 0.65, dry)), hex("#6d5a3c"), k * 0.4);
      } else {
        c = mix(hex("#0f3a73"), hex("#2366a8"), smooth(0.3, 0.53, n));
      }
      c = mix(c, hex("#eef3f7"), ice);
      return [c[0], c[1], c[2], 255];
    }
    case "clouds": {
      const n = fbm(x * 3 + 11, y * 5, z * 3, 5);
      const a = smooth(0.52, 0.72, n) * 235;
      return [255, 255, 255, a];
    }
    case "mars": {
      const n = fbm(x * 2.5, y * 2.5, z * 2.5, 5);
      const dark = smooth(0.52, 0.68, fbm(x * 1.6 + 7, y * 1.6, z * 1.6, 4));
      let c = mix(hex("#a4482a"), hex("#d17a4c"), n);
      c = mix(c, hex("#5e2a17"), dark * 0.6);
      c = mix(c, hex("#f3ece4"), smooth(1.28, 1.4, Math.abs(lat)));
      return [c[0], c[1], c[2], 255];
    }
    case "jupiter":
    case "saturn": {
      const warp = fbm(x * 3, y * 6, z * 3, 4);
      const t = lat * (kind === "jupiter" ? 9 : 7) + warp * (kind === "jupiter" ? 2.6 : 1.2);
      const band = 0.5 + 0.5 * Math.sin(t);
      const band2 = 0.5 + 0.5 * Math.sin(t * 2.3 + 1.7);
      let c: RGB =
        kind === "jupiter"
          ? mix(mix(hex("#a5714a"), hex("#ecdfc6"), band), hex("#c49a6c"), band2 * 0.35)
          : mix(mix(hex("#c4a46c"), hex("#efe0b6"), band), hex("#d7bd87"), band2 * 0.3);
      if (kind === "jupiter") {
        // The Great Red Spot.
        const lon = Math.atan2(z, x);
        const dx = (lon - 0.9) / 0.32;
        const dy = (lat + 0.39) / 0.12;
        const spot = 1 - smooth(0.6, 1, Math.sqrt(dx * dx + dy * dy));
        c = mix(c, hex("#b5502f"), spot * 0.85);
      }
      return [c[0], c[1], c[2], 255];
    }
  }
}

function craters(ctx: CanvasRenderingContext2D, w: number, h: number, count: number, seed: number) {
  let s = seed;
  const rand = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  for (let i = 0; i < count; i++) {
    const x = rand() * w;
    const y = h * 0.12 + rand() * h * 0.76;
    const r = (0.004 + rand() * rand() * 0.03) * w;
    ctx.beginPath();
    ctx.ellipse(x, y, r, r * 0.9, 0, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(40,36,32,0.22)";
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(x - r * 0.15, y - r * 0.15, r * 0.82, r * 0.72, 0, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255,250,240,0.10)";
    ctx.fill();
  }
}

/** Paint one surface map. Yields to the event loop between row bands. */
export async function paintSurface(kind: SurfaceKind, width: number): Promise<HTMLCanvasElement> {
  const w = width;
  const h = width / 2;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  const img = ctx.createImageData(w, h);
  const d = img.data;
  const BAND = 32;
  for (let j0 = 0; j0 < h; j0 += BAND) {
    for (let j = j0; j < Math.min(h, j0 + BAND); j++) {
      const lat = Math.PI / 2 - (j / h) * Math.PI;
      const cl = Math.cos(lat);
      const sl = Math.sin(lat);
      for (let i = 0; i < w; i++) {
        const lon = (i / w) * Math.PI * 2 - Math.PI;
        const x = cl * Math.cos(lon);
        const z = cl * Math.sin(lon);
        const [r, g, b, a] = shade(kind, x, sl, z, lat);
        const k = (j * w + i) * 4;
        d[k] = r;
        d[k + 1] = g;
        d[k + 2] = b;
        d[k + 3] = a;
      }
    }
    // Keep each slice of work short: never one long task.
    await new Promise((resolve) => setTimeout(resolve, 0));
  }
  ctx.putImageData(img, 0, 0);
  if (kind === "mercury") craters(ctx, w, h, 160, 7);
  if (kind === "moon") craters(ctx, w, h, 90, 3);
  return canvas;
}

/** Saturn's rings: a 1D radial strip of bands and gaps (Cassini division included). */
export function paintRings(): HTMLCanvasElement {
  const w = 512;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = 4;
  const ctx = canvas.getContext("2d")!;
  for (let i = 0; i < w; i++) {
    const t = i / w;
    const n = fbm(t * 40, 0.5, 0.5, 3);
    let a = 0.25 + 0.65 * n;
    if (t > 0.58 && t < 0.63) a *= 0.08; // Cassini division
    if (t < 0.12) a *= t / 0.12;
    if (t > 0.94) a *= (1 - t) / 0.06;
    const c = mix(hex("#9c8a68"), hex("#efe2c2"), n);
    ctx.fillStyle = `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a.toFixed(3)})`;
    ctx.fillRect(i, 0, 1, 4);
  }
  return canvas;
}

/** A soft radial glow (sun corona, star sprites). */
export function paintGlow(inner: string, outer: string, size = 256): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, inner);
  g.addColorStop(0.18, inner);
  g.addColorStop(0.45, outer);
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return canvas;
}
