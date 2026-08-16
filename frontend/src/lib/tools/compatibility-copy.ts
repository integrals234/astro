import type { KutaId } from "@/lib/jyotish/ashtakoot";
import type { AppLanguage } from "@/lib/i18n/language";

interface CompatibilityCopy {
  pickExisting: string;
  addNew: string;
  bride: string;
  groom: string;
  choose: string;
  compute: string;
  computing: string;
  samePerson: string;
  error: string;
  totalLabel: string;
  orderNote: string;
  doshaNote: string;
  footnote: string;
  managePeople: (count: number) => string;
  deletePerson: (label: string) => string;
  addAs: (label: string) => string;
  added: string;
  kutaNames: Record<KutaId, string>;
  kutaBlurbs: Record<KutaId, string>;
}

export const compatibilityCopy: Record<AppLanguage, CompatibilityCopy> = {
  ja: {
    pickExisting: "登録済みの方から選ぶ",
    addNew: "新しく追加する",
    bride: "新婦（お一人目）",
    groom: "新郎（お二人目）",
    choose: "選択してください",
    compute: "相性を算出する",
    computing: "計算中…",
    samePerson: "異なるお二人を選択してください。",
    error: "処理に失敗しました。しばらくしてから再度お試しください。",
    totalLabel: "アシュタクータ合計点",
    orderNote:
      "古典では八項目のうちヴァルナとガナの二つが方向性を持つため、新婦と新郎を入れ替えると合計が最大二点変わることがあります。伝統的な区分に従い、一人目を新婦、二人目を新郎としています。",
    doshaNote:
      "バクートまたはナーディが零点です。古典ではこの二つを特に重視しますが、他の配置によって相殺される規定も複数あり、この結果のみで判断することは想定されていません。",
    footnote:
      "この点数は、お二人の月の位置のみから機械的に算出したものです。ラグナ、七室とその支配星、金星・火星の状態、現在のダシャー期間は含まれていません。関係の判断材料としては、二つのチャート全体を読み合わせる必要があります。",
    managePeople: (n) => `登録済みの人（${n}件）を管理`,
    deletePerson: (l) => `${l} を削除`,
    addAs: (l) => `${l}として追加`,
    added: "追加しました",
    kutaNames: {
      varna: "ヴァルナ（気質の階層）",
      vashya: "ヴァシャ（主導権）",
      tara: "ターラ（月宿の距離）",
      yoni: "ヨーニ（本能的相性）",
      grahaMaitri: "グラハ・マイトリ（支配星の友好）",
      gana: "ガナ（気質分類）",
      bhakoot: "バクート（月星座の関係）",
      nadi: "ナーディ（体質）",
    },
    kutaBlurbs: {
      varna: "価値観の方向性",
      vashya: "関係の主導権",
      tara: "巡り合わせの吉凶",
      yoni: "身体的・本能的な相性",
      grahaMaitri: "精神的な理解のしやすさ",
      gana: "気質の噛み合い",
      bhakoot: "生活全体の調和",
      nadi: "体質と子孫に関する古典的指標",
    },
  },
  en: {
    pickExisting: "Choose from people you've already added",
    addNew: "Add someone new",
    bride: "Bride (first position)",
    groom: "Groom (second position)",
    choose: "Select",
    compute: "Calculate compatibility",
    computing: "Calculating…",
    samePerson: "Please choose two different people.",
    error: "That failed. Please try again shortly.",
    totalLabel: "Ashtakoot total",
    orderNote:
      "Two of the eight criteria — Varna and Gana — are directional in the classical rules, so swapping bride and groom can change the total by up to two points. The first position is traditionally the bride and the second the groom, which is how the two slots above are labelled.",
    doshaNote:
      "Bhakoot or Nadi scored zero. The tradition weighs these two most heavily, but classical rules cancel them in several configurations, and this result alone was never meant to decide anything.",
    footnote:
      "This score is computed mechanically from two Moon positions. It does not include the ascendant, the seventh house and its lord, the condition of Venus and Mars, or the dasha period either person is currently in.",
    managePeople: (n) => `Manage saved people (${n})`,
    deletePerson: (l) => `Delete ${l}`,
    addAs: (l) => `Add as ${l.toLowerCase()}`,
    added: "Added",
    kutaNames: {
      varna: "Varna (temperament tier)",
      vashya: "Vashya (initiative)",
      tara: "Tara (mansion distance)",
      yoni: "Yoni (instinctive fit)",
      grahaMaitri: "Graha Maitri (lord friendship)",
      gana: "Gana (temperament class)",
      bhakoot: "Bhakoot (Moon sign relation)",
      nadi: "Nadi (constitution)",
    },
    kutaBlurbs: {
      varna: "Direction of values",
      vashya: "Where initiative sits",
      tara: "Auspiciousness of the pairing",
      yoni: "Physical and instinctive fit",
      grahaMaitri: "Ease of mutual understanding",
      gana: "How temperaments mesh",
      bhakoot: "Harmony across daily life",
      nadi: "Classical constitutional indicator",
    },
  },
  hi: {
    pickExisting: "पहले से जोड़े गए व्यक्तियों में से चुनें",
    addNew: "नया व्यक्ति जोड़ें",
    bride: "वधू (पहला स्थान)",
    groom: "वर (दूसरा स्थान)",
    choose: "चुनें",
    compute: "अनुकूलता निकालें",
    computing: "गणना हो रही है…",
    samePerson: "कृपया दो भिन्न व्यक्ति चुनें।",
    error: "यह विफल रहा। कृपया कुछ देर बाद प्रयास करें।",
    totalLabel: "अष्टकूट कुल अंक",
    orderNote:
      "आठ में से दो कूट — वर्ण और गण — शास्त्रीय रूप से दिशात्मक हैं, इसलिए वधू और वर को बदलने पर कुल दो अंक तक बदल सकता है। परंपरा में पहला स्थान वधू का और दूसरा वर का होता है, जैसा ऊपर दोनों स्थान अंकित हैं।",
    doshaNote:
      "भकूट या नाड़ी शून्य है। परंपरा इन्हें सर्वाधिक भार देती है, पर कई विन्यासों में शास्त्रीय नियम इन्हें निरस्त करते हैं।",
    footnote:
      "यह अंक केवल दो चंद्र स्थितियों से यांत्रिक रूप से निकला है। इसमें लग्न, सप्तम भाव, शुक्र-मंगल की स्थिति या वर्तमान दशा शामिल नहीं है।",
    managePeople: (n) => `सहेजे गए व्यक्ति प्रबंधित करें (${n})`,
    deletePerson: (l) => `${l} हटाएँ`,
    addAs: (l) => `${l} के रूप में जोड़ें`,
    added: "जोड़ा गया",
    kutaNames: {
      varna: "वर्ण",
      vashya: "वश्य",
      tara: "तारा",
      yoni: "योनि",
      grahaMaitri: "ग्रह मैत्री",
      gana: "गण",
      bhakoot: "भकूट",
      nadi: "नाड़ी",
    },
    kutaBlurbs: {
      varna: "मूल्यों की दिशा",
      vashya: "पहल का संतुलन",
      tara: "योग की शुभता",
      yoni: "सहज अनुकूलता",
      grahaMaitri: "परस्पर समझ",
      gana: "स्वभाव का मेल",
      bhakoot: "दैनिक जीवन का सामंजस्य",
      nadi: "शास्त्रीय शारीरिक संकेतक",
    },
  },
  ko: {
    pickExisting: "이미 추가한 사람 중에서 선택",
    addNew: "새로 추가하기",
    bride: "신부 (첫 번째 위치)",
    groom: "신랑 (두 번째 위치)",
    choose: "선택하세요",
    compute: "궁합 산출하기",
    computing: "계산 중…",
    samePerson: "서로 다른 두 사람을 선택해 주세요.",
    error: "처리에 실패했습니다. 잠시 후 다시 시도해 주세요.",
    totalLabel: "아슈타쿠타 총점",
    orderNote:
      "여덟 항목 중 바르나와 가나는 고전 규칙상 방향성을 가지므로, 신부와 신랑을 바꾸면 총점이 최대 2점까지 달라질 수 있습니다. 전통적으로 첫 번째가 신부, 두 번째가 신랑이며 위의 두 칸도 그렇게 표시되어 있습니다.",
    doshaNote:
      "바쿠타 또는 나디가 0점입니다. 고전은 이 둘을 특히 중시하지만, 다른 배치로 상쇄되는 규정도 여럿 있어 이 결과만으로 판단하도록 의도되지 않았습니다.",
    footnote:
      "이 점수는 두 사람의 달 위치만으로 기계적으로 산출된 것입니다. 라그나, 7궁과 그 지배성, 금성·화성의 상태, 현재의 다샤 시기는 포함되지 않습니다.",
    managePeople: (n) => `저장된 사람 관리 (${n}명)`,
    deletePerson: (l) => `${l} 삭제`,
    addAs: (l) => `${l}(으)로 추가`,
    added: "추가됨",
    kutaNames: {
      varna: "바르나(기질 층위)",
      vashya: "바샤(주도권)",
      tara: "타라(수의 거리)",
      yoni: "요니(본능적 궁합)",
      grahaMaitri: "그라하 마이트리(지배성 친화)",
      gana: "가나(기질 분류)",
      bhakoot: "바쿠타(달 별자리 관계)",
      nadi: "나디(체질)",
    },
    kutaBlurbs: {
      varna: "가치관의 방향",
      vashya: "관계의 주도권",
      tara: "인연의 길흉",
      yoni: "신체적·본능적 궁합",
      grahaMaitri: "상호 이해의 용이함",
      gana: "기질의 맞물림",
      bhakoot: "생활 전반의 조화",
      nadi: "체질에 관한 고전적 지표",
    },
  },
};
