import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import type { Content } from "@/lib/content";
import type { Person } from "@/lib/content/types";
import Section from "./Section";

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

function AchievementList({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  if (!items?.length) return null;
  return (
    <ul className={`space-y-1.5 ${className}`}>
      {items.map((a) => (
        <li key={a} className="flex gap-2.5 text-sm text-ink/80">
          <span
            aria-hidden
            className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
          />
          <span>{a}</span>
        </li>
      ))}
    </ul>
  );
}

/** Section 1 — beginner trainers. */
export function BeginnerCoach({ c }: { c: Content["beginnerCoach"] }) {
  return (
    <Section
      id="anfaengertraining"
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
    >
      <div className="space-y-6">
        {c.coaches.map((coach: Person) => (
          <div
            key={coach.name}
            className="grid items-center gap-8 rounded-3xl border border-line bg-paper p-6 shadow-sm sm:grid-cols-[auto_1fr] sm:p-8"
          >
            <Avatar
              name={coach.name}
              photo={coach.photo}
              sizes="(max-width: 640px) 100vw, 224px"
              className="mx-auto aspect-square w-48 rounded-2xl ring-4 ring-gold/20 sm:w-52"
            />
            <div>
              {coach.badge && (
                <span className="inline-block bg-gold px-2.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-coal">
                  {coach.badge}
                </span>
              )}
              <h3 className="mt-3 font-display text-2xl font-bold text-coal sm:text-3xl">
                {coach.name}
              </h3>
              <p className="mt-1 flex flex-wrap items-center gap-2 font-semibold text-muted">
                {coach.role}
                <span className="rounded-full bg-coal px-2.5 py-0.5 text-xs font-bold text-gold">
                  {coach.grade}
                </span>
              </p>
              <p className="mt-4 max-w-2xl leading-relaxed text-ink/80">
                {coach.bio}
              </p>
              <AchievementList items={coach.achievements} className="mt-4" />
            </div>
          </div>
        ))}
      </div>

      <a
        href="#anfaengerkurs"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-coal px-5 py-2.5 text-sm font-bold text-gold transition-colors hover:bg-coal-700"
      >
        {c.cta}
      </a>
    </Section>
  );
}

/** Section 2 — head trainers. */
export function Trainers({ c }: { c: Content["trainers"] }) {
  return (
    <Section
      id="trainer"
      tone="tint"
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
    >
      <ul className="grid gap-6 sm:grid-cols-2">
        {c.list.map((t: Person) => (
          <li
            key={t.name}
            className="flex flex-col gap-5 rounded-2xl border border-line bg-paper p-5 shadow-sm transition-colors hover:border-gold sm:flex-row sm:p-6"
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
                <span className="rounded-full bg-coal px-2.5 py-0.5 text-xs font-bold text-gold">
                  {t.grade}
                </span>
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{t.bio}</p>
              <AchievementList items={t.achievements} className="mt-4" />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
