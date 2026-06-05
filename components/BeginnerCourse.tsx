import Section from "./Section";
import { ArrowRightIcon } from "./Icons";

const steps = [
  {
    title: "Schnuppern",
    text: "Komm zum Training und schau zu – oder steig direkt in den nächsten Anfängerkurs ein. Ausrüstung wird gestellt.",
  },
  {
    title: "6 Wochen testen",
    text: "Der Kurs ist als Probezeit angelegt: In etwa sechs Wochen lernst du die ersten Schritte und Schläge kennen.",
  },
  {
    title: "Dabei bleiben",
    text: "Erst danach entscheidest du, ob du wirklich Kendo lernen und Mitglied im Verein werden möchtest.",
  },
];

export default function BeginnerCourse() {
  return (
    <Section
      id="anfaengerkurs"
      eyebrow="Anfängerkurs"
      title="Der Einstieg ins Kendo"
      intro="Wir bieten etwa alle sechs Monate einen Anfängerkurs an – jeweils nach den Faschingsferien und nach den Sommerferien. Vorkenntnisse oder eigene Ausrüstung brauchst du nicht."
    >
      <ol className="grid gap-5 sm:grid-cols-3">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className="relative rounded-2xl border border-line bg-paper p-6 shadow-sm"
          >
            <span className="font-display text-5xl font-bold text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-1 font-display text-lg font-semibold text-coal">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">{s.text}</p>
          </li>
        ))}
      </ol>

      <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl bg-coal p-6 text-paper sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-paper/90">
          Der nächste Kurs steht in den{" "}
          <a href="#termine" className="font-semibold underline underline-offset-4">
            Terminen
          </a>
          . Schreib uns einfach – wir beantworten dir alle Fragen zum Einstieg.
        </p>
        <a
          href="#kontakt"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-coal transition-colors hover:bg-gold-600"
        >
          Kontakt aufnehmen <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </Section>
  );
}
