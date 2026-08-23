"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, WhatsappLogo, Package } from "@phosphor-icons/react";
import { servicios, gruposOrden, waLink, type GrupoServicio } from "@/data/services";

// Tupla tipada requerida por motion (evita error TS2322 en build de producción)
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.6, delay, ease: EASE_OUT_EXPO },
});

export default function ServiciosClient() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border/40 py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute left-1/2 top-0 h-[380px] w-[640px] -translate-x-1/2 rounded-full opacity-[0.09]"
            style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 70%)", filter: "blur(90px)" }}
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.h1 {...fadeUp()} className="text-4xl font-bold tracking-tight sm:text-5xl">
            Servicios y <span className="text-gradient-accent">precios</span>
          </motion.h1>
          <motion.p {...fadeUp(0.08)} className="mx-auto mt-6 max-w-[56ch] text-base leading-relaxed text-muted">
            Soluciones creativas y digitales para potenciar tu marca. Precios claros y
            estructurados en planes — elige lo que tu marca necesita y escríbenos para empezar.
          </motion.p>
          <motion.div {...fadeUp(0.14)} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={waLink("Hola Rohlfing Concept, quiero cotizar un servicio. ¿Me pueden asesorar?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_28px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
            >
              <WhatsappLogo size={16} weight="fill" />
              Cotizar por WhatsApp
            </a>
            <Link
              href="/paquetes-publicitarios"
              className="inline-flex items-center gap-2 rounded-full border border-border-2 px-7 py-3.5 text-sm font-medium text-muted transition-all hover:border-accent/40 hover:text-foreground hover:-translate-y-0.5"
            >
              <Package size={16} />
              Ver paquetes mensuales
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Grupos de servicios */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        {gruposOrden.map((grupo, gi) => (
          <div key={grupo} className={gi > 0 ? "mt-16" : ""}>
            <motion.h2 {...fadeUp()} className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-2">
              {grupo}
            </motion.h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {servicios
                .filter((s) => s.grupo === (grupo as GrupoServicio))
                .map((s, i) => (
                  <motion.div key={s.slug} {...fadeUp(i * 0.06)}>
                    <Link
                      href={`/servicios/${s.slug}`}
                      className="group flex h-full flex-col rounded-2xl border border-border-2 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_36px_rgba(37,99,235,0.15)]"
                    >
                      <h3 className="text-lg font-bold tracking-tight">{s.nombre}</h3>
                      <p className="mt-1.5 text-xs font-medium uppercase tracking-wide text-accent-hi">{s.kicker}</p>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{s.resumen}</p>
                      <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-4">
                        <span className="text-sm text-muted-2">
                          desde <strong className="text-foreground">{s.desde}</strong>
                        </span>
                        <span className="flex items-center gap-1.5 text-sm font-medium text-accent-hi">
                          Ver planes
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        ))}

        {/* CTA final */}
        <motion.div {...fadeUp(0.1)} className="mt-20 rounded-2xl border border-border-2 bg-surface p-10 text-center">
          <h3 className="text-xl font-bold">¿Listo para dar el siguiente paso?</h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            Elige el servicio que necesita tu marca y comencemos a construir algo que realmente la represente.
          </p>
          <a
            href={waLink("Hola Rohlfing Concept, estoy listo para iniciar un proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_28px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
          >
            <WhatsappLogo size={16} weight="fill" />
            Empieza ahora
          </a>
        </motion.div>
      </section>
    </main>
  );
}
