"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Check, MapPin, Question, WhatsappLogo } from "@phosphor-icons/react";
import { fadeUp } from "@/lib/anim";
import { paquetesGrupos } from "@/data/paquetes";

const faqs = [
  { q: "¿Los planes incluyen grabación?", a: "Sí, todos los planes incluyen la grabación en el lugar acordado contigo." },
  { q: "¿Puedo cambiar de plan?", a: "Puedes escalar o ajustar tu plan al inicio de cada mes sin problema." },
  { q: "¿Qué redes sociales manejan?", a: "Instagram, TikTok, Facebook y YouTube. La red adicional tiene un costo de +$30.000/mes." },
  { q: "¿Cómo es el pago?", a: "Mensual anticipado, por transferencia bancaria o efectivo." },
  { q: "¿En qué canal se transmite la pauta?", a: "En Mi Canal, televisión regional." },
  { q: "¿Qué incluyen los packs mixtos?", a: "Combinan un pack de TV y uno digital con su desglose completo." },
];

const WA_BASE = "https://wa.me/573242123300";

export default function PaquetesClient() {
  const todosLosPacks = useMemo(
    () => paquetesGrupos.flatMap((g) => g.packs.map((p) => p.nombre)),
    [],
  );

  const [pack, setPack] = useState("Pack I Publicitario");
  const [ciudad, setCiudad] = useState("");

  const ciudadTrim = ciudad.trim();
  const ciudadVacia = ciudadTrim === "";

  const cotizarPorCiudad = () => {
    if (ciudadVacia) return;
    const url = `${WA_BASE}?text=${encodeURIComponent(`Hola Rohlfing Concept, quiero cotizar el ${pack} para mi negocio en ${ciudadTrim}.`)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const irACotizador = (nombrePack: string) => {
    setPack(nombrePack);
    document.getElementById("cotiza-ciudad")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="min-h-screen bg-white text-[#0A0A0A]">
      {/* Header tipográfico */}
      <section className="border-b border-[#D9D9D9]">
        <div className="mx-auto max-w-[1440px] px-4 py-16 md:px-6 md:py-20 xl:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.p {...fadeUp()} className="kicker">
              Paquetes publicitarios
            </motion.p>
            <motion.h1
              {...fadeUp(0.06)}
              className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Televisión, digital y mixtos para tu marca
            </motion.h1>
            <motion.div {...fadeUp(0.12)} className="mt-6 flex justify-center px-4">
              <span className="inline-flex max-w-full items-center whitespace-nowrap rounded-full border border-[#D9D9D9] bg-[#F4F4F4] px-4 py-1.5 font-ui text-[11px] font-medium tracking-wide text-[#5C5C5C] md:text-xs">
                Precios de referencia · San Pedro de los Milagros
              </span>
            </motion.div>
            <motion.p
              {...fadeUp(0.18)}
              className="mx-auto mt-6 max-w-[54ch] text-[13px] leading-relaxed text-[#5C5C5C] md:text-sm"
            >
              Tres grupos de packs con precios de referencia: pautas en televisión regional,
              publicidad digital en redes sociales y packs mixtos que combinan ambos.
            </motion.p>
            <motion.nav
              {...fadeUp(0.24)}
              aria-label="Grupos de paquetes"
              className="mt-8 flex flex-wrap items-center justify-center gap-2"
            >
              {paquetesGrupos.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="inline-flex h-10 items-center rounded-full border border-[#D9D9D9] bg-white px-5 text-[13px] font-semibold text-[#0A0A0A] transition-colors duration-200 hover:border-[#0A0A0A] hover:bg-[#F4F4F4] md:h-9 md:text-[12px]"
                >
                  {g.titulo}
                </a>
              ))}
            </motion.nav>
          </div>
        </div>
      </section>

      {/* Grupos desde paquetesGrupos */}
      <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 md:py-20 xl:px-8">
        {paquetesGrupos.map((grupo, gi) => (
          <section key={grupo.id} id={grupo.id} aria-label={grupo.titulo} className={gi > 0 ? "mt-14 md:mt-20" : ""}>
            <motion.p {...fadeUp()} className="kicker">
              {String(gi + 1).padStart(2, "0")} — {grupo.id === "television" ? "Televisión" : grupo.id === "digital" ? "Digital" : "Mixtos"}
            </motion.p>
            <motion.h2
              {...fadeUp(0.06)}
              className="mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl"
            >
              {grupo.titulo}
            </motion.h2>
            <motion.p
              {...fadeUp(0.12)}
              className="mt-3 max-w-[62ch] text-[13px] leading-relaxed text-[#5C5C5C] md:text-sm"
            >
              {grupo.intro}
            </motion.p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {grupo.packs.map((p, i) => (
                <motion.article
                  key={p.nombre}
                  {...fadeUp(i * 0.08)}
                  className="flex flex-col rounded border border-[#D9D9D9] bg-white p-6 md:p-8"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8A8A8A]">
                    {p.nombre}
                  </p>
                  <div className="mt-4 flex items-end gap-1">
                    <span className="text-4xl font-bold tracking-tight text-[#0A0A0A]">{p.precio}</span>
                    {grupo.id === "digital" && (
                      <span className="mb-1 text-[13px] text-[#5C5C5C]">/mes</span>
                    )}
                  </div>
                  <div className="my-6 h-px bg-[#D9D9D9]" />
                  <ul className="flex-1 space-y-3">
                    {p.incluye.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check size={15} weight="bold" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
                        <span className="text-[13px] leading-relaxed text-[#0A0A0A]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {grupo.nota && (
                    <p className="mt-5 text-[12px] leading-relaxed text-[#8A8A8A]">{grupo.nota}</p>
                  )}
                  <button
                    type="button"
                    onClick={() => irACotizador(p.nombre)}
                    className="mt-8 inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full border border-[#D9D9D9] bg-white px-5 text-[13px] font-semibold text-[#0A0A0A] transition-colors duration-200 hover:border-[#0A0A0A] hover:bg-[#F4F4F4] md:h-9 md:text-[12px]"
                  >
                    <MapPin size={15} weight="fill" />
                    Cotizar en mi ciudad
                  </button>
                </motion.article>
              ))}
            </div>
          </section>
        ))}

        {/* B7: Cotizador por ubicación */}
        <motion.div
          {...fadeUp(0.1)}
          id="cotiza-ciudad"
          className="mt-14 rounded bg-[#0A0A0A] p-6 text-white md:mt-20 md:p-10"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
              Precio según tu ubicación
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight md:text-3xl">
              Cotiza tu precio según tu ubicación
            </h2>
            <p className="mx-auto mt-3 max-w-[52ch] text-[13px] leading-relaxed text-white md:text-sm">
              Elige tu pack, dinos en qué ciudad o municipio está tu negocio y te abrimos
              el chat de WhatsApp con tu cotización lista para enviar.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-2xl gap-3 md:grid-cols-[1fr_1fr_auto]">
            <label htmlFor="pack-ciudad" className="sr-only">
              Pack
            </label>
            <select
              id="pack-ciudad"
              value={pack}
              onChange={(e) => setPack(e.target.value)}
              className="h-10 w-full cursor-pointer appearance-none rounded-full border border-white bg-white px-4 text-[13px] font-medium text-[#0A0A0A] outline-none md:h-9 md:text-[12px]"
            >
              {todosLosPacks.map((nombre) => (
                <option key={nombre} value={nombre}>
                  {nombre}
                </option>
              ))}
            </select>
            <label htmlFor="ciudad" className="sr-only">
              Ciudad o municipio
            </label>
            <input
              id="ciudad"
              type="text"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
              placeholder="Ciudad o municipio"
              autoComplete="address-level2"
              className="h-10 w-full rounded-full border border-white bg-white px-4 text-[13px] text-[#0A0A0A] outline-none placeholder:text-[#8A8A8A] md:h-9 md:text-[12px]"
            />
            <button
              type="button"
              onClick={cotizarPorCiudad}
              disabled={ciudadVacia}
              className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 text-[13px] font-semibold whitespace-nowrap text-[#0A0A0A] transition-colors duration-200 hover:bg-[#E9E9E9] disabled:cursor-not-allowed disabled:opacity-50 md:h-9 md:text-[12px]"
            >
              <WhatsappLogo size={15} weight="fill" />
              Cotizar por WhatsApp
            </button>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-center text-xs leading-relaxed text-white">
            {ciudadVacia
              ? "Escribe tu ciudad o municipio para activar el botón."
              : `Cotizarás el ${pack} para tu negocio en ${ciudadTrim}.`}
          </p>
        </motion.div>

        {/* FAQs */}
        <div className="mt-14 md:mt-20">
          <motion.h2 {...fadeUp()} className="font-display text-2xl font-bold tracking-tight">
            Preguntas frecuentes
          </motion.h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {faqs.map((f, i) => (
              <motion.div key={f.q} {...fadeUp(i * 0.06)} className="rounded border border-[#D9D9D9] bg-[#F4F4F4] p-6">
                <div className="flex items-start gap-3">
                  <Question size={17} weight="fill" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
                  <div>
                    <h4 className="text-[13px] font-semibold text-[#0A0A0A] md:text-sm">{f.q}</h4>
                    <p className="mt-2 text-[13px] leading-relaxed text-[#5C5C5C] md:text-sm">{f.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <motion.div
          {...fadeUp(0.1)}
          className="mt-14 rounded border border-[#D9D9D9] bg-[#F4F4F4] p-8 text-center md:mt-16 md:p-10"
        >
          <h3 className="font-display text-xl font-bold tracking-tight text-[#0A0A0A]">
            ¿No sabes cuál elegir?
          </h3>
          <p className="mx-auto mt-3 max-w-sm text-[13px] leading-relaxed text-[#5C5C5C] md:text-sm">
            Escríbenos y te ayudamos a encontrar el pack ideal.
          </p>
          <a
            href="https://wa.me/573242123300?text=Hola%2C%20no%20s%C3%A9%20qu%C3%A9%20paquete%20elegir%2C%20%C2%BFme%20ayudan%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex h-10 items-center gap-2 rounded-full bg-[#0A0A0A] px-8 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-[#5C5C5C] md:h-9 md:text-[12px]"
          >
            <WhatsappLogo size={16} weight="fill" />
            Hablar con un asesor
          </a>
        </motion.div>
      </div>
    </main>
  );
}
