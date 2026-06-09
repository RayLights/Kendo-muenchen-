/**
 * Language-neutral site configuration (URLs, contact, embeds, address).
 * All translatable text lives in lib/content/{de,en,ja}.ts.
 */
export const site = {
  name: "Kendo München e.V.",
  // Default tagline used for the (language-neutral) Open Graph image.
  tagline: "Japanisches Fechten seit 1980",
  url: "https://www.kendo-muenchen.de",

  // TODO: replace with the club's real address.
  email: "info@kendo-muenchen.de",

  location: {
    street: "Schulstraße 3a",
    zip: "80634",
    // Used for the "directions" link and the embedded map.
    mapsQuery: "Rudolf-Diesel-Realschule, Schulstraße 3a, 80634 München",
  },

  social: {
    instagram: {
      handle: "@kendo_muenchen_ev",
      url: "https://www.instagram.com/kendo_muenchen_ev/",
    },
    facebook: {
      handle: "Kendo München e.V.",
      url: "https://www.facebook.com/kendomuenchen/",
    },
  },

  // Paste the public Google Calendar embed URL here (see lib/content note).
  calendarEmbedUrl: "" as string,
  calendarIcalUrl: "" as string,
} as const;
