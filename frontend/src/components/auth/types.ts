export interface AuthUser {
  id: string;
  fullName: string | null;
  firstName: string | null;
  email: string | null;
  createdAt: Date | null;
}

export interface AuthState {
  /** False until sign-in state is actually known. */
  isLoaded: boolean;
  isSignedIn: boolean;
  user: AuthUser | null;
}

export type ClerkWidgetKind = "userButton" | "signIn" | "signUp";

export interface ClerkWidget {
  id: string;
  el: HTMLElement;
  kind: ClerkWidgetKind;
  props: Record<string, unknown>;
}
