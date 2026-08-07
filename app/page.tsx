import Image from "next/image";
import Nav from "./components/Nav";
import Reveal from "./components/Reveal";
import StructuredData from "./components/StructuredData";
import TreatmentsTabs from "./components/TreatmentsTabs";
import { PRICELIST_URL, WHATSAPP_URL, PHONE_DISPLAY, LOCATION_DISPLAY } from "./lib/contact";
import { faqItems } from "./lib/faq";

const galleryImages = [
  {
    src: "/photos/Hair-Clinic-1.jpg",
    alt: "Fachada da Hair Clinic no Porto com monograma da marca em vinil dourado sobre vidro",
  },
  {
    src: "/photos/Hair-Clinic-20.jpg",
    alt: "Sala de espera da clínica capilar com sofá bouclé creme sobre azulejo português tradicional",
  },
  {
    src: "/photos/Hair-Clinic-60.jpg",
    alt: "Sala de tratamento corporal com banheira de pés clássica e parede de pedra exposta",
  },
  {
    src: "/photos/Hair-Clinic-30.jpg",
    alt: "Maca de tratamento tricológico com toalha bordada Hair Clinic e parede de pedra",
  },
  {
    src: "/photos/Hair-Clinic-50.jpg",
    alt: "Lavatório de cerâmica artesanal com toalha bordada Hair Clinic by Fábia Oliveira",
  },
];

const teamMembers = [
  {
    src: "/photos/equipa/equipa-1.jpg",
    alt: "Membro da equipa Hair Clinic em fardamento da marca, retrato profissional",
    name: "Equipa Hair Clinic",
    role: "Tricologia & Cuidado",
  },
  {
    src: "/photos/equipa/equipa-2.jpg",
    alt: "Membro sénior da equipa Hair Clinic em fardamento da marca, retrato profissional",
    name: "Equipa Hair Clinic",
    role: "Tricologia & Cuidado",
  },
  {
    src: "/photos/equipa/equipa-3.jpg",
    alt: "Membro da equipa Hair Clinic em fardamento da marca, retrato profissional",
    name: "Equipa Hair Clinic",
    role: "Tricologia & Cuidado",
  },
];

const pillars = [
  { icon: "✦", title: "Diagnóstico", desc: "Avaliação com microcâmara e tecnologia avançada" },
  { icon: "❋", title: "Tricologia", desc: "Tratamentos com base científica e clínica" },
  { icon: "◆", title: "Ritual", desc: "Experiência sensorial que cuida corpo e mente" },
  { icon: "○", title: "Personalização", desc: "Cada plano de tratamento é único" },
];

const steps = [
  {
    n: "01",
    title: "Diagnóstico Capilar",
    desc: "Avaliação profissional do couro cabeludo com microcâmara e tecnologia de diagnóstico avançado. Identificamos a origem do problema.",
  },
  {
    n: "02",
    title: "Anamnese & Plano",
    desc: "Análise do histórico capilar, rotinas e estilo de vida. Construímos um plano de tratamento personalizado para o seu caso específico.",
  },
  {
    n: "03",
    title: "Ritual Terapêutico",
    desc: "Protocolo de tratamento direcionado com ativos específicos, tecnologia LED e técnicas tricológicas de precisão.",
  },
  {
    n: "04",
    title: "Acompanhamento",
    desc: "Monitorização da evolução e ajuste do plano. Os resultados constroem-se com consistência e acompanhamento especializado.",
  },
];

const diferenciais = [
  { n: "01", title: "Autoridade Técnica", desc: "Especialização em tricologia com diagnóstico por microcâmara. Não tratamos por intuição — tratamos com ciência." },
  { n: "02", title: "Experiência Sensorial", desc: "Ambiente desenhado para o relaxamento. Chá artesanal, escalda-pés, aromas naturais. O cuidado começa ao entrar pela porta." },
  { n: "03", title: "Personalização Total", desc: "Nenhum tratamento é igual ao anterior. Cada plano é criado com base no diagnóstico e nas necessidades específicas de cada cliente." },
  { n: "04", title: "Tratamento da Origem", desc: "Enquanto outros tratam o sintoma, nós tratamos a causa. A diferença está em tratar o couro cabeludo — não apenas o cabelo." },
  { n: "05", title: "Acompanhamento Contínuo", desc: "O nosso trabalho não termina na sessão. Acompanhamos a evolução e ajustamos o protocolo para garantir resultados reais e duradouros." },
  { n: "06", title: "Ambiente Premium", desc: "Um espaço pensado ao detalhe — luz natural, texturas, cerâmica, renda. Porque a experiência começa nos sentidos." },
];

const testimonials = [
  {
    initial: "✦",
    name: "Cliente Hair Clinic",
    sub: "Visita inaugural",
    text: "Está fantástico mesmo. A cara da riqueza, chiquérrimo, muito confortável e super acolhedor. Eu acho isso muito importante. Relaxei completamente, mesmo estando com imensa gente à volta.",
  },
  {
    initial: "✦",
    name: "Cliente Hair Clinic",
    sub: "Visita inaugural",
    text: "Está muito bonito, e como disse, é algo que não temos aqui em Gaia e é bastante necessário. Todos falam em balayages e nas últimas tendências de coloração — é importante, claro, mas ninguém fala que a saúde do couro cabeludo está acima de tudo isso. Trouxeste um conceito totalmente diferente. Não é um simples tratamento de rampa no salão, é uma avaliação profissional e completa. O espaço está lindo! Fugiste do branco e dourado que é comum a todos os espaços. Adorei o estilo, meio Rituals, meio vintage.",
  },
  {
    initial: "✦",
    name: "Cliente Hair Clinic",
    sub: "Visita inaugural",
    text: "Adorei! O espaço é muito muito lindo, mesmo relaxante.",
  },
];

const percurso = [
  "Cabeleireira profissional há 6 anos",
  "Formação especializada em Tricologia há 3 anos",
  "Experiência na área da estética desde os 18 anos",
  "Formação contínua em saúde capilar, couro cabeludo e recuperação da fibra capilar",
  "Especialização em diagnóstico capilar avançado",
  "Protocolos personalizados de tratamento capilar e bem-estar",
  "Diagnóstico através de tricoscopia digital",
];

const areasAtuacao = [
  "Queda capilar",
  "Dermatite seborreica",
  "Psoríase",
  "Sensibilidade do couro cabeludo",
  "Oleosidade excessiva",
  "Descamação",
  "Recuperação da fibra capilar",
  "Saúde e equilíbrio do couro cabeludo",
];

const tecnologias = [
  "Tricoscopia Digital",
  "LED Terapêutico",
  "Diagnóstico Digital Capilar",
  "Protocolos Detox",
  "Aromaterapia Aplicada",
  "Terapias Complementares de Bem-Estar",
];

const porqueEscolher = [
  "Diagnóstico tricológico especializado",
  "Protocolos personalizados",
  "Tecnologia de análise capilar",
  "Acompanhamento contínuo",
  "Integração entre saúde capilar e bem-estar",
  "Ambiente exclusivo e acolhedor",
  "Experiência profissional em cabeleireiro, estética e tricologia",
];

const partilhadas = ["Casais", "Amigos", "Mãe e Filha", "Irmãs", "Familiares"];

const caso1Photos = [
  {
    src: "/photos/casos/caso-1/antes-1.jpg",
    alt: "Couro cabeludo com rarefação capilar avançada na zona superior, antes do tratamento — caso clínico Hair Clinic",
    tag: "Antes",
  },
  {
    src: "/photos/casos/caso-1/antes-2.jpg",
    alt: "Vista superior do couro cabeludo com elevada transparência capilar, antes do tratamento — caso clínico Hair Clinic",
    tag: "Antes",
  },
  {
    src: "/photos/casos/caso-1/depois-1.jpg",
    alt: "Couro cabeludo com densidade capilar visivelmente recuperada após o tratamento — caso clínico Hair Clinic",
    tag: "Depois",
  },
  {
    src: "/photos/casos/caso-1/depois-2.jpg",
    alt: "Cobertura capilar mais homogénea e fios mais espessos após o tratamento — caso clínico Hair Clinic",
    tag: "Depois",
  },
] as const;

const caso1Plano = [
  "Diagnóstico tricológico especializado",
  "Protocolos personalizados de estimulação capilar",
  "Terapias de fortalecimento da fibra capilar",
  "Acompanhamento regular da evolução clínica",
  "Plano domiciliário adaptado às necessidades da cliente",
];

const caso1Resultados = [
  "Maior densidade capilar",
  "Redução da visibilidade do couro cabeludo",
  "Melhoria da qualidade e espessura dos fios",
  "Cobertura capilar mais homogénea",
  "Evolução documentada através de acompanhamento fotográfico e tricológico",
];

const caso2Photos = [
  {
    src: "/photos/casos/caso-2/evolucao-1.jpg",
    alt: "Comparação fotográfica da evolução da densidade capilar na zona superior da cabeça — caso clínico Hair Clinic",
  },
  {
    src: "/photos/casos/caso-2/evolucao-2.jpg",
    alt: "Comparação fotográfica do aumento de volume e cobertura capilar durante o acompanhamento — caso clínico Hair Clinic",
  },
] as const;

const caso2Protocolo = [
  "Diagnóstico tricológico personalizado",
  "Plano domiciliário individualizado",
  "Acompanhamento especializado contínuo",
  "Protocolos de fortalecimento e recuperação capilar",
  "Monitorização fotográfica da evolução",
];

const caso2Resultados = [
  "Aumento da densidade capilar",
  "Redução da visibilidade do couro cabeludo",
  "Melhoria da qualidade e resistência da fibra capilar",
  "Maior volume visual",
  "Evolução documentada através de acompanhamento fotográfico",
];

export default function Home() {
  return (
    <>
      <StructuredData />
      <Nav />
      <main id="main" className="flex-1">
        {/* ─────────────────────────────  HERO  ───────────────────────────── */}
        <section
          id="top"
          aria-labelledby="hero-heading"
          className="relative min-h-[100svh] overflow-hidden"
        >
          {/* Background photo */}
          <Image
            src="/photos/Hair-Clinic-130.jpg"
            alt="Cliente em ritual capilar na Hair Clinic by Fábia Oliveira no Porto, em ambiente sereno com turbante bordado"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={85}
            className="object-cover object-center"
          />
          {/* Veil */}
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-cream)] via-[color:var(--color-cream)]/85 to-[color:var(--color-cream)]/20 md:from-[color:var(--color-cream)] md:via-[color:var(--color-cream)]/70 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-cream)] via-transparent to-transparent md:hidden" />

          {/* Content */}
          <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-end px-5 pb-20 pt-32 sm:px-6 sm:pb-24 sm:pt-40 md:grid md:grid-cols-12 md:items-end md:px-14 md:pb-28">
            <div className="md:col-span-7 lg:col-span-6">
              <p className="eyebrow mb-8 opacity-0 animate-[fadeUp_1s_0.2s_forwards]">
                Tricologia · Diagnóstico · Ritual
              </p>
              <h1
                id="hero-heading"
                className="font-serif text-[clamp(40px,7vw,100px)] font-light leading-[1.02] text-[color:var(--color-ink)] opacity-0 animate-[fadeUp_1.1s_0.4s_forwards]"
              >
                O cuidado
                <br />
                começa <em className="italic text-[color:var(--color-green-deep)]">na raiz.</em>
              </h1>
              <p className="mt-9 max-w-md text-[14px] leading-[1.95] text-[color:var(--color-text-soft)] opacity-0 animate-[fadeUp_1s_0.6s_forwards]">
                Não tratamos apenas o cabelo. Tratamos o couro cabeludo, o corpo
                e o bem-estar — com base em diagnóstico especializado e uma
                experiência sensorial única.
              </p>
              <div className="mt-12 flex flex-wrap items-center gap-6 opacity-0 animate-[fadeUp_1s_0.8s_forwards] sm:gap-8">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Marcar diagnóstico via WhatsApp"
                  className="group relative overflow-hidden bg-[color:var(--color-green-deep)] px-8 py-4 text-[10px] uppercase tracking-[0.32em] text-[color:var(--color-cream)] sm:px-10"
                >
                  <span className="relative z-10">Marcar Diagnóstico</span>
                  <span className="absolute inset-0 -translate-x-full bg-[color:var(--color-ink)] transition-transform duration-500 group-hover:translate-x-0" />
                </a>
                <a
                  href={PRICELIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-text)] transition-colors hover:text-[color:var(--color-gold)]"
                >
                  <span className="block h-px w-7 bg-[color:var(--color-gold)] transition-all duration-300 group-hover:w-12" />
                  Ver Preçário
                </a>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
            <span className="scroll-line" />
            <span className="text-[9px] uppercase tracking-[0.4em] text-[color:var(--color-text-soft)]">
              Scroll
            </span>
          </div>

          {/* Floating badge */}
          <div className="absolute bottom-12 right-6 hidden bg-[color:var(--color-cream)] px-7 py-5 shadow-[0_30px_80px_rgba(0,0,0,0.12)] md:block opacity-0 animate-[fadeUp_1s_1.1s_forwards]">
            <p className="text-[9px] uppercase tracking-[0.32em] text-[color:var(--color-gold)]">
              Especialização em
            </p>
            <p className="mt-1 font-serif text-[20px] text-[color:var(--color-ink)]">
              Tricologia
            </p>
            <p className="text-[11px] text-[color:var(--color-text-soft)]">
              Diagnóstico avançado
            </p>
          </div>
        </section>

        {/* ─────────────────────────  MANIFESTO STRIP  ──────────────────────── */}
        <div
          role="presentation"
          aria-hidden="true"
          className="overflow-hidden bg-[color:var(--color-ink)] py-7 motion-reduce:py-5"
        >
          <div className="marquee-track flex w-max gap-16 whitespace-nowrap motion-reduce:animate-none">
            {Array.from({ length: 2 }).flatMap((_, k) =>
              [
                "Tratamos a origem",
                "Não é só estética",
                "É um método",
                "Ciência + Cuidado + Experiência",
                "Onde o cuidado começa na origem",
              ].map((phrase, i) => (
                <span key={`${k}-${i}`} className="flex items-center gap-16">
                  <span className="font-serif text-[18px] font-light italic text-[color:var(--color-cream)]/75">
                    {phrase}
                  </span>
                  <span className="text-[color:var(--color-gold)]">·</span>
                </span>
              )),
            )}
          </div>
        </div>

        {/* ─────────────────────────────  MANIFESTO  ───────────────────────── */}
        <section
          id="manifesto"
          aria-labelledby="manifesto-heading"
          className="mx-auto max-w-[900px] px-5 py-20 text-center sm:px-6 sm:py-24 md:py-32"
        >
          <Reveal as="p" className="eyebrow justify-center">
            Hair Clinic by Fábia Oliveira
          </Reveal>
          <Reveal delay={1}>
            <h2
              id="manifesto-heading"
              className="mt-6 font-serif text-[clamp(28px,3.2vw,52px)] font-light leading-[1.2] text-[color:var(--color-ink)]"
            >
              Onde a tricologia clínica encontra
              <br />
              <em className="italic text-[color:var(--color-green-deep)]">
                o bem-estar terapêutico.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-5 text-[14.5px] leading-[2] text-[color:var(--color-text-soft)]">
              <p>
                Na Hair Clinic acreditamos que a verdadeira saúde capilar
                começa pela compreensão da sua origem.
              </p>
              <p>
                Unimos diagnóstico tricológico avançado, protocolos
                personalizados e experiências de bem-estar cuidadosamente
                desenhadas para restaurar o equilíbrio do couro cabeludo,
                fortalecer a fibra capilar e promover resultados duradouros.
              </p>
              <p>
                Cada tratamento é construído com base numa avaliação
                detalhada, combinando ciência, tecnologia e acompanhamento
                especializado com momentos de relaxamento e cuidado profundo.
              </p>
              <p className="font-serif text-[20px] font-light italic leading-[1.7] text-[color:var(--color-ink)]">
                Mais do que tratar o cabelo, cuidamos da pessoa como um todo.
              </p>
              <p>
                Num espaço exclusivo e acolhedor, criamos experiências que
                transformam a saúde capilar, devolvem confiança e elevam o
                bem-estar físico e emocional.
              </p>
            </div>
          </Reveal>
          <Reveal delay={3}>
            <div
              aria-hidden
              className="mx-auto mt-12 h-px w-16 bg-[color:var(--color-gold)]"
            />
            <p className="mt-8 font-serif text-[clamp(20px,2.4vw,30px)] font-light italic text-[color:var(--color-ink)]">
              Diagnosticar. Tratar. Recuperar.{" "}
              <span className="text-[color:var(--color-green-deep)]">
                Transformar.
              </span>
            </p>
          </Reveal>
        </section>

        {/* ───────────────────────────────  SOBRE  ─────────────────────────── */}
        <section
          id="sobre"
          aria-labelledby="sobre-heading"
          className="mx-auto grid max-w-[1400px] gap-12 px-5 py-20 sm:gap-16 sm:px-6 sm:py-24 md:grid-cols-2 md:gap-24 md:px-14 md:py-36 lg:items-center"
        >
          <div>
            <Reveal as="p" className="eyebrow">
              A Clínica
            </Reveal>
            <Reveal delay={1}>
              <h2
                id="sobre-heading"
                className="mt-6 font-serif text-[clamp(30px,3.4vw,56px)] font-light leading-[1.15] text-[color:var(--color-ink)]"
              >
                Uma clínica capilar
                <br />
                <em className="italic text-[color:var(--color-green-deep)]">
                  diferente de tudo
                </em>
                <br />o que conhece.
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-8 max-w-prose text-[14.5px] leading-[2] text-[color:var(--color-text-soft)]">
                A Hair Clinic não é um salão. É um espaço clínico especializado
                em tricologia, onde cada sessão começa com um diagnóstico
                profundo do couro cabeludo e termina com uma experiência
                sensorial de cuidado completo.
              </p>
            </Reveal>
            <Reveal delay={3}>
              <p className="mt-5 max-w-prose text-[14.5px] leading-[2] text-[color:var(--color-text-soft)]">
                Aqui, o cabelo é o resultado — não o ponto de partida. Tudo
                começa no couro cabeludo.
              </p>
            </Reveal>
            <Reveal delay={4}>
              <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {pillars.map((p) => (
                  <div
                    key={p.title}
                    className="group relative border border-[color:var(--color-beige-dark)] p-6 transition-all hover:-translate-y-1 hover:border-[color:var(--color-gold)]"
                  >
                    <span className="absolute left-0 top-0 h-0 w-[3px] bg-[color:var(--color-gold)] transition-all duration-500 group-hover:h-full" />
                    <div className="mb-2 text-2xl text-[color:var(--color-gold)]">
                      {p.icon}
                    </div>
                    <h4 className="font-serif text-[17px] font-medium text-[color:var(--color-ink)]">
                      {p.title}
                    </h4>
                    <p className="mt-1 text-[12.5px] leading-[1.7] text-[color:var(--color-text-soft)]">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="relative">
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image
                src="/photos/Hair-Clinic-90.jpg"
                alt="Fábia Oliveira, tricologista e fundadora da Hair Clinic, com fardamento da marca"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
                className="object-cover"
              />
            </div>
            <div
              aria-hidden
              className="absolute -left-8 top-8 h-24 w-24 border border-[color:var(--color-gold)] opacity-50"
            />
            <div className="absolute -bottom-6 -right-4 bg-[color:var(--color-green-deep)] px-8 py-7 text-[color:var(--color-cream)] md:-right-8">
              <p className="text-[9px] uppercase tracking-[0.35em] opacity-60">
                Fundadora
              </p>
              <p className="mt-1 font-serif text-[30px] font-light leading-none">
                Fábia
              </p>
              <p className="mt-1 text-[12px] opacity-75">Oliveira</p>
            </div>
          </Reveal>
        </section>

        {/* ─────────────────────────────  FUNDADORA  ───────────────────────── */}
        <section
          id="fundadora"
          aria-labelledby="fundadora-heading"
          className="bg-[color:var(--color-beige)] py-20 sm:py-24 md:py-36"
        >
          <div className="mx-auto grid max-w-[1400px] gap-14 px-5 sm:px-6 md:grid-cols-[5fr_7fr] md:gap-20 md:px-14 lg:gap-24">
            <Reveal className="relative self-start md:sticky md:top-32">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/photos/Hair-Clinic-89.jpg"
                  alt="Fábia Oliveira, fundadora e tricologista da Hair Clinic, em fardamento da marca"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div
                aria-hidden
                className="absolute -right-4 top-8 h-24 w-24 border border-[color:var(--color-gold)] opacity-50"
              />
              <div className="absolute -bottom-6 left-5 bg-[color:var(--color-green-deep)] px-7 py-6 text-[color:var(--color-cream)] sm:left-8">
                <p className="text-[9px] uppercase tracking-[0.35em] opacity-60">
                  Fundadora &amp; Tricologista
                </p>
                <p className="mt-1 font-serif text-[26px] font-light leading-none">
                  Fábia Oliveira
                </p>
              </div>
            </Reveal>

            <div>
              <Reveal as="p" className="eyebrow">
                A Fundadora
              </Reveal>
              <Reveal delay={1}>
                <h2
                  id="fundadora-heading"
                  className="mt-6 font-serif text-[clamp(30px,3.4vw,56px)] font-light leading-[1.15] text-[color:var(--color-ink)]"
                >
                  A minha história começou
                  <br />
                  <em className="italic text-[color:var(--color-green-deep)]">
                    muito antes da tricologia.
                  </em>
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <div className="mt-8 flex max-w-prose flex-col gap-5 text-[14.5px] leading-[2] text-[color:var(--color-text-soft)]">
                  <p>
                    Aos 18 anos iniciei o meu percurso profissional na área da
                    estética, desenvolvendo experiência em cuidados de mãos,
                    pés, corpo e bem-estar.
                  </p>
                  <p>
                    Ao longo dos anos percebi que a verdadeira transformação
                    acontece quando conseguimos unir conhecimento técnico,
                    acompanhamento próximo e resultados reais.
                  </p>
                  <p>
                    Há 6 anos iniciei o meu percurso como cabeleireira
                    profissional e, motivada pela vontade de compreender a
                    origem dos problemas capilares, aprofundei os meus estudos
                    na área da tricologia, onde me especializo há mais de 3
                    anos.
                  </p>
                  <p>
                    A Hair Clinic nasceu dessa visão: criar um espaço onde
                    ciência, tecnologia, saúde capilar e bem-estar coexistem em
                    perfeita harmonia.
                  </p>
                  <p>
                    A nossa missão é proporcionar diagnósticos precisos,
                    tratamentos personalizados e experiências diferenciadoras
                    que devolvam confiança, autoestima e qualidade de vida aos
                    nossos clientes.
                  </p>
                  <p>
                    Mais do que tratar cabelos, procuramos compreender pessoas,
                    acompanhar histórias e criar resultados duradouros.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={3}>
                <blockquote className="mt-10 border-l-2 border-[color:var(--color-gold)] pl-6 font-serif text-[20px] font-light italic leading-[1.6] text-[color:var(--color-ink)] sm:text-[23px]">
                  Porque cada couro cabeludo tem uma história. E cada história
                  merece ser cuidada de forma única.
                </blockquote>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ─────────────────────────  AUTORIDADE CLÍNICA  ──────────────────── */}
        <section
          id="autoridade"
          aria-labelledby="autoridade-heading"
          className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 md:px-14 md:py-36"
        >
          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <Reveal as="p" className="eyebrow">
                Autoridade Clínica
              </Reveal>
              <Reveal delay={1}>
                <h2
                  id="autoridade-heading"
                  className="mt-6 font-serif text-[clamp(30px,3.4vw,56px)] font-light leading-[1.15] text-[color:var(--color-ink)]"
                >
                  Formação, técnica
                  <br />
                  <em className="italic text-[color:var(--color-green-deep)]">
                    e método clínico.
                  </em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={2}>
              <p className="text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                A Hair Clinic diferencia-se por unir a tricologia à
                experiência adquirida ao longo de anos na área da estética e
                do bem-estar, proporcionando uma abordagem integrada e
                personalizada à saúde capilar.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-px bg-[color:var(--color-beige-dark)] sm:grid-cols-2 lg:grid-cols-4">
            <Reveal className="relative hidden overflow-hidden lg:block">
              <Image
                src="/photos/Hair-Clinic-140.jpg"
                alt="LED terapêutico aplicado em tratamento capilar na Hair Clinic"
                fill
                sizes="25vw"
                className="object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/60 via-transparent to-transparent"
              />
              <div className="absolute bottom-0 left-0 p-8 text-[color:var(--color-cream)]">
                <p className="text-[9px] uppercase tracking-[0.32em] opacity-70">
                  Fábia Oliveira
                </p>
                <p className="mt-1 font-serif text-[20px] font-light leading-snug">
                  Tricologia com base
                  <br />
                  em diagnóstico.
                </p>
              </div>
            </Reveal>
            <AuthorityCol title="Percurso & Formação" items={percurso} delay={1} />
            <AuthorityCol title="Áreas de Atuação" items={areasAtuacao} delay={2} />
            <AuthorityCol title="Tecnologias Utilizadas" items={tecnologias} delay={3} />
          </div>
        </section>

        {/* ───────────────────────────────  EQUIPA  ────────────────────────── */}
        <section
          id="equipa"
          aria-labelledby="equipa-heading"
          className="mx-auto max-w-[1400px] px-5 pb-20 sm:px-6 sm:pb-24 md:px-14 md:pb-36"
        >
          <div className="mx-auto max-w-2xl text-center">
            <Reveal as="p" className="eyebrow justify-center">
              A Equipa
            </Reveal>
            <Reveal delay={1}>
              <h2
                id="equipa-heading"
                className="mt-6 font-serif text-[clamp(30px,3.4vw,56px)] font-light leading-[1.15] text-[color:var(--color-ink)]"
              >
                As mãos que
                <br />
                <em className="italic text-[color:var(--color-green-deep)]">
                  cuidam de si.
                </em>
              </h2>
            </Reveal>
            <Reveal delay={2}>
              <p className="mx-auto mt-8 max-w-lg text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                Por trás de cada detalhe há uma equipa especializada — dedicada
                ao detalhe e ao acolhimento que define a Hair Clinic.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-10">
            {teamMembers.map((m, i) => (
              <Reveal key={m.src} delay={(i % 3) as 0 | 1 | 2}>
                <article className="group">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[color:var(--color-beige)]">
                    <Image
                      src={m.src}
                      alt={m.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                  </div>
                  <div className="mt-5 border-t border-[color:var(--color-beige-dark)] pt-5">
                    <p className="text-[9px] uppercase tracking-[0.35em] text-[color:var(--color-gold)]">
                      {m.role}
                    </p>
                    <h3 className="mt-2 font-serif text-[22px] font-light text-[color:var(--color-ink)] sm:text-[24px]">
                      {m.name}
                    </h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ───────────────────────────────  MÉTODO  ────────────────────────── */}
        <section
          id="metodo"
          aria-labelledby="metodo-heading"
          className="relative overflow-hidden bg-[color:var(--color-beige)] py-20 sm:py-24 md:py-36"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute left-[-30px] top-1/2 -translate-y-1/2 -rotate-90 font-serif text-[160px] font-light tracking-[0.08em] text-[color:var(--color-ink)]/[0.04]"
          >
            MÉTODO
          </span>

          <div className="relative mx-auto max-w-[1400px] px-6 md:px-14">
            <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
              <div className="max-w-xl">
                <Reveal as="p" className="eyebrow">
                  O Processo
                </Reveal>
                <Reveal delay={1}>
                  <h2
                    id="metodo-heading"
                    className="mt-6 font-serif text-[clamp(30px,3.4vw,56px)] font-light leading-[1.15] text-[color:var(--color-ink)]"
                  >
                    Um método.
                    <br />
                    <em className="italic text-[color:var(--color-green-deep)]">
                      Não um serviço.
                    </em>
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={2} className="max-w-md">
                <p className="text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                  Cada visita segue um protocolo rigoroso que começa no
                  diagnóstico e termina no resultado. A Hair Clinic trata com
                  ciência, cuida com intenção.
                </p>
              </Reveal>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-px bg-[color:var(--color-beige-dark)] sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <article className="group relative h-full overflow-hidden bg-[color:var(--color-cream)] p-10 transition-all hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
                    <span className="absolute left-0 right-0 top-0 h-[3px] origin-left scale-x-0 bg-[color:var(--color-gold)] transition-transform duration-500 group-hover:scale-x-100" />
                    <div className="font-serif text-[64px] font-light leading-none text-[color:var(--color-beige-deep)] transition-colors group-hover:text-[color:var(--color-beige-dark)]">
                      {s.n}
                    </div>
                    <h3 className="mt-6 font-serif text-[22px] font-medium leading-tight text-[color:var(--color-ink)]">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-[1.8] text-[color:var(--color-text-soft)]">
                      {s.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          variant="green"
          line={
            <>
              Pronta para conhecer a origem
              <br className="hidden md:block" /> do seu problema capilar?
            </>
          }
          primary="Marcar Diagnóstico"
          secondary="Falar com Especialista"
        />

        {/* ─────────────────────────────  TRATAMENTOS  ─────────────────────── */}
        <section
          id="tratamentos"
          aria-labelledby="tratamentos-heading"
          className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 md:px-14 md:py-36"
        >
          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <Reveal as="p" className="eyebrow">
                Serviços
              </Reveal>
              <Reveal delay={1}>
                <h2
                  id="tratamentos-heading"
                  className="mt-6 font-serif text-[clamp(30px,3.4vw,56px)] font-light leading-[1.15] text-[color:var(--color-ink)]"
                >
                  Rituais pensados
                  <br />
                  <em className="italic text-[color:var(--color-green-deep)]">
                    para si.
                  </em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={2}>
              <p className="text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                Da queda à oleosidade, do stress ao bem-estar — cada tratamento
                é desenhado para responder à origem do problema, não apenas aos
                sintomas visíveis.
              </p>
            </Reveal>
          </div>

          <Reveal className="mt-14">
            <TreatmentsTabs />
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-14 flex flex-col items-center gap-5 border-t border-[color:var(--color-beige-dark)] pt-10 text-center sm:flex-row sm:justify-between sm:gap-8 sm:text-left">
              <p className="max-w-md font-serif text-[20px] font-light italic leading-[1.4] text-[color:var(--color-ink)] sm:text-[22px]">
                Consulte a tabela completa de tratamentos e valores.
              </p>
              <a
                href={PRICELIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 overflow-hidden bg-[color:var(--color-ink)] px-8 py-4 text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-cream)] transition-colors hover:bg-[color:var(--color-green-deep)] focus-visible:bg-[color:var(--color-green-deep)]"
              >
                <span>Ver Preçário Completo</span>
                <span aria-hidden className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </Reveal>
        </section>

        {/* ──────────────────────  EXPERIÊNCIAS PARTILHADAS  ───────────────── */}
        <section
          id="partilhadas"
          aria-labelledby="partilhadas-heading"
          className="bg-[color:var(--color-beige)] py-20 sm:py-24 md:py-32"
        >
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 sm:px-6 md:grid-cols-2 md:gap-24 md:px-14">
            <div>
              <Reveal as="p" className="eyebrow">
                Experiências Partilhadas
              </Reveal>
              <Reveal delay={1}>
                <h2
                  id="partilhadas-heading"
                  className="mt-6 font-serif text-[clamp(30px,3.4vw,56px)] font-light leading-[1.15] text-[color:var(--color-ink)]"
                >
                  O autocuidado também
                  <br />
                  <em className="italic text-[color:var(--color-green-deep)]">
                    se vive em conjunto.
                  </em>
                </h2>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-8 max-w-prose text-[14.5px] leading-[2] text-[color:var(--color-text-soft)]">
                  Na Hair Clinic acreditamos que o autocuidado também pode ser
                  vivido em conjunto.
                </p>
                <p className="mt-5 max-w-prose text-[14.5px] leading-[2] text-[color:var(--color-text-soft)]">
                  Criámos experiências para duas pessoas, realizadas numa sala
                  partilhada, proporcionando momentos únicos de bem-estar,
                  relaxamento e conexão.
                </p>
              </Reveal>
            </div>

            <Reveal delay={2}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-gold)]">
                Disponível para
              </p>
              <ul className="mt-6">
                {partilhadas.map((p, i) => (
                  <li
                    key={p}
                    className="group flex items-baseline gap-6 border-b border-[color:var(--color-beige-dark)] py-5 transition-colors hover:border-[color:var(--color-gold)] first:border-t first:border-t-[color:var(--color-beige-dark)]"
                  >
                    <span className="font-serif text-[13px] tracking-[0.25em] text-[color:var(--color-gold)]">
                      0{i + 1}
                    </span>
                    <span className="font-serif text-[22px] font-light text-[color:var(--color-ink)] sm:text-[26px]">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ──────────────────────────────  QUOTE  ──────────────────────────── */}
        <section
          aria-label="Manifesto da Hair Clinic"
          className="relative overflow-hidden bg-[color:var(--color-green-deep)] py-24 text-center sm:py-28 md:py-36"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(196,169,107,0.12)_0%,transparent_70%)]"
          />
          <div className="relative mx-auto max-w-3xl px-6">
            <Reveal>
              <span className="block font-serif text-[120px] leading-[0.5] text-[color:var(--color-cream)]/10">
                &ldquo;
              </span>
            </Reveal>
            <Reveal delay={1}>
              <p className="mt-8 font-serif text-[clamp(28px,3.2vw,48px)] font-light italic leading-[1.5] text-[color:var(--color-cream)]">
                Não tratamos apenas o cabelo.
                <br />
                Tratamos o couro cabeludo, o corpo e o bem-estar.
              </p>
            </Reveal>
            <Reveal delay={2}>
              <p className="mt-10 text-[11px] uppercase tracking-[0.4em] text-[color:var(--color-gold-light)]">
                Hair Clinic by Fábia Oliveira
              </p>
            </Reveal>
          </div>
        </section>

        {/* ──────────────────────────  RESULTADOS REAIS  ───────────────────── */}
        <section
          id="resultados"
          aria-labelledby="resultados-heading"
          className="mx-auto max-w-[1400px] px-5 py-20 sm:px-6 sm:py-24 md:px-14 md:py-36"
        >
          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2 md:gap-20">
            <div>
              <Reveal as="p" className="eyebrow">
                Resultados Reais
              </Reveal>
              <Reveal delay={1}>
                <h2
                  id="resultados-heading"
                  className="mt-6 font-serif text-[clamp(30px,3.4vw,56px)] font-light leading-[1.15] text-[color:var(--color-ink)]"
                >
                  Casos clínicos
                  <br />
                  <em className="italic text-[color:var(--color-green-deep)]">
                    documentados.
                  </em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={2}>
              <p className="text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                Evoluções acompanhadas com fotografia e tricoscopia digital,
                do primeiro diagnóstico ao resultado. Cada caso é único — e
                cada plano nasce de uma avaliação detalhada.
              </p>
            </Reveal>
          </div>

          {/* ── Caso 01 ── */}
          <article
            aria-label="Caso clínico 01 — Recuperação da densidade capilar"
            className="mt-16 border-t border-[color:var(--color-beige-dark)] pt-14 md:mt-20"
          >
            <Reveal>
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <span className="font-serif text-[14px] tracking-[0.25em] text-[color:var(--color-gold)]">
                  CASO 01
                </span>
                <h3 className="font-serif text-[clamp(24px,2.6vw,38px)] font-light text-[color:var(--color-ink)]">
                  Recuperação da Densidade Capilar
                </h3>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <Reveal className="self-start lg:sticky lg:top-28">
                <div className="grid grid-cols-2 gap-2">
                  {caso1Photos.map((photo) => (
                    <div
                      key={photo.src}
                      className="relative aspect-[3/4] overflow-hidden bg-[color:var(--color-beige)]"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                      <span
                        className={`absolute left-3 top-3 px-3 py-1.5 text-[9px] uppercase tracking-[0.28em] ${
                          photo.tag === "Antes"
                            ? "bg-[color:var(--color-cream)]/90 text-[color:var(--color-text)]"
                            : "bg-[color:var(--color-green-deep)]/90 text-[color:var(--color-cream)]"
                        }`}
                      >
                        {photo.tag}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-text-soft)]">
                  Período de evolução: 21 de fevereiro a 11 de junho de 2025
                </p>
              </Reveal>

              <div className="flex flex-col gap-9">
                <Reveal delay={1}>
                  <CaseLabel>Situação Inicial</CaseLabel>
                  <p className="mt-4 text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                    Cliente com rarefação capilar avançada e diminuição
                    significativa da densidade na zona superior do couro
                    cabeludo, apresentando elevada transparência capilar e
                    afinamento progressivo da fibra.
                  </p>
                </Reveal>
                <Reveal delay={1}>
                  <CaseLabel>Avaliação Tricológica</CaseLabel>
                  <p className="mt-4 text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                    Através de diagnóstico tricológico e tricoscopia digital
                    foi identificada uma redução importante da densidade
                    capilar, exigindo um plano terapêutico personalizado e
                    acompanhamento contínuo.
                  </p>
                </Reveal>
                <Reveal delay={2}>
                  <CaseLabel>Plano Terapêutico</CaseLabel>
                  <ul className="mt-4 flex flex-col">
                    {caso1Plano.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 border-b border-[color:var(--color-beige-deep)] py-3 text-[13.5px] leading-[1.8] text-[color:var(--color-text-soft)] last:border-b-0"
                      >
                        <span aria-hidden className="mt-px text-[color:var(--color-gold)]">
                          ✦
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={2}>
                  <CaseLabel>Evolução</CaseLabel>
                  <p className="mt-4 text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                    Após 3 meses e 3 semanas de acompanhamento, observou-se
                    uma melhoria visível da densidade capilar, aumento da
                    cobertura do couro cabeludo e fortalecimento progressivo
                    da fibra.
                  </p>
                  <p className="mt-4 text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                    As imagens demonstram uma redução significativa da
                    transparência na zona superior da cabeça, com maior
                    uniformidade e volume visual dos fios.
                  </p>
                </Reveal>
                <Reveal delay={3}>
                  <CaseLabel>Resultado</CaseLabel>
                  <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {caso1Resultados.map((item) => (
                      <CheckItem key={item}>{item}</CheckItem>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>

            <Reveal delay={1}>
              <figure className="mt-14 bg-[color:var(--color-beige)] p-8 sm:p-12 md:grid md:grid-cols-[auto_1fr] md:gap-10">
                <div
                  aria-hidden
                  className="hidden select-none font-serif text-[100px] leading-[0.55] text-[color:var(--color-gold)]/35 md:block"
                >
                  &ldquo;
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-gold)]">
                    Feedback da Paciente
                  </p>
                  <blockquote className="mt-5 font-serif text-[17px] font-light italic leading-[1.75] text-[color:var(--color-ink)] sm:text-[19px]">
                    &ldquo;Tenho um longo histórico de tratamentos falhados e
                    queda capilar há muitos anos, estava já descrente com
                    alguma solução quando a Fábia me propôs fazer um
                    diagnóstico capilar! Aceitei, embora um pouco na dúvida de
                    que tivesse algum resultado… mas todo o diagnóstico e a
                    forma como o tratamento me foi recomendado deu-me
                    confiança para experimentar!! Quase meio ano depois só
                    posso aconselhar que façam, os resultados são já visíveis
                    e começaram a ser visíveis poucas semanas depois de
                    começar o tratamento! Não só tenho muito cabelo novo a
                    nascer como o aspecto geral melhorou imenso!! Agradeço
                    todo o profissionalismo da Fábia e tbm o facto de me ter
                    feito acreditar que era possível!!&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-text-soft)]">
                    <span
                      aria-hidden
                      className="block h-px w-7 bg-[color:var(--color-gold)]"
                    />
                    Cliente Hair Clinic · Caso 01
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          </article>

          {/* ── Caso 02 ── */}
          <article
            aria-label="Caso clínico 02 — Recuperação da densidade capilar à distância"
            className="mt-16 border-t border-[color:var(--color-beige-dark)] pt-14 md:mt-24"
          >
            <Reveal>
              <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                <span className="font-serif text-[14px] tracking-[0.25em] text-[color:var(--color-gold)]">
                  CASO 02
                </span>
                <h3 className="font-serif text-[clamp(24px,2.6vw,38px)] font-light text-[color:var(--color-ink)]">
                  Recuperação da Densidade Capilar
                </h3>
                <span className="text-[11px] uppercase tracking-[0.25em] text-[color:var(--color-text-soft)]">
                  Acompanhamento à distância · França
                </span>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 flex flex-col gap-9 lg:order-1">
                <Reveal delay={1}>
                  <CaseLabel>Situação Inicial</CaseLabel>
                  <p className="mt-4 text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                    Cliente residente em França procurou acompanhamento
                    especializado devido à perda progressiva de densidade
                    capilar, afinamento dos fios e aumento da visibilidade do
                    couro cabeludo, sobretudo na zona superior da cabeça.
                  </p>
                  <p className="mt-4 text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                    As imagens iniciais evidenciavam uma rarefação
                    significativa, com redução do volume e enfraquecimento
                    geral da fibra capilar.
                  </p>
                </Reveal>
                <Reveal delay={1}>
                  <CaseLabel>Avaliação Tricológica</CaseLabel>
                  <p className="mt-4 text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                    Após diagnóstico capilar detalhado, foi desenvolvido um
                    plano terapêutico personalizado, adaptado às necessidades
                    específicas da cliente, com acompanhamento contínuo e
                    monitorização da evolução.
                  </p>
                </Reveal>
                <Reveal delay={2}>
                  <CaseLabel>Protocolo Implementado</CaseLabel>
                  <ul className="mt-4 flex flex-col">
                    {caso2Protocolo.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 border-b border-[color:var(--color-beige-deep)] py-3 text-[13.5px] leading-[1.8] text-[color:var(--color-text-soft)] last:border-b-0"
                      >
                        <span aria-hidden className="mt-px text-[color:var(--color-gold)]">
                          ✦
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={2}>
                  <CaseLabel>Evolução</CaseLabel>
                  <p className="mt-4 text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                    Ao longo do acompanhamento observou-se uma melhoria
                    progressiva da densidade capilar, aumento da cobertura do
                    couro cabeludo e fortalecimento visível da fibra.
                  </p>
                  <p className="mt-4 text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                    As fotografias demonstram uma redução significativa da
                    transparência na zona superior da cabeça, bem como um
                    aumento do volume visual e da qualidade geral do cabelo.
                  </p>
                </Reveal>
                <Reveal delay={3}>
                  <CaseLabel>Resultados Observados</CaseLabel>
                  <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {caso2Resultados.map((item) => (
                      <CheckItem key={item}>{item}</CheckItem>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <Reveal className="order-1 self-start lg:order-2 lg:sticky lg:top-28">
                <div className="grid grid-cols-2 gap-2">
                  {caso2Photos.map((photo) => (
                    <div
                      key={photo.src}
                      className="relative aspect-[9/16] overflow-hidden bg-[color:var(--color-beige)]"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                      <span className="absolute left-3 top-3 bg-[color:var(--color-cream)]/90 px-3 py-1.5 text-[9px] uppercase tracking-[0.28em] text-[color:var(--color-text)]">
                        Evolução
                      </span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[10px] uppercase tracking-[0.25em] text-[color:var(--color-text-soft)]">
                  Acompanhamento fotográfico documentado
                </p>
              </Reveal>
            </div>

            <Reveal delay={1}>
              <div className="mt-12 border-l-2 border-[color:var(--color-gold)] bg-[color:var(--color-beige)] p-7 sm:p-8">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-gold)]">
                  Nota Importante
                </p>
                <p className="mt-3 text-[13.5px] leading-[1.9] text-[color:var(--color-text-soft)]">
                  Cada caso é único e os resultados podem variar de pessoa
                  para pessoa. Todos os protocolos da Hair Clinic são
                  personalizados de acordo com a avaliação tricológica e as
                  necessidades individuais de cada cliente.
                </p>
              </div>
            </Reveal>

            <Reveal delay={2}>
              <figure className="mt-8 bg-[color:var(--color-beige)] p-8 sm:p-12 md:grid md:grid-cols-[auto_1fr] md:gap-10">
                <div
                  aria-hidden
                  className="hidden select-none font-serif text-[100px] leading-[0.55] text-[color:var(--color-gold)]/35 md:block"
                >
                  &ldquo;
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-gold)]">
                    Feedback da Paciente
                  </p>
                  <blockquote className="mt-5 font-serif text-[17px] font-light italic leading-[1.75] text-[color:var(--color-ink)] sm:text-[19px]">
                    &ldquo;Estou muito contente com os produtos, o meu cabelo
                    finalmente começou a ganhar vida graças a ti.
                    Obrigada.&rdquo;
                  </blockquote>
                  <p className="mt-5 text-[12px] uppercase tracking-[0.2em] text-[color:var(--color-text-soft)]">
                    Mais tarde, durante o acompanhamento:
                  </p>
                  <blockquote className="mt-3 font-serif text-[17px] font-light italic leading-[1.75] text-[color:var(--color-ink)] sm:text-[19px]">
                    &ldquo;Já se nota uma grande diferença. Obrigada.&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4 text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-text-soft)]">
                    <span
                      aria-hidden
                      className="block h-px w-7 bg-[color:var(--color-gold)]"
                    />
                    Cliente Hair Clinic · Caso 02
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          </article>
        </section>

        {/* ─────────────────────────────  DIFERENCIAIS  ────────────────────── */}
        <section
          id="diferenciais"
          aria-labelledby="diferenciais-heading"
          className="bg-[color:var(--color-ink)] py-20 sm:py-24 md:py-36"
        >
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-14">
            <Reveal as="p" className="eyebrow">
              Porquê a Hair Clinic
            </Reveal>
            <Reveal delay={1}>
              <h2
                id="diferenciais-heading"
                className="mt-6 max-w-3xl font-serif text-[clamp(30px,3.6vw,60px)] font-light leading-[1.15] text-[color:var(--color-cream)]"
              >
                Ciência, cuidado
                <br />
                <em className="italic text-[color:var(--color-gold-light)]">
                  e experiência.
                </em>{" "}
                Em simultâneo.
              </h2>
            </Reveal>

            <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
              {diferenciais.map((d, i) => (
                <Reveal key={d.n} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <article className="border-b border-white/10 pb-10 pt-2 transition-colors hover:border-[color:var(--color-gold)]">
                    <p className="font-serif text-[14px] tracking-[0.25em] text-[color:var(--color-gold)]">
                      {d.n} —
                    </p>
                    <h3 className="mt-5 font-serif text-[26px] font-normal leading-[1.25] text-[color:var(--color-cream)]">
                      {d.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-[1.95] text-white/45">
                      {d.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────────────────────  GALERIA  ──────────────────────── */}
        <section
          id="galeria"
          aria-labelledby="galeria-heading"
          className="bg-[color:var(--color-cream)] py-20 sm:py-24 md:py-36"
        >
          <div className="mx-auto max-w-[1480px] px-6 md:px-14">
            <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-2 md:gap-20">
              <div>
                <Reveal as="p" className="eyebrow">
                  O Espaço
                </Reveal>
                <Reveal delay={1}>
                  <h2
                    id="galeria-heading"
                    className="mt-6 font-serif text-[clamp(30px,3.4vw,56px)] font-light leading-[1.15] text-[color:var(--color-ink)]"
                  >
                    Onde os sentidos
                    <br />
                    <em className="italic text-[color:var(--color-green-deep)]">
                      se acalmam.
                    </em>
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={2}>
                <p className="text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
                  Pedra portuguesa, latão, linho, cerâmica. Cada detalhe foi
                  pensado para acolher — porque o cuidado começa muito antes do
                  primeiro toque.
                </p>
              </Reveal>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
              {galleryImages.map((img, i) => (
                <Reveal
                  key={img.src}
                  delay={(i % 4) as 0 | 1 | 2 | 3}
                  className={`relative overflow-hidden ${
                    i === 0
                      ? "col-span-2 row-span-2 aspect-square md:aspect-auto"
                      : "aspect-[3/4]"
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[1500ms] hover:scale-105"
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────  TESTEMUNHOS  ─────────────────────── */}
        <section
          id="testemunhos"
          aria-labelledby="testemunhos-heading"
          className="overflow-hidden bg-[color:var(--color-beige)] py-20 sm:py-24 md:py-36"
        >
          <div className="mx-auto max-w-[1400px] px-6 md:px-14">
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
              <div>
                <Reveal as="p" className="eyebrow">
                  Testemunhos
                </Reveal>
                <Reveal delay={1}>
                  <h2
                    id="testemunhos-heading"
                    className="mt-6 font-serif text-[clamp(30px,3.4vw,56px)] font-light leading-[1.15] text-[color:var(--color-ink)]"
                  >
                    O que dizem
                    <br />
                    <em className="italic text-[color:var(--color-green-deep)]">
                      as nossas clientes.
                    </em>
                  </h2>
                </Reveal>
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-[3px] md:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={t.name} delay={(i % 3) as 0 | 1 | 2}>
                  <article className="h-full bg-[color:var(--color-cream)] p-10">
                    <div
                      role="img"
                      aria-label="Avaliação: 5 de 5 estrelas"
                      className="text-[14px] tracking-[3px] text-[color:var(--color-gold)]"
                    >
                      ★★★★★
                    </div>
                    <p className="mt-6 font-serif text-[19px] font-light italic leading-[1.6] text-[color:var(--color-ink)]">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="mt-8 flex items-center gap-4 border-t border-[color:var(--color-beige-deep)] pt-6">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--color-beige-deep)] font-serif text-[18px] text-[color:var(--color-green-deep)]">
                        {t.initial}
                      </div>
                      <div>
                        <p className="text-[13px] text-[color:var(--color-ink)]">
                          {t.name}
                        </p>
                        <p className="text-[11px] text-[color:var(--color-text-soft)]">
                          {t.sub}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand
          variant="ink"
          line={
            <>
              O primeiro passo é uma conversa.
              <br className="hidden md:block" /> O resto, construímos juntos.
            </>
          }
          primary="Agendar Avaliação"
          secondary="Contactar via WhatsApp"
        />

        {/* ────────────────────  PORQUE ESCOLHER A HAIR CLINIC  ────────────── */}
        <section
          id="porque"
          aria-labelledby="porque-heading"
          className="mx-auto max-w-[1100px] px-5 py-20 text-center sm:px-6 sm:py-24 md:px-14 md:py-32"
        >
          <Reveal as="p" className="eyebrow justify-center">
            Porque Escolher a Hair Clinic
          </Reveal>
          <Reveal delay={1}>
            <h2
              id="porque-heading"
              className="mt-6 font-serif text-[clamp(30px,3.4vw,56px)] font-light leading-[1.15] text-[color:var(--color-ink)]"
            >
              Um cuidado completo,
              <br />
              <em className="italic text-[color:var(--color-green-deep)]">
                da origem ao resultado.
              </em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <ul className="mt-14 flex flex-wrap justify-center gap-3">
              {porqueEscolher.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border border-[color:var(--color-beige-dark)] px-6 py-4 text-[13px] text-[color:var(--color-text)] transition-colors hover:border-[color:var(--color-gold)]"
                >
                  <span aria-hidden className="text-[color:var(--color-gold)]">
                    ✔
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        {/* ─────────────────────────────────  FAQ  ─────────────────────────── */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="bg-[color:var(--color-beige)] py-20 sm:py-24 md:py-32"
        >
          <div className="mx-auto max-w-[860px] px-5 sm:px-6">
            <div className="text-center">
              <Reveal as="p" className="eyebrow justify-center">
                FAQ
              </Reveal>
              <Reveal delay={1}>
                <h2
                  id="faq-heading"
                  className="mt-6 font-serif text-[clamp(30px,3.4vw,56px)] font-light leading-[1.15] text-[color:var(--color-ink)]"
                >
                  Perguntas
                  <br />
                  <em className="italic text-[color:var(--color-green-deep)]">
                    frequentes.
                  </em>
                </h2>
              </Reveal>
            </div>

            <Reveal delay={2}>
              <div className="mt-12 border-t border-[color:var(--color-beige-dark)]">
                {faqItems.map((f) => (
                  <details
                    key={f.q}
                    className="faq-item border-b border-[color:var(--color-beige-dark)]"
                  >
                    <summary className="flex items-center justify-between gap-6 py-6 text-left">
                      <span className="font-serif text-[18px] font-normal text-[color:var(--color-ink)] sm:text-[20px]">
                        {f.q}
                      </span>
                      <span
                        aria-hidden
                        className="faq-icon flex h-8 w-8 flex-shrink-0 items-center justify-center border border-[color:var(--color-beige-dark)] text-[15px] font-light text-[color:var(--color-gold)]"
                      >
                        +
                      </span>
                    </summary>
                    <p className="pb-7 pr-12 text-[13.5px] leading-[1.9] text-[color:var(--color-text-soft)]">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </Reveal>

            <Reveal delay={3}>
              <p className="mt-10 text-center text-[13px] leading-[1.9] text-[color:var(--color-text-soft)]">
                Tem outra questão?{" "}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--color-ink)] underline decoration-[color:var(--color-gold)] underline-offset-4 transition-colors hover:text-[color:var(--color-green-deep)]"
                >
                  Fale connosco via WhatsApp
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>

        {/* ─────────────────────────────  CONTACTO  ────────────────────────── */}
        <section
          id="contacto"
          aria-labelledby="contacto-heading"
          className="mx-auto max-w-[1100px] px-5 py-20 text-center sm:px-6 sm:py-24 md:px-14 md:py-36"
        >
          <Reveal as="p" className="eyebrow justify-center">
            Contacto
          </Reveal>
          <Reveal delay={1}>
            <h2
              id="contacto-heading"
              className="mt-6 font-serif text-[clamp(30px,3.6vw,60px)] font-light leading-[1.15] text-[color:var(--color-ink)]"
            >
              Pronta para começar
              <br />
              <em className="italic text-[color:var(--color-green-deep)]">
                na raiz?
              </em>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <p className="mx-auto mt-8 max-w-xl text-[14px] leading-[2] text-[color:var(--color-text-soft)]">
              Marque a sua consulta de diagnóstico via WhatsApp e dê o primeiro
              passo para um cabelo mais saudável — com ciência, cuidado e uma
              experiência que não vai esquecer.
            </p>
          </Reveal>

          <Reveal delay={3}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Marcar consulta via WhatsApp"
              className="group relative mt-12 inline-flex items-center gap-4 overflow-hidden bg-[color:var(--color-green-deep)] px-10 py-5 text-[11px] uppercase tracking-[0.32em] text-[color:var(--color-cream)] transition-colors hover:bg-[color:var(--color-ink)] focus-visible:bg-[color:var(--color-ink)]"
            >
              <span>Marcar Consulta via WhatsApp</span>
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>

          <Reveal delay={4} className="mt-16 grid grid-cols-1 gap-3 text-left sm:grid-cols-3 sm:gap-4">
            <ContactItem
              href={WHATSAPP_URL}
              external
              icon="✆"
              label="Telefone / WhatsApp"
              value={PHONE_DISPLAY}
            />
            <ContactItem
              href={PRICELIST_URL}
              external
              icon="✦"
              label="Preçário Completo"
              value="Ver tabela de tratamentos"
            />
            <ContactItem
              href="#galeria"
              icon="◎"
              label="Localização"
              value={LOCATION_DISPLAY}
            />
          </Reveal>
        </section>

      </main>

      {/* ──────────────────────────────  FOOTER  ─────────────────────────── */}
      <footer
        aria-label="Rodapé"
        className="bg-[color:var(--color-ink)] px-5 py-16 sm:px-6 sm:py-20 md:px-14 md:py-24"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-10 border-b border-white/[0.07] pb-12 sm:gap-12 sm:pb-14 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
            <div>
              <Image
                src="/logo.png"
                alt="Hair Clinic by Fábia Oliveira — Tricologia no Porto"
                width={600}
                height={430}
                className="h-16 w-auto sm:h-20"
              />
              <p className="mt-6 max-w-[280px] text-[13px] leading-[1.9] text-white/40">
                Tratamentos capilares com base em tricologia e diagnóstico
                especializado. Onde a ciência encontra o cuidado.
              </p>
            </div>
            <FooterCol
              title="Serviços"
              items={[
                { label: "Diagnóstico Capilar", href: "#tratamentos" },
                { label: "Ritual Introdutório", href: "#tratamentos" },
                { label: "Ritual Intensivo", href: "#tratamentos" },
                { label: "Ritual Premium", href: "#tratamentos" },
                { label: "Preçário", href: PRICELIST_URL, external: true },
              ]}
            />
            <FooterCol
              title="Clínica"
              items={[
                { label: "Sobre Nós", href: "#sobre" },
                { label: "A Fundadora", href: "#fundadora" },
                { label: "O Método", href: "#metodo" },
                { label: "Resultados Reais", href: "#resultados" },
                { label: "Testemunhos", href: "#testemunhos" },
                { label: "Perguntas Frequentes", href: "#faq" },
                { label: "Marcar Consulta", href: WHATSAPP_URL, external: true },
              ]}
            />
            <div>
              <h2 className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-gold)]">
                Contacto
              </h2>
              <address className="text-[13px] not-italic leading-[1.95] text-white/45">
                {LOCATION_DISPLAY}
                <br />
                <br />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {PHONE_DISPLAY}
                </a>
                <br />
                <br />
                Seg–Sex: 9h–19h
                <br />
                Sáb: 9h–14h
              </address>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
            <p className="text-[11px] text-white/25">
              © {new Date().getFullYear()} Hair Clinic by Fábia Oliveira ·
              Todos os direitos reservados
            </p>
            <nav aria-label="Redes sociais" className="flex gap-4">
              {[
                { label: "IG", title: "Instagram", href: "https://instagram.com/hairclinicporto" },
                { label: "f", title: "Facebook", href: "https://facebook.com/hairclinicporto" },
                { label: "W", title: "WhatsApp", href: "https://wa.me/351910000000" },
              ].map((s) => (
                <a
                  key={s.title}
                  href={s.href}
                  aria-label={s.title}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center border border-white/10 text-[12px] text-white/40 transition-colors hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold)] focus-visible:border-[color:var(--color-gold)] focus-visible:text-[color:var(--color-gold)] focus-visible:outline-none"
                >
                  <span aria-hidden="true">{s.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

function CtaBand({
  variant,
  line,
  primary,
  secondary,
}: {
  variant: "green" | "ink";
  line: React.ReactNode;
  primary: string;
  secondary: string;
}) {
  return (
    <section
      aria-label="Marcações rápidas"
      className={`${
        variant === "green"
          ? "bg-[color:var(--color-green-deep)]"
          : "bg-[color:var(--color-ink)]"
      } py-14 sm:py-16`}
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-8 px-5 text-center sm:px-6 md:flex-row md:px-14 md:text-left">
        <Reveal>
          <p className="max-w-xl font-serif text-[clamp(22px,2.4vw,32px)] font-light italic leading-[1.45] text-[color:var(--color-cream)]">
            {line}
          </p>
        </Reveal>
        <Reveal
          delay={1}
          className="flex flex-shrink-0 flex-col items-center gap-4 sm:flex-row sm:gap-5"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${primary} via WhatsApp`}
            className="bg-[color:var(--color-cream)] px-8 py-4 text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-gold)] hover:text-[color:var(--color-cream)] focus-visible:bg-[color:var(--color-gold)] focus-visible:text-[color:var(--color-cream)]"
          >
            {primary}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${secondary} via WhatsApp`}
            className="border border-[color:var(--color-cream)]/40 px-8 py-4 text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-cream)] transition-colors hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold)] focus-visible:border-[color:var(--color-gold)] focus-visible:text-[color:var(--color-gold)]"
          >
            {secondary}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function AuthorityCol({
  title,
  items,
  delay,
}: {
  title: string;
  items: string[];
  delay?: 0 | 1 | 2 | 3;
}) {
  return (
    <Reveal delay={delay ?? 0} className="h-full">
      <div className="flex h-full flex-col bg-[color:var(--color-beige)] p-8 sm:p-9">
        <h3 className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-gold)]">
          {title}
        </h3>
        <ul className="mt-6 flex flex-col">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 border-b border-[color:var(--color-beige-deep)] py-3 text-[13px] leading-[1.7] text-[color:var(--color-text-soft)] last:border-b-0"
            >
              <span aria-hidden className="mt-px text-[color:var(--color-gold)]">
                ✦
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

function CaseLabel({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-gold)]">
      <span aria-hidden className="block h-px w-7 bg-[color:var(--color-gold)]" />
      {children}
    </h4>
  );
}

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-[13.5px] leading-[1.8] text-[color:var(--color-text)]">
      <span aria-hidden className="text-[color:var(--color-gold)]">
        ✔
      </span>
      {children}
    </li>
  );
}

function ContactItem({
  href,
  icon,
  label,
  value,
  external,
}: {
  href: string;
  icon: string;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={`${label}: ${value}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-5 border border-[color:var(--color-beige-dark)] p-5 transition-all hover:border-[color:var(--color-green-deep)] hover:bg-[color:var(--color-beige)] focus-visible:border-[color:var(--color-green-deep)] focus-visible:bg-[color:var(--color-beige)]"
    >
      <div
        aria-hidden="true"
        className="flex h-11 w-11 flex-shrink-0 items-center justify-center bg-[color:var(--color-beige)] text-[18px] text-[color:var(--color-green-deep)] transition-colors group-hover:bg-[color:var(--color-green-deep)] group-hover:text-[color:var(--color-cream)]"
      >
        {icon}
      </div>
      <div>
        <p className="text-[9px] uppercase tracking-[0.3em] text-[color:var(--color-text-soft)]">
          {label}
        </p>
        <p className="mt-1 text-[14px] text-[color:var(--color-ink)]">{value}</p>
      </div>
    </a>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <nav aria-label={title}>
      <h2 className="mb-5 text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-gold)]">
        {title}
      </h2>
      <ul className="flex flex-col gap-3">
        {items.map((i) => (
          <li key={i.label}>
            <a
              href={i.href}
              {...(i.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="text-[13px] text-white/45 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
