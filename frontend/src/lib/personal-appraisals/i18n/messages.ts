import type { AppraisalLanguage } from "../types";

export const inquiryMessages: Record<
  AppraisalLanguage,
  {
    reviewFields: string;
    unavailable: string;
    sendFailed: string;
    genericError: string;
    fullName: string;
    email: string;
    phone: string;
    message: string;
    spam: string;
    success: string;
  }
> = {
  en: {
    reviewFields: "Please review the highlighted fields and try again.",
    unavailable:
      "Our inquiry system is temporarily unavailable. Please try again shortly.",
    sendFailed:
      "We could not send your inquiry right now. Please try again in a moment.",
    genericError:
      "Something went wrong while sending your request. Please try again.",
    fullName: "Please enter your full name (2–100 characters).",
    email: "Please enter a valid email address.",
    phone: "Please enter a valid WhatsApp number with your country code.",
    message: "Message must be 2,000 characters or fewer.",
    spam: "Unable to submit this request.",
    success:
      "Thank you. Our astrologers will contact you via WhatsApp shortly.",
  },
  ja: {
    reviewFields: "入力内容をご確認のうえ、再度お試しください。",
    unavailable:
      "お問い合わせシステムが一時的に利用できません。しばらくしてから再度お試しください。",
    sendFailed:
      "送信できませんでした。しばらくしてから再度お試しください。",
    genericError: "送信中にエラーが発生しました。再度お試しください。",
    fullName: "お名前を2〜100文字でご入力ください。",
    email: "有効なメールアドレスをご入力ください。",
    phone: "国番号を含む有効なWhatsApp番号をご入力ください。",
    message: "メッセージは2,000文字以内でご入力ください。",
    spam: "送信できませんでした。",
    success:
      "ありがとうございます。占星術師よりWhatsAppで折り返しご連絡いたします。",
  },
};

export function parseAppraisalLocale(value: FormDataEntryValue | null): AppraisalLanguage {
  return value === "ja" ? "ja" : "en";
}
