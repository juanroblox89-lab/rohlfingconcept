# Rohlfing Concept — Sitio Web Oficial

Rediseño moderno de **rohlfingconcept.com**: agencia creativa de San Pedro de los Milagros, Antioquia, especializada en branding, contenido audiovisual y presencia digital.

**Producción:** https://rohlfingconcept.com · **Repo:** `juanroblox89-lab/rohlfingconcept` (rama `main`, deploy automático en Vercel)

## Stack

| Tecnología | Uso |
| --- | --- |
| Next.js 16.3.1 (App Router + Turbopack) | Framework / SSR / ISR |
| React 19 + TypeScript (strict) | UI tipada |
| Tailwind CSS v4 (`@theme inline`) | Tokens de diseño en CSS |
| Motion (`motion/react`) | Animaciones de entrada y scroll-reveal |
| Geist Sans (`geist`) | Tipografía principal |
| Phosphor Icons | Iconografía |

## Desarrollo

```bash
npm install
npm run dev        # desarrollo (puerto por defecto 3000)
npm run build      # build de producción (typecheck incluido)
npm run lint       # eslint
```

> El patrón de este repo es **Server/Client split**: cada ruta tiene un `page.tsx` que exporta `metadata` y renderiza un componente cliente `*Client.tsx` donde viven las animaciones.

## Estructura

```
src/
├── app/
│   ├── layout.tsx                  # Layout raíz: fuentes, Navbar, Footer,
│   │                               # ScrollProgress, WhatsAppFloat, partículas
│   ├── page.tsx                    # Home (client): hero, marquee, servicios,
│   │                               # metodología, nosotros, portafolio, CTA
│   ├── globals.css                 # Tokens dark, texturas, marquee, scrollbar
│   ├── proyectos/                  # Portafolio completo (masonry + filtros)
│   ├── equipo/                     # Equipo (5 perfiles reales con foto y bio)
│   ├── paquetes-publicitarios/     # Planes y precios exactos del original
│   ├── registro-de-marca/          # Registro ante SIC con Ilegítimas - Abogadas
│   ├── robots.ts · sitemap.ts      # SEO técnico
│   └── not-found.tsx               # Página 404
├── components/
│   ├── Navbar.tsx                  # Sticky glassmórfica, 6 rutas + CTA WhatsApp
│   ├── Footer.tsx                  # Dirección, mapa embed, contacto, redes
│   ├── WhatsAppFloat.tsx           # Botón flotante de contacto rápido
│   ├── ScrollProgress.tsx          # Barra superior de progreso de scroll
│   └── ui/fluid-particles-background.tsx  # Canvas Perlin (simplex3), variantes
│                                   # "overlay" (global) y "section"
└── lib/utils.ts                    # cn() sin dependencias

public/img/
├── clients/                        # Logos de clientes (PNG transparentes)
├── covers/                         # Fotos portada de tarjetas de cliente
├── team/ · original-team/          # Retratos del equipo (recorte anclado arriba)
├── portfolio/                      # Obras del portafolio
├── hero-laptop.png                 # Render ~1:1 del PC (mostrado con object-contain
│                                   # en contenedor aspect-square para no recortarlo)
├── nebula.png · hero-bg.png        # Fondo del hero (foto + nebulosa screen-blend)
└── services-*.png                  # Fondos de los pilares de servicio
```

## Tokens de diseño (`globals.css`)

- `--background: #07090f` · `--background-alt` · `--surface`
- `--accent: #2563eb` · `--accent-hi: #4f8dff` → utilidad `.text-gradient-accent`
- Bordes `--border` / `--border-2`, texto `--muted` / `--muted-2`
- Textura global horneada en el `body` (`texura-bg.jpg`) + grano sutil
- Marquee con pausa al hover; scrollbar personalizada

## Patrones clave

- **Animaciones:** toda transición usa la tupla tipada
  `const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1]`.
  Obligatorio: sin el tipo explícito, TypeScript lo infiere como `number[]`
  y el build de producción falla con TS2322.
- **Hero:** imagen del PC en contenedor cuadrado + fundido radial inline
  (`radial-gradient` en `style`, no clases arbitrarias de Tailwind — no
  renderizan igual en todos los navegadores) para integrarse al fondo sin marco.
- **Imágenes:** todo pasa por `next/image` con `sizes` explícitos; los retratos
  se recortan anclados al borde superior para no cortar cabezas.
- **CTA de conversión:** el canal real es WhatsApp
  (`https://wa.me/573242123300`) con mensaje precargado.

## Contenido

Todo el copy proviene del sitio Wix original (rohlfingconcept.com):
subservicios exactos por pilar, taglines de planes, método de 5 pasos,
tarifas de registro de marca en SMMLV y datos reales del equipo.
Las cifras públicas del hero (+17 proyectos, 7 marcas) corresponden al
portafolio publicado en `/proyectos`.

## Deploy

Push a `main` → GitHub Actions no interviene: **Vercel** detecta el push del
repo y despliega automáticamente. Verificar siempre:

1. `npm run build` en local pasa sin errores de tipo.
2. La URL de producción responde 200 tras el deploy.
