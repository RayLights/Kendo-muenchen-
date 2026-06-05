# PDF-Dokumente (Aktenordner)

Die Download-Sektion der Website verlinkt auf die PDFs in diesem Ordner. Sobald
eine Datei mit dem passenden Namen hier liegt, wird sie automatisch als
herunterladbar angezeigt (sonst erscheint sie als „folgt").

## Erwartete Dateinamen

Diese Namen sind in `lib/site.ts` (Array `downloads`) hinterlegt:

| Datei                              | Dokument                     |
| ---------------------------------- | ---------------------------- |
| `satzung.pdf`                      | Satzung                      |
| `beitrittserklaerung.pdf`          | Beitrittserklärung           |
| `foerdermitgliedschaft.pdf`        | Fördermitgliedschaft         |
| `antrag-beitragsermaessigung.pdf`  | Antrag Beitragsermäßigung    |
| `antrag-fahrtkosten.pdf`           | Antrag Fahrtkostenerstattung |

> Andere/zusätzliche Dokumente? Einfach die Datei hier ablegen **und** den
> Eintrag im Array `downloads` in `lib/site.ts` ergänzen.

## PDFs von der alten Website übernehmen

Die alte Seite (`kendo-muenchen.de/aktenordner/`) blockiert automatisierte
Zugriffe aus der Build-Umgebung, daher konnten die Original-PDFs hier nicht
automatisch heruntergeladen werden. So holst du sie:

**Variante A – manuell (am einfachsten):**
PDFs auf der alten Seite herunterladen, passend zur Tabelle oben umbenennen und
in diesen Ordner legen.

**Variante B – per Skript** (auf einem Rechner mit normalem Internetzugang):

```bash
node scripts/fetch-pdfs.mjs
```

Das Skript versucht, die im Aktenordner verlinkten PDFs zu finden und hierher
zu speichern. Anschließend die Dateien ggf. wie oben umbenennen.
