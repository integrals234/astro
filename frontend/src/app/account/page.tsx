import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AccountPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();

  return (
    <main className="min-h-screen bg-[#FAFAFA] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-medium text-indigo-950 tracking-tight">
              Account
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              Manage your profile and preferences.
            </p>
          </div>
          <UserButton afterSignOutUrl="/" />
        </header>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] p-8 space-y-4">
          <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
              Name
            </div>
            <div className="text-gray-900">
              {user?.fullName ?? user?.firstName ?? "—"}
            </div>
          </div>
          <div>
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
              Email
            </div>
            <div className="text-gray-900">
              {user?.emailAddresses[0]?.emailAddress ?? "—"}
            </div>
          </div>
          <p className="pt-4 text-sm text-gray-500">
            Return to the{" "}
            <Link href="/" className="text-indigo-600 hover:text-indigo-800">
              chart generator
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
