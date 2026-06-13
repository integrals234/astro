import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
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
              Dashboard
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Your saved charts and workspace will appear here.
            </p>
          </div>
          <UserButton afterSignOutUrl="/" />
        </header>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] p-8">
          <p className="text-gray-600 text-sm leading-relaxed">
            This protected area is ready for future dashboard features. The
            public chart generator remains available on the{" "}
            <Link href="/" className="text-indigo-600 hover:text-indigo-800">
              home page
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
