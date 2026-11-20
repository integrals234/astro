import type { ToolLongForm } from "./types";

/**
 * Long-form body for /tools/moon-sign.
 *
 * Written Japanese-first for 「月星座 インド占星術」「チャンドラ・ラーシ」. The
 * page has to stay distinct from its neighbours: /tools/nakshatra-finder and
 * /tools/sukuyo are about the Moon's 27-fold mansion, /tools/lagna-calculator
 * about the rising sign. This page is about the Moon's *sign* (one of twelve):
 * why Jyotish leans on it more than on the Sun sign, why it differs from a
 * Western (tropical) "moon sign", and why a birth on the day the Moon changes
 * sign needs an accurate time.
 *
 * What the tool actually outputs (ChartSectionBody → ChartFigure, view
 * "moon"): a North Indian Chandra chart with house 1 set to the Moon's sign,
 * sign numbers in each house, two-character planet labels, the degree within
 * the sign as a superscript, and "*" for retrograde (Rahu/Ketu always). No
 * ascendant marker is drawn in this view.
 */
export const moonSignLongForm: ToolLongForm = {
  slug: "moon-sign",
  sections: [
    {
      heading: {
        ja: "月星座（チャンドラ・ラーシ）とは",
        en: "What the Moon sign (Chandra Rashi) is",
        hi: "चंद्र राशि क्या है",
        ko: "달별자리(찬드라 라시)란",
      },
      body: [
        {
          ja: "月星座とは、生まれた瞬間に月が十二星座のどこにあったかを示すものです。インド占星術では「チャンドラ・ラーシ」、あるいは単に「ラーシ」と呼ばれ、インドで「あなたのラーシは？」と聞かれたら、たいていは月星座のことを指しています。",
          en: "Your Moon sign is the one of the twelve signs the Moon occupied at the moment you were born. In Jyotish it is called Chandra Rashi, or simply Rashi — when someone in India asks for your rashi, they usually mean your Moon sign.",
          hi: "चंद्र राशि वह राशि है जिसमें आपके जन्म के क्षण चंद्रमा स्थित था। ज्योतिष में इसे चंद्र राशि या केवल 'राशि' कहते हैं — भारत में जब कोई आपकी राशि पूछता है, तो प्रायः उसका अर्थ चंद्र राशि ही होता है।",
          ko: "달별자리는 태어난 순간 달이 열두 별자리 중 어디에 있었는지를 나타냅니다. 인도 점성술에서는 '찬드라 라시' 또는 간단히 '라시'라고 부르며, 인도에서 '당신의 라시는?'이라고 물으면 대개 달별자리를 뜻합니다.",
        },
        {
          ja: "西洋の星占いでは太陽星座が「自分の星座」として使われますが、インド占星術では月が心（マナス）、感情、日々の反応のしかたを表す天体として重視されます。太陽が人生の目的や外に向かう意志を示すのに対し、月は「どう感じ、どう受け止めるか」という内側の質を映すと考えられてきました。",
          en: "Western sun-sign horoscopes treat the Sun sign as 'your sign', but Jyotish gives the Moon more weight as the graha of the mind (manas), feelings and everyday reactions. Where the Sun points to purpose and outward will, the Moon is taken to reflect the inner quality of how you feel and take things in.",
          hi: "पश्चिमी राशिफल सूर्य राशि को 'आपकी राशि' मानते हैं, पर ज्योतिष चंद्रमा को मन, भावनाओं और रोज़मर्रा की प्रतिक्रियाओं का ग्रह मानकर अधिक महत्व देता है। सूर्य उद्देश्य और बाहरी इच्छाशक्ति दिखाता है, जबकि चंद्रमा यह दिखाता है कि आप भीतर से कैसे महसूस करते और ग्रहण करते हैं।",
          ko: "서양 별자리 운세는 태양별자리를 '나의 별자리'로 쓰지만, 인도 점성술은 달을 마음(마나스), 감정, 일상의 반응을 나타내는 행성으로 중시합니다. 태양이 삶의 목적과 바깥을 향한 의지를 보여 준다면, 달은 '어떻게 느끼고 받아들이는가'라는 내면의 결을 비춘다고 여겨져 왔습니다.",
        },
        {
          ja: "さらに実用上の理由もあります。後で触れるように、ダシャー（運気の時期区分）の起点、サディ・サティなど土星の運行の見方、二人の相性の計算は、いずれも月の位置を基準にしています。月星座は、インド占星術のさまざまな計算の「出発点」なのです。",
          en: "There is also a practical reason. As covered below, the starting point of the dasha periods, the reading of Saturn's transit in Sade Sati, and compatibility scoring all take the Moon's position as their reference. The Moon sign is the starting point for many Jyotish calculations.",
          hi: "एक व्यावहारिक कारण भी है। जैसा आगे बताया गया है, दशा का आरंभ, साढ़े साती में शनि के गोचर का आकलन और गुण-मिलान — ये सभी चंद्रमा की स्थिति को आधार मानते हैं। चंद्र राशि कई ज्योतिषीय गणनाओं का प्रारंभ-बिंदु है।",
          ko: "실용적인 이유도 있습니다. 뒤에서 다루듯 다샤(운의 시기 구분)의 출발점, 사데 사티 등 토성 운행을 보는 법, 두 사람의 궁합 계산은 모두 달의 위치를 기준으로 합니다. 달별자리는 인도 점성술의 여러 계산에서 출발점이 됩니다.",
        },
      ],
    },
    {
      heading: {
        ja: "使い方と入力のポイント",
        en: "How to use the calculator, and what to watch when entering details",
        hi: "उपयोग कैसे करें और विवरण भरते समय ध्यान रखने योग्य बातें",
        ko: "사용 방법과 입력 시 주의점",
      },
      body: [
        {
          ja: "月はおよそ2日と6時間（約2.25日）で一つの星座を通過します。そのため、多くの方は生年月日だけで月星座が決まりますが、月が星座の境目をまたいだ日に生まれた方は、出生時刻によって結果が変わります。ラグナ（上昇宮）が約2時間ごとに変わるのに比べれば、月星座は時刻の誤差にずっと強い指標です。",
          en: "The Moon passes through one sign in roughly two days and six hours (about 2.25 days). For most people the date alone settles the Moon sign, but if you were born on a day when the Moon crossed from one sign into the next, the result depends on your birth time. Compared with the ascendant, which changes about every two hours, the Moon sign is far more forgiving of an uncertain time.",
          hi: "चंद्रमा लगभग दो दिन छह घंटे (करीब 2.25 दिन) में एक राशि पार करता है। अधिकतर लोगों की चंद्र राशि केवल जन्म-तिथि से तय हो जाती है, पर जिस दिन चंद्रमा राशि बदलता है उस दिन जन्मे लोगों का परिणाम जन्म-समय पर निर्भर करता है। लगभग हर दो घंटे में बदलने वाले लग्न की तुलना में चंद्र राशि समय की अनिश्चितता को कहीं अधिक सह लेती है।",
          ko: "달은 약 2일 6시간(약 2.25일)에 한 별자리를 지나갑니다. 그래서 대부분은 생년월일만으로 달별자리가 정해지지만, 달이 별자리 경계를 넘은 날에 태어났다면 출생 시각에 따라 결과가 달라집니다. 약 2시간마다 바뀌는 라그나(상승궁)에 비하면 달별자리는 시각 오차에 훨씬 강한 지표입니다.",
        },
      ],
      bullets: [
        {
          ja: "手順1：生年月日を入力します。和暦ではなく西暦で、日付の取り違えがないか確認してください。",
          en: "Step 1: Enter your date of birth in the Western calendar, and double-check the day and month.",
          hi: "चरण 1: जन्म-तिथि ग्रेगोरियन कैलेंडर में दर्ज करें और दिन व महीना दोबारा जाँचें।",
          ko: "1단계: 생년월일을 양력(서기)으로 입력하고, 날짜가 틀리지 않았는지 확인하세요.",
        },
        {
          ja: "手順2：出生時刻を入力します。母子手帳などの記録があれば、それがいちばん確実です。",
          en: "Step 2: Enter your birth time; a written record such as a maternity handbook or birth certificate is the most reliable source.",
          hi: "चरण 2: जन्म-समय दर्ज करें; जन्म प्रमाणपत्र जैसा लिखित रिकॉर्ड सबसे विश्वसनीय होता है।",
          ko: "2단계: 출생 시각을 입력하세요. 출생 기록 등 문서가 있다면 그것이 가장 확실합니다.",
        },
        {
          ja: "手順3：出生地を選びます。時差（タイムゾーン）は出生地から判断されるため、海外で生まれた方は日本の地名ではなく実際の出生地を選んでください。",
          en: "Step 3: Choose your place of birth. The time zone is taken from the place, so if you were born abroad, pick the actual town rather than a place in Japan.",
          hi: "चरण 3: जन्म-स्थान चुनें। समय-क्षेत्र स्थान से लिया जाता है, इसलिए विदेश में जन्म हुआ हो तो वास्तविक स्थान ही चुनें।",
          ko: "3단계: 출생지를 선택하세요. 시간대는 출생지로 판단되므로 해외에서 태어났다면 실제 출생지를 고르세요.",
        },
        {
          ja: "時刻がわからない場合：仮に正午（12:00）で計算し、表示された月の度数を確認します。月は1時間に約0.5度進むため、度数がおよそ8度から22度の間なら、その日のうちに星座が変わる心配はほぼありません。0度や29度に近い場合は、0:00と23:59でも試してみてください。",
          en: "If you don't know the time: calculate with noon (12:00) and look at the Moon's degree. The Moon moves about half a degree an hour, so if it sits roughly between 8° and 22°, the sign almost certainly does not change that day. If it is close to 0° or 29°, try 00:00 and 23:59 as well.",
          hi: "समय ज्ञात न हो तो: दोपहर 12:00 मानकर गणना करें और चंद्रमा का अंश देखें। चंद्रमा प्रति घंटे लगभग आधा अंश चलता है, इसलिए यदि वह लगभग 8° से 22° के बीच है तो उस दिन राशि बदलने की संभावना लगभग नहीं है। 0° या 29° के पास हो तो 00:00 और 23:59 से भी जाँचें।",
          ko: "시각을 모를 때: 정오(12:00)로 계산한 뒤 달의 도수를 확인하세요. 달은 1시간에 약 0.5도 움직이므로 도수가 대략 8도에서 22도 사이라면 그날 안에 별자리가 바뀔 걱정은 거의 없습니다. 0도나 29도에 가깝다면 0:00과 23:59로도 시험해 보세요.",
        },
        {
          ja: "よくある誤解：西洋占星術のサイトで調べた「月星座」と一致しなくても、計算の誤りではありません。当サイトはインド占星術で標準的なサイデリアル方式（ラヒリ・アヤナムシャ）を使っており、西洋式とは星座が一つずれることがよくあります。",
          en: "A common mix-up: if the result doesn't match the 'moon sign' from a Western astrology site, that isn't a calculation error. This site uses the sidereal zodiac with the Lahiri ayanamsa, standard in Jyotish, so the sign is often one earlier than the Western result.",
          hi: "आम भ्रम: यदि परिणाम किसी पश्चिमी ज्योतिष साइट की 'मून साइन' से मेल न खाए, तो यह गणना की गलती नहीं है। यह साइट ज्योतिष में मानक निरयन (लाहिड़ी अयनांश) पद्धति का उपयोग करती है, इसलिए राशि अक्सर एक पहले आती है।",
          ko: "흔한 오해: 서양 점성술 사이트에서 찾은 '달별자리'와 다르더라도 계산 오류가 아닙니다. 이 사이트는 인도 점성술의 표준인 항성 황도(라히리 아야남샤)를 쓰기 때문에 서양식보다 별자리가 하나 앞서는 경우가 많습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "結果の読み方：チャンドラ・チャートの見方",
        en: "Reading the result: how to read the Chandra chart",
        hi: "परिणाम कैसे पढ़ें: चंद्र कुंडली",
        ko: "결과 읽는 법: 찬드라 차트 보기",
      },
      body: [
        {
          ja: "計算結果は、北インド式のダイヤモンド型チャートで表示されます。通常の出生図（ラグナ・チャート）はラグナを第1室に置きますが、このチャンドラ・チャートは月のある星座を第1室に置き直したものです。表示されている各要素の意味は次のとおりです。",
          en: "The result is drawn as a North Indian diamond chart. An ordinary birth chart (the Lagna chart) puts the ascendant in house 1; this Chandra chart puts the Moon's sign in house 1 instead. Here is what each element on it means.",
          hi: "परिणाम उत्तर भारतीय हीरे के आकार की कुंडली में दिखता है। सामान्य जन्म-कुंडली (लग्न कुंडली) में लग्न पहले भाव में होता है; इस चंद्र कुंडली में चंद्रमा की राशि को पहला भाव बनाया जाता है। इसके प्रत्येक तत्व का अर्थ इस प्रकार है।",
          ko: "계산 결과는 북인도식 다이아몬드형 차트로 표시됩니다. 일반 출생 차트(라그나 차트)는 라그나를 1궁에 두지만, 이 찬드라 차트는 달이 있는 별자리를 1궁으로 다시 놓은 것입니다. 표시되는 각 요소의 의미는 다음과 같습니다.",
        },
        {
          ja: "例えば、月が蟹座の12度にあり、土星が山羊座にある方の場合、上部中央の第1室には蟹座を表す「4」と「月¹²」が表示されます。山羊座（10）は蟹座から数えて7番目なので、土星は真下の第7室に描かれます。インド占星術ではこれを「月から見て第7室の土星」と読みます（あくまで説明のための例です）。",
          en: "For example, if your Moon is at 12° Cancer and Saturn is in Capricorn, the top-centre house 1 shows '4' for Cancer and 'Moon 12'. Capricorn (10) is the seventh sign counting from Cancer, so Saturn is drawn in house 7 at the bottom. In Jyotish this is read as 'Saturn in the seventh from the Moon'. (This is an illustrative example only.)",
          hi: "उदाहरण के लिए, यदि चंद्रमा कर्क में 12° पर और शनि मकर में है, तो ऊपर बीच के पहले भाव में कर्क का अंक '4' और 'चंद्र 12' दिखेगा। मकर (10) कर्क से सातवीं राशि है, इसलिए शनि नीचे सातवें भाव में दिखेगा। ज्योतिष में इसे 'चंद्रमा से सातवें भाव में शनि' पढ़ा जाता है। (यह केवल समझाने के लिए उदाहरण है।)",
          ko: "예를 들어 달이 게자리 12도, 토성이 염소자리에 있다면, 위쪽 가운데의 1궁에 게자리를 뜻하는 '4'와 '달 12'가 표시됩니다. 염소자리(10)는 게자리에서 세어 일곱 번째이므로 토성은 아래쪽 7궁에 그려집니다. 인도 점성술에서는 이를 '달에서 7궁의 토성'이라고 읽습니다. (설명을 위한 예시입니다.)",
        },
      ],
      bullets: [
        {
          ja: "第1室（上部中央のひし形）：あなたの月星座です。ここから反時計回りに第2室、第3室……と数えます。",
          en: "House 1 (the top-centre diamond): your Moon sign. Houses 2, 3 and onward are counted anticlockwise from here.",
          hi: "पहला भाव (ऊपर बीच का हीरा): आपकी चंद्र राशि। यहाँ से वामावर्त दिशा में दूसरा, तीसरा भाव आदि गिने जाते हैं।",
          ko: "1궁(위쪽 가운데 마름모): 당신의 달별자리입니다. 여기서 시계 반대 방향으로 2궁, 3궁… 순으로 셉니다.",
        },
        {
          ja: "各室の数字：その室に入る星座の番号です。1＝牡羊座、2＝牡牛座、3＝双子座、4＝蟹座、5＝獅子座、6＝乙女座、7＝天秤座、8＝蠍座、9＝射手座、10＝山羊座、11＝水瓶座、12＝魚座。",
          en: "The number in each house: the sign occupying it. 1 = Aries, 2 = Taurus, 3 = Gemini, 4 = Cancer, 5 = Leo, 6 = Virgo, 7 = Libra, 8 = Scorpio, 9 = Sagittarius, 10 = Capricorn, 11 = Aquarius, 12 = Pisces.",
          hi: "प्रत्येक भाव का अंक: उसमें स्थित राशि। 1 = मेष, 2 = वृषभ, 3 = मिथुन, 4 = कर्क, 5 = सिंह, 6 = कन्या, 7 = तुला, 8 = वृश्चिक, 9 = धनु, 10 = मकर, 11 = कुंभ, 12 = मीन।",
          ko: "각 궁의 숫자: 그 궁에 들어가는 별자리 번호입니다. 1=양자리, 2=황소자리, 3=쌍둥이자리, 4=게자리, 5=사자자리, 6=처녀자리, 7=천칭자리, 8=전갈자리, 9=사수자리, 10=염소자리, 11=물병자리, 12=물고기자리.",
        },
        {
          ja: "惑星名：太陽・月・火星・水星・木星・金星・土星に、ラーフとケートゥ（月の交点）を加えた九つの惑星（ナヴァグラハ）が、略称で表示されます。",
          en: "Planet labels: the nine grahas — Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, plus Rahu and Ketu (the lunar nodes) — shown in abbreviated form.",
          hi: "ग्रहों के नाम: नौ ग्रह — सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि, तथा राहु और केतु (चंद्र-पात) — संक्षिप्त रूप में दिखाए जाते हैं।",
          ko: "행성 이름: 태양·달·화성·수성·목성·금성·토성에 라후와 케투(달의 교점)를 더한 아홉 행성(나바그라하)이 약칭으로 표시됩니다.",
        },
        {
          ja: "惑星の右上の小さな数字：その星座の中での度数（0〜29度）です。月の度数は、前述の「時刻がわからない場合」の確認にも使えます。",
          en: "The small raised number beside a planet: its degree within the sign (0–29). The Moon's degree is also what you check in the 'if you don't know the time' test above.",
          hi: "ग्रह के पास ऊपर छोटा अंक: राशि के भीतर उसका अंश (0–29)। ऊपर बताई 'समय ज्ञात न हो तो' वाली जाँच में भी चंद्रमा का यही अंश देखा जाता है।",
          ko: "행성 오른쪽 위의 작은 숫자: 그 별자리 안에서의 도수(0~29도)입니다. 달의 도수는 앞의 '시각을 모를 때' 확인에도 쓰입니다.",
        },
        {
          ja: "「*」印：逆行（地球から見て惑星が逆向きに進んで見える状態）を示します。ラーフとケートゥは常に逆行するため、いつも「*」が付きます。",
          en: "The '*' mark: retrograde, when a planet appears to move backwards as seen from Earth. Rahu and Ketu always move retrograde, so they always carry the mark.",
          hi: "'*' चिह्न: वक्री गति, जब पृथ्वी से देखने पर ग्रह उल्टा चलता दिखता है। राहु और केतु सदा वक्री रहते हैं, इसलिए उन पर यह चिह्न हमेशा होता है।",
          ko: "'*' 표시: 역행, 즉 지구에서 볼 때 행성이 거꾸로 움직이는 것처럼 보이는 상태입니다. 라후와 케투는 항상 역행하므로 늘 표시가 붙습니다.",
        },
        {
          ja: "ラグナ（ASC）の表示がない理由：このチャートは月を基準にしているため、上昇宮の印は描かれません。ラグナを知りたい方はラグナ計算ツールをご利用ください。",
          en: "Why there is no ascendant (ASC) marker: this chart is anchored on the Moon, so the rising-sign marker is not drawn. Use the Lagna calculator if you want your ascendant.",
          hi: "लग्न (ASC) चिह्न क्यों नहीं है: यह कुंडली चंद्रमा पर आधारित है, इसलिए लग्न का चिह्न नहीं बनाया जाता। लग्न जानने के लिए लग्न कैलकुलेटर देखें।",
          ko: "라그나(ASC) 표시가 없는 이유: 이 차트는 달을 기준으로 하므로 상승궁 표시를 그리지 않습니다. 라그나가 궁금하다면 라그나 계산 도구를 이용하세요.",
        },
      ],
    },
    {
      heading: {
        ja: "背景知識：西洋の「月星座」と一つずれることがある理由",
        en: "Background: why it can be one sign off from a Western 'moon sign'",
        hi: "पृष्ठभूमि: पश्चिमी 'मून साइन' से एक राशि का अंतर क्यों हो सकता है",
        ko: "배경 지식: 서양의 '달별자리'와 하나 어긋날 수 있는 이유",
      },
      body: [
        {
          ja: "西洋占星術も月星座を扱いますが、星座の区切り方が違います。西洋式は春分点を牡羊座0度とする「トロピカル（回帰）黄道」を使い、インド占星術は実際の星々の位置に合わせた「サイデリアル（恒星）黄道」を使います。",
          en: "Western astrology has Moon signs too, but it divides the zodiac differently. The Western system uses the tropical zodiac, which fixes 0° Aries at the spring equinox; Jyotish uses the sidereal zodiac, aligned with the actual stars.",
          hi: "पश्चिमी ज्योतिष में भी मून साइन होती है, पर राशिचक्र का विभाजन अलग है। पश्चिमी पद्धति सायन राशिचक्र का उपयोग करती है, जो वसंत विषुव को मेष 0° मानता है; ज्योतिष निरयन राशिचक्र का उपयोग करता है, जो वास्तविक तारों से जुड़ा है।",
          ko: "서양 점성술도 달별자리를 다루지만 별자리를 나누는 방식이 다릅니다. 서양식은 춘분점을 양자리 0도로 삼는 '트로피컬(회귀) 황도'를, 인도 점성술은 실제 별의 위치에 맞춘 '항성(사이드리얼) 황도'를 씁니다.",
        },
        {
          ja: "地球の自転軸がゆっくり首振り運動（歳差）をしているため、春分点は星々に対して少しずつ移動し、現在では両者のずれ（アヤナムシャ）が約24度に達しています。当サイトはインドで広く使われるラヒリ（チトラパクシャ）方式でこの差を計算しています。",
          en: "Because Earth's axis slowly wobbles (precession), the equinox point drifts against the stars, and the gap between the two zodiacs — the ayanamsa — is now about 24°. This site computes that gap with the Lahiri (Chitrapaksha) ayanamsa, the one most widely used in India.",
          hi: "पृथ्वी की धुरी के धीमे डोलन (अयन-चलन) के कारण विषुव-बिंदु तारों के सापेक्ष खिसकता रहता है, और अब दोनों राशिचक्रों का अंतर — अयनांश — लगभग 24° है। यह साइट भारत में सबसे प्रचलित लाहिड़ी (चित्रपक्ष) अयनांश से यह अंतर निकालती है।",
          ko: "지구 자전축이 천천히 흔들리는 세차 운동 때문에 춘분점은 별에 대해 조금씩 이동하며, 현재 두 황도의 차이(아야남샤)는 약 24도에 이릅니다. 이 사이트는 인도에서 널리 쓰이는 라히리(치트라팍샤) 방식으로 이 차이를 계산합니다.",
        },
        {
          ja: "一つの星座は30度なので、西洋式で月が星座の0〜24度付近にあれば、インド式では一つ前の星座になります。単純に計算すると約8割の方が一つ前の星座、残りの方は同じ星座ということになります。どちらが正しいというより、基準の異なる二つの物差しだと考えるとわかりやすいでしょう。",
          en: "Each sign is 30° wide, so if the Moon sits in roughly the first 24° of a sign in the Western system, it falls in the previous sign in the Vedic one. Simple arithmetic puts about four in five people one sign back and the rest in the same sign. It is easier to think of them as two rulers with different zero points than as one right and one wrong.",
          hi: "प्रत्येक राशि 30° की होती है, इसलिए यदि पश्चिमी पद्धति में चंद्रमा किसी राशि के लगभग पहले 24° में है, तो वैदिक पद्धति में वह पिछली राशि में आता है। सरल गणित से लगभग पाँच में से चार लोग एक राशि पीछे और शेष उसी राशि में आते हैं। इन्हें सही-गलत के बजाय अलग शून्य-बिंदु वाले दो पैमाने समझना आसान है।",
          ko: "한 별자리는 30도이므로, 서양식으로 달이 별자리의 0~24도 부근에 있으면 인도식으로는 하나 앞의 별자리가 됩니다. 단순 계산으로 약 5명 중 4명은 하나 앞의 별자리, 나머지는 같은 별자리입니다. 어느 쪽이 옳다기보다 기준점이 다른 두 개의 자라고 생각하면 이해하기 쉽습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "月星座が「基準」になる場面",
        en: "Where the Moon sign becomes the reference point",
        hi: "जहाँ चंद्र राशि आधार बनती है",
        ko: "달별자리가 '기준'이 되는 경우",
      },
      body: [
        {
          ja: "月星座を知ると、インド占星術の他の計算が何を基準にしているかが見えてきます。代表的な場面を整理しました。",
          en: "Once you know your Moon sign, it becomes clear what several other Jyotish calculations are measured from. Here are the main ones.",
          hi: "चंद्र राशि जानने पर समझ आता है कि ज्योतिष की कई अन्य गणनाएँ किस आधार से मापी जाती हैं। मुख्य उदाहरण ये हैं।",
          ko: "달별자리를 알면 인도 점성술의 다른 계산들이 무엇을 기준으로 하는지 보입니다. 대표적인 경우를 정리했습니다.",
        },
      ],
      bullets: [
        {
          ja: "サディ・サティ：土星が月星座の12番目・1番目・2番目の星座を運行する約7年半の期間を指します。土星は一つの星座に約2年半とどまるためです。",
          en: "Sade Sati: the roughly seven-and-a-half-year period while Saturn transits the 12th, 1st and 2nd signs from your Moon sign, since Saturn spends about two and a half years in each sign.",
          hi: "साढ़े साती: लगभग साढ़े सात वर्ष की वह अवधि जब शनि चंद्र राशि से बारहवीं, पहली और दूसरी राशि में गोचर करता है, क्योंकि शनि हर राशि में लगभग ढाई वर्ष रहता है।",
          ko: "사데 사티: 토성이 달별자리에서 12번째·1번째·2번째 별자리를 지나는 약 7년 반의 기간입니다. 토성은 한 별자리에 약 2년 반 머물기 때문입니다.",
        },
        {
          ja: "トランジット（ゴーチャラ）：現在の惑星の位置を、ラグナからだけでなく月星座から数えて読む伝統があります。",
          en: "Transits (Gochar): there is a long tradition of counting the current planets from the Moon sign as well as from the ascendant.",
          hi: "गोचर: वर्तमान ग्रहों को लग्न के साथ-साथ चंद्र राशि से गिनकर पढ़ने की पुरानी परंपरा है।",
          ko: "트랜짓(고차라): 현재 행성의 위치를 라그나뿐 아니라 달별자리에서 세어 읽는 전통이 있습니다.",
        },
        {
          ja: "相性（アシュタクータ）：二人の月星座と月のナクシャトラから36点満点で点数を出し、18点が伝統的な目安とされます。",
          en: "Compatibility (Ashtakoota): a score out of 36 is worked out from both people's Moon signs and Moon nakshatras, with 18 as the conventional threshold.",
          hi: "गुण-मिलान (अष्टकूट): दोनों की चंद्र राशि और चंद्र नक्षत्र से 36 में से अंक निकाले जाते हैं, और 18 पारंपरिक न्यूनतम माना जाता है।",
          ko: "궁합(아쉬타쿠타): 두 사람의 달별자리와 달의 낙샤트라로 36점 만점의 점수를 내며, 18점이 전통적인 기준입니다.",
        },
        {
          ja: "ヴィムショッタリ・ダシャー：120年周期の時期区分は、月がいたナクシャトラ（月星座をさらに細かく分けた区画）の支配星から始まります。",
          en: "Vimshottari dasha: this 120-year cycle of periods begins from the lord of the nakshatra the Moon occupied — a finer division within the Moon sign.",
          hi: "विंशोत्तरी दशा: 120 वर्ष का यह चक्र उस नक्षत्र के स्वामी से शुरू होता है जिसमें चंद्रमा था — जो चंद्र राशि का और सूक्ष्म विभाजन है।",
          ko: "빔쇼타리 다샤: 120년 주기의 시기 구분은 달이 있던 낙샤트라(달별자리를 더 잘게 나눈 구획)의 지배성에서 시작됩니다.",
        },
        {
          ja: "よくある誤解：月星座が同じなら性格も運勢も同じ、というわけではありません。同じ月星座でも、ラグナや他の惑星の配置、ダシャーの時期によって表れ方は大きく変わります。",
          en: "A common misunderstanding: sharing a Moon sign does not mean sharing a personality or fortune. The same Moon sign plays out very differently depending on the ascendant, the other planets and the dasha period.",
          hi: "आम भ्रांति: एक ही चंद्र राशि होने का अर्थ एक जैसा स्वभाव या भाग्य नहीं है। लग्न, अन्य ग्रहों और दशा-काल के अनुसार एक ही चंद्र राशि बहुत अलग ढंग से प्रकट होती है।",
          ko: "흔한 오해: 달별자리가 같다고 성격이나 운세가 같은 것은 아닙니다. 같은 달별자리라도 라그나, 다른 행성의 배치, 다샤 시기에 따라 드러나는 모습은 크게 달라집니다.",
        },
      ],
    },
    {
      heading: {
        ja: "ご利用にあたって",
        en: "Before you rely on the result",
        hi: "उपयोग से पहले",
        ko: "이용 시 안내",
      },
      body: [
        {
          ja: "月星座の計算は天文学的な位置にもとづく正確なものですが、その解釈は自分を見つめ直すきっかけや楽しみとしてお使いください。占星術は医療・法律・投資などの専門的な助言に代わるものではありません。気になることがあるときは、それぞれの専門家にご相談ください。",
          en: "The Moon sign itself is calculated precisely from astronomical positions, but please treat its interpretation as a prompt for self-reflection and something to enjoy. Astrology is not a substitute for medical, legal or financial advice; for those concerns, please consult a qualified professional.",
          hi: "चंद्र राशि की गणना खगोलीय स्थितियों पर आधारित और सटीक है, पर उसकी व्याख्या को आत्म-चिंतन और आनंद के साधन के रूप में लें। ज्योतिष चिकित्सा, कानूनी या वित्तीय सलाह का विकल्प नहीं है; ऐसे विषयों में योग्य विशेषज्ञ से परामर्श करें।",
          ko: "달별자리 계산은 천문학적 위치에 근거한 정확한 것이지만, 그 해석은 자신을 돌아보는 계기나 즐거움으로 활용해 주세요. 점성술은 의료·법률·투자 등 전문적인 조언을 대신하지 않습니다. 걱정되는 일이 있다면 각 분야의 전문가와 상담하세요.",
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
          ja: "月星座とあわせて確認すると、チャートの全体像がつかみやすくなります。",
          en: "Checking these alongside your Moon sign makes the overall shape of your chart easier to grasp.",
          hi: "चंद्र राशि के साथ इन्हें देखने से कुंडली का समग्र चित्र समझना आसान होता है।",
          ko: "달별자리와 함께 확인하면 차트의 전체 모습을 파악하기 쉬워집니다.",
        },
      ],
      links: [
        {
          href: "/tools/lagna-calculator",
          label: {
            ja: "ラグナ（上昇宮）計算",
            en: "Lagna (ascendant) calculator",
            hi: "लग्न कैलकुलेटर",
            ko: "라그나(상승궁) 계산",
          },
        },
        {
          href: "/tools/nakshatra-finder",
          label: {
            ja: "ナクシャトラ（月宿）診断",
            en: "Nakshatra finder",
            hi: "नक्षत्र खोजें",
            ko: "낙샤트라 찾기",
          },
        },
        {
          href: "/tools/saturn-return",
          label: {
            ja: "サターンリターン・サディ・サティ",
            en: "Saturn return and Sade Sati",
            hi: "शनि वापसी और साढ़े साती",
            ko: "새턴 리턴과 사데 사티",
          },
        },
        {
          href: "/grahas/moon",
          label: {
            ja: "月（チャンドラ）の意味",
            en: "The Moon (Chandra) in Jyotish",
            hi: "ज्योतिष में चंद्रमा",
            ko: "달(찬드라)의 의미",
          },
        },
        {
          href: "/learn-jyotish/introduction/sidereal-zodiac-p3",
          label: {
            ja: "サイデリアル黄道とは",
            en: "The sidereal zodiac explained",
            hi: "निरयन राशिचक्र",
            ko: "항성 황도란",
          },
        },
      ],
    },
  ],
};
