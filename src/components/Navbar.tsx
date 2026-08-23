"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { List, X, WhatsappLogo } from "@phosphor-icons/react";

const links = [
  { href: "/#servicios",             label: "Servicios" },
  { href: "/proyectos",              label: "Proyectos" },
  { href: "/equipo",                 label: "Equipo" },
  { href: "/paquetes-publicitarios", label: "Paquetes" },
  { href: "/registro-de-marca",      label: "Registro" },
  { href: "/#contacto",              label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

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
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] p-1 shadow-[0_0_16px_rgba(37,99,235,0.15)] transition-all group-hover:border-accent/50 group-hover:bg-white/[0.1] group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]">
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

        {/* Desktop links */}
        <div className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-accent-hi"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Tablet links (solo 4 principales) */}
        <div className="hidden items-center gap-0.5 md:flex lg:hidden">
          {links.slice(0, 4).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-accent-hi"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/573242123300?text=Hola%20Rohlfing%20Concept%2C%20quiero%20cotizar%20un%20proyecto%20para%20mi%20marca."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_24px_rgba(37,99,235,0.35)] md:flex"
        >
          <WhatsappLogo size={15} weight="fill" />
          Agendar llamada
        </a>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border-2 bg-surface text-muted transition-colors hover:text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <List size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="border-t border-border/60 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://wa.me/573242123300?text=Hola%20Rohlfing%20Concept%2C%20quiero%20cotizar%20un%20proyecto%20para%20mi%20marca."
                className="mt-3 flex items-center justify-center gap-2 rounded-full bg-accent py-3 text-sm font-medium text-white"
              >
                <WhatsappLogo size={16} weight="fill" />
                Agendar llamada
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
