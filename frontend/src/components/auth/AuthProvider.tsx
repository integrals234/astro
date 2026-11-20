"use client";

import dynamic from "next/dynamic";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import type { AuthState, ClerkWidget, ClerkWidgetKind } from "@/components/auth/types";

export type { AuthState, AuthUser, ClerkWidgetKind } from "@/components/auth/types";

/*
 * Clerk, loaded only when it is needed (performance pass).
 *
 * Wrapping the whole app in <ClerkProvider> put Clerk's React SDK in every
 * page's first-load JavaScript and started a ~300KB download of clerk-js from
 * Clerk's CDN on every visit, for the large majority of visitors who are not
 * signed in. On a throttled phone that was the biggest single item still
 * standing between first paint and an interactive page.
 *
 * Now the app reads sign-in state from this context, and Clerk itself lives
 * in a separate island that loads only when:
 *   - the browser carries Clerk's session cookies (someone signed in), or
 *   - a page actually shows a Clerk component (sign-in / sign-up), or
 *   - the URL carries one of Clerk's handshake parameters.
 * Everyone else is known to be signed out as soon as the page hydrates,
 * without downloading any of it.
 *
 * Clerk's components (the user menu, the sign-in form) are rendered by the
 * island through portals into placeholders that pages put where they want
 * them (<ClerkSlot>), so no page imports `@clerk/nextjs` directly and the app
 * tree never has to be re-mounted under a provider that arrived late.
 */

const UNKNOWN: AuthState = { isLoaded: false, isSignedIn: false, user: null };
const SIGNED_OUT: AuthState = { isLoaded: true, isSignedIn: false, user: null };

/**
 * Does this browser look signed in? Clerk keeps `__client_uat` (non-zero
 * while a session exists) and `__session` readable on the app's own domain,
 * suffixed copies included. A stale cookie only costs a Clerk load that then
 * reports signed-out; it never shows the wrong state.
 */
function readSessionHint(): boolean {
  if (/[?&]__clerk/.test(window.location.search)) return true;
  return document.cookie.split(/;\s*/).some((pair) => {
    const eq = pair.indexOf("=");
    if (eq < 0) return false;
    const name = pair.slice(0, eq);
    const value = pair.slice(eq + 1);
    if (name === "__client_uat" || name.startsWith("__client_uat_")) {
      return value !== "" && value !== "0";
    }
    if (name === "__session" || name.startsWith("__session_")) return value !== "";
    return false;
  });
}

const noopSubscribe = () => () => {};

const ClerkIsland = dynamic(() => import("@/components/auth/ClerkIsland"), { ssr: false });

const AuthContext = createContext<AuthState>(UNKNOWN);
type Register = (id: string, widget: Omit<ClerkWidget, "id">) => () => void;
const SlotContext = createContext<Register | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  const { resolvedTheme } = useTheme();
  // null during prerender and hydration; the real answer right after.
  const hint = useSyncExternalStore(noopSubscribe, readSessionHint, () => null);
  const [clerkState, setClerkState] = useState<AuthState | null>(null);
  const [widgets, setWidgets] = useState<ClerkWidget[]>([]);

  const register = useCallback<Register>((id, widget) => {
    setWidgets((current) => [...current.filter((w) => w.id !== id), { id, ...widget }]);
    return () => setWidgets((current) => current.filter((w) => w.id !== id));
  }, []);

  // Once Clerk is loaded it stays loaded — a sign-in on /sign-in must keep
  // reporting after the redirect to a page without any Clerk component.
  const needClerk = clerkState !== null || hint === true || widgets.length > 0;

  // Clerk's own answer wins once it has one; until then a browser with no
  // session cookies is signed out.
  const state = clerkState ?? (hint === false && !needClerk ? SIGNED_OUT : UNKNOWN);

  return (
    <AuthContext.Provider value={state}>
      <SlotContext.Provider value={register}>
        {children}
        {needClerk ? (
          <ClerkIsland
            language={language}
            theme={resolvedTheme === "dark" ? "dark" : "light"}
            widgets={widgets}
            onState={setClerkState}
          />
        ) : null}
      </SlotContext.Provider>
    </AuthContext.Provider>
  );
}

/** Sign-in state. `isLoaded` is false until it is actually known. */
export function useAuthState(): AuthState {
  return useContext(AuthContext);
}

/** Renders only once the visitor is known to be signed in. */
export function SignedIn({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn } = useAuthState();
  return isLoaded && isSignedIn ? <>{children}</> : null;
}

/** Renders only once the visitor is known to be signed out. */
export function SignedOut({ children }: { children: React.ReactNode }) {
  const { isLoaded, isSignedIn } = useAuthState();
  return isLoaded && !isSignedIn ? <>{children}</> : null;
}

/**
 * A placeholder Clerk renders one of its components into. Mounting one is
 * what asks for Clerk on pages that need it without a session (sign-in).
 * Props must be plain data: they cross into the island as JSON.
 */
export function ClerkSlot({
  kind,
  props,
  className,
}: {
  kind: ClerkWidgetKind;
  props?: Record<string, unknown>;
  className?: string;
}) {
  const id = useId();
  const register = useContext(SlotContext);
  const [el, setEl] = useState<HTMLElement | null>(null);
  const propsKey = JSON.stringify(props ?? {});

  useEffect(() => {
    if (!el || !register) return;
    return register(id, { el, kind, props: JSON.parse(propsKey) as Record<string, unknown> });
  }, [el, id, kind, propsKey, register]);

  return <span ref={setEl} className={className} />;
}

const AVATAR = "h-8 w-8 bg-terracotta text-washi";

/**
 * Clerk's account menu. The placeholder keeps the avatar's size so the
 * header does not shift when it arrives.
 */
export function UserMenu({ avatarClassName = AVATAR, popoverClassName }: { avatarClassName?: string; popoverClassName?: string }) {
  const props = useMemo(
    () => ({
      afterSignOutUrl: "/",
      appearance: {
        elements: {
          avatarBox: avatarClassName,
          ...(popoverClassName ? { userButtonPopoverCard: popoverClassName } : {}),
        },
      },
    }),
    [avatarClassName, popoverClassName],
  );
  return <ClerkSlot kind="userButton" props={props} className="inline-flex h-8 min-w-8 items-center justify-center" />;
}
