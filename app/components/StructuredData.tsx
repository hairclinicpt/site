import { faqItems } from "../lib/faq";

const SITE_URL = "https://hairclinic.pt";
const WHATSAPP_URL = "https://wa.link/86w4c5";
const PRICELIST_URL = "https://hairclinic-pt.my.canva.site/";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Hair Clinic by Fábia Oliveira",
  alternateName: "Hair Clinic Gaia",
  description:
    "Clínica capilar especializada em tricologia, diagnóstico avançado por microcâmara e rituais sensoriais para o couro cabeludo em Vila Nova de Gaia.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: [`${SITE_URL}/og-image.png`],
  telephone: "+351-910-520-813",
  priceRange: "€€€",
  hasMenu: PRICELIST_URL,
  potentialAction: {
    "@type": "ReserveAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: WHATSAPP_URL,
      actionPlatform: [
        "https://schema.org/DesktopWebPlatform",
        "https://schema.org/MobileWebPlatform",
      ],
    },
    result: { "@type": "Reservation", name: "Marcação Hair Clinic" },
  },
  founder: {
    "@type": "Person",
    name: "Fábia Oliveira",
    jobTitle: "Tricologista",
    description:
      "Cabeleireira profissional há 6 anos, com formação especializada em tricologia há 3 anos e experiência na área da estética desde os 18 anos. Especialização em diagnóstico capilar avançado e tricoscopia digital.",
    knowsAbout: [
      "Tricologia",
      "Tricoscopia Digital",
      "Queda capilar",
      "Dermatite seborreica",
      "Saúde do couro cabeludo",
      "Recuperação da fibra capilar",
    ],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vila Nova de Gaia",
    addressRegion: "Porto",
    addressCountry: "PT",
  },
  areaServed: [
    { "@type": "City", name: "Vila Nova de Gaia" },
    { "@type": "City", name: "Porto" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/hairclinicporto",
    "https://www.facebook.com/hairclinicporto",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tratamentos",
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "Cabelo & Couro Cabeludo",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Diagnóstico Capilar & Anamnese",
              description:
                "Avaliação profissional com microcâmara que identifica a origem de cada problema capilar.",
              serviceType: "Diagnóstico Tricológico",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ritual de Introdução Tricológica",
              description:
                "Primeiro contacto com a tricologia. Momento de relaxamento que prepara o couro cabeludo.",
              serviceType: "Tratamento Capilar",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ritual Terapêutico Intensivo",
              description:
                "Protocolo direcionado para queda, oleosidade ou dermatite, com ativos específicos e tecnologia LED.",
              serviceType: "Tratamento Capilar Intensivo",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ritual Clínico Premium",
              description:
                "Tratamento capilar profundo com escalda-pés, argila, vapor e massagem.",
              serviceType: "Tratamento Capilar Premium",
            },
          },
        ],
      },
      {
        "@type": "OfferCatalog",
        name: "Experiências Corpo",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Massagem Relaxante" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Massagem com Pindas" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Esfoliação & Argila" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Banho Terapêutico" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Escalda-Pés" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Programa Completo" } },
        ],
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Cliente Hair Clinic" },
      reviewBody:
        "Está fantástico mesmo. A cara da riqueza, chiquérrimo, muito confortável e super acolhedor. Relaxei completamente, mesmo estando com imensa gente à volta.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Cliente Hair Clinic" },
      reviewBody:
        "É algo que não temos aqui em Gaia e é bastante necessário. Trouxeste um conceito totalmente diferente. Não é um simples tratamento de rampa no salão, é uma avaliação profissional e completa. O espaço está lindo!",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Cliente Hair Clinic" },
      reviewBody: "Adorei! O espaço é muito muito lindo, mesmo relaxante.",
    },
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Hair Clinic by Fábia Oliveira",
  description:
    "Clínica capilar especializada em tricologia e diagnóstico avançado no Porto.",
  inLanguage: "pt-PT",
  publisher: { "@id": `${SITE_URL}/#business` },
};

// Mirrors the on-page #faq section (single source of truth in app/lib/faq.ts)
const faq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
    </>
  );
}
