"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion } from "motion/react";
import { ArrowRight, WhatsappLogo, Package, Check, Television } from "@phosphor-icons/react";
import {
  servicios,
  gruposOrden,
  waLink,
  type GrupoServicio,
  type Servicio,
} from "@/data/services";
import { paquetesGrupos } from "@/data/paquetes";
import { getSavenLink } from "@/data/enlaces";

// Tupla tipada requerida por motion (evita error TS2322 en build de producción)
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.6, delay, ease: EASE_OUT_EXPO },
});

const CATEGORIAS_CONFIG: Record<
  string,
  {
    id: string;
    grupo: GrupoServicio;
    nombre: string;
    descripcion: string;
    ordenSlugs: string[];
  }
> = {
  "identidad-visual": {
    id: "identidad-visual",
    grupo: "Diseño e Identidad Visual",
    nombre: "Diseño e Identidad Visual",
    descripcion:
      "Logos, diseños, vectorial, branding y edición de imágenes para que tu marca se vea profesional.",
    ordenSlugs: ["logos", "disenos", "vectorial", "branding", "edicion-de-imagenes", "impresos-publicitarios"],
  },
  "audiovisual": {
    id: "audiovisual",
    grupo: "Producción Audiovisual",
    nombre: "Producción Audiovisual",
    descripcion:
      "Edición de video, contenido digital, creación audiovisual y animación de logo.",
    ordenSlugs: ["edicion-de-video", "contenido-digital", "creacion-audiovisual", "animacion-de-logo"],
  },
  "television": {
    id: "television",
    grupo: "Pautas en Televisión",
    nombre: "Pautas en Televisión",
    descripcion:
      "Espacios publicitarios en televisión regional con creación de comerciales incluida.",
    ordenSlugs: ["pautas-en-television"],
  },
  "redes": {
    id: "redes",
    grupo: "Gestión de Redes y Estrategia Digital",
    nombre: "Gestión de Redes y Estrategia Digital",
    descripcion:
      "Administración digital, diapositivas y sitios web para tu presencia en línea.",
    ordenSlugs: ["administracion-digital", "diapositivas", "sitios-web"],
  },
};

export default function ServiciosClient() {
  const searchParams = useSearchParams();
  const catKey = searchParams.get("cat");
  const categoriaActiva = catKey && CATEGORIAS_CONFIG[catKey] ? CATEGORIAS_CONFIG[catKey] : null;

  // Filtrar servicios de una categoría según el orden oficial
  const getServiciosPorCategoria = (slugs: string[]) => {
    return slugs
      .map((slug) => servicios.find((s) => s.slug === slug))
      .filter((s): s is Servicio => s !== undefined);
  };

  const tvPacks = paquetesGrupos.find((g) => g.id === "television")?.packs ?? [];

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border/40 py-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute left-1/2 top-0 h-[380px] w-[640px] -translate-x-1/2 rounded-full opacity-[0.09]"
            style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 70%)", filter: "blur(90px)" }}
          />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.h1 {...fadeUp()} className="text-4xl font-bold tracking-tight sm:text-5xl">
            {categoriaActiva ? (
              <>
                {categoriaActiva.nombre}
              </>
            ) : (
              <>
                Servicios y <span className="text-gradient-accent">precios</span>
              </>
            )}
          </motion.h1>
          <motion.p {...fadeUp(0.08)} className="mx-auto mt-6 max-w-[56ch] text-base leading-relaxed text-muted">
            {categoriaActiva
              ? categoriaActiva.descripcion
              : "Soluciones creativas y digitales para potenciar tu marca. Precios claros y estructurados en planes — elige lo que tu marca necesita y escríbenos para empezar."}
          </motion.p>
          <motion.div {...fadeUp(0.14)} className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={waLink("Hola Rohlfing Concept, quiero cotizar un servicio. ¿Me pueden asesorar?")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_28px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
            >
              <WhatsappLogo size={16} weight="fill" />
              Cotizar por WhatsApp
            </a>
            <Link
              href="/paquetes-publicitarios"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border-2 px-7 py-3 text-sm font-medium text-muted transition-all hover:border-accent/40 hover:text-foreground hover:-translate-y-0.5"
            >
              <Package size={16} />
              Ver paquetes mensuales
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Selector de submenús por categoría */}
      <section className="border-b border-border/40 bg-background/60 backdrop-blur-md sticky top-[72px] z-30">
        <div className="mx-auto max-w-6xl px-6 py-3.5">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <Link
              href="/servicios"
              className={`flex-shrink-0 min-h-[40px] inline-flex items-center rounded-full px-4 py-2 text-xs font-medium transition-all ${
                !categoriaActiva
                  ? "bg-accent text-white shadow-[0_0_16px_rgba(37,99,235,0.35)]"
                  : "border border-border-2 bg-surface text-muted hover:border-accent/40 hover:text-foreground"
              }`}
            >
              Todos los servicios
            </Link>
            {Object.values(CATEGORIAS_CONFIG).map((cat) => {
              const activa = categoriaActiva?.id === cat.id;
              return (
                <Link
                  key={cat.id}
                  href={`/servicios?cat=${cat.id}`}
                  className={`flex-shrink-0 min-h-[40px] inline-flex items-center rounded-full px-4 py-2 text-xs font-medium transition-all ${
                    activa
                      ? "bg-accent text-white shadow-[0_0_16px_rgba(37,99,235,0.35)]"
                      : "border border-border-2 bg-surface text-muted hover:border-accent/40 hover:text-foreground"
                  }`}
                >
                  {cat.nombre}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contenido: vista de categoría individual o todas */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        {categoriaActiva ? (
          /* Vista de categoría única (submenú enfocado) */
          <div>
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-hi">
                Submenú de categoría
              </span>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                {categoriaActiva.nombre}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                {categoriaActiva.descripcion}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {getServiciosPorCategoria(categoriaActiva.ordenSlugs).map((s, i) => {
                const isSitios = s.slug === "sitios-web";
                return (
                  <motion.div key={s.slug} {...fadeUp(i * 0.05)}>
                    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-2 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_36px_rgba(37,99,235,0.15)]">
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={s.img}
                          alt={s.nombre}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                          className="object-cover saturate-[1.3] transition-transform duration-700 group-hover:scale-[1.05]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="text-lg font-bold tracking-tight">{s.nombre}</h3>
                        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-accent-hi">
                          {s.kicker}
                        </p>
                        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                          {s.resumen}
                        </p>
                        {isSitios && (
                          <p className="mt-3 text-[11px] font-medium text-accent-hi">
                            Desarrollado por SAVEN · Beyond Possible
                          </p>
                        )}
                        <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-4">
                          <span className="text-sm text-muted-2">
                            {s.desde && s.desde !== "A cotizar" ? (
                              <>
                                desde <strong className="text-foreground">{s.desde}</strong>
                              </>
                            ) : (
                              <strong className="text-foreground">{s.desde}</strong>
                            )}
                          </span>
                          <Link
                            href={`/servicios/${s.slug}`}
                            className="inline-flex min-h-[40px] items-center gap-1 text-sm font-semibold text-accent-hi hover:text-foreground transition-colors"
                          >
                            Ver planes
                            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Para Televisión: mostrar directamente los 3 packs si está en la categoría */}
            {categoriaActiva.id === "television" && tvPacks.length > 0 && (
              <div className="mt-16 rounded-2xl border border-border-2 bg-surface p-8 md:p-10">
                <div className="flex items-center gap-3">
                  <Television size={24} className="text-accent-hi" />
                  <h3 className="text-xl font-bold">Packs de Pautas en Televisión (Mi Canal)</h3>
                </div>
                <p className="mt-2 text-sm text-muted max-w-xl">
                  Transmisión y comerciales incluidos con cobertura en todo el Norte de Antioquia.
                </p>
                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  {tvPacks.map((pk) => (
                    <div
                      key={pk.nombre}
                      className="rounded-xl border border-border-2 bg-background p-6 flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="text-base font-bold">{pk.nombre}</h4>
                        <p className="mt-2 text-2xl font-bold text-gradient-accent">{pk.precio}</p>
                        <ul className="mt-4 space-y-2">
                          {pk.incluye.map((inc) => (
                            <li key={inc} className="flex items-start gap-2 text-xs text-muted">
                              <Check size={14} className="mt-0.5 text-accent-hi flex-shrink-0" />
                              {inc}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <a
                        href={waLink(`Hola Rohlfing Concept, me interesa el ${pk.nombre} de televisión (${pk.precio}).`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex min-h-[40px] items-center justify-center rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white hover:bg-accent-hi transition-colors"
                      >
                        Cotizar pack
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Vista de todas las categorías agrupadas */
          <div className="space-y-20">
            {Object.values(CATEGORIAS_CONFIG).map((cat, gi) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-36">
                <div className="flex flex-wrap items-end justify-between gap-4 mb-6 border-b border-border/40 pb-4">
                  <div>
                    <h2 className="text-xl font-bold tracking-tight sm:text-2xl">
                      {cat.nombre}
                    </h2>
                    <p className="mt-1 text-sm text-muted max-w-2xl">
                      {cat.descripcion}
                    </p>
                  </div>
                  <Link
                    href={`/servicios?cat=${cat.id}`}
                    className="inline-flex min-h-[40px] items-center gap-1.5 text-xs font-semibold text-accent-hi hover:text-foreground transition-colors"
                  >
                    Ver categoría completa
                    <ArrowRight size={13} />
                  </Link>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {getServiciosPorCategoria(cat.ordenSlugs).map((s, i) => {
                    const isSitios = s.slug === "sitios-web";
                    return (
                      <motion.div key={s.slug} {...fadeUp(i * 0.04)}>
                        <Link
                          href={`/servicios/${s.slug}`}
                          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border-2 bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_12px_36px_rgba(37,99,235,0.15)]"
                        >
                          <div className="relative aspect-[16/9] overflow-hidden">
                            <Image
                              src={s.img}
                              alt={s.nombre}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                              className="object-cover saturate-[1.3] transition-transform duration-700 group-hover:scale-[1.05]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
                          </div>
                          <div className="flex flex-1 flex-col p-6">
                            <h3 className="text-base font-bold tracking-tight">{s.nombre}</h3>
                            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-accent-hi">
                              {s.kicker}
                            </p>
                            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                              {s.resumen}
                            </p>
                            {isSitios && (
                              <p className="mt-2 text-[11px] font-medium text-accent-hi">
                                Desarrollado por SAVEN · Beyond Possible
                              </p>
                            )}
                            <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-4">
                              <span className="text-xs text-muted-2">
                                {s.desde && s.desde !== "A cotizar" ? (
                                  <>
                                    desde <strong className="text-foreground">{s.desde}</strong>
                                  </>
                                ) : (
                                  <strong className="text-foreground">{s.desde}</strong>
                                )}
                              </span>
                              <span className="flex items-center gap-1 text-xs font-semibold text-accent-hi">
                                Ver planes
                                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA final */}
        <motion.div {...fadeUp(0.1)} className="mt-20 rounded-2xl border border-border-2 bg-surface p-10 text-center">
          <h3 className="text-xl font-bold">¿Listo para dar el siguiente paso?</h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
            Elige el servicio que necesita tu marca y comencemos a construir algo que realmente la represente.
          </p>
          <a
            href={waLink("Hola Rohlfing Concept, estoy listo para iniciar un proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-[44px] items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_28px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
          >
            <WhatsappLogo size={16} weight="fill" />
            Empieza ahora
          </a>
        </motion.div>
      </section>
    </main>
  );
}
