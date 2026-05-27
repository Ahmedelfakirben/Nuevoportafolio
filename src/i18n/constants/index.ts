export const LOCALES = {
  en: {
    iso: "en-US",
    name: "English",
  },
  de: {
    iso: "de-DE",
    name: "Deutsch",
  },
  es: {
    iso: "es-ES",
    name: "Español",
  },
  fr: {
    iso: "fr-FR",
    name: "Français",
  },
} as const satisfies Record<
  string,
  {
    name: string;
    iso: string;
  }
>;

export const LOCALE_DEFAULT: keyof typeof LOCALES = "en";
