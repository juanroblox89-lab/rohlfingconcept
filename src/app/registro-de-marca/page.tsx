import Link from "next/link";

const pasos = [
  {
    n: "01",
    title: "Estudio de antecedentes marcarios",
    desc: "Búsqueda exhaustiva en las bases de datos oficiales para identificar posibles causales de irregistrabilidad o conflictos con marcas similares previamente registradas. Entregamos un informe legal detallado con porcentaje de viabilidad.",
  },
  {
    n: "02",
    title: "Recomendaciones estratégicas",
    desc: "Con base en los hallazgos del estudio, te asesoramos sobre los ajustes visuales, fonéticos o nominales necesarios para blindar tu marca y maximizar las probabilidades de éxito.",
  },
  {
    n: "03",
    title: "Clasificación de la marca (Niza)",
    desc: "Analizamos y definimos con precisión las clases correspondientes a tus productos o servicios según la Clasificación Internacional de Niza antes de radicar la solicitud.",
  },
  {
    n: "04",
    title: "Radicación y seguimiento legal",
    desc: "Presentamos formalmente la solicitud de registro ante la Superintendencia de Industria y Comercio (SIC) y realizamos un monitoreo continuo del expediente hasta su resolución final.",
  },
];

const beneficios = [
  {
    title: "Propiedad Exclusiva",
    desc: "Nadie más en Colombia podrá usar tu nombre comercial ni tu logotipo en tu categoría.",
  },
  {
    title: "Valor Patrimonial",
    desc: "Una marca registrada se convierte en un activo intangible comercializable, franquiciable y transferible.",
  },
  {
    title: "Protección contra Plagio",
    desc: "Herramientas jurídicas inmediatas para frenar imitaciones, copias desleales o usurpación de identidad.",
  },
  {
    title: "Alianza Legal Experta",
    desc: "Acompañamiento integral a través de nuestra alianza con la firma jurídica Ilegítimas — Abogadas.",
  },
];

export const metadata = {
  title: "Registro de Marca ante la SIC | Rohlfing Concept",
  description: "Trámite oficial de registro de marca ante la Superintendencia de Industria y Comercio en alianza con Ilegítimas — Abogadas.",
};

export default function RegistroDeMarca() {
  return (
    <main className="min-h-screen py-16 md:py-24">
      {/* Background Glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[400px] bg-accent/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">
            <span className="h-0.5 w-6 bg-accent" />
            Protección de Propiedad Intelectual
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Registro de marca ante la SIC
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            En Rohlfing Concept ofrecemos el servicio integral de registro de marca ante la Superintendencia de Industria y Comercio (SIC), en alianza directa con <span className="text-white font-semibold">Ilegítimas — Abogadas</span>.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://wa.me/573242123300?text=Hola%20Rohlfing%20Concept,%20deseo%20solicitar%20el%20estudio%20de%20antecedentes%20para%20mi%20marca"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-glow rounded-full px-7 py-3.5 text-sm font-semibold text-white"
            >
              Solicitar estudio de antecedentes ↗
            </a>
            <Link
              href="/#contacto"
              className="btn-secondary-glass rounded-full px-6 py-3.5 text-sm font-semibold text-foreground hover:text-white"
            >
              Consultar con un especialista
            </Link>
          </div>
        </div>

        {/* 4 Steps Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-white sm:text-3xl mb-8">
            El proceso legal paso a paso
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {pasos.map((p) => (
              <div key={p.n} className="glass-card rounded-2xl p-8 transition-all duration-300">
                <span className="text-sm font-mono font-bold text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                  Paso {p.n}
                </span>
                <h3 className="mt-4 text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fee Breakdown Cards */}
        <div className="mb-20 grid gap-6 md:grid-cols-2">
          {/* Official SIC Fee */}
          <div className="glass-card rounded-3xl p-8 border border-border/80 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted">
                Tasas Oficiales (SIC)
              </span>
              <h3 className="mt-2 text-3xl font-extrabold text-white">
                $970.500 – $1'348.500 <span className="text-xs font-normal text-muted">COP</span>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Valor oficial establecido por la Superintendencia de Industria y Comercio de Colombia para iniciar el trámite de radicación formal por clase.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-muted/80">
              * Tasas fijadas anualmente por la SIC.
            </div>
          </div>

          {/* Legal Service Alliance */}
          <div className="glass-card rounded-3xl p-8 border border-accent/40 bg-surface/80 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent">
                Alianza Jurídica
              </span>
              <h3 className="mt-2 text-2xl font-bold text-white">
                Ilegítimas — Abogadas & Rohlfing
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Te acompañamos en la búsqueda de antecedentes, elaboración de respuestas a oposiciones y la radicación legal completa con abogadas especializadas en propiedad industrial.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="https://wa.me/573242123300?text=Hola%20Rohlfing%20Concept,%20quiero%20cotizar%20el%20servicio%20completo%20de%20registro%20de%20marca"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-glow inline-flex w-full items-center justify-center rounded-full py-3 text-center text-sm font-bold text-white"
              >
                Cotizar acompañamiento legal completo ↗
              </a>
            </div>
          </div>
        </div>

        {/* Why register your brand */}
        <div className="glass-card rounded-3xl p-10 md:p-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center sm:text-left">
            ¿Por qué es indispensable registrar tu marca?
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {beneficios.map((b, i) => (
              <div key={i} className="flex flex-col gap-2">
                <span className="h-1 w-8 bg-accent rounded-full mb-1" />
                <h4 className="text-base font-bold text-white">{b.title}</h4>
                <p className="text-xs leading-relaxed text-muted">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
