"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectItem {
  id: string;
  name: string;
  since: string;
  category: "Audiovisual" | "Branding" | "Web" | "Redes";
  categoryLabel: string;
  description: string;
  tags: string[];
  logo?: string;
  highlight?: boolean;
}

const projects: ProjectItem[] = [
  {
    id: "villa-grande",
    name: "Restaurante Villa Grande",
    since: "Cliente desde Septiembre 2025",
    category: "Branding",
    categoryLabel: "Hotel Campestre, Restaurante & Banquetes",
    description:
      "Renovación integral de identidad visual, manual de marca corporativo, contenido para eventos sociales y producción audiovisual.",
    tags: ["Manual de Marca", "Producción Audiovisual", "Redes Sociales", "Eventos"],
    logo: "/img/client-villa-grande.png",
    highlight: true,
  },
  {
    id: "plomeria-norte",
    name: "Plomería Norte",
    since: "Cliente desde Noviembre 2025",
    category: "Web",
    categoryLabel: "Desarrollo Web & Servicios Especializados",
    description:
      "Plataforma web de alto rendimiento optimizada para conversión de llamadas directas y captación de clientes de servicios residenciales y comerciales.",
    tags: ["Sitio Web", "SEO Local", "Identidad Corporativa"],
    logo: "/img/client-plomeria-norte.png",
  },
  {
    id: "asanarte",
    name: "Asanarte Droguería",
    since: "Cliente desde Marzo 2025",
    category: "Branding",
    categoryLabel: "Salud & Sector Farmacéutico",
    description:
      "Diseño de identidad de marca, señalética comercial y piezas publicitarias para cadena de droguerías y bienestar.",
    tags: ["Identidad Visual", "Señalética", "Publicidad"],
    logo: "/img/272900_935a85172ba043d29c382bf7aac8e14c_7Emv2.jpg",
  },
  {
    id: "ricos-pandeyucas",
    name: "Ricos Pándeyucas",
    since: "Cliente desde Febrero 2026",
    category: "Branding",
    categoryLabel: "Alimentos & Panadería Artesanal",
    description:
      "Creación de identidad visual icónica, diseño de empaques y piezas vectoriales modernas para franquicias de alimentos.",
    tags: ["Logotipo", "Diseño de Empaques", "Gráficos Vectoriales"],
    logo: "/img/272900_387dedc9284749f2b492c5d87141ba8c.png",
  },
  {
    id: "tizon-dorado",
    name: "El Tizón Dorado",
    since: "Cliente desde Marzo 2026",
    category: "Audiovisual",
    categoryLabel: "Asados, Parrilla & Experiencia Web",
    description:
      "Desarrollo de identidad gastronómica, videos promocionales en alta definición y experiencia web con catálogo digital interactivo.",
    tags: ["Reels & Video", "Diseño Web", "Branding Gastronómico"],
    logo: "/img/272900_935a85172ba043d29c382bf7aac8e14c_7Emv2.jpg",
    highlight: true,
  },
  {
    id: "jerez-caballero",
    name: "El Jerez del Caballero",
    since: "Cliente desde Abril 2026",
    category: "Audiovisual",
    categoryLabel: "Experiencia Ecuestre & Restaurante",
    description:
      "Producción audiovisual cinematográfica de exhibición equina y experiencia gastronómica campestre.",
    tags: ["Video Cinematográfico", "Fotografía", "Contenido Redes"],
    logo: "/img/272900_9c7b3e5c4df24a94a9d426bf0074c67c.jpg",
  },
  {
    id: "la-antioquenita",
    name: "La Antioqueñita",
    since: "Marca impulsada",
    category: "Redes",
    categoryLabel: "Café & Restaurante Tradicional",
    description:
      "Plan mensual de contenidos, reels de alta retención y crecimiento de comunidad digital para posicionamiento en el sector gastronómico.",
    tags: ["Gestión de Redes", "Reels Virales", "Parrilla Mensual"],
    logo: "/img/272900_962fce19ed2c471bb31d708604b7e354.png",
  },
  {
    id: "luz-del-campo",
    name: "Inmobiliaria Luz del Campo",
    since: "Proyecto Campestre",
    category: "Branding",
    categoryLabel: "Proyecto Inmobiliario & Branding",
    description:
      "Diseño de identidad visual para proyecto campestre, brochures comerciales digitales y renders de presentación de lotes.",
    tags: ["Brochure Digital", "Identidad Visual", "Campañas Digitales"],
    logo: "/img/272900_a4436c7b58934c08acf7ee06f0dcf3c9.jpg",
  },
  {
    id: "celebraciones-norte",
    name: "Celebraciones del Norte",
    since: "Eventos & Banquetes",
    category: "Redes",
    categoryLabel: "Bodas & Eventos Corporativos",
    description:
      "Estrategia de posicionamiento para bodas y eventos corporativos con cobertura audiovisual de eventos en vivo.",
    tags: ["Cobertura en Vivo", "Publicidad Digital", "Gestión de Marca"],
    logo: "/img/272900_ca856d4f67cc40d0aa72937491f25dcd.png",
  },
];

const categories = [
  { id: "all", label: "Todos los proyectos" },
  { id: "Audiovisual", label: "Audiovisual & Video" },
  { id: "Branding", label: "Branding & Logos" },
  { id: "Web", label: "Desarrollo Web" },
  { id: "Redes", label: "Gestión de Redes" },
];

export default function ProyectosPage() {
  const [activeCat, setActiveCat] = useState("all");

  const filteredProjects =
    activeCat === "all"
      ? projects
      : projects.filter((p) => p.category === activeCat);

  return (
    <main className="min-h-screen py-16 md:py-24">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
            <span className="h-0.5 w-6 bg-accent" />
            Portafolio Seleccionado
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Más que diseño,
            <br />
            <span className="text-accent drop-shadow-[0_0_25px_rgba(30,107,255,0.4)]">
              construimos presencia.
            </span>
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Detrás de cada proyecto existe una marca, una idea y una meta distinta. Conoce las marcas que han confiado en Rohlfing Concept para elevar su imagen, captar clientes y consolidar su autoridad.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2.5 mb-12 pb-4 border-b border-border/60">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all ${
                activeCat === cat.id
                  ? "bg-accent text-white shadow-[0_0_20px_rgba(30,107,255,0.4)]"
                  : "bg-surface/60 text-muted hover:text-white hover:bg-surface border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40"
            >
              <div>
                {/* Logo & Category badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-black/50 border border-white/10 p-2 group-hover:border-accent/50 group-hover:shadow-[0_0_20px_rgba(30,107,255,0.3)] transition-all">
                    {project.logo ? (
                      <Image
                        src={project.logo}
                        alt={project.name}
                        width={56}
                        height={56}
                        className="h-full w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    ) : (
                      <span className="font-mono text-xl font-bold text-accent">
                        {project.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-mono font-medium text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                    {project.category}
                  </span>
                </div>

                <div className="mb-2">
                  <span className="text-[11px] font-mono text-accent-light/80 block">
                    {project.since}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-accent-light transition-colors">
                    {project.name}
                  </h3>
                </div>

                <span className="block text-xs font-medium text-muted/80 mb-4">
                  {project.categoryLabel}
                </span>

                <p className="text-sm leading-relaxed text-muted mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-medium bg-surface-glass text-muted/90 px-2.5 py-1 rounded-md border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-20 glass-card rounded-3xl p-10 md:p-14 text-center border border-accent/30 shadow-[0_0_40px_rgba(30,107,255,0.15)]">
          <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
            ¿Quieres que tu marca sea el próximo caso de éxito?
          </h3>
          <p className="mt-3 max-w-xl mx-auto text-sm text-muted">
            Creamos una estrategia audiovisual, de diseño o desarrollo web personalizada para tu empresa.
          </p>
          <div className="mt-8">
            <a
              href="https://wa.me/573242123300?text=Hola%20Rohlfing%20Concept,%20quiero%20crear%20un%20proyecto%20para%20mi%20marca"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold text-white"
            >
              Iniciar proyecto con Rohlfing Concept ↗
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
