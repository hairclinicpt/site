"use client";

import Image from "next/image";
import { useState } from "react";

type Treatment = {
  badge: string;
  title: string;
  desc: string;
  image: string;
};

const capilar: Treatment[] = [
  {
    badge: "Diagnóstico",
    title: "Diagnóstico Capilar & Anamnese",
    desc: "Avaliação profissional com microcâmara que identifica a origem de cada problema capilar. O ponto de partida de tudo.",
    image: "/photos/Hair-Clinic-5.jpg",
  },
  {
    badge: "Ritual de Entrada",
    title: "Ritual de Introdução Tricológica",
    desc: "Primeiro contacto com a tricologia. Um momento de relaxamento e cuidado que prepara o couro cabeludo para o tratamento.",
    image: "/photos/Hair-Clinic-130.jpg",
  },
  {
    badge: "Tratamento",
    title: "Ritual Terapêutico Intensivo",
    desc: "Protocolo direcionado para queda, oleosidade ou dermatite, com ativos específicos e tecnologia LED de última geração.",
    image: "/photos/Hair-Clinic-100.jpg",
  },
  {
    badge: "Premium",
    title: "Ritual Clínico Premium",
    desc: "A nossa experiência mais completa. Tratamento capilar profundo com escalda-pés, argila, vapor e massagem. Transformação total.",
    image: "/photos/Hair-Clinic-150.jpg",
  },
];

const corpo: Treatment[] = [
  {
    badge: "Relaxamento",
    title: "Massagem Relaxante",
    desc: "Massagem completa que promove relaxamento físico e mental, com movimentos lentos e cadenciados num ambiente de calma total.",
    image: "/photos/Hair-Clinic-30.jpg",
  },
  {
    badge: "Terapia Térmica",
    title: "Massagem com Pindas",
    desc: "Massagem com ervas aquecidas que alivia tensões musculares profundas e melhora a circulação de forma visível e duradoura.",
    image: "/photos/Hair-Clinic-60.jpg",
  },
  {
    badge: "Renovação",
    title: "Esfoliação & Argila",
    desc: "Tratamento corporal com sais e argila que purifica, renova e revitaliza a pele — devolvendo-lhe leveza e luminosidade.",
    image: "/photos/Hair-Clinic-50.jpg",
  },
  {
    badge: "Ritual Sensorial",
    title: "Banho Terapêutico",
    desc: "Imersão com ervas e óleos naturais que promove equilíbrio profundo e uma sensação duradoura de bem-estar.",
    image: "/photos/Hair-Clinic-110.jpg",
  },
  {
    badge: "Ritual Inicial",
    title: "Escalda-Pés",
    desc: "O início da experiência Hair Clinic. Água quente, sais naturais e um acolhimento que prepara o corpo e a mente para o que se segue.",
    image: "/photos/Hair-Clinic-20.jpg",
  },
  {
    badge: "Personalizado",
    title: "Programa Completo",
    desc: "Combinação personalizada de tratamentos capilares e corporais para uma experiência de cuidado integral e transformadora.",
    image: "/photos/Hair-Clinic-80.jpg",
  },
];

const tabs = [
  { id: "capilar", label: "Cabelo & Couro Cabeludo", alt: "tratamentos capilares" },
  { id: "corpo", label: "Experiências Corpo", alt: "tratamentos corpo" },
] as const;

export default function TreatmentsTabs() {
  const [active, setActive] = useState<"capilar" | "corpo">("capilar");
  const list = active === "capilar" ? capilar : corpo;

  return (
    <div>
      <div
        role="tablist"
        aria-label="Tipos de tratamento"
        className="mb-px inline-flex flex-wrap border border-[color:var(--color-beige-dark)]"
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`tab-${t.id}`}
            aria-controls={`panel-${t.id}`}
            aria-selected={active === t.id}
            tabIndex={active === t.id ? 0 : -1}
            onClick={() => setActive(t.id)}
            className={`px-5 py-3 text-[10px] font-light uppercase tracking-[0.25em] transition-all sm:px-6 ${
              active === t.id
                ? "bg-[color:var(--color-ink)] text-[color:var(--color-cream)]"
                : "text-[color:var(--color-text-soft)] hover:text-[color:var(--color-ink)]"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        className={`grid grid-cols-1 gap-px bg-[color:var(--color-beige-dark)] sm:grid-cols-2 ${
          list.length === 4 ? "lg:grid-cols-2" : "lg:grid-cols-3"
        }`}
      >
        {list.map((t) => (
          <article
            key={t.title}
            className="group relative flex flex-col bg-[color:var(--color-beige)] p-7 transition-colors duration-500 hover:bg-[color:var(--color-beige-deep)] sm:p-10"
          >
            <div className="relative mb-6 aspect-[4/3] w-full overflow-hidden">
              <Image
                src={t.image}
                alt={`${t.title} — ${t.badge.toLowerCase()} na Hair Clinic Porto`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                quality={80}
                className="object-cover transition-transform duration-[1200ms] group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
            </div>
            <span className="mb-3 inline-block self-start bg-[color:var(--color-gold)]/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.3em] text-[color:var(--color-gold)]">
              {t.badge}
            </span>
            <h3 className="font-serif text-[22px] font-normal leading-tight text-[color:var(--color-ink)] sm:text-2xl">
              {t.title}
            </h3>
            <p className="mt-3 max-w-[42ch] text-[13px] leading-[1.8] text-[color:var(--color-text-soft)]">
              {t.desc}
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-[color:var(--color-beige-dark)] pt-4 text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-text)] transition-all group-hover:gap-5 group-hover:text-[color:var(--color-green-deep)]">
              <span>Saber mais</span>
              <span aria-hidden>→</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
