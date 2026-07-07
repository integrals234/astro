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

const INSTAGRAM_GRADIENT =
  "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)";

export default function HomeInstagramStrip({ copy }: { copy: HomeInstagramCopy }) {
  return (
    <div
      className="rounded-xl p-px shadow-[0_0_22px_-14px_rgba(225,48,108,0.38)]"
      style={{ background: INSTAGRAM_GRADIENT }}
    >
      <aside
        aria-label={copy.line}
        className="relative flex flex-col gap-3 overflow-hidden rounded-[0.65rem] bg-shell-bg/95 px-4 py-3 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:gap-4"
      >
        <div
          className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full opacity-[0.14] blur-2xl"
          style={{
            background: "radial-gradient(circle, #dc2743 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-12 -left-8 h-20 w-20 rounded-full opacity-[0.1] blur-2xl"
          style={{
            background: "radial-gradient(circle, #bc1888 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="relative flex min-w-0 items-start gap-3 sm:items-center">
          <span
            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#dc2743]/20 sm:mt-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(240,148,51,0.12), rgba(188,24,136,0.12))",
            }}
          >
            <InstagramIcon className="h-4 w-4 text-[#e6683c]" />
          </span>
          <div className="min-w-0">
            <p className="bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] bg-clip-text text-sm font-medium text-transparent">
              {copy.handle}
            </p>
            <p className="mt-0.5 text-xs leading-relaxed text-shell-muted">{copy.line}</p>
          </div>
        </div>

        <a
          href={INSTAGRAM_PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex shrink-0 items-center justify-center gap-1 self-start overflow-hidden rounded-lg px-3 py-1.5 text-xs font-semibold text-white shadow-[0_4px_18px_-8px_rgba(220,39,67,0.45)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_6px_22px_-6px_rgba(220,39,67,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dc2743]/60 animate-[pulse_3s_ease-in-out_infinite] hover:animate-none sm:self-auto"
          style={{ background: INSTAGRAM_GRADIENT }}
        >
          <InstagramIcon className="h-3.5 w-3.5 shrink-0 opacity-90" />
          {copy.cta}
          <ArrowUpRight
            size={12}
            aria-hidden
            className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </aside>
    </div>
  );
}
