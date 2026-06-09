import type { Content } from "@/lib/content";
import Section from "./Section";

export default function FAQ({ c }: { c: Content["faq"] }) {
  return (
    <Section id="faq" eyebrow={c.eyebrow} title={c.title} intro={c.intro}>
      <div className="mx-auto max-w-3xl divide-y divide-line overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
        {c.items.map((f) => (
          <details key={f.q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display font-semibold text-coal transition-colors hover:bg-gold/[0.06]">
              {f.q}
              <span
                aria-hidden
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gold text-coal transition-transform duration-200 group-open:rotate-45"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-ink/80">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
