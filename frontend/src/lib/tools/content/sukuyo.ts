import type { ToolLongForm } from "./types";

/**
 * Long-form body for /tools/sukuyo.
 *
 * Written Japanese-first: this page targets 「宿曜」「本命宿」「二十七宿」, all
 * native Japanese searches, and the Japanese text is the canonical version
 * rather than a translation of English copy. The other three locales are
 * faithful renderings of it.
 *
 * The argument the page has to make, in order: what sukuyō is, why it is the
 * same system as the nakshatras, why this site's calculation differs from the
 * lunar-calendar sites, and where the calculation stops being able to tell you
 * anything useful.
 */
export const sukuyoLongForm: ToolLongForm = {
  slug: "sukuyo",
  sections: [
    {
      heading: {
        ja: "宿曜占星術とは何か",
        en: "What Sukuyō astrology is",
        hi: "सुक्युō ज्योतिष क्या है",
        ko: "수쿠요 점성술이란",
      },
      body: [
        {
          ja: "宿曜占星術は、月がおよそ二十七日かけて天を一周する道筋を二十七等分し、そのどこに生まれたかによって人の資質や関係性を読む体系です。日本では平安時代初期、空海が唐から持ち帰った『宿曜経』によって伝わりました。以来、密教の僧侶によって暦法とともに受け継がれ、貴族社会では日取りや相性の判断に用いられてきた歴史があります。",
          en: "Sukuyō divides the Moon's roughly twenty-seven-day circuit of the sky into twenty-seven equal mansions, and reads a person's disposition and relationships from which mansion the Moon occupied at birth. It reached Japan in the early Heian period, in the Sukuyōkyō that Kūkai brought back from Tang China. It was carried forward by esoteric Buddhist monks alongside calendrical work, and was used in court society for choosing dates and judging compatibility.",
          hi: "सुक्युō ज्योतिष चंद्रमा के लगभग सत्ताईस दिन के आकाश-चक्र को सत्ताईस बराबर भागों में बाँटता है और जन्म के समय चंद्रमा किस भाग में था, इससे व्यक्ति के गुण और संबंध पढ़ता है। यह हेइआन काल के आरंभ में कूकाई द्वारा तांग चीन से लाए गए ग्रंथ के माध्यम से जापान पहुँचा।",
          ko: "수쿠요 점성술은 달이 약 27일에 걸쳐 하늘을 한 바퀴 도는 길을 27등분하고, 태어날 때 달이 어느 구획에 있었는지로 사람의 자질과 관계를 읽는 체계입니다. 헤이안 시대 초기에 구카이가 당나라에서 가져온 문헌을 통해 일본에 전해졌습니다.",
        },
        {
          ja: "二十七の区画はそれぞれ「宿（しゅく）」と呼ばれ、生まれた瞬間に月が位置していた宿を「本命宿（ほんみょうしゅく）」といいます。婁宿、胃宿、昴宿——といった名は、もとは中国の星官の名称であり、その背後にはさらに古いインドの二十七宿（ナクシャトラ）があります。つまり宿曜は、日本で独自に生まれた占術ではなく、インドから中国を経て伝わった体系が日本で定着したものです。",
          en: "Each of the twenty-seven divisions is a mansion, and the one the Moon occupied at the moment of birth is the honmyōshuku — the birth mansion. The names — Rō, I, Bō and so on — are Chinese asterism names, and behind them stand the older Indian nakshatras. Sukuyō is therefore not a native Japanese invention but a system that travelled from India through China and settled in Japan.",
          hi: "सत्ताईस विभाजनों में से प्रत्येक को 'शुku' कहा जाता है, और जन्म के क्षण चंद्रमा जिसमें था वह 'होन्म्योशुku' यानी जन्म नक्षत्र कहलाता है। ये नाम चीनी तारा-समूहों के हैं, और उनके पीछे उससे भी पुराने भारतीय नक्षत्र हैं।",
          ko: "27개의 구획은 각각 '수(宿)'라 불리며, 태어난 순간 달이 있던 수를 '본명수'라고 합니다. 이 이름들은 본래 중국의 별자리 명칭이고, 그 배후에는 더 오래된 인도의 27수(낙샤트라)가 있습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "二十七宿とナクシャトラは同じものか",
        en: "Are the mansions and the nakshatras the same thing?",
        hi: "क्या सत्ताईस नक्षत्र और नक्षत्र एक ही हैं?",
        ko: "27수와 낙샤트라는 같은 것인가",
      },
      body: [
        {
          ja: "枠組みとしては同じものです。インド占星術（ジョーティッシュ）は黄道を二十七等分し、それぞれをナクシャトラと呼びます。一つのナクシャトラは黄経十三度二十分。宿曜の一宿もまったく同じ幅を持ち、順序も対応しています。当ページが本命宿とあわせて対応するナクシャトラ名を表示しているのは、この対応関係が単なる類似ではなく、同一の区分に別の名がついている状態だからです。",
          en: "As a framework, yes. Jyotish divides the ecliptic into twenty-seven nakshatras, each spanning 13°20′ of longitude. A sukuyō mansion has exactly the same width and the same ordering. This page shows the corresponding nakshatra name alongside your mansion because the relationship is not a resemblance — it is one division carrying two names.",
          hi: "ढाँचे के रूप में हाँ। ज्योतिष क्रांतिवृत्त को सत्ताईस नक्षत्रों में बाँटता है, प्रत्येक 13°20′ का। सुक्युō का एक शुku भी बिल्कुल उतना ही चौड़ा है और क्रम भी वही है।",
          ko: "틀로서는 같습니다. 조티시는 황도를 27등분하여 각각을 낙샤트라라 부르며, 하나가 황경 13도 20분입니다. 수쿠요의 한 수도 정확히 같은 폭이며 순서도 대응합니다.",
        },
        {
          ja: "ただし、解釈の体系までが同じというわけではありません。宿曜は日本において独自の発展を遂げ、主に宿どうしの関係——命・業・胎、栄・親・友・壊・危・成・安といった距離による分類——を中心に人間関係を読みます。一方インド占星術は、月宿に加えてラグナ（上昇宮）、九つの惑星の配置、十二の室、そしてダシャーと呼ばれる時期区分を併せて読みます。同じ二十七宿から出発しながら、扱う情報量が異なるのです。",
          en: "The interpretive traditions, though, diverged. Sukuyō developed its own approach in Japan, reading relationships mainly through the distance between two mansions. Jyotish reads the mansion alongside the ascendant, the placement of the nine grahas, the twelve houses, and the dasha periods. Both start from the same twenty-seven divisions, but they work with different amounts of information.",
          hi: "पर व्याख्या की परंपराएँ अलग हो गईं। सुक्युō मुख्यतः दो नक्षत्रों के बीच की दूरी से संबंध पढ़ता है, जबकि ज्योतिष लग्न, नौ ग्रहों की स्थिति, बारह भाव और दशा-काल को साथ पढ़ता है।",
          ko: "다만 해석 체계까지 같지는 않습니다. 수쿠요는 일본에서 독자적으로 발전해 주로 수 사이의 거리로 인간관계를 읽습니다. 조티시는 라그나, 아홉 행성의 배치, 12궁, 다샤까지 함께 읽습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "なぜ他のサイトと本命宿が違うことがあるのか",
        en: "Why your mansion may differ from other sites",
        hi: "अन्य साइटों से आपका नक्षत्र भिन्न क्यों हो सकता है",
        ko: "다른 사이트와 본명수가 다를 수 있는 이유",
      },
      body: [
        {
          ja: "多くの宿曜サイトは、旧暦の日付から本命宿を割り出します。これは簡便で、ほとんどの日については正しい結果になります。しかし月は一つの宿をおよそ一日で通過するため、宿の変わり目にあたる日に生まれた場合、日付だけでは判定できません。生まれた時刻が数時間違うだけで本命宿が変わることが現実に起こります。",
          en: "Most sukuyō sites assign the mansion from the lunar-calendar date. That is convenient and correct on most days. But the Moon crosses one mansion in roughly a day, so for a birth falling near a mansion boundary the date alone cannot decide it. A few hours' difference in birth time genuinely changes the answer.",
          hi: "अधिकांश साइटें पंचांग तिथि से नक्षत्र निकालती हैं। यह सुविधाजनक है और अधिकांश दिनों के लिए सही होता है। पर चंद्रमा एक नक्षत्र लगभग एक दिन में पार करता है, इसलिए सीमा के निकट जन्म के लिए केवल तिथि पर्याप्त नहीं।",
          ko: "대부분의 수쿠요 사이트는 음력 날짜로 본명수를 정합니다. 간편하고 대부분의 날에는 맞습니다. 그러나 달은 하나의 수를 약 하루에 통과하므로, 경계일에 태어난 경우 날짜만으로는 판정할 수 없습니다.",
        },
        {
          ja: "当ページは旧暦を用いず、スイス天体暦（Swiss Ephemeris）によって出生時刻における月の実際の黄経を計算し、それを十三度二十分で割って宿を求めます。使用するアヤナムシャ（歳差補正）はラヒリ方式です。そのため、境界付近に生まれた方でも判定がぶれません。出生時刻の入力をお願いしているのは、この精度のためです。",
          en: "This page does not use the lunar calendar. It computes the Moon's actual sidereal longitude at your birth moment from the Swiss Ephemeris and divides by 13°20′ to find the mansion, using the Lahiri ayanamsa for precession. Births near a boundary therefore resolve correctly. That precision is why the page asks for a birth time.",
          hi: "यह पृष्ठ पंचांग का उपयोग नहीं करता। यह स्विस एफ़ेमेरिस से जन्म-क्षण पर चंद्रमा का वास्तविक निरयण देशांतर निकालकर 13°20′ से भाग देता है, लाहिड़ी अयनांश के साथ।",
          ko: "이 페이지는 음력을 쓰지 않습니다. 스위스 천체력으로 출생 순간 달의 실제 항성 황경을 계산하고 13도 20분으로 나누어 수를 구하며, 세차 보정은 라히리 방식을 사용합니다.",
        },
        {
          ja: "なお、出生時刻が不明な場合でも本命宿はおおよそ求められますが、境界日に該当する可能性は残ります。その場合は、正午を仮の時刻として計算したうえで、前後の宿の両方をご確認いただくのが現実的です。出生時刻そのものを推定する作業は、鑑定として別途承っております。",
          en: "If your birth time is unknown the mansion can still be approximated, but a boundary day remains possible. The practical approach is to calculate using noon as a placeholder and consider both adjacent mansions. Establishing the birth time itself is separate work, offered as a consultation.",
          hi: "यदि जन्म समय अज्ञात है तो नक्षत्र लगभग निकाला जा सकता है, पर सीमा-दिवस की संभावना बनी रहती है। व्यावहारिक तरीका है दोपहर मानकर गणना करना और दोनों निकटवर्ती नक्षत्र देखना।",
          ko: "출생 시각을 모르는 경우에도 본명수는 대략 구할 수 있지만 경계일 가능성은 남습니다. 정오를 임시 시각으로 계산한 뒤 앞뒤 수를 모두 확인하는 것이 현실적입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "本命宿から読めること、読めないこと",
        en: "What the mansion can and cannot tell you",
        hi: "नक्षत्र से क्या पढ़ा जा सकता है और क्या नहीं",
        ko: "본명수로 읽을 수 있는 것과 없는 것",
      },
      body: [
        {
          ja: "本命宿が示すのは、月の位置に結びついた気質の傾向です。月は心の動き、反応の速さ、安心の得かたを表すとされ、宿はその質を二十七通りに分類したものと考えられます。支配星（各宿を司る惑星）とガナ（神・人・羅刹という三分類）は、その傾向をさらに細かく分けるための古典的な指標です。",
          en: "The mansion describes tendencies bound to the Moon's position. The Moon is taken to govern the movement of the mind, the speed of reaction, and how a person finds ease; the mansions sort that quality twenty-seven ways. The ruling planet and the gana — the threefold deva, manushya and rakshasa classification — are the classical refinements of it.",
          hi: "नक्षत्र चंद्रमा की स्थिति से जुड़ी प्रवृत्तियों को दर्शाता है। चंद्रमा मन की गति, प्रतिक्रिया की तेज़ी और सुकून पाने के ढंग का कारक माना जाता है।",
          ko: "본명수가 보여주는 것은 달의 위치에 결부된 기질의 경향입니다. 달은 마음의 움직임, 반응의 속도, 안정을 얻는 방식을 나타낸다고 보며, 수는 그 질을 27가지로 분류한 것입니다.",
        },
        {
          ja: "一方で、本命宿だけでは分からないことのほうが多い、というのが正直なところです。仕事の適性、結婚の時期、健康上の注意点といった具体的な問いは、月以外の惑星の配置と、いまどのダシャー期間にあるかを見なければ答えられません。同じ本命宿の人が同じ人生を歩むわけではないのは、そのためです。",
          en: "Honestly, though, more is invisible from the mansion than visible. Questions about suitability for work, the timing of marriage, or points of caution in health cannot be answered without the other planets and the dasha period currently running. Two people sharing a birth mansion do not share a life, and that is why.",
          hi: "पर ईमानदारी से कहें तो नक्षत्र से जो नहीं दिखता वह अधिक है। कार्य-योग्यता, विवाह का समय या स्वास्थ्य की सावधानियाँ अन्य ग्रहों और वर्तमान दशा को देखे बिना नहीं बताई जा सकतीं।",
          ko: "다만 솔직히 말하면 본명수만으로 알 수 없는 것이 더 많습니다. 직업 적성, 결혼 시기, 건강상의 주의점 같은 구체적 질문은 다른 행성의 배치와 현재의 다샤 시기를 보지 않으면 답할 수 없습니다.",
        },
      ],
      bullets: [
        {
          ja: "本命宿は月の位置のみから決まり、生年月日と出生時刻があれば確定します",
          en: "The mansion follows from the Moon's position alone, and is settled by date and time of birth",
          hi: "नक्षत्र केवल चंद्रमा की स्थिति से तय होता है",
          ko: "본명수는 달의 위치만으로 정해집니다",
        },
        {
          ja: "宿どうしの関係（命・業・胎など）は、二人の宿の距離から機械的に求められます",
          en: "Relations between mansions are derived mechanically from the distance between them",
          hi: "नक्षत्रों के बीच संबंध उनकी दूरी से यांत्रिक रूप से निकलते हैं",
          ko: "수 사이의 관계는 두 수의 거리에서 기계적으로 산출됩니다",
        },
        {
          ja: "具体的な時期の判断には、ダシャーと現在のトランジットが必要です",
          en: "Judging specific timing requires the dasha periods and current transits",
          hi: "विशिष्ट समय के आकलन के लिए दशा और वर्तमान गोचर आवश्यक हैं",
          ko: "구체적인 시기 판단에는 다샤와 현재 트랜싯이 필요합니다",
        },
      ],
    },
  ],
};
