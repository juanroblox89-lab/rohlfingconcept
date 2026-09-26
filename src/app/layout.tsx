import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  variable: "--font-ui",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rohlfingconcept.com"),
  title: "Rohlfing Concept | Agencia Creativa en San Pedro de los Milagros",
  description:
    "Transformamos ideas en soluciones visuales y digitales que hacen que las marcas destaquen. Creamos contenido, desarrollamos identidades y fortalecemos la presencia de cada empresa para conectar con su público y crecer con propósito.",
  keywords: [
    "agencia creativa",
    "diseño gráfico",
    "branding",
    "contenido audiovisual",
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
    images: [{ url: "/img/logo.png", width: 512, height: 512, alt: "Rohlfing Concept" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${archivo.variable} ${inter.variable}`}>
      <body className="bg-background font-ui text-foreground antialiased">
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
                "Grabación de video",
                "Administración digital",
              ],
            }),
          }}
        />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
