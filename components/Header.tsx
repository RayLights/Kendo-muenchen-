"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import {
  CloseIcon,
  FacebookIcon,
  InstagramIcon,
  MenuIcon,
} from "./Icons";

const navLinks = [
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#training", label: "Training" },
  { href: "#anfaengerkurs", label: "Anfängerkurs" },
  { href: "#termine", label: "Termine" },
  { href: "#downloads", label: "Downloads" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#start" className="flex items-center gap-3">
          <span
            aria-hidden
            className="grid h-9 w-9 place-items-center rounded-full bg-navy font-display text-lg leading-none text-paper"
          >
            剣
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold text-navy">
              {site.name}
            </span>
            <span className="block text-[11px] uppercase tracking-[0.18em] text-muted">
              {site.tagline}
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink/80 transition-colors hover:text-crimson"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 border-l border-line pl-5">
            <a
              href={site.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-navy transition-colors hover:text-crimson"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={site.social.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-navy transition-colors hover:text-crimson"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-navy md:hidden"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
        >
          {open ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-line bg-paper md:hidden">
          <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-[15px] font-medium text-ink/85 hover:text-crimson"
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
                className="flex items-center gap-2 text-sm font-medium text-navy"
              >
                <InstagramIcon className="h-5 w-5" /> Instagram
              </a>
              <a
                href={site.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-navy"
              >
                <FacebookIcon className="h-5 w-5" /> Facebook
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
