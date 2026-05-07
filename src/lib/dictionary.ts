import en from "../dictionaries/en.json";
import de from "../dictionaries/de.json";

export const dictionaries = {
  en,
  de,
};

export type Lang = "en" | "de";

export function getDictionary(lang: Lang) {
  return dictionaries[lang];
}