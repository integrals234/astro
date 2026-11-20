import type { ToolLongForm } from "./types";

/**
 * Long-form body for /tools/mangal-dosha.
 *
 * Written Japanese-first, matching sukuyo.ts, compatibility.ts and
 * birth-chart.ts. Mangal Dosha is a page where a scored/detected tool most
 * easily becomes irresponsible — same risk compatibility.ts already
 * navigates — so the argument spends real space on what this page's
 * detection does *not* check (the classical cancellation conditions)
 * before anything else, rather than presenting a single yes/no as final.
 */
export const mangalDoshaLongForm: ToolLongForm = {
  slug: "mangal-dosha",
  sections: [
    {
      heading: {
        ja: "マンガル・ドーシャ（クジャ・ドーシャ）とは何か",
        en: "What Mangal Dosha (Kuja Dosha) is",
        hi: "मंगल दोष (कुज दोष) क्या है",
        ko: "망갈 도샤(쿠자 도샤)란 무엇인가",
      },
      body: [
        {
          ja: "マンガル・ドーシャは、火星（マンガル）が出生図のラグナから見て第一・第二・第四・第七・第八・第十二室のいずれかにある配置を指します。「クジャ・ドーシャ」とも呼ばれ、クジャは火星の別名です。伝統的に、この配置は結婚生活における摩擦や衝突の可能性を示すとされ、北インドを中心に婚姻前の照合で確認される項目の一つです。",
          en: "Mangal Dosha describes Mars sitting in the first, second, fourth, seventh, eighth or twelfth house counted from the Lagna. It's also called Kuja Dosha — Kuja is another name for Mars. Classically, the placement is read as a marker of potential friction or conflict within a marriage, and is one of the items commonly checked before marriage, particularly in northern India.",
          hi: "मंगल दोष उस स्थिति को कहते हैं जब मंगल लग्न से पहले, दूसरे, चौथे, सातवें, आठवें या बारहवें भाव में हो। इसे 'कुज दोष' भी कहा जाता है, कुज मंगल का ही एक नाम है। परंपरागत रूप से इस स्थिति को विवाहित जीवन में घर्षण या संघर्ष की संभावना का संकेतक माना जाता है।",
          ko: "망갈 도샤는 화성(망갈)이 라그나로부터 1, 2, 4, 7, 8, 12번째 하우스 중 하나에 있는 배치를 말합니다. '쿠자 도샤'라고도 하며, 쿠자는 화성의 다른 이름입니다. 전통적으로 이 배치는 결혼 생활에서 마찰이나 갈등의 가능성을 나타내는 표지로 읽히며, 특히 북인도를 중심으로 결혼 전에 확인하는 항목 중 하나입니다.",
        },
        {
          ja: "六つの室すべてが同じ重みで扱われるわけではありません。第七室（配偶者の室）と第八室（共有財産や人生の大きな変化に関わる室）の火星は、結婚そのものに直接関わる室であるため特に重視される傾向があります。第一室の火星は本人の気質、第四室は家庭の平穏、第十二室は寝室・出費に関わるとされ、それぞれ意味合いが異なります。当ページはどの室に火星があるかを具体的に示すのはそのためです——「マンガル・ドーシャの有無」という一点だけでは、実際に何が示されているのかが見えなくなります。",
          en: "Not all six houses carry equal weight. Mars in the seventh (the house of the spouse) or eighth (shared resources and major life changes) tends to be weighted more heavily, since those houses connect directly to the marriage itself. Mars in the first speaks to the individual's own temperament, the fourth to domestic peace, the twelfth to the marital bed and shared expenses — each a different shade of meaning. This page states exactly which house Mars occupies for that reason: a single “has it or doesn't” answer hides which of six quite different things is actually being described.",
          hi: "सभी छह भाव समान भार के नहीं होते। सातवें भाव (जीवनसाथी का भाव) या आठवें भाव (साझा संसाधन और जीवन के बड़े बदलाव) में मंगल को अधिक भारी माना जाता है, क्योंकि ये भाव सीधे विवाह से जुड़े होते हैं।",
          ko: "여섯 하우스가 모두 같은 무게를 갖는 것은 아닙니다. 7번째(배우자의 하우스)나 8번째(공유 자산과 인생의 큰 변화) 하우스의 화성은 결혼 자체와 직접 연결되므로 더 무겁게 다뤄지는 경향이 있습니다. 1번째 하우스의 화성은 본인의 기질을, 4번째는 가정의 평온을, 12번째는 부부의 침실과 지출을 이야기한다고 보며, 각각 의미가 다릅니다.",
        },
      ],
    },
    {
      heading: {
        ja: "なぜ「相殺」の話を避けて通れないのか",
        en: "Why the cancellation conditions can't be skipped",
        hi: "'निरसन' की बात को क्यों नहीं टाला जा सकता",
        ko: "'상쇄' 이야기를 피할 수 없는 이유",
      },
      body: [
        {
          ja: "古典文献は、マンガル・ドーシャを機械的な有無の判定として扱っていません。相殺（ドーシャ・バンガ）の条件が複数記されており、たとえば火星が自身の星座（牡羊座・蠍座）または高揚の星座（山羊座）にある場合、吉星からの十分なアスペクトがある場合、あるいは相手の図にも同種の配置がある場合などが挙げられます。これらの条件をすべて確認するには、単に「第七室に火星があるか」を見る以上の作業が必要です。",
          en: "Classical texts never treat Mangal Dosha as a mechanical yes-or-no check. Multiple cancellation (dosha bhanga) conditions are recorded — Mars in its own sign (Aries or Scorpio) or exalted (Capricorn), a sufficient benefic aspect, or the same placement appearing in both charts being matched, among others. Verifying all of them takes considerably more than checking whether Mars sits in the seventh house.",
          hi: "शास्त्रीय ग्रंथ मंगल दोष को यांत्रिक उपस्थिति-अनुपस्थिति के रूप में नहीं देखते। निरसन (दोष भंग) की कई शर्तें दर्ज हैं — मंगल का स्वराशि (मेष या वृश्चिक) या उच्च राशि (मकर) में होना, शुभ ग्रहों की पर्याप्त दृष्टि, या दोनों कुंडलियों में समान स्थिति का होना।",
          ko: "고전 문헌은 망갈 도샤를 기계적인 유무 판정으로 다루지 않습니다. 상쇄(도샤 방가) 조건이 여러 가지 기록되어 있습니다 — 화성이 자신의 별자리(양자리 또는 전갈자리)나 고양의 별자리(염소자리)에 있는 경우, 길성으로부터 충분한 아스펙트를 받는 경우, 또는 맞춰보는 두 차트 모두에 같은 배치가 나타나는 경우 등입니다.",
        },
        {
          ja: "当ページの判定は、この点で意図的に限定的です。火星が該当する六室のいずれかにあるかどうかだけを機械的に確認しており、上記のような相殺条件は評価していません。これは手抜きではなく、正直な線引きです。相殺条件の評価には、アスペクトの強さの判断や流派ごとの解釈の違いが絡み、単純な規則には還元できません。「マンガル・ドーシャあり」と表示された場合、それは「相殺されていないマンガル・ドーシャ」ではなく、「六室のいずれかに火星がある」という事実を意味します。",
          en: "This page's own check is deliberately limited on this point. It only mechanically verifies whether Mars sits in one of the six houses — it does not evaluate any of the cancellation conditions above. That's an honest boundary, not a shortcut: judging cancellation involves weighing aspect strength and interpretive differences between traditions, which doesn't reduce to a simple rule. A “yes” here means “Mars occupies one of the six houses,” not “an uncancelled Mangal Dosha.”",
          hi: "इस पृष्ठ की जाँच इस बिंदु पर जान-बूझकर सीमित है। यह केवल यांत्रिक रूप से जाँचता है कि मंगल छह भावों में से किसी एक में है या नहीं — ऊपर बताई गई किसी भी निरसन शर्त का मूल्यांकन नहीं करता। यह लापरवाही नहीं, एक ईमानदार सीमा-रेखा है।",
          ko: "이 페이지의 확인은 이 지점에서 의도적으로 제한적입니다. 화성이 여섯 하우스 중 하나에 있는지만 기계적으로 확인할 뿐, 위의 어떤 상쇄 조건도 평가하지 않습니다. 이는 부주의가 아니라 정직한 경계선입니다. 여기서의 '있음'은 '상쇄되지 않은 망갈 도샤'가 아니라 '여섯 하우스 중 하나에 화성이 있다는 사실'을 의미합니다.",
        },
        {
          ja: "ただし一つだけ、結果から読み取れる相殺条件があります。火星が第1・4・7室にあり、しかも自身の星座（牡羊座・蠍座）か高揚の山羊座にある場合、マンガル・ドーシャと同時に「ルチャカ・ヨーガ」が表示されます。これは「火星が自身の星座か高揚にある」という古典的な相殺条件を満たしているしるしです。第2・8・12室で同じ条件に当てはまるかどうかは、「すべてのチャートを見る」から火星の星座を確認してください。",
          en: "There is one cancellation condition you can read from the result, though. If Mars is in the first, fourth or seventh house and also in its own sign (Aries or Scorpio) or exalted in Capricorn, “Ruchaka Yoga” appears alongside Mangal Dosha. That's a sign the classical condition “Mars in its own or exaltation sign” is met. For the second, eighth or twelfth house, open the full chart to check which sign Mars is in.",
          hi: "फिर भी, एक निरसन शर्त परिणाम से पढ़ी जा सकती है। यदि मंगल पहले, चौथे या सातवें भाव में हो और साथ ही स्वराशि (मेष या वृश्चिक) या उच्च राशि मकर में हो, तो मंगल दोष के साथ 'रुचक योग' भी दिखता है। यह संकेत है कि 'मंगल स्वराशि या उच्च में' वाली शास्त्रीय शर्त पूरी है। दूसरे, आठवें या बारहवें भाव के लिए पूरी कुंडली खोलकर मंगल की राशि देखें।",
          ko: "다만 결과에서 읽어낼 수 있는 상쇄 조건이 하나 있습니다. 화성이 1·4·7번째 하우스에 있으면서 자신의 별자리(양자리·전갈자리)나 고양 별자리인 염소자리에 있다면, 망갈 도샤와 함께 '루차카 요가'가 표시됩니다. 이는 '화성이 자신의 별자리나 고양에 있음'이라는 고전적 상쇄 조건을 충족했다는 표시입니다. 2·8·12번째 하우스라면 전체 차트를 열어 화성의 별자리를 확인하세요.",
        },
      ],
    },
    {
      heading: {
        ja: "流派によって重みづけが異なる",
        en: "How strictly it's weighed varies by tradition",
        hi: "परंपरा के अनुसार भार भिन्न होता है",
        ko: "전통에 따라 무게를 다르게 둔다",
      },
      body: [
        {
          ja: "マンガル・ドーシャをどれほど厳格に扱うかは、地域や家系、占星術師によって幅があります。北インドの一部の伝統では婚姻照合における最重要項目の一つとして扱われる一方、南インドや他の地域ではアシュタクータ（相性三十六点法）ほど重視されないこともあります。また、双方の図に同種の配置がある「マンガル・マンガル」の組み合わせは、多くの伝統でむしろ問題にならないとされています。",
          en: "How strictly Mangal Dosha is weighed varies by region, family, and individual astrologer. Some northern Indian traditions treat it as one of the most important items in a marriage match, while other regions weigh it less heavily than Ashtakoot's thirty-six-point compatibility score. A “Mangal-Mangal” pairing — the same placement appearing in both charts — is considered a non-issue in many traditions.",
          hi: "मंगल दोष को कितनी सख्ती से देखा जाए, यह क्षेत्र, परिवार और ज्योतिषी के अनुसार भिन्न होता है। उत्तर भारत की कुछ परंपराओं में इसे विवाह मिलान के सबसे महत्वपूर्ण बिंदुओं में गिना जाता है, जबकि अन्य क्षेत्रों में इसे अष्टकूट जितना भार नहीं दिया जाता।",
          ko: "망갈 도샤를 얼마나 엄격히 볼지는 지역, 가문, 점성가에 따라 다릅니다. 북인도의 일부 전통에서는 결혼 궁합에서 가장 중요한 항목 중 하나로 다루지만, 다른 지역에서는 아슈타쿠타의 36점 궁합 점수만큼 무겁게 두지 않기도 합니다. 양쪽 차트 모두에 같은 배치가 나타나는 '망갈-망갈' 조합은 많은 전통에서 오히려 문제가 되지 않는다고 봅니다.",
        },
      ],
    },
    {
      heading: {
        ja: "このページが同時に示す他のヨーガ",
        en: "The other yogas this page shows alongside it",
        hi: "यह पृष्ठ साथ ही अन्य कौन-से योग दिखाता है",
        ko: "이 페이지가 함께 보여주는 다른 요가들",
      },
      body: [
        {
          ja: "マンガル・ドーシャは、当サイトが検出する組み合わせの一つに過ぎません。同じ図から、カーラ・サルパ・ドーシャ（全惑星がラーフ・ケートゥ軸の片側に収まる配置）、ガジャ・ケサリ・ヨーガ（月から見て木星がケンドラにある吉配置）、ブダーディティヤ・ヨーガ（太陽と水星の合）、五大人物ヨーガ（惑星がケンドラで自身の星座または高揚にある配置）なども同時に確認しています。マンガル・ドーシャだけを心配して図を見に来た方でも、実際にはその図が示す吉配置のほうが多いということも珍しくありません。",
          en: "Mangal Dosha is only one of the combinations this site detects. The same chart is checked simultaneously for Kaal Sarp Dosha (all planets hemmed on one side of the Rahu–Ketu axis), Gaja Kesari Yoga (Jupiter in a kendra from the Moon, a favourable placement), Budhaditya Yoga (Sun and Mercury conjunct), and the five Panchamahapurusha yogas (a planet in a kendra, in its own sign or exalted). It's common for someone who came here worried specifically about Mangal Dosha to find their chart actually carries more favourable combinations than concerning ones.",
          hi: "मंगल दोष इस साइट द्वारा पहचाने जाने वाले संयोगों में से एक मात्र है। उसी कुंडली में कालसर्प दोष, गजकेसरी योग, बुधादित्य योग, और पाँच पंचमहापुरुष योग भी साथ ही जाँचे जाते हैं।",
          ko: "망갈 도샤는 이 사이트가 감지하는 조합 중 하나일 뿐입니다. 같은 차트에서 칼 사르프 도샤(모든 행성이 라후-케투 축 한쪽에 갇힌 배치), 가자 케사리 요가(달로부터 목성이 켄드라에 있는 길한 배치), 부다디티야 요가(태양과 수성의 합), 그리고 다섯 판차마하푸루샤 요가(행성이 켄드라에서 자신의 별자리이거나 고양인 배치)도 함께 확인합니다.",
        },
      ],
      bullets: [
        {
          ja: "マンガル・ドーシャは火星がラグナから六室のいずれかにあることのみを機械的に確認します",
          en: "This check only mechanically verifies whether Mars sits in one of six houses from the Lagna",
          hi: "यह जाँच केवल यह यांत्रिक रूप से पुष्टि करती है कि मंगल लग्न से छह भावों में से किसी एक में है",
          ko: "이 확인은 화성이 라그나로부터 여섯 하우스 중 하나에 있는지만 기계적으로 검증합니다",
        },
        {
          ja: "古典的な相殺条件は複数あり、専門的な判断を要します",
          en: "Classical cancellation conditions are numerous and require professional judgment to evaluate",
          hi: "शास्त्रीय निरसन शर्तें कई हैं और उनके आकलन के लिए विशेषज्ञ निर्णय आवश्यक है",
          ko: "고전적 상쇄 조건은 여러 가지이며 평가하려면 전문적 판단이 필요합니다",
        },
        {
          ja: "重視の度合いは地域と流派によって大きく異なります",
          en: "How much weight it carries varies significantly by region and tradition",
          hi: "इसे कितना महत्व दिया जाए यह क्षेत्र और परंपरा के अनुसार बहुत भिन्न होता है",
          ko: "얼마나 비중을 두는지는 지역과 전통에 따라 크게 다릅니다",
        },
      ],
    },
    {
      heading: {
        ja: "チェックの使い方と入力のコツ",
        en: "How to use the check, and what to watch when entering details",
        hi: "जाँच का उपयोग कैसे करें और विवरण भरते समय क्या ध्यान रखें",
        ko: "확인 방법과 입력할 때 주의할 점",
      },
      body: [
        {
          ja: "手順はシンプルです。フォームに生年月日、出生時刻、出生地を入力し、「チャートを作成」を押すと、数秒で「ヨーガとドーシャ」の結果が表示されます。以前に当サイトで出生データを保存している場合は、その情報から自動で計算されます。",
          en: "The steps are simple. Enter your date of birth, time of birth and place of birth, press “Draw my chart”, and the “Yogas & Doshas” result appears within a few seconds. If you've saved your birth details on this site before, the result is calculated from them automatically.",
          hi: "प्रक्रिया सरल है। फ़ॉर्म में जन्म तिथि, जन्म समय और जन्म स्थान भरें, बटन दबाएँ, और कुछ ही सेकंड में 'योग और दोष' का परिणाम दिखाई देगा। यदि आपने पहले इस साइट पर जन्म विवरण सहेजा है, तो उसी से अपने-आप गणना हो जाती है।",
          ko: "절차는 간단합니다. 양식에 생년월일, 출생 시각, 출생지를 입력하고 '내 차트 만들기'를 누르면 몇 초 안에 '요가와 도샤' 결과가 표시됩니다. 이전에 이 사이트에 출생 정보를 저장했다면 그 정보로 자동 계산됩니다.",
        },
        {
          ja: "いちばん大切なのは出生時刻です。マンガル・ドーシャはラグナ（上昇宮）から火星までの室で判定しますが、ラグナはおよそ二時間ごとに次の星座へ移ります。時刻が一時間ずれるだけで火星の室が一つ変わり、結果が「あり」から「なし」へ、またはその逆へ入れ替わることがあります。母子手帳や出生届の記録など、できるだけ正確な時刻を確認してから入力してください。",
          en: "The single most important input is the birth time. Mangal Dosha is judged by counting houses from the Lagna (ascendant) to Mars, and the Lagna moves into the next sign roughly every two hours. An error of just an hour can shift Mars by one house and flip the result from present to absent, or the other way round. Check the most reliable record you have — a maternal health handbook or birth registration — before entering it.",
          hi: "सबसे महत्वपूर्ण जानकारी जन्म समय है। मंगल दोष लग्न से मंगल तक भाव गिनकर देखा जाता है, और लग्न लगभग हर दो घंटे में अगली राशि में चला जाता है। एक घंटे की गलती से भी मंगल एक भाव खिसक सकता है और परिणाम 'है' से 'नहीं' या उल्टा हो सकता है। इसलिए सबसे विश्वसनीय रिकॉर्ड से समय जाँचकर भरें।",
          ko: "가장 중요한 입력값은 출생 시각입니다. 망갈 도샤는 라그나(상승궁)에서 화성까지의 하우스로 판정하는데, 라그나는 약 두 시간마다 다음 별자리로 넘어갑니다. 한 시간만 어긋나도 화성의 하우스가 하나 바뀌어 결과가 '있음'에서 '없음'으로, 또는 그 반대로 바뀔 수 있습니다. 모자수첩이나 출생 신고 기록 등 가장 정확한 기록을 확인한 뒤 입력해 주세요.",
        },
      ],
      bullets: [
        {
          ja: "出生時刻が不明・おおよその場合：結果は参考程度にとどめ、前後一〜二時間で結果が変わらないかを確かめるのがおすすめです",
          en: "Unknown or approximate birth time: treat the result as tentative, and check whether it stays the same an hour or two either side",
          hi: "जन्म समय अज्ञात या अनुमानित हो: परिणाम को केवल संकेत मानें, और देखें कि एक-दो घंटे आगे-पीछे करने पर परिणाम बदलता है या नहीं",
          ko: "출생 시각을 모르거나 대략적인 경우: 결과는 참고로만 보고, 앞뒤 1~2시간에서 결과가 바뀌지 않는지 확인해 보세요",
        },
        {
          ja: "出生地：時差や経度の計算に使うため、市区町村まで正しく選んでください。海外で生まれた方は、その土地を選びます",
          en: "Place of birth: it's used for the time-zone and longitude calculation, so choose the right city — if you were born abroad, choose that place",
          hi: "जन्म स्थान: समय-क्षेत्र और देशांतर की गणना इसी से होती है, इसलिए सही शहर चुनें — विदेश में जन्म हुआ हो तो वही स्थान चुनें",
          ko: "출생지: 시차와 경도 계산에 쓰이므로 시·구 단위까지 정확히 선택하세요. 해외에서 태어났다면 그 지역을 선택합니다",
        },
        {
          ja: "星座のずれ：当サイトはラーヒリー・アヤナムシャ（約24度）を使う恒星黄道で計算するため、西洋占星術の星座や室より一つ前にずれることがよくあります。誤りではありません",
          en: "Shifted signs: this site uses the sidereal zodiac with Lahiri ayanamsa (about 24°), so signs and houses often land one place earlier than in Western astrology — that's expected, not an error",
          hi: "राशि का खिसकना: यह साइट लाहिड़ी अयनांश (लगभग 24°) वाली निरयण राशि-चक्र से गणना करती है, इसलिए राशियाँ अक्सर पाश्चात्य ज्योतिष से एक पीछे आती हैं — यह गलती नहीं है",
          ko: "별자리 차이: 이 사이트는 라히리 아야남샤(약 24도)를 쓰는 항성 황도로 계산하므로, 서양 점성술보다 별자리와 하우스가 하나 앞으로 밀리는 경우가 많습니다. 오류가 아닙니다",
        },
      ],
    },
    {
      heading: {
        ja: "結果の読み方：表示される用語",
        en: "Reading the result: the terms you'll see",
        hi: "परिणाम कैसे पढ़ें: दिखने वाले शब्द",
        ko: "결과 읽는 법: 표시되는 용어",
      },
      body: [
        {
          ja: "結果は「ヨーガとドーシャ」という見出しの下に、見つかった組み合わせだけがカードとして並びます。マンガル・ドーシャのカードには、名前、短い説明、「留意点」というラベル、そして根拠として「火星 — 第7室」のような室番号が表示されます。",
          en: "Under the “Yogas & Doshas” heading, only the combinations actually found appear, each as a card. The Mangal Dosha card shows its name, a short description, a “Worth noting” label, and the evidence as a house number such as “Mars — house 7”.",
          hi: "'योग और दोष' शीर्षक के नीचे केवल वही संयोग कार्ड के रूप में दिखते हैं जो वास्तव में मिले। मंगल दोष के कार्ड में नाम, छोटा विवरण, 'ध्यान देने योग्य' लेबल, और प्रमाण के रूप में 'मंगल — भाव 7' जैसी भाव संख्या दिखती है।",
          ko: "'요가와 도샤' 제목 아래에 실제로 발견된 조합만 카드로 표시됩니다. 망갈 도샤 카드에는 이름, 짧은 설명, '주목할 점' 라벨, 그리고 근거로 '화성 — 7하우스' 같은 하우스 번호가 나옵니다.",
        },
        {
          ja: "例えば、ラグナが獅子座で火星が水瓶座にある場合、水瓶座は獅子座から数えて七番目なので「火星 — 第7室」と表示されます。一方、ラグナが天秤座で火星が山羊座にある場合は第4室となり、マンガル・ドーシャと同時に「ルチャカ・ヨーガ」も表示されます。火星が高揚の山羊座にあるためで、これは古典的な相殺条件の一つ（火星が自身の星座か高揚にある）に当たります。いずれも説明のための例です。",
          en: "For example, with a Leo Lagna and Mars in Aquarius, Aquarius is the seventh sign counted from Leo, so the card reads “Mars — house 7”. With a Libra Lagna and Mars in Capricorn, Mars is in the fourth house, and “Ruchaka Yoga” appears alongside Mangal Dosha — because Mars is exalted in Capricorn, which matches one classical cancellation condition (Mars in its own or exaltation sign). Both are illustrative examples.",
          hi: "उदाहरण के लिए, सिंह लग्न और कुंभ में मंगल हो, तो कुंभ सिंह से सातवीं राशि है, इसलिए 'मंगल — भाव 7' दिखेगा। तुला लग्न और मकर में मंगल हो, तो मंगल चौथे भाव में होगा और मंगल दोष के साथ 'रुचक योग' भी दिखेगा — क्योंकि मकर में मंगल उच्च का है, जो एक शास्त्रीय निरसन शर्त (मंगल स्वराशि या उच्च राशि में) से मेल खाता है। दोनों केवल उदाहरण हैं।",
          ko: "예를 들어 라그나가 사자자리이고 화성이 물병자리에 있다면, 물병자리는 사자자리에서 일곱 번째이므로 '화성 — 7하우스'로 표시됩니다. 라그나가 천칭자리이고 화성이 염소자리에 있다면 4번째 하우스가 되며, 망갈 도샤와 함께 '루차카 요가'도 표시됩니다. 화성이 고양 별자리인 염소자리에 있기 때문이며, 이는 고전적 상쇄 조건 중 하나(화성이 자신의 별자리나 고양 별자리에 있음)에 해당합니다. 둘 다 설명을 위한 예입니다.",
        },
      ],
      bullets: [
        {
          ja: "ラグナ（上昇宮）：生まれた瞬間に東の地平線に昇っていた星座。室を数える起点で、ここが第1室になります",
          en: "Lagna (ascendant): the sign rising on the eastern horizon at the moment of birth — the starting point for counting houses, and itself the first house",
          hi: "लग्न: जन्म के क्षण पूर्वी क्षितिज पर उदित राशि — भाव गिनने का आरंभ बिंदु, और यही पहला भाव है",
          ko: "라그나(상승궁): 태어난 순간 동쪽 지평선에 떠오르던 별자리. 하우스를 세는 기준점이며 이곳이 1번째 하우스입니다",
        },
        {
          ja: "室（ハウス）：人生の領域を十二に分けたもの。当サイトはラグナの星座全体を第1室とし、以後一星座ずつ数えるホールサイン方式です",
          en: "House: one of twelve divisions of life areas. This site uses whole-sign houses — the entire Lagna sign is the first house, then one sign per house after it",
          hi: "भाव: जीवन-क्षेत्रों के बारह विभाग। यह साइट पूर्ण-राशि पद्धति अपनाती है — पूरी लग्न राशि पहला भाव, फिर हर अगली राशि एक भाव",
          ko: "하우스: 삶의 영역을 열두 개로 나눈 것. 이 사이트는 라그나 별자리 전체를 1번째 하우스로 삼고 이후 한 별자리씩 세는 홀사인 방식입니다",
        },
        {
          ja: "「火星 — 第○室」：判定の根拠そのもの。第1・2・4・7・8・12室のどれかで、室ごとに伝統的な意味合いが異なります",
          en: "“Mars — house N”: the evidence itself — one of houses 1, 2, 4, 7, 8 or 12, each carrying a different traditional shade of meaning",
          hi: "'मंगल — भाव N': स्वयं प्रमाण — भाव 1, 2, 4, 7, 8 या 12 में से एक, हर भाव का पारंपरिक अर्थ अलग है",
          ko: "'화성 — N번째 하우스': 판정의 근거 그 자체. 1·2·4·7·8·12번째 중 하나이며, 하우스마다 전통적 의미가 다릅니다",
        },
        {
          ja: "「留意点」「好意的」：ラベルは吉凶の判決ではなく、伝統的に注意して読む配置か、恵まれた配置かの目安です",
          en: "“Worth noting” / “Favourable”: these labels aren't verdicts — they only indicate whether tradition reads a placement with care or as fortunate",
          hi: "'ध्यान देने योग्य' / 'अनुकूल': ये लेबल फ़ैसला नहीं हैं — केवल यह बताते हैं कि परंपरा किसी स्थिति को सावधानी से पढ़ती है या शुभ मानती है",
          ko: "'주목할 점' / '긍정적': 이 라벨은 판결이 아니라, 전통적으로 주의해서 읽는 배치인지 혜택 받은 배치인지를 알려주는 기준일 뿐입니다",
        },
        {
          ja: "ルチャカ・ヨーガ：火星が第1・4・7・10室で自身の星座（牡羊座・蠍座）か高揚（山羊座）にあるときに表示。マンガル・ドーシャと並んで出たら、相殺条件の一つが満たされているサインです",
          en: "Ruchaka Yoga: shown when Mars is in house 1, 4, 7 or 10 in its own sign (Aries, Scorpio) or exalted (Capricorn). If it appears next to Mangal Dosha, one cancellation condition is met",
          hi: "रुचक योग: तब दिखता है जब मंगल भाव 1, 4, 7 या 10 में स्वराशि (मेष, वृश्चिक) या उच्च (मकर) में हो। मंगल दोष के साथ दिखे तो एक निरसन शर्त पूरी होती है",
          ko: "루차카 요가: 화성이 1·4·7·10번째 하우스에서 자신의 별자리(양자리, 전갈자리)나 고양(염소자리)에 있을 때 표시됩니다. 망갈 도샤와 함께 나오면 상쇄 조건 하나가 충족된 것입니다",
        },
        {
          ja: "「見つかりませんでした」：確認した組み合わせが一つもないという正当な結果で、計算の失敗ではありません",
          en: "“Doesn't carry any of the combinations”: a legitimate result meaning none of the checked combinations were found — not a calculation failure",
          hi: "'कोई संयोग नहीं मिला': एक वैध परिणाम कि जाँचे गए संयोगों में से कोई नहीं है — गणना की विफलता नहीं",
          ko: "'발견되지 않았습니다': 확인한 조합이 하나도 없다는 정당한 결과이며, 계산 실패가 아닙니다",
        },
        {
          ja: "おすすめの対処法（ウパーヤ）：結果の下に出る一般的な参考情報です。あなたのチャートに合わせて選ばれたものではありません",
          en: "Suggested remedies (upay): the general reference shown below the result — not selected for your particular chart",
          hi: "सुझाए गए उपाय: परिणाम के नीचे दिखने वाला सामान्य संदर्भ — आपकी विशेष कुंडली के अनुसार नहीं चुना गया",
          ko: "추천 레메디(우파야): 결과 아래에 나오는 일반 참고 정보이며, 당신의 차트에 맞춰 고른 것이 아닙니다",
        },
      ],
    },
    {
      heading: {
        ja: "西洋占星術との違い",
        en: "How this differs from Western astrology",
        hi: "पाश्चात्य ज्योतिष से अंतर",
        ko: "서양 점성술과의 차이",
      },
      body: [
        {
          ja: "マンガル・ドーシャは、インド占星術（ジョーティシュ）独自の考え方です。西洋占星術にも第七室の火星を「パートナーシップに情熱や率直さを持ち込む配置」と読む解釈はありますが、結婚前に確認すべき「ドーシャ（障り）」という枠組みはありません。",
          en: "Mangal Dosha is a concept specific to Indian astrology (Jyotish). Western astrology may read Mars in the seventh house as bringing passion or directness into partnerships, but it has no framework of a “dosha” to check before marriage.",
          hi: "मंगल दोष भारतीय ज्योतिष की अपनी अवधारणा है। पाश्चात्य ज्योतिष सातवें भाव के मंगल को साझेदारी में जोश या स्पष्टता लाने वाला पढ़ सकता है, पर विवाह से पहले जाँचे जाने वाले 'दोष' की कोई रूपरेखा उसमें नहीं है।",
          ko: "망갈 도샤는 인도 점성술(죠티시) 고유의 개념입니다. 서양 점성술에도 7번째 하우스의 화성을 '파트너십에 열정과 솔직함을 가져오는 배치'로 읽는 해석은 있지만, 결혼 전에 확인해야 할 '도샤'라는 틀은 없습니다.",
        },
        {
          ja: "計算方法も異なります。西洋占星術は季節を基準にした回帰黄道を使い、室もプラシーダス法などで分けることが多いのに対し、当サイトは実際の星の位置に合わせた恒星黄道とホールサイン方式を使います。そのため、西洋式のホロスコープでは火星が第六室なのに、ここでは第七室と出る、といったことが起こります。どちらかが間違っているのではなく、物差しが違うのです。",
          en: "The calculation differs too. Western astrology uses the season-based tropical zodiac and often divides houses with systems such as Placidus, while this site uses the sidereal zodiac, aligned to the actual stars, with whole-sign houses. So Mars might be in the sixth house in a Western chart yet show as seventh here. Neither is wrong — they're different rulers.",
          hi: "गणना भी अलग है। पाश्चात्य ज्योतिष ऋतु-आधारित सायन राशि-चक्र और अक्सर प्लेसिडस जैसी भाव-पद्धति अपनाता है, जबकि यह साइट वास्तविक तारों से जुड़ी निरयण राशि-चक्र और पूर्ण-राशि भाव अपनाती है। इसलिए पाश्चात्य कुंडली में मंगल छठे भाव में और यहाँ सातवें में दिख सकता है। कोई गलत नहीं — मापदंड अलग हैं।",
          ko: "계산 방식도 다릅니다. 서양 점성술은 계절을 기준으로 한 회귀 황도를 쓰고 하우스도 플라시두스 방식 등으로 나누는 경우가 많지만, 이 사이트는 실제 별의 위치에 맞춘 항성 황도와 홀사인 방식을 씁니다. 그래서 서양식 호로스코프에서는 화성이 6번째 하우스인데 여기서는 7번째로 나오는 일이 생깁니다. 어느 쪽이 틀린 것이 아니라 잣대가 다른 것입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "よくある誤解と、落ち着いて受け止めるためのポイント",
        en: "Common misconceptions, and how to take the result calmly",
        hi: "आम भ्रांतियाँ, और परिणाम को शांति से कैसे लें",
        ko: "흔한 오해와 결과를 차분히 받아들이는 요령",
      },
      body: [
        {
          ja: "マンガル・ドーシャという言葉は、ときに必要以上に不安をあおる形で語られます。十二室のうち六室が該当するため、ラグナ基準だけでも単純計算でおよそ半数の人に当てはまる、ごくありふれた配置です。ここでは、よく耳にする誤解を整理しておきます。",
          en: "The term Mangal Dosha is sometimes spoken of in ways that stir up more worry than it deserves. Six of the twelve houses qualify, so by simple arithmetic roughly half of all people carry it from the Lagna alone — it's a very ordinary placement. Here are the misconceptions heard most often.",
          hi: "मंगल दोष शब्द कभी-कभी ज़रूरत से ज़्यादा चिंता जगाने वाले ढंग से कहा जाता है। बारह में से छह भाव इसमें आते हैं, इसलिए साधारण गणित से केवल लग्न के आधार पर लगभग आधे लोगों में यह होता है — यह बहुत सामान्य स्थिति है। यहाँ अक्सर सुनी जाने वाली भ्रांतियाँ दी गई हैं।",
          ko: "망갈 도샤라는 말은 때때로 필요 이상으로 불안을 부추기는 방식으로 이야기됩니다. 열두 하우스 중 여섯이 해당하므로, 라그나 기준만으로도 단순 계산상 약 절반의 사람에게 해당하는 아주 흔한 배치입니다. 자주 듣는 오해를 정리해 둡니다.",
        },
      ],
      bullets: [
        {
          ja: "誤解：「あり」なら結婚に向かない → 実際：ドーシャは人の価値や結婚の適性を決めるものではありません。伝統的にも、配置の一側面として読む項目の一つです",
          en: "Myth: “present” means unsuited to marriage → In fact: a dosha doesn't decide anyone's worth or fitness for marriage; even traditionally it's one facet of a chart among many",
          hi: "भ्रांति: 'है' तो विवाह के योग्य नहीं → वास्तव में: दोष किसी का मूल्य या विवाह की योग्यता तय नहीं करता; परंपरा में भी यह कुंडली के कई पहलुओं में से एक है",
          ko: "오해: '있음'이면 결혼에 맞지 않는다 → 실제: 도샤는 사람의 가치나 결혼 적합성을 정하지 않습니다. 전통적으로도 차트의 여러 측면 중 하나일 뿐입니다",
        },
        {
          ja: "誤解：火星は悪い星 → 実際：火星は勇気、行動力、守る力の象徴でもあり、同じ配置が情熱や実行力として表れることもあります",
          en: "Myth: Mars is a bad planet → In fact: Mars also stands for courage, drive and protectiveness, and the same placement can show up as passion and the ability to get things done",
          hi: "भ्रांति: मंगल बुरा ग्रह है → वास्तव में: मंगल साहस, कर्मठता और रक्षा-भाव का भी प्रतीक है, और वही स्थिति जोश व कार्य-क्षमता के रूप में भी दिख सकती है",
          ko: "오해: 화성은 나쁜 별이다 → 실제: 화성은 용기, 행동력, 지키는 힘의 상징이기도 하며, 같은 배치가 열정과 실행력으로 나타나기도 합니다",
        },
        {
          ja: "誤解：高額な儀式をしないと解消しない → 実際：伝統的な対処法の多くは、祈りや寄付など日常の中で続けられる控えめなものです",
          en: "Myth: it can't be resolved without an expensive ritual → In fact: most traditional remedies are modest practices, such as prayer or charity, that fit into everyday life",
          hi: "भ्रांति: महँगे अनुष्ठान के बिना हल नहीं → वास्तव में: अधिकांश पारंपरिक उपाय प्रार्थना या दान जैसे सरल अभ्यास हैं जो रोज़मर्रा के जीवन में किए जा सकते हैं",
          ko: "오해: 비싼 의식을 하지 않으면 해소되지 않는다 → 실제: 전통적인 레메디 대부분은 기도나 기부처럼 일상에서 꾸준히 할 수 있는 소박한 것입니다",
        },
        {
          ja: "確認ポイント：出生時刻は正確か（前後一〜二時間で結果が変わらないか）",
          en: "Checkpoint: is the birth time accurate — does the result hold an hour or two either side?",
          hi: "जाँच बिंदु: क्या जन्म समय सही है — एक-दो घंटे आगे-पीछे करने पर भी परिणाम वही रहता है?",
          ko: "확인 포인트: 출생 시각이 정확한가 — 앞뒤 1~2시간에서도 결과가 같은가",
        },
        {
          ja: "確認ポイント：ルチャカ・ヨーガが同時に表示されていないか（表示されていれば相殺条件の一つに該当）",
          en: "Checkpoint: does Ruchaka Yoga appear alongside it? If so, one cancellation condition applies",
          hi: "जाँच बिंदु: क्या साथ में रुचक योग दिखता है? यदि हाँ, तो एक निरसन शर्त लागू होती है",
          ko: "확인 포인트: 루차카 요가가 함께 표시되는가? 그렇다면 상쇄 조건 하나에 해당합니다",
        },
        {
          ja: "確認ポイント：相性を見るなら、お相手のチャートも同じように確認したか（双方にあれば多くの流派で問題視されません）",
          en: "Checkpoint: if you're looking at compatibility, have you checked the partner's chart the same way? If both carry it, many traditions don't treat it as an issue",
          hi: "जाँच बिंदु: यदि अनुकूलता देख रहे हैं, तो क्या साथी की कुंडली भी इसी तरह जाँची? दोनों में हो तो कई परंपराएँ इसे समस्या नहीं मानतीं",
          ko: "확인 포인트: 궁합을 본다면 상대의 차트도 같은 방식으로 확인했는가? 양쪽 모두에 있으면 많은 전통에서 문제로 보지 않습니다",
        },
      ],
    },
    {
      heading: {
        ja: "ご利用にあたって",
        en: "Before you rely on this",
        hi: "उपयोग से पहले",
        ko: "이용하시기 전에",
      },
      body: [
        {
          ja: "占星術は、自分を見つめ直すきっかけや楽しみとしてご活用ください。当ページの結果は、結婚やお付き合いの可否、健康、法律、お金に関する判断の根拠になるものではありません。人と人との関係は、配置ひとつではなく、日々の対話と互いへの思いやりで育っていくものです。",
          en: "Please use astrology as a prompt for self-reflection and as something to enjoy. The result on this page is not a basis for deciding whether to marry or date someone, nor for medical, legal or financial decisions. Relationships grow through everyday conversation and care for each other, not through a single placement.",
          hi: "कृपया ज्योतिष को आत्म-चिंतन और आनंद के साधन के रूप में लें। इस पृष्ठ का परिणाम विवाह या संबंध के निर्णय, अथवा स्वास्थ्य, कानूनी या आर्थिक निर्णयों का आधार नहीं है। रिश्ते किसी एक ग्रह-स्थिति से नहीं, बल्कि रोज़ की बातचीत और एक-दूसरे की परवाह से बढ़ते हैं।",
          ko: "점성술은 자신을 돌아보는 계기이자 즐거움으로 활용해 주세요. 이 페이지의 결과는 결혼이나 교제 여부, 건강, 법률, 금전에 관한 판단의 근거가 아닙니다. 사람과 사람의 관계는 배치 하나가 아니라 매일의 대화와 서로를 향한 배려로 자라납니다.",
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
          ja: "火星の性質や室の意味をもう少し深く知りたい方、お相手との相性を総合的に見たい方は、次のページもあわせてご覧ください。",
          en: "If you'd like to understand Mars and the houses in more depth, or look at compatibility with a partner as a whole, these pages are a good next step.",
          hi: "यदि आप मंगल और भावों को और गहराई से समझना चाहते हैं, या साथी के साथ अनुकूलता को समग्र रूप से देखना चाहते हैं, तो ये पृष्ठ देखें।",
          ko: "화성의 성질과 하우스의 의미를 더 깊이 알고 싶거나 상대와의 궁합을 종합적으로 보고 싶다면 다음 페이지도 함께 보세요.",
        },
      ],
      links: [
        {
          href: "/tools/compatibility",
          label: { ja: "相性診断（アシュタクータ）", en: "Compatibility (Ashtakoot)", hi: "अनुकूलता (अष्टकूट)", ko: "궁합 확인(아슈타쿠타)" },
        },
        {
          href: "/grahas/mars",
          label: { ja: "火星（マンガル）の解説", en: "Mars (Mangal) explained", hi: "मंगल ग्रह की व्याख्या", ko: "화성(망갈) 해설" },
        },
        {
          href: "/learn-jyotish/houses/twelve-houses",
          label: { ja: "十二室（ハウス）の意味", en: "The twelve houses", hi: "बारह भावों का अर्थ", ko: "열두 하우스의 의미" },
        },
        {
          href: "/tools/birth-time-check",
          label: { ja: "出生時刻の確からしさをチェック", en: "Birth time check", hi: "जन्म समय जाँच", ko: "출생 시각 확인" },
        },
        {
          href: "/learn-jyotish/remedies",
          label: { ja: "レメディ（対処法）の考え方", en: "Remedies in Jyotish", hi: "ज्योतिष में उपाय", ko: "죠티시의 레메디" },
        },
      ],
    },
  ],
};
