import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Impressum" };

export default function Impressum() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link
        href="/"
        className="text-sm font-semibold text-coal underline decoration-2 decoration-gold underline-offset-4 hover:decoration-gold-600"
      >
        ← Zur Startseite
      </Link>
      <h1 className="mt-6 font-display text-3xl font-bold text-coal">
        Impressum
      </h1>
      <div className="kendo-rule mt-4" />

      <div className="prose mt-8 space-y-6 text-ink/80">
        <p className="rounded-xl border border-dashed border-line bg-coal/[0.03] p-4 text-sm text-muted">
          Hinweis: Bitte vor Veröffentlichung mit den offiziellen
          Vereinsangaben vervollständigen (Angaben nach § 5 DDG / § 18 MStV).
          Die Platzhalter in <code>[…]</code> müssen ersetzt werden.
        </p>

        <section>
          <h2 className="font-display text-lg font-semibold text-coal">
            Angaben gemäß § 5 DDG
          </h2>
          <p className="mt-2">
            {site.name}
            <br />
            [Straße und Hausnummer]
            <br />
            [PLZ Ort]
          </p>
          <p className="mt-2">
            Vereinsregister: [Registergericht], Registernummer: [VR-Nummer]
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-coal">
            Vertreten durch
          </h2>
          <p className="mt-2">[Name der/des Vorsitzenden] (1. Vorstand)</p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-coal">
            Kontakt
          </h2>
          <p className="mt-2">
            E-Mail: {site.email}
            <br />
            Telefon: [optional]
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-semibold text-coal">
            Verantwortlich i.S.d. § 18 Abs. 2 MStV
          </h2>
          <p className="mt-2">[Name], [Anschrift wie oben]</p>
        </section>
      </div>
    </main>
  );
}
