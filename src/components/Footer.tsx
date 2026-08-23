import Link from "next/link";
import Image from "next/image";
import {
  WhatsappLogo,
  InstagramLogo,
  EnvelopeSimple,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";

const navLinks = [
  { label: "Servicios",              href: "/#servicios" },
  { label: "Equipo",                 href: "/equipo" },
  { label: "Proyectos",              href: "/proyectos" },
  { label: "Nosotros",               href: "/#nosotros" },
  { label: "Registro de marca",      href: "/registro-de-marca" },
  { label: "Paquetes publicitarios", href: "/paquetes-publicitarios" },
];

const socials = [
  { label: "WhatsApp",  href: "https://wa.me/573242123300?text=Hola%2C%20escribo%20desde%20rohlfingconcept.com.",             Icon: WhatsappLogo },
  { label: "Instagram", href: "https://instagram.com/rohlfingconcept",  Icon: InstagramLogo },
  { label: "Email",     href: "mailto:rohlfingconcept@gmail.com",       Icon: EnvelopeSimple },
];

export default function Footer() {
  return (
    <footer id="contacto" className="relative border-t border-border/40 bg-background">
      <div className="line-fade" />

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1.2fr]">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] p-1 shadow-[0_0_16px_rgba(37,99,235,0.15)]">
                <Image
                  src="/img/logo.png"
                  alt="Rohlfing Concept"
                  width={36}
                  height={36}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="leading-none">
                <span className="block text-sm font-bold tracking-wider text-foreground">
                  ROHLFING
                </span>
                <span className="block text-[9px] font-medium tracking-[0.25em] text-muted-2 uppercase mt-0.5">
                  CONCEPT
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-muted">
              Diseño gráfico, audiovisual, branding y desarrollo web para empresas que
              quieren verse tan profesionales como son.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border-2 bg-surface text-muted transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-accent-hi">
                  <Icon size={17} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground mb-5">Navegación</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted transition-colors hover:text-accent-hi">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto + Ubicación */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground mb-5">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <p className="text-[10px] uppercase tracking-wider text-muted-2 mb-1">WhatsApp</p>
                <a href="https://wa.me/573242123300?text=Hola%2C%20escribo%20desde%20rohlfingconcept.com." className="text-muted transition-colors hover:text-accent-hi">
                  +57 324 212 3300
                </a>
              </li>
              <li>
                <p className="text-[10px] uppercase tracking-wider text-muted-2 mb-1">Email</p>
                <a href="mailto:rohlfingconcept@gmail.com" className="text-muted transition-colors hover:text-accent-hi">
                  rohlfingconcept@gmail.com
                </a>
              </li>
              <li>
                <p className="text-[10px] uppercase tracking-wider text-muted-2 mb-1">Oficina</p>
                <a
                  href="https://www.google.com/maps/place/Cra.+49+A+%2348-23,+San+Pedro,+San+Pedro+de+los+Milagros,+Antioquia,+Colombia/@6.4612415,-75.5586706,17z/data=!3m1!4b1!4m6!3m5!1s0x8e443736b9e2dd3d:0x331d21d2cdf63ef8!8m2!3d6.4612362!4d-75.5560957!16s%2Fg%2F11shx5476z?hl=es-419&entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2 text-muted transition-colors hover:text-accent-hi"
                >
                  <MapPin size={15} weight="fill" className="mt-0.5 flex-shrink-0 text-accent-hi" />
                  <span>Cra. 49 A #48-23<br />San Pedro de los Milagros, Antioquia</span>
                </a>
              </li>
            </ul>

            {/* Mini mapa interactivo */}
            <a
              href="https://www.google.com/maps/place/Cra.+49+A+%2348-23,+San+Pedro,+San+Pedro+de+los+Milagros,+Antioquia,+Colombia/@6.4612415,-75.5586706,17z/data=!3m1!4b1!4m6!3m5!1s0x8e443736b9e2dd3d:0x331d21d2cdf63ef8!8m2!3d6.4612362!4d-75.5560957!16s%2Fg%2F11shx5476z?hl=es-419&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block overflow-hidden rounded-xl border border-border-2 transition-all hover:border-accent/40 shadow-md"
            >
              <iframe
                title="Rohlfing Concept — Ubicación San Pedro de los Milagros"
                src="https://maps.google.com/maps?q=6.4612362,-75.5560957&output=embed&z=17"
                width="100%"
                height="130"
                style={{ border: 0, display: "block", filter: "invert(0.9) hue-rotate(180deg) brightness(0.75) contrast(1.1)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border/40 pt-6">
          <p className="text-xs text-muted-2">
            © {new Date().getFullYear()} Rohlfing Concept. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-2">San Pedro de los Milagros, Antioquia</p>
        </div>
      </div>
    </footer>
  );
}
