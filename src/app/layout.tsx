import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FluidParticlesBackground } from "@/components/ui/fluid-particles-background";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL("https://rohlfingconcept.com"),
  title: "Rohlfing Concept | Agencia Creativa en San Pedro de los Milagros",
  description:
    "Branding, contenido audiovisual y presencia digital para negocios que quieren verse tan profesionales como son. Agencia creativa en San Pedro de los Milagros, Antioquia.",
  keywords: [
    "agencia creativa",
    "diseño gráfico",
    "branding",
    "contenido audiovisual",
    "desarrollo web",
    "San Pedro de los Milagros",
    "Antioquia",
    "Colombia",
  ],
  openGraph: {
    title: "Rohlfing Concept | Agencia Creativa",
    description:
      "Branding, contenido audiovisual y presencia digital. Tu trabajo es bueno; tu marca debería notarse.",
    locale: "es_CO",
    type: "website",
    images: [{ url: "/img/hero-bg.png", width: 1672, height: 941, alt: "Rohlfing Concept" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={GeistSans.variable}>
      <body className={`antialiased bg-background text-foreground ${GeistSans.className}`}>
        {/* Barra de progreso de scroll */}
        <ScrollProgress />
        {/* Grain overlay */}
        <div className="grain" aria-hidden="true" />
        {/* Partículas fluidas ambientales en todo el sitio */}
        <FluidParticlesBackground variant="overlay" particleCount={1000} />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
