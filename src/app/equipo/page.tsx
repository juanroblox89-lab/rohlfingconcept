import type { Metadata } from "next";
import EquipoClient from "./EquipoClient";

export const metadata: Metadata = {
  title: "Equipo | Rohlfing Concept",
  description: "Conoce al equipo de trabajo de Rohlfing Concept — producción audiovisual, diseño, desarrollo y estrategia digital.",
};

export default function Equipo() {
  return <EquipoClient />;
}
