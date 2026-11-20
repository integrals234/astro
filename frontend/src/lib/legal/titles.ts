import type { BilingualText } from "@/lib/education/types";

/**
 * Legal document titles, split from the full texts (content.ts, ~140KB in
 * four locales) so sitewide chrome like the footer can link to them without
 * shipping the documents themselves to every page. content.ts reads its
 * titles from here, so there is still one source.
 */
export const LEGAL_TITLES = {
  tokushoho: {
    en: "Notation based on the Act on Specified Commercial Transactions",
    hi: "विशिष्ट वाणिज्यिक लेनदेन अधिनियम पर आधारित विवरण",
    ja: "特定商取引法に基づく表記",
    ko: "특정상거래법에 근거한 표기",
  },
  refunds: {
    en: "Returns and Cancellation Policy",
    hi: "वापसी और रद्दीकरण नीति",
    ja: "返品・キャンセルポリシー",
    ko: "반품 및 취소 정책",
  },
  terms: {
    en: "Terms of Service",
    hi: "सेवा की शर्तें",
    ja: "利用規約",
    ko: "이용약관",
  },
  privacy: {
    en: "Privacy Policy",
    hi: "गोपनीयता नीति",
    ja: "プライバシーポリシー",
    ko: "개인정보 처리방침",
  },
  disclaimer: {
    en: "Disclaimer",
    hi: "अस्वीकरण",
    ja: "免責事項",
    ko: "면책사항",
  },
  contact: {
    en: "Contact",
    hi: "संपर्क",
    ja: "お問い合わせ",
    ko: "문의하기",
  },
} satisfies Record<string, BilingualText>;

/** Footer order — matches LEGAL_DOCUMENTS. */
export const LEGAL_LINKS = (["tokushoho", "privacy", "terms", "refunds", "disclaimer", "contact"] as const).map((slug) => ({
  slug,
  title: LEGAL_TITLES[slug],
}));
