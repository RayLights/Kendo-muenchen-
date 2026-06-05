import type { SVGProps } from "react";

/**
 * Lightweight, on-brand kendo line illustrations (no external images needed).
 * They use `currentColor`, so colour them with Tailwind text utilities, e.g.
 * `<Shinai className="text-gold" />`.
 */

/** Ensō — the single-stroke calligraphic circle, a classic zen/budō motif. */
export function Enso(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" fill="none" {...props}>
      <path
        d="M86 26 C72 16 50 16 36 28 C16 44 16 78 38 94 C60 108 92 102 104 78 C112 62 108 42 92 32"
        stroke="currentColor"
        strokeWidth={9}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Shinai — the bamboo practice sword, shown vertically. */
export function Shinai(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 48 200" fill="none" {...props}>
      <g
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* blade (four bamboo staves suggested by the centre split) */}
        <path d="M24 10 L24 132" />
        <path d="M19 16 L19 130" opacity={0.5} />
        <path d="M29 16 L29 130" opacity={0.5} />
        {/* tip cap (sakigawa) */}
        <path d="M19 14 C19 7 29 7 29 14" />
        {/* nakayui (leather tie) */}
        <path d="M16 46 L32 46" strokeWidth={4} />
        {/* tsuba (guard) */}
        <circle cx="24" cy="138" r="9" />
        {/* tsuka (handle) with crossed wrap */}
        <path d="M24 147 L24 190" />
        <path d="M17 152 L31 168 M31 152 L17 168 M17 172 L31 186 M31 172 L17 186" opacity={0.7} />
      </g>
    </svg>
  );
}

/** Men — the kendo mask, stylised front view with its metal grille. */
export function Men(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 130" fill="none" {...props}>
      <g
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* outer padded frame (men-buton) */}
        <path d="M22 40 C22 14 98 14 98 40 L98 70 C98 104 80 120 60 120 C40 120 22 104 22 70 Z" />
        {/* inner face opening */}
        <path d="M36 42 C36 26 84 26 84 42 L84 66 C84 92 72 104 60 104 C48 104 36 92 36 66 Z" />
        {/* metal grille bars (men-gane) */}
        <path d="M37 50 H83 M37 60 H83 M37 70 H82 M39 80 H81 M42 90 H78" opacity={0.85} />
        {/* centre bar */}
        <path d="M60 42 L60 102" />
        {/* throat flap (tsuki-dare) */}
        <path d="M48 112 L72 112" strokeWidth={4} />
      </g>
    </svg>
  );
}
