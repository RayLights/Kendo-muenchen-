import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { beginnerCoach, trainers } from "@/lib/site";
import Section from "./Section";

/** True if a trainer photo exists at public/images/team/<file>. */
function hasTeamPhoto(file: string): boolean {
  try {
    return fs.existsSync(
      path.join(process.cwd(), "public", "images", "team", file)
    );
  } catch {
    return false;
  }
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/** Photo if present, otherwise an on-brand initials avatar (coal + gold). */
function Avatar({
  name,
  photo,
  className = "",
  sizes,
}: {
  name: string;
  photo: string;
  className?: string;
  sizes: string;
}) {
  if (hasTeamPhoto(photo)) {
    return (
      <div className={`relative overflow-hidden bg-coal ${className}`}>
        <Image
          src={`/images/team/${photo}`}
          alt={name}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }
  return (
    <div
      className={`relative grid place-items-center overflow-hidden bg-coal ${className}`}
    >
      <span
        aria-hidden
        className="absolute -bottom-3 -right-1 font-display text-7xl text-gold/10"
      >
        剣
      </span>
      <span className="font-display text-5xl font-bold text-gold">
        {initials(name)}
      </span>
    </div>
  );
}

/** Section 1 — beginner trainer (Julia Jonentz). */
export function BeginnerCoach() {
  const c = beginnerCoach;
  return (
    <Section
      id="anfaengertraining"
      eyebrow="Anfängertraining"
      title="Deine Trainerin für den Einstieg"
      intro="Im Anfängerkurs lernst du von einer der erfahrensten Trainerinnen des Vereins."
    >
      <div className="grid items-center gap-8 rounded-3xl border border-line bg-paper p-6 shadow-sm sm:grid-cols-[auto_1fr] sm:p-8">
        <Avatar
          name={c.name}
          photo={c.photo}
          sizes="(max-width: 640px) 100vw, 224px"
          className="mx-auto aspect-square w-48 rounded-2xl ring-4 ring-gold/20 sm:w-56"
        />
        <div>
          <span className="inline-block bg-gold px-2.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-coal">
            {c.badge}
          </span>
          <h3 className="mt-3 font-display text-2xl font-bold text-coal sm:text-3xl">
            {c.name}
          </h3>
          <p className="mt-1 font-semibold text-muted">{c.role}</p>
          <p className="mt-4 max-w-2xl leading-relaxed text-ink/80">{c.bio}</p>
          <a
            href="#anfaengerkurs"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-coal px-5 py-2.5 text-sm font-bold text-gold transition-colors hover:bg-coal-700"
          >
            Zum Anfängerkurs
          </a>
        </div>
      </div>
    </Section>
  );
}

/** Section 2 — head trainers (Sascha & Dance Yokoo). */
export function Trainers() {
  return (
    <Section
      id="trainer"
      tone="tint"
      eyebrow="Trainerteam"
      title="Unsere Trainer"
      intro="Bekannte Größen der deutschen Kendo-Szene – sie bringen jahrzehntelange Erfahrung in jedes Training ein."
    >
      <ul className="grid gap-6 sm:grid-cols-2">
        {trainers.map((t) => (
          <li
            key={t.name}
            className="flex items-center gap-5 rounded-2xl border border-line bg-paper p-5 shadow-sm transition-colors hover:border-gold sm:p-6"
          >
            <Avatar
              name={t.name}
              photo={t.photo}
              sizes="128px"
              className="aspect-square w-28 shrink-0 rounded-2xl ring-4 ring-gold/20 sm:w-32"
            />
            <div className="min-w-0">
              <h3 className="font-display text-xl font-bold text-coal">
                {t.name}
              </h3>
              <p className="mt-0.5 flex flex-wrap items-center gap-2 text-sm font-semibold text-muted">
                {t.role}
                {t.dan && (
                  <span className="rounded-full bg-coal px-2 py-0.5 text-xs font-bold text-gold">
                    {t.dan}
                  </span>
                )}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{t.bio}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
