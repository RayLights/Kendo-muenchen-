import type { Content } from "./types";

/**
 * German content — the canonical source. English and Japanese mirror this
 * shape (enforced by the `Content` type). Edit text here; non-text config
 * (URLs, e-mail, calendar, address) lives in lib/site.ts.
 */
const de: Content = {
  meta: {
    title: "Kendo München e.V. – Japanisches Fechten seit 1980",
    description:
      "Kendo München e.V. – der größte Kendo-Verein Bayerns. Gegründet 1980, gemeinnützig, über 100 Mitglieder. Training in München-Neuhausen, regelmäßige Anfängerkurse.",
  },
  tagline: "Japanisches Fechten seit 1980",
  nav: {
    ueberUns: "Über uns",
    begriffe: "Begriffe",
    galerie: "Galerie",
    trainer: "Trainer",
    training: "Training",
    anfaengerkurs: "Anfängerkurs",
    termine: "Termine",
    downloads: "Downloads",
    faq: "FAQ",
    kontakt: "Kontakt",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    language: "Sprache",
  },
  hero: {
    badge: "seit 1980",
    descr:
      "Japanisches Fechten seit 1980. Der größte Kendo-Verein Bayerns – eine Gemeinschaft für japanisches Schwertfechten in München, offen für Einsteiger jeden Alters.",
    ctaPrimary: "Anfängerkurs entdecken",
    ctaSecondary: "Trainingszeiten",
    stats: [
      { stat: "1980", label: "gegründet" },
      { stat: "100+", label: "Mitglieder" },
      { stat: "Nr. 1", label: "Kendo-Verein in Bayern" },
    ],
  },
  about: {
    eyebrow: "Über uns",
    title: "Kendo in München – seit über 40 Jahren",
    intro:
      "Kendo München e.V. wurde am 14. Mai 1980 gegründet, ist als gemeinnützig anerkannt und zählt heute über 100 Mitglieder. Damit sind wir der größte Kendo-Verein Bayerns.",
    p1: "Kendo – der „Weg des Schwertes“ – ist eine traditionelle japanische Kampfkunst, die aus dem Schwertkampf der Samurai hervorgegangen ist. Heute verbindet Kendo körperliche Fitness, Disziplin und Respekt mit einem fairen, dynamischen Wettkampf.",
    p2: "Bei uns treffen sich Menschen jeden Alters und jeder Herkunft, um gemeinsam zu trainieren – vom ersten Schlag im Anfängerkurs bis zur Vorbereitung auf nationale und internationale Turniere. Gäste und Zuschauer sind beim Training jederzeit herzlich willkommen.",
    memberHeading: "Mitglied in",
    affiliations: [
      { abbr: "BKenV", name: "Bayerischer Kendoverband e.V." },
      { abbr: "DKenB", name: "Deutscher Kendobund e.V." },
      { abbr: "BLSV", name: "Bayerischer Landes-Sportverband e.V." },
    ],
  },
  glossary: {
    eyebrow: "Begriffe",
    title: "Kendo verstehen",
    intro:
      "Kendo lebt von seiner japanischen Tradition – auch in der Sprache. Ein paar Begriffe, die dir im Dōjō immer wieder begegnen.",
    terms: [
      { kanji: "剣道", romaji: "Kendō", meaning: "Weg des Schwertes – die Kampfkunst selbst" },
      { kanji: "礼", romaji: "Rei", meaning: "Respekt & Gruß – Kendo beginnt und endet damit" },
      { kanji: "稽古", romaji: "Keiko", meaning: "Training, gemeinsames Üben" },
      { kanji: "道場", romaji: "Dōjō", meaning: "Trainingshalle – der Ort des Weges" },
      { kanji: "竹刀", romaji: "Shinai", meaning: "Schwert aus Bambus" },
      { kanji: "防具", romaji: "Bōgu", meaning: "Schutzausrüstung / Rüstung" },
      { kanji: "気剣体一致", romaji: "Ki-Ken-Tai", meaning: "Einklang von Geist, Schwert und Körper" },
      { kanji: "残心", romaji: "Zanshin", meaning: "Wache Achtsamkeit nach dem Schlag" },
    ],
    datotsuLabel: "Datotsu-bu",
    datotsuTitle: "Die vier Trefferflächen",
    datotsuSubtitle: "Nur Treffer auf diese Ziele zählen im Kendo.",
    targets: [
      { kanji: "面", romaji: "Men", meaning: "Schlag auf den Kopf / die Maske" },
      { kanji: "小手", romaji: "Kote", meaning: "Schlag auf das Handgelenk" },
      { kanji: "胴", romaji: "Dō", meaning: "Schlag auf den Rumpf / die Flanke" },
      { kanji: "突き", romaji: "Tsuki", meaning: "Stoß zur Kehle (Fortgeschrittene)" },
    ],
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Einblicke ins Kendo",
    intro:
      "Eindrücke aus Training, Lehrgängen und Wettkämpfen. Die aktuellsten Bilder findest du immer auf unserem Instagram-Kanal.",
    tiles: [
      { caption: "Bōgu – die Rüstung" },
      { caption: "Shinai – das Bambusschwert" },
      { caption: "Ensō – der Weg ist das Ziel" },
    ],
    igTitle: "Mehr Fotos & Videos auf Instagram",
    igButton: "Folgen",
  },
  trainers: {
    eyebrow: "Trainerteam",
    title: "Unsere Trainer",
    intro:
      "Bekannte Größen der deutschen Kendo-Szene – sie bringen jahrzehntelange Erfahrung in jedes Training ein.",
    list: [
      {
        name: "Sascha Yokoo",
        role: "Trainer",
        grade: "7. Dan Kyoshi",
        photo: "sascha.jpg",
        bio: "Seit über 15 Jahren Trainer bei Kendo München und einer der renommiertesten Kendo-Lehrer Deutschlands.",
        achievements: [
          "Gefragter Lehrgangsleiter & Kampfrichter im Deutschen Kendobund",
          "Langjährige Trainer- und Wettkampferfahrung auf nationaler Ebene",
        ],
      },
      {
        name: "Dance Yokoo",
        role: "Trainerin",
        grade: "7. Dan Kyoshi",
        photo: "dance-yokoo.jpg",
        bio: "Seit über 15 Jahren Trainerin bei Kendo München und langjähriges Mitglied des Deutschen Damen-Nationalteams (2003–2013).",
        achievements: [
          "Mehrfache Deutsche Einzelmeisterin (u. a. 2003, 2005, 2009)",
          "Mehrfache Bayerische Einzelmeisterin (u. a. 2007, 2008, 2010)",
          "EM-Gold mit dem Damen-Team (u. a. 2005, 2007, 2008, 2011, 2013)",
          "WM-Bronze im Team (2006 & 2012)",
        ],
      },
    ],
  },
  beginnerCoach: {
    eyebrow: "Anfängertraining",
    title: "Deine Trainer:innen für den Einstieg",
    intro:
      "Im Anfängerkurs lernst du von einigen der erfahrensten Trainer:innen des Vereins – beide mit Nationalkader-Erfahrung.",
    cta: "Zum Anfängerkurs",
    coaches: [
      {
        name: "Julia Jonentz",
        role: "Anfängertrainerin",
        grade: "2. Dan",
        badge: "Deutscher Nationalkader",
        photo: "julia-jonentz.jpg",
        bio: "Julia leitet bei uns das Anfängertraining und bringt dir die ersten Schritte, Schläge und die Etikette des Kendo geduldig bei.",
        achievements: [
          "Mitglied im Deutschen Kendo-Nationalkader (seit 2024)",
          "Teilnahme an der Kendo-Europameisterschaft 2025 in Leiden (NL)",
          "„Kampfgeistpreis“ bei der Deutschen Kendo-Meisterschaft",
        ],
      },
      {
        name: "Leo Wolff",
        role: "Anfängertrainer",
        grade: "4. Dan",
        badge: "Deutscher Nationalkader",
        photo: "leo-wolff.jpg",
        bio: "Leo unterstützt das Anfängertraining und gibt seine über zehnjährige Kendo-Erfahrung mit viel Geduld an Einsteiger weiter.",
        achievements: [
          "Über 10 Jahre Kendo-Erfahrung",
          "Mitglied im Deutschen Kendo-Nationalkader (Europameisterschaft)",
          "Landesmeisterschaft Baden: Silber im Einzel & im Team",
        ],
      },
    ],
  },
  training: {
    eyebrow: "Training",
    title: "Trainingszeiten & Ort",
    intro:
      "Wir trainieren dreimal pro Woche in München-Neuhausen. Einfach vorbeikommen und zuschauen – ganz unverbindlich.",
    watchChip: "Zuschauen",
    groups: [
      {
        group: "Jugendliche ab 16 Jahren & Erwachsene",
        watchOnly: false,
        sessions: [
          { day: "Montag", time: "19:30 – 22:00 Uhr" },
          { day: "Donnerstag", time: "19:00 – 22:00 Uhr" },
          { day: "Freitag", time: "19:00 – 22:00 Uhr" },
        ],
      },
      {
        group: "Kinder & Jugendliche bis 15 Jahren",
        watchOnly: true,
        sessions: [{ day: "Montag", time: "ab 18:00 Uhr (zuschauen & schnuppern)" }],
      },
    ],
    locationName: "Rudolf-Diesel-Realschule (Turnhalle)",
    city: "München-Neuhausen",
    transit: "U1 – Haltestelle Rotkreuzplatz",
    routeLink: "Route planen",
    mapTitle: "Karte: Rudolf-Diesel-Realschule",
  },
  beginnerCourse: {
    eyebrow: "Anfängerkurs",
    title: "Der Einstieg ins Kendo",
    intro:
      "Wir bieten etwa alle sechs Monate einen Anfängerkurs an – jeweils nach den Faschingsferien und nach den Sommerferien. Vorkenntnisse oder eigene Ausrüstung brauchst du nicht.",
    steps: [
      { title: "Schnuppern", text: "Komm zum Training und schau zu – oder steig direkt in den nächsten Anfängerkurs ein. Ausrüstung wird gestellt." },
      { title: "6 Wochen testen", text: "Der Kurs ist als Probezeit angelegt: In etwa sechs Wochen lernst du die ersten Schritte und Schläge kennen." },
      { title: "Dabei bleiben", text: "Erst danach entscheidest du, ob du wirklich Kendo lernen und Mitglied im Verein werden möchtest." },
    ],
    bannerPre: "Der nächste Kurs steht in den ",
    bannerLink: "Terminen",
    bannerPost: ". Schreib uns einfach – wir beantworten dir alle Fragen zum Einstieg.",
    bannerButton: "Kontakt aufnehmen",
  },
  calendar: {
    eyebrow: "Termine",
    title: "Kalender",
    intro:
      "Trainingstermine, Anfängerkurse, Lehrgänge und Turniere – immer aktuell aus unserem Vereinskalender.",
    icalLink: "In eigenen Kalender abonnieren",
    placeholderTitle: "Kalender wird in Kürze verbunden",
    placeholderText:
      "Sobald der öffentliche Google-Kalender hinterlegt ist, erscheinen hier automatisch alle Vereinstermine. Bis dahin findest du aktuelle Termine auf unseren Social-Media-Kanälen.",
  },
  social: {
    eyebrow: "Social Media",
    title: "Folge uns",
    intro:
      "Aktuelle Eindrücke aus dem Training, Wettkämpfen und Lehrgängen – auf Instagram und Facebook.",
    igNote: "Auf Instagram folgen für tägliche Einblicke",
    fbLabel: "Facebook",
    fbOpen: "Seite öffnen",
  },
  downloads: {
    eyebrow: "Downloads",
    title: "Formulare & Dokumente",
    intro:
      "Satzung, Beitrittserklärung und alle Anträge zum Herunterladen – aus dem Aktenordner des Vereins.",
    soon: "folgt",
    items: [
      { title: "Satzung", description: "Vereinssatzung von Kendo München e.V.", file: "satzung.pdf" },
      { title: "Beitrittserklärung", description: "Aufnahmeantrag / Mitgliedschaft beantragen.", file: "beitrittserklaerung.pdf" },
      { title: "Fördermitgliedschaft", description: "Den Verein als Fördermitglied unterstützen.", file: "foerdermitgliedschaft.pdf" },
      { title: "Antrag Beitragsermäßigung", description: "Antrag auf Ermäßigung des Mitgliedsbeitrags.", file: "antrag-beitragsermaessigung.pdf" },
      { title: "Antrag Fahrtkostenerstattung", description: "Erstattung von Fahrtkosten beantragen.", file: "antrag-fahrtkosten.pdf" },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Häufige Fragen",
    intro: "Das Wichtigste für deinen Einstieg ins Kendo – kompakt beantwortet.",
    items: [
      { q: "Brauche ich eigene Ausrüstung?", a: "Nein. Für den Anfängerkurs wird die komplette Ausrüstung gestellt – du brauchst nur bequeme Sportkleidung und etwas zu trinken." },
      { q: "Ab welchem Alter kann ich mitmachen?", a: "Jugendliche ab 16 Jahren und Erwachsene trainieren voll mit. Kinder und Jugendliche bis 15 Jahren können montags ab 18:00 Uhr zum Zuschauen vorbeikommen." },
      { q: "Wie fit muss ich sein?", a: "Kendo ist für jedes Fitnesslevel geeignet. Du steigerst dich Schritt für Schritt – Technik und Geist sind mindestens so wichtig wie Kondition." },
      { q: "Wann startet der nächste Anfängerkurs?", a: "Etwa alle sechs Monate – jeweils nach den Faschingsferien und nach den Sommerferien. Die genauen Termine findest du im Kalender und auf unseren Social-Media-Kanälen." },
      { q: "Muss ich gleich Mitglied werden?", a: "Nein. Der Anfängerkurs ist als rund sechswöchige Probezeit angelegt. Erst danach entscheidest du, ob du dem Verein beitreten möchtest." },
      { q: "Wie werde ich Mitglied?", a: "Nach der Probezeit ganz einfach über die Beitrittserklärung – das Formular findest du im Bereich Downloads." },
    ],
  },
  contact: {
    eyebrow: "Kontakt",
    title: "Schreib uns",
    intro:
      "Fragen zum Anfängerkurs, zum Training oder zur Mitgliedschaft? Wir freuen uns über deine Nachricht.",
    emailLabel: "E-Mail",
    trainingLabel: "Training",
    socialLabel: "Social Media",
  },
  footer: {
    brandNote: "Japanisches Fechten seit 1980. Der größte Kendo-Verein Bayerns.",
    vereinHeading: "Verein",
    followHeading: "Folgen",
    rights: "Alle Rechte vorbehalten.",
    impressum: "Impressum",
    datenschutz: "Datenschutz",
  },
};

export type { Content };
export default de;
