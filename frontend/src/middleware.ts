import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { DEFAULT_APP_LANGUAGE } from "@/lib/i18n/language";
import {
  LOCALE_SEGMENT_PATTERN,
  localizedHref,
  stripLocale,
} from "@/lib/i18n/routing";

/*
 * Default public, explicitly protected (Phase 3.1).
 *
 * The previous model was an allow-list, which meant every content route
 * (/learn-jyotish, /horoscope, /personal-appraisals, /blogs, /premium) served
 * Googlebot a sign-in redirect. Only routes that read or write a signed-in
 * user's own data are gated now.
 *
 * /settings stays public deliberately: it is the language + appearance control
 * signed-out visitors reach from the header. It is Disallow-ed in robots.txt
 * instead, so it costs nothing in crawl budget.
 *
 * Patterns are matched against the locale-stripped pathname, so `/en/chart/saved`
 * gates exactly like `/chart/saved`.
 */
const PROTECTED_PATTERNS = [
  /^\/account(?:\/|$)/,
  /^\/dashboard(?:\/|$)/,
  /^\/chart\/saved(?:\/|$)/,
  /^\/chart\/recent(?:\/|$)/,
  /^\/saved-charts(?:\/|$)/,
  /^\/recent-charts(?:\/|$)/,
  /^\/api\/charts(?:\/|$)/,
  /^\/api\/preferences(?:\/|$)/,
];

export default clerkMiddleware(async (auth, request) => {
  const { pathname } = request.nextUrl;

  const { locale, pathname: bare } = stripLocale(pathname);
  if (PROTECTED_PATTERNS.some((pattern) => pattern.test(bare))) {
    /*
     * Returned explicitly rather than calling `auth.protect()`.
     *
     * `protect()` signals its outcome by taking over the response, but this
     * handler always returns its own rewrite below — so the two were competing
     * for control of the same request. Clerk won, via an interstitial rewrite
     * to `/clerk_<id>`, which then matched `[locale]` and rendered the homepage
     * at a protected URL. Returning the redirect here leaves no ambiguity: the
     * gate is a plain 307 to sign-in, and nothing downstream runs.
     */
    const { userId } = await auth();
    if (!userId) {
      // A `fetch()` expecting JSON should get a status it can branch on, not
      // an HTML sign-in page with a 307 in front of it.
      if (pathname.startsWith("/api")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      /*
       * Built by hand rather than via `redirectToSignIn()`, which uses the
       * single `NEXT_PUBLIC_CLERK_SIGN_IN_URL` and would drop the locale —
       * sending an `/en` visitor to the Japanese sign-in page.
       */
      const signInUrl = new URL(
        localizedHref(locale, "/sign-in"),
        request.url,
      );
      signInUrl.searchParams.set("redirect_url", request.url);
      return NextResponse.redirect(signInUrl);
    }
  }

  // Route handlers are locale-agnostic.
  if (pathname.startsWith("/api")) return NextResponse.next();

  const localeMatch = LOCALE_SEGMENT_PATTERN.exec(pathname);

  // `/ja/...` and the bare path would otherwise be two URLs for one page.
  // The bare path is canonical; send the prefixed form there permanently.
  if (localeMatch?.[1] === DEFAULT_APP_LANGUAGE) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(localeMatch[0].length) || "/";
    return NextResponse.redirect(url, 301);
  }

  // `/en`, `/hi`, `/ko` are real URLs — serve them as-is.
  if (localeMatch) return NextResponse.next();

  // Everything else is Japanese, served from the root and rewritten inward.
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_APP_LANGUAGE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|txt|xml)).*)",
    "/(api|trpc)(.*)",
  ],
};
