import Image from "next/image";
import Link from "next/link";
import ClientMarquee from "@/components/ClientMarquee";

const services = [
  {
    n: "01",
    category: "CREACIÓN AUDIOVISUAL",
    title: "Producción & Edición Audiovisual",
    desc: "Creamos contenido audiovisual pensado para potenciar tu marca, combinando creatividad, edición y estrategia para lograr piezas de alto impacto.",
    features: [
      "Edición de video profesional y corrección de color",
      "Reels, TikToks y formatos cortos de alta retención",
      "Grabación presencial desde cero según tu identidad",
      "Animación de logotipo para dar dinamismo a la marca",
    ],
    pillars: [
      "Genera mayor impacto visual",
      "Mantiene una presencia más profesional",
      "Conecta mejor con su audiencia",
      "Transmite calidad y dinamismo",
    ],
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    n: "02",
    category: "DISEÑO & BRANDING",
    title: "Identidad Visual & Diseño Gráfico",
    desc: "Construimos marcas sólidas, memorables y con una presencia profesional que genera confianza desde el primer vistazo.",
    features: [
      "Logos únicos que representan la esencia de tu marca",
      "Piezas visuales modernas que impulsan campañas",
      "Gráficos vectoriales precisos para cualquier formato",
      "Manuales de identidad y directrices de marca",
    ],
    pillars: [
      "Se vea profesional",
      "Mantenga coherencia visual",
      "Transmita confianza",
      "Destaque frente a la competencia",
    ],
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    n: "03",
    category: "SERVICIOS DIGITALES",
    title: "Desarrollo Web & Experiencias",
    desc: "Creamos entornos digitales para mejorar la forma en que tu marca se presenta, comunica y conecta con clientes en internet.",
    features: [
      "Páginas web funcionales enfocadas en conversión",
      "Presentaciones visuales y diapositivas ejecutivas",
      "Optimización para dispositivos móviles y velocidad",
      "Integración directa con canales de venta y WhatsApp",
    ],
    pillars: [
      "Mantiene presencia digital activa",
      "Comunica mejor la información",
      "Genera mayor confianza y orden",
      "Se adapta a entornos digitales modernos",
    ],
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    n: "04",
    category: "GESTIÓN DE CONTENIDO",
    title: "Administración Digital & Redes",
    desc: "Gestión constante y estructurada para que tu negocio mantenga una presencia digital organizada, profesional y orientada al crecimiento.",
    features: [
      "Planificación y parrillas de contenido mensual",
      "Administración y publicación periódica en redes",
      "Optimización de perfiles comerciales",
      "Monitoreo estratégico de alcance y métricas",
    ],
    pillars: [
      "Ahorro de tiempo operativo",
      "Publicaciones con estrategia",
      "Crecimiento constante de audiencia",
      "Posicionamiento de autoridad",
    ],
    icon: (
      <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
];

const strategyPillars = [
  {
    step: "PLANEACIÓN",
    title: "Análisis del Proyecto",
    desc: "Cada marca tiene necesidades distintas, por eso evaluamos el enfoque y objetivo antes de desarrollar cualquier proceso.",
  },
  {
    step: "DISEÑO",
    title: "Desarrollo Visual",
    desc: "Construimos propuestas visuales organizadas, memorables y coherentes con la identidad de cada marca.",
  },
  {
    step: "TECNOLOGÍA",
    title: "Adaptación Digital",
    desc: "Buscamos que cada proyecto funcione correctamente en entornos digitales y multiplataformas sin fricción.",
  },
  {
    step: "IMPACTO",
    title: "Enfoque en Presencia",
    desc: "Trabajamos cada detalle buscando una imagen más sólida, profesional y atractiva para destacar en el mercado.",
  },
];

const processSteps = [
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
    title: "Entrega final optimizada",
    desc: "Entregamos el proyecto preparado para su uso inmediato en plataformas digitales o medios correspondientes.",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Blue Glow Lighting */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/20 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute top-12 right-10 w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-6 grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Hero Text Block */}
          <div className="lg:col-span-6 flex flex-col justify-center z-10">
            {/* Tagline */}
            <div className="mb-6 inline-flex items-center gap-2.5">
              <span className="h-0.5 w-6 bg-accent" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                Agencia Creativa
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Creamos marcas
              <br />
              que destacan,
              <br />
              <span className="text-accent drop-shadow-[0_0_25px_rgba(30,107,255,0.4)]">
                venden
              </span>{" "}
              y{" "}
              <span className="text-accent drop-shadow-[0_0_25px_rgba(30,107,255,0.4)]">
                crecen
              </span>
              .
            </h1>

            {/* Paragraph */}
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Diseño gráfico, contenido audiovisual, branding y desarrollo web para
              empresas que quieren verse tan profesionales como son.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/proyectos"
                className="btn-primary-glow inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold text-white transition-transform"
              >
                Ver proyectos ↗
              </Link>
              <a
                href="https://wa.me/573242123300?text=Hola%20Rohlfing%20Concept,%20deseo%20agendar%20una%20llamada"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-glass inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:text-white"
              >
                Agendar llamada ↗
              </a>
            </div>

            {/* Real Verified Metrics from Wix Site */}
            <div className="mt-10 grid grid-cols-3 gap-4 pt-6 border-t border-border/50 text-muted">
              <div>
                <span className="block text-2xl font-extrabold text-white font-mono">+300</span>
                <span className="text-xs">Proyectos desarrollados</span>
              </div>
              <div className="border-l border-border/60 pl-4">
                <span className="block text-2xl font-extrabold text-accent font-mono">+2.3M</span>
                <span className="text-xs">Visualizaciones reales</span>
              </div>
              <div className="border-l border-border/60 pl-4">
                <span className="block text-2xl font-extrabold text-white font-mono">100%</span>
                <span className="text-xs">Sin plantillas genéricas</span>
              </div>
            </div>
          </div>

          {/* Right Hero 3D Mockup Composition */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-2xl group">
              <div className="absolute inset-0 bg-accent/25 rounded-3xl blur-[60px] transform group-hover:scale-105 transition-transform duration-700 -z-10" />
              
              <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                <Image
                  src="/img/hero-3d.jpeg"
                  alt="Rohlfing Concept - Composición de proyectos para El Tizón Dorado, Plomería Norte, Villa Grande"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-[1.02]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLIENT MARQUEE / LETRERO INFINITO */}
      <ClientMarquee />

      {/* 3. NUESTROS SERVICIOS COMPLETOS */}
      <section id="servicios" className="relative py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
                <span className="h-0.5 w-6 bg-accent" />
                Nuestros Servicios
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Soluciones creativas y digitales
                <br className="hidden sm:inline" />
                para potenciar tu marca
              </h2>
            </div>
            <p className="max-w-md text-sm text-muted">
              Desde la identidad visual hasta la gestión de contenido y desarrollo web, trabajamos cada proceso con intención para que tu negocio destaque y crezca.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.n}
                className="glass-card group flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 hover:border-accent/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 border border-accent/30 shadow-[0_0_15px_rgba(30,107,255,0.2)] group-hover:bg-accent/20 group-hover:border-accent transition-colors">
                        {s.icon}
                      </div>
                      <span className="text-[11px] font-mono uppercase tracking-widest text-accent font-bold">
                        {s.category}
                      </span>
                    </div>
                    <span className="text-sm font-mono font-bold text-muted/50">
                      {s.n}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-light transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted mb-6">
                    {s.desc}
                  </p>

                  {/* Entregables */}
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-white/80 block mb-3">
                      Incluye:
                    </span>
                    <ul className="grid gap-2 sm:grid-cols-2 text-xs text-muted/90">
                      {s.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Pilares */}
                <div className="pt-5 border-t border-white/5 bg-black/20 -mx-8 -mb-8 p-6 rounded-b-3xl">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-accent-light block mb-2">
                    En Rohlfing Concept trabajamos para que tu marca:
                  </span>
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted">
                    {s.pillars.map((pil, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="text-accent">✓</span> {pil}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MÁS QUE DISEÑO, CONSTRUIMOS PRESENCIA */}
      <section id="nosotros" className="relative py-24 bg-background-alt border-y border-border/80">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center mb-16">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
                <span className="h-0.5 w-6 bg-accent" />
                Sobre Rohlfing Concept
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Más que diseño, construimos presencia
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                En Rohlfing Concept ofrecemos soluciones integrales de diseño, creación de contenido y gestión digital. Nos especializamos en desarrollar identidades visuales, editar y producir contenido de alto impacto, y administrar la presencia digital de nuestros clientes para potenciar su crecimiento.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Detrás de cada proyecto existe una marca, una idea y una meta distinta. Por eso trabajamos cada proceso con dedicación, buscando crear resultados que realmente representen la visión y eleven la reputación de cada cliente.
              </p>
              <div className="mt-8">
                <a
                  href="https://wa.me/573242123300?text=Hola%20Rohlfing%20Concept,%20quiero%20conocer%20m%C3%A1s%20sobre%20su%20agencia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-glow inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white"
                >
                  Hablar con la agencia ↗
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid gap-4 sm:grid-cols-2">
              {strategyPillars.map((p, idx) => (
                <div
                  key={idx}
                  className="glass-card rounded-2xl p-6 transition-all duration-300"
                >
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-md border border-accent/20">
                    {p.step}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-3 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. NUESTRO PROCESO DE TRABAJO EN 4 PASOS */}
      <section className="relative py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
              <span className="h-0.5 w-6 bg-accent" />
              Metodología de Trabajo
              <span className="h-0.5 w-6 bg-accent" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Nuestro proceso en 4 pasos
            </h2>
            <p className="mt-4 text-sm text-muted">
              Cada proyecto se desarrolla mediante un proceso organizado que nos permite mantener claridad, coherencia y una mejor ejecución en cada etapa del trabajo.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.n}
                className="glass-card rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-accent/40"
              >
                <div>
                  <span className="text-4xl font-extrabold text-accent font-mono block mb-4">
                    {step.n}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALLOUT DEDICATED PAGES PREVIEW */}
      <section className="relative py-20 bg-background-alt border-t border-border/80">
        <div className="mx-auto max-w-7xl px-6 grid gap-8 md:grid-cols-2">
          {/* Card 1: Paquetes Publicitarios */}
          <div className="glass-card relative overflow-hidden rounded-3xl p-8 md:p-10 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/15 rounded-full blur-3xl pointer-events-none" />
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                Planes Mensuales
              </span>
              <h3 className="text-3xl font-extrabold text-white mt-4 mb-3">
                Paquetes Publicitarios
              </h3>
              <p className="text-sm leading-relaxed text-muted mb-6">
                Planes integrales desde $290.000 COP con grabación presencial de videos, piezas gráficas y administración de redes sociales para impulsar tu marca mes a mes.
              </p>
            </div>
            <Link
              href="/paquetes-publicitarios"
              className="btn-secondary-glass inline-flex items-center justify-between rounded-2xl px-6 py-4 text-sm font-bold text-white hover:border-accent transition-all"
            >
              <span>Ver planes: Inicial ($290k), Crecimiento ($390k), Expansión ($520k)</span>
              <span>→</span>
            </Link>
          </div>

          {/* Card 2: Registro de Marca */}
          <div className="glass-card relative overflow-hidden rounded-3xl p-8 md:p-10 flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                Alianza Jurídica SIC
              </span>
              <h3 className="text-3xl font-extrabold text-white mt-4 mb-3">
                Registro de Marca Oficial
              </h3>
              <p className="text-sm leading-relaxed text-muted mb-6">
                Protege tu nombre y logotipo ante la Superintendencia de Industria y Comercio (SIC) en alianza directa con <span className="text-white font-semibold">Ilegítimas — Abogadas</span>.
              </p>
            </div>
            <Link
              href="/registro-de-marca"
              className="btn-secondary-glass inline-flex items-center justify-between rounded-2xl px-6 py-4 text-sm font-bold text-white hover:border-accent transition-all"
            >
              <span>Estudio de antecedentes, requisitos y radicación legal</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CTA FINAL & CONTACTO */}
      <section id="contacto" className="relative py-24 bg-background overflow-hidden">
        <div className="absolute inset-0 blue-glow-bg opacity-30 pointer-events-none" />
        <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
          <div className="glass-card rounded-3xl p-10 md:p-16 shadow-[0_0_50px_rgba(30,107,255,0.15)] border border-accent/30">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
              Los buenos resultados son posibles con la Agencia correcta
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              Hagamos que tu marca destaque
            </h2>
            <p className="mt-6 max-w-xl mx-auto text-base text-muted">
              Cuéntanos tu idea y construyamos algo que realmente represente tu marca. Conversa directamente con nuestro equipo creativo.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/573242123300?text=Hola%20Rohlfing%20Concept,%20estoy%20listo%20para%20iniciar%20un%20proyecto"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-glow rounded-full px-8 py-3.5 text-sm font-semibold text-white"
              >
                Escribir al WhatsApp (+57 324 212 3300) ↗
              </a>
              <a
                href="mailto:rohlfingconcept@gmail.com"
                className="btn-secondary-glass rounded-full px-7 py-3.5 text-sm font-semibold text-foreground hover:text-white"
              >
                rohlfingconcept@gmail.com ✉
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
