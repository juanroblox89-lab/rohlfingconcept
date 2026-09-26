import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
      <p className="font-display text-[clamp(44px,13vw,184px)] font-black leading-none tracking-tight text-[#0A0A0A]">
        404
      </p>
      <h1 className="mt-6 text-2xl font-bold tracking-tight text-[#0A0A0A] sm:text-3xl">
        Esta página se nos perdió en la edición
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        El enlace que buscas no existe o fue movido. Vuelve al inicio y
        descubre todo lo que podemos crear para tu marca.
      </p>
      <Link href="/" className="btn-primary mt-10">
        <ArrowLeft size={15} weight="bold" />
        Volver al inicio
      </Link>
    </main>
  );
}
