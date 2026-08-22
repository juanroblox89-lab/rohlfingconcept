import type { Metadata } from "next";
import ProyectosClient from "./ProyectosClient";

export const metadata: Metadata = {
  title: "Proyectos | Rohlfing Concept",
  description: "Portafolio de marcas trabajadas por Rohlfing Concept.",
};

export default function Proyectos() {
  return <ProyectosClient />;
}
