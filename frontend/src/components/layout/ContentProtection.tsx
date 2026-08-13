"use client";

import { useEffect } from "react";

/**
 * Image-scoped content protection (Phase 3.16).
 *
 * This used to intercept `copy`, `cut`, `selectstart` and Ctrl/Cmd+C/X/S/U/P/A
 * sitewide, including on sign-in. That broke JP mobile translation tools,
 * reader mode, screen-reader selection and find-on-page, and "cannot select
 * text" reads as evasive to a Japanese user deciding whether to pay. Text was
 * never the real exposure anyway.
 *
 * What remains: context-menu and drag blocking on images, SVG and canvas —
 * the assets that actually carry rights risk. The PDF export keeps its own
 * rasterised watermark and encryption, which is the real protection.
 */
const PROTECTED_MEDIA = "img, svg, canvas, picture, video";

function isProtectedMedia(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  if (target.closest('[data-allow-download="true"]')) return false;
  return target.closest(PROTECTED_MEDIA) !== null;
}

export default function ContentProtection() {
  useEffect(() => {
    const block = (event: Event) => {
      if (!isProtectedMedia(event.target)) return;
      event.preventDefault();
    };

    document.addEventListener("contextmenu", block);
    document.addEventListener("dragstart", block);

    return () => {
      document.removeEventListener("contextmenu", block);
      document.removeEventListener("dragstart", block);
    };
  }, []);

  return null;
}
