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
   * show the underlying chart below its own result.
   */
  resultPanel?: "sukuyo" | "compatibility";
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
      ja: "北インド式・南インド式の出生図を作成。惑星の度数、ナクシャトラ、ハウス配置まで表示します。",
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
      ja: "ヴィムショッタリ・ダシャーは、出生時の月のナクシャトラをもとに人生を惑星の期間に分けるものです。本ツールでは4階層までの周期を計算します。",
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
];

export function findToolLanding(slug: string): ToolLanding | undefined {
  return TOOL_LANDINGS.find((tool) => tool.slug === slug);
}
