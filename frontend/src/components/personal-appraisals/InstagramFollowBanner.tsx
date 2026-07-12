import { ArrowUpRight } from "lucide-react";

export const INSTAGRAM_PROFILE_URL =
  "https://www.instagram.com/jyotishlife.jp?igsh=cG44cTYzZjhyazM2";

export function InstagramIcon({ className }: { className?: string }) {
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
      className="washi-card overflow-hidden px-6 py-8 md:px-10 md:py-11"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0 flex-1 space-y-4">
          <p className="inline-flex items-center gap-2 border border-border px-3 py-1 text-[10px] font-body font-medium uppercase tracking-[0.22em] text-terracotta">
            <InstagramIcon className="h-3.5 w-3.5" />
            {copy.badge}
          </p>

          <div className="space-y-2">
            <h2
              id="instagram-follow-heading"
              className="font-header text-2xl md:text-3xl lg:text-4xl text-ink leading-tight"
            >
              {copy.title}
            </h2>
            <p className="font-body text-lg md:text-xl font-medium tracking-tight text-terracotta">
              {copy.handle}
            </p>
          </div>

          <p className="max-w-xl text-sm md:text-base text-text-muted leading-relaxed">
            {copy.body}
          </p>

          <ul className="flex flex-wrap gap-2 pt-1">
            {copy.perks.map((perk) => (
              <li
                key={perk}
                className="rounded border border-border bg-washi px-3 py-1 text-xs text-text"
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
            className="washi-btn-secondary group inline-flex w-full items-center justify-center gap-2.5 px-8 py-4 text-base transition-colors hover:bg-terracotta/10 md:w-auto"
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
    </section>
  );
}
