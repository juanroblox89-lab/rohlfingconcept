import type { Metadata } from "next";
import ServiciosClient from "./ServiciosClient";

export const metadata: Metadata = {
  title: "Servicios y precios | Rohlfing Concept",
  description:
    "Todos los servicios de Rohlfing Concept con sus precios reales: logos, branding, diseño gráfico, vectorial, edición de video e imágenes, animación de logo, administración digital, diapositivas y sitios web.",
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}
