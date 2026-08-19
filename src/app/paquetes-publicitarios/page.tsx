import Link from "next/link";

const planes = [
  {
    nombre: "Plan Inicial",
    precio: "$290.000",
    periodo: "COP / mes",
    tagline: "Ideal para empezar la presencia digital de forma organizada y profesional.",
    destacado: false,
    items: [
      "4 videos cortos (Reels / TikToks)",
      "Grabación presencial de los videos",
      "2 piezas gráficas publicitarias",
      "Administración de 1 red social",
      "Red adicional por solo +$30.000",
      "Edición y corrección de color profesional",
      "Entrega optimizada para algoritmos",
    ],
    waMessage: "Hola Rohlfing Concept, me interesa contratar el *Plan Inicial ($290.000)*",
  },
  {
    nombre: "Plan Crecimiento",
    precio: "$390.000",
    periodo: "COP / mes",
    tagline: "Ideal para marcas que buscan mayor tracción, dinamismo y volumen de contenido.",
    destacado: true,
    badge: "MÁS POPULAR",
    items: [
      "4 videos cortos (Reels / TikToks)",
      "2 videos largos (Formato extendido / YouTube)",
      "Grabación presencial de los videos",
      "2 piezas gráficas publicitarias",
      "Administración de 1 red social",
      "Red adicional por solo +$30.000",
      "Guiones y ganchos de alta retención",
      "Edición de sonido y efectos dinámicos",
    ],
    waMessage: "Hola Rohlfing Concept, me interesa contratar el *Plan Crecimiento ($390.000)*",
  },
  {
    nombre: "Plan Expansión",
    precio: "$520.000",
    periodo: "COP / mes",
    tagline: "Ideal para marcas que quieren dominar su nicho y acelerar su presencia comercial.",
    destacado: false,
    items: [
      "6 videos cortos (Reels / TikToks)",
      "3 videos largos (Formato extendido)",
      "Grabación presencial de los videos",
      "2 piezas gráficas publicitarias",
      "Administración de 1 red social",
      "Red adicional por solo +$30.000",
      "Estrategia de contenido mensual",
      "Parrilla de publicación y monitoreo",
    ],
    waMessage: "Hola Rohlfing Concept, me interesa contratar el *Plan Expansión ($520.000)*",
  },
];

const faqs = [
  {
    q: "¿Cómo se coordina la grabación de los videos?",
    a: "Agendamos una jornada de producción en tus instalaciones o en una locación acordada. Previamente estructuramos los guiones para maximizar el tiempo y obtener tomas de alta calidad.",
  },
  {
    q: "¿Qué incluye la administración de redes?",
    a: "Programación y publicación del contenido en las horas de mayor impacto, redacción de copys persuasivos y monitoreo básico de interacción.",
  },
  {
    q: "¿Puedo personalizar o solicitar servicios adicionales?",
    a: "¡Totalmente! Puedes añadir redes adicionales por $30.000 c/u, solicitar desarrollo web, registro de marca o sesiones de diseño extra según el crecimiento de tu marca.",
  },
];

export const metadata = {
  title: "Paquetes Publicitarios | Rohlfing Concept",
  description: "Planes mensuales de contenido audiovisual, diseño gráfico y gestión de redes sociales para impulsar tu marca.",
};

export default function PaquetesPublicitarios() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-accent/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
            <span className="h-0.5 w-6 bg-accent" />
            Planes Mensuales Integrales
            <span className="h-0.5 w-6 bg-accent" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Paquetes Publicitarios
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Soluciones completas pensadas para fortalecer la presencia digital de tu negocio, unificando producción de video, diseño gráfico y administración en una estrategia profesional.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-3 items-stretch">
          {planes.map((plan) => (
            <div
              key={plan.nombre}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.destacado
                  ? "bg-surface border-2 border-accent shadow-[0_0_40px_rgba(30,107,255,0.3)] lg:-translate-y-3"
                  : "glass-card hover:border-accent/40"
              }`}
            >
              {plan.destacado && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-[11px] font-extrabold tracking-widest text-white shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.nombre}</h3>
                <p className="text-xs leading-relaxed text-muted mb-6">{plan.tagline}</p>

                <div className="mb-6 pb-6 border-b border-border/80 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white tracking-tight">
                    {plan.precio}
                  </span>
                  <span className="text-xs font-medium text-muted">{plan.periodo}</span>
                </div>

                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent-light block mb-4">
                    ¿Qué incluye este plan?
                  </span>
                  <ul className="flex flex-col gap-3 text-sm text-foreground/90">
                    {plan.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <svg
                          className="h-5 w-5 text-accent shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <a
                  href={`https://wa.me/573242123300?text=${encodeURIComponent(plan.waMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center rounded-full py-3.5 text-center text-sm font-bold transition-all ${
                    plan.destacado
                      ? "btn-primary-glow text-white"
                      : "btn-secondary-glass text-white hover:bg-accent hover:border-accent"
                  }`}
                >
                  Contratar {plan.nombre} ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Preguntas Frecuentes sobre los Paquetes
            </h2>
            <p className="mt-2 text-sm text-muted">
              Todo lo que necesitas saber antes de comenzar.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {faqs.map((f, i) => (
              <div key={i} className="glass-card rounded-2xl p-6">
                <h4 className="text-base font-bold text-white mb-2">{f.q}</h4>
                <p className="text-xs leading-relaxed text-muted">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted mb-4">¿Requieres un paquete a la medida de tu empresa?</p>
          <a
            href="https://wa.me/573242123300?text=Hola%20Rohlfing%20Concept,%20necesito%20un%20plan%20publicitario%20personalizado"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white hover:border-accent"
          >
            Cotizar plan personalizado con un asesor ↗
          </a>
        </div>
      </div>
    </main>
  );
}
