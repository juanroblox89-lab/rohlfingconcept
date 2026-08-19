"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/paquetes-publicitarios", label: "Paquetes Publicitarios" },
  { href: "/registro-de-marca", label: "Registro de Marca" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-xl transition-colors">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand Logo with High-Contrast RC Camera Isotype */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-surface border border-accent/30 p-1.5 shadow-[0_0_15px_rgba(30,107,255,0.25)] transition-all duration-300 group-hover:border-accent group-hover:shadow-[0_0_25px_rgba(30,107,255,0.5)]">
            <Image
              src="/img/logo-rc.jpeg"
              alt="Rohlfing Concept Logo"
              width={36}
              height={36}
              className="h-full w-full object-contain filter brightness-125"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-wider text-white">
              ROHLFING <span className="text-accent font-normal">CONCEPT</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
              Agencia Creativa
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-white hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="https://wa.me/573242123300?text=Hola%20Rohlfing%20Concept,%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-glass rounded-full px-5 py-2 text-sm font-medium text-foreground hover:text-white"
          >
            Agendar llamada ↗
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          aria-label="Abrir menú"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-surface/60 p-2 text-white lg:hidden focus:outline-none"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-white transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-accent transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-white transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-border/80 bg-background/95 backdrop-blur-2xl lg:hidden">
          <div className="flex flex-col gap-2 px-6 py-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-muted transition-colors hover:bg-surface hover:text-white"
              >
                {l.label}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-border/60">
              <a
                href="https://wa.me/573242123300?text=Hola%20Rohlfing%20Concept,%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary-glow flex w-full items-center justify-center rounded-full py-3 text-center text-sm font-semibold text-white"
              >
                Agendar llamada por WhatsApp ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
