"use client";

import { WhatsappLogo } from "@phosphor-icons/react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/573242123300?text=Hola%2C%20vengo%20de%20la%20web%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border-[2.5px] border-[#0A0A0A] bg-[#0A0A0A] text-white shadow-[0_5px_0_#5C5C5C] transition-transform duration-150 active:translate-y-[3px] active:shadow-[0_2px_0_#5C5C5C]"
    >
      <WhatsappLogo size={24} weight="fill" />
      {/* Tooltip */}
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded border border-[#D9D9D9] bg-white px-3 py-1.5 text-xs font-medium text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:block">
        ¿Hablamos de tu proyecto?
      </span>
    </a>
  );
}
