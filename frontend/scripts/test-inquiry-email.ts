/**
 * Smoke-test script for the Resend inquiry pipeline.
 * Run: npx tsx scripts/test-inquiry-email.ts
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { Resend } from "resend";

function loadEnvLocal() {
  const envPath = resolve(process.cwd(), ".env.local");
  const content = readFileSync(envPath, "utf8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq);
    let value = trimmed.slice(eq + 1);
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    process.env[key] ??= value;
  }
}

async function main() {
  loadEnvLocal();

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;
  const toEmail =
    process.env.INQUIRY_RECIPIENT_EMAIL?.trim() || "alphamac64@gmail.com";

  if (!apiKey || !fromEmail) {
    console.error("Missing RESEND_API_KEY or RESEND_FROM_EMAIL in .env.local");
    process.exit(1);
  }

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject: "Pipeline test — Personal Appraisal inquiry",
    html: "<p>If you received this, the Resend pipeline is working.</p>",
    text: "If you received this, the Resend pipeline is working.",
  });

  if (error) {
    console.error("Resend error:", error);
    process.exit(1);
  }

  console.log("Email sent successfully:", data?.id);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
