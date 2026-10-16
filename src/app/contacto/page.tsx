import type { Metadata } from "next";
import ContactoClient from "./ContactoClient";

export const metadata: Metadata = {
  title: "Contacto | Rohlfing Concept",
  description:
    "Escríbenos por WhatsApp, correo o Instagram. Hablemos de tu próximo proyecto audiovisual, de diseño o presencia digital.",
  alternates: { canonical: "https://rohlfingconcept.com/contacto" },
};

export default function Contacto() {
  return <ContactoClient />;
}
