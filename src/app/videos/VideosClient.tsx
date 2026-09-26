"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { WhatsappLogo, FilmSlate } from "@phosphor-icons/react";
import { fadeUp } from "@/lib/anim";

const CONECTORES = new Set(["de", "del", "la", "el", "los", "las", "y", "en", "para"]);

/** "tizon-dorado-dia-del-padre.mp4" -> "Tizón dorado día del padre" estilo título */
function prettyTitle(file: string) {
  return file
    .replace(/\.(mp4|webm|mov)$/i, "")
    .replace(/[-_]+/g, " ")
    .split(" ")
    .map((w, i) =>
      i > 0 && CONECTORES.has(w.toLowerCase())
        ? w.toLowerCase()
        : w.charAt(0).toUpperCase() + w.slice(1)
    )
    .join(" ");
}

export default function VideosClient({ files }: { files: string[] }) {
  const hasVideos = files.length > 0;
  // Orientación real de cada video (los reels verticales se muestran como 9:16)
  const [vertical, setVertical] = useState<Record<string, boolean>>({});
  // Poster real generado con ffmpeg desde cada video (public/img/posters/)
  const posterFor = (f: string) => `/img/posters/${f.replace(/\.(mp4|webm|mov)$/i, ".jpg")}`;

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#0A0A0A]">
      {/* ── Header tipográfico ── */}
      <section className="border-b border-[#D9D9D9]">
        <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 md:py-24 xl:px-8">
          <motion.p {...fadeUp()} className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5C5C5C]">
            Video — Rohlfing Concept
          </motion.p>
          <motion.h1 {...fadeUp(0.06)} className="mt-4 max-w-[16ch] font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Ediciones que se sienten, no solo se ven.
          </motion.h1>
          <motion.p {...fadeUp(0.12)} className="mt-5 max-w-[60ch] text-sm leading-relaxed text-[#5C5C5C]">
            Reels, piezas para redes y ediciones creadas por nuestro equipo. Así se ve
            trabajar con Rohlfing Concept.
          </motion.p>
        </div>
      </section>

      {/* ── Grid de videos ── */}
      <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-20 xl:px-8">
        {hasVideos ? (
          <div className="grid gap-5 md:grid-cols-2">
            {files.map((f, i) => (
              <motion.article
                key={f}
                {...fadeUp(Math.min(i * 0.05, 0.3))}
                className="overflow-hidden rounded border border-[#D9D9D9] bg-[#FFFFFF]"
              >
                <video
                  controls
                  preload="metadata"
                  playsInline
                  poster={posterFor(f)}
                  src={`/videos/${encodeURIComponent(f)}`}
                  onLoadedMetadata={(e) => {
                    const v = e.currentTarget;
                    if (v.videoHeight > v.videoWidth) setVertical((s) => ({ ...s, [f]: true }));
                  }}
                  className={
                    vertical[f]
                      ? "mx-auto aspect-[9/16] w-full max-w-[320px] bg-[#0A0A0A] object-contain"
                      : "aspect-video w-full bg-[#0A0A0A] object-contain"
                  }
                />
                <div className="flex items-center justify-between gap-3 border-t border-[#D9D9D9] p-4">
                  <h2 className="min-w-0 truncate text-[13px] font-semibold">{prettyTitle(f)}</h2>
                  {vertical[f] && (
                    <span className="shrink-0 rounded-full border border-[#D9D9D9] px-2.5 py-0.5 text-[11px] font-medium text-[#5C5C5C]">
                      Reel
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          /* Estado vacío — mientras suben los videos reales */
          <motion.div {...fadeUp()} className="mx-auto max-w-xl rounded border border-[#D9D9D9] bg-[#F4F4F4] p-10 text-center">
            <FilmSlate size={36} weight="duotone" className="mx-auto text-[#5C5C5C]" />
            <h2 className="mt-6 font-display text-xl font-bold">Estamos montando nuestras últimas ediciones</h2>
            <p className="mx-auto mt-3 max-w-md text-[13px] leading-relaxed text-[#5C5C5C]">
              Mientras tanto, escríbenos y te mostramos el portafolio completo de video
              directamente por WhatsApp.
            </p>
            <a
              href="https://wa.me/573242123300?text=Hola%2C%20quiero%20ver%20los%20videos%20que%20han%20editado."
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#0A0A0A] px-7 py-3.5 text-sm font-semibold text-[#FFFFFF]"
            >
              <WhatsappLogo size={16} weight="fill" />
              Ver portafolio de video
            </a>
          </motion.div>
        )}

        {/* ── CTA final — bloque negro sólido ── */}
        <motion.div {...fadeUp(0.1)} className="mt-14 rounded bg-[#0A0A0A] p-10 text-center text-[#FFFFFF]">
          <h2 className="font-display text-2xl font-bold tracking-tight">
            ¿Quieres una edición así para tu marca?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#F4F4F4]">
            Creamos contenido desde cero según la identidad de tu negocio.
          </p>
          <Link
            href="/servicios/edicion-de-video"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FFFFFF] px-7 py-3.5 text-sm font-semibold text-[#0A0A0A]"
          >
            Ver precios de edición de video
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
