"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  WhatsappLogo,
  InstagramLogo,
  EnvelopeSimple,
  MapPin,
  PaperPlaneTilt,
} from "@phosphor-icons/react";

const WA_BASE = "https://wa.me/573242123300";

const servicios = [
  "Logos",
  "Branding",
  "Vectorización",
  "Diseños",
  "Edición de imágenes",
  "Grabación de video",
  "Edición de video",
  "Animación de logo",
  "Administración digital",
  "Diapositivas",
  "Otro",
];

// Tupla tipada requerida por motion (evita error TS2322 en build de producción)
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.6, delay, ease: EASE_OUT_EXPO },
});

export default function ContactoClient() {
  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState(servicios[0]);
  const [mensaje, setMensaje] = useState("");

  const valido = nombre.trim() !== "" && mensaje.trim() !== "";

  const enviar = () => {
    if (!valido) return;
    const url = `${WA_BASE}?text=${encodeURIComponent(`Hola Rohlfing Concept, soy ${nombre}. Me interesa: ${servicio}. ${mensaje}`)}`;
    window.open(url, "_blank", "noopener,noreferrer");
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
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.h1 {...fadeUp()} className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hablemos de <span className="text-gradient-accent">tu proyecto</span>
          </motion.h1>
          <motion.p {...fadeUp(0.08)} className="mx-auto mt-6 max-w-[52ch] text-base leading-relaxed text-muted">
            Escríbenos por WhatsApp y te respondemos lo antes posible.
            Estamos en San Pedro de los Milagros, Antioquia.
          </motion.p>
        </div>
      </section>

      {/* Contenido */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid min-w-0 gap-5 lg:grid-cols-2">
          {/* Formulario → WhatsApp — primero en móvil */}
          <motion.div
            {...fadeUp(0.08)}
            className="card order-first flex min-w-0 flex-col p-8 lg:order-none"
          >
            <h2 className="text-xl font-bold">Escríbenos</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Completa los datos y abrimos WhatsApp con tu mensaje listo para enviar. Sin backend,
              sin esperas.
            </p>

            <form
              className="mt-6 flex flex-1 flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                enviar();
              }}
            >
              <div>
                <label htmlFor="nombre" className="mb-1.5 block text-sm font-semibold">
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  required
                  autoComplete="name"
                  className="h-12 w-full rounded-full border border-border-2 bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-2 focus:border-accent"
                />
              </div>

              <div>
                <label htmlFor="servicio" className="mb-1.5 block text-sm font-semibold">
                  Servicio
                </label>
                <select
                  id="servicio"
                  value={servicio}
                  onChange={(e) => setServicio(e.target.value)}
                  className="h-12 w-full cursor-pointer appearance-none rounded-full border border-border-2 bg-background px-4 text-sm outline-none transition-colors focus:border-accent"
                >
                  {servicios.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-1 flex-col">
                <label htmlFor="mensaje" className="mb-1.5 block text-sm font-semibold">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Cuéntanos qué necesitas…"
                  required
                  rows={5}
                  className="min-h-[150px] w-full flex-1 resize-y rounded-2xl border border-border-2 bg-background px-4 py-3 text-sm leading-relaxed outline-none transition-colors placeholder:text-muted-2 focus:border-accent"
                />
              </div>

              <button
                type="submit"
                disabled={!valido}
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_24px_rgba(37,99,235,0.4)] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:shadow-none"
              >
                <PaperPlaneTilt size={15} weight="fill" />
                Enviar por WhatsApp
              </button>
              {!valido && (
                <p className="text-center text-xs leading-relaxed text-muted-2">
                  Completa tu nombre y mensaje para activar el envío.
                </p>
              )}
            </form>
          </motion.div>

          {/* Canales directos */}
          <motion.div
            {...fadeUp()}
            className="flex min-w-0 flex-col rounded-2xl border border-border-2 bg-surface p-8"
          >
            <h2 className="text-xl font-bold">Canales directos</h2>

            <a
              href={`${WA_BASE}?text=${encodeURIComponent("Hola Rohlfing Concept, escribo desde rohlfingconcept.com.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_24px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
            >
              <WhatsappLogo size={16} weight="fill" />
              WhatsApp · +57 324 212 3300
            </a>
            <p className="mt-3 text-xs leading-relaxed text-muted-2">
              WhatsApp +57 324 212 3300 (único canal telefónico)
            </p>

            <div className="mt-6 space-y-4 border-t border-border/60 pt-6">
              <div className="flex items-start gap-3">
                <EnvelopeSimple size={17} weight="fill" className="mt-0.5 shrink-0 text-accent-hi" />
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-2">
                    Correo
                  </p>
                  <a
                    href="mailto:rohlfingconcept@gmail.com"
                    className="mt-1 block truncate text-sm text-foreground hover:text-accent-hi"
                  >
                    rohlfingconcept@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <InstagramLogo size={17} weight="fill" className="mt-0.5 shrink-0 text-accent-hi" />
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-2">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/rohlfingconcept"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm text-foreground hover:text-accent-hi"
                  >
                    @rohlfingconcept
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={17} weight="fill" className="mt-0.5 shrink-0 text-accent-hi" />
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-2">
                    Dirección
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Cra.+49+A+%2348-23,+San+Pedro,+San+Pedro+de+los+Milagros,+Antioquia,+Colombia/@6.4612415,-75.5586706,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm leading-relaxed text-foreground hover:text-accent-hi"
                  >
                    Cra. 49 A #48-23
                    <br />
                    San Pedro de los Milagros, Antioquia
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border-2">
              <iframe
                title="Rohlfing Concept — Ubicación San Pedro de los Milagros"
                src="https://maps.google.com/maps?q=6.4612362,-75.5560957&output=embed&z=17"
                width="100%"
                height="180"
                className="block grayscale"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
