import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function PremiumPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-medium text-indigo-950 tracking-tight">
              Premium
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Advanced astrology tools and subscriptions.
            </p>
          </div>
          <UserButton afterSignOutUrl="/" />
        </header>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] p-8">
          <p className="text-gray-600 text-sm leading-relaxed">
            Premium features are coming soon. Your account is authenticated and
            ready for subscription integration via the{" "}
            <code className="text-xs bg-gray-50 px-1.5 py-0.5 rounded">
              subscriptionStatus
            </code>{" "}
            field on the User model.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            <Link href="/" className="text-indigo-600 hover:text-indigo-800">
              Back to chart generator
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
