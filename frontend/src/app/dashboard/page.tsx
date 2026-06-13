import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ChartWorkspace from "@/components/ChartWorkspace";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-serif font-medium text-indigo-950 tracking-tight">
            Dashboard
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Generate, save, and revisit your charts.{" "}
            <Link href="/" className="text-indigo-600 hover:text-indigo-800">
              Public generator
            </Link>
          </p>
        </div>
        <UserButton afterSignOutUrl="/" />
      </div>
      <ChartWorkspace enablePersistence />
    </div>
  );
}
