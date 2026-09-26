import type { Metadata } from "next";
import ServiciosClient from "./ServiciosClient";

export const metadata: Metadata = {
  title: "Servicios y precios | Rohlfing Concept",
  description:
    "Todos los servicios de Rohlfing Concept con precios reales: logos, branding, vectorial, diseños, edición de video e imágenes, animación de logo, grabación de video, administración digital y diapositivas.",
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}
