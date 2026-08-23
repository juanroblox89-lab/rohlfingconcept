"use client";

import { WhatsappLogo } from "@phosphor-icons/react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/573242123300?text=Hola%2C%20vengo%20de%20la%20web%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#22c55e] text-white shadow-[0_8px_28px_rgba(34,197,94,0.4)] transition-transform duration-300 hover:scale-110"
    >
      <WhatsappLogo size={24} weight="fill" />
      {/* Punto de actividad */}
      <span className="absolute -right-0.5 -top-0.5 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-60" />
        <span className="relative inline-flex h-3 w-3 rounded-full border border-background bg-[#22c55e]" />
      </span>
      {/* Tooltip */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg border border-border-2 bg-surface px-3 py-1.5 text-xs font-medium text-muted opacity-0 shadow-xl transition-all duration-300 group-hover:opacity-100 md:block">
        ¿Hablamos de tu proyecto?
      </span>
    </a>
  );
}
