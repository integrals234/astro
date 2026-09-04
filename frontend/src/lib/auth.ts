import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

/**
 * Self-healing counterpart to the Clerk webhook (`/api/webhooks/clerk`),
 * which is the only *other* place a `User` row is created. On a Vercel
 * preview deployment (or any environment the webhook URL doesn't point at,
 * or a session that starts just ahead of the async webhook), that row can
 * be missing entirely — and every write that depends on it (`SavedChart.userId`
 * is a hard FK to `User.id`) then fails with a foreign-key violation that
 * was previously swallowed as a generic 500, silently dropping the chart.
 *
 * The extra cost on the common path (row already exists) is one indexed
 * primary-key lookup — a Clerk API round trip only happens the first time a
 * given user's row is genuinely missing.
 */
async function ensureUserRow(userId: string): Promise<void> {
  const existing = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true },
  });
  if (existing) return;

  const user = await currentUser();
  if (!user) return;

  const email =
    user.primaryEmailAddress?.emailAddress ??
    user.emailAddresses[0]?.emailAddress;
  if (!email) return;

  const name = [user.firstName, user.lastName].filter(Boolean).join(" ") || null;

  await prisma.user.upsert({
    where: { id: userId },
    create: { id: userId, email, name },
    update: {},
  });
}

export async function requireUserId(): Promise<string> {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  await ensureUserRow(userId);
  return userId;
}
