import { site, trainingGroups } from "@/lib/site";
import Section from "./Section";
import { ArrowRightIcon, ClockIcon, PinIcon } from "./Icons";

export default function Training() {
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
      eyebrow="Training"
      title="Trainingszeiten & Ort"
      intro="Wir trainieren dreimal pro Woche in München-Neuhausen. Einfach vorbeikommen und zuschauen – ganz unverbindlich."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Schedule */}
        <div className="space-y-5">
          {trainingGroups.map((g) => (
            <div
              key={g.group}
              className="rounded-2xl border border-line bg-paper p-6 shadow-sm"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-lg font-semibold text-navy">
                  {g.group}
                </h3>
                {g.watchOnly && (
                  <span className="rounded-full bg-crimson/10 px-3 py-1 text-xs font-semibold text-crimson">
                    Zuschauen
                  </span>
                )}
              </div>
              <ul className="mt-4 divide-y divide-line">
                {g.sessions.map((s) => (
                  <li
                    key={s.day + s.time}
                    className="flex items-center gap-3 py-2.5"
                  >
                    <ClockIcon className="h-5 w-5 shrink-0 text-crimson" />
                    <span className="w-28 font-medium text-ink">{s.day}</span>
                    <span className="text-ink/75">{s.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Location + map */}
        <div className="flex flex-col rounded-2xl border border-line bg-paper p-6 shadow-sm">
          <div className="flex items-start gap-3">
            <PinIcon className="mt-0.5 h-6 w-6 shrink-0 text-crimson" />
            <div>
              <h3 className="font-display text-lg font-semibold text-navy">
                {location.name}
              </h3>
              <address className="mt-1 not-italic text-ink/80">
                {location.street}
                <br />
                {location.zip} {location.city}
              </address>
              <p className="mt-2 text-sm text-muted">{location.transit}</p>
              <a
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-crimson hover:text-crimson-600"
              >
                Route planen <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-xl border border-line">
            <iframe
              title={`Karte: ${location.name}`}
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
