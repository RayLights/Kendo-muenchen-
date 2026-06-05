import type { ReactNode } from "react";

/** Shared section wrapper with a consistent eyebrow + heading treatment. */
export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "paper",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children: ReactNode;
  tone?: "paper" | "tint";
}) {
  return (
    <section
      id={id}
      className={tone === "tint" ? "bg-coal/[0.035]" : "bg-paper"}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="inline-block bg-gold px-2.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-coal">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-2 font-display text-3xl font-bold text-coal sm:text-4xl">
            {title}
          </h2>
          <div className="kendo-rule mt-4" />
          {intro && <div className="mt-5 text-lg text-muted">{intro}</div>}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
