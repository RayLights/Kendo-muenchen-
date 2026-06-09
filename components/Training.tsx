import { site } from "@/lib/site";
import type { Content } from "@/lib/content";
import Section from "./Section";
import { ArrowRightIcon, ClockIcon, PinIcon } from "./Icons";

export default function Training({ c }: { c: Content["training"] }) {
  const { location } = site;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    location.mapsQuery
  )}&output=embed`;
  const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    location.mapsQuery
  )}`;

  return (
    <Section
      id="training"
      tone="tint"
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-5">
          {c.groups.map((g) => (
            <div
              key={g.group}
              className="rounded-2xl border border-line bg-paper p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-coal">
                  {g.group}
                </h3>
                {g.watchOnly && (
                  <span className="rounded-full bg-coal px-3 py-1 text-xs font-semibold text-gold">
                    {c.watchChip}
                  </span>
                )}
              </div>
              <ul className="mt-4 divide-y divide-line">
                {g.sessions.map((s) => (
                  <li
                    key={s.day + s.time}
                    className="flex items-center gap-3 py-2.5"
                  >
                    <ClockIcon className="h-5 w-5 shrink-0 text-coal" />
                    <span className="w-28 font-medium text-ink">{s.day}</span>
                    <span className="text-ink/75">{s.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col rounded-2xl border border-line bg-paper p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <PinIcon className="mt-0.5 h-6 w-6 shrink-0 text-coal" />
            <div>
              <h3 className="font-display text-lg font-semibold text-coal">
                {c.locationName}
              </h3>
              <address className="mt-1 not-italic text-ink/80">
                {location.street}
                <br />
                {location.zip} {c.city}
              </address>
              <p className="mt-2 text-sm text-muted">{c.transit}</p>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-coal underline decoration-2 decoration-gold underline-offset-4 hover:decoration-gold-600"
              >
                {c.routeLink} <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-line">
            <iframe
              title={c.mapTitle}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-64 w-full"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
