import type { ContentBlock, AspectRule } from "./types";
import { aspectImages } from "./asset-paths";

export const aspectsIntro: ContentBlock = {
  title: { en: "Drishti — Planetary Gaze", hi: "दृष्टि - ग्रहों की दृष्टि", ja: "ドリシュティ — 惑星の視線", ko: "Drishti — 행성의 시선",},
  paragraphs: [
    {
      en: "Drishti means \"sight\" or \"aspect.\" A Graha influences not only the house it occupies, but also other houses it beholds. Unlike many Western techniques that measure exact degrees, classical Jyotish aspects are counted by whole-sign houses from the planet's position.", hi: "दृष्टि का अर्थ है \"दृष्टि\" या \"पहलू\"। एक ग्रह न केवल उस घर को प्रभावित करता है जिस पर वह रहता है, बल्कि अन्य घरों को भी प्रभावित करता है जिसे वह देखता है। सटीक डिग्री मापने वाली कई पश्चिमी तकनीकों के विपरीत, शास्त्रीय ज्योतिष पहलुओं को ग्रह की स्थिति से पूरे-राशि घरों द्वारा गिना जाता है।", ja: "ドリシュティは「視線」「アスペクト」の意味です。惑星は座るハウスだけでなく、「見ている」他のハウスにも影響を及ぼします。西洋の度数精密アスペクトとは異なり、古典インド占星術では惑星がいる星座全体のハウスから数えます。", ko: "Drishti는 \"시력\" 또는 \"측면\"을 의미합니다. Graha는 자신이 거주하는 집뿐만 아니라 자신이 보는 다른 집에도 영향을 미칩니다. 정확한 각도를 측정하는 많은 서양 기술과 달리 고전적인 Jyotish 측면은 행성의 위치에서 전체 사인 하우스로 계산됩니다.",
    },
    {
      en: "Think of each planet casting beams of its nature across the chart. Benefic aspects bring growth and protection; malefic aspects activate pressure, conflict, or necessary discipline in the aspected house topics.", hi: "प्रत्येक ग्रह द्वारा चार्ट पर अपनी प्रकृति की किरणें डालने के बारे में सोचें। लाभकारी पहलू विकास और सुरक्षा लाते हैं; अशुभ पहलू पहलू वाले घर के विषयों में दबाव, संघर्ष या आवश्यक अनुशासन को सक्रिय करते हैं।", ja: "各グラハがチャートにエネルギーの光を放つと考えましょう。吉星のアスペクトは成長と守護を、凶星のアスペクトはプレッシャーや対立、必要な規律をアスペクト先の人生領域に活性化します。", ko: "차트 전체에 걸쳐 각각의 행성이 그 본성의 광선을 던지는 것을 생각해 보십시오. 유익한 측면은 성장과 보호를 가져옵니다. 해로운 측면은 측면의 하우스 주제에서 압력, 갈등 또는 필요한 규율을 활성화합니다.",
    },
  ],
};

export const universalAspect: ContentBlock = {
  title: { en: "The Universal 7th Aspect", hi: "सार्वभौमिक सातवाँ पहलू", ja: "すべての惑星の第7アスペクト", ko: "우주의 7번째 측면",},
  paragraphs: [
    {
      en: "Every Graha aspects the 7th house from its seat — a full-strength opposition across the wheel. A planet in the 1st house aspects the 7th; one in the 4th aspects the 10th; one in the 5th aspects the 11th, and so on.", hi: "प्रत्येक ग्रह अपनी सीट से 7वें घर को देखता है - पहिए के पार एक पूर्ण शक्ति वाला विपक्ष। पहले घर में एक ग्रह 7वें घर को देखता है; चौथे पहलुओं में से एक 10 वां; 5वें पहलू में से एक, 11वां, इत्यादि।", ja: "すべての惑星は自分の位置から第7ハウスにアスペクトします。これはオポジション — チャートの輪を横切る直接的で強い視線です。第1ハウスの惑星は第7ハウスを、第4ハウスは第10ハウスを見ます。", ko: "모든 Graha는 좌석에서 7하우스를 측면으로 바라보고 있습니다. 이는 바퀴 전체에 걸쳐 완전한 반대입니다. 1하우스에 있는 행성은 7하우스와 측면을 이룹니다. 4번째 측면 중 하나는 10번째 측면입니다. 5번째 측면 중 하나, 11번째 측면 중 하나, 등등.",
    },
  ],
  bullets: [
    { en: "Sun in House 3 → aspects House 9 (father, dharma, fortune)", hi: "सूर्य भाव 3 में → भाव 9 (पिता, धर्म, भाग्य) को देखता है", ja: "第3ハウスの太陽 → 第9ハウス（父、ダルマ、幸運）にアスペクト", ko: "3하우스의 태양 → 9하우스 측면(아버지, 달마, 행운)",},
    { en: "Moon in House 7 → aspects House 1 (self, body, personality)", hi: "भाव 7 में चंद्रमा → भाव 1 पर दृष्टि (स्वयं, शरीर, व्यक्तित्व)", ja: "第7ハウスの月 → 第1ハウス（自己、身体、人格）にアスペクト", ko: "7하우스의 달 → 1하우스 측면(자기, 신체, 성격)",},
    { en: "Mercury in House 10 → aspects House 4 (home, mother, peace)", hi: "भाव 10 में बुध → भाव 4 (घर, माँ, शांति) पर दृष्टि रखता है", ja: "第10ハウスの水星 → 第4ハウス（家庭、母、安らぎ）にアスペクト", ko: "집 10의 수성 → 집 4(가정, 어머니, 평화) 측면",},
  ],
};

export const specialAspects: AspectRule[] = [
  {
    planet: { en: "Mars (Mangal)", hi: "मंगल (मंगल)", ja: "火星（マンガル）", ko: "화성(망갈)",},
    houses: "4th, 7th, 8th",
    description: {
      en: "Mars casts additional Drishti on the 4th, 7th, and 8th houses from its position. This triple gaze heats domestic peace (4th), partnership (7th), and transformation or shared resources (8th). Mars aspects energize — they can manifest as courage, surgery, property disputes, or marital friction depending on dignity and house topics.", hi: "मंगल अपने स्थान से चौथे, सातवें और आठवें भाव पर अतिरिक्त दृष्टि डालता है। यह ट्रिपल टकटकी घरेलू शांति (चौथे), साझेदारी (7वें), और परिवर्तन या साझा संसाधनों (8वें) को गर्म करती है। मंगल ग्रह के पहलू ऊर्जा प्रदान करते हैं - वे गरिमा और घर के विषयों के आधार पर साहस, सर्जरी, संपत्ति विवाद या वैवाहिक घर्षण के रूप में प्रकट हो सकते हैं।", ja: "火星は座る位置から第4・7・8ハウスに追加のドリシュティを持ちます。家庭（4）、パートナーシップ（7）、変容・共有資源（8）を熱せます。火星のアスペクトは活性化 — 品位とハウスのテーマにより、勇気、外科、不動産の争い、婚姻の摩擦として現れます。", ko: "화성은 그 위치에서 4하우스, 7하우스, 8하우스에 드리시티를 추가로 시전합니다. 이 삼중 시선은 국내 평화(4위), 파트너십(7위), 변화 또는 자원 공유(8위)를 가열합니다. 화성의 측면은 활력을 줍니다. 존엄성과 집안 주제에 따라 용기, 수술, 재산 분쟁 또는 결혼 갈등으로 나타날 수 있습니다.",
    },
  },
  {
    planet: { en: "Jupiter (Guru)", hi: "बृहस्पति (गुरु)", ja: "木星（グル）", ko: "목성(구루)",},
    houses: "5th, 7th, 9th",
    description: {
      en: "Jupiter's special aspects fall on the 5th, 7th, and 9th houses — the trine houses of creativity, children, romance, partnership, and higher wisdom. Guru's gaze expands, protects, and often delivers teachers or grace in those domains. Jupiter aspects are among the most welcomed in chart judgment.", hi: "बृहस्पति की विशेष दृष्टि 5वें, 7वें और 9वें घरों पर पड़ती है - रचनात्मकता, बच्चे, रोमांस, साझेदारी और उच्च ज्ञान के त्रिनेत्र घर। गुरु की दृष्टि उन क्षेत्रों में फैलती है, सुरक्षा करती है और अक्सर शिक्षक या कृपा प्रदान करती है। चार्ट निर्णय में बृहस्पति के पहलुओं का सबसे अधिक स्वागत किया जाता है।", ja: "木星の特別なアスペクトは第5・7・9ハウス — 創造性、子供、恋愛、パートナーシップ、高次の智慧のトライン領域です。グル の視線は拡大・守護し、師や恵みをもたらすことが多く、チャート判断で最も歓迎されるアスペクトのひとつです。", ko: "목성의 특별한 측면은 창의성, 어린이, 로맨스, 파트너십, 더 높은 지혜의 삼위일체 하우스인 5하우스, 7하우스, 9하우스에 있습니다. 전문가의 시선은 해당 영역에서 교사나 은혜를 확장하고 보호하며 종종 전달합니다. 목성의 측면은 차트 판단에서 가장 환영받는 측면 중 하나입니다.",
    },
  },
  {
    planet: { en: "Saturn (Shani)", hi: "शनि (शनि)", ja: "土星（シャニ）", ko: "토성(샤니)",},
    houses: "3rd, 7th, 10th",
    description: {
      en: "Saturn additionally aspects the 3rd, 7th, and 10th houses — courage and siblings (3rd), marriage and contracts (7th), career and public status (10th). Shani's gaze demands responsibility and endurance. It is not merely \"bad\"; Saturn aspects build structures that last when met with patience.", hi: "शनि अतिरिक्त रूप से तीसरे, सातवें और दसवें घर को भी देखता है - साहस और भाई-बहन (तीसरा), विवाह और अनुबंध (7वां), करियर और सार्वजनिक स्थिति (10वां)। शनि की नज़र जिम्मेदारी और सहनशक्ति की मांग करती है। यह केवल \"बुरा\" नहीं है; शनि की दृष्टि ऐसी संरचनाओं का निर्माण करती है जो धैर्य के साथ मिलने पर टिकी रहती हैं।", ja: "土星は第3・7・10ハウスに追加でアスペクト — 勇気と兄弟（3）、結婚と契約（7）、キャリアと社会的地位（10）です。シャニの視線は責任と忍耐を求めます。「悪い」だけではなく、土星のアスペクトは忍耐と向き合えば長く続く構造を築きます。", ko: "토성은 용기와 형제자매(3위), 결혼과 계약(7위), 직업과 공적인 지위(10위) 등 3하우스, 7하우스, 10하우스의 측면을 추가로 나타냅니다. Shani의 시선에는 책임감과 인내가 필요합니다. 그것은 단순히 \"나쁜\" 것이 아닙니다. 토성의 측면은 인내심을 가질 때 지속되는 구조를 구축합니다.",
    },
  },
  {
    planet: { en: "Rahu & Ketu", hi: "राहु और केतु", ja: "ラーフとケートゥ", ko: "라후 & 케투",},
    houses: "7th only",
    description: {
      en: "The shadow nodes aspect only the 7th house from their placement — a concentrated, obsessive opposition. Rahu's 7th aspect magnifies worldly craving in the aspected house; Ketu's 7th aspect spiritualizes or dissolves matters of that house, sometimes creating detachment in partnerships.", hi: "छाया नोड्स अपने स्थान से केवल 7वें घर को देखते हैं - एक केंद्रित, जुनूनी विरोध। राहु की सातवीं दृष्टि दृष्टि वाले घर में सांसारिक लालसा को बढ़ाती है; केतु की सातवीं दृष्टि उस घर के मामलों को आध्यात्मिक या विघटित कर देती है, कभी-कभी साझेदारी में अलगाव पैदा करती है।", ja: "影の交点ラーフとケートゥは第7ハウスにのみアスペクト — 集中した執着的なオポジションです。ラーフの第7アスペクトはアスペクト先の世俗的欲求を増幅し、ケートゥはその領域を霊化または溶解させ、パートナーシップに距離を生むこともあります。", ko: "섀도우 노드는 배치된 곳에서 7번째 하우스만을 바라보고 있습니다. 이는 집중적이고 강박적인 반대입니다. Rahu의 일곱 번째 측면은 측면 집에서 세속적 갈망을 확대합니다. 케투의 7번째 측면은 그 하우스의 문제를 영적으로 만들거나 용해시키며, 때로는 파트너십에서 분리를 만듭니다.",
    },
  },
];

export const conjunctionBlock: ContentBlock = {
  title: { en: "Conjunction (Yuti) — Shared Houses", hi: "युति (युति) - साझा मकान", ja: "合（ユティ）— 同じハウス", ko: "결합(Yuti) — 공유 주택",},
  paragraphs: [
    {
      en: "When two or more Grahas occupy the same sign and house, they are in conjunction (yuti). Their significations blend — sometimes harmoniously, sometimes like competing voices in one room. The strongest planet (by degrees, dignity, or natural strength) often directs the combined result.", hi: "जब दो या दो से अधिक ग्रह एक ही राशि और भाव पर स्थित होते हैं, तो वे युति में होते हैं। उनके अर्थ मिश्रित होते हैं - कभी-कभी सामंजस्यपूर्ण रूप से, कभी-कभी एक कमरे में प्रतिस्पर्धी आवाज़ों की तरह। सबसे मजबूत ग्रह (डिग्री, गरिमा या प्राकृतिक शक्ति द्वारा) अक्सर संयुक्त परिणाम को निर्देशित करता है।", ja: "2つ以上の惑星が同じ星座・ハウスにあるとき、合（ユティ）となります。象意が混ざり合い — 調和することも、一つの部屋で争う声のようになることもあります。最も強い惑星（度数、品位、自然の力）がしばしば結果を導きます。", ko: "둘 이상의 Grahas가 동일한 기호와 하우스를 점유하면 연결(yuti)됩니다. 그들의 의미는 때로는 조화롭게, 때로는 한 방에서 경쟁하는 목소리처럼 혼합됩니다. 가장 강한 행성(정도, 존엄성 또는 자연적 힘 기준)이 결합된 결과를 지시하는 경우가 많습니다.",
    },
  ],
  bullets: [
    { en: "Sun + Mercury (Budha-Aditya yoga potential): sharp speech, intellectual pride", hi: "सूर्य + बुध (बुद्ध-आदित्य योग क्षमता): तीव्र वाणी, बौद्धिक गौरव", ja: "太陽＋水星：鋭い弁舌、知的プライド（ブダ・アディティヤ・ヨーガの可能性）", ko: "태양 + 수성(Budha-Aditya 요가 잠재력): 날카로운 말투, 지적 자부심",},
    { en: "Moon + Venus: charm, love of beauty and comfort", hi: "चंद्रमा + शुक्र: आकर्षण, सुंदरता और आराम का प्यार", ja: "月＋金星：魅力、美と快適さへの愛", ko: "달 + 금성: 매력, 아름다움과 편안함에 대한 사랑",},
    { en: "Mars + Saturn: disciplined action; frustration if blocked", hi: "मंगल + शनि: अनुशासित कार्रवाई; अवरुद्ध होने पर निराशा", ja: "火星＋土星：規律ある行動、阻まれるとフラストレーション", ko: "화성 + 토성: 규율 있는 행동; 막히면 좌절",},
    { en: "Jupiter + Rahu (Guru-Chandal yoga): amplified ambition, ethical tension", hi: "बृहस्पति + राहु (गुरु-चांडाल योग): बढ़ी हुई महत्वाकांक्षा, नैतिक तनाव", ja: "木星＋ラーフ（グル・チャンダール・ヨーガ）：野心の増幅、倫理の緊張", ko: "목성 + 라후(구루-찬달 요가): 증폭된 야망, 윤리적 긴장",},
  ],
};

export const aspectSummaryImage = aspectImages.overview;
