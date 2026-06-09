import type { Content } from "./types";

/**
 * Japanese content. Machine-/AI-assisted translation — please have a native
 * speaker (e.g. from the club) proofread before going live.
 */
const ja: Content = {
  meta: {
    title: "ミュンヘン剣道協会（Kendo München e.V.）– 1980年創立",
    description:
      "ミュンヘン剣道協会 ― バイエルン州最大の剣道クラブ。1980年創立、非営利、会員100名以上。ミュンヘン・ノイハウゼンで稽古、定期的に初心者コースを開講。",
  },
  tagline: "1980年から続く日本の剣の道",
  nav: {
    ueberUns: "協会について",
    begriffe: "用語",
    galerie: "ギャラリー",
    trainer: "指導者",
    training: "稽古",
    anfaengerkurs: "初心者コース",
    termine: "予定",
    downloads: "ダウンロード",
    faq: "よくある質問",
    kontakt: "お問い合わせ",
    menuOpen: "メニューを開く",
    menuClose: "メニューを閉じる",
    language: "言語",
  },
  hero: {
    badge: "1980年より",
    descr:
      "1980年から続く日本の剣の道。バイエルン州最大の剣道クラブとして、ミュンヘンで年齢を問わず初心者を歓迎しています。",
    ctaPrimary: "初心者コースを見る",
    ctaSecondary: "稽古時間",
    stats: [
      { stat: "1980", label: "創立" },
      { stat: "100+", label: "会員" },
      { stat: "第1位", label: "バイエルン州の剣道クラブ" },
    ],
  },
  about: {
    eyebrow: "協会について",
    title: "ミュンヘンの剣道 ― 40年以上の歴史",
    intro:
      "ミュンヘン剣道協会は1980年5月14日に創立され、非営利団体として認められています。現在の会員数は100名を超え、バイエルン州最大の剣道クラブです。",
    p1: "剣道は侍の剣術に由来する日本の伝統武道です。心身の鍛錬、規律、礼を重んじながら、公正でダイナミックな試合を行います。",
    p2: "当協会には、年齢や経歴を問わず多くの人が集まり、共に稽古しています。初心者コースでの初めての一打から、国内外の大会へ向けた準備まで。見学・体験はいつでも歓迎です。",
    memberHeading: "加盟団体",
    affiliations: [
      { abbr: "BKenV", name: "バイエルン剣道連盟" },
      { abbr: "DKenB", name: "ドイツ剣道連盟" },
      { abbr: "BLSV", name: "バイエルン州体育協会" },
    ],
  },
  glossary: {
    eyebrow: "用語",
    title: "剣道を知る",
    intro:
      "剣道は日本の伝統に根ざしており、言葉もその一つです。道場でよく耳にする用語をいくつか紹介します。",
    terms: [
      { kanji: "剣道", romaji: "Kendō", meaning: "剣の道 ― 武道そのもの" },
      { kanji: "礼", romaji: "Rei", meaning: "敬意と挨拶 ― 剣道は礼に始まり礼に終わる" },
      { kanji: "稽古", romaji: "Keiko", meaning: "稽古、共に練習すること" },
      { kanji: "道場", romaji: "Dōjō", meaning: "稽古の場 ― 道を学ぶ場所" },
      { kanji: "竹刀", romaji: "Shinai", meaning: "竹でできた刀" },
      { kanji: "防具", romaji: "Bōgu", meaning: "防具（保護具）" },
      { kanji: "気剣体一致", romaji: "Ki-Ken-Tai", meaning: "気・剣・体の一致" },
      { kanji: "残心", romaji: "Zanshin", meaning: "打突後も油断しない心構え" },
    ],
    datotsuLabel: "打突部位",
    datotsuTitle: "四つの打突部位",
    datotsuSubtitle: "剣道ではこれらの部位への打突のみが有効です。",
    targets: [
      { kanji: "面", romaji: "Men", meaning: "頭部（面）への打ち" },
      { kanji: "小手", romaji: "Kote", meaning: "手首への打ち" },
      { kanji: "胴", romaji: "Dō", meaning: "胴（脇腹）への打ち" },
      { kanji: "突き", romaji: "Tsuki", meaning: "喉への突き（上級者向け）" },
    ],
  },
  gallery: {
    eyebrow: "ギャラリー",
    title: "剣道の風景",
    intro:
      "稽古・講習会・試合の様子。最新の写真は当協会のInstagramでご覧いただけます。",
    tiles: [
      { caption: "防具 ― 剣道の装備" },
      { caption: "竹刀 ― 竹の刀" },
      { caption: "円相 ― 道そのものが目的" },
    ],
    igTitle: "Instagramでさらに写真と動画を",
    igButton: "フォロー",
  },
  trainers: {
    eyebrow: "指導陣",
    title: "指導者紹介",
    intro:
      "ドイツ剣道界で名の知られた指導者たち。長年の経験を稽古に注いでいます。",
    list: [
      {
        name: "Sascha Yokoo",
        role: "指導者",
        grade: "教士七段",
        photo: "sascha.jpg",
        bio: "ミュンヘン剣道協会で15年以上指導にあたる、ドイツで最も尊敬される剣道指導者の一人。",
        achievements: [
          "ドイツ剣道連盟での講習会講師・審判員",
          "全国レベルでの長年の指導・試合経験",
        ],
      },
      {
        name: "Dance Yokoo",
        role: "指導者",
        grade: "教士七段",
        photo: "dance-yokoo.jpg",
        bio: "ミュンヘン剣道協会で15年以上指導にあたり、ドイツ女子ナショナルチームに長年在籍（2003〜2013）。",
        achievements: [
          "ドイツ個人選手権 複数回優勝（2003・2005・2009 ほか）",
          "バイエルン個人選手権 複数回優勝（2007・2008・2010 ほか）",
          "欧州選手権 女子団体 金メダル（2005・2007・2008・2011・2013 ほか）",
          "世界選手権 団体 銅メダル（2006・2012）",
        ],
      },
    ],
  },
  beginnerCoach: {
    eyebrow: "初心者稽古",
    title: "入門をサポートする指導者",
    intro:
      "初心者コースでは、当協会で最も経験豊富な指導者から学べます。二人ともナショナルチームでの経験者です。",
    cta: "初心者コースへ",
    coaches: [
      {
        name: "Julia Jonentz",
        role: "初心者指導者",
        grade: "二段",
        badge: "ドイツ・ナショナルチーム",
        photo: "julia-jonentz.jpg",
        bio: "当協会の初心者稽古を担当。基本の足さばきや打ち、剣道の礼法を丁寧に指導します。",
        achievements: [
          "ドイツ剣道ナショナルチーム所属（2024年〜）",
          "2025年 欧州剣道選手権（オランダ・ライデン）出場",
          "ドイツ剣道選手権「敢闘賞」受賞",
        ],
      },
      {
        name: "Leo Wolff",
        role: "初心者指導者",
        grade: "四段",
        badge: "ドイツ・ナショナルチーム",
        photo: "leo-wolff.jpg",
        bio: "初心者稽古をサポートし、10年以上の剣道経験を初心者へ丁寧に伝えています。",
        achievements: [
          "剣道歴10年以上",
          "ドイツ剣道ナショナルチーム所属（欧州選手権）",
          "バーデン州選手権 個人・団体ともに銀メダル",
        ],
      },
    ],
  },
  training: {
    eyebrow: "稽古",
    title: "稽古時間と場所",
    intro:
      "ミュンヘン・ノイハウゼンで週3回稽古しています。見学はお気軽にどうぞ ― 予約は不要です。",
    watchChip: "見学",
    groups: [
      {
        group: "16歳以上の青少年・成人",
        watchOnly: false,
        sessions: [
          { day: "月曜日", time: "19:30〜22:00" },
          { day: "木曜日", time: "19:00〜22:00" },
          { day: "金曜日", time: "19:00〜22:00" },
        ],
      },
      {
        group: "15歳までの子ども・青少年",
        watchOnly: true,
        sessions: [{ day: "月曜日", time: "18:00〜（見学・体験）" }],
      },
    ],
    locationName: "ルドルフ・ディーゼル実科学校（体育館）",
    city: "ミュンヘン・ノイハウゼン",
    transit: "地下鉄U1「Rotkreuzplatz」駅",
    routeLink: "ルートを調べる",
    mapTitle: "地図：ルドルフ・ディーゼル実科学校",
  },
  beginnerCourse: {
    eyebrow: "初心者コース",
    title: "剣道のはじめ方",
    intro:
      "初心者コースはおよそ半年ごと ― カーニバル休暇後と夏休み後に開講します。予備知識も自分の防具も必要ありません。",
    steps: [
      { title: "体験する", text: "稽古を見学する、あるいは次の初心者コースに参加しましょう。防具は貸し出します。" },
      { title: "6週間お試し", text: "コースは体験期間として設計されています。約6週間で基本の足さばきと打ちを学べます。" },
      { title: "続ける", text: "その後で、本格的に剣道を学び入会するかどうかを決められます。" },
    ],
    bannerPre: "次回のコースは",
    bannerLink: "予定",
    bannerPost: "に掲載しています。お気軽にご連絡ください。入門に関するご質問にお答えします。",
    bannerButton: "お問い合わせ",
  },
  calendar: {
    eyebrow: "予定",
    title: "カレンダー",
    intro:
      "稽古日、初心者コース、講習会、大会 ― 協会カレンダーから常に最新の予定をお知らせします。",
    icalLink: "自分のカレンダーに追加",
    placeholderTitle: "カレンダーは近日公開",
    placeholderText:
      "公開用のGoogleカレンダーが設定されると、ここにすべての予定が自動的に表示されます。それまでは各SNSで最新情報をご覧ください。",
  },
  social: {
    eyebrow: "SNS",
    title: "フォローする",
    intro:
      "稽古・試合・講習会の様子をInstagramとFacebookでお届けします。",
    igNote: "Instagramをフォローして毎日の様子をチェック",
    fbLabel: "Facebook",
    fbOpen: "ページを開く",
  },
  downloads: {
    eyebrow: "ダウンロード",
    title: "書類・申込書",
    intro:
      "会則、入会申込書、各種申請書をダウンロードできます ― 協会の書類フォルダより。",
    soon: "準備中",
    items: [
      { title: "会則", description: "ミュンヘン剣道協会の会則。", file: "satzung.pdf" },
      { title: "入会申込書", description: "入会のお申し込み。", file: "beitrittserklaerung.pdf" },
      { title: "賛助会員", description: "賛助会員として協会を支援する。", file: "foerdermitgliedschaft.pdf" },
      { title: "会費減免申請", description: "会費の減免を申請する。", file: "antrag-beitragsermaessigung.pdf" },
      { title: "交通費補助申請", description: "交通費の補助を申請する。", file: "antrag-fahrtkosten.pdf" },
    ],
  },
  faq: {
    eyebrow: "よくある質問",
    title: "よくある質問",
    intro: "剣道を始めるうえで大切なことを簡潔にまとめました。",
    items: [
      { q: "自分の防具は必要ですか？", a: "いいえ。初心者コースでは防具一式を貸し出します。動きやすい運動着と飲み物だけご用意ください。" },
      { q: "何歳から参加できますか？", a: "16歳以上の青少年と成人は通常どおり稽古できます。15歳までの子ども・青少年は月曜18:00から見学できます。" },
      { q: "どのくらい体力が必要ですか？", a: "剣道はどの体力レベルの方にも向いています。少しずつ上達できます ― 技と心は体力と同じくらい大切です。" },
      { q: "次の初心者コースはいつ始まりますか？", a: "およそ半年ごと ― カーニバル休暇後と夏休み後です。正確な日程はカレンダーや各SNSでご確認ください。" },
      { q: "すぐに入会しなければなりませんか？", a: "いいえ。初心者コースは約6週間の体験期間です。その後で入会するかどうかを決められます。" },
      { q: "どうすれば入会できますか？", a: "体験期間の後、入会申込書で簡単に手続きできます。書式はダウンロードの欄にあります。" },
    ],
  },
  contact: {
    eyebrow: "お問い合わせ",
    title: "ご連絡ください",
    intro:
      "初心者コース、稽古、入会についてのご質問はありませんか？お気軽にご連絡ください。",
    emailLabel: "メール",
    trainingLabel: "稽古",
    socialLabel: "SNS",
  },
  footer: {
    brandNote: "1980年から続く日本の剣の道。バイエルン州最大の剣道クラブ。",
    vereinHeading: "協会",
    followHeading: "フォロー",
    rights: "All rights reserved.",
    impressum: "発行者情報",
    datenschutz: "プライバシー",
  },
};

export default ja;
