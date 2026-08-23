"use client";

import { motion } from "motion/react";
import { WhatsappLogo, FilmSlate } from "@phosphor-icons/react";
import Link from "next/link";

// Tupla tipada requerida por motion (evita error TS2322 en build de producción)
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.65, delay, ease: EASE_OUT_EXPO },
});

/** "tizon-dorado-reel.mp4" -> "Tizon dorado reel" */
function prettyTitle(file: string) {
  return file
    .replace(/\.(mp4|webm|mov)$/i, "")
    .replace(/[-_]+/g, " ")
    .replace(/^\w/, (c) => c.toUpperCase());
}

export default function VideosClient({ files }: { files: string[] }) {
  const hasVideos = files.length > 0;

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "radial-gradient(ellipse 60% 55% at 50% -10%, rgba(37,99,235,0.16) 0%, transparent 75%)" }}
        />
        <div className="relative mx-auto max-w-5xl px-6 py-28">
          <motion.h1 {...fadeUp()} className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            Ediciones que se <span className="text-gradient-accent">sienten</span>, no solo se ven
          </motion.h1>
          <motion.p {...fadeUp(0.12)} className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted">
            Reels, piezas para redes y ediciones creadas por nuestro equipo. Así se ve
            trabajar con Rohlfing Concept.
          </motion.p>
        </div>
      </section>

      {/* Grid de videos */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        {hasVideos ? (
          <div className="grid gap-8 md:grid-cols-2">
            {files.map((f, i) => (
              <motion.article
                key={f}
                {...fadeUp(i * 0.07)}
                className={`group overflow-hidden rounded-2xl border border-border-2 bg-surface shadow-xl transition-colors hover:border-accent/40 ${
                  i % 2 === 1 ? "md:mt-12" : ""
                }`}
              >
                <video
                  controls
                  preload="metadata"
                  playsInline
                  src={`/videos/${encodeURIComponent(f)}`}
                  className="aspect-video w-full bg-black object-contain"
                />
                <div className="flex items-center justify-between gap-3 px-5 py-4">
                  <h2 className="text-sm font-semibold">{prettyTitle(f)}</h2>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          /* Estado vacío — mientras suben los videos reales */
          <motion.div {...fadeUp()} className="mx-auto max-w-xl rounded-2xl border border-border-2 bg-surface p-12 text-center">
            <FilmSlate size={40} weight="duotone" className="mx-auto text-accent-hi" />
            <h2 className="mt-6 text-xl font-bold">Estamos montando nuestras últimas ediciones</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Mientras tanto, escríbenos y te mostramos el portafolio completo de video
              directamente por WhatsApp.
            </p>
            <a
              href="https://wa.me/573242123300?text=Hola%2C%20quiero%20ver%20los%20videos%20que%20han%20editado."
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_28px_rgba(37,99,235,0.45)] hover:-translate-y-0.5"
            >
              <WhatsappLogo size={16} weight="fill" />
              Ver portafolio de video
            </a>
          </motion.div>
        )}

        {/* CTA final */}
        <motion.div {...fadeUp(0.1)} className="mt-16 rounded-2xl border border-accent/30 bg-gradient-to-r from-accent/15 via-surface to-surface p-10 text-center">
          <h2 className="text-xl font-bold sm:text-2xl">¿Quieres una edición así para tu marca?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted">
            Creamos contenido desde cero según la identidad de tu negocio.
          </p>
          <Link
            href="/#servicios"
            className="group mt-7 inline-flex items-center gap-2 rounded-full border border-border-2 px-7 py-3.5 text-sm font-medium text-muted transition-all hover:border-accent/40 hover:text-foreground"
          >
            Ver servicios de contenido audiovisual
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
