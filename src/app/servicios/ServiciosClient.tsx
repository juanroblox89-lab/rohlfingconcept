"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { WhatsappLogo, Package } from "@phosphor-icons/react";
import { servicios, gruposOrden, waLink, type GrupoServicio } from "@/data/services";
import { fadeUp } from "@/lib/anim";

export default function ServiciosClient() {
  return (
    <main className="min-h-screen bg-white text-[#0A0A0A]">
      {/* Header compacto */}
      <section className="border-b-2 border-[#0A0A0A]">
        <div className="section-compact mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
          <motion.h1
            {...fadeUp()}
            className="sq-title flex flex-wrap items-center gap-2"
          >
            <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
            Servicios y precios
          </motion.h1>
          <motion.p
            {...fadeUp(0.1)}
            className="sq-sub max-w-[62ch] text-[13px] leading-[1.55] text-[#5C5C5C]"
          >
            Soluciones creativas y digitales para potenciar tu marca. Precios claros y
            estructurados en planes — elige lo que tu marca necesita y escríbenos para empezar.
          </motion.p>
          <motion.div {...fadeUp(0.15)} className="mt-3 flex flex-wrap items-center gap-2">
            <a
              href={waLink("Hola Rohlfing Concept, quiero cotizar un servicio. ¿Me pueden asesorar?")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsappLogo size={16} weight="fill" />
              Cotizar por WhatsApp
            </a>
            <Link href="/paquetes-publicitarios" className="btn-secondary">
              <Package size={16} />
              Ver paquetes mensuales
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Grupos de servicios — grids parejos (subgrid) */}
      <div className="section-compact mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
        {gruposOrden.map((grupo, gi) => (
          <section key={grupo} className={gi > 0 ? "mt-4 md:mt-5" : ""}>
            <motion.h2 {...fadeUp()} className="sq-title flex flex-wrap items-center gap-2">
              <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
              {grupo}
            </motion.h2>
            <div className="sq-grid eq eq-4 mt-3 grid-cols-2 lg:grid-cols-3">
              {servicios
                .filter((s) => s.grupo === (grupo as GrupoServicio))
                .map((s, i) => (
                  <motion.div key={s.slug} {...fadeUp(i * 0.05)} className="contents">
                    <Link
                      href={`/servicios/${s.slug}`}
                      className="card eq-card group overflow-hidden !p-3 md:!p-4"
                    >
                      {s.img ? (
                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[12px] bg-[#F4F4F4]">
                          <Image
                            src={s.img}
                            alt={s.nombre}
                            fill
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 380px"
                            className="object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                          />
                        </div>
                      ) : (
                        <div
                          className="flex aspect-[16/9] w-full items-center justify-center rounded-[12px] bg-[#F4F4F4]"
                          aria-hidden="true"
                        >
                          <span className="font-display text-5xl font-bold tracking-tight text-[#0A0A0A]">
                            {s.nombre.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div className="px-2 pb-1.5 pt-2 md:px-2.5">
                        <h3 className="font-display text-[13px] font-bold leading-[1.4] tracking-tight md:text-[15px]">{s.nombre}</h3>
                        <p className="mt-1 min-w-0 md:mt-1.5">
                          <span className="pill max-w-full !whitespace-normal !text-left !text-[10px] !leading-snug">{s.kicker}</span>
                        </p>
                        <p className="mt-1 text-[13px] leading-[1.5] text-[#5C5C5C] md:mt-1.5">
                          {s.resumen}
                        </p>
                        <div className="card-cta flex w-full flex-col items-start gap-0.5 pt-2 md:flex-row md:items-center md:justify-between md:gap-3">
                          <span className="truncate text-[13px] leading-[1.5] text-[#8A8A8A]">
                            desde <strong className="font-bold text-[#0A0A0A]">{s.desde}</strong>
                          </span>
                          <span className="shrink-0 text-[13px] font-bold leading-[1.5] text-[#0A0A0A]">
                            Ver planes →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </section>
        ))}

        {/* CTA final */}
        <motion.div {...fadeUp(0.1)} className="band-dark section-compact-sm mt-6 rounded-[14px] text-center">
          <h2 className="sq-title">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="sq-sub mx-auto max-w-[52ch] text-[13px] leading-[1.55] text-white/85">
            Elige el servicio que necesita tu marca y comencemos a construir algo que realmente la
            represente.
          </p>
          <a
            href={waLink("Hola Rohlfing Concept, estoy listo para iniciar un proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-3"
          >
            <WhatsappLogo size={16} weight="fill" />
            Empieza ahora
          </a>
        </motion.div>
      </div>
    </main>
  );
}
