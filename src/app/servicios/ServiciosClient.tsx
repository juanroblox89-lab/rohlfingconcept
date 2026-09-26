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
      {/* Header tipográfico */}
      <section className="border-b border-[#D9D9D9]">
        <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 md:py-24 xl:px-8">
          <motion.p {...fadeUp()} className="kicker">
            Rohlfing Concept — Servicios
          </motion.p>
          <motion.h1
            {...fadeUp(0.05)}
            className="mt-4 font-display text-4xl font-black tracking-tight md:text-6xl"
          >
            Servicios y precios
          </motion.h1>
          <motion.p
            {...fadeUp(0.1)}
            className="mt-5 max-w-[62ch] text-[13px] leading-relaxed text-[#5C5C5C] md:text-sm"
          >
            Soluciones creativas y digitales para potenciar tu marca. Precios claros y
            estructurados en planes — elige lo que tu marca necesita y escríbenos para empezar.
          </motion.p>
          <motion.div {...fadeUp(0.15)} className="mt-8 flex flex-wrap items-center gap-3">
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

      {/* Grupos de servicios */}
      <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-20 xl:px-8">
        {gruposOrden.map((grupo, gi) => (
          <section key={grupo} className={gi > 0 ? "mt-14 md:mt-20" : ""}>
            <motion.p {...fadeUp()} className="kicker">
              {grupo}
            </motion.p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {servicios
                .filter((s) => s.grupo === (grupo as GrupoServicio))
                .map((s, i) => (
                  <motion.div key={s.slug} {...fadeUp(i * 0.05)}>
                    <Link
                      href={`/servicios/${s.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded border border-[#D9D9D9] bg-white transition-colors duration-200 hover:border-[#0A0A0A]"
                    >
                      {s.img ? (
                        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#F4F4F4]">
                          <Image
                            src={s.img}
                            alt={s.nombre}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                            className="object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                          />
                        </div>
                      ) : (
                        <div
                          className="flex aspect-[16/9] w-full items-center justify-center bg-[#F4F4F4]"
                          aria-hidden="true"
                        >
                          <span className="font-display text-6xl font-black tracking-tight text-[#0A0A0A]">
                            {s.nombre.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div className="flex flex-1 flex-col p-5 md:p-6">
                        <h2 className="font-display text-lg font-bold tracking-tight">{s.nombre}</h2>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#8A8A8A]">
                          {s.kicker}
                        </p>
                        <p className="mt-3 flex-1 text-[13px] leading-relaxed text-[#5C5C5C]">
                          {s.resumen}
                        </p>
                        <div className="mt-5 flex items-center justify-between gap-4 border-t border-[#E9E9E9] pt-4">
                          <span className="text-[13px] text-[#8A8A8A]">
                            desde <strong className="font-semibold text-[#0A0A0A]">{s.desde}</strong>
                          </span>
                          <span className="shrink-0 text-[13px] font-semibold text-[#0A0A0A]">
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
        <motion.div {...fadeUp(0.1)} className="card mt-14 p-8 text-center md:mt-20 md:p-12">
          <h2 className="font-display text-2xl font-black tracking-tight md:text-3xl">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="mx-auto mt-3 max-w-[52ch] text-[13px] leading-relaxed text-[#5C5C5C]">
            Elige el servicio que necesita tu marca y comencemos a construir algo que realmente la
            represente.
          </p>
          <a
            href={waLink("Hola Rohlfing Concept, estoy listo para iniciar un proyecto.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-7"
          >
            <WhatsappLogo size={16} weight="fill" />
            Empieza ahora
          </a>
        </motion.div>
      </div>
    </main>
  );
}
