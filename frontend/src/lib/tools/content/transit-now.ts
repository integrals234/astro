import type { ToolLongForm } from "./types";

/**
 * Long-form body for /tools/transit-now.
 *
 * Written Japanese-first, matching sukuyo.ts and saturn-return.ts. The panel
 * renders the Gochar view of ChartFigure: natal planets (terracotta) and the
 * nine transiting grahas (moss) placed in whole-sign houses counted from the
 * natal Lagna sign. Transits are computed for noon of today's date in the
 * birth place's time zone. The Lagna / Chandra base buttons and the transit
 * date picker work on this page too (as on /chart); the
 * transit date. Saturn alone is covered in depth by /tools/saturn-return, so
 * this page covers all nine grahas, Lagna- vs Moon-based counting, and how
 * transits combine with the running Vimshottari dasha.
 */
export const transitNowLongForm: ToolLongForm = {
  slug: "transit-now",
  sections: [
    {
      heading: {
        ja: "使い方：入力するものと注意点",
        en: "How to use it: what to enter and what to watch for",
        hi: "उपयोग कैसे करें: क्या दर्ज करें और किन बातों का ध्यान रखें",
        ko: "사용 방법: 입력할 것과 주의할 점",
      },
      body: [
        {
          ja: "生年月日・出生時刻・出生地を入力すると、あなたの出生図と、今日の九つの惑星（太陽・月・火星・水星・木星・金星・土星・ラーフ・ケートゥ）の位置が一枚のチャートに重ねて表示されます。トランジットの位置は、今日の日付の正午を基準に計算しています。",
          en: "Enter your date, time and place of birth. Your birth chart and today's positions of the nine grahas (Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu and Ketu) are drawn together on a single chart. Transit positions are calculated for noon on today's date.",
          hi: "अपनी जन्म तिथि, जन्म समय और जन्म स्थान दर्ज करें। आपकी जन्म कुंडली और आज के नौ ग्रहों (सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु, केतु) की स्थितियाँ एक ही कुंडली पर साथ दिखाई देती हैं। गोचर की स्थितियाँ आज की तिथि के दोपहर 12 बजे के अनुसार गणना की जाती हैं।",
          ko: "생년월일, 출생 시각, 출생지를 입력하면 당신의 출생 차트와 오늘 아홉 행성(태양·달·화성·수성·목성·금성·토성·라후·케투)의 위치가 한 장의 차트에 겹쳐 표시됩니다. 트랜짓 위치는 오늘 날짜의 정오를 기준으로 계산합니다.",
        },
        {
          ja: "このページのハウス（室）はラグナ（上昇宮）から数えます。ラグナはおよそ2時間ごとに次の星座へ移るため、出生時刻が1〜2時間ずれると、すべての惑星のハウス番号が一つずれることがあります。時刻が不明な方は、月星座を基準にした読み方（後述）をあわせて使うと安心です。",
          en: "Houses on this page are counted from the Lagna (ascendant). Because the Lagna moves into the next sign roughly every two hours, a birth time that is off by an hour or two can shift every planet's house number by one. If your birth time is unknown, also use the Moon-based reading described below.",
          hi: "इस पृष्ठ पर भाव लग्न से गिने जाते हैं। लग्न लगभग हर दो घंटे में अगली राशि में चला जाता है, इसलिए जन्म समय में एक-दो घंटे की गलती से हर ग्रह का भाव एक आगे-पीछे हो सकता है। जन्म समय ज्ञात न हो तो नीचे बताई गई चंद्र-आधारित पद्धति भी साथ में अपनाएँ।",
          ko: "이 페이지의 하우스는 라그나(상승궁)부터 셉니다. 라그나는 약 2시간마다 다음 별자리로 넘어가므로, 출생 시각이 1~2시간 어긋나면 모든 행성의 하우스 번호가 하나씩 밀릴 수 있습니다. 출생 시각을 모른다면 아래에서 설명하는 달 기준 읽기를 함께 활용하세요.",
        },
      ],
      bullets: [
        {
          ja: "出生地は市区町村まで正しく選んでください。時差（タイムゾーン）は出生地から自動で判断されるため、海外生まれの方も現地の時刻のまま入力します。",
          en: "Choose your birthplace accurately down to the city. The time zone is derived from the place, so if you were born abroad, enter the local clock time there.",
          hi: "जन्म स्थान शहर तक सही चुनें। समय क्षेत्र स्थान से तय होता है, इसलिए विदेश में जन्मे हों तो वहाँ का स्थानीय समय ही दर्ज करें।",
          ko: "출생지는 시·구 단위까지 정확히 선택하세요. 시간대는 출생지로부터 자동 판단되므로, 해외에서 태어났다면 현지 시각 그대로 입력합니다.",
        },
        {
          ja: "当サイトはインド占星術の恒星黄道（ラヒリ・アヤナムシャ、現在約24度）で計算します。そのため「今、土星は○○座」といった星座が、西洋占星術の暦より一つ手前になることがよくあります。",
          en: "This site uses the Jyotish sidereal zodiac (Lahiri ayanamsa, currently about 24°), so the sign a planet is 'in' today is often one sign earlier than in a Western ephemeris.",
          hi: "यह साइट ज्योतिष की निरयन राशि-चक्र (लाहिड़ी अयनांश, वर्तमान में लगभग 24°) से गणना करती है, इसलिए आज कोई ग्रह जिस राशि में दिखता है, वह पश्चिमी पंचांग से अक्सर एक राशि पीछे होती है।",
          ko: "이 사이트는 인도 점성술의 항성 황도(라히리 아야남샤, 현재 약 24도)로 계산하므로, 오늘 어떤 행성이 있는 별자리가 서양 천문력보다 한 별자리 앞쪽인 경우가 많습니다.",
        },
        {
          ja: "月は約2日半で星座を移ります。月の位置は日によって大きく変わるので、別の日の配置を見たいときはホロスコープ作成ページでトランジットの基準日を変えて確認してください。",
          en: "The Moon changes sign about every two and a half days, so its position changes quickly. To see the sky on another date, change the transit date on the birth chart page.",
          hi: "चंद्रमा लगभग ढाई दिन में राशि बदलता है, इसलिए उसकी स्थिति जल्दी बदलती है। किसी अन्य तिथि का गोचर देखने के लिए कुंडली पृष्ठ पर गोचर तिथि बदलें।",
          ko: "달은 약 2일 반마다 별자리를 옮기므로 위치가 빠르게 바뀝니다. 다른 날짜의 하늘을 보려면 차트 작성 페이지에서 트랜짓 기준일을 바꿔 확인하세요.",
        },
      ],
    },
    {
      heading: {
        ja: "結果の読み方：表示される用語",
        en: "Reading the result: the terms on screen",
        hi: "परिणाम कैसे पढ़ें: स्क्रीन पर दिखने वाले शब्द",
        ko: "결과 읽는 법: 화면에 표시되는 용어",
      },
      body: [
        {
          ja: "チャートには二種類の惑星が並びます。凡例の「ネイタルチャート（ラグナ）」の色が生まれたときの惑星、「トランジット」の色が今日の惑星です。同じ区画に両方があれば、今の惑星が出生時の惑星の上を通過していることを意味します。",
          en: "The chart shows two sets of planets. The colour labelled 'Natal Chart (Lagna)' in the legend marks your planets at birth, and the colour labelled 'Transit' marks today's planets. When both appear in the same box, a planet of today is passing over one of your natal planets.",
          hi: "कुंडली में ग्रहों के दो समूह दिखते हैं। संकेत-सूची में 'जन्म कुण्डली (लग्न)' वाला रंग जन्म के ग्रहों का है और 'गोचर' वाला रंग आज के ग्रहों का। यदि दोनों एक ही खाने में हों, तो आज का ग्रह आपके किसी जन्म ग्रह के ऊपर से गुज़र रहा है।",
          ko: "차트에는 두 종류의 행성이 표시됩니다. 범례에서 '출생 차트(라그나)' 색이 태어날 때의 행성, '트랜짓' 색이 오늘의 행성입니다. 같은 칸에 둘 다 있으면 지금의 행성이 출생 행성 위를 지나고 있다는 뜻입니다.",
        },
        {
          ja: "例えば、ラグナが獅子座で、今日の木星が射手座にあるとします。獅子座を1室として数えると射手座は5室なので、「木星が5室をトランジット中」と読みます。5室は子ども・創作・学びの室とされるため、そうしたテーマに目が向きやすい時期、と解釈するのが基本の流れです（あくまで説明用の例です）。",
          en: "For example, suppose your Lagna is Leo and Jupiter is in Sagittarius today. Counting Leo as the 1st house, Sagittarius is the 5th, so you read it as 'Jupiter transiting the 5th house'. The 5th is associated with children, creativity and learning, so the basic reading is a period when those themes draw your attention. (This is an illustrative example only.)",
          hi: "उदाहरण के लिए, मान लीजिए आपका लग्न सिंह है और आज गुरु धनु में है। सिंह को पहला भाव मानकर गिनें तो धनु पाँचवाँ भाव है, अतः इसे 'गुरु का पंचम भाव में गोचर' पढ़ा जाता है। पंचम भाव संतान, रचनात्मकता और अध्ययन से जुड़ा है, इसलिए मूल व्याख्या यह है कि इन विषयों पर ध्यान जाने का समय है। (यह केवल समझाने के लिए उदाहरण है।)",
          ko: "예를 들어 라그나가 사자자리이고 오늘 목성이 사수자리에 있다고 합시다. 사자자리를 1하우스로 세면 사수자리는 5하우스이므로 '목성이 5하우스를 트랜짓 중'이라고 읽습니다. 5하우스는 자녀·창작·배움의 하우스로 여겨지므로, 그런 주제에 관심이 가기 쉬운 시기로 해석하는 것이 기본 흐름입니다(설명을 위한 예시일 뿐입니다).",
        },
      ],
      bullets: [
        {
          ja: "ラグナ基準：出生時のラグナの星座を1室とし、そこから星座単位で数えたハウスにトランジット惑星を配置した表示です。このページは初めにこの基準で表示します。",
          en: "Lagna base: the sign of your natal Lagna is the 1st house, and transiting planets are placed in houses counted sign by sign from there. This page opens on this base.",
          hi: "लग्न आधार: जन्म लग्न की राशि को पहला भाव मानकर, वहाँ से राशि-दर-राशि गिने गए भावों में गोचर ग्रह रखे जाते हैं। यह पृष्ठ आरंभ में इसी आधार पर दिखाता है।",
          ko: "라그나 기준: 출생 라그나의 별자리를 1하우스로 하고, 거기서 별자리 단위로 센 하우스에 트랜짓 행성을 배치한 표시입니다. 이 페이지는 처음에 이 기준으로 표시합니다.",
        },
        {
          ja: "チャンドラ基準：出生時の月の星座を1室として数える方法です。インドの伝統的なゴーチャラ（運行）の判断はこちらが中心で、チャート上の「チャンドラ基準」ボタンで切り替えられます。",
          en: "Chandra (Moon) base: counting from your natal Moon sign as the 1st house. Traditional Indian gochara judgement is centred on this method, and you can switch to it with the Chandra base button above the chart.",
          hi: "चंद्र आधार: जन्म चंद्र राशि को पहला भाव मानकर गिनना। भारतीय पारंपरिक गोचर-फल मुख्यतः इसी पद्धति पर आधारित है, और चार्ट के ऊपर “चंद्र आधार” बटन से इसे चुना जा सकता है।",
          ko: "찬드라(달) 기준: 출생 달의 별자리를 1하우스로 세는 방법입니다. 인도의 전통적인 고차라 판단은 이 방식이 중심이며, 차트 위의 ‘찬드라 기준’ 버튼으로 전환할 수 있습니다.",
        },
        {
          ja: "度数：各惑星の横の数字は、その星座の中で何度にあるか（0〜29度）を示します。同じ区画内の惑星同士は、度数が近いほど重なりが強いと読みます。",
          en: "Degree: the number beside each planet shows how far into its sign it is (0–29°). Planets sharing a box are read as more closely linked the nearer their degrees are.",
          hi: "अंश: हर ग्रह के पास की संख्या बताती है कि वह अपनी राशि में कितने अंश (0–29°) पर है। एक ही खाने के ग्रहों के अंश जितने पास हों, संबंध उतना घनिष्ठ माना जाता है।",
          ko: "도수: 각 행성 옆의 숫자는 그 별자리 안에서 몇 도(0~29도)에 있는지를 나타냅니다. 같은 칸의 행성끼리는 도수가 가까울수록 겹침이 강하다고 읽습니다.",
        },
        {
          ja: "逆行：地球から見て惑星が後ろ向きに進んで見える状態です。ラーフとケートゥは常に逆行で運行するため、いつも逆行として表示されます。",
          en: "Retrograde: when a planet appears to move backwards as seen from Earth. Rahu and Ketu always move retrograde, so they are always shown as retrograde.",
          hi: "वक्री: जब पृथ्वी से देखने पर ग्रह उल्टी दिशा में चलता प्रतीत होता है। राहु और केतु सदा वक्री गति से चलते हैं, इसलिए वे हमेशा वक्री दिखाए जाते हैं।",
          ko: "역행: 지구에서 볼 때 행성이 뒤로 가는 것처럼 보이는 상태입니다. 라후와 케투는 항상 역행으로 움직이므로 늘 역행으로 표시됩니다.",
        },
        {
          ja: "ASC：出生時のアセンダント（ラグナ）の位置です。トランジットのハウスは、すべてこの星座を起点に数えています。",
          en: "ASC: your natal ascendant (Lagna). All transit houses are counted from this sign.",
          hi: "ASC (ल): जन्म का लग्न। सभी गोचर भाव इसी राशि से गिने जाते हैं।",
          ko: "ASC: 출생 시의 어센던트(라그나) 위치입니다. 트랜짓 하우스는 모두 이 별자리를 기점으로 셉니다.",
        },
      ],
    },
    {
      heading: {
        ja: "ラグナから読むか、月から読むか",
        en: "Reading from the Lagna or from the Moon",
        hi: "लग्न से पढ़ें या चंद्रमा से",
        ko: "라그나에서 읽을까, 달에서 읽을까",
      },
      body: [
        {
          ja: "ラグナ基準は「人生のどの分野（仕事・家庭・人間関係など）に動きが出やすいか」を見るのに向いています。一方、月は心や日々の感じ方を表すため、月基準は「その時期を自分がどう感じやすいか」を見るのに向いています。インドではゴーチャラの吉凶を月から判断するのが古典的なやり方です。",
          en: "The Lagna base suits the question 'which area of life — work, home, relationships — is likely to see movement?' The Moon represents the mind and how you experience each day, so the Moon base suits 'how am I likely to feel about this period?' In India, judging the quality of transits from the Moon is the classical approach.",
          hi: "लग्न आधार यह देखने के लिए उपयुक्त है कि जीवन के किस क्षेत्र — कार्य, घर, संबंध — में हलचल होने की संभावना है। चंद्रमा मन और दैनिक अनुभूति का प्रतीक है, इसलिए चंद्र आधार यह देखने के लिए उपयुक्त है कि आप उस समय को कैसे अनुभव करेंगे। भारत में गोचर के शुभ-अशुभ का निर्णय चंद्रमा से करना शास्त्रीय पद्धति है।",
          ko: "라그나 기준은 '삶의 어느 분야(일·가정·인간관계 등)에 움직임이 생기기 쉬운가'를 보는 데 적합합니다. 한편 달은 마음과 일상의 감각을 나타내므로, 달 기준은 '그 시기를 내가 어떻게 느끼기 쉬운가'를 보는 데 적합합니다. 인도에서는 고차라의 길흉을 달에서 판단하는 것이 고전적인 방식입니다.",
        },
        {
          ja: "古典では、月から数えて木星が2・5・7・9・11室を、土星・火星・ラーフ・ケートゥが3・6・11室を通るときが好ましいとされます。ただしこれは目安の一つで、実際の鑑定では出生図での惑星の強さや、後述のダシャーと合わせて判断します。両方の基準で同じ傾向が出ていれば、そのテーマはより確かだと考えられます。",
          en: "Classical texts consider Jupiter favourable when it transits the 2nd, 5th, 7th, 9th or 11th from the Moon, and Saturn, Mars, Rahu and Ketu favourable in the 3rd, 6th and 11th. This is only one guideline; a real reading weighs it against the planet's strength in the birth chart and the running dasha. When both bases point the same way, that theme is considered more reliable.",
          hi: "शास्त्रों में चंद्रमा से गुरु का 2, 5, 7, 9, 11वें भाव में और शनि, मंगल, राहु, केतु का 3, 6, 11वें भाव में गोचर शुभ माना गया है। यह केवल एक संकेत है; वास्तविक फलादेश में जन्म कुंडली में ग्रह के बल और चल रही दशा के साथ इसे तौला जाता है। दोनों आधार एक ही दिशा दिखाएँ तो वह विषय अधिक विश्वसनीय माना जाता है।",
          ko: "고전에서는 달로부터 세어 목성이 2·5·7·9·11하우스를, 토성·화성·라후·케투가 3·6·11하우스를 지날 때 좋다고 봅니다. 다만 이는 하나의 기준일 뿐이며, 실제 감정에서는 출생 차트에서 행성의 힘과 뒤에 설명할 다샤를 함께 고려합니다. 두 기준에서 같은 경향이 나오면 그 주제는 더 확실하다고 봅니다.",
        },
      ],
    },
    {
      heading: {
        ja: "惑星ごとの速さと、トランジットの「長さ」",
        en: "Each planet's speed and how long its transit lasts",
        hi: "हर ग्रह की गति और गोचर की अवधि",
        ko: "행성별 속도와 트랜짓의 '길이'",
      },
      body: [
        {
          ja: "トランジットは、どの惑星かによって影響が続く長さがまったく違います。一つの星座に滞在するおおよその期間を知っておくと、「今日だけの話」と「数年がかりのテーマ」を区別できます。",
          en: "How long a transit's influence lasts depends entirely on the planet. Knowing roughly how long each one stays in a sign lets you tell 'just today' apart from 'a theme that runs for years'.",
          hi: "गोचर का प्रभाव कितने समय रहता है, यह पूरी तरह ग्रह पर निर्भर है। हर ग्रह एक राशि में लगभग कितना समय रहता है, यह जानने से 'सिर्फ़ आज की बात' और 'वर्षों चलने वाले विषय' में भेद किया जा सकता है।",
          ko: "트랜짓의 영향이 이어지는 기간은 행성에 따라 전혀 다릅니다. 한 별자리에 머무는 대략적인 기간을 알면 '오늘만의 이야기'와 '몇 년에 걸친 주제'를 구별할 수 있습니다.",
        },
      ],
      bullets: [
        {
          ja: "月：約2日半。その日の気分や体調の波を見る程度に使います。",
          en: "Moon: about two and a half days — useful only for the mood or energy of the day.",
          hi: "चंद्र: लगभग ढाई दिन — केवल दिन के मन या ऊर्जा को देखने के लिए।",
          ko: "달: 약 2일 반. 그날의 기분이나 컨디션 정도를 보는 데 씁니다.",
        },
        {
          ja: "太陽・水星・金星：おおむね1か月前後（水星・金星は逆行で長くなることがあります）。数週間単位の関心事を示します。",
          en: "Sun, Mercury, Venus: roughly a month each (Mercury and Venus can stay longer when retrograde) — concerns on the scale of weeks.",
          hi: "सूर्य, बुध, शुक्र: लगभग एक-एक महीना (वक्री होने पर बुध और शुक्र अधिक समय रुक सकते हैं) — कुछ सप्ताहों के विषय।",
          ko: "태양·수성·금성: 대략 한 달 안팎(수성·금성은 역행으로 길어질 수 있음). 몇 주 단위의 관심사를 나타냅니다.",
        },
        {
          ja: "火星：約1か月半（逆行時は数か月に及ぶことも）。行動力や摩擦が表に出やすい時期の目安です。",
          en: "Mars: about a month and a half (several months when retrograde) — a marker for periods of drive or friction.",
          hi: "मंगल: लगभग डेढ़ महीना (वक्री होने पर कई महीने) — ऊर्जा या टकराव के समय का संकेत।",
          ko: "화성: 약 한 달 반(역행 시 몇 달에 이르기도 함). 행동력이나 마찰이 드러나기 쉬운 시기의 기준입니다.",
        },
        {
          ja: "木星：約1年。どの室を通るかで、その年に広がりやすい分野を読みます。",
          en: "Jupiter: about a year — the house it crosses suggests the area of life that tends to expand that year.",
          hi: "गुरु: लगभग एक वर्ष — जिस भाव से गुज़रता है, वह उस वर्ष विस्तार पाने वाले क्षेत्र का संकेत देता है।",
          ko: "목성: 약 1년. 어느 하우스를 지나느냐로 그해 넓어지기 쉬운 분야를 읽습니다.",
        },
        {
          ja: "ラーフ・ケートゥ：約1年半。常に向かい合う二つの室で、関心の偏りと手放しのテーマを示します。",
          en: "Rahu and Ketu: about a year and a half — always in opposite houses, showing where attention is pulled and what is being let go.",
          hi: "राहु-केतु: लगभग डेढ़ वर्ष — सदा आमने-सामने के भावों में, ध्यान के खिंचाव और त्याग के विषय दिखाते हैं।",
          ko: "라후·케투: 약 1년 반. 항상 마주 보는 두 하우스에서 관심의 쏠림과 내려놓음의 주제를 나타냅니다.",
        },
        {
          ja: "土星：約2年半。最も長く、責任や見直しのテーマとして読みます。月星座との関係で見るサデ・サティは、土星専用のページで詳しく確認できます。",
          en: "Saturn: about two and a half years — the longest, read as a theme of responsibility and review. Sade Sati, judged against your Moon sign, has its own dedicated page.",
          hi: "शनि: लगभग ढाई वर्ष — सबसे लंबा, उत्तरदायित्व और समीक्षा के विषय के रूप में पढ़ा जाता है। चंद्र राशि से जुड़ी साढ़े साती के लिए अलग पृष्ठ है।",
          ko: "토성: 약 2년 반. 가장 길며 책임과 재점검의 주제로 읽습니다. 달 별자리와의 관계로 보는 사데 사티는 토성 전용 페이지에서 자세히 확인할 수 있습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "ダシャーと組み合わせて読む",
        en: "Reading transits together with the dasha",
        hi: "गोचर को दशा के साथ पढ़ना",
        ko: "다샤와 함께 읽기",
      },
      body: [
        {
          ja: "インド占星術では、トランジットだけで出来事を判断することはあまりありません。生まれたときの月のナクシャトラから始まるヴィムショッタリ・ダシャー（全120年の周期）が「今どの惑星のテーマが開いているか」を示し、トランジットが「それがいつ、どの分野で表に出やすいか」を示す、という役割分担で読みます。",
          en: "Jyotish rarely judges events from transits alone. The Vimshottari dasha — a 120-year cycle that starts from the nakshatra of your natal Moon — shows which planet's themes are open right now, and transits show when and in which area those themes are likely to surface.",
          hi: "ज्योतिष में केवल गोचर से घटनाओं का निर्णय कम ही किया जाता है। जन्म चंद्र के नक्षत्र से शुरू होने वाली विंशोत्तरी दशा (120 वर्ष का चक्र) बताती है कि अभी किस ग्रह के विषय खुले हैं, और गोचर बताता है कि वे कब और किस क्षेत्र में प्रकट होने की संभावना रखते हैं।",
          ko: "인도 점성술에서는 트랜짓만으로 사건을 판단하는 일이 드뭅니다. 출생 시 달의 낙샤트라에서 시작하는 빔쇼타리 다샤(총 120년 주기)가 '지금 어느 행성의 주제가 열려 있는가'를, 트랜짓이 '그것이 언제, 어느 분야에서 드러나기 쉬운가'를 보여 주는 역할 분담으로 읽습니다.",
        },
        {
          ja: "具体的には、まずダシャー計算で現在のマハーダシャーとアンタルダシャーの支配星を確認します。次にこのページで、その支配星が今どの室を通っているか、また出生図でその支配星がいる室を木星や土星が通過していないかを見ます。ダシャーとトランジットが同じ室を指していれば、その分野が今の中心テーマだと考えます。",
          en: "In practice, first check the lords of your current mahadasha and antardasha with the dasha calculator. Then use this page to see which house that lord is transiting now, and whether Jupiter or Saturn is crossing the house where that lord sits in your birth chart. When the dasha and the transits point to the same house, that area is read as the main theme of the moment.",
          hi: "व्यवहार में, पहले दशा कैलकुलेटर से वर्तमान महादशा और अंतर्दशा के स्वामी देखें। फिर इस पृष्ठ पर देखें कि वह स्वामी अभी किस भाव से गुज़र रहा है, और क्या गुरु या शनि उस भाव से गुज़र रहे हैं जहाँ जन्म कुंडली में वह स्वामी स्थित है। दशा और गोचर एक ही भाव की ओर संकेत करें तो वही क्षेत्र इस समय का मुख्य विषय माना जाता है।",
          ko: "구체적으로는 먼저 다샤 계산기로 현재 마하다샤와 안타르다샤의 지배 행성을 확인합니다. 다음으로 이 페이지에서 그 지배 행성이 지금 어느 하우스를 지나는지, 또 출생 차트에서 그 지배 행성이 있는 하우스를 목성이나 토성이 통과하고 있지 않은지 봅니다. 다샤와 트랜짓이 같은 하우스를 가리키면 그 분야를 지금의 중심 주제로 봅니다.",
        },
      ],
    },
    {
      heading: {
        ja: "背景知識：西洋のトランジットとの違い",
        en: "Background: how this differs from Western transits",
        hi: "पृष्ठभूमि: पश्चिमी ट्रांज़िट से अंतर",
        ko: "배경 지식: 서양 트랜짓과의 차이",
      },
      body: [
        {
          ja: "西洋占星術のトランジットは、主に出生図の惑星との角度（合・スクエア・トラインなど）を度数単位で細かく見ます。インドのゴーチャラは恒星黄道を使い、まず「どの星座＝どの室にあるか」という星座単位の配置を重視します。さらに天王星・海王星・冥王星は伝統的に使わず、ラーフとケートゥ（月の交点）を含む九つの惑星で読む点も大きな違いです。",
          en: "Western transits mainly track exact angles to natal planets — conjunctions, squares, trines — degree by degree. Indian gochara uses the sidereal zodiac and puts the sign-level placement first: which sign, and therefore which house, a planet occupies. Another major difference is that it traditionally leaves out Uranus, Neptune and Pluto and reads nine grahas, including Rahu and Ketu, the lunar nodes.",
          hi: "पश्चिमी ट्रांज़िट मुख्यतः जन्म ग्रहों से सटीक कोणों — युति, केंद्र, त्रिकोण — को अंश-दर-अंश देखते हैं। भारतीय गोचर निरयन राशि-चक्र का उपयोग करता है और पहले राशि-स्तर की स्थिति को महत्व देता है: ग्रह किस राशि और इसलिए किस भाव में है। एक बड़ा अंतर यह भी है कि यह पारंपरिक रूप से यूरेनस, नेपच्यून और प्लूटो को छोड़कर राहु-केतु सहित नौ ग्रहों से पढ़ता है।",
          ko: "서양 점성술의 트랜짓은 주로 출생 행성과의 각도(합·스퀘어·트라인 등)를 도수 단위로 세밀하게 봅니다. 인도의 고차라는 항성 황도를 쓰고, 먼저 '어느 별자리, 곧 어느 하우스에 있는가'라는 별자리 단위 배치를 중시합니다. 또한 천왕성·해왕성·명왕성은 전통적으로 쓰지 않고 라후와 케투(달의 교점)를 포함한 아홉 행성으로 읽는다는 점도 큰 차이입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "よくある誤解",
        en: "Common misconceptions",
        hi: "आम भ्रांतियाँ",
        ko: "흔한 오해",
      },
      body: [
        {
          ja: "トランジットは雑誌の星占いと混同されやすいため、読み違えやすい点をまとめました。",
          en: "Transits are easily confused with magazine horoscopes, so here are the points most often misread.",
          hi: "गोचर को अक्सर पत्रिकाओं के राशिफल से मिला दिया जाता है, इसलिए सबसे अधिक गलत पढ़े जाने वाले बिंदु यहाँ हैं।",
          ko: "트랜짓은 잡지의 별자리 운세와 혼동되기 쉬우므로, 잘못 읽기 쉬운 점을 정리했습니다.",
        },
      ],
      bullets: [
        {
          ja: "「土星が○○座に入ったから全員に厳しい」——同じトランジットでも、人によって通る室が違うため、意味はまったく異なります。",
          en: "'Saturn entered a sign, so it is hard for everyone' — the same transit falls in a different house for each person, so its meaning differs completely.",
          hi: "'शनि ने राशि बदली, तो सबके लिए कठिन है' — एक ही गोचर हर व्यक्ति के लिए अलग भाव में पड़ता है, इसलिए उसका अर्थ पूरी तरह भिन्न होता है।",
          ko: "'토성이 어느 별자리에 들어갔으니 모두에게 힘들다' — 같은 트랜짓이라도 사람마다 지나는 하우스가 달라 의미가 전혀 다릅니다.",
        },
        {
          ja: "「逆行中は悪いことが起きる」——逆行は見かけの動きで、インド占星術ではむしろ見直しややり直しのテーマとして読むことが多いものです。",
          en: "'Bad things happen during retrogrades' — retrograde is an apparent motion, and Jyotish more often reads it as a theme of review and revisiting.",
          hi: "'वक्री काल में बुरा होता है' — वक्री एक दृश्य गति है, और ज्योतिष इसे अधिकतर पुनर्विचार और दोहराने के विषय के रूप में पढ़ता है।",
          ko: "'역행 중에는 나쁜 일이 생긴다' — 역행은 겉보기 움직임이며, 인도 점성술에서는 오히려 재검토와 다시 하기의 주제로 읽는 경우가 많습니다.",
        },
        {
          ja: "「月のトランジットで大きな決断を」——月は2日半で移るため、人生の大きな流れは木星・土星・ラーフ・ケートゥとダシャーで見るのが基本です。",
          en: "'Make big decisions by the Moon's transit' — the Moon moves on in two and a half days; life's larger currents are read from Jupiter, Saturn, Rahu, Ketu and the dasha.",
          hi: "'चंद्र गोचर देखकर बड़े निर्णय लें' — चंद्रमा ढाई दिन में आगे बढ़ जाता है; जीवन की बड़ी धारा गुरु, शनि, राहु, केतु और दशा से देखी जाती है।",
          ko: "'달의 트랜짓으로 큰 결정을' — 달은 2일 반이면 옮겨 가므로, 인생의 큰 흐름은 목성·토성·라후·케투와 다샤로 보는 것이 기본입니다.",
        },
        {
          ja: "「凶とされる室を通る＝不運」——古典の吉凶は目安にすぎず、出生図の強さやダシャー次第で、学びや整理の時期として穏やかに過ぎることも多くあります。",
          en: "'Transiting a difficult house means bad luck' — classical ratings are only guidelines; depending on the birth chart and dasha, such periods often pass quietly as times of learning and tidying up.",
          hi: "'अशुभ माने गए भाव में गोचर = दुर्भाग्य' — शास्त्रीय शुभ-अशुभ केवल संकेत हैं; जन्म कुंडली और दशा के अनुसार ऐसे समय अक्सर सीखने और व्यवस्थित होने के रूप में शांति से बीत जाते हैं।",
          ko: "'흉하다는 하우스를 지나면 불운' — 고전의 길흉은 기준일 뿐이며, 출생 차트의 힘과 다샤에 따라 배움과 정리의 시기로 조용히 지나가는 경우도 많습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "ご利用にあたって",
        en: "Before you use these results",
        hi: "उपयोग से पहले",
        ko: "이용 시 안내",
      },
      body: [
        {
          ja: "トランジットの表示は、ご自身の今の状況を振り返り、楽しむための参考情報です。医療・法律・金融・投資などの判断の代わりにはなりません。健康やお金、契約に関わることは、必ず専門家にご相談ください。",
          en: "The transit view is reference material for reflecting on your current situation and for enjoyment. It is not a substitute for medical, legal, financial or investment decisions; for matters of health, money or contracts, always consult a qualified professional.",
          hi: "गोचर दृश्य अपनी वर्तमान स्थिति पर विचार करने और आनंद के लिए संदर्भ मात्र है। यह चिकित्सा, कानूनी, वित्तीय या निवेश संबंधी निर्णयों का विकल्प नहीं है; स्वास्थ्य, धन या अनुबंध से जुड़े विषयों में सदा योग्य विशेषज्ञ से परामर्श लें।",
          ko: "트랜짓 표시는 자신의 현재 상황을 돌아보고 즐기기 위한 참고 정보입니다. 의료·법률·금융·투자 판단을 대신하지 않으며, 건강이나 돈, 계약에 관한 일은 반드시 전문가와 상담하세요.",
        },
        {
          ja: "どの配置も、それだけで不幸や幸運が決まるものではありません。「今はこのテーマに目を向ける時期かもしれない」と、自分を整えるきっかけとしてお使いください。",
          en: "No placement decides good or bad fortune on its own. Use it as a prompt — 'perhaps this is a time to look at this theme' — for taking stock of yourself.",
          hi: "कोई भी स्थिति अकेले सौभाग्य या दुर्भाग्य तय नहीं करती। इसे स्वयं को सँवारने के संकेत के रूप में लें — 'शायद यह इस विषय पर ध्यान देने का समय है'।",
          ko: "어떤 배치도 그것만으로 불행이나 행운이 정해지지 않습니다. '지금은 이 주제에 눈을 돌릴 시기일지도 모른다'는 식으로, 자신을 가다듬는 계기로 활용하세요.",
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
          ja: "トランジットをより深く読むために、あわせて確認したいページです。",
          en: "Pages worth checking alongside this one to read transits in more depth.",
          hi: "गोचर को और गहराई से पढ़ने के लिए इनके साथ देखने योग्य पृष्ठ।",
          ko: "트랜짓을 더 깊이 읽기 위해 함께 확인하면 좋은 페이지입니다.",
        },
      ],
      links: [
        {
          href: "/tools/dasha-calculator",
          label: { ja: "今のダシャー（運気の周期）を調べる", en: "Find your current dasha period", hi: "अपनी वर्तमान दशा जानें", ko: "지금의 다샤(운의 주기) 알아보기" },
        },
        {
          href: "/tools/saturn-return",
          label: { ja: "土星回帰・サデサティを計算する", en: "Calculate Saturn return and Sade Sati", hi: "शनि वापसी और साढ़े साती की गणना करें", ko: "토성 회귀·사데 사티 계산하기" },
        },
        {
          href: "/tools/moon-sign",
          label: { ja: "月星座（ラーシ）を調べる", en: "Find your Moon sign (rashi)", hi: "अपनी चंद्र राशि जानें", ko: "달 별자리(라시) 알아보기" },
        },
        {
          href: "/chart",
          label: { ja: "ホロスコープを作成し、月基準・別の日付で見る", en: "Make a full chart and view other dates or the Moon base", hi: "पूरी कुंडली बनाएँ और अन्य तिथि या चंद्र आधार देखें", ko: "차트를 만들어 달 기준·다른 날짜로 보기" },
        },
        {
          href: "/learn-jyotish/transits/transits",
          label: { ja: "トランジット（ゴーチャラ）の基礎を学ぶ", en: "Learn the basics of transits (gochara)", hi: "गोचर की मूल बातें सीखें", ko: "트랜짓(고차라)의 기초 배우기" },
        },
      ],
    },
  ],
};
