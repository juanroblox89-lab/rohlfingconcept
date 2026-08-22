"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { WhatsappLogo, ArrowRight } from "@phosphor-icons/react";

const clients = [
  { name: "Villa Grande",           logo: "/img/client-villa-grande.png", tag: "Branding · Web",       desc: "Identidad visual y presencia digital para un proyecto inmobiliario de alta gama." },
  { name: "Plomería Norte",         logo: "/img/client-plomeria-norte.png", tag: "Diseño · Redes",     desc: "Diseño de marca y gestión de redes sociales para empresa de plomería local." },
  { name: "El Tizón Dorado",        logo: null, tag: "Branding · Contenido",                           desc: "Identidad visual y producción de contenido para restaurante parrilla." },
  { name: "Ricos Pandeyucas",       logo: null, tag: "Diseño · Redes",                                 desc: "Branding y estrategia digital para marca de productos artesanales." },
  { name: "Asanarte Droguería",     logo: null, tag: "Identidad Visual",                               desc: "Manual de marca y piezas gráficas para droguería y punto de salud." },
  { name: "El Jerez del Caballero", logo: null, tag: "Audiovisual · Redes",                            desc: "Producción audiovisual y gestión de redes para marca de licores." },
];

// Tupla tipada requerida por motion (evita error TS2322 en build de producción)
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.6, delay, ease: EASE_OUT_EXPO },
});

export default function ProyectosClient() {
  return (
    <main className="min-h-screen">
      {/* ── Header ── */}
      <section className="relative overflow-hidden border-b border-border/40 py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[360px] w-[600px] -translate-x-1/2 opacity-[0.08] rounded-full"
            style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 70%)", filter: "blur(90px)" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.h1 {...fadeUp()} className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Diseño visual con presencia.
            <br />
            <span className="text-gradient-accent">Sin plantillas. Sin atajos.</span>
          </motion.h1>
          <motion.p {...fadeUp(0.08)} className="mt-6 max-w-[50ch] text-base leading-relaxed text-muted">
            Construimos marcas, desarrollamos experiencias y transformamos ideas en resultados que duran.
          </motion.p>
          <motion.div {...fadeUp(0.14)} className="mt-10 flex flex-wrap gap-8">
            {[
              { v: "6+", l: "Marcas trabajadas" },
              { v: "100%", l: "Proyectos entregados" },
              { v: "3", l: "Disciplinas integradas" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-accent/30 pl-5">
                <p className="text-2xl font-bold text-gradient-accent">{s.v}</p>
                <p className="text-xs text-muted mt-1">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c, i) => (
            <motion.div key={c.name} {...fadeUp(i * 0.06)}
              className="card group relative overflow-hidden p-8">
              <span className="pointer-events-none absolute right-5 top-3 text-[72px] font-black leading-none select-none"
                style={{ color: "transparent", WebkitTextStroke: "1px rgba(79,141,255,0.06)" }}>
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Tag — pequeño, discreto, sin pill */}
              <p className="mb-5 text-[11px] font-medium uppercase tracking-widest text-muted-2">{c.tag}</p>

              <div className="mb-4 flex items-center gap-4">
                {c.logo ? (
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-2 bg-surface-2 overflow-hidden">
                    <Image src={c.logo} alt={c.name} width={44} height={44}
                      className="h-10 w-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-2 bg-surface-2 text-lg font-bold text-muted group-hover:border-accent/30 group-hover:text-accent-hi transition-all">
                    {c.name.charAt(0)}
                  </div>
                )}
                <div>
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-xs text-muted-2 mt-0.5">Cliente activo</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted">{c.desc}</p>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-accent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.1)}
          className="mt-16 rounded-2xl border border-border-2 bg-surface p-10 text-center">
          <h3 className="text-xl font-bold">¿Quieres que trabajemos juntos?</h3>
          <p className="mt-3 text-sm text-muted max-w-md mx-auto">
            Cuéntanos sobre tu marca y te damos una propuesta personalizada sin costo.
          </p>
          <a href="https://wa.me/573242123300"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_28px_rgba(37,99,235,0.4)] hover:-translate-y-0.5">
            <WhatsappLogo size={16} weight="fill" />
            Empezar proyecto
          </a>
        </motion.div>
      </section>
    </main>
  );
}
