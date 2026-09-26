import Link from "next/link";
import Image from "next/image";
import {
  WhatsappLogo,
  InstagramLogo,
  EnvelopeSimple,
  MapPin,
} from "@phosphor-icons/react/dist/ssr";
import { servicios } from "@/data/services";

const navLinks = [
  { label: "Servicios y precios", href: "/servicios" },
  { label: "Paquetes publicitarios", href: "/paquetes-publicitarios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Equipo", href: "/equipo" },
  { label: "Ediciones en video", href: "/videos" },
  { label: "Contacto", href: "/contacto" },
];

// Lista dinámica desde @/data/services (servicios retirados ya no existen en datos).
const servicioLinks = servicios.map((s) => ({ label: s.nombre, href: `/servicios/${s.slug}` }));

const socials = [
  { label: "WhatsApp", href: "https://wa.me/573242123300?text=Hola%2C%20escribo%20desde%20rohlfingconcept.com.", Icon: WhatsappLogo },
  { label: "Instagram", href: "https://instagram.com/rohlfingconcept", Icon: InstagramLogo },
  { label: "Email", href: "mailto:rohlfingconcept@gmail.com", Icon: EnvelopeSimple },
];

export default function Footer() {
  return (
    <footer id="contacto" className="border-t-2 border-[#0A0A0A] bg-white">
      <div className="section-compact mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
        <div className="grid gap-4 md:grid-cols-[2fr_1fr_1.2fr] md:gap-6 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/img/logo.png"
                alt="Rohlfing Concept"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="mt-2 max-w-[36ch] text-[13px] leading-[1.5] text-muted">
              Branding y contenido audiovisual para empresas que
              quieren verse tan profesionales como son.
            </p>
            <div className="mt-2.5 flex gap-1.5">
              {socials.map(({ label, href, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0A0A0A] bg-white text-muted shadow-[0_3px_0_#0A0A0A] transition-transform duration-150 hover:text-foreground active:translate-y-[2px] active:shadow-none md:h-9 md:w-9">
                  <Icon size={17} weight="fill" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav + Servicios: 2 columnas en móvil, sueltas en desktop */}
          <div className="grid grid-cols-2 gap-4 md:contents">
          {/* Nav */}
          <div>
            <h4 className="kicker mb-2 md:mb-3">Navegación</h4>
            <ul className="space-y-1 md:space-y-1.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[13px] leading-[1.5] text-muted transition-colors duration-200 hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="kicker mb-2 md:mb-3">Servicios</h4>
            <ul className="space-y-1 md:space-y-1.5">
              {servicioLinks.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="text-[13px] leading-[1.5] text-muted transition-colors duration-200 hover:text-foreground">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/servicios" className="text-[13px] font-semibold text-foreground hover:underline underline-offset-4">
                  Ver todos los precios →
                </Link>
              </li>
            </ul>
          </div>
          </div>

          {/* Contacto + Ubicación */}
          <div>
            <h4 className="kicker mb-2 md:mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm md:space-y-2.5">
              <li>
                <p className="text-[10px] uppercase tracking-wider text-muted-2 mb-1">WhatsApp</p>
                <a href="https://wa.me/573242123300?text=Hola%2C%20escribo%20desde%20rohlfingconcept.com." className="text-[13px] text-muted transition-colors duration-200 hover:text-foreground">
                  +57 324 212 3300
                </a>
              </li>
              <li>
                <p className="text-[10px] uppercase tracking-wider text-muted-2 mb-1">Email</p>
                <a href="mailto:rohlfingconcept@gmail.com" className="text-[13px] text-muted transition-colors duration-200 hover:text-foreground">
                  rohlfingconcept@gmail.com
                </a>
              </li>
              <li>
                <p className="text-[10px] uppercase tracking-wider text-muted-2 mb-1">Oficina</p>
                <a
                  href="https://www.google.com/maps/place/Cra.+49+A+%2348-23,+San+Pedro,+San+Pedro+de+los+Milagros,+Antioquia,+Colombia/@6.4612415,-75.5586706,17z/data=!3m1!4b1!4m6!3m5!1s0x8e443736b9e2dd3d:0x331d21d2cdf63ef8!8m2!3d6.4612362!4d-75.5560957!16s%2Fg%2F11shx5476z?hl=es-419&entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-2 text-[13px] text-muted transition-colors duration-200 hover:text-foreground"
                >
                  <MapPin size={15} weight="fill" className="mt-0.5 flex-shrink-0" />
                  <span>Cra. 49 A #48-23<br />San Pedro de los Milagros, Antioquia</span>
                </a>
              </li>
            </ul>

            {/* Mini mapa interactivo */}
            <a
              href="https://www.google.com/maps/place/Cra.+49+A+%2348-23,+San+Pedro,+San+Pedro+de+los+Milagros,+Antioquia,+Colombia/@6.4612415,-75.5586706,17z/data=!3m1!4b1!4m6!3m5!1s0x8e443736b9e2dd3d:0x331d21d2cdf63ef8!8m2!3d6.4612362!4d-75.5560957!16s%2Fg%2F11shx5476z?hl=es-419&entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block overflow-hidden rounded-[12px] border-2 border-[#0A0A0A] transition-colors duration-200 hover:border-foreground"
            >
              <iframe
                title="Rohlfing Concept — Ubicación San Pedro de los Milagros"
                src="https://maps.google.com/maps?q=6.4612362,-75.5560957&output=embed&z=17"
                width="100%"
                height="110"
                className="block grayscale"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[#D9D9D9] pt-3 md:mt-6 md:pt-4">
          <p className="text-xs text-muted-2">
            © {new Date().getFullYear()} Rohlfing Concept. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-2">San Pedro de los Milagros, Antioquia</p>
        </div>
      </div>
    </footer>
  );
}
