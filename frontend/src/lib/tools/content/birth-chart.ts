import type { ToolLongForm } from "./types";

/**
 * Long-form body for /tools/birth-chart.
 *
 * Written Japanese-first, matching sukuyo.ts and compatibility.ts. This is
 * the site's most foundational tool — the argument has to establish what a
 * kundli actually is before anything else on the site (dasha, yogas,
 * ashtakavarga) makes sense, since all of it is read against this one
 * chart. Four sections: what the chart is, how to read the two formats,
 * what the planetary details add, and an honest account of what a static
 * chart cannot tell you on its own.
 */
export const birthChartLongForm: ToolLongForm = {
  slug: "birth-chart",
  sections: [
    {
      heading: {
        ja: "クンダリ（出生図）とは何か",
        en: "What a kundli (birth chart) actually is",
        hi: "कुंडली (जन्म कुंडली) वास्तव में क्या है",
        ko: "쿤달리(출생 차트)란 실제로 무엇인가",
      },
      body: [
        {
          ja: "クンダリとは、生まれた瞬間に東の地平線から昇っていた星座（ラグナ、上昇宮）を第一室として、そこから十二の室（ハウス）を反時計回りに並べ、その上に九つの惑星の位置を重ねた図です。地図に例えるなら、ラグナは「北をどちらに置くか」を決める基準線にあたります。同じ日に生まれた人でも、生まれた場所と時刻が違えばラグナが変わり、図全体の向きが変わります。",
          en: "A kundli places the sign rising on the eastern horizon at the moment of birth — the Lagna, or ascendant — as the first house, then arranges the remaining eleven houses counter-clockwise from it, with the nine planets plotted onto that frame. Think of the Lagna as the compass rose on a map: it decides which way the whole chart faces. Two people born on the same day in different places or at different times end up with different ascendants, and therefore a differently-oriented chart even when the planets themselves are in nearly the same signs.",
          hi: "कुंडली जन्म के क्षण पूर्वी क्षितिज पर उदय होने वाली राशि — लग्न — को पहला भाव मानकर, उससे शेष ग्यारह भावों को वामावर्त क्रम में सजाती है, और उस ढाँचे पर नौ ग्रहों की स्थिति अंकित करती है। लग्न को मानचित्र की दिशा-सूचक रेखा समझें — यह तय करती है कि पूरी कुंडली किस ओर उन्मुख है।",
          ko: "쿤달리는 태어난 순간 동쪽 지평선에서 떠오르던 별자리 — 라그나, 즉 상승궁 — 를 첫 번째 하우스로 삼고, 거기서부터 나머지 열한 개 하우스를 반시계 방향으로 배열한 뒤, 그 틀 위에 아홉 행성의 위치를 표시한 그림입니다. 라그나를 지도의 방위 기준선이라고 생각하면 됩니다 — 그것이 차트 전체가 어느 쪽을 향하는지를 결정합니다.",
        },
        {
          ja: "もう一つ重要なのは、インド占星術が「サイデリアル黄道（恒星黄道）」を用いる点です。西洋占星術の多くはトロピカル黄道（春分点基準）を使いますが、両者の間には歳差運動により約24度のずれ（アヤナムシャ）が生じています。当ツールはラヒリ・アヤナムシャという標準的な計算方式を用いており、これはインドの官庁暦でも採用されている方式です。西洋の太陽星座と、ここで表示される太陽の星座が一つずれて見えることがあるのは、単位の違いであって誤りではありません。",
          en: "The other essential piece is that Jyotish uses the sidereal zodiac, anchored to the actual fixed stars, rather than the tropical zodiac most Western astrology uses, which is anchored to the equinox. Precession has opened a gap of roughly 24 degrees between the two — the ayanamsha. This tool uses the Lahiri ayanamsha, the standard also used in India's official civil calendar. If your Sun sign here differs by one sign from a Western horoscope, that's the two zodiacs disagreeing about where zero degrees is, not a calculation error.",
          hi: "एक और आवश्यक बात यह है कि ज्योतिष निरयण (सायडेरियल) राशिचक्र का उपयोग करता है, जो वास्तविक स्थिर तारों पर आधारित है, न कि अधिकांश पश्चिमी ज्योतिष द्वारा उपयोग किए जाने वाले सायन राशिचक्र का। पुरस्सरण के कारण दोनों में लगभग 24 डिग्री का अंतर — अयनांश — बन गया है। यह उपकरण लाहिड़ी अयनांश का उपयोग करता है।",
          ko: "또 하나 중요한 점은 조티시가 실제 항성에 고정된 항성 황도(사이더리얼)를 사용한다는 것입니다. 대부분의 서양 점성술이 사용하는 춘분점 기준의 회귀 황도와는 다릅니다. 세차운동으로 인해 두 황도 사이에는 약 24도의 차이 — 아야남샤 — 가 생겼습니다. 이 도구는 인도의 공식 달력에서도 쓰이는 표준 방식인 라히리 아야남샤를 사용합니다.",
        },
      ],
    },
    {
      heading: {
        ja: "北インド式と南インド式、どちらを見ればよいか",
        en: "North Indian or South Indian format — which to read",
        hi: "उत्तर भारतीय या दक्षिण भारतीय प्रारूप — कौन सा देखें",
        ko: "북인도식과 남인도식, 어느 쪽을 봐야 하나",
      },
      body: [
        {
          ja: "二つの様式は同じ計算結果を別の描き方で示しているだけで、内容に違いはありません。北インド式（菱形）は室（ハウス）の位置が図の中で固定されており、第一室は常に上部中央です。星座の方はラグナに応じて室ごとに移動します。南インド式（正方形）はその逆で、星座の位置がマス目として固定されており、ラグナがどの位置にあるかを印で示します。",
          en: "The two formats show the same calculation, drawn two different ways — there's no difference in content. In the North Indian (diamond) layout, the houses are fixed in the drawing, with the first house always at the top centre; the signs move from house to house depending on the ascendant. The South Indian (square) layout does the reverse: the signs are fixed in their grid cells, and the ascendant is marked wherever it happens to fall.",
          hi: "दोनों प्रारूप एक ही गणना को दो भिन्न ढंग से दर्शाते हैं — विषय-वस्तु में कोई अंतर नहीं। उत्तर भारतीय (हीरा) रूप में भाव चित्र में स्थिर रहते हैं, पहला भाव सदैव ऊपर मध्य में; लग्न के अनुसार राशियाँ भाव-दर-भाव खिसकती हैं। दक्षिण भारतीय (वर्ग) रूप इसका उलटा है।",
          ko: "두 형식은 같은 계산 결과를 다르게 그린 것일 뿐, 내용에는 차이가 없습니다. 북인도식(마름모) 배치는 하우스가 그림 안에 고정되어 첫 번째 하우스가 항상 위쪽 중앙에 있고, 별자리가 상승궁에 따라 하우스마다 이동합니다. 남인도식(사각형) 배치는 그 반대로 별자리가 격자 칸에 고정되고, 상승궁이 어디에 해당하는지 표시로 나타냅니다.",
        },
        {
          ja: "実務的な違いは、目が慣れる速さにあります。南インド式は星座の位置が誰の図でも同じなので、複数人の図を並べて比較するときに読みやすいという声があります。北インド式は自分のラグナを中心に見る癖がつきやすく、伝統的に北インドや西インドで主流です。どちらを基準に学び始めても、もう一方は同じデータの並べ替えに過ぎないとわかれば、すぐに読めるようになります。このページでは北インド式で表示し、結果の下の「すべてのチャートを見る」から開くワークスペースで南インド式に切り替えられます。",
          en: "The practical difference is mostly how quickly your eye adjusts. Because the signs sit in the same cells for everyone in the South Indian format, some people find it easier to compare several charts side by side. The North Indian format trains you to read around your own ascendant, and is traditionally dominant in northern and western India. Whichever you learn first, the other is just a rearrangement of the same data, and reads quickly once that clicks. This page draws the North Indian layout; the full workspace, opened from the link below the result, can switch to South Indian.",
          hi: "व्यावहारिक अंतर मुख्यतः इस बात में है कि आँख कितनी जल्दी अभ्यस्त होती है। दक्षिण भारतीय प्रारूप में राशियाँ सभी के चित्र में समान स्थान पर रहती हैं, इसलिए कई कुंडलियों की तुलना करना कुछ लोगों को आसान लगता है। यह पृष्ठ उत्तर भारतीय प्रारूप दिखाता है; परिणाम के नीचे दिए लिंक से खुलने वाले पूर्ण वर्कस्पेस में दक्षिण भारतीय प्रारूप चुना जा सकता है।",
          ko: "실질적인 차이는 대체로 눈이 얼마나 빨리 적응하느냐에 있습니다. 남인도식은 별자리가 누구의 차트에서든 같은 칸에 있으므로, 여러 차트를 나란히 비교할 때 더 쉽다고 느끼는 사람들이 있습니다. 북인도식은 자신의 상승궁을 중심으로 읽는 습관을 길러주며, 전통적으로 북인도와 서인도에서 주로 쓰입니다. 이 페이지는 북인도식으로 표시하며, 결과 아래 링크로 여는 전체 워크스페이스에서 남인도식으로 전환할 수 있습니다.",
        },
      ],
    },
    {
      heading: {
        ja: "惑星の詳細カードが示していること",
        en: "What the planet detail cards add",
        hi: "ग्रह विवरण कार्ड क्या दर्शाते हैं",
        ko: "행성 세부 정보 카드가 보여주는 것",
      },
      body: [
        {
          ja: "図だけでは、各惑星が何度の位置にあり、どのナクシャトラ（月宿）にあり、逆行しているかどうかは分かりません。惑星ごとのカードはこれを数値で示します。特に品位（ディグニティ）——高揚・減衰・本来の座・中立——は重要です。同じ「第七室に金星」でも、金星が高揚（魚座）にあるか減衰（乙女座）にあるかで、古典的な読み方は大きく変わります。",
          en: "The diagram alone doesn't show each planet's exact degree, which nakshatra it occupies, or whether it's retrograde. The per-planet cards give all three. Dignity in particular — exalted, debilitated, own sign, or neutral — matters: “Venus in the seventh house” reads very differently depending on whether that Venus is exalted (in Pisces) or debilitated (in Virgo), and the classical tradition treats those as materially different placements, not a footnote.",
          hi: "केवल चित्र से यह पता नहीं चलता कि प्रत्येक ग्रह कितने अंश पर है, किस नक्षत्र में है, या वक्री है या नहीं। प्रत्येक ग्रह का कार्ड यह तीनों दिखाता है। विशेष रूप से गरिमा (डिग्निटी) — उच्च, नीच, स्वराशि या सम — महत्वपूर्ण है।",
          ko: "그림만으로는 각 행성이 정확히 몇 도에 있는지, 어느 낙샤트라에 있는지, 역행 중인지 알 수 없습니다. 행성별 카드는 이 세 가지를 보여줍니다. 특히 품위(디그니티) — 고양, 쇠약, 자신의 별자리, 중립 — 이 중요합니다.",
        },
        {
          ja: "ナクシャトラは星座よりも細かい区分（一星座に約2.25個のナクシャトラが収まります）で、その惑星の働き方に色合いを加えます。パダ（1〜4）はナクシャトラをさらに四分割したもので、より細かい調整にあたります。逆行は惑星が地球から見て見かけ上後退している状態で、その惑星のテーマが外に向かうより内省的に働くと古典的に読まれます。",
          en: "Nakshatras are a finer division than signs — roughly 2.25 nakshatras fit inside each sign — and add a shade of colour to how a planet operates. Pada (1 through 4) divides each nakshatra into quarters again, a finer adjustment still. Retrograde describes a planet appearing to move backward from Earth's vantage point, and is classically read as that planet's themes turning inward rather than outward.",
          hi: "नक्षत्र राशियों से सूक्ष्म विभाजन हैं (एक राशि में लगभग 2.25 नक्षत्र समाते हैं), और वे ग्रह के कार्य करने के ढंग में एक रंगत जोड़ते हैं। पाद (1 से 4) प्रत्येक नक्षत्र को चार भागों में बाँटता है।",
          ko: "낙샤트라는 별자리보다 더 세밀한 구분이며(한 별자리에 약 2.25개의 낙샤트라가 들어갑니다), 행성이 작동하는 방식에 색채를 더합니다. 파다(1~4)는 각 낙샤트라를 다시 네 등분한 것으로, 더 세밀한 조정에 해당합니다.",
        },
      ],
    },
    {
      heading: {
        ja: "この図だけで分かること、分からないこと",
        en: "What this chart alone can and cannot tell you",
        hi: "यह कुंडली अकेले क्या बता सकती है, क्या नहीं",
        ko: "이 차트만으로 알 수 있는 것과 없는 것",
      },
      body: [
        {
          ja: "出生図は静止した一枚の写真です。生まれた瞬間の空を正確に写しますが、それ自体は「いつ何が起こるか」を語りません。それを語るのはヴィムショッタリ・ダシャー（惑星期）と、現在の空の配置を出生図に重ねるゴーチャラ（トランジット）です。同じ配置を持つ人でも、いまどのダシャーにいるかによって、同じ惑星が違う形で現れます。",
          en: "The birth chart is a single still photograph. It captures the sky at the moment of birth precisely, but on its own it says nothing about when anything happens. That's the job of the Vimshottari dasha (planetary periods) and gochar (transits — the current sky overlaid on this same chart). Two people with near-identical charts can be living through the same placement very differently, depending on which dasha they're currently in.",
          hi: "जन्म कुंडली एक स्थिर तस्वीर है। यह जन्म के क्षण के आकाश को सटीक रूप से दर्शाती है, पर अपने आप में यह नहीं बताती कि 'कब क्या होगा।' यह कार्य विंशोत्तरी दशा (ग्रह-काल) और गोचर (वर्तमान आकाश की स्थिति इसी कुंडली पर) करते हैं।",
          ko: "출생 차트는 정지된 한 장의 사진입니다. 태어난 순간의 하늘을 정확히 담아내지만, 그 자체로는 '언제 무엇이 일어나는지' 말해주지 않습니다. 그 역할은 빔쇼타리 다샤(행성 주기)와 고차라(현재 하늘을 같은 차트에 겹쳐 보는 트랜짓)가 합니다.",
        },
        {
          ja: "また、この図は「良い・悪い」を単独で判定するものではありません。マンガル・ドーシャのような特定の配置も、他の要素によって相殺される場合があり、当サイトのヨーガ・ドーシャ診断はそうした古典的な相殺条件の一部のみを機械的に確認しています。図を読む力を養うことと、特定の問いに対する専門的な判断を受けることは、別の作業です。",
          en: "The chart also isn't a verdict on its own. A placement like Mangal Dosha can be offset by other factors, and this site's own yoga/dosha check only mechanically verifies some of the classical cancellation conditions, not the full set. Learning to read a chart and getting a professional judgment on a specific question are two different things.",
          hi: "यह कुंडली अकेले 'अच्छे-बुरे' का निर्णय भी नहीं करती। मंगल दोष जैसी विशिष्ट स्थिति अन्य कारकों से निरस्त हो सकती है, और इस साइट की योग-दोष जाँच शास्त्रीय निरसन शर्तों में से केवल कुछ की ही यांत्रिक पुष्टि करती है, पूरे समुच्चय की नहीं।",
          ko: "이 차트가 홀로 '좋고 나쁨'을 판정하는 것도 아닙니다. 망갈 도샤 같은 특정 배치는 다른 요소로 상쇄될 수 있으며, 이 사이트의 요가·도샤 확인은 고전적 상쇄 조건 중 일부만을 기계적으로 검증할 뿐, 전체 조건을 다루지는 않습니다.",
        },
      ],
      bullets: [
        {
          ja: "出生図は生まれた瞬間の惑星配置を固定して示します",
          en: "The birth chart fixes the planetary positions at the moment of birth",
          hi: "जन्म कुंडली जन्म के क्षण की ग्रह-स्थितियों को स्थिर रूप से दर्शाती है",
          ko: "출생 차트는 태어난 순간의 행성 배치를 고정하여 보여줍니다",
        },
        {
          ja: "時期を読むにはダシャーとゴーチャラを併せて見る必要があります",
          en: "Reading timing requires the dasha periods and current transits together",
          hi: "समय पढ़ने के लिए दशा और गोचर दोनों साथ देखने होंगे",
          ko: "시기를 읽으려면 다샤와 현재 트랜짓을 함께 보아야 합니다",
        },
        {
          ja: "特定の配置の善悪は、単独ではなく他の要素との関係で決まります",
          en: "Whether a specific placement is favourable depends on its relationship to other factors, not on the placement alone",
          hi: "किसी विशिष्ट स्थिति का शुभ-अशुभ होना अकेले नहीं, अन्य कारकों के साथ उसके संबंध से तय होता है",
          ko: "특정 배치의 길흉은 그 자체가 아니라 다른 요소와의 관계로 정해집니다",
        },
      ],
    },
    {
      heading: {
        ja: "使い方：入力から表示までの手順",
        en: "How to use it: from entry to chart",
        hi: "उपयोग कैसे करें: प्रविष्टि से कुंडली तक",
        ko: "사용 방법: 입력부터 차트 표시까지",
      },
      body: [
        {
          ja: "入力するのは、名前（任意）、生年月日、出生時刻、出生地の四つです。出生地は都市名で検索して候補から選んでください。「チャートを作成」を押すと、その場で出生図と惑星ごとの詳細が表示されます。",
          en: "You enter four things: a name (optional), date of birth, time of birth and place of birth. Search for the birthplace by city name and pick it from the suggestions. Press “Create chart” and the birth chart and per-planet details appear right on the page.",
          hi: "चार चीज़ें भरनी होती हैं: नाम (वैकल्पिक), जन्म तिथि, जन्म समय और जन्म स्थान। जन्म स्थान को शहर के नाम से खोजें और सुझावों में से चुनें। “चार्ट बनाएँ” दबाते ही कुंडली और प्रत्येक ग्रह का विवरण उसी पृष्ठ पर दिखाई देता है।",
          ko: "입력할 항목은 이름(선택), 생년월일, 출생 시각, 출생지 네 가지입니다. 출생지는 도시 이름으로 검색해 후보에서 고르세요. '차트 작성'을 누르면 출생 차트와 행성별 세부 정보가 바로 표시됩니다.",
        },
        {
          ja: "出生時刻は、生まれた土地の現地時刻をそのまま入力してください。タイムゾーンは出生地の緯度・経度から自動で判定されるため、海外で生まれた方も日本時間に換算する必要はありません。日本の方は、母子健康手帳に記録された時刻がいちばん確かな手がかりになります。",
          en: "Enter the birth time as local clock time at the place of birth. The time zone is worked out automatically from the birthplace's latitude and longitude, so if you were born abroad there's no need to convert to Japan time. For people born in Japan, the time recorded in the Maternal and Child Health Handbook is usually the most reliable source.",
          hi: "जन्म समय वही स्थानीय समय भरें जो जन्म स्थान पर था। समय क्षेत्र जन्म स्थान के अक्षांश-देशांतर से स्वतः निर्धारित होता है, इसलिए विदेश में जन्मे लोगों को समय बदलने की आवश्यकता नहीं। जापान में जन्मे लोगों के लिए मातृ-शिशु स्वास्थ्य पुस्तिका में दर्ज समय सबसे विश्वसनीय स्रोत होता है।",
          ko: "출생 시각은 태어난 곳의 현지 시각 그대로 입력하세요. 시간대는 출생지의 위도·경도로 자동 판정되므로, 해외에서 태어난 분도 일본 시간으로 환산할 필요가 없습니다. 일본에서 태어난 분은 모자건강수첩에 기록된 시각이 가장 확실한 단서입니다.",
        },
        {
          ja: "一度入力した出生データはこのブラウザに記憶され、ダシャー計算やナクシャトラ診断など他のツールでも再入力せずに使えます。",
          en: "Once entered, your birth details are remembered in this browser, so other tools such as the dasha calculator and nakshatra finder can use them without asking again.",
          hi: "एक बार भरा गया जन्म विवरण इस ब्राउज़र में याद रखा जाता है, इसलिए दशा कैलकुलेटर और नक्षत्र खोजक जैसे अन्य उपकरण इसे दोबारा पूछे बिना उपयोग कर सकते हैं।",
          ko: "한 번 입력한 출생 정보는 이 브라우저에 기억되어, 다샤 계산기나 낙샤트라 찾기 같은 다른 도구에서도 다시 입력하지 않고 쓸 수 있습니다.",
        },
      ],
      bullets: [
        {
          ja: "出生時刻が不明・あいまいな場合：ラグナはおよそ2時間で次の星座へ移るため、時刻がずれるとラグナと室の番号が変わることがあります。惑星の星座は（月を除き）ほとんど変わりません",
          en: "Unknown or approximate birth time: the ascendant moves to the next sign roughly every two hours, so a wrong time can change the Lagna and every house number. Planetary signs (except the Moon's) barely change",
          hi: "जन्म समय अज्ञात या अनुमानित हो: लग्न लगभग हर दो घंटे में अगली राशि में जाता है, इसलिए गलत समय से लग्न और सभी भाव संख्याएँ बदल सकती हैं। ग्रहों की राशियाँ (चंद्रमा को छोड़कर) लगभग नहीं बदलतीं",
          ko: "출생 시각을 모르거나 대략적인 경우: 라그나는 약 2시간마다 다음 별자리로 넘어가므로, 시각이 틀리면 라그나와 하우스 번호가 바뀔 수 있습니다. 행성의 별자리는 (달을 제외하면) 거의 변하지 않습니다",
        },
        {
          ja: "午前・午後の取り違え：12時間ずれるとラグナはほぼ反対側の星座になります。入力後に午前・午後の指定が正しいか確認してください",
          en: "Mixing up a.m. and p.m.: a twelve-hour error puts the ascendant in roughly the opposite sign. Double-check the a.m./p.m. setting after entering the time",
          hi: "पूर्वाह्न-अपराह्न की गड़बड़ी: बारह घंटे की त्रुटि से लग्न लगभग विपरीत राशि में चला जाता है। समय भरने के बाद पूर्वाह्न/अपराह्न की जाँच करें",
          ko: "오전·오후 혼동: 12시간 차이가 나면 라그나가 거의 반대편 별자리가 됩니다. 입력 후 오전·오후 지정이 맞는지 확인하세요",
        },
        {
          ja: "出生地の選び間違い：同名の地名が国内外に複数ある場合があります。候補の国名・都道府県まで確認してから選んでください",
          en: "Picking the wrong birthplace: several places can share a name, in Japan and abroad. Check the country and prefecture in the suggestion before selecting it",
          hi: "गलत जन्म स्थान चुनना: एक ही नाम के कई स्थान देश-विदेश में हो सकते हैं। सुझाव में देश और प्रांत देखकर ही चुनें",
          ko: "출생지 선택 오류: 같은 이름의 지명이 국내외에 여럿 있을 수 있습니다. 후보의 국가와 지역까지 확인한 뒤 고르세요",
        },
        {
          ja: "西洋占星術と星座が違って見える場合：当ツールはラヒリ・アヤナムシャによるサイデリアル方式のため、太陽などの星座が西洋式より一つ前にずれることがよくあります。計算の誤りではありません",
          en: "Signs that look different from Western astrology: this tool uses the sidereal zodiac with the Lahiri ayanamsha, so the Sun and other planets often fall one sign earlier than in a Western chart. That isn't a calculation error",
          hi: "पश्चिमी ज्योतिष से राशि अलग दिखे: यह उपकरण लाहिड़ी अयनांश के साथ निरयण राशिचक्र का उपयोग करता है, इसलिए सूर्य आदि ग्रह अक्सर पश्चिमी चार्ट से एक राशि पहले आते हैं। यह गणना की त्रुटि नहीं है",
          ko: "서양 점성술과 별자리가 달라 보이는 경우: 이 도구는 라히리 아야남샤를 적용한 항성 황도 방식이므로, 태양 등의 별자리가 서양식보다 한 칸 앞으로 오는 일이 흔합니다. 계산 오류가 아닙니다",
        },
      ],
    },
    {
      heading: {
        ja: "結果の読み方：表示される用語の一覧",
        en: "Reading the result: the terms you will see",
        hi: "परिणाम कैसे पढ़ें: दिखने वाले शब्द",
        ko: "결과 읽는 법: 표시되는 용어 정리",
      },
      body: [
        {
          ja: "結果は、上に北インド式の出生図（ラグナ・チャート）、その下に九つの惑星それぞれのカードという二段構成です。カードに並ぶ項目の意味は次のとおりです。",
          en: "The result has two parts: the North Indian birth chart (the Lagna chart) on top, and a card for each of the nine planets below it. Here's what each item on the cards means.",
          hi: "परिणाम के दो भाग हैं: ऊपर उत्तर भारतीय जन्म कुंडली (लग्न कुंडली), और नीचे नौ ग्रहों में से प्रत्येक का एक कार्ड। कार्ड की प्रत्येक पंक्ति का अर्थ नीचे है।",
          ko: "결과는 위쪽의 북인도식 출생 차트(라그나 차트)와 그 아래 아홉 행성 각각의 카드, 두 부분으로 구성됩니다. 카드에 나오는 항목의 뜻은 다음과 같습니다.",
        },
        {
          ja: "例えば、ラグナが獅子座で、木星のカードに「室 5」「射手座 12° 00′」「支配星 木星」「本来の座」「ナクシャトラ ムーラ」「パダ 4」と出たとします（説明用の架空の例です）。これは、木星が獅子座から数えて五番目の射手座にあり、自分が支配する星座にいるため品位は「本来の座」、さらに射手座の最初のナクシャトラであるムーラの第4パダに入っている、という意味になります。",
          en: "For example, suppose the Lagna is Leo and Jupiter's card reads “House 5”, “Sagittarius 12° 00′”, “Lord: Jupiter”, “Own Sign”, “Nakshatra: Mula”, “Pada 4” (an invented example for illustration). That means Jupiter sits in Sagittarius, the fifth sign counting from Leo; it rules that sign itself, hence the dignity “Own Sign”; and it falls in the fourth pada of Mula, the first nakshatra of Sagittarius.",
          hi: "उदाहरण के लिए, मान लीजिए लग्न सिंह है और बृहस्पति के कार्ड पर “भाव 5”, “धनु 12° 00′”, “स्वामी: बृहस्पति”, “स्वराशि”, “नक्षत्र: मूल”, “पद 4” लिखा है (समझाने के लिए काल्पनिक उदाहरण)। इसका अर्थ है कि बृहस्पति सिंह से पाँचवीं राशि धनु में है, उस राशि का स्वामी स्वयं है इसलिए गरिमा “स्वराशि” है, और धनु के पहले नक्षत्र मूल के चौथे पद में है।",
          ko: "예를 들어 라그나가 사자자리이고, 목성 카드에 '하우스 5', '사수자리 12° 00′', '지배성 목성', '자신의 별자리', '낙샤트라 물라', '파다 4'라고 나왔다고 합시다(설명을 위한 가상의 예입니다). 이는 목성이 사자자리에서 세어 다섯 번째인 사수자리에 있고, 스스로 지배하는 별자리라서 품위가 '자신의 별자리'이며, 사수자리의 첫 낙샤트라인 물라의 제4 파다에 들어 있다는 뜻입니다.",
        },
      ],
      bullets: [
        {
          ja: "ラグナ（ASC・上昇宮）：生まれた瞬間に東の地平線にあった星座。北インド式では上部中央のマスが常に第1室＝ラグナです",
          en: "Lagna (ASC, ascendant): the sign on the eastern horizon at the moment of birth. In the North Indian chart the top-centre cell is always the first house, the Lagna",
          hi: "लग्न (ASC): जन्म के क्षण पूर्वी क्षितिज पर स्थित राशि। उत्तर भारतीय कुंडली में ऊपर मध्य का खाना सदैव पहला भाव, यानी लग्न होता है",
          ko: "라그나(ASC, 상승궁): 태어난 순간 동쪽 지평선에 있던 별자리. 북인도식에서는 위쪽 중앙 칸이 항상 제1하우스, 곧 라그나입니다",
        },
        {
          ja: "室（ハウス）：ラグナの星座を第1室とし、星座一つを一室として数える方式（ホールサイン）で、第1〜第12室を割り当てています",
          en: "House: counted whole-sign style — the Lagna's sign is the first house and each following sign is one house, giving houses 1 to 12",
          hi: "भाव: पूर्ण-राशि पद्धति से गिने जाते हैं — लग्न की राशि पहला भाव, और आगे की प्रत्येक राशि एक भाव, इस तरह 1 से 12 भाव",
          ko: "하우스: 홀사인 방식으로 셉니다 — 라그나의 별자리가 제1하우스이고, 이어지는 별자리 하나가 하우스 하나가 되어 1~12하우스가 됩니다",
        },
        {
          ja: "星座と度数：その惑星がいる星座と、星座内での位置（0°〜30°未満、度・分・秒）",
          en: "Sign and degree: the sign the planet occupies and its position within that sign (0° to under 30°, in degrees, minutes and seconds)",
          hi: "राशि और अंश: ग्रह जिस राशि में है और उस राशि के भीतर उसकी स्थिति (0° से 30° से कम, अंश-कला-विकला में)",
          ko: "별자리와 도수: 행성이 있는 별자리와 그 별자리 안에서의 위치(0°~30° 미만, 도·분·초)",
        },
        {
          ja: "支配星：その惑星がいる星座を支配する惑星。例えば牡羊座と蠍座の支配星は火星です",
          en: "Lord: the planet that rules the sign this planet is in. Aries and Scorpio, for example, are ruled by Mars",
          hi: "स्वामी: वह ग्रह जो उस राशि का स्वामी है जिसमें यह ग्रह स्थित है। उदाहरण के लिए मेष और वृश्चिक का स्वामी मंगल है",
          ko: "지배성: 그 행성이 있는 별자리를 지배하는 행성. 예를 들어 양자리와 전갈자리의 지배성은 화성입니다",
        },
        {
          ja: "品位：高揚（最も力を発揮しやすい星座）、減衰（力を発揮しにくい星座）、本来の座（自分が支配する星座）、中立（それ以外）の四区分",
          en: "Dignity: four labels — Exalted (the sign where the planet expresses itself most easily), Debilitated (where it struggles most), Own Sign (a sign it rules) and Neutral (everything else)",
          hi: "गरिमा: चार श्रेणियाँ — उच्च (जहाँ ग्रह सबसे सहजता से फल देता है), नीच (जहाँ सबसे कठिनाई होती है), स्वराशि (जिस राशि का वह स्वामी है) और सम (शेष)",
          ko: "품위: 고양(행성이 가장 힘을 내기 쉬운 별자리), 쇠약(힘을 내기 어려운 별자리), 자신의 별자리(스스로 지배하는 별자리), 중립(그 외)의 네 구분",
        },
        {
          ja: "ナクシャトラとパダ：黄道を27等分した月宿（一つ13°20′）と、それをさらに4等分した区分（一つ3°20′）",
          en: "Nakshatra and pada: the 27 equal lunar mansions of the zodiac (13°20′ each), and their quarters (3°20′ each)",
          hi: "नक्षत्र और पद: राशिचक्र के 27 समान नक्षत्र (प्रत्येक 13°20′), और उनके चार भाग (प्रत्येक 3°20′)",
          ko: "낙샤트라와 파다: 황도를 27등분한 달의 궁(하나당 13°20′)과 이를 다시 4등분한 구분(하나당 3°20′)",
        },
        {
          ja: "逆行：地球から見て惑星が後退して見える状態。ラーフとケトゥは常に逆方向に進むため、いつも「逆行」と表示されます",
          en: "Retrograde: the planet appears to move backward as seen from Earth. Rahu and Ketu always move in reverse, so they are always marked retrograde",
          hi: "वक्री: पृथ्वी से देखने पर ग्रह पीछे चलता प्रतीत होता है। राहु और केतु सदैव उलटी दिशा में चलते हैं, इसलिए उन्हें हमेशा वक्री दिखाया जाता है",
          ko: "역행: 지구에서 볼 때 행성이 뒤로 가는 것처럼 보이는 상태. 라후와 케투는 항상 거꾸로 움직이므로 늘 '역행'으로 표시됩니다",
        },
      ],
    },
    {
      heading: {
        ja: "西洋占星術のホロスコープとの違い",
        en: "How this differs from a Western horoscope",
        hi: "पश्चिमी होरोस्कोप से यह कैसे भिन्न है",
        ko: "서양 점성술 호로스코프와의 차이",
      },
      body: [
        {
          ja: "インド占星術（ジョーティッシュ）の出生図は、見た目も中身も西洋のホロスコープとは異なります。黄道の基準点が違うだけでなく、使う天体の数、室の数え方、重視する要素も違います。主な違いを並べると次のようになります。",
          en: "A Jyotish birth chart differs from a Western horoscope in both appearance and content. It's not only the zodiac's starting point that differs, but also which bodies are used, how houses are counted and what gets emphasised. The main differences are below.",
          hi: "ज्योतिष की जन्म कुंडली रूप और विषय दोनों में पश्चिमी होरोस्कोप से भिन्न है। केवल राशिचक्र का आरंभ-बिंदु ही नहीं, बल्कि प्रयुक्त ग्रह, भाव गिनने का ढंग और महत्व दिए जाने वाले तत्व भी अलग हैं। मुख्य अंतर नीचे हैं।",
          ko: "조티시 출생 차트는 모양과 내용 모두 서양 호로스코프와 다릅니다. 황도의 기준점뿐 아니라 사용하는 천체, 하우스를 세는 방법, 중시하는 요소도 다릅니다. 주요 차이는 다음과 같습니다.",
        },
      ],
      bullets: [
        {
          ja: "黄道：西洋は春分点を基準にするトロピカル方式、インドは恒星を基準にするサイデリアル方式（現在の差は約24度）",
          en: "Zodiac: Western astrology uses the equinox-based tropical zodiac; Jyotish uses the star-based sidereal zodiac (currently about 24° apart)",
          hi: "राशिचक्र: पश्चिमी ज्योतिष विषुव-आधारित सायन, ज्योतिष तारा-आधारित निरयण राशिचक्र (वर्तमान अंतर लगभग 24°)",
          ko: "황도: 서양은 춘분점 기준의 회귀 황도, 조티시는 항성 기준의 항성 황도(현재 차이 약 24°)",
        },
        {
          ja: "天体：インドでは太陽・月・火星・水星・木星・金星・土星に、月の交点であるラーフとケトゥを加えた九つ（ナヴァグラハ）を使い、天王星・海王星・冥王星は用いません",
          en: "Bodies: Jyotish uses nine grahas — Sun, Moon, Mars, Mercury, Jupiter, Venus and Saturn plus the lunar nodes Rahu and Ketu — and leaves out Uranus, Neptune and Pluto",
          hi: "ग्रह: ज्योतिष नौ ग्रहों — सूर्य, चंद्र, मंगल, बुध, गुरु, शुक्र, शनि तथा चंद्र-पात राहु और केतु — का उपयोग करता है और यूरेनस, नेपच्यून, प्लूटो को नहीं लेता",
          ko: "천체: 조티시는 태양·달·화성·수성·목성·금성·토성에 달의 교점인 라후와 케투를 더한 아홉 행성(나바그라하)을 쓰며, 천왕성·해왕성·명왕성은 쓰지 않습니다",
        },
        {
          ja: "図の形：西洋は円形、インドは北インド式のひし形や南インド式の方形という四角い図",
          en: "Shape: Western charts are circular; Indian charts are square, in the North Indian diamond or South Indian grid layout",
          hi: "आकार: पश्चिमी चार्ट वृत्ताकार होते हैं; भारतीय कुंडली चौकोर होती है — उत्तर भारतीय हीरा या दक्षिण भारतीय वर्ग रूप में",
          ko: "모양: 서양 차트는 원형이고, 인도 차트는 북인도식 마름모나 남인도식 격자의 사각형입니다",
        },
        {
          ja: "重視する点：西洋では太陽星座がよく話題になりますが、インドではラグナと月の星座・ナクシャトラが特に重視されます",
          en: "Emphasis: Western astrology popularly centres on the Sun sign, while Jyotish gives particular weight to the Lagna and to the Moon's sign and nakshatra",
          hi: "महत्व: पश्चिमी ज्योतिष में सूर्य राशि की चर्चा अधिक होती है, जबकि ज्योतिष लग्न और चंद्रमा की राशि व नक्षत्र को विशेष महत्व देता है",
          ko: "중시하는 점: 서양에서는 태양 별자리가 자주 화제가 되지만, 조티시에서는 라그나와 달의 별자리·낙샤트라를 특히 중시합니다",
        },
        {
          ja: "時期の読み方：インドでは月のナクシャトラから始まる120年周期のヴィムショッタリ・ダシャーで人生の時期を区切ります",
          en: "Timing: Jyotish divides life into periods with the 120-year Vimshottari dasha cycle, which starts from the Moon's nakshatra",
          hi: "समय-निर्धारण: ज्योतिष चंद्र नक्षत्र से आरंभ होने वाले 120 वर्षीय विंशोत्तरी दशा चक्र से जीवन को कालखंडों में बाँटता है",
          ko: "시기 읽기: 조티시는 달의 낙샤트라에서 시작하는 120년 주기의 빔쇼타리 다샤로 인생의 시기를 나눕니다",
        },
      ],
    },
    {
      heading: {
        ja: "よくある誤解と、作成前のチェックリスト",
        en: "Common misunderstandings, and a checklist before you start",
        hi: "आम भ्रांतियाँ, और शुरू करने से पहले की जाँच-सूची",
        ko: "흔한 오해와 작성 전 체크리스트",
      },
      body: [
        {
          ja: "出生図を初めて見た方からよく寄せられる疑問は、図そのものより「思っていたのと違う」という戸惑いです。次の点を知っておくと、結果を落ち着いて受け止められます。",
          en: "The most common reaction from first-time viewers isn't about the chart itself but a sense that it's “not what I expected”. Knowing the points below makes the result easier to take calmly.",
          hi: "पहली बार कुंडली देखने वालों की सबसे आम प्रतिक्रिया कुंडली के बारे में नहीं, बल्कि “जैसा सोचा था वैसा नहीं” की उलझन होती है। नीचे की बातें जानने से परिणाम को शांत मन से समझना आसान होता है।",
          ko: "출생 차트를 처음 본 분들이 가장 많이 느끼는 것은 차트 자체보다 '생각했던 것과 다르다'는 당혹감입니다. 아래 내용을 알아두면 결과를 차분하게 받아들일 수 있습니다.",
        },
      ],
      bullets: [
        {
          ja: "誤解：「星座が西洋式と違うのは計算ミス」→ 基準となる黄道が違うためで、どちらも計算としては正しく成り立っています",
          en: "Myth: “A different sign from the Western one means a calculation error” → the two use different zodiacs, and both are internally consistent calculations",
          hi: "भ्रांति: “पश्चिमी से अलग राशि मतलब गणना की गलती” → दोनों अलग राशिचक्र उपयोग करते हैं, और दोनों अपनी जगह सही गणना हैं",
          ko: "오해: '서양식과 별자리가 다르면 계산 실수' → 기준 황도가 달라서이며, 둘 다 계산으로서는 올바르게 성립합니다",
        },
        {
          ja: "誤解：「ラーフやケトゥ、土星がある室は不吉」→ 一つの配置だけで吉凶は決まらず、品位や他の惑星との関係、時期によって表れ方が変わります",
          en: "Myth: “A house with Rahu, Ketu or Saturn is unlucky” → no single placement decides anything; dignity, relationships with other planets and timing all change how it shows up",
          hi: "भ्रांति: “राहु, केतु या शनि वाला भाव अशुभ है” → कोई एक स्थिति अकेले कुछ तय नहीं करती; गरिमा, अन्य ग्रहों से संबंध और समय सब इसके फल को बदलते हैं",
          ko: "오해: '라후·케투·토성이 있는 하우스는 불길하다' → 배치 하나로 길흉이 정해지지 않으며, 품위와 다른 행성과의 관계, 시기에 따라 나타나는 방식이 달라집니다",
        },
        {
          ja: "誤解：「逆行している惑星は働かない」→ 逆行は見かけの動きで、古典的にはテーマが内向きに働くと読まれ、力が消えるわけではありません",
          en: "Myth: “A retrograde planet doesn't work” → retrograde is apparent motion; classically its themes are read as turning inward, not as switching off",
          hi: "भ्रांति: “वक्री ग्रह काम नहीं करता” → वक्री गति आभासी है; शास्त्रीय रूप से इसके विषय भीतर की ओर मुड़ते माने जाते हैं, शक्ति समाप्त नहीं होती",
          ko: "오해: '역행 중인 행성은 작용하지 않는다' → 역행은 겉보기 운동이며, 고전적으로는 그 주제가 내면을 향해 작용한다고 읽을 뿐 힘이 사라지는 것은 아닙니다",
        },
        {
          ja: "チェック：出生時刻は記録（母子手帳・出生証明書など）で確認しましたか",
          en: "Check: have you confirmed the birth time from a record (a health handbook, birth certificate or similar)?",
          hi: "जाँचें: क्या आपने जन्म समय किसी अभिलेख (स्वास्थ्य पुस्तिका, जन्म प्रमाणपत्र आदि) से पुष्ट किया है?",
          ko: "체크: 출생 시각을 기록(모자수첩·출생증명서 등)으로 확인했나요?",
        },
        {
          ja: "チェック：出生地は、住んでいた場所ではなく実際に生まれた場所（病院のある市区町村）になっていますか",
          en: "Check: is the birthplace where you were actually born (the town of the hospital), rather than where the family lived?",
          hi: "जाँचें: क्या जन्म स्थान वह है जहाँ वास्तव में जन्म हुआ (अस्पताल का शहर), न कि जहाँ परिवार रहता था?",
          ko: "체크: 출생지가 살던 곳이 아니라 실제로 태어난 곳(병원이 있는 시·구)으로 되어 있나요?",
        },
        {
          ja: "チェック：時刻に自信がない場合は、出生時刻チェックで前後の時刻にずらしてもラグナが変わらないか確かめましたか",
          en: "Check: if you're unsure of the time, have you used the birth-time check to see whether the Lagna holds when the time shifts a little either way?",
          hi: "जाँचें: यदि समय पर भरोसा न हो, क्या आपने जन्म-समय जाँच से देखा कि समय थोड़ा आगे-पीछे करने पर लग्न वही रहता है?",
          ko: "체크: 시각에 자신이 없다면, 출생 시각 점검 도구로 앞뒤로 시각을 옮겨도 라그나가 그대로인지 확인했나요?",
        },
      ],
    },
    {
      heading: {
        ja: "ご利用にあたって",
        en: "Before you rely on it",
        hi: "उपयोग से पहले",
        ko: "이용 시 안내",
      },
      body: [
        {
          ja: "出生図は、自分の傾向やテーマを見つめ直すための自己理解の道具として、楽しみながらお使いください。医療・法律・お金に関する判断の代わりになるものではありません。健康や契約、投資などの大切な決定は、それぞれの専門家にご相談ください。",
          en: "Please use the birth chart as a tool for self-reflection, and enjoy it as such. It isn't a substitute for medical, legal or financial advice; for important decisions about health, contracts or investments, please consult a qualified professional.",
          hi: "कृपया जन्म कुंडली को आत्म-चिंतन के साधन के रूप में, आनंद के साथ उपयोग करें। यह चिकित्सा, कानूनी या वित्तीय सलाह का विकल्प नहीं है; स्वास्थ्य, अनुबंध या निवेश जैसे महत्वपूर्ण निर्णयों के लिए योग्य विशेषज्ञ से परामर्श करें।",
          ko: "출생 차트는 자신의 경향과 주제를 돌아보는 자기 이해의 도구로 즐겁게 활용해 주세요. 의료·법률·금융 판단을 대신하지 않으며, 건강이나 계약, 투자 같은 중요한 결정은 각 분야의 전문가와 상담하세요.",
        },
        {
          ja: "図の中に「減衰」などの言葉があっても、それだけで将来が決まるわけではありません。どの配置も、その人らしさを形づくる一部として穏やかに読んでいただければ幸いです。",
          en: "Seeing a word like “Debilitated” in your chart doesn't settle anything about your future. Every placement is best read gently, as one part of what makes you who you are.",
          hi: "कुंडली में “नीच” जैसा शब्द दिखने से आपका भविष्य तय नहीं हो जाता। हर स्थिति को सहज भाव से, आपके व्यक्तित्व के एक हिस्से के रूप में पढ़ना सबसे अच्छा है।",
          ko: "차트에 '쇠약' 같은 말이 보여도 그것만으로 미래가 정해지지는 않습니다. 모든 배치는 그 사람다움을 이루는 한 부분으로서 편안하게 읽어 주시길 바랍니다.",
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
          ja: "出生図を作成したら、次はラグナや月のナクシャトラ、現在のダシャーを個別に深掘りしてみましょう。",
          en: "Once you have your birth chart, the next step is to look more closely at your Lagna, your Moon's nakshatra and your current dasha.",
          hi: "जन्म कुंडली बनाने के बाद, अगला कदम अपने लग्न, चंद्र नक्षत्र और वर्तमान दशा को विस्तार से देखना है।",
          ko: "출생 차트를 만들었다면, 다음은 라그나와 달의 낙샤트라, 현재 다샤를 하나씩 자세히 살펴보세요.",
        },
      ],
      links: [
        {
          href: "/tools/lagna-calculator",
          label: {
            ja: "ラグナ（上昇宮）計算",
            en: "Lagna (ascendant) calculator",
            hi: "लग्न कैलकुलेटर",
            ko: "라그나(상승궁) 계산기",
          },
        },
        {
          href: "/tools/nakshatra-finder",
          label: {
            ja: "ナクシャトラ診断",
            en: "Nakshatra finder",
            hi: "नक्षत्र खोजक",
            ko: "낙샤트라 찾기",
          },
        },
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
          href: "/tools/birth-time-check",
          label: {
            ja: "出生時刻チェック",
            en: "Birth-time check",
            hi: "जन्म-समय जाँच",
            ko: "출생 시각 점검",
          },
        },
        {
          href: "/learn-jyotish/houses/chart-formats",
          label: {
            ja: "チャート形式の読み方（北インド式・南インド式）",
            en: "How to read chart formats (North and South Indian)",
            hi: "कुंडली प्रारूप कैसे पढ़ें (उत्तर व दक्षिण भारतीय)",
            ko: "차트 형식 읽는 법(북인도식·남인도식)",
          },
        },
      ],
    },
  ],
};
