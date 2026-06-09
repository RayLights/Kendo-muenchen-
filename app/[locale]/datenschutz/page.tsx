import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Datenschutzerklärung" };

export default async function Datenschutz({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href={`/${locale}`}
        className="text-sm font-semibold text-coal underline decoration-2 decoration-gold underline-offset-4 hover:decoration-gold-600"
      >
        ← Zur Startseite
      </Link>
      <h1 className="mt-6 font-display text-3xl font-bold text-coal">
        Datenschutzerklärung
      </h1>
      <div className="kendo-rule mt-4" />

      <div className="mt-8 space-y-6 text-ink/80">
        <p className="rounded-xl border border-dashed border-line bg-coal/[0.03] p-4 text-sm text-muted">
          Hinweis: Diese Datenschutzerklärung ist eine Vorlage und muss vor
          Veröffentlichung an die tatsächliche Datenverarbeitung angepasst und
          rechtlich geprüft werden (DSGVO).
        </p>

        <section>
          <h2 className="font-display text-lg font-semibold text-coal">
            1. Verantwortlicher
          </h2>
          <p className="mt-2">
            {site.name}, [Anschrift], E-Mail: {site.email}.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-coal">
            2. Hosting
          </h2>
          <p className="mt-2">
            Diese Website wird bei Vercel Inc. gehostet. Beim Aufruf werden
            technisch notwendige Server-Logdaten (z. B. IP-Adresse, Zeitpunkt,
            abgerufene Seite) verarbeitet (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-coal">
            3. Eingebundene Dienste Dritter
          </h2>
          <p className="mt-2">
            Auf dieser Seite werden Inhalte Dritter eingebunden. Dabei können
            Daten an die jeweiligen Anbieter übertragen werden:
          </p>
          <ul className="mt-2 list-disc space-y-1 pl-6">
            <li>Google Maps / Google Kalender (Google Ireland Ltd.)</li>
            <li>Facebook Page Plugin (Meta Platforms Ireland Ltd.)</li>
            <li>Instagram-Verlinkung (Meta Platforms Ireland Ltd.)</li>
            <li>Google Fonts (selbst gehostet über next/font – keine Übertragung an Google)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-coal">
            4. Ihre Rechte
          </h2>
          <p className="mt-2">
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung der Verarbeitung, Datenübertragbarkeit sowie
            Widerspruch. Wenden Sie sich dazu an den oben genannten
            Verantwortlichen.
          </p>
        </section>
      </div>
    </main>
  );
}
