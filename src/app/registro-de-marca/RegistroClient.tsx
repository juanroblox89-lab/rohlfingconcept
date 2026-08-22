"use client";

import { motion } from "motion/react";
import { WhatsappLogo, ArrowDown, Users } from "@phosphor-icons/react";

const pasos = [
  {
    n: "01",
    title: "Estudio de antecedentes marcarios",
    desc: "Búsqueda exhaustiva para identificar posibles causales de irregistrabilidad o riesgos con marcas similares. Entregamos un informe detallado al finalizar.",
  },
  {
    n: "02",
    title: "Recomendaciones estratégicas",
    desc: "Con base en el estudio, te asesoramos sobre ajustes en la marca para minimizar riesgos y aumentar las probabilidades de éxito.",
  },
  {
    n: "03",
    title: "Clasificación de la marca",
    desc: "Definimos la clasificación adecuada según los productos o servicios que ofrecerás, antes de radicar la solicitud.",
  },
  {
    n: "04",
    title: "Radicación del trámite",
    desc: "Presentamos la solicitud ante la SIC y realizamos seguimiento continuo hasta su resolución.",
  },
];

const beneficios = [
  "Protección legal de tu nombre e imagen",
  "Exclusividad de uso en Colombia",
  "Mayor credibilidad ante clientes",
  "Posibilidad de licenciar o franquiciar",
  "Defensa ante imitaciones o plagios",
  "Valor agregado para tu empresa",
];

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

export default function RegistroClient() {
  return (
    <main className="min-h-screen">
      {/* Header con imagen de fondo */}
      <section className="relative overflow-hidden border-b border-border/40">
        {/* Slot imagen de fondo — pon una foto de documento/legal/oficina en /img/registro-bg.jpg */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-background/85" />
          {/* Si tienes imagen: */}
          {/* <Image src="/img/registro-bg.jpg" alt="" fill className="object-cover" /> */}
          <div className="absolute inset-0"
            style={{ background: "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(37,99,235,0.1) 0%, transparent 80%)" }} />
        </div>
        <div className="relative mx-auto max-w-5xl px-6 py-28">
          <motion.h1 {...fadeUp()} className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Registro de marca
            <br />
            <span className="text-gradient-accent">ante la SIC</span>
          </motion.h1>
          <motion.p {...fadeUp(0.08)} className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted">
            Disponible en alianza con{" "}
            <span className="font-semibold text-foreground">Ilegítimas — Abogadas</span>.
            Acompañamiento completo desde el estudio hasta la aprobación.
          </motion.p>
          <motion.div {...fadeUp(0.14)} className="mt-10 flex flex-wrap gap-4">
            <a href="https://wa.me/573242123300"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_28px_rgba(37,99,235,0.4)] hover:-translate-y-0.5">
              <WhatsappLogo size={16} weight="fill" />
              Empezar proceso
            </a>
            <a href="#precios"
              className="inline-flex items-center gap-2 rounded-full border border-border-2 px-7 py-3.5 text-sm font-medium text-muted transition-all hover:border-accent/40 hover:text-foreground">
              Ver costos <ArrowDown size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Pasos */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <motion.h2 {...fadeUp()} className="text-2xl font-bold tracking-tight sm:text-3xl">
          4 etapas claras, de principio a fin
        </motion.h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {pasos.map((p, i) => (
            <motion.div key={p.n} {...fadeUp(i * 0.07)} className="card group relative overflow-hidden p-8">
              <span className="num-wm">{p.n}</span>
              <div className="mb-5 flex items-center justify-between">
                <span className="text-4xl font-bold text-gradient-accent">{p.n}</span>
                <span className="font-mono text-xs text-muted-2">{p.n} / 04</span>
              </div>
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-accent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Por qué con nosotros (copy de la web original) */}
      <section className="border-t border-border/40 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <motion.h2 {...fadeUp()} className="text-2xl font-bold tracking-tight sm:text-3xl">
            ¿Por qué con <span className="text-gradient-accent">nosotros</span>?
          </motion.h2>
          <motion.p {...fadeUp(0.08)} className="mt-8 max-w-[70ch] text-base leading-relaxed text-muted">
            Con nuestra alianza junto a las abogadas de Ilegítimas, hacer tu registro de marca es un
            proceso claro, acompañado y sin complicaciones. Te guiamos desde el inicio, contamos con
            asesoría jurídica confiable y manejamos precios accesibles que se ajustan a tu bolsillo.
            Aquí encuentras confianza, apoyo real y un servicio pensado para que tu marca quede bien
            protegida sin gastar de más.
          </motion.p>
        </div>
      </section>

      {/* Beneficios con imagen lateral */}
      <section className="border-t border-border/40 py-20" style={{ background: "var(--background-alt)" }}>
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
            {/* Imagen — pon una foto profesional en /img/registro-team.jpg */}
            <motion.div {...fadeUp()} className="relative overflow-hidden rounded-2xl border border-border-2 bg-surface aspect-[3/4] order-2 md:order-1">
              {/* Placeholder hasta que pongas imagen */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-muted-2">
                <div className="h-12 w-12 rounded-full border-2 border-dashed border-border-2" />
                <p className="text-xs text-center px-8">Pon una imagen aquí:<br /><code className="text-[10px]">/img/registro-team.jpg</code></p>
              </div>
              {/* <Image src="/img/registro-team.jpg" alt="Equipo Rohlfing Concept" fill className="object-cover" /> */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface/70 to-transparent" />
            </motion.div>

            <div className="order-1 md:order-2">
              <motion.h2 {...fadeUp()} className="text-2xl font-bold tracking-tight">
                ¿Por qué registrar tu marca?
              </motion.h2>
              <div className="mt-8 grid gap-3">
                {beneficios.map((b, i) => (
                  <motion.div key={b} {...fadeUp(i * 0.05)}
                    className="flex items-center gap-3 rounded-xl border border-border-2 bg-surface px-5 py-4 text-sm transition-colors hover:border-accent/30">
                    <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-hi" />
                    <span className="text-muted">{b}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precios */}
      <section id="precios" className="mx-auto max-w-5xl px-6 py-20">
        <motion.h2 {...fadeUp()} className="text-2xl font-bold tracking-tight">
          Lo que cuesta el proceso
        </motion.h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <motion.div {...fadeUp(0.05)} className="card p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-2">Tasa de registro (SIC)</p>
            <p className="mt-4 text-3xl font-bold text-gradient-accent">$970.500 – $1&apos;348.500</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Las tasas establecidas por la Superintendencia de Industria y Comercio corresponden al
              valor oficial para registrar tu marca en Colombia. Este costo es fijo, obligatorio y se
              paga directamente a la entidad para iniciar el trámite.
            </p>
            <div className="mt-5 rounded-xl border border-border bg-background px-4 py-3">
              <p className="text-xs text-muted-2">Este costo va directo a la SIC, no a nosotros.</p>
            </div>
          </motion.div>
          <motion.div {...fadeUp(0.1)} className="relative overflow-hidden rounded-2xl border border-accent/30 bg-surface p-8">
            <span className="absolute top-4 right-4 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-[10px] font-bold text-accent-hi">En cuotas</span>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-2">Honorarios</p>
            <p className="mt-4 text-3xl font-bold text-gradient-accent">1 SMMLV — $1&apos;750.000</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Un valor pensado para ofrecerte acompañamiento legal completo, gestión del proceso y
              asesoría profesional sin elevar los costos.
            </p>
            <p className="mt-6 text-sm font-semibold text-foreground">
              Sin prisa: no hay que pagar todo de una
            </p>
            <ol className="mt-4 space-y-2">
              {["Mitad al iniciar el estudio", "Tasa de la SIC", "Resto al aprobar"].map((s, i) => (
                <li key={s} className="flex items-center gap-3 text-xs text-muted">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-[10px] font-bold text-accent-hi">{i + 1}</span>
                  {s}
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* Alianza */}
        <motion.div {...fadeUp(0.08)} className="mt-6 flex items-center gap-4 rounded-2xl border border-border-2 bg-surface p-6">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-border-2 bg-surface-2 text-accent-hi">
            <Users size={20} weight="duotone" />
          </div>
          <div>
            <p className="text-sm font-semibold">En alianza con <span className="text-accent-hi">Ilegítimas — Abogadas</span></p>
            <p className="mt-0.5 text-xs text-muted">Respaldo jurídico profesional para que tu marca quede correctamente registrada.</p>
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.12)} className="mt-14 rounded-2xl border border-border-2 bg-surface p-10 text-center">
          <h3 className="text-xl font-bold">¿Listo para proteger tu marca?</h3>
          <p className="mt-3 text-sm text-muted max-w-md mx-auto">Te explicamos todo el proceso paso a paso, sin complicaciones.</p>
          <a href="https://wa.me/573242123300"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_28px_rgba(37,99,235,0.4)] hover:-translate-y-0.5">
            <WhatsappLogo size={16} weight="fill" />
            Contáctanos
          </a>
        </motion.div>
      </section>
    </main>
  );
}
