import type { BilingualText, ContentBlock } from "./types";

export const introHero: BilingualText = {
  en: "Jyotish — The Science of Light",
  ja: "ジョーティッシュ — 光の科学",
};

export const introSubtitle: BilingualText = {
  en: "A comprehensive introduction to Indian Vedic astrology: its philosophy, chart forms, and the cosmic map behind the Kundli.",
  ja: "インドのヴェーダ占星術の哲学、チャート形式、クンダリーに映る宇宙の地図まで — 包括的な入門ガイド。",
};

export const introBlocks: ContentBlock[] = [
  {
    title: {
      en: "What Is Jyotish?",
      ja: "ジョーティッシュとは",
    },
    paragraphs: [
      {
        en: "Jyotish (ज्योतिष) is one of the knowledge systems of the Vedic tradition, alongside Ayurveda and Yoga. The word combines Jyoti (light) and Isha (lord or soul), and is widely understood as the \"science of light\" — the study of how celestial radiance mirrors human life.",
        ja: "ジョーティッシュ（ज्योतिष）は、アーユルヴェーダやヨガと同じく、ヴェーダの伝統思想における知識体系のひとつです。「Jyoti＝光」と「Isha＝神（魂）」が組み合わさった言葉で、一般に「光の科学」として知られています。",
      },
      {
        en: "Originally called \"star science,\" Jyotish examines the motion of heavenly bodies. Its lineage is ancient, transmitted orally and in Sanskrit texts long before modern astronomy. Practitioners read the sky not as random fate, but as a patterned field of karma — tendencies that can be understood, refined, and worked with.",
        ja: "本来のジョーティッシュは「星学」と呼ばれる天体の動きを研究する学問であり、その歴史はヴェーダと同様に古くから伝承されてきたものといわれます。空を盲目的な運命ではなく、理解し、磨き、向き合えるカルマのパターンとして読み解きます。",
      },
    ],
  },
  {
    title: {
      en: "The Building Blocks of a Chart",
      ja: "チャートを構成する要素",
    },
    paragraphs: [
      {
        en: "A Jyotish chart integrates nine Grahas (planets), twelve Rashis (signs), and twenty-seven Nakshatras (lunar mansions). The nine Grahas are the Sun, Moon, Mercury, Venus, Mars, Jupiter, Saturn, plus Rahu and Ketu — the lunar nodes where the Moon's path crosses the ecliptic.",
        ja: "ジョーティッシュでは、太陽系の星々（太陽、月、水星、金星、火星、木星、土星）と、太陽と月の軌道の交点であるラーフとケートゥを加えた9つの惑星（ナヴァ・グラハ）、12の星座（ラーシ）、天空を月の移動距離で27分割した領域（ナクシャトラ）を使って分析していきます。",
      },
      {
        en: "These cosmic elements are believed to exert a profound influence on life and destiny. The configuration at birth — which Graha sits in which Rashi and Nakshatra — is thought to echo one's innate temperament, challenges, and gifts.",
        ja: "ジョーティッシュにおいてこれらの宇宙の要素は、私たちの生命や運命に大きな影響を与えているとされます。特に誕生時における宇宙の状態、つまり惑星や星座の配置は個人の傾向や性質と密接に関わっていると考えられています。",
      },
    ],
  },
  {
    title: {
      en: "The Kundli (Birth Chart)",
      ja: "クンダリー（出生図）",
    },
    paragraphs: [
      {
        en: "Planetary positions are drawn on a wheel divided into twelve Bhavas (houses). This diagram — the Kundli — is the Indian equivalent of the Western horoscope. Houses represent life domains: self, wealth, siblings, home, children, health, partnership, longevity, fortune, career, gains, and release.",
        ja: "ジョーティッシュでは、9つの惑星と12の星座、27のナクシャトラにこれらの影響を集約させ、星図として表します。天空360度を12の室（バーヴァ）に分割した図面に惑星や星座を描いたものを「クンダリー（Kundli）」と呼び、西洋占星術のホロスコープに相当します。",
      },
      {
        en: "Observation follows the ecliptic — the Sun's apparent annual path. Unlike Western tropical astrology, which anchors Aries 0° to the vernal equinox, Jyotish uses the sidereal zodiac aligned with fixed star constellations.",
        ja: "インド占星術において9つの惑星や12の星座は、黄道という天空の太陽の軌道上で観察されます。黄道は天空を1日で1周していくという考え方は西洋占星術と大きく変わりません。",
      },
    ],
  },
  {
    title: {
      en: "Ayanamsha — Sidereal vs. Tropical",
      ja: "アヤナムシャ — サイデリアル方式とトロピカル方式",
    },
    paragraphs: [
      {
        en: "Western astrology begins Aries at the spring equinox (the intersection of the celestial equator and ecliptic). Because Earth's axis precesses, that equinox drifts roughly one degree every seventy years. Jyotish instead measures from the actual constellation backdrop — the sidereal method.",
        ja: "インド占星術が天体の位置を実際の星座の位置に基づいて起点（牡羊座の0度）を定めるのに対し、西洋占星術は太陽暦の春分点から牡羊座の0度を始めます。この春分点は地球の地軸が少しずつずれているため、約70年に1度程ずれていっています。",
      },
      {
        en: "The angular gap between tropical and sidereal reckoning is called Ayanamsha. Today it is approximately 23–24 degrees, which is why your Vedic rising sign and planet positions often differ from Western charts for the same birth data.",
        ja: "インド占星術ではこの角度差を「アヤナムシャ」と呼びます。現在は約23〜24度のずれがあり、同じ出生データでもインド式と西洋式で星座の位置が異なることがあります。インド占星術は「サイデリアル方式」、西洋占星術は「トロピカル方式」と呼ばれます。",
      },
    ],
  },
  {
    title: {
      en: "North Indian vs. South Indian Charts",
      ja: "北インド式と南インド式のチャート",
    },
    paragraphs: [
      {
        en: "The North Indian (diamond) chart places the Ascendant (Lagna) at the top center and arranges signs counter-clockwise. House positions are fixed; sign numbers shift according to the rising sign. This makes house topics immediately visible.",
        ja: "北インド式は、アセンダント（ASC）を中央上部に配置して、反時計回りに12星座を置いていきます。ハウスの位置が固定されており、牡羊座を1として順に数字を割り当て、対応するハウスに記載していきます。",
      },
      {
        en: "The South Indian (square) chart fixes the twelve signs clockwise in permanent positions. Only the Ascendant and house cusps move per native. House placement is less obvious at a glance, but planetary sign relationships, dignities, and Drishti (aspects) read more clearly — which is why many traditional teachers prefer it.",
        ja: "南インド式では12の星座が固定されており、各星座は時計回りに配置されています。アセンダントの位置が一人ひとり変わり、ハウスの位置も変わります。惑星と星座の関係（吉凶や強弱）やドリシティ（アスペクト）がわかりやすいメリットがあります。",
      },
    ],
  },
  {
    title: {
      en: "Macrocosm and Microcosm",
      ja: "大宇宙と小宇宙",
    },
    paragraphs: [
      {
        en: "Vedic philosophy holds that the macrocosm (the universe) and microcosm (the individual) share the same essence. Jyotish extends this: the human body maps to the zodiac. Planetary motions in the chart correspond to conditions in the body and mind; celestial rhythms are said to influence physical balance and the flow of life events — much as seasonal and geographic factors influence Ayurvedic doshas.",
        ja: "ヴェーダ思想では、この世界を織りなす「大宇宙」と、私たち個々の生命としての「小宇宙」は、その本質において同じものであると考えられます。ジョーティッシュでも人体の各部は宇宙や天体の構成に対応していると考え、チャートに表れる惑星の動きは人体の在り様にも照応するものと捉えられます。",
      },
      {
        en: "In Ayurveda, bodily doshas respond to season, region, and lifestyle. In Jyotish, the arrangement and movement of Grahas similarly touches bodily equilibrium and the arc of one's life path.",
        ja: "アーユルヴェーダにおいて身体のドーシャが季節や地域から影響を受けるのと同じように、ジョーティッシュでは天空の星々の配置や動きが、身体のバランスはもちろん、人生の流れにも影響を及ぼすと考えられています。",
      },
    ],
  },
];

