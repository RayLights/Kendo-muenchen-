import { site } from "@/lib/site";
import type { Content } from "@/lib/content";
import Section from "./Section";
import { CalendarIcon } from "./Icons";

export default function Calendar({ c }: { c: Content["calendar"] }) {
  const { calendarEmbedUrl, calendarIcalUrl } = site;

  return (
    <Section
      id="termine"
      tone="tint"
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
    >
      {calendarEmbedUrl ? (
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
            <iframe
              title={c.title}
              src={calendarEmbedUrl}
              className="h-[36rem] w-full"
              loading="lazy"
              style={{ border: 0 }}
            />
          </div>
          {calendarIcalUrl && (
            <a
              href={calendarIcalUrl}
              className="inline-flex items-center gap-2 text-sm font-semibold text-coal underline decoration-2 decoration-gold underline-offset-4 hover:decoration-gold-600"
            >
              <CalendarIcon className="h-5 w-5" /> {c.icalLink}
            </a>
          )}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-line bg-paper p-10 text-center shadow-sm">
          <CalendarIcon className="mx-auto h-10 w-10 text-coal" />
          <h3 className="mt-3 font-display text-lg font-semibold text-coal">
            {c.placeholderTitle}
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted">
            {c.placeholderText}
          </p>
        </div>
      )}
    </Section>
  );
}
