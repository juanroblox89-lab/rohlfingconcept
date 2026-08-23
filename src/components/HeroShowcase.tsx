"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

// Tupla tipada requerida por motion (evita error TS2322 en build de producción)
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

export type ClienteShowcase = {
  name: string;
  cover: string;
  desde?: string;
};

/**
 * Escenario de proyectos: la portada activa rota sola entre los clientes
 * reales, se inclina siguiendo el cursor y salta con las miniaturas.
 */
export default function HeroShowcase({
  clientes,
  compact = false,
}: {
  clientes: ClienteShowcase[];
  compact?: boolean;
}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  // Inclinación 3D con inercia (solo escritorio, sin reduced-motion)
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(rawX, { stiffness: 130, damping: 18 });
  const rotateY = useSpring(rawY, { stiffness: 130, damping: 18 });

  // Rotación automática
  useEffect(() => {
    if (paused || reduce || clientes.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % clientes.length), 4300);
    return () => clearInterval(t);
  }, [paused, reduce, clientes.length]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce || compact) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rawY.set(px * 9);
    rawX.set(-py * 7);
  };
  const onLeave = () => {
    rawX.set(0);
    rawY.set(0);
    setPaused(false);
  };

  const actual = clientes[idx];
  const tiltable = !compact && !reduce;

  return (
    <div>
      {/* Escenario principal */}
      <div
        className="relative"
        style={{ perspective: 1100 }}
        onMouseMove={onMove}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={onLeave}
      >
        <motion.div
          className={`relative overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-[0_36px_90px_rgba(0,0,0,0.55)] ${
            compact ? "aspect-[16/10]" : "aspect-[4/3]"
          }`}
          style={{
            rotateX: tiltable ? rotateX : 0,
            rotateY: tiltable ? rotateY : 0,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Portada activa (crossfade) */}
          <AnimatePresence initial={false}>
            <motion.div
              key={idx}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.055 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
            >
              <Image
                src={actual.cover}
                alt={`Proyecto ${actual.name}`}
                fill
                priority={idx === 0}
                sizes={compact ? "(max-width: 768px) 92vw, 384px" : "(max-width: 1200px) 50vw, 540px"}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
              {/* Nombre + antigüedad del cliente (datos reales) */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <div>
                  <p className="text-base font-bold leading-tight text-white drop-shadow-md sm:text-lg">
                    {actual.name}
                  </p>
                  {actual.desde && (
                    <p className="mt-1 text-[11px] font-medium text-white/75">{actual.desde}</p>
                  )}
                </div>
                <span className="rounded-full border border-white/15 bg-background/80 px-3 py-1 text-[11px] font-semibold tabular-nums text-white backdrop-blur-md">
                  {String(idx + 1).padStart(2, "0")} / {String(clientes.length).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Barra de progreso de la diapositiva */}
          {!compact && !reduce && (
            <motion.div
              key={`bar-${idx}-${String(paused)}`}
              className="absolute left-0 top-0 z-10 h-[3px] bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: paused ? "0%" : "100%" }}
              transition={{ duration: 4.3, ease: "linear" }}
            />
          )}
        </motion.div>

        {/* Reflejo ambiental bajo el escenario */}
        <div
          className="pointer-events-none absolute -bottom-8 left-1/2 -z-10 h-14 w-[86%] -translate-x-1/2 rounded-full opacity-30 blur-2xl"
          style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 70%)" }}
        />
      </div>

      {/* Miniaturas para saltar de proyecto */}
      <div className={`mt-4 flex gap-2 ${compact ? "justify-center" : ""}`}>
        {clientes.map((c, i) => (
          <button
            key={c.name}
            type="button"
            aria-label={`Ver proyecto ${c.name}`}
            aria-current={i === idx}
            onClick={() => setIdx(i)}
            className={`group relative h-11 w-[64px] flex-shrink-0 overflow-hidden rounded-lg border transition-all duration-300 sm:w-[72px] ${
              i === idx
                ? "border-accent shadow-[0_0_18px_rgba(37,99,235,0.45)]"
                : "border-border-2 opacity-55 hover:opacity-100"
            }`}
          >
            <Image
              src={c.cover}
              alt=""
              fill
              sizes="72px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <span className="absolute inset-x-0 bottom-0 truncate bg-background/85 px-1.5 py-0.5 text-[8px] font-medium text-white/85">
              {c.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
