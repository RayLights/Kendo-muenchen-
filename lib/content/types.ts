/** Shape every locale dictionary (de/en/ja) must implement. */

export interface Term {
  kanji: string;
  romaji: string;
  meaning: string;
}

export interface Person {
  name: string;
  role: string;
  grade: string;
  photo: string;
  bio: string;
  achievements: string[];
  badge?: string;
}

export interface Content {
  meta: { title: string; description: string };
  tagline: string;
  nav: {
    ueberUns: string;
    begriffe: string;
    galerie: string;
    trainer: string;
    training: string;
    anfaengerkurs: string;
    termine: string;
    downloads: string;
    faq: string;
    kontakt: string;
    menuOpen: string;
    menuClose: string;
    language: string;
  };
  hero: {
    badge: string;
    descr: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { stat: string; label: string }[];
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    p1: string;
    p2: string;
    memberHeading: string;
    affiliations: { abbr: string; name: string }[];
  };
  glossary: {
    eyebrow: string;
    title: string;
    intro: string;
    terms: Term[];
    datotsuLabel: string;
    datotsuTitle: string;
    datotsuSubtitle: string;
    targets: Term[];
  };
  gallery: {
    eyebrow: string;
    title: string;
    intro: string;
    tiles: { caption: string }[];
    igTitle: string;
    igButton: string;
  };
  trainers: {
    eyebrow: string;
    title: string;
    intro: string;
    list: Person[];
  };
  beginnerCoach: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
    coaches: Person[];
  };
  training: {
    eyebrow: string;
    title: string;
    intro: string;
    watchChip: string;
    groups: {
      group: string;
      watchOnly: boolean;
      sessions: { day: string; time: string }[];
    }[];
    locationName: string;
    city: string;
    transit: string;
    routeLink: string;
    mapTitle: string;
  };
  beginnerCourse: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: { title: string; text: string }[];
    bannerPre: string;
    bannerLink: string;
    bannerPost: string;
    bannerButton: string;
  };
  calendar: {
    eyebrow: string;
    title: string;
    intro: string;
    icalLink: string;
    placeholderTitle: string;
    placeholderText: string;
  };
  social: {
    eyebrow: string;
    title: string;
    intro: string;
    igNote: string;
    fbLabel: string;
    fbOpen: string;
  };
  downloads: {
    eyebrow: string;
    title: string;
    intro: string;
    soon: string;
    items: { title: string; description: string; file: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    intro: string;
    items: { q: string; a: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    emailLabel: string;
    trainingLabel: string;
    socialLabel: string;
  };
  footer: {
    brandNote: string;
    vereinHeading: string;
    followHeading: string;
    rights: string;
    impressum: string;
    datenschutz: string;
  };
}
