"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import AppShell from "@/components/layout/AppShell";
import ChartWorkspace from "@/components/ChartWorkspace";

export default function ChartPageClient() {
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
