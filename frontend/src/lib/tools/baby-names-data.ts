import type { JapaneseOnset } from "@/lib/jyotish/naam-akshar";

/**
 * Real, currently-usable (2026) Japanese given names, curated by the
 * Japanese onset each pada's akshara bridges to (see `naam-akshar.ts`).
 *
 * Bucket sizes are intentionally uneven. Japanese has a real phonotactic
 * pattern (native/Yamato words rarely start with a voiced or semi-voiced
 * consonant — が/ざ/だ/ば/ぱ) that also holds for given names: genuinely
 * common names starting が/ざ/ぱ are close to nonexistent, and だ/ば are
 * thin. Rather than pad those buckets with invented-sounding names, they're
 * left short (or empty) and `ONSET_FALLBACK` widens the search to the
 * nearest unvoiced row, with the panel explaining why.
 */
export type BabyGender = "boy" | "girl";

export interface BabyName {
  onset: JapaneseOnset;
  kanji: string;
  reading: string;
  /** Romanized form — feeds `computeNameNumber`'s Chaldean scoring. */
  romaji: string;
  gender: BabyGender;
  meaning: { en: string; ja: string };
}

export const ONSET_FALLBACK: Partial<Record<JapaneseOnset, JapaneseOnset>> = {
  ga: "ka",
  ba: "ha",
  pa: "ha",
  da: "ta",
  za: "sa",
};

export const BABY_NAMES: BabyName[] = [
  // --- a ---
  { onset: "a", kanji: "明", reading: "あきら", romaji: "Akira", gender: "boy", meaning: { en: "bright, clear", ja: "明るい" } },
  { onset: "a", kanji: "篤", reading: "あつし", romaji: "Atsushi", gender: "boy", meaning: { en: "sincere, kind-hearted", ja: "誠実" } },
  { onset: "a", kanji: "歩", reading: "あゆむ", romaji: "Ayumu", gender: "boy", meaning: { en: "to walk forward, progress", ja: "歩む" } },
  { onset: "a", kanji: "蒼", reading: "あおい", romaji: "Aoi", gender: "boy", meaning: { en: "deep blue-green, flourishing", ja: "青々とした" } },
  { onset: "a", kanji: "旭", reading: "あさひ", romaji: "Asahi", gender: "boy", meaning: { en: "morning sun", ja: "朝日" } },
  { onset: "a", kanji: "明人", reading: "あきと", romaji: "Akito", gender: "boy", meaning: { en: "bright person", ja: "明るい人" } },
  { onset: "a", kanji: "愛", reading: "あい", romaji: "Ai", gender: "girl", meaning: { en: "love", ja: "愛情" } },
  { onset: "a", kanji: "明莉", reading: "あかり", romaji: "Akari", gender: "girl", meaning: { en: "bright jasmine", ja: "明るい茉莉花" } },
  { onset: "a", kanji: "葵", reading: "あおい", romaji: "Aoi", gender: "girl", meaning: { en: "hollyhock flower", ja: "タチアオイ" } },
  { onset: "a", kanji: "明日香", reading: "あすか", romaji: "Asuka", gender: "girl", meaning: { en: "fragrance of tomorrow", ja: "明日の香り" } },
  { onset: "a", kanji: "杏奈", reading: "あんな", romaji: "Anna", gender: "girl", meaning: { en: "apricot, gracefulness", ja: "杏の花" } },
  { onset: "a", kanji: "彩", reading: "あや", romaji: "Aya", gender: "girl", meaning: { en: "color, design", ja: "彩り" } },

  // --- i ---
  { onset: "i", kanji: "樹", reading: "いつき", romaji: "Itsuki", gender: "boy", meaning: { en: "tree", ja: "樹木" } },
  { onset: "i", kanji: "一郎", reading: "いちろう", romaji: "Ichiro", gender: "boy", meaning: { en: "first son", ja: "最初の息子" } },
  { onset: "i", kanji: "勇", reading: "いさむ", romaji: "Isamu", gender: "boy", meaning: { en: "courage", ja: "勇気" } },
  { onset: "i", kanji: "伊吹", reading: "いぶき", romaji: "Ibuki", gender: "boy", meaning: { en: "breath of life", ja: "息吹" } },
  { onset: "i", kanji: "一誠", reading: "いっせい", romaji: "Issei", gender: "boy", meaning: { en: "one sincerity", ja: "ひとつの誠" } },
  { onset: "i", kanji: "郁人", reading: "いくと", romaji: "Ikuto", gender: "boy", meaning: { en: "flourishing, cultured person", ja: "文化的な人" } },
  { onset: "i", kanji: "一花", reading: "いちか", romaji: "Ichika", gender: "girl", meaning: { en: "one blossom", ja: "ひとつの花" } },
  { onset: "i", kanji: "衣織", reading: "いおり", romaji: "Iori", gender: "girl", meaning: { en: "woven cloth", ja: "織物" } },
  { onset: "i", kanji: "いろは", reading: "いろは", romaji: "Iroha", gender: "girl", meaning: { en: "the classical Japanese syllabary — \"ABCs\"", ja: "いろは歌" } },
  { onset: "i", kanji: "郁美", reading: "いくみ", romaji: "Ikumi", gender: "girl", meaning: { en: "flourishing beauty", ja: "美しく育つ" } },
  { onset: "i", kanji: "泉", reading: "いずみ", romaji: "Izumi", gender: "girl", meaning: { en: "spring, fountain", ja: "泉" } },
  { onset: "i", kanji: "郁", reading: "いく", romaji: "Iku", gender: "girl", meaning: { en: "flourishing, fragrant", ja: "郁々" } },

  // --- u (genuinely fewer native options — see file note) ---
  { onset: "u", kanji: "宇宙", reading: "うちゅう", romaji: "Uchu", gender: "boy", meaning: { en: "cosmos, universe", ja: "宇宙" } },
  { onset: "u", kanji: "詩", reading: "うた", romaji: "Uta", gender: "boy", meaning: { en: "poem, song", ja: "詩" } },
  { onset: "u", kanji: "海斗", reading: "うみと", romaji: "Umito", gender: "boy", meaning: { en: "sea and the Big Dipper", ja: "海と北斗七星" } },
  { onset: "u", kanji: "右京", reading: "うきょう", romaji: "Ukyo", gender: "boy", meaning: { en: "of the right capital (a classical court title)", ja: "右京職" } },
  { onset: "u", kanji: "卯月", reading: "うづき", romaji: "Uzuki", gender: "girl", meaning: { en: "born in the fourth lunar month", ja: "卯月" } },
  { onset: "u", kanji: "海", reading: "うみ", romaji: "Umi", gender: "girl", meaning: { en: "sea", ja: "海" } },
  { onset: "u", kanji: "羽衣", reading: "うい", romaji: "Ui", gender: "girl", meaning: { en: "a feathered celestial robe", ja: "天女の羽衣" } },
  { onset: "u", kanji: "卯美", reading: "うづみ", romaji: "Uzumi", gender: "girl", meaning: { en: "rabbit (fourth month), beauty", ja: "卯と美" } },

  // --- e ---
  { onset: "e", kanji: "英介", reading: "えいすけ", romaji: "Eisuke", gender: "boy", meaning: { en: "brilliant help", ja: "優れた助け" } },
  { onset: "e", kanji: "悦郎", reading: "えつろう", romaji: "Etsuro", gender: "boy", meaning: { en: "joyful son", ja: "喜びの息子" } },
  { onset: "e", kanji: "栄治", reading: "えいじ", romaji: "Eiji", gender: "boy", meaning: { en: "flourishing rule", ja: "栄える治め" } },
  { onset: "e", kanji: "悦人", reading: "えつと", romaji: "Etsuto", gender: "boy", meaning: { en: "joyful person", ja: "喜びの人" } },
  { onset: "e", kanji: "英太", reading: "えいた", romaji: "Eita", gender: "boy", meaning: { en: "brilliant, great", ja: "優れて大きい" } },
  { onset: "e", kanji: "慧", reading: "えい", romaji: "Ei", gender: "boy", meaning: { en: "wisdom", ja: "知恵" } },
  { onset: "e", kanji: "恵美", reading: "えみ", romaji: "Emi", gender: "girl", meaning: { en: "blessing and beauty", ja: "恵みと美しさ" } },
  { onset: "e", kanji: "絵里", reading: "えり", romaji: "Eri", gender: "girl", meaning: { en: "picture, village", ja: "絵と里" } },
  { onset: "e", kanji: "恵麻", reading: "えま", romaji: "Ema", gender: "girl", meaning: { en: "blessing, flax (purity)", ja: "恵みと麻" } },
  { onset: "e", kanji: "英玲奈", reading: "えれな", romaji: "Erena", gender: "girl", meaning: { en: "brilliant, bell-like grace", ja: "優れた玲奈" } },
  { onset: "e", kanji: "江里子", reading: "えりこ", romaji: "Eriko", gender: "girl", meaning: { en: "village child", ja: "里の子" } },
  { onset: "e", kanji: "笑子", reading: "えみこ", romaji: "Emiko", gender: "girl", meaning: { en: "smiling child", ja: "笑顔の子" } },

  // --- o (genuinely fewer native options — see file note) ---
  { onset: "o", kanji: "修", reading: "おさむ", romaji: "Osamu", gender: "boy", meaning: { en: "to study, to govern", ja: "修める" } },
  { onset: "o", kanji: "音也", reading: "おとや", romaji: "Otoya", gender: "boy", meaning: { en: "sound, also", ja: "音" } },
  { onset: "o", kanji: "央", reading: "おう", romaji: "Ou", gender: "boy", meaning: { en: "center", ja: "中央" } },
  { onset: "o", kanji: "修斗", reading: "おさと", romaji: "Osato", gender: "boy", meaning: { en: "discipline and fight", ja: "修める闘い" } },
  { onset: "o", kanji: "音羽", reading: "おとは", romaji: "Otoha", gender: "girl", meaning: { en: "sound, feather", ja: "音の羽" } },
  { onset: "o", kanji: "織絵", reading: "おりえ", romaji: "Orie", gender: "girl", meaning: { en: "weave, picture", ja: "織りと絵" } },
  { onset: "o", kanji: "央奈", reading: "おうな", romaji: "Ouna", gender: "girl", meaning: { en: "central, graceful", ja: "中央と奈" } },
  { onset: "o", kanji: "織", reading: "おり", romaji: "Ori", gender: "girl", meaning: { en: "to weave", ja: "織物" } },

  // --- ka ---
  { onset: "ka", kanji: "海斗", reading: "かいと", romaji: "Kaito", gender: "boy", meaning: { en: "ocean and the Big Dipper", ja: "海と北斗星" } },
  { onset: "ka", kanji: "健", reading: "けん", romaji: "Ken", gender: "boy", meaning: { en: "healthy, strong", ja: "健やか" } },
  { onset: "ka", kanji: "京介", reading: "きょうすけ", romaji: "Kyosuke", gender: "boy", meaning: { en: "capital, help", ja: "都と助け" } },
  { onset: "ka", kanji: "幸太郎", reading: "こうたろう", romaji: "Kotaro", gender: "boy", meaning: { en: "happiness, eldest son", ja: "幸せな長男" } },
  { onset: "ka", kanji: "薫", reading: "かおる", romaji: "Kaoru", gender: "boy", meaning: { en: "fragrance", ja: "香り" } },
  { onset: "ka", kanji: "航", reading: "こう", romaji: "Ko", gender: "boy", meaning: { en: "to sail, navigate", ja: "航海" } },
  { onset: "ka", kanji: "佳奈", reading: "かな", romaji: "Kana", gender: "girl", meaning: { en: "excellent, graceful", ja: "佳い奈" } },
  { onset: "ka", kanji: "希美", reading: "きみ", romaji: "Kimi", gender: "girl", meaning: { en: "hope and beauty", ja: "希望の美" } },
  { onset: "ka", kanji: "久美", reading: "くみ", romaji: "Kumi", gender: "girl", meaning: { en: "eternal beauty", ja: "久しい美" } },
  { onset: "ka", kanji: "恵", reading: "けい", romaji: "Kei", gender: "girl", meaning: { en: "blessing", ja: "恵み" } },
  { onset: "ka", kanji: "香織", reading: "かおり", romaji: "Kaori", gender: "girl", meaning: { en: "fragrance, weave", ja: "香りと織物" } },
  { onset: "ka", kanji: "心", reading: "こころ", romaji: "Kokoro", gender: "girl", meaning: { en: "heart", ja: "心" } },

  // --- ga (rare native onset — see file note; falls back to ka) ---
  { onset: "ga", kanji: "源", reading: "げん", romaji: "Gen", gender: "boy", meaning: { en: "origin, source", ja: "起源" } },
  { onset: "ga", kanji: "豪", reading: "ごう", romaji: "Go", gender: "boy", meaning: { en: "great, powerful", ja: "豪快" } },
  { onset: "ga", kanji: "剛", reading: "ごう", romaji: "Go", gender: "boy", meaning: { en: "strength", ja: "剛健" } },

  // --- sa ---
  { onset: "sa", kanji: "聡", reading: "さとし", romaji: "Satoshi", gender: "boy", meaning: { en: "wise, clever", ja: "聡明" } },
  { onset: "sa", kanji: "翔太", reading: "しょうた", romaji: "Shota", gender: "boy", meaning: { en: "soaring, big", ja: "翔ける太" } },
  { onset: "sa", kanji: "進", reading: "すすむ", romaji: "Susumu", gender: "boy", meaning: { en: "to advance", ja: "前進" } },
  { onset: "sa", kanji: "誠", reading: "せい", romaji: "Sei", gender: "boy", meaning: { en: "sincerity", ja: "誠実" } },
  { onset: "sa", kanji: "壮太", reading: "そうた", romaji: "Sota", gender: "boy", meaning: { en: "robust, big", ja: "壮健" } },
  { onset: "sa", kanji: "慎太郎", reading: "しんたろう", romaji: "Shintaro", gender: "boy", meaning: { en: "prudent, eldest son", ja: "慎み深い長男" } },
  { onset: "sa", kanji: "咲", reading: "さき", romaji: "Saki", gender: "girl", meaning: { en: "to bloom", ja: "咲く" } },
  { onset: "sa", kanji: "詩織", reading: "しおり", romaji: "Shiori", gender: "girl", meaning: { en: "poem, weave", ja: "詩と織物" } },
  { onset: "sa", kanji: "澄香", reading: "すみか", romaji: "Sumika", gender: "girl", meaning: { en: "clear, fragrance", ja: "澄んだ香り" } },
  { onset: "sa", kanji: "芹奈", reading: "せりな", romaji: "Serina", gender: "girl", meaning: { en: "parsley, graceful", ja: "芹と奈" } },
  { onset: "sa", kanji: "早紀", reading: "さき", romaji: "Saki", gender: "girl", meaning: { en: "early chronicle", ja: "早い記録" } },
  { onset: "sa", kanji: "園子", reading: "そのこ", romaji: "Sonoko", gender: "girl", meaning: { en: "garden child", ja: "庭園の子" } },

  // --- za (bridged via じ — real names, not literally rare here) ---
  { onset: "za", kanji: "潤", reading: "じゅん", romaji: "Jun", gender: "boy", meaning: { en: "moisture, profit", ja: "潤い" } },
  { onset: "za", kanji: "仁", reading: "じん", romaji: "Jin", gender: "boy", meaning: { en: "benevolence", ja: "仁愛" } },
  { onset: "za", kanji: "治郎", reading: "じろう", romaji: "Jiro", gender: "boy", meaning: { en: "govern, second son", ja: "治める次男" } },
  { onset: "za", kanji: "慈", reading: "じ", romaji: "Ji", gender: "boy", meaning: { en: "compassion", ja: "慈しみ" } },
  { onset: "za", kanji: "純子", reading: "じゅんこ", romaji: "Junko", gender: "girl", meaning: { en: "pure child", ja: "純粋な子" } },
  { onset: "za", kanji: "純奈", reading: "じゅんな", romaji: "Junna", gender: "girl", meaning: { en: "pure, graceful", ja: "純粋な奈" } },

  // --- ta ---
  { onset: "ta", kanji: "太郎", reading: "たろう", romaji: "Taro", gender: "boy", meaning: { en: "big son / firstborn", ja: "長男" } },
  { onset: "ta", kanji: "翼", reading: "つばさ", romaji: "Tsubasa", gender: "boy", meaning: { en: "wings", ja: "翼" } },
  { onset: "ta", kanji: "哲也", reading: "てつや", romaji: "Tetsuya", gender: "boy", meaning: { en: "philosophy, also", ja: "哲学" } },
  { onset: "ta", kanji: "智也", reading: "ともや", romaji: "Tomoya", gender: "boy", meaning: { en: "wisdom, also", ja: "知恵" } },
  { onset: "ta", kanji: "匠", reading: "たくみ", romaji: "Takumi", gender: "boy", meaning: { en: "artisan, skill", ja: "匠の技" } },
  { onset: "ta", kanji: "拓真", reading: "たくま", romaji: "Takuma", gender: "boy", meaning: { en: "pioneer, truth", ja: "開拓の真実" } },
  { onset: "ta", kanji: "千尋", reading: "ちひろ", romaji: "Chihiro", gender: "girl", meaning: { en: "a thousand fathoms", ja: "千尋の深さ" } },
  { onset: "ta", kanji: "智子", reading: "ともこ", romaji: "Tomoko", gender: "girl", meaning: { en: "wise child", ja: "知恵の子" } },
  { onset: "ta", kanji: "千夏", reading: "ちなつ", romaji: "Chinatsu", gender: "girl", meaning: { en: "a thousand summers", ja: "千の夏" } },
  { onset: "ta", kanji: "つぐみ", reading: "つぐみ", romaji: "Tsugumi", gender: "girl", meaning: { en: "thrush (songbird)", ja: "鶫" } },
  { onset: "ta", kanji: "照美", reading: "てるみ", romaji: "Terumi", gender: "girl", meaning: { en: "shining beauty", ja: "照り輝く美" } },
  { onset: "ta", kanji: "智美", reading: "ともみ", romaji: "Tomomi", gender: "girl", meaning: { en: "wisdom, beauty", ja: "知恵と美" } },

  // --- da (native onset thin for girls — see file note; falls back to ta) ---
  { onset: "da", kanji: "大輝", reading: "だいき", romaji: "Daiki", gender: "boy", meaning: { en: "big brilliance", ja: "大きな輝き" } },
  { onset: "da", kanji: "大地", reading: "だいち", romaji: "Daichi", gender: "boy", meaning: { en: "earth, great wisdom", ja: "大地" } },
  { onset: "da", kanji: "大介", reading: "だいすけ", romaji: "Daisuke", gender: "boy", meaning: { en: "big help", ja: "大きな助け" } },
  { onset: "da", kanji: "大悟", reading: "だいご", romaji: "Daigo", gender: "boy", meaning: { en: "great enlightenment", ja: "大いなる悟り" } },
  { onset: "da", kanji: "大翔", reading: "だいと", romaji: "Daito", gender: "boy", meaning: { en: "great flight", ja: "大きく翔ぶ" } },
  { onset: "da", kanji: "大", reading: "だい", romaji: "Dai", gender: "boy", meaning: { en: "big, great", ja: "大きい" } },

  // --- na ---
  { onset: "na", kanji: "直人", reading: "なおと", romaji: "Naoto", gender: "boy", meaning: { en: "honest person", ja: "正直な人" } },
  { onset: "na", kanji: "直樹", reading: "なおき", romaji: "Naoki", gender: "boy", meaning: { en: "honest tree", ja: "まっすぐな樹" } },
  { onset: "na", kanji: "望", reading: "のぞむ", romaji: "Nozomu", gender: "boy", meaning: { en: "to wish, hope", ja: "望み" } },
  { onset: "na", kanji: "直哉", reading: "なおや", romaji: "Naoya", gender: "boy", meaning: { en: "honest", ja: "正直" } },
  { onset: "na", kanji: "直", reading: "なお", romaji: "Nao", gender: "boy", meaning: { en: "honest, straight", ja: "素直" } },
  { onset: "na", kanji: "之助", reading: "のすけ", romaji: "Nosuke", gender: "boy", meaning: { en: "helper (a classical name suffix)", ja: "助け" } },
  { onset: "na", kanji: "直美", reading: "なおみ", romaji: "Naomi", gender: "girl", meaning: { en: "honest beauty", ja: "素直な美しさ" } },
  { onset: "na", kanji: "奈々", reading: "なな", romaji: "Nana", gender: "girl", meaning: { en: "seven, graceful", ja: "七" } },
  { onset: "na", kanji: "乃愛", reading: "のあ", romaji: "Noa", gender: "girl", meaning: { en: "attachment, love", ja: "愛着" } },
  { onset: "na", kanji: "望美", reading: "のぞみ", romaji: "Nozomi", gender: "girl", meaning: { en: "wish, beauty", ja: "望みと美" } },
  { onset: "na", kanji: "奈津美", reading: "なつみ", romaji: "Natsumi", gender: "girl", meaning: { en: "summer beauty", ja: "夏の美しさ" } },
  { onset: "na", kanji: "直子", reading: "なおこ", romaji: "Naoko", gender: "girl", meaning: { en: "honest child", ja: "正直な子" } },

  // --- ha ---
  { onset: "ha", kanji: "陽翔", reading: "はると", romaji: "Haruto", gender: "boy", meaning: { en: "sun, soar", ja: "陽が翔ぶ" } },
  { onset: "ha", kanji: "隼", reading: "はやぶさ", romaji: "Hayabusa", gender: "boy", meaning: { en: "falcon", ja: "隼" } },
  { onset: "ha", kanji: "光", reading: "ひかる", romaji: "Hikaru", gender: "boy", meaning: { en: "light, to shine", ja: "光る" } },
  { onset: "ha", kanji: "大翔", reading: "ひろと", romaji: "Hiroto", gender: "boy", meaning: { en: "wide flight", ja: "広く翔ぶ" } },
  { onset: "ha", kanji: "遥人", reading: "はるひと", romaji: "Haruhito", gender: "boy", meaning: { en: "distant, person", ja: "遥かな人" } },
  { onset: "ha", kanji: "秀樹", reading: "ひでき", romaji: "Hideki", gender: "boy", meaning: { en: "excellent tree", ja: "優れた樹" } },
  { onset: "ha", kanji: "陽菜", reading: "はな", romaji: "Hana", gender: "girl", meaning: { en: "sun, greens", ja: "陽の菜" } },
  { onset: "ha", kanji: "陽葵", reading: "ひまり", romaji: "Himari", gender: "girl", meaning: { en: "sun, hollyhock", ja: "陽と葵" } },
  { onset: "ha", kanji: "穂乃花", reading: "ほのか", romaji: "Honoka", gender: "girl", meaning: { en: "ear of grain, flower", ja: "穂と花" } },
  { onset: "ha", kanji: "文香", reading: "ふみか", romaji: "Fumika", gender: "girl", meaning: { en: "literature, fragrance", ja: "文と香り" } },
  { onset: "ha", kanji: "遥", reading: "はるか", romaji: "Haruka", gender: "girl", meaning: { en: "distant, far-reaching", ja: "遥かな" } },
  { onset: "ha", kanji: "日和", reading: "ひより", romaji: "Hiyori", gender: "girl", meaning: { en: "sunny weather", ja: "日和" } },

  // --- ba (rare native onset — see file note; falls back to ha) ---
  { onset: "ba", kanji: "文太", reading: "ぶんた", romaji: "Bunta", gender: "boy", meaning: { en: "literary, big", ja: "文の太い" } },
  { onset: "ba", kanji: "文吾", reading: "ぶんご", romaji: "Bungo", gender: "boy", meaning: { en: "literary, I/myself", ja: "文の吾" } },
  { onset: "ba", kanji: "紅", reading: "べに", romaji: "Beni", gender: "girl", meaning: { en: "crimson", ja: "紅色" } },
  { onset: "ba", kanji: "紅子", reading: "べにこ", romaji: "Beniko", gender: "girl", meaning: { en: "crimson child", ja: "紅色の子" } },

  // --- pa (essentially no native onset — see file note; falls back to ha) ---

  // --- ma ---
  { onset: "ma", kanji: "誠", reading: "まこと", romaji: "Makoto", gender: "boy", meaning: { en: "sincerity", ja: "誠実" } },
  { onset: "ma", kanji: "学", reading: "まなぶ", romaji: "Manabu", gender: "boy", meaning: { en: "to learn", ja: "学ぶ" } },
  { onset: "ma", kanji: "実", reading: "みのる", romaji: "Minoru", gender: "boy", meaning: { en: "to bear fruit", ja: "実る" } },
  { onset: "ma", kanji: "睦月", reading: "むつき", romaji: "Mutsuki", gender: "boy", meaning: { en: "harmonious, January", ja: "睦び月" } },
  { onset: "ma", kanji: "求", reading: "もとむ", romaji: "Motomu", gender: "boy", meaning: { en: "to seek", ja: "求める" } },
  { onset: "ma", kanji: "守", reading: "まもる", romaji: "Mamoru", gender: "boy", meaning: { en: "to protect", ja: "守る" } },
  { onset: "ma", kanji: "舞", reading: "まい", romaji: "Mai", gender: "girl", meaning: { en: "dance", ja: "舞う" } },
  { onset: "ma", kanji: "美咲", reading: "みさき", romaji: "Misaki", gender: "girl", meaning: { en: "beautiful blossom", ja: "美しく咲く" } },
  { onset: "ma", kanji: "睦美", reading: "むつみ", romaji: "Mutsumi", gender: "girl", meaning: { en: "harmony, beauty", ja: "睦びと美" } },
  { onset: "ma", kanji: "芽衣", reading: "めい", romaji: "Mei", gender: "girl", meaning: { en: "sprout, garment", ja: "芽と衣" } },
  { onset: "ma", kanji: "桃", reading: "もも", romaji: "Momo", gender: "girl", meaning: { en: "peach", ja: "桃" } },
  { onset: "ma", kanji: "真央", reading: "まお", romaji: "Mao", gender: "girl", meaning: { en: "true, center", ja: "真の中心" } },

  // --- ya ---
  { onset: "ya", kanji: "陽太", reading: "ようた", romaji: "Yota", gender: "boy", meaning: { en: "sun, big", ja: "陽の太い" } },
  { onset: "ya", kanji: "悠真", reading: "ゆうま", romaji: "Yuma", gender: "boy", meaning: { en: "calm, truth", ja: "悠かな真実" } },
  { onset: "ya", kanji: "大和", reading: "やまと", romaji: "Yamato", gender: "boy", meaning: { en: "great harmony (an old name for Japan)", ja: "大いなる和" } },
  { onset: "ya", kanji: "洋介", reading: "ようすけ", romaji: "Yosuke", gender: "boy", meaning: { en: "ocean, help", ja: "海と助け" } },
  { onset: "ya", kanji: "悠人", reading: "ゆうと", romaji: "Yuto", gender: "boy", meaning: { en: "calm person", ja: "悠かな人" } },
  { onset: "ya", kanji: "靖", reading: "やすし", romaji: "Yasushi", gender: "boy", meaning: { en: "peaceful", ja: "安らか" } },
  { onset: "ya", kanji: "結衣", reading: "ゆい", romaji: "Yui", gender: "girl", meaning: { en: "tie, garment", ja: "結びと衣" } },
  { onset: "ya", kanji: "由紀", reading: "ゆき", romaji: "Yuki", gender: "girl", meaning: { en: "reason, chronicle", ja: "由と紀" } },
  { onset: "ya", kanji: "弥生", reading: "やよい", romaji: "Yayoi", gender: "girl", meaning: { en: "March (old lunar calendar)", ja: "弥生" } },
  { onset: "ya", kanji: "悠花", reading: "ゆうか", romaji: "Yuka", gender: "girl", meaning: { en: "calm flower", ja: "悠かな花" } },
  { onset: "ya", kanji: "靖子", reading: "やすこ", romaji: "Yasuko", gender: "girl", meaning: { en: "peaceful child", ja: "安らかな子" } },
  { onset: "ya", kanji: "結菜", reading: "ゆいな", romaji: "Yuina", gender: "girl", meaning: { en: "tie, greens", ja: "結びと菜" } },

  // --- ra ---
  { onset: "ra", kanji: "蓮", reading: "れん", romaji: "Ren", gender: "boy", meaning: { en: "lotus", ja: "蓮の花" } },
  { onset: "ra", kanji: "陸", reading: "りく", romaji: "Riku", gender: "boy", meaning: { en: "land", ja: "陸地" } },
  { onset: "ra", kanji: "涼太", reading: "りょうた", romaji: "Ryota", gender: "boy", meaning: { en: "cool, big", ja: "涼しい太" } },
  { onset: "ra", kanji: "亮", reading: "りょう", romaji: "Ryo", gender: "boy", meaning: { en: "clear, bright", ja: "明亮" } },
  { onset: "ra", kanji: "怜", reading: "れい", romaji: "Rei", gender: "boy", meaning: { en: "clever, clear-minded", ja: "怜悧" } },
  { onset: "ra", kanji: "龍之介", reading: "りゅうのすけ", romaji: "Ryunosuke", gender: "boy", meaning: { en: "dragon's helper", ja: "龍の助け" } },
  { onset: "ra", kanji: "莉子", reading: "りこ", romaji: "Riko", gender: "girl", meaning: { en: "jasmine child", ja: "茉莉の子" } },
  { onset: "ra", kanji: "玲奈", reading: "れいな", romaji: "Reina", gender: "girl", meaning: { en: "bell-like, graceful", ja: "玲と奈" } },
  { onset: "ra", kanji: "蓮華", reading: "れんげ", romaji: "Renge", gender: "girl", meaning: { en: "lotus flower", ja: "蓮の花" } },
  { onset: "ra", kanji: "里奈", reading: "りな", romaji: "Rina", gender: "girl", meaning: { en: "village, graceful", ja: "里と奈" } },
  { onset: "ra", kanji: "涼子", reading: "りょうこ", romaji: "Ryoko", gender: "girl", meaning: { en: "cool child", ja: "涼しい子" } },
  { onset: "ra", kanji: "蘭", reading: "らん", romaji: "Ran", gender: "girl", meaning: { en: "orchid", ja: "蘭の花" } },
];

/**
 * Names for a syllable, gender-filtered, widened via `ONSET_FALLBACK` when
 * the direct bucket is thin (fewer than `minResults`) — never silently
 * empty, and the panel names the fallback explicitly rather than hiding it.
 */
export function namesForOnset(
  onset: JapaneseOnset,
  gender: BabyGender | "all",
  minResults = 4,
): { names: BabyName[]; usedFallback: boolean } {
  const matches = (o: JapaneseOnset) =>
    BABY_NAMES.filter(
      (n) => n.onset === o && (gender === "all" || n.gender === gender),
    );

  const direct = matches(onset);
  const fallback = ONSET_FALLBACK[onset];
  if (direct.length >= minResults || !fallback) {
    return { names: direct, usedFallback: false };
  }
  return { names: [...direct, ...matches(fallback)], usedFallback: true };
}
