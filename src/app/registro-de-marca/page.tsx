import type { Metadata } from "next";
import RegistroClient from "./RegistroClient";

export const metadata: Metadata = {
  title: "Registro de marca | Rohlfing Concept",
  description: "Registro de marca ante la SIC en alianza con Ilegítimas — Abogadas.",
};

export default function RegistroDeMarca() {
  return <RegistroClient />;
}
