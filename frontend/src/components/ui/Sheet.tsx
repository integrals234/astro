"use client";

import { useEffect, useRef, useSyncExternalStore, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { AnimatePresence, m, useDragControls, useReducedMotion, type PanInfo } from "motion/react";

const DESKTOP_QUERY = "(min-width: 1024px)";
const isDesktop = () => window.matchMedia(DESKTOP_QUERY).matches;
const subscribeDesktop = (onChange: () => void) => {
  const mq = window.matchMedia(DESKTOP_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
};
const noopSubscribe = () => () => {};

/**
 * One sheet, two shapes:
 *   phone   — a bottom sheet: rises from the thumb zone, drag the handle (or
 *             fling) down to dismiss;
 *   desktop — a side panel on the right, so the page it came from stays
 *             visible beside it.
 *
 * Escape closes; focus moves to the close button on open and back to the
 * opener on close; page scroll is locked while open. Enter 300 ms on the
 * drawer curve, exit faster (200 ms) — leaving should never feel slower than
 * arriving. Reduced motion: opacity only.
 */
export default function Sheet({
  open,
  onClose,
  title,
  closeLabel,
  children,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  closeLabel: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const opener = useRef<Element | null>(null);
  const desktop = useSyncExternalStore(subscribeDesktop, isDesktop, () => false);
  // Portals need `document`; false during SSR and hydration, true after.
  const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false);
  const dragControls = useDragControls();

  useEffect(() => {
    if (!open) return;
    opener.current = document.activeElement;
    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const focusId = window.setTimeout(() => closeRef.current?.focus(), 30);
    return () => {
      document.documentElement.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(focusId);
      (opener.current as HTMLElement | null)?.focus?.();
    };
  }, [open, onClose]);

  const hidden = reduce ? { opacity: 0 } : desktop ? { x: "100%" } : { y: "100%" };
  const shown = reduce ? { opacity: 1 } : desktop ? { x: 0 } : { y: 0 };

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.y > 120 || info.velocity.y > 600) onClose();
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[60]" role="presentation">
          <m.div
            className="sheet-backdrop absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />
          <m.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={hidden}
            animate={shown}
            exit={{ ...hidden, transition: { duration: 0.2, ease: [0.32, 0.72, 0, 1] } }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            drag={!desktop && !reduce ? "y" : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            dragListener={false}
            dragControls={dragControls}
            onDragEnd={onDragEnd}
            className="absolute inset-x-0 bottom-0 flex max-h-[88svh] flex-col rounded-t-[20px] border border-border bg-washi pb-[env(safe-area-inset-bottom)] lg:inset-y-0 lg:left-auto lg:right-0 lg:max-h-none lg:w-[min(560px,92vw)] lg:rounded-none lg:rounded-l-[20px] lg:pb-0"
          >
            <div
              onPointerDown={(e) => {
                if (!desktop && !reduce) dragControls.start(e);
              }}
              className="touch-none lg:touch-auto"
            >
            <SheetHandle desktop={desktop} />
            <div className="flex items-center justify-between gap-4 border-b border-border px-5 pb-3 pt-1 lg:px-8 lg:pt-6">
              <h2 className="font-header text-[length:var(--step-2)] text-ink">{title}</h2>
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label={closeLabel}
                className="tactile inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-text-muted hover:text-ink"
              >
                <X size={18} aria-hidden />
              </button>
            </div>
            </div>
            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-6 lg:px-8">{children}</div>
          </m.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

/** Visual grab handle. Dragging the whole sheet would fight its inner scroll,
 * so on phones the sheet dismisses from a swipe that starts on the header. */
function SheetHandle({ desktop }: { desktop: boolean }) {
  if (desktop) return null;
  return (
    <div className="flex justify-center pb-1 pt-2.5" aria-hidden>
      <span className="h-1 w-10 rounded-full bg-border" />
    </div>
  );
}
