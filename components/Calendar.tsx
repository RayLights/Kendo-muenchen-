import { site } from "@/lib/site";
import Section from "./Section";
import { CalendarIcon } from "./Icons";

export default function Calendar() {
  const { calendarEmbedUrl, calendarIcalUrl } = site;

  return (
    <Section
      id="termine"
      tone="tint"
      eyebrow="Termine"
      title="Kalender"
      intro="Trainingstermine, Anfängerkurse, Lehrgänge und Turniere – immer aktuell aus unserem Vereinskalender."
    >
      {calendarEmbedUrl ? (
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
            <iframe
              title="Vereinskalender Kendo München"
              src={calendarEmbedUrl}
              className="h-[36rem] w-full"
              loading="lazy"
              style={{ border: 0 }}
            />
          </div>
          {calendarIcalUrl && (
            <a
              href={calendarIcalUrl}
              className="inline-flex items-center gap-2 text-sm font-semibold text-crimson hover:text-crimson-600"
            >
              <CalendarIcon className="h-5 w-5" /> In eigenen Kalender abonnieren
            </a>
          )}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-line bg-paper p-10 text-center shadow-sm">
          <CalendarIcon className="mx-auto h-10 w-10 text-crimson" />
          <h3 className="mt-3 font-display text-lg font-semibold text-navy">
            Kalender wird in Kürze verbunden
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            Sobald der öffentliche Google-Kalender hinterlegt ist, erscheinen
            hier automatisch alle Vereinstermine. Bis dahin findest du aktuelle
            Termine auf unseren Social-Media-Kanälen.
          </p>
          {/*
            So verbinden: In Google Kalender → Einstellungen → Kalender
            auswählen → "Kalender integrieren" → den src-Wert aus dem
            iframe-Code kopieren und in lib/site.ts als `calendarEmbedUrl`
            eintragen.
          */}
        </div>
      )}
    </Section>
  );
}
