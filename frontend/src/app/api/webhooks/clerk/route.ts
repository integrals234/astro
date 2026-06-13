import { Webhook } from "svix";
import { headers } from "next/headers";
import { WebhookEvent } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

type ClerkEmailAddress = {
  id: string;
  email_address: string;
};

type ClerkUserData = {
  id: string;
  first_name: string | null;
  last_name: string | null;
  email_addresses: ClerkEmailAddress[];
  primary_email_address_id: string | null;
};

function getPrimaryEmail(user: ClerkUserData): string | null {
  if (!user.email_addresses.length) {
    return null;
  }

  const primary = user.primary_email_address_id
    ? user.email_addresses.find(
        (address) => address.id === user.primary_email_address_id
      )
    : user.email_addresses[0];

  return primary?.email_address ?? null;
}

function getDisplayName(user: ClerkUserData): string | null {
  const parts = [user.first_name, user.last_name].filter(Boolean);
  return parts.length > 0 ? parts.join(" ") : null;
}

async function syncUser(user: ClerkUserData) {
  const email = getPrimaryEmail(user);

  if (!email) {
    throw new Error(`Clerk user ${user.id} has no primary email address`);
  }

  await prisma.user.upsert({
    where: { id: user.id },
    create: {
      id: user.id,
      email,
      name: getDisplayName(user),
    },
    update: {
      email,
      name: getDisplayName(user),
    },
  });
}

export async function POST(req: Request) {
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;

  if (!webhookSecret) {
    console.error("Missing CLERK_WEBHOOK_SECRET environment variable");
    return new Response("Webhook secret not configured", { status: 500 });
  }

  const headerPayload = await headers();
  const svixId = headerPayload.get("svix-id");
  const svixTimestamp = headerPayload.get("svix-timestamp");
  const svixSignature = headerPayload.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return new Response("Missing svix headers", { status: 400 });
  }

  const payload = await req.text();
  const wh = new Webhook(webhookSecret);

  let event: WebhookEvent;

  try {
    event = wh.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as WebhookEvent;
  } catch (error) {
    console.error("Clerk webhook verification failed:", error);
    return new Response("Invalid webhook signature", { status: 400 });
  }

  if (event.type === "user.created" || event.type === "user.updated") {
    try {
      await syncUser(event.data as ClerkUserData);
    } catch (error) {
      console.error(`Failed to sync user on ${event.type}:`, error);
      return new Response("Failed to sync user", { status: 500 });
    }
  }

  return new Response("Webhook received", { status: 200 });
}
