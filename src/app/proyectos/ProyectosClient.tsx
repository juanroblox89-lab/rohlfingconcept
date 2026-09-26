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
      {/* ── Header compacto ── */}
      <section className="border-b-2 border-[#0A0A0A]">
        <div className="section-compact mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
          <motion.h1 {...fadeUp()} className="sq-title flex flex-wrap items-center gap-2">
            <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
            Trabajo real, marcas reales
          </motion.h1>
          <motion.p {...fadeUp(0.12)} className="mt-2 max-w-[60ch] text-[13px] leading-[1.5] text-[#5C5C5C]">
            Diseños, piezas para redes, branding y edición de video creados por
            nuestro equipo para negocios que confían en nosotros.
          </motion.p>
          <motion.div {...fadeUp(0.18)} className="mt-3 flex max-w-xl flex-wrap gap-2">
            {[
              { v: "+300", l: "Proyectos" },
              { v: "2.3M", l: "Visualizaciones" },
              { v: "7", l: "Marcas activas" },
            ].map((s) => (
              <div key={s.l} className="pill !text-[11px]">
                <strong className="font-display font-bold">{s.v}</strong> {s.l}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Galería de trabajos reales ── */}
      <section id="trabajos" className="section-compact mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
        <motion.div {...fadeUp()} className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 className="sq-title flex flex-wrap items-center gap-2">
              <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
              Nuestros trabajos
            </h2>
            <p className="mt-2 max-w-[52ch] text-[13px] leading-[1.5] text-[#5C5C5C]">
              Una selección de piezas reales: diseño, branding, edición y contenido para redes.
            </p>
          </div>
          <Link
            href="/videos"
            className="btn-secondary !py-2"
          >
            <PlayCircle size={16} weight="duotone" />
            Ediciones en video
          </Link>
        </motion.div>

        {/* Filtros pills con borde de tinta — scroll horizontal en móvil */}
        <motion.div
          {...fadeUp(0.06)}
          data-carousel="filtros"
          className="mt-3 flex max-w-full flex-nowrap gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
        >
          {filtros.map((f) => {
            const activo = filtro === f.key;
            const n = f.key === "Todos" ? obras.length : obras.filter((o) => o.cat === f.key).length;
            return (
              <motion.button
                key={f.key}
                onClick={() => setFiltro(f.key)}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.15, ease: EASE }}
                className={`pill shrink-0 cursor-pointer !normal-case !tracking-normal ${
                  activo
                    ? "!bg-[#0A0A0A] !text-white"
                    : ""
                }`}
              >
                {f.label}
                <span className={activo ? "text-white/70" : "text-[#8A8A8A]"}>{n}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Grid parejo 2 col móvil / 3-4 desktop — tarjeta baja: imagen 4:3 + pill */}
        <div className="sq-grid mt-3 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibles.map((o, i) => (
            <motion.figure
              key={o.src}
              {...fadeUp(Math.min(i * 0.04, 0.3))}
              className="card overflow-hidden !p-1.5 md:!p-2"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] bg-[#F4F4F4]">
                <Image
                  src={o.src}
                  alt={`${CAT_LABEL[o.cat]} — Rohlfing Concept`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-2 px-1.5 py-2 md:px-2">
                <span className="pill min-w-0 max-w-full truncate !text-[10px]">
                  {CAT_LABEL[o.cat]}
                </span>
                <span className="hidden shrink-0 text-[11px] text-[#8A8A8A] md:block">
                  {formatoPieza(o)}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* ── Marcas que confiaron en nosotros — banda negra ── */}
      <section className="band-dark">
        <div className="section-compact mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
          <motion.h2 {...fadeUp()} className="sq-title flex flex-wrap items-center gap-2">
            <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
            Marcas que confiaron en nosotros
          </motion.h2>
          <div className="sq-grid mt-3 grid-cols-2 lg:grid-cols-3">
            {clientes.map((c, i) => (
              <motion.article
                key={c.name}
                {...fadeUp(Math.min(i * 0.05, 0.3))}
                className="card overflow-hidden !p-2 md:!p-2.5"
              >
                <div className="flex aspect-[16/9] flex-col items-center justify-center gap-2 rounded-[14px] bg-[#F4F4F4] p-3 md:p-5">
                  <Image
                    src={c.logo}
                    alt={`Logo de ${c.name}`}
                    width={160}
                    height={84}
                    className="h-10 w-auto max-w-[70%] object-contain md:h-16"
                  />
                </div>
                <div className="flex items-center justify-center px-2 pb-1 pt-2 md:pt-3">
                  <span className="pill max-w-full truncate !text-[10px]">{c.name}</span>
                </div>
                <div className="px-2 pb-2 md:px-3 md:pb-3">
                  <p className="truncate text-center text-[10px] font-bold uppercase tracking-[0.12em] text-[#8A8A8A] md:text-[11px]">
                    {c.tag}
                  </p>
                  <p className="mt-1 line-clamp-2 text-center text-[13px] leading-[1.5] text-[#5C5C5C] md:line-clamp-none md:text-left">
                    {c.desc}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Videos de nuestras marcas ── */}
      <section className="section-compact mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
        <motion.h2 {...fadeUp()} className="sq-title flex flex-wrap items-center gap-2">
          <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
          Reels y videos
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="mt-2 max-w-[52ch] text-[13px] leading-[1.5] text-[#5C5C5C]">
          Piezas audiovisuales reales, producidas y editadas por nuestro equipo.
        </motion.p>
        <div className="sq-grid mt-3 grid-cols-2 lg:grid-cols-3">
          {conVideo.map((c, i) => (
            <motion.article
              key={c.video}
              {...fadeUp(Math.min(i * 0.05, 0.3))}
              className="card overflow-hidden !p-1.5 md:!p-2"
            >
              <video
                controls
                preload="metadata"
                playsInline
                poster={c.poster}
                src={c.video}
                className="aspect-video w-full rounded-[14px] bg-[#0A0A0A] object-contain"
              />
              <div className="flex flex-col items-start gap-1 px-1.5 py-2 md:flex-row md:items-center md:justify-between md:gap-2 md:px-2 md:py-3">
                <p className="min-w-0 w-full truncate text-[13px] font-bold leading-[1.5]">{c.name}</p>
                <span className="pill shrink-0 !text-[10px]">
                  {formatoVideo(c.video)}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ── CTA WhatsApp — banda negra ── */}
      <section className="band-dark">
        <div className="section-compact-sm mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
          <motion.div {...fadeUp(0.1)} className="mx-auto max-w-xl text-center">
            <h2 className="sq-title">
              ¿Quieres que trabajemos juntos?
            </h2>
            <p className="mx-auto mt-2 max-w-md text-[13px] leading-[1.5] text-white/85">
              Cuéntanos sobre tu marca y te damos una propuesta personalizada sin costo.
            </p>
            <a
              href={WHATSAPP}
              className="btn-primary mt-3"
            >
              <WhatsappLogo size={16} weight="fill" />
              Empezar proyecto
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
