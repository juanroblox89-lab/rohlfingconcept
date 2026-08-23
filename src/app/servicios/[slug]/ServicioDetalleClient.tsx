"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  WhatsappLogo,
} from "@phosphor-icons/react";
import {
  waLink,
  videoData,
  type Servicio,
  type Bloque,
  type Plan,
} from "@/data/services";

// Tupla tipada requerida por motion (evita error TS2322 en build de producción)
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.6, delay, ease: EASE_OUT_EXPO },
});

/* ───────────────────────── Tarjeta de plan ───────────────────────── */
function PlanCard({ plan, i }: { plan: Plan; i: number }) {
  return (
    <motion.div
      {...fadeUp(i * 0.05)}
      className="flex flex-col rounded-2xl border border-border-2 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_36px_rgba(37,99,235,0.14)]"
    >
      <h3 className="text-base font-bold tracking-tight">{plan.nombre}</h3>
      <p className="mt-3 text-3xl font-bold text-gradient-accent">{plan.precio}</p>
      {plan.tagline && <p className="mt-2 text-[13px] leading-relaxed text-muted">{plan.tagline}</p>}
      <div className="my-5 h-px bg-border/60" />
      <ul className="flex-1 space-y-2.5">
        {plan.items.map((it) => (
          <li key={it.t} className="text-sm leading-snug">
            <span className="flex items-start gap-2 font-medium">
              <Check size={14} weight="bold" className="mt-0.5 flex-shrink-0 text-accent-hi" />
              {it.t}
            </span>
            {it.d && <span className="mt-0.5 block pl-6 text-[12.5px] leading-relaxed text-muted-2">{it.d}</span>}
          </li>
        ))}
      </ul>
      <a
        href={waLink(`Hola Rohlfing Concept, me interesa el ${plan.nombre} de ${plan.precio}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 flex items-center justify-center gap-2 rounded-full border border-border-2 py-3 text-sm font-semibold transition-all hover:border-accent/50 hover:bg-accent/[0.08] hover:text-accent-hi"
      >
        <WhatsappLogo size={15} weight="fill" />
        Solicitar este plan
      </a>
    </motion.div>
  );
}

/* ───────────────────── Bloques por tipo ───────────────────── */
function BloqueRenderer({ bloque }: { bloque: Bloque }) {
  /* --- Grid de planes --- */
  if (bloque.tipo === "planes") {
    const cols =
      bloque.planes.length >= 9 ? "sm:grid-cols-2 lg:grid-cols-3" :
      bloque.planes.length === 1 ? "max-w-2xl" : "sm:grid-cols-2 lg:grid-cols-3";
    return (
      <div>
        <h2 className="mb-8 text-xl font-bold tracking-tight sm:text-2xl">{bloque.titulo}</h2>
        <div className={`grid gap-4 ${cols}`}>
          {bloque.planes.map((p, i) => (
            <PlanCard key={p.nombre} plan={p} i={i} />
          ))}
        </div>
      </div>
    );
  }

  /* --- Lista etiqueta → precio (elementos individuales / tarifas / extras) --- */
  if (bloque.tipo === "elementos") {
    return (
      <div>
        <h2 className="mb-8 text-xl font-bold tracking-tight sm:text-2xl">{bloque.titulo}</h2>
        <motion.div {...fadeUp()} className="overflow-hidden rounded-2xl border border-border-2 bg-surface">
          {bloque.elementos.map((el, i) => (
            <div
              key={el.label}
              className={`flex items-center justify-between gap-6 px-6 py-4 ${
                i > 0 ? "border-t border-border/40" : ""
              } transition-colors hover:bg-accent/[0.04]`}
            >
              <span className="text-sm font-medium">{el.label}</span>
              <span className="flex-shrink-0 text-sm font-bold text-gradient-accent">{el.precio}</span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  }

  /* --- Tabla de edición de video (3 niveles × duración) --- */
  if (bloque.tipo === "video") {
    return (
      <div>
        <h2 className="mb-8 text-xl font-bold tracking-tight sm:text-2xl">{bloque.titulo}</h2>

        {/* Matriz de precios — escritorio */}
        <motion.div {...fadeUp()} className="hidden overflow-x-auto rounded-2xl border border-border-2 bg-surface md:block">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-background/60">
                <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-2">
                  Tiempo del video
                </th>
                {videoData.niveles.map((n) => (
                  <th key={n.nombre} className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-2">
                    {n.nombre.replace("Edición ", "")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {videoData.duraciones.map((dur, ri) => (
                <tr key={dur} className={`transition-colors hover:bg-accent/[0.05] ${ri > 0 ? "border-t border-border/30" : ""}`}>
                  <td className="px-5 py-3.5 font-medium text-muted">{dur}</td>
                  {videoData.niveles.map((n) => (
                    <td key={n.nombre} className="px-5 py-3.5 font-bold text-gradient-accent">
                      {n.precios[ri]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Móvil: una tarjeta compacta por nivel */}
        <motion.div {...fadeUp(0.05)} className="md:hidden space-y-4">
          {videoData.niveles.map((n) => (
            <div key={n.nombre} className="rounded-2xl border border-border-2 bg-surface p-5">
              <h3 className="text-sm font-bold uppercase tracking-wide text-accent-hi">{n.nombre}</h3>
              <ul className="mt-3 space-y-1.5">
                {videoData.duraciones.map((dur, ri) => (
                  <li key={dur} className="flex items-center justify-between text-[13px]">
                    <span className="text-muted">{dur}</span>
                    <span className="font-bold">{n.precios[ri]}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 border-t border-border/40 pt-3 text-xs text-accent-hi">
                {n.extra.valor} — {n.extra.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Detalle de cada nivel */}
        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {videoData.niveles.map((n, i) => (
            <motion.div key={n.nombre} {...fadeUp(i * 0.07)} className="flex flex-col rounded-2xl border border-border-2 bg-surface p-7">
              <h3 className="text-lg font-bold tracking-tight text-gradient-accent">{n.nombre}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">{n.desc}</p>
              <ul className="mt-5 flex-1 space-y-3">
                {n.incluye.map((it) => (
                  <li key={it.t} className="text-sm leading-snug">
                    <span className="flex items-start gap-2 font-medium">
                      <Check size={14} weight="bold" className="mt-0.5 flex-shrink-0 text-accent-hi" />
                      {it.t}
                    </span>
                    {it.d && <span className="mt-0.5 block pl-6 text-[12.5px] leading-relaxed text-muted-2">{it.d}</span>}
                  </li>
                ))}
                <li className="text-sm leading-snug">
                  <span className="flex items-start gap-2 font-medium">
                    <Check size={14} weight="bold" className="mt-0.5 flex-shrink-0 text-accent-hi" />
                    {n.extra.label}
                    <span className="font-bold text-accent-hi">({n.extra.valor})</span>
                  </span>
                  {"desc" in n.extra && n.extra.desc && (
                    <span className="mt-0.5 block pl-6 text-[12.5px] leading-relaxed text-muted-2">{n.extra.desc}</span>
                  )}
                </li>
              </ul>
              <p className="mt-6 border-l-2 border-accent/40 pl-4 text-[12px] italic leading-relaxed text-muted-2">{n.nota}</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  /* --- Servicios con precio individual --- */
  if (bloque.tipo === "itemsPrecio") {
    return (
      <div>
        <h2 className="mb-8 text-xl font-bold tracking-tight sm:text-2xl">{bloque.titulo}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {bloque.items.map((it, i) => (
            <motion.div
              key={it.nombre}
              {...fadeUp(i * 0.06)}
              className="flex flex-col rounded-2xl border border-border-2 bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <h3 className="text-base font-bold tracking-tight">{it.nombre}</h3>
              {it.desc && <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-muted">{it.desc}</p>}
              {it.precio && (
                <p className="mt-5 text-2xl font-bold text-gradient-accent">{it.precio}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  /* --- Packs vectoriales --- */
  if (bloque.tipo === "packs") {
    return (
      <div>
        <h2 className="mb-8 text-xl font-bold tracking-tight sm:text-2xl">{bloque.titulo}</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {bloque.packs.map((pk, i) => (
            <motion.div
              key={pk.nombre}
              {...fadeUp(i * 0.07)}
              className="flex flex-col rounded-2xl border border-border-2 bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <h3 className="text-base font-bold tracking-tight">{pk.nombre}</h3>
              <p className="mt-3 text-3xl font-bold text-gradient-accent">{pk.precio}</p>
              <div className="my-5 h-px bg-border/60" />
              <ul className="flex-1 space-y-2.5">
                {pk.incluye.map((x) => (
                  <li key={x} className="flex items-start gap-2 text-sm leading-snug">
                    <Check size={14} weight="bold" className="mt-0.5 flex-shrink-0 text-accent-hi" />
                    {x}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hola Rohlfing Concept, me interesa el ${pk.nombre} (${pk.precio}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex items-center justify-center gap-2 rounded-full border border-border-2 py-3 text-sm font-semibold transition-all hover:border-accent/50 hover:bg-accent/[0.08] hover:text-accent-hi"
              >
                <WhatsappLogo size={15} weight="fill" />
                Solicitar
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  /* --- Servicio único (Diseños) --- */
  return (
    <div>
      <h2 className="mb-8 text-xl font-bold tracking-tight sm:text-2xl">{bloque.titulo}</h2>
      <motion.div
        {...fadeUp()}
        className="mx-auto max-w-2xl rounded-2xl border border-accent/30 bg-gradient-to-b from-accent/[0.08] to-surface p-8 text-center sm:p-10"
      >
        <p className="text-5xl font-bold text-gradient-accent">{bloque.precio}</p>
        <p className="mt-2 text-sm text-muted-2">por pieza</p>
        <div className="my-7 h-px bg-border/60" />
        <ul className="space-y-3 text-left">
          {bloque.incluye.map((x) => (
            <li key={x} className="flex items-start gap-2.5 text-sm leading-snug">
              <Check size={15} weight="bold" className="mt-0.5 flex-shrink-0 text-accent-hi" />
              {x}
            </li>
          ))}
        </ul>
        <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-2">Tipos de piezas</p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {bloque.tipos.map((t) => (
            <span key={t} className="rounded-full border border-border-2 bg-background/70 px-4 py-1.5 text-xs font-medium text-muted">
              {t}
            </span>
          ))}
        </div>
        <a
          href={waLink(`Hola Rohlfing Concept, quiero solicitar un diseño (${bloque.precio}).`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_28px_rgba(37,99,235,0.4)] sm:w-auto"
        >
          <WhatsappLogo size={16} weight="fill" />
          Solicitar ahora
        </a>
      </motion.div>
    </div>
  );
}

/* ───────────────────────── Página completa ───────────────────────── */
export default function ServicioDetalleClient({
  servicio,
  otros,
}: {
  servicio: Servicio;
  otros: Servicio[];
}) {
  return (
    <main className="min-h-screen">
      {/* Header del servicio */}
      <section className="relative overflow-hidden border-b border-border/40 py-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute left-1/2 top-0 h-[340px] w-[600px] -translate-x-1/2 rounded-full opacity-[0.08]"
            style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 70%)", filter: "blur(90px)" }}
          />
        </div>
        <div className="relative mx-auto max-w-5xl px-6">
          <motion.div {...fadeUp()}>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent-hi"
            >
              <ArrowLeft size={14} />
              Todos los servicios
            </Link>
          </motion.div>
          <motion.p {...fadeUp(0.03)} className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-accent-hi">
            {servicio.kicker}
          </motion.p>
          <motion.h1 {...fadeUp(0.06)} className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            {servicio.nombre}
          </motion.h1>
          <motion.p {...fadeUp(0.1)} className="mt-5 max-w-[62ch] text-base leading-relaxed text-muted">
            {servicio.intro}
          </motion.p>
          <motion.a
            {...fadeUp(0.14)}
            href={waLink(`Hola Rohlfing Concept, quiero cotizar: ${servicio.nombre}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_28px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
          >
            <WhatsappLogo size={16} weight="fill" />
            Cotizar {servicio.nombre.toLowerCase()} — desde {servicio.desde}
          </motion.a>
        </div>
      </section>

      {/* Bloques de contenido */}
      <section className="mx-auto max-w-6xl space-y-20 px-6 py-20">
        {servicio.bloques.map((b, i) => (
          <BloqueRenderer key={i} bloque={b} />
        ))}

        {/* CTA final */}
        <motion.div {...fadeUp(0.1)} className="rounded-2xl border border-border-2 bg-surface p-10 text-center">
          <h3 className="text-xl font-bold">¿Listo para empezar?</h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            Escríbenos por WhatsApp y transformemos tu material o tu idea en algo más profesional.
          </p>
          <a
            href={waLink(`Hola Rohlfing Concept, quiero iniciar un proyecto de ${servicio.nombre}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_28px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
          >
            <WhatsappLogo size={16} weight="fill" />
            Escribir por WhatsApp
          </a>
        </motion.div>
      </section>

      {/* Otros servicios */}
      <section className="border-t border-border/40 py-16" style={{ background: "var(--background-alt)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-2">Otros servicios</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otros.map((s, i) => (
              <motion.div key={s.slug} {...fadeUp(i * 0.04)}>
                <Link
                  href={`/servicios/${s.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-border-2 bg-surface px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/40"
                >
                  <div>
                    <p className="text-sm font-semibold">{s.nombre}</p>
                    <p className="mt-0.5 text-xs text-muted-2">desde {s.desde}</p>
                  </div>
                  <ArrowRight size={15} className="flex-shrink-0 text-accent-hi transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
