import { site } from "@/lib/site";
import { ArrowRightIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="start"
      className="relative overflow-hidden bg-coal text-paper"
    >
      {/* Decorative concentric circle, evoking a target / hinomaru */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full border-[3px] border-gold/30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-10 h-72 w-72 rounded-full border border-paper/10"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/40 px-3 py-1 text-xs uppercase tracking-[0.2em] text-paper/80">
            <span className="font-display text-gold">剣道</span> · seit 1980
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-paper/85">
            {site.tagline}. Der größte Kendo-Verein Bayerns – eine
            Gemeinschaft für japanisches Schwertfechten in München, offen für
            Einsteiger jeden Alters.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#anfaengerkurs"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-coal transition-colors hover:bg-gold-600"
            >
              Anfängerkurs entdecken
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#training"
              className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-paper/10"
            >
              Trainingszeiten
            </a>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-1">
          {[
            { stat: "1980", label: "gegründet" },
            { stat: "100+", label: "Mitglieder" },
            { stat: "Nr. 1", label: "Kendo-Verein in Bayern" },
          ].map((item) => (
            <li
              key={item.label}
              className="rounded-2xl border border-paper/15 bg-paper/5 p-5"
            >
              <div className="font-display text-3xl font-bold text-gold">
                {item.stat}
              </div>
              <div className="mt-1 text-sm text-paper/75">{item.label}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
