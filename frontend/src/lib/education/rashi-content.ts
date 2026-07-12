import type { ContentBlock, RashiEntry } from "./types";
import { rashiImages } from "./asset-paths";
import { educationImages } from "./education-images";

export const rashisIntro = {
  en: "The twelve Rashis (zodiac signs) divide the 360° ecliptic into equal arcs of 30° each. Your birth date places the Sun in one Rashi, shaping temperament, strengths, and life themes — while the Moon sign, Ascendant (Lagna), and Nakshatra add further layers in Jyotish.", hi: "बारह राशियाँ 360° क्रांतिवृत्त को 30° के बराबर चापों में विभाजित करती हैं। आपकी जन्मतिथि सूर्य को एक राशि में रखती है, जो स्वभाव, शक्तियों और जीवन विषयों को आकार देती है - जबकि चंद्र राशि, लग्न और नक्षत्र ज्योतिष में और परतें जोड़ते हैं।", ja: "12のラーシ（星座）は黄道360度をそれぞれ30度ずつに分けます。生年月日によって太陽が置かれるラーシは気質や強み、人生のテーマを形づくります。月の星座、アセンダント（ラグナ）、ナクシャトラがさらに層を加えます。", ko: "12개의 라시(황도대 별자리)는 360° 황도를 각각 30°의 동일한 호로 나눕니다. 당신의 생년월일은 기질, 강점, 삶의 주제를 형성하는 하나의 라시(Rashi)에 태양을 위치시킵니다. 반면 달 별자리, 어센던트(라냐) 및 낙샤트라(Nakshatra)는 Jyotish에 더 많은 레이어를 추가합니다.",
};

export const rashisOverviewBlocks: ContentBlock[] = [
  {
    title: { en: "How Rashis Are Defined", hi: "राशियाँ कैसे परिभाषित की जाती हैं", ja: "ラーシの定義", ko: "Rashis가 정의되는 방법",},
    paragraphs: [
      {
        en: "The zodiac is a belt along the ecliptic divided into twelve equal signs of 30 degrees. The Sun's projection into a sign at birth is your solar Rashi — the sign most people know from their birthday. In a Kundli, every Graha occupies a Rashi, and the Ascendant sign colours how you meet the world.", hi: "राशि चक्र क्रांतिवृत्त के साथ एक बेल्ट है जो 30 डिग्री के बारह समान चिह्नों में विभाजित है। जन्म के समय एक राशि में सूर्य का प्रक्षेपण आपकी सौर राशि है - वह राशि जो अधिकांश लोग अपने जन्मदिन से जानते हैं। कुंडली में, प्रत्येक ग्रह एक राशि पर कब्जा करता है, और लग्न संकेत बताता है कि आप दुनिया से कैसे मिलते हैं।", ja: "黄道帯は12の等分された30度の星座に分かれます。出生時に太陽が射す星座がソーラーラーシ — 誕生日で知られる星座です。クンダリーではすべてのグラハがラーシに位置し、アセンダントは世界との出会い方を色づけます。", ko: "황도대는 황도를 따라 30도의 12개의 등호로 나누어진 띠입니다. 태어날 때 별자리에 태양이 투사하는 것은 태양 라시입니다. 이는 대부분의 사람들이 생일을 통해 알고 있는 별자리입니다. Kundli에서는 모든 Graha가 Rashi를 차지하고 Ascendant 기호는 세상을 만나는 방법을 나타냅니다.",
      },
      {
        en: "Each sign is ruled by a planet, belongs to an element, and carries distinct strengths, weaknesses, and talents. Differences in element and lordship shape natives differently — much like the Grahas themselves.", hi: "प्रत्येक चिन्ह एक ग्रह द्वारा शासित होता है, एक तत्व से संबंधित होता है, और अलग-अलग ताकत, कमजोरियां और प्रतिभा रखता है। तत्व और आधिपत्य में अंतर मूल निवासियों को अलग-अलग आकार देता है - स्वयं ग्रह की तरह।", ja: "各星座には支配星と元素があり、固有の強み・弱み・才能を持ちます。元素と支配星の違いが、グラハと同様に人を異なる形に育みます。", ko: "각 별자리는 행성에 의해 지배되고 원소에 속하며 뚜렷한 강점, 약점 및 재능을 가지고 있습니다. 요소와 영주권의 차이는 Grahas 자체와 마찬가지로 원주민을 다르게 형성합니다.",
      },
    ],
    image: {
      src: educationImages.howRashisDefined,
      alt: {
        en: "How rashis are defined in Jyotish", hi: "ज्योतिष में राशियों को कैसे परिभाषित किया जाता है", ja: "ジョーティッシュにおけるラーシの定義", ko: "Rashiis가 Jyotish에서 정의되는 방법",
      },
    },
  },
  {
    title: { en: "The Four Elements", hi: "चार तत्व", ja: "四元素", ko: "네 가지 요소",},
    paragraphs: [
      {
        en: "Rashis express the temperament of their element. Fire signs (Aries, Leo, Sagittarius) are spirited and initiating. Earth signs (Taurus, Virgo, Capricorn) are practical and enduring. Air signs (Gemini, Libra, Aquarius) are intellectual and connective. Water signs (Cancer, Scorpio, Pisces) are emotional and intuitive.", hi: "राशियाँ अपने तत्व के स्वभाव को व्यक्त करती हैं। अग्नि चिह्न (मेष, सिंह, धनु) उत्साही और पहल करने वाले होते हैं। पृथ्वी चिह्न (वृषभ, कन्या, मकर) व्यावहारिक और स्थायी होते हैं। वायु राशियाँ (मिथुन, तुला, कुंभ) बौद्धिक और मिलनसार होती हैं। जल राशियाँ (कर्क, वृश्चिक, मीन) भावनात्मक और सहज होती हैं।", ja: "ラーシは元素の気質を表します。火（牡羊・獅子・射手）は情熱と開始。地（牡牛・乙女・山羊）は実用と持続。風（双子・天秤・水瓶）は知性と結びつき。水（蟹・蠍・魚）は感情と直感。", ko: "Rashis는 해당 요소의 기질을 표현합니다. 화재 징후(양자리, 사자자리, 궁수자리)는 활기차고 주도적입니다. 지구 별자리(황소자리, 처녀자리, 염소자리)는 실용적이고 오래갑니다. 공기 별자리(쌍둥이자리, 천칭자리, 물병자리)는 지적이며 연결적입니다. 물 별자리(게자리, 전갈자리, 물고기자리)는 감정적이고 직관적입니다.",
      },
    ],
  },
  {
    title: { en: "Ruling Planets of the Twelve Signs", hi: "बारह राशियों के स्वामी ग्रह", ja: "12星座の支配星", ko: "12 별자리의 지배 행성",},
    paragraphs: [
      {
        en: "Mars rules Aries and Scorpio. Venus rules Taurus and Libra. Mercury rules Gemini and Virgo. The Moon rules Cancer alone. The Sun rules Leo. Jupiter rules Sagittarius and Pisces. Saturn rules Capricorn and Aquarius. In chart judgment, a planet is strengthened in its own or exalted sign and tested in inimical signs.", hi: "मंगल मेष और वृश्चिक राशि पर शासन करता है। शुक्र वृषभ और तुला राशि पर शासन करता है। बुध मिथुन और कन्या राशि पर शासन करता है। चंद्रमा अकेले कर्क राशि पर शासन करता है। सूर्य सिंह राशि पर शासन करता है। बृहस्पति धनु और मीन राशि पर शासन करता है। शनि मकर और कुंभ राशि पर शासन करता है। चार्ट निर्णय में, किसी ग्रह को अपनी स्वयं की या उच्च राशि में मजबूत किया जाता है और शत्रु राशियों में परीक्षण किया जाता है।", ja: "火星は牡羊と蠍、金星は牡牛と天秤、水星は双子と乙女、月は蟹のみ、太陽は獅子、木星は射手と魚、土星は山羊と水瓶を支配します。自分の星座や高揚星座では惑星が強まり、敵対の星座では試されます。", ko: "화성은 양자리와 전갈자리를 지배합니다. 금성은 황소자리와 천칭자리를 지배합니다. 수성은 쌍둥이자리와 처녀자리를 지배합니다. 달은 암만을 지배합니다. 태양은 레오를 지배합니다. 목성은 궁수자리와 물고기자리를 지배합니다. 토성은 염소자리와 물병자리를 지배합니다. 차트 판단에서 행성은 자체 별자리 또는 엑절트 별자리로 강화되고 불리한 별자리로 테스트됩니다.",
      },
    ],
  },
  {
    title: { en: "Signs and Human Body Parts", hi: "लक्षण और मानव शरीर के अंग", ja: "星座と身体部位", ko: "표지판 및 인체 부위",},
    paragraphs: [
      {
        en: "Each Rashi corresponds to a region of the human body — from the head (Aries) through the face, chest, abdomen, and down to the feet (Pisces). This mapping connects zodiac symbolism to physiology in traditional Jyotish.", hi: "प्रत्येक राशि मानव शरीर के एक क्षेत्र से मेल खाती है - सिर (मेष) से ​​चेहरे, छाती, पेट और नीचे पैरों (मीन) तक। यह मानचित्रण पारंपरिक ज्योतिष में राशि चक्र प्रतीकवाद को शरीर विज्ञान से जोड़ता है।", ja: "各ラーシは人体の特定の領域に対応します — 頭（牡羊座）から顔、胸、腹部を経て、足（魚座）まで。伝統的なジョーティッシュでは、この対応が星座の象徴と生理学を結びつけます。", ko: "각 라시는 머리(양자리)부터 얼굴, 가슴, 복부, 발(물고기자리)까지 인체의 한 부위에 해당합니다. 이 매핑은 황도대 상징주의를 전통적인 조티쉬의 생리학과 연결합니다.",
      },
    ],
    image: {
      src: educationImages.signsBodyParts,
      alt: {
        en: "Signs and human body parts in Jyotish", hi: "ज्योतिष में लक्षण और मानव शरीर के अंग", ja: "ジョーティッシュにおける星座と身体部位", ko: "Jyotish의 표지판과 인체 부위",
      },
    },
  },
  {
    title: { en: "Decans & Finer Divisions", hi: "डेकन्स और फाइनर डिवीजन", ja: "デカンと細分化", ko: "데칸 및 미세 분할",},
    paragraphs: [
      {
        en: "Each 30° sign divides into three decans of 10° each — subtler shades of the same sign. Beyond Rashis, the 27 Nakshatras (13°20' each) offer even finer lunar symbolism. The Ascendant (rising sign) describes how others perceive you, while the Moon sign maps the inner mind.", hi: "प्रत्येक 30° चिन्ह 10° के तीन दशों में विभाजित होता है - एक ही चिन्ह के सूक्ष्म शेड्स। राशियों से परे, 27 नक्षत्र (प्रत्येक 13°20') और भी बेहतर चंद्र प्रतीक प्रस्तुत करते हैं। लग्न (बढ़ता हुआ चिन्ह) बताता है कि दूसरे आपको कैसे समझते हैं, जबकि चंद्रमा का चिन्ह आंतरिक मन को दर्शाता है।", ja: "各30度の星座は10度ずつの3つのデカンに分かれ — 同じ星座のより細かな色合いです。ラーシの先に27のナクシャトラ（各13°20'）があり、月の象徴をさらに精密にします。アセンダントは他者からの見え方、月の星座は内なる心を映します。", ko: "각 30° 기호는 각각 10°씩 3개의 데칸으로 나누어지며, 동일한 기호의 더 미묘한 음영입니다. Rashis 외에도 27개의 Nakshatras(각각 13°20')는 훨씬 더 미세한 달 상징을 제공합니다. 상승 별자리(상승 별자리)는 다른 사람들이 당신을 어떻게 인식하는지 설명하는 반면, 달 별자리는 내면의 마음을 지도화합니다.",
      },
    ],
  },
];

function rashi(
  id: keyof typeof rashiImages,
  data: Omit<RashiEntry, "id" | "image">
): RashiEntry {
  return { id, image: rashiImages[id], ...data };
}

export const rashis: RashiEntry[] = [
  rashi("aries", {
    number: 1,
    name: { en: "Aries", hi: "एआरआईएस", ja: "牡羊座", ko: "양자리",},
    sanskrit: { en: "Mesha", hi: "मेशा", ja: "メーシャ", ko: "메샤",},
    dates: { en: "21 Mar – 20 Apr", hi: "21 मार्च - 20 अप्रैल", ja: "3月21日 – 4月20日", ko: "3월 21일 – 4월 20일",},
    element: { en: "Fire", hi: "आग", ja: "火", ko: "불",},
    ruler: { en: "Mars", hi: "मंगल ग्रह", ja: "火星（マンガル）", ko: "화성",},
    symbol: { en: "Ram", hi: "टक्कर मारना", ja: "羊", ko: "숫양",},
    bodyPart: { en: "Head", hi: "सिर", ja: "頭", ko: "머리",},
    description: {
      en: "The first sign of the zodiac — pioneer, initiator, and spark of new cycles. Aries natives lead with courage, directness, and an instinct to act before overthinking.", hi: "राशि चक्र का पहला चिन्ह - अग्रणी, आरंभकर्ता और नए चक्रों की चिंगारी। मेष राशि के जातक साहस, प्रत्यक्षता और ज़्यादा सोचने से पहले कार्य करने की प्रवृत्ति के साथ नेतृत्व करते हैं।", ja: "黄道の第一星座 — 先駆者、開始者、新しい周期の火花。牡羊座の人は勇気と率直さ、考えすぎる前に動く本能で先導します。", ko: "황도대의 첫 번째 표시는 새로운 주기의 개척자, 개시자, 불꽃입니다. 양자리 원주민은 용기와 직접성, 그리고 지나치게 생각하기 전에 행동하려는 본능으로 앞서갑니다.",
    },
    traits: [
      { en: "Bold, competitive, independent", hi: "साहसी, प्रतिस्पर्धी, स्वतंत्र", ja: "大胆、競争的、独立的", ko: "대담하고 경쟁적이며 독립적입니다.",},
      { en: "Impatient but refreshingly honest", hi: "अधीर लेकिन ताज़गीभरा ईमानदार", ja: "せっかちだが爽やかに正直", ko: "참을성이 없지만 상쾌할 만큼 솔직하다.",},
      { en: "Natural starters; may struggle to finish", hi: "प्राकृतिक शुरुआत; समाप्त करने के लिए संघर्ष करना पड़ सकता है", ja: "自然なスターター、完遂は課題になりうる", ko: "천연 스타터; 끝내는 데 어려움을 겪을 수 있습니다",},
    ],
    sections: {
      nature: {
        en: "Aries nature is fiery and forward-leaning — emotional surges come quickly and pass quickly. Decisions are instinctive; hesitation feels like defeat. At best, Aries is heroic and protective; at stress, blunt or combative.", hi: "मेष राशि का स्वभाव उग्र और आगे की ओर झुकाव वाला होता है - भावनात्मक उछाल जल्दी आते हैं और जल्दी ही गुजर जाते हैं। निर्णय सहज होते हैं; झिझक हार की तरह महसूस होती है। सबसे अच्छे रूप में, मेष राशि वाले वीर और सुरक्षात्मक होते हैं; तनावग्रस्त, कुंद या लड़ाकू।", ja: "牡羊の性質は火的で前のめり — 感情の波は速く来て速く去る。決断は本能的で、躊躇は敗北のように感じます。最良のときは英雄的・保護的、ストレス時は blunt または好戦的。", ko: "양자리의 성격은 불타고 미래 지향적입니다. 감정적 급증은 빠르게 나타났다가 빠르게 사라집니다. 결정은 본능적입니다. 망설임은 패배처럼 느껴진다. 기껏해야 양자리는 영웅적이고 보호적입니다. 스트레스를 받거나 무뚝뚝하거나 전투적일 때.",
      },
      career: {
        en: "Careers in leadership, entrepreneurship, sports, military, surgery, engineering, and any field requiring quick initiative suit Aries. They thrive as founders and first-movers rather than long-term administrators.", hi: "नेतृत्व, उद्यमिता, खेल, सेना, सर्जरी, इंजीनियरिंग और त्वरित पहल की आवश्यकता वाले किसी भी क्षेत्र में करियर मेष राशि वालों के लिए उपयुक्त है। वे दीर्घकालिक प्रशासकों के बजाय संस्थापकों और प्रथम-प्रवर्तकों के रूप में फलते-फूलते हैं।", ja: "リーダーシップ、起業、スポーツ、軍事、外科、工学など迅速な開始が要る分野に適します。長期の管理者より創業者・先駆者として力を発揮します。", ko: "리더십, 기업가 정신, 스포츠, 군사, 수술, 엔지니어링 및 빠른 주도권이 필요한 모든 분야의 경력은 양자리에게 적합합니다. 그들은 장기적인 관리자가 아닌 창립자 및 최초 이동자로서 성장합니다.",
      },
      relationships: {
        en: "In relationships Aries is passionate and straightforward — they want honesty and momentum. They can be protective partners but need space for independence; power struggles arise when challenged.", hi: "रिश्तों में मेष राशि वाले भावुक और सीधे होते हैं - वे ईमानदारी और गति चाहते हैं। वे सुरक्षात्मक भागीदार हो सकते हैं लेकिन स्वतंत्रता के लिए जगह की आवश्यकता होती है; चुनौती मिलने पर सत्ता संघर्ष उत्पन्न होता है।", ja: "関係では情熱的で率直 — 誠実さと推進力を求めます。保護的なパートナーになりうるが独立の余地が必要で、挑戦されると力の争いが起きやすい。", ko: "관계에서 양자리는 열정적이고 직설적입니다. 그들은 정직과 추진력을 원합니다. 그들은 보호 파트너가 될 수 있지만 독립을 위한 공간이 필요합니다. 도전을 받으면 권력 투쟁이 발생합니다.",
      },
      romance: {
        en: "Romance is pursued actively and ardently. Aries expresses love through action, adventure, and fierce loyalty. They dislike games and prefer partners who match their energy.", hi: "रोमांस को सक्रियता और उत्साह से निभाया जाता है। मेष राशि वाले कार्रवाई, रोमांच और उग्र वफादारी के माध्यम से प्यार का इजहार करते हैं। उन्हें खेल पसंद नहीं है और वे ऐसे साथी पसंद करते हैं जो उनकी ऊर्जा से मेल खाते हों।", ja: "恋愛は積極的かつ熱烈に追求。行動、冒険、強い忠誠で愛を示す。駆け引きを嫌い、エネルギーに匹敵する相手を好みます。", ko: "로맨스는 적극적이고 열렬하게 추구됩니다. 양자리는 행동, 모험, 맹렬한 충성심을 통해 사랑을 표현합니다. 그들은 게임을 싫어하고 자신의 에너지와 일치하는 파트너를 선호합니다.",
      },
      health: {
        en: "The head, eyes, and blood are sensitive zones. Watch for headaches, fevers, inflammation, and stress from overexertion. Cooling routines and paced exercise help balance Mars.", hi: "सिर, आंखें और रक्त संवेदनशील क्षेत्र हैं। अत्यधिक परिश्रम से होने वाले सिरदर्द, बुखार, सूजन और तनाव पर नज़र रखें। ठंडक देने वाली दिनचर्या और तेज़ गति से किया जाने वाला व्यायाम मंगल को संतुलित करने में मदद करता है।", ja: "頭、目、血液が敏感な領域。頭痛、発熱、炎症、過労によるストレスに注意。クールダウンとペース配分の運動が火星のバランスに役立ちます。", ko: "머리, 눈, 혈액은 민감한 부위입니다. 두통, 발열, 염증, 과로로 인한 스트레스에 주의하세요. 냉각 루틴과 속도 조절 운동은 화성의 균형을 맞추는 데 도움이 됩니다.",
      },
      decans: {
        en: "1st decan (Mars): pure Aries — warrior spirit. 2nd decan (Sun): regal confidence. 3rd decan (Jupiter): philosophical courage and generosity.", hi: "पहला दशक (मंगल): शुद्ध मेष - योद्धा भावना। दूसरा दशक (रविवार): शाही आत्मविश्वास। तीसरा दशक (बृहस्पति): दार्शनिक साहस और उदारता।", ja: "第1デカン（火星）：純粋な牡羊 — 戦士の精神。第2デカン（太陽）：王者の自信。第3デカン（木星）：哲学的勇気と寛大さ。", ko: "첫 번째 데칸(화성): 순수한 양자리 — 전사 정신. 2데칸(일) : 당당한 자신감. 3번째 데칸(목성): 철학적 용기와 관대함.",
      },
    },
  }),
  rashi("taurus", {
    number: 2,
    name: { en: "Taurus", hi: "वृषभ", ja: "牡牛座", ko: "황소자리",},
    sanskrit: { en: "Vrishabha", hi: "वृषभ", ja: "ヴリシャヴ", ko: "브리샤바",},
    dates: { en: "21 Apr – 21 May", hi: "21 अप्रैल - 21 मई", ja: "4月21日 – 5月21日", ko: "4월 21일 – 5월 21일",},
    element: { en: "Earth", hi: "धरती", ja: "地", ko: "지구",},
    ruler: { en: "Venus", hi: "शुक्र", ja: "金星（シュクラ）", ko: "금성",},
    symbol: { en: "Bull", hi: "साँड़", ja: "牡牛", ko: "황소",},
    bodyPart: { en: "Face, throat", hi: "चेहरा, गला", ja: "顔、喉", ko: "얼굴, 목",},
    description: {
      en: "Taurus anchors the zodiac in stability, sensuality, and material security. Natives value beauty, comfort, and loyalty — building slowly but enduringly.", hi: "वृषभ राशि को स्थिरता, कामुकता और भौतिक सुरक्षा प्रदान करता है। मूल निवासी सुंदरता, आराम और वफादारी को महत्व देते हैं - धीरे-धीरे लेकिन स्थायी रूप से निर्माण करते हुए।", ja: "牡牛座は安定、官能、物質的安心で黄道を支えます。美、快適さ、忠誠を重んじ — ゆっくりだが永く築きます。", ko: "황소자리는 안정성, 관능성, 물질적 안정이라는 측면에서 조디악을 고정시킵니다. 원주민들은 아름다움, 편안함, 충성심을 중요하게 생각하며 천천히 그러나 지속적으로 건축합니다.",
    },
    traits: [
      { en: "Patient, reliable, pleasure-loving", hi: "धैर्यवान, विश्वसनीय, आनंद-प्रिय", ja: "忍耐強い、信頼できる、快楽を愛する", ko: "참을성 있고 신뢰할 수 있으며 즐거움을 좋아합니다.",},
      { en: "Stubborn when values are threatened", hi: "जब मूल्यों को खतरा हो तो जिद्दी हो जाओ", ja: "価値が脅かされると頑固", ko: "가치가 위협받을 때 완고함",},
      { en: "Strong aesthetic and financial sense", hi: "मजबूत सौंदर्य और वित्तीय समझ", ja: "強い美的・財務感覚", ko: "강한 미적 감각과 재정적 감각",},
    ],
    sections: {
      nature: {
        en: "Taurus nature is calm, sensory, and grounded. They prefer predictability and tangible results. Change is accepted slowly; once committed, they are among the most steadfast signs.", hi: "वृषभ राशि का स्वभाव शांत, संवेदनशील और ज़मीनी होता है। वे पूर्वानुमेयता और ठोस परिणाम पसंद करते हैं। परिवर्तन धीरे-धीरे स्वीकार किया जाता है; एक बार प्रतिबद्ध होने के बाद, वे सबसे दृढ़ संकेतों में से हैं।", ja: "牡牛の性質は穏やか、感覚的、地に足がついた。予測可能性と具体的成果を好みます。変化はゆっくり受け入れ、一度コミットすれば最も堅実な星座のひとつ。", ko: "황소자리의 성격은 차분하고 감각적이며 근거가 있습니다. 그들은 예측 가능성과 가시적인 결과를 선호합니다. 변화는 천천히 받아들여진다. 일단 저질러지면 가장 확고한 신호 중 하나입니다.",
      },
      career: {
        en: "Finance, banking, agriculture, culinary arts, fashion, music, real estate, and luxury goods align with Taurus. They excel where patience and quality compound over time.", hi: "वित्त, बैंकिंग, कृषि, पाक कला, फैशन, संगीत, रियल एस्टेट और विलासिता के सामान वृषभ राशि के अनुरूप हैं। जहां धैर्य और गुणवत्ता समय के साथ जुड़ती है, वहां वे उत्कृष्टता प्राप्त करते हैं।", ja: "金融、銀行、農業、料理、ファッション、音楽、不動産、奢侈品が合います。忍耐と品質が時間とともに複利する場で優れます。", ko: "금융, 은행업, 농업, 요리 예술, 패션, 음악, 부동산 및 명품이 황소자리와 일치합니다. 시간이 지남에 따라 인내심과 품질이 복합되는 곳에서 탁월합니다.",
      },
      relationships: {
        en: "Loyal and devoted, Taurus partners offer security and sensual warmth. They dislike instability and need trust built gradually. Possessiveness can surface when insecure.", hi: "वफादार और समर्पित, वृषभ राशि के साथी सुरक्षा और कामुक गर्मजोशी प्रदान करते हैं। उन्हें अस्थिरता पसंद नहीं है और उन्हें धीरे-धीरे विश्वास की जरूरत होती है। असुरक्षित होने पर स्वामित्व की भावना सतह पर आ सकती है।", ja: "忠実で献身的、安心と官能的な温かさを提供。不安定を嫌い、信頼は徐々に築く必要があります。不安時に所有欲が出ることがあります。", ko: "충성스럽고 헌신적인 황소자리 파트너는 안정감과 관능적인 따뜻함을 제공합니다. 그들은 불안정함을 싫어하며 점진적으로 구축된 신뢰가 필요합니다. 소유욕은 불안할 때 표면화될 수 있습니다.",
      },
      romance: {
        en: "Romance unfolds through touch, quality time, gifts, and culinary delight. Venus gifts Taurus with charm and a love of romance that prefers substance over flash.", hi: "रोमांस स्पर्श, गुणवत्तापूर्ण समय, उपहार और पाक आनंद के माध्यम से प्रकट होता है। शुक्र वृषभ राशि वालों को आकर्षण और रोमांस का प्यार उपहार में देता है, जो दिखावटीपन की बजाय भौतिकता को प्राथमिकता देता है।", ja: "恋愛は触れ合い、質の高い時間、贈り物、食の喜びを通じて花開く。金星は魅力と、派手さより実質を好むロマンスの愛を与えます。", ko: "로맨스는 감동, 즐거운 시간, 선물, 요리의 즐거움을 통해 펼쳐집니다. 금성은 플래시보다 실체를 선호하는 매력과 로맨스에 대한 사랑을 황소자리에게 선물합니다.",
      },
      health: {
        en: "Throat, neck, thyroid, and weight regulation need care. Overindulgence in rich food or sedentary habits can accumulate. Regular gentle exercise and moderation sustain Venus.", hi: "गले, गर्दन, थायराइड और वजन नियंत्रण के लिए देखभाल की जरूरत है। गरिष्ठ भोजन या गतिहीन आदतों का अत्यधिक सेवन जमा हो सकता है। नियमित हल्का व्यायाम और संयम शुक्र को बनाए रखता है।", ja: "喉、首、甲状腺、体重管理に注意。濃い食事や座りがちな習慣の過剰は蓄積しやすい。穏やかな運動と節制が金星を支えます。", ko: "목, 목, 갑상선, 체중조절 등의 관리가 필요합니다. 풍부한 음식에 대한 지나친 방종이나 앉아 있는 습관이 축적될 수 있습니다. 규칙적이고 부드러운 운동과 절제가 금성을 유지합니다.",
      },
      decans: {
        en: "1st decan (Venus): classic Taurus sensuality. 2nd decan (Mercury): practical artistry. 3rd decan (Saturn): disciplined builder.", hi: "पहला दशक (शुक्र): क्लासिक वृषभ कामुकता। दूसरा दशक (बुध): व्यावहारिक कलात्मकता। तीसरा दशक (शनि): अनुशासित निर्माता।", ja: "第1デカン（金星）：典型的な牡牛の官能。第2デカン（水星）：実用的な芸術性。第3デカン（土星）：規律ある建設者。", ko: "1번째 데칸(비너스): 전형적인 황소자리의 관능미. 2번째 데칸(머큐리): 실용적인 예술성. 3번째 데칸(토성): 규율 있는 건축가.",
      },
    },
  }),
  rashi("gemini", {
    number: 3,
    name: { en: "Gemini", hi: "मिथुन", ja: "双子座", ko: "쌍둥이자리",},
    sanskrit: { en: "Mithuna", hi: "मिथुन", ja: "ミトゥン", ko: "미투나",},
    dates: { en: "22 May – 21 Jun", hi: "22 मई - 21 जून", ja: "5月22日 – 6月21日", ko: "5월 22일 – 6월 21일",},
    element: { en: "Air", hi: "वायु", ja: "風", ko: "공기",},
    ruler: { en: "Mercury", hi: "बुध", ja: "水星（ブッダ）", ko: "수성",},
    symbol: { en: "Twins", hi: "जुडवा", ja: "双子", ko: "쌍둥이",},
    bodyPart: { en: "Arms, shoulders, lungs", hi: "हाथ, कंधे, फेफड़े", ja: "腕、肩、肺", ko: "팔, 어깨, 폐",},
    description: {
      en: "Gemini is the communicator — quick-witted, curious, and dual-natured. Natives gather information, connect people, and adapt rapidly to changing contexts.", hi: "मिथुन संचारक है - तेज-तर्रार, जिज्ञासु और दोहरे स्वभाव वाला। मूल निवासी जानकारी इकट्ठा करते हैं, लोगों को जोड़ते हैं, और बदलते संदर्भों के अनुसार तेजी से अनुकूलन करते हैं।", ja: "双子座はコミュニケーター — 機知に富み、好奇深く、二重の性質。情報を集め、人をつなぎ、文脈の変化に素早く適応します。", ko: "쌍둥이자리는 재치 있고 호기심이 많으며 이중적인 성격을 지닌 의사소통자입니다. 원주민은 정보를 수집하고 사람들을 연결하며 변화하는 상황에 빠르게 적응합니다.",
    },
    traits: [
      { en: "Articulate, versatile, sociable", hi: "स्पष्टवादी, बहुमुखी, मिलनसार", ja: "雄弁、多才、社交的", ko: "명쾌한, 다재다능한, 사교적인",},
      { en: "Restless mind; loves variety", hi: "बेचैन मन; विविधता पसंद है", ja: "落ち着きのない心、変化を愛する", ko: "불안한 마음; 다양성을 좋아한다",},
      { en: "Can scatter energy across too many interests", hi: "बहुत सारी रुचियों में ऊर्जा बिखेर सकता है", ja: "関心が広すぎてエネルギーが分散しうる", ko: "너무 많은 관심사에 에너지를 분산시킬 수 있음",},
    ],
    sections: {
      nature: {
        en: "Gemini nature is mental and mercurial — calm and storm alternate. They process life through language, ideas, and social exchange. Boredom is the enemy; stimulation is medicine.", hi: "मिथुन प्रकृति मानसिक और चंचल है - शांति और तूफान वैकल्पिक है। वे भाषा, विचारों और सामाजिक आदान-प्रदान के माध्यम से जीवन को संसाधित करते हैं। ऊब शत्रु है; उत्तेजना औषधि है.", ja: "双子の性質は精神的で水星のように — 静と嵐が交替。言語、考え、社会的交換を通じて人生を処理。退屈が敵、刺激が薬。", ko: "쌍둥이자리의 성격은 정신적이며 변덕스럽습니다. 고요함과 폭풍우가 번갈아 나타납니다. 그들은 언어, 생각, 사회적 교류를 통해 삶을 처리합니다. 지루함은 적입니다. 자극이 약이다.",
      },
      career: {
        en: "Writing, journalism, teaching, sales, marketing, IT, translation, and public relations suit Gemini. Multi-tasking roles and media-facing careers leverage Mercury's gift.", hi: "लेखन, पत्रकारिता, शिक्षण, बिक्री, विपणन, आईटी, अनुवाद और जनसंपर्क मिथुन राशि के लिए उपयुक्त हैं। मल्टी-टास्किंग भूमिकाएँ और मीडिया-सामना वाले करियर बुध के उपहार का लाभ उठाते हैं।", ja: "執筆、ジャーナリズム、教育、営業、マーケ、IT、翻訳、広報が合います。マルチタスクとメディア向きの職が水星の賜物を活かします。", ko: "글쓰기, 저널리즘, 교육, 영업, 마케팅, IT, 번역, 홍보 등이 Gemini에 적합합니다. 멀티 태스킹 역할과 미디어 관련 경력은 Mercury의 재능을 활용합니다.",
      },
      relationships: {
        en: "Gemini partners need intellectual rapport and freedom to socialize. They express care through conversation and humour. Emotional depth may need conscious cultivation.", hi: "मिथुन राशि वालों को बौद्धिक तालमेल और मेलजोल की आजादी की जरूरत होती है। वे बातचीत और हास्य के माध्यम से चिंता व्यक्त करते हैं। भावनात्मक गहराई को सचेतन रूप से विकसित करने की आवश्यकता हो सकती है।", ja: "知的な共鳴と社交の自由が必要。会話とユーモアで愛情を示す。感情の深さは意識的な育成が必要なことも。", ko: "쌍둥이자리 파트너에게는 지적 교감과 사교의 자유가 필요합니다. 그들은 대화와 유머를 통해 배려를 표현합니다. 정서적 깊이는 의식적인 배양이 필요할 수 있습니다.",
      },
      romance: {
        en: "Flirtation, witty banter, and shared curiosity fuel Gemini romance. They fall for minds first. Variety and mental play keep love alive.", hi: "इश्कबाज़ी, मज़ाकिया मज़ाक और साझा जिज्ञासा मिथुन रोमांस को बढ़ावा देती है। वे पहले दिमाग से प्रभावित होते हैं। विविधता और मानसिक खेल प्रेम को जीवित रखते हैं।", ja: "いちゃつき、機知の応酬、共有する好奇心が恋を育む。まず心に恋する。変化と知的な遊びが愛を保つ。", ko: "희롱, 재치 있는 농담, 공유된 호기심이 쌍둥이자리의 로맨스를 촉진합니다. 그들은 먼저 마음에 빠집니다. 다양성과 정신적인 플레이는 사랑을 살아있게 해줍니다.",
      },
      health: {
        en: "Respiratory system, nerves, and hands are focal points. Anxiety, shallow breathing, and sleep irregularity arise when overstimulated. Grounding practices help.", hi: "श्वसन तंत्र, नसें और हाथ केंद्र बिंदु हैं। अत्यधिक उत्तेजित होने पर चिंता, उथली साँस लेना और नींद में अनियमितता उत्पन्न होती है। ग्राउंडिंग प्रथाएँ मदद करती हैं।", ja: "呼吸器、神経、手が焦点。過刺激で不安、浅い呼吸、睡眠の乱れが出やすい。グラウンディングが助けになります。", ko: "호흡기계, 신경, 손이 초점입니다. 과도한 자극을 받으면 불안, 얕은 호흡, 불규칙한 수면이 발생합니다. 접지 관행이 도움이 됩니다.",
      },
      decans: {
        en: "1st decan (Mercury): pure Gemini agility. 2nd decan (Venus): charming wordsmith. 3rd decan (Uranus*): inventive (*Western decan lord).", hi: "पहला दशक (बुध): शुद्ध मिथुन चपलता। दूसरा दशक (शुक्र): आकर्षक शब्दकार। तीसरा डिकन (यूरेनस*): आविष्कारशील (*पश्चिमी डिकन भगवान)।", ja: "第1デカン（水星）：純粋な双子の敏捷さ。第2デカン（金星）：魅力的な言葉の職人。第3デカン：独創的。", ko: "1번째 데칸(머큐리): 순수한 쌍둥이자리 민첩성. 2데칸(비너스) : 매력적인 문장가. 세 번째 데칸(천왕성*): 창의적(*서부 데칸 군주).",
      },
    },
  }),
  rashi("cancer", {
    number: 4,
    name: { en: "Cancer", hi: "कैंसर", ja: "蟹座", ko: "암",},
    sanskrit: { en: "Karka", hi: "करका", ja: "カルカ", ko: "카르카",},
    dates: { en: "22 Jun – 22 Jul", hi: "22 जून - 22 जुलाई", ja: "6月22日 – 7月22日", ko: "6월 22일 – 7월 22일",},
    element: { en: "Water", hi: "पानी", ja: "水", ko: "물",},
    ruler: { en: "Moon", hi: "चंद्रमा", ja: "月（チャンドラ）", ko: "달",},
    symbol: { en: "Crab", hi: "केकड़ा", ja: "蟹", ko: "게",},
    bodyPart: { en: "Chest, breasts", hi: "छाती, स्तन", ja: "胸", ko: "가슴, 가슴",},
    description: {
      en: "Cancer is the nurturer — protective, memory-rich, and deeply tied to home and family. The Moon's sign par excellence in Jyotish emotional symbolism.", hi: "कैंसर पोषणकर्ता है - सुरक्षात्मक, स्मृति-समृद्ध और घर और परिवार से गहराई से जुड़ा हुआ है। ज्योतिष भावनात्मक प्रतीकवाद में चंद्रमा का चिन्ह सर्वोत्कृष्ट है।", ja: "蟹座は養育者 — 保護的、記憶豊か、家庭と家族に深く結びつく。ジョーティッシュの感情象徴における月の星座。", ko: "암은 양육자입니다. 보호하고 기억력이 풍부하며 가정 및 가족과 깊이 연결되어 있습니다. 달의 표시는 Jyotish의 감정적 상징에 있어서 탁월합니다.",
    },
    traits: [
      { en: "Empathetic, tenacious, family-oriented", hi: "सहानुभूतिपूर्ण, दृढ़, परिवार-उन्मुख", ja: "共感的、粘り強い、家族志向", ko: "공감력이 강하고 끈기 있고 가족 중심적입니다.",},
      { en: "Mood shifts with lunar rhythms", hi: "चंद्र लय के साथ मूड बदलता है", ja: "月のリズムとともに気分が変わる", ko: "달의 리듬에 따라 기분이 바뀐다",},
      { en: "Shell of caution protects soft interior", hi: "सावधानी का कवच नरम आंतरिक भाग की रक्षा करता है", ja: "柔らかな内側を守る硬い殻", ko: "주의의 껍질은 부드러운 내부를 보호합니다",},
    ],
    sections: {
      nature: {
        en: "Cancer nature is tidal — receptive, imaginative, and security-seeking. They remember slights and kindnesses equally. Home is sanctuary; outsiders enter by invitation only.", hi: "कर्क राशि का स्वभाव ग्रहणशील, कल्पनाशील और सुरक्षा चाहने वाला होता है। वे छोटी-छोटी बातों और दयालुताओं को समान रूप से याद रखते हैं। घर अभयारण्य है; बाहरी लोग केवल निमंत्रण से ही प्रवेश करते हैं।", ja: "蟹の性質は潮のよう — 受容的、想像力豊か、安心を求める。無礼も親切も同じくらい覚える。家は聖域、外の人は招待されて初めて入る。", ko: "암의 성격은 조수적이며 수용적이고 상상력이 풍부하며 보안을 추구합니다. 그들은 경멸과 친절을 똑같이 기억합니다. 집은 안식처입니다. 외부인은 초대를 통해서만 입장합니다.",
      },
      career: {
        en: "Nursing, hospitality, real estate, childcare, psychology, cooking, and history suit Cancer. Roles that care for people or preserve tradition feel natural.", hi: "नर्सिंग, आतिथ्य, रियल एस्टेट, बच्चों की देखभाल, मनोविज्ञान, खाना बनाना और इतिहास कर्क राशि के लिए उपयुक्त हैं। लोगों की देखभाल करने वाली या परंपरा को संरक्षित करने वाली भूमिकाएँ स्वाभाविक लगती हैं।", ja: "看護、接客、不動産、育児、心理学、料理、歴史が合います。人をケアする、伝統を守る役が自然に感じられます。", ko: "간호, 접대, 부동산, 보육, 심리학, 요리, 역사에 어울리는 암. 사람을 배려하거나 전통을 지키는 역할이 자연스러워요.",
      },
      relationships: {
        en: "Devoted and protective, Cancer partners create emotional safety. They need reciprocity and can retreat into shell when hurt. Family approval often matters.", hi: "समर्पित और सुरक्षात्मक, कर्क राशि के साथी भावनात्मक सुरक्षा पैदा करते हैं। उन्हें पारस्परिकता की आवश्यकता होती है और चोट लगने पर वे पीछे हट सकते हैं। पारिवारिक स्वीकृति अक्सर मायने रखती है।", ja: "献身的で保護的、感情的な安全を作る。相互性を必要とし、傷つくと殻に閉じこもる。家族の承認が重要なことも。", ko: "헌신적이고 보호적인 Cancer 파트너는 정서적 안전을 만듭니다. 그들은 상호성이 필요하며 상처를 입으면 껍질 속으로 후퇴할 수 있습니다. 가족의 승인이 중요한 경우가 많습니다.",
      },
      romance: {
        en: "Romance is nurturing — home-cooked meals, sentimental gifts, and deep loyalty. Cancer loves slowly and for the long term.", hi: "रोमांस पोषण कर रहा है - घर का बना भोजन, भावुक उपहार और गहरी वफादारी। कर्क राशि वाले धीरे-धीरे और लंबे समय तक प्यार करते हैं।", ja: "恋愛は養育的 — 手料理、感傷的な贈り物、深い忠誠。ゆっくり、長く愛します。", ko: "로맨스는 가정식 식사, 감상적인 선물, 깊은 충성심 등을 키워줍니다. 암은 천천히 그리고 장기적으로 사랑합니다.",
      },
      health: {
        en: "Stomach, digestion, and fluid retention are sensitive. Emotional stress maps directly to the gut. Lunar routines and calming foods support health.", hi: "पेट, पाचन और द्रव प्रतिधारण संवेदनशील होते हैं। भावनात्मक तनाव सीधे पेट तक पहुंचता है। चंद्र दिनचर्या और शांतिदायक खाद्य पदार्थ स्वास्थ्य का समर्थन करते हैं।", ja: "胃、消化、水分貯留が敏感。感情ストレスが直に腸に映る。月のリズムと穏やかな食が健康を支えます。", ko: "위, 소화, 체액 저류는 민감합니다. 정서적 스트레스는 장과 직접 연관됩니다. 음력의 일과와 차분한 음식은 건강을 지원합니다.",
      },
      decans: {
        en: "1st decan (Moon): classic Cancer sensitivity. 2nd decan (Mars): protective fighter. 3rd decan (Jupiter): generous caretaker.", hi: "पहला दशक (चंद्रमा): क्लासिक कैंसर संवेदनशीलता। दूसरा दशक (मंगल): सुरक्षात्मक सेनानी। तीसरा दशक (बृहस्पति): उदार देखभालकर्ता।", ja: "第1デカン（月）：典型的な蟹の感受性。第2デカン（火星）：保護する戦士。第3デカン（木星）：寛大な世話役。", ko: "1데칸(달): 전형적인 게자리 민감도. 두 번째 데칸(화성): 보호 전투기. 3번째 데칸(목성): 관대한 관리인.",
      },
    },
  }),
  rashi("leo", {
    number: 5,
    name: { en: "Leo", hi: "लियो", ja: "獅子座", ko: "사자 별자리",},
    sanskrit: { en: "Simha", hi: "नरसिंह", ja: "シンハ", ko: "심하",},
    dates: { en: "23 Jul – 23 Aug", hi: "23 जुलाई - 23 अगस्त", ja: "7月23日 – 8月23日", ko: "7월 23일 – 8월 23일",},
    element: { en: "Fire", hi: "आग", ja: "火", ko: "불",},
    ruler: { en: "Sun", hi: "सूरज", ja: "太陽（スーリヤ）", ko: "해",},
    symbol: { en: "Lion", hi: "शेर", ja: "獅子", ko: "사자",},
    bodyPart: { en: "Heart, upper back", hi: "हृदय, ऊपरी पीठ", ja: "心臓、上背部", ko: "심장, 등 위쪽",},
    description: {
      en: "Leo radiates solar confidence — creative, generous, and born to be seen. The sign of kingship, drama, and wholehearted self-expression.", hi: "सिंह सौर आत्मविश्वास को प्रसारित करता है - रचनात्मक, उदार, और देखने के लिए पैदा हुआ। राजत्व, नाटक और संपूर्ण आत्म-अभिव्यक्ति का प्रतीक।", ja: "獅子座は太陽の自信を放つ — 創造的、寛大、見られるために生まれた。王権、ドラマ、心からの自己表現の星座。", ko: "레오는 창의적이고 관대하며 눈에 띄도록 태어난 태양의 자신감을 발산합니다. 왕권, 드라마, 진심 어린 자기 표현의 표시입니다.",
    },
    traits: [
      { en: "Charismatic, proud, warm-hearted", hi: "करिश्माई, गौरवान्वित, सहृदय", ja: "カリスマ、誇り高い、温かい心", ko: "카리스마 있고, 자랑스럽고, 따뜻한 마음",},
      { en: "Craves recognition and creative outlet", hi: "मान्यता और रचनात्मक आउटलेट चाहता है", ja: "認知と創造的出口を渇望", ko: "인정과 창의적인 출구를 갈망합니다.",},
      { en: "Loyal leader; ego bruises deeply", hi: "वफादार नेता; अहंकार को गहरी चोट पहुँचती है", ja: "忠実なリーダー、エゴは深く傷つく", ko: "충성스러운 지도자; 자아가 깊게 멍들었다",},
    ],
    sections: {
      nature: {
        en: "Leo nature is fixed fire — steady warmth, theatrical flair, and moral centre. They gift abundance when appreciated and wilt when ignored. Honour is non-negotiable.", hi: "सिंह राशि की प्रकृति स्थिर अग्नि है - स्थिर गर्मी, नाटकीय स्वभाव और नैतिक केंद्र। जब सराहना की जाती है तो वे बहुतायत का उपहार देते हैं और नजरअंदाज किए जाने पर मुरझा जाते हैं। सम्मान से समझौता नहीं किया जा सकता.", ja: "獅子の性質は固定の火 — 安定した温かさ、演剧的な才、道徳の中心。感謝されると豊かさを与え、無視されるとしぼむ。名誉は譲れない。", ko: "사자자리의 성격은 고정된 불입니다. 꾸준한 따뜻함, 연극적 재능, 도덕적 중심입니다. 그들은 감사할 때 풍요를 선물하고 무시할 때 시들어버립니다. 명예는 타협할 수 없습니다.",
      },
      career: {
        en: "Performing arts, politics, management, entertainment, gold/jewellery, and leadership roles suit Leo. The stage — literal or corporate — calls them.", hi: "प्रदर्शन कला, राजनीति, प्रबंधन, मनोरंजन, सोना/आभूषण और नेतृत्व की भूमिकाएँ सिंह के लिए उपयुक्त हैं। मंच - शाब्दिक या कॉर्पोरेट - उन्हें बुलाता है।", ja: "舞台芸術、政治、経営、エンタメ、金・宝石、リーダー職が合います。文字通りまたは企業の舞台が呼びます。", ko: "공연 예술, 정치, 경영, 연예, 금/보석 및 리더십 역할이 레오에게 적합합니다. 문자 그대로든 기업적으로든 무대에서 그들을 부릅니다.",
      },
      relationships: {
        en: "Leo partners are protective, extravagant in affection, and expect admiration. They give generously but need respect. Drama in love is rarely boring.", hi: "सिंह राशि के साथी सुरक्षात्मक, अत्यधिक स्नेह वाले और प्रशंसा की अपेक्षा रखने वाले होते हैं। वे उदारतापूर्वक देते हैं लेकिन उन्हें सम्मान की आवश्यकता होती है। प्यार में ड्रामा शायद ही कभी उबाऊ होता है।", ja: "保護的で愛情に惜しみなく、賞賛を期待。寛大に与えるが尊敬が必要。恋のドラマは退屈になりにくい。", ko: "레오 파트너는 보호적이고 애정이 넘치며 존경을 기대합니다. 그들은 관대하게 주지만 존중이 필요합니다. 사랑에 빠진 드라마는 지루할 틈이 없다.",
      },
      romance: {
        en: "Grand gestures, public devotion, and playful pride define Leo romance. They love being chosen and celebrated.", hi: "भव्य हावभाव, सार्वजनिक भक्ति और चंचल गर्व सिंह रोमांस को परिभाषित करते हैं। उन्हें चुना जाना और जश्न मनाया जाना पसंद है।", ja: "壮大な仕草、公の献身、遊び心のある誇りが獅子の恋を定義。選ばれ祝福されることを愛する。", ko: "웅장한 몸짓, 대중의 헌신, 유쾌한 자부심이 레오의 로맨스를 정의합니다. 그들은 선택받고 축하받는 것을 좋아합니다.",
      },
      health: {
        en: "Heart, spine, and circulation need attention. Pride can drive overwork. Solar vitality returns with creative joy and rest.", hi: "हृदय, रीढ़ और परिसंचरण पर ध्यान देने की आवश्यकता है। अहंकार के कारण अधिक काम करना पड़ सकता है। सौर जीवन शक्ति रचनात्मक आनंद और आराम के साथ लौटती है।", ja: "心臓、脊椎、循環に注意。プライドが過労を駆り立てる。創造的喜びと休息で太陽の活力が戻る。", ko: "심장, 척추, 순환에 주의가 필요합니다. 자존심은 과로를 유발할 수 있습니다. 태양의 활력은 창의적인 기쁨과 휴식으로 돌아옵니다.",
      },
      decans: {
        en: "1st decan (Sun): pure Leo radiance. 2nd decan (Jupiter): magnanimous ruler. 3rd decan (Mars): fierce protector.", hi: "प्रथम दशमांश (सूर्य): शुद्ध सिंह चमक। दूसरा दशमांश (बृहस्पति): उदार शासक। तीसरा दशक (मंगल): भयंकर रक्षक।", ja: "第1デカン（太陽）：純粋な獅子の輝き。第2デカン（木星）：寛大な支配者。第3デカン（火星）：激しい守護者。", ko: "첫 번째 데칸(일): 순수한 사자자리의 광채. 두 번째 데칸(목성): 관대한 통치자. 3데칸(화성) : 맹렬한 수호자.",
      },
    },
  }),
  rashi("virgo", {
    number: 6,
    name: { en: "Virgo", hi: "कन्या", ja: "乙女座", ko: "처녀 자리",},
    sanskrit: { en: "Kanya", hi: "कन्या", ja: "カンニャ", ko: "칸야",},
    dates: { en: "24 Aug – 22 Sept", hi: "24 अगस्त - 22 सितंबर", ja: "8月24日 – 9月22日", ko: "8월 24일 – 9월 22일",},
    element: { en: "Earth", hi: "धरती", ja: "地", ko: "지구",},
    ruler: { en: "Mercury", hi: "बुध", ja: "水星（ブッダ）", ko: "수성",},
    symbol: { en: "Virgin (Maiden)", hi: "वर्जिन (युवती)", ja: "乙女", ko: "처녀(처녀)",},
    bodyPart: { en: "Abdomen, intestines", hi: "पेट, आंतें", ja: "腹部、腸", ko: "복부, 내장",},
    description: {
      en: "Virgo refines — analytical, service-minded, and devoted to improvement. Mercury here expresses through discrimination, craft, and practical intelligence.", hi: "कन्या परिष्कृत होती है - विश्लेषणात्मक, सेवा-चित्त और सुधार के प्रति समर्पित। बुध यहां विवेक, शिल्प और व्यवहारिक बुद्धि के माध्यम से अभिव्यक्त होता है।", ja: "乙女座は洗練する — 分析的、奉仕の心、改善への献身。ここでの水星は識別、技、実用的知性として表れる。", ko: "Virgo는 분석적이고 서비스 정신이 뛰어나며 개선에 전념합니다. 여기서 머큐리는 분별력, 기술, 실천적 지능을 통해 표현됩니다.",
    },
    traits: [
      { en: "Detail-oriented, modest, helpful", hi: "विवरण-उन्मुख, विनम्र, सहायक", ja: "細部志向、謙虚、助けになる", ko: "세부 지향적, 겸손함, 도움이 됨",},
      { en: "High standards for self and surroundings", hi: "स्वयं और परिवेश के लिए उच्च मानक", ja: "自分と環境への高い基準", ko: "자신과 주변 환경에 대한 높은 기준",},
      { en: "Anxiety when order breaks down", hi: "व्यवस्था टूटने पर चिंता", ja: "秩序が崩れると不安", ko: "질서가 무너지면 불안해진다",},
    ],
    sections: {
      nature: {
        en: "Virgo nature is methodical and observant — noticing what others miss. They serve through fixing, organising, and healing. Perfectionism is both gift and burden.", hi: "कन्या राशि का स्वभाव व्यवस्थित और चौकस होता है - यह ध्यान रखना कि दूसरे क्या भूल रहे हैं। वे सुधार, आयोजन और उपचार के माध्यम से सेवा करते हैं। पूर्णतावाद उपहार और बोझ दोनों है।", ja: "乙女の性質は体系的で観察的 — 他者が見逃すものに気づく。直す、整理する、癒すことで奉仕する。完璧主義は賜物であり負担でもある。", ko: "처녀자리의 성격은 체계적이고 관찰력이 뛰어나 다른 사람들이 놓친 것을 알아차립니다. 그들은 고치고, 정리하고, 치유하는 일을 통해 봉사합니다. 완벽주의는 선물이자 부담입니다.",
      },
      career: {
        en: "Medicine, accounting, editing, research, nutrition, veterinary science, and quality control align with Virgo. Precision careers reward them.", hi: "चिकित्सा, लेखा, संपादन, अनुसंधान, पोषण, पशु चिकित्सा विज्ञान और गुणवत्ता नियंत्रण कन्या राशि के अनुरूप हैं। सटीक करियर उन्हें पुरस्कृत करता है।", ja: "医学、会計、編集、研究、栄養、獣医学、品質管理が合います。精密さを要する職が報いてくれます。", ko: "의학, 회계, 편집, 연구, 영양, 수의학 및 품질 관리는 Virgo와 일치합니다. 정밀한 경력은 그들에게 보상을 줍니다.",
      },
      relationships: {
        en: "Virgo shows love through acts of service and practical support. They need partners who appreciate subtlety. Critical tone can wound if unchecked.", hi: "कन्या सेवा कार्यों और व्यावहारिक समर्थन के माध्यम से प्यार दिखाती है। उन्हें ऐसे साझेदारों की ज़रूरत है जो सूक्ष्मता की सराहना करते हों। अनियंत्रित होने पर आलोचनात्मक स्वर घाव कर सकता है।", ja: "奉仕の行為と実用的支援で愛を示す。繊細さを評価する相手が必要。批判的な口調は制御されなければ傷つける。", ko: "처녀자리는 봉사와 실질적인 지원을 통해 사랑을 보여줍니다. 그들은 미묘함을 높이 평가하는 파트너가 필요합니다. 선택하지 않으면 임계 톤이 손상될 수 있습니다.",
      },
      romance: {
        en: "Romance grows quietly — reliability, thoughtful gestures, and health-conscious care. They express devotion in daily rituals.", hi: "रोमांस चुपचाप बढ़ता है - विश्वसनीयता, विचारशील हावभाव, और स्वास्थ्य के प्रति सचेत देखभाल। वे दैनिक अनुष्ठानों में भक्ति व्यक्त करते हैं।", ja: "恋は静かに育つ — 信頼性、思いやりの仕草、健康を気遣うケア。日々の儀式で献身を表す。", ko: "로맨스는 신뢰성, 사려 깊은 몸짓, 건강을 고려한 배려로 조용히 성장합니다. 그들은 매일의 의식에서 헌신을 표현합니다.",
      },
      health: {
        en: "Digestive tract, nervous system, and food sensitivities are key. Worry manifests somatically. Routine, clean diet, and mindfulness restore balance.", hi: "पाचन तंत्र, तंत्रिका तंत्र और खाद्य संवेदनशीलताएँ प्रमुख हैं। चिंता शारीरिक रूप से प्रकट होती है। नियमित, स्वच्छ आहार और सचेतनता संतुलन बहाल करते हैं।", ja: "消化管、神経系、食物感受性が鍵。心配が身体に現れる。ルーティン、清潔な食、マインドフルネスがバランスを回復。", ko: "소화관, 신경계, 음식 민감도가 중요합니다. 걱정은 신체적으로 나타난다. 일상적이고 깨끗한 식단과 마음챙김이 균형을 회복합니다.",
      },
      decans: {
        en: "1st decan (Mercury): analytical purist. 2nd decan (Saturn): structured craftsman. 3rd decan (Venus): refined aesthete.", hi: "प्रथम दशमांश (बुध): विश्लेषणात्मक शुद्धतावादी। दूसरा दशमांश (शनि): संरचित शिल्पकार। तीसरा दशक (शुक्र): परिष्कृत सौंदर्य।", ja: "第1デカン（水星）：分析的な純粋主義者。第2デカン（土星）：構造化された職人。第3デカン（金星）：洗練された美学家。", ko: "1데칸(머큐리): 분석적 순수주의자. 두 번째 데칸(토성): 구조화된 장인. 3번째 데칸(비너스): 세련된 미학.",
      },
    },
  }),
  rashi("libra", {
    number: 7,
    name: { en: "Libra", hi: "तुला", ja: "天秤座", ko: "천칭",},
    sanskrit: { en: "Tula", hi: "तुला", ja: "トゥラー", ko: "툴라",},
    dates: { en: "23 Sept – 23 Oct", hi: "23 सितंबर - 23 अक्टूबर", ja: "9月23日 – 10月23日", ko: "9월 23일 – 10월 23일",},
    element: { en: "Air", hi: "वायु", ja: "風", ko: "공기",},
    ruler: { en: "Venus", hi: "शुक्र", ja: "金星（シュクラ）", ko: "금성",},
    symbol: { en: "Scales", hi: "तराजू", ja: "天秤", ko: "저울",},
    bodyPart: { en: "Kidneys, lower back", hi: "गुर्दे, पीठ के निचले हिस्से", ja: "腎臓、腰", ko: "신장, 허리",},
    description: {
      en: "Libra seeks harmony — diplomatic, fair-minded, and aesthetically refined. The sign of partnership, justice, and balanced exchange.", hi: "तुला राशि वाले सद्भाव चाहते हैं - कूटनीतिक, निष्पक्ष सोच वाले और सौंदर्य की दृष्टि से परिष्कृत। साझेदारी, न्याय और संतुलित आदान-प्रदान का संकेत।", ja: "天秤座は調和を求める — 外交的、公正、美的に洗練。パートナーシップ、正義、均衡の交換の星座。", ko: "천칭자리는 외교적이고 공정하며 미학적으로 세련된 조화를 추구합니다. 파트너십, 정의, 균형 잡힌 교환의 표시입니다.",
    },
    traits: [
      { en: "Charming, cooperative, indecisive at times", hi: "आकर्षक, सहयोगी, कभी-कभी अनिर्णायक", ja: "魅力的、協調的、時に優柔不断", ko: "매력적이고 협조적이며 때때로 우유부단함",},
      { en: "Strong sense of fairness", hi: "निष्पक्षता की प्रबल भावना", ja: "強い公正感", ko: "공정감이 강함",},
      { en: "Avoids conflict until balance breaks", hi: "संतुलन टूटने तक संघर्ष से बचता है", ja: "均衡が崩れるまで対立を避ける", ko: "균형이 깨질 때까지 충돌을 피합니다.",},
    ],
    sections: {
      nature: {
        en: "Libra nature weighs options — social, graceful, and oriented toward the other. They mirror environments and need beauty to feel sane. Indecision stems from seeing all sides.", hi: "तुला राशि का स्वभाव विकल्पों पर विचार करता है - सामाजिक, शालीन और दूसरे के प्रति उन्मुख। वे वातावरण को प्रतिबिंबित करते हैं और स्वस्थ महसूस करने के लिए सुंदरता की आवश्यकता होती है। सभी पक्षों को देखने से अनिर्णय उत्पन्न होता है।", ja: "天秤の性質は選択肢を量る — 社会的、優雅、他者志向。環境を映し、美がないと正気でいられない。優柔不断はすべての側面が見えるから。", ko: "천칭자리의 성격은 사회적, 우아함, 상대방 지향성 등의 선택 사항에 무게를 둡니다. 그들은 환경을 반영하며 제정신이라고 느끼기 위해서는 아름다움이 필요합니다. 우유부단함은 모든 측면을 보는 데서 비롯됩니다.",
      },
      career: {
        en: "Law, diplomacy, design, fashion, counselling, HR, and the arts suit Libra. Mediation and client-facing elegance are strengths.", hi: "कानून, कूटनीति, डिज़ाइन, फैशन, परामर्श, मानव संसाधन और कला तुला राशि के लिए उपयुक्त हैं। मध्यस्थता और ग्राहक-सामना की सुंदरता ताकत हैं।", ja: "法律、外交、デザイン、ファッション、カウンセリング、人事、芸術が合います。調停と顧客向けの優雅さが強み。", ko: "법률, 외교, 디자인, 패션, 상담, HR, 예술 분야는 Libra에 적합합니다. 중재와 고객을 대하는 우아함이 강점입니다.",
      },
      relationships: {
        en: "Partnership is central — Libra often defines self through relationship. They negotiate skillfully but may suppress needs to keep peace.", hi: "साझेदारी केंद्रीय है - तुला अक्सर रिश्ते के माध्यम से स्वयं को परिभाषित करता है। वे कुशलता से बातचीत करते हैं लेकिन शांति बनाए रखने की ज़रूरतों को दबा सकते हैं।", ja: "パートナーシップが中心 — 関係を通じて自己を定義することが多い。巧みに交渉するが平和のために欲求を抑えることも。", ko: "파트너십이 핵심입니다. 천칭자리는 종종 관계를 통해 자신을 정의합니다. 그들은 능숙하게 협상하지만 평화를 유지하려는 욕구를 억제할 수 있습니다.",
      },
      romance: {
        en: "Romance is an art form — flowers, poetry, and refined dates. Libra loves being courted and courting in equal measure.", hi: "रोमांस एक कला का रूप है - फूल, कविता और परिष्कृत तिथियाँ। तुला राशि वालों को प्रेमालाप और प्रेमालाप दोनों समान रूप से पसंद होते हैं।", ja: "恋愛は芸術 — 花、詩、洗練されたデート。求められ、求めることを等しく愛する。", ko: "로맨스는 꽃, 시, 세련된 날짜 등 예술 형식입니다. 천칭자리는 구애받는 것과 동등하게 구애받는 것을 좋아합니다.",
      },
      health: {
        en: "Kidneys, skin, and lumbar region need balance. Sugar and alcohol excess disturb Venus here. Hydration and harmonious routines help.", hi: "गुर्दे, त्वचा और कमर क्षेत्र को संतुलन की आवश्यकता होती है। चीनी और शराब की अधिकता यहां शुक्र को परेशान करती है। जलयोजन और सामंजस्यपूर्ण दिनचर्या मदद करती है।", ja: "腎臓、皮膚、腰部のバランスに注意。糖とアルコールの過剰が金星を乱す。水分と調和的ルーティンが助けになる。", ko: "신장, 피부, 요추 부위에는 균형이 필요합니다. 설탕과 알코올의 과잉은 여기서 금성을 방해합니다. 수분 공급과 조화로운 일상이 도움이 됩니다.",
      },
      decans: {
        en: "1st decan (Venus): classic Libra grace. 2nd decan (Uranus*): unconventional diplomat. 3rd decan (Mercury): articulate negotiator.", hi: "पहला दशक (शुक्र): क्लासिक तुला अनुग्रह। दूसरा दशक (यूरेनस*): अपरंपरागत राजनयिक। तीसरा दशक (बुध): स्पष्ट वार्ताकार।", ja: "第1デカン（金星）：典型的な天秤の優雅さ。第2デカン：型破りな外交官。第3デカン（水星）：雄弁な交渉者。", ko: "첫 번째 데칸(금성): 고전적인 천칭자리의 우아함. 2번째 데칸(천왕성*): 색다른 외교관. 3번째 데칸(머큐리): 명쾌한 협상가.",
      },
    },
  }),
  rashi("scorpio", {
    number: 8,
    name: { en: "Scorpio", hi: "वृश्चिक", ja: "蠍座", ko: "천갈궁",},
    sanskrit: { en: "Vrishchika", hi: "वृश्चिक", ja: "ヴリシュチカ", ko: "브리쉬치카",},
    dates: { en: "24 Oct – 22 Nov", hi: "24 अक्टूबर - 22 नवंबर", ja: "10月24日 – 11月22日", ko: "10월 24일 – 11월 22일",},
    element: { en: "Water", hi: "पानी", ja: "水", ko: "물",},
    ruler: { en: "Mars (traditional), Ketu (Vedic nuance)", hi: "मंगल (पारंपरिक), केतु (वैदिक बारीकियां)", ja: "火星（伝統）、ケートゥ（ヴェーダ的）", ko: "화성(전통), 케투(베다 뉘앙스)",},
    symbol: { en: "Scorpion", hi: "बिच्छू", ja: "蠍", ko: "투석기",},
    bodyPart: { en: "Reproductive organs", hi: "प्रजनन अंग", ja: "生殖器", ko: "생식기",},
    description: {
      en: "Scorpio dives deep — intense, transformative, and magnetically private. The sign of secrets, regeneration, and psychological power.", hi: "वृश्चिक गहरा गोता लगाता है - तीव्र, परिवर्तनकारी और चुंबकीय रूप से निजी। रहस्य, पुनर्जनन और मनोवैज्ञानिक शक्ति का संकेत।", ja: "蠍座は深く潜る — 強烈、変容的、磁気的に内密。秘密、再生、心理の力の星座。", ko: "전갈자리는 강렬하고 변혁적이며 자기적으로 사적입니다. 비밀, 재생, 심리적 힘의 표시입니다.",
    },
    traits: [
      { en: "Passionate, strategic, loyal", hi: "भावुक, रणनीतिक, वफादार", ja: "情熱的、戦略的、忠実", ko: "열정적, 전략적, 충성심",},
      { en: "All or nothing emotionally", hi: "भावनात्मक रूप से सब कुछ या कुछ भी नहीं", ja: "感情はすべてか無か", ko: "감정적으로 전부 아니면 전무",},
      { en: "Penetrating insight; guards vulnerability", hi: "मर्मज्ञ अंतर्दृष्टि; भेद्यता की रक्षा करता है", ja: "貫く洞察、脆弱性を守る", ko: "관통하는 통찰력; 경비원의 취약성",},
    ],
    sections: {
      nature: {
        en: "Scorpio nature is fixed water — still surface, powerful depths. They research motives, endure crises, and emerge transformed. Trust is earned slowly and valued absolutely.", hi: "वृश्चिक प्रकृति स्थिर जल है - शांत सतह, शक्तिशाली गहराई। वे उद्देश्यों पर शोध करते हैं, संकट सहते हैं और रूपांतरित होकर सामने आते हैं। विश्वास धीरे-धीरे अर्जित किया जाता है और उसकी कद्र पूरी तरह से की जाती है।", ja: "蠍の性質は固定の水 — 静かな表面、強力な深み。動機を調べ、危機に耐え、変容して現れる。信頼はゆっくり得られ絶対に大切にされる。", ko: "전갈자리의 성격은 고정된 물, 즉 고요한 표면, 강력한 깊이입니다. 그들은 동기를 연구하고 위기를 견디며 변화됩니다. 신뢰는 천천히 얻어지며 절대적으로 가치 있게 여겨집니다.",
      },
      career: {
        en: "Psychology, surgery, investigation, occult sciences, finance, research, and crisis management suit Scorpio. They excel where depth and discretion are required.", hi: "मनोविज्ञान, सर्जरी, जांच, गुप्त विज्ञान, वित्त, अनुसंधान और संकट प्रबंधन वृश्चिक राशि के लिए उपयुक्त हैं। जहां गहराई और विवेक की आवश्यकता होती है वहां वे उत्कृष्टता प्राप्त करते हैं।", ja: "心理学、外科、調査、オカルト科学、金融、研究、危機管理が合います。深さと慎重さが要る場で優れます。", ko: "심리학, 수술, 조사, 오컬트 과학, 금융, 연구 및 위기 관리에 적합한 전갈자리입니다. 그들은 깊이와 신중함이 요구되는 곳에서 탁월합니다.",
      },
      relationships: {
        en: "Scorpio partners bond intensely — jealousy and devotion are two sides of one coin. Betrayal is rarely forgiven; loyalty is rewarded with fierce protection.", hi: "वृश्चिक राशि के साझेदार आपस में बहुत गहराई से जुड़ते हैं - ईर्ष्या और भक्ति एक ही सिक्के के दो पहलू हैं। विश्वासघात को शायद ही कभी माफ़ किया जाता है; वफ़ादारी को उग्र सुरक्षा से पुरस्कृत किया जाता है।", ja: "強烈に結びつく — 嫉妬と献身は一枚のコインの両面。裏切りはめったに許されず、忠誠は激しい保護で報われる。", ko: "전갈자리 파트너는 강렬한 유대감을 형성합니다. 질투와 헌신은 동전의 양면입니다. 배신은 거의 용서되지 않습니다. 충성심은 강력한 보호로 보상받습니다.",
      },
      romance: {
        en: "Romance is transformative and private — physical and soul merger sought. Surface-level connection never satisfies.", hi: "रोमांस परिवर्तनकारी और निजी है - शारीरिक और आत्मा का विलय अपेक्षित है। भूतल-स्तरीय कनेक्शन कभी भी संतुष्ट नहीं होता है।", ja: "恋は変容的で私的 — 身体と魂の融合を求める。表面的なつながりでは決して満たされない。", ko: "로맨스는 변혁적이고 사적입니다. 육체적, 영혼적 결합을 추구합니다. 표면 수준 연결은 결코 만족스럽지 않습니다.",
      },
      health: {
        en: "Reproductive system, elimination, and emotional toxins are focal. Suppressed emotion becomes illness. Cleansing practices and honest catharsis heal.", hi: "प्रजनन प्रणाली, उन्मूलन और भावनात्मक विषाक्त पदार्थ इसके केंद्र में हैं। दमित भावना रोग बन जाती है। सफाई अभ्यास और ईमानदार कैथार्सिस ठीक हो जाते हैं।", ja: "生殖器系、排泄、感情の毒素が焦点。抑えた感情が病になる。浄化の実践と正直な浄化が癒す。", ko: "생식 기관, 제거 및 정서적 독소가 중점적으로 다루어집니다. 억압된 감정은 질병이 된다. 클렌징 실천과 정직한 카타르시스가 치유됩니다.",
      },
      decans: {
        en: "1st decan (Mars): pure Scorpio intensity. 2nd decan (Jupiter): philosophical depth. 3rd decan (Moon): emotional mystic.", hi: "पहला दशक (मंगल): शुद्ध वृश्चिक तीव्रता। दूसरा दशक (बृहस्पति): दार्शनिक गहराई। तीसरा दशक (चंद्रमा): भावनात्मक रहस्यवादी।", ja: "第1デカン（火星）：純粋な蠍の強度。第2デカン（木星）：哲学的深さ。第3デカン（月）：感情的神秘家。", ko: "1데칸(화성): 순수한 전갈자리 강도. 2데칸(목성): 철학적 깊이. 3번째 데칸(달): 감정적 신비주의자.",
      },
    },
  }),
  rashi("sagittarius", {
    number: 9,
    name: { en: "Sagittarius", hi: "धनुराशि", ja: "射手座", ko: "궁수",},
    sanskrit: { en: "Dhanu", hi: "धनु", ja: "ダヌ", ko: "다누",},
    dates: { en: "23 Nov – 21 Dec", hi: "23 नवंबर - 21 दिसंबर", ja: "11月23日 – 12月21日", ko: "11월 23일 – 12월 21일",},
    element: { en: "Fire", hi: "आग", ja: "火", ko: "불",},
    ruler: { en: "Jupiter", hi: "बृहस्पति", ja: "木星（グル）", ko: "목성",},
    symbol: { en: "Archer", hi: "धनुराशि", ja: "弓矢", ko: "궁수",},
    bodyPart: { en: "Thighs, hips", hi: "जांघें, कूल्हे", ja: "太もも、腰", ko: "허벅지, 엉덩이",},
    description: {
      en: "Sagittarius aims at truth — optimistic, philosophical, and restless for horizons. Jupiter's sign of expansion, dharma, and long journeys.", hi: "धनु का लक्ष्य सत्य है - आशावादी, दार्शनिक और क्षितिज के लिए बेचैन। बृहस्पति विस्तार, धर्म और लंबी यात्राओं का संकेत है।", ja: "射手座は真理を狙う — 楽観的、哲学的、地平線への落ち着きなさ。グルによる拡大、ダルマ、長旅の星座。", ko: "궁수자리는 낙관적이고 철학적이며 지평에 불안한 진실을 목표로 합니다. 확장, 달마, 긴 여행을 상징하는 목성의 표시입니다.",
    },
    traits: [
      { en: "Adventurous, honest, freedom-loving", hi: "साहसी, ईमानदार, स्वतंत्रता-प्रेमी", ja: "冒険的、正直、自由を愛する", ko: "모험심이 강하고 정직하며 자유를 사랑하는 사람",},
      { en: "Blunt speech; big-picture thinker", hi: "कुंद भाषण; बड़े चित्र विचारक", ja: "率直な言葉、大局観", ko: "무뚝뚝한 연설; 큰 그림을 그리는 사람",},
      { en: "Restless when confined", hi: "सीमित होने पर बेचैन होना", ja: "閉じ込められると落ち着かない", ko: "갇혀 있으면 불안하다",},
    ],
    sections: {
      nature: {
        en: "Sagittarius nature is mutable fire — enthusiastic, candid, and meaning-seeking. They quest for wisdom across cultures and belief systems. Routine without purpose suffocates them.", hi: "धनु राशि का स्वभाव परिवर्तनशील अग्नि है - उत्साही, स्पष्टवादी और अर्थ खोजने वाला। वे संस्कृतियों और विश्वास प्रणालियों में ज्ञान की खोज करते हैं। बिना उद्देश्य की दिनचर्या उनका दम घोंट देती है।", ja: "射手の性質は可変の火 — 熱狂的、率直、意味を求める。文化と信仰体系を越えて智慧を探求。目的のないルーティンは窒息させる。", ko: "궁수자리의 성격은 열정적이고 솔직하며 의미를 추구하는 변덕스러운 불입니다. 그들은 문화와 신념 체계 전반에 걸쳐 지혜를 추구합니다. 목적 없는 일상은 그들을 질식시킨다.",
      },
      career: {
        en: "Teaching, law, publishing, travel, sports, spirituality, and international business suit Sagittarius. Roles with mobility and moral dimension inspire them.", hi: "शिक्षण, कानून, प्रकाशन, यात्रा, खेल, आध्यात्मिकता और अंतर्राष्ट्रीय व्यापार धनु राशि के लिए उपयुक्त हैं। गतिशीलता और नैतिक आयाम वाली भूमिकाएँ उन्हें प्रेरित करती हैं।", ja: "教育、法律、出版、旅行、スポーツ、スピリチュアリティ、国際ビジネスが合います。移動と道徳的次元のある役が鼓舞する。", ko: "교육, 법률, 출판, 여행, 스포츠, 영성 및 국제 비즈니스 정장 궁수자리. 이동성과 도덕적 차원을 갖춘 역할은 그들에게 영감을 줍니다.",
      },
      relationships: {
        en: "Sagittarius partners need freedom and shared adventure. Honesty is mandatory; possessiveness repels. They grow through partners who expand their worldview.", hi: "धनु राशि के साझेदारों को स्वतंत्रता और साझा रोमांच की आवश्यकता होती है। ईमानदारी अनिवार्य है; अधिकारिता विकर्षित करती है। वे उन साझेदारों के माध्यम से बढ़ते हैं जो उनके विश्वदृष्टिकोण का विस्तार करते हैं।", ja: "自由と共有の冒険が必要。正直は必須、所有欲は反発する。世界観を広げる相手を通じて成長する。", ko: "궁수자리 파트너에게는 자유와 모험의 공유가 필요합니다. 정직은 필수입니다. 소유욕은 반발한다. 그들은 세계관을 확장하는 파트너를 통해 성장합니다.",
      },
      romance: {
        en: "Romance is exploratory — travel dates, philosophical nights, laughter. They love openly and fear boredom more than rejection.", hi: "रोमांस खोजपूर्ण है - यात्रा की तारीखें, दार्शनिक रातें, हँसी। वे खुलकर प्यार करते हैं और अस्वीकृति से ज्यादा बोरियत से डरते हैं।", ja: "恋は探検的 — 旅のデート、哲学的な夜、笑い。公然と愛し、拒絶より退屈を恐れる。", ko: "로맨스는 탐험적입니다. 여행 날짜, 철학적인 밤, 웃음이 있습니다. 그들은 공개적으로 사랑하고 거절보다 지루함을 더 두려워합니다.",
      },
      health: {
        en: "Hips, thighs, liver, and weight from excess suit Sagittarius vulnerabilities. Jupiter can over-expand — moderation in food and drink preserves vitality.", hi: "कूल्हे, जांघें, यकृत और अतिरिक्त वजन धनु की कमजोरियों के अनुकूल हैं। बृहस्पति अति-विस्तारित हो सकता है - भोजन और पेय में संयम जीवन शक्ति को बरकरार रखता है।", ja: "腰、太もも、肝臓、過剰による体重が脆弱点。木星は過度に拡大しうる — 食酒の節制が活力を保つ。", ko: "엉덩이, 허벅지, 간 및 체중 초과로 인해 궁수자리 취약점이 발생합니다. 목성은 과도하게 확장될 수 있습니다. 음식과 음료를 적당히 섭취하면 활력이 보존됩니다.",
      },
      decans: {
        en: "1st decan (Jupiter): pure Sagittarius optimism. 2nd decan (Mars): crusading archer. 3rd decan (Sun): noble teacher.", hi: "पहला दशक (बृहस्पति): शुद्ध धनु आशावाद। दूसरा दशक (मंगल): धर्मयुद्ध करने वाला धनुर्धर। तीसरा दशक (सूर्य): महान शिक्षक।", ja: "第1デカン（木星）：純粋な射手の楽観。第2デカン（火星）：十字軍の射手。第3デカン（太陽）：高貴な教師。", ko: "1데칸(목성): 순수한 궁수자리 낙천주의. 두 번째 데칸(화성): 십자군 궁수. 3데칸(일) : 고귀한 스승.",
      },
    },
  }),
  rashi("capricorn", {
    number: 10,
    name: { en: "Capricorn", hi: "मकर", ja: "山羊座", ko: "염소자리",},
    sanskrit: { en: "Makara", hi: "मकर", ja: "マカラ", ko: "마카라",},
    dates: { en: "22 Dec – 20 Jan", hi: "22 दिसंबर - 20 जनवरी", ja: "12月22日 – 1月20日", ko: "12월 22일 – 1월 20일",},
    element: { en: "Earth", hi: "धरती", ja: "地", ko: "지구",},
    ruler: { en: "Saturn", hi: "शनि ग्रह", ja: "土星（シャニ）", ko: "토성",},
    symbol: { en: "Sea-goat", hi: "समुद्री बकरी", ja: "海山羊", ko: "바다염소",},
    bodyPart: { en: "Knees, bones", hi: "घुटने, हड्डियाँ", ja: "膝、骨", ko: "무릎, 뼈",},
    description: {
      en: "Capricorn climbs — disciplined, ambitious, and patient for legacy. Saturn's sign of structure, responsibility, and mastery over time.", hi: "मकर राशि चढ़ते हैं - अनुशासित, महत्वाकांक्षी और विरासत के लिए धैर्यवान। शनि संरचना, जिम्मेदारी और समय पर प्रभुत्व का प्रतीक है।", ja: "山羊座は登る — 規律ある、野心的、遺産のために忍耐強い。シャニによる構造、責任、時間を超えた熟達の星座。", ko: "염소자리 등반 - 규율이 있고 야심적이며 유산에 대한 인내심이 있습니다. 시간이 지남에 따라 토성의 구조, 책임 및 지배력을 나타내는 표시입니다.",
    },
    traits: [
      { en: "Responsible, strategic, reserved", hi: "जिम्मेदार, रणनीतिक, आरक्षित", ja: "責任感、戦略的、控えめ", ko: "책임감 있고 전략적이며 내성적입니다.",},
      { en: "Delayed gratification masters", hi: "विलंबित संतुष्टि स्वामी", ja: "遅延満足の達人", ko: "지연된 만족의 달인",},
      { en: "Dry humour beneath serious exterior", hi: "गंभीर बाहरी आवरण के नीचे शुष्क हास्य", ja: "真面目な外見の下のドライなユーモア", ko: "진지한 겉모습 아래에 있는 건조한 유머",},
    ],
    sections: {
      nature: {
        en: "Capricorn nature is cardinal earth — initiating practical structures. They respect hierarchy, honour duty, and measure life in achievements. Softness appears only to trusted few.", hi: "मकर राशि की प्रकृति कार्डिनल पृथ्वी है - जो व्यावहारिक संरचनाओं की शुरुआत करती है। वे पदानुक्रम का सम्मान करते हैं, कर्तव्य का सम्मान करते हैं और जीवन को उपलब्धियों में मापते हैं। कोमलता केवल कुछ विश्वसनीय लोगों को ही दिखाई देती है।", ja: "山羊の性質は活動の地 — 実用的構造を始める。階層を尊重し、義務を重んじ、成果で人生を測る。柔らかさは信頼した少数にだけ現れる。", ko: "염소자리 자연은 기본 지구로서 실용적인 구조를 시작합니다. 그들은 계층 구조를 존중하고 의무를 존중하며 성취로 삶을 평가합니다. 부드러움은 신뢰할 수 있는 소수에게만 나타납니다.",
      },
      career: {
        en: "Administration, government, engineering, architecture, mining, and executive leadership suit Capricorn. They build institutions that outlast trends.", hi: "प्रशासन, सरकार, इंजीनियरिंग, वास्तुकला, खनन और कार्यकारी नेतृत्व मकर राशि के लिए उपयुक्त हैं। वे ऐसे संस्थान बनाते हैं जो रुझानों से आगे रहते हैं।", ja: "行政、政府、工学、建築、鉱業、経営幹部が合います。流行を超えて残る制度を築く。", ko: "관리, 정부, 엔지니어링, 건축, 광업 및 경영진 리더십이 염소자리에 적합합니다. 그들은 추세보다 오래 지속되는 기관을 구축합니다.",
      },
      relationships: {
        en: "Capricorn partners are dependable and slow to open. They show love through provision and long-term planning. Work-life balance must be negotiated.", hi: "मकर राशि के पार्टनर भरोसेमंद होते हैं और खुलने में धीमे होते हैं। वे प्रावधान और दीर्घकालिक योजना के माध्यम से प्यार दिखाते हैं। कार्य-जीवन संतुलन पर बातचीत होनी चाहिए।", ja: "頼りになり、心を開くのは遅い。養うことと長期計画で愛を示す。仕事と生活のバランスは交渉が必要。", ko: "염소자리 파트너는 신뢰할 수 있고 개방 속도가 느립니다. 그들은 공급과 장기 계획을 통해 사랑을 보여줍니다. 일과 삶의 균형을 협상해야 합니다.",
      },
      romance: {
        en: "Romance matures like fine wine — traditional courtship, status awareness, and commitment over flirtation. They take vows seriously.", hi: "रोमांस बढ़िया वाइन की तरह परिपक्व होता है - पारंपरिक प्रेमालाप, स्थिति जागरूकता, और छेड़खानी पर प्रतिबद्धता। वे प्रतिज्ञाओं को गंभीरता से लेते हैं।", ja: "恋はワインのように熟す — 伝統的な求愛、地位への意識、浮気より誓い。誓いを真剣に受け止める。", ko: "로맨스는 고급 와인처럼 성숙해집니다. 전통적인 구애, 지위 인식, 추파에 대한 헌신입니다. 그들은 서약을 진지하게 받아들입니다.",
      },
      health: {
        en: "Knees, joints, teeth, and skin dryness need care. Saturn can bring melancholy affecting bones. Structure in sleep, calcium, and gentle movement helps.", hi: "घुटनों, जोड़ों, दांतों और त्वचा की शुष्कता के लिए देखभाल की आवश्यकता होती है। शनि हड्डियों को प्रभावित कर उदासी ला सकता है। नींद में संरचना, कैल्शियम और हल्की हरकत मदद करती है।", ja: "膝、関節、歯、皮膚の乾燥に注意。土星は骨に影響する憂鬱をもたらしうる。睡眠、カルシウム、穏やかな運動の構造が助けになる。", ko: "무릎, 관절, 치아, 피부 건조 등은 관리가 필요합니다. 토성은 뼈에 우울한 영향을 미칠 수 있습니다. 수면 구조, 칼슘, 부드러운 움직임이 도움이 됩니다.",
      },
      decans: {
        en: "1st decan (Saturn): pure Capricorn ambition. 2nd decan (Venus): cultured achiever. 3rd decan (Mercury): strategic planner.", hi: "पहला दशक (शनि): शुद्ध मकर महत्वाकांक्षा। दूसरा दशमांश (शुक्र): सुसंस्कृत उपलब्धि प्राप्तकर्ता। तीसरा दशक (बुध): रणनीतिक योजनाकार।", ja: "第1デカン（土星）：純粋な山羊の野心。第2デカン（金星）：教養ある達成者。第3デカン（水星）：戦略的計画者。", ko: "첫 번째 데칸(토성): 순수한 염소자리 야망. 두 번째 데칸(금성): 교양 있는 성취자. 3번째 데칸(머큐리): 전략 기획자.",
      },
    },
  }),
  rashi("aquarius", {
    number: 11,
    name: { en: "Aquarius", hi: "कुम्भ", ja: "水瓶座", ko: "물병자리",},
    sanskrit: { en: "Kumbha", hi: "कुम्भ", ja: "クンバ", ko: "쿰바",},
    dates: { en: "21 Jan – 18 Feb", hi: "21 जनवरी - 18 फरवरी", ja: "1月21日 – 2月18日", ko: "1월 21일 – 2월 18일",},
    element: { en: "Air", hi: "वायु", ja: "風", ko: "공기",},
    ruler: { en: "Saturn", hi: "शनि ग्रह", ja: "土星（シャニ）", ko: "토성",},
    symbol: { en: "Water-bearer", hi: "जल धारण करनेवाला", ja: "水を注ぐ者", ko: "물을 나르는 자",},
    bodyPart: { en: "Calves, ankles", hi: "पिंडलियां, टखने", ja: "脛、足首", ko: "종아리, 발목",},
    description: {
      en: "Aquarius pours new ideas — humanitarian, unconventional, and future-oriented. Saturn's airy sign of systems, networks, and collective progress.", hi: "कुंभ नए विचार डालता है - मानवीय, अपरंपरागत और भविष्योन्मुखी। सिस्टम, नेटवर्क और सामूहिक प्रगति का शनि का हवाई संकेत।", ja: "水瓶座は新しい考えを注ぐ — 人道的、型破り、未来志向。シャニの風の星座、システム、ネットワーク、集合的進歩。", ko: "물병자리는 인도주의적이고, 틀에 얽매이지 않으며, 미래 지향적인 새로운 아이디어를 쏟아냅니다. 토성의 시스템, 네트워크 및 집단적 진보에 대한 바람이 잘 통하는 표시입니다.",
    },
    traits: [
      { en: "Independent, inventive, idealistic", hi: "स्वतंत्र, आविष्कारशील, आदर्शवादी", ja: "独立的、独創的、理想主義", ko: "독립적이고 창의적이며 이상주의적입니다.",},
      { en: "Friendly yet emotionally detached at times", hi: "मिलनसार लेकिन कभी-कभी भावनात्मक रूप से अलग", ja: "友好的だが時に感情的に距離がある", ko: "친절하지만 때로는 감정적으로 분리되어 있음",},
      { en: "Rebels against obsolete tradition", hi: "अप्रचलित परंपरा के विरुद्ध विद्रोह", ja: "古い伝統に反抗", ko: "낡은 전통에 반대하는 반란자들",},
    ],
    sections: {
      nature: {
        en: "Aquarius nature is fixed air — holding ideals firmly while appearing detached. They think in systems and communities. Personal feelings are often processed intellectually.", hi: "कुंभ राशि का स्वभाव स्थिर स्वभाव वाला होता है - अलग दिखने के साथ-साथ आदर्शों को मजबूती से पकड़ना। वे सिस्टम और समुदायों में सोचते हैं। व्यक्तिगत भावनाओं को अक्सर बौद्धिक रूप से संसाधित किया जाता है।", ja: "水瓶の性質は固定の風 — 離れているように見えながら理想を固く保つ。システムと共同体で考える。個人の感情はしばしば知的に処理される。", ko: "물병자리의 성격은 고정된 공기입니다. 분리된 것처럼 보이면서도 이상을 굳건히 유지합니다. 그들은 시스템과 커뮤니티에서 생각합니다. 개인적인 감정은 종종 지적으로 처리됩니다.",
      },
      career: {
        en: "Technology, science, social reform, aviation, astrology, and NGO work suit Aquarius. They innovate where old models fail society.", hi: "प्रौद्योगिकी, विज्ञान, सामाजिक सुधार, विमानन, ज्योतिष और एनजीओ कार्य कुंभ राशि के लिए उपयुक्त हैं। वे वहां नवप्रवर्तन करते हैं जहां पुराने मॉडल समाज को विफल कर देते हैं।", ja: "技術、科学、社会改革、航空、占星術、NGOが合います。古いモデルが社会を失敗させる場所で革新する。", ko: "기술, 과학, 사회 개혁, 항공, 점성술 및 NGO 작업복 물병자리. 그들은 오래된 모델이 사회에서 실패하는 부분을 혁신합니다.",
      },
      relationships: {
        en: "Aquarius partners value friendship within romance. They need intellectual equality and space. Emotional demands can feel claustrophobic.", hi: "कुंभ राशि के पार्टनर रोमांस के भीतर दोस्ती को भी महत्व देते हैं। उन्हें बौद्धिक समानता और स्थान की आवश्यकता है। भावनात्मक मांगें क्लौस्ट्रफ़ोबिक महसूस कर सकती हैं।", ja: "恋の中の友情を重視。知的平等とスペースが必要。感情的な要求は窮屈に感じることも。", ko: "물병자리 파트너는 로맨스 내에서 우정을 중요하게 생각합니다. 지적 평등과 공간이 필요합니다. 정서적 요구는 폐쇄공포증을 느낄 수 있습니다.",
      },
      romance: {
        en: "Romance is unconventional — unusual dates, causes shared, freedom honoured. They love humanity broadly and individuals selectively.", hi: "रोमांस अपरंपरागत है - असामान्य तिथियां, साझा कारण, स्वतंत्रता का सम्मान। वे व्यापक रूप से मानवता से प्रेम करते हैं और व्यक्तियों से चयनात्मक रूप से।", ja: "恋は型破り — 珍しいデート、共有する大義、尊重される自由。広く人類を愛し、個人は選択的に。", ko: "로맨스는 틀에 얽매이지 않습니다. 특이한 날짜, 목적 공유, 자유 존중입니다. 그들은 인류를 광범위하게 사랑하고 개인을 선택적으로 사랑합니다.",
      },
      health: {
        en: "Circulation, ankles, and nervous tension from overstimulation are themes. Saturn plus air can dry the system. Regular grounding and community balance help.", hi: "परिसंचरण, टखने और अत्यधिक उत्तेजना से तंत्रिका तनाव विषय हैं। शनि और वायु प्रणाली को शुष्क कर सकते हैं। नियमित ग्राउंडिंग और सामुदायिक संतुलन मदद करते हैं।", ja: "循環、足首、過刺激による神経緊張がテーマ。土星と風はシステムを乾かしうる。定期的なグラウンディングと共同体のバランスが助けになる。", ko: "순환, 발목, 과도한 자극으로 인한 신경 긴장이 테마입니다. 토성과 공기가 시스템을 건조시킬 수 있습니다. 정기적인 접지 및 지역사회 균형 유지에 도움이 됩니다.",
      },
      decans: {
        en: "1st decan (Saturn): structured reformer. 2nd decan (Mercury): inventive communicator. 3rd decan (Venus): artistic humanist.", hi: "प्रथम दशमांश (शनि): संरचित सुधारक। दूसरा दशक (बुध): आविष्कारशील संचारक। तीसरा दशक (शुक्र): कलात्मक मानवतावादी।", ja: "第1デカン（土星）：構造化された改革者。第2デカン（水星）：独創的コミュニケーター。第3デカン（金星）：芸術的人道主義者。", ko: "첫 번째 데칸(토성): 구조화된 개혁자. 2데칸(수성): 창의적인 의사소통 장치. 3데칸(비너스): 예술적 인문주의자.",
      },
    },
  }),
  rashi("pisces", {
    number: 12,
    name: { en: "Pisces", hi: "मीन राशि", ja: "魚座", ko: "물고기",},
    sanskrit: { en: "Meena", hi: "मीना", ja: "ミーナ", ko: "미나",},
    dates: { en: "19 Feb – 20 Mar", hi: "19 फरवरी - 20 मार्च", ja: "2月19日 – 3月20日", ko: "2월 19일 – 3월 20일",},
    element: { en: "Water", hi: "पानी", ja: "水", ko: "물",},
    ruler: { en: "Jupiter", hi: "बृहस्पति", ja: "木星（グル）", ko: "목성",},
    symbol: { en: "Two fish", hi: "दो मछली", ja: "二匹の魚", ko: "물고기 두 마리",},
    bodyPart: { en: "Feet", hi: "पैर", ja: "足", ko: "피트",},
    description: {
      en: "Pisces dissolves boundaries — compassionate, imaginative, and spiritually porous. The closing sign of the zodiac, merging self with the ocean of consciousness.", hi: "मीन राशि वाले सीमाओं को तोड़ देते हैं - दयालु, कल्पनाशील और आध्यात्मिक रूप से छिद्रपूर्ण। राशि चक्र का समापन चिन्ह, स्वयं को चेतना के सागर में विलीन कर रहा है।", ja: "魚座は境界を溶かす — 慈悲深い、想像力豊か、霊的に透過的。黄道の最後の星座、自己を意識の海に溶け合わせる。", ko: "물고기자리는 동정심이 많고 상상력이 풍부하며 영적으로 다공성인 경계를 해소합니다. 자아를 의식의 바다와 합치는 황도대의 닫는 표시입니다.",
    },
    traits: [
      { en: "Empathic, artistic, dreamy", hi: "सहानुभूतिपूर्ण, कलात्मक, स्वप्निल", ja: "共感的、芸術的、夢見がち", ko: "공감력이 뛰어나고 예술적이며 몽환적입니다.",},
      { en: "Absorbs others' moods easily", hi: "दूसरों के मूड को आसानी से आत्मसात कर लेते हैं", ja: "他者の気分を容易に吸収", ko: "다른 사람의 기분을 쉽게 흡수합니다.",},
      { en: "Escapism when overwhelmed", hi: "अभिभूत होने पर पलायनवाद", ja: "圧倒されると逃避", ko: "압도당할 때의 도피",},
    ],
    sections: {
      nature: {
        en: "Pisces nature is mutable water — flowing, receptive, and symbol-rich. They sense undercurrents others miss. Reality and dream intertwine; art and devotion are natural languages.", hi: "मीन राशि का स्वभाव परिवर्तनशील जल है - प्रवाहमान, ग्रहणशील और प्रतीक-समृद्ध। वे उन अंतर्धाराओं को महसूस करते हैं जिन्हें दूसरे भूल जाते हैं। हकीकत और सपना आपस में जुड़े हुए हैं; कला और भक्ति प्राकृतिक भाषाएँ हैं।", ja: "魚の性質は可変の水 — 流れ、受容的、象徴豊か。他者が見逃す底流を感じる。現実と夢が絡み、芸術と献身が自然な言語。", ko: "물고기자리의 본성은 유동적이고 수용적이며 상징이 풍부한 변하기 쉬운 물입니다. 그들은 다른 사람들이 놓친 저류를 감지합니다. 현실과 꿈이 얽혀 있습니다. 예술과 헌신은 자연어이다.",
      },
      career: {
        en: "Music, film, healing arts, charity, marine work, poetry, and spiritual counselling suit Pisces. They thrive where imagination serves compassion.", hi: "संगीत, फिल्म, उपचार कला, दान, समुद्री कार्य, कविता और आध्यात्मिक परामर्श मीन राशि वालों के लिए उपयुक्त हैं। वे वहां पनपते हैं जहां कल्पना करुणा की सेवा करती है।", ja: "音楽、映画、癒しの芸術、慈善、海洋仕事、詩、スピリチュアルカウンセリングが合います。想像が慈悲に仕える場で力を発揮。", ko: "음악, 영화, 치유 예술, 자선 활동, 해양 활동, 시, 영적 상담에 적합한 물고기자리입니다. 그들은 상상력이 연민을 제공하는 곳에서 번창합니다.",
      },
      relationships: {
        en: "Pisces partners merge empathically — sometimes losing boundaries. They forgive readily but need partners who anchor them in reality.", hi: "मीन राशि के साथी सहानुभूतिपूर्वक विलीन हो जाते हैं - कभी-कभी सीमाएं खो देते हैं। वे आसानी से माफ कर देते हैं लेकिन उन्हें ऐसे साझेदारों की ज़रूरत होती है जो उन्हें वास्तविकता में सहारा दें।", ja: "共感的に融合 — 時に境界を失う。容易に許すが現実に錨を下ろす相手が必要。", ko: "물고기자리 파트너는 공감적으로 합쳐지며 때로는 경계를 잃기도 합니다. 그들은 쉽게 용서하지만 그들을 현실에 고정시켜줄 파트너가 필요합니다.",
      },
      romance: {
        en: "Romance is poetic and sacrificial — soul-mate longing, music, and spiritual union idealised. They love with the whole ocean.", hi: "रोमांस काव्यात्मक और बलिदानपूर्ण है - आत्मा-साथी की लालसा, संगीत और आध्यात्मिक मिलन को आदर्श बनाया गया है। वे पूरे सागर से प्यार करते हैं.", ja: "恋は詩的で献身的 — ソウルメイトの憧れ、音楽、霊的結合の理想化。海全体で愛する。", ko: "로맨스는 시적이며 희생적입니다. 소울메이트에 대한 갈망, 음악, 영적 결합이 이상화되어 있습니다. 그들은 바다 전체를 사랑합니다.",
      },
      health: {
        en: "Feet, lymphatic system, and addiction susceptibility are sensitive. Emotional overwhelm needs creative and spiritual outlets. Boundaries protect health.", hi: "पैर, लसीका तंत्र और व्यसन की संवेदनशीलता संवेदनशील हैं। भावनात्मक उत्साह के लिए रचनात्मक और आध्यात्मिक आउटलेट की आवश्यकता होती है। सीमाएँ स्वास्थ्य की रक्षा करती हैं।", ja: "足、リンパ系、依存の感受性が敏感。感情の圧倒は創造的・霊的出口が必要。境界が健康を守る。", ko: "발, 림프계 및 중독 감수성이 민감합니다. 정서적 압도에는 창의적이고 영적인 배출구가 필요합니다. 경계는 건강을 보호합니다.",
      },
      decans: {
        en: "1st decan (Jupiter): mystical dreamer. 2nd decan (Mars): spiritual warrior. 3rd decan (Pluto*): depth mystic (*Western decan).", hi: "प्रथम दशमांश (बृहस्पति): रहस्यमय स्वप्नद्रष्टा। दूसरा दशक (मंगल): आध्यात्मिक योद्धा। तीसरा डिकन (प्लूटो*): गहराई रहस्यवादी (*पश्चिमी डिकन)।", ja: "第1デカン（木星）：神秘的な夢見人。第2デカン（火星）：霊的戦士。第3デカン：深みの神秘家。", ko: "1데칸(목성): 신비로운 몽상가. 2데칸(화성): 영적 전사. 세 번째 데칸(명왕성*): 깊이 신비주의(*서부 데칸).",
      },
    },
  }),
];
