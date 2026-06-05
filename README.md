# Kendo München e.V. — Website

Neue Landing Page für **Kendo München e.V.** (www.kendo-muenchen.de) —
gebaut mit [Next.js](https://nextjs.org) (App Router) und
[Tailwind CSS](https://tailwindcss.com), optimiert für das Deployment auf
[Vercel](https://vercel.com).

## Features

- **Eine moderne, responsive Landing Page** mit Sektionen für Über uns,
  Training, Anfängerkurs, Termine, Social Media, Downloads und Kontakt.
- **Gültiges HTTPS-Zertifikat** automatisch über Vercel (löst das Zertifikats-
  Problem der alten Seite) – inkl. HSTS-Header.
- **Kalender-Anbindung**: öffentlicher Google-Kalender als Embed.
- **Instagram & Facebook**: Verlinkung + Live-Facebook-Timeline (Page Plugin).
- **PDF-Downloads** (Satzung, Beitrittserklärung, Anträge …) aus `public/pdfs/`.
- **Impressum & Datenschutz** als Vorlagen (Pflicht in DE).
- SEO: Metadaten, Open Graph, `sitemap.xml`, `robots.txt`, strukturierte Daten.

## Lokal entwickeln

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build prüfen
```

## Wichtige Dateien – hier wird angepasst

| Was                                   | Wo                          |
| ------------------------------------- | --------------------------- |
| Texte, Adresse, E-Mail, Social-Links  | `lib/site.ts`               |
| Trainingszeiten                       | `lib/site.ts` (`trainingGroups`) |
| Download-Liste                        | `lib/site.ts` (`downloads`) |
| **Farbschema**                        | `app/globals.css` (`:root`) |
| PDF-Dateien                           | `public/pdfs/`              |

### Farbschema

Die Originalseite ließ sich aus der Build-Umgebung nicht auslesen, daher wird
eine traditionelle Kendo-Palette verwendet: **Indigo/Navy** (kon-iro, die Farbe
von Keikogi und Hakama) als Primärfarbe, **Karmesinrot** (die rote Kendo-Fahne)
als Akzent, auf warmem „Washi"-Hintergrund. Zum Anpassen einfach die vier
Werte unter `:root` in `app/globals.css` ändern.

### Kalender verbinden

In Google Kalender: **Einstellungen → Kalender auswählen → „Kalender
integrieren"** → den `src`-Wert aus dem iframe-Code kopieren und in
`lib/site.ts` als `calendarEmbedUrl` eintragen. Solange leer, zeigt die
Termine-Sektion einen Platzhalter.

### PDFs übernehmen

PDFs der alten Seite in `public/pdfs/` ablegen (Dateinamen siehe
`public/pdfs/README.md`). Alternativ – auf einem Rechner mit normalem
Internetzugang:

```bash
npm run fetch-pdfs
```

## Deployment auf Vercel

1. Dieses Repository auf Vercel importieren
   ([vercel.com/new](https://vercel.com/new)). Vercel erkennt Next.js
   automatisch – kein Build-Command nötig.
2. **Domain verbinden**: Im Vercel-Projekt unter **Settings → Domains** die
   Domain `kendo-muenchen.de` **und** `www.kendo-muenchen.de` hinzufügen.
3. **DNS umstellen** (beim Domain-Provider):
   - `www` → CNAME auf `cname.vercel-dns.com`
   - Root `kendo-muenchen.de` → A-Record auf `76.76.21.21`
     (oder ALIAS/ANAME auf `cname.vercel-dns.com`, falls unterstützt).
   Den genauen Wert zeigt Vercel beim Hinzufügen der Domain an.
4. Vercel stellt anschließend **automatisch ein gültiges Let's-Encrypt-
   Zertifikat** aus und erneuert es – damit ist das Zertifikatsproblem gelöst.

> Hinweis: Schritte 2–4 erfordern Zugriff auf das Vercel-Konto und die DNS-
> Verwaltung des Vereins und können daher nicht aus dieser Umgebung erfolgen.

## Offene Punkte (benötigen Vereinsangaben)

- [ ] **PDFs** in `public/pdfs/` ablegen (siehe oben).
- [ ] **Google-Kalender-URL** in `lib/site.ts` eintragen.
- [ ] **Kontakt-E-Mail** in `lib/site.ts` prüfen/ersetzen.
- [ ] **Impressum & Datenschutz** mit echten Angaben vervollständigen.
- [ ] **Farbschema** ggf. an das Vereins-Branding anpassen.
- [ ] **Vercel-Deployment & DNS** einrichten (Zertifikat).
