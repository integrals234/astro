"use client";

import { ArrowUpRight } from "lucide-react";
import {
  INSTAGRAM_PROFILE_URL,
  InstagramIcon,
} from "@/components/personal-appraisals/InstagramFollowBanner";
import { useHaptic } from "@/hooks/useHaptic";

export interface HomeInstagramCopy {
  line: string;
  handle: string;
  cta: string;
}

export default function HomeInstagramStrip({ copy }: { copy: HomeInstagramCopy }) {
  const { selection } = useHaptic();

  return (
    <aside
      aria-label={copy.line}
      className="ig-strip washi-card flex flex-col gap-3 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
    >
      <div className="flex min-w-0 items-start gap-3 sm:items-center">
        <span className="ig-icon-chip mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md sm:mt-0">
          <InstagramIcon className="h-4 w-4" />
        </span>
        <div className="min-w-0">
          <p className="ig-handle font-body text-sm font-semibold tracking-tight">
            {copy.handle}
          </p>
          <p className="mt-0.5 text-xs leading-relaxed text-text-muted">{copy.line}</p>
        </div>
      </div>

      <a
        href={INSTAGRAM_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => selection()}
        className="ig-cta group inline-flex shrink-0 items-center justify-center gap-1.5 self-start rounded-[var(--radius-button)] px-3.5 py-2 text-xs font-semibold transition-[transform,box-shadow,filter] sm:self-auto"
      >
        <InstagramIcon className="h-3.5 w-3.5 shrink-0" />
        {copy.cta}
        <ArrowUpRight
          size={12}
          aria-hidden
          className="shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </aside>
  );
}
