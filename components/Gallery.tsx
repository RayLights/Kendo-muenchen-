import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { site } from "@/lib/site";
import type { Content } from "@/lib/content";
import Section from "./Section";
import { Enso, Men, Shinai } from "./KendoArt";
import { ArrowRightIcon, InstagramIcon } from "./Icons";

const EXTS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const ART = [Men, Shinai, Enso];

function readPhotos(): string[] {
  try {
    return fs
      .readdirSync(path.join(process.cwd(), "public", "images"))
      .filter((f) => EXTS.has(path.extname(f).toLowerCase()))
      .sort();
  } catch {
    return [];
  }
}

export default function Gallery({ c }: { c: Content["gallery"] }) {
  const photos = readPhotos();

  return (
    <Section
      id="galerie"
      tone="tint"
      eyebrow={c.eyebrow}
      title={c.title}
      intro={c.intro}
    >
      {photos.length > 0 ? (
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {photos.map((file) => (
            <li
              key={file}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-coal shadow-sm"
            >
              <Image
                src={`/images/${file}`}
                alt={site.name}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {c.tiles.map((tile, i) => {
            const Art = ART[i] ?? Men;
            return (
              <li
                key={tile.caption}
                className="group flex aspect-[4/5] flex-col items-center justify-center gap-6 rounded-2xl bg-coal p-6 text-center shadow-sm"
              >
                <Art className="h-28 w-auto text-gold transition-transform duration-300 group-hover:scale-105" />
                <span className="text-sm font-medium text-paper/80">
                  {tile.caption}
                </span>
              </li>
            );
          })}
        </ul>
      )}

      <a
        href={site.social.instagram.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-6 flex flex-col items-start justify-between gap-4 rounded-2xl p-6 text-white shadow-sm sm:flex-row sm:items-center"
        style={{
          background:
            "linear-gradient(135deg,#515bd4 0%,#8134af 30%,#dd2a7b 65%,#f58529 100%)",
        }}
      >
        <span className="flex items-center gap-3">
          <InstagramIcon className="h-8 w-8" />
          <span>
            <span className="block font-display text-lg font-bold">
              {c.igTitle}
            </span>
            <span className="text-white/85">{site.social.instagram.handle}</span>
          </span>
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold backdrop-blur transition-colors group-hover:bg-white/25">
          {c.igButton} <ArrowRightIcon className="h-4 w-4" />
        </span>
      </a>
    </Section>
  );
}
