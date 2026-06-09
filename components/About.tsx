import type { Content } from "@/lib/content";
import Section from "./Section";

export default function About({ c }: { c: Content["about"] }) {
  return (
    <Section id="ueber-uns" eyebrow={c.eyebrow} title={c.title} intro={c.intro}>
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-4 text-[15px] leading-relaxed text-ink/80">
          <p>{c.p1}</p>
          <p>{c.p2}</p>
        </div>

        <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
          <h3 className="font-display text-lg font-semibold text-coal">
            {c.memberHeading}
          </h3>
          <ul className="mt-4 space-y-3">
            {c.affiliations.map((a) => (
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
