import fs from "node:fs";
import path from "node:path";
import type { Content } from "@/lib/content";
import Section from "./Section";
import { DownloadIcon } from "./Icons";

function pdfExists(file: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", "pdfs", file));
  } catch {
    return false;
  }
}

export default function Downloads({ c }: { c: Content["downloads"] }) {
  const items = c.items.map((d) => ({ ...d, available: pdfExists(d.file) }));

  return (
    <Section
      id="downloads"
      tone="tint"
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
    >
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map((d) => {
          const inner = (
            <>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold text-coal">
                <DownloadIcon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-2">
                  <span className="font-display font-semibold text-coal">
                    {d.title}
                  </span>
                  {!d.available && (
                    <span className="rounded-full bg-line px-2 py-0.5 text-[11px] font-semibold text-muted">
                      {c.soon}
                    </span>
                  )}
                </span>
                <span className="mt-0.5 block text-sm text-ink/70">
                  {d.description}
                </span>
              </span>
            </>
          );

          return (
            <li key={d.file}>
              {d.available ? (
                <a
                  href={`/pdfs/${d.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-line bg-paper p-5 shadow-sm transition-colors hover:border-gold/40 hover:bg-gold/[0.03]"
                >
                  {inner}
                </a>
              ) : (
                <div
                  className="flex cursor-default items-start gap-4 rounded-2xl border border-dashed border-line bg-paper/60 p-5 opacity-80"
                  aria-disabled
                >
                  {inner}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
