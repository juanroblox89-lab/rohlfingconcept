// ─────────────────────────────────────────────────────────────────────────────
// Datos de servicios y precios — 100% reales, extraídos del sitio original
// (rohlfingconcept.com, páginas blank-3…blank-14) y verificados contra el HTML.
// ─────────────────────────────────────────────────────────────────────────────

export type ItemDetalle = { t: string; d?: string };

export type Plan = {
  nombre: string;
  precio: string;
  tagline?: string;
  items: ItemDetalle[];
};

export type Bloque =
  | { tipo: "planes"; titulo: string; planes: Plan[] }
  | {
      tipo: "elementos";
      titulo: string;
      elementos: { label: string; precio: string }[];
    }
  | { tipo: "video"; titulo: string }
  | {
      tipo: "itemsPrecio";
      titulo: string;
      items: { nombre: string; desc: string; precio: string }[];
    }
  | {
      tipo: "packs";
      titulo: string;
      packs: { nombre: string; precio: string; incluye: string[] }[];
    }
  | { tipo: "unico"; titulo: string; precio: string; incluye: string[]; tipos: string[] };

export type GrupoServicio = "Identidad visual" | "Contenido audiovisual" | "Presencia digital";

export type Servicio = {
  slug: string;
  nombre: string;
  kicker: string;
  intro: string;
  grupo: GrupoServicio;
  desde: string;
  resumen: string;
  bloques: Bloque[];
};

// Datos estructurados de EDICIÓN DE VIDEO (tabla real: 3 niveles × 6 duraciones)
export const videoData = {
  duraciones: [
    "10 seg - 1 min",
    "1 min - 3 min",
    "3 min - 10 min",
    "11 min - 30 min",
    "31 min - 60 min",
    "Más de 61 min",
  ],
  niveles: [
    {
      nombre: "Edición Básica",
      desc: "Solución práctica para mejorar la calidad general del video de forma rápida y limpia.",
      precios: ["$20.000", "$30.000", "$50.000", "$90.000", "$150.000", "$250.000"],
      incluye: [
        { t: "Corte y organización de material", d: "Selección de los mejores fragmentos y eliminación de errores." },
        { t: "Ajuste básico de color y luz", d: "Corrección general para una imagen más clara y equilibrada." },
        { t: "Optimización de audio", d: "Mejora básica del sonido para mayor claridad." },
        { t: "Exportación final", d: "Entrega en el formato solicitado, listo para redes o reproducción." },
      ],
      extra: { valor: "+$25.000", label: "Exportación en 4K" },
      nota: "El proyecto se desarrolla según la duración, formato y nivel de complejidad, adaptándose a la resolución y orientación requerida (horizontal o vertical), de acuerdo a las necesidades del cliente.",
    },
    {
      nombre: "Edición Dinámica",
      desc: "Edición enfocada en generar mayor impacto visual mediante ritmo y elementos gráficos.",
      precios: ["$30.000", "$50.000", "$90.000", "$130.000", "$200.000", "$300.000"],
      incluye: [
        { t: "Edición completa del material", d: "Organización fluida del contenido con mejor narrativa." },
        { t: "Transiciones dinámicas", d: "Cambios de escena más fluidos y atractivos." },
        { t: "Texto en pantalla", d: "Integración de títulos, frases o refuerzos visuales." },
        { t: "Música y ritmo", d: "Sincronización del contenido con audio para mayor impacto." },
      ],
      extra: { valor: "+$40.000", label: "Ajuste de color y audio mejorado", desc: "Mayor uniformidad audiovisual en todo el video." },
      nota: "La entrega será según las solicitudes del cliente, tales como la resolución, la orientación y el tipo de contenido, garantizando calidad y resultados en cada proyecto.",
    },
    {
      nombre: "Edición Avanzada",
      desc: "Edición profesional con mayor nivel de detalle, pensada para contenido más trabajado y atractivo.",
      precios: ["$50.000", "$70.000", "$120.000", "$180.000", "$290.000", "$400.000"],
      incluye: [
        { t: "Edición narrativa completa", d: "Construcción del video con intención y estructura clara." },
        { t: "Corrección de color y audio más precisa", d: "Mejora audiovisual más detallada y estética." },
        { t: "Efectos visuales", d: "Integración de elementos que enriquecen el contenido." },
        { t: "Diseño visual en pantalla", d: "Textos, stickers y recursos gráficos más elaborados." },
      ],
      extra: { valor: "+$50.000", label: "Ajuste de ritmo avanzado", desc: "Edición más dinámica, envolvente y con un resultado más profesional y pulido." },
      nota: "El archivo posee especificaciones avanzadas profesionales: resolución, orientación y desarrollo de guion pensados para conectar con un público objetivo.",
    },
  ],
};

export const servicios: Servicio[] = [
  // ═══════════════════════ IDENTIDAD VISUAL ═══════════════════════
  {
    slug: "logos",
    nombre: "Logos",
    kicker: "Construcción de identidad desde el logo",
    intro:
      "Ofrecemos soluciones de diseño estructuradas en paquetes, pensadas para crear logos que destaquen y generen reconocimiento.",
    grupo: "Identidad visual",
    desde: "$50.000",
    resumen: "9 planes de logo, desde la primera propuesta hasta la identidad completa con manual y animaciones.",
    bloques: [
      {
        tipo: "planes",
        titulo: "Planes de logo",
        planes: [
          {
            nombre: "Plan Económico",
            precio: "$50.000",
            tagline: "Ideal para emprendedores que buscan iniciar con una identidad profesional.",
            items: [
              { t: "Reunión inicial" },
              { t: "1 propuesta de logo" },
              { t: "3 mockups" },
              { t: "3 modificaciones" },
              { t: "Entrega en formato PNG" },
            ],
          },
          {
            nombre: "Plan Sencillo",
            precio: "$75.000",
            tagline: "Ideal para marcas que buscan mayor desarrollo visual y una presentación más completa.",
            items: [
              { t: "Reunión inicial" },
              { t: "1 propuesta de logo" },
              { t: "5 mockups" },
              { t: "5 modificaciones" },
              { t: "Entrega en formato PNG" },
            ],
          },
          {
            nombre: "Plan Común",
            precio: "$120.000",
            tagline: "Ideal para marcas que buscan una identidad completa, versátil y con mayor personalización.",
            items: [
              { t: "Reunión inicial" },
              { t: "2 propuestas de logo" },
              { t: "5 mockups" },
              { t: "5 modificaciones" },
              { t: "Entrega en formato PNG" },
              { t: "1 variación de logo extra" },
            ],
          },
          {
            nombre: "Plan Avanzado",
            precio: "$150.000",
            tagline: "Ideal para marcas que buscan una identidad completa, profesional y lista para cualquier aplicación.",
            items: [
              { t: "Reunión inicial" },
              { t: "2 propuestas de logo" },
              { t: "6 mockups" },
              { t: "5 modificaciones" },
              { t: "Entrega en formato PNG y PDF" },
              { t: "1 variación de logo extra" },
              { t: "Elementos separados" },
            ],
          },
          {
            nombre: "Plan Experto",
            precio: "$175.000",
            tagline: "Una identidad completa, profesional y lista para cualquier uso sin limitaciones.",
            items: [
              { t: "Reunión inicial" },
              { t: "2 propuestas de logo" },
              { t: "7 mockups" },
              { t: "6 modificaciones" },
              { t: "Entrega en formato PNG, PDF e Illustrator" },
              { t: "1 variación de logo extra" },
              { t: "Elementos separados" },
            ],
          },
          {
            nombre: "Plan Premium",
            precio: "$210.000",
            tagline: "Para marcas que requieren una identidad de alto nivel, con recursos completos y una presentación impactante.",
            items: [
              { t: "Reunión inicial" },
              { t: "3 propuestas de logo" },
              { t: "7 mockups" },
              { t: "7 modificaciones" },
              { t: "Entrega en formato PNG, PDF e Illustrator" },
              { t: "1 variación de logo extra" },
              { t: "Elementos separados" },
              { t: "Animación de 1 logo (5-10 segundos)" },
            ],
          },
          {
            nombre: "Plan Estrella",
            precio: "$260.000",
            tagline: "Para marcas que requieren una identidad integral, con lineamientos claros y una presencia sólida.",
            items: [
              { t: "Reunión inicial" },
              { t: "3 propuestas de logo" },
              { t: "7 mockups" },
              { t: "7 modificaciones" },
              { t: "Entrega en formato PNG, PDF e Illustrator" },
              { t: "2 variaciones de logo extra" },
              { t: "Elementos separados" },
              { t: "Animación de 1 logo (5-10 segundos)" },
              { t: "Manual de uso tipográfico y de color" },
            ],
          },
          {
            nombre: "Plan Expert-Premium",
            precio: "$300.000",
            tagline: "Una identidad completa, estratégica y con máximo desarrollo creativo, lista para cualquier entorno.",
            items: [
              { t: "Reunión inicial" },
              { t: "3 propuestas de logo" },
              { t: "8 mockups" },
              { t: "8 modificaciones" },
              { t: "Entrega en formato PNG, PDF e Illustrator" },
              { t: "2 variaciones de logo extra" },
              { t: "Elementos separados" },
              { t: "Animación de 2 logos (5-10 segundos)" },
              { t: "Manual de uso tipográfico y de color" },
            ],
          },
          {
            nombre: "Plan Élite",
            precio: "$375.000",
            tagline: "Para marcas que requieren una identidad integral, altamente desarrollada y preparada para escalar.",
            items: [
              { t: "Reunión inicial" },
              { t: "3 propuestas de logo" },
              { t: "10 mockups" },
              { t: "10 modificaciones" },
              { t: "Entrega en formato PNG, PDF e Illustrator" },
              { t: "2 variaciones de logo extra" },
              { t: "Elementos separados" },
              { t: "Animación de 3 logos (5-10 segundos)" },
              { t: "Manual de uso tipográfico y de color" },
            ],
          },
        ],
      },
      {
        tipo: "elementos",
        titulo: "Elementos individuales",
        elementos: [
          { label: "Asesoría", precio: "$50.000" },
          { label: "1 mockup", precio: "$15.000" },
          { label: "Ajuste de archivo (PNG, JPG, PDF)", precio: "$10.000" },
          { label: "Variación de logo extra — PNG", precio: "$50.000" },
          { label: "Variación de logo extra — Illustrator", precio: "$60.000" },
          { label: "Creación de elementos (x5) PNG, Illustrator", precio: "$50.000" },
          { label: "1 animación de logo", precio: "$60.000" },
          { label: "Manual de uso tipográfico y de color", precio: "$60.000" },
        ],
      },
    ],
  },
  {
    slug: "disenos",
    nombre: "Diseños",
    kicker: "Diseño gráfico publicitario",
    intro:
      "Creamos piezas gráficas únicas y profesionales para redes sociales o impresión, diseñadas para comunicar, captar atención y transmitir valor de marca.",
    grupo: "Identidad visual",
    desde: "$50.000",
    resumen: "Posts, flyers, banners y piezas para impresión, con diseño personalizado y 2 modificaciones.",
    bloques: [
      {
        tipo: "unico",
        titulo: "Pieza gráfica publicitaria",
        precio: "$50.000",
        incluye: [
          "Diseño personalizado",
          "Adaptación al formato requerido",
          "2 modificaciones",
          "Entrega en formato PNG, JPG y PDF",
        ],
        tipos: ["Post para redes sociales", "Flyers publicitarios", "Banners promocionales", "Piezas para impresión"],
      },
    ],
  },
  {
    slug: "vectorial",
    nombre: "Vectorial",
    kicker: "Diseño vectorial profesional",
    intro:
      "Desarrollamos diseños vectoriales que mantienen su nitidez y profesionalismo en cualquier formato digital e impreso.",
    grupo: "Identidad visual",
    desde: "$60.000",
    resumen: "Vectorización de logos e imágenes y packs completos con ilustración y mockups de impresión.",
    bloques: [
      {
        tipo: "itemsPrecio",
        titulo: "Servicios individuales",
        items: [
          {
            nombre: "Vectorización de logo",
            desc: "Convertimos tu logo a formato vectorial para que mantenga su calidad en cualquier tamaño y sea apto para impresión y uso profesional.",
            precio: "$60.000",
          },
          {
            nombre: "Vectorización de imagen",
            desc: "Convertimos tu diseño o ilustración a formato vectorial, recreándolo con precisión para lograr mayor calidad, nitidez y uso profesional.",
            precio: "$80.000",
          },
          {
            nombre: "Diseño vectorial desde cero",
            desc: "Creamos gráficos vectoriales desde cero, desarrollados con precisión y adaptados a las necesidades de tu marca o proyecto.",
            precio: "$100.000",
          },
        ],
      },
      {
        tipo: "packs",
        titulo: "Packs vectoriales",
        packs: [
          {
            nombre: "Pack Desde Cero",
            precio: "$100.000",
            incluye: ["Vectorización inicial del logo", "5 elementos gráficos adicionales", "Entrega en PNG e Illustrator"],
          },
          {
            nombre: "Pack Creador",
            precio: "$250.000",
            incluye: [
              "Vectorización inicial del logo",
              "5 elementos gráficos adicionales",
              "Ilustración alusiva a la marca / proyecto",
              "Textura web o portal",
              "Entrega en PNG e Illustrator",
            ],
          },
          {
            nombre: "Pack Empresa",
            precio: "$400.000",
            incluye: [
              "Vectorización inicial del logo y sus variables",
              "10 elementos gráficos adicionales",
              "Ilustración alusiva a la marca / proyecto",
              "Textura web o portal",
              "Entrega en PNG e Illustrator",
              "5 mockups de impresión",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "branding",
    nombre: "Branding",
    kicker: "Branding de marca",
    intro:
      "Creamos marcas con identidad, propósito y dirección clara, integrando estrategia y diseño para construir una presencia sólida y profesional. Cada proyecto se desarrolla desde su esencia, definiendo su estilo, comunicación y personalidad.",
    grupo: "Identidad visual",
    desde: "$350.000",
    resumen: "Identidad completa: concepto, personalidad, sistema visual, aplicaciones y manual de marca.",
    bloques: [
      {
        tipo: "planes",
        titulo: "Planes de branding",
        planes: [
          {
            nombre: "Branding Inicial",
            precio: "$350.000",
            tagline: "Ideal para marcas que buscan construir una base visual sólida y coherente desde el inicio.",
            items: [
              { t: "Reunión inicial", d: "Espacio para conocer tu marca, objetivos y necesidades." },
              { t: "Análisis básico de marca", d: "Evaluación general para definir una dirección visual adecuada." },
              { t: "Definición de estilo visual", d: "Selección del estilo gráfico que representará tu marca." },
              { t: "Dirección creativa", d: "Guía visual que orienta el desarrollo del diseño." },
              { t: "Diseño de logo principal", d: "Creación de un logo alineado con la identidad de la marca." },
              { t: "Paleta de colores", d: "Selección de colores que definirán tu identidad visual." },
              { t: "Selección tipográfica", d: "Elección de fuentes acordes a la personalidad de la marca." },
              { t: "Entrega en formato PNG y PDF", d: "Archivos listos para su presentación y uso digital." },
            ],
          },
          {
            nombre: "Branding Profesional",
            precio: "$675.000",
            tagline: "Para marcas que buscan una identidad completa, coherente y lista para aplicarse en diferentes contextos.",
            items: [
              { t: "Definición de objetivos y enfoque del proyecto", d: "Estudio más profundo de la identidad y dirección del negocio." },
              { t: "Concepto de marca", d: "Idea central que define la esencia y el mensaje." },
              { t: "Personalidad de marca", d: "Definición del carácter y estilo de comunicación." },
              { t: "Tono de comunicación", d: "Forma en que la marca se expresa ante su audiencia." },
              { t: "Guía visual", d: "Mantiene la coherencia en todo el sistema." },
              { t: "Diseño de logo y variaciones", d: "Creación del logo principal y sus versiones aceptables." },
              { t: "Sistema de colores", d: "Alineado con la identidad de la marca." },
              { t: "Sistema tipográfico", d: "Conjunto de tipografías para uso consistente." },
              { t: "Aplicaciones visuales", d: "Ejemplos reales en redes o piezas gráficas." },
              { t: "Lineamientos de uso de marca", d: "Indicaciones básicas para su correcta aplicación." },
              { t: "Entrega en PNG, PDF e Illustrator", d: "Archivos listos para cualquier uso profesional." },
            ],
          },
          {
            nombre: "Branding Avanzado",
            precio: "$1'000.000",
            items: [
              { t: "Análisis completo de objetivos y proyección de la marca" },
              { t: "Análisis de marca y entorno", d: "Estudio del negocio y su contexto competitivo." },
              { t: "Definición de público objetivo", d: "Identificación del cliente ideal." },
              { t: "Estrategia de posicionamiento", d: "Definición de cómo la marca se diferenciará." },
              { t: "Base creativa", d: "Guía que orienta toda la identidad." },
              { t: "Personalidad y tono de comunicación", d: "Definición completa del estilo comunicativo." },
              { t: "Dirección creativa completa", d: "Sistema visual coherente aplicado a toda la marca." },
              { t: "Sistema de identidad visual", d: "Construcción integral de todos los elementos gráficos." },
              { t: "Desarrollo completo del logo y sus versiones" },
              { t: "Paleta de colores y sistema tipográfico" },
              { t: "Estructura visual sólida y consistente" },
              { t: "Aplicaciones visuales avanzadas", d: "Uso de la marca en múltiples contextos reales." },
              { t: "Adaptación multiplataforma", d: "Optimización para redes, impresión y otros medios." },
              { t: "Manual de marca completo", d: "Documento con normas claras de uso." },
              { t: "Archivos listos para cualquier uso profesional, digital o impreso" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════ CONTENIDO AUDIOVISUAL ═══════════════════════
  {
    slug: "edicion-de-video",
    nombre: "Edición de video",
    kicker: "Edición de video profesional",
    intro:
      "Desarrollamos contenido audiovisual enfocado en potenciar la imagen de tu marca, combinando creatividad, edición y narrativa para lograr piezas visuales atractivas, dinámicas y profesionales. Cada proyecto se adapta a tus objetivos: no solo verse bien, sino generar impacto y conexión.",
    grupo: "Contenido audiovisual",
    desde: "$20.000",
    resumen: "Tres niveles de edición — Básica, Dinámica y Avanzada — con precios según la duración del video.",
    bloques: [{ tipo: "video", titulo: "Precios según duración y nivel" }],
  },
  {
    slug: "edicion-de-imagenes",
    nombre: "Edición de imágenes",
    kicker: "Edición profesional de imágenes",
    intro:
      "Transformamos y mejoramos tus imágenes a través de una edición detallada y cuidada, optimizando cada elemento para alcanzar un resultado visual más impactante, equilibrado y profesional.",
    grupo: "Contenido audiovisual",
    desde: "$25.000",
    resumen: "Tres niveles de retoque: desde corrección de luz y color hasta integración de elementos complejos.",
    bloques: [
      {
        tipo: "planes",
        titulo: "Niveles de edición",
        planes: [
          {
            nombre: "Edición Básica",
            precio: "desde $25.000",
            tagline: "Ajustes esenciales para mejorar la calidad visual de la imagen.",
            items: [
              { t: "Corrección de luz y color" },
              { t: "Ajuste de contraste" },
              { t: "Mejora general" },
            ],
          },
          {
            nombre: "Edición Intermedia",
            precio: "desde $50.000",
            tagline: "Optimización más detallada con intervención visual y mejora gráfica.",
            items: [
              { t: "Retoques específicos" },
              { t: "Eliminación de elementos simples" },
              { t: "Ajuste de composición" },
            ],
          },
          {
            nombre: "Edición Avanzada",
            precio: "desde $90.000",
            tagline: "Edición completa con intervención profesional.",
            items: [
              { t: "Retoque detallado" },
              { t: "Mejora estética avanzada" },
              { t: "Eliminación o integración de elementos complejos" },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "animacion-de-logo",
    nombre: "Animación de logo",
    kicker: "Animación de logo",
    intro:
      "Damos vida a tu logo mediante animaciones diseñadas para aportar mayor impacto, presencia y dinamismo a tu marca, logrando una presentación más profesional y atractiva.",
    grupo: "Contenido audiovisual",
    desde: "$60.000",
    resumen: "Animaciones de 5 a 10 segundos con sonido: simple y elegante, dinámica o cinematográfica.",
    bloques: [
      {
        tipo: "planes",
        titulo: "Planes de animación",
        planes: [
          {
            nombre: "Plan Esencial",
            precio: "$60.000",
            tagline: "Ideal para marcas que buscan una animación limpia, elegante y funcional para presentar su logo.",
            items: [
              { t: "Animación simple de logo", d: "Movimiento limpio y sutil para presentar el logo de forma más profesional." },
              { t: "Movimiento básico y fluido", d: "Transiciones suaves enfocadas en mantener una animación clara y elegante." },
              { t: "Duración de 5 a 10 segundos", d: "Tiempo ideal para intros cortas y presentaciones rápidas." },
              { t: "Música o sonido básico", d: "Integración de efectos o sonidos simples." },
              { t: "Entrega en MP4", d: "Archivo listo para su uso en formato de video." },
            ],
          },
          {
            nombre: "Plan Dinámico",
            precio: "$110.000",
            tagline: "Para marcas que desean una animación con mayor presencia visual y mejor impacto en contenido digital.",
            items: [
              { t: "Animación más elaborada", d: "Mayor desarrollo visual y movimiento para un resultado más atractivo." },
              { t: "Transiciones y efectos dinámicos", d: "Movimientos y efectos que aportan más energía y presencia." },
              { t: "Integración de sonido", d: "Audio sincronizado con la animación para mejorar la experiencia visual." },
              { t: "Duración de 5 a 10 segundos", d: "Tiempo ideal para el desarrollo de una animación completa." },
              { t: "Entrega en MP4" },
            ],
          },
          {
            nombre: "Plan Cinemático",
            precio: "$170.000",
            tagline: "Para marcas que buscan una presentación visual más impactante, moderna y profesional.",
            items: [
              { t: "Animación avanzada de logo", d: "Desarrollo visual más detallado y profesional para una presentación de alto impacto." },
              { t: "Efectos visuales más trabajados", d: "Recursos visuales que enriquecen la animación." },
              { t: "Integración completa de sonido", d: "Sincronización de efectos y audio para una experiencia más inmersiva." },
              { t: "Mayor detalle visual", d: "Trabajo preciso en movimientos, composición y presentación general." },
              { t: "Entrega en MP4" },
            ],
          },
        ],
      },
    ],
  },

  // ═══════════════════════ PRESENCIA DIGITAL ═══════════════════════
  {
    slug: "administracion-digital",
    nombre: "Administración digital",
    kicker: "Administración digital",
    intro:
      "Administramos redes sociales con el objetivo de mantener una presencia más activa, organizada y profesional para tu marca, gestionando contenido y actividad de forma constante y coherente.",
    grupo: "Presencia digital",
    desde: "$30.000 / red / mes",
    resumen: "Gestión mensual por red social: publicación, monitoreo, control de comentarios y estadística mensual.",
    bloques: [
      {
        tipo: "itemsPrecio",
        titulo: "Proceso de administración",
        items: [
          {
            nombre: "Publicación",
            desc: "Organización y publicación constante de contenido para mantener activas y organizadas las redes de la marca.",
            precio: "",
          },
          {
            nombre: "Gestión y monitoreo",
            desc: "Seguimiento general del movimiento, actividad y funcionamiento de las plataformas digitales.",
            precio: "",
          },
          {
            nombre: "Control de comentarios",
            desc: "Supervisión básica de comentarios e interacciones para mantener mayor orden y actividad en las publicaciones.",
            precio: "",
          },
          {
            nombre: "Estadística mensual",
            desc: "Entrega de un resumen mensual con información general sobre movimiento y rendimiento de las redes sociales.",
            precio: "",
          },
        ],
      },
      {
        tipo: "elementos",
        titulo: "Tarifas de administración",
        elementos: [
          { label: "Administración por red social (mensual)", precio: "$30.000" },
          { label: "Red adicional", precio: "+$30.000 c/u" },
          { label: "Creación de cuentas", precio: "$10.000 c/u" },
        ],
      },
    ],
  },
  {
    slug: "diapositivas",
    nombre: "Diapositivas",
    kicker: "Creación de diapositivas",
    intro:
      "Desarrollamos presentaciones visuales organizadas y profesionales, adaptadas según el contenido, objetivo y estilo de cada proyecto.",
    grupo: "Presencia digital",
    desde: "$40.000",
    resumen: "Presentaciones de hasta 10, 20 o 35 diapositivas con composición visual y animaciones.",
    bloques: [
      {
        tipo: "planes",
        titulo: "Planes de presentación",
        planes: [
          {
            nombre: "Presentación Esencial",
            precio: "$40.000",
            tagline: "Ideal para exposiciones, tareas o proyectos que requieren una presentación clara y visualmente organizada.",
            items: [
              { t: "Hasta 10 diapositivas", d: "Cantidad ideal para presentaciones cortas y contenido resumido." },
              { t: "Imágenes y composición visual", d: "Integración de elementos visuales adaptados al tema de la presentación." },
              { t: "Diseño visual organizado", d: "Distribución limpia y estructurada para mejorar el contenido." },
              { t: "Animaciones básicas", d: "Transiciones simples para aportar mayor dinamismo visual." },
            ],
          },
          {
            nombre: "Presentación Profesional",
            precio: "$85.000",
            tagline: "Pensada para proyectos más completos que requieren una presentación más dinámica y profesional.",
            items: [
              { t: "Hasta 20 diapositivas", d: "Espacio suficiente para desarrollar contenido más amplio y detallado." },
              { t: "Diseño más dinámico", d: "Composición visual con mayor presencia y mejor organización gráfica." },
              { t: "Integración visual avanzada", d: "Uso de recursos visuales para enriquecer la presentación del contenido." },
              { t: "Organización profesional", d: "Estructura más clara para mejorar comprensión y presentación." },
            ],
          },
          {
            nombre: "Presentación Avanzada",
            precio: "$130.000",
            tagline: "Diseñada para exposiciones extensas, proyectos profesionales o presentaciones con mayor nivel visual.",
            items: [
              { t: "Hasta 35 diapositivas", d: "Mayor capacidad para desarrollar contenido amplio y detallado." },
              { t: "Diseño visual más trabajado", d: "Composición gráfica más elaborada y personalizada." },
              { t: "Animaciones y recursos avanzados", d: "Integración de efectos visuales y elementos más dinámicos." },
              { t: "Mayor nivel de personalización", d: "Estructura clara adaptada al proyecto." },
            ],
          },
        ],
      },
    ],
  },
  {
    slug: "sitios-web",
    nombre: "Sitios web",
    kicker: "Sitios web",
    intro:
      "Desarrollamos sitios web que combinan diseño, estructura y experiencia visual para representar tu marca de forma clara, profesional y atractiva en entornos digitales. Cada proyecto se construye según los objetivos, estilo y necesidades de la marca.",
    grupo: "Presencia digital",
    desde: "$200.000",
    resumen: "Sitios de hasta 3, 10 o 20 páginas con secciones y elementos escalables, más extras por página.",
    bloques: [
      {
        tipo: "planes",
        titulo: "Planes de sitio web",
        planes: [
          {
            nombre: "Sitio Sencillo",
            precio: "$200.000",
            tagline: "Ideal para marcas que buscan una presencia digital clara, funcional y bien estructurada.",
            items: [
              { t: "Hasta 3 páginas", d: "Estructura básica para presentar la información principal." },
              { t: "Hasta 30 secciones", d: "Distribución organizada del contenido dentro de cada página." },
              { t: "Hasta 100 elementos", d: "Integración de componentes visuales y funcionales necesarios para el sitio." },
            ],
          },
          {
            nombre: "Sitio Profesional",
            precio: "$500.000",
            tagline: "Para marcas que requieren un sitio más completo, organizado y con mayor desarrollo visual.",
            items: [
              { t: "Hasta 10 páginas", d: "Mayor espacio para desarrollar contenido y secciones específicas." },
              { t: "Hasta 50 secciones", d: "Estructuración más amplia para organizar mejor la información." },
              { t: "Hasta 500 elementos", d: "Mayor integración de recursos visuales y componentes funcionales." },
            ],
          },
          {
            nombre: "Sitio Avanzado",
            precio: "$800.000",
            tagline: "Para proyectos más completos que requieren un alto nivel de desarrollo, organización y detalle visual.",
            items: [
              { t: "Hasta 20 páginas", d: "Estructura amplia para proyectos de gran contenido." },
              { t: "Hasta 75 secciones", d: "Organización detallada para manejar grandes volúmenes de información." },
              { t: "Hasta 700 elementos", d: "Alto nivel de integración visual y funcional en todo el sitio." },
            ],
          },
        ],
      },
      {
        tipo: "elementos",
        titulo: "Elementos extras",
        elementos: [
          { label: "Página adicional", precio: "$20.000" },
          { label: "Sección adicional", precio: "$2.000" },
          { label: "Elemento adicional", precio: "$10.000" },
        ],
      },
    ],
  },
];

export const gruposOrden: GrupoServicio[] = [
  "Identidad visual",
  "Contenido audiovisual",
  "Presencia digital",
];

export function getServicio(slug: string): Servicio | undefined {
  return servicios.find((s) => s.slug === slug);
}

// WhatsApp con mensaje prellenado por servicio/plan
export function waLink(mensaje: string): string {
  return `https://wa.me/573242123300?text=${encodeURIComponent(mensaje)}`;
}
