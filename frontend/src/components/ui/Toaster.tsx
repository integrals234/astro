"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { popPresence, scrimPresence } from "@/lib/motion/tokens";
import { AlertTriangle, Check, X } from "lucide-react";

/**
 * Toasts and a confirm dialog (Phase 1.5).
 *
 * Replaces seven `alert()` calls in ChartWorkspace and one `confirm()` in
 * ChartCollectionPage. Native modals are the loudest break in an otherwise
 * smooth surface — they block the main thread, ignore the theme entirely, and
 * are the one piece of UI in the app that was never translated.
 *
 * No new dependency: a context plus an `AnimatePresence` list. Reduced motion
 * is handled by the global `MotionConfig reducedMotion="user"`.
 */
export type ToastTone = "positive" | "caution";

interface Toast {
  id: number;
  message: string;
  tone: ToastTone;
}

interface ConfirmRequest {
  message: string;
  confirmLabel: string;
  cancelLabel: string;
  resolve: (confirmed: boolean) => void;
}

interface ToastContextValue {
  toast: (message: string, tone?: ToastTone) => void;
  confirm: (options: {
    message: string;
    confirmLabel: string;
    cancelLabel: string;
  }) => Promise<boolean>;
}

const ToastContext = createContext<ToastContextValue | null>(null);

const TOAST_DURATION_MS = 5000;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [request, setRequest] = useState<ConfirmRequest | null>(null);
  const nextId = useRef(0);

  const dismiss = useCallback((id: number) => {
    setToasts((current) => current.filter((entry) => entry.id !== id));
  }, []);

  const toast = useCallback(
    (message: string, tone: ToastTone = "caution") => {
      const id = nextId.current++;
      setToasts((current) => [...current, { id, message, tone }]);
      window.setTimeout(() => dismiss(id), TOAST_DURATION_MS);
    },
    [dismiss],
  );

  const confirm = useCallback(
    (options: {
      message: string;
      confirmLabel: string;
      cancelLabel: string;
    }) =>
      new Promise<boolean>((resolve) => {
        setRequest({ ...options, resolve });
      }),
    [],
  );

  const settle = useCallback(
    (confirmed: boolean) => {
      request?.resolve(confirmed);
      setRequest(null);
    },
    [request],
  );

  const value = useMemo(() => ({ toast, confirm }), [toast, confirm]);

  return (
    <ToastContext.Provider value={value}>
      {children}

      {/* Polite: these announce results, they never interrupt a task. */}
      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[60] flex flex-col items-center gap-2 px-4 pb-5 supports-[padding:max(0px)]:pb-[max(1.25rem,env(safe-area-inset-bottom))]"
      >
        <AnimatePresence initial={false}>
          {toasts.map((entry) => (
            <motion.div
              key={entry.id}
              layout
              {...popPresence}
              className="washi-card pointer-events-auto flex w-full max-w-md items-start gap-3 p-4"
            >
              <span
                className={
                  entry.tone === "positive"
                    ? "washi-status-positive mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center"
                    : "washi-status-caution mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center"
                }
              >
                {entry.tone === "positive" ? (
                  <Check size={12} aria-hidden />
                ) : (
                  <AlertTriangle size={12} aria-hidden />
                )}
              </span>
              <p className="min-w-0 flex-1 text-sm text-text">{entry.message}</p>
              <button
                type="button"
                onClick={() => dismiss(entry.id)}
                className="tactile shrink-0 rounded-md p-1 text-text-muted transition-colors hover:text-ink"
                aria-label="×"
              >
                <X size={14} aria-hidden />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {request && (
          <motion.div
            {...scrimPresence}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
          >
            <motion.div
              role="alertdialog"
              aria-modal="true"
              aria-label={request.message}
              {...popPresence}
              className="washi-card w-full max-w-sm p-6"
            >
              <p className="mb-6 text-text">{request.message}</p>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => settle(false)}
                  className="washi-btn-tertiary px-4 py-2 text-sm"
                >
                  {request.cancelLabel}
                </button>
                <button
                  type="button"
                  autoFocus
                  onClick={() => settle(true)}
                  className="washi-btn-primary px-5 py-2.5 text-sm"
                >
                  {request.confirmLabel}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ToastContext.Provider>
  );
}

export function useToast(): ToastContextValue {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}
