"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { chartFormCopy } from "@/lib/chart-i18n";
import { NAKSHATRAS } from "@/lib/jyotish/nakshatra-data";
import { SIGNS } from "@/lib/sky/quick-sky";
import { tr } from "@/lib/sky/entity-links";
import { cosmosBus } from "@/lib/cosmos/bus";
import type { CosmosScene } from "./scene";

/** Past this stage the journey shows "the sky right now", whatever was typed. */
export const NOW_STAGE = 5.5;

const isDark = () => document.documentElement.classList.contains("dark");

function webglOk() {
  try {
    const c = document.createElement("canvas");
    return Boolean(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

/**
 * The WebGL layer behind the home page's hero and journey.
 *
 * The first paint is a CSS poster (sun glow and stars, `.cosmos-poster`),
 * so nothing waits on Three.js. The scene's chunk loads once the page is
 * idle on a desktop, and on touch devices at the visitor's first touch or
 * scroll — a phone never parses 3D code during its first load. It renders
 * only while on screen and in a visible tab.
 */
export default function CosmosCanvas({ onDate }: { onDate?: (date: Date) => void }) {
  const { language } = useLanguage();
  const wrap = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<CosmosScene | null>(null);
  const onDateRef = useRef(onDate);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    onDateRef.current = onDate;
  }, [onDate]);

  useEffect(() => {
    const el = canvas.current;
    const box = wrap.current;
    if (!el || !box) return;
    let cancelled = false;
    let cleanup: (() => void) | undefined;
    const t = chartFormCopy[language];
    const labels = {
      planets: { ...t.planets, Earth: language === "ja" ? "地球" : language === "hi" ? "पृथ्वी" : language === "ko" ? "지구" : "Earth" },
      signs: SIGNS.map((s) => tr(t.signs, s)),
      nakshatras: NAKSHATRAS.map((n) => tr(t.nakshatras, n.name)),
    };

    const boot = async () => {
      if (cancelled || !webglOk()) return;
      const { CosmosScene } = await import("./scene");
      if (cancelled) return;
      const mobile = window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let scene: CosmosScene;
      try {
        scene = new CosmosScene(el, {
          theme: isDark() ? "dark" : "light",
          mobile,
          reduced,
          labels,
          onDate: (d) => onDateRef.current?.(d),
        });
      } catch {
        return; // no WebGL after all: the poster stays
      }
      sceneRef.current = scene;
      const size = () => scene.setSize(box.clientWidth, box.clientHeight);
      size();

      // "Now" is the moment the page opened — not re-read on every scroll tick.
      const now = new Date();
      // Crossing into or out of "the sky now" by scrolling dips the sky;
      // typing a birth date time-lapses to it.
      let wasNowSide = cosmosBus.getStage() >= NOW_STAGE;
      const sync = () => {
        const stage = cosmosBus.getStage();
        scene.setStage(stage);
        const birth = cosmosBus.getBirth();
        const nowSide = stage >= NOW_STAGE;
        const mode = nowSide !== wasNowSide ? "dip" : "lapse";
        wasNowSide = nowSide;
        scene.setDate(!nowSide && birth ? birth : now, mode);
      };
      sync();
      const unsub = cosmosBus.subscribe(sync);

      let visible = true;
      const run = () => (visible && !document.hidden ? scene.start() : scene.stop());
      const io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        run();
      });
      io.observe(box);
      const ro = new ResizeObserver(size);
      ro.observe(box);
      document.addEventListener("visibilitychange", run);
      const onPointer = (e: PointerEvent) => scene.setPointer(e.clientX / window.innerWidth - 0.5, e.clientY / window.innerHeight - 0.5);
      if (!mobile) window.addEventListener("pointermove", onPointer, { passive: true });
      const mo = new MutationObserver(() => scene.setTheme(isDark() ? "dark" : "light"));
      mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
      run();
      requestAnimationFrame(() => !cancelled && setReady(true));

      cleanup = () => {
        unsub();
        io.disconnect();
        ro.disconnect();
        mo.disconnect();
        document.removeEventListener("visibilitychange", run);
        window.removeEventListener("pointermove", onPointer);
        scene.dispose();
        sceneRef.current = null;
      };
    };

    // Desktop: when the page is idle. Touch: at the first sign of a visitor.
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    let idleHandle: number | undefined;
    const events = ["pointerdown", "touchstart", "scroll", "keydown", "wheel"] as const;
    const onFirst = () => {
      events.forEach((ev) => window.removeEventListener(ev, onFirst));
      void boot();
    };
    if (coarse) {
      events.forEach((ev) => window.addEventListener(ev, onFirst, { passive: true, once: true }));
    } else {
      const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 900));
      idleHandle = idle(() => void boot(), { timeout: 2500 } as IdleRequestOptions) as number;
    }

    return () => {
      cancelled = true;
      events.forEach((ev) => window.removeEventListener(ev, onFirst));
      if (idleHandle !== undefined) (window.cancelIdleCallback ?? window.clearTimeout)(idleHandle);
      cleanup?.();
    };
  }, [language]);

  return (
    <div ref={wrap} aria-hidden className="absolute inset-0">
      {/* The poster fades out as the real scene fades in (its CSS sun would
          otherwise glow through the transparent canvas). */}
      <div className={`cosmos-poster absolute inset-0 transition-opacity duration-[1400ms] ease-out ${ready ? "opacity-0" : "opacity-100"}`} />
      <canvas
        ref={canvas}
        className={`absolute inset-0 h-full w-full transition-opacity duration-[1400ms] ease-out ${ready ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}
