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
      {/* ── Header compacto ── */}
      <section className="border-b-2 border-[#0A0A0A]">
        <div className="section-compact-sm mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
          <motion.h1 {...fadeUp()} className="sq-title flex max-w-[16ch] flex-wrap items-center gap-2">
            <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
            El equipo detrás
          </motion.h1>
          <motion.p {...fadeUp(0.12)} className="sq-sub mt-2 max-w-[60ch] text-[13px] leading-[1.5] text-[#5C5C5C]">
            Un equipo profesional de grabación, producción, diseño y estrategia
            trabajando juntos en cada proyecto.
          </motion.p>
        </div>
      </section>

      {/* ── Miembros ── */}
      <section className="section-compact mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
        <div className="sq-grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <motion.article
              key={m.name}
              {...fadeUp(Math.min(i * 0.05, 0.3))}
              className="card min-w-0 overflow-hidden !p-2 md:!p-2.5"
            >
              {/* Foto (o iniciales sobre superficie sólida cuando no hay foto) */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] bg-[#F4F4F4]">
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-[#F4F4F4]">
                    <span className="select-none font-display text-6xl font-bold tracking-tight text-[#0A0A0A]">
                      {iniciales(m.name)}
                    </span>
                  </div>
                )}
              </div>

              <div className="min-w-0 px-2 pb-2 pt-3 md:px-3 md:pb-3 md:pt-4">
                <div className="flex items-center justify-center">
                  <span className="pill max-w-full !whitespace-normal text-center !text-[10px] !leading-snug">{m.role}</span>
                </div>
                <h2 className="mt-2 text-center text-[13px] font-bold leading-tight md:text-[15px]">{m.name}</h2>
                <p className="mt-1.5 text-center text-[13px] leading-[1.5] text-[#5C5C5C]">{m.bio}</p>
                <ul className="mt-2.5 flex max-w-full flex-wrap justify-center gap-1 md:gap-1.5">
                  {m.skills.map((s) => (
                    <li key={s} className="min-w-0 break-words rounded-full border border-[#D9D9D9] bg-[#F4F4F4] px-2 py-0.5 text-[11px] font-medium leading-[1.5] text-[#5C5C5C] md:px-3 md:py-1">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── Filosofía — texto real del Portafolio Corporativo ── */}
        <div className="mt-6">
          <motion.h2 {...fadeUp()} className="sq-title flex flex-wrap items-center gap-2">
            <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
            Nuestra filosofía
          </motion.h2>
          <div className="sq-grid mt-3 lg:grid-cols-2">
            <motion.div {...fadeUp(0.05)} className="card min-w-0 p-3 md:p-7">
              <p><span className="pill !whitespace-normal !text-[10px] !leading-snug">Misión</span></p>
              <p className="mt-2 text-[13px] leading-[1.5] text-[#5C5C5C] md:leading-relaxed">
                En Rohlfing Concept trabajamos para transformar ideas en soluciones visuales y digitales
                innovadoras, ofreciendo servicios profesionales de diseño, producción audiovisual y
                administración digital. Nuestro compromiso es brindar una atención personalizada,
                comprender las necesidades específicas de cada cliente y desarrollar estrategias creativas que
                fortalezcan su identidad, impulsen su crecimiento y generen resultados reales.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="card min-w-0 p-3 md:p-7">
              <p><span className="pill !whitespace-normal !text-[10px] !leading-snug">Visión</span></p>
              <p className="mt-2 text-[13px] leading-[1.5] text-[#5C5C5C] md:leading-relaxed">
                Ser una empresa reconocida a nivel regional y nacional por la calidad de nuestras soluciones
                creativas y digitales, destacándonos por nuestra innovación, compromiso y capacidad de
                adaptación. Buscamos consolidarnos como un aliado estratégico para empresas, emprendimientos
                y marcas que deseen fortalecer su presencia y alcanzar nuevos niveles de crecimiento.
              </p>
            </motion.div>
          </div>

          <div className="sq-grid mt-3 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((v, i) => (
              <motion.div
                key={v.t}
                {...fadeUp(Math.min(i * 0.04, 0.3))}
                className="card !rounded-[14px] !shadow-[0_6px_16px_rgba(10,10,10,0.08)] min-w-0 p-3 md:p-5"
              >
                <p><span className="pill !whitespace-normal !text-[10px] !leading-snug">{v.t}</span></p>
                <p className="mt-2 text-[13px] leading-[1.5] text-[#5C5C5C]">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CTA banda negra ── */}
        <motion.div {...fadeUp(0.15)} className="band-dark section-compact-sm mt-6 rounded-[14px] p-6 text-center md:mt-10 md:p-10">
          <h2 className="sq-title">¿Quieres trabajar con nosotros?</h2>
          <p className="sq-sub mx-auto max-w-md text-[13px] leading-[1.5] text-white/85">
            Cuéntanos tu proyecto y todo el equipo pondrá manos a la obra.
          </p>
          <a
            href="https://wa.me/573242123300?text=Hola%2C%20quiero%20trabajar%20con%20Rohlfing%20Concept%20en%20un%20proyecto."
            className="btn-primary mt-3"
          >
            <WhatsappLogo size={16} weight="fill" />
            Cotiza tu proyecto
          </a>
        </motion.div>
      </section>
    </main>
  );
}
