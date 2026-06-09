"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import type { Content } from "@/lib/content";
import { locales, localeNames, type Locale } from "@/lib/i18n";
import { CloseIcon, FacebookIcon, InstagramIcon, MenuIcon } from "./Icons";

export default function Header({ c, locale }: { c: Content; locale: Locale }) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#ueber-uns", label: c.nav.ueberUns },
    { href: "#begriffe", label: c.nav.begriffe },
    { href: "#galerie", label: c.nav.galerie },
    { href: "#trainer", label: c.nav.trainer },
    { href: "#training", label: c.nav.training },
    { href: "#anfaengerkurs", label: c.nav.anfaengerkurs },
    { href: "#termine", label: c.nav.termine },
    { href: "#downloads", label: c.nav.downloads },
    { href: "#kontakt", label: c.nav.kontakt },
  ];

  const LanguageSwitcher = () => (
    <details className="group relative">
      <summary className="flex cursor-pointer list-none items-center gap-1 text-sm font-semibold text-coal">
        {localeNames[locale]}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          className="transition-transform group-open:rotate-180"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </summary>
      <ul className="absolute right-0 z-50 mt-2 w-36 overflow-hidden rounded-xl border border-line bg-paper py-1 shadow-lg">
        {locales.map((l) => (
          <li key={l}>
            <a
              href={`/${l}`}
              className={`block px-4 py-2 text-sm hover:bg-gold/10 ${
                l === locale ? "font-bold text-coal" : "text-ink/80"
              }`}
            >
              {localeNames[l]}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#start" className="flex items-center gap-3">
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-full bg-coal font-display text-lg leading-none text-gold"
          >
            剣
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold text-coal">
              {site.name}
            </span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-muted">
              {c.tagline}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-4 xl:flex 2xl:gap-5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="border-b-2 border-transparent pb-0.5 text-sm font-medium text-ink/80 transition-colors hover:border-gold hover:text-coal"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 border-l border-line pl-4">
            <a
              href={site.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-coal transition-opacity hover:opacity-60"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={site.social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-coal transition-opacity hover:opacity-60"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
            <LanguageSwitcher />
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-coal xl:hidden"
          aria-label={open ? c.nav.menuClose : c.nav.menuOpen}
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-line bg-paper xl:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-[15px] font-medium text-ink/85 hover:text-coal"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex items-center gap-4 border-t border-line pt-3">
              <a
                href={site.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-coal"
              >
                <InstagramIcon className="h-5 w-5" /> Instagram
              </a>
              <a
                href={site.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-coal"
              >
                <FacebookIcon className="h-5 w-5" /> Facebook
              </a>
            </li>
            <li className="mt-3 flex items-center gap-3 border-t border-line pt-3">
              <span className="text-sm font-semibold text-muted">
                {c.nav.language}:
              </span>
              {locales.map((l) => (
                <a
                  key={l}
                  href={`/${l}`}
                  className={`text-sm ${
                    l === locale ? "font-bold text-coal" : "text-ink/70"
                  }`}
                >
                  {localeNames[l]}
                </a>
              ))}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
