"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { CaretDown, List, X, WhatsappLogo } from "@phosphor-icons/react";
import { servicios, gruposOrden } from "@/data/services";
import { EASE } from "@/lib/anim";

const WA_CTA =
  "https://wa.me/573242123300?text=Hola%20Rohlfing%20Concept%2C%20quiero%20cotizar%20un%20proyecto%20para%20mi%20marca.";

const topLinks = [
  { href: "/proyectos", label: "Proyectos" },
  { href: "/equipo", label: "Equipo" },
  { href: "/paquetes-publicitarios", label: "Paquetes" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/servicios" ? pathname.startsWith("/servicios") : pathname === href;

  const linkCls = (href: string) =>
    `px-3 py-2 text-[13px] transition-colors duration-200 ${
      isActive(href)
        ? "font-semibold text-foreground underline underline-offset-8 decoration-2"
        : "text-muted hover:text-foreground"
    }`;

  return (
    <>
      {/* Barra fina de anuncio — ejes oficiales del portafolio 2026 */}
      <div className="flex h-8 items-center justify-center bg-[#0A0A0A] px-4">
        <p className="truncate text-[11px] tracking-wide text-white md:text-xs">
          Televisión · Redes sociales · Marketing · Estrategia
        </p>
      </div>

      <header className="sticky top-0 z-50 border-b border-[#D9D9D9] bg-white">
        <nav className="mx-auto flex h-[52px] max-w-[1440px] items-center justify-between px-4 md:h-12 md:px-6 xl:px-8">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center" aria-label="Rohlfing Concept — inicio">
            <Image
              src="/img/logo.png"
              alt="Rohlfing Concept"
              width={120}
              height={32}
              priority
              className="h-8 w-auto object-contain"
            />
          </Link>

          {/* Links desktop centrados */}
          <div className="hidden flex-1 items-center justify-center lg:flex">
            {/* Servicios con submenú dinámico */}
            <div
              className="relative"
              onMouseEnter={() => setServOpen(true)}
              onMouseLeave={() => setServOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServOpen((v) => !v)}
                aria-expanded={servOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 px-3 py-2 text-[13px] transition-colors duration-200 ${
                  isActive("/servicios")
                    ? "font-semibold text-foreground underline underline-offset-8 decoration-2"
                    : "text-muted hover:text-foreground"
                }`}
              >
                Servicios
                <CaretDown
                  size={12}
                  weight="bold"
                  className={`transition-transform duration-200 ${servOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {servOpen && (
                  <motion.div
                    key="serv-panel"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: EASE }}
                    className="absolute left-1/2 top-full w-[760px] max-w-[calc(100vw-2rem)] -translate-x-1/2 border border-[#D9D9D9] bg-white p-6"
                  >
                    <div className="grid grid-cols-4 gap-6">
                      {gruposOrden.map((grupo) => (
                        <div key={grupo}>
                          <p className="kicker">{grupo}</p>
                          <ul className="mt-3 space-y-1">
                            {servicios
                              .filter((s) => s.grupo === grupo)
                              .map((s) => (
                                <li key={s.slug}>
                                  <Link
                                    href={`/servicios/${s.slug}`}
                                    onClick={() => setServOpen(false)}
                                    className="block py-1 text-[13px] text-muted transition-colors duration-200 hover:text-foreground"
                                  >
                                    {s.nombre}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 border-t border-[#D9D9D9] pt-4">
                      <Link
                        href="/servicios"
                        onClick={() => setServOpen(false)}
                        className="text-[13px] font-semibold text-foreground hover:underline underline-offset-4"
                      >
                        Ver todos los servicios →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {topLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={linkCls(l.href)}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <a
            href={WA_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-10 items-center gap-2 rounded-full bg-[#0A0A0A] px-5 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#5C5C5C] md:flex md:h-9"
          >
            <WhatsappLogo size={15} weight="fill" />
            Cotiza tu proyecto
          </a>

          {/* Toggle móvil */}
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded border border-[#D9D9D9] bg-white text-foreground md:h-9 md:w-9 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <List size={18} />}
          </button>
        </nav>

        {/* Menú móvil */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="border-t border-[#D9D9D9] bg-white lg:hidden"
            >
              <div className="flex flex-col px-4 py-4 md:px-6">
                {/* Servicios — acordeón dinámico */}
                <details className="border-b border-[#D9D9D9]">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-3 text-sm font-medium text-foreground [&::-webkit-details-marker]:hidden">
                    Servicios
                    <CaretDown size={14} weight="bold" />
                  </summary>
                  <div className="space-y-4 pb-4">
                    {gruposOrden.map((grupo) => (
                      <div key={grupo}>
                        <p className="kicker">{grupo}</p>
                        <ul className="mt-2 space-y-1">
                          {servicios
                            .filter((s) => s.grupo === grupo)
                            .map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={`/servicios/${s.slug}`}
                                  onClick={() => setOpen(false)}
                                  className="block py-1.5 text-sm text-muted"
                                >
                                  {s.nombre}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                    <Link
                      href="/servicios"
                      onClick={() => setOpen(false)}
                      className="block pt-1 text-sm font-semibold text-foreground"
                    >
                      Ver todos los servicios →
                    </Link>
                  </div>
                </details>
                {topLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={`border-b border-[#D9D9D9] py-3 text-sm ${
                      isActive(l.href) ? "font-semibold text-foreground" : "text-muted"
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
                <a
                  href={WA_CTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex h-10 items-center justify-center gap-2 rounded-full bg-[#0A0A0A] text-sm font-semibold text-white"
                >
                  <WhatsappLogo size={16} weight="fill" />
                  Cotiza tu proyecto
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
