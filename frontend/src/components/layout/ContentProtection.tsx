"use client";

import { useEffect } from "react";

function isEditableTarget(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;

  return (
    target.closest(
      'input, textarea, select, [contenteditable="true"], [data-allow-copy="true"], .cl-formFieldInput, .cl-input, .cl-otpCodeFieldInput'
    ) !== null
  );
}

function isAllowedAction(target: EventTarget | null): boolean {
  if (!(target instanceof HTMLElement)) return false;
  return target.closest('[data-allow-copy="true"], [data-allow-download="true"]') !== null;
}

export default function ContentProtection() {
  useEffect(() => {
    const onContextMenu = (event: MouseEvent) => {
      if (isEditableTarget(event.target) || isAllowedAction(event.target)) return;
      event.preventDefault();
    };

    const onCopy = (event: ClipboardEvent) => {
      if (isEditableTarget(event.target) || isAllowedAction(event.target)) return;
      event.preventDefault();
    };

    const onCut = (event: ClipboardEvent) => {
      if (isEditableTarget(event.target) || isAllowedAction(event.target)) return;
      event.preventDefault();
    };

    const onDragStart = (event: DragEvent) => {
      if (isEditableTarget(event.target) || isAllowedAction(event.target)) return;
      event.preventDefault();
    };

    const onSelectStart = (event: Event) => {
      if (isEditableTarget(event.target) || isAllowedAction(event.target)) return;
      event.preventDefault();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (isEditableTarget(event.target) || isAllowedAction(event.target)) return;

      const key = event.key.toLowerCase();
      const mod = event.ctrlKey || event.metaKey;
      if (!mod) return;

      if (["c", "x", "s", "u", "p", "a"].includes(key)) {
        event.preventDefault();
        return;
      }

      if (event.shiftKey && ["i", "j", "c"].includes(key)) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("copy", onCopy);
    document.addEventListener("cut", onCut);
    document.addEventListener("dragstart", onDragStart);
    document.addEventListener("selectstart", onSelectStart);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("copy", onCopy);
      document.removeEventListener("cut", onCut);
      document.removeEventListener("dragstart", onDragStart);
      document.removeEventListener("selectstart", onSelectStart);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
