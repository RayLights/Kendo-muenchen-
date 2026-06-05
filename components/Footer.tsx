import { site } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-coal text-paper">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden
              className="grid h-9 w-9 place-items-center rounded-full bg-gold font-display text-lg text-coal"
            >
              剣
            </span>
            <span className="font-display text-lg font-semibold">
              {site.name}
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-paper/70">
            {site.tagline}. Der größte Kendo-Verein Bayerns.
          </p>
        </div>

        <nav className="text-sm">
          <h3 className="font-display font-semibold text-paper/90">Verein</h3>
          <ul className="mt-3 space-y-2 text-paper/70">
            <li>
              <a href="#ueber-uns" className="hover:text-paper">
                Über uns
              </a>
            </li>
            <li>
              <a href="#training" className="hover:text-paper">
                Training
              </a>
            </li>
            <li>
              <a href="#anfaengerkurs" className="hover:text-paper">
                Anfängerkurs
              </a>
            </li>
            <li>
              <a href="#downloads" className="hover:text-paper">
                Downloads
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-sm">
          <h3 className="font-display font-semibold text-paper/90">Folgen</h3>
          <div className="mt-3 flex gap-3">
            <a
              href={site.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full bg-paper/10 transition-colors hover:bg-gold hover:text-coal"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={site.social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-10 w-10 place-items-center rounded-full bg-paper/10 transition-colors hover:bg-gold hover:text-coal"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-paper/60 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {year} {site.name}. Alle Rechte vorbehalten.
          </p>
          <p className="flex gap-4">
            <a href="/impressum" className="hover:text-paper">
              Impressum
            </a>
            <a href="/datenschutz" className="hover:text-paper">
              Datenschutz
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
