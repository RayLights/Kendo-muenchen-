import type { Content } from "./types";

const en: Content = {
  meta: {
    title: "Kendo München e.V. – Japanese Fencing since 1980",
    description:
      "Kendo München e.V. – Bavaria's largest kendo club. Founded in 1980, non-profit, more than 100 members. Training in Munich-Neuhausen, regular beginner courses.",
  },
  tagline: "Japanese fencing since 1980",
  nav: {
    ueberUns: "About",
    begriffe: "Terms",
    galerie: "Gallery",
    trainer: "Coaches",
    training: "Training",
    anfaengerkurs: "Beginner course",
    termine: "Calendar",
    downloads: "Downloads",
    faq: "FAQ",
    kontakt: "Contact",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    language: "Language",
  },
  hero: {
    badge: "since 1980",
    descr:
      "Japanese fencing since 1980. Bavaria's largest kendo club – a community for Japanese swordsmanship in Munich, open to beginners of every age.",
    ctaPrimary: "Discover the beginner course",
    ctaSecondary: "Training times",
    stats: [
      { stat: "1980", label: "founded" },
      { stat: "100+", label: "members" },
      { stat: "No. 1", label: "kendo club in Bavaria" },
    ],
  },
  about: {
    eyebrow: "About",
    title: "Kendo in Munich – for over 40 years",
    intro:
      "Kendo München e.V. was founded on 14 May 1980, is a recognised non-profit and today has more than 100 members – making us the largest kendo club in Bavaria.",
    p1: "Kendo – the “way of the sword” – is a traditional Japanese martial art rooted in the swordsmanship of the samurai. Today it combines physical fitness, discipline and respect with fair, dynamic competition.",
    p2: "People of every age and background meet here to train together – from your first strike in the beginner course to preparing for national and international tournaments. Guests and spectators are always welcome at training.",
    memberHeading: "Member of",
    affiliations: [
      { abbr: "BKenV", name: "Bavarian Kendo Federation" },
      { abbr: "DKenB", name: "German Kendo Federation" },
      { abbr: "BLSV", name: "Bavarian State Sports Association" },
    ],
  },
  glossary: {
    eyebrow: "Terms",
    title: "Understanding kendo",
    intro:
      "Kendo is rooted in its Japanese tradition – including its language. A few terms you'll keep coming across in the dōjō.",
    terms: [
      { kanji: "剣道", romaji: "Kendō", meaning: "Way of the sword – the martial art itself" },
      { kanji: "礼", romaji: "Rei", meaning: "Respect & courtesy – kendo begins and ends with it" },
      { kanji: "稽古", romaji: "Keiko", meaning: "Training, practising together" },
      { kanji: "道場", romaji: "Dōjō", meaning: "Training hall – the place of the way" },
      { kanji: "竹刀", romaji: "Shinai", meaning: "Sword made of bamboo" },
      { kanji: "防具", romaji: "Bōgu", meaning: "Protective armour" },
      { kanji: "気剣体一致", romaji: "Ki-Ken-Tai", meaning: "Unity of spirit, sword and body" },
      { kanji: "残心", romaji: "Zanshin", meaning: "Alert awareness after the strike" },
    ],
    datotsuLabel: "Datotsu-bu",
    datotsuTitle: "The four striking targets",
    datotsuSubtitle: "Only strikes to these targets count in kendo.",
    targets: [
      { kanji: "面", romaji: "Men", meaning: "Strike to the head / mask" },
      { kanji: "小手", romaji: "Kote", meaning: "Strike to the wrist" },
      { kanji: "胴", romaji: "Dō", meaning: "Strike to the torso / flank" },
      { kanji: "突き", romaji: "Tsuki", meaning: "Thrust to the throat (advanced)" },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Glimpses of kendo",
    intro:
      "Impressions from training, seminars and competitions. You'll always find the latest pictures on our Instagram channel.",
    tiles: [
      { caption: "Bōgu – the armour" },
      { caption: "Shinai – the bamboo sword" },
      { caption: "Ensō – the way is the goal" },
    ],
    igTitle: "More photos & videos on Instagram",
    igButton: "Follow",
  },
  trainers: {
    eyebrow: "Coaching team",
    title: "Our coaches",
    intro:
      "Well-known figures of the German kendo scene – they bring decades of experience to every session.",
    list: [
      {
        name: "Sascha Yokoo",
        role: "Coach",
        grade: "7th Dan Kyoshi",
        photo: "sascha.jpg",
        bio: "A coach at Kendo München for over 15 years and one of Germany's most respected kendo teachers.",
        achievements: [
          "Sought-after seminar instructor & referee in the German Kendo Federation",
          "Many years of coaching and competition experience at national level",
        ],
      },
      {
        name: "Dance Yokoo",
        role: "Coach",
        grade: "7th Dan Kyoshi",
        photo: "dance-yokoo.jpg",
        bio: "A coach at Kendo München for over 15 years and a long-standing member of the German women's national team (2003–2013).",
        achievements: [
          "Multiple German individual champion (incl. 2003, 2005, 2009)",
          "Multiple Bavarian individual champion (incl. 2007, 2008, 2010)",
          "European team gold with the women's team (incl. 2005, 2007, 2008, 2011, 2013)",
          "World Championship team bronze (2006 & 2012)",
        ],
      },
    ],
  },
  beginnerCoach: {
    eyebrow: "Beginner training",
    title: "Your coaches for getting started",
    intro:
      "In the beginner course you'll learn from some of the club's most experienced coaches – both with national-squad experience.",
    cta: "To the beginner course",
    coaches: [
      {
        name: "Julia Jonentz",
        role: "Beginner coach",
        grade: "2nd Dan",
        badge: "German national squad",
        photo: "julia-jonentz.jpg",
        bio: "Julia leads our beginner training and patiently teaches you the first steps, strikes and the etiquette of kendo.",
        achievements: [
          "Member of the German kendo national squad (since 2024)",
          "Competed at the 2025 Kendo European Championship in Leiden (NL)",
          "“Fighting spirit award” at the German Kendo Championship",
        ],
      },
      {
        name: "Leo Wolff",
        role: "Beginner coach",
        grade: "4th Dan",
        badge: "German national squad",
        photo: "leo-wolff.jpg",
        bio: "Leo supports the beginner training and passes on his ten-plus years of kendo experience to newcomers with great patience.",
        achievements: [
          "Over 10 years of kendo experience",
          "Member of the German kendo national squad (European Championship)",
          "Baden state championship: silver in individual & team",
        ],
      },
    ],
  },
  training: {
    eyebrow: "Training",
    title: "Training times & venue",
    intro:
      "We train three times a week in Munich-Neuhausen. Just drop by and watch – no commitment at all.",
    watchChip: "Watch",
    groups: [
      {
        group: "Youth aged 16+ & adults",
        watchOnly: false,
        sessions: [
          { day: "Monday", time: "7:30 – 10:00 pm" },
          { day: "Thursday", time: "7:00 – 10:00 pm" },
          { day: "Friday", time: "7:00 – 10:00 pm" },
        ],
      },
      {
        group: "Children & youth up to 15",
        watchOnly: true,
        sessions: [{ day: "Monday", time: "from 6:00 pm (watch & try out)" }],
      },
    ],
    locationName: "Rudolf-Diesel-Realschule (gym)",
    city: "Munich-Neuhausen",
    transit: "U1 – Rotkreuzplatz stop",
    routeLink: "Get directions",
    mapTitle: "Map: Rudolf-Diesel-Realschule",
  },
  beginnerCourse: {
    eyebrow: "Beginner course",
    title: "Getting started with kendo",
    intro:
      "We offer a beginner course roughly every six months – after the Carnival holidays and after the summer holidays. No prior experience or own equipment required.",
    steps: [
      { title: "Try it out", text: "Come to training and watch – or join the next beginner course right away. Equipment is provided." },
      { title: "Six-week trial", text: "The course is designed as a trial period: in about six weeks you'll get to know the first steps and strikes." },
      { title: "Stick with it", text: "Only afterwards do you decide whether you really want to learn kendo and join the club." },
    ],
    bannerPre: "The next course is listed under ",
    bannerLink: "Calendar",
    bannerPost: ". Just write to us – we'll answer all your questions about getting started.",
    bannerButton: "Get in touch",
  },
  calendar: {
    eyebrow: "Calendar",
    title: "Calendar",
    intro:
      "Training dates, beginner courses, seminars and tournaments – always up to date from our club calendar.",
    icalLink: "Subscribe in your own calendar",
    placeholderTitle: "Calendar coming soon",
    placeholderText:
      "As soon as the public Google Calendar is connected, all club dates will appear here automatically. Until then you'll find current dates on our social media channels.",
  },
  social: {
    eyebrow: "Social media",
    title: "Follow us",
    intro:
      "Current impressions from training, competitions and seminars – on Instagram and Facebook.",
    igNote: "Follow on Instagram for daily insights",
    fbLabel: "Facebook",
    fbOpen: "Open page",
  },
  downloads: {
    eyebrow: "Downloads",
    title: "Forms & documents",
    intro:
      "Statutes, membership application and all forms to download – from the club's document folder.",
    soon: "soon",
    items: [
      { title: "Statutes", description: "Statutes of Kendo München e.V.", file: "satzung.pdf" },
      { title: "Membership application", description: "Apply for membership.", file: "beitrittserklaerung.pdf" },
      { title: "Supporting membership", description: "Support the club as a supporting member.", file: "foerdermitgliedschaft.pdf" },
      { title: "Fee reduction request", description: "Request a reduction of the membership fee.", file: "antrag-beitragsermaessigung.pdf" },
      { title: "Travel cost reimbursement", description: "Request reimbursement of travel costs.", file: "antrag-fahrtkosten.pdf" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    intro: "The essentials for getting started with kendo – answered briefly.",
    items: [
      { q: "Do I need my own equipment?", a: "No. For the beginner course all equipment is provided – you only need comfortable sportswear and something to drink." },
      { q: "What's the minimum age?", a: "Youth aged 16 and adults train fully. Children and youth up to 15 can come to watch on Mondays from 6:00 pm." },
      { q: "How fit do I need to be?", a: "Kendo suits every fitness level. You progress step by step – technique and spirit matter at least as much as stamina." },
      { q: "When does the next beginner course start?", a: "Roughly every six months – after the Carnival holidays and after the summer holidays. You'll find exact dates in the calendar and on our social media channels." },
      { q: "Do I have to become a member right away?", a: "No. The beginner course is designed as a roughly six-week trial period. Only afterwards do you decide whether to join the club." },
      { q: "How do I become a member?", a: "After the trial period, simply via the membership application – you'll find the form in the Downloads section." },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Get in touch",
    intro:
      "Questions about the beginner course, training or membership? We'd love to hear from you.",
    emailLabel: "E-mail",
    trainingLabel: "Training",
    socialLabel: "Social media",
  },
  footer: {
    brandNote: "Japanese fencing since 1980. Bavaria's largest kendo club.",
    vereinHeading: "Club",
    followHeading: "Follow",
    rights: "All rights reserved.",
    impressum: "Imprint",
    datenschutz: "Privacy",
  },
};

export default en;
