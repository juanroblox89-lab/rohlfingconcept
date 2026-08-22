import type { Metadata } from "next";
import PaquetesClient from "./PaquetesClient";

export const metadata: Metadata = {
  title: "Paquetes publicitarios | Rohlfing Concept",
  description: "Paquetes integrales de contenido, diseño y administración digital.",
};

export default function PaquetesPublicitarios() {
  return <PaquetesClient />;
}
