#!/usr/bin/env node
/**
 * Best-effort porter for the PDF documents from the old Kendo München website.
 *
 * The "Aktenordner" page links to the club's PDFs (Satzung, Beitrittserklärung,
 * etc.). This script fetches that page, extracts every linked .pdf and saves
 * the files into public/pdfs/. Run it on a machine with normal internet access:
 *
 *     node scripts/fetch-pdfs.mjs
 *
 * Afterwards, rename the downloaded files to match the names expected in
 * lib/site.ts (see public/pdfs/README.md).
 *
 * Note: it could not be run in the original build environment because outbound
 * access to kendo-muenchen.de was blocked there.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const SOURCE_PAGES = [
  "https://kendo-muenchen.de/aktenordner/",
  "https://kendo-muenchen.de/join/",
];

const OUT_DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
  "pdfs"
);

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) " +
  "AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15";

async function getHtml(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`${url} → HTTP ${res.status}`);
  return res.text();
}

function extractPdfUrls(html, baseUrl) {
  const urls = new Set();
  const re = /href=["']([^"']+\.pdf)["']/gi;
  let m;
  while ((m = re.exec(html))) {
    try {
      urls.add(new URL(m[1], baseUrl).toString());
    } catch {
      /* ignore malformed */
    }
  }
  return [...urls];
}

async function download(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  const name = decodeURIComponent(url.split("/").pop() || "dokument.pdf");
  await writeFile(path.join(OUT_DIR, name), buf);
  return { name, size: buf.length };
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });

  const found = new Set();
  for (const page of SOURCE_PAGES) {
    try {
      const html = await getHtml(page);
      extractPdfUrls(html, page).forEach((u) => found.add(u));
      console.log(`✓ gelesen: ${page}`);
    } catch (err) {
      console.warn(`⚠ ${page}: ${err.message}`);
    }
  }

  if (found.size === 0) {
    console.error(
      "Keine PDFs gefunden. Bitte Dateien manuell herunterladen und in public/pdfs/ ablegen."
    );
    process.exit(1);
  }

  console.log(`\n${found.size} PDF(s) gefunden, lade herunter …\n`);
  for (const url of found) {
    try {
      const { name, size } = await download(url);
      console.log(`  ↓ ${name} (${(size / 1024).toFixed(0)} KB)`);
    } catch (err) {
      console.warn(`  ⚠ ${url}: ${err.message}`);
    }
  }

  console.log(
    "\nFertig. Bitte Dateien gemäß public/pdfs/README.md umbenennen."
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
