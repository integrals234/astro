import { Suspense } from "react";
import PublicHeader from "@/components/layout/PublicHeader";
import SiteFooter from "@/components/layout/SiteFooter";

/**
 * Chrome for public, server-rendered content routes (the article and entity
 * pages from Phases 3.3 and 3.5).
 *
 * Header and footer are the shared components, so this is only the page frame:
 * the ambient wash, the column, and the footer placement. Phase 2.4 converged
 * the four duplicate public headers into `<PublicHeader>` rather than letting
 * this become a fifth.
 */
export default function PublicPageShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="washi-ambient flex min-h-screen flex-col bg-washi text-text">
      {/* Separate Suspense boundaries: React hydrates header, page and footer
          as separate short tasks (selective hydration) instead of one long
          one. Nothing suspends; the HTML is unchanged. */}
      <Suspense>
        <PublicHeader maxWidth="max-w-6xl" />
      </Suspense>
      <main className="flex-1">
        <Suspense>{children}</Suspense>
      </main>
      <Suspense>
        <SiteFooter />
      </Suspense>
    </div>
  );
}
