import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import VideosClient from "./VideosClient";

export const metadata: Metadata = {
  title: "Ediciones en video | Rohlfing Concept",
  description:
    "Portafolio audiovisual de Rohlfing Concept: reels, ediciones y piezas de video creadas para marcas reales.",
};

/**
 * Escanea public/videos en build/deploy: suelta archivos .mp4/.webm ahí,
 * haz commit + push y aparecen solos en la página (cero configuración).
 */
export default function VideosPage() {
  let files: string[] = [];
  try {
    const dir = path.join(process.cwd(), "public", "videos");
    if (fs.existsSync(dir)) {
      files = fs
        .readdirSync(dir)
        .filter((f) => /\.(mp4|webm|mov)$/i.test(f))
        .sort();
    }
  } catch {
    files = [];
  }

  return <VideosClient files={files} />;
}
