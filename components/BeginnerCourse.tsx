import type { Content } from "@/lib/content";
import Section from "./Section";
import { ArrowRightIcon } from "./Icons";

export default function BeginnerCourse({
  c,
}: {
  c: Content["beginnerCourse"];
}) {
  return (
    <Section
      id="anfaengerkurs"
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
    >
      <ol className="grid gap-5 sm:grid-cols-3">
        {c.steps.map((s, i) => (
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
          {c.bannerPre}
          <a href="#termine" className="font-semibold underline underline-offset-4">
            {c.bannerLink}
          </a>
          {c.bannerPost}
        </p>
        <a
          href="#kontakt"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-coal transition-colors hover:bg-gold-600"
        >
          {c.bannerButton} <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </Section>
  );
}
