import type { MetadataRoute } from "next";

const BASE = "https://rohlfingconcept.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const rutas = [
    { path: "",          priority: 1.0,  freq: "weekly" as const },
    { path: "/proyectos",              priority: 0.9,  freq: "monthly" as const },
    { path: "/paquetes-publicitarios", priority: 0.9,  freq: "monthly" as const },
    { path: "/registro-de-marca",      priority: 0.8,  freq: "monthly" as const },
    { path: "/videos",                 priority: 0.8,  freq: "weekly" as const },
    { path: "/equipo",                 priority: 0.7,  freq: "monthly" as const },
  ];

  return rutas.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
