import type { Metadata } from "next";
import EquipoClient from "./EquipoClient";

export const metadata: Metadata = {
  title: "Equipo | Rohlfing Concept",
  description: "Conoce al equipo de trabajo de Rohlfing Concept — producción audiovisual, diseño y estrategia digital.",
  alternates: { canonical: "https://rohlfingconcept.com/equipo" },
};

export default function Equipo() {
  return <EquipoClient />;
}
