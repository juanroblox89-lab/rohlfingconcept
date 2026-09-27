"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Check, MapPin, Question, WhatsappLogo } from "@phosphor-icons/react";
import { paquetesGrupos } from "@/data/paquetes";

const faqs = [
  { q: "¿Los planes incluyen grabación?",    a: "Sí, todos los planes incluyen la grabación en el lugar acordado contigo." },
  { q: "¿Puedo cambiar de plan?",            a: "Puedes escalar o ajustar tu plan al inicio de cada mes sin problema." },
  { q: "¿Qué redes sociales manejan?",      a: "Instagram, TikTok, Facebook y YouTube. La red adicional tiene un costo de +$30.000/mes." },
  { q: "¿Cómo es el pago?",                 a: "Mensual anticipado, por transferencia bancaria o efectivo." },
  { q: "¿En qué canal se transmite la pauta?", a: "En Mi Canal, televisión regional." },
  { q: "¿Qué incluyen los packs mixtos?",   a: "Combinan un pack de TV y uno digital con su desglose completo." },
];

const WA_BASE = "https://wa.me/573242123300";

// Tupla tipada requerida por motion (evita error TS2322 en build de producción)
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.6, delay, ease: EASE_OUT_EXPO },
});

export default function PaquetesClient() {
  const todosLosPacks = useMemo(
    () => paquetesGrupos.flatMap((g) => g.packs.map((p) => p.nombre)),
    [],
  );

  const [pack, setPack] = useState("Pack I Publicitario");
  const [ciudad, setCiudad] = useState("");

  const ciudadTrim = ciudad.trim();
  const ciudadVacia = ciudadTrim === "";

  const cotizarPorCiudad = () => {
    if (ciudadVacia) return;
    const url = `${WA_BASE}?text=${encodeURIComponent(`Hola Rohlfing Concept, quiero cotizar el ${pack} para mi negocio en ${ciudadTrim}.`)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const irACotizador = (nombrePack: string) => {
    setPack(nombrePack);
    document.getElementById("cotiza-ciudad")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border/40 py-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
          <div className="absolute left-1/2 top-0 h-[360px] w-[600px] -translate-x-1/2 opacity-[0.12] rounded-full"
            style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 70%)", filter: "blur(90px)" }} />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.h1 {...fadeUp()} className="text-4xl font-bold tracking-tight sm:text-5xl">
            Televisión, digital
            <br />
            <span className="text-gradient-accent">y mixtos</span>
          </motion.h1>
          <motion.div {...fadeUp(0.06)} className="mt-5 flex justify-center">
            <span className="rounded-full border border-accent/30 bg-accent/[0.08] px-4 py-1.5 text-xs font-semibold text-accent-hi">
              Precios de referencia · San Pedro de los Milagros
            </span>
          </motion.div>
          <motion.p {...fadeUp(0.08)} className="mt-6 max-w-[54ch] mx-auto text-base leading-relaxed text-muted">
            Tres grupos de packs con precios de referencia: pautas en televisión regional,
            publicidad digital en redes sociales y packs mixtos que combinan ambos.
          </motion.p>
          <motion.nav {...fadeUp(0.12)} aria-label="Grupos de paquetes" className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {paquetesGrupos.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-border-2 px-6 py-3 text-sm font-medium text-muted transition-all hover:border-accent/40 hover:text-foreground hover:-translate-y-0.5"
              >
                {g.titulo}
              </a>
            ))}
          </motion.nav>
        </div>
      </section>

      {/* Grupos de packs */}
      <div className="mx-auto max-w-6xl px-6 py-20">
        {paquetesGrupos.map((grupo, gi) => (
          <section key={grupo.id} id={grupo.id} aria-label={grupo.titulo} className={gi > 0 ? "mt-24" : ""}>
            <motion.h2 {...fadeUp()} className="text-2xl font-bold tracking-tight sm:text-3xl">
              {grupo.titulo}
            </motion.h2>
            <motion.p {...fadeUp(0.06)} className="mt-3 max-w-[62ch] text-sm leading-relaxed text-muted">
              {grupo.intro}
            </motion.p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {grupo.packs.map((p, i) => {
                const destacado = i === 1;
                return (
                  <motion.div key={p.nombre} {...fadeUp(i * 0.08)}
                    className={`relative flex flex-col rounded-2xl p-8 transition-all ${
                      destacado
                        ? "border-2 border-accent bg-surface shadow-[0_0_60px_rgba(37,99,235,0.1)]"
                        : "card"
                    }`}>
                    {destacado && (
                      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                        <span className="rounded-full bg-accent px-4 py-1 text-[11px] font-bold text-white shadow-[0_0_16px_rgba(37,99,235,0.4)]">
                          Más popular
                        </span>
                      </div>
                    )}
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-2">{p.nombre}</p>
                    <div className="mt-4 flex items-end gap-1">
                      <span className={`text-4xl font-bold ${destacado ? "text-gradient-accent" : "text-foreground"}`}>{p.precio}</span>
                      {grupo.id === "digital" && (
                        <span className="mb-1 text-sm text-muted">/mes</span>
                      )}
                    </div>
                    <div className="my-6 h-px bg-border/60" />
                    <ul className="flex-1 space-y-3">
                      {p.incluye.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check size={15} weight="bold" className="mt-0.5 flex-shrink-0 text-accent-hi" />
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {grupo.nota && (
                      <p className="mt-4 text-xs leading-relaxed text-muted-2">{grupo.nota}</p>
                    )}
                    <button
                      type="button"
                      onClick={() => irACotizador(p.nombre)}
                      className={`mt-8 flex items-center justify-center gap-2 rounded-full py-3.5 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                        destacado
                          ? "bg-accent text-white hover:bg-accent-hi hover:shadow-[0_0_24px_rgba(37,99,235,0.4)]"
                          : "border border-border-2 text-foreground hover:border-accent/40 hover:bg-accent/[0.08] hover:text-accent-hi"
                      }`}>
                      <MapPin size={15} weight="fill" />
                      Cotizar en mi ciudad
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </section>
        ))}

        {/* Cotizador por ciudad → WhatsApp */}
        <motion.div
          {...fadeUp(0.1)}
          id="cotiza-ciudad"
          className="mt-24 rounded-2xl border border-border-2 bg-surface p-8 scroll-mt-24 md:p-10"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-hi">
              Precio según tu ubicación
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Cotiza tu precio según tu ubicación
            </h2>
            <p className="mx-auto mt-3 max-w-[52ch] text-sm leading-relaxed text-muted">
              Elige tu pack, dinos en qué ciudad o municipio está tu negocio y te abrimos
              el chat de WhatsApp con tu cotización lista para enviar.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
            <div className="min-w-0">
              <label htmlFor="pack-ciudad" className="mb-1.5 block text-sm font-semibold">
                Pack
              </label>
              <select
                id="pack-ciudad"
                value={pack}
                onChange={(e) => setPack(e.target.value)}
                className="h-12 w-full min-w-0 cursor-pointer appearance-none rounded-full border border-border-2 bg-background px-4 text-sm outline-none transition-colors focus:border-accent"
              >
                {todosLosPacks.map((nombre) => (
                  <option key={nombre} value={nombre}>
                    {nombre}
                  </option>
                ))}
              </select>
            </div>
            <div className="min-w-0">
              <label htmlFor="ciudad" className="mb-1.5 block text-sm font-semibold">
                Ciudad o municipio
              </label>
              <input
                id="ciudad"
                type="text"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
                placeholder="Ciudad o municipio"
                autoComplete="address-level2"
                className="h-12 w-full min-w-0 rounded-full border border-border-2 bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-2 focus:border-accent"
              />
            </div>
            <button
              type="button"
              onClick={cotizarPorCiudad}
              disabled={ciudadVacia}
              className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-accent px-7 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_24px_rgba(37,99,235,0.4)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-none"
            >
              <WhatsappLogo size={15} weight="fill" />
              Cotizar por WhatsApp
            </button>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xs leading-relaxed text-muted-2">
            {ciudadVacia
              ? "Escribe tu ciudad o municipio para activar el botón."
              : `Cotizarás el ${pack} para tu negocio en ${ciudadTrim}.`}
          </p>
        </motion.div>

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
          <p className="mt-3 text-sm text-muted max-w-sm mx-auto">Escríbenos y te ayudamos a encontrar el pack ideal.</p>
          <a href="https://wa.me/573242123300?text=Hola%2C%20no%20s%C3%A9%20qu%C3%A9%20paquete%20elegir%2C%20%C2%BFme%20ayudan%3F"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_28px_rgba(37,99,235,0.4)] hover:-translate-y-0.5">
            <WhatsappLogo size={16} weight="fill" />
            Hablar con un asesor
          </a>
        </motion.div>
      </div>
    </main>
  );
}
