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
      {/* Header compacto */}
      <section className="border-b-2 border-[#0A0A0A]">
        <div className="section-compact-sm mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h1
              {...fadeUp()}
              className="sq-title flex flex-wrap items-center justify-center gap-2"
            >
              <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
              Televisión, digital y mixtos
            </motion.h1>
            <motion.div {...fadeUp(0.12)} className="mt-2.5 flex justify-center">
              <span className="pill max-w-full !whitespace-normal text-center !leading-snug">
                Precios de referencia · San Pedro de los Milagros
              </span>
            </motion.div>
            <motion.p
              {...fadeUp(0.18)}
              className="sq-sub mx-auto max-w-[54ch] text-[13px] leading-[1.5] text-[#5C5C5C]"
            >
              Tres grupos de packs con precios de referencia: pautas en televisión regional,
              publicidad digital en redes sociales y packs mixtos que combinan ambos.
            </motion.p>
            <motion.nav
              {...fadeUp(0.24)}
              aria-label="Grupos de paquetes"
              className="mt-3 flex flex-wrap items-center justify-center gap-1.5"
            >
              {paquetesGrupos.map((g) => (
                <a
                  key={g.id}
                  href={`#${g.id}`}
                  className="btn-secondary !text-xs"
                >
                  {g.titulo}
                </a>
              ))}
            </motion.nav>
          </div>
        </div>
      </section>

      {/* Grupos desde paquetesGrupos */}
      <div className="section-compact mx-auto max-w-[1440px] px-4 md:px-6 xl:px-8">
        {paquetesGrupos.map((grupo, gi) => (
          <section key={grupo.id} id={grupo.id} aria-label={grupo.titulo} className={gi > 0 ? "mt-6" : ""}>
            <motion.h2
              {...fadeUp()}
              className="sq-title flex flex-wrap items-center gap-2"
            >
              <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
              {grupo.titulo}
            </motion.h2>
            <motion.p
              {...fadeUp(0.12)}
              className="sq-sub max-w-[62ch] text-[13px] leading-[1.5] text-[#5C5C5C]"
            >
              {grupo.intro}
            </motion.p>
            <div className="sq-grid eq eq-5 mt-3 grid-cols-2 md:grid-cols-3">
              {grupo.packs.map((p, i) => (
                <motion.article
                  key={p.nombre}
                  {...fadeUp(i * 0.08)}
                  className="contents"
                >
                  <div className="card eq-card min-w-0 p-3">
                    <p className="min-w-0"><span className="pill !whitespace-normal !text-[10px] !leading-snug">{p.nombre}</span></p>
                    <div className="mt-2 flex flex-wrap items-end gap-1">
                      <span className="font-display text-xl font-bold tracking-tight text-[#0A0A0A] md:text-2xl">{p.precio}</span>
                      {grupo.id === "digital" && (
                        <span className="mb-0.5 text-xs text-[#5C5C5C]">/mes</span>
                      )}
                    </div>
                    <div className="line-fade my-3" />
                    <ul className="space-y-1.5">
                      {p.incluye.map((item) => (
                        <li key={item} className="flex min-w-0 items-start gap-1.5">
                          <Check size={14} weight="bold" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
                          <span className="min-w-0 text-[13px] leading-[1.5] text-[#0A0A0A]">{item}</span>
                        </li>
                      ))}
                    </ul>
                    {grupo.nota && (
                      <p className="mt-2 text-xs leading-[1.55] text-[#8A8A8A]">{grupo.nota}</p>
                    )}
                    <div className="card-cta w-full self-stretch pt-3">
                      <button
                        type="button"
                        onClick={() => irACotizador(p.nombre)}
                        className="btn-secondary w-full !whitespace-normal text-center !text-xs !leading-tight"
                      >
                        <MapPin size={15} weight="fill" className="shrink-0" />
                        Cotizar en mi ciudad
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        ))}

        {/* B7: Cotizador por ubicación — banda negra */}
        <motion.div
          {...fadeUp(0.1)}
          id="cotiza-ciudad"
          className="band-dark section-compact-sm mt-6 rounded-[14px]"
        >
          <div className="mx-auto max-w-2xl px-4 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
              Precio según tu ubicación
            </p>
            <h2 className="sq-title mt-1.5">
              Cotiza tu precio según tu ubicación
            </h2>
            <p className="sq-sub mx-auto max-w-[52ch] text-[13px] leading-[1.5] text-white/85">
              Elige tu pack, dinos en qué ciudad o municipio está tu negocio y te abrimos
              el chat de WhatsApp con tu cotización lista para enviar.
            </p>
          </div>
          <div className="mx-auto mt-3 grid max-w-2xl grid-cols-1 gap-2 px-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
            <div>
              <label htmlFor="pack-ciudad" className="field-label !text-white">
                Pack
              </label>
              <select
                id="pack-ciudad"
                value={pack}
                onChange={(e) => setPack(e.target.value)}
                className="field min-w-0 cursor-pointer appearance-none !rounded-full !border-white"
              >
                {todosLosPacks.map((nombre) => (
                  <option key={nombre} value={nombre}>
                    {nombre}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="ciudad" className="field-label !text-white">
                Ciudad o municipio
              </label>
              <input
                id="ciudad"
                type="text"
                value={ciudad}
                onChange={(e) => setCiudad(e.target.value)}
                placeholder="Ciudad o municipio"
                autoComplete="address-level2"
                className="field min-w-0 !rounded-full !border-white"
              />
            </div>
            <button
              type="button"
              onClick={cotizarPorCiudad}
              disabled={ciudadVacia}
              className="btn-primary whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-50"
            >
              <WhatsappLogo size={15} weight="fill" />
              Cotizar por WhatsApp
            </button>
          </div>
          <p className="mx-auto mt-2.5 max-w-2xl px-4 text-center text-xs leading-[1.5] text-white/85">
            {ciudadVacia
              ? "Escribe tu ciudad o municipio para activar el botón."
              : `Cotizarás el ${pack} para tu negocio en ${ciudadTrim}.`}
          </p>
        </motion.div>

        {/* FAQs */}
        <div className="mt-6">
          <motion.h2 {...fadeUp()} className="sq-title flex flex-wrap items-center gap-2">
            <span className="dash-accent" aria-hidden="true"><span /><span /><span /></span>
            Preguntas frecuentes
          </motion.h2>
          <div className="sq-grid mt-3 grid-cols-2 sm:grid-cols-2">
            {faqs.map((f, i) => (
              <motion.div key={f.q} {...fadeUp(i * 0.06)} className="card !rounded-[12px] !shadow-[0_6px_16px_rgba(10,10,10,0.08)] min-w-0 p-3">
                <div className="flex min-w-0 items-start gap-2">
                  <Question size={16} weight="fill" className="mt-0.5 shrink-0 text-[#0A0A0A]" />
                  <div className="min-w-0">
                    <h4 className="text-[13px] font-semibold leading-[1.5] text-[#0A0A0A]">{f.q}</h4>
                    <p className="mt-1 text-[13px] leading-[1.5] text-[#5C5C5C]">{f.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA final */}
        <motion.div
          {...fadeUp(0.1)}
          className="card section-compact-sm mt-6 text-center"
        >
          <h3 className="font-display text-[15px] font-bold tracking-tight text-[#0A0A0A]">
            ¿No sabes cuál elegir?
          </h3>
          <p className="sq-sub mx-auto max-w-sm text-[13px] leading-[1.5] text-[#5C5C5C]">
            Escríbenos y te ayudamos a encontrar el pack ideal.
          </p>
          <a
            href="https://wa.me/573242123300?text=Hola%2C%20no%20s%C3%A9%20qu%C3%A9%20paquete%20elegir%2C%20%C2%BFme%20ayudan%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-3"
          >
            <WhatsappLogo size={16} weight="fill" />
            Hablar con un asesor
          </a>
        </motion.div>
      </div>
    </main>
  );
}
