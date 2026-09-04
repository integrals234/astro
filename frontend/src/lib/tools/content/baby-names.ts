import type { ToolLongForm } from "./types";

/**
 * Long-form body for /tools/baby-names.
 *
 * Two traditions are in play here, not one — the classical nakshatra-pada
 * naming rule, and numerology — and the risk is presenting them as if they
 * were a single system that either agrees or is "wrong." This body keeps
 * them explicitly separate, the same honesty pattern `numerology-copy.ts`'s
 * `provenance` line already uses for the numerology panel on its own.
 */
export const babyNamesLongForm: ToolLongForm = {
  slug: "baby-names",
  sections: [
    {
      heading: {
        ja: "ナームカラン（命名）の仕組み",
        en: "How Naam Karan works",
        hi: "नामकरण कैसे काम करता है",
        ko: "남카란(작명)은 어떻게 작동하는가",
      },
      body: [
        {
          ja: "生まれたときの月の位置が、あなたの赤ちゃんの生まれナクシャトラを決めます。27ある月宿はそれぞれ4つのパダ（4分の1）に分かれ、合計108のパダそれぞれに、古典テキストが定める特定のサンスクリット音節（アクシャラ）が割り当てられています。赤ちゃんがどのパダに生まれたかがわかれば、名前が始まるべき伝統的な音がわかります。",
          en: "The Moon's position at the moment of birth determines your baby's Janma Nakshatra — the lunar mansion the Moon occupied. Each of the 27 nakshatras divides into 4 padas (quarters), and classical texts assign a specific Sanskrit akshara (syllable) to each of the resulting 108 padas. Knowing which pada your baby was born under gives the traditional sound a name should start with.",
          hi: "जन्म के क्षण चंद्रमा की स्थिति आपके बच्चे का जन्म नक्षत्र तय करती है — वह चंद्र भवन जिसमें चंद्रमा उस समय था। 27 नक्षत्रों में से प्रत्येक 4 पादों (चतुर्थांशों) में बंटा है, और शास्त्रीय ग्रंथ इन 108 पादों में से प्रत्येक को एक विशिष्ट संस्कृत अक्षर देते हैं। यह जानना कि आपका बच्चा किस पाद में जन्मा, नाम के लिए पारंपरिक प्रारंभिक ध्वनि बताता है।",
          ko: "출생 순간 달의 위치가 아기의 출생 낙샤트라 — 달이 머문 달의 저택 — 를 결정합니다. 27개의 낙샤트라는 각각 4개의 파다(사분면)로 나뉘며, 고전 문헌은 그렇게 생긴 108개의 파다 각각에 특정한 산스크리트 음절(악샤라)을 배정합니다. 아기가 어느 파다에서 태어났는지 알면 이름이 시작해야 할 전통적인 소리를 알 수 있습니다.",
        },
        {
          ja: "この道具が向き合っているのは、その音節を実際に使える日本人名に変えるという部分です。日本語にはサンスクリット語の子音すべてに対応する音があるわけではないため（そり舌音や有気音、L音とR音の区別などがありません）、各アクシャラは文字どおりの転写ではなく、最も自然に近い日本語の頭音に結び付けています。命名の規則そのものは変わらず適用されますが、実際に呼ぶ名前は日本で自然に使えるものになります。",
          en: "Where this tool does real work is turning that syllable into a name that's actually usable in Japan. Japanese doesn't have a sound for every Sanskrit consonant — no retroflex series, no aspirated/unaspirated distinction, no separate L and R — so each akshara is bridged to the nearest natural Japanese onset rather than transliterated literally. The naming rule still applies exactly as written; the name you'd actually call your child is one that reads naturally in Japan.",
          hi: "यह उपकरण असल में जो काम करता है वह है उस अक्षर को एक ऐसे नाम में बदलना जो जापान में वास्तव में प्रयोग हो सके। जापानी में संस्कृत के हर व्यंजन के बराबर ध्वनि नहीं है — न मूर्धन्य वर्ण, न महाप्राण-अल्पप्राण भेद, न ही ल और र के बीच अलग ध्वनि — इसलिए हर अक्षर को शाब्दिक लिप्यंतरण के बजाय निकटतम स्वाभाविक जापानी ध्वनि से जोड़ा गया है। नामकरण नियम पूरी तरह वैसे ही लागू होता है, पर असल में पुकारा जाने वाला नाम जापान में स्वाभाविक रूप से पढ़ा जा सकता है।",
          ko: "이 도구가 실제로 하는 일은 그 음절을 일본에서 실제로 쓸 수 있는 이름으로 바꾸는 것입니다. 일본어에는 산스크리트어의 모든 자음에 대응하는 소리가 없습니다 — 권설음도, 유기음·무기음 구분도, L과 R의 구별도 없습니다 — 그래서 각 악샤라는 문자 그대로 옮기는 대신 가장 자연스러운 일본어 첫소리에 연결했습니다. 작명 규칙 자체는 그대로 적용되며, 실제로 부르게 될 이름은 일본에서 자연스럽게 읽히는 이름입니다.",
        },
      ],
    },
    {
      heading: {
        ja: "数秘術は、代わりではなく重ね合わせるものです",
        en: "Numerology is a layer, not a replacement",
        hi: "अंक ज्योतिष एक परत है, विकल्प नहीं",
        ko: "수비학은 대체가 아니라 겹쳐지는 레이어입니다",
      },
      body: [
        {
          ja: "ここで見せている数秘術スコアは、赤ちゃんの生年月日から求めたムーランク（本命数）とバギャンク（宿命数）に対して、それぞれの名前がどれだけ調和するかを示す、第二の独立した層です。ヴェーダ占星術そのものの一部ではなく、隣接する伝統として扱っています——サイトの数秘術ページと同じ立場です。表示される名前はすでにすべて正しい伝統的な音節から選ばれているため、スコアは音節の規則を上書きするものではなく、その中で名前を比べるための道具です。",
          en: "The numerology score shown here is a second, independent layer — how well each name harmonizes with the Mulank and Bhagyank derived from your baby's birth date. It's treated as a related but separate tradition, not part of Vedic astrology itself, the same stance this site's own numerology page takes. Every name shown has already been selected for starting with the correct traditional syllable, so the score never overrides that rule — it's a way of ranking names within it.",
          hi: "यहाँ दिखाया गया अंक ज्योतिष स्कोर एक दूसरी, स्वतंत्र परत है — कि हर नाम आपके बच्चे की जन्म तिथि से निकाले गए मूलांक और भाग्यांक के साथ कितना सामंजस्य रखता है। इसे वैदिक ज्योतिष का हिस्सा नहीं बल्कि एक संबंधित किंतु अलग परंपरा माना जाता है — ठीक वैसे ही जैसे इस साइट का अपना अंक ज्योतिष पृष्ठ मानता है। दिखाया गया हर नाम पहले से ही सही पारंपरिक अक्षर से शुरू होने के लिए चुना गया है, इसलिए स्कोर उस नियम को कभी अधिलेखित नहीं करता — यह उसके भीतर नामों को क्रमबद्ध करने का एक तरीका है।",
          ko: "여기 표시된 수비학 점수는 두 번째의 독립적인 층입니다 — 각 이름이 아기의 생년월일에서 도출한 물랑크·바갼크와 얼마나 조화로운지를 나타냅니다. 이는 베다 점성술 자체의 일부가 아니라 관련은 있지만 별개인 전통으로 다루며, 이 사이트의 수비학 페이지가 취하는 입장과 같습니다. 표시되는 모든 이름은 이미 올바른 전통 음절로 시작하도록 선택되었으므로, 점수가 그 규칙을 무시하는 일은 없습니다 — 그 안에서 이름의 순위를 매기는 방법일 뿐입니다.",
        },
      ],
    },
  ],
};
