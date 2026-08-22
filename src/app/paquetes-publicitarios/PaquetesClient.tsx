"use client";

import { motion } from "motion/react";
import { Check, X, WhatsappLogo, Question } from "@phosphor-icons/react";

const planes = [
  {
    nombre: "Plan Inicial",
    precio: "$290.000",
    tagline: "Ideal para empezar la presencia digital de forma organizada",
    destacado: false,
    items: [
      { label: "4 videos cortos",               ok: true },
      { label: "Grabación de los videos",       ok: true },
      { label: "2 piezas gráficas",             ok: true },
      { label: "Administración de 1 red social",ok: true },
      { label: "2 videos largos",               ok: false },
      { label: "Red adicional +$30.000",        ok: true, note: true },
    ],
  },
  {
    nombre: "Plan Crecimiento",
    precio: "$390.000",
    tagline: "Ideal para marcas que buscan mayor movimiento y contenido",
    destacado: true,
    badge: "Más popular",
    items: [
      { label: "4 videos cortos",               ok: true },
      { label: "2 videos largos",               ok: true },
      { label: "Grabación de los videos",       ok: true },
      { label: "2 piezas gráficas",             ok: true },
      { label: "Administración de 1 red social",ok: true },
      { label: "Red adicional +$30.000",        ok: true, note: true },
    ],
  },
  {
    nombre: "Plan Expansión",
    precio: "$520.000",
    tagline: "Para marcas que quieren escalar su presencia digital",
    destacado: false,
    items: [
      { label: "6 videos cortos",               ok: true },
      { label: "3 videos largos",               ok: true },
      { label: "Grabación de los videos",       ok: true },
      { label: "2 piezas gráficas",             ok: true },
      { label: "Administración de 1 red social",ok: true },
      { label: "Red adicional +$30.000",        ok: true, note: true },
    ],
  },
];

const faqs = [
  { q: "¿Los planes incluyen grabación?",    a: "Sí, todos los planes incluyen la grabación en el lugar acordado contigo." },
  { q: "¿Puedo cambiar de plan?",            a: "Puedes escalar o ajustar tu plan al inicio de cada mes sin problema." },
  { q: "¿Qué redes sociales manejan?",      a: "Instagram, TikTok, Facebook y YouTube. La red adicional tiene un costo de +$30.000/mes." },
  { q: "¿Cómo es el pago?",                 a: "Mensual anticipado, por transferencia bancaria o efectivo." },
];

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function PaquetesClient() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border/40 py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[360px] w-[600px] -translate-x-1/2 opacity-[0.08] rounded-full"
            style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 70%)", filter: "blur(90px)" }} />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.h1 {...fadeUp()} className="text-4xl font-bold tracking-tight sm:text-5xl">
            Planes para hacer crecer
            <br />
            <span className="text-gradient-accent">tu marca</span>
          </motion.h1>
          <motion.p {...fadeUp(0.08)} className="mt-6 max-w-[54ch] mx-auto text-base leading-relaxed text-muted">
            Creamos paquetes integrales pensados para fortalecer la presencia digital de tu marca,
            unificando contenido, diseño y administración en una estrategia más organizada y profesional.
          </motion.p>
        </div>
      </section>

      {/* Pricing */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-5 md:grid-cols-3">
          {planes.map((p, i) => (
            <motion.div key={p.nombre} {...fadeUp(i * 0.08)}
              className={`relative flex flex-col rounded-2xl p-8 transition-all ${
                p.destacado
                  ? "border-2 border-accent bg-surface shadow-[0_0_60px_rgba(37,99,235,0.1)]"
                  : "card"
              }`}>
              {p.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-accent px-4 py-1 text-[11px] font-bold text-white shadow-[0_0_16px_rgba(37,99,235,0.4)]">
                    {p.badge}
                  </span>
                </div>
              )}
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-2">{p.nombre}</p>
              <div className="mt-4 flex items-end gap-1">
                <span className={`text-4xl font-bold ${p.destacado ? "text-gradient-accent" : "text-foreground"}`}>{p.precio}</span>
                <span className="mb-1 text-sm text-muted">/ mes</span>
              </div>
              <p className="mt-2 text-sm text-muted">{p.tagline}</p>
              <div className="my-6 h-px bg-border/60" />
              <ul className="flex-1 space-y-3">
                {p.items.map((it) => (
                  <li key={it.label} className="flex items-start gap-2.5">
                    {it.ok
                      ? <Check size={15} weight="bold" className="mt-0.5 flex-shrink-0 text-accent-hi" />
                      : <X size={15} weight="bold" className="mt-0.5 flex-shrink-0 text-muted-2/40" />
                    }
                    <span className={`text-sm ${it.note ? "text-muted-2" : it.ok ? "text-foreground" : "text-muted-2/50 line-through"}`}>
                      {it.label}
                    </span>
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/573242123300"
                className={`mt-8 flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                  p.destacado
                    ? "bg-accent text-white hover:bg-accent-hi hover:shadow-[0_0_24px_rgba(37,99,235,0.4)]"
                    : "border border-border-2 text-foreground hover:border-accent/40 hover:bg-accent/[0.08] hover:text-accent-hi"
                }`}>
                <WhatsappLogo size={15} weight="fill" />
                Contratar plan
              </a>
            </motion.div>
          ))}
        </div>

        {/* FAQs */}
        <div className="mt-24">
          <motion.h2 {...fadeUp()} className="text-2xl font-bold tracking-tight">Preguntas frecuentes</motion.h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {faqs.map((f, i) => (
              <motion.div key={f.q} {...fadeUp(i * 0.06)} className="card p-6">
                <div className="flex items-start gap-3">
                  <Question size={17} weight="fill" className="mt-0.5 flex-shrink-0 text-accent-hi" />
                  <div>
                    <h4 className="text-sm font-semibold">{f.q}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{f.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div {...fadeUp(0.1)} className="mt-16 rounded-2xl border border-border-2 bg-surface p-10 text-center">
          <h3 className="text-xl font-bold">¿No sabes cuál elegir?</h3>
          <p className="mt-3 text-sm text-muted max-w-sm mx-auto">Escríbenos y te ayudamos a encontrar el plan ideal.</p>
          <a href="https://wa.me/573242123300"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_28px_rgba(37,99,235,0.4)] hover:-translate-y-0.5">
            <WhatsappLogo size={16} weight="fill" />
            Hablar con un asesor
          </a>
        </motion.div>
      </section>
    </main>
  );
}
