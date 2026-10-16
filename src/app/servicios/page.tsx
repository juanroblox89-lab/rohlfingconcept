import type { Metadata } from "next";
import { Suspense } from "react";
import ServiciosClient from "./ServiciosClient";

export const metadata: Metadata = {
  title: "Servicios y precios | Rohlfing Concept",
  description:
    "Todos los servicios de Rohlfing Concept con precios reales: logos, branding, vectorial, diseños, edición de video e imágenes, contenido digital, creación audiovisual, animación de logo, administración digital, diapositivas y sitios web.",
  alternates: { canonical: "https://rohlfingconcept.com/servicios" },
};

export default function ServiciosPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen py-28 text-center">
          <p className="text-muted">Cargando servicios…</p>
        </main>
      }
    >
      <ServiciosClient />
    </Suspense>
  );
}
