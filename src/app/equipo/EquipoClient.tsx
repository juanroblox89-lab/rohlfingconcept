"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { WhatsappLogo } from "@phosphor-icons/react";
import { fadeUp } from "@/lib/anim";

const team = [
  {
    name: "Samuel Rohlfing Barrientos",
    role: "Fundador de Rohlfing Concept",
    photo: "/img/team/samuel.png",
    bio: "Gestor de creatividad y marketing en todos los proyectos.",
    skills: [
      "Productor audiovisual",
      "Editor de videos e imágenes",
      "Creador de proyectos gráficos",
      "Diseñador gráfico",
      "Administrador digital",
      "Negociante principal",
    ],
  },
  {
    name: "Juan Esteban Álvarez Giraldo",
    role: "Desarrollador y editor de Rohlfing Concept",
    photo: "/img/team/juan.png",
    bio: "Editor audiovisual principal y desarrollador web.",
    skills: [
      "Editor audiovisual principal",
      "Productor audiovisual secundario",
      "Camarógrafo",
      "Desarrollador web",
      "Gestor de publicidad y marketing",
    ],
  },
  {
    name: "Breiner Jesús Márquez",
    role: "Productor creativo de Rohlfing Concept",
    photo: "/img/team/breiner.png",
    bio: "Desarrollo de proyectos audiovisuales de principio a fin.",
    skills: [
      "Editor de videos",
      "Gestor de publicidad y marketing interno",
      "Desarrollador de proyectos audiovisuales",
    ],
  },
  {
    name: "Alejandro Piedrahíta",
    role: "Camarógrafo principal de Rohlfing Concept",
    photo: "/img/team/alejandro.png",
    bio: "Encargado de la captura visual en producciones de campo y estudio.",
    skills: [
      "Camarógrafo principal",
      "Captura visual en producciones de campo y estudio",
    ],
  },
];

const valores = [
  { t: "Compromiso", d: "Asumimos cada proyecto con responsabilidad, dedicación y profesionalismo, buscando siempre superar las expectativas de nuestros clientes." },
  { t: "Creatividad", d: "Creemos en el poder de las ideas y en la capacidad de transformar conceptos en experiencias visuales memorables." },
  { t: "Innovación", d: "Nos mantenemos en constante aprendizaje y evolución para ofrecer soluciones modernas y efectivas." },
  { t: "Calidad", d: "Cuidamos cada detalle de nuestros proyectos para garantizar resultados profesionales y de alto nivel." },
  { t: "Confianza", d: "Construimos relaciones duraderas basadas en la transparencia, la honestidad y el respeto." },
  { t: "Trabajo en equipo", d: "La colaboración y la comunicación son fundamentales para alcanzar grandes resultados." },
];

function iniciales(name: string): string {
  return name
    .split(" ")
    .filter((p) => p.length > 2)
    .slice(0, 2)
    .map((p) => p[0])
    .join("");
}

export default function EquipoClient() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#0A0A0A]">
      {/* ── Header tipográfico ── */}
      <section className="border-b border-[#D9D9D9]">
        <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 md:py-24 xl:px-8">
          <motion.p {...fadeUp()} className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5C5C5C]">
            Equipo — Rohlfing Concept
          </motion.p>
          <motion.h1 {...fadeUp(0.06)} className="mt-4 max-w-[16ch] font-display text-4xl font-bold tracking-tight sm:text-5xl">
            El equipo detrás de Rohlfing Concept.
          </motion.h1>
          <motion.p {...fadeUp(0.12)} className="mt-5 max-w-[60ch] text-sm leading-relaxed text-[#5C5C5C]">
            Un equipo profesional de grabación, producción, diseño y estrategia
            trabajando juntos en cada proyecto.
          </motion.p>
        </div>
      </section>

      {/* ── Miembros ── */}
      <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-20 xl:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <motion.article
              key={m.name}
              {...fadeUp(Math.min(i * 0.05, 0.3))}
              className="overflow-hidden rounded border border-[#D9D9D9] bg-[#FFFFFF]"
            >
              {/* Foto (o iniciales sobre superficie sólida cuando no hay foto) */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F4F4F4]">
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#F4F4F4]">
                    <span className="select-none font-display text-6xl font-bold tracking-tight text-[#0A0A0A]">
                      {iniciales(m.name)}
                    </span>
                  </div>
                )}
              </div>

              <div className="border-t border-[#D9D9D9] p-5">
                <h2 className="text-[15px] font-bold leading-tight">{m.name}</h2>
                <p className="mt-1 text-xs font-medium text-[#5C5C5C]">{m.role}</p>
                <p className="mt-3 text-[13px] leading-relaxed text-[#5C5C5C]">{m.bio}</p>
                <ul className="mt-4 space-y-2">
                  {m.skills.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-[13px] leading-snug text-[#5C5C5C]">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#0A0A0A]" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── Filosofía — texto real del Portafolio Corporativo ── */}
        <div className="mt-16 md:mt-24">
          <motion.p {...fadeUp()} className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5C5C5C]">
            Filosofía
          </motion.p>
          <motion.h2 {...fadeUp(0.06)} className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Nuestra filosofía
          </motion.h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <motion.div {...fadeUp(0.05)} className="rounded border border-[#D9D9D9] bg-[#F4F4F4] p-6 md:p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0A0A0A]">Misión</h3>
              <p className="mt-4 text-[13px] leading-relaxed text-[#5C5C5C]">
                En Rohlfing Concept trabajamos para transformar ideas en soluciones visuales y digitales
                innovadoras, ofreciendo servicios profesionales de diseño, producción audiovisual y
                administración digital. Nuestro compromiso es brindar una atención personalizada,
                comprender las necesidades específicas de cada cliente y desarrollar estrategias creativas que
                fortalezcan su identidad, impulsen su crecimiento y generen resultados reales.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="rounded border border-[#D9D9D9] bg-[#F4F4F4] p-6 md:p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0A0A0A]">Visión</h3>
              <p className="mt-4 text-[13px] leading-relaxed text-[#5C5C5C]">
                Ser una empresa reconocida a nivel regional y nacional por la calidad de nuestras soluciones
                creativas y digitales, destacándonos por nuestra innovación, compromiso y capacidad de
                adaptación. Buscamos consolidarnos como un aliado estratégico para empresas, emprendimientos
                y marcas que deseen fortalecer su presencia y alcanzar nuevos niveles de crecimiento.
              </p>
            </motion.div>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v, i) => (
              <motion.div
                key={v.t}
                {...fadeUp(Math.min(i * 0.04, 0.3))}
                className="rounded border border-[#D9D9D9] bg-[#FFFFFF] p-5 md:p-6"
              >
                <h3 className="text-sm font-bold">{v.t}</h3>
                <p className="mt-2.5 text-[13px] leading-relaxed text-[#5C5C5C]">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CTA negro ── */}
        <motion.div {...fadeUp(0.15)} className="mt-14 rounded bg-[#0A0A0A] p-10 text-center text-[#FFFFFF]">
          <h2 className="font-display text-2xl font-bold tracking-tight">¿Quieres trabajar con nosotros?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#F4F4F4]">
            Cuéntanos tu proyecto y todo el equipo pondrá manos a la obra.
          </p>
          <a
            href="https://wa.me/573242123300?text=Hola%2C%20quiero%20trabajar%20con%20Rohlfing%20Concept%20en%20un%20proyecto."
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FFFFFF] px-8 py-3.5 text-sm font-semibold text-[#0A0A0A]"
          >
            <WhatsappLogo size={16} weight="fill" />
            Cotiza tu proyecto
          </a>
        </motion.div>
      </section>
    </main>
  );
}
