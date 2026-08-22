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
      "Productor audiovisual principal",
      "Camarógrafo",
      "Editor de videos",
      "Gestor de publicidad y marketing interno",
      "Desarrollador de proyectos audiovisuales",
    ],
  },
];

const camaras = [
  {
    name: "Alejandro Piedrahíta",
    photo: "/img/team/alejandro.png",
  },
  {
    name: "Salomé Agudelo",
    photo: "/img/team/salome.png",
  },
];

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
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
            className="object-cover object-top opacity-[0.14]"
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
              {/* Foto */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={m.photo}
                  alt={m.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
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

          {/* Tarjeta doble: camarógrafos */}
          <motion.div {...fadeUp(5 * 0.07)}
            className="group relative overflow-hidden rounded-2xl border border-accent/25 bg-surface">
            <div className="grid grid-cols-2">
              {camaras.map((c) => (
                <div key={c.name} className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={c.photo}
                    alt={c.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 50vw, 16vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                  <p className="absolute bottom-3 left-3 right-3 text-sm font-semibold">{c.name}</p>
                </div>
              ))}
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold">Camarógrafos principales</h3>
              <p className="mt-1 text-xs font-medium text-accent-hi">Rohlfing Concept</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Encargados de la captura visual en producciones de campo y estudio.
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div {...fadeUp(0.15)} className="mt-16 rounded-2xl border border-border-2 bg-surface p-10 text-center">
          <h3 className="text-xl font-bold">¿Quieres trabajar con nosotros?</h3>
          <p className="mt-3 text-sm text-muted max-w-md mx-auto">
            Cuéntanos tu proyecto y todo el equipo pondrá manos a la obra.
          </p>
          <a href="https://wa.me/573242123300"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_28px_rgba(37,99,235,0.4)] hover:-translate-y-0.5">
            <WhatsappLogo size={16} weight="fill" />
            Agendar llamada
          </a>
        </motion.div>
      </section>
    </main>
  );
}
