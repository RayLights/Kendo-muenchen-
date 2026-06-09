import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "./lib/i18n";

/**
 * Redirects non-localized paths to the default locale, e.g.
 *   /            → /de
 *   /impressum   → /de/impressum
 * Paths that already start with a known locale pass through unchanged.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return;

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, metadata routes and files with an extension.
  matcher: ["/((?!_next|robots.txt|sitemap.xml|opengraph-image|.*\\..*).*)"],
};
