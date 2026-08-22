"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "motion/react";
import { WhatsappLogo } from "@phosphor-icons/react";

// Tupla tipada requerida por motion (evita error TS2322 en build de producción)
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.6, delay, ease: EASE_OUT_EXPO },
});

/* ── Trabajos reales extraídos de las galerías del sitio original ── */
type Obra = { src: string; w: number; h: number; cat: CatKey };

type CatKey =
  | "Disenos" | "Digital" | "Video" | "Vectorial"
  | "Branding" | "Redes" | "Audiovisual";

export const CAT_LABEL: Record<CatKey, string> = {
  Disenos:     "Diseños",
  Digital:     "Presencia digital",
  Video:       "Edición de video",
  Vectorial:   "Vectorial",
  Branding:    "Branding",
  Redes:       "Contenido para redes",
  Audiovisual: "Creación audiovisual",
};

const obras: Obra[] = [
  { src: "/img/portfolio/disenos-257c7bb0e746.png",   w: 778,  h: 1100, cat: "Disenos" },
  { src: "/img/portfolio/audiovisual-9f9883e6b98b.jpg", w: 1100, h: 733, cat: "Audiovisual" },
  { src: "/img/portfolio/disenos-fe4d2983bf67.jpg",   w: 1100, h: 619,  cat: "Disenos" },
  { src: "/img/portfolio/digital-237badf702e1.jpg",   w: 1100, h: 619,  cat: "Digital" },
  { src: "/img/portfolio/disenos-d39525cdadb9.png",   w: 778,  h: 1100, cat: "Disenos" },
  { src: "/img/portfolio/video-9a0ddb671897.jpg",     w: 1024, h: 1024, cat: "Video" },
  { src: "/img/portfolio/disenos-bce7636c50f6.jpg",   w: 1100, h: 825,  cat: "Disenos" },
  { src: "/img/portfolio/vectorial-bd373f79ac96.jpg", w: 1100, h: 825,  cat: "Vectorial" },
  { src: "/img/portfolio/disenos-93736c459e4e.png",   w: 778,  h: 1100, cat: "Disenos" },
  { src: "/img/portfolio/digital-88d27e82e6f4.png",   w: 1100, h: 647,  cat: "Digital" },
  { src: "/img/portfolio/disenos-d409d5b4bbec.jpg",   w: 1100, h: 673,  cat: "Disenos" },
  { src: "/img/portfolio/branding-bc77a04606a6.jpg",  w: 808,  h: 638,  cat: "Branding" },
  { src: "/img/portfolio/disenos-5967c0d307de.png",   w: 778,  h: 1100, cat: "Disenos" },
  { src: "/img/portfolio/redes-e1d8ecb0d70b.jpg",     w: 1100, h: 733,  cat: "Redes" },
  { src: "/img/portfolio/disenos-7d1c4dce94a5.png",   w: 778,  h: 1100, cat: "Disenos" },
  { src: "/img/portfolio/video-0309f24c0d2f.jpg",     w: 1024, h: 1024, cat: "Video" },
  { src: "/img/portfolio/digital-079e516e34ec.jpg",   w: 1100, h: 484,  cat: "Digital" },
];

const filtros: { key: CatKey | "Todos"; label: string }[] = [
  { key: "Todos",       label: "Todos" },
  { key: "Disenos",     label: CAT_LABEL.Disenos },
  { key: "Digital",     label: CAT_LABEL.Digital },
  { key: "Video",       label: CAT_LABEL.Video },
  { key: "Vectorial",   label: CAT_LABEL.Vectorial },
  { key: "Branding",    label: CAT_LABEL.Branding },
  { key: "Redes",       label: CAT_LABEL.Redes },
  { key: "Audiovisual", label: CAT_LABEL.Audiovisual },
];

const clients = [
  { name: "Villa Grande",           logo: "/img/client-villa-grande.png", tag: "Branding · Web",    desc: "Identidad visual y presencia digital para un proyecto inmobiliario de alta gama." },
  { name: "Plomería Norte",         logo: "/img/client-plomeria-norte.png", tag: "Diseño · Redes",  desc: "Diseño de marca y gestión de redes sociales para empresa de plomería local." },
  { name: "El Tizón Dorado",        logo: null, tag: "Branding · Contenido",                     desc: "Identidad visual y producción de contenido para restaurante parrilla." },
  { name: "Ricos Pandeyucas",       logo: null, tag: "Diseño · Redes",                           desc: "Branding y estrategia digital para marca de productos artesanales." },
  { name: "Asanarte Droguería",     logo: null, tag: "Identidad Visual",                         desc: "Manual de marca y piezas gráficas para droguería y punto de salud." },
  { name: "El Jerez del Caballero", logo: null, tag: "Audiovisual · Redes",                      desc: "Producción audiovisual y gestión de redes para marca de licores." },
];

export default function ProyectosClient() {
  const [filtro, setFiltro] = useState<CatKey | "Todos">("Todos");
  const visibles = filtro === "Todos" ? obras : obras.filter((o) => o.cat === filtro);

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

      {/* ── Galería de trabajos reales ── */}
      <section id="trabajos" className="mx-auto max-w-7xl px-6 py-20">
        <motion.div {...fadeUp()} className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Nuestros <span className="text-gradient-accent">trabajos</span>
          </h2>
          <p className="text-sm text-muted max-w-[40ch]">
            Una selección de piezas reales de nuestras galerías: diseño, branding, edición y presencia digital.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div {...fadeUp(0.08)} className="mt-10 flex flex-wrap gap-2">
          {filtros.map((f) => {
            const activo = filtro === f.key;
            const n = f.key === "Todos" ? obras.length : obras.filter((o) => o.cat === f.key).length;
            return (
              <button
                key={f.key}
                onClick={() => setFiltro(f.key)}
                className={`rounded-full px-4 py-2 text-xs font-medium transition-all ${
                  activo
                    ? "bg-accent text-white shadow-[0_0_16px_rgba(37,99,235,0.35)]"
                    : "border border-border-2 bg-surface text-muted hover:border-accent/40 hover:text-foreground"
                }`}
              >
                {f.label}
                <span className={`ml-1.5 ${activo ? "text-white/70" : "text-muted-2/60"}`}>{n}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Grid masonry */}
        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {visibles.map((o, i) => (
            <motion.figure
              key={o.src}
              {...fadeUp(Math.min(i * 0.04, 0.3))}
              className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl border border-border-2 bg-surface transition-all hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(37,99,235,0.14)]"
            >
              <Image
                src={o.src}
                alt={`${CAT_LABEL[o.cat]} — Rohlfing Concept`}
                width={o.w}
                height={o.h}
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background/90 via-background/30 to-transparent px-5 pb-4 pt-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="text-xs font-semibold uppercase tracking-[0.13em] text-accent-hi">
                  {CAT_LABEL[o.cat]}
                </span>
                <span className="text-[10px] text-muted-2">Rohlfing Concept</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* ── Clientes ── */}
      <section className="border-t border-border/40 py-20" style={{ background: "var(--background-alt)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <motion.h2 {...fadeUp()} className="text-2xl font-bold tracking-tight sm:text-3xl">
            Marcas que confían en nosotros
          </motion.h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((c, i) => (
              <motion.div key={c.name} {...fadeUp(i * 0.06)}
                className="card group relative overflow-hidden p-8">
                <span className="pointer-events-none absolute right-5 top-3 text-[72px] font-black leading-none select-none"
                  style={{ color: "transparent", WebkitTextStroke: "1px rgba(79,141,255,0.06)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
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
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <motion.div {...fadeUp(0.1)}
          className="rounded-2xl border border-border-2 bg-surface p-10 text-center">
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
