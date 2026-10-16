"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { CaretDown, List, X, WhatsappLogo } from "@phosphor-icons/react";
import { servicios, gruposOrden } from "@/data/services";

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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const servRef = useRef<HTMLDivElement>(null);

  // Activo en rutas reales; /servicios cubre también /servicios/[slug]
  const isActive = (href: string) =>
    href === "/servicios" ? pathname.startsWith("/servicios") : pathname === href;
  const linkCls = (href: string) =>
    `min-h-[40px] inline-flex items-center rounded-lg px-3 py-2 text-sm transition-colors ${
      isActive(href)
        ? "bg-surface font-medium text-accent-hi"
        : "text-muted hover:bg-surface hover:text-accent-hi"
    }`;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Cerrar al hacer clic afuera (para tablet táctil en 1024px)
  useEffect(() => {
    if (!servOpen) return;
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (servRef.current && !servRef.current.contains(e.target as Node)) {
        setServOpen(false);
      }
    };
    document.addEventListener("pointerdown", handleClickOutside);
    return () => document.removeEventListener("pointerdown", handleClickOutside);
  }, [servOpen]);

  // Cerrar menús al cambiar de ruta
  useEffect(() => {
    setOpen(false);
    setServOpen(false);
  }, [pathname]);

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      setServOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      setServOpen(false);
    }
  };

  const servActive = pathname.startsWith("/servicios");

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-border-2 bg-surface p-1 shadow-[0_2px_12px_rgba(37,99,235,0.14)] transition-all group-hover:border-accent/50 group-hover:bg-accent/[0.06] group-hover:shadow-[0_4px_18px_rgba(37,99,235,0.25)]">
            <Image
              src="/img/logo.png"
              alt="Rohlfing Concept"
              width={36}
              height={36}
              priority
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

        {/* Desktop links — Servicios con submenú + resto */}
        <div className="hidden items-center gap-0.5 lg:flex">
          <div
            ref={servRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={() => setServOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "Escape") setServOpen(false);
            }}
          >
            <button
              type="button"
              onClick={() => setServOpen((v) => !v)}
              aria-expanded={servOpen}
              aria-haspopup="true"
              aria-controls="servicios-panel"
              className={`min-h-[40px] flex items-center gap-1 rounded-lg px-3 py-2 text-sm transition-colors ${
                servActive
                  ? "bg-surface font-medium text-accent-hi"
                  : "text-muted hover:bg-surface hover:text-accent-hi"
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
                  id="servicios-panel"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[720px] max-w-[calc(100vw-2rem)] -translate-x-1/2 rounded-2xl border border-border-2 bg-surface p-5 shadow-[0_12px_48px_rgba(37,99,235,0.12)]"
                >
                  <div className="grid grid-cols-4 gap-5">
                    {gruposOrden.map((grupo) => (
                      <div key={grupo}>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
                          {grupo}
                        </p>
                        <ul className="mt-3 space-y-2">
                          {servicios
                            .filter((s) => s.grupo === grupo)
                            .map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={`/servicios/${s.slug}`}
                                  onClick={() => setServOpen(false)}
                                  className="block text-sm text-muted transition-colors hover:text-accent-hi"
                                >
                                  {s.nombre}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 border-t border-border pt-3">
                    <Link
                      href="/servicios"
                      onClick={() => setServOpen(false)}
                      className="text-sm font-medium text-accent-hi transition-colors hover:text-foreground"
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

        {/* CTA + Mobile/Tablet Toggle */}
        <div className="flex items-center gap-2.5">
          <a
            href={WA_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-[40px] items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_24px_rgba(37,99,235,0.35)] sm:flex"
          >
            <WhatsappLogo size={15} weight="fill" />
            Cotiza tu proyecto
          </a>

          {/* Toggle móvil/tablet (< 1024px) */}
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="menu-movil"
            className="flex h-10 w-10 min-h-[40px] min-w-[40px] items-center justify-center rounded-xl border border-border-2 bg-surface text-muted transition-colors hover:text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile/Tablet menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            id="menu-movil"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto px-4 py-4">
              <details className="rounded-xl">
                <summary
                  className={`flex min-h-[44px] cursor-pointer list-none items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors ${
                    servActive ? "bg-surface font-medium text-accent-hi" : "text-muted"
                  } [&::-webkit-details-marker]:hidden`}
                >
                  Servicios
                  <CaretDown size={14} weight="bold" />
                </summary>
                <div className="space-y-4 px-4 py-3">
                  {gruposOrden.map((grupo) => (
                    <div key={grupo}>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
                        {grupo}
                      </p>
                      <ul className="mt-2 space-y-1">
                        {servicios
                          .filter((s) => s.grupo === grupo)
                          .map((s) => (
                            <li key={s.slug}>
                              <Link
                                href={`/servicios/${s.slug}`}
                                onClick={() => setOpen(false)}
                                className="flex min-h-[40px] items-center text-sm text-muted hover:text-accent-hi"
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
                    className="flex min-h-[40px] items-center text-sm font-medium text-accent-hi"
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
                  className={`flex min-h-[44px] items-center rounded-xl px-4 py-3 text-sm transition-colors ${
                    isActive(l.href)
                      ? "bg-surface font-medium text-accent-hi"
                      : "text-muted hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={WA_CTA}
                className="mt-3 flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-accent py-3 text-sm font-medium text-white"
              >
                <WhatsappLogo size={16} weight="fill" />
                Cotiza tu proyecto
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
