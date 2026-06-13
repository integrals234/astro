import { SignIn } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerk-appearance";

export default function SignInPage() {
  return (
    <main className="min-h-screen bg-shell-bg flex flex-col items-center justify-center p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-serif font-medium text-shell-warm tracking-tight">
          Jyotish Life
        </h1>
        <p className="mt-2 text-sm text-shell-muted">
          Sign in to access your dashboard and premium features
        </p>
      </div>
      <SignIn
        appearance={clerkAppearance}
        routing="path"
        path="/sign-in"
        signUpUrl="/sign-up"
      />
    </main>
  );
}
