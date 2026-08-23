import type { MetadataRoute } from "next";
import { servicios } from "@/data/services";

const BASE = "https://rohlfingconcept.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = [
    { path: "",          priority: 1.0,  freq: "weekly" as const },
    { path: "/servicios",              priority: 0.95, freq: "weekly" as const },
    { path: "/proyectos",              priority: 0.9,  freq: "monthly" as const },
    { path: "/paquetes-publicitarios", priority: 0.9,  freq: "monthly" as const },
    { path: "/registro-de-marca",      priority: 0.8,  freq: "monthly" as const },
    { path: "/videos",                 priority: 0.8,  freq: "weekly" as const },
    { path: "/equipo",                 priority: 0.7,  freq: "monthly" as const },
  ];

  const serviciosRutas = servicios.map((s) => ({
    url: `${BASE}/servicios/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [
    ...rutas.map((r) => ({
      url: `${BASE}${r.path}`,
      lastModified: new Date(),
      changeFrequency: r.freq,
      priority: r.priority,
    })),
    ...serviciosRutas,
  ];
}
