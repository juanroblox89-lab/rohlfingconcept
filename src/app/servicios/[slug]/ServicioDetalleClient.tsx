"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, ArrowLeft, Check, WhatsappLogo } from "@phosphor-icons/react";
import { waLink, videoData, type Servicio, type Bloque, type Plan } from "@/data/services";
import { compromiso, COMPROMISO_INTRO } from "@/data/services";
import { paquetesTelevision } from "@/data/paquetes";
import { fadeUp } from "@/lib/anim";

const ALCANCES_GRABACION = [
  "Grabación en locación",
  "Reels",
  "Contenido para marcas",
  "Entrevistas",
  "Eventos",
];

const GRABACION_WA =
  "https://wa.me/573242123300?text=" +
  encodeURIComponent("Hola Rohlfing Concept, quiero cotizar una grabación de video para mi marca.");

/* ───────────────────────── Tarjeta de plan ───────────────────────── */
function PlanCard({ plan, i }: { plan: Plan; i: number }) {
  return (
    <motion.div
      {...fadeUp(i * 0.05)}
      className="flex flex-col rounded border border-[#D9D9D9] bg-white p-6 transition-colors duration-200 hover:border-[#0A0A0A]"
    >
      <h3 className="font-display text-base font-bold tracking-tight text-[#0A0A0A]">
        {plan.nombre}
      </h3>
      <p className="mt-3 font-display text-3xl font-black tracking-tight text-[#0A0A0A]">
        {plan.precio}
      </p>
      {plan.tagline && (
        <p className="mt-2 text-[13px] leading-relaxed text-[#5C5C5C]">{plan.tagline}</p>
      )}
      <div className="my-5 h-px bg-[#E9E9E9]" />
      <ul className="flex-1 space-y-2.5">
        {plan.items.map((it) => (
          <li key={it.t} className="text-[13px] leading-snug text-[#0A0A0A]">
            <span className="flex items-start gap-2 font-medium">
              <Check size={14} weight="bold" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
              {it.t}
            </span>
            {it.d && (
              <span className="mt-0.5 block pl-6 text-xs leading-relaxed text-[#5C5C5C]">
                {it.d}
              </span>
            )}
          </li>
        ))}
      </ul>
      <a
        href={waLink(`Hola Rohlfing Concept, me interesa el ${plan.nombre} de ${plan.precio}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 flex h-10 items-center justify-center gap-2 rounded-full border border-[#D9D9D9] bg-white px-5 text-[13px] font-semibold text-[#0A0A0A] transition-colors duration-200 hover:border-[#0A0A0A] hover:bg-[#F4F4F4] md:h-9"
      >
        <WhatsappLogo size={15} weight="fill" />
        Solicitar este plan
      </a>
    </motion.div>
  );
}

/* ───────────────────── Bloques por tipo ───────────────────── */
function BloqueRenderer({ bloque }: { bloque: Bloque }) {
  /* --- Grid de planes --- */
  if (bloque.tipo === "planes") {
    return (
      <div>
        <h2 className="font-display text-xl font-black tracking-tight text-[#0A0A0A] md:text-2xl">
          {bloque.titulo}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bloque.planes.map((p, i) => (
            <PlanCard key={p.nombre} plan={p} i={i} />
          ))}
        </div>
      </div>
    );
  }

  /* --- Lista etiqueta → precio --- */
  if (bloque.tipo === "elementos") {
    return (
      <div>
        <h2 className="font-display text-xl font-black tracking-tight text-[#0A0A0A] md:text-2xl">
          {bloque.titulo}
        </h2>
        <motion.div
          {...fadeUp()}
          className="mt-6 overflow-hidden rounded border border-[#D9D9D9] bg-white"
        >
          {bloque.elementos.map((el, i) => (
            <div
              key={el.label}
              className={`flex items-center justify-between gap-6 px-5 py-4 ${
                i > 0 ? "border-t border-[#E9E9E9]" : ""
              }`}
            >
              <span className="text-[13px] font-medium text-[#0A0A0A]">{el.label}</span>
              <span className="shrink-0 text-[13px] font-bold text-[#0A0A0A]">{el.precio}</span>
            </div>
          ))}
        </motion.div>
      </div>
    );
  }

  /* --- Tabla de edición de video --- */
  if (bloque.tipo === "video") {
    return (
      <div>
        <h2 className="font-display text-xl font-black tracking-tight text-[#0A0A0A] md:text-2xl">
          {bloque.titulo}
        </h2>

        {/* Matriz de precios — escritorio */}
        <motion.div
          {...fadeUp()}
          className="mt-6 hidden overflow-x-auto rounded border border-[#D9D9D9] bg-white md:block"
        >
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-[#E9E9E9] bg-[#F4F4F4]">
                <th className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5C5C5C]">
                  Tiempo del video
                </th>
                {videoData.niveles.map((n) => (
                  <th
                    key={n.nombre}
                    className="px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5C5C5C]"
                  >
                    {n.nombre.replace("Edición ", "")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {videoData.duraciones.map((dur, ri) => (
                <tr key={dur} className={ri > 0 ? "border-t border-[#E9E9E9]" : ""}>
                  <td className="px-5 py-3.5 text-[13px] font-medium text-[#5C5C5C]">{dur}</td>
                  {videoData.niveles.map((n) => (
                    <td key={n.nombre} className="px-5 py-3.5 text-[13px] font-bold text-[#0A0A0A]">
                      {n.precios[ri]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Móvil: una tarjeta compacta por nivel */}
        <motion.div {...fadeUp(0.05)} className="mt-6 space-y-4 md:hidden">
          {videoData.niveles.map((n) => (
            <div key={n.nombre} className="rounded border border-[#D9D9D9] bg-white p-5">
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-[#0A0A0A]">
                {n.nombre}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {videoData.duraciones.map((dur, ri) => (
                  <li key={dur} className="flex items-center justify-between gap-4 text-[13px]">
                    <span className="text-[#5C5C5C]">{dur}</span>
                    <span className="shrink-0 font-bold text-[#0A0A0A]">{n.precios[ri]}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 border-t border-[#E9E9E9] pt-3 text-xs text-[#5C5C5C]">
                {n.extra.valor} — {n.extra.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Detalle de cada nivel */}
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {videoData.niveles.map((n, i) => (
            <motion.div
              key={n.nombre}
              {...fadeUp(i * 0.05)}
              className="flex flex-col rounded border border-[#D9D9D9] bg-white p-6"
            >
              <h3 className="font-display text-lg font-bold tracking-tight text-[#0A0A0A]">
                {n.nombre}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#5C5C5C]">{n.desc}</p>
              <ul className="mt-5 flex-1 space-y-3">
                {n.incluye.map((it) => (
                  <li key={it.t} className="text-[13px] leading-snug text-[#0A0A0A]">
                    <span className="flex items-start gap-2 font-medium">
                      <Check size={14} weight="bold" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
                      {it.t}
                    </span>
                    {it.d && (
                      <span className="mt-0.5 block pl-6 text-xs leading-relaxed text-[#5C5C5C]">
                        {it.d}
                      </span>
                    )}
                  </li>
                ))}
                <li className="text-[13px] leading-snug text-[#0A0A0A]">
                  <span className="flex items-start gap-2 font-medium">
                    <Check size={14} weight="bold" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
                    {n.extra.label}
                    <span className="font-bold">({n.extra.valor})</span>
                  </span>
                  {"desc" in n.extra && n.extra.desc && (
                    <span className="mt-0.5 block pl-6 text-xs leading-relaxed text-[#5C5C5C]">
                      {n.extra.desc}
                    </span>
                  )}
                </li>
              </ul>
              <p className="mt-6 border-l-2 border-[#0A0A0A] pl-4 text-xs italic leading-relaxed text-[#5C5C5C]">
                {n.nota}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  /* --- Servicios con precio individual --- */
  if (bloque.tipo === "itemsPrecio") {
    return (
      <div>
        <h2 className="font-display text-xl font-black tracking-tight text-[#0A0A0A] md:text-2xl">
          {bloque.titulo}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bloque.items.map((it, i) => (
            <motion.div
              key={it.nombre}
              {...fadeUp(i * 0.05)}
              className="flex flex-col rounded border border-[#D9D9D9] bg-white p-6 transition-colors duration-200 hover:border-[#0A0A0A]"
            >
              <h3 className="font-display text-base font-bold tracking-tight text-[#0A0A0A]">
                {it.nombre}
              </h3>
              {it.desc && (
                <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-[#5C5C5C]">{it.desc}</p>
              )}
              {it.precio && (
                <p className="mt-5 font-display text-2xl font-black tracking-tight text-[#0A0A0A]">
                  {it.precio}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  /* --- Packs --- */
  if (bloque.tipo === "packs") {
    return (
      <div>
        <h2 className="font-display text-xl font-black tracking-tight text-[#0A0A0A] md:text-2xl">
          {bloque.titulo}
        </h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {bloque.packs.map((pk, i) => (
            <motion.div
              key={pk.nombre}
              {...fadeUp(i * 0.05)}
              className="flex flex-col rounded border border-[#D9D9D9] bg-white p-6 transition-colors duration-200 hover:border-[#0A0A0A]"
            >
              <h3 className="font-display text-base font-bold tracking-tight text-[#0A0A0A]">
                {pk.nombre}
              </h3>
              <p className="mt-3 font-display text-3xl font-black tracking-tight text-[#0A0A0A]">
                {pk.precio}
              </p>
              <div className="my-5 h-px bg-[#E9E9E9]" />
              <ul className="flex-1 space-y-2.5">
                {pk.incluye.map((x) => (
                  <li key={x} className="flex items-start gap-2 text-[13px] leading-snug text-[#0A0A0A]">
                    <Check size={14} weight="bold" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
                    {x}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hola Rohlfing Concept, me interesa el ${pk.nombre} (${pk.precio}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 flex h-10 items-center justify-center gap-2 rounded-full border border-[#D9D9D9] bg-white px-5 text-[13px] font-semibold text-[#0A0A0A] transition-colors duration-200 hover:border-[#0A0A0A] hover:bg-[#F4F4F4] md:h-9"
              >
                <WhatsappLogo size={15} weight="fill" />
                Solicitar
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  /* --- Servicio único --- */
  if (bloque.tipo === "unico") {
    return (
      <div>
        <h2 className="font-display text-xl font-black tracking-tight text-[#0A0A0A] md:text-2xl">
          {bloque.titulo}
        </h2>
        <motion.div
          {...fadeUp()}
          className="mx-auto mt-6 max-w-2xl rounded border border-[#D9D9D9] bg-white p-8 text-center md:p-10"
        >
          <p className="font-display text-5xl font-black tracking-tight text-[#0A0A0A]">
            {bloque.precio}
          </p>
          <p className="mt-2 text-[13px] text-[#8A8A8A]">por pieza</p>
          <div className="my-7 h-px bg-[#E9E9E9]" />
          <ul className="space-y-3 text-left">
            {bloque.incluye.map((x: string) => (
              <li key={x} className="flex items-start gap-2.5 text-[13px] leading-snug text-[#0A0A0A]">
                <Check size={15} weight="bold" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
                {x}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A8A8A]">
            Tipos de piezas
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {bloque.tipos.map((t: string) => (
              <span
                key={t}
                className="rounded-full border border-[#D9D9D9] bg-white px-4 py-1.5 text-xs font-medium text-[#5C5C5C]"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={waLink(`Hola Rohlfing Concept, quiero solicitar un diseño (${bloque.precio}).`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 w-full sm:w-auto"
          >
            <WhatsappLogo size={16} weight="fill" />
            Solicitar ahora
          </a>
        </motion.div>
      </div>
    );
  }

  /* --- Nota informativa: tarjeta sólida negra --- */
  if (bloque.tipo === "nota") {
    return (
      <motion.div {...fadeUp()} className="rounded bg-[#0A0A0A] p-8 text-center md:p-10">
        <h2 className="font-display text-xl font-black tracking-tight text-[#FFFFFF] md:text-2xl">
          {bloque.titulo}
        </h2>
        <p className="mx-auto mt-3 max-w-[52ch] text-[13px] leading-relaxed text-[#FFFFFF]">
          {bloque.texto}
        </p>
        <a
          href={waLink(`Hola Rohlfing Concept, ${bloque.titulo}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex h-10 items-center gap-2 rounded-full bg-[#FFFFFF] px-7 text-[13px] font-semibold text-[#0A0A0A] transition-colors duration-200 hover:bg-[#E9E9E9] md:h-9"
        >
          <WhatsappLogo size={16} weight="fill" />
          Preguntar por WhatsApp
        </a>
      </motion.div>
    );
  }

  return null;
}

/* ───────────────────────── Página completa ───────────────────────── */
export default function ServicioDetalleClient({
  servicio,
  otros,
}: {
  servicio: Servicio;
  otros: Servicio[];
}) {
  return (
    <main className="min-h-screen bg-white text-[#0A0A0A]">
      {/* Header del servicio */}
      <section className="border-b border-[#D9D9D9]">
        <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-20 xl:px-8">
          <motion.div {...fadeUp()}>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#5C5C5C] transition-colors duration-200 hover:text-[#0A0A0A]"
            >
              <ArrowLeft size={14} />
              Todos los servicios
            </Link>
          </motion.div>
          <motion.p {...fadeUp(0.05)} className="kicker mt-7">
            {servicio.kicker}
          </motion.p>
          <motion.h1
            {...fadeUp(0.08)}
            className="mt-3 font-display text-4xl font-black tracking-tight md:text-6xl"
          >
            {servicio.nombre}
          </motion.h1>
          <motion.p
            {...fadeUp(0.12)}
            className="mt-5 max-w-[62ch] text-[13px] leading-relaxed text-[#5C5C5C] md:text-sm"
          >
            {servicio.intro}
          </motion.p>
          <motion.div {...fadeUp(0.16)}>
            <a
              href={waLink(`Hola Rohlfing Concept, quiero cotizar: ${servicio.nombre}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              <WhatsappLogo size={16} weight="fill" />
              Cotizar {servicio.nombre.toLowerCase()} — desde {servicio.desde}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bloques de contenido */}
      <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-20 xl:px-8">
        <div className="space-y-14 md:space-y-20">
          {servicio.bloques.map((b, i) => (
            <BloqueRenderer key={i} bloque={b} />
          ))}
        </div>

        {/* Sección especial: pautas en televisión (packs desde paquetes.ts) */}
        {servicio.slug === "pautas-en-television" && (
          <div className="mt-14 md:mt-20">
            <h2 className="font-display text-xl font-black tracking-tight text-[#0A0A0A] md:text-2xl">
              Packs de televisión
            </h2>
            <p className="mt-3 max-w-[62ch] text-[13px] leading-relaxed text-[#5C5C5C] md:text-sm">
              Transmisión en Mi Canal, televisión regional.
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {paquetesTelevision.map((pk, i) => (
                <motion.div
                  key={pk.nombre}
                  {...fadeUp(i * 0.05)}
                  className="flex flex-col rounded border border-[#D9D9D9] bg-white p-6"
                >
                  <h3 className="font-display text-base font-bold tracking-tight text-[#0A0A0A]">
                    {pk.nombre}
                  </h3>
                  <p className="mt-3 font-display text-3xl font-black tracking-tight text-[#0A0A0A]">
                    {pk.precio}
                  </p>
                  <div className="my-5 h-px bg-[#E9E9E9]" />
                  <ul className="flex-1 space-y-2.5">
                    {pk.incluye.map((x) => (
                      <li key={x} className="flex items-start gap-2 text-[13px] leading-snug text-[#0A0A0A]">
                        <Check size={14} weight="bold" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(`Hola Rohlfing Concept, me interesa el ${pk.nombre} (${pk.precio}) de televisión.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 flex h-10 items-center justify-center gap-2 rounded-full bg-[#0A0A0A] px-5 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#5C5C5C] md:h-9"
                  >
                    <WhatsappLogo size={15} weight="fill" />
                    Solicitar
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Sección especial: grabación de video */}
        {servicio.slug === "grabacion-de-video" && (
          <div className="mt-14 md:mt-20">
            <h2 className="font-display text-xl font-black tracking-tight text-[#0A0A0A] md:text-2xl">
              Alcances
            </h2>
            <motion.div {...fadeUp()} className="mt-6 overflow-hidden rounded border border-[#D9D9D9] bg-white">
              {ALCANCES_GRABACION.map((a, i) => (
                <div
                  key={a}
                  className={`flex items-center gap-3 px-5 py-4 ${
                    i > 0 ? "border-t border-[#E9E9E9]" : ""
                  }`}
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#0A0A0A]" aria-hidden="true" />
                  <span className="text-[13px] font-medium text-[#0A0A0A]">{a}</span>
                </div>
              ))}
            </motion.div>
            <motion.div
              {...fadeUp(0.05)}
              className="mt-4 rounded bg-[#0A0A0A] p-8 text-center md:p-10"
            >
              <h3 className="font-display text-xl font-black tracking-tight text-[#FFFFFF]">
                Cotiza según tu proyecto
              </h3>
              <p className="mx-auto mt-3 max-w-[52ch] text-[13px] leading-relaxed text-[#FFFFFF]">
                Cuéntanos tu idea por WhatsApp y te cotizamos según locación, duración y formato.
              </p>
              <a
                href={GRABACION_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex h-10 items-center gap-2 rounded-full bg-[#FFFFFF] px-7 text-[13px] font-semibold text-[#0A0A0A] transition-colors duration-200 hover:bg-[#E9E9E9] md:h-9"
              >
                <WhatsappLogo size={16} weight="fill" />
                Cotizar grabación
              </a>
            </motion.div>
            <motion.div {...fadeUp(0.08)} className="card mt-4 p-6 md:p-8">
              <h3 className="font-display text-lg font-bold tracking-tight text-[#0A0A0A]">
                Equipos propios
              </h3>
              <p className="mt-2 max-w-[64ch] text-[13px] leading-relaxed text-[#5C5C5C]">
                {COMPROMISO_INTRO}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {compromiso.equipos.map((e) => (
                  <li
                    key={e}
                    className="rounded-full border border-[#D9D9D9] bg-[#FFFFFF] px-4 py-1.5 text-xs font-medium text-[#0A0A0A]"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}

        {/* CTA final */}
        <motion.div {...fadeUp(0.1)} className="card mt-14 p-8 text-center md:mt-20 md:p-12">
          <h2 className="font-display text-2xl font-black tracking-tight md:text-3xl">
            ¿Listo para empezar?
          </h2>
          <p className="mx-auto mt-3 max-w-[52ch] text-[13px] leading-relaxed text-[#5C5C5C]">
            Escríbenos por WhatsApp y transformemos tu material o tu idea en algo más profesional.
          </p>
          <a
            href={waLink(`Hola Rohlfing Concept, quiero iniciar un proyecto de ${servicio.nombre}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-7"
          >
            <WhatsappLogo size={16} weight="fill" />
            Escribir por WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Otros servicios */}
      <section className="border-t border-[#D9D9D9] bg-[#F4F4F4]">
        <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-16 xl:px-8">
          <h2 className="kicker">Otros servicios</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otros.map((s, i) => (
              <motion.div key={s.slug} {...fadeUp(i * 0.04)}>
                <Link
                  href={`/servicios/${s.slug}`}
                  className="group flex items-center justify-between gap-4 rounded border border-[#D9D9D9] bg-white px-5 py-4 transition-colors duration-200 hover:border-[#0A0A0A]"
                >
                  <span className="min-w-0">
                    <span className="block truncate text-[13px] font-semibold text-[#0A0A0A]">
                      {s.nombre}
                    </span>
                    <span className="mt-0.5 block text-xs text-[#8A8A8A]">desde {s.desde}</span>
                  </span>
                  <ArrowRight
                    size={15}
                    className="shrink-0 text-[#0A0A0A] transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
