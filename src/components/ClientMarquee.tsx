"use client";

import Image from "next/image";

interface Client {
  name: string;
  category?: string;
  logo?: string;
  badgeText?: string;
}

const clients: Client[] = [
  {
    name: "Villa Grande",
    category: "Hotel Campestre & Eventos",
    logo: "/img/client-villa-grande.png",
  },
  {
    name: "El Tizón Dorado",
    category: "Asados & Parrilla",
    logo: "/img/272900_935a85172ba043d29c382bf7aac8e14c_7Emv2.jpg",
  },
  {
    name: "Ricos Pándeyucas",
    category: "Panadería & Alimentos",
    logo: "/img/272900_387dedc9284749f2b492c5d87141ba8c.png",
  },
  {
    name: "La Antioqueñita",
    category: "Café & Restaurante",
    logo: "/img/272900_962fce19ed2c471bb31d708604b7e354.png",
  },
  {
    name: "Celebraciones del Norte",
    category: "Eventos & Banquetes",
    logo: "/img/272900_ca856d4f67cc40d0aa72937491f25dcd.png",
  },
  {
    name: "Doña Rosa",
    category: "Restaurante Típico",
    logo: "/img/272900_ca856d4f67cc40d0aa72937491f25dcd.png",
  },
  {
    name: "Plomería Norte",
    category: "Servicios Especializados",
    logo: "/img/client-plomeria-norte.png",
  },
  {
    name: "Luz del Campo",
    category: "Proyecto Inmobiliario",
    logo: "/img/272900_a4436c7b58934c08acf7ee06f0dcf3c9.jpg",
  },
  {
    name: "El Jerez del Caballero",
    category: "Experiencia Ecuestre",
    logo: "/img/272900_9c7b3e5c4df24a94a9d426bf0074c67c.jpg",
  },
];

export default function ClientMarquee() {
  // Duplicate for infinite seamless scroll
  const marqueeItems = [...clients, ...clients];

  return (
    <section className="relative w-full border-y border-border/80 bg-background-alt/90 py-10 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 blue-glow-bg opacity-40 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 mb-6">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-muted">
            Han confiado en nosotros
          </p>
        </div>
      </div>

      {/* Marquee Ticker Track */}
      <div className="marquee-mask relative w-full overflow-hidden">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 py-2">
          {marqueeItems.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="group flex items-center gap-4 rounded-xl border border-white/5 bg-surface/50 px-5 py-3.5 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 hover:bg-surface hover:shadow-[0_0_20px_rgba(30,107,255,0.2)]"
            >
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-black/40 border border-white/10 p-1 transition-transform group-hover:scale-110">
                {client.logo ? (
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={40}
                    height={40}
                    className="h-full w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <span className="font-mono text-sm font-bold text-accent">
                    {client.name.charAt(0)}
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-wide text-foreground group-hover:text-white transition-colors">
                  {client.name}
                </span>
                {client.category && (
                  <span className="text-[11px] text-muted group-hover:text-accent-light transition-colors">
                    {client.category}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
