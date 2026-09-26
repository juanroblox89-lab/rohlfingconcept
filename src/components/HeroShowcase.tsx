"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { EASE, fadeUp } from "@/lib/anim";

export type ClienteShowcase = {
  name: string;
  poster?: string;
  desde?: string;
  logo?: string;
  video?: string;
};

type Props = {
  clientes: ClienteShowcase[];
  compact?: boolean;
};

/**
 * Escenario de reels estilo Superqueso: videos reales de los clientes con
 * rotación automática, marco 9:16 con borde de tinta y sombra suave,
 * crossfade de 200ms y miniaturas con borde grueso.
 * Acepta tanto el array local como `clientes` de @/data/clientes.
 */
export default function HeroShowcase({ clientes, compact = false }: Props) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  // useReducedMotion es null en el servidor: solo se aplica tras el montaje
  // para no romper la hidratación (el HTML inicial debe coincidir).
  const reduce = useReducedMotion();
  // Sin estado sincronizado: el HTML inicial (SSR) y el primer render del
  // cliente coinciden (video si hay video). Solo tras el montaje aplicamos
  // la preferencia de movimiento reducido, cambiando a poster.
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);
  const reduceMotion = mounted && reduce;

  // Rotación automática — misma velocidad para todos
  useEffect(() => {
    if (paused || reduceMotion || clientes.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % clientes.length), 4300);
    return () => clearInterval(t);
  }, [paused, reduceMotion, clientes.length]);

  const actual = clientes[idx];

  return (
    <motion.div
      {...fadeUp()}
      className={compact ? "mx-auto w-full max-w-[270px]" : "mx-auto w-full max-w-[330px]"}
    >
      {/* Marco vertical tipo reel — 9:16, borde de tinta estilo Superqueso */}
      <div
        className="relative aspect-[9/16] w-full overflow-hidden rounded-[22px] border-[2.5px] border-[#0A0A0A] bg-[#F4F4F4] shadow-[0_10px_24px_rgba(10,10,10,0.12)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Reel activo (crossfade 200ms) */}
        <AnimatePresence initial={false}>
          <motion.div
            key={idx}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: EASE }}
          >
            {actual.video && !reduceMotion ? (
              <video
                key={actual.video}
                src={actual.video}
                poster={actual.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="h-full w-full object-cover"
              />
            ) : actual.poster ? (
              <Image
                src={actual.poster}
                alt={`Proyecto ${actual.name}`}
                fill
                priority={idx === 0}
                sizes="(max-width: 768px) 90vw, 330px"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#F4F4F4] p-6">
                {actual.logo ? (
                  <Image
                    src={actual.logo}
                    alt={`Logo de ${actual.name}`}
                    width={200}
                    height={100}
                    className="h-16 w-auto max-w-[80%] object-contain"
                  />
                ) : (
                  <span aria-hidden="true" className="font-display text-6xl font-black tracking-tight text-[#0A0A0A]">
                    {actual.name.charAt(0)}
                  </span>
                )}
                <p className="text-center text-sm font-semibold text-[#0A0A0A]">{actual.name}</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Contador — pill sólida */}
        <span className="absolute left-3 top-3 rounded-full bg-[#0A0A0A] px-3 py-1 text-[11px] font-semibold tabular-nums text-white">
          {String(idx + 1).padStart(2, "0")} / {String(clientes.length).padStart(2, "0")}
        </span>

        {/* Logo del cliente — arriba a la derecha, pastilla sólida */}
        {actual.logo && (
          <span className="absolute right-3 top-3 rounded border border-[#D9D9D9] bg-[#FFFFFF] px-2 py-1">
            <Image
              src={actual.logo}
              alt=""
              width={140}
              height={56}
              sizes="110px"
              className="h-9 w-auto max-w-[110px] object-contain"
            />
          </span>
        )}

        {/* Nombre — franja inferior sólida */}
        <div className="absolute inset-x-0 bottom-0 bg-[#0A0A0A] px-3 py-2">
          <p className="text-[13px] font-semibold leading-tight text-white">{actual.name}</p>
          {actual.desde && <p className="mt-0.5 text-xs text-white/70">{actual.desde}</p>}
        </div>
      </div>

      {/* Miniaturas para saltar de cliente */}
      <div className="mt-2 grid grid-cols-7 gap-1">
        {clientes.map((c, i) => (
          <button
            key={c.name}
            type="button"
            aria-label={`Ver ${c.name}`}
            aria-current={i === idx}
            onClick={() => setIdx(i)}
            className={`relative flex h-11 w-full items-center justify-center overflow-hidden rounded-[12px] border-2 bg-[#F4F4F4] transition-transform duration-200 ${
              i === idx ? "border-[#0A0A0A] shadow-[0_3px_0_#0A0A0A]" : "border-[#D9D9D9]"
            }`}
          >
            {c.poster ? (
              <Image
                src={c.poster}
                alt=""
                fill
                sizes="60px"
                className="object-cover"
              />
            ) : (
              <span aria-hidden="true" className="font-display text-lg font-black text-[#0A0A0A]">
                {c.name.charAt(0)}
              </span>
            )}
          </button>
        ))}
      </div>
    </motion.div>
  );
}
