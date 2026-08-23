import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { servicios, getServicio } from "@/data/services";
import ServicioDetalleClient from "./ServicioDetalleClient";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicios.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getServicio(slug);
  if (!s) return {};
  return {
    title: `${s.nombre} — precios | Rohlfing Concept`,
    description: `${s.intro} Precios desde ${s.desde}.`,
  };
}

export default async function ServicioPage({ params }: Props) {
  const { slug } = await params;
  const servicio = getServicio(slug);
  if (!servicio) notFound();

  const otros = servicios.filter((s) => s.slug !== slug).slice(0, 6);
  return <ServicioDetalleClient servicio={servicio} otros={otros} />;
}
