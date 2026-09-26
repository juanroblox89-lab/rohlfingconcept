"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import { WhatsappLogo, PlayCircle } from "@phosphor-icons/react";
import { EASE, fadeUp } from "@/lib/anim";
import { clientes, type Cliente } from "@/data/clientes";

/* ── Obras reales de /img/portfolio (mismo src/w/h del sitio original) ── */
type Obra = { src: string; w: number; h: number; cat: CatKey };

type CatKey =
  | "Disenos" | "Video" | "Vectorial"
  | "Branding" | "Redes" | "Audiovisual";

export const CAT_LABEL: Record<CatKey, string> = {
  Disenos:     "Diseños",
  Video:       "Edición de video",
  Vectorial:   "Vectorial",
  Branding:    "Branding",
  Redes:       "Contenido para redes",
  Audiovisual: "Creación audiovisual",
};

const obras: Obra[] = [
  { src: "/img/portfolio/disenos-257c7bb0e746.png",     w: 778,  h: 1100, cat: "Disenos" },
  { src: "/img/portfolio/audiovisual-9f9883e6b98b.jpg", w: 1100, h: 733,  cat: "Audiovisual" },
  { src: "/img/portfolio/disenos-fe4d2983bf67.jpg",     w: 1100, h: 619,  cat: "Disenos" },
  { src: "/img/portfolio/digital-237badf702e1.jpg",     w: 1100, h: 619,  cat: "Redes" },
  { src: "/img/portfolio/disenos-d39525cdadb9.png",     w: 778,  h: 1100, cat: "Disenos" },
  { src: "/img/portfolio/video-9a0ddb671897.jpg",       w: 1024, h: 1024, cat: "Video" },
  { src: "/img/portfolio/disenos-bce7636c50f6.jpg",     w: 1100, h: 825,  cat: "Disenos" },
  { src: "/img/portfolio/vectorial-bd373f79ac96.jpg",   w: 1100, h: 825,  cat: "Vectorial" },
  { src: "/img/portfolio/disenos-93736c459e4e.png",     w: 778,  h: 1100, cat: "Disenos" },
  { src: "/img/portfolio/digital-88d27e82e6f4.png",     w: 1100, h: 647,  cat: "Redes" },
  { src: "/img/portfolio/disenos-d409d5b4bbec.jpg",     w: 1100, h: 673,  cat: "Disenos" },
  { src: "/img/portfolio/branding-bc77a04606a6.jpg",    w: 808,  h: 638,  cat: "Branding" },
  { src: "/img/portfolio/disenos-5967c0d307de.png",     w: 778,  h: 1100, cat: "Disenos" },
  { src: "/img/portfolio/redes-e1d8ecb0d70b.jpg",       w: 1100, h: 733,  cat: "Redes" },
  { src: "/img/portfolio/disenos-7d1c4dce94a5.png",     w: 778,  h: 1100, cat: "Disenos" },
  { src: "/img/portfolio/video-0309f24c0d2f.jpg",       w: 1024, h: 1024, cat: "Video" },
  { src: "/img/portfolio/digital-079e516e34ec.jpg",     w: 1100, h: 484,  cat: "Redes" },
];

const filtros: { key: CatKey | "Todos"; label: string }[] = [
  { key: "Todos",       label: "Todos" },
  { key: "Disenos",     label: CAT_LABEL.Disenos },
  { key: "Video",       label: CAT_LABEL.Video },
  { key: "Vectorial",   label: CAT_LABEL.Vectorial },
  { key: "Branding",    label: CAT_LABEL.Branding },
  { key: "Redes",       label: CAT_LABEL.Redes },
  { key: "Audiovisual", label: CAT_LABEL.Audiovisual },
];

/** Formato deducido de las dimensiones reales de cada pieza. */
function formatoPieza(o: Obra): string {
  if (o.w === o.h) return "Pieza cuadrada";
  if (o.h > o.w) return "Pieza gráfica vertical";
  const r = o.w / o.h;
  if (r >= 2) return "Banner horizontal";
  if (r >= 1.6) return "Pieza 16:9";
  if (r >= 1.4) return "Pieza panorámica";
  return "Pieza 4:3";
}

/** Los archivos con "reel" en el nombre son verticales 9:16. */
function formatoVideo(src: string): string {
  return src.toLowerCase().includes("reel") ? "Reel 9:16" : "Video";
}

const WHATSAPP =
  "https://wa.me/573242123300?text=Hola%2C%20vi%20sus%20proyectos%20y%20quiero%20uno%20para%20mi%20marca.";

const conVideo = clientes.filter(
  (c): c is Cliente & { video: string; poster: string } =>
    typeof c.video === "string" && typeof c.poster === "string"
);

export default function ProyectosClient() {
  const [filtro, setFiltro] = useState<CatKey | "Todos">("Todos");
  const visibles = filtro === "Todos" ? obras : obras.filter((o) => o.cat === filtro);

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#0A0A0A]">
      {/* ── Header tipográfico ── */}
      <section className="border-b border-[#D9D9D9]">
        <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 md:py-24 xl:px-8">
          <motion.p {...fadeUp()} className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5C5C5C]">
            Portafolio — Rohlfing Concept
          </motion.p>
          <motion.h1 {...fadeUp(0.06)} className="mt-4 max-w-[16ch] font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Trabajo real para marcas reales.
          </motion.h1>
          <motion.p {...fadeUp(0.12)} className="mt-5 max-w-[60ch] text-sm leading-relaxed text-[#5C5C5C]">
            Diseños, piezas para redes, branding y edición de video creados por
            nuestro equipo para negocios que confían en nosotros.
          </motion.p>
          <motion.div {...fadeUp(0.18)} className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
              { v: "+300", l: "Proyectos" },
              { v: "2.3M", l: "Visualizaciones" },
              { v: "7", l: "Marcas activas" },
            ].map((s) => (
              <div key={s.l} className="rounded border border-[#0A0A0A] p-4">
                <p className="font-display text-2xl font-bold">{s.v}</p>
                <p className="mt-1 text-xs text-[#5C5C5C]">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Galería de trabajos reales ── */}
      <section id="trabajos" className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-20 xl:px-8">
        <motion.div {...fadeUp()} className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5C5C5C]">
              Galería
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Nuestros trabajos
            </h2>
            <p className="mt-3 max-w-[52ch] text-[13px] leading-relaxed text-[#5C5C5C]">
              Una selección de piezas reales: diseño, branding, edición y contenido para redes.
            </p>
          </div>
          <Link
            href="/videos"
            className="inline-flex items-center gap-2 rounded-full border border-[#D9D9D9] px-5 py-2.5 text-[13px] font-medium text-[#5C5C5C]"
          >
            <PlayCircle size={16} weight="duotone" />
            Ediciones en video
          </Link>
        </motion.div>

        {/* Filtros pills mono */}
        <motion.div {...fadeUp(0.06)} className="mt-8 flex flex-wrap gap-2">
          {filtros.map((f) => {
            const activo = filtro === f.key;
            const n = f.key === "Todos" ? obras.length : obras.filter((o) => o.cat === f.key).length;
            return (
              <motion.button
                key={f.key}
                onClick={() => setFiltro(f.key)}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15, ease: EASE }}
                className={`rounded-full border px-4 py-2 text-xs font-medium ${
                  activo
                    ? "border-[#0A0A0A] bg-[#0A0A0A] text-[#FFFFFF]"
                    : "border-[#D9D9D9] bg-[#FFFFFF] text-[#5C5C5C]"
                }`}
              >
                {f.label}
                <span className={`ml-1.5 ${activo ? "text-[#F4F4F4]" : "text-[#8A8A8A]"}`}>{n}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Grid masonry con caption visible */}
        <div className="mt-8 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {visibles.map((o, i) => (
            <motion.figure
              key={o.src}
              {...fadeUp(Math.min(i * 0.04, 0.3))}
              className="mb-5 break-inside-avoid overflow-hidden rounded border border-[#D9D9D9] bg-[#FFFFFF]"
            >
              <Image
                src={o.src}
                alt={`${CAT_LABEL[o.cat]} — Rohlfing Concept`}
                width={o.w}
                height={o.h}
                className="h-auto w-full object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <figcaption className="border-t border-[#D9D9D9] p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-[13px] font-semibold">Rohlfing Concept</p>
                  <span className="shrink-0 rounded-full border border-[#D9D9D9] px-2.5 py-0.5 text-[11px] font-medium text-[#5C5C5C]">
                    {formatoPieza(o)}
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#5C5C5C]">{CAT_LABEL[o.cat]}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* ── Marcas que confiaron en nosotros ── */}
      <section className="border-y border-[#D9D9D9] bg-[#F4F4F4]">
        <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-20 xl:px-8">
          <motion.p {...fadeUp()} className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5C5C5C]">
            Clientes
          </motion.p>
          <motion.h2 {...fadeUp(0.06)} className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Marcas que confiaron en nosotros
          </motion.h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {clientes.map((c, i) => (
              <motion.article
                key={c.name}
                {...fadeUp(Math.min(i * 0.05, 0.3))}
                className="overflow-hidden rounded border border-[#D9D9D9] bg-[#FFFFFF]"
              >
                <div className="flex aspect-[16/9] flex-col items-center justify-center gap-3 bg-[#F4F4F4] p-6">
                  <Image
                    src={c.logo}
                    alt={`Logo de ${c.name}`}
                    width={160}
                    height={84}
                    className="h-16 w-auto max-w-[70%] object-contain"
                  />
                  <h3 className="text-center text-sm font-bold">{c.name}</h3>
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A8A8A]">
                    {c.tag}
                  </p>
                  <p className="mt-2 text-xs text-[#8A8A8A]">{c.desde ?? "Cliente activo"}</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-[#5C5C5C]">{c.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Videos de nuestras marcas ── */}
      <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-20 xl:px-8">
        <motion.p {...fadeUp()} className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5C5C5C]">
          Video
        </motion.p>
        <motion.h2 {...fadeUp(0.06)} className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Reels y videos para nuestras marcas
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="mt-3 max-w-[52ch] text-[13px] leading-relaxed text-[#5C5C5C]">
          Piezas audiovisuales reales, producidas y editadas por nuestro equipo.
        </motion.p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {conVideo.map((c, i) => (
            <motion.article
              key={c.video}
              {...fadeUp(Math.min(i * 0.05, 0.3))}
              className="overflow-hidden rounded border border-[#D9D9D9] bg-[#FFFFFF]"
            >
              <video
                controls
                preload="metadata"
                playsInline
                poster={c.poster}
                src={c.video}
                className="aspect-video w-full bg-[#0A0A0A] object-contain"
              />
              <div className="flex items-center justify-between gap-3 border-t border-[#D9D9D9] p-4">
                <p className="min-w-0 truncate text-[13px] font-semibold">{c.name}</p>
                <span className="shrink-0 rounded-full border border-[#D9D9D9] px-2.5 py-0.5 text-[11px] font-medium text-[#5C5C5C]">
                  {formatoVideo(c.video)}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── CTA WhatsApp ── */}
      <section className="mx-auto max-w-[1440px] px-4 pb-16 md:px-6 md:pb-24 xl:px-8">
        <motion.div {...fadeUp(0.1)} className="rounded border border-[#0A0A0A] p-10 text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            ¿Quieres que trabajemos juntos?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#5C5C5C]">
            Cuéntanos sobre tu marca y te damos una propuesta personalizada sin costo.
          </p>
          <a
            href={WHATSAPP}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] px-8 py-3.5 text-sm font-semibold text-[#FFFFFF]"
          >
            <WhatsappLogo size={16} weight="fill" />
            Empezar proyecto
          </a>
        </motion.div>
      </section>
    </main>
  );
}
