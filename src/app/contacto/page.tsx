import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto | Rohlfing Concept",
  description:
    "Escríbenos por WhatsApp, correo o Instagram. Estamos en San Pedro de los Milagros, Antioquia.",
};

export default function Contacto() {
  return <ContactoClient />;
}
