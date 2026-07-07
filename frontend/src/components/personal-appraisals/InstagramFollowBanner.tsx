import { ArrowUpRight } from "lucide-react";

export const INSTAGRAM_PROFILE_URL =
  "https://www.instagram.com/jyotishlife.jp?igsh=cG44cTYzZjhyazM2";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export interface InstagramFollowCopy {
  badge: string;
  title: string;
  handle: string;
  body: string;
  cta: string;
  perks: string[];
}

export default function InstagramFollowBanner({
  copy,
}: {
  copy: InstagramFollowCopy;
}) {
  return (
    <section
      aria-labelledby="instagram-follow-heading"
      className="relative overflow-hidden rounded-3xl border-2 border-transparent p-[2px] shadow-[0_0_48px_-10px_rgba(225,48,108,0.6)]"
      style={{
        background:
          "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
      }}
    >
      <div className="relative overflow-hidden rounded-[1.35rem] bg-shell-bg/95 px-6 py-8 md:px-10 md:py-11 backdrop-blur-sm">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-35 blur-3xl"
          style={{
            background: "radial-gradient(circle, #dc2743 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-16 h-52 w-52 rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, #bc1888 0%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0 flex-1 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#dc2743]/35 bg-[#dc2743]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f5a8c4]">
              <InstagramIcon className="h-3.5 w-3.5" />
              {copy.badge}
            </p>

            <div className="space-y-2">
              <h2
                id="instagram-follow-heading"
                className="font-serif text-2xl md:text-3xl lg:text-4xl text-shell-warm leading-tight"
              >
                {copy.title}
              </h2>
              <p className="text-lg md:text-xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888]">
                {copy.handle}
              </p>
            </div>

            <p className="max-w-xl text-sm md:text-base text-shell-muted leading-relaxed">
              {copy.body}
            </p>

            <ul className="flex flex-wrap gap-2 pt-1">
              {copy.perks.map((perk) => (
                <li
                  key={perk}
                  className="rounded-full border border-shell-border/80 bg-shell-elevated/60 px-3 py-1 text-xs text-shell-warm/90"
                >
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          <div className="shrink-0 md:pl-4">
            <a
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full md:w-auto items-center justify-center gap-2.5 rounded-2xl px-8 py-4 text-base font-semibold text-white shadow-[0_8px_32px_-6px_rgba(220,39,67,0.65)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_12px_40px_-4px_rgba(220,39,67,0.75)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#dc2743] animate-pulse hover:animate-none"
              style={{
                background:
                  "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
              }}
            >
              <InstagramIcon className="h-5 w-5 shrink-0" />
              {copy.cta}
              <ArrowUpRight
                size={18}
                aria-hidden
                className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
