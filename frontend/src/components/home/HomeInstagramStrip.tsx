import { ArrowUpRight } from "lucide-react";
import {
  INSTAGRAM_PROFILE_URL,
  InstagramIcon,
} from "@/components/personal-appraisals/InstagramFollowBanner";

export interface HomeInstagramCopy {
  line: string;
  handle: string;
  cta: string;
}

export default function HomeInstagramStrip({ copy }: { copy: HomeInstagramCopy }) {
  return (
    <aside
      aria-label={copy.line}
      className="washi-card flex flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
    >
      <div className="flex min-w-0 items-start gap-3 sm:items-center">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-border sm:mt-0">
          <InstagramIcon className="h-4 w-4 text-ink" />
        </span>
        <div className="min-w-0">
          <p className="font-body text-sm font-medium text-ink">{copy.handle}</p>
          <p className="mt-0.5 text-xs leading-relaxed text-text-muted">{copy.line}</p>
        </div>
      </div>

      <a
        href={INSTAGRAM_PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="washi-btn-secondary group inline-flex shrink-0 items-center justify-center gap-1 self-start px-3 py-1.5 text-xs transition-colors hover:bg-terracotta/10 sm:self-auto"
      >
        <InstagramIcon className="h-3.5 w-3.5 shrink-0" />
        {copy.cta}
        <ArrowUpRight
          size={12}
          aria-hidden
          className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </aside>
  );
}
