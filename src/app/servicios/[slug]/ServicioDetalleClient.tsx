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
      className="card flex flex-col p-3 md:p-4"
    >
      <h3 className="font-display text-[13px] font-bold leading-[1.4] tracking-tight text-[#0A0A0A] md:text-base">
        {plan.nombre}
      </h3>
      <p className="mt-1.5 font-display text-2xl font-black tracking-tight text-[#0A0A0A] md:text-3xl">
        {plan.precio}
      </p>
      {plan.tagline && (
        <p className="mt-1.5 text-[13px] leading-[1.5] text-[#5C5C5C]">{plan.tagline}</p>
      )}
      <div className="my-3 h-px bg-[#E9E9E9] md:my-4" />
      <ul className="flex-1 space-y-1.5 md:space-y-2.5">
        {plan.items.map((it) => (
          <li key={it.t} className="text-[13px] leading-[1.5] text-[#0A0A0A]">
            <span className="flex items-start gap-2 font-medium">
              <Check size={14} weight="bold" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
              {it.t}
            </span>
            {it.d && (
              <span className="mt-0.5 block pl-6 text-[13px] leading-[1.5] text-[#5C5C5C]">
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
        className="btn-secondary mt-3 w-full !whitespace-normal !px-2 text-center !leading-[1.3] md:mt-4"
      >
        <span className="hidden sm:inline-flex" aria-hidden="true">
          <WhatsappLogo size={15} weight="fill" />
        </span>
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
        <h2 className="sq-title flex flex-wrap items-center gap-2">
          <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
          {bloque.titulo}
        </h2>
        <div className="sq-grid mt-3 grid-cols-2 lg:grid-cols-3">
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
        <h2 className="sq-title flex flex-wrap items-center gap-2">
          <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
          {bloque.titulo}
        </h2>
        <motion.div
          {...fadeUp()}
          className="card mt-3 overflow-hidden !p-0"
        >
          {bloque.elementos.map((el, i) => (
            <div
              key={el.label}
              className={`flex items-center justify-between gap-3 px-3 py-2.5 md:gap-6 md:px-5 md:py-4 ${
                i > 0 ? "border-t border-[#E9E9E9]" : ""
              }`}
            >
              <span className="text-[13px] font-medium leading-[1.5] text-[#0A0A0A]">{el.label}</span>
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
        <h2 className="sq-title flex flex-wrap items-center gap-2">
          <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
          {bloque.titulo}
        </h2>

        {/* Matriz de precios — escritorio */}
        <motion.div
          {...fadeUp()}
          className="card mt-3 hidden overflow-x-auto !p-0 md:block"
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
        <motion.div {...fadeUp(0.05)} className="sq-grid mt-3 md:hidden">
          {videoData.niveles.map((n) => (
            <div key={n.nombre} className="card !rounded-[14px] !shadow-[0_6px_16px_rgba(10,10,10,0.08)] p-3">
              <h3 className="font-display text-[13px] font-bold uppercase tracking-wide text-[#0A0A0A]">
                {n.nombre}
              </h3>
              <ul className="mt-2 space-y-1.5">
                {videoData.duraciones.map((dur, ri) => (
                  <li key={dur} className="flex items-center justify-between gap-3 text-[13px] leading-[1.5]">
                    <span className="text-[#5C5C5C]">{dur}</span>
                    <span className="shrink-0 font-bold text-[#0A0A0A]">{n.precios[ri]}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-2 border-t border-[#E9E9E9] pt-2 text-[13px] leading-[1.5] text-[#5C5C5C]">
                {n.extra.valor} — {n.extra.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Detalle de cada nivel */}
        <div className="sq-grid mt-4 sm:grid-cols-2 lg:grid-cols-3">
          {videoData.niveles.map((n, i) => (
            <motion.div
              key={n.nombre}
              {...fadeUp(i * 0.05)}
              className="card flex flex-col p-3 md:p-4"
            >
              <h3 className="font-display text-base font-bold tracking-tight text-[#0A0A0A] md:text-lg">
                {n.nombre}
              </h3>
              <p className="mt-1.5 text-[13px] leading-[1.5] text-[#5C5C5C]">{n.desc}</p>
              <ul className="mt-3 flex-1 space-y-2 md:mt-4 md:space-y-3">
                {n.incluye.map((it) => (
                  <li key={it.t} className="text-[13px] leading-[1.5] text-[#0A0A0A]">
                    <span className="flex items-start gap-2 font-medium">
                      <Check size={14} weight="bold" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
                      {it.t}
                    </span>
                    {it.d && (
                      <span className="mt-0.5 block pl-6 text-[13px] leading-[1.5] text-[#5C5C5C]">
                        {it.d}
                      </span>
                    )}
                  </li>
                ))}
                <li className="text-[13px] leading-[1.5] text-[#0A0A0A]">
                  <span className="flex items-start gap-2 font-medium">
                    <Check size={14} weight="bold" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
                    {n.extra.label}
                    <span className="font-bold">({n.extra.valor})</span>
                  </span>
                  {"desc" in n.extra && n.extra.desc && (
                    <span className="mt-0.5 block pl-6 text-[13px] leading-[1.5] text-[#5C5C5C]">
                      {n.extra.desc}
                    </span>
                  )}
                </li>
              </ul>
              <p className="mt-3 border-l-2 border-[#0A0A0A] pl-3 text-[13px] italic leading-[1.5] text-[#5C5C5C] md:mt-4">
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
        <h2 className="sq-title flex flex-wrap items-center gap-2">
          <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
          {bloque.titulo}
        </h2>
        <div className="sq-grid mt-3 grid-cols-2 lg:grid-cols-3">
          {bloque.items.map((it, i) => (
            <motion.div
              key={it.nombre}
              {...fadeUp(i * 0.05)}
              className="card flex flex-col p-3 md:p-4"
            >
              <h3 className="font-display text-[13px] font-bold leading-[1.4] tracking-tight text-[#0A0A0A] md:text-base">
                {it.nombre}
              </h3>
              {it.desc && (
                <p className="mt-1.5 flex-1 text-[13px] leading-[1.5] text-[#5C5C5C]">{it.desc}</p>
              )}
              {it.precio && (
                <p className="mt-3 font-display text-xl font-black tracking-tight text-[#0A0A0A] md:mt-4 md:text-2xl">
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
        <h2 className="sq-title flex flex-wrap items-center gap-2">
          <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
          {bloque.titulo}
        </h2>
        <div className="sq-grid mt-3 grid-cols-2 lg:grid-cols-3">
          {bloque.packs.map((pk, i) => (
            <motion.div
              key={pk.nombre}
              {...fadeUp(i * 0.05)}
              className="card flex flex-col p-3 md:p-4"
            >
              <h3 className="font-display text-[13px] font-bold leading-[1.4] tracking-tight text-[#0A0A0A] md:text-base">
                {pk.nombre}
              </h3>
              <p className="mt-1.5 font-display text-2xl font-black tracking-tight text-[#0A0A0A] md:text-3xl">
                {pk.precio}
              </p>
              <div className="my-3 h-px bg-[#E9E9E9] md:my-4" />
              <ul className="flex-1 space-y-1.5 md:space-y-2.5">
                {pk.incluye.map((x) => (
                  <li key={x} className="flex items-start gap-2 text-[13px] leading-[1.5] text-[#0A0A0A]">
                    <Check size={14} weight="bold" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
                    {x}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Hola Rohlfing Concept, me interesa el ${pk.nombre} (${pk.precio}).`)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary mt-3 w-full !whitespace-normal !px-2 text-center !leading-[1.3] md:mt-4"
              >
                <span className="hidden sm:inline-flex" aria-hidden="true">
                  <WhatsappLogo size={15} weight="fill" />
                </span>
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
        <h2 className="sq-title flex flex-wrap items-center gap-2">
          <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
          {bloque.titulo}
        </h2>
        <motion.div
          {...fadeUp()}
          className="card mx-auto mt-3 max-w-2xl p-4 text-center md:p-6"
        >
          <p className="font-display text-3xl font-bold tracking-tight text-[#0A0A0A] md:text-4xl">
            {bloque.precio}
          </p>
          <p className="mt-1 text-[13px] text-[#8A8A8A]">por pieza</p>
          <div className="line-fade my-4" />
          <ul className="space-y-2 text-left">
            {bloque.incluye.map((x: string) => (
              <li key={x} className="flex items-start gap-2 text-[13px] leading-[1.5] text-[#0A0A0A]">
                <Check size={15} weight="bold" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
                {x}
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <span className="pill !text-[10px]">Tipos de piezas</span>
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {bloque.tipos.map((t: string) => (
              <span
                key={t}
                className="pill !text-[10px] !normal-case !tracking-normal"
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={waLink(`Hola Rohlfing Concept, quiero solicitar un diseño (${bloque.precio}).`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 w-full sm:w-auto"
          >
            <WhatsappLogo size={16} weight="fill" />
            Solicitar ahora
          </a>
        </motion.div>
      </div>
    );
  }

  /* --- Nota informativa: banda negra --- */
  if (bloque.tipo === "nota") {
    return (
      <motion.div {...fadeUp()} className="band-dark rounded-[14px] p-5 text-center md:p-6">
        <h2 className="sq-title">
          {bloque.titulo}
        </h2>
        <p className="mx-auto mt-2 max-w-[52ch] text-[13px] leading-[1.5] text-white/85">
          {bloque.texto}
        </p>
        <a
          href={waLink(`Hola Rohlfing Concept, ${bloque.titulo}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-3"
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
      <section className="border-b-2 border-[#0A0A0A]">
        <div className="section-compact mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
          <motion.div {...fadeUp()}>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#5C5C5C] transition-colors duration-200 hover:text-[#0A0A0A]"
            >
              <ArrowLeft size={14} />
              Todos los servicios
            </Link>
          </motion.div>
          <motion.p {...fadeUp(0.05)} className="mt-3">
            <span className="pill !text-[10px]">{servicio.kicker}</span>
          </motion.p>
          <motion.h1
            {...fadeUp(0.08)}
            className="sq-title mt-2"
          >
            {servicio.nombre}
          </motion.h1>
          <motion.p
            {...fadeUp(0.12)}
            className="mt-2 max-w-[62ch] text-[13px] leading-[1.5] text-[#5C5C5C]"
          >
            {servicio.intro}
          </motion.p>
          <motion.div {...fadeUp(0.16)} className="mt-3">
            <a
              href={waLink(`Hola Rohlfing Concept, quiero cotizar: ${servicio.nombre}.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsappLogo size={16} weight="fill" />
              Cotizar {servicio.nombre.toLowerCase()} — desde {servicio.desde}
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bloques de contenido */}
      <div className="section-compact mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
        <div className="space-y-6 md:space-y-8">
          {servicio.bloques.map((b, i) => (
            <BloqueRenderer key={i} bloque={b} />
          ))}
        </div>

        {/* Sección especial: pautas en televisión (packs desde paquetes.ts) */}
        {servicio.slug === "pautas-en-television" && (
          <div className="mt-6 md:mt-8">
            <h2 className="sq-title flex flex-wrap items-center gap-2">
              <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
              Packs de televisión
            </h2>
            <p className="mt-2 max-w-[62ch] text-[13px] leading-[1.5] text-[#5C5C5C]">
              Transmisión en Mi Canal, televisión regional.
            </p>
            <div className="sq-grid mt-3 grid-cols-2 lg:grid-cols-3">
              {paquetesTelevision.map((pk, i) => (
                <motion.div
                  key={pk.nombre}
                  {...fadeUp(i * 0.05)}
                  className="card flex flex-col p-3 md:p-4"
                >
                  <p><span className="pill !text-[10px]">{pk.nombre}</span></p>
                  <p className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#0A0A0A] md:text-3xl">
                    {pk.precio}
                  </p>
                  <div className="line-fade my-3" />
                  <ul className="flex-1 space-y-1.5 md:space-y-2.5">
                    {pk.incluye.map((x) => (
                      <li key={x} className="flex items-start gap-2 text-[13px] leading-[1.5] text-[#0A0A0A]">
                        <Check size={14} weight="bold" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
                        {x}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(`Hola Rohlfing Concept, me interesa el ${pk.nombre} (${pk.precio}) de televisión.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-3 w-full !whitespace-normal !px-2 text-center !leading-[1.3] md:mt-4"
                  >
                    <span className="hidden sm:inline-flex" aria-hidden="true">
                      <WhatsappLogo size={15} weight="fill" />
                    </span>
                    Solicitar
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Sección especial: grabación de video */}
        {servicio.slug === "grabacion-de-video" && (
          <div className="mt-6 md:mt-8">
            <h2 className="sq-title flex flex-wrap items-center gap-2">
              <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
              Alcances
            </h2>
            <motion.div {...fadeUp()} className="card mt-3 overflow-hidden !p-0">
              {ALCANCES_GRABACION.map((a, i) => (
                <div
                  key={a}
                  className={`flex items-center gap-3 px-3 py-2.5 md:px-5 md:py-4 ${
                    i > 0 ? "border-t border-[#E9E9E9]" : ""
                  }`}
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#0A0A0A]" aria-hidden="true" />
                  <span className="text-[13px] font-medium leading-[1.5] text-[#0A0A0A]">{a}</span>
                </div>
              ))}
            </motion.div>
            <motion.div
              {...fadeUp(0.05)}
              className="band-dark mt-3 rounded-[14px] p-5 text-center md:p-6"
            >
              <h3 className="sq-title">
                Cotiza según tu proyecto
              </h3>
              <p className="mx-auto mt-2 max-w-[52ch] text-[13px] leading-[1.5] text-white/85">
                Cuéntanos tu idea por WhatsApp y te cotizamos según locación, duración y formato.
              </p>
              <a
                href={GRABACION_WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-3"
              >
                <WhatsappLogo size={16} weight="fill" />
                Cotizar grabación
              </a>
            </motion.div>
            <motion.div {...fadeUp(0.08)} className="card mt-3 p-3 md:p-4">
              <h3 className="font-display text-base font-bold tracking-tight text-[#0A0A0A] md:text-lg">
                Equipos propios
              </h3>
              <p className="mt-1.5 max-w-[64ch] text-[13px] leading-[1.5] text-[#5C5C5C]">
                {COMPROMISO_INTRO}
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {compromiso.equipos.map((e) => (
                  <li
                    key={e}
                    className="pill !text-[10px] !normal-case !tracking-normal"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}

        {/* CTA final */}
        <motion.div {...fadeUp(0.1)} className="card mt-6 p-5 text-center md:mt-8 md:p-6">
          <h2 className="sq-title">
            ¿Listo para empezar?
          </h2>
          <p className="mx-auto mt-2 max-w-[52ch] text-[13px] leading-[1.5] text-[#5C5C5C]">
            Escríbenos por WhatsApp y transformemos tu material o tu idea en algo más profesional.
          </p>
          <a
            href={waLink(`Hola Rohlfing Concept, quiero iniciar un proyecto de ${servicio.nombre}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-3"
          >
            <WhatsappLogo size={16} weight="fill" />
            Escribir por WhatsApp
          </a>
        </motion.div>
      </div>

      {/* Otros servicios */}
      <section className="border-t-2 border-[#0A0A0A] bg-[#F4F4F4]">
        <div className="section-compact mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
          <h2 className="sq-title flex flex-wrap items-center gap-2">
            <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
            Otros servicios
          </h2>
          <div className="sq-grid mt-3 grid-cols-2 lg:grid-cols-3">
            {otros.map((s, i) => (
              <motion.div key={s.slug} {...fadeUp(i * 0.04)}>
                <Link
                  href={`/servicios/${s.slug}`}
                  className="card group flex items-center justify-between gap-2 !rounded-[14px] !shadow-[0_6px_16px_rgba(10,10,10,0.08)] px-3 py-2.5 md:gap-4 md:px-5 md:py-4"
                >
                  <span className="min-w-0">
                    <span className="block truncate text-[13px] font-semibold text-[#0A0A0A]">
                      {s.nombre}
                    </span>
                    <span className="mt-0.5 block text-[13px] text-[#8A8A8A]">desde {s.desde}</span>
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
