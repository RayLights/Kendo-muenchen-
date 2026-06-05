import { site } from "@/lib/site";
import Section from "./Section";

export default function About() {
  return (
    <Section
      id="ueber-uns"
      eyebrow="Über uns"
      title="Kendo in München – seit über 40 Jahren"
      intro={
        <>
          Kendo München e.V. wurde am 14. Mai 1980 gegründet, ist als
          gemeinnützig anerkannt und zählt heute über 100 Mitglieder. Damit sind
          wir der größte Kendo-Verein Bayerns.
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-4 text-[15px] leading-relaxed text-ink/80">
          <p>
            Kendo – der „Weg des Schwertes“ – ist eine traditionelle japanische
            Kampfkunst, die aus dem Schwertkampf der Samurai hervorgegangen ist.
            Heute verbindet Kendo körperliche Fitness, Disziplin und Respekt mit
            einem fairen, dynamischen Wettkampf.
          </p>
          <p>
            Bei uns treffen sich Menschen jeden Alters und jeder Herkunft, um
            gemeinsam zu trainieren – vom ersten Schlag im Anfängerkurs bis zur
            Vorbereitung auf nationale und internationale Turniere. Gäste und
            Zuschauer sind beim Training jederzeit herzlich willkommen.
          </p>
        </div>

        <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
          <h3 className="font-display text-lg font-semibold text-coal">
            Mitglied in
          </h3>
          <ul className="mt-4 space-y-3">
            {site.affiliations.map((a) => (
              <li key={a.abbr} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex min-w-14 justify-center rounded-md bg-coal px-2 py-1 text-xs font-semibold text-gold">
                  {a.abbr}
                </span>
                <span className="text-sm text-ink/80">{a.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
