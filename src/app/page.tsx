"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowRight,
  WhatsappLogo,
  Checks,
  Plus,
} from "@phosphor-icons/react";
import HeroShowcase from "@/components/HeroShowcase";
import { clientes, marqueeClients } from "@/data/clientes";
import { compromiso, COMPROMISO_INTRO } from "@/data/services";
import { EASE, fadeUp } from "@/lib/anim";

// Servicios destacados (sin imágenes: bloques tipográficos; datos reales)
const serviciosDestacados = [
  {
    title: "Diseño e Identidad Visual",
    desc: "Logotipos, branding y manuales de marca que comunican exactamente quién eres.",
    href: "/servicios/logos",
    desde: "$50.000",
  },
  {
    title: "Producción Audiovisual",
    desc: "Grabación en locación, reels y edición profesional que conecta con tu audiencia.",
    href: "/servicios/edicion-de-video",
    desde: "$20.000",
  },
  {
    title: "Gestión de Redes y Estrategia Digital",
    desc: "Planificación, crecimiento y posicionamiento para que tu marca lidere su nicho.",
    href: "/servicios/administracion-digital",
    desde: "$30.000/mes",
  },
];

const pilares = [
  {
    id: "identidad",
    title: "Identidad Visual",
    intro: "Construimos marcas sólidas, memorables y con una presencia profesional que genera confianza desde el primer vistazo.",
    items: [
      { n: "Logos", d: "Logos únicos y profesionales que representan la esencia de tu marca.", href: "/servicios/logos" },
      { n: "Diseños", d: "Piezas visuales modernas y profesionales que impulsan tu marca.", href: "/servicios/disenos" },
      { n: "Vectorial", d: "Gráficos vectoriales precisos y profesionales para cualquier formato.", href: "/servicios/vectorial" },
      { n: "Branding", d: "Identidades visuales sólidas y profesionales que definen la esencia de tu marca.", href: "/servicios/branding" },
      { n: "Edición de imágenes", d: "Retoque profesional para lograr imágenes más impactantes y equilibradas.", href: "/servicios/edicion-de-imagenes" },
      { n: "Impresos publicitarios", d: "Impresión publicitaria con acabado profesional.", href: "/servicios/impresos-publicitarios" },
    ],
    beneficios: ["Se vea profesional", "Mantenga coherencia visual", "Transmita confianza", "Destaque frente a la competencia"],
    cta: "Trabajamos cada marca con enfoque, detalle y una visión clara de resultado",
  },
  {
    id: "audiovisual",
    title: "Contenido Audiovisual",
    intro: "Grabación + edición + animación: creamos contenido para reels verticales 9:16 (TikTok, Instagram, YouTube) y video horizontal, entregado en MP4 en la resolución y orientación que pidas.",
    items: [
      { n: "Grabación de video", d: "Grabación en locación: reels, contenido para marcas, entrevistas y eventos.", href: "/servicios/grabacion-de-video" },
      { n: "Edición de video", d: "Transformamos tu material en piezas dinámicas, limpias y profesionales.", href: "/servicios/edicion-de-video" },
      { n: "Animación de logo", d: "Damos movimiento a tu logo para un resultado más dinámico y profesional.", href: "/servicios/animacion-de-logo" },
      { n: "Creación audiovisual", d: "Desarrollamos contenido desde cero, grabando según la identidad de tu marca.", href: "/videos" },
    ],
    beneficios: ["Genere mayor impacto visual", "Mantenga una presencia más profesional", "Conecte mejor con su audiencia", "Transmita mayor calidad y dinamismo"],
    cta: "Creamos contenido con enfoque, estrategia y una visión clara de resultado",
  },
  {
    id: "television",
    title: "Televisión",
    intro: "Lleva tu marca a la pantalla y conecta con la audiencia de tu región a través de espacios publicitarios estratégicos en televisión local.",
    items: [
      { n: "Pautas en televisión", d: "Transmisión en Mi Canal: packs Basic, Supreme y Premier con comerciales incluidos.", href: "/servicios/pautas-en-television" },
    ],
    beneficios: ["Llegue a la audiencia regional", "Combine TV y redes", "Transmita confianza", "Crezca con propósito"],
    cta: "La pantalla local también es tu vitrina",
  },
  {
    id: "digital",
    title: "Gestión de Redes y Estrategia Digital",
    intro: "Gestión constante para una presencia organizada y profesional: contenido, administración y presentaciones que comunican mejor.",
    items: [
      { n: "Administración digital", d: "Gestión constante para una presencia digital más organizada y profesional.", href: "/servicios/administracion-digital" },
      { n: "Diapositivas", d: "Presentaciones visuales diseñadas para comunicar ideas de forma profesional.", href: "/servicios/diapositivas" },
    ],
    beneficios: ["Mantenga una presencia activa", "Comunique mejor su información", "Genere mayor confianza y organización", "Crezca con estrategia"],
    cta: "La presencia digital también define cómo se percibe tu marca",
  },
];

// Proceso de trabajo — copy textual del sitio original
const steps = [
  {
    n: "01",
    title: "Idea y planeación",
    desc: "Escuchamos las necesidades del proyecto y definimos el enfoque visual y estratégico del trabajo.",
  },
  {
    n: "02",
    title: "Desarrollo y construcción",
    desc: "Comenzamos el proceso creativo y técnico, desarrollando cada elemento según los objetivos planteados.",
  },
  {
    n: "03",
    title: "Revisión y ajustes",
    desc: "Evaluamos detalles, realizamos correcciones y refinamos el proyecto para lograr un mejor resultado final.",
  },
  {
    n: "04",
    title: "Entrega final",
    desc: "Entregamos el proyecto optimizado y preparado para su uso en plataformas digitales o medios correspondientes.",
  },
];

// Preguntas frecuentes — respuestas basadas en la info real del sitio
const faqs = [
  {
    q: "¿Dónde están ubicados y a quién atienden?",
    a: "Estamos en San Pedro de los Milagros, Antioquia. Trabajamos con negocios de la zona —restaurantes, droguerías, emprendimientos— y también con clientes de cualquier parte del país gracias al trabajo digital.",
  },
  {
    q: "¿Cómo cotizo un proyecto?",
    a: "Escríbenos directo por WhatsApp: cuéntanos qué necesitas, qué quieres lograr con tu marca y en qué momento está tu negocio. Con eso preparamos una propuesta clara y a la medida.",
  },
  {
    q: "¿Qué incluye el trabajo de identidad visual?",
    a: "Logos únicos, piezas de diseño modernas, gráficos vectoriales para cualquier formato y branding completo que define la esencia de tu marca. Todo pensado para que tu negocio transmita confianza desde el primer vistazo.",
  },
  {
    q: "¿Cómo es el proceso de trabajo?",
    a: "Cuatro pasos claros: idea y planeación, desarrollo y construcción, revisión y ajustes, y entrega final. Además damos soporte continuo después de la entrega y te mantenemos al tanto en cada etapa.",
  },
  {
    q: "¿Cuánto cuestan los paquetes publicitarios?",
    a: "Manejamos planes definidos según lo que tu marca necesita, cada uno con entregables claros. Encuentra el detalle completo en la sección de paquetes publicitarios.",
    link: { href: "/paquetes-publicitarios", label: "Ver paquetes" },
  },
];

// Reveals sutiles BreZ (fade + 8px) — ver @/lib/anim
const fadeUpLocal = fadeUp;

const fadeIn = (delay = 0) => ({
  initial:     { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.2, delay, ease: EASE },
});

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">

      {/* ══════════════════════════════════════════
          HERO — bloque visual protagonista + CTA pastilla
      ══════════════════════════════════════════ */}
      <section className="flex flex-col bg-white pt-4 md:pt-5">
        <div className="mx-auto grid w-full max-w-[1440px] gap-4 px-4 pb-6 md:grid-cols-[1fr_1fr] md:items-center md:px-6 lg:grid-cols-[1fr_300px] xl:px-8">
          {/* Columna Izquierda */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.06, ease: EASE }}
              className="sq-title sq-title--hero text-balance"
            >
              Tu trabajo es bueno.
              <br />
              Tu marca debería notarse.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.12, ease: EASE }}
              className="sq-sub max-w-[46ch] text-[13px] leading-[1.55] text-[#5C5C5C]"
            >
              Transformamos ideas en soluciones visuales y digitales que hacen que las marcas destaquen.
              Creamos contenido, desarrollamos identidades y fortalecemos la presencia de cada empresa
              para conectar con su público y crecer con propósito.
            </motion.p>

            {/* Pruebas reales — pills con borde de tinta */}
            <motion.ul
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.18, ease: EASE }}
              className="mt-3 flex flex-wrap items-center gap-1.5"
            >
              {["+300 proyectos", "2.3M visualizaciones", "7 marcas activas"].map((proof) => (
                <li key={proof} className="pill">
                  <Checks size={14} weight="bold" className="shrink-0 text-[#0A0A0A]" />
                  {proof}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.24, ease: EASE }}
              className="mt-4 flex flex-wrap items-center gap-2"
            >
              <a
                href="https://wa.me/573242123300?text=Hola%20Rohlfing%20Concept%2C%20quiero%20cotizar%20un%20proyecto%20para%20mi%20marca."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <WhatsappLogo size={16} weight="fill" />
                Cotiza tu proyecto
                <ArrowRight size={14} />
              </a>
              <Link
                href="/proyectos"
                className="btn-secondary"
              >
                Ver proyectos
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              className="mt-3 text-xs leading-[1.55] text-[#8A8A8A]"
            >
              Atención directa por WhatsApp y soporte continuo después de la entrega
            </motion.p>
          </div>

          {/* Columna Derecha — reels reales de clientes */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: 0.12, ease: EASE }}
            className="relative hidden md:block"
          >
            <div className="mx-auto w-full max-w-[330px]">
              <HeroShowcase clientes={clientes} />
            </div>
          </motion.div>

          {/* Versión móvil */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.32, delay: 0.15, ease: EASE }}
            className="mx-auto w-full max-w-sm md:hidden"
          >
            <div className="mx-auto w-full max-w-[270px]">
              <HeroShowcase clientes={clientes} compact />
            </div>
          </motion.div>
        </div>

        {/* Marquee Clientes */}
        <div className="border-t border-[#D9D9D9] bg-white py-4">
          <p className="mb-3 text-center text-xs text-[#8A8A8A]">
            Marcas que ya confían en nosotros
          </p>
          <div className="overflow-hidden">
            <div data-carousel="marquee" className="marquee flex w-max items-center gap-12 px-6">
              {[...marqueeClients, ...marqueeClients].map((c, i) => (
                <Image
                  key={i}
                  src={c.logo}
                  alt={c.name}
                  width={220}
                  height={96}
                  className="h-10 w-auto shrink-0 object-contain grayscale"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICIOS DESTACADOS — grid parejo (subgrid)
      ══════════════════════════════════════════ */}
      <section className="section-compact border-t-2 border-[#0A0A0A]">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 xl:px-8">
          <motion.h2 {...fadeUpLocal()} className="sq-title flex flex-wrap items-center gap-2">
            <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
            Lo que hacemos por tu marca
          </motion.h2>
          <motion.p {...fadeIn(0.1)} className="sq-sub max-w-[52ch] text-[13px] leading-[1.55] text-[#5C5C5C]">
            Tres disciplinas, un mismo objetivo: que tu negocio se vea y se sienta profesional.
          </motion.p>

          <div data-carousel="destacados" className="eq eq-4 mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
            {serviciosDestacados.map((s, i) => (
              <motion.article key={s.title} {...fadeUpLocal(i * 0.07)} className="contents">
                <Link href={s.href} className="card eq-card group min-w-[78%] shrink-0 snap-start p-3 sm:min-w-0">
                  <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-[12px] border-2 border-[#0A0A0A] bg-[#F4F4F4] font-display text-xl font-bold text-[#0A0A0A]">
                    {s.title.charAt(0)}
                  </span>
                  <h3 className="mt-2 font-display text-[15px] font-bold tracking-tight text-[#0A0A0A]">{s.title}</h3>
                  <p className="mt-1 text-[13px] leading-[1.55] text-[#5C5C5C]">{s.desc}</p>
                  <div className="card-cta flex w-full items-center justify-between pt-3 text-xs">
                    <span className="pill !text-[10px]">
                      desde <strong className="font-bold text-[#0A0A0A]">{s.desde}</strong>
                    </span>
                    <span className="flex items-center gap-1 font-bold text-[#0A0A0A]">
                      Ver planes
                      <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PILARES DE SERVICIO — banda clara densa
      ══════════════════════════════════════════ */}
      <section id="servicios" className="section-compact border-t-2 border-[#0A0A0A] bg-[#F4F4F4]">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 xl:px-8">
          <div className="grid gap-3 md:grid-cols-2 md:items-end mb-4">
            <div>
              <motion.h2 {...fadeUpLocal()} className="sq-title flex flex-wrap items-center gap-2">
                <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
                Todo lo que tu marca necesita
              </motion.h2>
            </div>
            <motion.p {...fadeIn(0.1)} className="text-[13px] leading-[1.55] text-[#5C5C5C] max-w-[48ch]">
              Soluciones creativas y digitales para potenciar tu marca. Desde la identidad visual
              hasta la gestión de contenido, trabajamos para que tu negocio destaque y crezca.
            </motion.p>
          </div>

          {/* Pilares con subservicios */}
          <div className="space-y-2">
            {pilares.map((p, i) => (
              <motion.article
                key={p.id}
                {...fadeUpLocal(i * 0.08)}
                className="card min-w-0 overflow-hidden p-3 md:p-4"
              >
                <div className="grid min-w-0 gap-4 lg:grid-cols-[0.9fr_1.4fr]">
                  {/* Columna intro + beneficios */}
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-bold tracking-tight text-[#0A0A0A]">{p.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-[1.55] text-[#5C5C5C]">{p.intro}</p>
                    <ul data-carousel="pilar-pills" className="mt-2.5 flex w-full max-w-full snap-x gap-1.5 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
                      {p.beneficios.map((b) => (
                        <li key={b} className="pill shrink-0 snap-start !text-[10px] !normal-case !tracking-normal !font-semibold">
                          <Checks size={13} weight="bold" className="shrink-0 text-[#0A0A0A]" />
                          {b.charAt(0).toUpperCase() + b.slice(1)}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 hidden border-l-[3px] border-[#0A0A0A] pl-3 text-xs italic leading-[1.55] text-[#8A8A8A] md:block">
                      {p.cta}
                    </p>
                  </div>

                  {/* Subservicios */}
                  <div className="sq-grid min-w-0 grid-cols-2">
                    {p.items.map((it) => {
                      const inner = (
                        <>
                          <p className="truncate text-[11px] font-bold uppercase tracking-[0.13em] text-[#0A0A0A] md:whitespace-normal">{it.n}</p>
                          <p className="mt-1 line-clamp-1 text-[13px] leading-[1.55] text-[#5C5C5C] md:line-clamp-none">{it.d}</p>
                        </>
                      );
                      const cls = `min-w-0 rounded-[14px] border-2 border-[#0A0A0A] bg-[#FFFFFF] p-3 shadow-[0_6px_16px_rgba(10,10,10,0.08)] transition-transform duration-200 hover:-translate-y-1`;
                      return it.href ? (
                        <Link key={it.n} href={it.href} className={cls}>
                          {inner}
                        </Link>
                      ) : (
                        <div key={it.n} className={cls}>
                          {inner}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PORTAFOLIO — grid apretado con pills
      ══════════════════════════════════════════ */}
      <section id="proyectos" className="section-compact border-t-2 border-[#0A0A0A]">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 xl:px-8">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <motion.h2 {...fadeUpLocal()} className="sq-title flex flex-wrap items-center gap-2">
                <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
                Marcas con las que trabajamos
              </motion.h2>
            </div>
            <motion.div {...fadeIn(0.1)}>
              <Link
                href="/proyectos"
                className="btn-secondary"
              >
                Explorar proyectos
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>

          <div className="sq-grid grid-cols-2 eq eq-3 sm:grid-cols-3 lg:grid-cols-4">
            {clientes.map((c, i) => (
              <motion.div
                key={c.name}
                {...fadeUpLocal(i * 0.06)}
                className="contents"
              >
                <div className="card compact-card eq-card group overflow-hidden">
                  <div className="flex aspect-[16/9] flex-col items-center justify-center gap-1 rounded-[12px] bg-[#F4F4F4] p-2 md:p-3">
                    <Image
                      src={c.logo}
                      alt={`Logo de ${c.name}`}
                      width={200}
                      height={100}
                      className="h-16 w-auto max-w-[70%] object-contain transition-transform duration-200 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex items-center justify-center px-1 pb-0.5 pt-2">
                    <span className="pill max-w-full !whitespace-normal text-center !leading-snug !text-[10px]">{c.name}</span>
                  </div>
                  <div className="card-cta hidden w-full items-center justify-between gap-2 px-1.5 pb-1 pt-1.5 md:flex">
                    <p className="min-w-0 truncate text-xs text-[#8A8A8A]">{c.tag}</p>
                    {c.desde && (
                      <p className="shrink-0 text-xs font-semibold text-[#0A0A0A]">{c.desde}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESO — banda negra que corta la página
      ══════════════════════════════════════════ */}
      <section className="band-dark">
        <div className="section-compact mx-auto w-full max-w-[1440px] px-4 md:px-6 xl:px-8">
          <motion.h2 {...fadeUpLocal()} className="sq-title flex flex-wrap items-center gap-2">
            <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
            Cómo trabajamos
          </motion.h2>

          <div className="sq-grid eq eq-3 mt-4 grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                {...fadeUpLocal(i * 0.07)}
                className="contents"
              >
                <div className="eq-card min-w-0 rounded-[14px] border-[2.5px] border-white bg-[#0A0A0A] p-3">
                  <div className="flex min-w-0 items-center gap-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-white font-display text-base font-bold text-white">{i + 1}</span>
                    <p className="min-w-0 hyphens-auto break-words font-display text-[14px] font-bold uppercase leading-tight tracking-wide text-white" lang="es">{s.title}</p>
                  </div>
                  <p className="mt-1.5 text-[13px] leading-[1.5] text-white/85">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NOSOTROS (Con Foto Real del Equipo)
      ══════════════════════════════════════════ */}
      <section id="nosotros" className="section-compact border-t-2 border-[#0A0A0A]">
        <div className="mx-auto grid w-full max-w-[1440px] gap-5 px-4 md:grid-cols-2 md:items-center md:px-6 xl:px-8">
          <motion.div {...fadeIn()}>
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[14px] border-[2.5px] border-[#0A0A0A] shadow-[0_8px_18px_rgba(10,10,10,0.1)]">
              <Image
                src="/img/team/samuel.png"
                alt="Samuel Rohlfing Barrientos — Fundador de Rohlfing Concept"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[#0A0A0A] px-4 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                  Fundador
                </p>
                <p className="mt-0.5 font-display text-lg font-bold leading-tight text-white">
                  Samuel Rohlfing Barrientos
                </p>
              </div>
            </div>
            <div className="mx-auto mt-3 flex w-full max-w-[420px] justify-end">
              <Link
                href="/equipo"
                className="btn-secondary group !bg-white"
              >
                Conoce al equipo
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>

          {/* Texto */}
          <div>
            <motion.h2 {...fadeUpLocal()} className="sq-title flex flex-wrap items-center gap-2">
              <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
              Más que diseño, presencia
            </motion.h2>
            <motion.p {...fadeUpLocal(0.08)} className="sq-sub max-w-[52ch] text-[13px] leading-[1.55] text-[#5C5C5C]">
              En Rohlfing Concept desarrollamos proyectos enfocados en fortalecer la imagen,
              organización y presencia digital de cada marca. Cada proceso se trabaja con
              intención, buscando no solo un buen resultado visual, sino una identidad más
              sólida, profesional y coherente en diferentes entornos digitales.
            </motion.p>

            <motion.ul {...fadeUpLocal(0.14)} className="mt-3 grid gap-1.5 sm:grid-cols-2">
              {[
                { t: "Análisis del proyecto", d: "Evaluamos el enfoque y objetivo antes de desarrollar cualquier proceso." },
                { t: "Desarrollo visual", d: "Propuestas visuales organizadas y coherentes con cada marca." },
                { t: "Adaptación digital", d: "Cada proyecto funciona en entornos digitales y multiplataforma." },
                { t: "Enfoque en presencia", d: "Detalles que buscan una imagen sólida, profesional y atractiva." },
              ].map((item) => (
                <li
                  key={item.t}
                  className="rounded-[12px] border-2 border-[#0A0A0A] bg-[#FFFFFF] px-3 py-2.5 shadow-[0_6px_16px_rgba(10,10,10,0.08)]"
                >
                  <p className="flex items-center gap-2 text-[13px] font-semibold text-[#0A0A0A]">
                    <Checks size={15} weight="bold" className="shrink-0 text-[#0A0A0A]" />
                    {item.t}
                  </p>
                  <p className="mt-0.5 pl-[23px] text-xs leading-[1.55] text-[#5C5C5C]">{item.d}</p>
                </li>
              ))}
            </motion.ul>

            <motion.div {...fadeUpLocal(0.2)} className="mt-4 flex flex-wrap gap-2">
              <a
                href="https://wa.me/573242123300?text=Hola%20Rohlfing%20Concept%2C%20quiero%20cotizar%20un%20proyecto%20para%20mi%20marca."
                className="btn-primary"
              >
                <WhatsappLogo size={16} weight="fill" />
                Trabajemos juntos
              </a>
              <Link href="/equipo" className="btn-secondary">
                Conoce al equipo
                <ArrowRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COMPROMISO — banda negra con tarjeta encima
      ══════════════════════════════════════════ */}
      <section className="band-dark">
        <div className="section-compact mx-auto w-full max-w-[1440px] px-4 md:px-6 xl:px-8">
          <motion.h2 {...fadeUpLocal()} className="sq-title sq-title--section flex flex-wrap items-center gap-2">
            <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
            {compromiso.titulo}
          </motion.h2>
          <motion.p {...fadeUpLocal(0.12)} className="sq-sub max-w-[68ch] text-[13px] leading-[1.5] text-white/85 md:text-sm">
            {compromiso.texto}
          </motion.p>
          <motion.div {...fadeUpLocal(0.18)} className="card mt-3 !border-white p-3 md:mt-4">
            <h3 className="font-display text-[15px] font-bold tracking-tight text-[#0A0A0A]">
              Equipos propios
            </h3>
            <p className="mt-1.5 max-w-[64ch] text-[13px] leading-[1.5] text-[#5C5C5C] md:text-sm">
              {COMPROMISO_INTRO}
            </p>
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {compromiso.equipos.map((e) => (
                <li
                  key={e}
                  className="pill !text-[10px]"
                >
                  {e}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PREGUNTAS FRECUENTES (acordeón en tarjetas)
      ══════════════════════════════════════════ */}
      <section id="faq" className="section-compact border-t-2 border-[#0A0A0A] bg-[#F4F4F4]">
        <div className="mx-auto w-full max-w-3xl px-4 md:px-6 xl:px-8">
          <motion.h2 {...fadeUpLocal()} className="sq-title sq-title--section flex flex-wrap items-center gap-2">
            <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
            Lo que nos preguntan
          </motion.h2>

          <div className="mt-3 space-y-1.5 md:mt-4">
            {faqs.map((f, i) => (
              <motion.div
                key={f.q}
                {...fadeUpLocal(i * 0.05)}
                className="card group !rounded-[12px] !shadow-[0_6px_16px_rgba(10,10,10,0.08)]"
              >
                <details className="group/details">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-3 py-2.5 text-[13px] font-bold text-[#0A0A0A] md:px-4 md:py-3 [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Plus
                      size={18}
                      weight="bold"
                      className="shrink-0 text-[#0A0A0A] transition-transform duration-200 group-open/details:rotate-45"
                    />
                  </summary>
                  <div className="px-3 pb-3 pt-0 md:px-4 md:pb-4">
                    <p className="text-[13px] leading-[1.5] text-[#5C5C5C] md:text-sm">{f.a}</p>
                    {f.link && (
                      <Link
                        href={f.link.href}
                        className="group/link mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0A0A0A]"
                      >
                        {f.link.label}
                        <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-0.5" />
                      </Link>
                    )}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>

          {/* Schema FAQPage para resultados enriquecidos */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA FINAL — banda WhatsApp negra
      ══════════════════════════════════════════ */}
      <section className="band-dark">
        <div className="section-compact-sm mx-auto max-w-3xl px-4 text-center md:px-6 xl:px-8">
          <motion.h2 {...fadeUpLocal()} className="sq-title sq-title--section">
            ¿Listo para transformar tu marca?
          </motion.h2>
          <motion.p {...fadeUpLocal(0.08)} className="sq-sub mx-auto max-w-[52ch] text-[13px] leading-[1.5] text-white/85 md:text-sm">
            Transformamos marcas en experiencias visuales que venden. Trabajemos
            juntos para construir una presencia que realmente destaque.
          </motion.p>
          <motion.div {...fadeUpLocal(0.15)} className="mt-3 flex flex-wrap items-center justify-center gap-2 md:mt-4">
            <a
              href="https://wa.me/573242123300?text=Hola%2C%20quiero%20empezar%20un%20proyecto%20con%20ustedes."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <WhatsappLogo size={16} weight="fill" />
              Empezar proyecto
            </a>
            <Link
              href="/paquetes-publicitarios"
              className="btn-secondary"
            >
              Ver paquetes <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
