import type { BilingualText } from "@/lib/education/types";
import type { ChartSectionId } from "@/lib/chart-sections";
import type { ToolHandoffId } from "@/lib/tools/handoff-copy";

/**
 * Tool landing pages (Phase 3.6).
 *
 * Free tools earn links and rank for high-intent queries, and the chart
 * generator was the most underused asset on the site — one URL for everything.
 *
 * These are not doorway pages: each targets a distinct real query, carries its
 * own copy and FAQ, and renders only the chart section(s) that answer the
 * thing a visitor searched for, so the page never makes them dig through
 * eight tabs to find the one they came for.
 *
 * Script variation matters here (Phase 3.10). `インド占星術`, `ヴェーダ占星術`
 * and `ジョーティッシュ` are three different searches with different volumes and
 * intents, so each page leads with a different dominant notation rather than
 * repeating one.
 */
export interface ToolFaq {
  question: BilingualText;
  answer: BilingualText;
}

export interface ToolLanding {
  slug: string;
  title: BilingualText;
  description: BilingualText;
  lead: BilingualText;
  faqs: ToolFaq[];
  /**
   * A purpose-built result panel rendered above the chart sections.
   *
   * Tools that answer one specific question ("which mansion am I?") get a
   * dedicated component reading the shared birth profile, so the answer
   * appears without re-entering anything. `sukuyo` also sets `sections` to
   * show the underlying chart below its own result. `numerology` needs no
   * computed chart at all — only a birth date — and `birthTimeSensitivity`
   * needs a time *window*, not the one saved birth time — so both bring
   * their own entry form rather than using `ChartDataProvider`/
   * `ChartSectionBody` like the rest of this list. `annualForecast` and
   * `panchang` talk to backend endpoints (Phase 12) — both panels still
   * show an "unavailable" state on a 502/503 rather than failing silently,
   * since the free-tier Render service can cold-start or blip.
   */
  resultPanel?:
    | "sukuyo"
    | "compatibility"
    | "numerology"
    | "birthTimeSensitivity"
    | "annualForecast"
    | "panchang"
    | "babyNames";
  /**
   * Chart section(s) this tool renders inline, stacked in this order, via
   * `ChartSectionBody` — the same component the workspace uses, so a tool
   * page never pulls in the full multi-tab workspace just to show one part
   * of it.
   */
  sections?: readonly ChartSectionId[];
  /** Which `BookingHandoff` copy the sections close with. */
  chartHandoff?: ToolHandoffId;
  /**
   * One line on what this is actually used for — shown on the homepage grid,
   * where `description` alone reads as a feature list ("draws your kundli")
   * rather than a reason to click ("check before scheduling anything
   * important").
   */
  useCase: BilingualText;
}

export const TOOL_LANDINGS: ToolLanding[] = [
  {
    slug: "birth-chart",
    sections: ["lagna", "planets"],
    chartHandoff: "generic",
    title: {
      en: "Free Vedic birth chart (kundli) calculator",
      hi: "निःशुल्क वैदिक जन्म कुंडली कैलकुलेटर",
      ja: "無料インド占星術 出生図（クンダリ）作成",
      ko: "무료 베다 출생 차트(쿤달리) 계산기",
    },
    description: {
      en: "Draw your kundli in North or South Indian format, with planetary degrees, nakshatras, and house positions.",
      hi: "उत्तर या दक्षिण भारतीय प्रारूप में अपनी कुंडली बनाएँ — ग्रह अंश, नक्षत्र और भाव स्थिति सहित।",
      ja: "北インド式・南インド式の出生図（ネイタルチャート）を作成。惑星の度数、ナクシャトラ、ハウス配置まで、サイデリアル（恒星）方式で正確に表示します。",
      ko: "북인도식 또는 남인도식으로 쿤달리를 작성하고, 행성 도수·낙샤트라·하우스 위치를 확인하세요.",
    },
    useCase: {
      en: "Your reference chart — pull it up any time you want to check a placement before a conversation or a decision.",
      hi: "आपकी संदर्भ कुंडली — किसी बातचीत या निर्णय से पहले कोई स्थिति जाँचने के लिए कभी भी खोलें।",
      ja: "基準となる出生図。会話や決断の前に、惑星の配置をいつでも確認できます。",
      ko: "기준이 되는 출생 차트. 대화나 결정을 앞두고 언제든 배치를 확인하세요.",
    },
    lead: {
      en: "A kundli is the Vedic birth chart: a map of the sky at the moment you were born. This tool draws it in both the North Indian diamond and South Indian square layouts.",
      hi: "कुंडली वैदिक जन्म चार्ट है — आपके जन्म के क्षण आकाश का मानचित्र। यह उपकरण इसे उत्तर भारतीय हीरा और दक्षिण भारतीय वर्ग दोनों प्रारूपों में बनाता है।",
      ja: "クンダリとは、あなたが生まれた瞬間の天空を写したヴェーダ式の出生図です。北インド式のひし形と南インド式の方形、両方の様式で作成できます。",
      ko: "쿤달리는 태어난 순간의 하늘을 담은 베다 출생 차트입니다. 이 도구는 북인도식 마름모와 남인도식 사각형 두 형식으로 그려줍니다.",
    },
    faqs: [
      {
        question: {
          en: "What is the difference between North and South Indian chart formats?",
          hi: "उत्तर और दक्षिण भारतीय चार्ट प्रारूपों में क्या अंतर है?",
          ja: "北インド式と南インド式のチャートは何が違いますか？",
          ko: "북인도식과 남인도식 차트 형식은 무엇이 다른가요?",
        },
        answer: {
          en: "They show the same chart in different layouts. In the North Indian format the houses stay fixed and the signs move; in the South Indian format the signs stay fixed and the ascendant is marked.",
          hi: "दोनों एक ही कुंडली को अलग विन्यास में दिखाते हैं। उत्तर भारतीय प्रारूप में भाव स्थिर रहते हैं और राशियाँ बदलती हैं; दक्षिण भारतीय में राशियाँ स्थिर रहती हैं और लग्न चिह्नित होता है।",
          ja: "同じチャートを異なる配置で表したものです。北インド式ではハウスが固定され星座が動き、南インド式では星座が固定されアセンダントが印で示されます。",
          ko: "같은 차트를 다른 배치로 보여줍니다. 북인도식은 하우스가 고정되고 별자리가 움직이며, 남인도식은 별자리가 고정되고 상승궁을 표시합니다.",
        },
      },
      {
        question: {
          en: "Is the chart generator really free?",
          hi: "क्या कुंडली जनरेटर वास्तव में निःशुल्क है?",
          ja: "ホロスコープ作成は本当に無料ですか？",
          ko: "차트 생성기는 정말 무료인가요?",
        },
        answer: {
          en: "Yes. Generating and viewing a chart is free and does not require an account. Signing in only adds the ability to save charts to your library.",
          hi: "हाँ। कुंडली बनाना और देखना निःशुल्क है और इसके लिए खाते की आवश्यकता नहीं है। साइन इन करने पर केवल कुंडलियाँ सहेजने की सुविधा मिलती है।",
          ja: "はい。チャートの作成と閲覧は無料で、アカウントも不要です。ログインすると、作成したチャートを保存できるようになります。",
          ko: "네. 차트 생성과 열람은 무료이며 계정이 필요하지 않습니다. 로그인하면 차트를 저장할 수 있습니다.",
        },
      },
      {
        question: {
          en: "What if I do not know my exact birth time?",
          hi: "यदि मुझे अपना सटीक जन्म समय नहीं पता तो क्या करूँ?",
          ja: "正確な出生時刻がわからない場合はどうすればよいですか？",
          ko: "정확한 출생 시각을 모르면 어떻게 하나요?",
        },
        answer: {
          en: "The ascendant and house positions depend on birth time, so an approximate time gives approximate houses. Planetary sign positions other than the Moon change slowly and stay broadly reliable.",
          hi: "लग्न और भाव जन्म समय पर निर्भर करते हैं, इसलिए अनुमानित समय से भाव भी अनुमानित होंगे। चंद्रमा को छोड़कर अन्य ग्रहों की राशि-स्थिति धीरे बदलती है और मोटे तौर पर विश्वसनीय रहती है।",
          ja: "アセンダントとハウスの位置は出生時刻に依存するため、時刻が概算であればハウスも概算になります。月以外の惑星の星座位置はゆっくり変化するため、おおむね信頼できます。",
          ko: "상승궁과 하우스 위치는 출생 시각에 좌우되므로, 시각이 대략적이면 하우스도 대략적입니다. 달을 제외한 행성의 별자리 위치는 천천히 변하므로 대체로 신뢰할 수 있습니다.",
        },
      },
    ],
  },
  {
    slug: "dasha-calculator",
    sections: ["dasha"],
    title: {
      en: "Vimshottari dasha calculator",
      hi: "विंशोत्तरी दशा कैलकुलेटर",
      ja: "ダシャー計算（ヴィムショッタリ）",
      ko: "비쇼타리 다샤 계산기",
    },
    description: {
      en: "See your Vimshottari dasha timeline — mahadasha, antardasha, and deeper levels with start and end dates.",
      hi: "अपनी विंशोत्तरी दशा समयरेखा देखें — महादशा, अंतर्दशा और गहरे स्तर, आरंभ व अंत तिथियों सहित।",
      ja: "ヴィムショッタリ・ダシャーの周期を表示します。マハーダシャー、アンタルダシャー、さらに細かい階層まで開始日と終了日つきで確認できます。",
      ko: "비쇼타리 다샤 타임라인을 확인하세요. 마하다샤, 안타르다샤 및 더 깊은 단계를 시작일·종료일과 함께 보여줍니다.",
    },
    useCase: {
      en: "Check which period you're in before reading too much into a hard month — dasha context changes how a season should be read.",
      hi: "किसी कठिन महीने को अधिक गंभीरता से लेने से पहले देखें आप किस दशा में हैं — दशा का संदर्भ यह बदल देता है कि किसी दौर को कैसे समझा जाए।",
      ja: "調子の悪い月を過度に受け止める前に、今どの期間にいるか確認を。ダシャーの文脈で季節の読み方が変わります。",
      ko: "힘든 한 달을 너무 무겁게 받아들이기 전에 지금이 어느 시기인지 확인하세요. 다샤의 맥락이 그 시기를 읽는 방식을 바꿉니다.",
    },
    lead: {
      en: "Vimshottari dasha divides a life into planetary periods, calculated from the Moon's nakshatra at birth. This tool computes the full timeline down to four levels.",
      hi: "विंशोत्तरी दशा जीवन को ग्रह-कालों में विभाजित करती है, जिसकी गणना जन्म के समय चंद्रमा के नक्षत्र से होती है। यह उपकरण चार स्तरों तक पूरी समयरेखा निकालता है।",
      ja: "ヴィムショッタリ・ダシャーは、出生時の月のナクシャトラをもとに人生を惑星の期間に分けるものです。土星期やラーフ期など、九惑星それぞれの期間を含め、本ツールでは4階層までの周期を計算します。",
      ko: "비쇼타리 다샤는 출생 시 달의 낙샤트라를 기준으로 삶을 행성 주기로 나눕니다. 이 도구는 4단계까지 전체 타임라인을 계산합니다.",
    },
    faqs: [
      {
        question: {
          en: "What decides which dasha you are born into?",
          hi: "यह किससे तय होता है कि आपका जन्म किस दशा में हुआ?",
          ja: "生まれたときのダシャーは何で決まりますか？",
          ko: "태어날 때의 다샤는 무엇으로 정해지나요?",
        },
        answer: {
          en: "The nakshatra the Moon occupied at birth. Each nakshatra is ruled by a planet, and how far the Moon had travelled through it sets how much of that planet's period remained.",
          hi: "जन्म के समय चंद्रमा जिस नक्षत्र में था, वही। प्रत्येक नक्षत्र का एक स्वामी ग्रह होता है, और चंद्रमा उसमें कितना आगे बढ़ चुका था, इससे उस ग्रह की शेष अवधि तय होती है।",
          ja: "出生時に月が在泊していたナクシャトラです。各ナクシャトラには支配星があり、月がその中をどれだけ進んでいたかによって、その惑星の期間の残りが決まります。",
          ko: "출생 시 달이 머문 낙샤트라입니다. 각 낙샤트라에는 지배 행성이 있으며, 달이 그 안을 얼마나 지나왔는지에 따라 해당 행성 주기의 남은 기간이 정해집니다.",
        },
      },
    ],
  },
  {
    slug: "nakshatra-finder",
    sections: ["planets"],
    title: {
      en: "Nakshatra finder",
      hi: "नक्षत्र खोजें",
      ja: "ナクシャトラ（月宿）を調べる",
      ko: "낙샤트라 찾기",
    },
    description: {
      en: "Find your birth nakshatra and pada from your birth details, with the ruler, deity, and symbolism of each.",
      hi: "अपने जन्म विवरण से अपना जन्म नक्षत्र और पाद जानें — प्रत्येक का स्वामी, देवता और प्रतीक सहित।",
      ja: "出生データから、生まれた月宿（ナクシャトラ）とパダを調べます。支配星・神格・象徴もあわせて確認できます。",
      ko: "출생 정보로 태어난 낙샤트라와 파다를 찾고, 각각의 지배 행성·신격·상징을 확인하세요.",
    },
    useCase: {
      en: "The starting point for reading anything else about the Moon — temperament, timing, and the mansion your Sukuyō sign comes from.",
      hi: "चंद्रमा से जुड़ी हर बात पढ़ने का प्रारंभिक बिंदु — स्वभाव, समय और आपके नक्षत्र का आधार।",
      ja: "月にまつわるすべての読み解きの出発点。気質、タイミング、そして宿曜の宿の元になる情報です。",
      ko: "달과 관련된 모든 것을 읽는 출발점 — 기질, 시기, 그리고 수쿠요 본명수의 근거입니다.",
    },
    lead: {
      en: "Your birth nakshatra is the lunar mansion the Moon occupied when you were born — one of 27 divisions of the zodiac, each with its own ruler and character.",
      hi: "आपका जन्म नक्षत्र वह चंद्र-भवन है जिसमें जन्म के समय चंद्रमा था — राशिचक्र के 27 विभागों में से एक, प्रत्येक का अपना स्वामी और स्वभाव।",
      ja: "生まれたときに月が在泊していた月宿が、あなたの生まれナクシャトラです。黄道を27に分けたそれぞれに、固有の支配星と性質があります。",
      ko: "출생 시 달이 머문 달의 별자리가 당신의 낙샤트라입니다. 황도를 27개로 나눈 각각에는 고유한 지배 행성과 성격이 있습니다.",
    },
    faqs: [
      {
        question: {
          en: "How many nakshatras are there?",
          hi: "नक्षत्र कितने होते हैं?",
          ja: "ナクシャトラはいくつありますか？",
          ko: "낙샤트라는 몇 개인가요?",
        },
        answer: {
          en: "Twenty-seven, each spanning 13°20′ of the zodiac and subdivided into four padas.",
          hi: "सत्ताईस, प्रत्येक राशिचक्र के 13°20′ में फैला और चार पादों में विभाजित।",
          ja: "27あります。それぞれ黄道の13度20分を占め、さらに4つのパダに分かれます。",
          ko: "스물일곱 개이며, 각각 황도의 13°20′를 차지하고 네 개의 파다로 나뉩니다.",
        },
      },
    ],
  },
  {
    // High-intent search term across all four markets — the question
    // usually arrives before marriage, driven by a family member or a
    // previous reading rather than idle curiosity. The panel checks the
    // other classical yogas too, but this page leads with Mangal Dosha
    // since that's the specific query it answers.
    slug: "mangal-dosha",
    sections: ["yogas"],
    chartHandoff: "generic",
    title: {
      en: "Mangal Dosha (Kuja Dosha) checker",
      hi: "मंगल दोष (कुज दोष) जाँच",
      ja: "マンガル・ドーシャ（クジャ・ドーシャ）チェック",
      ko: "망갈 도샤(쿠자 도샤) 확인",
    },
    description: {
      en: "Check whether Mars sits in a Mangal Dosha house in your chart, with the exact house shown — plus every other classical yoga this chart carries.",
      hi: "जानें कि आपकी कुंडली में मंगल दोष है या नहीं, ठीक भाव के साथ — और इस कुंडली के अन्य सभी शास्त्रीय योग भी।",
      ja: "あなたのチャートで火星がマンガル・ドーシャのハウスにあるかを、正確なハウスとともに確認できます。他の古典的ヨーガもあわせて表示します。",
      ko: "화성이 차트에서 망갈 도샤 하우스에 있는지 정확한 하우스와 함께 확인하고, 이 차트가 가진 다른 고전 요가도 함께 확인하세요.",
    },
    useCase: {
      en: "Run this before a marriage conversation starts — it's usually raised by someone else first, and it helps to already know what your own chart actually shows.",
      hi: "विवाह की बातचीत शुरू होने से पहले इसे आज़माएँ — यह प्रश्न प्रायः कोई और पहले उठाता है, और पहले से अपनी कुंडली की वास्तविक स्थिति जानना मददगार होता है।",
      ja: "結婚の話が始まる前に。この質問は多くの場合、先に他の誰かから出されるもので、自分のチャートが実際に何を示しているかを前もって知っておくと安心です。",
      ko: "결혼 이야기가 시작되기 전에 확인해 보세요. 이 질문은 대개 다른 사람이 먼저 꺼내며, 자신의 차트가 실제로 무엇을 보여주는지 미리 아는 것이 도움이 됩니다.",
    },
    lead: {
      en: "Mangal Dosha is read when Mars occupies one of six specific houses from the Lagna. This page shows whether your chart carries it, in which house, and what classical texts say cancels it — alongside every other yoga this chart shows evidence for.",
      hi: "मंगल दोष तब पढ़ा जाता है जब मंगल लग्न से छह विशेष भावों में से किसी एक में हो। यह पृष्ठ बताता है कि आपकी कुंडली में यह है या नहीं, किस भाव में, और शास्त्रों के अनुसार इसका निरसन कैसे होता है — साथ ही अन्य सभी योग भी जिनके प्रमाण इस कुंडली में मिलते हैं।",
      ja: "マンガル・ドーシャは、火星がラグナから特定の六つのハウスのいずれかにあるときに読まれます。当ページでは、あなたのチャートにこれがあるか、どのハウスにあるか、そして古典が何を相殺条件として挙げているかを示します。あわせて、このチャートに根拠が見つかった他のヨーガもすべて表示します。",
      ko: "망갈 도샤는 화성이 라그나로부터 여섯 개의 특정 하우스 중 하나에 있을 때 읽습니다. 이 페이지는 당신의 차트에 이것이 있는지, 어느 하우스인지, 고전에서 무엇을 상쇄 조건으로 보는지 보여주며, 이 차트에서 근거가 발견된 다른 모든 요가도 함께 보여줍니다.",
    },
    faqs: [
      {
        question: {
          en: "Does Mangal Dosha always need to be cancelled before marriage?",
          hi: "क्या विवाह से पहले मंगल दोष का निरसन हमेशा आवश्यक है?",
          ja: "結婚前にマンガル・ドーシャは必ず相殺しなければなりませんか？",
          ko: "결혼 전에 망갈 도샤를 반드시 상쇄해야 하나요?",
        },
        answer: {
          en: "No — classical texts list several conditions that cancel or weaken it (Mars in its own sign, aspects from benefics, both charts carrying it), and traditions vary in how strictly they weigh it. This page shows the placement itself; what it means for a specific match is what a full reading covers.",
          hi: "नहीं — शास्त्रों में इसके निरसन या कमजोर होने की कई शर्तें बताई गई हैं (मंगल का स्वराशि में होना, शुभ ग्रहों की दृष्टि, दोनों कुंडलियों में इसका होना), और परंपराएँ इसे कितनी सख्ती से मानती हैं यह भिन्न होता है।",
          ja: "いいえ。古典には相殺・軽減の条件がいくつも挙げられており（火星が自身の星座にある、吉星からのアスペクトがある、双方のチャートにある、など）、これをどれほど厳格に見るかは流派によっても異なります。当ページは配置そのものを示すものです。",
          ko: "아니요. 고전에는 상쇄 또는 약화 조건이 여러 가지 있으며(화성이 자신의 별자리에 있음, 길성의 아스펙트, 양쪽 차트 모두에 있음 등), 이를 얼마나 엄격하게 보는지는 전통마다 다릅니다. 이 페이지는 배치 자체를 보여줍니다.",
        },
      },
      {
        question: {
          en: "What other combinations does this page check?",
          hi: "यह पृष्ठ और कौन-कौन से संयोग जाँचता है?",
          ja: "このページは他にどのような組み合わせを確認しますか？",
          ko: "이 페이지는 다른 어떤 조합을 확인하나요?",
        },
        answer: {
          en: "Kaal Sarp Dosha, Gaja Kesari, Budhaditya, Chandra-Mangala, Neecha Bhanga Raja Yoga, and the five Panchamahapurusha yogas — each shown only when your chart carries evidence for it, with the exact planet and house.",
          hi: "कालसर्प दोष, गजकेसरी, बुधादित्य, चंद्र-मंगल, नीच भंग राजयोग, और पाँच पंचमहापुरुष योग — प्रत्येक केवल तभी दिखाया जाता है जब आपकी कुंडली में इसका प्रमाण मिलता है, ठीक ग्रह और भाव सहित।",
          ja: "カーラ・サルパ・ドーシャ、ガジャ・ケサリ、ブダーディティヤ、チャンドラ・マンガラ、ニーチャ・バンガ・ラージャ・ヨーガ、そして五つのパンチャマハープルシャ・ヨーガです。それぞれ、あなたのチャートに根拠がある場合のみ、正確な惑星とハウスとともに表示されます。",
          ko: "칼 사르프 도샤, 가자 케사리, 부다디티야, 찬드라 망갈라, 니차 방가 라자 요가, 그리고 다섯 판차마하푸루샤 요가입니다. 각각 당신의 차트에 근거가 있을 때만 정확한 행성과 하우스와 함께 표시됩니다.",
        },
      },
    ],
  },
  {
    // Adjacent to Jyotish, not part of it — its own page says so rather
    // than presenting it as Vedic astrology. 数秘術 carries real Japanese
    // search volume this site ranks nothing for today, and it needs only
    // the birth date already on file, no ephemeris call.
    slug: "numerology",
    resultPanel: "numerology",
    title: {
      en: "Numerology: Mulank, Bhagyank & name number",
      hi: "अंक ज्योतिष: मूलांक, भाग्यांक और नाम अंक",
      ja: "数秘術｜ムーランク・バギャーンク・名前の数",
      ko: "수비학: 물랑크, 바갼크, 이름 수",
    },
    description: {
      en: "Your birth number, destiny number, and — for Latin-script names — a Chaldean name number, each with its ruling planet.",
      hi: "आपका जन्म अंक, भाग्य अंक, और — रोमन लिपि नामों के लिए — एक कैल्डियन नाम अंक, प्रत्येक के स्वामी ग्रह सहित।",
      ja: "生年月日から算出するムーランク（誕生数）とバギャーンク（運命数）、ローマ字のお名前があればカルデア式の名前の数も。それぞれの支配星つきです。",
      ko: "생년월일로 계산하는 물랑크(출생수)와 바갼크(운명수), 로마자 이름이 있다면 칼데아식 이름 수까지, 각각의 지배 행성과 함께 확인하세요.",
    },
    useCase: {
      en: "A quick second read alongside your chart — the birth date you've already entered is all this needs.",
      hi: "आपकी कुंडली के साथ एक त्वरित अतिरिक्त दृष्टिकोण — इसके लिए बस वही जन्म तिथि चाहिए जो आपने पहले ही दर्ज की है।",
      ja: "チャートと合わせて手軽に見られる、もう一つの視点です。すでに入力した生年月日があれば十分です。",
      ko: "차트와 함께 가볍게 볼 수 있는 또 하나의 관점입니다. 이미 입력한 생년월일만 있으면 충분합니다.",
    },
    lead: {
      en: "Numerology reduces a birth date — and optionally a name — to single-digit numbers, each read through a ruling planet. It's a related tradition, not part of Vedic astrology itself, shown here because the same birth date you've entered elsewhere already answers it.",
      hi: "अंक ज्योतिष जन्म तिथि — और वैकल्पिक रूप से नाम — को एकल अंकों में बदलता है, प्रत्येक को एक स्वामी ग्रह के माध्यम से पढ़ा जाता है। यह वैदिक ज्योतिष का हिस्सा नहीं, एक संबंधित परंपरा है।",
      ja: "数秘術は、生年月日（および任意でお名前）を一桁の数に還元し、それぞれを支配星を通じて読み解くものです。インド占星術そのものではなく、隣接する伝統です。他の場所ですでに入力した生年月日があれば、ここで算出できます。",
      ko: "수비학은 생년월일(선택적으로 이름)을 한 자리 숫자로 환원하여 각각을 지배 행성을 통해 읽는 것입니다. 베다 점성술 자체는 아니며 관련된 전통입니다. 다른 곳에서 이미 입력한 생년월일이 있으면 여기서 계산할 수 있습니다.",
    },
    faqs: [
      {
        question: {
          en: "Is numerology part of Vedic astrology?",
          hi: "क्या अंक ज्योतिष वैदिक ज्योतिष का हिस्सा है?",
          ja: "数秘術はインド占星術の一部ですか？",
          ko: "수비학은 베다 점성술의 일부인가요?",
        },
        answer: {
          en: "No — they're related traditions that share the idea of planetary rulership, but numerology works from a birth date's digits rather than the sky at the moment of birth. This page keeps them separate rather than presenting one as the other.",
          hi: "नहीं — ये संबंधित परंपराएँ हैं जो ग्रह-स्वामित्व का विचार साझा करती हैं, पर अंक ज्योतिष जन्म तिथि के अंकों से काम करता है, जन्म के समय आकाश से नहीं।",
          ja: "いいえ。両者は支配星という考え方を共有する関連伝統ですが、数秘術は出生時の天空ではなく、生年月日の数字から算出します。当ページは両者を混同せず、別のものとして扱います。",
          ko: "아니요. 두 전통은 지배 행성이라는 개념을 공유하지만, 수비학은 출생 순간의 하늘이 아니라 생년월일의 숫자로 계산합니다. 이 페이지는 둘을 혼동하지 않고 별개로 다룹니다.",
        },
      },
      {
        question: {
          en: "Why is there no name number for some names?",
          hi: "कुछ नामों के लिए नाम अंक क्यों नहीं दिखता?",
          ja: "名前の数が表示されない場合があるのはなぜですか？",
          ko: "일부 이름에는 왜 이름 수가 표시되지 않나요?",
        },
        answer: {
          en: "The Chaldean name-number table assigns values to Latin letters only. Running a name written in kana or hangul through it would produce a number that's wrong under every numerology system, not an approximation of a real one — so this page asks for a Latin spelling instead of guessing.",
          hi: "कैल्डियन नाम-अंक तालिका केवल रोमन अक्षरों को मान देती है। कोई भी अन्य लिपि गलत परिणाम देगी, इसलिए यह पृष्ठ अनुमान लगाने के बजाय रोमन वर्तनी माँगता है।",
          ja: "カルデア式の名前の数表は、ラテン文字にのみ数値を割り当てます。かなやハングルの名前をそのまま計算すると、どの数秘術方式でも誤った数になってしまうため、当ページは推測せずローマ字表記を求めます。",
          ko: "칼데아식 이름 수 표는 라틴 문자에만 값을 부여합니다. 가나나 한글 이름을 그대로 계산하면 어떤 수비학 방식으로도 잘못된 숫자가 나오므로, 이 페이지는 추측 대신 로마자 표기를 요청합니다.",
        },
      },
    ],
  },
  {
    /*
     * 宿曜 is the strategic page on this site.
     *
     * It is a native Japanese search term for a Japanese Buddhist tradition
     * that descends from the same 27 nakshatras Jyotish uses — so it is a
     * question Japanese searchers already ask, that a Vedic engine is uniquely
     * placed to answer well, and that an India-focused competitor has no reason
     * to build. Most Japanese sukuyō sites derive the mansion from a
     * lunar-calendar date; this derives it from the Moon's actual longitude.
     */
    slug: "sukuyo",
    resultPanel: "sukuyo",
    sections: ["lagna"],
    title: {
      en: "Sukuyō: find your birth mansion (27 nakshatras)",
      hi: "सुक्युō: अपना जन्म नक्षत्र जानें (27 नक्षत्र)",
      ja: "宿曜占星術｜本命宿を調べる（二十七宿）",
      ko: "수쿠요(宿曜) 본명수 찾기 (27수)",
    },
    description: {
      en: "Find your Sukuyō birth mansion from the Moon's real position, not a calendar date. All 27 mansions, with the nakshatra each one comes from.",
      hi: "चंद्रमा की वास्तविक स्थिति से अपना सुक्युō जन्म नक्षत्र जानें। सभी 27 नक्षत्र और उनका स्रोत।",
      ja: "生年月日と出生時刻から、本命宿を正確に算出します。旧暦の日付ではなく月の実際の位置に基づくため、境界日でも判定がぶれません。二十七宿とインド占星術のナクシャトラの対応も示します。",
      ko: "달의 실제 위치에서 수쿠요 본명수를 산출합니다. 음력 날짜가 아니라 실제 황경 기준입니다.",
    },
    useCase: {
      en: "For anyone raised on Japanese fortune-telling terms who has never seen where their sign actually comes from.",
      hi: "उन सभी के लिए जो जापानी भविष्यफल की शब्दावली से परिचित हैं पर कभी नहीं जाना कि उनका चिह्न वास्तव में कहाँ से आता है।",
      ja: "日本の占い用語には親しんでいても、自分の宿がどこから来ているのかは知らなかった方に。",
      ko: "일본식 점술 용어는 익숙하지만 자신의 별자리가 실제로 어디서 왔는지는 몰랐던 분들께.",
    },
    lead: {
      en: "Sukuyō is Japan's system of 27 lunar mansions, carried from India through Tang-dynasty China. It uses the same divisions Jyotish calls nakshatras. Enter your birth details once and this page will find your mansion from the Moon's sidereal longitude.",
      hi: "सुक्युō जापान की सत्ताईस नक्षत्रों की पद्धति है, जो भारत से चीन होते हुए जापान पहुँची। यह वही विभाजन प्रयोग करती है जिन्हें ज्योतिष नक्षत्र कहता है।",
      ja: "宿曜（すくよう）は、インドの二十七宿が唐代の中国を経て日本に伝わった体系で、インド占星術のナクシャトラと同じ月の分割を用います。出生データを一度ご入力いただければ、月の実際の黄経から本命宿を算出します。",
      ko: "수쿠요는 인도의 27수가 당나라를 거쳐 일본에 전해진 체계로, 조티시의 낙샤트라와 같은 달의 분할을 사용합니다.",
    },
    faqs: [
      {
        question: {
          en: "What is Sukuyō astrology?",
          hi: "सुक्युō ज्योतिष क्या है?",
          ja: "宿曜占星術とは何ですか？",
          ko: "수쿠요 점성술이란 무엇인가요?",
        },
        answer: {
          en: "Sukuyō is a Japanese astrological system based on 27 lunar mansions. It arrived in Japan in the ninth century via the Chinese translation of an Indian text, and its 27 mansions are the same divisions of the Moon's path that Vedic astrology calls nakshatras.",
          hi: "सुक्युō जापान की एक ज्योतिष पद्धति है जो 27 चंद्र नक्षत्रों पर आधारित है। यह नौवीं शताब्दी में एक भारतीय ग्रंथ के चीनी अनुवाद के माध्यम से जापान पहुँची।",
          ja: "宿曜占星術は、二十七の月宿に基づく日本の占術です。九世紀に空海が『宿曜経』を持ち帰ったことで伝わりました。その二十七宿は、インド占星術がナクシャトラと呼ぶ月の通り道の分割と同じものです。",
          ko: "수쿠요는 27개의 달 저택에 기반한 일본의 점성 체계입니다. 9세기에 인도 문헌의 한역본을 통해 일본에 전해졌으며, 27수는 베다 점성술의 낙샤트라와 같은 분할입니다.",
        },
      },
      {
        question: {
          en: "Why does my mansion differ from other Sukuyō sites?",
          hi: "मेरा नक्षत्र अन्य साइटों से भिन्न क्यों है?",
          ja: "他の宿曜サイトと本命宿が違うのはなぜですか？",
          ko: "다른 사이트와 본명수가 다른 이유는 무엇인가요?",
        },
        answer: {
          en: "Most Sukuyō sites assign a mansion from the lunar-calendar date, which is accurate for most days but wrong near boundaries. This page computes the Moon's actual sidereal longitude at your birth time from the Swiss Ephemeris, so a birth close to a mansion change resolves correctly. Birth time matters for exactly this reason.",
          hi: "अधिकांश साइटें पंचांग तिथि से नक्षत्र निर्धारित करती हैं, जो सीमावर्ती दिनों में गलत हो सकता है। यह पृष्ठ जन्म समय पर चंद्रमा के वास्तविक निरयण देशांतर की गणना करता है।",
          ja: "多くの宿曜サイトは旧暦の日付から本命宿を割り当てます。ほとんどの日は一致しますが、宿の境目にあたる日はずれます。当ページはスイス天体暦を用いて出生時刻における月の実際の黄経を計算するため、境界付近の生まれでも正しく判定できます。出生時刻が重要なのはこのためです。",
          ko: "대부분의 사이트는 음력 날짜로 본명수를 배정하는데, 경계일에는 어긋날 수 있습니다. 이 페이지는 출생 시각의 실제 황경을 계산합니다.",
        },
      },
      {
        question: {
          en: "Is Sukuyō the same as Vedic astrology?",
          hi: "क्या सुक्युō वैदिक ज्योतिष के समान है?",
          ja: "宿曜とインド占星術は同じものですか？",
          ko: "수쿠요와 베다 점성술은 같은 것인가요?",
        },
        answer: {
          en: "They share an origin and the 27-mansion framework, but not the whole system. Sukuyō developed its own interpretive tradition in Japan and works mainly with the mansions and their relationships. Vedic astrology also reads the ascendant, all nine grahas, the houses, and the dasha periods, which is why a full reading says considerably more than a mansion alone.",
          hi: "इनका मूल और 27-नक्षत्र ढाँचा साझा है, पर पूरी पद्धति नहीं। ज्योतिष लग्न, नौ ग्रह, भाव और दशाओं को भी पढ़ता है।",
          ja: "起源と二十七宿という枠組みは共通していますが、体系全体が同じわけではありません。宿曜は日本で独自の解釈伝統を発展させ、主に宿とその相互関係を扱います。インド占星術はこれに加えてラグナ、九つの惑星、十二の室、そしてダシャー期間を読むため、本命宿だけよりはるかに多くのことが分かります。",
          ko: "기원과 27수 체계는 공유하지만 전체 체계가 같지는 않습니다. 조티시는 라그나, 아홉 행성, 12궁, 다샤까지 함께 읽습니다.",
        },
      },
    ],
  },
  {
    /*
     * 相性 is the highest-volume commercial intent in Japanese fortune-telling,
     * and the paid compatibility reading is the natural next step from it. The
     * scoring is a pure function of two Moon positions, so no backend work.
     */
    slug: "compatibility",
    resultPanel: "compatibility",
    title: {
      en: "Vedic compatibility calculator (Ashtakoot, 36 points)",
      hi: "वैदिक अनुकूलता गणक (अष्टकूट, 36 अंक)",
      ja: "インド占星術 相性診断｜アシュタクータ三十六点",
      ko: "베다 궁합 계산기 (아슈타쿠타 36점)",
    },
    description: {
      en: "Score compatibility between two birth charts across the eight classical kutas, with the full breakdown rather than a single number.",
      hi: "दो कुंडलियों के बीच आठ शास्त्रीय कूटों पर अनुकूलता, पूर्ण विभाजन के साथ।",
      ja: "お二人の出生図から、古典的な八項目・三十六点法で相性を算出します。合計点だけでなく、ヴァルナからナーディまで各項目の内訳を表示します。",
      ko: "두 사람의 출생 차트로 여덟 개 고전 쿠타에 걸쳐 궁합을 산출하고, 총점이 아닌 전체 내역을 보여줍니다.",
    },
    useCase: {
      en: "Run before a serious conversation about marriage or moving in together — as a starting point for what to actually talk about, not a verdict.",
      hi: "विवाह या साथ रहने जैसी गंभीर बातचीत से पहले आज़माएँ — निर्णय के रूप में नहीं, बल्कि यह समझने के लिए कि किन बातों पर चर्चा करनी चाहिए।",
      ja: "結婚や同居について真剣に話す前に。結論としてではなく、何を話し合うべきかの出発点として。",
      ko: "결혼이나 동거처럼 진지한 대화를 나누기 전에. 결론이 아니라 무엇을 이야기해야 할지 짚어보는 출발점으로.",
    },
    lead: {
      en: "Ashtakoot scores eight criteria totalling thirty-six points, all derived from the two Moon positions. This page shows every component, because a total on its own hides which part of the relationship it is describing.",
      hi: "अष्टकूट आठ कसौटियों पर छत्तीस अंक देता है, सभी दो चंद्र स्थितियों से। यह पृष्ठ हर घटक दिखाता है।",
      ja: "アシュタクータは八つの観点を合計三十六点で評価する古典的な相性判定法です。すべてお二人の月の位置から算出されます。当ページが合計点だけでなく各項目の内訳を表示するのは、同じ点数でもどの項目で失点しているかによって意味がまったく異なるためです。",
      ko: "아슈타쿠타는 여덟 관점을 합계 36점으로 평가하는 고전적 궁합 판정법이며, 모두 두 사람의 달 위치에서 산출됩니다.",
    },
    faqs: [
      {
        question: {
          en: "How many points are considered a good match?",
          hi: "कितने अंक अच्छा मेल माने जाते हैं?",
          ja: "何点あれば相性が良いといえますか？",
          ko: "몇 점이면 궁합이 좋다고 하나요?",
        },
        answer: {
          en: "Eighteen out of thirty-six is the figure usually quoted, but it should not be read as a verdict. Ashtakoot uses only the two Moon positions, and ignores the ascendant, the seventh house and its lord, and the dasha period each person is in. Low scores frequently work out and high ones still meet difficulty.",
          hi: "छत्तीस में से अठारह प्रायः उद्धृत आँकड़ा है, पर इसे निर्णय नहीं मानना चाहिए। अष्टकूट केवल दो चंद्र स्थितियाँ देखता है।",
          ja: "一般には三十六点中十八点以上とされますが、これを結論として読むべきではありません。アシュタクータはお二人の月の位置のみを用い、ラグナ、七室とその支配星、現在のダシャー期間を考慮していないためです。点数が低くても続く関係も、高くても難しい時期を迎える関係もあります。",
          ko: "일반적으로 36점 중 18점 이상이라고 하지만, 이를 결론으로 읽어서는 안 됩니다. 아슈타쿠타는 두 사람의 달 위치만 사용합니다.",
        },
      },
      {
        question: {
          en: "What are Bhakoot and Nadi dosha?",
          hi: "भकूट और नाड़ी दोष क्या हैं?",
          ja: "バクート・ドーシャとナーディ・ドーシャとは何ですか？",
          ko: "바쿠타 도샤와 나디 도샤란 무엇인가요?",
        },
        answer: {
          en: "They are the two heaviest zero-scores. Bhakoot dosha occurs when the two Moon signs stand in a 6–8, 5–9 or 2–12 relationship; Nadi dosha when both people share the same nadi. Classical texts also list several conditions under which each is cancelled, so a zero is a prompt to look closer rather than a conclusion.",
          hi: "ये दो सबसे भारी शून्य हैं। भकूट दोष 6-8, 5-9 या 2-12 संबंध में होता है; नाड़ी दोष समान नाड़ी होने पर। शास्त्रों में इनके निरसन के नियम भी हैं।",
          ja: "配点の大きい二項目が零点になる状態を指します。バクート・ドーシャは二人の月星座が六と八、五と九、二と十二の関係にある場合、ナーディ・ドーシャは二人が同じナーディに属する場合です。ただし古典には、それぞれが他の配置によって相殺される条件が複数記されています。零点は結論ではなく、詳しく見るべき合図と考えるのが適切です。",
          ko: "가장 무거운 두 개의 0점입니다. 바쿠타 도샤는 두 달 별자리가 6-8, 5-9, 2-12 관계일 때, 나디 도샤는 같은 나디일 때 발생합니다.",
        },
      },
      {
        question: {
          en: "Do we both need exact birth times?",
          hi: "क्या दोनों का सटीक जन्म समय आवश्यक है?",
          ja: "二人とも正確な出生時刻が必要ですか？",
          ko: "두 사람 모두 정확한 출생 시각이 필요한가요?",
        },
        answer: {
          en: "Birth time matters because it fixes the Moon's nakshatra, and five of the eight kutas depend on it. The Moon moves through one nakshatra in roughly a day, so an hour or two rarely changes the result — but a birth near a boundary can. If a time is unknown, calculate with noon and treat the result as provisional.",
          hi: "जन्म समय चंद्र नक्षत्र तय करता है, और आठ में से पाँच कूट उस पर निर्भर हैं। सीमा के निकट जन्म में अंतर पड़ सकता है।",
          ja: "出生時刻は月のナクシャトラを確定するために必要で、八項目のうち五項目がこれに依存します。月は一つのナクシャトラをおよそ一日で通過するため、一、二時間の違いで結果が変わることは多くありませんが、境界付近の生まれでは変わり得ます。時刻が不明な場合は正午で計算し、結果は暫定的なものとお考えください。",
          ko: "출생 시각은 달의 낙샤트라를 확정하므로 필요하며, 여덟 항목 중 다섯이 이에 의존합니다. 경계 부근 출생은 결과가 달라질 수 있습니다.",
        },
      },
    ],
  },
  {
    // A different chart than birth-chart's D1: house 1 is the Moon sign, not
    // the ascendant. Reads mood, instinct and reaction rather than identity
    // and life direction — the chart most Western-astrology-literate visitors
    // are actually used to, since tropical Sun-sign astrology is closer in
    // spirit to a Moon-anchored reading than to Vedic Lagna.
    slug: "moon-sign",
    sections: ["moon"],
    chartHandoff: "moonSign",
    title: {
      en: "Vedic Moon sign (Chandra Rashi) calculator",
      hi: "वैदिक चंद्र राशि कैलकुलेटर",
      ja: "インド占星術 月星座（チャンドラ・ラーシ）計算",
      ko: "베다 달별자리(찬드라 라시) 계산기",
    },
    description: {
      en: "Find your Vedic Moon sign — the chart re-centred on the Moon rather than the ascendant, read for temperament, instinct and emotional response.",
      hi: "अपनी वैदिक चंद्र राशि जानें — लग्न के बजाय चंद्रमा पर केंद्रित कुंडली, स्वभाव और भावनात्मक प्रतिक्रिया के लिए।",
      ja: "ラグナではなく月を中心に据えたチャート。気質、本能、感情の反応を読みます。",
      ko: "상승궁이 아닌 달을 중심에 둔 차트. 기질, 본능, 감정적 반응을 읽습니다.",
    },
    useCase: {
      en: "Start here if you already know Western Sun-sign astrology — this is the closer Vedic equivalent, not the ascendant chart.",
      hi: "यदि आप पश्चिमी सूर्य-राशि ज्योतिष जानते हैं तो यहीं से शुरू करें — यह उसके निकटतम वैदिक समकक्ष है, लग्न कुंडली नहीं।",
      ja: "西洋の太陽星座占星術をご存じの方は、まずこちらから。ラグナ・チャートよりも近いヴェーダ式の対応物です。",
      ko: "서양 태양별자리 점성술을 아신다면 여기서 시작하세요 — 상승궁 차트보다 더 가까운 베다식 대응입니다.",
    },
    lead: {
      en: "Vedic astrology often reads a chart from the Moon rather than the ascendant — the Moon governs the mind, and a Chandra-based chart shows temperament and instinct more directly than the Lagna chart does. Enter your birth details once and see it here.",
      hi: "वैदिक ज्योतिष प्रायः लग्न के बजाय चंद्रमा से कुंडली पढ़ता है — चंद्रमा मन का कारक है। जन्म-विवरण एक बार दर्ज करें और यहीं देखें।",
      ja: "ヴェーダ占星術では、ラグナではなく月を基準にチャートを読むことがよくあります。月は心を司るため、チャンドラ・チャートはラグナ・チャートより直接的に気質と本能を示します。出生データを一度入力すれば、ここに表示されます。",
      ko: "베다 점성술은 종종 상승궁이 아니라 달을 기준으로 차트를 읽습니다. 달은 마음을 관장하므로, 찬드라 차트는 라그나 차트보다 기질과 본능을 더 직접적으로 보여줍니다.",
    },
    faqs: [
      {
        question: {
          en: "What is the difference between the Moon sign and the ascendant?",
          hi: "चंद्र राशि और लग्न में क्या अंतर है?",
          ja: "月星座とラグナは何が違いますか？",
          ko: "달별자리와 상승궁은 무엇이 다른가요?",
        },
        answer: {
          en: "The ascendant (Lagna) is the sign rising on the eastern horizon at birth and anchors the whole chart — house 1 is the self as presented to the world. The Moon sign re-anchors house 1 on wherever the Moon was instead, which is read for temperament and emotional instinct rather than outward identity.",
          hi: "लग्न जन्म के समय पूर्वी क्षितिज पर उदय होने वाली राशि है और पूरी कुंडली का आधार है। चंद्र राशि भाव-1 को चंद्रमा की स्थिति पर पुनः केंद्रित करती है, जो स्वभाव और भावनात्मक प्रवृत्ति के लिए पढ़ी जाती है।",
          ja: "ラグナ（上昇宮）は出生時に東の地平線から昇る星座で、チャート全体の基準です。第1室は世界に示す自己を表します。月星座は第1室を月の位置に置き換え、外面的な自己像ではなく気質と感情的な本能を読みます。",
          ko: "라그나(상승궁)는 태어난 순간 동쪽 지평선에서 떠오르는 별자리로 차트 전체의 기준이 됩니다. 달별자리는 1궁을 달의 위치로 다시 설정하여, 외적 정체성이 아닌 기질과 감정적 본능을 읽습니다.",
        },
      },
      {
        question: {
          en: "Is this the same as a Western Sun sign?",
          hi: "क्या यह पश्चिमी सूर्य राशि जैसा ही है?",
          ja: "西洋の太陽星座と同じですか？",
          ko: "서양의 태양별자리와 같은가요?",
        },
        answer: {
          en: "Not exactly, but it is the closer comparison. Western tropical astrology reads the Sun sign as the core of a personality profile; Vedic astrology, using the sidereal zodiac, tends to give that role to the Moon instead. A Vedic Moon sign will often differ from a Western Sun sign by one sign, due to the roughly 24-degree gap between the sidereal and tropical zodiacs.",
          hi: "बिल्कुल नहीं, पर यह निकटतम तुलना है। पश्चिमी ज्योतिष सूर्य राशि को व्यक्तित्व का केंद्र मानता है; वैदिक ज्योतिष यह भूमिका प्रायः चंद्रमा को देता है।",
          ja: "完全に同じではありませんが、より近い比較対象です。西洋のトロピカル占星術は太陽星座を性格の核として読みますが、サイデリアル黄道を用いるインド占星術では、その役割はしばしば月に与えられます。サイデリアルとトロピカルの黄道には約24度のずれがあるため、ヴェーダの月星座は西洋の太陽星座と一つずれることがよくあります。",
          ko: "정확히는 아니지만 더 가까운 비교입니다. 서양의 트로피컬 점성술은 태양별자리를 성격의 핵심으로 읽지만, 항성 황도를 쓰는 베다 점성술은 그 역할을 대개 달에 부여합니다.",
        },
      },
    ],
  },
  {
    // The transit (Gochar) chart, anchored on the ascendant by default —
    // where the sky is right now, laid over the birth chart's houses.
    slug: "transit-now",
    sections: ["gochar"],
    chartHandoff: "saturn",
    title: {
      en: "Current planetary transits (Gochar) over your chart",
      hi: "आपकी कुंडली पर वर्तमान ग्रह गोचर",
      ja: "現在の惑星トランジット（ゴーチャラ）を出生図に重ねて表示",
      ko: "내 차트 위의 현재 행성 트랜짓(고차라)",
    },
    description: {
      en: "See where the planets are right now, mapped onto the houses of your own birth chart — the transits that current events are read against.",
      hi: "अभी ग्रह कहाँ हैं, यह आपकी अपनी कुंडली के भावों पर मैप किया गया — वर्तमान घटनाओं को इन्हीं गोचर के संदर्भ में पढ़ा जाता है।",
      ja: "いま惑星がどこにあるかを、ご自身の出生図のハウスに重ねて表示します。現在の出来事はこのトランジットを基準に読まれます。",
      ko: "지금 행성이 어디에 있는지 본인 차트의 하우스에 겹쳐 보여줍니다. 현재의 사건들은 이 트랜짓을 기준으로 읽습니다.",
    },
    useCase: {
      en: "Check this when something notable is happening in your life and you want to see what the sky is doing to explain it — not to predict, to orient.",
      hi: "जब जीवन में कुछ उल्लेखनीय हो रहा हो और आप देखना चाहें कि आकाश क्या कर रहा है — भविष्यवाणी के लिए नहीं, समझने के लिए।",
      ja: "人生で何か特筆すべきことが起きているとき、空が何をしているか確認するために。予測のためではなく、状況を理解するために。",
      ko: "삶에서 특별한 일이 일어나고 있을 때 하늘이 무엇을 하고 있는지 확인하려고 — 예측이 아니라 상황을 파악하기 위해서입니다.",
    },
    lead: {
      en: "Gochar is how Vedic astrology reads the present moment: where each planet is right now, seen through the houses of your birth chart. This computes it from your saved details and shows both layers together.",
      hi: "गोचर वैदिक ज्योतिष का वर्तमान क्षण पढ़ने का तरीका है — अभी हर ग्रह कहाँ है, आपकी कुंडली के भावों के माध्यम से देखा गया।",
      ja: "ゴーチャラは、ヴェーダ占星術が「今」を読む方法です。いま各惑星がどこにあるかを、あなたの出生図のハウスを通して見ます。保存済みの出生データから計算し、両方の層を重ねて表示します。",
      ko: "고차라는 베다 점성술이 현재를 읽는 방식입니다. 지금 각 행성이 어디에 있는지를 당신의 출생 차트 하우스를 통해 봅니다.",
    },
    faqs: [
      {
        question: {
          en: "What is Gochar (transit)?",
          hi: "गोचर (ट्रांज़िट) क्या है?",
          ja: "ゴーチャラ（トランジット）とは何ですか？",
          ko: "고차라(트랜짓)란 무엇인가요?",
        },
        answer: {
          en: "Gochar is the current position of the planets, read against the houses of your birth chart rather than in isolation. The same transit lands differently for two people because it activates whichever house it falls in for each individual chart — which is why a generic 'Saturn is in Pisces' forecast means very little without a birth chart to place it against.",
          hi: "गोचर ग्रहों की वर्तमान स्थिति है, जिसे अकेले नहीं बल्कि आपकी कुंडली के भावों के संदर्भ में पढ़ा जाता है। एक ही गोचर दो व्यक्तियों के लिए अलग असर डालता है।",
          ja: "ゴーチャラとは、惑星の現在位置を単独でではなく、出生図のハウスに照らして読むものです。同じトランジットでも、それが各人のチャートのどの室に落ちるかによって作用が異なります。だからこそ「土星が魚座にある」という一般的な予測は、出生図と照らし合わせなければほとんど意味を持ちません。",
          ko: "고차라는 행성의 현재 위치를 단독이 아니라 출생 차트의 하우스에 비추어 읽는 것입니다. 같은 트랜짓이라도 각자의 차트에서 어느 하우스에 떨어지느냐에 따라 작용이 다릅니다.",
        },
      },
      {
        question: {
          en: "Which chart does the transit use as its anchor?",
          hi: "गोचर किस कुंडली को आधार बनाकर दिखाया जाता है?",
          ja: "トランジットはどのチャートを基準にしますか？",
          ko: "트랜짓은 어느 차트를 기준으로 하나요?",
        },
        answer: {
          en: "This page anchors transits on your ascendant (Lagna) chart, the most commonly used base. Some traditions read transits from the Moon sign instead — that comparison, and the deeper interpretation of what a given transit means for you, is what a live reading covers.",
          hi: "यह पृष्ठ गोचर को आपकी लग्न कुंडली पर आधारित दिखाता है, जो सबसे सामान्य आधार है। कुछ परंपराएँ चंद्र राशि से गोचर पढ़ती हैं।",
          ja: "このページはトランジットを、最も一般的に使われるラグナ・チャートを基準に表示します。伝統によっては月星座を基準に読むこともあります。その比較や、特定のトランジットがあなたにとって何を意味するかという深い解釈は、ライブ鑑定で扱う内容です。",
          ko: "이 페이지는 가장 일반적으로 쓰이는 라그나 차트를 기준으로 트랜짓을 표시합니다. 일부 전통은 달별자리를 기준으로 트랜짓을 읽기도 합니다.",
        },
      },
    ],
  },
  {
    // サターンリターン has real Japanese search volume as a Western-astrology
    // loanword, and 30歳の壁/厄年-adjacent life-transition searches cluster
    // around the same ages this computes. Sade Sati is the Vedic-native
    // framing of the same planet; showing both on one page is the honest
    // answer to "what is Saturn doing to me right now."
    slug: "saturn-return",
    sections: ["sadeSati"],
    chartHandoff: "saturn",
    title: {
      en: "Saturn return & Sade Sati calculator",
      hi: "शनि की वापसी और साढ़े साती कैलकुलेटर",
      ja: "土星回帰・サデ・サティ計算",
      ko: "토성 회귀 및 사데 사티 계산기",
    },
    description: {
      en: "See whether transiting Saturn is currently in a Sade Sati or Dhaiya period against your natal Moon, and when your next Saturn return falls.",
      hi: "जानें कि गोचर शनि आपके जन्म चंद्रमा के सापेक्ष वर्तमान में साढ़े साती या ढैया काल में है या नहीं, और आपकी अगली शनि वापसी कब है।",
      ja: "トランジットの土星が、出生時の月に対して現在サデ・サティやダイヤの期間にあるかどうか、そして次の土星回帰がいつ訪れるかを確認できます。",
      ko: "트랜짓 토성이 출생 달 대비 현재 사데 사티나 다이야 시기에 있는지, 그리고 다음 토성 회귀가 언제인지 확인하세요.",
    },
    useCase: {
      en: "Check this during a difficult stretch, or ahead of a milestone birthday — Saturn's periods are long, and knowing which one you're in changes how a season should be read.",
      hi: "किसी कठिन दौर में या किसी विशेष जन्मदिन से पहले इसे देखें — शनि के काल लंबे होते हैं, और आप किस काल में हैं यह जानने से किसी दौर को समझने का तरीका बदल जाता है।",
      ja: "つらい時期や、節目の誕生日を前にして確認を。土星の周期は長く、今どの期間にいるかを知ることで、その時期の読み方が変わります。",
      ko: "힘든 시기나 특별한 생일을 앞두고 확인해 보세요. 토성의 주기는 길며, 지금이 어느 시기인지 아는 것이 그 계절을 읽는 방식을 바꿉니다.",
    },
    lead: {
      en: "Saturn moves slowly — about two and a half years per sign — so its periods are read as long chapters rather than single events. This page shows two readings of the same planet: Sade Sati, the Vedic three-sign passage centred on your natal Moon, and Saturn return, the Western framing of Saturn's ~29.5-year orbit completing.",
      hi: "शनि धीरे चलता है — प्रति राशि लगभग ढाई वर्ष — इसलिए इसके काल एकल घटनाओं के बजाय लंबे अध्यायों के रूप में पढ़े जाते हैं। यह पृष्ठ एक ही ग्रह की दो पद्धतियाँ दिखाता है: साढ़े साती, जन्म चंद्रमा पर केंद्रित तीन-राशि पद्धति, और शनि की वापसी, शनि की लगभग 29.5 वर्षीय परिक्रमा।",
      ja: "土星の動きは遅く、一つの星座を通過するのに約2年半かかるため、その周期は単発の出来事ではなく長い章として読まれます。当ページは同じ惑星の二つの読み方を示します。出生時の月を中心とした三星座にわたるヴェーダ式のサデ・サティ（サディサティ）と、約29.5年で一周する土星の公転という西洋式の土星回帰です。",
      ko: "토성은 천천히 움직이며 — 한 별자리를 지나는 데 약 2년 반이 걸립니다 — 그래서 그 주기는 단일 사건이 아니라 긴 장(章)으로 읽힙니다. 이 페이지는 같은 행성의 두 가지 해석을 보여줍니다. 출생 달을 중심으로 한 세 별자리에 걸친 베다식 사데 사티와, 약 29.5년 만에 한 바퀴 도는 토성의 공전이라는 서양식 토성 회귀입니다.",
    },
    faqs: [
      {
        question: {
          en: "Is Sade Sati always a difficult period?",
          hi: "क्या साढ़े साती हमेशा एक कठिन काल होता है?",
          ja: "サデ・サティは必ず困難な時期になりますか？",
          ko: "사데 사티는 항상 힘든 시기인가요?",
        },
        answer: {
          en: "No — classical texts describe it as a period of restructuring and consequence rather than uniform hardship, and its effect depends heavily on Saturn's condition and role in the individual chart, not the phase alone. Everyone experiences three Sade Sati passages roughly every 30 years; treating each as automatically difficult overstates what the placement alone says.",
          hi: "नहीं — शास्त्रों में इसे पुनर्गठन और परिणाम का काल बताया गया है, समान रूप से कठिनाई का नहीं, और इसका प्रभाव कुंडली में शनि की स्थिति और भूमिका पर बहुत निर्भर करता है।",
          ja: "いいえ。古典はこれを、一様な困難というより再編成と結果の時期として描写しており、その影響は個々のチャートにおける土星の状態と役割に大きく左右され、この段階だけで決まるものではありません。",
          ko: "아니요. 고전에서는 이를 균일한 고난이 아니라 재편성과 결과의 시기로 설명하며, 그 영향은 개인 차트에서 토성의 상태와 역할에 크게 좌우되고 이 단계만으로 결정되지 않습니다.",
        },
      },
      {
        question: {
          en: "Why do the Saturn return ages shown here not account for my exact birth date?",
          hi: "यहाँ दिखाई गई शनि वापसी की आयु मेरी सटीक जन्म तिथि को ध्यान में क्यों नहीं रखती?",
          ja: "ここに表示される土星回帰の年齢は、なぜ正確な生年月日を考慮していないのですか？",
          ko: "여기 표시된 토성 회귀 나이는 왜 정확한 생년월일을 반영하지 않나요?",
        },
        answer: {
          en: "29, 59 and 88 are the commonly cited approximate ages, since Saturn's orbit isn't a round number of years and its apparent speed varies. The precise date a natal Saturn degree is met again requires solving for Saturn's actual position, which is closer to a full transit chart than a single age.",
          hi: "29, 59 और 88 सामान्यतः उद्धृत अनुमानित आयु हैं, क्योंकि शनि की परिक्रमा वर्षों की पूर्ण संख्या नहीं है और इसकी आभासी गति भिन्न होती है।",
          ja: "土星の公転は年数としてきりのよい数字ではなく、見かけの速度も変化するため、29歳・59歳・88歳は一般的に引用される目安の年齢です。出生時の土星度数に正確に再び到達する日付を求めるには、単一の年齢よりも実際の土星位置を解く、完全なトランジットチャートに近い計算が必要です。",
          ko: "토성의 공전은 딱 떨어지는 연수가 아니고 겉보기 속도도 달라지므로, 29세·59세·88세는 일반적으로 인용되는 대략적인 나이입니다. 출생 시 토성 도수에 정확히 다시 도달하는 날짜를 구하려면 단일 나이보다 실제 토성 위치를 계산하는, 완전한 트랜짓 차트에 가까운 계산이 필요합니다.",
        },
      },
    ],
  },
  {
    // The honest answer to "I don't know my exact birth time" isn't a
    // disclaimer, it's showing whether that uncertainty actually changes
    // anything — for some birth-date/place combinations it doesn't.
    slug: "birth-time-check",
    resultPanel: "birthTimeSensitivity",
    title: {
      en: "Birth time sensitivity checker",
      hi: "जन्म समय संवेदनशीलता जाँचकर्ता",
      ja: "出生時刻感度チェッカー",
      ko: "출생 시각 민감도 확인기",
    },
    description: {
      en: "Compute your chart across an uncertain time window and see exactly where — if anywhere — the ascendant sign actually changes.",
      hi: "अपनी अनिश्चित समय सीमा में कुंडली की गणना करें और ठीक-ठीक देखें कि लग्न राशि कहाँ — यदि कहीं — वास्तव में बदलती है।",
      ja: "不確かな時刻の範囲でチャートを計算し、アセンダントの星座が実際にどこで（もしあれば）変わるかを正確に確認します。",
      ko: "불확실한 시간 범위로 차트를 계산하고 상승궁 별자리가 실제로 어디서(있다면) 바뀌는지 정확히 확인하세요.",
    },
    useCase: {
      en: "Use this before treating an approximate birth time as exact — a two-hour uncertainty window sometimes changes nothing, and sometimes changes everything.",
      hi: "किसी अनुमानित जन्म समय को सटीक मानने से पहले इसे आज़माएँ — दो घंटे की अनिश्चितता कभी कुछ नहीं बदलती, तो कभी सब कुछ बदल देती है।",
      ja: "概算の出生時刻を正確なものとして扱う前に。2時間の不確かさが何も変えないこともあれば、すべてを変えてしまうこともあります。",
      ko: "대략적인 출생 시각을 정확한 것으로 다루기 전에. 두 시간의 불확실성이 아무것도 바꾸지 않을 때도 있고, 모든 것을 바꿀 때도 있습니다.",
    },
    lead: {
      en: "A birth certificate rounded to the nearest half hour, or a family member's best recollection, is common — and the ascendant changes roughly every two hours, so whether that uncertainty matters depends entirely on how close it sits to a sign boundary. This tool computes several charts across your stated window and shows exactly where, if anywhere, the ascendant sign moves.",
      hi: "जन्म प्रमाण पत्र में निकटतम आधे घंटे तक पूर्णांकित समय, या परिवार के किसी सदस्य की स्मृति सामान्य है — और लग्न लगभग हर दो घंटे में बदलता है।",
      ja: "出生証明書が最も近い30分単位に丸められている、あるいは家族の記憶に頼っているというのはよくあることです。アセンダントはおよそ2時間ごとに変わるため、その不確かさが影響するかどうかは、星座の境界にどれだけ近いかに完全に左右されます。このツールは、指定された範囲内で複数のチャートを計算し、アセンダントの星座が実際にどこで（もしあれば）動くかを正確に示します。",
      ko: "출생 증명서가 가장 가까운 30분 단위로 반올림되어 있거나, 가족의 기억에 의존하는 경우는 흔합니다. 상승궁은 대략 두 시간마다 바뀌므로, 그 불확실성이 영향을 미치는지는 별자리 경계에 얼마나 가까운지에 전적으로 달려 있습니다. 이 도구는 지정된 범위 내에서 여러 차트를 계산하여 상승궁 별자리가 실제로 어디서(있다면) 움직이는지 정확히 보여줍니다.",
    },
    faqs: [
      {
        question: {
          en: "What should I do if the ascendant sign does change within my window?",
          hi: "यदि मेरी सीमा के भीतर लग्न राशि बदलती है तो मुझे क्या करना चाहिए?",
          ja: "範囲内でアセンダントの星座が変わる場合、どうすればよいですか？",
          ko: "범위 내에서 상승궁 별자리가 바뀌면 어떻게 해야 하나요?",
        },
        answer: {
          en: "That's a sign your uncertainty genuinely matters, and narrowing the birth time further — a hospital record, a birth certificate, a family member who remembers more precisely — is worth doing before treating any single chart's house placements as settled. A live reading can also work through birth-time rectification using life events.",
          hi: "यह इस बात का संकेत है कि आपकी अनिश्चितता वास्तव में मायने रखती है, और किसी भी एक कुंडली की भाव स्थिति को निश्चित मानने से पहले जन्म समय को और सीमित करना उचित है।",
          ja: "それは、あなたの不確かさが実際に重要であることを示すサインです。どれか一つのチャートのハウス配置を確定したものとして扱う前に、病院の記録や出生証明書、より正確に覚えている家族など、出生時刻をさらに絞り込む価値があります。ライブ鑑定では、人生の出来事を用いた出生時刻の推定（レクティフィケーション）も行えます。",
          ko: "이는 당신의 불확실성이 실제로 중요하다는 신호이며, 병원 기록이나 출생 증명서, 더 정확히 기억하는 가족 등으로 출생 시각을 더 좁히는 것이 어느 한 차트의 하우스 배치를 확정된 것으로 다루기 전에 해볼 가치가 있습니다. 라이브 감정에서는 인생 사건을 이용한 출생 시각 보정(렉티피케이션)도 다룹니다.",
        },
      },
    ],
  },
  {
    // Tajik-system annual chart — a genuine second computation (a
    // solar-return ephemeris solve), not a rehash of the birth chart, and
    // the natural yearly-return reason to come back once a year.
    slug: "annual-forecast",
    resultPanel: "annualForecast",
    title: {
      en: "Varshaphala: annual solar return chart",
      hi: "वर्षफल: वार्षिक सूर्य वापसी कुंडली",
      ja: "ヴァルシャファラ｜年間の太陽回帰チャート",
      ko: "바르샤팔라: 연간 태양 회귀 차트",
    },
    description: {
      en: "Cast the chart for the exact moment transiting Sun returns to its natal degree this year — a distinct annual chart read alongside the birth chart, not instead of it.",
      hi: "इस वर्ष गोचर सूर्य के जन्म अंश पर लौटने के ठीक क्षण की कुंडली बनाएं — जन्म कुंडली के साथ पढ़ी जाने वाली एक अलग वार्षिक कुंडली, उसकी जगह नहीं।",
      ja: "今年、トランジットの太陽が出生時の度数に戻る正確な瞬間のチャートを作成します。出生図の代わりではなく、それと合わせて読む別個の年間チャートです。",
      ko: "올해 트랜짓 태양이 출생 시 도수로 돌아오는 정확한 순간의 차트를 작성합니다. 출생 차트를 대신하는 것이 아니라 함께 읽는 별도의 연간 차트입니다.",
    },
    useCase: {
      en: "Run this once a year, around your birthday, for a fresh read on the twelve months ahead rather than relying on the natal chart alone.",
      hi: "अपने जन्मदिन के आसपास वर्ष में एक बार इसे आज़माएँ — केवल जन्म कुंडली पर निर्भर रहने के बजाय आगामी बारह महीनों की एक ताज़ा दृष्टि के लिए।",
      ja: "誕生日の頃、年に一度お試しください。出生図だけに頼らず、これからの12か月を新たな視点で見ることができます。",
      ko: "생일 즈음에 매년 한 번씩 사용해 보세요. 출생 차트에만 의존하지 않고 앞으로의 12개월을 새롭게 살펴볼 수 있습니다.",
    },
    lead: {
      en: "Varshaphala is the Tajik system's annual chart, cast for the precise moment the transiting Sun returns to the exact degree it held at birth. It doesn't replace the birth chart — it's read alongside it, as a separate lens on the year ahead.",
      hi: "वर्षफल ताजिक पद्धति की वार्षिक कुंडली है, जो उस ठीक क्षण के लिए बनाई जाती है जब गोचर सूर्य जन्म के समय के अंश पर लौटता है। यह जन्म कुंडली की जगह नहीं लेती — इसे उसके साथ, आगामी वर्ष पर एक अलग दृष्टिकोण के रूप में पढ़ा जाता है।",
      ja: "ヴァルシャファラは、タージク方式の年間チャートで、トランジットの太陽が出生時と全く同じ度数に戻る正確な瞬間のために作成されます。出生図に取って代わるものではなく、これからの一年を見るもう一つの視点として、出生図と合わせて読みます。",
      ko: "바르샤팔라는 타지크 체계의 연간 차트로, 트랜짓 태양이 출생 시와 정확히 같은 도수로 돌아오는 순간을 위해 작성됩니다. 출생 차트를 대체하지 않으며, 다가오는 한 해를 보는 또 다른 관점으로 출생 차트와 함께 읽습니다.",
    },
    faqs: [
      {
        question: {
          en: "How is Varshaphala different from the birth chart itself?",
          hi: "वर्षफल जन्म कुंडली से किस प्रकार भिन्न है?",
          ja: "ヴァルシャファラは出生図とどう違いますか？",
          ko: "바르샤팔라는 출생 차트와 어떻게 다른가요?",
        },
        answer: {
          en: "The birth chart is cast once, for the moment of birth, and describes the whole life. Varshaphala is cast fresh each year, for the moment the Sun returns to its natal degree, and describes that specific year — its own ascendant and planetary placements, read as a chapter within the larger chart rather than apart from it.",
          hi: "जन्म कुंडली केवल एक बार, जन्म के क्षण के लिए बनती है और पूरे जीवन का वर्णन करती है। वर्षफल हर वर्ष नए सिरे से, सूर्य के जन्म अंश पर लौटने के क्षण के लिए बनता है, और उस विशिष्ट वर्ष का वर्णन करता है — अपना लग्न, अपनी ग्रह स्थिति, जिसे बड़ी कुंडली से अलग नहीं बल्कि उसके भीतर एक अध्याय के रूप में पढ़ा जाता है।",
          ja: "出生図は誕生の瞬間に一度だけ作成され、生涯全体を描きます。ヴァルシャファラは毎年新たに、太陽が出生時の度数に戻る瞬間のために作成され、その特定の一年を描きます——独自のアセンダントと惑星配置を持ち、大きな出生図から切り離してではなく、その中の一章として読まれます。",
          ko: "출생 차트는 태어난 순간에 단 한 번 작성되며 생애 전체를 설명합니다. 바르샤팔라는 매년 새롭게, 태양이 출생 시 도수로 돌아오는 순간을 위해 작성되며, 그 특정한 해를 설명합니다 — 고유한 상승궁과 행성 배치를 가지며, 큰 출생 차트와 별개가 아니라 그 안의 한 장(章)으로 읽힙니다.",
        },
      },
      {
        question: {
          en: "Why does the exact moment of the return matter?",
          hi: "वापसी के ठीक क्षण का महत्व क्यों है?",
          ja: "回帰の正確な瞬間が重要なのはなぜですか？",
          ko: "회귀의 정확한 순간이 왜 중요한가요?",
        },
        answer: {
          en: "The ascendant changes roughly every two hours, so the annual chart's houses depend on solving for the precise minute the Sun crosses its natal degree, not an approximate date. This tool searches for that exact moment using the same Swiss Ephemeris calculation behind the birth chart, rather than approximating from the calendar date alone.",
          hi: "लग्न लगभग हर दो घंटे में बदलता है, इसलिए वार्षिक कुंडली के भाव सूर्य के जन्म अंश को पार करने के ठीक मिनट पर निर्भर करते हैं, केवल अनुमानित तिथि पर नहीं। यह उपकरण जन्म कुंडली के पीछे उसी स्विस एफिमेरिस गणना का उपयोग करके उस ठीक क्षण को खोजता है।",
          ja: "アセンダントはおよそ2時間ごとに変わるため、年間チャートのハウスは、太陽が出生時の度数を通過する正確な分に依存し、おおよその日付だけでは決まりません。このツールは、出生図の背後にあるのと同じスイス天体暦計算を用いて、その正確な瞬間を探索します。",
          ko: "상승궁은 대략 두 시간마다 바뀌므로, 연간 차트의 하우스는 태양이 출생 시 도수를 통과하는 정확한 분에 좌우되며 대략적인 날짜만으로는 정해지지 않습니다. 이 도구는 출생 차트의 배경이 되는 것과 동일한 스위스 에페메리스 계산을 사용하여 그 정확한 순간을 찾습니다.",
        },
      },
    ],
  },
  {
    // Native calendar-almanac search intent across all four markets — the
    // day-selection question that precedes a move, an opening, or a
    // ceremony. Computed from real angular positions, not a printed table.
    slug: "panchang",
    resultPanel: "panchang",
    title: {
      en: "Panchang: tithi, nakshatra, yoga & karana for any date",
      hi: "पंचांग: किसी भी तिथि के लिए तिथि, नक्षत्र, योग और करण",
      ja: "パンチャーンガ｜任意の日付のティティ・ナクシャトラ・ヨーガ・カラナ",
      ko: "판창가: 원하는 날짜의 티티·낙샤트라·요가·카라나",
    },
    description: {
      en: "Compute the five classical elements of any calendar day — tithi, nakshatra, yoga, karana, and paksha — for your saved location's sunrise.",
      hi: "किसी भी कैलेंडर तिथि के पाँच शास्त्रीय तत्व — तिथि, नक्षत्र, योग, करण और पक्ष — अपने सहेजे गए स्थान के सूर्योदय के लिए गणना करें।",
      ja: "任意の暦日の五つの古典的要素——ティティ、ナクシャトラ、ヨーガ、カラナ、パクシャ——を、保存された出生地の日の出時刻で計算します。",
      ko: "원하는 달력 날짜의 다섯 가지 고전 요소 — 티티, 낙샤트라, 요가, 카라나, 팍샤 — 를 저장된 위치의 일출을 기준으로 계산합니다.",
    },
    useCase: {
      en: "Check before scheduling something that traditionally wants a favourable day — a move, an opening, a ceremony — rather than guessing from a printed calendar alone.",
      hi: "किसी ऐसे कार्य को निर्धारित करने से पहले जाँचें जिसके लिए परंपरागत रूप से शुभ दिन चाहिए — जैसे स्थानांतरण, उद्घाटन, या समारोह — केवल छपे कैलेंडर से अनुमान लगाने के बजाय।",
      ja: "引っ越し、開業、儀式など、伝統的に吉日を選ぶべき予定を立てる前に。印刷されたカレンダーだけで推測するのではなく。",
      ko: "이사, 개업, 의식처럼 전통적으로 길일을 고려하는 일정을 잡기 전에 확인하세요. 인쇄된 달력만으로 추측하는 대신에요.",
    },
    lead: {
      en: "Panchang means ‘five limbs’ — the five elements that describe a calendar day in Vedic timekeeping: tithi (lunar day), nakshatra, yoga, karana, and paksha. This tool computes all five for any date at your saved location, from the Moon and Sun's actual positions rather than a printed table.",
      hi: "पंचांग का अर्थ है 'पाँच अंग' — वैदिक कालगणना में किसी कैलेंडर दिन का वर्णन करने वाले पाँच तत्व: तिथि, नक्षत्र, योग, करण और पक्ष। यह उपकरण आपके सहेजे गए स्थान पर किसी भी तिथि के लिए इन पाँचों की गणना, चंद्रमा और सूर्य की वास्तविक स्थिति से करता है, किसी छपी तालिका से नहीं।",
      ja: "パンチャーンガとは「五つの肢体」を意味し、ヴェーダの時間計算における暦日を記述する五つの要素——ティティ（太陰日）、ナクシャトラ、ヨーガ、カラナ、パクシャ——を指します。このツールは、保存された出生地の任意の日付について、印刷された表ではなく月と太陽の実際の位置からこの五つすべてを計算します。",
      ko: "판창가는 '다섯 개의 지체'를 의미하며, 베다 시간 계산에서 달력의 하루를 설명하는 다섯 가지 요소인 티티(태음일), 낙샤트라, 요가, 카라나, 팍샤를 가리킵니다. 이 도구는 저장된 위치의 원하는 날짜에 대해 인쇄된 표가 아닌 달과 태양의 실제 위치로 이 다섯 가지를 모두 계산합니다.",
    },
    faqs: [
      {
        question: {
          en: "What is a tithi?",
          hi: "तिथि क्या है?",
          ja: "ティティとは何ですか？",
          ko: "티티란 무엇인가요?",
        },
        answer: {
          en: "A tithi is a lunar day — the time it takes the Moon to gain twelve degrees on the Sun, close to but not exactly one calendar day. A lunar month holds thirty tithis: fifteen in the waxing Shukla Paksha, fifteen in the waning Krishna Paksha, each with its own classical character and use.",
          hi: "तिथि एक चंद्र दिवस है — वह समय जो चंद्रमा को सूर्य पर बारह अंश की बढ़त बनाने में लगता है, जो लगभग किंतु ठीक एक कैलेंडर दिन के बराबर नहीं होता। एक चंद्र मास में तीस तिथियाँ होती हैं: शुक्ल पक्ष में पंद्रह और कृष्ण पक्ष में पंद्रह, प्रत्येक का अपना शास्त्रीय स्वभाव और उपयोग है।",
          ja: "ティティとは太陰日のことで、月が太陽に対して十二度進むのにかかる時間を指し、暦の一日にほぼ近いものの正確には一致しません。太陰月には三十のティティがあり、上弦のシュクラ・パクシャに十五、下弦のクリシュナ・パクシャに十五あります。それぞれに固有の古典的性質と用途があります。",
          ko: "티티는 태음일로, 달이 태양보다 12도 앞서 나가는 데 걸리는 시간을 말하며 달력의 하루와 거의 비슷하지만 정확히 일치하지는 않습니다. 태음월에는 서른 개의 티티가 있으며, 상현의 슈클라 팍샤에 열다섯, 하현의 크리슈나 팍샤에 열다섯 개가 있고, 각각 고유한 고전적 성격과 용도를 지닙니다.",
        },
      },
      {
        question: {
          en: "Why doesn't this show Rokuyō (六曜)?",
          hi: "इसमें रोकुयो (六曜) क्यों नहीं दिखाया गया है?",
          ja: "六曜（ろくよう）が表示されないのはなぜですか？",
          ko: "왜 로쿠요(六曜)는 표시되지 않나요?",
        },
        answer: {
          en: "Rokuyō is a Japanese lunisolar calendar cycle with its own counting rules, not derived from the Sun and Moon's angular positions the way tithi and nakshatra are. Showing it correctly needs a lunisolar calendar implementation rather than the ephemeris-based angular math this tool is built on — so it's left out here rather than approximated and risk being wrong.",
          hi: "रोकुयो एक जापानी चंद्र-सौर कैलेंडर चक्र है जिसके अपने गणना नियम हैं, यह सूर्य और चंद्रमा की कोणीय स्थितियों से व्युत्पन्न नहीं है जैसे तिथि और नक्षत्र होते हैं। इसे सही ढंग से दिखाने के लिए एक चंद्र-सौर कैलेंडर कार्यान्वयन चाहिए — इसलिए इसे गलत अनुमान लगाने के बजाय यहाँ छोड़ दिया गया है।",
          ja: "六曜は独自の数え方を持つ日本の太陰太陽暦の周期であり、ティティやナクシャトラのように太陽と月の角度位置から導かれるものではありません。正しく表示するには太陰太陽暦の実装が必要であり、このツールが基盤とする天体暦ベースの角度計算とは異なるため、誤って近似するのではなく、ここでは扱っていません。",
          ko: "로쿠요는 고유한 계산 규칙을 가진 일본의 태음태양력 주기로, 티티나 낙샤트라처럼 태양과 달의 각도 위치에서 도출되지 않습니다. 이를 올바르게 표시하려면 태음태양력 구현이 필요하며, 이 도구가 기반으로 하는 에페메리스 기반 각도 계산과는 다르기 때문에 잘못 근사하기보다 여기서는 다루지 않습니다.",
        },
      },
    ],
  },
  {
    // Naam Karan (nakshatra-pada naming) carries real search volume across
    // the Hindi/English markets, but this site's audience is Japanese —
    // so the naming *rule* stays classical while the candidate names are
    // real, current Japanese given names bridged to the nearest Japanese
    // onset for each pada's akshara (see `naam-akshar.ts`).
    slug: "baby-names",
    resultPanel: "babyNames",
    title: {
      en: "Baby names by nakshatra",
      hi: "नक्षत्र अनुसार बच्चे के नाम",
      ja: "ナクシャトラで選ぶ赤ちゃんの名前",
      ko: "낙샤트라로 찾는 아기 이름",
    },
    description: {
      en: "Find your baby's Janma Nakshatra and pada, then browse real Japanese given names starting with the traditional syllable for that pada — scored for numerology harmony with their Mulank and Bhagyank.",
      hi: "अपने बच्चे का जन्म नक्षत्र और पाद जानें, फिर उस पाद के पारंपरिक अक्षर से शुरू होने वाले वास्तविक जापानी नाम देखें — मूलांक और भाग्यांक के साथ अंक ज्योतिष सामंजस्य के अनुसार स्कोर किए गए।",
      ja: "赤ちゃんの生まれナクシャトラとパダを調べ、そのパダの伝統的な音節から始まる実在の日本人名を、ムーランク・バギャンクとの数秘術的な相性スコアとともに閲覧できます。",
      ko: "아기의 출생 낙샤트라와 파다를 확인하고, 그 파다의 전통 음절로 시작하는 실제 일본 이름을 물랑크·바갼크와의 수비학적 조화 점수와 함께 살펴보세요.",
    },
    useCase: {
      en: "For a Japanese family naming a child under a Vedic birth star — a way to bring the traditional syllable rule and a real, usable Japanese name together, rather than choosing one system and ignoring the other.",
      hi: "वैदिक जन्म नक्षत्र के अनुसार बच्चे का नामकरण करने वाले जापानी परिवार के लिए — पारंपरिक अक्षर नियम और एक वास्तविक, प्रयोग योग्य जापानी नाम को एक साथ लाने का तरीका।",
      ja: "ヴェーダの生まれ星のもとで子どもに名前をつける日本のご家族のために。どちらか一方の体系だけに頼るのではなく、伝統的な音節の規則と実際に使える日本人名を両立させる方法です。",
      ko: "베다 출생성 아래 아이 이름을 짓는 일본 가정을 위해 — 한 체계만 따르는 대신 전통 음절 규칙과 실제로 쓸 수 있는 일본 이름을 함께 고려하는 방법입니다.",
    },
    lead: {
      en: "Naam Karan is the classical Hindu naming tradition: your baby's Janma Nakshatra and pada determine a specific starting syllable. This tool finds that syllable from your baby's birth details, then shows real Japanese given names built around it, each scored for numerology harmony with the Mulank and Bhagyank derived from the same birth date.",
      hi: "नामकरण एक शास्त्रीय हिंदू नामकरण परंपरा है: आपके बच्चे का जन्म नक्षत्र और पाद एक विशिष्ट प्रारंभिक अक्षर निर्धारित करते हैं। यह उपकरण आपके बच्चे के जन्म विवरण से वह अक्षर खोजता है, फिर उसी जन्म तिथि से निकाले गए मूलांक और भाग्यांक के साथ अंक ज्योतिष सामंजस्य के अनुसार स्कोर किए गए, उसके इर्द-गिर्द बने वास्तविक जापानी नाम दिखाता है।",
      ja: "ナームカランは古典的なヒンドゥーの命名伝統です。赤ちゃんの生まれナクシャトラとパダによって、特定の頭音が決まります。このツールは赤ちゃんの出生データからその音節を求め、同じ生年月日から導いたムーランクとバギャンクとの数秘術的な相性でスコア付けした、実在の日本人名を表示します。",
      ko: "남카란은 고전 힌두 작명 전통입니다. 아기의 출생 낙샤트라와 파다가 특정한 시작 음절을 정합니다. 이 도구는 아기의 출생 정보로 그 음절을 찾은 뒤, 같은 생년월일에서 도출한 물랑크·바갼크와의 수비학적 조화로 점수를 매긴 실제 일본 이름을 보여줍니다.",
    },
    faqs: [
      {
        question: {
          en: "How does the nakshatra naming rule actually work?",
          hi: "नक्षत्र नामकरण नियम वास्तव में कैसे काम करता है?",
          ja: "ナクシャトラの命名規則は実際どのように機能しますか？",
          ko: "낙샤트라 작명 규칙은 실제로 어떻게 작동하나요?",
        },
        answer: {
          en: "Each of the 27 nakshatras is divided into 4 padas, and classical Jyotish assigns a specific Sanskrit akshara (syllable) to each of the 108 resulting padas. Your baby's Moon position at birth determines which pada applies, which in turn gives the traditional starting sound for the name.",
          hi: "27 नक्षत्रों में से प्रत्येक को 4 पादों में बांटा गया है, और शास्त्रीय ज्योतिष इन 108 पादों में से प्रत्येक को एक विशिष्ट संस्कृत अक्षर देता है। जन्म के समय आपके बच्चे की चंद्र स्थिति तय करती है कि कौन-सा पाद लागू होता है, जो बदले में नाम के लिए पारंपरिक प्रारंभिक ध्वनि देता है।",
          ja: "27のナクシャトラはそれぞれ4つのパダに分かれ、古典ジョーティッシュはこの108のパダそれぞれに特定のサンスクリット音節（アクシャラ）を割り当てます。出生時の赤ちゃんの月の位置によってどのパダに当たるかが決まり、それが名前の伝統的な頭音になります。",
          ko: "27개의 낙샤트라는 각각 4개의 파다로 나뉘며, 고전 조티시는 이렇게 생긴 108개의 파다 각각에 특정한 산스크리트 음절(악샤라)을 배정합니다. 출생 시 아기의 달 위치가 어느 파다에 해당하는지를 정하고, 이것이 이름의 전통적인 시작 소리가 됩니다.",
        },
      },
      {
        question: {
          en: "What if I don't know the exact birth time?",
          hi: "अगर मुझे सटीक जन्म समय नहीं पता तो?",
          ja: "正確な出生時刻がわからない場合はどうすればよいですか？",
          ko: "정확한 출생 시각을 모른다면 어떻게 하나요?",
        },
        answer: {
          en: "Pada needs a precise Moon position, which needs a birth time. Without one, this tool lets you choose the nakshatra and pada directly instead of blocking you — you lose the precision of a computed chart, but the naming rule itself still applies exactly the same way.",
          hi: "पाद के लिए चंद्रमा की सटीक स्थिति चाहिए, जिसके लिए जन्म समय आवश्यक है। समय के बिना, यह उपकरण आपको रोकने के बजाय सीधे नक्षत्र और पाद चुनने देता है — आप गणना की गई कुंडली की सटीकता खो देते हैं, पर नामकरण नियम पूरी तरह वैसे ही लागू होता है।",
          ja: "パダを求めるには月の正確な位置が必要で、それには出生時刻が要ります。時刻がわからない場合、このツールは進行を止める代わりに、ナクシャトラとパダを直接選べるようにします。計算されたチャートの精度は失われますが、命名規則そのものは同じように適用されます。",
          ko: "파다를 구하려면 달의 정확한 위치가 필요하고, 이를 위해서는 출생 시각이 필요합니다. 시각을 모른다면 이 도구는 진행을 막는 대신 낙샤트라와 파다를 직접 선택하게 해줍니다. 계산된 차트의 정밀함은 잃지만, 작명 규칙 자체는 동일하게 적용됩니다.",
        },
      },
      {
        question: {
          en: "Why Japanese names for a Sanskrit naming rule?",
          hi: "संस्कृत नामकरण नियम के लिए जापानी नाम क्यों?",
          ja: "サンスクリットの命名規則に、なぜ日本人名を使うのですか？",
          ko: "산스크리트 작명 규칙에 왜 일본 이름을 쓰나요?",
        },
        answer: {
          en: "This tool is built for families naming a child who will carry a Japanese name. Japanese has no letter-for-letter match for every Sanskrit consonant, so each pada's akshara is bridged to the nearest natural Japanese onset rather than transliterated literally — the naming rule is followed in spirit, with a name that's actually usable in Japan.",
          hi: "यह उपकरण उन परिवारों के लिए बनाया गया है जो अपने बच्चे का जापानी नाम रखना चाहते हैं। जापानी में हर संस्कृत व्यंजन का अक्षर-दर-अक्षर मेल नहीं है, इसलिए हर पाद के अक्षर को शाब्दिक लिप्यंतरण के बजाय निकटतम स्वाभाविक जापानी ध्वनि से जोड़ा गया है — नामकरण नियम की भावना का पालन होता है, साथ ही एक ऐसा नाम मिलता है जो जापान में वास्तव में प्रयोग हो सके।",
          ja: "このツールは、日本人名を持つことになる子どもに名前をつけるご家族のために作られています。日本語にはサンスクリット語のすべての子音に一致する音があるわけではないため、各パダのアクシャラは文字どおりの転写ではなく、最も自然に近い日本語の頭音に結び付けています。命名規則の趣旨を保ちながら、実際に日本で使える名前になります。",
          ko: "이 도구는 일본 이름을 갖게 될 아이의 이름을 짓는 가정을 위해 만들어졌습니다. 일본어에는 산스크리트어의 모든 자음과 정확히 일치하는 소리가 없으므로, 각 파다의 악샤라는 문자 그대로 옮기는 대신 가장 자연스러운 일본어 첫소리에 연결했습니다. 작명 규칙의 취지를 지키면서 실제로 일본에서 쓸 수 있는 이름이 됩니다.",
        },
      },
      {
        question: {
          en: "Can the nakshatra rule and the numerology score disagree?",
          hi: "क्या नक्षत्र नियम और अंक ज्योतिष स्कोर असहमत हो सकते हैं?",
          ja: "ナクシャトラの規則と数秘術のスコアが食い違うことはありますか？",
          ko: "낙샤트라 규칙과 수비학 점수가 서로 다를 수 있나요?",
        },
        answer: {
          en: "Yes, and that's expected — they're two separate traditions read together, not one system. Every name shown already starts with the correct traditional syllable; the numerology score is a second, complementary layer ranking those names against each other, not a filter that overrides the syllable rule.",
          hi: "हां, और यह अपेक्षित है — ये एक साथ पढ़ी जाने वाली दो अलग परंपराएं हैं, एक प्रणाली नहीं। दिखाया गया हर नाम पहले से ही सही पारंपरिक अक्षर से शुरू होता है; अंक ज्योतिष स्कोर एक दूसरी, पूरक परत है जो इन नामों को एक-दूसरे के मुकाबले क्रमबद्ध करती है, अक्षर नियम को अधिलेखित करने वाला फ़िल्टर नहीं है।",
          ja: "はい、それは想定内です。これらは一つの体系ではなく、併せて読む二つの別々の伝統だからです。表示される名前はすでにすべて正しい伝統的な音節で始まっており、数秘術のスコアはそれらの名前を互いに比較して並べる第二の補完的なレイヤーであって、音節の規則を上書きするフィルターではありません。",
          ko: "네, 그것은 예상된 일입니다. 이는 하나의 체계가 아니라 함께 읽는 두 개의 별개 전통이기 때문입니다. 표시되는 모든 이름은 이미 올바른 전통 음절로 시작하며, 수비학 점수는 그 이름들을 서로 비교해 순위를 매기는 보조적인 층일 뿐, 음절 규칙을 무시하는 필터가 아닙니다.",
        },
      },
      {
        question: {
          en: "Can I share the shortlist with family?",
          hi: "क्या मैं शॉर्टलिस्ट परिवार के साथ साझा कर सकता/सकती हूं?",
          ja: "候補リストを家族と共有できますか？",
          ko: "후보 목록을 가족과 공유할 수 있나요?",
        },
        answer: {
          en: "Yes — the shortlist has a WhatsApp share button that prefills the baby's nakshatra, pada, syllable, and every shortlisted name with its meaning and score, plus a copy-to-clipboard fallback for anywhere WhatsApp isn't the right channel.",
          hi: "हां — शॉर्टलिस्ट में एक व्हाट्सएप शेयर बटन है जो बच्चे के नक्षत्र, पाद, अक्षर, और हर शॉर्टलिस्ट किए गए नाम को उसके अर्थ और स्कोर के साथ पहले से भर देता है, साथ ही जहां व्हाट्सएप सही माध्यम न हो वहां के लिए कॉपी-टू-क्लिपबोर्ड विकल्प भी है।",
          ja: "はい。候補リストにはWhatsApp共有ボタンがあり、赤ちゃんのナクシャトラ、パダ、音節、そして候補に入れた各名前をその意味とスコアとともに自動入力します。WhatsAppが適さない場合のために、クリップボードへのコピー機能もあります。",
          ko: "네 — 후보 목록에는 WhatsApp 공유 버튼이 있어 아기의 낙샤트라, 파다, 음절, 그리고 후보에 추가한 각 이름을 의미와 점수와 함께 미리 채워 넣습니다. WhatsApp이 적절하지 않은 경우를 위한 클립보드 복사 기능도 있습니다.",
        },
      },
    ],
  },
];

export function findToolLanding(slug: string): ToolLanding | undefined {
  return TOOL_LANDINGS.find((tool) => tool.slug === slug);
}
