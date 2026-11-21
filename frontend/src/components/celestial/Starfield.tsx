"use client";

import { useEffect, useRef } from "react";

/**
 * A quiet, living night sky on canvas — two layers: the still sky drawn
 * once, and a few dozen twinkling stars (plus a rare meteor) redrawn at
 * ~24 fps. Pointer parallax moves the layers on the compositor.
 *
 * Seeded stars (so the sky is the same on every visit), a slow twinkle, a
 * few warm brass-coloured stars among the cool ones, gentle parallax toward
 * the pointer, and a rare meteor. Built for budget: it starts only once the
 * page is idle, caps the pixel ratio and star count, pauses while off-screen
 * or in a background tab, and under reduced motion draws one still frame.
 */
interface Star {
  x: number;
  y: number;
  r: number;
  a: number;
  tw: number;
  ph: number;
  z: number;
  warm: boolean;
}

function seeded(seed: number) {
  let t = seed >>> 0;
  return () => {
    t += 0x6d2b79f5;
    let x = Math.imul(t ^ (t >>> 15), 1 | t);
    x ^= x + Math.imul(x ^ (x >>> 7), 61 | x);
    return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
  };
}

export default function Starfield({
  className = "",
  density = 1,
  meteors = true,
  seed = 27,
}: {
  className?: string;
  /** 1 = default; lower for busy sections. */
  density?: number;
  meteors?: boolean;
  seed?: number;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const baseRef = useRef<HTMLCanvasElement>(null);
  const liveRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const box = wrap.current;
    const base = baseRef.current;
    const live = liveRef.current;
    if (!box || !base || !live) return;
    const bctx = base.getContext("2d");
    const lctx = live.getContext("2d");
    if (!bctx || !lctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const FRAME_MS = 1000 / 24; // twinkle needs no more than ~24 fps
    let w = 0;
    let h = 0;
    let twinklers: Star[] = [];
    let frame = 0;
    let last = 0;
    let visible = true;
    let running = false;
    let meteor: { x: number; y: number; vx: number; vy: number; life: number } | null = null;
    let nextMeteor = performance.now() + 5000 + Math.random() * 6000;

    const sizeCanvas = (c: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
      c.width = Math.round(w * dpr);
      c.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const dot = (ctx: CanvasRenderingContext2D, s: Star, alpha: number) => {
      ctx.globalAlpha = alpha;
      ctx.fillStyle = s.warm ? "#f3dca8" : "#e6eaff";
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
      if (s.r > 1.2) {
        ctx.globalAlpha = alpha * 0.35;
        ctx.fillRect(s.x - s.r * 3, s.y - 0.3, s.r * 6, 0.6);
        ctx.fillRect(s.x - 0.3, s.y - s.r * 3, 0.6, s.r * 6);
      }
    };

    /* The still sky is drawn once; only a few dozen stars twinkle. */
    const build = () => {
      const rect = box.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      sizeCanvas(base, bctx);
      sizeCanvas(live, lctx);
      const rand = seeded(seed);
      const count = Math.min(320, Math.round(((w * h) / 2600) * density));
      const stars: Star[] = Array.from({ length: count }, () => {
        const bright = rand() < 0.07;
        return {
          x: rand() * w,
          y: rand() * h,
          r: bright ? 1.1 + rand() * 0.9 : 0.35 + rand() * 0.7,
          a: bright ? 0.85 : 0.3 + rand() * 0.55,
          tw: 0.4 + rand() * 1.4,
          ph: rand() * Math.PI * 2,
          z: 0.15 + rand() * 0.85,
          warm: rand() < 0.16,
        };
      });
      const cut = reduce ? 0 : Math.min(48, Math.round(count * 0.14));
      twinklers = stars.slice(0, cut);
      bctx.clearRect(0, 0, w, h);
      for (const s of stars.slice(cut)) dot(bctx, s, s.a);
      bctx.globalAlpha = 1;
    };

    const draw = (time: number) => {
      lctx.clearRect(0, 0, w, h);
      for (const s of twinklers) dot(lctx, s, s.a * (0.55 + 0.45 * Math.sin(time * 0.001 * s.tw + s.ph)));
      if (meteors) {
        if (!meteor && time > nextMeteor) {
          meteor = { x: Math.random() * w * 0.8 + w * 0.1, y: Math.random() * h * 0.35, vx: 15, vy: 7, life: 1 };
        }
        if (meteor) {
          const m = meteor;
          const grad = lctx.createLinearGradient(m.x, m.y, m.x - m.vx * 7, m.y - m.vy * 7);
          grad.addColorStop(0, `rgba(243,220,168,${0.9 * m.life})`);
          grad.addColorStop(1, "rgba(243,220,168,0)");
          lctx.globalAlpha = 1;
          lctx.strokeStyle = grad;
          lctx.lineWidth = 1.2;
          lctx.beginPath();
          lctx.moveTo(m.x, m.y);
          lctx.lineTo(m.x - m.vx * 7, m.y - m.vy * 7);
          lctx.stroke();
          m.x += m.vx;
          m.y += m.vy;
          m.life -= 0.04;
          if (m.life <= 0 || m.x > w + 50 || m.y > h + 50) {
            meteor = null;
            nextMeteor = time + 8000 + Math.random() * 9000;
          }
        }
      }
      lctx.globalAlpha = 1;
    };

    const loop = (time: number) => {
      if (time - last >= FRAME_MS) {
        last = time;
        draw(time);
      }
      if (running) frame = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduce || !visible || document.hidden) return;
      running = true;
      frame = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    // Parallax moves the canvases on the compositor — no redraw at all.
    let pframe = 0;
    const onPointer = (event: PointerEvent) => {
      cancelAnimationFrame(pframe);
      pframe = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * 14;
        const y = (event.clientY / window.innerHeight - 0.5) * 10;
        box.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(1.03)`;
      });
    };
    const onVisibility = () => (document.hidden ? stop() : start());
    const onResize = () => {
      build();
      if (!running) draw(performance.now());
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });

    const init = () => {
      build();
      draw(performance.now());
      box.style.opacity = "1";
      io.observe(box);
      start();
      window.addEventListener("resize", onResize);
      document.addEventListener("visibilitychange", onVisibility);
      if (finePointer && !reduce) window.addEventListener("pointermove", onPointer, { passive: true });
    };

    // Never compete with the first paint or hydration.
    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 600));
    const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout;
    const handle = idle(init, { timeout: 2500 } as IdleRequestOptions);

    return () => {
      cancelIdle(handle as number);
      stop();
      cancelAnimationFrame(pframe);
      io.disconnect();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointer);
    };
  }, [density, meteors, seed]);

  return (
    <div
      ref={wrap}
      aria-hidden
      className={`pointer-events-none absolute inset-0 opacity-0 transition-[opacity,transform] duration-[1600ms] ease-out ${className}`}
    >
      <canvas ref={baseRef} className="absolute inset-0 h-full w-full" />
      <canvas ref={liveRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
