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
  hi: {
    reviewFields: "कृपया चिह्नित फ़ील्ड जाँचें और फिर से प्रयास करें।",
    unavailable:
      "हमारी पूछताछ सेवा अभी अस्थायी रूप से उपलब्ध नहीं है। कृपया थोड़ी देर बाद प्रयास करें।",
    sendFailed:
      "आपकी पूछताछ अभी भेजी नहीं जा सकी। कृपया कुछ देर बाद फिर प्रयास करें।",
    genericError:
      "आपका अनुरोध भेजते समय कुछ गड़बड़ हुई। कृपया फिर से प्रयास करें।",
    fullName: "कृपया अपना पूरा नाम दर्ज करें (2–100 अक्षर)।",
    email: "कृपया एक मान्य ईमेल पता दर्ज करें।",
    phone: "कृपया देश कोड सहित एक मान्य WhatsApp नंबर दर्ज करें।",
    message: "संदेश 2,000 अक्षरों से अधिक नहीं हो सकता।",
    spam: "यह अनुरोध भेजा नहीं जा सका।",
    success:
      "धन्यवाद। हमारे ज्योतिषी शीघ्र ही WhatsApp पर आपसे संपर्क करेंगे।",
  },
  ko: {
    reviewFields: "표시된 항목을 확인한 후 다시 시도해 주세요.",
    unavailable:
      "문의 시스템을 일시적으로 이용할 수 없습니다. 잠시 후 다시 시도해 주세요.",
    sendFailed:
      "지금은 문의를 보낼 수 없습니다. 잠시 후 다시 시도해 주세요.",
    genericError:
      "요청을 보내는 중 문제가 발생했습니다. 다시 시도해 주세요.",
    fullName: "이름을 2~100자로 입력해 주세요.",
    email: "올바른 이메일 주소를 입력해 주세요.",
    phone: "국가 코드를 포함한 올바른 WhatsApp 번호를 입력해 주세요.",
    message: "메시지는 2,000자 이내로 입력해 주세요.",
    spam: "이 요청을 제출할 수 없습니다.",
    success:
      "감사합니다. 담당 점성술사가 곧 WhatsApp으로 연락드리겠습니다.",
  },
};

export function parseAppraisalLocale(value: FormDataEntryValue | null): AppraisalLanguage {
  return value === "en" || value === "hi" || value === "ja" || value === "ko"
    ? value
    : "ja";
}

export const inquiryEmailContent: Record<
  AppraisalLanguage,
  {
    heading: string;
    subject: string;
    name: string;
    email: string;
    whatsApp: string;
    concern: string;
    notProvided: string;
    submitted: string;
  }
> = {
  en: {
    heading: "New Personal Appraisal Inquiry",
    subject: "Personal Appraisal Inquiry",
    name: "Name",
    email: "Email",
    whatsApp: "WhatsApp",
    concern: "Area of concern",
    notProvided: "Not provided",
    submitted: "Submitted",
  },
  hi: {
    heading: "व्यक्तिगत ज्योतिष परामर्श की नई पूछताछ",
    subject: "व्यक्तिगत ज्योतिष परामर्श की पूछताछ",
    name: "नाम",
    email: "ईमेल",
    whatsApp: "WhatsApp",
    concern: "परामर्श का विषय",
    notProvided: "नहीं बताया गया",
    submitted: "भेजने का समय",
  },
  ja: {
    heading: "パーソナル鑑定の新規お問い合わせ",
    subject: "パーソナル鑑定のお問い合わせ",
    name: "お名前",
    email: "メール",
    whatsApp: "WhatsApp",
    concern: "ご相談内容",
    notProvided: "記載なし",
    submitted: "送信日時",
  },
  ko: {
    heading: "새 개인 감정 문의",
    subject: "개인 감정 문의",
    name: "이름",
    email: "이메일",
    whatsApp: "WhatsApp",
    concern: "상담 분야",
    notProvided: "입력하지 않음",
    submitted: "접수 시각",
  },
};
