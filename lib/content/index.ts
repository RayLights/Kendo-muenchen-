import type { Locale } from "../i18n";
import type { Content } from "./types";
import de from "./de";
import en from "./en";
import ja from "./ja";

const dictionaries: Record<Locale, Content> = { de, en, ja };

export function getContent(locale: Locale): Content {
  return dictionaries[locale];
}

export type { Content };
