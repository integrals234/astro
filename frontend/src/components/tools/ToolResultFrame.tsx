"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { Pencil, RotateCcw } from "lucide-react";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import BirthDetailsFields from "@/components/shared/BirthDetailsFields";
import { profilePersonName } from "@/lib/profile/types";
import { chartPreviewCopy } from "@/lib/tools/chart-preview-copy";
import { toolUiCopy } from "@/lib/tools/tool-ui-copy";
import type { ProfileResult, Subject } from "@/components/tools/useProfileResult";

/**
 * One consistent frame for every profile-based tool (design upgrade):
 * form → calculating → result or error, with the person bar on top of the
 * result. Fixes the states the panels used to get wrong — a placeholder
 * that pulsed forever after a failed request, results that appeared below
 * the fold without moving the page, and no way to change who the result is
 * for.
 */
export function InlineError({ message, children }: { message: string; children?: ReactNode }) {
  return (
    <div role="alert" className="washi-card border-terracotta/40 p-5">
      <p className="font-body text-sm text-terracotta">{message}</p>
      {children ? <div className="mt-3 flex flex-wrap gap-2">{children}</div> : null}
    </div>
  );
}

export function Calculating({ className = "h-48" }: { className?: string }) {
  const { language } = useLanguage();
  return (
    <div role="status" className={`washi-card flex animate-pulse items-center justify-center ${className}`}>
      <span className="text-sm text-text-muted">{toolUiCopy[language].calculating}</span>
    </div>
  );
}

function formatBirth(subject: Subject, lang: string, unknownLabel: string) {
  const n = subject.natal;
  const date = new Date(Date.UTC(n.year, n.month - 1, n.day)).toLocaleDateString(lang, {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
  const time = subject.timeUnknown ? unknownLabel : `${String(n.hour).padStart(2, "0")}:${String(n.minute).padStart(2, "0")}`;
  const place = subject.place.split(",")[0]?.trim();
  return [date, time, place].filter(Boolean).join(" · ");
}

export function PersonBar<T>({
  state,
  headingRef,
  showTime = true,
}: {
  state: ProfileResult<T>;
  headingRef?: React.Ref<HTMLHeadingElement>;
  showTime?: boolean;
}) {
  const { language } = useLanguage();
  const ui = toolUiCopy[language];
  const subject = state.subject;
  if (!subject) return null;

  const optionLabel = (p: (typeof state.profiles)[number]) => {
    const b = p.birth;
    const name = profilePersonName(p) || p.locationName.split(",")[0];
    return `${name} · ${b.year}/${String(b.month).padStart(2, "0")}/${String(b.day).padStart(2, "0")}`;
  };
  const line = formatBirth(subject, language, ui.timeUnknownBadge);

  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-border pb-4">
      <div className="min-w-0">
        <h2 ref={headingRef} tabIndex={-1} className="font-header text-[length:var(--step-1)] text-ink outline-none">
          {ui.resultFor(subject.name)}
        </h2>
        <p className="mt-1 truncate text-xs text-text-muted">
          {showTime ? line : line.replace(/ · \d{2}:\d{2}/, "")}
          {state.status === "loading" ? <span className="ml-2" role="status">{ui.calculating}</span> : null}
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <label className="sr-only" htmlFor={`switch-${subject.profileId ?? "local"}`}>
          {ui.switchPerson}
        </label>
        <select
          id={`switch-${subject.profileId ?? "local"}`}
          value={subject.profileId ?? ""}
          onChange={(e) => {
            if (e.target.value === "__add") state.startAdd();
            else if (e.target.value) state.switchTo(e.target.value);
          }}
          className="washi-field max-w-[14rem] cursor-pointer py-2 pl-3 pr-8 text-xs"
        >
          {!subject.profileId ? <option value="">{subject.name || ui.switchPerson}</option> : null}
          {state.profiles.map((p) => (
            <option key={p.id} value={p.id}>
              {optionLabel(p)}
            </option>
          ))}
          <option value="__add">＋ {ui.addPerson}</option>
        </select>
        <button type="button" onClick={state.startEdit} className="washi-btn-secondary inline-flex items-center gap-1.5 px-3 py-2 text-xs">
          <Pencil size={13} aria-hidden />
          {ui.edit}
        </button>
      </div>
    </div>
  );
}

export default function ToolResultFrame<T>({
  state,
  idPrefix,
  intro,
  submitLabel,
  loadingClassName = "h-48",
  showName = true,
  showTime = true,
  showPlace = true,
  children,
}: {
  state: ProfileResult<T>;
  idPrefix: string;
  /** Shown above the form; defaults to the shared "we need your birth details". */
  intro?: string;
  submitLabel?: string;
  loadingClassName?: string;
  showName?: boolean;
  showTime?: boolean;
  showPlace?: boolean;
  children: (result: T, subject: Subject) => ReactNode;
}) {
  const { language } = useLanguage();
  const ui = toolUiCopy[language];
  const preview = chartPreviewCopy[language];
  const headingRef = useRef<HTMLHeadingElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  // After a visitor action (submit, switch person, retry), bring the new
  // result into view and move focus to its heading.
  const { revealToken, result, status } = state;
  useEffect(() => {
    if (!revealToken || status !== "idle" || !result || !resultRef.current) return;
    const rect = resultRef.current.getBoundingClientRect();
    if (rect.top < 0 || rect.top > window.innerHeight * 0.6) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      resultRef.current.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
    headingRef.current?.focus({ preventScroll: true });
  }, [revealToken, result, status]);

  if (!state.isLoaded) return <Calculating className={loadingClassName} />;

  if (state.formOpen) {
    return (
      <form onSubmit={state.submit} noValidate className="washi-card p-6 md:p-7">
        <p className="mb-4 font-body text-text">{intro ?? preview.needDetails}</p>
        <BirthDetailsFields
          value={state.entry}
          onChange={state.setEntry}
          idPrefix={idPrefix}
          errors={state.errors}
          showName={showName}
          showTime={showTime}
          showPlace={showPlace}
        />
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <button type="submit" disabled={state.status === "loading"} className="washi-btn-primary disabled:opacity-60">
            {state.status === "loading" ? ui.calculating : (submitLabel ?? preview.generate)}
          </button>
          {state.editing && state.subject ? (
            <button type="button" onClick={state.cancelEdit} className="washi-btn-secondary px-4 text-sm">
              {ui.cancel}
            </button>
          ) : null}
        </div>
      </form>
    );
  }

  if (state.status === "error" && (!state.result || !state.resultIsForSubject)) {
    return (
      <InlineError message={ui.computeError}>
        <button type="button" onClick={state.retry} className="washi-btn-primary inline-flex items-center gap-1.5 px-4 text-sm">
          <RotateCcw size={14} aria-hidden />
          {ui.retry}
        </button>
        <button type="button" onClick={state.startEdit} className="washi-btn-secondary px-4 text-sm">
          {ui.edit}
        </button>
      </InlineError>
    );
  }

  // Never show one person's result under another person's name.
  if (!state.result || !state.subject || !state.resultIsForSubject) {
    return <Calculating className={loadingClassName} />;
  }

  return (
    <div ref={resultRef} className="scroll-mt-24" aria-busy={state.status === "loading"}>
      <PersonBar state={state} headingRef={headingRef} showTime={showTime} />
      {state.status === "error" ? (
        <div className="mb-6">
          <InlineError message={ui.computeError}>
            <button type="button" onClick={state.retry} className="washi-btn-primary px-4 text-sm">
              {ui.retry}
            </button>
          </InlineError>
        </div>
      ) : null}
      <div className={state.status === "loading" ? "opacity-60 transition-opacity" : "transition-opacity"}>
        {children(state.result, state.subject)}
      </div>
    </div>
  );
}
