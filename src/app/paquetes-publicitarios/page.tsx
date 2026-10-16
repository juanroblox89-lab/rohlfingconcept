import type { Metadata } from "next";
import PaquetesClient from "./PaquetesClient";

export const metadata: Metadata = {
  title: "Paquetes publicitarios | Rohlfing Concept",
  description: "Pautas en televisión, publicidad digital y packs mixtos para impulsar tu marca.",
  alternates: { canonical: "https://rohlfingconcept.com/paquetes-publicitarios" },
};

export default function PaquetesPublicitarios() {
  return <PaquetesClient />;
}
