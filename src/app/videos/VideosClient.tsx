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
      {/* ── Header compacto ── */}
      <section className="border-b-2 border-[#0A0A0A]">
        <div className="section-compact-sm mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
          <motion.h1 {...fadeUp()} className="sq-title flex max-w-[16ch] flex-wrap items-center gap-2">
            <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
            Ediciones que se sienten
          </motion.h1>
          <motion.p {...fadeUp(0.12)} className="sq-sub mt-2 max-w-[60ch] text-[13px] leading-[1.5] text-[#5C5C5C]">
            Reels, piezas para redes y ediciones creadas por nuestro equipo. Así se ve
            trabajar con Rohlfing Concept.
          </motion.p>
        </div>
      </section>

      {/* ── Grid de videos ── */}
      <section className="section-compact mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
        {hasVideos ? (
          <div className="sq-grid md:grid-cols-2">
            {files.map((f, i) => (
              <motion.article
                key={f}
                {...fadeUp(Math.min(i * 0.05, 0.3))}
                className="card overflow-hidden !p-2"
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
                      ? "mx-auto aspect-[9/16] w-full max-w-[320px] rounded-[14px] bg-[#0A0A0A] object-contain"
                      : "aspect-video w-full rounded-[14px] bg-[#0A0A0A] object-contain"
                  }
                />
                <div className="flex items-center justify-between gap-3 px-2 py-3">
                  <h2 className="min-w-0 truncate text-[13px] font-bold">{prettyTitle(f)}</h2>
                  {vertical[f] && (
                    <span className="pill shrink-0 !text-[10px]">
                      Reel
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          /* Estado vacío — mientras suben los videos reales */
          <motion.div {...fadeUp()} className="card mx-auto max-w-xl p-8 text-center md:p-10">
            <FilmSlate size={36} weight="duotone" className="mx-auto text-[#5C5C5C]" />
            <h2 className="mt-5 font-display text-xl font-bold">Estamos montando nuestras últimas ediciones</h2>
            <p className="mx-auto mt-2 max-w-md text-[13px] leading-relaxed text-[#5C5C5C]">
              Mientras tanto, escríbenos y te mostramos el portafolio completo de video
              directamente por WhatsApp.
            </p>
            <a
              href="https://wa.me/573242123300?text=Hola%2C%20quiero%20ver%20los%20videos%20que%20han%20editado."
              className="btn-primary mt-6"
            >
              <WhatsappLogo size={16} weight="fill" />
              Ver portafolio de video
            </a>
          </motion.div>
        )}

        {/* ── CTA final — banda negra ── */}
        <motion.div {...fadeUp(0.1)} className="band-dark section-compact-sm mt-6 rounded-[14px] p-6 text-center md:p-10">
          <h2 className="sq-title">¿Quieres una edición así para tu marca?</h2>
          <p className="sq-sub mx-auto max-w-md text-[13px] leading-[1.5] text-white/85">
            Creamos contenido desde cero según la identidad de tu negocio.
          </p>
          <Link
            href="/servicios/edicion-de-video"
            className="btn-primary mt-6"
          >
            Ver precios de edición de video
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
