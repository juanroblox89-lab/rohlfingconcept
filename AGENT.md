# AGENT.md — Manual de Proyecto: Rohlfing Concept

> **Memoria viva y contexto operativo para agentes de IA y desarrolladores.**  
> Este documento contiene el contexto integral del proyecto, decisiones arquitectónicas, catálogo de assets, fuentes de datos reales y la guía paso a paso para continuar el desarrollo sin perder coherencia.

---

## 📌 1. CONTEXTO GENERAL & OBJETIVO

- **Nombre del Proyecto:** Rohlfing Concept (Sitio Web Oficial & Portal de Agencia)
- **Ubicación:** `projects/rohlfingconcept` dentro de `Frontend-Agent-Kit`
- **Propósito:** Sitio web comercial y portafolio de alto impacto para la agencia creativa **Rohlfing Concept**, especializada en producción audiovisual, diseño de identidad de marca (branding), desarrollo web de alta conversión y gestión estratégica de redes sociales.
- **Estándar Visual:** Basado en los principios del **`taste-skill`** del Frontend Agent Kit:
  - Estética *Dark Luxury / Cinematic Glow* en modo oscuro profundo (`#070a12` / `#0b0f17`).
  - Acentos en azul eléctrico con resplandor dinámico (`#1e6bff` / `#3b82f6` con `box-shadow: 0 0 25px rgba(30,107,255,0.4)`).
  - Tarjetas de cristal (*glassmorphism*) con bordes sutiles y desenfoque de fondo (`backdrop-filter: blur(16px)`).
  - Tipografía Geist y Geist Mono con espaciado (*tracking*) y jerarquía editorial estricta.
  - Cero plantillas genéricas (*anti-slop*).

---

## 🛠️ 2. STACK TECNOLÓGICO & COMANDOS

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router con Server Components y Client Components según interactividad).
- **Core:** React 19 + TypeScript.
- **Estilos:** Tailwind CSS v4 (`@tailwindcss/postcss`).
- **Gestor de Paquetes:** `pnpm` (recomendado para rendimiento en este entorno).

### Comandos de Ejecución
```bash
# Iniciar servidor de desarrollo en http://localhost:3000
pnpm dev
# (o alternativamente: npx next dev)

# Compilar para producción (validación de TypeScript y páginas estáticas)
npx next build
# (o alternativamente: pnpm build)

# Iniciar servidor de producción local
pnpm start
```

---

## 📂 3. ESTRUCTURA DE ARCHIVOS & RUTAS CLAVE

```
projects/rohlfingconcept/
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css                # Variables de tema, animaciones de marquesina, efectos glow y glass
│   │   ├── layout.tsx                 # Root layout con Navbar, Footer y fuentes Geist
│   │   ├── page.tsx                   # Landing principal (Hero 3D, Marquee, Servicios, Metodología, Previews)
│   │   ├── paquetes-publicitarios/
│   │   │   └── page.tsx               # Planes mensuales ($290k, $390k, $520k), entregables, FAQs y WhatsApp
│   │   ├── registro-de-marca/
│   │   │   └── page.tsx               # Trámite formal ante la SIC en alianza con Ilegítimas — Abogadas
│   │   └── proyectos/
│   │       └── page.tsx               # Portafolio interactivo con selector de categorías y clientes reales
│   └── components/
│       ├── ClientMarquee.tsx          # Letrero horizontal continuo (ticker animado de marcas clientes)
│       ├── Navbar.tsx                 # Header sticky con logo RC en alto contraste y menú móvil
│       └── Footer.tsx                 # Pie de página con enlaces directos, redes y datos de contacto
├── public/
│   └── img/                           # 77+ assets gráficos en alta resolución
│       ├── hero-3d.jpeg               # Composición 3D oficial del Hero (monitor + móvil + tarjetas flotantes)
│       ├── logo-rc.jpeg               # Isotipo de cámara RC oficial
│       └── 272900_...                 # Logos y badges de marcas clientes extraídos del sitio web original
├── AGENT.md                           # Este archivo (memoria de relevo)
├── package.json                       # Configuración de dependencias (Next 15, React 19, Tailwind v4)
└── tsconfig.json                      # Configuración de TypeScript
```

---

## 📊 4. FUENTE DE INFORMACIÓN & DATOS REALES

Toda la información del sitio proviene del sitio web oficial descargado (`rohlfingconcept.com`), respetando las métricas y datos comerciales auténticos:

### Métricas Reales Verificadas:
- **`+300`** Proyectos de diseño, video y web ejecutados.
- **`+2'300.000`** Visualizaciones acumuladas en contenido audiovisual para clientes.
- **`+50`** Empresas y marcas asesoradas.

### Clientes y Marcas Reales:
1. **Restaurante Villa Grande** (Hotel Campestre, Restaurante & Eventos — Cliente desde Septiembre 2025).
2. **Plomería Norte** (Servicios Especializados & Web — Cliente desde Noviembre 2025).
3. **Asanarte Droguería** (Salud & Sector Farmacéutico — Cliente desde Marzo 2025).
4. **Ricos Pándeyucas** (Panadería Artesanal & Empaques — Cliente desde Febrero 2026).
5. **El Tizón Dorado** (Asados, Parrilla & Experiencia Web — Cliente desde Marzo 2026).
6. **El Jerez del Caballero** (Experiencia Ecuestre & Restaurante — Cliente desde Abril 2026).
7. **La Antioqueñita** (Café & Restaurante Tradicional).
8. **Inmobiliaria Luz del Campo** (Proyecto Inmobiliario & Catálogo Digital).
9. **Celebraciones del Norte** (Bodas & Eventos Corporativos).
10. **Doña Rosa** (Restaurante Típico).

### Servicios y Subcategorías:
- **Creación Audiovisual:** Edición de video profesional, Reels/TikToks dinámicos, grabación presencial, animación de logo.
- **Identidad Visual:** Diseño de logos únicos, piezas visuales modernas, gráficos vectoriales, manuales de marca.
- **Servicios Digitales:** Páginas web de alta conversión, diapositivas ejecutivas, integración con WhatsApp.
- **Gestión de Contenido:** Administración de redes, parrillas de contenido mensual, optimización de perfiles.

### Alianzas & Datos de Contacto Oficiales:
- **Registro de Marca:** En alianza formal con la firma jurídica **Ilegítimas — Abogadas** para trámites ante la Superintendencia de Industria y Comercio (SIC). Tasas oficiales: `$970.500 – $1'348.500 COP`.
- **WhatsApp Oficial:** `+57 324 212 3300`
- **Correo Electrónico:** `rohlfingconcept@gmail.com`

---

## 🎯 5. GUÍA PARA CONTINUAR EL TRABAJO

Si vas a agregar nuevas funciones, páginas o refactorizar:

1. **Cumplir la Regla `output-skill`:**
   - Nunca escribas código truncado, omitido con `// TODO` o con comentarios tipo `// resto del código`. Entrega siempre archivos completos y funcionales.
2. **Mantener la Coherencia Visual (`taste-skill`):**
   - No rompas el esquema de modo oscuro cinemático con gradientes azules.
   - Si creas nuevas tarjetas o modales, usa siempre las clases `glass-card`, `btn-primary-glow` o `btn-secondary-glass` definidas en `globals.css`.
3. **Preservar la Responsividad (`cursor-react-rules-mobilefirst`):**
   - Verifica siempre que cualquier nuevo layout se vea impecable tanto en dispositivos móviles (iPhone / Android) como en monitores de escritorio ultra-wide.
4. **Páginas Dedicadas vs. Landing:**
   - La Home (`/`) funciona como un portal integral con scroll suave, pero cada servicio o producto clave debe mantener su página dedicada profunda (`/paquetes-publicitarios`, `/registro-de-marca`, `/proyectos`).
5. **Actualizar este `AGENT.md`:**
   - Cada vez que agregues rutas, modifiques planes o integres nuevos clientes, actualiza este archivo para que el próximo agente o desarrollador tenga el contexto al 100%.
