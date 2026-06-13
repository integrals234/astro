"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import AppShell from "@/components/layout/AppShell";
import ChartWorkspace from "@/components/ChartWorkspace";

export default function HomePageClient() {
  return (
    <>
      <SignedIn>
        <AppShell>
          <ChartWorkspace embedded enablePersistence />
        </AppShell>
      </SignedIn>
      <SignedOut>
        <ChartWorkspace showAuthNav />
      </SignedOut>
    </>
  );
}
