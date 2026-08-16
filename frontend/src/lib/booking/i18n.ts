import type { AppLanguage } from "@/lib/i18n/language";

/**
 * Copy for the booking route. Kept separate from the appraisal content module,
 * which describes the offerings themselves — this describes the act of booking
 * one, and the two change for different reasons.
 */
export interface BookingCopy {
  eyebrow: string;
  title: string;
  metaDescription: string;
  durationLabel: string;
  durationVaries: string;
  minutes: (n: number) => string;
  priceLabel: string;
  priceByInquiry: string;
  pickATime: string;
  timezoneNote: string;
  requestHeading: string;
  /** Shown for the written appraisal, which has no live session at all. */
  asyncExplainer: string;
  /** Shown when a live format has no calendar configured yet. */
  unavailableExplainer: string;
  requestCta: string;
  paymentNote: string;
  /** Link from the pricing table into the booking route. */
  bookCta: string;
}

export const bookingCopy: Record<AppLanguage, BookingCopy> = {
  ja: {
    eyebrow: "ご予約",
    title: "鑑定のご予約",
    metaDescription:
      "ヴェーダ占星術の個人鑑定をご予約いただけます。日程はご都合に合わせて調整いたします。",
    durationLabel: "所要時間",
    durationVaries: "内容により異なります",
    minutes: (n) => `${n}分`,
    priceLabel: "料金",
    priceByInquiry: "お問い合わせ後に個別お見積り",
    pickATime: "ご希望の日時をお選びください",
    timezoneNote:
      "表示される時刻はお使いの端末のタイムゾーンに合わせています。ご予約後、確認のご連絡を差し上げます。",
    requestHeading: "お問い合わせからお申し込みください",
    asyncExplainer:
      "書面による鑑定は対面のお時間をいただかず、PDFにてお届けいたします。お問い合わせフォームより出生情報をお知らせください。",
    unavailableExplainer:
      "この形式は現在オンラインでの日程調整を準備中です。お問い合わせフォームよりご連絡いただければ、個別に日程を調整いたします。",
    requestCta: "お問い合わせへ進む",
    paymentNote:
      "お支払いは、WhatsAppにて鑑定内容と日程が確定した後にご案内いたします。事前のお支払いは必要ありません。",
    bookCta: "日程を選ぶ →",
  },
  en: {
    eyebrow: "Booking",
    title: "Book a consultation",
    metaDescription:
      "Book a private Vedic astrology consultation at a time that suits you.",
    durationLabel: "Duration",
    durationVaries: "Varies by scope",
    minutes: (n) => `${n} minutes`,
    priceLabel: "Price",
    priceByInquiry: "Quoted individually after your inquiry",
    pickATime: "Choose a time",
    timezoneNote:
      "Times are shown in your device's timezone. You'll receive a confirmation once the session is booked.",
    requestHeading: "Request this by inquiry",
    asyncExplainer:
      "The written appraisal involves no live session — it is composed and delivered privately as a PDF. Send your birth details through the inquiry form to begin.",
    unavailableExplainer:
      "Online scheduling for this format is being set up. Send an inquiry and we'll arrange a time with you directly.",
    requestCta: "Continue to the inquiry form",
    paymentNote:
      "Payment is arranged over WhatsApp after the details and timing are agreed. Nothing is charged up front.",
    bookCta: "Choose a time →",
  },
  hi: {
    eyebrow: "बुकिंग",
    title: "परामर्श बुक करें",
    metaDescription:
      "अपनी सुविधा के अनुसार निजी वैदिक ज्योतिष परामर्श बुक करें।",
    durationLabel: "अवधि",
    durationVaries: "विषय के अनुसार",
    minutes: (n) => `${n} मिनट`,
    priceLabel: "शुल्क",
    priceByInquiry: "पूछताछ के बाद व्यक्तिगत रूप से बताया जाएगा",
    pickATime: "समय चुनें",
    timezoneNote:
      "समय आपके डिवाइस के टाइम ज़ोन में दिखाया गया है। बुकिंग के बाद पुष्टि भेजी जाएगी।",
    requestHeading: "पूछताछ के माध्यम से अनुरोध करें",
    asyncExplainer:
      "लिखित विश्लेषण में लाइव सत्र नहीं होता — यह निजी रूप से PDF के रूप में भेजा जाता है। शुरू करने के लिए पूछताछ फ़ॉर्म से अपना जन्म-विवरण भेजें।",
    unavailableExplainer:
      "इस प्रारूप के लिए ऑनलाइन शेड्यूलिंग तैयार की जा रही है। पूछताछ भेजें और हम आपके साथ सीधे समय तय करेंगे।",
    requestCta: "पूछताछ फ़ॉर्म पर जाएँ",
    paymentNote:
      "विवरण और समय तय होने के बाद WhatsApp पर भुगतान की व्यवस्था की जाती है। पहले से कोई शुल्क नहीं लिया जाता।",
    bookCta: "समय चुनें →",
  },
  ko: {
    eyebrow: "예약",
    title: "상담 예약",
    metaDescription:
      "편한 시간에 베다 점성술 개인 상담을 예약하실 수 있습니다.",
    durationLabel: "소요 시간",
    durationVaries: "내용에 따라 다름",
    minutes: (n) => `${n}분`,
    priceLabel: "비용",
    priceByInquiry: "문의 후 개별 견적",
    pickATime: "시간을 선택해 주세요",
    timezoneNote:
      "표시된 시간은 사용 중인 기기의 시간대 기준입니다. 예약 후 확인 안내를 드립니다.",
    requestHeading: "문의로 신청해 주세요",
    asyncExplainer:
      "서면 감정은 실시간 상담 없이 PDF로 비공개 전달됩니다. 문의 양식으로 출생 정보를 보내 주세요.",
    unavailableExplainer:
      "이 방식의 온라인 일정 조율은 준비 중입니다. 문의를 보내 주시면 직접 일정을 조율해 드립니다.",
    requestCta: "문의 양식으로 이동",
    paymentNote:
      "결제는 상담 내용과 일정이 확정된 뒤 WhatsApp으로 안내드립니다. 사전 결제는 없습니다.",
    bookCta: "시간 선택 →",
  },
};
