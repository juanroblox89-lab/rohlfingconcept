// TODO(director): poner la URL real de SAVEN cuando esté disponible.
export const SAVEN_URL: string = "";

export function getSavenLink(): string {
  if (typeof SAVEN_URL === "string" && SAVEN_URL.trim().length > 0) {
    return SAVEN_URL;
  }
  return "https://wa.me/573242123300?text=" + encodeURIComponent("Hola, quiero un sitio web con SAVEN (Beyond Possible)");
}
