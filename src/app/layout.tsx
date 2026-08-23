import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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

export const viewport: Viewport = {
  themeColor: "#fbfcfe",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={GeistSans.variable}>
      <body className={`antialiased bg-background text-foreground ${GeistSans.className}`}>
        {/* Datos estructurados — LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Rohlfing Concept",
              description:
                "Agencia creativa especializada en branding, contenido audiovisual y presencia digital.",
              url: "https://rohlfingconcept.com",
              telephone: "+573242123300",
              email: "rohlfingconcept@gmail.com",
              image: "https://rohlfingconcept.com/img/logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Pedro de los Milagros",
                addressRegion: "Antioquia",
                addressCountry: "CO",
              },
              sameAs: [
                "https://instagram.com/rohlfingconcept",
                "https://wa.me/573242123300",
              ],
              knowsAbout: [
                "Branding",
                "Identidad visual",
                "Diseño gráfico",
                "Contenido audiovisual",
                "Edición de video",
                "Sitios web",
                "Registro de marca ante la SIC",
              ],
            }),
          }}
        />
        {/* Barra de progreso de scroll */}
        <ScrollProgress />
        {/* Grain overlay */}
        <div className="grain" aria-hidden="true" />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
