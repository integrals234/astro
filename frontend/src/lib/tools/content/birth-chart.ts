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
          ja: "実務的な違いは、目が慣れる速さにあります。南インド式は星座の位置が誰の図でも同じなので、複数人の図を並べて比較するときに読みやすいという声があります。北インド式は自分のラグナを中心に見る癖がつきやすく、伝統的に北インドや西インドで主流です。どちらを基準に学び始めても、もう一方は同じデータの並べ替えに過ぎないとわかれば、すぐに読めるようになります。",
          en: "The practical difference is mostly how quickly your eye adjusts. Because the signs sit in the same cells for everyone in the South Indian format, some people find it easier to compare several charts side by side. The North Indian format trains you to read around your own ascendant, and is traditionally dominant in northern and western India. Whichever you learn first, the other is just a rearrangement of the same data, and reads quickly once that clicks.",
          hi: "व्यावहारिक अंतर मुख्यतः इस बात में है कि आँख कितनी जल्दी अभ्यस्त होती है। दक्षिण भारतीय प्रारूप में राशियाँ सभी के चित्र में समान स्थान पर रहती हैं, इसलिए कई कुंडलियों की तुलना करना कुछ लोगों को आसान लगता है।",
          ko: "실질적인 차이는 대체로 눈이 얼마나 빨리 적응하느냐에 있습니다. 남인도식은 별자리가 누구의 차트에서든 같은 칸에 있으므로, 여러 차트를 나란히 비교할 때 더 쉽다고 느끼는 사람들이 있습니다. 북인도식은 자신의 상승궁을 중심으로 읽는 습관을 길러주며, 전통적으로 북인도와 서인도에서 주로 쓰입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "惑星の詳細タブが示していること",
        en: "What the planetary details add",
        hi: "ग्रह विवरण टैब क्या दर्शाता है",
        ko: "행성 세부 정보 탭이 보여주는 것",
      },
      body: [
        {
          ja: "図だけでは、各惑星が何度の位置にあり、どのナクシャトラ（月宿）にあり、逆行しているかどうかは分かりません。詳細タブはこれを数値で示します。特に品位（ディグニティ）——高揚・減衰・自身の星座・中立——は重要です。同じ「第七室に金星」でも、金星が高揚（魚座）にあるか減衰（乙女座）にあるかで、古典的な読み方は大きく変わります。",
          en: "The diagram alone doesn't show each planet's exact degree, which nakshatra it occupies, or whether it's retrograde. The details tab gives all three as numbers. Dignity in particular — exalted, debilitated, own sign, or neutral — matters: “Venus in the seventh house” reads very differently depending on whether that Venus is exalted (in Pisces) or debilitated (in Virgo), and the classical tradition treats those as materially different placements, not a footnote.",
          hi: "केवल चित्र से यह पता नहीं चलता कि प्रत्येक ग्रह कितने अंश पर है, किस नक्षत्र में है, या वक्री है या नहीं। विवरण टैब यह तीनों संख्याओं में दिखाता है। विशेष रूप से गरिमा (डिग्निटी) — उच्च, नीच, स्वराशि या सम — महत्वपूर्ण है।",
          ko: "그림만으로는 각 행성이 정확히 몇 도에 있는지, 어느 낙샤트라에 있는지, 역행 중인지 알 수 없습니다. 세부 정보 탭은 이 세 가지를 숫자로 보여줍니다. 특히 품위(디그니티) — 고양, 쇠약, 자신의 별자리, 중립 — 이 중요합니다.",
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
  ],
};
