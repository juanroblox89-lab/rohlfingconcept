import type { Metadata } from "next";
import PaquetesClient from "./PaquetesClient";

export const metadata: Metadata = {
  title: "Paquetes publicitarios | Rohlfing Concept",
  description: "Pautas en televisión, publicidad digital y packs mixtos. Precios de referencia · San Pedro de los Milagros.",
};

export default function PaquetesPublicitarios() {
  return <PaquetesClient />;
}
