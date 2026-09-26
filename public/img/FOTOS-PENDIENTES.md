# FOTOS PENDIENTES — Rohlfing Concept

El cliente debe enviar foto real para cada slot. Las imágenes IA anteriores
se retiran; ningún servicio trae `img` en `src/data/services.ts` hasta que
lleguen las fotos reales. El campo `img` opcional de `Servicio` gobierna:
si no hay foto, versión tipográfica.

Formato: slot | archivo esperado | proporción | dónde aparece.

## Servicios (hub + detalle)

| slot | archivo esperado | proporción | dónde aparece |
|---|---|---|---|
| Servicio `logos` — portada | `public/img/services-fotos/logos.jpg` | 16/9 | hub `/servicios` y detalle `/servicios/logos` |
| Servicio `branding` — portada | `public/img/services-fotos/branding.jpg` | 16/9 | hub `/servicios` y detalle `/servicios/branding` |
| Servicio `vectorial` — portada | `public/img/services-fotos/vectorial.jpg` | 16/9 | hub `/servicios` y detalle `/servicios/vectorial` |
| Servicio `disenos` — portada | `public/img/services-fotos/disenos.jpg` | 16/9 | hub `/servicios` y detalle `/servicios/disenos` |
| Servicio `edicion-de-imagenes` — portada | `public/img/services-fotos/edicion-de-imagenes.jpg` | 16/9 | hub `/servicios` y detalle `/servicios/edicion-de-imagenes` |
| Servicio `edicion-de-video` — portada | `public/img/services-fotos/edicion-de-video.jpg` | 16/9 | hub `/servicios` y detalle `/servicios/edicion-de-video` |
| Servicio `grabacion-de-video` — portada | `public/img/services-fotos/grabacion-de-video.jpg` | 16/9 | hub `/servicios` y detalle `/servicios/grabacion-de-video` |
| Servicio `animacion-de-logo` — portada | `public/img/services-fotos/animacion-de-logo.jpg` | 16/9 | hub `/servicios` y detalle `/servicios/animacion-de-logo` |
| Servicio `administracion-digital` — portada | `public/img/services-fotos/administracion-digital.jpg` | 16/9 | hub `/servicios` y detalle `/servicios/administracion-digital` |
| Servicio `diapositivas` — portada | `public/img/services-fotos/diapositivas.jpg` | 16/9 | hub `/servicios` y detalle `/servicios/diapositivas` |
| Servicio `pautas-en-television` — portada | `public/img/services-fotos/pautas-en-television.jpg` | 16/9 | hub `/servicios` y detalle `/servicios/pautas-en-television` |
| Servicio `impresos-publicitarios` — portada | `public/img/services-fotos/impresos-publicitarios.jpg` | 16/9 | hub `/servicios` y detalle `/servicios/impresos-publicitarios` |

## Equipo (retratos en /equipo)

| slot | archivo esperado | proporción | dónde aparece |
|---|---|---|---|
| Retrato — Samuel Rohlfing Barrientos | `public/img/team/samuel.png` (existe, validar si es final) | 4/5 | `/equipo` |
| Retrato — Juan Esteban Álvarez Giraldo | `public/img/team/juan.png` (existe, validar si es final) | 4/5 | `/equipo` |
| Retrato — Breiner Jesús Márquez | `public/img/team/breiner.png` (existe, validar si es final) | 4/5 | `/equipo` |
| Retrato — Alejandro Piedrahíta | `public/img/team/alejandro.png` (existe, validar si es final) | 4/5 | `/equipo` |

## Home

| slot | archivo esperado | proporción | dónde aparece |
|---|---|---|---|
| Hero — SIN foto (tipográfico) | — (no se necesita foto) | — | `/` hero |
| Proceso / Nosotros — sin foto | — (no se necesita foto) | — | `/` secciones proceso/nosotros |
