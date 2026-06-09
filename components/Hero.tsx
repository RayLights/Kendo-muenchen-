import { site } from "@/lib/site";
import type { Content } from "@/lib/content";
import { ArrowRightIcon } from "./Icons";

export default function Hero({ c }: { c: Content["hero"] }) {
  return (
    <section id="start" className="relative overflow-hidden bg-coal text-paper">
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
            <span className="font-display text-gold">剣道</span> · {c.badge}
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {site.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-paper/85">{c.descr}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#anfaengerkurs"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-coal transition-colors hover:bg-gold-600"
            >
              {c.ctaPrimary}
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              href="#training"
              className="inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-paper/10"
            >
              {c.ctaSecondary}
            </a>
          </div>
        </div>

        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-1">
          {c.stats.map((item) => (
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
