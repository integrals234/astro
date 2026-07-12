import type { WisdomArticle } from "./types";
import { educationImages, eduImage } from "./education-images";

/** Articles sourced verbatim from temp-content/p6.txt (link-scrubbed, headings normalized) */
export const p6Articles: WisdomArticle[] = [
  {
    id: "mahadashas",
    section: "mahadashas",
    title: {
      en: "Mahadashas – Planetary Periods", hi: "महादशाएँ - ग्रह काल", ja: "マハダシャー – 惑星時代", ko: "마하다샤 – 행성 시대",},
    related: [
      "transits",
      "birth-time-errors",
      "functional-benefics-malefics",
      "planetary-aspects"
    ],
    blocks: [
      {
        type: "paragraph",
        text: {
          en: "Summary: Explaining the key features of the Mahadasha planetary periods used in prediction, their duration, possible effects, and how these influences are modified by the Antardasha sub-periods.", hi: "सारांश: भविष्यवाणी में उपयोग की जाने वाली महादशा ग्रह अवधियों की प्रमुख विशेषताओं, उनकी अवधि, संभावित प्रभावों और अंतर्दशा उप-अवधियों द्वारा इन प्रभावों को कैसे संशोधित किया जाता है, इसकी व्याख्या करना।", ja: "概要: 予測に使用されるマハダシャー惑星周期の主な特徴、その期間、考えられる影響、およびこれらの影響がアンタルダシャー サブ周期によってどのように変更されるかを説明します。", ko: "요약: 예측에 사용된 Mahadasha 행성 기간의 주요 특징, 기간, 가능한 효과 및 이러한 영향이 Antardasha 하위 기간에 의해 수정되는 방식을 설명합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Jyotish astrologers use Mahadashas to predict periods in life when significant changes may occur, along with the events—both favourable and unfavourable—that are associated with them.", hi: "ज्योतिषी महादशा का उपयोग जीवन में उन अवधियों की भविष्यवाणी करने के लिए करते हैं जब महत्वपूर्ण परिवर्तन हो सकते हैं, साथ ही अनुकूल और प्रतिकूल दोनों घटनाएं जो उनसे जुड़ी होती हैं।", ja: "ジョーティッシュの占星術師は、マハダシャーを使用して、人生に重大な変化が起こる可能性のある時期と、それに関連する好ましい出来事と悪い出来事の両方を予測します。", ko: "Jyotish 점성가들은 Mahadasha를 사용하여 중요한 변화가 발생할 수 있는 인생의 기간과 그와 관련된 유리한 사건과 불리한 사건 모두를 예측합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "During a particular Mahadasha, the indications in the birth-chart connected with that planet are most likely to manifest. Mahadashas therefore help astrologers determine when the \"cosmic postman\" is likely to deliver our \"karmic packages.\"", hi: "किसी विशेष महादशा के दौरान, जन्म कुंडली में उस ग्रह से जुड़े संकेत प्रकट होने की सबसे अधिक संभावना होती है। इसलिए महादशाएं ज्योतिषियों को यह निर्धारित करने में मदद करती हैं कि \"ब्रह्मांडीय डाकिया\" हमारे \"कर्म पैकेज\" कब वितरित करेगा।", ja: "特定のマハダシャーの間、その惑星に関連する出生図の兆候が現れる可能性が最も高くなります。したがって、マハダシャーは、占星術師が「宇宙の郵便配達員」がいつ私たちの「カルマの小包」を配達する可能性が高いかを判断するのに役立ちます。", ko: "특정 마하다샤 기간 동안 해당 행성과 관련된 출생 차트의 표시가 나타날 가능성이 가장 높습니다. 따라서 마하다샤는 점성가들이 \"우주 우체부\"가 우리의 \"카르마 패키지\"를 배달할 가능성이 있는 시기를 결정하는 데 도움을 줍니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "The Mahadasha system is unique to Jyotish. Although it is sometimes written as Mahadasa, it is pronounced Mahadasha.", hi: "महादशा प्रणाली ज्योतिष के लिए अद्वितीय है। हालाँकि इसे कभी-कभी महादशा के रूप में लिखा जाता है, लेकिन इसका उच्चारण महादशा ही होता है।", ja: "マハダシャー システムはジョーティッシュに特有のものです。マハダサと書かれることもありますが、マハダシャーと発音します。", ko: "Mahadasha 시스템은 Jyotish의 고유한 시스템입니다. 때때로 Mahadasa로 쓰여지지만 Mahadasha로 발음됩니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Key Features of Mahadashas", hi: "महादशा की प्रमुख विशेषताएँ", ja: "マハダシャーの主な特徴", ko: "Mahadashas의 주요 특징",}
      },
      {
        type: "paragraph",
        text: {
          en: "• The Mahadasha system of prediction is unique to Vedic Astrology and is not based upon planetary transits.", hi: "• भविष्यवाणी की महादशा प्रणाली वैदिक ज्योतिष के लिए अद्वितीय है और यह ग्रहों के गोचर पर आधारित नहीं है।", ja: "• マハダシャーの予測システムはヴェーダ占星術に特有のものであり、惑星の通過に基づいていません。", ko: "• Mahadasha 예측 시스템은 베다 점성술의 고유한 것이며 행성 이동에 기반을 두지 않습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Each major period is governed by a different planet.", hi: "• प्रत्येक प्रमुख अवधि एक अलग ग्रह द्वारा शासित होती है।", ja: "• 各主要期間は異なる惑星によって統治されます。", ko: "• 각 주요 기간은 서로 다른 행성에 의해 관리됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• The complete sequence of Mahadashas covers a total of 120 years.", hi: "• महादशाओं का पूरा क्रम कुल 120 वर्षों का होता है।", ja: "• マハダシャーの完全な一連の流れは、合計 120 年に及びます。", ko: "• Mahadashas의 전체 순서는 총 120년에 이릅니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Although the duration of each Mahadasha remains the same for everyone, each individual begins at a different point in the 120-year cycle. This starting point is determined by the longitude of the Moon at birth in the Sidereal Zodiac.", hi: "• यद्यपि प्रत्येक महादशा की अवधि सभी के लिए समान रहती है, प्रत्येक व्यक्ति 120 साल के चक्र में एक अलग बिंदु पर शुरू होता है। यह प्रारंभिक बिंदु नाक्षत्र राशि चक्र में जन्म के समय चंद्रमा के देशांतर से निर्धारित होता है।", ja: "• 各マハダシャーの期間は誰にとっても同じですが、各個人は 120 年のサイクルの異なる時点から始まります。この開始点は、恒星黄道帯における出生時の月の経度によって決まります。", ko: "• 각 마하다샤의 기간은 모든 사람에게 동일하게 유지되지만 각 개인은 120년 주기의 다른 지점에서 시작합니다. 이 시작점은 항성 황도대에서 출생 시 달의 경도에 의해 결정됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Mahadashas are one of the most important tools for accurate prediction. They represent the point where the static factors shown in the birth-chart—such as planets in signs and houses—interact with the dynamic timing system of the Mahadashas. This enables astrologers to determine both what may happen and when it may happen.", hi: "• महादशाएं सटीक भविष्यवाणी के लिए सबसे महत्वपूर्ण उपकरणों में से एक हैं। वे उस बिंदु का प्रतिनिधित्व करते हैं जहां जन्म कुंडली में दिखाए गए स्थिर कारक - जैसे कि राशियों और घरों में ग्रह - महादशा की गतिशील समय प्रणाली के साथ बातचीत करते हैं। यह ज्योतिषियों को यह निर्धारित करने में सक्षम बनाता है कि क्या हो सकता है और कब हो सकता है।", ja: "• マハダシャーは、正確な予測のための最も重要なツールの 1 つです。それらは、出生図に示されている静的要素 (サインやハウス内の惑星など) がマハダシャーの動的なタイミング システムと相互作用するポイントを表しています。これにより、占星術師は何が起こるか、いつ起こるかを判断することができます。", ko: "• Mahadashas는 정확한 예측을 위한 가장 중요한 도구 중 하나입니다. 이는 출생 차트에 표시된 정적 요소(예: 표지판 및 집의 행성)가 Mahadashas의 동적 타이밍 시스템과 상호 작용하는 지점을 나타냅니다. 이를 통해 점성가들은 무슨 일이 일어날지, 언제 일어날지 결정할 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Several Mahadasha systems exist, but the most widely used and the one discussed here is the Vimsottari Dasha system.", hi: "• कई महादशा प्रणालियाँ मौजूद हैं, लेकिन सबसे व्यापक रूप से उपयोग की जाने वाली और यहां जिस पर चर्चा की गई है वह विम्सोत्तरी दशा प्रणाली है।", ja: "• マハダシャー システムはいくつか存在しますが、最も広く使用されており、ここで説明するのはヴィムソタリ ダシャー システムです。", ko: "• 여러 Mahadasha 시스템이 존재하지만 가장 널리 사용되고 여기서 논의되는 시스템은 Vimsottari Dasha 시스템입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Jyotish software provides by far the easiest method of calculating an individual's Mahadashas, although traditional tables are also available.", hi: "• ज्योतिष सॉफ्टवेयर किसी व्यक्ति की महादशा की गणना करने का अब तक का सबसे आसान तरीका प्रदान करता है, हालांकि पारंपरिक तालिकाएं भी उपलब्ध हैं।", ja: "• ジョーティッシュ ソフトウェアは、個人のマハダシャーを計算する最も簡単な方法を提供しますが、従来の表も利用できます。", ko: "• Jyotish 소프트웨어는 개인의 Mahadasha를 계산하는 가장 쉬운 방법을 제공하지만 기존 테이블도 사용할 수 있습니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Mahadasha Periods – Duration in Years", hi: "महादशा अवधि - अवधि वर्षों में", ja: "マハダシャー期間 - 年単位の期間", ko: "Mahadasha 기간 – 기간(년)",}
      },
      {
        type: "paragraph",
        text: {
          en: "Duration of Planetary Mahadashas in Jyotish Astrology", hi: "ज्योतिष शास्त्र में ग्रहों की महादशा की अवधि", ja: "ジョーティッシュにおける惑星マハダシャーの期間", ko: "Jyotish 점성술에서 행성 Mahadashas의 기간",}
      },
      eduImage(educationImages.mahadashaPeriodYears, {
        en: "Mahadasha period — duration in years for each planet", hi: "महादशा अवधि - प्रत्येक ग्रह के लिए वर्षों में अवधि", ja: "マハダシャー期間 — 各惑星の年数", ko: "Mahadasha 기간 — 각 행성의 기간(년)",
      }),
      {
        type: "heading",
        level: 3,
        text: {
          en: "Mahadasha Sequence", hi: "महादशा क्रम", ja: "マハダシャー シーケンス", ko: "마하다샤 시퀀스",}
      },
      {
        type: "paragraph",
        text: {
          en: "The Mahadasha sequence follows the order shown in the diagram above.", hi: "महादशा क्रम ऊपर चित्र में दिखाए गए क्रम का अनुसरण करता है।", ja: "マハダシャー シーケンスは、上の図に示されている順序に従います。", ko: "Mahadasha 시퀀스는 위 다이어그램에 표시된 순서를 따릅니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "This sequence remains exactly the same for everyone, regardless of Ascendant, Moon sign, or any other chart factor.", hi: "लग्न, चंद्र राशि या किसी अन्य चार्ट कारक की परवाह किए बिना, यह क्रम सभी के लिए बिल्कुल समान रहता है।", ja: "この順序は、アセンダント、月星座、その他のチャート要素に関係なく、誰にとってもまったく同じです。", ko: "이 순서는 Ascendant, Moon sign 또는 기타 차트 요인에 관계없이 모든 사람에게 정확히 동일하게 유지됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "The Mahadasha operating at the time of birth is determined by the longitude of the Moon in the Sidereal Zodiac at the moment of birth.", hi: "जन्म के समय चलने वाली महादशा जन्म के समय नाक्षत्र राशि चक्र में चंद्रमा के देशांतर से निर्धारित होती है।", ja: "誕生時に動作するマハダシャーは、誕生時の恒星黄道帯の月の経度によって決まります。", ko: "출생 시 작동하는 마하다샤는 출생 당시 항성 황도대에 있는 달의 경도에 따라 결정됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "The Moon's position also determines how much of that Mahadasha remains to be experienced. For example, a person may begin life nine years into a Saturn Mahadasha. Since Saturn's Mahadasha lasts a total of nineteen years, there would be ten years remaining before the next Mahadasha begins. In this case, the native would enter a Mercury Mahadasha at age ten.", hi: "चंद्रमा की स्थिति यह भी निर्धारित करती है कि उस महादशा का कितना भाग भुगतना बाकी है। उदाहरण के लिए, एक व्यक्ति शनि की महादशा में नौ साल का जीवन शुरू कर सकता है। चूँकि शनि की महादशा कुल उन्नीस वर्षों तक चलती है, इसलिए अगली महादशा शुरू होने में दस वर्ष शेष रहेंगे। इस स्थिति में, जातक दस वर्ष की आयु में बुध की महादशा में प्रवेश करेगा।", ja: "月の位置は、そのマハダシャーをどれだけ経験できるかによっても決まります。たとえば、人は土星マハダシャーになってから 9 年後に人生を始めるかもしれません。土星のマハダシャーは合計 19 年間続くため、次のマハダシャーが始まるまでには 10 年が残っていることになります。この場合、ネイティブは10歳でマーキュリー・マハダシャーに入るでしょう。", ko: "달의 위치는 또한 Mahadasha가 얼마나 많이 경험되어야 하는지를 결정합니다. 예를 들어, 어떤 사람이 토성 마하다샤(Maadasha)에서 9년 동안 삶을 시작할 수 있습니다. 토성의 마하다샤는 총 19년 동안 지속되므로 다음 마하다샤가 시작되기까지는 10년이 남게 됩니다. 이 경우 원주민은 10세가 되면 Mercury Mahadasha에 들어갈 것입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "After the seventeen-year Mercury Mahadasha, the individual would move into a Ketu Mahadasha at age twenty-seven. This would then be followed by the Venus Mahadasha, then the Sun Mahadasha, and so on through the established sequence.", hi: "सत्रह साल की बुध महादशा के बाद, व्यक्ति सत्ताईस साल की उम्र में केतु महादशा में प्रवेश करेगा। इसके बाद शुक्र की महादशा, फिर सूर्य की महादशा, और इसी तरह स्थापित क्रम के अनुसार क्रम चलेगा।", ja: "17年間の水星マハダシャーの後、その人は27歳でケートゥ・マハダシャーに移ります。次に、確立された順序で金星マハダシャー、太陽マハダシャーなどが続きます。", ko: "17년간의 Mercury Mahadasha 이후 개인은 27세에 Ketu Mahadasha로 이사하게 됩니다. 그런 다음 금성 마하다샤(Venus Mahadasha), 그 다음 태양 마하다샤(Sun Mahadasha) 등이 확립된 순서를 통해 이어집니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Effects of Mahadashas", hi: "महादशा का प्रभाव", ja: "マハダシャーの効果", ko: "마하다샤의 효과",}
      },
      {
        type: "paragraph",
        text: {
          en: "A useful way to understand Mahadashas is through the analogy of a theatrical play. In the drama of life, all of the main characters—represented by the planets—are always present. However, many remain waiting behind the scenes until their time arrives. We may have to wait until \"Act Three\" before the hero or villain makes an appearance.", hi: "महादशा को समझने का एक उपयोगी तरीका एक नाट्य नाटक की उपमा है। जीवन के नाटक में, सभी मुख्य पात्र - जिनका प्रतिनिधित्व ग्रह करते हैं - हमेशा मौजूद रहते हैं। हालाँकि, कई लोग अपना समय आने तक पर्दे के पीछे इंतजार करते रहते हैं। नायक या खलनायक की उपस्थिति से पहले हमें \"एक्ट थ्री\" तक इंतजार करना पड़ सकता है।", ja: "マハダシャーを理解する便利な方法は、演劇に例えることです。人生のドラマには、惑星に代表されるすべての主要登場人物が常に存在します。しかし、多くの人はその時が来るまで舞台裏で待ち続けています。ヒーローや悪役が登場する前に、「第 3 幕」まで待たなければならないかもしれません。", ko: "Mahadashas를 이해하는 유용한 방법은 연극의 비유를 통해서입니다. 인생이라는 드라마에는 행성으로 대표되는 모든 주요 인물이 항상 등장합니다. 그러나 많은 사람들은 자신의 때가 될 때까지 뒤에서 기다리고 있습니다. 영웅이나 악당이 등장하려면 '3막'까지 기다려야 할 수도 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "A skilled Vedic astrologer can identify these latent potentials within the birth-chart and use them to forecast future developments. By understanding the unfolding pattern of planetary periods, they can make predictions extending many years into the future.", hi: "एक कुशल वैदिक ज्योतिषी जन्म कुंडली के भीतर इन गुप्त संभावनाओं की पहचान कर सकता है और भविष्य के विकास की भविष्यवाणी करने के लिए उनका उपयोग कर सकता है। ग्रहों की अवधि के प्रकट पैटर्न को समझकर, वे भविष्य में कई वर्षों तक फैली भविष्यवाणियां कर सकते हैं।", ja: "熟練したヴェーダ占星術師は、出生図内のこれらの潜在的な可能性を特定し、将来の展開を予測するために使用できます。惑星周期の展開パターンを理解することで、何年も先の未来を予測することができます。", ko: "숙련된 베다 점성가는 출생 차트 내에서 이러한 잠재 잠재력을 식별하고 이를 사용하여 향후 발전을 예측할 수 있습니다. 행성 주기의 전개 패턴을 ​​이해함으로써 그들은 수년 후의 미래를 예측할 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Astrologers often describe a range of possible events during a Mahadasha, although only some of these possibilities may actually occur. This should not be viewed as a weakness in prediction. Rather, the classical texts provide lists of potential outcomes, and astrologers communicate these possibilities accordingly. Even when exact events cannot be specified, they can usually identify the areas of life where benefits or challenges are most likely to arise. As the saying goes, \"forewarned is forearmed.\"", hi: "ज्योतिषी अक्सर महादशा के दौरान संभावित घटनाओं की एक श्रृंखला का वर्णन करते हैं, हालांकि इनमें से केवल कुछ ही संभावनाएं वास्तव में घटित हो सकती हैं। इसे भविष्यवाणी में कमजोरी के रूप में नहीं देखा जाना चाहिए। बल्कि, शास्त्रीय ग्रंथ संभावित परिणामों की सूची प्रदान करते हैं, और ज्योतिषी इन संभावनाओं को तदनुसार बताते हैं। यहां तक ​​कि जब सटीक घटनाओं को निर्दिष्ट नहीं किया जा सकता है, तब भी वे आमतौर पर जीवन के उन क्षेत्रों की पहचान कर सकते हैं जहां लाभ या चुनौतियाँ उत्पन्न होने की सबसे अधिक संभावना है। जैसा कि कहा जाता है, \"पूर्वाभास का अर्थ है हथियारबंद।\"", ja: "占星術師はマハダシャー中に起こり得るさまざまな出来事について説明することがよくありますが、実際に起こるのはこれらの可能性のうちの一部だけです。これを予測の弱点と見なすべきではありません。むしろ、古典的なテキストは潜在的な結果のリストを提供しており、占星術師はそれらの可能性をそれに応じて伝えています。正確な出来事を特定できない場合でも、通常は、利益や課題が最も発生する可能性が最も高い人生の領域を特定できます。ことわざにあるように、「事前警告は事前準備」です。", ko: "점성가들은 종종 Mahadasha 중에 가능한 이벤트의 범위를 설명하지만 이러한 가능성 중 일부만 실제로 발생할 수 있습니다. 이것을 예측의 약점으로 보아서는 안 됩니다. 오히려, 고전 문헌은 잠재적인 결과의 목록을 제공하고 점성가들은 그에 따라 이러한 가능성을 전달합니다. 정확한 사건을 명시할 수 없는 경우에도 일반적으로 삶의 혜택이나 어려움이 가장 많이 발생할 수 있는 영역을 식별할 수 있습니다. 속담처럼 \"미리 경고받은 사람은 미리 무장되어 있습니다.\"",}
      },
      {
        type: "paragraph",
        text: {
          en: "It is as though everything connected with a particular planet becomes activated during its Mahadasha. This includes:", hi: "यह ऐसा है मानो किसी ग्रह विशेष से जुड़ी हर चीज उसकी महादशा के दौरान सक्रिय हो जाती है। यह भी शामिल है:", ja: "あたかも、特定の惑星に関連するすべてのものが、そのマハダシャー中に活性化されるかのようです。これには以下が含まれます。", ko: "그것은 마치 특정 행성과 연결된 모든 것이 마하다샤 동안 활성화되는 것과 같습니다. 여기에는 다음이 포함됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• The planet's natural significations", hi: "• ग्रह का प्राकृतिक महत्व", ja: "• 地球の自然の意味", ko: "• 행성의 자연적 의미",}
      },
      {
        type: "paragraph",
        text: {
          en: "• The houses it rules", hi: "• जिन घरों पर यह शासन करता है", ja: "• それが支配する家", ko: "• 그것이 지배하는 주택",}
      },
      {
        type: "paragraph",
        text: {
          en: "• The sign and house it occupies", hi: "• वह चिन्ह और वह घर जिस पर वह रहता है", ja: "• 看板とそれが住んでいる家", ko: "• 간판과 그것이 차지하고 있는 집",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Planets it aspects", hi: "• ग्रह इस पर दृष्टि डालते हैं", ja: "• アスペクトする惑星", ko: "• 행성의 측면",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Other important associations connected with it", hi: "• इससे जुड़े अन्य महत्वपूर्ण संघ", ja: "• それに関連するその他の重要な関連性", ko: "• 이와 관련된 기타 중요한 협회",}
      },
      {
        type: "paragraph",
        text: {
          en: "Consequently, the most significant events experienced during a Mahadasha are often directly related to the placement and condition of that planet in the birth-chart.", hi: "नतीजतन, महादशा के दौरान अनुभव की जाने वाली सबसे महत्वपूर्ण घटनाएं अक्सर जन्म कुंडली में उस ग्रह की स्थिति और स्थिति से सीधे संबंधित होती हैं।", ja: "その結果、マハダシャー中に経験した最も重要な出来事は、出生図におけるその惑星の位置と状態に直接関係していることがよくあります。", ko: "결과적으로, 마하다샤 동안 경험하는 가장 중요한 사건은 종종 출생 차트에서 해당 행성의 위치 및 상태와 직접적으로 관련됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "While the indications shown in a natal chart remain valid throughout life, a Mahadasha acts like a switch that activates specific portions of the chart. The houses and factors connected with the Mahadasha planet become especially prominent during that period and often indicate the major life themes and events that arise.", hi: "जबकि जन्म कुंडली में दिखाए गए संकेत जीवन भर मान्य रहते हैं, महादशा एक स्विच की तरह कार्य करती है जो चार्ट के विशिष्ट भागों को सक्रिय करती है। महादशा ग्रह से जुड़े घर और कारक उस अवधि के दौरान विशेष रूप से प्रमुख हो जाते हैं और अक्सर उत्पन्न होने वाले प्रमुख जीवन विषयों और घटनाओं का संकेत देते हैं।", ja: "出生図に示されている兆候は生涯を通じて有効ですが、マハダシャーは図の特定の部分を活性化するスイッチのように機能します。マハダシャー惑星に関連するハウスと要素は、この期間に特に顕著になり、多くの場合、人生の主要なテーマや発生する出来事を示します。", ko: "출생 차트에 표시된 표시는 평생 동안 유효하지만 Mahadasha는 차트의 특정 부분을 활성화하는 스위치처럼 작동합니다. 마하다샤 행성과 관련된 하우스와 요소는 그 기간 동안 특히 두드러지며 종종 발생하는 주요 삶의 주제와 사건을 나타냅니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Assessing Mahadasha effects becomes more complex because planets do not operate solely according to their natural characteristics. This is where the concepts of functional benefics and functional malefics become important.", hi: "महादशा प्रभावों का आकलन करना अधिक जटिल हो जाता है क्योंकि ग्रह पूरी तरह से अपनी प्राकृतिक विशेषताओं के अनुसार काम नहीं करते हैं। यहीं पर कार्यात्मक लाभ और कार्यात्मक अशुभ की अवधारणाएँ महत्वपूर्ण हो जाती हैं।", ja: "惑星はその自然の特性のみに従って機能するわけではないため、マハダシャーの効果の評価はより複雑になります。ここで、機能的有益性と機能的有害性の概念が重要になります。", ko: "행성은 자연적 특성에 따라서만 작동하지 않기 때문에 Mahadasha 효과를 평가하는 것은 더욱 복잡해집니다. 이것이 바로 기능적 유익성과 기능적 유해성의 개념이 중요해지는 곳입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "A benefic functions as a positive agent, while a malefic acts as a challenging or disruptive influence. For example, Jupiter is naturally considered a benefic planet. However, for certain ascendants—such as Libra Ascendant—it can function as a malefic due to the houses it rules. During Jupiter's Mahadasha, its functional nature becomes highly significant, and its negative tendencies may become more visible and active.", hi: "एक शुभ कारक एक सकारात्मक एजेंट के रूप में कार्य करता है, जबकि एक अशुभ एक चुनौतीपूर्ण या विघटनकारी प्रभाव के रूप में कार्य करता है। उदाहरण के लिए, बृहस्पति को स्वाभाविक रूप से एक लाभकारी ग्रह माना जाता है। हालाँकि, कुछ लग्नों के लिए - जैसे कि तुला लग्न - यह जिन घरों पर शासन करता है, उनके कारण यह एक अशुभ ग्रह के रूप में कार्य कर सकता है। बृहस्पति की महादशा के दौरान, इसकी कार्यात्मक प्रकृति अत्यधिक महत्वपूर्ण हो जाती है, और इसकी नकारात्मक प्रवृत्तियाँ अधिक दृश्यमान और सक्रिय हो सकती हैं।", ja: "ベネフィックはポジティブな要素として機能しますが、マレフィックは挑戦的または破壊的な影響として機能します。たとえば、木星は当然ながら吉祥の惑星と考えられています。ただし、天秤座のアセンダントなど、特定のアセンダントにとっては、支配するハウスの関係で凶星として機能する可能性があります。木星のマハダシャー期間中、その機能的な性質が非常に重要になり、その否定的な傾向がより目に見えて活発になる可能性があります。", ko: "유익성은 긍정적인 요인으로 작용하는 반면, 흉악성은 도전적이거나 파괴적인 영향력으로 작용합니다. 예를 들어, 목성은 당연히 유익한 행성으로 간주됩니다. 그러나 Libra Ascendant와 같은 특정 승천의 경우 자신이 지배하는 하우스로 인해 흉악한 역할을 할 수 있습니다. 목성의 마하다샤 기간 동안 목성의 기능적 성격은 매우 중요해지며 부정적인 경향은 더욱 눈에 띄고 활동적이 될 수 있습니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Antardashas: Sub-Periods of Mahadashas", hi: "अन्तर्दशाएँ: महादशाओं की उप-अवधि", ja: "アンタルダシャー: マハダシャーの亜時代", ko: "Antardashas : Mahadashas의 하위 기간",}
      },
      {
        type: "paragraph",
        text: {
          en: "Each major period, known as a Mahadasha, is ruled by one of the planets. Within every Mahadasha there are also nine secondary periods known as Antardashas, each governed by a planet. These sub-periods significantly modify the effects of the main Mahadasha.", hi: "प्रत्येक प्रमुख अवधि, जिसे महादशा के रूप में जाना जाता है, किसी एक ग्रह द्वारा शासित होती है। प्रत्येक महादशा के भीतर नौ माध्यमिक अवधियाँ भी होती हैं जिन्हें अंतर्दशा के रूप में जाना जाता है, प्रत्येक एक ग्रह द्वारा शासित होती है। ये उप-अवधियाँ मुख्य महादशा के प्रभावों को महत्वपूर्ण रूप से संशोधित करती हैं।", ja: "マハダシャーとして知られる各主要期間は、惑星の 1 つによって支配されます。各マハダシャーの中には、アンタルダシャーとして知られる 9 つの二次期間もあり、それぞれが惑星によって統治されています。これらのサブ期間は、メインのマハダシャーの効果を大幅に変更します。", ko: "Mahadasha로 알려진 각 주요 기간은 행성 중 하나에 의해 지배됩니다. 모든 Mahadasha에는 Antardashas로 알려진 9개의 2차 기간이 있으며 각 기간은 행성에 의해 관리됩니다. 이러한 하위 기간은 주요 Mahadasha의 효과를 크게 수정합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "While identifying general positive or negative trends during a Mahadasha is often straightforward, predicting specific events during Antardashas can be considerably more challenging, even for an experienced Jyotishi.", hi: "जबकि महादशा के दौरान सामान्य सकारात्मक या नकारात्मक प्रवृत्तियों की पहचान करना अक्सर सरल होता है, अंतर्दशा के दौरान विशिष्ट घटनाओं की भविष्यवाणी करना एक अनुभवी ज्योतिषी के लिए भी काफी चुनौतीपूर्ण हो सकता है।", ja: "マハダシャー中の一般的なポジティブまたはネガティブな傾向を特定することは多くの場合簡単ですが、アンタルダシャー中の特定の出来事を予測することは、経験豊富なジョーティシであってもかなり難しい場合があります。", ko: "Mahadasha 동안 일반적인 긍정적 또는 부정적 추세를 식별하는 것은 종종 간단하지만 Antardashas 동안 특정 이벤트를 예측하는 것은 숙련된 Jyotishi에게도 훨씬 더 어려울 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "During the Mahadasha of a strong and well-placed functional benefic, if the Antardasha is also governed by another benefic planet, we can generally expect highly favourable outcomes.", hi: "एक मजबूत और अच्छी तरह से स्थित कार्यात्मक लाभकारी की महादशा के दौरान, यदि अंतर्दशा भी किसी अन्य लाभकारी ग्रह द्वारा शासित होती है, तो हम आम तौर पर अत्यधिक अनुकूल परिणामों की उम्मीद कर सकते हैं।", ja: "強力で適切に配置された機能的恩恵のマハダシャー中に、アンタルダシャーが別の有益な惑星によっても支配されている場合、一般に非常に有利な結果が期待できます。", ko: "강력하고 잘 배치된 기능적 혜택의 Mahadasha 동안 Antardasha도 다른 혜택 행성의 지배를 받는 경우 일반적으로 매우 유리한 결과를 기대할 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Naturally, the overall strength of the birth-chart remains important, as it indicates how well an individual can withstand the challenges presented by difficult Mahadasha and Antardasha combinations.", hi: "स्वाभाविक रूप से, जन्म-कुंडली की समग्र ताकत महत्वपूर्ण रहती है, क्योंकि यह इंगित करती है कि कोई व्यक्ति कठिन महादशा और अंतर्दशा संयोजनों द्वारा प्रस्तुत चुनौतियों का कितनी अच्छी तरह सामना कर सकता है।", ja: "当然のことながら、出生図の全体的な強さは依然として重要であり、それは個人が困難なマハダシャとアンタルダシャの組み合わせによってもたらされる課題にどれだけ耐えられるかを示します。", ko: "당연히 출생 차트의 전반적인 강도는 개인이 어려운 Mahadasha와 Antardasha 조합으로 인한 어려움을 얼마나 잘 견딜 수 있는지를 나타내기 때문에 여전히 중요합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "When discussing minor periods, two planets are always mentioned. For example, a Venus–Mars period indicates that Venus governs the Mahadasha (major period), while Mars governs the Antardasha (sub-period).", hi: "लघु अवधियों पर चर्चा करते समय हमेशा दो ग्रहों का उल्लेख किया जाता है। उदाहरण के लिए, शुक्र-मंगल अवधि इंगित करती है कि शुक्र महादशा (प्रमुख अवधि) को नियंत्रित करता है, जबकि मंगल अंतर्दशा (उप-अवधि) को नियंत्रित करता है।", ja: "マイナーな時代について議論するとき、常に 2 つの惑星が言及されます。たとえば、金星-火星の期間は、金星がマハダシャー (メジャー期間) を支配し、火星がアンタルダシャー (サブ期間) を支配していることを示します。", ko: "소주기를 논할 때, 항상 두 개의 행성이 언급됩니다. 예를 들어 금성-화성 기간은 금성이 마하다샤(주요 기간)를 지배하고 화성이 안타르다샤(하위 기간)를 지배한다는 것을 나타냅니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "The sequence of Antardashas within each Mahadasha follows the same order as the Mahadasha sequence itself. For example, during a Mars Mahadasha the Antardashas proceed as follows:", hi: "प्रत्येक महादशा के भीतर अंतर्दशा का क्रम महादशा अनुक्रम के समान क्रम का अनुसरण करता है। उदाहरण के लिए, मंगल की महादशा के दौरान अंतर्दशा इस प्रकार चलती है:", ja: "各マハダシャー内のアンタルダシャーの順序は、マハダシャーの順序自体と同じ順序に従います。たとえば、火星のマハダシャー中、アンタルダシャーは次のように進みます。", ko: "각 Mahadasha 내의 Antardashas 시퀀스는 Mahadasha 시퀀스 자체와 동일한 순서를 따릅니다. 예를 들어, Mars Mahadasha 동안 Antardashas는 다음과 같이 진행합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Mars–Mars, Mars–Jupiter, Mars–Saturn, Mars–Mercury, Mars–Ketu, Mars–Venus, Mars–Sun, Mars–Moon, and Mars–Rahu.", hi: "मंगल-मंगल, मंगल-बृहस्पति, मंगल-शनि, मंगल-बुध, मंगल-केतु, मंगल-शुक्र, मंगल-सूर्य, मंगल-चंद्रमा और मंगल-राहु।", ja: "火星-火星、火星-木星、火星-土星、火星-水星、火星-ケートゥ、火星-金星、火星-太陽、火星-月、火星-ラーフ。", ko: "화성-화성, 화성-목성, 화성-토성, 화성-수성, 화성-케투, 화성-금성, 화성-태양, 화성-달, 화성-라후.",}
      },
      {
        type: "paragraph",
        text: {
          en: "After the completion of the Mars Mahadasha, the next Mahadasha in the sequence begins.", hi: "मंगल की महादशा समाप्त होने के बाद क्रम में अगली महादशा प्रारंभ होती है।", ja: "火星のマハダシャーが完了すると、シーケンスの次のマハダシャーが始まります。", ko: "Mars Mahadasha가 완료된 후 다음 Mahadasha가 시작됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "What relative importance should be given to the Mahadasha and Antardasha planets when making predictions?", hi: "भविष्यवाणी करते समय महादशा और अंतर्दशा ग्रहों को क्या सापेक्ष महत्व दिया जाना चाहिए?", ja: "予測を行う際には、マハダシャー惑星とアンタルダシャー惑星にどのような相対的な重要性を与える必要がありますか?", ko: "예측을 할 때 Mahadasha 및 Antardasha 행성에 어떤 상대적 중요성을 부여해야 합니까?",}
      },
      {
        type: "paragraph",
        text: {
          en: "Many Jyotish astrologers attribute approximately 60% of the influence to the Mahadasha planet and around 20% to the Antardasha planet. The remaining 20% is often assigned to planetary transits, particularly those of the slower-moving planets Jupiter and Saturn. This important subject is covered separately in another article.", hi: "कई ज्योतिषी लगभग 60% प्रभाव महादशा ग्रह और लगभग 20% अंतर्दशा ग्रह को मानते हैं। शेष 20% अक्सर ग्रहों के पारगमन को सौंपा जाता है, विशेष रूप से धीमी गति से चलने वाले ग्रहों बृहस्पति और शनि को। इस महत्वपूर्ण विषय को एक अन्य लेख में अलग से शामिल किया गया है।", ja: "多くのジョーティッシュ師は、その影響の約 60% がマハダシャー惑星、約 20% がアンタルダシャー惑星によるものであると考えています。残りの 20% は、惑星の通過、特に動きの遅い惑星である木星と土星の通過に割り当てられることがよくあります。この重要な主題については、別の記事で別途取り上げます。", ko: "많은 Jyotish 점성가들은 영향력의 약 60%를 Mahadasha 행성에, 약 20%를 Antardasha 행성에 돌립니다. 나머지 20%는 종종 행성 통과, 특히 느리게 움직이는 행성인 목성과 토성의 통과에 할당됩니다. 이 중요한 주제는 다른 기사에서 별도로 다루겠습니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Effects of Birth-Time Errors", hi: "जन्म-समय की त्रुटियों का प्रभाव", ja: "出生時間の誤差の影響", ko: "출생 시간 오류의 영향",}
      },
      {
        type: "paragraph",
        text: {
          en: "Although errors in birth-time usually have little effect on the positions of most planets, the Moon is a notable exception because it moves approximately one degree through the zodiac in less than two hours.", hi: "हालाँकि जन्म-समय में त्रुटियाँ आमतौर पर अधिकांश ग्रहों की स्थिति पर बहुत कम प्रभाव डालती हैं, चंद्रमा एक उल्लेखनीय अपवाद है क्योंकि यह दो घंटे से भी कम समय में राशि चक्र में लगभग एक डिग्री घूम जाता है।", ja: "通常、出生時間の誤差はほとんどの惑星の位置にほとんど影響を与えませんが、月は 2 時間未満で黄道帯内を約 1 度移動するため、注目に値する例外です。", ko: "출생 시간의 오류는 일반적으로 대부분의 행성의 위치에 거의 영향을 미치지 않지만, 달은 2시간 이내에 황도대를 통해 약 1도 이동하기 때문에 주목할만한 예외입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Since the Moon's position is used to calculate Mahadasha starting dates, even small birth-time inaccuracies can significantly affect timing predictions.", hi: "चूँकि महादशा की आरंभिक तिथियों की गणना के लिए चंद्रमा की स्थिति का उपयोग किया जाता है, इसलिए जन्म-समय की छोटी-छोटी अशुद्धियाँ भी समय संबंधी भविष्यवाणियों को महत्वपूर्ण रूप से प्रभावित कर सकती हैं।", ja: "月の位置はマハダシャーの開始日の計算に使用されるため、出生時間のわずかな誤差でもタイミングの予測に大きな影響を与える可能性があります。", ko: "달의 위치는 Mahadasha 시작일을 계산하는 데 사용되므로 출생 시간이 조금만 부정확하더라도 시기 예측에 큰 영향을 미칠 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "A relatively minor birth-time error can shift the beginning of a Mahadasha by several months. If the actual birth-time is earlier than recorded, Mahadasha and Antardasha start dates will occur later than expected. Conversely, if the true birth-time is later, the predicted dates will occur earlier.", hi: "जन्म-समय की एक अपेक्षाकृत छोटी सी त्रुटि महादशा की शुरुआत को कई महीनों तक आगे बढ़ा सकती है। यदि वास्तविक जन्म-समय दर्ज होने से पहले है, तो महादशा और अंतर्दशा की शुरुआत की तारीखें अपेक्षा से बाद में होंगी। इसके विपरीत, यदि वास्तविक जन्म-समय बाद में है, तो अनुमानित तिथियां पहले होंगी।", ja: "比較的軽微な出生時間の誤差により、マハダシャーの開始が数か月ずれる可能性があります。実際の出生時間が記録されている時間より早い場合、マハダシャーとアンタルダシャーの開始日は予想より遅くなります。逆に、実際の出生時間が遅い場合、予測される日付は早くなります。", ko: "상대적으로 사소한 출생 ​​시간 오류로 인해 Mahadasha의 시작이 몇 달씩 바뀔 수 있습니다. 실제 출생 시간이 기록된 시간보다 빠르면 Mahadasha 및 Antardasha 시작 날짜가 예상보다 늦게 발생합니다. 반대로, 실제 출생 시간이 늦을 경우 예상 날짜는 더 일찍 발생합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "For example, if an individual is born during a Venus Mahadasha, a birth-time error of only twenty minutes can alter the calculated timing of future Mahadashas and Antardashas by more than three months.", hi: "उदाहरण के लिए, यदि किसी व्यक्ति का जन्म शुक्र महादशा के दौरान हुआ है, तो केवल बीस मिनट की जन्म-समय की त्रुटि भविष्य की महादशा और अंतर्दशा के गणना समय को तीन महीने से अधिक समय तक बदल सकती है।", ja: "たとえば、ある人が金星のマハダシャー中に生まれた場合、わずか 20 分の出生時間の誤差によって、将来のマハダシャーとアンタルダシャーの計算されたタイミングが 3 か月以上変わる可能性があります。", ko: "예를 들어, 개인이 금성 마하다샤(Venus Mahadasha) 기간에 태어난 경우, 출생 시간 오류가 20분만 발생해도 미래의 마하다샤(Maadashas)와 안타르다샤(Antardashas)의 계산된 시간이 3개월 이상 변경될 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Highly skilled astrologers can often work backwards from important life events to determine a more accurate birth-time. This process is known as rectification, and Mahadasha analysis plays a major role in achieving it.", hi: "अत्यधिक कुशल ज्योतिषी अक्सर अधिक सटीक जन्म-समय निर्धारित करने के लिए महत्वपूर्ण जीवन की घटनाओं से पीछे की ओर काम कर सकते हैं। इस प्रक्रिया को सुधार के रूप में जाना जाता है, और महादशा विश्लेषण इसे प्राप्त करने में प्रमुख भूमिका निभाता है।", ja: "高度なスキルを持つ占星術師は、人生の重要な出来事から逆算して、より正確な出生時刻を決定することができます。このプロセスは修正として知られており、マハダシャー分析はこれを達成する上で重要な役割を果たします。", ko: "고도로 숙련된 점성가들은 보다 정확한 출생 시간을 결정하기 위해 중요한 인생 사건에서 거꾸로 작업하는 경우가 많습니다. 이 프로세스를 정류라고 하며 Mahadasha 분석은 이를 달성하는 데 중요한 역할을 합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Wow!", hi: "बहुत खूब!", ja: "おお！", ko: "우와!",}
      }
    ]
  },
  {
    id: "transits",
    section: "transits",
    title: {
      en: "Transits", hi: "पारगमन", ja: "トランジット", ko: "대중교통",},
    related: [
      "mahadashas",
      "planetary-aspects",
      "birth-time-errors",
      "twelve-houses"
    ],
    blocks: [
      {
        type: "paragraph",
        text: {
          en: "Summary: Transits provide another method of predicting returning karma, although they are generally considered less important than the Mahadasha periods. Their effects are evaluated on a house-by-house basis counted from the sign occupied by the Moon in the birth-chart. In Jyotish, particular attention is given to the transits of Jupiter and Saturn, especially the period known as Sade Sati.", hi: "सारांश: पारगमन रिटर्निंग कर्म की भविष्यवाणी करने का एक और तरीका प्रदान करता है, हालांकि उन्हें आम तौर पर महादशा अवधि की तुलना में कम महत्वपूर्ण माना जाता है। उनके प्रभावों का मूल्यांकन जन्म कुंडली में चंद्रमा द्वारा ग्रहण की गई राशि से घर-दर-घर आधार पर किया जाता है। ज्योतिष में बृहस्पति और शनि के गोचर पर विशेष ध्यान दिया जाता है, विशेष रूप से उस अवधि को साढ़े साती के नाम से जाना जाता है।", ja: "要約: トランジットは、カルマの帰還を予測する別の方法を提供しますが、一般にマハダシャー期間ほど重要ではないと考えられています。それらの効果は、出生図の月が占める星座から数えてハウスごとに評価されます。ジョーティッシュでは、木星と土星の通過、特にサデ・サティとして知られる期間に特別な注意が払われます。", ko: "요약: 환승은 일반적으로 Mahadasha 기간보다 덜 중요한 것으로 간주되지만 카르마 복귀를 예측하는 또 다른 방법을 제공합니다. 그 효과는 출생 차트에서 달이 차지하는 별자리를 기준으로 계산하여 집별로 평가됩니다. Jyotish에서는 목성과 토성의 통과, 특히 Sade Sati로 알려진 기간에 특별한 주의를 기울입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "In Vedic Astrology, transits offer another means of predicting the return of karmic influences.", hi: "वैदिक ज्योतिष में, पारगमन कार्मिक प्रभावों की वापसी की भविष्यवाणी करने का एक और साधन प्रदान करता है।", ja: "ヴェーダ占星術では、トランジットはカルマの影響の再来を予測する別の手段を提供します。", ko: "베다 점성술에서 이동은 카르마 영향의 복귀를 예측하는 또 다른 수단을 제공합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Within Jyotish, however, transits are regarded as less significant than the predictions derived from the major planetary periods known as Mahadashas.", hi: "हालाँकि, ज्योतिष में पारगमन को महादशा के नाम से जाने जाने वाले प्रमुख ग्रह काल से प्राप्त भविष्यवाणियों की तुलना में कम महत्वपूर्ण माना जाता है।", ja: "しかし、ジョーティッシュ内では、太陽面通過は、マハダシャーとして知られる主要な惑星周期から導き出された予測ほど重要ではないと考えられています。", ko: "그러나 Jyotish 내에서 이동은 Mahadashas로 알려진 주요 행성 기간에서 파생된 예측보다 덜 중요한 것으로 간주됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Although it is difficult to assign exact percentages, many astrologers consider karmic influences to operate approximately as follows:", hi: "यद्यपि सटीक प्रतिशत निर्दिष्ट करना कठिन है, कई ज्योतिषी कार्मिक प्रभावों को लगभग निम्नानुसार संचालित करने पर विचार करते हैं:", ja: "正確なパーセンテージを割り当てることは困難ですが、多くの占星術師はカルマの影響がおおよそ次のように作用すると考えています。", ko: "정확한 비율을 지정하는 것은 어렵지만 많은 점성가들은 카르마의 영향이 대략 다음과 같이 작용한다고 생각합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• 60% due to the Mahadasha (Major Dasha) planet", hi: "• 60% ग्रह की महादशा के कारण", ja: "• 60% はマハダシャー (メジャー ダシャー) 惑星によるもの", ko: "• 60%는 Mahadasha(Major Dasha) 행성으로 인해 발생합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• 20% due to the Antardasha (Minor Dasha or Bhukti) planet", hi: "• 20% ग्रह की अंतर्दशा (लघुदशा या भुक्ति) के कारण", ja: "• 20% はアンタルダシャ (マイナー ダシャまたはブクティ) 惑星によるもの", ko: "• Antardasha(Minor Dasha 또는 Bhukti) 행성으로 인해 20%",}
      },
      {
        type: "paragraph",
        text: {
          en: "• 20% due to the transiting planets", hi: "• 20% गोचर ग्रहों के कारण", ja: "• 20% トランジット惑星による", ko: "• 이동하는 행성으로 인해 20%",}
      },
      {
        type: "paragraph",
        text: {
          en: "Transit effects are interpreted from the current orbital movement of the planets as they pass through different signs, which correspond to different houses in the birth-chart. In Jyotish, signs and houses correspond exactly and each occupies 30 degrees of the Sidereal Zodiac. Through this process, the dynamic influence of a transiting planet interacts with the static framework of the birth-chart, which is determined by the planetary positions at birth.", hi: "पारगमन प्रभावों की व्याख्या ग्रहों की वर्तमान कक्षीय गति से की जाती है क्योंकि वे विभिन्न राशियों से गुजरते हैं, जो जन्म-कुंडली में विभिन्न घरों के अनुरूप होते हैं। ज्योतिष में, राशियाँ और घर बिल्कुल मेल खाते हैं और प्रत्येक नक्षत्र राशि चक्र के 30 डिग्री पर स्थित होते हैं। इस प्रक्रिया के माध्यम से, एक पारगमन ग्रह का गतिशील प्रभाव जन्म-कुंडली के स्थिर ढांचे के साथ संपर्क करता है, जो जन्म के समय ग्रहों की स्थिति से निर्धारित होता है।", ja: "トランジット効果は、出生図のさまざまなハウスに対応するさまざまな星座を通過するときの惑星の現在の軌道運動から解釈されます。ジョーティッシュでは、サインとハウスは正確に対応しており、それぞれが恒星黄道帯の 30 度を占めます。このプロセスを通じて、トランジット惑星の動的な影響が、出生時の惑星の位置によって決定される出生図の静的な枠組みと相互作用します。", ko: "통과 효과는 행성이 출생 차트의 다른 하우스에 해당하는 다른 별자리를 통과할 때 행성의 현재 궤도 운동에서 해석됩니다. Jyotish에서는 별자리와 집이 정확히 일치하며 각각 항성 황도대의 30도를 차지합니다. 이 과정을 통해 이동하는 행성의 역동적인 영향은 출생 시 행성의 위치에 따라 결정되는 출생 차트의 정적 프레임워크와 상호 작용합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "In Vedic Astrology, the houses used to evaluate transit effects are counted from the sign occupied by the Moon at birth. For example, if the Moon is placed in Aries, then the entire sign of Aries becomes the 1st house for transit purposes. The previous sign, Pisces, becomes the 12th house, while the next sign, Taurus, becomes the 2nd house, and so on.", hi: "वैदिक ज्योतिष में, पारगमन प्रभावों का मूल्यांकन करने के लिए उपयोग किए जाने वाले घरों की गणना जन्म के समय चंद्रमा द्वारा ग्रहण की गई राशि से की जाती है। उदाहरण के लिए, यदि चंद्रमा मेष राशि में स्थित है, तो मेष राशि का पूरा चिह्न पारगमन प्रयोजनों के लिए पहला घर बन जाता है। पिछली राशि, मीन, 12वां घर बन जाती है, जबकि अगली राशि, वृषभ, दूसरा घर बन जाती है, इत्यादि।", ja: "ヴェーダ占星術では、トランジットの効果を評価するために使用されるハウスは、出生時に月が占めていた星座から数えられます。たとえば、月が牡羊座に配置されている場合、牡羊座のサイン全体がトランジットの目的で1番目の家になります。前の星座、魚座は 12 ハウスになり、次の星座、おうし座は 2 ハウスになり、以下同様です。", ko: "베다 점성술에서 통과 효과를 평가하는 데 사용되는 하우스는 출생 시 달이 차지한 별자리부터 계산됩니다. 예를 들어, 달이 양자리에 위치하면 양자리의 전체 별자리가 이동 목적으로 1하우스가 됩니다. 이전 별자리인 물고기자리는 12하우스가 되고, 다음 별자리인 황소자리는 2하우스가 됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Note: This method applies specifically to the calculation of transits.", hi: "नोट: यह विधि विशेष रूप से गोचर की गणना पर लागू होती है।", ja: "注: この方法は、特に通過の計算に適用されます。", ko: "참고: 이 방법은 특히 대중교통 계산에 적용됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Some pundits also recommend judging transits from the ordinary Ascendant. However, this approach is generally considered secondary compared with using the Moon sign as the Ascendant for transit analysis. In a sense, it is the reverse of the normal approach used in birth-chart interpretation.", hi: "कुछ पंडित सामान्य लग्न से भी गोचर का निर्णय करने की सलाह देते हैं। हालाँकि, पारगमन विश्लेषण के लिए लग्न के रूप में चंद्र चिन्ह का उपयोग करने की तुलना में इस दृष्टिकोण को आम तौर पर गौण माना जाता है। एक अर्थ में, यह जन्म-कुंडली व्याख्या में उपयोग किए जाने वाले सामान्य दृष्टिकोण के विपरीत है।", ja: "一部の専門家は、トランジットを通常のアセンダントから判断することを推奨しています。ただし、このアプローチは一般に、トランジット分析のアセンダントとして月星座を使用することに比べれば二次的であると考えられています。ある意味、これは出生図の解釈で使用される通常のアプローチの逆です。", ko: "일부 전문가들은 일반 Ascendant의 통과를 판단할 것을 권장합니다. 그러나 이 접근법은 일반적으로 대중교통 분석을 위해 달 별자리를 어센던트로 사용하는 것에 비해 부차적인 것으로 간주됩니다. 어떤 의미에서는 출생 차트 해석에 사용되는 일반적인 접근 방식과 반대입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Jyotish astrologers pay particular attention to the transits of the two slowest-moving physical planets, Jupiter and Saturn.", hi: "ज्योतिषी दो सबसे धीमी गति से चलने वाले भौतिक ग्रहों, बृहस्पति और शनि के पारगमन पर विशेष ध्यान देते हैं।", ja: "ジョーティッシュの占星術師は、最も動きの遅い 2 つの物理惑星、木星と土星の通過に特に注意を払っています。", ko: "조티교 점성가들은 가장 느리게 움직이는 두 물리적 행성인 목성과 토성의 통과에 특별한 주의를 기울입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Jupiter takes approximately one year to pass through each sign, while Saturn spends around three years in a sign. Before finally settling into a sign, Saturn often appears to move backwards and forwards several times due to its apparent retrograde motion.", hi: "बृहस्पति को प्रत्येक राशि से गुजरने में लगभग एक वर्ष लगता है, जबकि शनि को एक राशि में लगभग तीन वर्ष व्यतीत होते हैं। अंततः किसी राशि में स्थापित होने से पहले, शनि अक्सर अपनी स्पष्ट प्रतिगामी गति के कारण कई बार पीछे और आगे की ओर बढ़ता हुआ दिखाई देता है।", ja: "木星は各星座を通過するのに約 1 年かかりますが、土星は 1 つの星座に約 3 年かかります。土星は、最終的にサインに落ち着く前に、その見かけの逆行運動により、何度か前後に動いているように見えることがよくあります。", ko: "목성은 각 별자리를 통과하는 데 약 1년이 걸리는 반면, 토성은 별자리에서 약 3년을 보냅니다. 최종적으로 별자리에 안착하기 전에 토성은 명백한 역행 운동으로 인해 여러 번 앞뒤로 움직이는 것처럼 보입니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "‘Sade Sati’ – Important Transits of Saturn", hi: "'साढ़े साती' - शनि का महत्वपूर्ण गोचर", ja: "「サデ・サティ」 – 土星の重要な通過", ko: "'Sade Sati' – 토성의 중요한 통과",}
      },
      {
        type: "paragraph",
        text: {
          en: "In India, people are particularly aware of the challenges that may arise when Saturn transits the 12th, 1st, and 2nd houses from the natal Moon. This seven-and-a-half-year period is known as Sade Sati.", hi: "भारत में, लोग विशेष रूप से उन चुनौतियों के बारे में जानते हैं जो तब उत्पन्न हो सकती हैं जब शनि जन्म के चंद्रमा से 12वें, पहले और दूसरे घर में गोचर करता है। इस साढ़े सात साल की अवधि को साढ़े साती के नाम से जाना जाता है।", ja: "インドでは、土星が出生の月から12室、1室、2室を通過するときに生じる可能性のある課題を人々が特に認識しています。この 7 年半の期間はサデ サティとして知られています。", ko: "인도 사람들은 토성이 산후 달에서 12하우스, 1하우스, 2하우스를 통과할 때 발생할 수 있는 어려움을 특히 잘 알고 있습니다. 이 7년 반의 기간을 사데 사티(Sade Sati)라고 합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "During this time, Saturn may influence the life areas associated with these houses. For example:", hi: "इस दौरान शनि इन भावों से जुड़े जीवन क्षेत्रों को प्रभावित कर सकता है। उदाहरण के लिए:", ja: "この時期、土星はこれらのハウスに関連する生活領域に影響を与える可能性があります。例えば：", ko: "이 기간 동안 토성은 이 주택과 관련된 생활 영역에 영향을 미칠 수 있습니다. 예를 들어:",}
      },
      {
        type: "paragraph",
        text: {
          en: "• The 12th house relates to losses and expenditure.", hi: "• 12वां भाव हानि और व्यय से संबंधित होता है।", ja: "• 12 ハウスは損失と支出に関係します。", ko: "• 12하우스는 손실 및 지출과 관련이 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• The 1st house relates to the body, health, and personal wellbeing.", hi: "• पहला घर शरीर, स्वास्थ्य और व्यक्तिगत भलाई से संबंधित है।", ja: "• 第 1 ハウスは、身体、健康、個人の幸福に関係します。", ko: "• 1하우스는 신체, 건강, 개인의 안녕과 관련이 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• The 2nd house relates to accumulated wealth, family resources, and finances.", hi: "• दूसरा घर संचित धन, पारिवारिक संसाधनों और वित्त से संबंधित है।", ja: "• 第 2 ハウスは、蓄積された富、家族の資源、財政に関係します。", ko: "• 2하우스는 축적된 부, 가족 자원, 재정과 관련이 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "However, it is important to remember that transits are less influential than Mahadashas. Consequently, Sade Sati may not necessarily be as difficult as many people fear, particularly if:", hi: "हालाँकि, यह याद रखना महत्वपूर्ण है कि पारगमन महादशा की तुलना में कम प्रभावशाली होते हैं। नतीजतन, साढ़े साती आवश्यक रूप से उतनी कठिन नहीं हो सकती जितनी कि कई लोग डरते हैं, खासकर यदि:", ja: "ただし、トランジットはマハダシャーよりも影響力が低いことを覚えておくことが重要です。したがって、特に次の場合、サデ サティは多くの人が懸念しているほど難しいものではない可能性があります。", ko: "그러나 대중교통은 Mahadashas보다 영향력이 적다는 점을 기억하는 것이 중요합니다. 결과적으로 Sade Sati는 많은 사람들이 두려워하는 것만큼 반드시 어렵지는 않을 수 있습니다. 특히 다음과 같은 경우에는 더욱 그렇습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• It occurs during a favourable Mahadasha.", hi: "• यह अनुकूल महादशा के दौरान होता है।", ja: "• それは有利なマハダシャー中に発生します。", ko: "• 유리한 Mahadasha 중에 발생합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Saturn is a functional benefic for the particular Ascendant.", hi: "• शनि विशेष लग्न के लिए क्रियात्मक लाभकारी है।", ja: "• 土星は特定のアセンダントにとって機能的に有益です。", ko: "• 토성은 특정 승천자에게 기능적 혜택을 제공합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Saturn is well placed in the birth-chart.", hi: "• जन्म कुंडली में शनि अच्छी स्थिति में है।", ja: "• 土星は出生図の中で良い位置にあります。", ko: "• 토성은 출생 차트에 잘 나타나 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Saturn rules favourable houses (for example, the 9th and 10th houses when counted from the Moon sign).", hi: "• शनि अनुकूल घरों पर शासन करता है (उदाहरण के लिए, चंद्र राशि से गणना करने पर 9वां और 10वां घर)।", ja: "• 土星は有利なハウスを支配します（たとえば、月星座から数えて 9 番目と 10 番目の家）。", ko: "• 토성은 유리한 하우스(예: 달 별자리에서 계산할 때 9번째 및 10번째 하우스)를 다스립니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Many Jyotish pundits also agree that when Saturn is the Lord of the Ascendant, as in Aquarius or Capricorn, it generally does not damage the planets in the birth-chart through transit. Likewise, it does not harm the houses that it owns through transit.", hi: "कई ज्योतिष पंडित भी इस बात से सहमत हैं कि जब शनि लग्न का स्वामी होता है, जैसे कि कुंभ या मकर राशि में, तो यह आमतौर पर जन्म कुंडली में गोचर के माध्यम से ग्रहों को नुकसान नहीं पहुंचाता है। इसी तरह, यह गोचर के माध्यम से उन घरों को नुकसान नहीं पहुंचाता है जिनके पास यह है।", ja: "また、多くのジョーティッシュの専門家は、水瓶座や山羊座のように土星がアセンダントの主である場合、一般的にトランジットを通じて出生図の惑星にダメージを与えないことに同意しています。同様に、トランジットによって支配するハウスに損害を与えることはありません。", ko: "많은 Jyotish 전문가들은 또한 물병자리나 염소자리에서처럼 토성이 승천자의 군주일 때 일반적으로 통과를 통해 출생 차트의 행성에 손상을 주지 않는다는 데 동의합니다. 마찬가지로, 트랜짓을 통해 지배하는 궁에 해를 끼치지 않습니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Detailed Rules for Evaluating Transit Effects", hi: "पारगमन प्रभावों के मूल्यांकन के लिए विस्तृत नियम", ja: "交通効果評価の細則", ko: "대중교통 효과 평가를 위한 세부 규칙",}
      },
      {
        type: "paragraph",
        text: {
          en: "These rules are particularly interesting because they demonstrate that there are important exceptions to consider when using transits for prediction, especially during Saturn's Sade Sati period.", hi: "ये नियम विशेष रूप से दिलचस्प हैं क्योंकि वे दर्शाते हैं कि भविष्यवाणी के लिए पारगमन का उपयोग करते समय विचार करने के लिए महत्वपूर्ण अपवाद हैं, खासकर शनि की साढ़े साती अवधि के दौरान।", ja: "これらのルールは、特に土星のサドサティ期に、予測にトランジットを使用する際に考慮すべき重要な例外があることを示しているため、特に興味深いものです。", ko: "이러한 규칙은 특히 토성의 사데 사티(Sade Sati) 기간 동안 예측을 위해 통과를 사용할 때 고려해야 할 중요한 예외가 있음을 보여주기 때문에 특히 흥미롭습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Clients should therefore understand that Saturn's transits are not always something to fear.", hi: "इसलिए ग्राहकों को यह समझना चाहिए कि शनि का गोचर हमेशा डरने वाली बात नहीं है।", ja: "したがって、クライアントは、土星の通過が必ずしも恐れるべきものではないことを理解する必要があります。", ko: "그러므로 고객은 토성의 통과가 항상 두려워할 것이 아니라는 점을 이해해야 합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "The following rules are taken from the book \"Predictive Astrology of the Hindus\" by Gopesh Kumar Pandit Ojha (ISBN 10: 812083416X, ISBN 13: 9788120834163).", hi: "निम्नलिखित नियम गोपेश कुमार पंडित ओझा की पुस्तक \"प्रिडिक्टिव एस्ट्रोलॉजी ऑफ द हिंदूज़\" (आईएसबीएन 10: 812083416X, आईएसबीएन 13: 9788120834163) से लिए गए हैं।", ja: "以下のルールは、Gopesh Kumar Pandit Ojha の書籍「Predictive Astrology of the Hindus」(ISBN 10: 812083416X、ISBN 13: 9788120834163) から引用したものです。", ko: "다음 규칙은 Gopesh Kumar Pandit Ojha(ISBN 10: 812083416X, ISBN 13: 9788120834163)의 책 \"힌두교의 예측 점성술\"에서 가져온 것입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "1.", hi: "1.", ja: "1.", ko: "1.",}
      },
      {
        type: "paragraph",
        text: {
          en: "As Jupiter passes over a radical planet (a planet in the birth-chart), or casts a full aspect upon it, the significations connected with that planet tend to improve. This includes factors such as Karakas and the houses ruled by that planet.", hi: "जैसे ही बृहस्पति किसी मूल ग्रह (जन्म कुंडली में एक ग्रह) के ऊपर से गुजरता है, या उस पर पूर्ण दृष्टि डालता है, उस ग्रह से जुड़े महत्व में सुधार होता है। इसमें कारक और उस ग्रह द्वारा शासित घर जैसे कारक शामिल हैं।", ja: "木星がラジカル惑星（出生図の惑星）の上を通過するか、そこにフルアスペクトをキャストすると、その惑星に関連する意味が改善する傾向があります。これには、カラカスやその惑星が支配する家などの要素が含まれます。", ko: "목성이 급진적인 행성(탄생 차트의 행성) 위를 지나가거나 그 위에 완전한 측면을 던질 때, 그 행성과 관련된 의미가 향상되는 경향이 있습니다. 여기에는 Karakas 및 해당 행성이 통치하는 주택과 같은 요소가 포함됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "2.", hi: "2.", ja: "2.", ko: "2.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Saturn, when acting as the Lord of the Ascendant, will not damage radical planets through its transits. Nor will it damage the houses that it owns by transit. This is an important consideration when making predictions.", hi: "शनि, लग्न के स्वामी के रूप में कार्य करते हुए, अपने गोचर के माध्यम से कट्टरपंथी ग्रहों को नुकसान नहीं पहुंचाएगा। न ही यह उन घरों को नुकसान पहुंचाएगा जो गोचर के माध्यम से इसके स्वामित्व में हैं। भविष्यवाणी करते समय यह एक महत्वपूर्ण विचार है।", ja: "土星がアセンダントの主として行動するとき、そのトランジットを通じて出生図の惑星にダメージを与えることはありません。また、トランジットによって支配するハウスに損害を与えることもありません。これは予測を行う際の重要な考慮事項です。", ko: "토성은 승천의 군주 역할을 할 때 통과를 통해 급진적인 행성에 피해를 주지 않습니다. 또한 트랜짓으로 지배하는 궁이 손상되지도 않습니다. 이는 예측을 할 때 중요한 고려 사항입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "3.", hi: "3.", ja: "3.", ko: "3.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Pandit Ojha confirms that Saturn's functional benefic or malefic status should be assessed using the Moon sign as the Ascendant.", hi: "पंडित ओझा पुष्टि करते हैं कि शनि की कार्यात्मक लाभकारी या अशुभ स्थिति का आकलन चंद्र राशि को लग्न के रूप में उपयोग करके किया जाना चाहिए।", ja: "パンディット・オジャは、土星の機能的な吉凶のステータスは、アセンダントとして月星座を使用して評価されるべきであることを確認しています。", ko: "Pandit Ojha는 토성의 기능적 유익성 또는 유해성 상태가 달 표시를 어센던트로 사용하여 평가되어야 함을 확인합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "He states that Saturn for a Taurus Moon (Lord of the 9th and 10th houses) does not cause as much damage through transit. Similarly, Saturn for a Libra Moon (Lord of the 4th and 5th houses) tends to produce more favourable results.", hi: "उनका कहना है कि वृषभ राशि के चंद्रमा (9वें और 10वें घर का स्वामी) के लिए शनि गोचर के माध्यम से उतना नुकसान नहीं पहुंचाता है। इसी प्रकार, तुला राशि के चंद्रमा (चौथे और पांचवें घर का स्वामी) के लिए शनि अधिक अनुकूल परिणाम देता है।", ja: "彼は、おうし座の月（9室と10室の支配星）にある土星は、トランジットを通じてそれほど大きなダメージを引き起こさないと述べています。同様に、天秤座の月（4室と5室の支配星）にある土星は、より好ましい結果を生み出す傾向があります。", ko: "그는 황소자리 달(9하우스와 10하우스의 로드)의 토성은 통과를 통해 많은 피해를 입히지 않는다고 말합니다. 마찬가지로, 천칭자리 달(4하우스와 5하우스의 주)의 토성은 더 유리한 결과를 낳는 경향이 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "4.", hi: "4.", ja: "4.", ko: "4.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Planets that are strong in the birth-chart generally produce better results during transit, even when passing through adverse houses, than planets that are weak in the natal chart.", hi: "जो ग्रह जन्म कुंडली में मजबूत होते हैं वे आम तौर पर पारगमन के दौरान बेहतर परिणाम देते हैं, यहां तक ​​कि प्रतिकूल घरों से गुजरते समय भी, उन ग्रहों की तुलना में जो जन्म कुंडली में कमजोर होते हैं।", ja: "一般的に、出生図で強い惑星は、たとえ逆向きのハウスを通過する場合でも、出生図で弱い惑星よりもトランジット中に良い結果をもたらします。", ko: "출생 차트에서 강한 행성은 일반적으로 출생 차트에서 약한 행성보다 이동 중에 불리한 하우스를 통과할 때에도 더 나은 결과를 생성합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Strength may arise from factors such as:", hi: "ताकत निम्नलिखित कारकों से उत्पन्न हो सकती है:", ja: "強さは次のような要因から生じる可能性があります。", ko: "강점은 다음과 같은 요인으로 인해 발생할 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Placement in a friend's sign or a stronger dignity.", hi: "• मित्र की राशि में स्थान या अधिक मजबूत गरिमा।", ja: "• 友人のサインまたはより強い威厳に配置されます。", ko: "• 친구의 간판에 배치되거나 위엄이 더 강해집니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Benefic aspects.", hi: "• लाभकारी पहलू.", ja: "• 有益な側面。", ko: "• 유익한 측면.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Other favourable chart conditions.", hi: "• अन्य अनुकूल चार्ट स्थितियाँ।", ja: "• その他の良好なチャート状況。", ko: "• 기타 유리한 차트 조건.",}
      },
      {
        type: "paragraph",
        text: {
          en: "These positive effects become even stronger when the transiting planet is connected with an Upachaya house in the birth-chart.", hi: "ये सकारात्मक प्रभाव तब और भी प्रबल हो जाते हैं जब गोचर ग्रह जन्म कुंडली में उपचय भाव से जुड़ा हो।", ja: "これらのプラスの効果は、トランジットの惑星が出生図のウパチャヤ ハウスと関係している場合にさらに強くなります。", ko: "이러한 긍정적인 효과는 이동하는 행성이 출생 차트의 우파차야 하우스와 연결될 때 더욱 강해집니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "5.", hi: "5.", ja: "5.", ko: "5.",}
      },
      {
        type: "paragraph",
        text: {
          en: "The dignity and condition of planets during transit should always be considered. Factors such as exaltation, placement in own sign, combustion, conjunction with malefics, and similar conditions should be used to modify transit predictions accordingly.", hi: "गोचर के दौरान ग्रहों की गरिमा और स्थिति पर सदैव विचार करना चाहिए। पारगमन भविष्यवाणियों को तदनुसार संशोधित करने के लिए उच्चाटन, स्वयं की राशि में स्थिति, दहन, अशुभ ग्रहों के साथ संयोजन और इसी तरह की स्थितियों जैसे कारकों का उपयोग किया जाना चाहिए।", ja: "輸送中の惑星の尊厳と状態は常に考慮されるべきです。高揚感、自身の星座への配置、燃焼、凶星との結合、および同様の条件などの要素を使用して、トランジット予測をそれに応じて変更する必要があります。", ko: "이동하는 동안 행성의 존엄성과 상태를 항상 고려해야 합니다. 승영, 자체 라시 배치, 연소, 흉악과의 결합 및 유사한 조건과 같은 요소를 사용하여 대중교통 예측을 적절하게 수정해야 합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "The rules listed above represent only a few of the basic principles involved in transit interpretation. There are many additional considerations and refinements that must be taken into account when making accurate transit predictions.", hi: "ऊपर सूचीबद्ध नियम पारगमन व्याख्या में शामिल केवल कुछ बुनियादी सिद्धांतों का प्रतिनिधित्व करते हैं। ऐसे कई अतिरिक्त विचार और परिशोधन हैं जिन्हें सटीक पारगमन भविष्यवाणियां करते समय ध्यान में रखा जाना चाहिए।", ja: "上記のルールは、交通機関の通訳に含まれる基本原則のほんの一部を表しています。正確な交通機関の予測を行う際には、考慮すべき追加の考慮事項や改良点が数多くあります。", ko: "위에 나열된 규칙은 대중교통 통역과 관련된 기본 원칙 중 일부만을 나타냅니다. 정확한 대중교통 예측을 할 때 고려해야 할 추가 고려 사항과 개선 사항이 많이 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Students of Jyotish who wish to explore this subject in greater depth are advised to consult Pandit Ojha's book for further study and detailed guidance.", hi: "ज्योतिष के जो छात्र इस विषय को अधिक गहराई से जानना चाहते हैं, उन्हें आगे के अध्ययन और विस्तृत मार्गदर्शन के लिए पंडित ओझा की पुस्तक से परामर्श लेने की सलाह दी जाती है।", ja: "この主題をより深く探求したいジョーティッシュの学生は、さらなる研究と詳細な指導のためにパンディット・オジャの本を参照することをお勧めします。", ko: "이 주제를 더 깊이 탐구하고자 하는 Jyotish 학생들은 추가 연구와 자세한 지침을 위해 Pandit Ojha의 책을 참조하는 것이 좋습니다.",}
      }
    ]
  },
  {
    id: "chart-interpretation",
    section: "introduction",
    title: {
      en: "How to Start Interpreting Vedic Horoscopes", hi: "वैदिक राशिफल की व्याख्या कैसे शुरू करें", ja: "ヴェーダ星占いの解釈を始める方法", ko: "베다 운세 해석을 시작하는 방법",},
    related: [
      "twelve-houses",
      "planetary-aspects",
      "mahadashas",
      "transits"
    ],
    blocks: [
      {
        type: "paragraph",
        text: {
          en: "Summary: The first steps towards successful Vedic Horoscope interpretation. This article examines important spiritual considerations and key factors that should be understood before attempting to interpret a birth-chart using Jyotish astrology. A separate article covers the step-by-step mechanics of Vedic chart interpretation.", hi: "सारांश: सफल वैदिक कुंडली व्याख्या की दिशा में पहला कदम। यह लेख महत्वपूर्ण आध्यात्मिक विचारों और प्रमुख कारकों की जांच करता है जिन्हें ज्योतिष का उपयोग करके जन्म-कुंडली की व्याख्या करने का प्रयास करने से पहले समझा जाना चाहिए। एक अलग लेख में वैदिक चार्ट व्याख्या के चरण-दर-चरण यांत्रिकी को शामिल किया गया है।", ja: "概要: ヴェーダ星占いの解釈を成功させるための最初のステップ。この記事では、ジョーティッシュを使用して出生図を解釈する前に理解しておくべき、重要なスピリチュアルな考慮事項と重要な要素について検討します。別の記事では、ヴェーダチャート解釈の段階的な仕組みについて説明します。", ko: "요약: 성공적인 베다 별자리 해석을 향한 첫 번째 단계입니다. 이 기사에서는 조티쉬 점성술을 사용하여 출생 차트를 해석하기 전에 이해해야 할 중요한 영적 고려 사항과 핵심 요소를 검토합니다. 별도의 기사에서는 베다 차트 해석의 단계별 메커니즘을 다루고 있습니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Successful Vedic Horoscope Interpretation", hi: "सफल वैदिक कुंडली व्याख्या", ja: "成功したヴェーダ星占い解釈", ko: "성공적인 베다 별자리 해석",}
      },
      {
        type: "paragraph",
        text: {
          en: "To interpret a Vedic Horoscope successfully, we need much more than simply knowing the planets, houses, and astrological rules of Jyotish.", hi: "वैदिक कुंडली की सफलतापूर्वक व्याख्या करने के लिए, हमें ग्रहों, घरों और ज्योतिष के ज्योतिषीय नियमों को जानने के अलावा और भी बहुत कुछ की आवश्यकता है।", ja: "ヴェーダの星占いをうまく解釈するには、ジョーティッシュの惑星、ハウス、占星術の規則を単に知るだけでは十分ではありません。", ko: "베다 별자리를 성공적으로 해석하려면 단순히 행성, 집, 조티쉬의 점성술 규칙을 아는 것 이상이 필요합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Firstly, Vedic Astrology is a spiritual discipline in its own right, and we should understand the broader spiritual implications of the subject before beginning the process of chart interpretation.", hi: "सबसे पहले, वैदिक ज्योतिष अपने आप में एक आध्यात्मिक अनुशासन है, और हमें चार्ट व्याख्या की प्रक्रिया शुरू करने से पहले विषय के व्यापक आध्यात्मिक निहितार्थ को समझना चाहिए।", ja: "まず、ヴェーダ占星術はそれ自体がスピリチュアルな学問であり、チャートの解釈のプロセスを開始する前に、この主題のより広範なスピリチュアルな意味を理解する必要があります。", ko: "첫째, 베다 점성술은 그 자체로 영적 학문이므로 차트 해석 과정을 시작하기 전에 주제의 더 넓은 영적 의미를 이해해야 합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Secondly, making predictions from a Jyotish birth-chart requires us to combine information from many different sources and assign appropriate weight to those indicators. This process requires a degree of intuition. To develop that intuition, regular spiritual practices and a Sattvic lifestyle are extremely beneficial.", hi: "दूसरे, ज्योतिष जन्म-कुंडली से भविष्यवाणियां करने के लिए हमें कई अलग-अलग स्रोतों से जानकारी को संयोजित करने और उन संकेतकों को उचित महत्व देने की आवश्यकता होती है। इस प्रक्रिया के लिए कुछ हद तक अंतर्ज्ञान की आवश्यकता होती है। उस अंतर्ज्ञान को विकसित करने के लिए नियमित आध्यात्मिक अभ्यास और सात्विक जीवन शैली बेहद फायदेमंद है।", ja: "第二に、ジョーティッシュの出生図から予測を行うには、さまざまな情報源からの情報を組み合わせて、それらの指標に適切な重みを割り当てる必要があります。このプロセスには、ある程度の直感が必要です。その直観を養うには、定期的なスピリチュアルな実践とサトヴィックなライフスタイルが非常に有益です。", ko: "둘째, Jyotish 출생 차트를 사용하여 예측하려면 다양한 출처의 정보를 결합하고 해당 지표에 적절한 가중치를 할당해야 합니다. 이 과정에는 어느 정도의 직관이 필요합니다. 그러한 직관을 개발하려면 정기적인 영적 수행과 Sattvic 생활 방식이 매우 유익합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Thirdly, as beginners, we must learn how to manage information overload and decide which factors can temporarily be set aside until we gain more experience.", hi: "तीसरा, शुरुआती लोगों के रूप में, हमें सीखना चाहिए कि सूचना अधिभार को कैसे प्रबंधित किया जाए और यह तय किया जाए कि जब तक हम अधिक अनुभव प्राप्त नहीं कर लेते, तब तक किन कारकों को अस्थायी रूप से अलग रखा जा सकता है।", ja: "第三に、初心者として、情報過多に対処する方法を学び、経験を積むまでどの要素を一時的に脇に置いてもよいかを判断する必要があります。", ko: "셋째, 초보자로서 우리는 정보 과부하를 관리하는 방법을 배우고 더 많은 경험을 쌓을 때까지 어떤 요소를 일시적으로 제외할 수 있는지 결정해야 합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "The following sections examine these considerations in greater detail. The actual mechanics of chart interpretation are covered separately in the article \"12-Step Guide to Vedic Horoscope Interpretation.\"", hi: "निम्नलिखित अनुभाग इन विचारों की अधिक विस्तार से जांच करते हैं। चार्ट व्याख्या की वास्तविक यांत्रिकी को \"वैदिक कुंडली व्याख्या के लिए 12-चरणीय मार्गदर्शिका\" लेख में अलग से कवर किया गया है।", ja: "次のセクションでは、これらの考慮事項を詳しく検討します。チャート解釈の実際の仕組みについては、「ヴェーダ星占い解釈への 12 ステップ ガイド」の記事で個別に説明しています。", ko: "다음 섹션에서는 이러한 고려 사항을 더 자세히 살펴봅니다. 차트 해석의 실제 메커니즘은 \"베다 운세 해석을 위한 12단계 가이드\" 기사에서 별도로 다룹니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Jyotish Astrology and Spirituality", hi: "ज्योतिष एवं अध्यात्म", ja: "ジョーティッシュとスピリチュアリティ", ko: "조티쉬 점성술과 영성",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Knowledge of Jyotish – A Great Privilege", hi: "ज्योतिष का ज्ञान - एक महान विशेषाधिकार", ja: "ジョーティッシュの知識 – 大きな特権", ko: "Jyotish에 대한 지식 - 큰 특권",}
      },
      {
        type: "paragraph",
        text: {
          en: "An enlightened Vedic Master, Sri Sri Ravi Shankar, explains the ultimate purpose of Vedic Astrology as follows:", hi: "एक प्रबुद्ध वैदिक गुरु, श्री श्री रविशंकर, वैदिक ज्योतिष के अंतिम उद्देश्य को इस प्रकार बताते हैं:", ja: "啓発されたヴェーダのマスター、シュリ・シュリ・ラヴィ・シャンカールは、ヴェーダ占星術の究極の目的を次のように説明しています。", ko: "깨달은 베다 스승인 스리 스리 라비 샹카르(Sri Sri Ravi Shankar)는 베다 점성술의 궁극적인 목적을 다음과 같이 설명합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "\"The purpose of astrology is to take you to the ultimate truth that the entire universe is one organism. It's one Being, one consciousness, one Self, that manifests itself into this varied universe.\"", hi: "\"ज्योतिष का उद्देश्य आपको उस अंतिम सत्य तक ले जाना है कि संपूर्ण ब्रह्मांड एक जीव है। यह एक अस्तित्व, एक चेतना, एक स्व है, जो इस विविध ब्रह्मांड में प्रकट होता है।\"", ja: "「占星術の目的は、宇宙全体が一つの有機体であるという究極の真実にあなたを導くことです。この多様な宇宙に現れるのは、一つの存在、一つの意識、一つの自己です。」", ko: "\"점성술의 목적은 우주 전체가 하나의 유기체라는 궁극적인 진실을 알려주는 것입니다. 이 다양한 우주에 나타나는 것은 하나의 존재, 하나의 의식, 하나의 자아입니다.\"",}
      },
      {
        type: "paragraph",
        text: {
          en: "(Published in Art of Living's \"Daily Sutra\", May 2003)", hi: "(आर्ट ऑफ लिविंग के \"डेली सूत्र\", मई 2003 में प्रकाशित)", ja: "（アート・オブ・リビング「日々のお経」2003年5月掲載）", ko: "(Art of Living의 \"Daily Sutra\"에 게재, 2003년 5월)",}
      },
      {
        type: "paragraph",
        text: {
          en: "Access to this knowledge has always been considered a great privilege. In earlier times, it was largely restricted to the royal households and courts of the Kings of Bharat. These courts employed highly learned astronomy and astrology pundits, and rulers frequently sought their guidance before making important decisions.", hi: "इस ज्ञान तक पहुंच को हमेशा एक बड़ा विशेषाधिकार माना गया है। पहले के समय में, यह काफी हद तक भारत के राजाओं के शाही परिवारों और दरबारों तक ही सीमित था। इन अदालतों में उच्च विद्वान खगोल विज्ञान और ज्योतिष पंडितों को नियुक्त किया जाता था, और शासक अक्सर महत्वपूर्ण निर्णय लेने से पहले उनका मार्गदर्शन मांगते थे।", ja: "この知識にアクセスできることは、常に大きな特権であると考えられてきました。初期の時代では、それは主にバーラタ王の王室と宮廷に限定されていました。これらの法廷では高度に学んだ天文学や占星術の専門家が雇用されており、支配者たちは重要な決定を下す前にしばしば彼らの指導を求めました。", ko: "이 지식에 접근하는 것은 항상 큰 특권으로 간주되어 왔습니다. 초기에는 그것이 주로 바라트 왕들의 왕실과 궁정으로 제한되었습니다. 이 법원은 고도로 박식한 천문학 및 점성술 전문가를 고용했으며 통치자는 중요한 결정을 내리기 전에 자주 그들의 지도를 구했습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Why is the knowledge of Jyotish such a privilege in the modern world?", hi: "आधुनिक दुनिया में ज्योतिष का ज्ञान इतना विशेषाधिकार प्राप्त क्यों है?", ja: "ジョーティッシュの知識が現代社会においてこれほど特権的なのはなぜでしょうか?", ko: "현대 세계에서 Jyotish에 대한 지식이 그토록 특권인 이유는 무엇입니까?",}
      },
      {
        type: "paragraph",
        text: {
          en: "Because Jyotish gives us some ability to glimpse another soul's returning karma. This makes it a divine gift that should be approached with respect and humility.", hi: "क्योंकि ज्योतिष हमें किसी अन्य आत्मा के कर्मों की झलक देखने की क्षमता देता है। यह इसे एक दिव्य उपहार बनाता है जिसे सम्मान और विनम्रता के साथ स्वीकार किया जाना चाहिए।", ja: "なぜなら、ジョーティッシュは私たちに、他の魂が戻ってくるカルマを垣間見る能力を与えてくれるからです。したがって、それは敬意と謙虚さを持って取り組むべき神からの贈り物です。", ko: "Jyotish는 우리에게 다른 영혼이 돌아오는 카르마를 엿볼 수 있는 능력을 주기 때문입니다. 그렇기 때문에 그것은 존중과 겸손으로 접근해야 하는 신성한 선물입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "With great privilege comes great responsibility. Before beginning any chart interpretation, we should ask ourselves:", hi: "महान विशेषाधिकार के साथ बड़ी जिम्मेदारी भी आती है। किसी भी चार्ट की व्याख्या शुरू करने से पहले, हमें खुद से पूछना चाहिए:", ja: "大きな特権には大きな責任が伴います。チャートの解釈を始める前に、次のことを自問する必要があります。", ko: "큰 특권에는 큰 책임이 따릅니다. 차트 해석을 시작하기 전에 우리는 스스로에게 다음과 같은 질문을 던져야 합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "\"How can I be of the greatest benefit to my client?\"", hi: "\"मैं अपने ग्राहक के लिए सबसे बड़ा लाभ कैसे पहुँचा सकता हूँ?\"", ja: "「どうすればクライアントに最大の利益をもたらすことができるでしょうか？」", ko: "\"어떻게 하면 고객에게 가장 큰 혜택을 줄 수 있나요?\"",}
      },
      {
        type: "paragraph",
        text: {
          en: "In doing so, we must carefully balance honesty with compassion.", hi: "ऐसा करने में, हमें सावधानीपूर्वक ईमानदारी को करुणा के साथ संतुलित करना चाहिए।", ja: "その際、私たちは誠実さと思いやりのバランスを慎重にとらなければなりません。", ko: "그렇게 하면서 우리는 정직과 연민의 균형을 신중하게 유지해야 합니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Horoscope Interpretation Requires Intuition", hi: "कुंडली व्याख्या के लिए अंतर्ज्ञान की आवश्यकता होती है", ja: "ホロスコープの解釈には直感が必要です", ko: "별자리 해석에는 직관이 필요합니다",}
      },
      {
        type: "paragraph",
        text: {
          en: "Chart interpretation demands the ability to synthesise information and make predictions based on numerous sources of astrological data.", hi: "चार्ट व्याख्या के लिए ज्योतिषीय डेटा के कई स्रोतों के आधार पर जानकारी को संश्लेषित करने और भविष्यवाणियां करने की क्षमता की आवश्यकता होती है।", ja: "チャートの解釈には、情報を総合し、多数の占星術データのソースに基づいて予測を行う能力が必要です。", ko: "차트 해석에는 정보를 종합하고 수많은 점성술 데이터 소스를 기반으로 예측하는 능력이 필요합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Before we can make reliable, high-probability predictions, we must combine information from many important indicators.", hi: "इससे पहले कि हम विश्वसनीय, उच्च-संभावना वाली भविष्यवाणियाँ कर सकें, हमें कई महत्वपूर्ण संकेतकों से जानकारी को संयोजित करना होगा।", ja: "信頼性が高く確率の高い予測を行う前に、多くの重要な指標からの情報を組み合わせる必要があります。", ko: "신뢰할 수 있고 확률이 높은 예측을 하려면 먼저 여러 중요한 지표의 정보를 결합해야 합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Jyotish is both logical and systematic. However, successfully blending multiple factors and assigning the correct importance to each requires a reasonable degree of intuition.", hi: "ज्योतिष तार्किक और व्यवस्थित दोनों है। हालाँकि, कई कारकों को सफलतापूर्वक मिश्रित करने और प्रत्येक को सही महत्व देने के लिए उचित स्तर के अंतर्ज्ञान की आवश्यकता होती है।", ja: "ジョーティッシュは論理的かつ体系的です。ただし、複数の要素をうまく組み合わせて、それぞれに正しい重要性を割り当てるには、ある程度の直感が必要です。", ko: "Jyotish는 논리적이고 체계적입니다. 그러나 여러 요소를 성공적으로 혼합하고 각 요소에 올바른 중요성을 할당하려면 합리적인 수준의 직관이 필요합니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Spiritual Practices and Lifestyle Help Us Develop Intuition", hi: "आध्यात्मिक अभ्यास और जीवनशैली हमें अंतर्ज्ञान विकसित करने में मदद करती है", ja: "スピリチュアルな習慣とライフスタイルは直観力を養う", ko: "영적 실천과 생활방식은 직관력을 키우는 데 도움이 됩니다",}
      },
      {
        type: "paragraph",
        text: {
          en: "The study and practice of Jyotish itself helps cultivate intuition and gradually awakens awareness of the \"all-seeing light of pure consciousness\" within us. This state is referred to as Jyotish Mati Pragya, the all-knowing consciousness.", hi: "ज्योतिष का अध्ययन और अभ्यास स्वयं अंतर्ज्ञान विकसित करने में मदद करता है और धीरे-धीरे हमारे भीतर \"शुद्ध चेतना की सर्वव्यापी रोशनी\" के बारे में जागरूकता जगाता है। इस अवस्था को ज्योतिष मति प्रज्ञा, सर्वज्ञ चेतना कहा जाता है।", ja: "ジョーティッシュの研究と実践自体が直観を養い、私たちの中にある「すべてを見渡す純粋な意識の光」の意識を徐々に目覚めさせるのに役立ちます。この状態はジョーティッシュ・マティ・プラギャ、全知の意識と呼ばれます。", ko: "Jyotish 자체에 대한 연구와 실천은 직관을 키우는 데 도움이 되며 우리 안에 있는 \"모든 것을 보는 순수 의식의 빛\"에 대한 인식을 점차적으로 일깨워줍니다. 이 상태를 모든 것을 아는 의식인 Jyotish Mati Pragya라고 합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "The more charts we analyse, the more proficient we become and the stronger our intuition develops. This ability grows naturally over time through observing many charts and recognising recurring patterns that correlate with real-life experiences.", hi: "हम जितने अधिक चार्टों का विश्लेषण करते हैं, हम उतने ही अधिक कुशल बनते हैं और हमारा अंतर्ज्ञान उतना ही मजबूत होता है। यह क्षमता कई चार्टों को देखने और वास्तविक जीवन के अनुभवों से संबंधित आवर्ती पैटर्न को पहचानने के माध्यम से समय के साथ स्वाभाविक रूप से बढ़ती है।", ja: "チャートを分析すればするほど、私たちはより熟練し、より強い直観力を養うことができます。この能力は、多くのチャートを観察し、実生活の経験と相関する繰り返しのパターンを認識することで、時間の経過とともに自然に成長します。", ko: "분석하는 차트가 많을수록 우리는 더욱 능숙해지고 직관은 더욱 강해집니다. 이 능력은 많은 차트를 관찰하고 실제 경험과 관련된 반복 패턴을 인식함으로써 시간이 지남에 따라 자연스럽게 성장합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Experienced Vedic astrologers also understand the importance of maintaining regular spiritual practices. These practices help strengthen intuition, sometimes described as a \"sixth sense,\" and deepen our connection with the universal forces reflected in the cosmos.", hi: "अनुभवी वैदिक ज्योतिषी भी नियमित आध्यात्मिक अभ्यास बनाए रखने के महत्व को समझते हैं। ये अभ्यास अंतर्ज्ञान को मजबूत करने में मदद करते हैं, जिन्हें कभी-कभी \"छठी इंद्रिय\" के रूप में वर्णित किया जाता है, और ब्रह्मांड में प्रतिबिंबित सार्वभौमिक शक्तियों के साथ हमारे संबंध को गहरा करते हैं।", ja: "経験豊富なヴェーダ占星術師は、定期的に精神的な修行を続けることの重要性も理解しています。これらの実践は、「第六感」とも呼ばれる直観力を強化し、宇宙に反映される普遍的な力とのつながりを深めるのに役立ちます。", ko: "경험이 풍부한 베다 점성가들은 또한 정기적인 영적 수행을 유지하는 것의 중요성을 이해합니다. 이러한 관행은 때때로 \"육감\"으로 설명되는 직관을 강화하고 우주에 반영된 우주적 힘과의 연결을 심화시키는 데 도움이 됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "For a Jyotish astrologer, spiritual disciplines will often include:", hi: "एक ज्योतिषी ज्योतिषी के लिए, आध्यात्मिक विषयों में अक्सर शामिल होंगे:", ja: "ジョーティッシュの占星術師にとって、精神的な分野には次のものが含まれることがよくあります。", ko: "Jyotish 점성가의 경우 영적 훈련에는 종종 다음이 포함됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Daily meditation, preferably using mantra-based Vedic techniques", hi: "• दैनिक ध्यान, अधिमानतः मंत्र-आधारित वैदिक तकनीकों का उपयोग करना", ja: "• 毎日の瞑想、できればマントラに基づいたヴェーダのテクニックを使用", ko: "• 매일 명상(만트라 기반 베다 기술 사용 권장)",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Yoga practice", hi: "• योगाभ्यास", ja: "• ヨガの練習", ko: "• 요가 연습",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Pranayama", hi: "• प्राणायाम", ja: "• プラナヤマ", ko: "• 프라나야마",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Advanced meditation practices", hi: "• उन्नत ध्यान अभ्यास", ja: "• 高度な瞑想の実践", ko: "• 고급 명상 연습",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Chanting of Vedic mantras", hi: "• वैदिक मंत्रों का जाप", ja: "• ヴェーダマントラの詠唱", ko: "• 베다 만트라를 낭송합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "All of these can contribute to the development of stronger intuitive abilities.", hi: "ये सभी मजबूत अंतर्ज्ञान क्षमताओं के विकास में योगदान दे सकते हैं।", ja: "これらはすべて、より強力な直観力の発達に貢献します。", ko: "이 모든 것은 더 강한 직관 능력의 발달에 기여할 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "In addition, many Vedic astrologers follow a reasonably Sattvic lifestyle based on Ayurvedic principles. A Sattvic, meat-free diet may help support a balanced and less biased approach to interpretation.", hi: "इसके अलावा, कई वैदिक ज्योतिषी आयुर्वेदिक सिद्धांतों पर आधारित उचित सात्विक जीवन शैली का पालन करते हैं। सात्विक, मांस-मुक्त आहार व्याख्या के लिए संतुलित और कम पक्षपाती दृष्टिकोण का समर्थन करने में मदद कर सकता है।", ja: "さらに、多くのヴェーダ占星術師は、アーユルヴェーダの原則に基づいた合理的なサトヴィックなライフスタイルに従っています。サトヴィックで肉を含まない食事は、解釈に対するバランスの取れた偏りの少ないアプローチをサポートするのに役立つ可能性があります。", ko: "게다가 많은 베다 점성가들은 아유르베다 원칙에 기초한 합리적인 사트빅 생활 방식을 따릅니다. Sattvic의 고기 없는 식단은 해석에 대한 균형 있고 덜 편향된 접근 방식을 지원하는 데 도움이 될 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "One well-known living saint has even insisted that astrologers serving within Her ashram remain celibate.", hi: "एक प्रसिद्ध जीवित संत ने यहां तक ​​जोर दिया है कि उनके आश्रम में सेवा करने वाले ज्योतिषी ब्रह्मचारी रहें।", ja: "ある有名な現存する聖人は、彼女のアシュラム内で奉仕する占星術師は独身を貫くとさえ主張しました。", ko: "한 잘 알려진 살아있는 성자는 그녀의 아쉬람에서 봉사하는 점성가들이 금욕을 유지해야 한다고 주장하기까지 했습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Some people say it takes an entire lifetime to become truly proficient at Jyotish Horoscope interpretation. Others suggest it may take several lifetimes.", hi: "कुछ लोग कहते हैं कि ज्योतिष कुंडली व्याख्या में वास्तव में कुशल बनने में पूरा जीवन लग जाता है। दूसरों का सुझाव है कि इसमें कई जन्म लग सकते हैं।", ja: "ジョーティッシュのホロスコープ解釈に本当に習熟するには一生かかると言う人もいます。他の人は、それには数生涯かかるかもしれないと示唆しています。", ko: "어떤 사람들은 조티쉬 별자리 해석에 진정으로 능숙해지려면 평생이 걸린다고 말합니다. 다른 사람들은 여러 생애가 걸릴 수 있다고 제안합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "However, this should not discourage us. It is entirely possible that we studied or practised aspects of Jyotish in a previous life and are now rediscovering this knowledge.", hi: "हालाँकि, इससे हमें हतोत्साहित नहीं होना चाहिए। यह पूरी तरह से संभव है कि हमने पिछले जीवन में ज्योतिष के पहलुओं का अध्ययन या अभ्यास किया हो और अब इस ज्ञान को फिर से खोज रहे हों।", ja: "しかし、だからといって落胆するべきではありません。私たちが前世でジョーティッシュの側面を研究または実践しており、現在その知識を再発見している可能性は十分にあります。", ko: "하지만 그렇다고 해서 우리가 낙담해서는 안 됩니다. 우리가 전생에 Jyotish의 측면을 연구하거나 수행했으며 현재 이 지식을 재발견하고 있는 것은 전적으로 가능합니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Key Considerations Before We Start Chart Interpretation", hi: "चार्ट व्याख्या शुरू करने से पहले मुख्य बातें", ja: "チャートの解釈を始める前の重要な考慮事項", ko: "차트 해석을 시작하기 전 주요 고려 사항",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Dealing With Information Overload", hi: "सूचना अधिभार से निपटना", ja: "情報過多への対処", ko: "정보 과부하 처리",}
      },
      {
        type: "paragraph",
        text: {
          en: "When we begin studying Jyotish and attempt to apply our knowledge to chart interpretation, we often encounter a problem known as information overload.", hi: "जब हम ज्योतिष का अध्ययन शुरू करते हैं और अपने ज्ञान को चार्ट व्याख्या में लागू करने का प्रयास करते हैं, तो हमें अक्सर सूचना अधिभार नामक समस्या का सामना करना पड़ता है।", ja: "ジョーティッシュの学習を開始し、その知識をチャートの解釈に適用しようとすると、情報過多として知られる問題に遭遇することがよくあります。", ko: "Jyotish를 공부하기 시작하고 우리의 지식을 차트 해석에 적용하려고 시도할 때 종종 정보 과부하라는 문제에 직면하게 됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "This is especially true when using modern Jyotish software, which can generate far more information than a beginner can comfortably process.", hi: "आधुनिक ज्योतिष सॉफ़्टवेयर का उपयोग करते समय यह विशेष रूप से सच है, जो एक नौसिखिया द्वारा आसानी से संसाधित की जाने वाली जानकारी से कहीं अधिक जानकारी उत्पन्न कर सकता है।", ja: "これは、初心者が快適に処理できるよりもはるかに多くの情報を生成する可能性がある最新のジョーティッシュ ソフトウェアを使用する場合に特に当てはまります。", ko: "이는 초보자가 편안하게 처리할 수 있는 것보다 훨씬 더 많은 정보를 생성할 수 있는 최신 Jyotish 소프트웨어를 사용할 때 특히 그렇습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "As a result, we may become so overwhelmed that we fail to recognise the most important factors in the chart. In other words, we can end up \"not seeing the wood for the trees.\"", hi: "परिणामस्वरूप, हम इतने अभिभूत हो सकते हैं कि हम चार्ट में सबसे महत्वपूर्ण कारकों को पहचानने में विफल हो जाते हैं। दूसरे शब्दों में, हम अंततः \"पेड़ों के लिए लकड़ी नहीं देख पा रहे हैं।\"", ja: "その結果、私たちは圧倒されすぎて、チャート内の最も重要な要素を認識できなくなる可能性があります。言い換えれば、「木を見て木を見ず」になってしまう可能性があるのです。", ko: "결과적으로 우리는 너무 압도되어 차트에서 가장 중요한 요소를 인식하지 못할 수 있습니다. 즉, 우리는 결국 \"나무만 보고 나무를 보지 못하는\" 상황에 처하게 될 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "For this reason, it is important to understand what can reasonably be left out during the early stages of learning.", hi: "इस कारण से, यह समझना महत्वपूर्ण है कि सीखने के शुरुआती चरणों के दौरान उचित रूप से क्या छोड़ा जा सकता है।", ja: "このため、学習の初期段階で合理的に除外できるものを理解することが重要です。", ko: "이러한 이유로 학습 초기 단계에서 합리적으로 생략할 수 있는 것이 무엇인지 이해하는 것이 중요합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Professional astrologers will correctly tell us that every available factor should be considered when interpreting a birth-chart. While this is true, it is not particularly helpful advice for beginners.", hi: "पेशेवर ज्योतिषी हमें सही ढंग से बताएंगे कि जन्म-कुंडली की व्याख्या करते समय प्रत्येक उपलब्ध कारक पर विचार किया जाना चाहिए। हालांकि यह सच है, शुरुआती लोगों के लिए यह विशेष रूप से उपयोगी सलाह नहीं है।", ja: "プロの占星術師は、出生図を解釈する際には、利用可能なすべての要素を考慮する必要があると正しく教えてくれます。これは事実ですが、初心者にとって特に役立つアドバイスではありません。", ko: "전문 점성가들은 출생 차트를 해석할 때 가능한 모든 요소를 ​​고려해야 한다고 정확하게 말합니다. 이는 사실이지만 초보자에게는 특별히 도움이 되는 조언은 아닙니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Key Factors to Include – Keeping It Simple", hi: "शामिल करने योग्य मुख्य कारक - इसे सरल रखना", ja: "含めるべき重要な要素 – シンプルさを保つ", ko: "포함해야 할 핵심 요소 – 단순함 유지",}
      },
      {
        type: "paragraph",
        text: {
          en: "Before anything else, we should have a basic understanding of planets, houses, aspects, and related concepts.", hi: "किसी भी अन्य चीज़ से पहले, हमें ग्रहों, घरों, पहलुओं और संबंधित अवधारणाओं की बुनियादी समझ होनी चाहिए।", ja: "何よりもまず、惑星、ハウス、アスペクト、および関連する概念についての基本的な理解を得る必要があります。", ko: "무엇보다도 먼저 우리는 행성, 하우스, 측면 및 관련 개념에 대한 기본적인 이해를 가지고 있어야 합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "As a minimum, we should be able to identify and evaluate:", hi: "कम से कम, हमें पहचानने और मूल्यांकन करने में सक्षम होना चाहिए:", ja: "少なくとも、以下を特定して評価できる必要があります。", ko: "최소한 다음을 식별하고 평가할 수 있어야 합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• The overall strength of the birth-chart", hi: "• जन्म कुंडली की समग्र शक्ति", ja: "• 出生図の全体的な強さ", ko: "• 출생 차트의 전반적인 강도",}
      },
      {
        type: "paragraph",
        text: {
          en: "• The overall strength of the Ascendant and its ruler", hi: "• लग्न और उसके शासक का समग्र बल", ja: "• アセンダントとそのルーラーの全体的な強さ", ko: "• 어센던트와 그 통치자의 전반적인 힘",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Functional benefics and malefics arising from the Ascendant", hi: "• लग्न से उत्पन्न होने वाले क्रियात्मक शुभ एवं अशुभ फल", ja: "• アセンダントから生じる機能的な恩恵と凶作用", ko: "• 승천자에게서 발생하는 기능적 이익과 흉악",}
      },
      {
        type: "paragraph",
        text: {
          en: "• The strength of all planets by sign placement (exalted, debilitated, etc.)", hi: "• राशि स्थान के अनुसार सभी ग्रहों की ताकत (उच्च, नीच, आदि)", ja: "• 星座の配置によるすべての惑星の強さ（高揚、衰弱など）", ko: "• 라시 배치에 따른 모든 행성의 강도(고양, 쇠약 등)",}
      },
      {
        type: "paragraph",
        text: {
          en: "• The strength of all planets by house placement (good or bad houses)", hi: "• गृह स्थिति द्वारा सभी ग्रहों की ताकत (अच्छे या बुरे घर)", ja: "• ハウス配置によるすべての惑星の強さ（良いハウスまたは悪いハウス）", ko: "• 하우스 배치(좋은 하우스 또는 나쁜 하우스)에 따른 모든 행성의 강도",}
      },
      {
        type: "paragraph",
        text: {
          en: "• How planetary strength affects the things indicated by that planet", hi: "• ग्रह की ताकत उस ग्रह द्वारा बताई गई चीजों को किस प्रकार प्रभावित करती है", ja: "• 惑星の強さが、その惑星が示すものにどのような影響を与えるか", ko: "• 행성의 힘이 해당 행성이 나타내는 사물에 어떤 영향을 미치는지",}
      },
      {
        type: "paragraph",
        text: {
          en: "• How planetary strength affects the houses ruled by that planet", hi: "• ग्रह की ताकत उस ग्रह द्वारा शासित घरों को कैसे प्रभावित करती है", ja: "• 惑星の強さが、その惑星が支配するハウスにどのような影響を与えるか", ko: "• 행성의 힘이 해당 행성이 지배하는 하우스에 어떤 영향을 미치는지",}
      },
      {
        type: "paragraph",
        text: {
          en: "• The condition of each house based upon occupying planets and aspects", hi: "• प्रत्येक घर की स्थिति ग्रहों और पहलुओं पर आधारित है", ja: "• 占有惑星とアスペクトに基づいた各ハウスの状態", ko: "• 점유하는 행성과 측면에 따른 각 주택의 상태",}
      },
      {
        type: "paragraph",
        text: {
          en: "• The major planetary periods (Mahadashas) and their favourable or unfavourable effects", hi: "• प्रमुख ग्रह अवधि (महादशाएं) और उनके अनुकूल या प्रतिकूल प्रभाव", ja: "• 主要な惑星周期（マハダシャー）とその有利または不利な影響", ko: "• 주요 행성 기간(마하다샤)과 그 유리한 또는 불리한 효과",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Significant transits, particularly those of Saturn and Jupiter", hi: "• महत्वपूर्ण पारगमन, विशेष रूप से शनि और बृहस्पति के पारगमन", ja: "• 重要な通過、特に土星と木星の通過", ko: "• 중요한 통과, 특히 토성과 목성의 통과",}
      },
      {
        type: "paragraph",
        text: {
          en: "All of these topics are covered in much greater detail in the Step-by-Step Guide to Vedic Horoscope Interpretation article.", hi: "इन सभी विषयों को वैदिक कुंडली व्याख्या के चरण-दर-चरण मार्गदर्शिका लेख में अधिक विस्तार से शामिल किया गया है।", ja: "これらのトピックはすべて、「ヴェーダ星占い解釈のステップバイステップ ガイド」の記事でさらに詳しく説明されています。", ko: "이러한 모든 주제는 베다 별자리 해석에 대한 단계별 가이드에서 훨씬 더 자세히 다루고 있습니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "What to Leave Out?", hi: "क्या छोड़ना है?", ja: "何を省略するか?", ko: "무엇을 생략해야 할까요?",}
      },
      {
        type: "paragraph",
        text: {
          en: "What should a complete beginner temporarily leave out?", hi: "एक पूर्ण नौसिखिया को अस्थायी रूप से क्या छोड़ देना चाहिए?", ja: "まったくの初心者が一時的にやめるべきものは何ですか?", ko: "완전 초보자가 일시적으로 생략해야 할 것은 무엇입니까?",}
      },
      {
        type: "paragraph",
        text: {
          en: "The following suggestions are my personal recommendations. Some astrologers may disagree and insist that some or all of these factors should be included from the beginning.", hi: "निम्नलिखित सुझाव मेरी व्यक्तिगत अनुशंसाएँ हैं। कुछ ज्योतिषी असहमत हो सकते हैं और इस बात पर जोर दे सकते हैं कि इनमें से कुछ या सभी कारकों को शुरू से ही शामिल किया जाना चाहिए।", ja: "以下の提案は私の個人的な推奨事項です。一部の占星術師はこれに同意せず、これらの要素の一部またはすべてを最初から含めるべきだと主張するかもしれません。", ko: "다음 제안은 개인적인 권장 사항입니다. 일부 점성가들은 동의하지 않고 이러한 요소 중 일부 또는 전부가 처음부터 포함되어야 한다고 주장할 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "My response would be:", hi: "मेरी प्रतिक्रिया होगी:", ja: "私の返答は次のようになります。", ko: "내 대답은 다음과 같습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "\"Yes—but later, once we have gained more experience.\"", hi: "\"हाँ-लेकिन बाद में, जब हमें और अधिक अनुभव प्राप्त हो गया।\"", ja: "「はい、でも、もっと経験を積んでから、また後ほど。」", ko: "\"그렇습니다. 하지만 나중에 더 많은 경험을 쌓게 되면 말이죠.\"",}
      },
      {
        type: "paragraph",
        text: {
          en: "Personally, I would omit the numerical results obtained from the six Shadbala calculations and instead assess planetary strength systematically through sign placement and house placement alone.", hi: "व्यक्तिगत रूप से, मैं छह शादबाला गणनाओं से प्राप्त संख्यात्मक परिणामों को छोड़ दूंगा और इसके बजाय अकेले साइन प्लेसमेंट और हाउस प्लेसमेंट के माध्यम से व्यवस्थित रूप से ग्रहों की ताकत का आकलन करूंगा।", ja: "個人的には、6 つのシャドバラ計算から得られた数値結果を省略し、代わりにサインの配置とハウスの配置だけで惑星の強さを体系的に評価したいと思います。", ko: "개인적으로 나는 6개의 샤드발라 계산에서 얻은 수치 결과를 생략하고 대신 라시 배치와 집 배치만으로 행성의 강도를 체계적으로 평가할 것입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "I would also leave out detailed analysis of the Vargas (divisional charts), with the possible exception of the Navamsha chart, which is important in marriage analysis and also modifies the strengths indicated in the main chart.", hi: "मैं नवमांश चार्ट के संभावित अपवाद के साथ, वर्गास (विभागीय चार्ट) के विस्तृत विश्लेषण को भी छोड़ दूंगा, जो विवाह विश्लेषण में महत्वपूर्ण है और मुख्य चार्ट में दर्शाई गई शक्तियों को भी संशोधित करता है।", ja: "また、結婚分析において重要であり、メインチャートに示されている強みを修正するナヴァムシャチャートを除いて、ヴァルガス（分割チャート）の詳細な分析も省略します。", ko: "또한 결혼 분석에서 중요하고 메인 차트에 표시된 강점을 수정하는 Navamsha 차트를 제외하고 Vargas(분할 차트)에 대한 자세한 분석을 생략하겠습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "The Vargas can always be studied later. For beginners, it is usually best to focus on the main birth-chart.", hi: "वर्गास का अध्ययन हमेशा बाद में किया जा सकता है। शुरुआती लोगों के लिए, आमतौर पर मुख्य जन्म-कुंडली पर ध्यान केंद्रित करना सबसे अच्छा होता है।", ja: "バルガスは後でいつでも研究できます。初心者の場合、通常はメインの出生図に焦点を当てるのが最善です。", ko: "바르가스는 나중에 언제든지 연구할 수 있습니다. 초보자의 경우 일반적으로 주요 출생 차트에 집중하는 것이 가장 좋습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "I would also avoid detailed transit analysis unless there is a particularly important Saturn transit, such as Sani Sade (Saturn transiting the 12th, 1st, and 2nd houses counted from the Moon sign). Likewise, I would generally leave out Jupiter transits unless they are especially significant.", hi: "मैं विस्तृत पारगमन विश्लेषण से भी बचूंगा जब तक कि कोई विशेष रूप से महत्वपूर्ण शनि पारगमन न हो, जैसे शनि साढ़ेसाती (शनि चंद्र राशि से 12वें, 1 और 2 घरों में गिना जाता है)। इसी तरह, मैं आम तौर पर बृहस्पति पारगमन को छोड़ दूंगा जब तक कि वे विशेष रूप से महत्वपूर्ण न हों।", ja: "また、サニ・サデ（月星座から数えて12、1、2ハウスを通過する土星）など、特に重要な土星のトランジットがない限り、詳細なトランジット分析は避けます。同様に、特に重要でない限り、私は通常、木星の通過を除外します。", ko: "또한 Sani Sade(달 별자리에서 계산된 12, 1, 2하우스를 통과하는 토성)와 같이 특히 중요한 토성 통과가 없는 한 자세한 통과 분석을 피할 것입니다. 마찬가지로, 특별히 중요하지 않은 한 목성 통과는 일반적으로 제외하겠습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "For complete beginners, I would also postpone using the Nakshatras.", hi: "पूरी तरह से शुरुआती लोगों के लिए, मैं नक्षत्रों का उपयोग भी स्थगित कर दूंगा।", ja: "まったくの初心者の場合、ナクシャトラの使用も延期します。", ko: "완전 초보자의 경우 Nakshatras 사용을 연기하겠습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "I fully recognise that the Moon's placement in a particular Nakshatra can have a considerable impact on the chart. However, it introduces another layer of complexity. If the main chart does not adequately explain real-life events, then by all means begin investigating the Nakshatras.", hi: "मैं पूरी तरह से मानता हूं कि किसी विशेष नक्षत्र में चंद्रमा की स्थिति चार्ट पर काफी प्रभाव डाल सकती है। हालाँकि, यह जटिलता की एक और परत पेश करता है। यदि मुख्य चार्ट वास्तविक जीवन की घटनाओं की पर्याप्त व्याख्या नहीं करता है, तो हर तरह से नक्षत्रों की जांच शुरू करें।", ja: "特定のナクシャトラにおける月の配置がチャートに大きな影響を与える可能性があることを私は十分に認識しています。ただし、別の複雑さの層が生じます。メインチャートが現実の出来事を適切に説明していない場合は、ぜひナクシャトラの調査を始めてください。", ko: "나는 특정 낙샤트라에 있는 달의 위치가 차트에 상당한 영향을 미칠 수 있다는 것을 충분히 알고 있습니다. 그러나 이는 또 다른 복잡성 계층을 도입합니다. 메인 차트가 실제 사건을 적절하게 설명하지 못한다면 반드시 Nakshatras 조사를 시작하십시오.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Should we analyse a chart using the sign occupied by the Moon as the Lagna?", hi: "क्या हमें लग्न के रूप में चंद्रमा द्वारा ग्रहण की गई राशि का उपयोग करके चार्ट का विश्लेषण करना चाहिए?", ja: "ラグナとして月が占める星座を使用してチャートを分析する必要がありますか?", ko: "달이 차지하는 별자리를 라그나(Lagna)로 사용하여 차트를 분석해야 할까요?",}
      },
      {
        type: "paragraph",
        text: {
          en: "Some astrologers consider this essential. Personally, I tend to glance at the chart from this perspective without giving it primary emphasis. In my enhanced chart format, I label each house counted from the Moon for easy reference. Ultimately, this is a matter of personal preference.", hi: "कुछ ज्योतिषी इसे आवश्यक मानते हैं। व्यक्तिगत रूप से, मैं चार्ट पर प्राथमिक जोर दिए बिना इस परिप्रेक्ष्य से देखता हूं। अपने उन्नत चार्ट प्रारूप में, मैं आसान संदर्भ के लिए चंद्रमा से गिने गए प्रत्येक घर को लेबल करता हूं। अंततः, यह व्यक्तिगत प्राथमिकता का मामला है।", ja: "占星術師の中には、これが不可欠であると考える人もいます。私個人としては、特に重視せずにこの観点からチャートを眺める傾向があります。私の強化されたチャート形式では、簡単に参照できるように、月から数えて各家にラベルを付けています。結局のところ、これは個人の好みの問題です。", ko: "일부 점성가들은 이것이 필수적이라고 생각합니다. 개인적으로 나는 차트를 일차적으로 강조하지 않고 이러한 관점에서 보는 경향이 있습니다. 향상된 차트 형식에서는 쉽게 참조할 수 있도록 달에서 계산한 각 집에 라벨을 붙였습니다. 결국 이는 개인 취향의 문제이다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Should we leave out Sambandhas, the mutual relationships between planets?", hi: "क्या हमें संबंधों, ग्रहों के बीच के आपसी संबंधों को छोड़ देना चाहिए?", ja: "惑星間の相互関係であるサンバンダを除外すべきでしょうか?", ko: "행성 간의 상호 관계인 삼반다(Sambandhas)를 빼야 할까요?",}
      },
      {
        type: "paragraph",
        text: {
          en: "A common example is an exchange of signs, such as the Moon occupying Pisces (Jupiter's sign) while Jupiter occupies Cancer (Moon's sign).", hi: "एक सामान्य उदाहरण राशियों का आदान-प्रदान है, जैसे चंद्रमा मीन राशि (बृहस्पति की राशि) पर है जबकि बृहस्पति कर्क (चंद्रमा की राशि) पर है।", ja: "一般的な例は、月が魚座 (木星の星座) を占め、木星が蟹座 (月の星座) を占めるなど、星座の交換です。", ko: "일반적인 예는 달이 물고기자리(목성의 별자리)를 차지하고 목성이 게자리(달의 별자리)를 차지하는 것과 같은 별자리 교환입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Perhaps this introduces additional complexity for absolute beginners. Nevertheless, even beginners should be aware that Sambandhas exist because they can produce powerful and highly significant effects.", hi: "शायद यह पूर्णतया शुरुआती लोगों के लिए अतिरिक्त जटिलता का परिचय देता है। फिर भी, शुरुआती लोगों को भी पता होना चाहिए कि संबंध मौजूद हैं क्योंकि वे शक्तिशाली और अत्यधिक महत्वपूर्ण प्रभाव पैदा कर सकते हैं।", ja: "おそらく、これにより、まったくの初心者にとってはさらに複雑さが増します。それにもかかわらず、サンバンダは強力で非常に重要な効果を生み出すことができるため、初心者でもサンバンダの存在を認識しておく必要があります。", ko: "아마도 이것은 완전 초보자에게는 추가적인 복잡성을 야기할 수 있습니다. 그럼에도 불구하고 삼반다(Sambandhas)는 강력하고 매우 중요한 효과를 낼 수 있기 때문에 초보자라도 삼반다(Sambandhas)가 존재한다는 사실을 알아야 합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "I have seen many charts where Sambandhas explained important results that were not obvious from other factors alone.", hi: "मैंने कई चार्ट देखे हैं जहां संबंध ने महत्वपूर्ण परिणामों की व्याख्या की है जो अकेले अन्य कारकों से स्पष्ट नहीं थे।", ja: "私は、他の要素だけでは明らかではない重要な結果をサンバンダが説明しているチャートを数多く見てきました。", ko: "나는 Sambandhas가 다른 요인만으로는 명확하지 않은 중요한 결과를 설명하는 많은 차트를 보았습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "What about Planetary Yogas?", hi: "ग्रह योगों के बारे में क्या?", ja: "プラネタリーヨガはどうでしょうか？", ko: "행성 요가는 어떻습니까?",}
      },
      {
        type: "paragraph",
        text: {
          en: "Should we include them or not?", hi: "क्या हमें उन्हें शामिल करना चाहिए या नहीं?", ja: "それらを含めるべきかどうか?", ko: "그것들을 포함해야 할까요, 아니면 포함하지 말아야 할까요?",}
      },
      {
        type: "paragraph",
        text: {
          en: "The word Yoga means \"union\" and refers to special planetary arrangements or combinations. Jyotish recognises hundreds of Planetary Yogas, which presents a significant challenge for beginners.", hi: "योग शब्द का अर्थ है \"मिलन\" और यह विशेष ग्रह व्यवस्था या संयोजन को संदर्भित करता है। ज्योतिष सैकड़ों ग्रह योगों को पहचानता है, जो शुरुआती लोगों के लिए एक महत्वपूर्ण चुनौती पेश करता है।", ja: "ヨガという言葉は「結合」を意味し、特別な惑星の配置や組み合わせを指します。 Jyotish は何百もの惑星ヨガを認識していますが、初心者にとっては大きな課題となります。", ko: "요가라는 단어는 \"결합\"을 의미하며 특별한 행성 배열 또는 조합을 나타냅니다. Jyotish는 초보자에게 중요한 도전이 되는 수백 가지의 행성 요가를 인정합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "If your software identifies them, you may wish to investigate a few major Yogas such as Raja Yoga, Adhi Yoga, and similar combinations. However, trying to learn all Yogas at the beginning can be overwhelming.", hi: "यदि आपका सॉफ़्टवेयर उनकी पहचान करता है, तो आप कुछ प्रमुख योगों जैसे राज योग, आदि योग और इसी तरह के संयोजनों की जांच करना चाह सकते हैं। हालाँकि, शुरुआत में सभी योग सीखने की कोशिश करना भारी पड़ सकता है।", ja: "ソフトウェアがそれらを識別する場合は、ラージャ ヨガ、アディ ヨガ、および同様の組み合わせなど、いくつかの主要なヨガを調査するとよいでしょう。しかし、最初からすべてのヨガを学ぼうとするのは大変なことかもしれません。", ko: "소프트웨어에서 이를 식별하는 경우 Raja Yoga, Adhi Yoga 및 이와 유사한 조합과 같은 몇 가지 주요 요가를 조사해 볼 수 있습니다. 하지만 처음에 모든 요가를 배우려고 하면 부담스러울 수 있습니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Can We Learn Chart Interpretation from a Book or Website?", hi: "क्या हम किसी पुस्तक या वेबसाइट से चार्ट व्याख्या सीख सकते हैं?", ja: "チャートの解釈を本やウェブサイトから学ぶことはできますか?", ko: "책이나 웹사이트에서 차트 해석을 배울 수 있나요?",}
      },
      {
        type: "paragraph",
        text: {
          en: "The answer is:", hi: "जवाब है:", ja: "答えは次のとおりです。", ko: "대답은 다음과 같습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "\"Maybe.\"", hi: "\"शायद।\"", ja: "\"多分。\"", ko: "\"아마도.\"",}
      },
      {
        type: "paragraph",
        text: {
          en: "The difficulty with many Jyotish books is that they contain a huge amount of information, which can become confusing for beginners.", hi: "कई ज्योतिष पुस्तकों के साथ कठिनाई यह है कि उनमें भारी मात्रा में जानकारी होती है, जो शुरुआती लोगों के लिए भ्रमित करने वाली हो सकती है।", ja: "多くのジョーティッシュ本の難点は、膨大な量の情報が含まれており、初心者にとっては混乱する可能性があることです。", ko: "많은 Jyotish 책의 어려움은 엄청난 양의 정보가 포함되어 있어 초보자에게 혼란을 줄 수 있다는 것입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "When I first started studying Jyotish, I found the book Ancient Hindu Astrology for the Modern Western Astrologer by James T. Braha very useful.", hi: "जब मैंने पहली बार ज्योतिष का अध्ययन करना शुरू किया, तो मुझे जेम्स टी. ब्रहा की पुस्तक एंशिएंट हिंदू एस्ट्रोलॉजी फॉर द मॉडर्न वेस्टर्न एस्ट्रोलॉजर बहुत उपयोगी लगी।", ja: "私が初めてジョーティッシュの勉強を始めたとき、ジェームズ・T・ブラハ著『現代西洋占星術師のための古代ヒンドゥー占星術』という本がとても役立つことがわかりました。", ko: "처음 Jyotish를 공부하기 시작했을 때 James T. Braha가 쓴 현대 서양 점성가를 위한 고대 힌두 점성술이라는 책이 매우 유용하다는 것을 알았습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "It was well organised and presented information in a concise format that was easy to reference.", hi: "यह अच्छी तरह से व्यवस्थित था और जानकारी को संक्षिप्त प्रारूप में प्रस्तुत किया गया था जिसका संदर्भ लेना आसान था।", ja: "情報がよく整理されており、簡潔な形式でまとめられており、参照しやすいものでした。", ko: "정보가 잘 정리되어 있고, 참조하기 쉬운 간결한 형식으로 정보를 제공했습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "However, the book also had some significant omissions. For example, it did not adequately explain functional benefic and malefic planets. Nevertheless, it provided me with an initial foothold into the subject at a time when few other resources existed and the internet was not available.", hi: "हालाँकि, पुस्तक में कुछ महत्वपूर्ण चूक भी थीं। उदाहरण के लिए, इसने कार्यात्मक शुभ और अशुभ ग्रहों की पर्याप्त व्याख्या नहीं की। फिर भी, इसने मुझे उस समय इस विषय पर प्रारंभिक पकड़ प्रदान की जब कुछ अन्य संसाधन मौजूद थे और इंटरनेट उपलब्ध नहीं था।", ja: "ただし、この本にはいくつかの重大な省略もありました。たとえば、機能的な吉星や凶星については十分に説明されていませんでした。それにもかかわらず、他のリソースがほとんど存在せず、インターネットも利用できなかった当時、この主題への最初の足掛かりを私に提供してくれました。", ko: "그러나 이 책에는 몇 가지 중요한 누락 사항도 있었습니다. 예를 들어, 기능적인 유익 행성과 흉성 행성을 적절하게 설명하지 못했습니다. 그럼에도 불구하고, 그것은 다른 자료가 거의 없고 인터넷을 사용할 수 없었던 당시에 나에게 이 주제에 대한 초기 발판을 제공했습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "I have also found AI—particularly ChatGPT—to be quite effective for answering detailed questions about Jyotish.", hi: "मैंने ज्योतिष के बारे में विस्तृत प्रश्नों के उत्तर देने के लिए एआई-विशेष रूप से चैटजीपीटी-को भी काफी प्रभावी पाया है।", ja: "また、AI (特に ChatGPT) は、Jyotish に関する詳細な質問に答えるのに非常に効果的であることもわかりました。", ko: "또한 AI, 특히 ChatGPT가 Jyotish에 대한 자세한 질문에 답변하는 데 매우 효과적이라는 것을 알았습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "It is not perfect, and the usual warning of \"beginners beware\" still applies. However, it is often much faster than searching through numerous websites and has become my first source for quick research.", hi: "यह सही नहीं है, और \"शुरुआती सावधान रहें\" की सामान्य चेतावनी अभी भी लागू होती है। हालाँकि, यह कई वेबसाइटों पर खोज करने की तुलना में अक्सर बहुत तेज़ होता है और त्वरित शोध के लिए यह मेरा पहला स्रोत बन गया है।", ja: "それは完璧ではなく、「初心者は注意してください」という通常の警告が依然として適用されます。ただし、多くの場合、多数の Web サイトを検索するよりもはるかに高速であり、迅速な調査のための最初の情報源となっています。", ko: "이는 완벽하지 않으며 \"초보자는 조심하세요\"라는 일반적인 경고가 여전히 적용됩니다. 그러나 이는 수많은 웹사이트를 검색하는 것보다 훨씬 빠른 경우가 많으며 빠른 조사를 위한 첫 번째 소스가 되었습니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Do We Need a Mentor?", hi: "क्या हमें किसी गुरु की आवश्यकता है?", ja: "メンターは必要ですか?", ko: "멘토가 필요합니까?",}
      },
      {
        type: "paragraph",
        text: {
          en: "Having a mentor is certainly helpful.", hi: "एक गुरु का होना निश्चित रूप से सहायक होता है।", ja: "メンターがいることは確かに役立ちます。", ko: "멘토가 있으면 확실히 도움이 됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "I was fortunate to have several highly knowledgeable friends involved in advanced and residential Transcendental Meditation Programmes (Purusha Programmes) whom I could consult regularly.", hi: "मैं भाग्यशाली था कि मेरे कई उच्च जानकार मित्र उन्नत और आवासीय ट्रान्सेंडैंटल मेडिटेशन प्रोग्राम (पुरुष कार्यक्रम) में शामिल थे, जिनसे मैं नियमित रूप से परामर्श कर सकता था।", ja: "幸運なことに、私には高度な宿泊型超越瞑想プログラム (プルシャ プログラム) に参加している知識豊富な友人が何人かいて、定期的に相談することができました。", ko: "나는 운이 좋게도 정기적으로 상담할 수 있는 고급 및 상주 초월명상 프로그램(푸루샤 프로그램)에 참여하고 있는 고도로 지식이 풍부한 친구 몇 명을 두었습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Some of these friends also had access to professional Jyotish pundits from India. Through them I gained valuable insights that I never found in books.", hi: "इनमें से कुछ मित्रों की पहुंच भारत के पेशेवर ज्योतिष पंडितों तक भी थी। उनके माध्यम से मुझे बहुमूल्य अंतर्दृष्टि प्राप्त हुई जो मुझे किताबों में कभी नहीं मिली।", ja: "これらの友人の中には、インドのプロのジョーティッシュ評論家と連絡を取ることができた人もいました。 Through them I gained valuable insights that I never found in books.", ko: "이 친구들 중 일부는 인도의 전문 Jyotish 전문가들과 접촉할 수도 있었습니다. 그들을 통해 나는 책에서는 찾을 수 없는 귀중한 통찰력을 얻었습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Could AI act as a mentor?", hi: "क्या AI एक मार्गदर्शक के रूप में कार्य कर सकता है?", ja: "AIはメンターの役割を果たすことができるでしょうか?", ko: "AI가 멘토 역할을 할 수 있을까?",}
      },
      {
        type: "paragraph",
        text: {
          en: "This was a question I asked ChatGPT directly.", hi: "यह वह प्रश्न था जो मैंने चैटजीपीटी से सीधे पूछा था।", ja: "これは私が ChatGPT に直接尋ねた質問です。", ko: "제가 ChatGPT에 직접 물어본 질문이었습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Its response acknowledged that AI can be a powerful tool for research, information gathering, and learning. However, it also noted:", hi: "इसकी प्रतिक्रिया में स्वीकार किया गया कि एआई अनुसंधान, सूचना एकत्र करने और सीखने के लिए एक शक्तिशाली उपकरण हो सकता है। हालाँकि, यह भी नोट किया गया:", ja: "その回答では、AI が研究、情報収集、学習のための強力なツールとなり得ることが認められました。ただし、次のようにも指摘しています。", ko: "응답에서는 AI가 연구, 정보 수집 및 학습을 위한 강력한 도구가 될 수 있다는 점을 인정했습니다. 그러나 또한 다음과 같이 언급했습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "\"It doesn't possess personal experiences, intuition, or the ability to provide subjective insights in the same way a human mentor might.\"", hi: "\"इसमें व्यक्तिगत अनुभव, अंतर्ज्ञान, या व्यक्तिपरक अंतर्दृष्टि प्रदान करने की क्षमता उसी तरह नहीं है जैसे एक मानव गुरु के पास हो सकती है।\"", ja: "「人間の指導者のように、個人的な経験や直観、主観的な洞察を提供する能力はありません。」", ko: "\"인간 멘토처럼 개인적인 경험이나 직관, 주관적인 통찰력을 제공하는 능력이 없습니다.\"",}
      },
      {
        type: "paragraph",
        text: {
          en: "The complete response, which I rate highly, is included in Footnote [1].", hi: "संपूर्ण प्रतिक्रिया, जिसे मैं अत्यधिक महत्व देता हूं, फ़ुटनोट [1] में शामिल है।", ja: "完全な回答は、私が高く評価していますが、脚注 [1] に含まれています。", ko: "제가 높이 평가하는 완전한 답변은 각주 [1]에 포함되어 있습니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "What Charts Should We Look at First?", hi: "हमें सबसे पहले कौन से चार्ट देखना चाहिए?", ja: "最初にどのチャートを見るべきでしょうか?", ko: "어떤 차트를 먼저 살펴봐야 할까요?",}
      },
      {
        type: "paragraph",
        text: {
          en: "Personally, I always recommend starting with our own chart.", hi: "व्यक्तिगत रूप से, मैं हमेशा अपने स्वयं के चार्ट से शुरुआत करने की सलाह देता हूं।", ja: "個人的には、常に独自のチャートから始めることをお勧めします。", ko: "개인적으로 저는 항상 자체 차트로 시작하는 것을 권장합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Many people begin their journey into Jyotish in exactly this way.", hi: "बहुत से लोग ज्योतिष में अपनी यात्रा बिल्कुल इसी तरह से शुरू करते हैं।", ja: "多くの人はまさにこの方法でジョーティッシュへの旅を始めます。", ko: "많은 사람들이 바로 이런 방식으로 Jyotish로의 여행을 시작합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "At some stage, there may even be an \"OMG\" moment when we realise that Jyotish genuinely works. That certainly happened to me.", hi: "किसी स्तर पर, एक \"ओएमजी\" क्षण भी आ सकता है जब हमें एहसास होता है कि ज्योतिष वास्तव में काम करता है। निश्चित रूप से मेरे साथ ऐसा हुआ।", ja: "ある段階で、Jyotish が本当に機能することに気づく「OMG」の瞬間さえあるかもしれません。それは確かに私にも起こりました。", ko: "어떤 단계에서는 Jyotish가 실제로 작동한다는 것을 깨닫는 \"OMG\" 순간이 있을 수도 있습니다. 그것은 확실히 나에게 일어났습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "I started out highly sceptical but quickly realised that Jyotish was very different from Western Astrology. It appeared to offer a genuine window into returning karma—something both remarkable and paradigm-shifting.", hi: "मैंने शुरुआत में अत्यधिक संदेह किया लेकिन जल्द ही मुझे एहसास हुआ कि ज्योतिष पश्चिमी ज्योतिष से बहुत अलग है। ऐसा प्रतीत होता है कि यह कर्म को लौटाने के लिए एक वास्तविक खिड़की प्रदान करता है - कुछ उल्लेखनीय और प्रतिमान-परिवर्तनकारी दोनों।", ja: "私は最初は非常に懐疑的でしたが、ジョーティッシュが西洋占星術とは大きく異なることにすぐに気づきました。それは、カルマを取り戻すための真の窓を提供するものであるように見えました。それは驚くべきことであり、パラダイムを変えるものです。", ko: "나는 매우 회의적으로 시작했지만 Jyotish가 서양 점성술과 매우 다르다는 것을 빨리 깨달았습니다. 그것은 카르마를 되돌릴 수 있는 진정한 창을 제공하는 것처럼 보였습니다. 이것은 놀랍고 패러다임을 바꾸는 일이었습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "After studying our own chart, we can move on to the charts of close friends and family members.", hi: "अपने स्वयं के चार्ट का अध्ययन करने के बाद, हम करीबी दोस्तों और परिवार के सदस्यों के चार्ट पर आगे बढ़ सकते हैं।", ja: "自分自身のチャートを研究した後、親しい友人や家族のチャートに進むことができます。", ko: "자신의 차트를 공부한 후 가까운 친구, 가족의 차트로 넘어갈 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "This allows us to compare their life experiences with the indications shown in their charts.", hi: "यह हमें उनके जीवन के अनुभवों की तुलना उनके चार्ट में दिखाए गए संकेतों से करने की अनुमति देता है।", ja: "これにより、彼らの人生経験をグラフに示されている兆候と比較することができます。", ko: "이를 통해 우리는 그들의 삶의 경험을 차트에 표시된 표시와 비교할 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "At the same time, we should remember that Jyotish is dynamic. Some events promised by Mahadashas may not yet have manifested in younger individuals.", hi: "साथ ही हमें यह याद रखना चाहिए कि ज्योतिष गतिशील है। महादशा द्वारा वादा की गई कुछ घटनाएं अभी तक युवा व्यक्तियों में प्रकट नहीं हुई हैं।", ja: "同時に、ジョーティッシュはダイナミックであることを覚えておく必要があります。マハダシャーによって約束されたいくつかの出来事は、若い人たちにはまだ現れていないかもしれません。", ko: "동시에 우리는 Jyotish가 역동적이라는 것을 기억해야 합니다. Mahadashas가 약속한 일부 사건은 젊은 개인에게는 아직 나타나지 않았을 수도 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Many books teach chart interpretation through the charts of famous people.", hi: "कई किताबें प्रसिद्ध लोगों के चार्ट के माध्यम से चार्ट व्याख्या सिखाती हैं।", ja: "著名人のチャートを通じてチャートの解釈を教える本は数多くあります。", ko: "많은 책에서 유명인의 차트를 통해 차트 해석을 가르칩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Personally, I find this less useful because our knowledge of the full lives of celebrities, politicians, sports figures, and other public personalities is limited. Much of what we know about them has been filtered through public relations teams.", hi: "व्यक्तिगत रूप से, मुझे यह कम उपयोगी लगता है क्योंकि मशहूर हस्तियों, राजनेताओं, खेल हस्तियों और अन्य सार्वजनिक हस्तियों के संपूर्ण जीवन के बारे में हमारा ज्ञान सीमित है। हम उनके बारे में जो कुछ भी जानते हैं वह जनसंपर्क टीमों के माध्यम से फ़िल्टर किया गया है।", ja: "個人的には、有名人、政治家、スポーツ選手、その他の著名人の生涯に関する知識が限られているため、これはあまり役に立たないと思います。彼らについて私たちが知っていることの多くは、広報チームを通じて濾過されています。", ko: "개인적으로 나는 유명인, 정치인, 스포츠 인물 및 기타 유명인의 전체 삶에 대한 우리의 지식이 제한되어 있기 때문에 이것이 덜 유용하다고 생각합니다. 우리가 그들에 대해 알고 있는 대부분은 홍보팀을 통해 필터링되었습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "For this reason, friends, family members, and people we know well often provide better examples when beginning chart interpretation. Their charts are also more representative of ordinary life.", hi: "इस कारण से, दोस्त, परिवार के सदस्य और जिन लोगों को हम अच्छी तरह से जानते हैं, वे अक्सर चार्ट की व्याख्या शुरू करते समय बेहतर उदाहरण प्रदान करते हैं। उनके चार्ट भी सामान्य जीवन के अधिक प्रतिनिधि हैं।", ja: "このため、チャートの解釈を始める際には、友人、家族、よく知っている人がより良い例を提供してくれることがよくあります。彼らのグラフは、日常生活をよりよく表しています。", ko: "그렇기 때문에 친구, 가족, 우리가 잘 아는 사람들이 차트 해석을 시작할 때 더 좋은 예를 제시하는 경우가 많습니다. 그들의 차트는 또한 평범한 삶을 더 잘 대표합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Here are some useful questions to keep in mind when examining your own chart or someone else's:", hi: "अपने या किसी और के चार्ट की जांच करते समय ध्यान में रखने योग्य कुछ उपयोगी प्रश्न यहां दिए गए हैं:", ja: "自分や他の人のチャートを調べるときに覚えておくと役立つ質問がいくつかあります。", ko: "다음은 자신의 차트나 다른 사람의 차트를 검토할 때 염두에 두어야 할 몇 가지 유용한 질문입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• How accurate is the recorded birth-time? Has it been documented somewhere?", hi: "• दर्ज किया गया जन्म-समय कितना सही है? क्या इसका कहीं दस्तावेजीकरण किया गया है?", ja: "• 記録された出生時間はどの程度正確ですか?どこかに文書化されていますか？", ko: "• 기록된 출생 시간은 얼마나 정확합니까? 어딘가에 문서화되어 있습니까?",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Are there any specific issues or current problems being experienced?", hi: "• क्या कोई विशिष्ट समस्याएँ या वर्तमान समस्याएँ अनुभव की जा रही हैं?", ja: "• 何か特定の問題や現在発生している問題はありますか?", ko: "• 특정 문제나 현재 겪고 있는 문제가 있습니까?",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Can planetary imbalances or chart factors be identified that relate to these concerns?", hi: "• क्या ग्रहों के असंतुलन या चार्ट कारकों की पहचान की जा सकती है जो इन चिंताओं से संबंधित हैं?", ja: "• これらの懸念に関連する惑星の不均衡やチャート要因を特定できるか？", ko: "• 이러한 우려와 관련된 행성 불균형이나 차트 요인을 식별할 수 있습니까?",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Which planetary remedies might be appropriate?", hi: "• कौन से ग्रह उपाय उपयुक्त हो सकते हैं?", ja: "• どの惑星の治療法が適切でしょうか?", ko: "• 어떤 행성 치료법이 적절할 수 있습니까?",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Footnotes", hi: "फुटनोट", ja: "脚注", ko: "각주",}
      },
      {
        type: "paragraph",
        text: {
          en: "[1] The question I asked ChatGPT was:", hi: "[1] मैंने चैटजीपीटी से जो प्रश्न पूछा वह था:", ja: "[1] ChatGPT に尋ねた質問は次のとおりです。", ko: "[1] 내가 ChatGPT에 물어본 질문은 다음과 같습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "\"Can AI act as a mentor to someone studying Jyotish?\"", hi: "\"क्या एआई ज्योतिष का अध्ययन करने वाले किसी व्यक्ति के लिए एक सलाहकार के रूप में कार्य कर सकता है?\"", ja: "「AI はジョーティッシュ語を勉強している人の指導者として機能することができますか?」", ko: "\"AI가 Jyotish를 공부하는 사람에게 멘토 역할을 할 수 있습니까?\"",}
      },
      {
        type: "paragraph",
        text: {
          en: "The answer I received was:", hi: "मुझे जो उत्तर मिला वह था:", ja: "私が受け取った答えは次のとおりです。", ko: "제가 받은 답변은 다음과 같습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "\"AI can provide information, answer questions, and assist in learning various topics, including Jyotish (Vedic astrology). However, it's important to note that AI, including myself, doesn't possess personal experiences, intuition, or the ability to provide subjective insights in the same way a human mentor might.", hi: "\"एआई जानकारी प्रदान कर सकता है, सवालों के जवाब दे सकता है और ज्योतिष (वैदिक ज्योतिष) सहित विभिन्न विषयों को सीखने में सहायता कर सकता है। हालांकि, यह ध्यान रखना महत्वपूर्ण है कि एआई, जिसमें मैं भी शामिल हूं, के पास व्यक्तिगत अनुभव, अंतर्ज्ञान या व्यक्तिपरक अंतर्दृष्टि प्रदान करने की क्षमता नहीं है, जैसा कि एक मानव गुरु के पास हो सकता है।", ja: "「AI は、情報を提供したり、質問に答えたり、ジョーティッシュ (ヴェーダ占星術) を含むさまざまなトピックの学習を支援したりできます。ただし、私を含む AI は、人間のメンターのように個人的な経験、直観、または主観的な洞察を提供する能力を持たないことに注意することが重要です。", ko: "\"AI는 정보를 제공하고, 질문에 답하고, 조티시(베다 점성술)를 포함한 다양한 주제를 학습하는 데 도움을 줄 수 있습니다. 그러나 저를 포함한 AI는 인간 멘토와 같은 방식으로 개인적인 경험, 직관 또는 주관적인 통찰력을 제공하는 능력을 갖고 있지 않다는 점에 유의하는 것이 중요합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "If you're studying Jyotish and seeking guidance, it's advisable to complement AI resources with human mentors who have practical experience in the field. A human mentor can offer personalised advice, share their experiences, and provide a deeper understanding of the nuances of Jyotish that might not be covered by AI.", hi: "यदि आप ज्योतिष का अध्ययन कर रहे हैं और मार्गदर्शन प्राप्त कर रहे हैं, तो यह सलाह दी जाती है कि एआई संसाधनों को उन मानव गुरुओं के साथ पूरक करें जिनके पास क्षेत्र में व्यावहारिक अनुभव है। एक मानव सलाहकार व्यक्तिगत सलाह दे सकता है, अपने अनुभव साझा कर सकता है, और ज्योतिष की बारीकियों की गहरी समझ प्रदान कर सकता है जो एआई द्वारा कवर नहीं की जा सकती हैं।", ja: "ジョーティッシュを勉強していて指導を求めている場合は、その分野での実践経験を持つ人間のメンターで AI リソースを補完することをお勧めします。人間のメンターは、個人に合わせたアドバイスを提供し、経験を共有し、AI ではカバーできない可能性のあるジョーティッシュのニュアンスをより深く理解できるようにします。", ko: "Jyotish를 공부하고 지도를 구하는 경우 해당 분야에서 실무 경험이 있는 인간 멘토로 AI 리소스를 보완하는 것이 좋습니다. 인간 멘토는 맞춤형 조언을 제공하고, 자신의 경험을 공유하며, AI가 다룰 수 없는 Jyotish의 뉘앙스에 대한 더 깊은 이해를 제공할 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "AI can be a valuable tool for learning, researching, and practising Jyotish, but for a holistic and personalised learning experience, combining AI resources with guidance from experienced practitioners is often the most effective approach.\"", hi: "ज्योतिष सीखने, शोध करने और अभ्यास करने के लिए एआई एक मूल्यवान उपकरण हो सकता है, लेकिन समग्र और व्यक्तिगत सीखने के अनुभव के लिए, अनुभवी चिकित्सकों के मार्गदर्शन के साथ एआई संसाधनों का संयोजन अक्सर सबसे प्रभावी दृष्टिकोण होता है।\"", ja: "AI は、ジョーティッシュの学習、研究、実践にとって貴重なツールとなり得ますが、総合的でパーソナライズされた学習体験を得るには、AI リソースと経験豊富な実践者からの指導を組み合わせることが、多くの場合最も効果的なアプローチとなります。」", ko: "AI는 Jyotish를 학습하고, 연구하고, 실천하는 데 유용한 도구가 될 수 있지만, 총체적이고 개인화된 학습 경험을 위해서는 AI 리소스와 숙련된 실무자의 지침을 결합하는 것이 가장 효과적인 접근 방식인 경우가 많습니다.\"",}
      }
    ]
  },
  {
    id: "birth-time-errors",
    section: "introduction",
    title: {
      en: "Birth-time Errors", hi: "जन्म-समय की त्रुटियाँ", ja: "出生時間エラー", ko: "출생 시간 오류",},
    related: [
      "mahadashas",
      "transits",
      "nakshatras-stellar-1",
      "planetary-antidotes"
    ],
    blocks: [
      {
        type: "paragraph",
        text: {
          en: "Summary: Discussing the implications of birth-time errors for correctly determining the Ascendant, prescribing planetary antidotes, calculating Mahadasha starting times, possible errors in Nakshatra allocation, and chart rectification techniques used to establish an accurate birth-time.", hi: "सारांश: लग्न को सही ढंग से निर्धारित करने के लिए जन्म-समय की त्रुटियों के निहितार्थ पर चर्चा करना, ग्रहों के मारक का निर्धारण करना, महादशा के शुरुआती समय की गणना करना, नक्षत्र आवंटन में संभावित त्रुटियां, और सटीक जन्म-समय स्थापित करने के लिए उपयोग की जाने वाली चार्ट सुधार तकनीकों पर चर्चा करना।", ja: "概要: アセンダントの正確な決定、惑星への対処法の処方、マハダシャーの開始時間の計算、ナクシャトラの割り当てで起こり得るエラー、正確な出生時間を確立するために使用されるチャート修正技術に対する出生時間の誤差の影響について議論します。", ko: "요약: 승천자를 올바르게 결정하기 위한 출생 시간 오류의 의미, 행성 해독제 처방, 마하다샤 시작 시간 계산, 나크샤트라 할당에서 발생할 수 있는 오류 및 정확한 출생 시간을 설정하는 데 사용되는 차트 수정 기술에 대해 논의합니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Consequences of Birth-time Errors for Chart Interpretation", hi: "चार्ट व्याख्या के लिए जन्म-समय की त्रुटियों के परिणाम", ja: "チャートの解釈における出生時間エラーの影響", ko: "차트 해석에 대한 출생 시간 오류의 결과",}
      },
      {
        type: "paragraph",
        text: {
          en: "Do birth-time errors really matter?", hi: "क्या जन्म-समय की त्रुटियाँ वास्तव में मायने रखती हैं?", ja: "出生時間の誤差は本当に重要ですか?", ko: "출생 시간 오류가 정말 중요합니까?",}
      },
      {
        type: "paragraph",
        text: {
          en: "In Vedic Astrology, the answer is a very definite \"Yes.\"", hi: "वैदिक ज्योतिष में, उत्तर बिल्कुल निश्चित है \"हाँ।\"", ja: "ヴェーダ占星術では、答えは明確に「はい」です。", ko: "베다 점성술에서 대답은 매우 확실하게 \"예\"입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Inaccurate birth-times can have serious consequences, both for correct chart interpretation and for the advice given to clients.", hi: "ग़लत जन्म-समय के गंभीर परिणाम हो सकते हैं, चार्ट की सही व्याख्या और ग्राहकों को दी गई सलाह दोनों पर।", ja: "出生時間が不正確であると、正しいチャートの解釈とクライアントへのアドバイスの両方に重大な影響を与える可能性があります。", ko: "부정확한 출생 시간은 올바른 차트 해석과 고객에게 제공되는 조언 모두에 심각한 결과를 초래할 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Most planets move relatively slowly through the zodiac. For example, the Sun takes approximately one day to move through one degree of arc. However, this is not true of the Moon, which moves through one degree of the zodiac in less than two hours. The same applies to the Ascendant—the zodiac sign appearing to rise on the eastern horizon at the time of birth.", hi: "अधिकांश ग्रह राशि चक्र में अपेक्षाकृत धीमी गति से चलते हैं। उदाहरण के लिए, सूर्य को एक डिग्री चाप से गुजरने में लगभग एक दिन लगता है। हालाँकि, यह चंद्रमा के बारे में सच नहीं है, जो दो घंटे से भी कम समय में राशि चक्र के एक डिग्री से गुजरता है। यही बात लग्न पर भी लागू होती है - वह राशि जो जन्म के समय पूर्वी क्षितिज पर उभरती हुई दिखाई देती है।", ja: "ほとんどの惑星は黄道帯の中を比較的ゆっくりと移動します。たとえば、太陽は 1 度の弧を移動するのに約 1 日かかります。ただし、これは月には当てはまりません。月は 2 時間未満で黄道帯を 1 度移動します。同じことがアセンダントにも当てはまります。出生時に東の地平線に昇って見える星座です。", ko: "대부분의 행성은 황도대를 통해 상대적으로 천천히 움직입니다. 예를 들어, 태양이 1도 호를 이동하는 데 약 하루가 걸립니다. 그러나 달의 경우에는 그렇지 않습니다. 달은 2시간 이내에 황도대의 1도를 이동합니다. 태어날 때 동쪽 지평선에 떠오르는 것처럼 보이는 황도대 별자리인 어센던트(Ascendant)에도 동일하게 적용됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Unfortunately, both the precise position of the Moon and the correct determination of the Ascendant play an absolutely crucial role in Vedic Astrology.", hi: "दुर्भाग्य से, चंद्रमा की सटीक स्थिति और लग्न का सही निर्धारण दोनों ही वैदिक ज्योतिष में अत्यंत महत्वपूर्ण भूमिका निभाते हैं।", ja: "残念ながら、月の正確な位置とアセンダントの正確な決定の両方が、ヴェーダ占星術において極めて重要な役割を果たします。", ko: "불행하게도 달의 정확한 위치와 승천자의 정확한 결정은 베다 점성술에서 절대적으로 중요한 역할을 합니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Implications of Birth-time Errors in Identifying Ascendant (Lagna)", hi: "लग्न की पहचान में जन्म-समय की त्रुटियों के निहितार्थ", ja: "アセンダント（ラグナ）の識別における出生時間エラーの影響", ko: "승천자(Lagna) 식별에 있어서 출생 시간 오류의 의미",}
      },
      {
        type: "paragraph",
        text: {
          en: "There are twelve zodiac signs and twenty-four hours in a day, meaning that the Ascendant changes, on average, every two hours.", hi: "एक दिन में बारह राशियाँ और चौबीस घंटे होते हैं, जिसका अर्थ है कि लग्न औसतन हर दो घंटे में बदलता है।", ja: "黄道帯は 12 個あり、1 日は 24 時間あります。つまり、アセンダントは平均して 2 時間ごとに変わります。", ko: "12개의 황도대 별자리가 있고 하루는 24시간입니다. 이는 승천자가 평균 2시간마다 바뀐다는 것을 의미합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "However, because of the complex three-dimensional geometry of the rotating Earth—whose axis is tilted by approximately 23 degrees relative to its orbit around the Sun—the Ascendant can sometimes change in less than one hour. This depends upon factors such as latitude, time of day, and geographical location.", hi: "हालाँकि, घूमती पृथ्वी की जटिल त्रि-आयामी ज्यामिति के कारण - जिसकी धुरी सूर्य के चारों ओर इसकी कक्षा के सापेक्ष लगभग 23 डिग्री झुकी हुई है - लग्न कभी-कभी एक घंटे से भी कम समय में बदल सकता है। यह अक्षांश, दिन का समय और भौगोलिक स्थिति जैसे कारकों पर निर्भर करता है।", ja: "ただし、回転する地球の複雑な 3 次元幾何学形状 (その軸は太陽の周りの軌道に対して約 23 度傾いている) のため、アセンダントは 1 時間以内に変化することがあります。これは、緯度、時刻、地理的位置などの要因によって異なります。", ko: "그러나 자전하는 지구의 복잡한 3차원 기하학으로 인해(태양 주위의 궤도에 비해 축이 약 23도 기울어져 있기 때문에) 어센던트는 때때로 1시간 이내에 바뀔 수 있습니다. 이는 위도, 시간, 지리적 위치 등의 요인에 따라 달라집니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Note: When we use the term Ascendant, we are referring to the rising sign itself, regardless of the exact degree of the horizon projected onto that sign.", hi: "ध्यान दें: जब हम आरोही शब्द का उपयोग करते हैं, तो हम बढ़ते हुए चिन्ह का ही उल्लेख कर रहे होते हैं, भले ही उस चिन्ह पर प्रक्षेपित क्षितिज की सटीक डिग्री कुछ भी हो।", ja: "注: アセンダントという用語を使用するときは、そのラーシに投影される地平線の正確な度合いに関係なく、上昇ラーシ自体を指します。", ko: "참고: 어센던트라는 용어를 사용할 때는 해당 별자리에 투영된 지평선의 정확한 정도에 관계없이 상승 별자리 자체를 의미합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "An inaccurate birth-time can be very problematic because it may result in an astrologer identifying the wrong Ascendant altogether.", hi: "गलत जन्म समय बहुत समस्याग्रस्त हो सकता है क्योंकि इसके परिणामस्वरूप ज्योतिषी पूरी तरह से गलत लग्न की पहचान कर सकता है।", ja: "出生時間が不正確であると、占星術師がまったく間違ったアセンダントを特定してしまう可能性があるため、非常に問題となる可能性があります。", ko: "부정확한 출생 시간은 점성가가 잘못된 승천자를 식별하는 결과를 초래할 수 있기 때문에 매우 문제가 될 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Birth-time errors can produce several negative outcomes:", hi: "जन्म-समय की त्रुटियाँ कई नकारात्मक परिणाम उत्पन्न कर सकती हैं:", ja: "出生時間のエラーは、いくつかのマイナスの結果を引き起こす可能性があります。", ko: "출생 시간 오류는 여러 가지 부정적인 결과를 초래할 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Chart interpretation becomes unreliable because all interpretation is built around correctly identifying the first house, which corresponds exactly with the rising sign.", hi: "• चार्ट की व्याख्या अविश्वसनीय हो जाती है क्योंकि सभी व्याख्याएं पहले घर की सही पहचान करने के आसपास बनाई गई हैं, जो कि बढ़ते संकेत के साथ बिल्कुल मेल खाती है।", ja: "• すべての解釈は、上昇サインに正確に対応する最初のハウスを正確に特定することに基づいて構築されているため、チャートの解釈は信頼できなくなります。", ko: "• 차트 해석은 상승 표시와 정확히 일치하는 첫 번째 하우스를 정확하게 식별하는 것을 중심으로 모든 해석이 이루어지기 때문에 신뢰할 수 없게 됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Functional benefic and functional malefic planets may be identified incorrectly.", hi: "• कार्यात्मक शुभ और क्रियाशील अशुभ ग्रहों की गलत पहचान हो सकती है।", ja: "• 機能的吉星および機能的凶星は、誤って識別される可能性があります。", ko: "• 기능적 이익 행성과 기능적 흉성 행성이 잘못 식별될 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Planetary antidotes or remedies may be prescribed incorrectly, potentially doing more harm than good.", hi: "• ग्रह संबंधी मारक औषधियां या उपचार गलत तरीके से निर्धारित किए जा सकते हैं, जिससे संभावित रूप से फायदे की बजाय अधिक नुकसान हो सकता है।", ja: "• 惑星への対処法や治療法は誤って処方される可能性があり、利益よりも害を及ぼす可能性があります。", ko: "• 행성의 해독제나 치료법이 잘못 처방되어 잠재적으로 득보다 실이 더 많을 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "If the actual Ascendant degree is positioned near the middle of a sign, perhaps around 15 degrees, there is usually some tolerance for birth-time errors without the Ascendant sign itself changing. This is good news.", hi: "यदि वास्तविक लग्न की डिग्री किसी राशि के मध्य में स्थित है, शायद 15 डिग्री के आसपास, तो आमतौर पर लग्न राशि में बदलाव किए बिना जन्म-समय की त्रुटियों के लिए कुछ सहनशीलता होती है। यह अच्छी खबर है.", ja: "実際のアセンダント度がサインの中央近く、おそらく約 15 度に位置する場合、通常、アセンダント サイン自体が変化することなく、出生時間の誤差がある程度許容されます。これは良いニュースです。", ko: "실제 어센던트 등급이 표지판의 중앙 근처(약 15도 정도)에 위치하는 경우 일반적으로 어센던트 표지판 자체가 변경되지 않으면서 출생 시간 오류에 대한 어느 정도 허용 범위가 있습니다. 이것은 좋은 소식입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "The real difficulties arise when the Ascendant is close to a sign boundary, perhaps within five degrees of the next sign. In such situations, a difference of only a few minutes in birth-time can completely change the Ascendant and alter the location of the first house.", hi: "वास्तविक कठिनाइयाँ तब उत्पन्न होती हैं जब लग्न एक राशि की सीमा के करीब होता है, शायद अगली राशि के पाँच डिग्री के भीतर। ऐसी स्थिति में, जन्म समय में केवल कुछ मिनटों का अंतर लग्न को पूरी तरह से बदल सकता है और पहले घर के स्थान को बदल सकता है।", ja: "本当の困難は、アセンダントがサインの境界に近いとき、おそらく次のサインから 5 度以内にあるときに発生します。このような状況では、出生時間のわずか数分の違いがアセンダントを完全に変え、最初のハウスの位置を変える可能性があります。", ko: "진짜 어려움은 어센던트가 별자리 경계에 가까울 때, 아마도 다음 별자리에서 5도 이내일 때 발생합니다. 그러한 상황에서는 탄생 시간의 단 몇 분의 차이만으로도 어센던트가 완전히 바뀌고 첫 번째 하우스의 위치가 바뀔 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "That is definitely bad news.", hi: "यह निश्चित रूप से बुरी खबर है.", ja: "それは間違いなく悪いニュースです。", ko: "확실히 나쁜 소식이네요.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Implications of Birth-time Errors in Prescribing Planetary Antidotes", hi: "ग्रहीय मारक औषधियाँ निर्धारित करने में जन्म-समय की त्रुटियों के निहितार्थ", ja: "惑星への対処法の処方における出生時の誤りの影響", ko: "행성 해독제 처방에 있어 출생 시 오류의 의미",}
      },
      {
        type: "paragraph",
        text: {
          en: "An incorrect birth-time may result in remedies being prescribed that worsen a person's situation rather than improve it.", hi: "गलत जन्म समय के परिणामस्वरूप उपचार निर्धारित किया जा सकता है जो किसी व्यक्ति की स्थिति में सुधार के बजाय और खराब कर देता है।", ja: "出生時間が不正確であると、人の状況を改善するどころか悪化させる治療法が処方される可能性があります。", ko: "잘못된 출생 시간으로 인해 개인의 상황을 개선하기보다는 악화시키는 치료법이 처방될 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "In medicine, one of the most important principles is:", hi: "चिकित्सा में, सबसे महत्वपूर्ण सिद्धांतों में से एक है:", ja: "医学において最も重要な原則の 1 つは次のとおりです。", ko: "의학에서 가장 중요한 원칙 중 하나는 다음과 같습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "\"Do No Harm.\"", hi: "\"नुकसान न करें।\"", ja: "「危害を加えないでください。」", ko: "\"해를 끼치 지 마십시오.\"",}
      },
      {
        type: "paragraph",
        text: {
          en: "A Jyotish astrologer can inadvertently cause harm if they recommend strengthening a functional malefic planet through the use of gemstones or other remedies.", hi: "यदि कोई ज्योतिषी रत्नों या अन्य उपायों के माध्यम से किसी अशुभ ग्रह को मजबूत करने की सलाह देता है तो वह अनजाने में नुकसान पहुंचा सकता है।", ja: "ジョーティッシュの占星術師が、宝石やその他の治療法を使用して凶星の機能を強化することを勧めると、誤って害を及ぼす可能性があります。", ko: "Jyotish 점성가가 보석이나 기타 치료법을 사용하여 기능적인 흉성 행성을 강화하도록 권장하면 의도치 않게 해를 입힐 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "For example, suppose an astrologer uses a stated—but inaccurate—birth-time and calculates the Ascendant as Aries.", hi: "उदाहरण के लिए, मान लीजिए कि एक ज्योतिषी एक बताए गए-लेकिन गलत-जन्म-समय का उपयोग करता है और लग्न की गणना मेष के रूप में करता है।", ja: "たとえば、占星術師が、明示されているが不正確な出生時間を使用し、アセンダントを牡羊座として計算したとします。", ko: "예를 들어, 점성가가 명시되어 있지만 부정확한 출생 시간을 사용하고 승천자를 양자리로 계산한다고 가정해 보겠습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "In that case, it would be perfectly reasonable to recommend a yellow sapphire to strengthen Jupiter, since Jupiter rules the 9th and 12th houses for an Aries Ascendant.", hi: "उस स्थिति में, बृहस्पति को मजबूत करने के लिए पीले नीलम की सिफारिश करना पूरी तरह से उचित होगा, क्योंकि बृहस्पति मेष लग्न के लिए 9वें और 12वें घर पर शासन करता है।", ja: "その場合、木星は牡羊座のアセンダントの9室と12室を支配しているため、木星を強化するためにイエローサファイアを推奨するのは完全に合理的です。", ko: "이 경우 목성을 강화하기 위해 노란색 사파이어를 추천하는 것이 합리적입니다. 왜냐하면 목성은 양자리 승천자의 9하우스와 12하우스를 지배하기 때문입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "However, if the true birth-time places the Ascendant in the following sign, Taurus, the situation changes dramatically. Jupiter then becomes a strong functional malefic because it rules the 8th and 11th houses.", hi: "हालाँकि, यदि वास्तविक जन्म समय लग्न को निम्नलिखित राशि वृषभ में रखता है, तो स्थिति नाटकीय रूप से बदल जाती है। बृहस्पति तब एक मजबूत कार्यात्मक अशुभ ग्रह बन जाता है क्योंकि यह 8वें और 11वें घर पर शासन करता है।", ja: "しかし、本当の出生時間がアセンダントを次の星座であるおうし座に置く場合、状況は劇的に変化します。その後、木星は8室と11室を支配するため、強力な機能凶星になります。", ko: "그러나 실제 탄생 시간이 승천자를 다음 별자리인 황소자리에 위치시키면 상황은 극적으로 변합니다. 그러면 목성은 8하우스와 11하우스를 지배하기 때문에 강력한 기능적 흉성이 됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Strengthening such a planet with gemstones could therefore be highly undesirable.", hi: "इसलिए ऐसे ग्रह को रत्नों से मजबूत करना बेहद अवांछनीय हो सकता है।", ja: "したがって、そのような惑星を宝石で強化することは非常に望ましくない可能性があります。", ko: "따라서 보석으로 그러한 행성을 강화하는 것은 매우 바람직하지 않을 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "So, birth-time accuracy really does matter.", hi: "इसलिए, जन्म-समय की सटीकता वास्तव में मायने रखती है।", ja: "したがって、出生時間の正確性は非常に重要です。", ko: "따라서 출생 시간의 정확성이 정말 중요합니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Implications of Birth-time Errors in Mahadasha Timings", hi: "महादशा समय में जन्म-समय की त्रुटियों के निहितार्थ", ja: "マハダシャーのタイミングにおける出生時間の誤差の影響", ko: "Mahadasha 타이밍의 출생 시간 오류의 의미",}
      },
      {
        type: "paragraph",
        text: {
          en: "One of the unique features of Jyotish is the Mahadasha system of prediction, which helps determine both what is likely to happen and when those events may occur.", hi: "ज्योतिष की अनूठी विशेषताओं में से एक भविष्यवाणी की महादशा प्रणाली है, जो यह निर्धारित करने में मदद करती है कि क्या होने की संभावना है और वे घटनाएँ कब घटित हो सकती हैं।", ja: "ジョーティッシュのユニークな機能の 1 つは、マハダシャ予測システムです。これは、何が起こる可能性が高く、それらの出来事がいつ起こるかを判断するのに役立ちます。", ko: "Jyotish의 독특한 기능 중 하나는 Mahadasha 예측 시스템으로, 일어날 가능성이 있는 일과 해당 사건이 발생할 시기를 결정하는 데 도움이 됩니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "The calculation of Mahadasha and Antardasha starting times depends directly upon the Moon's position in the birth-chart.", hi: "महादशा और अंतर्दशा प्रारंभ समय की गणना सीधे जन्म कुंडली में चंद्रमा की स्थिति पर निर्भर करती है।", ja: "マハダシャーとアンタルダシャーの開始時間の計算は、出生図における月の位置に直接依存します。", ko: "Mahadasha와 Antardasha의 시작 시간 계산은 출생 차트에서 달의 위치에 직접적으로 의존합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Consequently, accurate birth data is essential.", hi: "नतीजतन, सटीक जन्म डेटा आवश्यक है।", ja: "したがって、正確な出生データが不可欠です。", ko: "따라서 정확한 출생 데이터가 필수적입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "For the longer Mahadashas—such as those of Venus, Saturn, or Rahu—even a birth-time error of only twenty minutes can shift the calculated Mahadasha starting time by approximately six months.", hi: "लंबी महादशाओं के लिए - जैसे कि शुक्र, शनि, या राहु की - यहां तक ​​कि केवल बीस मिनट की जन्म-समय की त्रुटि भी गणना की गई महादशा के प्रारंभ समय को लगभग छह महीने तक स्थानांतरित कर सकती है।", ja: "金星、土星、ラーフなどのより長いマハダシャーの場合、わずか 20 分の出生時間の誤差でも、計算されたマハダシャーの開始時刻が約 6 か月ずれる可能性があります。", ko: "금성, 토성 또는 라후와 같이 더 긴 마하다샤의 경우 출생 시간 오류가 20분만 있어도 계산된 마하다샤 시작 시간이 약 6개월 정도 이동할 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "A later actual birth-time than the recorded one means the Mahadasha period will begin earlier than calculated.", hi: "दर्ज समय से अधिक वास्तविक जन्म-समय का मतलब है कि महादशा अवधि गणना से पहले शुरू होगी।", ja: "実際の出生時間が記録された時間より遅いということは、マハダシャー期間が計算よりも早く始まることを意味します。", ko: "기록된 출생 시간보다 실제 출생 시간이 늦다는 것은 마하다샤 기간이 계산된 것보다 일찍 시작된다는 것을 의미합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Conversely, if the actual birth-time is earlier than recorded, the Mahadasha will begin later than predicted.", hi: "इसके विपरीत, यदि वास्तविक जन्म-समय दर्ज होने से पहले है, तो महादशा भविष्यवाणी की तुलना में बाद में शुरू होगी।", ja: "逆に、実際の出生時間が記録されている時間より早い場合、マハダシャーは予測よりも遅く始まります。", ko: "반대로 실제 출생 시간이 기록된 시간보다 빠르면 Mahadasha는 예상보다 늦게 시작됩니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Implications of Birth-time Errors in Nakshatras", hi: "नक्षत्रों में जन्म-समय की त्रुटियों का प्रभाव", ja: "ナクシャトラにおける出生時間の誤差の影響", ko: "Nakshatras의 출생 시간 오류의 의미",}
      },
      {
        type: "paragraph",
        text: {
          en: "A professional Jyotish astrologer will make use of the Moon's position within the lunar mansions, known as Nakshatras.", hi: "एक पेशेवर ज्योतिषी चंद्र गृहों, जिन्हें नक्षत्र कहा जाता है, में चंद्रमा की स्थिति का उपयोग करेगा।", ja: "プロのジョーティッシュ師は、ナクシャトラとして知られる月の邸宅内の月の位置を利用します。", ko: "전문 Jyotish 점성가는 Nakshatras로 알려진 달 저택 내에서 달의 위치를 ​​활용할 것입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Each Nakshatra contributes its own distinctive flavour and influence to the birth-chart.", hi: "प्रत्येक नक्षत्र जन्म कुंडली में अपना विशिष्ट स्वाद और प्रभाव डालता है।", ja: "それぞれのナクシャトラは、出生図に独自の独特の風味と影響を与えます。", ko: "각 나크샤트라는 출생 차트에 고유한 풍미와 영향력을 제공합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Potential problems arise when the recorded birth-time places the Moon very close to the boundary between two Nakshatras.", hi: "संभावित समस्याएँ तब उत्पन्न होती हैं जब दर्ज जन्म समय चंद्रमा को दो नक्षत्रों के बीच की सीमा के बहुत करीब रखता है।", ja: "記録された出生時間が、月が 2 つのナクシャトラの境界に非常に近い位置にある場合、潜在的な問題が発生します。", ko: "기록된 출생 시간으로 인해 달이 두 낙샤트라 사이의 경계에 매우 가깝게 위치할 때 잠재적인 문제가 발생합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "In such situations, even a small birth-time error may result in the Moon being assigned to the wrong Nakshatra.", hi: "ऐसी स्थितियों में, जन्म-समय की एक छोटी सी त्रुटि के परिणामस्वरूप भी चंद्रमा को गलत नक्षत्र सौंपा जा सकता है।", ja: "このような状況では、出生時間のわずかな誤差でも、月が間違ったナクシャトラに割り当てられる可能性があります。", ko: "이러한 상황에서는 작은 출생 시간 오류라도 달이 잘못된 나크샤트라에 할당될 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "An experienced astrologer will watch carefully for this possibility and assess it alongside the other birth-time considerations discussed above.", hi: "एक अनुभवी ज्योतिषी इस संभावना को ध्यान से देखेगा और ऊपर चर्चा किए गए अन्य जन्म-समय के विचारों के साथ-साथ इसका आकलन करेगा।", ja: "経験豊富な占星術師は、この可能性を注意深く観察し、上で説明した他の出生時間の考慮事項と並行して評価します。", ko: "숙련된 점성가는 이러한 가능성을 주의 깊게 관찰하고 위에서 논의한 다른 출생 시간 고려 사항과 함께 이를 평가할 것입니다.",}
      },
      {
        type: "heading",
        level: 3,
        text: {
          en: "Chart Rectification – Techniques to Check Birth-time Accuracy", hi: "चार्ट सुधार - जन्म-समय की सटीकता की जांच करने की तकनीक", ja: "チャートの修正 – 出生時間の正確さをチェックするテクニック", ko: "차트 수정 – 출생 시간의 정확성을 확인하는 기술",}
      },
      {
        type: "paragraph",
        text: {
          en: "Professional Vedic astrologers are fully aware of the problems that inaccurate birth-times can create.", hi: "पेशेवर वैदिक ज्योतिषी उन समस्याओं से पूरी तरह परिचित हैं जो ग़लत जन्म-समय पैदा कर सकती हैं।", ja: "プロのヴェーダ占星術師は、不正確な出生時刻が引き起こす可能性のある問題を十分に認識しています。", ko: "전문 베다 점성가들은 부정확한 출생 시간이 초래할 수 있는 문제를 충분히 알고 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "For this reason, they continually compare what they observe in a person's chart with actual life events and the timing of those events.", hi: "इस कारण से, वे किसी व्यक्ति के चार्ट में जो कुछ भी देखते हैं उसकी तुलना वास्तविक जीवन की घटनाओं और उन घटनाओं के समय से करते रहते हैं।", ja: "このため、彼らは人のチャートで観察したことを、実際の人生の出来事やそれらの出来事のタイミングと継続的に比較します。", ko: "이러한 이유로 그들은 개인 차트에서 관찰한 내용과 실제 생활 사건 및 해당 사건의 시기를 지속적으로 비교합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "An astrologer may ask clients about:", hi: "एक ज्योतिषी ग्राहकों से इनके बारे में पूछ सकता है:", ja: "占星術師はクライアントに次のような質問をすることがあります。", ko: "점성가는 고객에게 다음 사항에 대해 질문할 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Marriage dates", hi: "• विवाह की तारीखें", ja: "• 結婚日", ko: "• 결혼 날짜",}
      },
      {
        type: "paragraph",
        text: {
          en: "• The birth dates of children", hi: "• बच्चों की जन्मतिथि", ja: "• 子供の生年月日", ko: "• 자녀의 생년월일",}
      },
      {
        type: "paragraph",
        text: {
          en: "• The timing of parental deaths", hi: "• माता-पिता की मृत्यु का समय", ja: "• 親の死亡のタイミング", ko: "• 부모의 사망 시기",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Health issues", hi: "• स्वास्थ्य के मुद्दों", ja: "• 健康上の問題", ko: "• 건강 문제",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Financial circumstances", hi: "• वित्तीय परिस्थितियाँ", ja: "• 財務状況", ko: "• 재정 상황",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Relationships", hi: "• रिश्ते", ja: "• 人間関係", ko: "• 관계",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Career developments", hi: "• कैरियर विकास", ja: "• キャリア開発", ko: "• 경력 개발",}
      },
      {
        type: "paragraph",
        text: {
          en: "• Spiritual interests and aspirations", hi: "• आध्यात्मिक रुचियाँ और आकांक्षाएँ", ja: "• 精神的な興味と願望", ko: "• 영적인 관심과 열망",}
      },
      {
        type: "paragraph",
        text: {
          en: "If there are major discrepancies between what the chart appears to indicate and what has actually happened in real life, birth-time errors become a strong possibility.", hi: "यदि चार्ट जो दर्शाता है और वास्तविक जीवन में जो हुआ है, उसके बीच बड़ी विसंगतियां हैं, तो जन्म-समय की त्रुटियां एक मजबूत संभावना बन जाती हैं।", ja: "グラフが示しているように見えることと、現実の生活で実際に起こったことの間に大きな矛盾がある場合、出生時間の誤りの可能性が高くなります。", ko: "차트에 표시된 내용과 실제 생활에서 실제로 발생한 내용 사이에 큰 차이가 있는 경우 출생 시간 오류가 발생할 가능성이 높습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Jyotish is such a powerful predictive system that skilled astrologers can often work backwards from real-life events to determine a more accurate birth-time.", hi: "ज्योतिष इतनी शक्तिशाली भविष्यवाणी प्रणाली है कि कुशल ज्योतिषी अक्सर अधिक सटीक जन्म-समय निर्धारित करने के लिए वास्तविक जीवन की घटनाओं से पीछे की ओर काम कर सकते हैं।", ja: "ジョーティッシュは非常に強力な予測システムであるため、熟練した占星術師は、現実の出来事から逆算して、より正確な出生時刻を決定することがよくあります。", ko: "Jyotish는 숙련된 점성가들이 종종 실제 사건에서 거꾸로 작업하여 보다 정확한 출생 시간을 결정할 수 있는 매우 강력한 예측 시스템입니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "They achieve this by analysing Mahadasha periods, Ascendant calculations, and other important timing factors.", hi: "वे महादशा अवधि, लग्न गणना और अन्य महत्वपूर्ण समय कारकों का विश्लेषण करके इसे प्राप्त करते हैं।", ja: "彼らは、マハダシャー期間、アセンダントの計算、その他の重要なタイミング要素を分析することでこれを実現します。", ko: "그들은 Mahadasha 기간, Ascendant 계산 및 기타 중요한 타이밍 요소를 분석하여 이를 달성합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "This process is known as Birth-time Rectification or simply Chart Rectification, and it requires considerable skill and experience.", hi: "इस प्रक्रिया को जन्म-समय सुधार या केवल चार्ट सुधार के रूप में जाना जाता है, और इसके लिए काफी कौशल और अनुभव की आवश्यकता होती है।", ja: "このプロセスは出生時修正または単にチャート修正として知られており、かなりのスキルと経験が必要です。", ko: "이 프로세스는 Birth-time Rectification 또는 간단히 Chart Rectification으로 알려져 있으며 상당한 기술과 경험이 필요합니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Modern Jyotish software has made this process much faster than it once was. Astrologers can quickly generate charts for a range of possible birth-times and compare the resulting Ascendants and planetary configurations.", hi: "आधुनिक ज्योतिष सॉफ्टवेयर ने इस प्रक्रिया को पहले की तुलना में बहुत तेज बना दिया है। ज्योतिषी संभावित जन्म-समय की एक श्रृंखला के लिए जल्दी से चार्ट तैयार कर सकते हैं और परिणामी लग्न और ग्रह विन्यास की तुलना कर सकते हैं।", ja: "最新の Jotish ソフトウェアにより、このプロセスが以前よりもはるかに高速になりました。占星術師は、考えられるさまざまな出生時刻のチャートを迅速に作成し、その結果得られるアセンダントと惑星の配置を比較できます。", ko: "최신 Jyotish 소프트웨어는 이 프로세스를 이전보다 훨씬 빠르게 만들었습니다. 점성가는 가능한 출생 시간 범위에 대한 차트를 신속하게 생성하고 결과적인 승천자와 행성 구성을 비교할 수 있습니다.",}
      },
      {
        type: "paragraph",
        text: {
          en: "Mahadasha calculations can also be performed rapidly, making it much easier to identify the birth-time that best matches the client's life history.", hi: "महादशा गणना भी तेजी से की जा सकती है, जिससे ग्राहक के जीवन इतिहास से सबसे मेल खाने वाले जन्म समय की पहचान करना बहुत आसान हो जाता है।", ja: "マハダシャーの計算も迅速に実行できるため、クライアントの生活史に最も一致する出生時刻を特定するのがはるかに簡単になります。", ko: "Mahadasha 계산도 신속하게 수행할 수 있으므로 고객의 생애 이력과 가장 일치하는 출생 시간을 훨씬 쉽게 식별할 수 있습니다.",}
      }
    ]
  }
];
