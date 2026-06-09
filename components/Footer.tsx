import { site } from "@/lib/site";
import type { Content } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { FacebookIcon, InstagramIcon } from "./Icons";

export default function Footer({ c, locale }: { c: Content; locale: Locale }) {
  const year = new Date().getFullYear();
  const links = [
    { href: "#ueber-uns", label: c.nav.ueberUns },
    { href: "#trainer", label: c.nav.trainer },
    { href: "#training", label: c.nav.training },
    { href: "#anfaengerkurs", label: c.nav.anfaengerkurs },
    { href: "#faq", label: c.nav.faq },
    { href: "#downloads", label: c.nav.downloads },
  ];

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
          <p className="mt-3 max-w-xs text-sm text-paper/70">{c.footer.brandNote}</p>
        </div>

        <nav className="text-sm">
          <h3 className="font-display font-semibold text-paper/90">
            {c.footer.vereinHeading}
          </h3>
          <ul className="mt-3 space-y-2 text-paper/70">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-paper">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <h3 className="font-display font-semibold text-paper/90">
            {c.footer.followHeading}
          </h3>
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
            © {year} {site.name}. {c.footer.rights}
          </p>
          <p className="flex gap-4">
            <a href={`/${locale}/impressum`} className="hover:text-paper">
              {c.footer.impressum}
            </a>
            <a href={`/${locale}/datenschutz`} className="hover:text-paper">
              {c.footer.datenschutz}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
