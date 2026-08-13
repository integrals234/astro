import type { BilingualText } from "@/lib/education/types";

/**
 * Legal page stubs (LAUNCH_PLAN Workstream C/E).
 *
 * These routes exist so the footer can link somewhere real instead of 404ing,
 * and so the URLs are settled before launch. **They are drafts.** Every page is
 * `noindex` and carries a visible draft notice, because publishing text that
 * reads as a binding 特定商取引法 disclosure or a privacy policy before a
 * 行政書士 has reviewed it is worse than publishing nothing.
 *
 * Replace `body` with reviewed copy and drop `noindex` in
 * `src/app/[locale]/legal/[slug]/page.tsx` when that review lands.
 */
export type LegalSlug =
  | "tokushoho"
  | "privacy"
  | "terms"
  | "refunds";

export interface LegalDocument {
  slug: LegalSlug;
  title: BilingualText;
  summary: BilingualText;
}

export const LEGAL_DRAFT_NOTICE: BilingualText = {
  en: "Draft — this page is a placeholder and is not yet in force. Final wording is pending review by a qualified administrative scrivener (行政書士).",
  hi: "प्रारूप — यह पृष्ठ एक प्लेसहोल्डर है और अभी लागू नहीं है। अंतिम शब्दावली योग्य प्रशासनिक विधि-लेखक (行政書士) की समीक्षा के अधीन है।",
  ja: "下書き — このページはプレースホルダーであり、まだ効力を持ちません。最終的な文言は行政書士による確認待ちです。",
  ko: "초안 — 이 페이지는 자리 표시자이며 아직 효력이 없습니다. 최종 문구는 행정서사(行政書士)의 검토를 기다리고 있습니다.",
};

export const LEGAL_DOCUMENTS: LegalDocument[] = [
  {
    slug: "tokushoho",
    title: {
      en: "Notation based on the Act on Specified Commercial Transactions",
      hi: "विशिष्ट वाणिज्यिक लेनदेन अधिनियम पर आधारित विवरण",
      ja: "特定商取引法に基づく表記",
      ko: "특정상거래법에 근거한 표기",
    },
    summary: {
      en: "Seller details, pricing, payment method, delivery timing, and cancellation terms, as required before paid services are offered.",
      hi: "सशुल्क सेवाएँ प्रस्तुत करने से पहले आवश्यक विक्रेता विवरण, मूल्य, भुगतान विधि, वितरण समय और रद्दीकरण शर्तें।",
      ja: "有料サービスの提供にあたり必要となる、販売者情報・価格・支払方法・提供時期・キャンセル条件を記載します。",
      ko: "유료 서비스 제공에 앞서 필요한 판매자 정보, 가격, 결제 수단, 제공 시기 및 취소 조건을 기재합니다.",
    },
  },
  {
    slug: "privacy",
    title: {
      en: "Privacy Policy",
      hi: "गोपनीयता नीति",
      ja: "プライバシーポリシー",
      ko: "개인정보 처리방침",
    },
    summary: {
      en: "What personal data is collected — including birth details submitted to the chart generator — how it is used, and how long it is retained.",
      hi: "कौन-सा व्यक्तिगत डेटा एकत्र किया जाता है — जन्म विवरण सहित — उसका उपयोग कैसे होता है और उसे कितने समय तक रखा जाता है।",
      ja: "収集する個人情報（チャート作成時にご入力いただく出生データを含む）と、その利用目的および保有期間について記載します。",
      ko: "수집하는 개인정보(차트 생성 시 입력하는 출생 정보 포함)와 이용 목적, 보유 기간을 기재합니다.",
    },
  },
  {
    slug: "terms",
    title: {
      en: "Terms of Service",
      hi: "सेवा की शर्तें",
      ja: "利用規約",
      ko: "이용약관",
    },
    summary: {
      en: "The terms under which this site and its readings may be used, including the limits of what a reading is and is not.",
      hi: "इस साइट और इसके परामर्श के उपयोग की शर्तें, जिसमें यह भी शामिल है कि परामर्श क्या है और क्या नहीं।",
      ja: "本サイトおよび鑑定のご利用条件、ならびに鑑定が何であり何でないかの範囲について定めます。",
      ko: "본 사이트와 감정의 이용 조건, 그리고 감정이 무엇이며 무엇이 아닌지의 범위를 정합니다.",
    },
  },
  {
    slug: "refunds",
    title: {
      en: "Returns and Cancellation Policy",
      hi: "वापसी और रद्दीकरण नीति",
      ja: "返品・キャンセルポリシー",
      ko: "반품 및 취소 정책",
    },
    summary: {
      en: "When an appraisal may be cancelled, and how refunds are handled for work already prepared.",
      hi: "परामर्श कब रद्द किया जा सकता है, और पहले से तैयार कार्य के लिए धनवापसी कैसे की जाती है।",
      ja: "鑑定のキャンセルが可能な条件と、すでに着手した鑑定に関する返金の取り扱いについて記載します。",
      ko: "감정을 취소할 수 있는 조건과, 이미 준비된 작업에 대한 환불 처리 방식을 기재합니다.",
    },
  },
];

export function findLegalDocument(slug: string): LegalDocument | undefined {
  return LEGAL_DOCUMENTS.find((document) => document.slug === slug);
}
