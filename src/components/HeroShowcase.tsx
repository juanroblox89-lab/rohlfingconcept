"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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
  logo?: string;
  video?: string;
};

/**
 * Escenario de reels: los videos reales de los clientes se pasan solos
 * (misma velocidad), con el logo arriba a la derecha y el nombre en blanco.
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

  // Rotación automática — misma velocidad para todos
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
    rawY.set(px * 8);
    rawX.set(-py * 6);
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
      {/* Escenario principal — marco vertical tipo reel */}
      <div
        className="relative"
        style={{ perspective: 1100 }}
        onMouseMove={onMove}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={onLeave}
      >
        <motion.div
          className={`relative overflow-hidden rounded-[26px] border border-white/12 bg-black shadow-[0_36px_90px_rgba(0,0,0,0.6)] ${
            compact ? "mx-auto aspect-[9/16] max-w-[270px]" : "mx-auto aspect-[9/16] w-full max-w-[330px]"
          }`}
          style={{
            rotateX: tiltable ? rotateX : 0,
            rotateY: tiltable ? rotateY : 0,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Reel activo (crossfade) */}
          <AnimatePresence initial={false}>
            <motion.div
              key={idx}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: EASE_OUT_EXPO }}
            >
              {actual.video ? (
                <video
                  key={actual.video}
                  src={actual.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="h-full w-full object-cover"
                />
              ) : (
                <Image
                  src={actual.cover}
                  alt={`Proyecto ${actual.name}`}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 768px) 90vw, 330px"
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/25" />

              {/* Logo del cliente — arriba a la derecha */}
              {actual.logo && (
                <Image
                  src={actual.logo}
                  alt=""
                  width={140}
                  height={56}
                  sizes="110px"
                  className="absolute right-3 top-3 h-9 w-auto max-w-[110px] object-contain drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                />
              )}

              {/* Nombre en blanco simple */}
              <p className="absolute bottom-4 left-4 text-base font-semibold leading-tight text-white drop-shadow-md">
                {actual.name}
              </p>

              {/* Contador 01 / 07 */}
              <span className="absolute bottom-4 right-3 rounded-full border border-white/20 bg-black/45 px-3 py-1 text-[11px] font-semibold tabular-nums text-white backdrop-blur-md">
                {String(idx + 1).padStart(2, "0")} / {String(clientes.length).padStart(2, "0")}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Barra de progreso de la diapositiva */}
          {!reduce && (
            <motion.div
              key={`bar-${idx}-${String(paused)}`}
              className="absolute left-0 top-0 z-10 h-[3px] bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: paused ? "0%" : "100%" }}
              transition={{ duration: 4.3, ease: "linear" }}
            />
          )}
        </motion.div>

        {/* Resplandor bajo el escenario */}
        <div
          className="pointer-events-none absolute -bottom-8 left-1/2 -z-10 h-14 w-[80%] -translate-x-1/2 rounded-full opacity-30 blur-2xl"
          style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 70%)" }}
        />
      </div>

      {/* Miniaturas para saltar de cliente */}
      <div className={`mt-4 flex gap-2 ${compact ? "justify-center" : "justify-center"}`}>
        {clientes.map((c, i) => (
          <button
            key={c.name}
            type="button"
            aria-label={`Ver ${c.name}`}
            aria-current={i === idx}
            onClick={() => setIdx(i)}
            className={`group relative h-11 w-[52px] flex-shrink-0 overflow-hidden rounded-lg border transition-all duration-300 sm:w-[58px] ${
              i === idx
                ? "border-accent shadow-[0_0_18px_rgba(37,99,235,0.45)]"
                : "border-border-2 opacity-55 hover:opacity-100"
            }`}
          >
            <Image
              src={c.cover}
              alt=""
              fill
              sizes="58px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
