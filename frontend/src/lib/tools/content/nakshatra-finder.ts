import type { ToolLongForm } from "./types";

/**
 * Long-form body for /tools/nakshatra-finder.
 *
 * Written Japanese-first. Kept deliberately distinct from its neighbours:
 * /tools/sukuyo owns 宿曜・本命宿, /tools/moon-sign owns the Moon's rashi.
 * This page is about the 27 nakshatras themselves — the pada, the
 * Vimshottari lord, the deity the panel shows — and how the birth
 * nakshatra seeds the dasha sequence.
 *
 * Everything in 結果の読み方 maps to a field NakshatraFinderPanel actually
 * renders (name, pada, ruling planet, deity, moon sign, meaning, chart
 * tendencies, remedies). The symbol is NOT shown by the panel, so it is
 * pointed to the /nakshatras/<slug> pages instead.
 */
export const nakshatraFinderLongForm: ToolLongForm = {
  slug: "nakshatra-finder",
  sections: [
    {
      heading: {
        ja: "ナクシャトラ診断の使い方",
        en: "How to use the nakshatra finder",
        hi: "नक्षत्र खोजक का उपयोग कैसे करें",
        ko: "낙샤트라 찾기 사용법",
      },
      body: [
        {
          ja: "入力するのは、生年月日・出生時刻・出生地の三つです。出生地は市区町村まで指定すると、その土地のタイムゾーンで計算されます。海外で生まれた方は、現在の居住地ではなく生まれた場所を選んでください。",
          en: "You enter three things: date of birth, time of birth and place of birth. Choose the place down to the city so the calculation uses that location's time zone. If you were born abroad, pick where you were born, not where you live now.",
          hi: "आप तीन चीज़ें दर्ज करते हैं: जन्म तिथि, जन्म समय और जन्म स्थान। स्थान को शहर तक चुनें ताकि गणना उस स्थान के समय क्षेत्र में हो। विदेश में जन्म हुआ हो तो वर्तमान निवास नहीं, जन्म स्थान चुनें।",
          ko: "입력할 것은 생년월일, 출생 시각, 출생지 세 가지입니다. 출생지를 도시 단위까지 지정하면 그 지역의 시간대로 계산됩니다. 해외에서 태어났다면 현재 사는 곳이 아니라 태어난 곳을 선택하세요.",
        },
        {
          ja: "出生時刻がわからない場合は「出生時刻がわかりませんか？」にチェックを入れてください。その場合は正午を仮の時刻として計算し、パダは表示しません。月はおよそ一日で一つのナクシャトラを進むため、境目の日に生まれた方はナクシャトラそのものが前後する可能性もあります。母子手帳などで時刻を確認できると安心です。",
          en: "If you don't know your birth time, tick \"Don't know your birth time?\". The calculation then uses noon as a placeholder and leaves the pada blank. Because the Moon moves through about one nakshatra a day, someone born on a boundary day may even land in the neighbouring nakshatra, so it is worth checking a birth record for the time.",
          hi: "जन्म समय न पता हो तो \"अपना जन्म समय नहीं पता?\" पर टिक करें। तब गणना दोपहर 12 बजे को अस्थायी समय मानकर होती है और पाद नहीं दिखाया जाता। चंद्रमा लगभग एक दिन में एक नक्षत्र पार करता है, इसलिए सीमा वाले दिन जन्मे व्यक्ति का नक्षत्र भी बदल सकता है।",
          ko: "출생 시각을 모르면 '출생 시각을 모르시나요?'에 체크하세요. 이 경우 정오를 임시 시각으로 계산하며 파다는 표시하지 않습니다. 달은 약 하루에 낙샤트라 하나를 지나므로, 경계일에 태어난 분은 낙샤트라 자체가 달라질 수도 있습니다.",
        },
        {
          ja: "計算はインド占星術の恒星黄道（サイデリアル）で、歳差補正にはラヒリ方式のアヤナムシャ（現在およそ24度）を用います。西洋占星術の星座とは基準点がずれているため、表示される月星座が雑誌の星占いで見慣れた星座と一つずれることがありますが、計算の誤りではありません。",
          en: "The calculation uses the sidereal zodiac of Jyotish with the Lahiri ayanamsa (currently about 24°) for precession. Because its reference point differs from Western astrology, the Moon sign shown may be one sign earlier than the one you know from magazine horoscopes — that is expected, not an error.",
          hi: "गणना ज्योतिष की निरयण राशि-चक्र प्रणाली में लाहिड़ी अयनांश (वर्तमान में लगभग 24°) के साथ होती है। पाश्चात्य ज्योतिष से संदर्भ-बिंदु अलग होने के कारण दिखाई गई चंद्र राशि एक राशि पीछे हो सकती है — यह त्रुटि नहीं है।",
          ko: "계산은 인도 점성술의 항성 황도(사이드리얼)와 라히리 아야남샤(현재 약 24도)를 사용합니다. 서양 점성술과 기준점이 달라 표시되는 달별자리가 익숙한 별자리보다 하나 앞설 수 있지만, 계산 오류가 아닙니다.",
        },
      ],
      bullets: [
        {
          ja: "よくある間違い①：午前と午後の取り違え（24時間表記で入力してください）",
          en: "Common mistake 1: mixing up a.m. and p.m. — enter the time in 24-hour format",
          hi: "आम गलती 1: पूर्वाह्न और अपराह्न में भ्रम — समय 24-घंटे के प्रारूप में दर्ज करें",
          ko: "흔한 실수 1: 오전과 오후 혼동 — 24시간 형식으로 입력하세요",
        },
        {
          ja: "よくある間違い②：出生地ではなく現住所を入れてしまう",
          en: "Common mistake 2: entering where you live now instead of where you were born",
          hi: "आम गलती 2: जन्म स्थान के बजाय वर्तमान पता दर्ज करना",
          ko: "흔한 실수 2: 출생지 대신 현재 주소를 입력하는 것",
        },
        {
          ja: "よくある間違い③：西洋占星術の星座と結果を直接比べて「違う」と判断してしまう",
          en: "Common mistake 3: comparing the result directly with your Western sign and concluding it is wrong",
          hi: "आम गलती 3: परिणाम की तुलना सीधे पाश्चात्य राशि से करके उसे गलत मान लेना",
          ko: "흔한 실수 3: 결과를 서양 별자리와 그대로 비교해 틀렸다고 판단하는 것",
        },
      ],
    },
    {
      heading: {
        ja: "結果の読み方：表示される項目の意味",
        en: "Reading the result: what each field means",
        hi: "परिणाम कैसे पढ़ें: प्रत्येक क्षेत्र का अर्थ",
        ko: "결과 읽는 법: 표시 항목의 의미",
      },
      body: [
        {
          ja: "結果カードの一番上に出るのが、生まれたときに月が位置していたナクシャトラの名前です。その下にサンスクリット名がデーヴァナーガリー文字で添えられ、続いて四つの項目が並びます。",
          en: "At the top of the result card is the name of the nakshatra the Moon occupied at your birth, with its Sanskrit name in Devanagari beneath it, followed by four fields.",
          hi: "परिणाम कार्ड के सबसे ऊपर उस नक्षत्र का नाम है जिसमें जन्म के समय चंद्रमा था, उसके नीचे देवनागरी में संस्कृत नाम, और फिर चार क्षेत्र।",
          ko: "결과 카드 맨 위에는 태어날 때 달이 있던 낙샤트라의 이름이, 그 아래에 데바나가리 문자로 산스크리트 이름이 표시되고, 이어서 네 가지 항목이 나옵니다.",
        },
        {
          ja: "例えば、月が恒星黄道の牡牛座15度にあった場合、結果は「ローヒニ／パダ2／支配星：月／神格：ブラフマ（プラジャーパティ）／月星座：牡牛座」となります。ローヒニは牡牛座10度から23度20分までを占め、15度はその二番目の区画（13度20分〜16度40分）に入るためです。これは説明のための架空の例です。",
          en: "For example, if the Moon stood at 15° sidereal Taurus, the result would read: Rohini / Pada 2 / Ruling planet: Moon / Deity: Brahma (Prajapati) / Moon sign: Taurus. Rohini spans Taurus 10°00′–23°20′, and 15° falls in its second quarter (13°20′–16°40′). This is an illustrative example only.",
          hi: "उदाहरण के लिए, यदि चंद्रमा निरयण वृषभ 15° पर हो, तो परिणाम होगा: रोहिणी / पाद 2 / स्वामी ग्रह: चंद्र / देवता: ब्रह्मा (प्रजापति) / चंद्र राशि: वृषभ। रोहिणी वृषभ 10°00′–23°20′ तक है, और 15° उसके दूसरे भाग (13°20′–16°40′) में आता है। यह केवल उदाहरण है।",
          ko: "예를 들어 달이 항성 황도 황소자리 15도에 있었다면 결과는 '로히니 / 파다 2 / 지배 행성: 달 / 신격: 브라흐마(프라자파티) / 달별자리: 황소자리'가 됩니다. 로히니는 황소자리 10°00′–23°20′을 차지하고, 15도는 두 번째 구획(13°20′–16°40′)에 들어가기 때문입니다. 설명용 가상 예시입니다.",
        },
      ],
      bullets: [
        {
          ja: "ナクシャトラ：黄道360度を27等分した一区画（13度20分ずつ）。月は約27.3日で黄道を一周するため、ほぼ一日に一つずつ進みます。",
          en: "Nakshatra: one of 27 equal divisions of the 360° ecliptic, 13°20′ each. The Moon circles the ecliptic in about 27.3 days, so it moves through roughly one a day.",
          hi: "नक्षत्र: 360° क्रांतिवृत्त के 27 बराबर भागों में से एक, प्रत्येक 13°20′। चंद्रमा लगभग 27.3 दिन में चक्कर पूरा करता है, इसलिए लगभग एक दिन में एक नक्षत्र पार करता है।",
          ko: "낙샤트라: 황도 360도를 27등분한 구획(각 13°20′). 달은 약 27.3일에 황도를 한 바퀴 돌므로 거의 하루에 하나씩 지나갑니다.",
        },
        {
          ja: "パダ：一つのナクシャトラをさらに四等分した区画（3度20分ずつ）。27×4で全108パダとなり、同じナクシャトラでもパダによって読み方に細かな違いが出ます。出生時刻がないと確定できません。",
          en: "Pada: a quarter of a nakshatra, 3°20′ each, giving 108 padas in all. The pada adds nuance within the same nakshatra and cannot be fixed without a birth time.",
          hi: "पाद: नक्षत्र का एक-चौथाई भाग, प्रत्येक 3°20′, कुल 108 पाद। पाद एक ही नक्षत्र के भीतर सूक्ष्म अंतर दिखाता है और जन्म समय के बिना निश्चित नहीं होता।",
          ko: "파다: 낙샤트라를 다시 4등분한 구획(각 3°20′)으로, 모두 108개입니다. 같은 낙샤트라 안에서 세밀한 차이를 보여주며, 출생 시각 없이는 확정할 수 없습니다.",
        },
        {
          ja: "支配星：そのナクシャトラを司る惑星で、ヴィムショッタリ・ダシャーの起点になります。九つの惑星が決まった順序で三回ずつ割り当てられています。",
          en: "Ruling planet: the graha that governs the nakshatra and the starting point of the Vimshottari dasha. The nine grahas are assigned in a fixed order, three times each.",
          hi: "स्वामी ग्रह: नक्षत्र का अधिपति ग्रह और विंशोत्तरी दशा का आरंभ-बिंदु। नौ ग्रह एक निश्चित क्रम में तीन-तीन बार आते हैं।",
          ko: "지배 행성: 그 낙샤트라를 다스리는 행성으로 빔쇼타리 다샤의 출발점입니다. 아홉 행성이 정해진 순서로 세 번씩 배정됩니다.",
        },
        {
          ja: "神格：各ナクシャトラに結びつけられたヴェーダの神。性質を象徴的に表すもので、レメディ欄の「神格に祈る」提案にも使われます。",
          en: "Deity: the Vedic deity associated with the nakshatra. It symbolises the nakshatra's character and is also used in the deity suggestion in the remedies card.",
          hi: "देवता: नक्षत्र से जुड़े वैदिक देवता। यह नक्षत्र के स्वभाव का प्रतीक है और उपाय वाले भाग में भी प्रयुक्त होता है।",
          ko: "신격: 각 낙샤트라에 연결된 베다의 신. 성격을 상징적으로 나타내며, 레메디 항목의 제안에도 쓰입니다.",
        },
        {
          ja: "月星座（ラーシ）：月が位置する十二星座。一つの星座には二つと四分の一のナクシャトラ（9パダ）が入ります。",
          en: "Moon sign (rashi): the zodiac sign the Moon occupies. Each sign holds two and a quarter nakshatras, or nine padas.",
          hi: "चंद्र राशि: वह राशि जिसमें चंद्रमा है। प्रत्येक राशि में सवा दो नक्षत्र यानी नौ पाद आते हैं।",
          ko: "달별자리(라시): 달이 있는 별자리. 한 별자리에는 2와 4분의 1개의 낙샤트라, 즉 9개의 파다가 들어갑니다.",
        },
        {
          ja: "意味・あなたのチャートについて・おすすめのレメディ：ナクシャトラの水準での一般的な傾向と、支配星・神格にちなんだ実践の提案です。チャート全体を読んだ結論ではありません。",
          en: "What it means, For your chart, Suggested remedies: general tendencies at the nakshatra level and practices tied to the ruling planet and deity — not a conclusion from reading the whole chart.",
          hi: "अर्थ, आपकी कुंडली के लिए, सुझाए गए उपाय: नक्षत्र स्तर की सामान्य प्रवृत्तियाँ और स्वामी ग्रह व देवता से जुड़े अभ्यास — पूरी कुंडली का निष्कर्ष नहीं।",
          ko: "의미·당신의 차트에서는·추천 레메디: 낙샤트라 수준의 일반적 경향과 지배 행성·신격에 관련된 실천 제안이며, 전체 차트를 읽은 결론은 아닙니다.",
        },
      ],
    },
    {
      heading: {
        ja: "背景知識：西洋占星術との違い",
        en: "Background: how this differs from Western astrology",
        hi: "पृष्ठभूमि: पाश्चात्य ज्योतिष से अंतर",
        ko: "배경 지식: 서양 점성술과의 차이",
      },
      body: [
        {
          ja: "西洋占星術は春分点を牡羊座0度とする回帰黄道（トロピカル）を使い、主に太陽星座で性格を語ります。インド占星術は実際の星々を基準にした恒星黄道を使い、太陽よりも月を重視します。そして月の位置を、十二星座よりも細かい27のナクシャトラで捉えます。",
          en: "Western astrology uses the tropical zodiac, fixing 0° Aries to the spring equinox, and speaks mainly in terms of the Sun sign. Jyotish uses the sidereal zodiac anchored to the stars and gives the Moon more weight than the Sun, locating it within 27 nakshatras — a far finer grid than the twelve signs.",
          hi: "पाश्चात्य ज्योतिष सायन राशि-चक्र का उपयोग करता है, जिसमें वसंत विषुव को मेष 0° माना जाता है, और मुख्यतः सूर्य राशि की बात करता है। ज्योतिष तारों पर आधारित निरयण राशि-चक्र अपनाता है, सूर्य से अधिक चंद्रमा को महत्व देता है और उसे 27 नक्षत्रों में देखता है।",
          ko: "서양 점성술은 춘분점을 양자리 0도로 하는 회귀 황도(트로피컬)를 쓰고 주로 태양 별자리로 성격을 말합니다. 인도 점성술은 실제 별을 기준으로 한 항성 황도를 쓰며, 태양보다 달을 중시하고 그 위치를 12별자리보다 세밀한 27개 낙샤트라로 파악합니다.",
        },
        {
          ja: "西洋占星術には、ナクシャトラに相当する区分は通常の実践では用いられません。一方インド占星術では、ナクシャトラは性格の読み解きだけでなく、相性判定や日取り選び、そして次に説明するダシャー（運気の時期区分）の計算にまで使われる、土台となる要素です。",
          en: "Mainstream Western practice has no equivalent of the nakshatras. In Jyotish they are foundational: used not only to describe temperament but for compatibility, choosing auspicious dates, and calculating the dasha periods described next.",
          hi: "मुख्यधारा पाश्चात्य ज्योतिष में नक्षत्रों जैसा विभाजन प्रयोग नहीं होता। ज्योतिष में ये आधारभूत हैं: स्वभाव ही नहीं, गुण मिलान, मुहूर्त और आगे बताई गई दशा की गणना में भी इनका उपयोग होता है।",
          ko: "일반적인 서양 점성술에서는 낙샤트라에 해당하는 구분을 쓰지 않습니다. 인도 점성술에서는 성격 해석뿐 아니라 궁합, 택일, 그리고 다음에 설명할 다샤 계산에까지 쓰이는 기초 요소입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "生まれのナクシャトラからダシャーが始まる仕組み",
        en: "How your birth nakshatra starts the dasha sequence",
        hi: "जन्म नक्षत्र से दशा-क्रम कैसे आरंभ होता है",
        ko: "탄생 낙샤트라에서 다샤가 시작되는 원리",
      },
      body: [
        {
          ja: "ナクシャトラを知る最大の実用的な意味は、ヴィムショッタリ・ダシャーの出発点がわかることです。ヴィムショッタリ・ダシャーは九つの惑星の期間を合計120年で巡る周期で、最初の期間は「生まれたときの月のナクシャトラの支配星」から始まります。",
          en: "The most practical reason to know your nakshatra is that it fixes the starting point of the Vimshottari dasha — a 120-year cycle of nine planetary periods whose first period belongs to the ruling planet of the Moon's nakshatra at birth.",
          hi: "नक्षत्र जानने का सबसे व्यावहारिक कारण यह है कि इससे विंशोत्तरी दशा का आरंभ-बिंदु तय होता है — नौ ग्रहों की अवधियों का 120 वर्ष का चक्र, जिसकी पहली अवधि जन्म के समय चंद्र नक्षत्र के स्वामी की होती है।",
          ko: "낙샤트라를 아는 가장 실용적인 의미는 빔쇼타리 다샤의 출발점을 알 수 있다는 것입니다. 빔쇼타리 다샤는 아홉 행성의 주기를 합계 120년으로 도는 주기이며, 첫 주기는 태어날 때 달이 있던 낙샤트라의 지배 행성에서 시작됩니다.",
        },
        {
          ja: "さらに、月がそのナクシャトラをどこまで進んでいたかによって、最初の期間の残りの長さが決まります。先ほどの例（牡牛座15度＝ローヒニ）で考えてみましょう。ローヒニの幅13度20分のうち、月はすでに5度進んでいるので、全体の8分の3が経過済みです。ローヒニの支配星である月のダシャーは10年なので、生まれた時点で残っているのは10年×8分の5＝6.25年、つまり約6年3か月です。その後は火星7年、ラーフ18年、木星16年……と順に続きます。",
          en: "How far the Moon had travelled through the nakshatra then sets how much of that first period remains. Take the earlier example, 15° Taurus in Rohini: of Rohini's 13°20′ the Moon has covered 5°, or three-eighths. Rohini's lord is the Moon, whose dasha lasts 10 years, so 10 × 5/8 = 6.25 years — about six years and three months — remain at birth. Then come Mars 7 years, Rahu 18, Jupiter 16, and so on.",
          hi: "चंद्रमा नक्षत्र में कितना आगे बढ़ चुका था, इससे पहली अवधि का शेष भाग तय होता है। पिछले उदाहरण (वृषभ 15°, रोहिणी) में रोहिणी के 13°20′ में से चंद्रमा 5° यानी तीन-आठवाँ भाग पार कर चुका है। रोहिणी का स्वामी चंद्र है, जिसकी दशा 10 वर्ष की है, अतः जन्म के समय 10 × 5/8 = 6.25 वर्ष शेष रहते हैं। फिर मंगल 7, राहु 18, गुरु 16 वर्ष आदि आते हैं।",
          ko: "또한 달이 그 낙샤트라를 얼마나 지나왔는지에 따라 첫 주기의 남은 길이가 정해집니다. 앞의 예(황소자리 15도 = 로히니)에서 로히니의 폭 13°20′ 중 달은 이미 5도, 즉 8분의 3을 지났습니다. 로히니의 지배 행성인 달의 다샤는 10년이므로 출생 시 남은 기간은 10년 × 8분의 5 = 6.25년, 약 6년 3개월입니다. 그 뒤 화성 7년, 라후 18년, 목성 16년…으로 이어집니다.",
        },
        {
          ja: "九つの支配星と、それぞれが受け持つナクシャトラ・ダシャーの年数は次のとおりです。この並び順そのものがダシャーの進む順序です。",
          en: "The nine lords, the nakshatras each governs, and their dasha lengths are listed below. This order is also the order in which the dashas run.",
          hi: "नौ स्वामी ग्रह, उनके नक्षत्र और दशा-अवधि नीचे दी गई है। यही क्रम दशाओं के चलने का भी क्रम है।",
          ko: "아홉 지배 행성과 각각이 맡은 낙샤트라, 다샤 연수는 다음과 같습니다. 이 순서가 곧 다샤가 진행되는 순서입니다.",
        },
      ],
      bullets: [
        {
          ja: "ケトゥ（7年）：アシュヴィニ、マガ、ムーラ",
          en: "Ketu (7 years): Ashwini, Magha, Mula",
          hi: "केतु (7 वर्ष): अश्विनी, मघा, मूल",
          ko: "케투(7년): 아쉬위니, 마가, 물라",
        },
        {
          ja: "金星（20年）：バラニ、プルヴァ・パールグニ、プルヴァ・アシャーダ",
          en: "Venus (20 years): Bharani, Purva Phalguni, Purva Ashadha",
          hi: "शुक्र (20 वर्ष): भरणी, पूर्वा फाल्गुनी, पूर्वाषाढ़ा",
          ko: "금성(20년): 바라니, 푸르바 팔구니, 푸르바 아샤다",
        },
        {
          ja: "太陽（6年）：クリッティカ、ウッタラ・パールグニ、ウッタラ・アシャーダ",
          en: "Sun (6 years): Krittika, Uttara Phalguni, Uttara Ashadha",
          hi: "सूर्य (6 वर्ष): कृत्तिका, उत्तरा फाल्गुनी, उत्तराषाढ़ा",
          ko: "태양(6년): 크리티카, 우타라 팔구니, 우타라 아샤다",
        },
        {
          ja: "月（10年）：ローヒニ、ハスタ、シュラヴァナ",
          en: "Moon (10 years): Rohini, Hasta, Shravana",
          hi: "चंद्र (10 वर्ष): रोहिणी, हस्त, श्रवण",
          ko: "달(10년): 로히니, 하스타, 슈라바나",
        },
        {
          ja: "火星（7年）：ムリガシーラ、チトラ、ダニシュタ",
          en: "Mars (7 years): Mrigashira, Chitra, Dhanishta",
          hi: "मंगल (7 वर्ष): मृगशिरा, चित्रा, धनिष्ठा",
          ko: "화성(7년): 므리가시라, 치트라, 다니슈타",
        },
        {
          ja: "ラーフ（18年）：アールドラ、スワティ、シャタビシャ",
          en: "Rahu (18 years): Ardra, Swati, Shatabhisha",
          hi: "राहु (18 वर्ष): आर्द्रा, स्वाति, शतभिषा",
          ko: "라후(18년): 아르드라, 스와티, 샤타비샤",
        },
        {
          ja: "木星（16年）：プナルヴァス、ヴィシャーカ、プルヴァ・バドラパダ",
          en: "Jupiter (16 years): Punarvasu, Vishakha, Purva Bhadrapada",
          hi: "गुरु (16 वर्ष): पुनर्वसु, विशाखा, पूर्वा भाद्रपद",
          ko: "목성(16년): 푸나르바수, 비샤카, 푸르바 바드라파다",
        },
        {
          ja: "土星（19年）：プシュヤ、アヌラーダ、ウッタラ・バドラパダ",
          en: "Saturn (19 years): Pushya, Anuradha, Uttara Bhadrapada",
          hi: "शनि (19 वर्ष): पुष्य, अनुराधा, उत्तरा भाद्रपद",
          ko: "토성(19년): 푸샤, 아누라다, 우타라 바드라파다",
        },
        {
          ja: "水星（17年）：アシュレシャ、ジェーシュタ、レヴァティ",
          en: "Mercury (17 years): Ashlesha, Jyeshtha, Revati",
          hi: "बुध (17 वर्ष): आश्लेषा, ज्येष्ठा, रेवती",
          ko: "수성(17년): 아슬레샤, 제슈타, 레바티",
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
          ja: "ナクシャトラは手軽に調べられる一方で、誤解も生まれやすい要素です。結果を受け取るときに知っておきたい点をまとめました。",
          en: "Nakshatras are easy to look up, which also makes them easy to misread. Here are a few points worth keeping in mind.",
          hi: "नक्षत्र आसानी से पता चल जाता है, इसलिए गलतफ़हमी भी आसानी से होती है। कुछ बातें ध्यान में रखें।",
          ko: "낙샤트라는 쉽게 찾을 수 있는 만큼 오해도 생기기 쉽습니다. 결과를 볼 때 알아 두면 좋은 점을 정리했습니다.",
        },
      ],
      bullets: [
        {
          ja: "「吉のナクシャトラ・凶のナクシャトラがある」——27のナクシャトラはそれぞれ異なる性質を持つだけで、生まれのナクシャトラによって人生の良し悪しが決まるわけではありません。",
          en: "\"Some nakshatras are lucky and some unlucky\" — each of the 27 simply has a different character; your birth nakshatra does not decide whether your life goes well.",
          hi: "\"कुछ नक्षत्र शुभ और कुछ अशुभ होते हैं\" — 27 नक्षत्रों का केवल स्वभाव अलग है; जन्म नक्षत्र जीवन का अच्छा-बुरा तय नहीं करता।",
          ko: "'길한 낙샤트라와 흉한 낙샤트라가 있다' — 27개는 각자 성격이 다를 뿐, 탄생 낙샤트라가 인생의 길흉을 정하지는 않습니다.",
        },
        {
          ja: "「ナクシャトラだけで性格がすべてわかる」——実際のチャートではラグナ（上昇宮）や惑星の配置、ハウスも合わせて読みます。ナクシャトラは重要ですが、その一部です。",
          en: "\"The nakshatra tells you everything about a person\" — a real reading also weighs the ascendant, planetary placements and houses. The nakshatra matters, but it is one part.",
          hi: "\"केवल नक्षत्र से पूरा स्वभाव पता चल जाता है\" — वास्तविक विश्लेषण में लग्न, ग्रह-स्थिति और भाव भी देखे जाते हैं। नक्षत्र महत्वपूर्ण है, पर एक हिस्सा ही है।",
          ko: "'낙샤트라만으로 성격을 다 알 수 있다' — 실제 차트에서는 라그나, 행성 배치, 하우스도 함께 읽습니다. 낙샤트라는 중요하지만 그 일부입니다.",
        },
        {
          ja: "「支配星が凶星なら悪い時期から始まる」——ダシャーの質は、その惑星がチャートのどこに、どんな状態で置かれているかで変わります。惑星名だけで判断はできません。",
          en: "\"If the lord is a malefic, life starts with a bad period\" — the quality of a dasha depends on where and how that planet sits in your chart, not on the planet's name alone.",
          hi: "\"स्वामी पाप ग्रह हो तो जीवन बुरी दशा से शुरू होता है\" — दशा का फल इस पर निर्भर करता है कि वह ग्रह कुंडली में कहाँ और किस स्थिति में है, केवल नाम पर नहीं।",
          ko: "'지배 행성이 흉성이면 나쁜 시기로 시작한다' — 다샤의 성격은 그 행성이 차트의 어디에 어떤 상태로 있는지에 따라 달라지며, 행성 이름만으로는 판단할 수 없습니다.",
        },
        {
          ja: "「ナクシャトラと宿曜の本命宿は別物」——どちらも同じ27区分に由来します。宿曜の本命宿については宿曜のページで詳しく解説しています。",
          en: "\"The nakshatra and the Sukuyō birth mansion are unrelated\" — both come from the same 27 divisions. The Sukuyō page covers the birth mansion in detail.",
          hi: "\"नक्षत्र और सुक्युō का जन्म-भवन अलग चीज़ें हैं\" — दोनों एक ही 27 विभाजनों से आते हैं। सुक्युō पृष्ठ पर इसका विस्तार है।",
          ko: "'낙샤트라와 수쿠요 본명수는 별개다' — 둘 다 같은 27구분에서 유래합니다. 본명수는 수쿠요 페이지에서 자세히 설명합니다.",
        },
      ],
    },
    {
      heading: {
        ja: "ご利用にあたって",
        en: "Before you use the results",
        hi: "परिणामों का उपयोग करने से पहले",
        ko: "이용하시기 전에",
      },
      body: [
        {
          ja: "占星術は、自分を見つめ直すきっかけや楽しみとしてお使いください。結果は医療・法律・金融などの専門的な助言に代わるものではなく、健康やお金、契約に関わる判断は必ず専門家にご相談ください。",
          en: "Please use astrology as a prompt for self-reflection and for enjoyment. The results are not a substitute for medical, legal or financial advice; for decisions about health, money or contracts, always consult a qualified professional.",
          hi: "कृपया ज्योतिष का उपयोग आत्म-चिंतन और आनंद के लिए करें। परिणाम चिकित्सा, कानूनी या वित्तीय सलाह का विकल्प नहीं हैं; स्वास्थ्य, धन या अनुबंध संबंधी निर्णयों के लिए सदैव योग्य विशेषज्ञ से परामर्श लें।",
          ko: "점성술은 자신을 돌아보는 계기나 즐거움으로 활용해 주세요. 결과는 의료·법률·금융 등 전문적인 조언을 대신하지 않으며, 건강·돈·계약에 관한 판단은 반드시 전문가와 상담하세요.",
        },
        {
          ja: "どのナクシャトラに生まれても、それだけで不運が決まることはありません。レメディ欄の提案も、気持ちを整えるための習慣として、無理のない範囲で取り入れていただければ十分です。",
          en: "No nakshatra seals anyone's fate. The remedy suggestions are best treated as calming habits to adopt only as far as feels comfortable.",
          hi: "कोई भी नक्षत्र किसी का दुर्भाग्य तय नहीं करता। उपायों को मन को शांत करने वाली आदतों के रूप में, जितना सहज लगे उतना ही अपनाएँ।",
          ko: "어떤 낙샤트라에 태어나도 그것만으로 불운이 정해지지 않습니다. 레메디 제안은 마음을 다스리는 습관으로, 무리 없는 범위에서 받아들이시면 충분합니다.",
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
          ja: "ナクシャトラがわかったら、次はダシャーの流れや、各ナクシャトラの象徴・詳しい性質を見てみましょう。",
          en: "Once you know your nakshatra, explore your dasha timeline and each nakshatra's symbol and character in more depth.",
          hi: "नक्षत्र जानने के बाद अपनी दशा-समयरेखा और प्रत्येक नक्षत्र के प्रतीक व स्वभाव को विस्तार से देखें।",
          ko: "낙샤트라를 알았다면 다음으로 다샤의 흐름과 각 낙샤트라의 상징·성격을 더 자세히 살펴보세요.",
        },
      ],
      links: [
        {
          href: "/tools/dasha-calculator",
          label: {
            ja: "ヴィムショッタリ・ダシャー計算",
            en: "Vimshottari dasha calculator",
            hi: "विंशोत्तरी दशा कैलकुलेटर",
            ko: "빔쇼타리 다샤 계산기",
          },
        },
        {
          href: "/nakshatras",
          label: {
            ja: "27ナクシャトラ一覧（象徴・神格・性質）",
            en: "All 27 nakshatras: symbols, deities and character",
            hi: "सभी 27 नक्षत्र: प्रतीक, देवता और स्वभाव",
            ko: "27 낙샤트라 목록(상징·신격·성격)",
          },
        },
        {
          href: "/tools/sukuyo",
          label: {
            ja: "宿曜占星術で本命宿を調べる",
            en: "Find your Sukuyō birth mansion",
            hi: "सुक्युō जन्म-भवन जानें",
            ko: "수쿠요 본명수 찾기",
          },
        },
        {
          href: "/tools/birth-time-check",
          label: {
            ja: "出生時刻の精度をチェック",
            en: "Check how sensitive your chart is to birth time",
            hi: "जन्म समय की संवेदनशीलता जाँचें",
            ko: "출생 시각 정확도 확인",
          },
        },
        {
          href: "/learn-jyotish/nakshatras",
          label: {
            ja: "ナクシャトラを基礎から学ぶ",
            en: "Learn the nakshatras from the basics",
            hi: "नक्षत्रों को मूल से सीखें",
            ko: "낙샤트라 기초부터 배우기",
          },
        },
      ],
    },
  ],
};
