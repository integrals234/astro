#!/usr/bin/env node
/**
 * `prisma migrate deploy`, run at build time — but only where it belongs.
 *
 * - Vercel preview/development builds: skipped. A preview deployment must not
 *   be able to migrate the production database, and it should not fail
 *   because the database is asleep. (A preview build failed with P1001:
 *   Prisma's default 5 s connect timeout against a scaled-to-zero Neon
 *   compute in another region.)
 * - Vercel production builds and local builds (no VERCEL_ENV): migrate as
 *   before, with a 30 s connect timeout and up to three attempts, so a
 *   cold Neon compute has time to wake.
 */
import { spawnSync } from "node:child_process";

const env = process.env.VERCEL_ENV;
if (env && env !== "production") {
  console.log(`[migrate-deploy] VERCEL_ENV=${env}: skipping prisma migrate deploy (production builds only).`);
  process.exit(0);
}

/** Add connect_timeout to a Postgres URL unless one is already set. */
function withConnectTimeout(url, seconds) {
  if (!url) return url;
  try {
    const parsed = new URL(url);
    if (!parsed.searchParams.has("connect_timeout")) {
      parsed.searchParams.set("connect_timeout", String(seconds));
    }
    return parsed.toString();
  } catch {
    return url;
  }
}

const childEnv = {
  ...process.env,
  DATABASE_URL: withConnectTimeout(process.env.DATABASE_URL, 30),
  DIRECT_URL: withConnectTimeout(process.env.DIRECT_URL, 30),
};

const attempts = 3;
for (let attempt = 1; attempt <= attempts; attempt++) {
  const result = spawnSync("npx", ["prisma", "migrate", "deploy"], {
    stdio: "inherit",
    env: childEnv,
    shell: process.platform === "win32",
  });
  if (result.status === 0) process.exit(0);
  if (attempt < attempts) {
    console.log(`[migrate-deploy] attempt ${attempt} failed; retrying in 10 s (database may be waking up)…`);
    await new Promise((resolve) => setTimeout(resolve, 10_000));
  }
}
console.error("[migrate-deploy] prisma migrate deploy failed after 3 attempts.");
process.exit(1);
