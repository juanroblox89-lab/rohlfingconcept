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
      {/* Header compacto */}
      <section className="border-b-2 border-[#0A0A0A]">
        <div className="section-compact-sm mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              {...fadeUp()}
              className="sq-title flex flex-wrap items-center justify-center gap-2"
            >
              <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
              Hablemos de tu proyecto
            </motion.h1>
            <motion.p
              {...fadeUp(0.12)}
              className="sq-sub mx-auto max-w-[52ch] text-[13px] leading-[1.5] text-[#5C5C5C]"
            >
              Escríbenos por WhatsApp y te respondemos lo antes posible.
              Estamos en San Pedro de los Milagros, Antioquia.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="section-compact mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
        <div className="grid min-w-0 gap-3 lg:grid-cols-2">
          {/* (b) Mini formulario → WhatsApp — primero en móvil */}
          <motion.div
            {...fadeUp(0.08)}
            className="card order-first flex min-w-0 flex-col p-4 md:p-6 lg:order-none"
          >
            <h2 className="sq-title">Escríbenos</h2>
            <p className="sq-sub text-[13px] leading-[1.5] text-[#5C5C5C]">
              Completa los datos y abrimos WhatsApp con tu mensaje listo para enviar. Sin backend,
              sin esperas.
            </p>

            <form
              className="mt-4 flex flex-1 flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                enviar();
              }}
            >
              <div>
                <label htmlFor="nombre" className="mb-1.5 block text-[14px] font-semibold text-[#0A0A0A]">
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
                  className="h-12 w-full rounded-full border border-[#D9D9D9] bg-white px-4 text-base text-[#0A0A0A] outline-none placeholder:text-[#8A8A8A] focus:border-[#0A0A0A]"
                />
              </div>

              <div>
                <label htmlFor="servicio" className="mb-1.5 block text-[14px] font-semibold text-[#0A0A0A]">
                  Servicio
                </label>
                <select
                  id="servicio"
                  value={servicio}
                  onChange={(e) => setServicio(e.target.value)}
                  className="h-12 w-full cursor-pointer appearance-none rounded-full border border-[#D9D9D9] bg-white px-4 text-base text-[#0A0A0A] outline-none focus:border-[#0A0A0A]"
                >
                  {servicios.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-1 flex-col">
                <label htmlFor="mensaje" className="mb-1.5 block text-[14px] font-semibold text-[#0A0A0A]">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  placeholder="Cuéntanos qué necesitas…"
                  required
                  rows={5}
                  className="min-h-[150px] w-full flex-1 resize-y rounded-[12px] border border-[#D9D9D9] bg-white px-4 py-3 text-base leading-[1.5] text-[#0A0A0A] outline-none placeholder:text-[#8A8A8A] focus:border-[#0A0A0A]"
                />
              </div>

              <button
                type="submit"
                disabled={!valido}
                className="btn-primary btn-submit w-full disabled:cursor-not-allowed disabled:opacity-50"
              >
                <PaperPlaneTilt size={15} weight="fill" />
                Enviar por WhatsApp
              </button>
              {!valido && (
                <p className="text-center text-xs leading-[1.5] text-[#8A8A8A]">
                  Completa tu nombre y mensaje para activar el envío.
                </p>
              )}
            </form>
          </motion.div>

          {/* (a) Canales — banda negra */}
          <motion.div
            {...fadeUp()}
            className="band-dark flex min-w-0 flex-col rounded-[14px] p-4 md:p-6"
          >
            <h2 className="sq-title">Canales directos</h2>

            <a
              href={`${WA_BASE}?text=${encodeURIComponent("Hola Rohlfing Concept, escribo desde rohlfingconcept.com.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 w-full"
            >
              <WhatsappLogo size={16} weight="fill" />
              WhatsApp · +57 324 212 3300
            </a>
            <p className="mt-2.5 text-xs leading-[1.5] text-white/70">
              WhatsApp +57 324 212 3300 (único canal telefónico)
            </p>

            <div className="mt-4 space-y-3 border-t-2 border-white/25 pt-4">
              <div className="flex items-start gap-3">
                <EnvelopeSimple size={17} weight="fill" className="mt-0.5 shrink-0 text-white" />
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
                    Correo
                  </p>
                  <a
                    href="mailto:rohlfingconcept@gmail.com"
                    className="mt-1 block truncate text-[13px] leading-[1.5] text-white hover:underline underline-offset-4"
                  >
                    rohlfingconcept@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <InstagramLogo size={17} weight="fill" className="mt-0.5 shrink-0 text-white" />
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
                    Instagram
                  </p>
                  <a
                    href="https://instagram.com/rohlfingconcept"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-[13px] leading-[1.5] text-white hover:underline underline-offset-4"
                  >
                    @rohlfingconcept
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={17} weight="fill" className="mt-0.5 shrink-0 text-white" />
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/70">
                    Dirección
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Cra.+49+A+%2348-23,+San+Pedro,+San+Pedro+de+los+Milagros,+Antioquia,+Colombia/@6.4612415,-75.5586706,17z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-[13px] leading-[1.5] text-white hover:underline underline-offset-4"
                  >
                    Cra. 49 A #48-23
                    <br />
                    San Pedro de los Milagros, Antioquia
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 overflow-hidden rounded-[14px] border-2 border-white/40">
              <iframe
                title="Rohlfing Concept — Ubicación San Pedro de los Milagros"
                src="https://maps.google.com/maps?q=6.4612362,-75.5560957&output=embed&z=17"
                width="100%"
                height="180"
                className="block grayscale"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
