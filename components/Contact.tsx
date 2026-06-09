import { site } from "@/lib/site";
import type { Content } from "@/lib/content";
import Section from "./Section";
import { FacebookIcon, InstagramIcon, MailIcon, PinIcon } from "./Icons";

export default function Contact({ c }: { c: Content["contact"] }) {
  const { location } = site;
  return (
    <Section id="kontakt" eyebrow={c.eyebrow} title={c.title} intro={c.intro}>
      <div className="grid gap-6 md:grid-cols-3">
        <a
          href={`mailto:${site.email}`}
          className="flex items-start gap-4 rounded-2xl border border-line bg-paper p-6 shadow-sm transition-colors hover:border-gold/40"
        >
          <MailIcon className="h-6 w-6 shrink-0 text-coal" />
          <span>
            <span className="block font-display font-semibold text-coal">
              {c.emailLabel}
            </span>
            <span className="mt-0.5 block break-all text-sm text-ink/75">
              {site.email}
            </span>
          </span>
        </a>

        <div className="flex items-start gap-4 rounded-2xl border border-line bg-paper p-6 shadow-sm">
          <PinIcon className="h-6 w-6 shrink-0 text-coal" />
          <span>
            <span className="block font-display font-semibold text-coal">
              {c.trainingLabel}
            </span>
            <span className="mt-0.5 block text-sm text-ink/75">
              {location.street}
              <br />
              {location.zip} München
            </span>
          </span>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border border-line bg-paper p-6 shadow-sm">
          <span className="flex gap-2">
            <InstagramIcon className="h-6 w-6 shrink-0 text-coal" />
          </span>
          <span>
            <span className="block font-display font-semibold text-coal">
              {c.socialLabel}
            </span>
            <span className="mt-1 flex flex-col gap-1.5 text-sm">
              <a
                href={site.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink/75 hover:text-coal"
              >
                <InstagramIcon className="h-4 w-4" /> {site.social.instagram.handle}
              </a>
              <a
                href={site.social.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink/75 hover:text-coal"
              >
                <FacebookIcon className="h-4 w-4" /> {site.social.facebook.handle}
              </a>
            </span>
          </span>
        </div>
      </div>
    </Section>
  );
}
