import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import {
  APP_LANGUAGE_COOKIE_MAX_AGE,
  APP_LANGUAGE_KEY,
  DEFAULT_APP_LANGUAGE,
  languageFromAcceptLanguage,
  languageFromCountry,
} from "@/lib/i18n/language";

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/webhooks(.*)",
  "/about",
  "/pricing",
  "/features",
  "/settings",
  "/landing(.*)",
]);

export default clerkMiddleware(async (auth, request) => {
  const { pathname } = request.nextUrl;
  const isChartGenerator = pathname === "/chart";

  if (!isPublicRoute(request) && !isChartGenerator) {
    await auth.protect();
  }

  if (request.cookies.has(APP_LANGUAGE_KEY)) return NextResponse.next();

  const country =
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry");
  const language =
    languageFromCountry(country) ??
    languageFromAcceptLanguage(request.headers.get("accept-language")) ??
    DEFAULT_APP_LANGUAGE;

  // Response cookies are only visible on the next navigation. Forward the
  // detected locale as a request cookie too, so this request's root layout,
  // metadata, and client provider all render with the same language.
  const requestHeaders = new Headers(request.headers);
  const existingCookies = requestHeaders.get("cookie");
  requestHeaders.set(
    "cookie",
    [existingCookies, `${APP_LANGUAGE_KEY}=${language}`].filter(Boolean).join("; "),
  );
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.cookies.set(APP_LANGUAGE_KEY, language, {
    maxAge: APP_LANGUAGE_COOKIE_MAX_AGE,
    path: "/",
    sameSite: "lax",
  });

  return response;
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
