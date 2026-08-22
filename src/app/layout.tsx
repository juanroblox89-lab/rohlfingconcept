import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rohlfing Concept | Agencia Creativa",
  description:
    "Diseño gráfico, contenido audiovisual, branding y desarrollo web para empresas que quieren verse tan profesionales como son.",
  keywords: ["agencia creativa", "diseño gráfico", "branding", "desarrollo web", "Colombia"],
  openGraph: {
    title: "Rohlfing Concept | Agencia Creativa",
    description: "Diseño gráfico, contenido audiovisual, branding y desarrollo web.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={GeistSans.variable}>
      <body className={`antialiased bg-background text-foreground ${GeistSans.className}`}>
        {/* Grain overlay */}
        <div className="grain" aria-hidden="true" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
