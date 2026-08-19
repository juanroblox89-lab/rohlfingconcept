import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/80 bg-background-alt/90 pt-16 pb-12 overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px blue-glow-line" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-border/60">
          {/* Col 1: Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface border border-accent/30 p-1.5 shadow-[0_0_15px_rgba(30,107,255,0.25)]">
                <Image
                  src="/img/logo-rc.jpeg"
                  alt="Rohlfing Concept"
                  width={36}
                  height={36}
                  className="h-full w-full object-contain filter brightness-125"
                />
              </div>
              <span className="text-base font-bold tracking-wider text-white">
                ROHLFING <span className="text-accent font-normal">CONCEPT</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted">
              Agencia creativa especializada en transformar marcas en experiencias
              visuales que venden y crecen. Diseño gráfico, producción audiovisual,
              desarrollo web y estrategia digital.
            </p>
          </div>

          {/* Col 2: Servicios & Soluciones */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Servicios
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
              <li>
                <Link href="/#servicios" className="hover:text-accent-light transition-colors">
                  Producción Audiovisual
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="hover:text-accent-light transition-colors">
                  Diseño e Identidad Visual
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="hover:text-accent-light transition-colors">
                  Desarrollo Web y Experiencias
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="hover:text-accent-light transition-colors">
                  Gestión de Redes & Estrategia
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Páginas Principales */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Explorar
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
              <li>
                <Link href="/proyectos" className="hover:text-accent-light transition-colors">
                  Portafolio de Proyectos
                </Link>
              </li>
              <li>
                <Link href="/paquetes-publicitarios" className="hover:text-accent-light transition-colors">
                  Paquetes Publicitarios
                </Link>
              </li>
              <li>
                <Link href="/registro-de-marca" className="hover:text-accent-light transition-colors">
                  Registro de Marca (SIC)
                </Link>
              </li>
              <li>
                <Link href="/#nosotros" className="hover:text-accent-light transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto Directo */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Contacto
            </h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <li className="flex items-center gap-2">
                <span className="text-accent font-mono">WA:</span>
                <a
                  href="https://wa.me/573242123300"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +57 324 212 3300
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent font-mono">@:</span>
                <a
                  href="mailto:rohlfingconcept@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  rohlfingconcept@gmail.com
                </a>
              </li>
              <li className="text-xs text-muted/80">
                Medellín & Antioquia, Colombia (Atención global)
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Rohlfing Concept. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1 text-muted/60">
            Diseño e Ingeniería de Alto Nivel
          </p>
        </div>
      </div>
    </footer>
  );
}
