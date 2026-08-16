import type { KutaId } from "@/lib/jyotish/ashtakoot";
import type { AppLanguage } from "@/lib/i18n/language";

interface CompatibilityCopy {
  needTwo: string;
  needOneMore: string;
  addPerson: string;
  personA: string;
  personB: string;
  choose: string;
  compute: string;
  computing: string;
  samePerson: string;
  error: string;
  totalLabel: string;
  orderNote: string;
  doshaNote: string;
  footnote: string;
  kutaNames: Record<KutaId, string>;
  kutaBlurbs: Record<KutaId, string>;
}

export const compatibilityCopy: Record<AppLanguage, CompatibilityCopy> = {
  ja: {
    needTwo:
      "相性を算出するには、お二人分の出生データが必要です。まずご自身の情報を下のフォームから登録し、続けてお相手の情報も追加してください。一度登録すれば、当サイトの他のツールでも再入力は不要です。",
    needOneMore:
      "お相手の出生データを追加してください。下のフォームで生年月日・出生時刻・出生地を入力すると、相性の算出ができるようになります。",
    addPerson: "出生データを追加する",
    personA: "お一人目",
    personB: "お二人目",
    choose: "選択してください",
    compute: "相性を算出する",
    computing: "計算中…",
    samePerson: "異なるお二人を選択してください。",
    error: "計算に失敗しました。しばらくしてから再度お試しください。",
    totalLabel: "アシュタクータ合計点",
    orderNote:
      "古典では八項目のうちヴァルナとガナの二つが方向性を持つため、お一人目とお二人目を入れ替えると合計が最大二点変わることがあります。伝統的にはお一人目が女性、お二人目が男性とされてきました。",
    doshaNote:
      "バクートまたはナーディが零点です。古典ではこの二つを特に重視しますが、他の配置によって相殺される規定も複数あり、この結果のみで判断することは想定されていません。",
    footnote:
      "この点数は、お二人の月の位置のみから機械的に算出したものです。ラグナ、七室とその支配星、金星・火星の状態、現在のダシャー期間は含まれていません。関係の判断材料としては、二つのチャート全体を読み合わせる必要があります。",
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
    needTwo:
      "Two sets of birth details are needed. Enter your own below, then add your partner's. Once entered, every other tool on this site will use them without asking again.",
    needOneMore:
      "Add your partner's birth details below — date, time and place — and the score becomes available.",
    addPerson: "Add birth details",
    personA: "First person",
    personB: "Second person",
    choose: "Select",
    compute: "Calculate compatibility",
    computing: "Calculating…",
    samePerson: "Please choose two different people.",
    error: "The calculation failed. Please try again shortly.",
    totalLabel: "Ashtakoot total",
    orderNote:
      "Two of the eight criteria — Varna and Gana — are directional in the classical rules, so swapping the two people can change the total by up to two points. Traditionally the first position is the bride and the second the groom.",
    doshaNote:
      "Bhakoot or Nadi scored zero. The tradition weighs these two most heavily, but classical rules cancel them in several configurations, and this result alone was never meant to decide anything.",
    footnote:
      "This score is computed mechanically from two Moon positions. It does not include the ascendant, the seventh house and its lord, the condition of Venus and Mars, or the dasha period either person is currently in.",
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
    needTwo:
      "अनुकूलता के लिए दोनों के जन्म-विवरण चाहिए। पहले अपना विवरण नीचे दर्ज करें, फिर साथी का जोड़ें।",
    needOneMore:
      "अपने साथी का जन्म-विवरण नीचे जोड़ें — तिथि, समय और स्थान — तब अंक उपलब्ध होंगे।",
    addPerson: "जन्म-विवरण जोड़ें",
    personA: "पहला व्यक्ति",
    personB: "दूसरा व्यक्ति",
    choose: "चुनें",
    compute: "अनुकूलता निकालें",
    computing: "गणना हो रही है…",
    samePerson: "कृपया दो भिन्न व्यक्ति चुनें।",
    error: "गणना विफल रही। कृपया कुछ देर बाद प्रयास करें।",
    totalLabel: "अष्टकूट कुल अंक",
    orderNote:
      "आठ में से दो कूट — वर्ण और गण — शास्त्रीय रूप से दिशात्मक हैं, इसलिए दोनों को बदलने पर कुल दो अंक तक बदल सकता है। परंपरा में पहला स्थान वधू का और दूसरा वर का होता है।",
    doshaNote:
      "भकूट या नाड़ी शून्य है। परंपरा इन्हें सर्वाधिक भार देती है, पर कई विन्यासों में शास्त्रीय नियम इन्हें निरस्त करते हैं।",
    footnote:
      "यह अंक केवल दो चंद्र स्थितियों से यांत्रिक रूप से निकला है। इसमें लग्न, सप्तम भाव, शुक्र-मंगल की स्थिति या वर्तमान दशा शामिल नहीं है।",
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
    needTwo:
      "궁합을 산출하려면 두 사람의 출생 정보가 필요합니다. 먼저 본인 정보를 아래 양식에 등록하고, 이어서 상대방 정보를 추가해 주세요.",
    needOneMore:
      "상대방의 출생 정보를 추가해 주세요. 생년월일, 출생 시각, 출생지를 입력하면 궁합을 산출할 수 있습니다.",
    addPerson: "출생 정보 추가",
    personA: "첫 번째 사람",
    personB: "두 번째 사람",
    choose: "선택하세요",
    compute: "궁합 산출하기",
    computing: "계산 중…",
    samePerson: "서로 다른 두 사람을 선택해 주세요.",
    error: "계산에 실패했습니다. 잠시 후 다시 시도해 주세요.",
    totalLabel: "아슈타쿠타 총점",
    orderNote:
      "여덟 항목 중 바르나와 가나는 고전 규칙상 방향성을 가지므로, 두 사람의 순서를 바꾸면 총점이 최대 2점까지 달라질 수 있습니다. 전통적으로 첫 번째가 신부, 두 번째가 신랑입니다.",
    doshaNote:
      "바쿠타 또는 나디가 0점입니다. 고전은 이 둘을 특히 중시하지만, 다른 배치로 상쇄되는 규정도 여럿 있어 이 결과만으로 판단하도록 의도되지 않았습니다.",
    footnote:
      "이 점수는 두 사람의 달 위치만으로 기계적으로 산출된 것입니다. 라그나, 7궁과 그 지배성, 금성·화성의 상태, 현재의 다샤 시기는 포함되지 않습니다.",
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
