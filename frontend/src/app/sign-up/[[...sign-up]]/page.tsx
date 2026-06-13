import { SignUp } from "@clerk/nextjs";
import { clerkAppearance } from "@/lib/clerk-appearance";

export default function SignUpPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-serif font-medium text-indigo-950 tracking-tight">
          Astro
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Create an account to save charts and unlock premium tools
        </p>
      </div>
      <SignUp
        appearance={clerkAppearance}
        routing="path"
        path="/sign-up"
        signInUrl="/sign-in"
      />
    </main>
  );
}
