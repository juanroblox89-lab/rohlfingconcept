import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="text-7xl font-black text-gradient-accent sm:text-8xl">404</p>
      <h1 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
        Esta página se nos perdió en la edición
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
        El enlace que buscas no existe o fue movido. Vuelve al inicio y
        descubre todo lo que podemos crear para tu marca.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-accent-hi hover:shadow-[0_0_28px_rgba(37,99,235,0.4)] hover:-translate-y-0.5"
      >
        <ArrowLeft size={15} weight="bold" />
        Volver al inicio
      </Link>
    </main>
  );
}
