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
          ja: "六つの室すべてが同じ重みで扱われるわけではありません。第七室（配偶者の室）と第八室（配偶者の寿命・共有財産の室）の火星は、結婚そのものに直接関わる室であるため特に重視される傾向があります。第一室の火星は本人の気質、第四室は家庭の平穏、第十二室は寝室・出費に関わるとされ、それぞれ意味合いが異なります。当ページはどの室に火星があるかを具体的に示すのはそのためです——「マンガル・ドーシャの有無」という一点だけでは、実際に何が示されているのかが見えなくなります。",
          en: "Not all six houses carry equal weight. Mars in the seventh (the house of the spouse) or eighth (the spouse's longevity and shared resources) tends to be weighted more heavily, since those houses connect directly to the marriage itself. Mars in the first speaks to the individual's own temperament, the fourth to domestic peace, the twelfth to the marital bed and shared expenses — each a different shade of meaning. This page states exactly which house Mars occupies for that reason: a single “has it or doesn't” answer hides which of six quite different things is actually being described.",
          hi: "सभी छह भाव समान भार के नहीं होते। सातवें भाव (जीवनसाथी का भाव) या आठवें भाव (जीवनसाथी की आयु और साझा संसाधन) में मंगल को अधिक भारी माना जाता है, क्योंकि ये भाव सीधे विवाह से जुड़े होते हैं।",
          ko: "여섯 하우스가 모두 같은 무게를 갖는 것은 아닙니다. 7번째(배우자의 하우스)나 8번째(배우자의 수명과 공유 자산) 하우스의 화성은 결혼 자체와 직접 연결되므로 더 무겁게 다뤄지는 경향이 있습니다. 1번째 하우스의 화성은 본인의 기질을, 4번째는 가정의 평온을, 12번째는 부부의 침실과 지출을 이야기한다고 보며, 각각 의미가 다릅니다.",
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
  ],
};
