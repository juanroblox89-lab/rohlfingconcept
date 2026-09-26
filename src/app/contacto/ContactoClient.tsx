"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  WhatsappLogo,
  InstagramLogo,
  EnvelopeSimple,
  MapPin,
  PaperPlaneTilt,
} from "@phosphor-icons/react";
import { fadeUp } from "@/lib/anim";

const WA_BASE = "https://wa.me/573242123300";

const servicios = [
  "Logos",
  "Branding",
  "Vectorización",
  "Diseños",
  "Edición de imágenes",
  "Grabación de video",
  "Edición de video",
  "Animación de logo",
  "Administración digital",
  "Diapositivas",
  "Otro",
];

export default function ContactoClient() {
  const [nombre, setNombre] = useState("");
  const [servicio, setServicio] = useState(servicios[0]);
  const [mensaje, setMensaje] = useState("");

  const valido = nombre.trim() !== "" && mensaje.trim() !== "";

  const enviar = () => {
    if (!valido) return;
    const url = `${WA_BASE}?text=${encodeURIComponent(`Hola Rohlfing Concept, soy ${nombre}. Me interesa: ${servicio}. ${mensaje}`)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-white text-[#0A0A0A]">
      {/* Header tipográfico */}
      <section className="border-b border-[#D9D9D9]">
        <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 md:py-20 xl:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.p {...fadeUp()} className="kicker">
              Contacto
            </motion.p>
            <motion.h1
              {...fadeUp(0.06)}
              className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Hablemos de tu proyecto
            </motion.h1>
            <motion.p
              {...fadeUp(0.12)}
              className="mx-auto mt-6 max-w-[52ch] text-[13px] leading-relaxed text-[#5C5C5C] md:text-sm"
            >
              Escríbenos por WhatsApp y te respondemos lo antes posible.
              Estamos en San Pedro de los Milagros, Antioquia.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-20 xl:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          {/* (a) Canales */}
          <motion.div
            {...fadeUp()}
            className="flex flex-col rounded border border-[#D9D9D9] bg-[#F4F4F4] p-6 md:p-8"
          >
            <h2 className="font-display text-xl font-bold tracking-tight">Canales directos</h2>

            <a
              href={`${WA_BASE}?text=${encodeURIComponent("Hola Rohlfing Concept, escribo desde rohlfingconcept.com.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-[#0A0A0A] px-5 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#5C5C5C] md:h-9"
            >
              <WhatsappLogo size={16} weight="fill" />
              WhatsApp · +57 324 212 3300
            </a>
            <p className="mt-3 text-xs leading-relaxed text-[#5C5C5C]">
              WhatsApp +57 324 212 3300 (único canal telefónico)
            </p>

            <div className="mt-6 space-y-4 border-t border-[#D9D9D9] pt-6">
              <div className="flex items-start gap-3">
                <EnvelopeSimple size={17} weight="fill" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8A8A8A]">
                    Correo
                  </p>
                  <a
                    href="mailto:rohlfingconcept@gmail.com"
                    className="mt-1 block truncate text-[13px] text-[#0A0A0A] hover:underline underline-offset-4 md:text-sm"
                  >
                    rohlfingconcept@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <InstagramLogo size={17} weight="fill" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8A8A8A]">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/rohlfingconcept"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-[13px] text-[#0A0A0A] hover:underline underline-offset-4 md:text-sm"
                  >
                    @rohlfingconcept
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={17} weight="fill" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8A8A8A]">
                    Dirección
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Cra.+49+A+%2348-23,+San+Pedro,+San+Pedro+de+los+Milagros,+Antioquia,+Colombia/@6.4612415,-75.5586706,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-[13px] leading-relaxed text-[#0A0A0A] hover:underline underline-offset-4 md:text-sm"
                  >
                    Cra. 49 A #48-23
                    <br />
                    San Pedro de los Milagros, Antioquia
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded border border-[#D9D9D9]">
              <iframe
                title="Rohlfing Concept — Ubicación San Pedro de los Milagros"
                src="https://maps.google.com/maps?q=6.4612362,-75.5560957&output=embed&z=17"
                width="100%"
                height="220"
                className="block grayscale"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* (b) Mini formulario → WhatsApp */}
          <motion.div
            {...fadeUp(0.08)}
            className="flex flex-col rounded border border-[#D9D9D9] bg-white p-6 md:p-8"
          >
            <h2 className="font-display text-xl font-bold tracking-tight">Escríbenos</h2>
            <p className="mt-2 text-[13px] leading-relaxed text-[#5C5C5C] md:text-sm">
              Completa los datos y abrimos WhatsApp con tu mensaje listo para enviar. Sin backend,
              sin esperas.
            </p>

            <form
              className="mt-6 flex flex-1 flex-col gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                enviar();
              }}
            >
              <div>
                <label htmlFor="nombre" className="mb-1.5 block text-[12px] font-semibold text-[#0A0A0A]">
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  placeholder="Tu nombre"
                  required
                  autoComplete="name"
                  className="h-10 w-full rounded-full border border-[#D9D9D9] bg-white px-4 text-[13px] text-[#0A0A0A] outline-none placeholder:text-[#8A8A8A] focus:border-[#0A0A0A] md:h-9"
                />
              </div>

              <div>
                <label htmlFor="servicio" className="mb-1.5 block text-[12px] font-semibold text-[#0A0A0A]">
                  Servicio
                </label>
                <select
                  id="servicio"
                  value={servicio}
                  onChange={(e) => setServicio(e.target.value)}
                  className="h-10 w-full cursor-pointer appearance-none rounded-full border border-[#D9D9D9] bg-white px-4 text-[13px] text-[#0A0A0A] outline-none focus:border-[#0A0A0A] md:h-9"
                >
                  {servicios.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-1 flex-col">
                <label htmlFor="mensaje" className="mb-1.5 block text-[12px] font-semibold text-[#0A0A0A]">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Cuéntanos qué necesitas…"
                  required
                  rows={5}
                  className="min-h-28 w-full flex-1 resize-y rounded border border-[#D9D9D9] bg-white px-4 py-3 text-[13px] leading-relaxed text-[#0A0A0A] outline-none placeholder:text-[#8A8A8A] focus:border-[#0A0A0A]"
                />
              </div>

              <button
                type="submit"
                disabled={!valido}
                className="inline-flex h-10 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#0A0A0A] px-5 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#5C5C5C] disabled:cursor-not-allowed disabled:opacity-50 md:h-9"
              >
                <PaperPlaneTilt size={15} weight="fill" />
                Enviar por WhatsApp
              </button>
              {!valido && (
                <p className="text-center text-xs leading-relaxed text-[#8A8A8A]">
                  Completa tu nombre y mensaje para activar el envío.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
