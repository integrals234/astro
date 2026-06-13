const DEFAULT_INQUIRY_RECIPIENT = "alphamac64@gmail.com";
const DEFAULT_FROM_EMAIL = "onboarding@resend.dev";

function readEnv(name: string): string | undefined {
  const raw = process.env[name];
  if (!raw) return undefined;

  const trimmed = raw.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }

  return trimmed;
}

export function getResendConfig():
  | { ok: true; apiKey: string; fromEmail: string; recipientEmail: string }
  | { ok: false; missing: string[] } {
  const apiKey = readEnv("RESEND_API_KEY");
  const fromEmail = readEnv("RESEND_FROM_EMAIL") ?? DEFAULT_FROM_EMAIL;
  const recipientEmail =
    readEnv("INQUIRY_RECIPIENT_EMAIL") ?? DEFAULT_INQUIRY_RECIPIENT;

  const missing: string[] = [];
  if (!apiKey) missing.push("RESEND_API_KEY");

  if (missing.length > 0) {
    return { ok: false, missing };
  }

  return {
    ok: true,
    apiKey,
    fromEmail,
    recipientEmail,
  };
}
