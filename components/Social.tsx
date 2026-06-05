import { site } from "@/lib/site";
import Section from "./Section";
import { ArrowRightIcon, FacebookIcon, InstagramIcon } from "./Icons";

export default function Social() {
  const { instagram, facebook } = site.social;

  // The Facebook Page Plugin renders a live timeline without any access token.
  const fbPluginSrc =
    "https://www.facebook.com/plugins/page.php?" +
    new URLSearchParams({
      href: facebook.url,
      tabs: "timeline",
      width: "500",
      height: "560",
      smallheader: "false",
      adaptcontainerwidth: "true",
      hidecover: "false",
      showfacepile: "true",
    }).toString();

  return (
    <Section
      id="social"
      eyebrow="Social Media"
      title="Folge uns"
      intro="Aktuelle Eindrücke aus dem Training, Wettkämpfen und Lehrgängen – auf Instagram und Facebook."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Instagram */}
        <a
          href={instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col justify-between overflow-hidden rounded-2xl p-7 text-white shadow-sm"
          style={{
            background:
              "linear-gradient(135deg,#515bd4 0%,#8134af 30%,#dd2a7b 65%,#f58529 100%)",
          }}
        >
          <div className="flex items-center justify-between">
            <InstagramIcon className="h-9 w-9" />
            <ArrowRightIcon className="h-6 w-6 transition-transform group-hover:translate-x-1" />
          </div>
          <div className="mt-16">
            <p className="text-sm/relaxed text-white/85">Instagram</p>
            <p className="font-display text-2xl font-bold">
              {instagram.handle}
            </p>
            <p className="mt-1 text-white/85">
              Auf Instagram folgen für tägliche Einblicke
            </p>
          </div>
        </a>

        {/* Facebook live timeline */}
        <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <span className="flex items-center gap-2 font-display text-lg font-semibold text-coal">
              <FacebookIcon className="h-6 w-6 text-[#1877f2]" /> Facebook
            </span>
            <a
              href={facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-coal underline decoration-2 decoration-gold underline-offset-4 hover:decoration-gold-600"
            >
              Seite öffnen <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>
          <iframe
            title="Facebook-Seite von Kendo München"
            src={fbPluginSrc}
            className="h-[560px] w-full"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder={0}
            allow="encrypted-media"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  );
}
