"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { WhatsappLogo } from "@phosphor-icons/react";

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
    name: "Mateo Rohlfing Barrientos",
    role: "Productor y asistente de Rohlfing Concept",
    photo: "/img/team/mateo.png",
    bio: "Director creativo del desarrollo audiovisual.",
    skills: [
      "Productor audiovisual principal",
      "Asistente de grabación",
      "Camarógrafo",
      "Director creativo del desarrollo audiovisual",
      "Administrador digital",
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

// Tupla tipada requerida por motion (evita error TS2322 en build de producción)
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.6, delay, ease: EASE_OUT_EXPO },
});

export default function EquipoClient() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="relative overflow-hidden border-b border-border/40 py-28">
        {/* Fondo con imagen real del equipo */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src="/img/about-team.png"
            alt=""
            fill
            className="object-cover object-top opacity-[0.07]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
          <div className="absolute left-1/2 top-0 h-[360px] w-[600px] -translate-x-1/2 opacity-[0.08] rounded-full"
            style={{ background: "radial-gradient(ellipse, #2563eb 0%, transparent 70%)", filter: "blur(90px)" }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.h1 {...fadeUp()} className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
            El equipo detrás de
            <br />
            <span className="text-gradient-accent">Rohlfing Concept</span>
          </motion.h1>
          <motion.p {...fadeUp(0.08)} className="mt-6 max-w-[52ch] text-base leading-relaxed text-muted">
            Un equipo profesional de grabación, producción, diseño y desarrollo
            trabajando juntos en cada proyecto.
          </motion.p>
        </div>
      </section>

      {/* Miembros principales */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <motion.article
              key={m.name}
              {...fadeUp(i * 0.07)}
              className="group relative overflow-hidden rounded-2xl border border-border-2 bg-surface transition-all hover:border-accent/40 hover:shadow-[0_16px_48px_rgba(37,99,235,0.12)]"
            >
              {/* Foto (o iniciales cuando no hay foto disponible) */}
              <div className="relative aspect-[4/5] overflow-hidden">
                {m.photo ? (
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    className="object-cover object-top saturate-[1.2] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/[0.14] via-surface to-background">
                    <span className="select-none text-6xl font-bold tracking-tight text-gradient-accent opacity-80">
                      {m.name.split(" ").filter((p) => p.length > 2).slice(0, 2).map((p) => p[0]).join("")}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/30 to-transparent" />
                {/* Nombre + rol sobre la foto */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-bold leading-tight">{m.name}</h3>
                  <p className="mt-1 text-xs font-medium text-accent-hi">{m.role}</p>
                </div>
              </div>

              {/* Bio + skills */}
              <div className="p-6">
                <p className="text-sm text-muted">{m.bio}</p>
                <ul className="mt-4 space-y-2">
                  {m.skills.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-[13px] leading-snug text-muted">
                      <span className="mt-[7px] h-1 w-1 flex-shrink-0 rounded-full bg-accent-hi" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-accent transition-all duration-500 group-hover:w-full" />
            </motion.article>
          ))}
        </div>

        {/* Misión / Visión / Valores — texto real del Portafolio Corporativo */}
        <div className="mt-24">
          <motion.h2 {...fadeUp()} className="text-2xl font-bold tracking-tight sm:text-3xl">
            Nuestra <span className="text-gradient-accent">filosofía</span>
          </motion.h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <motion.div {...fadeUp(0.05)} className="rounded-2xl border border-border-2 bg-surface p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-hi">Misión</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                En Rohlfing Concept trabajamos para transformar ideas en soluciones visuales y digitales
                innovadoras, ofreciendo servicios profesionales de diseño, producción audiovisual, desarrollo
                web y administración digital. Nuestro compromiso es brindar una atención personalizada,
                comprender las necesidades específicas de cada cliente y desarrollar estrategias creativas que
                fortalezcan su identidad, impulsen su crecimiento y generen resultados reales.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="rounded-2xl border border-border-2 bg-surface p-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-hi">Visión</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Ser una empresa reconocida a nivel regional y nacional por la calidad de nuestras soluciones
                creativas y digitales, destacándonos por nuestra innovación, compromiso y capacidad de
                adaptación. Buscamos consolidarnos como un aliado estratégico para empresas, emprendimientos
                y marcas que deseen fortalecer su presencia y alcanzar nuevos niveles de crecimiento.
              </p>
            </motion.div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "Compromiso", d: "Asumimos cada proyecto con responsabilidad, dedicación y profesionalismo, buscando siempre superar las expectativas de nuestros clientes." },
              { t: "Creatividad", d: "Creemos en el poder de las ideas y en la capacidad de transformar conceptos en experiencias visuales memorables." },
              { t: "Innovación", d: "Nos mantenemos en constante aprendizaje y evolución para ofrecer soluciones modernas y efectivas." },
              { t: "Calidad", d: "Cuidamos cada detalle de nuestros proyectos para garantizar resultados profesionales y de alto nivel." },
              { t: "Confianza", d: "Construimos relaciones duraderas basadas en la transparencia, la honestidad y el respeto." },
              { t: "Trabajo en equipo", d: "La colaboración y la comunicación son fundamentales para alcanzar grandes resultados." },
            ].map((v, i) => (
              <motion.div key={v.t} {...fadeUp(i * 0.05)} className="rounded-2xl border border-border-2 bg-surface p-6 transition-colors hover:border-accent/40">
                <h4 className="text-sm font-bold">{v.t}</h4>
                <p className="mt-2.5 text-[13px] leading-relaxed text-muted">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.15)} className="mt-16 rounded-2xl border border-border-2 bg-surface p-10 text-center">
          <h3 className="text-xl font-bold">¿Quieres trabajar con nosotros?</h3>
          <p className="mt-3 text-sm text-muted max-w-md mx-auto">
            Cuéntanos tu proyecto y todo el equipo pondrá manos a la obra.
          </p>
          <a href="https://wa.me/573242123300?text=Hola%2C%20quiero%20trabajar%20con%20Rohlfing%20Concept%20en%20un%20proyecto."
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_28px_rgba(37,99,235,0.4)] hover:-translate-y-0.5">
            <WhatsappLogo size={16} weight="fill" />
            Cotiza tu proyecto
          </a>
        </motion.div>
      </section>
    </main>
  );
}
