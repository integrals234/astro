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
    {
      heading: {
        ja: "本命宿の調べ方（使い方）",
        en: "How to use this tool",
        hi: "इस टूल का उपयोग कैसे करें",
        ko: "사용 방법",
      },
      body: [
        {
          ja: "操作は三つの手順で完了します。まずフォームに生年月日、出生時刻、出生地を入力します。次に「本命宿を調べる」ボタンを押します。数秒で本命宿とその読み方、対応するナクシャトラ、パダ、支配星、ガナが表示されます。",
          en: "It takes three steps. Enter your date, time and place of birth in the form. Press “Find my mansion”. Within a few seconds you will see your birth mansion and its reading, the corresponding nakshatra, the pada, the ruling planet and the gana.",
          hi: "तीन चरण हैं। फ़ॉर्म में जन्म तिथि, समय और स्थान दर्ज करें। “मेरा नक्षत्र देखें” दबाएँ। कुछ ही सेकंड में आपका शुku, उसका उच्चारण, संबंधित नक्षत्र, पाद, स्वामी ग्रह और गण दिखाई देंगे।",
          ko: "세 단계면 됩니다. 양식에 생년월일, 출생 시각, 출생지를 입력하고 '본명수 확인하기'를 누르면, 몇 초 안에 본명수와 읽는 법, 대응하는 낙샤트라, 파다, 지배성, 가나가 표시됩니다.",
        },
        {
          ja: "出生地は、時差（タイムゾーン）を正しく扱うために使います。日本国内の生まれであれば日本時間で計算されますが、海外で生まれた方は、現地の時刻と現地の地名をそのままご入力ください。日本時間に換算した時刻を入れると、月の位置が数度ずれ、宿が変わることがあります。",
          en: "The birthplace is used to handle the time zone correctly. If you were born abroad, enter the local clock time together with the local place name. Converting the time to Japan time first can shift the Moon by several degrees and change the mansion.",
          hi: "जन्म स्थान का उपयोग समय-क्षेत्र को सही ढंग से संभालने के लिए होता है। विदेश में जन्म हुआ हो तो वहाँ का स्थानीय समय और स्थान ही दर्ज करें। पहले जापानी समय में बदलने से चंद्रमा कई अंश खिसक सकता है।",
          ko: "출생지는 시간대를 올바르게 처리하기 위해 사용합니다. 해외에서 태어났다면 현지 시각과 현지 지명을 그대로 입력해 주세요. 미리 일본 시간으로 환산하면 달의 위치가 몇 도 어긋나 수가 바뀔 수 있습니다.",
        },
      ],
      bullets: [
        {
          ja: "出生時刻が分からない場合は正午で計算し、表示された宿の前後の宿も候補として読んでみてください",
          en: "If your birth time is unknown, calculate with noon and treat the mansions on either side as candidates too",
          hi: "जन्म समय अज्ञात हो तो दोपहर मानकर गणना करें और दोनों पड़ोसी नक्षत्रों को भी संभावित मानें",
          ko: "출생 시각을 모르면 정오로 계산하고, 앞뒤 수도 후보로 함께 읽어 보세요",
        },
        {
          ja: "「だいたい朝」など時刻があいまいな場合も、月は一時間で約0.5度動くため、境界から離れていれば結果は変わりません",
          en: "If you only know the time roughly, the Moon moves about half a degree an hour, so the result holds unless you are near a boundary",
          hi: "यदि समय मोटे तौर पर ही पता है, तो चंद्रमा प्रति घंटे लगभग आधा अंश चलता है, इसलिए सीमा से दूर होने पर परिणाम नहीं बदलता",
          ko: "시각이 대략적이어도 달은 한 시간에 약 0.5도 움직이므로, 경계에서 멀다면 결과는 바뀌지 않습니다",
        },
        {
          ja: "西洋占星術のサイトで見た「月星座」と一つずれていても誤りではありません。当ページは恒星黄道（ラヒリ方式、現在約24度の補正）を使うためです",
          en: "A Moon sign one sign earlier than a Western site shows is not an error: this page uses the sidereal zodiac with the Lahiri ayanamsa, currently about 24°",
          hi: "पश्चिमी साइट से एक राशि पीछे चंद्र राशि आना त्रुटि नहीं है: यह पृष्ठ लाहिड़ी अयनांश (लगभग 24°) वाला निरयण राशिचक्र प्रयोग करता है",
          ko: "서양 점성술 사이트의 달 별자리와 하나 어긋나도 오류가 아닙니다. 이 페이지는 라히리 방식(현재 약 24도 보정)의 항성 황도를 사용합니다",
        },
        {
          ja: "一度入力した出生データは保存され、当サイトの他のツールでもそのまま使われます",
          en: "Birth details you enter once are saved and reused by the other tools on this site",
          hi: "एक बार दर्ज किया गया जन्म-विवरण सहेजा जाता है और साइट के अन्य टूल में भी उपयोग होता है",
          ko: "한 번 입력한 출생 정보는 저장되어 사이트의 다른 도구에서도 그대로 사용됩니다",
        },
      ],
    },
    {
      heading: {
        ja: "結果の読み方：表示される項目の意味",
        en: "Reading the result: what each field means",
        hi: "परिणाम कैसे पढ़ें: प्रत्येक क्षेत्र का अर्थ",
        ko: "결과 읽는 법: 각 항목의 의미",
      },
      body: [
        {
          ja: "結果画面には、いちばん大きな文字で本命宿が、その下に読みがなが表示されます。その下に並ぶ四つの項目は、同じ月の位置をインド占星術の言葉で言い換えたものです。",
          en: "The result shows your birth mansion in large type with its reading beneath. The four fields below it restate the same Moon position in the vocabulary of Jyotish.",
          hi: "परिणाम में आपका शुku बड़े अक्षरों में और नीचे उसका उच्चारण दिखता है। उसके नीचे के चार क्षेत्र उसी चंद्र-स्थिति को ज्योतिष की भाषा में बताते हैं।",
          ko: "결과 화면에는 본명수가 큰 글자로, 그 아래에 읽는 법이 표시됩니다. 그 아래 네 항목은 같은 달의 위치를 조티시의 용어로 바꿔 말한 것입니다.",
        },
        {
          ja: "例えば、出生時の月が恒星黄道の牡羊座5度にあったとします（説明用の例です）。牡羊座0度から13度20分までは最初の区分なので、本命宿は婁宿（ろうしゅく）、対応するナクシャトラはアシュヴィニーです。一区分を四等分した3度20分ずつがパダなので、5度は第2パダ。支配星はケートゥ、ガナはデーヴァ（神）と表示されます。",
          en: "Suppose, purely as an illustration, the Moon was at 5° sidereal Aries at birth. Aries 0° to 13°20′ is the first division, so the mansion is 婁宿 (Rō) and the nakshatra is Ashwini. Each quarter of 3°20′ is a pada, so 5° falls in pada 2. The ruling planet shows as Ketu and the gana as Deva.",
          hi: "उदाहरण के लिए मान लें कि जन्म के समय चंद्रमा निरयण मेष के 5° पर था। मेष 0° से 13°20′ पहला भाग है, इसलिए शुku 婁宿 और नक्षत्र अश्विनी होगा। 3°20′ का हर चौथाई एक पाद है, तो 5° दूसरा पाद है। स्वामी केतु और गण देव दिखेगा।",
          ko: "설명을 위한 예로, 출생 시 달이 항성 황도 양자리 5도에 있었다고 합시다. 양자리 0도~13도 20분은 첫 구획이므로 본명수는 婁宿(루수), 낙샤트라는 아슈위니입니다. 3도 20분씩 나눈 것이 파다이므로 5도는 제2파다, 지배성은 케투, 가나는 데바로 표시됩니다.",
        },
      ],
      bullets: [
        {
          ja: "本命宿：出生時に月があった宿。宿曜で人柄や相性を読むときの出発点です",
          en: "Birth mansion: the mansion the Moon occupied at birth, the starting point for any sukuyō reading",
          hi: "जन्म शुku: जन्म के समय चंद्रमा जिस शुku में था, सुक्युō पठन का आरंभ-बिंदु",
          ko: "본명수: 출생 시 달이 있던 수로, 수쿠요에서 성품과 궁합을 읽는 출발점입니다",
        },
        {
          ja: "対応するナクシャトラ：同じ13度20分の区分のインドでの名前。当サイトのナクシャトラ解説ページでさらに詳しく読めます",
          en: "Corresponding nakshatra: the Indian name of the same 13°20′ division, covered in depth on this site's nakshatra pages",
          hi: "संबंधित नक्षत्र: उसी 13°20′ भाग का भारतीय नाम, जिसे साइट के नक्षत्र पृष्ठों पर विस्तार से पढ़ सकते हैं",
          ko: "대응하는 낙샤트라: 같은 13도 20분 구획의 인도식 이름으로, 사이트의 낙샤트라 해설에서 자세히 볼 수 있습니다",
        },
        {
          ja: "パダ（四分位）：一つの宿をさらに四つに分けたどこに月があるか。宿曜では通常使いませんが、インド占星術では命名や細かな読みに用います",
          en: "Pada: which of the four quarters of the mansion the Moon is in; sukuyō rarely uses it, but Jyotish uses it for naming and finer reading",
          hi: "पाद: चंद्रमा नक्षत्र के चार भागों में से किस भाग में है; सुक्युō में कम, पर ज्योतिष में नामकरण और सूक्ष्म पठन में प्रयुक्त",
          ko: "파다(4분위): 한 수를 넷으로 나눈 것 중 어디에 달이 있는가. 수쿠요에서는 잘 쓰지 않지만 조티시에서는 작명과 세밀한 해석에 씁니다",
        },
        {
          ja: "支配星：その宿を司る惑星。ヴィムショッタリ・ダシャーでは、本命宿の支配星の時期から人生の周期が始まります",
          en: "Ruling planet: the planet that governs the mansion; in Vimshottari dasha, life's sequence of periods begins with this planet",
          hi: "स्वामी ग्रह: नक्षत्र का अधिपति; विंशोत्तरी दशा में जीवन की दशाएँ इसी ग्रह से आरंभ होती हैं",
          ko: "지배성: 그 수를 다스리는 행성. 빔쇼타리 다샤에서는 이 행성의 시기부터 인생의 주기가 시작됩니다",
        },
        {
          ja: "ガナ（性質）：デーヴァ（神）・マヌシャ（人）・ラークシャサ（羅刹）の三分類。善悪ではなく気質の傾向を表し、相性判断の一要素として使われます",
          en: "Gana: the threefold Deva, Manushya and Rakshasa grouping; it describes temperament, not good or evil, and is one factor in compatibility",
          hi: "गण: देव, मनुष्य और राक्षस का त्रिविध वर्गीकरण; यह अच्छा-बुरा नहीं, स्वभाव बताता है और अनुकूलता का एक घटक है",
          ko: "가나(성질): 데바(신)·마누샤(인간)·락샤사(나찰)의 세 분류. 선악이 아니라 기질의 경향을 나타내며 궁합 판단의 한 요소입니다",
        },
      ],
    },
    {
      heading: {
        ja: "西洋占星術の「星座占い」との違い",
        en: "How this differs from Western sun-sign astrology",
        hi: "पश्चिमी सूर्य-राशि ज्योतिष से अंतर",
        ko: "서양 별자리 운세와의 차이",
      },
      body: [
        {
          ja: "雑誌などでおなじみの星座占いは、太陽が十二星座のどこにあったかを見るもので、生まれた日付でほぼ決まります。一方、宿曜とインド占星術の月宿は月を基準にします。月は一日に約13度と速く動くため、同じ誕生日でも年が違えば宿はまったく別になります。",
          en: "Familiar horoscope columns look at which of the twelve signs the Sun was in, which is fixed almost entirely by your birthday. Sukuyō and the nakshatras are based on the Moon instead. The Moon moves about 13° a day, so the same birthday in a different year gives a completely different mansion.",
          hi: "पत्रिकाओं वाला राशिफल देखता है कि सूर्य बारह राशियों में कहाँ था, जो लगभग जन्मदिन से तय होता है। सुक्युō और नक्षत्र चंद्रमा पर आधारित हैं। चंद्रमा प्रतिदिन लगभग 13° चलता है, इसलिए एक ही जन्मदिन पर अलग वर्ष में नक्षत्र बिल्कुल अलग होता है।",
          ko: "잡지 등의 별자리 운세는 태양이 열두 별자리 중 어디에 있었는지를 보며, 거의 생일로 정해집니다. 수쿠요와 낙샤트라는 달을 기준으로 합니다. 달은 하루에 약 13도씩 움직이므로 같은 생일이라도 해가 다르면 수가 전혀 달라집니다.",
        },
        {
          ja: "もう一つの違いは黄道の測り方です。西洋占星術は春分点を起点とする回帰黄道（トロピカル）を使い、インド占星術は恒星を基準とする恒星黄道（サイデリアル）を使います。両者の差は歳差運動によって広がり、現在は約24度です。宿は恒星を目印にした区分なので、恒星黄道で計算するのが本来のかたちです。",
          en: "The other difference is how the zodiac is measured. Western astrology uses the tropical zodiac, anchored to the spring equinox; Jyotish uses the sidereal zodiac, anchored to the stars. Precession has widened the gap between them to about 24° today. The mansions were defined by stars, so the sidereal zodiac is their natural frame.",
          hi: "दूसरा अंतर राशिचक्र मापने का है। पश्चिमी ज्योतिष वसंत विषुव से आरंभ होने वाला सायन राशिचक्र प्रयोग करता है, ज्योतिष तारों पर आधारित निरयण। अयन-चलन से यह अंतर आज लगभग 24° है। नक्षत्र तारों से परिभाषित हैं, इसलिए निरयण ही उनका स्वाभाविक ढाँचा है।",
          ko: "또 하나의 차이는 황도를 재는 방식입니다. 서양 점성술은 춘분점 기준의 회귀 황도를, 조티시는 항성 기준의 항성 황도를 씁니다. 세차 운동으로 그 차이는 현재 약 24도입니다. 수는 별을 표지로 삼은 구획이므로 항성 황도로 계산하는 것이 본래의 모습입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "二十七宿とナクシャトラの対応一覧",
        en: "The 27 mansions and their nakshatras",
        hi: "सत्ताईस शुku और उनके नक्षत्र",
        ko: "27수와 낙샤트라 대응표",
      },
      body: [
        {
          ja: "当ページの計算で使っている対応表です。範囲は恒星黄道（ラヒリ方式）での月の位置を示します。お手元の本命宿がどの星座の何度にあたるのか、他のサイトの結果と見比べる際の参考にしてください。",
          en: "This is the correspondence the calculation on this page uses. The ranges are the Moon's position in the sidereal zodiac (Lahiri). Use it to see where your mansion sits and to compare results from other sites.",
          hi: "यह वही तालिका है जिसका उपयोग इस पृष्ठ की गणना करती है। सीमाएँ निरयण राशिचक्र (लाहिड़ी) में चंद्रमा की स्थिति दर्शाती हैं।",
          ko: "이 페이지의 계산에 쓰는 대응표입니다. 범위는 항성 황도(라히리 방식)에서의 달의 위치를 나타냅니다. 다른 사이트의 결과와 비교할 때 참고해 주세요.",
        },
        {
          ja: "なお、中国の星宿は本来二十八あり、日本の宿曜ではそのうち牛宿（ぎゅうしゅく）を除いた二十七宿を用います。インド占星術でも、アビジットという二十八番目の区分は通常の月宿の計算には含めません。そのため一覧に牛宿は登場しません。",
          en: "Chinese astronomy has twenty-eight lunar lodges; Japanese sukuyō uses twenty-seven, leaving out 牛宿 (Gyū). Jyotish likewise leaves Abhijit, the twenty-eighth division, out of ordinary nakshatra calculation, which is why 牛宿 does not appear in the list.",
          hi: "चीनी खगोल में अट्ठाईस नक्षत्र हैं; जापानी सुक्युō उनमें से 牛宿 को छोड़कर सत्ताईस प्रयोग करता है। ज्योतिष भी सामान्य गणना में अट्ठाईसवें अभिजित को शामिल नहीं करता।",
          ko: "중국의 성수는 본래 28개이며, 일본의 수쿠요는 그중 牛宿(우수)를 뺀 27수를 씁니다. 조티시도 28번째 구획인 아비지트를 통상의 계산에 넣지 않으므로 표에 牛宿는 없습니다.",
        },
      ],
      bullets: [
        {
          ja: "1. 婁宿（ろうしゅく）— アシュヴィニー：牡羊座0°00′〜13°20′",
          en: "1. 婁宿 — Ashwini: Aries 0°00′–13°20′",
          hi: "1. 婁宿 — अश्विनी: मेष 0°00′–13°20′",
          ko: "1. 婁宿(루수) — Ashwini: 양자리 0°00′–13°20′",
        },
        {
          ja: "2. 胃宿（いしゅく）— バラニー：牡羊座13°20′〜26°40′",
          en: "2. 胃宿 — Bharani: Aries 13°20′–26°40′",
          hi: "2. 胃宿 — भरणी: मेष 13°20′–26°40′",
          ko: "2. 胃宿(위수) — Bharani: 양자리 13°20′–26°40′",
        },
        {
          ja: "3. 昴宿（ぼうしゅく）— クリッティカー：牡羊座26°40′〜牡牛座10°00′",
          en: "3. 昴宿 — Krittika: Aries 26°40′ – Taurus 10°00′",
          hi: "3. 昴宿 — कृत्तिका: मेष 26°40′ – वृषभ 10°00′",
          ko: "3. 昴宿(묘수) — Krittika: 양자리 26°40′ – 황소자리 10°00′",
        },
        {
          ja: "4. 畢宿（ひつしゅく）— ローヒニー：牡牛座10°00′〜23°20′",
          en: "4. 畢宿 — Rohini: Taurus 10°00′–23°20′",
          hi: "4. 畢宿 — रोहिणी: वृषभ 10°00′–23°20′",
          ko: "4. 畢宿(필수) — Rohini: 황소자리 10°00′–23°20′",
        },
        {
          ja: "5. 觜宿（ししゅく）— ムリガシラー：牡牛座23°20′〜双子座6°40′",
          en: "5. 觜宿 — Mrigashira: Taurus 23°20′ – Gemini 6°40′",
          hi: "5. 觜宿 — मृगशिरा: वृषभ 23°20′ – मिथुन 6°40′",
          ko: "5. 觜宿(자수) — Mrigashira: 황소자리 23°20′ – 쌍둥이자리 6°40′",
        },
        {
          ja: "6. 参宿（しんしゅく）— アールドラー：双子座6°40′〜20°00′",
          en: "6. 参宿 — Ardra: Gemini 6°40′–20°00′",
          hi: "6. 参宿 — आर्द्रा: मिथुन 6°40′–20°00′",
          ko: "6. 参宿(삼수) — Ardra: 쌍둥이자리 6°40′–20°00′",
        },
        {
          ja: "7. 井宿（せいしゅく）— プナルヴァス：双子座20°00′〜蟹座3°20′",
          en: "7. 井宿 — Punarvasu: Gemini 20°00′ – Cancer 3°20′",
          hi: "7. 井宿 — पुनर्वसु: मिथुन 20°00′ – कर्क 3°20′",
          ko: "7. 井宿(정수) — Punarvasu: 쌍둥이자리 20°00′ – 게자리 3°20′",
        },
        {
          ja: "8. 鬼宿（きしゅく）— プシュヤ：蟹座3°20′〜16°40′",
          en: "8. 鬼宿 — Pushya: Cancer 3°20′–16°40′",
          hi: "8. 鬼宿 — पुष्य: कर्क 3°20′–16°40′",
          ko: "8. 鬼宿(귀수) — Pushya: 게자리 3°20′–16°40′",
        },
        {
          ja: "9. 柳宿（りゅうしゅく）— アーシュレーシャー：蟹座16°40′〜30°00′",
          en: "9. 柳宿 — Ashlesha: Cancer 16°40′–30°00′",
          hi: "9. 柳宿 — आश्लेषा: कर्क 16°40′–30°00′",
          ko: "9. 柳宿(류수) — Ashlesha: 게자리 16°40′–30°00′",
        },
        {
          ja: "10. 星宿（せいしゅく）— マガー：獅子座0°00′〜13°20′",
          en: "10. 星宿 — Magha: Leo 0°00′–13°20′",
          hi: "10. 星宿 — मघा: सिंह 0°00′–13°20′",
          ko: "10. 星宿(성수) — Magha: 사자자리 0°00′–13°20′",
        },
        {
          ja: "11. 張宿（ちょうしゅく）— プールヴァ・パールグニー：獅子座13°20′〜26°40′",
          en: "11. 張宿 — Purva Phalguni: Leo 13°20′–26°40′",
          hi: "11. 張宿 — पूर्व फाल्गुनी: सिंह 13°20′–26°40′",
          ko: "11. 張宿(장수) — Purva Phalguni: 사자자리 13°20′–26°40′",
        },
        {
          ja: "12. 翼宿（よくしゅく）— ウッタラ・パールグニー：獅子座26°40′〜乙女座10°00′",
          en: "12. 翼宿 — Uttara Phalguni: Leo 26°40′ – Virgo 10°00′",
          hi: "12. 翼宿 — उत्तर फाल्गुनी: सिंह 26°40′ – कन्या 10°00′",
          ko: "12. 翼宿(익수) — Uttara Phalguni: 사자자리 26°40′ – 처녀자리 10°00′",
        },
        {
          ja: "13. 軫宿（しんしゅく）— ハスタ：乙女座10°00′〜23°20′",
          en: "13. 軫宿 — Hasta: Virgo 10°00′–23°20′",
          hi: "13. 軫宿 — हस्त: कन्या 10°00′–23°20′",
          ko: "13. 軫宿(진수) — Hasta: 처녀자리 10°00′–23°20′",
        },
        {
          ja: "14. 角宿（かくしゅく）— チトラー：乙女座23°20′〜天秤座6°40′",
          en: "14. 角宿 — Chitra: Virgo 23°20′ – Libra 6°40′",
          hi: "14. 角宿 — चित्रा: कन्या 23°20′ – तुला 6°40′",
          ko: "14. 角宿(각수) — Chitra: 처녀자리 23°20′ – 천칭자리 6°40′",
        },
        {
          ja: "15. 亢宿（こうしゅく）— スヴァーティー：天秤座6°40′〜20°00′",
          en: "15. 亢宿 — Swati: Libra 6°40′–20°00′",
          hi: "15. 亢宿 — स्वाति: तुला 6°40′–20°00′",
          ko: "15. 亢宿(항수) — Swati: 천칭자리 6°40′–20°00′",
        },
        {
          ja: "16. 氐宿（ていしゅく）— ヴィシャーカー：天秤座20°00′〜蠍座3°20′",
          en: "16. 氐宿 — Vishakha: Libra 20°00′ – Scorpio 3°20′",
          hi: "16. 氐宿 — विशाखा: तुला 20°00′ – वृश्चिक 3°20′",
          ko: "16. 氐宿(저수) — Vishakha: 천칭자리 20°00′ – 전갈자리 3°20′",
        },
        {
          ja: "17. 房宿（ぼうしゅく）— アヌラーダー：蠍座3°20′〜16°40′",
          en: "17. 房宿 — Anuradha: Scorpio 3°20′–16°40′",
          hi: "17. 房宿 — अनुराधा: वृश्चिक 3°20′–16°40′",
          ko: "17. 房宿(방수) — Anuradha: 전갈자리 3°20′–16°40′",
        },
        {
          ja: "18. 心宿（しんしゅく）— ジェーシュター：蠍座16°40′〜30°00′",
          en: "18. 心宿 — Jyeshtha: Scorpio 16°40′–30°00′",
          hi: "18. 心宿 — ज्येष्ठा: वृश्चिक 16°40′–30°00′",
          ko: "18. 心宿(심수) — Jyeshtha: 전갈자리 16°40′–30°00′",
        },
        {
          ja: "19. 尾宿（びしゅく）— ムーラ：射手座0°00′〜13°20′",
          en: "19. 尾宿 — Mula: Sagittarius 0°00′–13°20′",
          hi: "19. 尾宿 — मूल: धनु 0°00′–13°20′",
          ko: "19. 尾宿(미수) — Mula: 궁수자리 0°00′–13°20′",
        },
        {
          ja: "20. 箕宿（きしゅく）— プールヴァ・アーシャーダー：射手座13°20′〜26°40′",
          en: "20. 箕宿 — Purva Ashadha: Sagittarius 13°20′–26°40′",
          hi: "20. 箕宿 — पूर्वाषाढ़ा: धनु 13°20′–26°40′",
          ko: "20. 箕宿(기수) — Purva Ashadha: 궁수자리 13°20′–26°40′",
        },
        {
          ja: "21. 斗宿（としゅく）— ウッタラ・アーシャーダー：射手座26°40′〜山羊座10°00′",
          en: "21. 斗宿 — Uttara Ashadha: Sagittarius 26°40′ – Capricorn 10°00′",
          hi: "21. 斗宿 — उत्तराषाढ़ा: धनु 26°40′ – मकर 10°00′",
          ko: "21. 斗宿(두수) — Uttara Ashadha: 궁수자리 26°40′ – 염소자리 10°00′",
        },
        {
          ja: "22. 女宿（じょしゅく）— シュラヴァナ：山羊座10°00′〜23°20′",
          en: "22. 女宿 — Shravana: Capricorn 10°00′–23°20′",
          hi: "22. 女宿 — श्रवण: मकर 10°00′–23°20′",
          ko: "22. 女宿(여수) — Shravana: 염소자리 10°00′–23°20′",
        },
        {
          ja: "23. 虚宿（きょしゅく）— ダニシュター：山羊座23°20′〜水瓶座6°40′",
          en: "23. 虚宿 — Dhanishta: Capricorn 23°20′ – Aquarius 6°40′",
          hi: "23. 虚宿 — धनिष्ठा: मकर 23°20′ – कुंभ 6°40′",
          ko: "23. 虚宿(허수) — Dhanishta: 염소자리 23°20′ – 물병자리 6°40′",
        },
        {
          ja: "24. 危宿（きしゅく）— シャタビシャー：水瓶座6°40′〜20°00′",
          en: "24. 危宿 — Shatabhisha: Aquarius 6°40′–20°00′",
          hi: "24. 危宿 — शतभिषा: कुंभ 6°40′–20°00′",
          ko: "24. 危宿(위수) — Shatabhisha: 물병자리 6°40′–20°00′",
        },
        {
          ja: "25. 室宿（しつしゅく）— プールヴァ・バードラパダー：水瓶座20°00′〜魚座3°20′",
          en: "25. 室宿 — Purva Bhadrapada: Aquarius 20°00′ – Pisces 3°20′",
          hi: "25. 室宿 — पूर्व भाद्रपद: कुंभ 20°00′ – मीन 3°20′",
          ko: "25. 室宿(실수) — Purva Bhadrapada: 물병자리 20°00′ – 물고기자리 3°20′",
        },
        {
          ja: "26. 壁宿（へきしゅく）— ウッタラ・バードラパダー：魚座3°20′〜16°40′",
          en: "26. 壁宿 — Uttara Bhadrapada: Pisces 3°20′–16°40′",
          hi: "26. 壁宿 — उत्तर भाद्रपद: मीन 3°20′–16°40′",
          ko: "26. 壁宿(벽수) — Uttara Bhadrapada: 물고기자리 3°20′–16°40′",
        },
        {
          ja: "27. 奎宿（けいしゅく）— レーヴァティー：魚座16°40′〜30°00′",
          en: "27. 奎宿 — Revati: Pisces 16°40′–30°00′",
          hi: "27. 奎宿 — रेवती: मीन 16°40′–30°00′",
          ko: "27. 奎宿(규수) — Revati: 물고기자리 16°40′–30°00′",
        },
      ],
    },
    {
      heading: {
        ja: "宿曜についてのよくある誤解",
        en: "Common misconceptions about sukuyō",
        hi: "सुक्युō के बारे में आम भ्रांतियाँ",
        ko: "수쿠요에 관한 흔한 오해",
      },
      body: [
        {
          ja: "宿曜は歴史が長いぶん、説明のされ方もさまざまです。結果を受け取る前に知っておくと安心な点をまとめました。",
          en: "Because sukuyō has a long history, it is explained in many different ways. Here are points worth knowing before you read your result.",
          hi: "सुक्युō का इतिहास लंबा है, इसलिए इसे कई तरह से समझाया जाता है। परिणाम पढ़ने से पहले ये बातें जानना उपयोगी है।",
          ko: "수쿠요는 역사가 긴 만큼 설명 방식도 다양합니다. 결과를 읽기 전에 알아 두면 좋은 점을 정리했습니다.",
        },
      ],
      bullets: [
        {
          ja: "誤解：宿曜は日本独自の占い — 実際は、インドの月宿が中国を経て伝わり、日本で解釈が発展した体系です",
          en: "Myth: sukuyō is purely Japanese. In fact, the Indian lunar mansions came via China and the interpretation developed in Japan",
          hi: "भ्रांति: सुक्युō विशुद्ध जापानी है। वास्तव में भारतीय नक्षत्र चीन होकर आए और व्याख्या जापान में विकसित हुई",
          ko: "오해: 수쿠요는 일본 고유의 점술이다 — 실제로는 인도의 월수가 중국을 거쳐 전해지고 일본에서 해석이 발전한 체계입니다",
        },
        {
          ja: "誤解：生年月日だけで必ず決まる — 宿の変わり目の日は、出生時刻によって本命宿が変わります",
          en: "Myth: the date alone always decides it. On a boundary day the birth time changes the mansion",
          hi: "भ्रांति: केवल तिथि से हमेशा तय होता है। सीमा-दिवस पर जन्म समय से नक्षत्र बदल जाता है",
          ko: "오해: 생년월일만으로 반드시 정해진다 — 수가 바뀌는 날에는 출생 시각에 따라 본명수가 달라집니다",
        },
        {
          ja: "誤解：ラークシャサ（羅刹）のガナは悪い性格 — ガナは気質の分類であり、意志の強さや独立心として表れることもあります",
          en: "Myth: a Rakshasa gana means a bad character. Gana classifies temperament and can show up as strong will or independence",
          hi: "भ्रांति: राक्षस गण का अर्थ बुरा स्वभाव है। गण स्वभाव का वर्गीकरण है, जो दृढ़ इच्छा या स्वतंत्रता के रूप में भी दिखता है",
          ko: "오해: 락샤사(나찰) 가나는 나쁜 성격이다 — 가나는 기질의 분류이며 강한 의지나 독립심으로 나타나기도 합니다",
        },
        {
          ja: "誤解：相性の悪い宿の人とは付き合えない — 宿どうしの関係は傾向の一つにすぎず、関係の良し悪しを決めるものではありません",
          en: "Myth: you cannot get along with someone whose mansion is a poor match. Mansion relationships describe one tendency and do not decide a relationship",
          hi: "भ्रांति: कम अनुकूल नक्षत्र वाले व्यक्ति से निभ नहीं सकती। नक्षत्र-संबंध केवल एक प्रवृत्ति है, संबंध का निर्णय नहीं",
          ko: "오해: 궁합이 나쁜 수의 사람과는 잘 지낼 수 없다 — 수 사이의 관계는 하나의 경향일 뿐 관계의 좋고 나쁨을 정하지 않습니다",
        },
      ],
    },
    {
      heading: {
        ja: "ご利用にあたって",
        en: "A note before you use the result",
        hi: "परिणाम उपयोग करने से पहले",
        ko: "이용 시 안내",
      },
      body: [
        {
          ja: "宿曜やインド占星術は、自分の傾向を振り返ったり、人との関わり方を考えたりするきっかけとしてお楽しみください。本ページの結果は、医療・法律・金融に関する助言ではありません。健康やお金、契約など大切な判断は、必ず専門家にご相談ください。",
          en: "Please enjoy sukuyō and Jyotish as a prompt for reflecting on your tendencies and how you relate to others. The result on this page is not medical, legal or financial advice; for decisions about health, money or contracts, please consult a qualified professional.",
          hi: "सुक्युō और ज्योतिष को अपनी प्रवृत्तियों और संबंधों पर विचार करने के माध्यम के रूप में लें। यह परिणाम चिकित्सा, कानूनी या वित्तीय सलाह नहीं है; ऐसे निर्णयों के लिए विशेषज्ञ से परामर्श करें।",
          ko: "수쿠요와 조티시는 자신의 경향을 돌아보고 사람과의 관계를 생각해 보는 계기로 즐겨 주세요. 이 페이지의 결과는 의료·법률·금융 조언이 아니며, 건강·돈·계약 등 중요한 판단은 반드시 전문가와 상담해 주세요.",
        },
        {
          ja: "どの宿にも長所と課題の両面があり、「悪い宿」というものはありません。結果に不安を感じる必要はまったくありません。",
          en: "Every mansion has both strengths and challenges; there is no such thing as a bad mansion, and nothing in the result is cause for worry.",
          hi: "हर नक्षत्र में गुण और चुनौतियाँ दोनों हैं; कोई 'बुरा नक्षत्र' नहीं होता, और परिणाम से चिंतित होने की आवश्यकता नहीं।",
          ko: "어느 수에나 장점과 과제가 함께 있으며 '나쁜 수'는 없습니다. 결과 때문에 불안해할 필요는 전혀 없습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "関連ページ",
        en: "Related pages",
        hi: "संबंधित पृष्ठ",
        ko: "관련 페이지",
      },
      body: [
        {
          ja: "本命宿が分かったら、対応するナクシャトラの解説や、月を軸にした他のツールもあわせてご覧ください。",
          en: "Once you know your mansion, explore its nakshatra and the other Moon-based tools.",
          hi: "अपना शुku जानने के बाद उसके नक्षत्र और चंद्रमा पर आधारित अन्य टूल भी देखें।",
          ko: "본명수를 알았다면 대응하는 낙샤트라 해설과 달을 축으로 한 다른 도구도 함께 보세요.",
        },
      ],
      links: [
        {
          href: "/nakshatras",
          label: { ja: "二十七ナクシャトラ解説", en: "The 27 nakshatras", hi: "27 नक्षत्र", ko: "27 낙샤트라 해설" },
        },
        {
          href: "/tools/nakshatra-finder",
          label: { ja: "ナクシャトラ（月宿）を調べる", en: "Nakshatra finder", hi: "नक्षत्र खोजक", ko: "낙샤트라 찾기" },
        },
        {
          href: "/tools/moon-sign",
          label: { ja: "月星座（ラーシ）を調べる", en: "Moon sign calculator", hi: "चंद्र राशि गणक", ko: "달 별자리 찾기" },
        },
        {
          href: "/tools/compatibility",
          label: { ja: "インド占星術 相性診断", en: "Vedic compatibility", hi: "वैदिक अनुकूलता", ko: "베다 궁합" },
        },
        {
          href: "/tools/dasha-calculator",
          label: { ja: "ダシャー（運気の周期）を調べる", en: "Dasha calculator", hi: "दशा गणक", ko: "다샤 계산기" },
        },
      ],
    },
  ],
};
