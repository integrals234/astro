import type { BilingualText } from "@/lib/education/types";

/**
 * Legal documents.
 *
 * These are **drafts written to be reviewed, not drafts written to fill space**.
 * Every clause below is aimed at a specific Japanese statute, and the comments
 * name which one, so the reviewing 行政書士 / 弁護士 can check the reasoning
 * rather than re-derive it.
 *
 * Three drafting principles run through all four documents, and reversing any
 * of them would *increase* legal exposure rather than reduce it:
 *
 * 1. **Over-broad terms are void in Japan, not merely unenforceable.**
 *    消費者契約法 8条 voids clauses that fully exempt a business from liability;
 *    9条 voids cancellation charges above 平均的な損害; 10条 voids terms
 *    one-sidedly harmful to the consumer. A blanket "no refunds, no liability"
 *    policy therefore buys nothing and signals bad faith to a court. Every
 *    limitation here is capped and carved out instead.
 *
 * 2. **The 霊感商法 provision (消費者契約法 4条3項) is the live risk for this
 *    business, not boilerplate.** It lets a consumer rescind where a trader
 *    used claims resting on 霊感 or comparable unverifiable insight to assert
 *    the consumer faces serious detriment unless they buy. Since the 2022
 *    amendment the window is 3 years from awareness / 10 years from contract.
 *    The Terms therefore state affirmatively what this practice does *not*
 *    claim. That statement is protective: it documents the policy the statute
 *    is looking for.
 *
 * 3. **Nothing asserts a fact the operator has not verified.** Where a legally
 *    required detail is not in the codebase — trading name, address, phone,
 *    registration status — the value is `TBD`, not a plausible guess. A
 *    特定商取引法 notation containing an invented address is a worse outcome
 *    than one visibly incomplete.
 *
 * Set `LEGAL_IN_FORCE` to true and remove `noindex` in the route only once a
 * qualified reviewer has signed these off and every `TBD` is resolved.
 */

/**
 * Placeholder for a value only the operator can supply. Deliberately loud and
 * greppable: `rg 'TO BE COMPLETED' src/lib/legal` must return zero hits before
 * these pages go live.
 */
export const TBD = "【TO BE COMPLETED】";

/** Flip to `true` only after legal review. Drives the draft banner and noindex. */
export const LEGAL_IN_FORCE = false;

export type LegalSlug = "tokushoho" | "privacy" | "terms" | "refunds";

export interface LegalRow {
  label: BilingualText;
  value: BilingualText;
  /** Rendered smaller, under the value — for statutory caveats. */
  note?: BilingualText;
}

export interface LegalSection {
  id: string;
  heading: BilingualText;
  body?: BilingualText[];
  bullets?: BilingualText[];
  rows?: LegalRow[];
}

export interface LegalDocument {
  slug: LegalSlug;
  title: BilingualText;
  summary: BilingualText;
  /** ISO date. Shown to the user and used for the revision stamp. */
  lastUpdated: string;
  sections: LegalSection[];
}

export const LEGAL_DRAFT_NOTICE: BilingualText = {
  en: "Draft — not yet in force. This text has been prepared for review and is not legal advice. It must be checked by a qualified Japanese practitioner (行政書士 or 弁護士), and every item marked 【TO BE COMPLETED】 must be filled in, before it binds anyone.",
  hi: "प्रारूप — अभी लागू नहीं। यह पाठ समीक्षा हेतु तैयार किया गया है और यह विधिक परामर्श नहीं है। बाध्यकारी होने से पहले इसे योग्य जापानी विधि-व्यवसायी (行政書士 या 弁護士) द्वारा जाँचा जाना चाहिए तथा 【TO BE COMPLETED】 चिह्नित प्रत्येक मद भरा जाना चाहिए।",
  ja: "下書き — まだ効力を有しません。本文は確認を受けるために作成したものであり、法的助言ではありません。効力を生じさせる前に、行政書士または弁護士による確認を受け、【TO BE COMPLETED】と記載された項目をすべて記入する必要があります。",
  ko: "초안 — 아직 효력이 없습니다. 본 문서는 검토를 위해 작성된 것이며 법률 자문이 아닙니다. 효력이 발생하기 전에 일본의 자격 있는 실무자(行政書士 또는 弁護士)의 확인을 받아야 하며, 【TO BE COMPLETED】로 표시된 모든 항목을 기입해야 합니다.",
};

/** Shared contact line. Every document needs a reachable point of contact. */
const CONTACT_EMAIL: BilingualText = {
  en: TBD,
  hi: TBD,
  ja: TBD,
  ko: TBD,
};

/* ------------------------------------------------------------------------- *
 * 特定商取引法に基づく表記
 *
 * 特商法11条 + 施行規則8条 enumerate what a 通信販売 trader must display. The
 * rows below follow that enumeration in the conventional order a Japanese
 * reviewer will expect to see it.
 *
 * Two structural facts about this business shape the wording:
 *   - Price is by inquiry (`booking/catalog.ts`), so the price row states the
 *     quotation mechanism and commits to quoting before the contract forms.
 *     That satisfies 11条1号 without inventing a number.
 *   - Payment settles off-platform over WhatsApp, so there is no checkout and
 *     no card data ever reaches this site. Said plainly, because it materially
 *     changes the consumer's risk picture.
 *
 * The address/phone rows carry the Consumer Affairs Agency accommodation for
 * sole traders: these may be withheld from public display provided the trader
 * undertakes to disclose them without delay on request. That is the option
 * most home-based practitioners want, and it is lawful — but it is a real
 * undertaking, not a way to avoid the obligation.
 * ------------------------------------------------------------------------- */
const tokushoho: LegalDocument = {
  slug: "tokushoho",
  title: {
    en: "Notation based on the Act on Specified Commercial Transactions",
    hi: "विशिष्ट वाणिज्यिक लेनदेन अधिनियम पर आधारित विवरण",
    ja: "特定商取引法に基づく表記",
    ko: "특정상거래법에 근거한 표기",
  },
  summary: {
    en: "Seller details, pricing, payment method, delivery timing, and cancellation terms, as required of a mail-order trader under Article 11 of the Act.",
    hi: "अधिनियम की धारा 11 के अंतर्गत दूरस्थ-विक्रय व्यापारी के लिए अपेक्षित विक्रेता विवरण, मूल्य, भुगतान विधि, वितरण समय और रद्दीकरण शर्तें।",
    ja: "特定商取引法11条により通信販売事業者に表示が求められる、販売者情報・価格・支払方法・提供時期・キャンセル条件を記載します。",
    ko: "법 제11조에 따라 통신판매업자에게 요구되는 판매자 정보, 가격, 결제 수단, 제공 시기 및 취소 조건을 기재합니다.",
  },
  lastUpdated: "2026-08-17",
  sections: [
    {
      id: "seller",
      heading: {
        en: "Seller",
        hi: "विक्रेता",
        ja: "販売事業者",
        ko: "판매 사업자",
      },
      rows: [
        {
          label: {
            en: "Trading name",
            hi: "व्यापारिक नाम",
            ja: "事業者名（屋号）",
            ko: "사업자명(상호)",
          },
          value: { en: TBD, hi: TBD, ja: TBD, ko: TBD },
          note: {
            en: "Enter the name under which the business actually trades. If operating as a sole proprietor without a registered trade name, the operator’s full legal name is required here.",
            hi: "वह नाम दर्ज करें जिसके अंतर्गत व्यवसाय वास्तव में संचालित होता है। यदि पंजीकृत व्यापारिक नाम के बिना एकल स्वामी के रूप में कार्य कर रहे हैं, तो यहाँ संचालक का पूर्ण विधिक नाम आवश्यक है।",
            ja: "実際に事業を行っている名称を記入してください。屋号を登録していない個人事業主として運営する場合は、運営者の氏名（本名）の記載が必要です。",
            ko: "실제로 사업을 영위하는 명칭을 기입하십시오. 등록된 상호 없이 개인사업자로 운영하는 경우, 운영자의 법적 성명 기재가 필요합니다.",
          },
        },
        {
          label: {
            en: "Representative",
            hi: "प्रतिनिधि",
            ja: "運営統括責任者",
            ko: "운영 총괄 책임자",
          },
          value: { en: TBD, hi: TBD, ja: TBD, ko: TBD },
        },
        {
          label: {
            en: "Address",
            hi: "पता",
            ja: "所在地",
            ko: "소재지",
          },
          value: { en: TBD, hi: TBD, ja: TBD, ko: TBD },
          note: {
            en: "A sole trader working from home may withhold the address from public display, provided this notation instead states that the full address will be disclosed without delay on request. If that option is taken, replace this row with that undertaking — and honour it, because it is the condition on which withholding is permitted.",
            hi: "घर से कार्य करने वाला एकल व्यापारी पता सार्वजनिक प्रदर्शन से रोक सकता है, बशर्ते यह विवरण कहे कि अनुरोध पर पूरा पता बिना विलंब प्रकट किया जाएगा। यदि यह विकल्प चुना जाए, तो इस पंक्ति को उस वचन से बदलें — और उसका पालन करें, क्योंकि रोकने की अनुमति उसी शर्त पर है।",
            ja: "自宅で営業する個人事業主は、請求があった場合に遅滞なく住所を開示する旨を本表記に記載することを条件として、住所の公開を差し控えることができます。この方法による場合は、本欄をその旨の記載に置き換えてください。開示に応じることが公開を省略できる条件ですので、必ず履行してください。",
            ko: "자택에서 영업하는 개인사업자는 요청 시 지체 없이 주소를 공개한다는 취지를 본 표기에 기재하는 것을 조건으로 주소의 공개를 보류할 수 있습니다. 이 방법을 택하는 경우 본 항목을 그러한 취지의 기재로 대체하십시오. 공개 요청에 응하는 것이 생략의 조건이므로 반드시 이행해야 합니다.",
          },
        },
        {
          label: {
            en: "Telephone",
            hi: "दूरभाष",
            ja: "電話番号",
            ko: "전화번호",
          },
          value: { en: TBD, hi: TBD, ja: TBD, ko: TBD },
          note: {
            en: "Same accommodation as the address: may be withheld from display if this notation undertakes to disclose it without delay on request. A number that is never answered does not satisfy the requirement.",
            hi: "पते जैसी ही छूट: यदि यह विवरण अनुरोध पर बिना विलंब प्रकट करने का वचन देता है तो प्रदर्शन से रोका जा सकता है। ऐसा नंबर जिसका कभी उत्तर न दिया जाए, अपेक्षा को पूरा नहीं करता।",
            ja: "住所と同様の取扱いが可能です。請求があった場合に遅滞なく開示する旨を記載すれば、公開を差し控えることができます。なお、応答のない番号では要件を満たしません。",
            ko: "주소와 동일한 취급이 가능합니다. 요청 시 지체 없이 공개한다는 취지를 기재하면 공개를 보류할 수 있습니다. 다만 응답하지 않는 번호로는 요건을 충족하지 못합니다.",
          },
        },
        {
          label: {
            en: "Email",
            hi: "ईमेल",
            ja: "メールアドレス",
            ko: "이메일",
          },
          value: CONTACT_EMAIL,
        },
      ],
    },
    {
      id: "price",
      heading: {
        en: "Price and additional charges",
        hi: "मूल्य और अतिरिक्त शुल्क",
        ja: "販売価格・付帯費用",
        ko: "판매 가격 및 부대 비용",
      },
      body: [
        {
          en: "Every appraisal is quoted individually, because the work varies with the question asked and the number of charts involved. No price is charged that has not first been stated to you in writing and accepted by you. A quotation is presented before any contract is formed and before any payment is requested.",
          hi: "प्रत्येक परामर्श का शुल्क व्यक्तिगत रूप से निर्धारित होता है, क्योंकि कार्य पूछे गए प्रश्न और सम्मिलित कुंडलियों की संख्या के अनुसार बदलता है। कोई भी शुल्क तब तक नहीं लिया जाता जब तक वह आपको लिखित रूप में न बताया गया हो और आपने स्वीकार न किया हो। अनुबंध बनने से पूर्व और किसी भी भुगतान के अनुरोध से पूर्व शुल्क-प्रस्ताव प्रस्तुत किया जाता है।",
          ja: "鑑定料金は、ご相談の内容と対象となるチャートの数によって作業量が異なるため、個別にお見積りいたします。事前に書面（電磁的方法を含む）でお伝えし、お客様にご承諾いただいた金額以外を請求することはありません。お見積りは、契約成立前、かつお支払いをお願いする前に提示いたします。",
          ko: "감정 요금은 상담 내용과 대상 차트 수에 따라 작업량이 달라지므로 개별적으로 견적을 드립니다. 사전에 서면(전자적 방법 포함)으로 안내하고 고객이 승낙한 금액 외에는 청구하지 않습니다. 견적은 계약 성립 전, 그리고 결제를 요청하기 전에 제시합니다.",
        },
        {
          en: "The quoted fee is the total payable for the appraisal itself. Any bank transfer charge, currency conversion cost, or payment-provider fee levied by your own bank or payment service is borne by you and is outside our control. Internet connection charges incurred in using this site are likewise your own.",
          hi: "उद्धृत शुल्क परामर्श के लिए देय कुल राशि है। आपके अपने बैंक या भुगतान सेवा द्वारा लगाया गया कोई भी अंतरण शुल्क, मुद्रा-रूपांतरण लागत या भुगतान-प्रदाता शुल्क आपके द्वारा वहन किया जाता है और हमारे नियंत्रण से बाहर है। इस साइट के उपयोग में लगने वाला इंटरनेट संपर्क शुल्क भी आपका अपना है।",
          ja: "お見積り金額が鑑定に対してお支払いいただく総額です。お客様がご利用の金融機関または決済サービスが課す振込手数料・為替手数料・決済手数料は、お客様のご負担となり、当方では管理できません。本サイトのご利用に伴う通信料についても同様にお客様のご負担です。",
          ko: "견적 금액이 감정에 대해 지불하실 총액입니다. 고객이 이용하는 금융기관 또는 결제 서비스가 부과하는 송금 수수료, 환전 비용, 결제 수수료는 고객 부담이며 당사가 통제할 수 없습니다. 본 사이트 이용에 따른 통신 요금 역시 고객 부담입니다.",
        },
        {
          en: "Whether consumption tax (消費税) is included in a quotation, and whether the operator is a taxable enterprise for that purpose, must be stated here before this page goes live.",
          hi: "क्या उद्धृत शुल्क में उपभोग कर (消費税) सम्मिलित है, और क्या संचालक उस प्रयोजन हेतु करयोग्य उद्यम है — यह इस पृष्ठ के प्रकाशित होने से पूर्व यहाँ बताया जाना चाहिए।",
          ja: "お見積り金額に消費税が含まれるか否か、および運営者が課税事業者に該当するか否かは、本ページの公開前にここに明記する必要があります。",
          ko: "견적 금액에 소비세(消費税)가 포함되는지 여부, 그리고 운영자가 과세사업자에 해당하는지 여부는 본 페이지 공개 전에 여기에 명기해야 합니다.",
        },
      ],
    },
    {
      id: "payment",
      heading: {
        en: "Payment method and timing",
        hi: "भुगतान विधि और समय",
        ja: "支払方法・支払時期",
        ko: "결제 수단 및 시기",
      },
      body: [
        {
          en: "This site does not take payment. There is no checkout, no card form, and no card or bank credential is ever entered into or stored by this website. Payment is arranged separately after the quotation is accepted, using the method agreed with you at that point.",
          hi: "यह साइट भुगतान स्वीकार नहीं करती। कोई चेकआउट नहीं, कोई कार्ड प्रपत्र नहीं, और कोई कार्ड या बैंक क्रेडेंशियल इस वेबसाइट में कभी दर्ज या संग्रहीत नहीं किया जाता। शुल्क-प्रस्ताव स्वीकार होने के बाद, उस समय आपके साथ तय की गई विधि से भुगतान की व्यवस्था अलग से की जाती है।",
          ja: "本サイト上での決済は行っておりません。購入手続き画面もカード情報の入力欄もなく、カード情報や口座情報を本サイトに入力・保存することは一切ありません。お支払いは、お見積りにご承諾いただいた後、その時点でお客様と合意した方法により別途お手続きいただきます。",
          ko: "본 사이트에서는 결제를 처리하지 않습니다. 결제 화면도 카드 입력란도 없으며, 카드 정보나 계좌 정보를 본 사이트에 입력하거나 저장하는 일은 일절 없습니다. 결제는 견적에 승낙하신 후, 그 시점에 고객과 합의한 방법으로 별도 진행됩니다.",
        },
        {
          en: "The accepted payment methods, the currency, and whether payment falls due before or after delivery must be stated here before this page goes live. Where payment is taken in advance of a written appraisal, that fact has to be explicit, since it determines what the cancellation terms below have to protect.",
          hi: "स्वीकृत भुगतान विधियाँ, मुद्रा, तथा भुगतान वितरण से पूर्व देय है या पश्चात — यह इस पृष्ठ के प्रकाशित होने से पूर्व यहाँ बताया जाना चाहिए। जहाँ लिखित परामर्श से पहले भुगतान लिया जाता है, वह तथ्य स्पष्ट होना चाहिए, क्योंकि उसी से तय होता है कि नीचे दी गई रद्दीकरण शर्तों को क्या सुरक्षित करना है।",
          ja: "ご利用いただける支払方法、通貨、およびお支払いが役務提供の前か後かは、本ページの公開前にここに明記する必要があります。特に、書面鑑定について前払いをお願いする場合はその旨を明示してください。後述のキャンセル条件が何を保護すべきかは、この点によって決まります。",
          ko: "이용 가능한 결제 수단, 통화, 그리고 결제가 서비스 제공 전인지 후인지는 본 페이지 공개 전에 여기에 명기해야 합니다. 특히 서면 감정에 대해 선불을 요청하는 경우 그 취지를 명시하십시오. 후술하는 취소 조건이 무엇을 보호해야 하는지는 이 점에 따라 결정됩니다.",
        },
      ],
    },
    {
      id: "delivery",
      heading: {
        en: "When the service is provided",
        hi: "सेवा कब प्रदान की जाती है",
        ja: "役務の提供時期",
        ko: "서비스 제공 시기",
      },
      body: [
        {
          en: "Written appraisals are prepared by hand and delivered as a private PDF, ordinarily within three to four weeks of the birth details being confirmed and payment being settled. This is a working estimate rather than a guaranteed date. If preparation is going to take materially longer, you will be told, and you may cancel for a full refund at that point if the revised timing does not suit you.",
          hi: "लिखित परामर्श हाथ से तैयार किए जाते हैं और निजी PDF के रूप में दिए जाते हैं — सामान्यतः जन्म-विवरण की पुष्टि और भुगतान निपटान के तीन से चार सप्ताह के भीतर। यह एक कार्य-अनुमान है, गारंटीशुदा तिथि नहीं। यदि तैयारी में उल्लेखनीय रूप से अधिक समय लगने वाला हो, तो आपको सूचित किया जाएगा, और यदि संशोधित समय आपके अनुकूल न हो तो आप उस समय पूर्ण धनवापसी के साथ रद्द कर सकते हैं।",
          ja: "書面鑑定は一件ずつ手作業で作成し、PDFにて個別にお届けします。通常は、出生データの確認とお支払いの完了から3〜4週間以内です。これは見込みの期間であり、確約された納品日ではありません。作成に大幅な追加期間を要する見込みとなった場合はご連絡いたします。変更後の時期がご都合に合わない場合は、その時点で全額返金のうえキャンセルしていただけます。",
          ko: "서면 감정은 한 건씩 수작업으로 작성하여 PDF로 개별 전달합니다. 통상 출생 정보 확인 및 결제 완료로부터 3~4주 이내입니다. 이는 예상 기간이며 확약된 납품일이 아닙니다. 작성에 상당한 추가 기간이 필요할 것으로 예상되는 경우 연락드립니다. 변경된 시기가 사정에 맞지 않으시면 그 시점에 전액 환불 후 취소하실 수 있습니다.",
        },
        {
          en: "Live sessions take place at the date and time you select when booking, in the duration shown for that format at the time of booking. Joining details are sent to the email address given at booking.",
          hi: "सजीव सत्र उसी तिथि व समय पर होते हैं जो आप बुकिंग के समय चुनते हैं, और उसी अवधि के लिए जो बुकिंग के समय उस प्रारूप हेतु दर्शाई गई हो। सम्मिलित होने का विवरण बुकिंग में दिए गए ईमेल पते पर भेजा जाता है।",
          ja: "ライブ鑑定は、ご予約時にお選びいただいた日時に、ご予約時点で当該形式について表示されていた所要時間で実施します。参加方法はご予約時にご入力いただいたメールアドレスにお送りします。",
          ko: "라이브 감정은 예약 시 선택하신 일시에, 예약 시점에 해당 형식에 대해 표시된 소요 시간으로 진행합니다. 참여 방법은 예약 시 입력하신 이메일 주소로 발송됩니다.",
        },
        {
          en: "The free tools on this site — chart generation, compatibility scoring, and the rest — are provided immediately and without charge. They are not part of any paid contract and carry no delivery commitment.",
          hi: "इस साइट के निःशुल्क उपकरण — कुंडली निर्माण, अनुकूलता गणना, तथा अन्य — तत्काल और निःशुल्क उपलब्ध हैं। वे किसी सशुल्क अनुबंध का भाग नहीं हैं और उन पर कोई वितरण-प्रतिबद्धता लागू नहीं होती।",
          ja: "本サイトの無料ツール（チャート作成、相性診断ほか）は、その場で無償にてご利用いただけます。これらは有料契約の一部ではなく、提供時期に関する保証の対象ではありません。",
          ko: "본 사이트의 무료 도구(차트 생성, 궁합 산출 등)는 즉시 무상으로 이용하실 수 있습니다. 이는 유료 계약의 일부가 아니며 제공 시기에 관한 보증 대상이 아닙니다.",
        },
      ],
    },
    {
      id: "cancellation",
      heading: {
        en: "Cancellation and refunds",
        hi: "रद्दीकरण और धनवापसी",
        ja: "キャンセル・返金について",
        ko: "취소 및 환불",
      },
      body: [
        {
          en: "Cancellation terms are set out in full in the Returns and Cancellation Policy, which forms part of this notation and constitutes the special return terms (返品特約) for the purposes of the Act. In summary: cancel before preparation begins and you are refunded in full; cancel once work has begun and you are refunded the portion not yet worked; a completed and delivered appraisal is not refundable on the basis of disagreement with its content, though it is refundable if it was not in fact delivered or was delivered in an unusable form.",
          hi: "रद्दीकरण की शर्तें पूर्ण रूप से वापसी एवं रद्दीकरण नीति में दी गई हैं, जो इस विवरण का भाग है और अधिनियम के प्रयोजनार्थ विशेष वापसी शर्तें (返品特約) गठित करती है। संक्षेप में: तैयारी आरंभ होने से पूर्व रद्द करें तो पूर्ण धनवापसी; कार्य आरंभ होने के बाद रद्द करें तो अकृत भाग की धनवापसी; पूर्ण एवं वितरित परामर्श उसकी विषयवस्तु से असहमति के आधार पर वापसी-योग्य नहीं है, किन्तु यदि वह वास्तव में वितरित ही न हुआ हो या अनुपयोगी रूप में वितरित हुआ हो तो वापसी-योग्य है।",
          ja: "キャンセルの条件は「返品・キャンセルポリシー」に全文を定めており、同ポリシーは本表記の一部を構成するとともに、特定商取引法上の返品特約に該当します。要旨は次のとおりです。作成着手前のキャンセルは全額返金、着手後のキャンセルは未着手部分に相当する額を返金、完成・納品済みの鑑定については内容へのご不満を理由とする返金には応じかねますが、実際に納品されなかった場合または判読・利用できない形式で納品された場合は返金の対象となります。",
          ko: "취소 조건은 「반품·취소 정책」에 전문을 정하고 있으며, 동 정책은 본 표기의 일부를 구성함과 동시에 특정상거래법상의 반품 특약에 해당합니다. 요지는 다음과 같습니다. 작성 착수 전 취소는 전액 환불, 착수 후 취소는 미착수 부분에 상당하는 금액을 환불, 완성·납품된 감정에 대해서는 내용에 대한 불만을 이유로 한 환불에는 응하기 어렵지만, 실제로 납품되지 않았거나 판독·이용할 수 없는 형식으로 납품된 경우에는 환불 대상이 됩니다.",
        },
        {
          en: "Nothing in those terms limits any right you have under the Consumer Contract Act, the Civil Code, or any other mandatory law. Where a term stated here conflicts with such a right, the right prevails.",
          hi: "उन शर्तों में कुछ भी उपभोक्ता संविदा अधिनियम, नागरिक संहिता, या किसी अन्य बाध्यकारी विधि के अंतर्गत आपके किसी अधिकार को सीमित नहीं करता। जहाँ यहाँ कही गई कोई शर्त ऐसे अधिकार से टकराती है, वहाँ अधिकार प्रभावी होगा।",
          ja: "これらの条件は、消費者契約法、民法その他の強行法規に基づくお客様の権利を制限するものではありません。本表記の定めがこれらの権利と抵触する場合には、お客様の権利が優先します。",
          ko: "이러한 조건은 소비자계약법, 민법 기타 강행법규에 따른 고객의 권리를 제한하지 않습니다. 본 표기의 규정이 이러한 권리와 저촉되는 경우에는 고객의 권리가 우선합니다.",
        },
      ],
    },
    {
      id: "environment",
      heading: {
        en: "Operating environment",
        hi: "संचालन परिवेश",
        ja: "動作環境",
        ko: "이용 환경",
      },
      body: [
        {
          en: "This site requires a current version of a mainstream browser with JavaScript enabled. Written appraisals are delivered as PDF files and require software capable of opening them. Live sessions require a stable internet connection and, depending on the format agreed, a device with a microphone and camera.",
          hi: "इस साइट हेतु JavaScript सक्षम किसी प्रचलित ब्राउज़र का वर्तमान संस्करण आवश्यक है। लिखित परामर्श PDF फ़ाइलों के रूप में दिए जाते हैं और उन्हें खोलने में सक्षम सॉफ़्टवेयर आवश्यक है। सजीव सत्रों हेतु स्थिर इंटरनेट संपर्क तथा, सहमत प्रारूप के अनुसार, माइक्रोफ़ोन व कैमरा युक्त उपकरण आवश्यक है।",
          ja: "本サイトのご利用には、JavaScriptを有効にした主要ブラウザの最新版が必要です。書面鑑定はPDF形式でお届けするため、PDFを開くことのできるソフトウェアが必要です。ライブ鑑定には安定した通信環境と、合意した形式に応じてマイク・カメラを備えた機器が必要です。",
          ko: "본 사이트 이용에는 JavaScript를 활성화한 주요 브라우저의 최신 버전이 필요합니다. 서면 감정은 PDF 형식으로 전달되므로 PDF를 열 수 있는 소프트웨어가 필요합니다. 라이브 감정에는 안정적인 통신 환경과, 합의한 형식에 따라 마이크·카메라를 갖춘 기기가 필요합니다.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------------- *
 * 返品・キャンセルポリシー
 *
 * This is the 返品特約 referenced from the 特商法 notation. Two constraints
 * govern the numbers:
 *
 *   - 消費者契約法 9条1号 voids any cancellation charge exceeding the
 *     average damage (平均的な損害) the trader suffers from cancellations of
 *     that kind. A flat "100% forfeit" for a bespoke service that had not yet
 *     been started would be struck down. The graduated bands below are an
 *     attempt to track actual work performed, which is the defensible shape.
 *   - 通信販売 has no statutory cooling-off period (that belongs to 訪問販売
 *     and other 特商法 chapters), and the 8-day return right in 15条の3 is
 *     framed around 商品 rather than 役務. So the terms here are what governs,
 *     which is exactly why they must be reasonable rather than aggressive.
 *
 * The percentages are marked TBD deliberately: they must be set against the
 * operator's real cost base to be defensible as 平均的な損害, and a number
 * invented here would be the least defensible kind.
 * ------------------------------------------------------------------------- */
const refunds: LegalDocument = {
  slug: "refunds",
  title: {
    en: "Returns and Cancellation Policy",
    hi: "वापसी और रद्दीकरण नीति",
    ja: "返品・キャンセルポリシー",
    ko: "반품 및 취소 정책",
  },
  summary: {
    en: "When an appraisal or session may be cancelled, what is refunded at each stage, and how refunds are paid.",
    hi: "परामर्श या सत्र कब रद्द किया जा सकता है, प्रत्येक चरण पर क्या वापस किया जाता है, और धनवापसी कैसे की जाती है।",
    ja: "鑑定・セッションをキャンセルできる時期、各段階での返金額、および返金の方法について定めます。",
    ko: "감정 또는 세션을 취소할 수 있는 시기, 각 단계에서의 환불액, 그리고 환불 방법을 정합니다.",
  },
  lastUpdated: "2026-08-17",
  sections: [
    {
      id: "scope",
      heading: {
        en: "What this policy covers",
        hi: "यह नीति किस पर लागू है",
        ja: "本ポリシーの適用範囲",
        ko: "본 정책의 적용 범위",
      },
      body: [
        {
          en: "This policy applies to paid appraisals and paid sessions. The free tools on this site involve no payment and therefore no refund; you may stop using them at any time.",
          hi: "यह नीति सशुल्क परामर्श तथा सशुल्क सत्रों पर लागू होती है। इस साइट के निःशुल्क उपकरणों में कोई भुगतान नहीं होता, अतः कोई धनवापसी भी नहीं; आप उनका उपयोग कभी भी रोक सकते हैं।",
          ja: "本ポリシーは、有料の鑑定およびセッションに適用されます。本サイトの無料ツールにはお支払いが発生しないため、返金の対象にもなりません。ご利用はいつでもおやめいただけます。",
          ko: "본 정책은 유료 감정 및 세션에 적용됩니다. 본 사이트의 무료 도구는 결제가 발생하지 않으므로 환불 대상도 아닙니다. 이용은 언제든지 중단하실 수 있습니다.",
        },
        {
          en: "Because appraisals are prepared individually for one person and one set of questions, the work has no resale value once begun. The bands below exist to divide that cost fairly rather than to discourage cancellation.",
          hi: "चूँकि परामर्श एक व्यक्ति और एक प्रश्न-समूह हेतु व्यक्तिगत रूप से तैयार किए जाते हैं, आरंभ हो जाने पर उस कार्य का कोई पुनर्विक्रय मूल्य नहीं रहता। नीचे दिए गए स्तर उस लागत को न्यायसंगत रूप से बाँटने हेतु हैं, रद्दीकरण को हतोत्साहित करने हेतु नहीं।",
          ja: "鑑定はお一人のため、また特定のご相談内容のために個別に作成するものであり、着手後の作業は他に転用できません。以下の区分は、その費用を公平に分担するためのものであり、キャンセルを思いとどまらせるためのものではありません。",
          ko: "감정은 한 분을 위해, 그리고 특정 상담 내용을 위해 개별적으로 작성하는 것이므로 착수 후의 작업은 다른 곳에 전용할 수 없습니다. 아래 구분은 그 비용을 공평하게 분담하기 위한 것이며, 취소를 단념시키기 위한 것이 아닙니다.",
        },
      ],
    },
    {
      id: "written",
      heading: {
        en: "Written appraisals",
        hi: "लिखित परामर्श",
        ja: "書面鑑定のキャンセル",
        ko: "서면 감정 취소",
      },
      rows: [
        {
          label: {
            en: "Before preparation begins",
            hi: "तैयारी आरंभ होने से पूर्व",
            ja: "作成着手前",
            ko: "작성 착수 전",
          },
          value: {
            en: "Full refund of the fee paid.",
            hi: "भुगतान किए गए शुल्क की पूर्ण धनवापसी।",
            ja: "お支払い額の全額を返金します。",
            ko: "결제하신 금액의 전액을 환불합니다.",
          },
        },
        {
          label: {
            en: "After preparation begins, before delivery",
            hi: "तैयारी आरंभ होने के बाद, वितरण से पूर्व",
            ja: "作成着手後・納品前",
            ko: "작성 착수 후 · 납품 전",
          },
          value: {
            en: `Refund of the fee less the portion attributable to work already carried out, up to a maximum retention of ${TBD}% of the fee.`,
            hi: `पहले से किए गए कार्य के अनुरूप भाग घटाकर शुल्क की धनवापसी, अधिकतम ${TBD}% तक रोका जा सकता है।`,
            ja: `既に行った作業に相当する額を差し引いて返金します。差引額は料金の${TBD}%を上限とします。`,
            ko: `이미 수행한 작업에 상당하는 금액을 공제하고 환불합니다. 공제액은 요금의 ${TBD}%를 상한으로 합니다.`,
          },
          note: {
            en: "This percentage must be set against real average cost before publication. Under Article 9 of the Consumer Contract Act, a retention exceeding the average damage actually suffered is void to the extent of the excess — so an unreasoned figure is unenforceable.",
            hi: "प्रकाशन से पूर्व यह प्रतिशत वास्तविक औसत लागत के आधार पर निर्धारित किया जाना चाहिए। उपभोक्ता संविदा अधिनियम की धारा 9 के अंतर्गत, वास्तव में हुई औसत हानि से अधिक रोक अतिरेक की सीमा तक शून्य है — अतः बिना आधार का अंक अप्रवर्तनीय है।",
            ja: "この割合は、公開前に実際の平均的なコストに基づいて設定してください。消費者契約法9条により、実際に生じる平均的な損害を超える部分は無効となるため、根拠のない数値は執行できません。",
            ko: "이 비율은 공개 전에 실제 평균 비용에 근거하여 설정해야 합니다. 소비자계약법 제9조에 따라 실제로 발생하는 평균적 손해를 초과하는 부분은 무효이므로, 근거 없는 수치는 집행할 수 없습니다.",
          },
        },
        {
          label: {
            en: "After delivery",
            hi: "वितरण के बाद",
            ja: "納品後",
            ko: "납품 후",
          },
          value: {
            en: "No refund on the basis of disagreement with the interpretation offered. A full refund is made if the appraisal was not delivered, was delivered in a form you cannot open or read, or was prepared for the wrong birth details through our error.",
            hi: "प्रस्तुत व्याख्या से असहमति के आधार पर कोई धनवापसी नहीं। पूर्ण धनवापसी तब की जाती है जब परामर्श वितरित ही न हुआ हो, ऐसे रूप में वितरित हुआ हो जिसे आप खोल या पढ़ न सकें, अथवा हमारी त्रुटि से ग़लत जन्म-विवरण पर तैयार हुआ हो।",
            ja: "鑑定内容の解釈にご同意いただけないことを理由とする返金には応じかねます。ただし、納品がなされなかった場合、開くことや読むことのできない形式で納品された場合、または当方の誤りにより誤った出生データで作成された場合は、全額を返金します。",
            ko: "감정 내용의 해석에 동의하지 않으심을 이유로 한 환불에는 응하기 어렵습니다. 다만 납품이 이루어지지 않은 경우, 열거나 읽을 수 없는 형식으로 납품된 경우, 또는 당사의 오류로 잘못된 출생 정보로 작성된 경우에는 전액 환불합니다.",
          },
        },
      ],
    },
    {
      id: "live",
      heading: {
        en: "Live sessions",
        hi: "सजीव सत्र",
        ja: "ライブ鑑定のキャンセル",
        ko: "라이브 감정 취소",
      },
      rows: [
        {
          label: {
            en: "More than 48 hours before the session",
            hi: "सत्र से 48 घंटे से अधिक पूर्व",
            ja: "開始48時間前より前",
            ko: "시작 48시간 전보다 이전",
          },
          value: {
            en: "Full refund, or rescheduling at no charge.",
            hi: "पूर्ण धनवापसी, अथवा बिना शुल्क पुनर्निर्धारण।",
            ja: "全額を返金、または無料で日程を変更いたします。",
            ko: "전액 환불 또는 무료로 일정을 변경해 드립니다.",
          },
        },
        {
          label: {
            en: "Within 48 hours of the session",
            hi: "सत्र के 48 घंटे के भीतर",
            ja: "開始48時間前以降",
            ko: "시작 48시간 전 이후",
          },
          value: {
            en: `Rescheduling once at no charge where possible; otherwise a refund less up to ${TBD}% reflecting the reserved time and preparation already done.`,
            hi: `जहाँ संभव हो, एक बार बिना शुल्क पुनर्निर्धारण; अन्यथा आरक्षित समय व पूर्व-तैयारी के अनुरूप अधिकतम ${TBD}% घटाकर धनवापसी।`,
            ja: `可能な場合は1回に限り無料で日程変更を承ります。変更が難しい場合は、確保していたお時間と事前準備に相当する額（上限${TBD}%）を差し引いて返金します。`,
            ko: `가능한 경우 1회에 한해 무료로 일정을 변경해 드립니다. 변경이 어려운 경우 확보했던 시간과 사전 준비에 상당하는 금액(상한 ${TBD}%)을 공제하고 환불합니다.`,
          },
        },
        {
          label: {
            en: "Non-attendance without notice",
            hi: "बिना सूचना अनुपस्थिति",
            ja: "ご連絡のない不参加",
            ko: "연락 없는 불참",
          },
          value: {
            en: "Treated as a same-day cancellation. Please contact us if something prevented you from attending — genuine emergencies are accommodated.",
            hi: "उसी दिन के रद्दीकरण के रूप में माना जाता है। यदि किसी कारण से आप उपस्थित न हो सके तो कृपया संपर्क करें — वास्तविक आपात स्थितियों में सहायता की जाती है।",
            ja: "当日キャンセルとして取り扱います。やむを得ない事情でご参加いただけなかった場合は、ご連絡ください。真にやむを得ない事情には配慮いたします。",
            ko: "당일 취소로 취급합니다. 부득이한 사정으로 참여하지 못하신 경우 연락 주십시오. 진정으로 부득이한 사정은 배려합니다.",
          },
        },
        {
          label: {
            en: "Cancelled or postponed by us",
            hi: "हमारे द्वारा रद्द या स्थगित",
            ja: "当方の都合による中止・延期",
            ko: "당사 사정에 의한 중지·연기",
          },
          value: {
            en: "Full refund, or rescheduling at a time that suits you, entirely at your choice.",
            hi: "पूर्ण धनवापसी, अथवा आपके अनुकूल समय पर पुनर्निर्धारण — पूर्णतः आपके चयन पर।",
            ja: "全額返金、またはご都合のよい日時への振替のいずれかを、お客様にお選びいただけます。",
            ko: "전액 환불 또는 편하신 일시로의 변경 중에서 고객이 선택하실 수 있습니다.",
          },
        },
      ],
    },
    {
      id: "how",
      heading: {
        en: "How refunds are made",
        hi: "धनवापसी कैसे की जाती है",
        ja: "返金の方法",
        ko: "환불 방법",
      },
      body: [
        {
          en: `Refunds are made by the same route the payment arrived by, wherever that is possible, and are initiated within ${TBD} business days of the cancellation being confirmed. Transfer fees charged by an intermediary or receiving bank are outside our control and may reduce the amount that reaches you.`,
          hi: `धनवापसी, जहाँ तक संभव हो, उसी माध्यम से की जाती है जिससे भुगतान प्राप्त हुआ था, और रद्दीकरण की पुष्टि के ${TBD} कार्य-दिवसों के भीतर आरंभ की जाती है। मध्यस्थ या प्राप्तकर्ता बैंक द्वारा लगाए गए अंतरण शुल्क हमारे नियंत्रण से बाहर हैं और आप तक पहुँचने वाली राशि को घटा सकते हैं।`,
          ja: `返金は、可能な限りお支払いいただいた方法と同じ経路で行い、キャンセル確定後${TBD}営業日以内に手続きを開始します。中継銀行や受取金融機関が課す手数料は当方では管理できず、お受け取り額が減少する場合があります。`,
          ko: `환불은 가능한 한 결제하신 방법과 동일한 경로로 진행하며, 취소 확정 후 ${TBD}영업일 이내에 절차를 시작합니다. 중계 은행이나 수취 금융기관이 부과하는 수수료는 당사가 통제할 수 없으며 수령 금액이 줄어들 수 있습니다.`,
        },
        {
          en: `To cancel, or to raise a concern about work already delivered, write to ${TBD}. Please include the name the booking was made under and the date of the session or the date the appraisal was commissioned.`,
          hi: `रद्द करने हेतु, अथवा पहले से वितरित कार्य पर कोई चिंता उठाने हेतु, ${TBD} पर लिखें। कृपया वह नाम सम्मिलित करें जिसके अंतर्गत बुकिंग की गई थी तथा सत्र की तिथि या परामर्श सौंपे जाने की तिथि।`,
          ja: `キャンセルのお申し出、または納品済みの内容に関するご相談は、${TBD}までご連絡ください。その際、ご予約時のお名前と、セッションの日付または鑑定をお申し込みいただいた日付をお知らせください。`,
          ko: `취소 신청 또는 납품된 내용에 관한 문의는 ${TBD}로 연락해 주십시오. 그때 예약 시 성함과 세션 날짜 또는 감정을 신청하신 날짜를 알려 주십시오.`,
        },
        {
          en: "If we cannot resolve a complaint between us, you may take it to a local consumer affairs centre (消費生活センター), reachable in Japan on the Consumer Hotline 188. Nothing in this policy affects your statutory rights.",
          hi: "यदि हम आपस में शिकायत का समाधान न कर सकें, तो आप उसे स्थानीय उपभोक्ता मामले केंद्र (消費生活センター) तक ले जा सकते हैं, जो जापान में उपभोक्ता हॉटलाइन 188 पर उपलब्ध है। इस नीति में कुछ भी आपके वैधानिक अधिकारों को प्रभावित नहीं करता।",
          ja: "当事者間で解決に至らない場合は、お住まいの地域の消費生活センターにご相談いただけます（消費者ホットライン 188）。本ポリシーは、法令に基づくお客様の権利に影響を及ぼすものではありません。",
          ko: "당사자 간에 해결되지 않는 경우 거주 지역의 소비생활센터에 상담하실 수 있습니다(소비자 핫라인 188). 본 정책은 법령에 따른 고객의 권리에 영향을 미치지 않습니다.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------------- *
 * 利用規約
 *
 * The load-bearing clauses, and why they are shaped the way they are:
 *
 *   - `nature` is the 消費者契約法 4条3項 clause. It states affirmatively that
 *     this practice does not claim to avert misfortune and does not condition
 *     any sale on averting it. That is the single most valuable paragraph in
 *     these documents for this particular business.
 *   - `liability` is capped rather than excluded. 消費者契約法 8条 voids a
 *     clause fully exempting a trader from liability, and voids any exclusion
 *     for intentional acts or gross negligence outright. A blanket exclusion
 *     would therefore delete itself and leave the operator worse off.
 *   - `jurisdiction` is a 専属的合意管轄 qualified by mandatory law, because an
 *     unqualified one against a consumer is vulnerable under 消費者契約法 10条.
 *
 * ⚠ REVIEW BLOCKER — intellectual property. `src/lib/seo/metadata.ts` records
 * that `/en/learn-jyotish/*` is a verbatim duplicate of a live third-party
 * site, and the JA/HI/KO versions are translations of that same text, which
 * makes them derivative works. The `ip` section below therefore claims rights
 * only in genuinely original material and does not assert ownership of the
 * education corpus. Do not "tidy" it into a blanket ownership claim: that
 * would put a false statement into a binding document. Resolve the underlying
 * position first — licence, permission, rewrite, or removal.
 * ------------------------------------------------------------------------- */
const terms: LegalDocument = {
  slug: "terms",
  title: {
    en: "Terms of Service",
    hi: "सेवा की शर्तें",
    ja: "利用規約",
    ko: "이용약관",
  },
  summary: {
    en: "The terms on which this site and its readings may be used, including what a reading is, what it is not, and the limits of our responsibility.",
    hi: "इस साइट और इसके परामर्श के उपयोग की शर्तें — परामर्श क्या है, क्या नहीं है, और हमारी जिम्मेदारी की सीमाएँ।",
    ja: "本サイトおよび鑑定のご利用条件を定めます。鑑定が何であり何でないか、および当方の責任の範囲を含みます。",
    ko: "본 사이트와 감정의 이용 조건을 정합니다. 감정이 무엇이며 무엇이 아닌지, 그리고 당사 책임의 범위를 포함합니다.",
  },
  lastUpdated: "2026-08-17",
  sections: [
    {
      id: "acceptance",
      heading: {
        en: "1. Agreement",
        hi: "1. सहमति",
        ja: "1. 本規約への同意",
        ko: "1. 본 약관에 대한 동의",
      },
      body: [
        {
          en: "These terms govern your use of this website and any appraisal or session you commission through it. By using the site you accept them. If you do not accept them, please do not use the site.",
          hi: "ये शर्तें इस वेबसाइट के आपके उपयोग तथा इसके माध्यम से सौंपे गए किसी भी परामर्श या सत्र पर लागू होती हैं। साइट का उपयोग करके आप इन्हें स्वीकार करते हैं। यदि आप इन्हें स्वीकार नहीं करते, तो कृपया साइट का उपयोग न करें।",
          ja: "本規約は、本ウェブサイトのご利用、および本サイトを通じてお申し込みいただく鑑定・セッションに適用されます。本サイトをご利用いただくことで、本規約にご同意いただいたものといたします。ご同意いただけない場合は、本サイトのご利用をお控えください。",
          ko: "본 약관은 본 웹사이트의 이용 및 본 사이트를 통해 신청하시는 감정·세션에 적용됩니다. 본 사이트를 이용하심으로써 본 약관에 동의하신 것으로 봅니다. 동의하지 않으시는 경우 본 사이트 이용을 삼가 주십시오.",
        },
        {
          en: "Where an individual appraisal is agreed on different specific terms, those specific terms prevail over these general ones to the extent of any conflict.",
          hi: "जहाँ किसी व्यक्तिगत परामर्श हेतु भिन्न विशिष्ट शर्तें तय होती हैं, वहाँ टकराव की सीमा तक वे विशिष्ट शर्तें इन सामान्य शर्तों पर प्रभावी होंगी।",
          ja: "個別の鑑定について本規約と異なる条件を合意した場合は、抵触する範囲において当該個別の条件が優先します。",
          ko: "개별 감정에 대해 본 약관과 다른 조건을 합의한 경우, 저촉되는 범위에서 해당 개별 조건이 우선합니다.",
        },
      ],
    },
    {
      id: "nature",
      heading: {
        en: "2. What this service is, and what it is not",
        hi: "2. यह सेवा क्या है, और क्या नहीं है",
        ja: "2. 本サービスの性質と限界",
        ko: "2. 본 서비스의 성격과 한계",
      },
      body: [
        {
          en: "Jyotish is a traditional interpretive discipline. What is offered here is an interpretation prepared in that tradition, presented for reflection and self-understanding. It is not a prediction that carries any guarantee, and no outcome of any kind is promised.",
          hi: "ज्योतिष एक पारंपरिक व्याख्यात्मक विद्या है। यहाँ जो प्रस्तुत है वह उसी परंपरा में तैयार की गई व्याख्या है, जो चिंतन और आत्म-बोध हेतु दी जाती है। यह कोई गारंटीयुक्त भविष्यवाणी नहीं है, और किसी भी प्रकार के परिणाम का वचन नहीं दिया जाता।",
          ja: "ジョーティッシュは伝統的な解釈の体系です。本サービスでお伝えするのは、その伝統に基づいて作成した解釈であり、ご自身を見つめ直すための材料としてご提供するものです。結果を保証する予言ではなく、いかなる成果もお約束するものではありません。",
          ko: "조티시는 전통적인 해석 체계입니다. 본 서비스에서 전해 드리는 것은 그 전통에 따라 작성한 해석이며, 스스로를 돌아보기 위한 자료로 제공하는 것입니다. 결과를 보장하는 예언이 아니며, 어떠한 성과도 약속하지 않습니다.",
        },
        {
          en: "We do not claim the ability to foresee or avert misfortune, and we do not sell anything on the basis that harm will come to you unless you buy it. No reading, product, or remedy offered here is presented as a means of removing a curse, warding off calamity, or resolving a spiritual affliction. If anyone tells you otherwise while purporting to represent this practice, that is not a statement we authorise, and we ask you to report it to us.",
          hi: "हम दुर्भाग्य को देख लेने या टाल देने की क्षमता का दावा नहीं करते, और हम कुछ भी इस आधार पर नहीं बेचते कि न खरीदने पर आपका अनिष्ट होगा। यहाँ प्रस्तुत कोई भी परामर्श, वस्तु या उपाय शाप हटाने, विपत्ति टालने या किसी आध्यात्मिक बाधा के निवारण के साधन के रूप में प्रस्तुत नहीं किया जाता। यदि कोई व्यक्ति इस अभ्यास का प्रतिनिधि बताते हुए आपसे इसके विपरीत कहे, तो वह कथन हमारे द्वारा अधिकृत नहीं है; कृपया हमें सूचित करें।",
          ja: "当方は、不幸を予見し、または回避する能力があると称することはありません。また、購入しなければ災いが生じるといった説明により物品や役務を販売することもありません。本サービスで提供する鑑定・物品・対処法は、いずれも「悪運を除去する」「災難を避ける」「霊的な障りを解消する」ための手段として提供するものではありません。当方の関係者を名乗る者がこれに反する説明を行った場合、それは当方が認めたものではありませんので、ご一報ください。",
          ko: "당사는 불행을 예견하거나 회피할 능력이 있다고 주장하지 않습니다. 또한 구매하지 않으면 화가 미친다는 식의 설명으로 물품이나 서비스를 판매하지 않습니다. 본 서비스에서 제공하는 감정·물품·대처법은 어느 것도 '악운을 제거한다', '재난을 피한다', '영적인 장애를 해소한다'는 수단으로 제공하는 것이 아닙니다. 당사 관계자를 사칭하는 자가 이에 반하는 설명을 한 경우 당사가 인정한 것이 아니므로 알려 주십시오.",
        },
        {
          en: "An appraisal is not medical, psychological, legal, financial, or tax advice, and must not be used in place of it. If you are unwell, in legal difficulty, or facing a financial decision of consequence, please consult a qualified professional in that field. If you are in distress or at risk of harming yourself, please contact your local emergency services or a crisis support line without delay — this service is not equipped to help in that situation and is not a substitute for one that is.",
          hi: "परामर्श चिकित्सकीय, मनोवैज्ञानिक, विधिक, वित्तीय या कर-संबंधी सलाह नहीं है, और उसके स्थान पर प्रयुक्त नहीं किया जाना चाहिए। यदि आप अस्वस्थ हैं, विधिक कठिनाई में हैं, या किसी महत्वपूर्ण वित्तीय निर्णय का सामना कर रहे हैं, तो कृपया उस क्षेत्र के योग्य पेशेवर से परामर्श करें। यदि आप मानसिक कष्ट में हैं या स्वयं को हानि पहुँचाने के जोखिम में हैं, तो कृपया बिना विलंब अपनी स्थानीय आपात सेवाओं या संकट सहायता लाइन से संपर्क करें — यह सेवा उस स्थिति में सहायता हेतु सक्षम नहीं है और उसका विकल्प नहीं है।",
          ja: "鑑定は、医療・心理・法律・金融・税務に関する助言ではなく、これらに代わるものとしてご利用いただくことはできません。体調がすぐれない場合、法的な問題を抱えている場合、重要な財務上の判断に直面している場合は、それぞれの分野の有資格の専門家にご相談ください。強い精神的つらさを感じている場合やご自身を傷つけるおそれがある場合は、ためらわずにお住まいの地域の緊急窓口または相談窓口にご連絡ください。本サービスはそうした状況に対応できる体制ではなく、専門の窓口に代わるものではありません。",
          ko: "감정은 의료·심리·법률·금융·세무에 관한 조언이 아니며, 이를 대신하는 것으로 이용하실 수 없습니다. 몸이 좋지 않으신 경우, 법적 문제를 겪고 계신 경우, 중요한 재무 결정을 앞두고 계신 경우에는 해당 분야의 자격 있는 전문가와 상담하십시오. 심한 정신적 고통을 느끼시거나 스스로를 해칠 우려가 있으신 경우에는 주저하지 마시고 거주 지역의 긴급 창구 또는 상담 창구에 연락하십시오. 본 서비스는 그러한 상황에 대응할 수 있는 체제가 아니며 전문 창구를 대신하지 않습니다.",
        },
        {
          en: "Decisions about your life remain yours. Nothing in a reading removes your own judgement or your responsibility for the choices you make.",
          hi: "आपके जीवन के निर्णय आपके ही रहते हैं। परामर्श में कुछ भी आपके अपने विवेक अथवा आपके द्वारा किए गए चयनों की आपकी जिम्मेदारी को समाप्त नहीं करता।",
          ja: "人生の選択は、あくまでお客様ご自身のものです。鑑定の内容が、お客様ご自身の判断や、その選択についての責任に取って代わることはありません。",
          ko: "인생의 선택은 어디까지나 고객 본인의 것입니다. 감정 내용이 고객 자신의 판단이나 그 선택에 대한 책임을 대신하지 않습니다.",
        },
      ],
    },
    {
      id: "eligibility",
      heading: {
        en: "3. Who may use this service",
        hi: "3. इस सेवा का उपयोग कौन कर सकता है",
        ja: "3. ご利用いただける方",
        ko: "3. 이용하실 수 있는 분",
      },
      body: [
        {
          en: "Paid appraisals and sessions are for adults. If you are a minor, you may commission one only with the consent of a person with parental authority, and we may ask for confirmation of that consent before beginning work.",
          hi: "सशुल्क परामर्श और सत्र वयस्कों हेतु हैं। यदि आप अवयस्क हैं, तो आप केवल माता-पिता के अधिकार रखने वाले व्यक्ति की सहमति से ही परामर्श सौंप सकते हैं, और कार्य आरंभ करने से पूर्व हम उस सहमति की पुष्टि माँग सकते हैं।",
          ja: "有料の鑑定・セッションは成年の方を対象としています。未成年の方は、親権者の同意を得たうえでお申し込みください。作成着手前に同意の確認をお願いする場合があります。",
          ko: "유료 감정·세션은 성인을 대상으로 합니다. 미성년자이신 경우 친권자의 동의를 얻은 후 신청해 주십시오. 작성 착수 전에 동의 확인을 요청드릴 수 있습니다.",
        },
      ],
    },
    {
      id: "tools",
      heading: {
        en: "4. The free tools",
        hi: "4. निःशुल्क उपकरण",
        ja: "4. 無料ツールについて",
        ko: "4. 무료 도구에 대하여",
      },
      body: [
        {
          en: "The calculators on this site are provided free and as they stand. They compute from astronomical data using established methods, and we take care to get them right, but we do not warrant that every output is free of error, nor that the site will be available without interruption.",
          hi: "इस साइट के गणक निःशुल्क और यथास्थिति प्रदान किए जाते हैं। वे स्थापित विधियों से खगोलीय आँकड़ों के आधार पर गणना करते हैं, और हम उन्हें सही रखने का ध्यान रखते हैं, किन्तु हम यह आश्वासन नहीं देते कि प्रत्येक परिणाम त्रुटिरहित होगा, अथवा साइट निर्बाध उपलब्ध रहेगी।",
          ja: "本サイトの各種計算ツールは、無料で、現状有姿にてご提供しています。確立された方法により天文データから算出しており、正確性には注意を払っていますが、すべての出力に誤りがないこと、および本サイトが中断なくご利用いただけることを保証するものではありません。",
          ko: "본 사이트의 각종 계산 도구는 무료로, 현재 상태 그대로 제공됩니다. 확립된 방법으로 천문 데이터에서 산출하며 정확성에 주의를 기울이고 있으나, 모든 출력에 오류가 없다는 점 및 본 사이트를 중단 없이 이용하실 수 있다는 점을 보장하지 않습니다.",
        },
        {
          en: "Results depend entirely on the birth details entered. An approximate birth time produces approximate house positions, and this is a property of the method rather than a fault in the calculation.",
          hi: "परिणाम पूर्णतः दर्ज किए गए जन्म-विवरण पर निर्भर करते हैं। अनुमानित जन्म समय से भाव-स्थितियाँ भी अनुमानित होती हैं; यह विधि का स्वभाव है, गणना का दोष नहीं।",
          ja: "算出結果は、ご入力いただいた出生データに全面的に依存します。出生時刻が概算である場合はハウスの位置も概算となりますが、これは計算上の不具合ではなく、手法の性質によるものです。",
          ko: "산출 결과는 입력하신 출생 정보에 전적으로 의존합니다. 출생 시각이 대략적인 경우 하우스 위치도 대략적이 되지만, 이는 계산상의 결함이 아니라 방법의 성질에 따른 것입니다.",
        },
        {
          en: "Some tools accept the birth details of another person, such as the compatibility calculator. If you enter someone else’s details, you confirm that you are entitled to do so. Please do not enter another person’s birth information without their knowledge.",
          hi: "कुछ उपकरण किसी अन्य व्यक्ति के जन्म-विवरण स्वीकार करते हैं, जैसे अनुकूलता गणक। यदि आप किसी अन्य का विवरण दर्ज करते हैं, तो आप पुष्टि करते हैं कि आप ऐसा करने के अधिकारी हैं। कृपया किसी अन्य व्यक्ति की जन्म-जानकारी उसकी जानकारी के बिना दर्ज न करें।",
          ja: "相性診断など、一部のツールでは他の方の出生データを入力できます。ご本人以外のデータを入力される場合は、そうする正当な立場にあることをご確認ください。ご本人の了解を得ないまま他の方の出生情報を入力することはお控えください。",
          ko: "궁합 진단 등 일부 도구에서는 다른 분의 출생 정보를 입력할 수 있습니다. 본인 외의 정보를 입력하시는 경우 그렇게 할 정당한 지위에 있음을 확인해 주십시오. 본인의 양해 없이 다른 분의 출생 정보를 입력하는 것은 삼가 주십시오.",
        },
      ],
    },
    {
      id: "conduct",
      heading: {
        en: "5. Use of the site",
        hi: "5. साइट का उपयोग",
        ja: "5. 禁止事項",
        ko: "5. 금지 사항",
      },
      bullets: [
        {
          en: "Do not interfere with the operation of the site, attempt to gain unauthorised access to it, or place automated load on it beyond ordinary personal use.",
          hi: "साइट के संचालन में बाधा न डालें, उसमें अनधिकृत पहुँच का प्रयास न करें, अथवा सामान्य व्यक्तिगत उपयोग से अधिक स्वचालित भार न डालें।",
          ja: "本サイトの運営を妨げる行為、不正にアクセスを試みる行為、通常の個人利用の範囲を超えて自動的に負荷をかける行為は行わないでください。",
          ko: "본 사이트 운영을 방해하는 행위, 부정하게 접근을 시도하는 행위, 통상적인 개인 이용 범위를 넘어 자동으로 부하를 가하는 행위는 하지 마십시오.",
        },
        {
          en: "Do not resell, redistribute, or publish an appraisal prepared for you as though it were your own work or a general publication. Sharing it with your family or your own advisers is entirely fine.",
          hi: "आपके लिए तैयार परामर्श का पुनर्विक्रय, पुनर्वितरण या प्रकाशन इस रूप में न करें मानो वह आपका अपना कार्य या कोई सामान्य प्रकाशन हो। उसे अपने परिवार या अपने सलाहकारों के साथ साझा करना पूर्णतः उचित है।",
          ja: "お客様のために作成した鑑定書を、ご自身の著作物または一般向けの出版物であるかのように転売・再配布・公開することはお控えください。ご家族やお客様の相談相手に共有していただくことは差し支えありません。",
          ko: "고객을 위해 작성한 감정서를 본인의 저작물이나 일반 출판물인 것처럼 재판매·재배포·공개하는 것은 삼가 주십시오. 가족이나 고객의 상담 상대에게 공유하시는 것은 무방합니다.",
        },
        {
          en: "Do not use this site or anything obtained from it to harass, pressure, or frighten another person.",
          hi: "इस साइट अथवा इससे प्राप्त किसी वस्तु का उपयोग किसी अन्य व्यक्ति को परेशान करने, दबाव डालने या भयभीत करने हेतु न करें।",
          ja: "本サイトまたは本サイトから得た内容を、他者への嫌がらせ、圧力、または不安をあおる目的で用いないでください。",
          ko: "본 사이트 또는 본 사이트에서 얻은 내용을 타인에 대한 괴롭힘, 압박, 불안 조성 목적으로 사용하지 마십시오.",
        },
      ],
    },
    {
      id: "ip",
      heading: {
        en: "6. Intellectual property",
        hi: "6. बौद्धिक संपदा",
        ja: "6. 知的財産権",
        ko: "6. 지적 재산권",
      },
      body: [
        {
          en: "The site’s original text, design, and software are protected by copyright and may not be copied or republished without permission. Some educational material on this site derives from third-party sources and remains the property of its respective rights holders; it is presented for study and is not licensed for redistribution by you.",
          hi: "साइट का मौलिक पाठ, अभिकल्प तथा सॉफ़्टवेयर कॉपीराइट द्वारा संरक्षित है और अनुमति के बिना उसकी प्रतिलिपि या पुनर्प्रकाशन नहीं किया जा सकता। इस साइट की कुछ शैक्षिक सामग्री तृतीय-पक्ष स्रोतों से व्युत्पन्न है और अपने-अपने अधिकारधारकों की संपत्ति बनी रहती है; वह अध्ययन हेतु प्रस्तुत है और आपके द्वारा पुनर्वितरण हेतु अनुज्ञप्त नहीं है।",
          ja: "本サイトのオリジナルの文章・デザイン・ソフトウェアは著作権により保護されており、許可なく複製・再掲載することはできません。なお、本サイトの教育コンテンツの一部は第三者に由来するものであり、その権利は各権利者に帰属します。これらは学習の用に供するものであり、お客様による再配布を許諾するものではありません。",
          ko: "본 사이트의 오리지널 문장·디자인·소프트웨어는 저작권으로 보호되며 허가 없이 복제·재게재할 수 없습니다. 또한 본 사이트의 교육 콘텐츠 일부는 제3자에서 유래한 것으로 그 권리는 각 권리자에게 귀속됩니다. 이는 학습 용도로 제공되는 것이며 고객에 의한 재배포를 허락하는 것이 아닙니다.",
        },
        {
          en: `If you believe material on this site infringes your rights, please write to ${TBD} with enough detail to identify the material, and it will be reviewed promptly.`,
          hi: `यदि आपको लगता है कि इस साइट की कोई सामग्री आपके अधिकारों का उल्लंघन करती है, तो कृपया सामग्री की पहचान हेतु पर्याप्त विवरण सहित ${TBD} पर लिखें; उसकी शीघ्र समीक्षा की जाएगी।`,
          ja: `本サイトの掲載内容がご自身の権利を侵害しているとお考えの場合は、対象を特定できる程度の情報を添えて${TBD}までご連絡ください。速やかに確認いたします。`,
          ko: `본 사이트의 게재 내용이 자신의 권리를 침해한다고 생각하시는 경우, 대상을 특정할 수 있을 정도의 정보를 첨부하여 ${TBD}로 연락해 주십시오. 신속히 확인하겠습니다.`,
        },
      ],
    },
    {
      id: "liability",
      heading: {
        en: "7. Our responsibility",
        hi: "7. हमारी जिम्मेदारी",
        ja: "7. 当方の責任",
        ko: "7. 당사의 책임",
      },
      body: [
        {
          en: "We take reasonable care in preparing appraisals and in operating this site. Where we are nonetheless liable to you for loss arising from a paid service, our liability is limited to the amount you paid for that service — except where the loss was caused by our intent or gross negligence, or where the law does not permit such a limit, in which case this limitation does not apply.",
          hi: "हम परामर्श तैयार करने तथा इस साइट के संचालन में उचित सावधानी बरतते हैं। जहाँ फिर भी किसी सशुल्क सेवा से उत्पन्न हानि हेतु हम आपके प्रति उत्तरदायी हों, वहाँ हमारा दायित्व उस सेवा हेतु आपके द्वारा भुगतान की गई राशि तक सीमित है — सिवाय उन स्थितियों के जहाँ हानि हमारे आशय या घोर उपेक्षा से हुई हो, अथवा जहाँ विधि ऐसी सीमा की अनुमति न दे; ऐसी स्थिति में यह सीमा लागू नहीं होगी।",
          ja: "当方は、鑑定の作成および本サイトの運営にあたり相当の注意を払います。それでもなお有料サービスに起因する損害について当方が責任を負う場合、その責任の範囲は当該サービスについてお支払いいただいた金額を上限とします。ただし、当方の故意または重大な過失による場合、および法令上かかる制限が認められない場合には、この上限は適用されません。",
          ko: "당사는 감정 작성 및 본 사이트 운영에 있어 상당한 주의를 기울입니다. 그럼에도 유료 서비스에 기인한 손해에 대해 당사가 책임을 지는 경우, 그 책임 범위는 해당 서비스에 대해 지불하신 금액을 상한으로 합니다. 다만 당사의 고의 또는 중대한 과실에 의한 경우, 그리고 법령상 그러한 제한이 인정되지 않는 경우에는 이 상한이 적용되지 않습니다.",
        },
        {
          en: "The free tools are provided without charge and without warranty, and we are not responsible for decisions taken on the basis of their output. This does not affect any liability that cannot be excluded by law.",
          hi: "निःशुल्क उपकरण बिना शुल्क तथा बिना आश्वासन के प्रदान किए जाते हैं, और उनके परिणाम के आधार पर लिए गए निर्णयों हेतु हम उत्तरदायी नहीं हैं। इससे ऐसे किसी दायित्व पर प्रभाव नहीं पड़ता जिसे विधि द्वारा अपवर्जित नहीं किया जा सकता।",
          ja: "無料ツールは、無償かつ無保証でご提供するものであり、その出力に基づいて行われた判断について当方は責任を負いません。ただし、法令上排除することができない責任についてはこの限りではありません。",
          ko: "무료 도구는 무상 및 무보증으로 제공되며, 그 출력에 근거하여 내려진 판단에 대해 당사는 책임을 지지 않습니다. 다만 법령상 배제할 수 없는 책임에 대해서는 그러하지 아니합니다.",
        },
      ],
    },
    {
      id: "changes",
      heading: {
        en: "8. Changes and suspension",
        hi: "8. परिवर्तन और निलंबन",
        ja: "8. 本規約の変更・提供の停止",
        ko: "8. 약관 변경 및 제공 중단",
      },
      body: [
        {
          en: "We may change these terms. Where a change is material and disadvantageous to you, it will be posted here in advance of taking effect, with the date it takes effect, in accordance with Articles 548-4 of the Civil Code concerning standard terms. Continuing to use the site after that date indicates acceptance.",
          hi: "हम इन शर्तों में परिवर्तन कर सकते हैं। जहाँ कोई परिवर्तन सारवान् और आपके लिए प्रतिकूल हो, वहाँ वह प्रभावी होने से पूर्व, प्रभावी तिथि सहित, यहाँ प्रकाशित किया जाएगा — नागरिक संहिता के मानक शर्तों संबंधी अनुच्छेद 548-4 के अनुरूप। उस तिथि के बाद साइट का उपयोग जारी रखना स्वीकृति दर्शाता है।",
          ja: "当方は本規約を変更することがあります。お客様にとって重要かつ不利益となる変更を行う場合は、民法548条の4（定型約款の変更）に従い、効力発生日を明示のうえ、あらかじめ本ページに掲示します。効力発生日以降も本サイトをご利用いただいた場合、変更にご同意いただいたものといたします。",
          ko: "당사는 본 약관을 변경할 수 있습니다. 고객에게 중요하고 불리한 변경을 하는 경우, 민법 제548조의4(정형약관의 변경)에 따라 효력 발생일을 명시하여 사전에 본 페이지에 게시합니다. 효력 발생일 이후에도 본 사이트를 이용하시는 경우 변경에 동의하신 것으로 봅니다.",
        },
        {
          en: "We may suspend or withdraw the site, or any part of it, for maintenance or for any other reason. Where a paid service is affected, the Returns and Cancellation Policy applies.",
          hi: "हम रखरखाव अथवा किसी अन्य कारण से साइट अथवा उसके किसी भाग को निलंबित या वापस ले सकते हैं। जहाँ कोई सशुल्क सेवा प्रभावित हो, वहाँ वापसी एवं रद्दीकरण नीति लागू होगी।",
          ja: "当方は、保守その他の理由により、本サイトの全部または一部の提供を停止・終了することがあります。有料サービスに影響が及ぶ場合は、「返品・キャンセルポリシー」の定めによります。",
          ko: "당사는 유지보수 기타 사유로 본 사이트의 전부 또는 일부 제공을 중단·종료할 수 있습니다. 유료 서비스에 영향이 미치는 경우 「반품·취소 정책」의 규정에 따릅니다.",
        },
      ],
    },
    {
      id: "jurisdiction",
      heading: {
        en: "9. Governing law and jurisdiction",
        hi: "9. शासी विधि और अधिकारिता",
        ja: "9. 準拠法・管轄",
        ko: "9. 준거법 및 관할",
      },
      body: [
        {
          en: `These terms are governed by the law of Japan. Any dispute arising from them will be submitted in the first instance to the ${TBD} District Court as the court of exclusive agreed jurisdiction — save that nothing in this clause deprives you of any protection or forum available to you as a consumer under mandatory law, including the Consumer Contract Act and the Code of Civil Procedure.`,
          hi: `ये शर्तें जापान की विधि द्वारा शासित हैं। इनसे उत्पन्न कोई भी विवाद प्रथम दृष्टया ${TBD} जिला न्यायालय के समक्ष प्रस्तुत किया जाएगा, जो अनन्य सहमत अधिकारिता का न्यायालय होगा — किन्तु इस उपबंध में कुछ भी आपको उपभोक्ता के रूप में बाध्यकारी विधि के अंतर्गत उपलब्ध किसी संरक्षण या मंच से वंचित नहीं करता, जिसमें उपभोक्ता संविदा अधिनियम तथा सिविल प्रक्रिया संहिता सम्मिलित हैं।`,
          ja: `本規約は日本法に準拠します。本規約に関して紛争が生じた場合は、${TBD}地方裁判所を第一審の専属的合意管轄裁判所とします。ただし、本条は、消費者契約法・民事訴訟法その他の強行法規によりお客様に認められる保護および裁判管轄を奪うものではありません。`,
          ko: `본 약관은 일본법에 준거합니다. 본 약관에 관하여 분쟁이 발생한 경우 ${TBD}지방재판소를 제1심의 전속적 합의관할 법원으로 합니다. 다만 본 조는 소비자계약법·민사소송법 기타 강행법규에 의해 고객에게 인정되는 보호 및 재판 관할을 박탈하지 않습니다.`,
        },
        {
          en: "If any provision of these terms is held void or unenforceable, the remainder continues in force, and the void provision is treated as reduced to the extent necessary to make it valid.",
          hi: "यदि इन शर्तों का कोई उपबंध शून्य या अप्रवर्तनीय ठहराया जाए, तो शेष प्रभावी बना रहेगा, और शून्य उपबंध को उतनी सीमा तक न्यून माना जाएगा जितना उसे विधिमान्य बनाने हेतु आवश्यक हो।",
          ja: "本規約のいずれかの条項が無効または執行不能と判断された場合でも、その他の条項は引き続き効力を有し、当該条項は有効となる限度に縮減して解釈されるものとします。",
          ko: "본 약관의 어느 조항이 무효 또는 집행 불능으로 판단된 경우에도 그 밖의 조항은 계속 효력을 가지며, 해당 조항은 유효하게 되는 한도로 축소하여 해석합니다.",
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------------- *
 * プライバシーポリシー
 *
 * Written against 個人情報保護法 (APPI) as the primary regime, with short
 * region sections for visitors reached by the other three locales.
 *
 * Points a reviewer should look at first:
 *   - Birth data. Not 要配慮個人情報 under APPI 2条3項, but it is unusually
 *     identifying (date + time + place ≈ a near-unique key), so it is treated
 *     with the same care throughout.
 *   - Third-party birth data. The compatibility tool takes a second person's
 *     details. That person is a data subject who never visited the site, which
 *     the `third-party-data` section addresses head on.
 *   - Cross-border transfer. Every processor in `providers` is outside Japan,
 *     so APPI 28条 applies: the transfer needs a lawful basis plus information
 *     about the destination country's regime. Countries are named for that
 *     reason, and the ones the codebase cannot confirm are marked TBD rather
 *     than assumed.
 *   - 外部送信規律. 電気通信事業法27条の12, in force since June 2023, requires
 *     notice when a site causes a user's terminal to transmit information to
 *     an external party — which is precisely what GA4 and Vercel Analytics do.
 *     The `external-transmission` section is that notice.
 *
 * ⚠ REVIEW BLOCKER — there is no consent banner on the site today. Confirm
 * whether the operator falls within the 外部送信規律 and whether GA4 may run
 * before consent for visitors reached in the EEA/UK. If EEA traffic is
 * meaningful, prior consent is required there and a banner is not optional.
 * ------------------------------------------------------------------------- */
const privacy: LegalDocument = {
  slug: "privacy",
  title: {
    en: "Privacy Policy",
    hi: "गोपनीयता नीति",
    ja: "プライバシーポリシー",
    ko: "개인정보 처리방침",
  },
  summary: {
    en: "What personal information is collected — including the birth details entered into the chart tools — why, who else handles it, where it goes, how long it is kept, and how to have it removed.",
    hi: "कौन-सी व्यक्तिगत जानकारी एकत्र की जाती है — कुंडली उपकरणों में दर्ज जन्म-विवरण सहित — क्यों, उसे और कौन संभालता है, वह कहाँ जाती है, कितने समय रखी जाती है, तथा उसे कैसे हटवाया जाए।",
    ja: "取得する個人情報（チャート作成ツールにご入力いただく出生データを含む）と、その利用目的、取扱いを委託する事業者、保管される国、保有期間、および削除のご請求方法について記載します。",
    ko: "수집하는 개인정보(차트 도구에 입력하시는 출생 정보 포함)와 그 이용 목적, 취급을 위탁하는 사업자, 보관되는 국가, 보유 기간, 그리고 삭제 요청 방법을 기재합니다.",
  },
  lastUpdated: "2026-08-17",
  sections: [
    {
      id: "handler",
      heading: {
        en: "1. Who is responsible",
        hi: "1. उत्तरदायी कौन है",
        ja: "1. 個人情報取扱事業者",
        ko: "1. 개인정보 취급 사업자",
      },
      body: [
        {
          en: `The business responsible for handling personal information collected through this site is ${TBD}. Questions about this policy, and requests concerning your own information, go to ${TBD}.`,
          hi: `इस साइट के माध्यम से एकत्र व्यक्तिगत जानकारी के प्रबंधन हेतु उत्तरदायी व्यवसाय ${TBD} है। इस नीति संबंधी प्रश्न तथा आपकी अपनी जानकारी संबंधी अनुरोध ${TBD} पर भेजें।`,
          ja: `本サイトを通じて取得する個人情報の取扱いについて責任を負う事業者は${TBD}です。本ポリシーに関するお問い合わせ、およびご自身の情報に関するご請求は、${TBD}までお願いいたします。`,
          ko: `본 사이트를 통해 수집하는 개인정보의 취급에 대해 책임을 지는 사업자는 ${TBD}입니다. 본 방침에 관한 문의 및 본인의 정보에 관한 청구는 ${TBD}로 부탁드립니다.`,
        },
      ],
    },
    {
      id: "collected",
      heading: {
        en: "2. What is collected",
        hi: "2. क्या एकत्र किया जाता है",
        ja: "2. 取得する情報",
        ko: "2. 수집하는 정보",
      },
      rows: [
        {
          label: {
            en: "Birth details",
            hi: "जन्म विवरण",
            ja: "出生データ",
            ko: "출생 정보",
          },
          value: {
            en: "Name or label, date, time, and place of birth, entered by you into the chart and tool forms. A chart cannot be computed without them.",
            hi: "नाम अथवा संकेत, जन्म तिथि, समय और स्थान, जो आप कुंडली एवं उपकरण प्रपत्रों में दर्ज करते हैं। इनके बिना कुंडली की गणना संभव नहीं।",
            ja: "お名前または識別用の呼称、生年月日、出生時刻、出生地。チャート作成フォームにご入力いただくものであり、これらがないとチャートを算出できません。",
            ko: "성함 또는 식별용 명칭, 생년월일, 출생 시각, 출생지. 차트 생성 양식에 입력하시는 것으로, 이것 없이는 차트를 산출할 수 없습니다.",
          },
        },
        {
          label: {
            en: "Account details",
            hi: "खाता विवरण",
            ja: "アカウント情報",
            ko: "계정 정보",
          },
          value: {
            en: "Email address, display name, and authentication records, if you choose to create an account. An account is optional — charts can be generated without one.",
            hi: "ईमेल पता, प्रदर्शित नाम तथा प्रमाणन अभिलेख, यदि आप खाता बनाना चुनते हैं। खाता वैकल्पिक है — उसके बिना भी कुंडली बनाई जा सकती है।",
            ja: "アカウントを作成される場合の、メールアドレス、表示名、認証に関する記録。アカウントの作成は任意であり、作成しなくてもチャートはご利用いただけます。",
            ko: "계정을 만드시는 경우의 이메일 주소, 표시 이름, 인증 관련 기록. 계정 생성은 선택 사항이며, 만들지 않아도 차트를 이용하실 수 있습니다.",
          },
        },
        {
          label: {
            en: "Inquiry and booking details",
            hi: "पूछताछ एवं बुकिंग विवरण",
            ja: "お問い合わせ・ご予約情報",
            ko: "문의 및 예약 정보",
          },
          value: {
            en: "Name, email address, contact number, the message you write, and the date and format of any session booked.",
            hi: "नाम, ईमेल पता, संपर्क क्रमांक, आपके द्वारा लिखा संदेश, तथा किसी भी बुक किए गए सत्र की तिथि व प्रारूप।",
            ja: "お名前、メールアドレス、連絡先の電話番号、ご記入いただいた内容、およびご予約いただいたセッションの日時と形式。",
            ko: "성함, 이메일 주소, 연락처 전화번호, 기재하신 내용, 그리고 예약하신 세션의 일시와 형식.",
          },
        },
        {
          label: {
            en: "Usage information",
            hi: "उपयोग संबंधी जानकारी",
            ja: "利用状況に関する情報",
            ko: "이용 상황 정보",
          },
          value: {
            en: "Pages viewed, actions such as generating or saving a chart, approximate location derived from IP address, browser and device type, and an identifier stored in a cookie that distinguishes one browser from another without naming anyone.",
            hi: "देखे गए पृष्ठ, कुंडली बनाने या सहेजने जैसी क्रियाएँ, IP पते से व्युत्पन्न अनुमानित स्थान, ब्राउज़र व उपकरण प्रकार, तथा कुकी में संग्रहीत एक पहचानकर्ता जो बिना किसी का नाम जाने एक ब्राउज़र को दूसरे से अलग करता है।",
            ja: "閲覧されたページ、チャートの作成・保存などの操作、IPアドレスから推定される大まかな地域、ブラウザおよび端末の種別、ならびに個人を特定しない形でブラウザを識別するためにCookieに保存する識別子。",
            ko: "열람하신 페이지, 차트 생성·저장 등의 조작, IP 주소에서 추정되는 대략적인 지역, 브라우저 및 기기 종류, 그리고 개인을 특정하지 않는 형태로 브라우저를 식별하기 위해 쿠키에 저장하는 식별자.",
          },
        },
      ],
      body: [
        {
          en: "No card number or bank credential is ever collected by this site. Payment is arranged separately and does not pass through this website.",
          hi: "इस साइट द्वारा कोई कार्ड क्रमांक या बैंक क्रेडेंशियल कभी एकत्र नहीं किया जाता। भुगतान की व्यवस्था अलग से होती है और वह इस वेबसाइट से होकर नहीं जाती।",
          ja: "本サイトがカード番号や口座情報を取得することは一切ありません。お支払いは別途お手続きいただくものであり、本サイトを経由しません。",
          ko: "본 사이트가 카드 번호나 계좌 정보를 수집하는 일은 일절 없습니다. 결제는 별도로 진행하시는 것이며 본 사이트를 경유하지 않습니다.",
        },
        {
          en: "Please do not send information about your health, or other especially sensitive matters, through the inquiry form. If such information is relevant to a reading, it is better raised directly during the session.",
          hi: "कृपया अपने स्वास्थ्य अथवा अन्य विशेष रूप से संवेदनशील विषयों की जानकारी पूछताछ प्रपत्र के माध्यम से न भेजें। यदि ऐसी जानकारी परामर्श हेतु प्रासंगिक हो, तो उसे सत्र के दौरान सीधे बताना बेहतर है।",
          ja: "健康状態その他の特に配慮を要する事柄については、お問い合わせフォームからお送りにならないようお願いいたします。鑑定に関係する場合は、セッションの中で直接お話しいただく方が適切です。",
          ko: "건강 상태 기타 특별히 배려가 필요한 사항은 문의 양식으로 보내지 마시기 바랍니다. 감정과 관련된 경우에는 세션 중에 직접 말씀해 주시는 편이 적절합니다.",
        },
      ],
    },
    {
      id: "purposes",
      heading: {
        en: "3. Why it is used",
        hi: "3. उपयोग का प्रयोजन",
        ja: "3. 利用目的",
        ko: "3. 이용 목적",
      },
      bullets: [
        {
          en: "To compute and display the charts and tool results you ask for.",
          hi: "आपके द्वारा माँगी गई कुंडलियाँ एवं उपकरण-परिणाम गणना कर प्रदर्शित करने हेतु।",
          ja: "お客様がご要望のチャートおよびツールの算出結果を作成し、表示するため。",
          ko: "고객이 요청하신 차트 및 도구 산출 결과를 작성하여 표시하기 위해.",
        },
        {
          en: "To save charts to your library, and to keep you signed in, when you have an account.",
          hi: "खाता होने पर आपकी कुंडलियाँ आपके संग्रह में सहेजने तथा आपको साइन-इन बनाए रखने हेतु।",
          ja: "アカウントをお持ちの場合に、チャートをライブラリに保存し、ログイン状態を維持するため。",
          ko: "계정을 보유하신 경우 차트를 라이브러리에 저장하고 로그인 상태를 유지하기 위해.",
        },
        {
          en: "To answer inquiries, prepare and deliver appraisals, and manage bookings.",
          hi: "पूछताछ का उत्तर देने, परामर्श तैयार कर वितरित करने तथा बुकिंग प्रबंधित करने हेतु।",
          ja: "お問い合わせへの回答、鑑定の作成・納品、およびご予約の管理のため。",
          ko: "문의 응대, 감정 작성·납품, 그리고 예약 관리를 위해.",
        },
        {
          en: "To understand how the site is used in aggregate, so that it can be improved.",
          hi: "साइट का समग्र रूप से उपयोग समझने हेतु, ताकि उसमें सुधार किया जा सके।",
          ja: "サイトの利用状況を全体として把握し、改善に役立てるため。",
          ko: "사이트 이용 상황을 전체적으로 파악하여 개선에 활용하기 위해.",
        },
        {
          en: "To keep the service secure, prevent abuse, and comply with tax, accounting, and other legal obligations.",
          hi: "सेवा सुरक्षित रखने, दुरुपयोग रोकने तथा कर, लेखा एवं अन्य विधिक दायित्वों का पालन करने हेतु।",
          ja: "サービスの安全を保ち、不正利用を防止し、税務・会計その他の法令上の義務を履行するため。",
          ko: "서비스의 안전을 지키고 부정 이용을 방지하며 세무·회계 기타 법령상의 의무를 이행하기 위해.",
        },
      ],
      body: [
        {
          en: "Personal information is not used for any purpose beyond those listed without first obtaining your consent, and it is not sold.",
          hi: "उपरोक्त के अतिरिक्त किसी प्रयोजन हेतु व्यक्तिगत जानकारी का उपयोग आपकी पूर्व सहमति के बिना नहीं किया जाता, और उसे बेचा नहीं जाता।",
          ja: "上記以外の目的で個人情報を利用する場合は、あらかじめお客様の同意をいただきます。また、個人情報を販売することはありません。",
          ko: "상기 이외의 목적으로 개인정보를 이용하는 경우에는 사전에 고객의 동의를 받습니다. 또한 개인정보를 판매하지 않습니다.",
        },
      ],
    },
    {
      id: "third-party-data",
      heading: {
        en: "4. Another person’s birth details",
        hi: "4. किसी अन्य व्यक्ति के जन्म विवरण",
        ja: "4. ご本人以外の出生データについて",
        ko: "4. 본인 외의 출생 정보에 대하여",
      },
      body: [
        {
          en: "Some tools, such as the compatibility calculator, accept a second person’s birth details. That person is not the one using the site, so we ask you to enter their details only where you are entitled to, and preferably with their knowledge.",
          hi: "कुछ उपकरण, जैसे अनुकूलता गणक, दूसरे व्यक्ति के जन्म-विवरण स्वीकार करते हैं। वह व्यक्ति साइट का उपयोगकर्ता नहीं है, अतः हम आपसे निवेदन करते हैं कि उनका विवरण केवल तभी दर्ज करें जब आप ऐसा करने के अधिकारी हों, और यथासंभव उनकी जानकारी में।",
          ja: "相性診断など一部のツールでは、ご本人以外の方の出生データを入力できます。その方は本サイトの利用者ではないため、入力される正当な立場にある場合に限り、できる限りご本人の了解を得たうえでご入力ください。",
          ko: "궁합 진단 등 일부 도구에서는 본인 외의 분의 출생 정보를 입력할 수 있습니다. 그분은 본 사이트의 이용자가 아니므로, 입력할 정당한 지위에 있는 경우에 한하여 가능한 한 본인의 양해를 얻은 후 입력해 주십시오.",
        },
        {
          en: "Such details are handled in the same way as your own, and are deleted when you delete the chart they belong to. If someone believes their birth details have been entered here without their agreement, they may write to us and we will remove them.",
          hi: "ऐसे विवरण आपके अपने विवरण की भाँति ही संभाले जाते हैं, और जिस कुंडली से वे संबंधित हैं उसे हटाने पर हटा दिए जाते हैं। यदि किसी को लगे कि उसके जन्म-विवरण उसकी सहमति के बिना यहाँ दर्ज किए गए हैं, तो वह हमें लिख सकता है और हम उन्हें हटा देंगे।",
          ja: "こうしたデータもお客様ご自身の情報と同様に取り扱い、対象のチャートを削除された時点で併せて削除されます。ご自身の出生データが同意なく入力されているとお考えの方は、ご連絡いただければ削除いたします。",
          ko: "이러한 데이터도 고객 본인의 정보와 동일하게 취급하며, 해당 차트를 삭제하신 시점에 함께 삭제됩니다. 본인의 출생 정보가 동의 없이 입력되어 있다고 생각하시는 분은 연락 주시면 삭제해 드립니다.",
        },
      ],
    },
    {
      id: "providers",
      heading: {
        en: "5. Who else handles it, and where",
        hi: "5. इसे और कौन संभालता है, और कहाँ",
        ja: "5. 委託先および保管される国",
        ko: "5. 위탁처 및 보관되는 국가",
      },
      body: [
        {
          en: "Running this site depends on a small number of specialist providers. They act on our instructions, and each receives only what its function requires. All of them are located outside Japan, which means personal information is transferred abroad; the destination for each is named below so that you can judge that transfer.",
          hi: "इस साइट का संचालन कुछ विशेषज्ञ प्रदाताओं पर निर्भर है। वे हमारे निर्देश पर कार्य करते हैं, और प्रत्येक को केवल उतना ही प्राप्त होता है जितना उसके कार्य हेतु आवश्यक है। वे सभी जापान के बाहर स्थित हैं, अर्थात् व्यक्तिगत जानकारी विदेश अंतरित होती है; प्रत्येक का गंतव्य नीचे नामित है ताकि आप उस अंतरण का आकलन कर सकें।",
          ja: "本サイトの運営は、限られた数の専門事業者に支えられています。これらの事業者は当方の指示に基づき、それぞれの機能に必要な範囲の情報のみを取り扱います。いずれも日本国外に所在するため、個人情報は外国に移転されます。ご判断いただけるよう、移転先の国を以下に明示します。",
          ko: "본 사이트의 운영은 소수의 전문 사업자에 의존하고 있습니다. 이들 사업자는 당사의 지시에 따라 각자의 기능에 필요한 범위의 정보만 취급합니다. 모두 일본 국외에 소재하므로 개인정보는 외국으로 이전됩니다. 판단하실 수 있도록 이전 대상 국가를 아래에 명시합니다.",
        },
      ],
      rows: [
        {
          label: { en: "Clerk — accounts and sign-in", hi: "Clerk — खाते एवं साइन-इन", ja: "Clerk — アカウント・ログイン", ko: "Clerk — 계정 및 로그인" },
          value: { en: `United States. Receives email address and authentication data.`, hi: `संयुक्त राज्य अमेरिका। ईमेल पता एवं प्रमाणन डेटा प्राप्त करता है।`, ja: `米国。メールアドレスおよび認証情報を取り扱います。`, ko: `미국. 이메일 주소 및 인증 정보를 취급합니다.` },
        },
        {
          label: { en: "Neon — database", hi: "Neon — डेटाबेस", ja: "Neon — データベース", ko: "Neon — 데이터베이스" },
          value: { en: `${TBD} (confirm the region this project’s database is provisioned in). Stores saved charts, bookings, and account records.`, hi: `${TBD} (इस परियोजना का डेटाबेस जिस क्षेत्र में प्रावधानित है उसकी पुष्टि करें)। सहेजी गई कुंडलियाँ, बुकिंग तथा खाता अभिलेख संग्रहीत करता है।`, ja: `${TBD}（本プロジェクトのデータベースが配置されているリージョンをご確認ください）。保存されたチャート、ご予約、アカウント情報を保管します。`, ko: `${TBD}(본 프로젝트의 데이터베이스가 배치된 리전을 확인하십시오). 저장된 차트, 예약, 계정 정보를 보관합니다.` },
        },
        {
          label: { en: "Vercel — hosting and analytics", hi: "Vercel — होस्टिंग एवं विश्लेषण", ja: "Vercel — ホスティング・アクセス解析", ko: "Vercel — 호스팅 및 분석" },
          value: { en: `United States. Serves the site and records aggregate usage events.`, hi: `संयुक्त राज्य अमेरिका। साइट परोसता है तथा समग्र उपयोग-घटनाएँ अभिलिखित करता है।`, ja: `米国。サイトの配信および利用状況の集計を行います。`, ko: `미국. 사이트 제공 및 이용 상황 집계를 수행합니다.` },
        },
        {
          label: { en: "Render — chart calculation", hi: "Render — कुंडली गणना", ja: "Render — チャート計算", ko: "Render — 차트 계산" },
          value: { en: `${TBD} (confirm the region this service is deployed in). Receives birth date, time, and coordinates in order to compute a chart.`, hi: `${TBD} (यह सेवा जिस क्षेत्र में परिनियोजित है उसकी पुष्टि करें)। कुंडली गणना हेतु जन्म तिथि, समय एवं निर्देशांक प्राप्त करता है।`, ja: `${TBD}（本サービスのデプロイ先リージョンをご確認ください）。チャート算出のため、生年月日・時刻・座標を受け取ります。`, ko: `${TBD}(본 서비스의 배포 리전을 확인하십시오). 차트 산출을 위해 생년월일·시각·좌표를 수신합니다.` },
        },
        {
          label: { en: "Cal.com — booking", hi: "Cal.com — बुकिंग", ja: "Cal.com — 予約", ko: "Cal.com — 예약" },
          value: { en: `United States. Receives name, email address, and the chosen time when you book a session.`, hi: `संयुक्त राज्य अमेरिका। सत्र बुक करने पर नाम, ईमेल पता तथा चयनित समय प्राप्त करता है।`, ja: `米国。セッションをご予約いただく際に、お名前・メールアドレス・ご希望日時を取り扱います。`, ko: `미국. 세션을 예약하실 때 성함·이메일 주소·희망 일시를 취급합니다.` },
        },
        {
          label: { en: "Resend — inquiry email", hi: "Resend — पूछताछ ईमेल", ja: "Resend — お問い合わせメール送信", ko: "Resend — 문의 메일 발송" },
          value: { en: `United States. Transmits the contents of the inquiry form to us.`, hi: `संयुक्त राज्य अमेरिका। पूछताछ प्रपत्र की विषयवस्तु हम तक पहुँचाता है।`, ja: `米国。お問い合わせフォームの内容を当方へ送信します。`, ko: `미국. 문의 양식의 내용을 당사로 전송합니다.` },
        },
        {
          label: { en: "Google Analytics", hi: "Google Analytics", ja: "Google アナリティクス", ko: "Google 애널리틱스" },
          value: { en: `United States. Receives usage events with the IP address truncated. Google’s own opt-out browser add-on can be used to prevent this.`, hi: `संयुक्त राज्य अमेरिका। IP पता संक्षिप्त कर उपयोग-घटनाएँ प्राप्त करता है। इसे रोकने हेतु Google का अपना ऑप्ट-आउट ब्राउज़र ऐड-ऑन प्रयोग किया जा सकता है।`, ja: `米国。IPアドレスを短縮したうえで利用状況を取得します。Googleが提供するオプトアウト アドオンにより送信を停止できます。`, ko: `미국. IP 주소를 단축한 후 이용 상황을 수집합니다. Google이 제공하는 옵트아웃 부가 기능으로 전송을 중지할 수 있습니다.` },
        },
      ],
    },
    {
      id: "external-transmission",
      heading: {
        en: "6. Information sent from your browser to others",
        hi: "6. आपके ब्राउज़र से अन्य को भेजी जाने वाली जानकारी",
        ja: "6. 外部送信について",
        ko: "6. 외부 전송에 대하여",
      },
      body: [
        {
          en: "When you view this site, your browser sends certain information directly to the analytics providers named above — the page address, referring page, browser type, and a truncated IP address. This is disclosed here as required of operators in Japan under the external transmission rules of the Telecommunications Business Act.",
          hi: "जब आप इस साइट को देखते हैं, तो आपका ब्राउज़र ऊपर नामित विश्लेषण प्रदाताओं को कुछ जानकारी सीधे भेजता है — पृष्ठ का पता, संदर्भक पृष्ठ, ब्राउज़र प्रकार तथा संक्षिप्त IP पता। यह यहाँ जापान में दूरसंचार व्यवसाय अधिनियम के बाह्य-प्रेषण नियमों के अंतर्गत अपेक्षित रूप से प्रकट किया गया है।",
          ja: "本サイトをご覧いただく際、お客様のブラウザから上記のアクセス解析事業者に対し、閲覧ページのURL、参照元ページ、ブラウザの種別、および短縮されたIPアドレスが直接送信されます。電気通信事業法の外部送信規律に基づき、ここに明示します。",
          ko: "본 사이트를 열람하실 때 고객의 브라우저에서 위의 분석 사업자에게 열람 페이지 URL, 참조 페이지, 브라우저 종류, 단축된 IP 주소가 직접 전송됩니다. 전기통신사업법의 외부 전송 규율에 따라 여기에 명시합니다.",
        },
        {
          en: "You can prevent most of this by blocking the relevant scripts in your browser or an extension. The site remains fully usable if you do.",
          hi: "आप अपने ब्राउज़र अथवा किसी एक्सटेंशन में संबंधित स्क्रिप्ट अवरुद्ध कर इसका अधिकांश भाग रोक सकते हैं। ऐसा करने पर भी साइट पूर्णतः उपयोग-योग्य बनी रहती है।",
          ja: "ブラウザの設定や拡張機能により該当するスクリプトをブロックすれば、その大半を停止できます。ブロックされた場合でも、本サイトは問題なくご利用いただけます。",
          ko: "브라우저 설정이나 확장 기능으로 해당 스크립트를 차단하면 대부분을 중지할 수 있습니다. 차단하시더라도 본 사이트는 문제없이 이용하실 수 있습니다.",
        },
      ],
    },
    {
      id: "cookies",
      heading: {
        en: "7. Cookies",
        hi: "7. कुकीज़",
        ja: "7. Cookieについて",
        ko: "7. 쿠키에 대하여",
      },
      rows: [
        {
          label: { en: "Session cookies", hi: "सत्र कुकीज़", ja: "ログイン用Cookie", ko: "로그인용 쿠키" },
          value: { en: "Set by Clerk to keep you signed in. Removing them signs you out.", hi: "Clerk द्वारा आपको साइन-इन बनाए रखने हेतु सेट। हटाने पर आप साइन-आउट हो जाते हैं।", ja: "ログイン状態を維持するためにClerkが設定します。削除するとログアウトされます。", ko: "로그인 상태를 유지하기 위해 Clerk가 설정합니다. 삭제하면 로그아웃됩니다." },
        },
        {
          label: { en: "Analytics identifier", hi: "विश्लेषण पहचानकर्ता", ja: "解析用識別子", ko: "분석용 식별자" },
          value: { en: "A randomly generated value stored for up to one year, used to tell repeat visits apart. It contains no name and is not linked to you unless you sign in.", hi: "एक यादृच्छिक मान, अधिकतम एक वर्ष तक संग्रहीत, जो पुनरागमन को अलग पहचानने हेतु प्रयुक्त होता है। इसमें कोई नाम नहीं होता और साइन-इन किए बिना यह आपसे नहीं जुड़ता।", ja: "再訪を区別するために保存する、無作為に生成した値です。保存期間は最長1年で、氏名は含まれず、ログインされない限りお客様と結び付けられることはありません。", ko: "재방문을 구별하기 위해 저장하는 무작위 생성 값입니다. 보존 기간은 최장 1년이며, 성명은 포함되지 않고 로그인하지 않으시는 한 고객과 연결되지 않습니다." },
        },
        {
          label: { en: "Preference cookies", hi: "वरीयता कुकीज़", ja: "設定保存用Cookie", ko: "설정 저장용 쿠키" },
          value: { en: "Remember your chosen language so the site opens in it next time.", hi: "आपकी चयनित भाषा स्मरण रखती हैं ताकि अगली बार साइट उसी में खुले।", ja: "次回も同じ言語で表示されるよう、選択された言語を保存します。", ko: "다음에도 같은 언어로 표시되도록 선택하신 언어를 저장합니다." },
        },
      ],
    },
    {
      id: "retention",
      heading: {
        en: "8. How long it is kept",
        hi: "8. कितने समय रखा जाता है",
        ja: "8. 保有期間",
        ko: "8. 보유 기간",
      },
      bullets: [
        {
          en: "Saved charts and account records: until you delete them or close your account. Deleting an account deletes the charts attached to it.",
          hi: "सहेजी गई कुंडलियाँ एवं खाता अभिलेख: जब तक आप उन्हें न हटाएँ या खाता बंद न करें। खाता हटाने पर उससे जुड़ी कुंडलियाँ भी हट जाती हैं।",
          ja: "保存されたチャートおよびアカウント情報：お客様が削除されるか、アカウントを閉鎖されるまで。アカウントを削除すると、紐づくチャートも削除されます。",
          ko: "저장된 차트 및 계정 정보: 고객이 삭제하시거나 계정을 폐쇄하실 때까지. 계정을 삭제하면 연결된 차트도 삭제됩니다.",
        },
        {
          en: "Computed chart cache: a temporary copy held to avoid recalculating the same chart, pruned automatically.",
          hi: "गणित कुंडली कैश: वही कुंडली पुनः गणना से बचने हेतु रखी गई अस्थायी प्रति, जो स्वतः हटा दी जाती है।",
          ja: "チャートの計算キャッシュ：同じチャートの再計算を避けるために保持する一時的な複製で、自動的に削除されます。",
          ko: "차트 계산 캐시: 동일한 차트의 재계산을 피하기 위해 보관하는 일시적 사본으로, 자동으로 삭제됩니다.",
        },
        {
          en: `Inquiry and booking records: kept while the matter is open and afterwards for as long as tax and accounting law requires — in Japan, generally seven years for records that evidence a transaction.`,
          hi: `पूछताछ एवं बुकिंग अभिलेख: विषय के लंबित रहने तक तथा उसके बाद उतने समय तक जितना कर एवं लेखा विधि अपेक्षित करे — जापान में, लेनदेन प्रमाणित करने वाले अभिलेखों हेतु सामान्यतः सात वर्ष।`,
          ja: `お問い合わせ・ご予約の記録：案件が継続している間、およびその後、税務・会計上必要とされる期間（日本では取引を証する記録について原則7年）。`,
          ko: `문의·예약 기록: 건이 진행 중인 동안, 그리고 그 이후 세무·회계상 필요한 기간(일본에서는 거래를 증명하는 기록에 대해 원칙적으로 7년).`,
        },
        {
          en: "Usage information: retained in aggregate form for analysis; individual event records are not kept longer than needed for that purpose.",
          hi: "उपयोग संबंधी जानकारी: विश्लेषण हेतु समग्र रूप में रखी जाती है; व्यक्तिगत घटना-अभिलेख उस प्रयोजन हेतु आवश्यक अवधि से अधिक नहीं रखे जाते।",
          ja: "利用状況に関する情報：分析のため統計的な形で保持します。個々のイベント記録は、その目的に必要な期間を超えて保有しません。",
          ko: "이용 상황 정보: 분석을 위해 통계적 형태로 보유합니다. 개별 이벤트 기록은 그 목적에 필요한 기간을 넘겨 보유하지 않습니다.",
        },
      ],
    },
    {
      id: "rights",
      heading: {
        en: "9. Your rights",
        hi: "9. आपके अधिकार",
        ja: "9. 開示等のご請求",
        ko: "9. 공개 등의 청구",
      },
      body: [
        {
          en: "You may ask what information about you is held, ask for it to be corrected if it is wrong, ask for its use to be stopped, ask for it to be deleted, and ask for a copy in a readable form. Charts you saved yourself can also be deleted directly from your library at any time, without asking us.",
          hi: "आप पूछ सकते हैं कि आपके बारे में कौन-सी जानकारी रखी गई है, ग़लत होने पर उसका सुधार माँग सकते हैं, उसका उपयोग रोकने को कह सकते हैं, उसे हटाने का अनुरोध कर सकते हैं, तथा पठनीय रूप में प्रति माँग सकते हैं। आपकी स्वयं सहेजी गई कुंडलियाँ आप बिना हमसे पूछे, कभी भी अपने संग्रह से सीधे हटा सकते हैं।",
          ja: "当方が保有するお客様の個人情報について、開示、内容の訂正、利用の停止、削除、および読み取り可能な形式での提供をご請求いただけます。なお、ご自身で保存されたチャートは、当方にご連絡いただかなくても、いつでもライブラリから直接削除できます。",
          ko: "당사가 보유한 고객의 개인정보에 대해 공개, 내용 정정, 이용 정지, 삭제, 그리고 읽을 수 있는 형식으로의 제공을 청구하실 수 있습니다. 또한 직접 저장하신 차트는 당사에 연락하지 않으셔도 언제든지 라이브러리에서 직접 삭제하실 수 있습니다.",
        },
        {
          en: `To make a request, write to ${TBD}. We will verify that the request comes from you before acting on it, and will respond without undue delay. There is no charge for a reasonable request.`,
          hi: `अनुरोध हेतु ${TBD} पर लिखें। कार्रवाई से पूर्व हम सत्यापित करेंगे कि अनुरोध आपकी ओर से है, तथा अनुचित विलंब के बिना उत्तर देंगे। उचित अनुरोध हेतु कोई शुल्क नहीं है।`,
          ja: `ご請求は${TBD}までお願いいたします。ご本人からのご請求であることを確認したうえで、遅滞なく対応いたします。合理的な範囲のご請求について手数料はいただきません。`,
          ko: `청구는 ${TBD}로 부탁드립니다. 본인의 청구임을 확인한 후 지체 없이 대응하겠습니다. 합리적인 범위의 청구에 대해 수수료는 받지 않습니다.`,
        },
        {
          en: "If you are not satisfied with how a request was handled, you may complain to the Personal Information Protection Commission of Japan, or to the supervisory authority in your own country.",
          hi: "यदि आप अनुरोध के निपटान से संतुष्ट न हों, तो आप जापान के व्यक्तिगत सूचना संरक्षण आयोग, अथवा अपने देश के पर्यवेक्षी प्राधिकरण से शिकायत कर सकते हैं।",
          ja: "ご請求への対応にご納得いただけない場合は、個人情報保護委員会、またはお客様のお住まいの国の監督機関にお申し出いただけます。",
          ko: "청구 대응에 만족하지 못하시는 경우 일본 개인정보보호위원회 또는 거주하시는 국가의 감독 기관에 신고하실 수 있습니다.",
        },
      ],
    },
    {
      id: "regions",
      heading: {
        en: "10. Visitors outside Japan",
        hi: "10. जापान के बाहर के आगंतुक",
        ja: "10. 日本国外からご利用の方へ",
        ko: "10. 일본 국외에서 이용하시는 분께",
      },
      body: [
        {
          en: "This site is operated from Japan and directed principally at visitors in Japan. If you use it from elsewhere, your information is handled in the countries named in section 5.",
          hi: "यह साइट जापान से संचालित होती है और मुख्यतः जापान के आगंतुकों हेतु है। यदि आप इसे अन्यत्र से उपयोग करते हैं, तो आपकी जानकारी खंड 5 में नामित देशों में संभाली जाती है।",
          ja: "本サイトは日本から運営し、主に日本国内の方を対象としています。日本国外からご利用の場合、お客様の情報は第5項に記載した国において取り扱われます。",
          ko: "본 사이트는 일본에서 운영하며 주로 일본 국내의 분들을 대상으로 합니다. 일본 국외에서 이용하시는 경우 고객의 정보는 제5항에 기재한 국가에서 취급됩니다.",
        },
        {
          en: "If you are in the European Economic Area or the United Kingdom, we process your information to perform a contract with you, to comply with law, or on the basis of our legitimate interest in operating and improving the site — and, for analytics, on the basis of your consent where consent is required. You have the rights of access, rectification, erasure, restriction, portability, and objection, and may withdraw consent at any time.",
          hi: "यदि आप यूरोपीय आर्थिक क्षेत्र अथवा यूनाइटेड किंगडम में हैं, तो हम आपकी जानकारी आपके साथ अनुबंध निष्पादित करने, विधि का पालन करने, अथवा साइट के संचालन एवं सुधार में अपने वैध हित के आधार पर संसाधित करते हैं — तथा विश्लेषण हेतु, जहाँ सहमति अपेक्षित हो वहाँ आपकी सहमति के आधार पर। आपको पहुँच, सुधार, विलोपन, प्रतिबंध, सुवाह्यता एवं आपत्ति के अधिकार प्राप्त हैं, और आप सहमति कभी भी वापस ले सकते हैं।",
          ja: "欧州経済領域または英国にお住まいの方については、お客様との契約の履行、法令の遵守、または本サイトの運営・改善に関する正当な利益を根拠として個人データを取り扱います。アクセス解析については、同意が必要とされる場合には同意を根拠とします。お客様は、アクセス、訂正、消去、制限、ポータビリティおよび異議申立ての権利を有し、同意はいつでも撤回できます。",
          ko: "유럽경제지역 또는 영국에 거주하시는 분에 대해서는 고객과의 계약 이행, 법령 준수, 또는 본 사이트의 운영·개선에 관한 정당한 이익을 근거로 개인 데이터를 취급합니다. 분석에 대해서는 동의가 필요한 경우 동의를 근거로 합니다. 고객은 접근, 정정, 삭제, 제한, 이동성 및 이의 제기의 권리를 가지며 동의는 언제든지 철회할 수 있습니다.",
        },
        {
          en: "If you are in Korea or India, the rights described in section 9 are available to you in the same way, and you may also exercise any additional rights your own law provides by writing to the same address.",
          hi: "यदि आप कोरिया अथवा भारत में हैं, तो खंड 9 में वर्णित अधिकार आपको उसी प्रकार उपलब्ध हैं, तथा आप उसी पते पर लिखकर अपनी विधि द्वारा प्रदत्त किसी अतिरिक्त अधिकार का प्रयोग भी कर सकते हैं।",
          ja: "韓国またはインドにお住まいの方についても、第9項に記載した権利を同様にご利用いただけます。各国の法令が定める追加の権利についても、同じ連絡先へのご連絡により行使いただけます。",
          ko: "한국 또는 인도에 거주하시는 분도 제9항에 기재한 권리를 동일하게 이용하실 수 있습니다. 각국 법령이 정하는 추가 권리에 대해서도 동일한 연락처로 연락하시어 행사하실 수 있습니다.",
        },
      ],
    },
    {
      id: "security",
      heading: {
        en: "11. Security and changes",
        hi: "11. सुरक्षा एवं परिवर्तन",
        ja: "11. 安全管理措置および本ポリシーの変更",
        ko: "11. 안전 관리 조치 및 본 방침의 변경",
      },
      body: [
        {
          en: "Information is transmitted over encrypted connections and access to it is limited to those who need it to do the work. No system is perfectly secure, and we do not claim otherwise; if a breach occurs that is likely to harm your rights, we will notify you and the relevant authority as the law requires.",
          hi: "जानकारी एन्क्रिप्टेड संपर्कों पर प्रेषित होती है और उस तक पहुँच केवल उन्हीं तक सीमित है जिन्हें कार्य हेतु आवश्यक है। कोई भी प्रणाली पूर्णतः सुरक्षित नहीं होती, और हम इसके विपरीत दावा नहीं करते; यदि ऐसा उल्लंघन हो जो आपके अधिकारों को हानि पहुँचा सकता हो, तो हम विधि के अनुसार आपको एवं संबंधित प्राधिकरण को सूचित करेंगे।",
          ja: "情報は暗号化された通信経路で送信し、アクセスできる者は業務上必要な範囲に限定しています。完全に安全なシステムは存在せず、当方もそのように称することはありません。お客様の権利を害するおそれのある漏えい等が生じた場合は、法令に従い、お客様および所管の機関に報告いたします。",
          ko: "정보는 암호화된 통신 경로로 전송하며, 접근할 수 있는 사람은 업무상 필요한 범위로 한정합니다. 완전히 안전한 시스템은 존재하지 않으며 당사도 그렇게 주장하지 않습니다. 고객의 권리를 해칠 우려가 있는 유출 등이 발생한 경우 법령에 따라 고객 및 관할 기관에 보고하겠습니다.",
        },
        {
          en: "This policy may be updated. The date at the top of this page shows when it last changed, and material changes will be posted here before they take effect.",
          hi: "यह नीति अद्यतन की जा सकती है। इस पृष्ठ के शीर्ष की तिथि दर्शाती है कि यह अंतिम बार कब बदली, तथा सारवान् परिवर्तन प्रभावी होने से पूर्व यहाँ प्रकाशित किए जाएँगे।",
          ja: "本ポリシーは改定することがあります。最終改定日は本ページ上部に表示しており、重要な変更については効力発生前に本ページに掲示します。",
          ko: "본 방침은 개정될 수 있습니다. 최종 개정일은 본 페이지 상단에 표시하며, 중요한 변경은 효력 발생 전에 본 페이지에 게시합니다.",
        },
      ],
    },
  ],
};

export const LEGAL_DOCUMENTS: LegalDocument[] = [tokushoho, privacy, terms, refunds];

export function findLegalDocument(slug: string): LegalDocument | undefined {
  return LEGAL_DOCUMENTS.find((document) => document.slug === slug);
}
