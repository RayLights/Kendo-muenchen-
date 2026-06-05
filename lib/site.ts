/**
 * Central site configuration.
 *
 * Almost everything that a club volunteer might want to change lives here:
 * contact details, training times, social links, the calendar source and the
 * list of downloadable PDFs. Edit this file and redeploy — no other code needs
 * to be touched.
 */

export const site = {
  name: "Kendo München e.V.",
  tagline: "Japanisches Fechten seit 1980",
  description:
    "Kendo München e.V. – der größte Kendo-Verein Bayerns. Gegründet 1980, " +
    "gemeinnützig, über 100 Mitglieder. Training in München-Neuhausen, " +
    "regelmäßige Anfängerkurse für Einsteiger jeden Alters.",
  url: "https://www.kendo-muenchen.de",
  locale: "de_DE",

  // --- Contact -------------------------------------------------------------
  // TODO: Replace the e-mail with the club's real address (not published in
  // the page source of the old site, so left as a sensible placeholder).
  email: "info@kendo-muenchen.de",

  // --- Training location ---------------------------------------------------
  location: {
    name: "Rudolf-Diesel-Realschule (Turnhalle)",
    street: "Schulstraße 3a",
    zip: "80634",
    city: "München-Neuhausen",
    transit: "U1 – Haltestelle Rotkreuzplatz",
    // Used for the "Route planen" link and the embedded map.
    mapsQuery: "Rudolf-Diesel-Realschule, Schulstraße 3a, 80634 München",
  },

  // --- Social media --------------------------------------------------------
  social: {
    instagram: {
      handle: "@kendo_muenchen_ev",
      url: "https://www.instagram.com/kendo_muenchen_ev/",
    },
    facebook: {
      handle: "Kendo München e.V.",
      // Page slug used by the Facebook Page Plugin embed.
      url: "https://www.facebook.com/kendomuenchen/",
    },
  },

  // --- Calendar ------------------------------------------------------------
  // Paste the *public* Google Calendar embed URL here. In Google Calendar:
  // Settings → <your calendar> → "Integrate calendar" → copy the value of the
  // src="..." attribute from the provided iframe snippet.
  // While empty, the Termine section shows a friendly placeholder instead.
  calendarEmbedUrl: "" as string,
  // Optional "Add to your own calendar" subscription link (iCal/ICS URL).
  calendarIcalUrl: "" as string,

  // --- Memberships / affiliations -----------------------------------------
  affiliations: [
    { abbr: "BKenV", name: "Bayerischer Kendoverband e.V." },
    { abbr: "DKenB", name: "Deutscher Kendobund e.V." },
    { abbr: "BLSV", name: "Bayerischer Landes-Sportverband e.V." },
  ],
} as const;

/**
 * Training schedule. `watchOnly` rows are highlighted as spectator/observation
 * slots rather than full training.
 */
export const trainingGroups = [
  {
    group: "Jugendliche ab 16 Jahren & Erwachsene",
    sessions: [
      { day: "Montag", time: "19:30 – 22:00 Uhr" },
      { day: "Donnerstag", time: "19:00 – 22:00 Uhr" },
      { day: "Freitag", time: "19:00 – 22:00 Uhr" },
    ],
    watchOnly: false,
  },
  {
    group: "Kinder & Jugendliche bis 15 Jahren",
    sessions: [{ day: "Montag", time: "ab 18:00 Uhr (zuschauen & schnuppern)" }],
    watchOnly: true,
  },
] as const;

/**
 * Downloadable documents. Drop the matching PDF files into `public/pdfs/` using
 * exactly these `file` names and they become available automatically.
 * See `public/pdfs/README.md` for the porting checklist.
 */
export const downloads = [
  {
    title: "Satzung",
    description: "Vereinssatzung von Kendo München e.V.",
    file: "satzung.pdf",
  },
  {
    title: "Beitrittserklärung",
    description: "Aufnahmeantrag / Mitgliedschaft beantragen.",
    file: "beitrittserklaerung.pdf",
  },
  {
    title: "Fördermitgliedschaft",
    description: "Den Verein als Fördermitglied unterstützen.",
    file: "foerdermitgliedschaft.pdf",
  },
  {
    title: "Antrag Beitragsermäßigung",
    description: "Antrag auf Ermäßigung des Mitgliedsbeitrags.",
    file: "antrag-beitragsermaessigung.pdf",
  },
  {
    title: "Antrag Fahrtkostenerstattung",
    description: "Erstattung von Fahrtkosten beantragen.",
    file: "antrag-fahrtkosten.pdf",
  },
] as const;

export type Download = (typeof downloads)[number];

/**
 * Kendo vocabulary shown in the "Begriffe" section. `kanji` is rendered large,
 * `romaji` is the transliteration, `de` the German meaning.
 */
export const glossary = [
  { kanji: "剣道", romaji: "Kendō", de: "Weg des Schwertes – die Kampfkunst selbst" },
  { kanji: "礼", romaji: "Rei", de: "Respekt & Gruß – Kendo beginnt und endet damit" },
  { kanji: "稽古", romaji: "Keiko", de: "Training, gemeinsames Üben" },
  { kanji: "道場", romaji: "Dōjō", de: "Trainingshalle – der Ort des Weges" },
  { kanji: "竹刀", romaji: "Shinai", de: "Schwert aus Bambus" },
  { kanji: "防具", romaji: "Bōgu", de: "Schutzausrüstung / Rüstung" },
  { kanji: "気剣体一致", romaji: "Ki-Ken-Tai", de: "Einklang von Geist, Schwert und Körper" },
  { kanji: "残心", romaji: "Zanshin", de: "Wache Achtsamkeit nach dem Schlag" },
] as const;

/**
 * Valid striking targets (datotsu-bu) used in the illustrated "Trefferflächen"
 * panel of the Begriffe section.
 */
export const targets = [
  { kanji: "面", romaji: "Men", de: "Schlag auf den Kopf / die Maske" },
  { kanji: "小手", romaji: "Kote", de: "Schlag auf das Handgelenk" },
  { kanji: "胴", romaji: "Dō", de: "Schlag auf den Rumpf / die Flanke" },
  { kanji: "突き", romaji: "Tsuki", de: "Stoß zur Kehle (Fortgeschrittene)" },
] as const;

/**
 * Beginner trainers, featured in the "Anfängertraining" section.
 * Drop a photo at public/images/team/<photo> to replace each avatar.
 */
export const beginnerCoaches = [
  {
    name: "Julia Jonentz",
    role: "Anfängertrainerin",
    grade: "2. Dan",
    badge: "Deutscher Nationalkader",
    bio:
      "Julia leitet bei uns das Anfängertraining und bringt dir die ersten " +
      "Schritte, Schläge und die Etikette des Kendo geduldig bei.",
    achievements: [
      "Mitglied im Deutschen Kendo-Nationalkader (seit 2024)",
      "Teilnahme an der Kendo-Europameisterschaft 2025 in Leiden (NL)",
      "„Kampfgeistpreis“ bei der Deutschen Kendo-Meisterschaft",
    ],
    photo: "julia-jonentz.jpg",
  },
  {
    name: "Leo Wolff",
    role: "Anfängertrainer",
    grade: "4. Dan",
    badge: "Deutscher Nationalkader",
    bio:
      "Leo unterstützt das Anfängertraining und gibt seine über zehnjährige " +
      "Kendo-Erfahrung mit viel Geduld an Einsteiger weiter.",
    achievements: [
      "Über 10 Jahre Kendo-Erfahrung",
      "Mitglied im Deutschen Kendo-Nationalkader (Europameisterschaft)",
      "Landesmeisterschaft Baden: Silber im Einzel & im Team",
    ],
    photo: "leo-wolff.jpg",
  },
] as const;

/**
 * Head trainers shown in the "Trainerteam" section.
 * Photos go to public/images/team/<photo>.
 */
export const trainers = [
  {
    name: "Sascha Yokoo",
    role: "Trainer",
    grade: "7. Dan Kyoshi",
    bio: "Seit über 15 Jahren Trainer bei Kendo München und einer der renommiertesten Kendo-Lehrer Deutschlands.",
    achievements: [
      "Gefragter Lehrgangsleiter & Kampfrichter im Deutschen Kendobund",
      "Langjährige Trainer- und Wettkampferfahrung auf nationaler Ebene",
    ],
    photo: "sascha.jpg",
  },
  {
    name: "Dance Yokoo",
    role: "Trainerin",
    grade: "7. Dan Kyoshi",
    bio: "Seit über 15 Jahren Trainerin bei Kendo München und langjähriges Mitglied des Deutschen Damen-Nationalteams (2003–2013).",
    achievements: [
      "Mehrfache Deutsche Einzelmeisterin (u. a. 2003, 2005, 2009)",
      "Mehrfache Bayerische Einzelmeisterin (u. a. 2007, 2008, 2010)",
      "EM-Gold mit dem Damen-Team (u. a. 2005, 2007, 2008, 2011, 2013)",
      "WM-Bronze im Team (2006 & 2012)",
    ],
    photo: "dance-yokoo.jpg",
  },
] as const;

/** Frequently asked questions, shown as an accordion in the FAQ section. */
export const faqs = [
  {
    q: "Brauche ich eigene Ausrüstung?",
    a: "Nein. Für den Anfängerkurs wird die komplette Ausrüstung gestellt – du brauchst nur bequeme Sportkleidung und etwas zu trinken.",
  },
  {
    q: "Ab welchem Alter kann ich mitmachen?",
    a: "Jugendliche ab 16 Jahren und Erwachsene trainieren voll mit. Kinder und Jugendliche bis 15 Jahren können montags ab 18:00 Uhr zum Zuschauen vorbeikommen.",
  },
  {
    q: "Wie fit muss ich sein?",
    a: "Kendo ist für jedes Fitnesslevel geeignet. Du steigerst dich Schritt für Schritt – Technik und Geist sind mindestens so wichtig wie Kondition.",
  },
  {
    q: "Wann startet der nächste Anfängerkurs?",
    a: "Etwa alle sechs Monate – jeweils nach den Faschingsferien und nach den Sommerferien. Die genauen Termine findest du im Kalender und auf unseren Social-Media-Kanälen.",
  },
  {
    q: "Muss ich gleich Mitglied werden?",
    a: "Nein. Der Anfängerkurs ist als rund sechswöchige Probezeit angelegt. Erst danach entscheidest du, ob du dem Verein beitreten möchtest.",
  },
  {
    q: "Wie werde ich Mitglied?",
    a: "Nach der Probezeit ganz einfach über die Beitrittserklärung – das Formular findest du im Bereich Downloads.",
  },
] as const;
