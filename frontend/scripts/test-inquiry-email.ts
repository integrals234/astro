/**
 * Smoke-test script for the Resend inquiry pipeline.
 * Run: npx tsx scripts/test-inquiry-email.ts
 */
import { getResendConfig } from "@/lib/resend-config";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { Resend } from "resend";

function loadEnvLocal() {
  const envPath = resolve(process.cwd(), ".env.local");
  try {
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
  } catch {
    // .env.local is optional when env vars are already exported
  }
}

async function main() {
  loadEnvLocal();

  const config = getResendConfig();
  if (!config.ok) {
    console.error("Missing:", config.missing.join(", "));
    process.exit(1);
  }

  const resend = new Resend(config.apiKey);
  const { data, error } = await resend.emails.send({
    from: config.fromEmail,
    to: [config.recipientEmail],
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
