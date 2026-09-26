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
          HERO — tipográfico estilo BreZ
      ══════════════════════════════════════════ */}
      <section className="flex flex-col bg-white pt-28 md:pt-32">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-4 pb-14 md:grid-cols-[1fr_1fr] md:items-center md:px-6 lg:grid-cols-[1fr_300px] xl:px-8">
          {/* Columna Izquierda */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="kicker"
            >
              Agencia de edición · San Pedro de los Milagros, Antioquia
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.32, delay: 0.06, ease: EASE }}
              className="mt-4 font-display text-[clamp(30px,8.5vw,72px)] font-black italic leading-[0.95] tracking-tight text-balance text-[#0A0A0A] lg:text-[clamp(40px,4.3vw,68px)]"
            >
              Tu trabajo es bueno.
              <br />
              Tu marca debería notarse.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.12, ease: EASE }}
              className="mt-6 max-w-[46ch] text-sm leading-relaxed text-[#5C5C5C] md:text-base"
            >
              Transformamos ideas en soluciones visuales y digitales que hacen que las marcas destaquen.
              Creamos contenido, desarrollamos identidades y fortalecemos la presencia de cada empresa
              para conectar con su público y crecer con propósito.
            </motion.p>

            {/* Pruebas reales */}
            <motion.ul
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.18, ease: EASE }}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {["+300 proyectos", "2.3M visualizaciones", "7 marcas activas"].map((proof) => (
                <li key={proof} className="flex items-center gap-1.5 border-l-2 border-[#0A0A0A] pl-3 text-[13px] font-medium text-[#5C5C5C]">
                  <Checks size={14} weight="bold" className="shrink-0 text-[#0A0A0A]" />
                  {proof}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.24, ease: EASE }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <a
                href="https://wa.me/573242123300?text=Hola%20Rohlfing%20Concept%2C%20quiero%20cotizar%20un%20proyecto%20para%20mi%20marca."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-[#0A0A0A] px-7 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#5C5C5C] md:h-9"
              >
                <WhatsappLogo size={16} weight="fill" />
                Cotiza tu proyecto
                <ArrowRight size={14} />
              </a>
              <Link
                href="/proyectos"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-[#D9D9D9] px-7 text-[13px] font-medium text-[#5C5C5C] transition-colors duration-200 hover:border-[#0A0A0A] hover:text-[#0A0A0A] md:h-9"
              >
                Ver proyectos
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              className="mt-5 text-xs leading-relaxed text-[#8A8A8A]"
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
        <div className="border-t border-[#D9D9D9] bg-white py-8">
          <p className="mb-6 text-center text-[13px] text-[#8A8A8A]">
            Marcas que ya confían en nosotros
          </p>
          <div className="overflow-hidden">
            <div className="marquee flex w-max items-center gap-20 px-10">
              {[...marqueeClients, ...marqueeClients].map((c, i) => (
                <Image
                  key={i}
                  src={c.logo}
                  alt={c.name}
                  width={220}
                  height={96}
                  className="h-12 w-auto shrink-0 object-contain grayscale sm:h-14"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICIOS DESTACADOS
      ══════════════════════════════════════════ */}
      <section className="border-t border-[#D9D9D9] py-24">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 xl:px-8">
          <motion.p {...fadeUpLocal()} className="kicker text-center">
            Servicios destacados
          </motion.p>
          <motion.h2 {...fadeUpLocal(0.06)} className="mx-auto mt-3 max-w-[20ch] text-center font-display text-3xl font-black tracking-tight text-[#0A0A0A] sm:text-4xl">
            Lo que hacemos por tu marca
          </motion.h2>
          <motion.p {...fadeIn(0.1)} className="mx-auto mt-4 max-w-[52ch] text-center text-sm leading-relaxed text-[#5C5C5C]">
            Tres disciplinas, un mismo objetivo: que tu negocio se vea y se sienta profesional.
          </motion.p>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviciosDestacados.map((s, i) => (
              <motion.article key={s.title} {...fadeUpLocal(i * 0.07)}>
                <Link href={s.href} className="card group flex h-full flex-col p-6 md:p-8">
                  <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded border border-[#D9D9D9] bg-[#FFFFFF] font-display text-2xl font-black text-[#0A0A0A]">
                    {s.title.charAt(0)}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-[#0A0A0A]">{s.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5C5C5C]">{s.desc}</p>
                  <div className="mt-auto flex items-center justify-between pt-6 text-[12px]">
                    <span className="text-[#8A8A8A]">
                      desde <strong className="font-semibold text-[#0A0A0A]">{s.desde}</strong>
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-[#0A0A0A]">
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
          PILARES DE SERVICIO
      ══════════════════════════════════════════ */}
      <section id="servicios" className="border-t border-[#D9D9D9] bg-[#F4F4F4] py-24">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 xl:px-8">
          <div className="grid gap-10 md:grid-cols-2 md:items-end mb-16">
            <div>
              <motion.p {...fadeUpLocal()} className="kicker">
                Nuestros pilares
              </motion.p>
              <motion.h2 {...fadeUpLocal(0.06)} className="mt-3 font-display text-3xl font-black tracking-tight text-[#0A0A0A] sm:text-4xl">
                Todo lo que tu marca
                <br />
                necesita, en un solo lugar
              </motion.h2>
            </div>
            <motion.p {...fadeIn(0.1)} className="text-sm leading-relaxed text-[#5C5C5C] max-w-[48ch]">
              Soluciones creativas y digitales para potenciar tu marca. Desde la identidad visual
              hasta la gestión de contenido, trabajamos para que tu negocio destaque y crezca.
            </motion.p>
          </div>

          {/* Pilares con subservicios */}
          <div className="space-y-4">
            {pilares.map((p, i) => (
              <motion.article
                key={p.id}
                {...fadeUpLocal(i * 0.08)}
                className="card p-6 md:p-10"
              >
                <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr]">
                  {/* Columna intro + beneficios */}
                  <div>
                    <h3 className="font-display text-2xl font-bold tracking-tight text-[#0A0A0A]">{p.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#5C5C5C]">{p.intro}</p>
                    <ul className="mt-6 space-y-2">
                      {p.beneficios.map((b) => (
                        <li key={b} className="flex items-center gap-2.5 text-[13px] leading-snug text-[#5C5C5C]">
                          <Checks size={14} weight="bold" className="shrink-0 text-[#0A0A0A]" />
                          Para que tu marca {b.charAt(0).toLowerCase() + b.slice(1)}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-7 border-l-2 border-[#0A0A0A] pl-4 text-[13px] italic leading-relaxed text-[#8A8A8A]">
                      {p.cta}
                    </p>
                  </div>

                  {/* Subservicios */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    {p.items.map((it) => {
                      const inner = (
                        <>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#0A0A0A]">{it.n}</p>
                          <p className="mt-2 text-[13px] leading-relaxed text-[#5C5C5C]">{it.d}</p>
                        </>
                      );
                      const cls = `rounded border border-[#D9D9D9] bg-[#FFFFFF] px-5 py-4 transition-colors duration-200 hover:border-[#0A0A0A]`;
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
          PORTAFOLIO
      ══════════════════════════════════════════ */}
      <section id="proyectos" className="border-t border-[#D9D9D9] py-24">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 xl:px-8">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <motion.p {...fadeUpLocal()} className="kicker">
                Portafolio
              </motion.p>
              <motion.h2 {...fadeUpLocal(0.06)} className="mt-3 max-w-[20ch] font-display text-3xl font-black tracking-tight text-[#0A0A0A] sm:text-4xl">
                Marcas con las que hemos trabajado
              </motion.h2>
            </div>
            <motion.div {...fadeIn(0.1)} className="flex flex-col items-start gap-2">
              <Link
                href="/proyectos"
                className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#0A0A0A]"
              >
                Explorar nuestros proyectos
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <span className="text-xs text-[#8A8A8A]">Identidad visual, contenido audiovisual y gestión de redes</span>
            </motion.div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clientes.map((c, i) => (
              <motion.div
                key={c.name}
                {...fadeUpLocal(i * 0.06)}
                className="card group overflow-hidden"
              >
                <div className="flex aspect-[16/9] flex-col items-center justify-center gap-3 bg-[#F4F4F4] p-6">
                  <Image
                    src={c.logo}
                    alt={`Logo de ${c.name}`}
                    width={200}
                    height={100}
                    className="h-16 w-auto max-w-[70%] object-contain transition-transform duration-200 group-hover:scale-[1.04] sm:h-20"
                  />
                  <p className="text-center text-[13px] font-semibold text-[#0A0A0A]">
                    {c.name}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-3 border-t border-[#D9D9D9] bg-[#FFFFFF] p-5">
                  <p className="min-w-0 truncate text-xs text-[#8A8A8A]">{c.tag}</p>
                  {c.desde && (
                    <p className="shrink-0 text-xs text-[#8A8A8A]">{c.desde}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESO (Con Banner Visual)
      ══════════════════════════════════════════ */}
      <section className="border-t border-[#D9D9D9] bg-[#F4F4F4] py-24">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 xl:px-8">
          <motion.p {...fadeUpLocal()} className="kicker">
            Proceso
          </motion.p>
          <motion.h2 {...fadeUpLocal(0.06)} className="mt-3 max-w-[20ch] font-display text-3xl font-black tracking-tight text-[#0A0A0A] sm:text-4xl">
            Cómo trabajamos
          </motion.h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                {...fadeUpLocal(i * 0.07)}
                className={`relative pt-6 ${i > 0 ? "lg:border-l lg:border-[#D9D9D9] lg:pl-6" : ""}`}
              >
                <span className="num-wm">{s.n}</span>
                <p className="relative font-display text-3xl font-black text-[#0A0A0A]">{s.n}</p>
                <h3 className="relative mt-4 text-[14px] font-semibold text-[#0A0A0A]">{s.title}</h3>
                <p className="relative mt-2 text-[13px] leading-relaxed text-[#5C5C5C]">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NOSOTROS (Con Foto Real del Equipo)
      ══════════════════════════════════════════ */}
      <section id="nosotros" className="border-t border-[#D9D9D9] py-24">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-4 md:grid-cols-2 md:items-center md:px-6 xl:px-8">
          <motion.div {...fadeIn()} className="relative">
            <div className="flex aspect-[4/5] flex-col justify-between rounded bg-[#0A0A0A] p-8 md:p-10">
              <span aria-hidden="true" className="font-display text-6xl font-black tracking-tight text-[#FFFFFF]">
                SR
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#FFFFFF]">
                  Fundador
                </p>
                <p className="mt-2 font-display text-xl font-bold leading-tight text-[#FFFFFF]">
                  Samuel Rohlfing Barrientos
                </p>
              </div>
            </div>
            <Link
              href="/equipo"
              className="group absolute -bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-[#D9D9D9] bg-[#FFFFFF] px-5 py-3 text-xs font-semibold text-[#0A0A0A]"
            >
              Conoce al equipo
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Texto */}
          <div>
            <motion.p {...fadeUpLocal()} className="kicker">
              Nosotros
            </motion.p>
            <motion.h2 {...fadeUpLocal(0.06)} className="mt-3 font-display text-3xl font-black tracking-tight text-[#0A0A0A] sm:text-4xl">
              Más que diseño, construimos presencia
            </motion.h2>
            <motion.p {...fadeUpLocal(0.08)} className="mt-6 max-w-[52ch] text-sm leading-relaxed text-[#5C5C5C] md:text-base">
              En Rohlfing Concept desarrollamos proyectos enfocados en fortalecer la imagen,
              organización y presencia digital de cada marca. Cada proceso se trabaja con
              intención, buscando no solo un buen resultado visual, sino una identidad más
              sólida, profesional y coherente en diferentes entornos digitales.
            </motion.p>

            <motion.ul {...fadeUpLocal(0.14)} className="mt-8 space-y-2.5">
              {[
                { t: "Análisis del proyecto", d: "Cada marca tiene necesidades distintas: evaluamos el enfoque y objetivo antes de desarrollar cualquier proceso." },
                { t: "Desarrollo visual", d: "Construimos propuestas visuales organizadas y coherentes con la identidad de cada marca." },
                { t: "Adaptación digital", d: "Buscamos que cada proyecto funcione correctamente en entornos digitales y multiplataforma." },
                { t: "Enfoque en presencia", d: "Trabajamos cada detalle buscando una imagen más sólida, profesional y atractiva." },
              ].map((item) => (
                <li
                  key={item.t}
                  className="rounded border border-[#D9D9D9] bg-[#F4F4F4] px-5 py-3.5"
                >
                  <p className="flex items-center gap-2.5 text-[13px] font-semibold text-[#0A0A0A]">
                    <Checks size={15} weight="bold" className="shrink-0 text-[#0A0A0A]" />
                    {item.t}
                  </p>
                  <p className="mt-1 pl-[25px] text-[13px] leading-relaxed text-[#5C5C5C]">{item.d}</p>
                </li>
              ))}
            </motion.ul>

            <motion.div {...fadeUpLocal(0.2)} className="mt-10 flex flex-wrap gap-3">
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
          COMPROMISO — Tu idea, nuestro compromiso + equipos propios
      ══════════════════════════════════════════ */}
      <section className="border-t border-[#D9D9D9] bg-[#F4F4F4] py-24">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-6 xl:px-8">
          <motion.p {...fadeUpLocal()} className="kicker">
            Compromiso
          </motion.p>
          <motion.h2 {...fadeUpLocal(0.06)} className="mt-3 max-w-[22ch] font-display text-3xl font-black tracking-tight text-[#0A0A0A] sm:text-4xl">
            {compromiso.titulo}
          </motion.h2>
          <motion.p {...fadeUpLocal(0.12)} className="mt-6 max-w-[68ch] text-sm leading-relaxed text-[#5C5C5C] md:text-base">
            {compromiso.texto}
          </motion.p>
          <motion.div {...fadeUpLocal(0.18)} className="card mt-10 p-6 md:p-10">
            <h3 className="font-display text-xl font-bold tracking-tight text-[#0A0A0A]">
              Equipos propios
            </h3>
            <p className="mt-3 max-w-[64ch] text-[13px] leading-relaxed text-[#5C5C5C] md:text-sm">
              {COMPROMISO_INTRO}
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {compromiso.equipos.map((e) => (
                <li
                  key={e}
                  className="rounded-full border border-[#D9D9D9] bg-[#FFFFFF] px-4 py-1.5 text-xs font-medium text-[#0A0A0A]"
                >
                  {e}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PREGUNTAS FRECUENTES (info real, acordeón nativo)
      ══════════════════════════════════════════ */}
      <section id="faq" className="border-t border-[#D9D9D9] bg-[#F4F4F4] py-24">
        <div className="mx-auto w-full max-w-3xl px-4 md:px-6 xl:px-8">
          <motion.p {...fadeUpLocal()} className="kicker text-center">
            Preguntas frecuentes
          </motion.p>
          <motion.h2 {...fadeUpLocal(0.06)} className="mx-auto mt-3 max-w-[20ch] text-center font-display text-3xl font-black tracking-tight text-[#0A0A0A] sm:text-4xl">
            Lo que nos preguntan antes de empezar
          </motion.h2>
          <motion.p {...fadeIn(0.08)} className="mx-auto mt-4 max-w-[52ch] text-center text-sm leading-relaxed text-[#5C5C5C]">
            Lo que más nos preguntan antes de empezar un proyecto.
          </motion.p>

          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <motion.details
                key={f.q}
                {...fadeUpLocal(i * 0.05)}
                className="group rounded border border-[#D9D9D9] bg-[#FFFFFF]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[14px] font-semibold text-[#0A0A0A] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    size={18}
                    weight="bold"
                    className="shrink-0 text-[#0A0A0A] transition-transform duration-200 group-open:rotate-45"
                  />
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-[13px] leading-relaxed text-[#5C5C5C]">{f.a}</p>
                  {f.link && (
                    <Link
                      href={f.link.href}
                      className="group/link mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0A0A0A]"
                    >
                      {f.link.label}
                      <ArrowRight size={13} className="transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  )}
                </div>
              </motion.details>
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
          CTA FINAL — bloque negro sólido
      ══════════════════════════════════════════ */}
      <section className="border-t border-[#0A0A0A] bg-[#0A0A0A]">
        <div className="mx-auto max-w-3xl px-4 py-24 text-center md:px-6 md:py-32 xl:px-8">
          <motion.h2 {...fadeUpLocal()} className="font-display text-[clamp(28px,6vw,64px)] font-black tracking-tight text-white">
            ¿Listo para transformar tu marca?
          </motion.h2>
          <motion.p {...fadeUpLocal(0.08)} className="mx-auto mt-5 max-w-[52ch] text-sm leading-relaxed text-white md:text-base">
            Transformamos marcas en experiencias visuales que venden. Trabajemos
            juntos para construir una presencia que realmente destaque.
          </motion.p>
          <motion.div {...fadeUpLocal(0.15)} className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://wa.me/573242123300?text=Hola%2C%20quiero%20empezar%20un%20proyecto%20con%20ustedes."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-[#0A0A0A] transition-colors duration-200 hover:bg-[#E9E9E9] md:h-9"
            >
              <WhatsappLogo size={16} weight="fill" />
              Empezar proyecto
            </a>
            <Link
              href="/paquetes-publicitarios"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-white px-8 text-sm font-medium text-white transition-colors duration-200 hover:bg-white hover:text-[#0A0A0A] md:h-9"
            >
              Ver paquetes <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
