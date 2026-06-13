"use server";

import {
  inquiryMessages,
  parseAppraisalLocale,
} from "@/lib/personal-appraisals/i18n/messages";
import type { AppraisalLanguage } from "@/lib/personal-appraisals/types";
import { Resend } from "resend";
const DEFAULT_INQUIRY_RECIPIENT = "alphamac64@gmail.com";

function getInquiryRecipients(): string[] {
  const configured = process.env.INQUIRY_RECIPIENT_EMAIL?.trim();
  return [configured || DEFAULT_INQUIRY_RECIPIENT];
}

export type InquiryFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: {
    fullName?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+[1-9]\d{6,14}$/;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validateInquiry(
  formData: FormData,
  locale: AppraisalLanguage,
): {
  ok: true;
  data: {
    fullName: string;
    email: string;
    phone: string;
    message: string;
  };
} | {
  ok: false;
  fieldErrors: NonNullable<InquiryFormState["fieldErrors"]>;
} {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const dialCode = String(formData.get("dialCode") ?? "").trim();
  const phoneLocal = String(formData.get("phoneLocal") ?? "")
    .trim()
    .replace(/[\s()-]/g, "");
  const message = String(formData.get("message") ?? "").trim();
  const honeypot = String(formData.get("website") ?? "").trim();

  const fieldErrors: NonNullable<InquiryFormState["fieldErrors"]> = {};
  const msg = inquiryMessages[locale];

  if (honeypot) {
    return {
      ok: false,
      fieldErrors: { fullName: msg.spam },
    };
  }

  if (fullName.length < 2 || fullName.length > 100) {
    fieldErrors.fullName = msg.fullName;
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    fieldErrors.email = msg.email;
  }

  const phone = `${dialCode}${phoneLocal.replace(/^0+/, "")}`;
  if (!PHONE_PATTERN.test(phone)) {
    fieldErrors.phone = msg.phone;
  }

  if (message.length > 2000) {
    fieldErrors.message = msg.message;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors };
  }

  return {
    ok: true,
    data: { fullName, email, phone, message },
  };
}

export async function sendInquiry(
  _prevState: InquiryFormState,
  formData: FormData,
): Promise<InquiryFormState> {
  const locale = parseAppraisalLocale(formData.get("locale"));
  const msg = inquiryMessages[locale];
  const validated = validateInquiry(formData, locale);

  if (!validated.ok) {
    return {
      status: "error",
      message: msg.reviewFields,
      fieldErrors: validated.fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    console.error("Missing RESEND_API_KEY or RESEND_FROM_EMAIL");
    return {
      status: "error",
      message: msg.unavailable,
    };
  }

  const { fullName, email, phone, message } = validated.data;
  const submittedAt = new Date().toISOString();

  const html = `
    <div style="font-family: Georgia, 'Times New Roman', serif; color: #2c2825; line-height: 1.6;">
      <h2 style="margin: 0 0 16px; font-weight: normal; color: #1c1b19;">
        New Personal Appraisal Inquiry
      </h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
        <tr>
          <td style="padding: 8px 12px 8px 0; color: #6b6560; vertical-align: top;">Name</td>
          <td style="padding: 8px 0; font-weight: 600;">${escapeHtml(fullName)}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px 8px 0; color: #6b6560; vertical-align: top;">Email</td>
          <td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px 8px 0; color: #6b6560; vertical-align: top;">WhatsApp</td>
          <td style="padding: 8px 0;"><a href="https://wa.me/${phone.replace("+", "")}">${escapeHtml(phone)}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 12px 8px 0; color: #6b6560; vertical-align: top;">Concern</td>
          <td style="padding: 8px 0; white-space: pre-wrap;">${message ? escapeHtml(message) : "<em>Not provided</em>"}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px 8px 0; color: #6b6560; vertical-align: top;">Submitted</td>
          <td style="padding: 8px 0;">${escapeHtml(submittedAt)}</td>
        </tr>
      </table>
    </div>
  `;

  const text = [
    "New Personal Appraisal Inquiry",
    "",
    `Name: ${fullName}`,
    `Email: ${email}`,
    `WhatsApp: ${phone}`,
    `Concern: ${message || "Not provided"}`,
    `Submitted: ${submittedAt}`,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: getInquiryRecipients(),
      replyTo: email,
      subject: `Personal Appraisal Inquiry — ${fullName}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        status: "error",
        message: msg.sendFailed,
      };
    }

    return {
      status: "success",
      message: msg.success,
    };
  } catch (error) {
    console.error("Failed to send inquiry email:", error);
    return {
      status: "error",
      message: msg.genericError,
    };
  }
}
