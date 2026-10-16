import Link from "next/link";
import Image from "next/image";
import {
  WhatsappLogo,
  InstagramLogo,
  EnvelopeSimple,
} from "@phosphor-icons/react/dist/ssr";
import { servicios } from "@/data/services";

const navLinks = [
  { label: "Servicios y precios",    href: "/servicios" },
  { label: "Paquetes publicitarios", href: "/paquetes-publicitarios" },
  { label: "Proyectos",              href: "/proyectos" },
  { label: "Equipo",                 href: "/equipo" },
  { label: "Ediciones en video",     href: "/videos" },
  { label: "Contacto",               href: "/contacto" },
];

// Lista dinámica desde @/data/services (sin sitios web ni registro de marca).
const servicioLinks = servicios.map((s) => ({ label: s.nombre, href: `/servicios/${s.slug}` }));

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
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1.2fr] lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-2 bg-surface p-1 shadow-[0_2px_12px_rgba(37,99,235,0.14)]">
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
              Branding y contenido audiovisual para empresas que
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

          {/* Servicios */}
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground mb-5">Servicios</h4>
            <ul className="space-y-3">
              {servicioLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-muted transition-colors hover:text-accent-hi">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/servicios" className="text-sm font-medium text-accent-hi transition-colors hover:text-foreground">
                  Ver todos los precios →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
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
                <p className="text-[10px] uppercase tracking-wider text-muted-2 mb-1">Instagram</p>
                <a href="https://instagram.com/rohlfingconcept" target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-accent-hi">
                  @rohlfingconcept
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-border/40 pt-6">
          <p className="text-xs text-muted-2">
            © {new Date().getFullYear()} Rohlfing Concept. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
