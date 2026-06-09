import type { Content } from "@/lib/content";
import Section from "./Section";
import { Men } from "./KendoArt";

export default function Glossary({ c }: { c: Content["glossary"] }) {
  return (
    <Section id="begriffe" eyebrow={c.eyebrow} title={c.title} intro={c.intro}>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {c.terms.map((t) => (
          <li
            key={t.romaji}
            className="rounded-2xl border border-line bg-paper p-5 text-center shadow-sm transition-colors hover:border-gold"
          >
            <div className="flex h-12 items-center justify-center">
              <span className="font-display text-3xl font-bold leading-none text-coal">
                {t.kanji}
              </span>
            </div>
            <div className="mt-2 text-sm font-bold text-coal">{t.romaji}</div>
            <div className="mt-1 text-xs leading-snug text-muted">
              {t.meaning}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 grid gap-8 rounded-3xl bg-coal p-8 text-paper md:grid-cols-[auto_1fr] md:items-center md:gap-10">
        <div className="flex items-center gap-5">
          <Men className="h-28 w-28 shrink-0 text-gold" />
          <div>
            <p className="inline-block bg-gold px-2.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-coal">
              {c.datotsuLabel}
            </p>
            <h3 className="mt-3 font-display text-2xl font-bold">
              {c.datotsuTitle}
            </h3>
            <p className="mt-1 text-sm text-paper/70">{c.datotsuSubtitle}</p>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {c.targets.map((t) => (
            <li
              key={t.romaji}
              className="flex items-center gap-4 rounded-2xl border border-paper/15 bg-paper/5 p-4"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gold font-display text-xl font-bold text-coal">
                {t.kanji}
              </span>
              <span>
                <span className="block font-bold text-gold">{t.romaji}</span>
                <span className="block text-sm text-paper/75">{t.meaning}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
