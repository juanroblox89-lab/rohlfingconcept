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

const clients = [
  { name: "Villa Grande",           logo: "/img/clients/client-villa-grande.png", cover: null },
  { name: "Plomería Norte",         logo: "/img/client-plomeria-norte.png", cover: null },
  { name: "El Tizón Dorado",        logo: "/img/clients/client-tizon-dorado.png", cover: "/img/covers/cover-tizon.jpg" },
  { name: "Ricos Pandeyucas",       logo: "/img/clients/client-pandeyucas.png", cover: "/img/covers/cover-pandeyucas.jpg" },
  { name: "Asanarte Droguería",     logo: "/img/clients/client-asanarte.png", cover: "/img/covers/cover-asanarte.jpg" },
  { name: "El Jerez del Caballero", logo: "/img/clients/client-jerez.png", cover: "/img/covers/cover-jerez.jpg" },
  { name: "Kantel",                 logo: "/img/clients/client-kantel.png", cover: null },
];

const pilares = [
  {
    id: "identidad",
    title: "Identidad Visual",
    intro: "Construimos marcas sólidas, memorables y con una presencia profesional que genera confianza desde el primer vistazo.",
    image: "/img/services-branding.png",
    items: [
      { n: "Logos", d: "Logos únicos y profesionales que representan la esencia de tu marca." },
      { n: "Diseños", d: "Piezas visuales modernas y profesionales que impulsan tu marca.", solid: true },
      { n: "Vectorial", d: "Gráficos vectoriales precisos y profesionales para cualquier formato." },
      { n: "Branding", d: "Identidades visuales sólidas y profesionales que definen la esencia de tu marca.", solid: true },
    ],
    beneficios: ["Se vea profesional", "Mantenga coherencia visual", "Transmita confianza", "Destaque frente a la competencia"],
    cta: "Trabajamos cada marca con enfoque, detalle y una visión clara de resultado",
  },
  {
    id: "audiovisual",
    title: "Contenido Audiovisual",
    intro: "Creamos contenido audiovisual pensado para potenciar tu marca, combinando creatividad, edición y estrategia para lograr piezas creativas y profesionales.",
    image: "/img/services-audiovisual.png",
    items: [
      { n: "Creación audiovisual", d: "Desarrollamos contenido desde cero, grabando según la identidad de tu marca." },
      { n: "Edición de video", d: "Transformamos tu material en piezas dinámicas, limpias y profesionales." },
      { n: "Animación de logo", d: "Damos movimiento a tu logo para un resultado más dinámico y profesional." },
      { n: "Contenido digital", d: "Contenido optimizado para captar atención y destacar en medios digitales." },
    ],
    beneficios: ["Genere mayor impacto visual", "Mantenga una presencia más profesional", "Conecte mejor con su audiencia", "Transmita mayor calidad y dinamismo"],
    cta: "Creamos contenido con enfoque, estrategia y una visión clara de resultado",
  },
  {
    id: "digital",
    title: "Presencia Digital",
    intro: "Creamos entornos digitales para mejorar la forma en que tu marca se presenta, comunica y conecta, manteniendo una imagen profesional y estructurada.",
    image: "/img/services-web.png",
    items: [
      { n: "Sitios web", d: "Páginas web funcionales enfocadas en presencia y presentación digital." },
      { n: "Diapositivas", d: "Presentaciones visuales diseñadas para comunicar ideas de forma profesional." },
      { n: "Administración digital", d: "Gestión constante para una presencia digital más organizada y profesional." },
    ],
    beneficios: ["Mantenga una presencia digital", "Comunique mejor su información", "Genere mayor confianza y organización", "Se adapte a entornos digitales"],
    cta: "La presencia digital también define cómo se percibe tu marca",
  },
];

const steps = [
  {
    n: "01",
    title: "Primer contacto",
    desc: "Escuchamos necesidades, objetivos e ideas para comprender la situación actual y establecer una visión clara.",
  },
  {
    n: "02",
    title: "Investigación y planificación",
    desc: "Investigamos el sector y la competencia, definimos estrategias visuales y organizamos cronogramas.",
  },
  {
    n: "03",
    title: "Diseño y desarrollo",
    desc: "Convertimos las ideas en propuestas reales: branding, audiovisual, web y contenido digital.",
  },
  {
    n: "04",
    title: "Revisión y optimización",
    desc: "Presentamos avances, recibimos retroalimentación y realizamos ajustes hasta el resultado esperado.",
  },
  {
    n: "05",
    title: "Entrega y acompañamiento",
    desc: "Entregamos materiales, capacitamos cuando es necesario y damos soporte continuo.",
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
    q: "¿Hacen registro de marca ante la SIC?",
    a: "Sí. Realizamos el registro de tu marca ante la Superintendencia de Industria y Comercio de la mano de Ilegítimas - Abogadas. El servicio completo tiene una tarifa de 1 SMMLV y puedes pagarlo con flexibilidad: sin prisa, no hay que pagar todo de una.",
  },
  {
    q: "¿Cómo es el proceso de trabajo?",
    a: "Cinco pasos: primer contacto para entender tus necesidades, investigación y planificación, diseño y desarrollo, revisión con tus retroalimentación, y entrega con acompañamiento continuo. Te mantenemos al tanto en cada etapa.",
  },
  {
    q: "¿Cuánto cuestan los paquetes publicitarios?",
    a: "Manejamos planes definidos según lo que tu marca necesita, cada uno con entregables claros. Encuentra el detalle completo en la sección de paquetes publicitarios.",
    link: { href: "/paquetes-publicitarios", label: "Ver paquetes" },
  },
];

// Tupla tipada requerida por motion (evita error TS2322 en build de producción)
const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.65, delay, ease: EASE_OUT_EXPO },
});

const fadeIn = (delay = 0) => ({
  initial:     { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.55, delay },
});

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden">

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
        {/* Fondo del Hero con imagen real */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/img/hero-bg.png"
            alt="Rohlfing Concept Studio"
            fill
            className="object-cover object-center opacity-40"
            priority
            sizes="100vw"
          />
          {/* Nebulosa azul generada — profundidad sobre la foto */}
          <Image
            src="/img/nebula.png"
            alt=""
            fill
            className="object-cover opacity-55 [mix-blend-mode:screen]"
            priority
            sizes="100vw"
          />
          {/* Overlay de gradiente oscuro premium */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        {/* Glow sutil */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute left-[10%] top-[10%] h-[500px] w-[500px] rounded-full opacity-[0.12]"
            style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 70%)", filter: "blur(90px)" }}
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pb-16 pt-28 md:grid-cols-[1fr_1.05fr] md:items-center md:py-0 lg:gap-6">
          {/* Columna Izquierda — pitch directo al cliente */}
          <div>
            {/* Badge de ubicación — prueba de cercanía */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: EASE_OUT_EXPO }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2.5 rounded-full border border-border-2 bg-surface/70 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-muted backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-hi opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-hi" />
                </span>
                Agencia creativa · San Pedro de los Milagros, Antioquia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: EASE_OUT_EXPO }}
              className="text-[2.75rem] font-bold leading-[1.03] tracking-tight sm:text-6xl lg:text-[3.9rem] xl:text-[4.3rem]"
            >
              Tu trabajo es bueno.
              <br />
              Tu marca debería{" "}
              <span className="text-gradient-accent">notarse.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.12, ease: EASE_OUT_EXPO }}
              className="mt-6 max-w-[46ch] text-base leading-relaxed text-muted sm:text-lg"
            >
              Branding, contenido audiovisual y presencia digital para negocios
              que quieren verse tan profesionales como son.
              Diseño con identidad propia, hecho en Antioquia.
            </motion.p>

            {/* Pruebas reales del portafolio */}
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18, ease: EASE_OUT_EXPO }}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {["Más de 17 proyectos entregados", "7 marcas activas en portafolio", "Equipo de 5 especialistas"].map((proof) => (
                <li key={proof} className="flex items-center gap-1.5 text-[13px] font-medium text-muted">
                  <Checks size={14} weight="bold" className="flex-shrink-0 text-accent-hi" />
                  {proof}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.26, ease: EASE_OUT_EXPO }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              {/* CTA primario — canal real de conversión */}
              <a
                href="https://wa.me/573242123300?text=Hola%20Rohlfing%20Concept%2C%20quiero%20cotizar%20un%20proyecto%20para%20mi%20marca."
                className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_36px_rgba(37,99,235,0.5)] hover:-translate-y-0.5"
              >
                <WhatsappLogo size={17} weight="fill" />
                Cotiza tu proyecto
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <Link
                href="/proyectos"
                className="group inline-flex items-center gap-2 rounded-full border border-border-2 px-8 py-4 text-sm font-medium text-muted transition-all hover:border-accent/40 hover:text-foreground hover:-translate-y-0.5"
              >
                Ver proyectos
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="mt-5 text-xs leading-relaxed text-muted-2"
            >
              Atención directa por WhatsApp · Soporte continuo después de la entrega
            </motion.p>
          </div>

          {/* Columna Derecha — el PC como protagonista absoluto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.15, ease: EASE_OUT_EXPO }}
            className="relative hidden md:block"
          >
            {/* Resplandor ambiental doble detrás del equipo */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div
                className="h-[75%] w-[75%] rounded-full opacity-35 blur-[100px]"
                style={{ background: "radial-gradient(circle, #2563eb 0%, transparent 70%)" }}
              />
              <div
                className="absolute h-[45%] w-[45%] rounded-full opacity-25 blur-[70px]"
                style={{ background: "radial-gradient(circle, #4f8dff 0%, transparent 72%)" }}
              />
            </div>

            {/* Flotación suave — da vida sin distraer */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            >
              {/* Contenedor cuadrado: la imagen es ~1:1, así no se recorta el PC */}
              <div className="relative aspect-square">
                <Image
                  src="/img/hero-laptop.png"
                  alt="Proyecto Rohlfing Concept"
                  fill
                  priority
                  sizes="(max-width: 1200px) 50vw, 580px"
                  className="object-contain object-center drop-shadow-[0_50px_90px_rgba(37,99,235,0.28)]"
                />
                {/* Fundido radial suave solo en bordes extremos — integra sin tapar */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 62% 62% at 50% 48%, transparent 60%, var(--background) 96%)",
                  }}
                />
              </div>
            </motion.div>

            {/* Caption sutil */}
            <div className="pointer-events-none absolute bottom-1 left-0 right-0 text-center">
              <p className="text-[10px] uppercase tracking-widest text-muted-2">Portafolio · Diseño con identidad propia</p>
            </div>

            {/* Stat Floating Cards — cifras reales del portafolio */}
            <div className="absolute -right-3 -top-3 rounded-2xl border border-border-2 bg-background/95 px-5 py-4 backdrop-blur-md shadow-2xl transition-transform duration-300 hover:-translate-y-1">
              <p className="text-[10px] text-muted-2 uppercase tracking-wider">Proyectos entregados</p>
              <p className="mt-0.5 text-2xl font-bold text-gradient-accent">+17</p>
            </div>
            <div className="absolute -bottom-3 -left-3 rounded-2xl border border-border-2 bg-background/95 px-5 py-4 backdrop-blur-md shadow-2xl transition-transform duration-300 hover:translate-y-1">
              <p className="text-[10px] text-muted-2 uppercase tracking-wider">Marcas activas</p>
              <p className="mt-0.5 text-2xl font-bold text-gradient-accent">7</p>
            </div>
          </motion.div>

          {/* Versión móvil del visual — el PC también se ve en celular */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO }}
            className="relative mx-auto w-full max-w-md md:hidden"
          >
            <div className="relative aspect-square">
              <Image
                src="/img/hero-laptop.png"
                alt="Proyecto Rohlfing Concept"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 448px"
                className="object-contain object-center drop-shadow-[0_30px_60px_rgba(37,99,235,0.25)]"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 62% 62% at 50% 48%, transparent 58%, var(--background) 96%)",
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Marquee Clientes */}
        <div className="relative border-t border-border/40 bg-background/50 backdrop-blur-md py-8">
          <p className="mb-6 text-center text-[10px] font-medium uppercase tracking-[0.28em] text-muted-2">
            Marcas que ya confían en Rohlfing Concept
          </p>
          <div className="overflow-hidden">
            <div className="marquee flex w-max items-center gap-20 px-10">
              {[...clients, ...clients].map((c, i) => (
                <Image
                  key={i}
                  src={c.logo}
                  alt={c.name}
                  width={180}
                  height={72}
                  className="h-12 w-auto flex-shrink-0 object-contain opacity-75 transition-all hover:opacity-100"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICIOS (Tarjetas con Imágenes Reales)
      ══════════════════════════════════════════ */}
      <section id="servicios" className="border-t border-border/40 py-28" style={{ background: "var(--background-alt)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-end mb-16">
            <motion.h2 {...fadeUp()} className="text-3xl font-bold tracking-tight sm:text-4xl">
              Todo lo que tu marca
              <br />
              <span className="text-gradient-accent">necesita, en un solo lugar</span>
            </motion.h2>
            <motion.p {...fadeIn(0.1)} className="text-base text-muted leading-relaxed max-w-[48ch]">
              Soluciones creativas y digitales para potenciar tu marca. Desde la identidad visual
              hasta la gestión de contenido, trabajamos para que tu negocio destaque y crezca.
            </motion.p>
          </div>

          {/* Pilares con subservicios (copy de la web original) */}
          <div className="space-y-6">
            {pilares.map((p, i) => (
              <motion.article
                key={p.id}
                {...fadeUp(i * 0.08)}
                className="group relative overflow-hidden rounded-2xl border border-border-2 bg-surface transition-all hover:border-accent/40 hover:shadow-[0_12px_40px_rgba(37,99,235,0.15)]"
              >
                <Image
                  src={p.image}
                  alt=""
                  fill
                  className="object-cover opacity-45 transition-opacity duration-700 group-hover:opacity-60"
                  sizes="(max-width: 1280px) 100vw, 1216px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/65 to-surface/30" />

                <div className="relative z-10 p-8 md:p-12">
                  <div className="grid gap-10 lg:grid-cols-[0.9fr_1.4fr]">
                    {/* Columna intro + beneficios */}
                    <div>
                      <h3 className="text-2xl font-bold tracking-tight">{p.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted">{p.intro}</p>
                      <ul className="mt-6 space-y-2">
                        {p.beneficios.map((b) => (
                          <li key={b} className="flex items-center gap-2.5 text-[13px] leading-snug text-muted">
                            <Checks size={14} weight="bold" className="flex-shrink-0 text-accent-hi" />
                            Para que tu marca {b.charAt(0).toLowerCase() + b.slice(1)}
                          </li>
                        ))}
                      </ul>
                      <p className="mt-7 border-l-2 border-accent/40 pl-4 text-[13px] italic leading-relaxed text-muted-2">
                        {p.cta}
                      </p>
                    </div>

                    {/* Subservicios */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      {p.items.map((it) => (
                        <div
                          key={it.n}
                          className={`rounded-xl border border-border-2 px-5 py-4 transition-colors ${
                            it.solid
                              ? "bg-background/90 shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-md hover:border-accent/40"
                              : "bg-background/70 backdrop-blur-sm hover:border-accent/30"
                          }`}
                        >
                          <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-accent-hi">{it.n}</p>
                          <p className="mt-2 text-[13px] leading-relaxed text-muted">{it.d}</p>
                        </div>
                      ))}
                    </div>
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
      <section id="proyectos" className="border-t border-border/40 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <motion.h2 {...fadeUp()} className="max-w-lg text-3xl font-bold tracking-tight sm:text-4xl">
              Marcas con las que
              <br />
              <span className="text-gradient-accent">hemos trabajado</span>
            </motion.h2>
            <motion.div {...fadeIn(0.1)}>
              <Link
                href="/proyectos"
                className="group inline-flex items-center gap-2 text-sm font-medium text-accent-hi transition-colors hover:text-foreground"
              >
                Ver portafolio completo
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clients.map((c, i) => (
              <motion.div
                key={c.name}
                {...fadeUp(i * 0.06)}
                className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-0.5 ${
                  c.cover
                    ? "border-border-2 hover:border-accent/40 hover:shadow-[0_12px_36px_rgba(37,99,235,0.18)]"
                    : "card flex flex-col items-center justify-center gap-5 p-8 text-center"
                }`}
              >
                {c.cover ? (
                  <>
                    <Image
                      src={c.cover}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover opacity-85 transition-all duration-700 group-hover:scale-[1.06] group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  </>
                ) : (
                  <div className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-accent/30 transition-colors group-hover:bg-accent-hi" />
                )}
                <div className={`relative z-10 flex flex-col items-center gap-3 ${c.cover ? "mt-auto p-6" : ""}`}>
                  <Image
                    src={c.logo}
                    alt={c.name}
                    width={220}
                    height={110}
                    className={`${c.cover ? "h-12 drop-shadow-[0_2px_14px_rgba(0,0,0,0.9)]" : "h-24"} w-auto object-contain transition-transform duration-500 group-hover:scale-[1.06]`}
                  />
                  <span className={`text-sm font-medium ${c.cover ? "text-white" : "text-muted"} transition-colors group-hover:text-foreground`}>
                    {c.name}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 z-10 h-[2px] w-0 rounded-full bg-accent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PROCESO (Con Banner Visual)
      ══════════════════════════════════════════ */}
      <section className="border-t border-border/40 py-28" style={{ background: "var(--background-alt)" }}>
        <div className="mx-auto max-w-7xl px-6">
          {/* Banner con imagen real del proceso */}
          <motion.div
            {...fadeUp()}
            className="relative overflow-hidden rounded-2xl border border-border-2 mb-16 h-52 md:h-72 shadow-xl"
          >
            <Image
              src="/img/process-bg.png"
              alt="Proceso creativo Rohlfing Concept"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
            <div className="absolute inset-0 flex items-center px-8 md:px-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl max-w-sm">
                Cómo{" "}
                <span className="text-gradient-accent">trabajamos</span>
              </h2>
            </div>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                {...fadeUp(i * 0.07)}
                className={`relative pt-6 ${i > 0 ? "lg:border-l lg:border-border/40 lg:pl-6" : ""}`}
              >
                <span className="num-wm">{s.n}</span>
                <p className="relative text-3xl font-bold text-gradient-accent">{s.n}</p>
                <h3 className="relative mt-4 text-base font-semibold">{s.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NOSOTROS (Con Foto Real del Equipo)
      ══════════════════════════════════════════ */}
      <section id="nosotros" className="border-t border-border/40 py-28">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
          {/* Foto real del fundador */}
          <motion.div {...fadeIn()} className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 aspect-[4/5] shadow-2xl">
              <Image
                src="/img/team/samuel.png"
                alt="Samuel Rohlfing Barrientos — Fundador de Rohlfing Concept"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[10px] uppercase tracking-widest text-muted-2">Fundador</p>
                <p className="mt-1 text-xl font-bold leading-tight">Samuel Rohlfing Barrientos</p>
              </div>
            </div>
            <Link
              href="/equipo"
              className="group absolute -bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-border-2 bg-background/95 px-5 py-3 text-xs font-semibold backdrop-blur-md shadow-xl transition-all hover:border-accent/40 hover:text-accent-hi"
            >
              Conoce al equipo
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          {/* Texto */}
          <div>
            <motion.h2 {...fadeUp()} className="text-3xl font-bold tracking-tight sm:text-4xl">
              Detrás de cada proyecto hay
              <br />
              <span className="text-gradient-accent">personas construyendo tu marca</span>
            </motion.h2>
            <motion.p {...fadeUp(0.08)} className="mt-6 text-base leading-relaxed text-muted">
              En Rohlfing Concept ofrecemos soluciones integrales de diseño, creación de
              contenido y gestión digital. Nos especializamos en desarrollar identidades
              visuales, producir contenido de alto impacto y administrar la presencia
              digital de nuestros clientes.
            </motion.p>

            <motion.ul {...fadeUp(0.14)} className="mt-8 grid grid-cols-2 gap-3">
              {[
                "Se vea profesional",
                "Mantenga coherencia visual",
                "Transmita confianza",
                "Destaque frente a la competencia",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl border border-border-2 bg-surface px-4 py-3 text-sm transition-colors hover:border-accent/30"
                >
                  <Checks size={15} weight="bold" className="flex-shrink-0 text-accent-hi" />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div {...fadeUp(0.2)} className="mt-10">
              <a
                href="https://wa.me/573242123300"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_28px_rgba(37,99,235,0.35)] hover:-translate-y-0.5"
              >
                <WhatsappLogo size={16} weight="fill" />
                Trabajemos juntos
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PREGUNTAS FRECUENTES (info real, acordeón nativo)
      ══════════════════════════════════════════ */}
      <section id="faq" className="border-t border-border/40 py-28" style={{ background: "var(--background-alt)" }}>
        <div className="mx-auto max-w-3xl px-6">
          <motion.h2 {...fadeUp()} className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Preguntas <span className="text-gradient-accent">frecuentes</span>
          </motion.h2>
          <motion.p {...fadeIn(0.08)} className="mt-4 text-center text-base text-muted">
            Lo que más nos preguntan antes de empezar un proyecto.
          </motion.p>

          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <motion.details
                key={f.q}
                {...fadeUp(i * 0.05)}
                className="group rounded-2xl border border-border-2 bg-surface transition-colors open:border-accent/40"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-[15px] font-semibold marker:hidden [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <Plus
                    size={18}
                    weight="bold"
                    className="flex-shrink-0 text-accent-hi transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-sm leading-relaxed text-muted">{f.a}</p>
                  {f.link && (
                    <Link
                      href={f.link.href}
                      className="group/link mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent-hi hover:text-white"
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
          CTA FINAL (Con Fondo de Fluido Oscuro)
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden border-t border-border/40">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/img/cta-bg.png"
            alt=""
            fill
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 py-32 text-center">
          <motion.h2 {...fadeUp()} className="text-3xl font-bold tracking-tight sm:text-5xl">
            ¿Listo para{" "}
            <span className="text-gradient-accent">transformar</span>
            <br />
            tu marca?
          </motion.h2>
          <motion.p {...fadeUp(0.08)} className="mt-5 text-base text-muted">
            Transformamos marcas en experiencias visuales que venden. Trabajemos
            juntos para construir una presencia digital que realmente destaque.
          </motion.p>
          <motion.div {...fadeUp(0.15)} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/573242123300"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_40px_rgba(37,99,235,0.45)] hover:-translate-y-0.5"
            >
              <WhatsappLogo size={16} weight="fill" />
              Empezar proyecto
            </a>
            <Link
              href="/paquetes-publicitarios"
              className="inline-flex items-center gap-2 rounded-full border border-border-2 px-8 py-4 text-sm font-medium text-muted transition-all hover:border-accent/40 hover:text-foreground hover:-translate-y-0.5"
            >
              Ver paquetes <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
