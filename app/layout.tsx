import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  display: "swap",
});

const SITE_URL = "https://hairclinic.pt";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Hair Clinic by Fábia Oliveira | Tricologia & Tratamentos Capilares em Gaia",
    template: "%s | Hair Clinic by Fábia Oliveira",
  },
  description:
    "Clínica capilar especializada em tricologia, diagnóstico avançado por microcâmara e rituais sensoriais. Tratamentos para queda de cabelo, oleosidade e couro cabeludo em Vila Nova de Gaia. Marque a sua consulta via WhatsApp.",
  applicationName: "Hair Clinic by Fábia Oliveira",
  authors: [{ name: "Fábia Oliveira" }],
  generator: "Next.js",
  keywords: [
    "tricologia Gaia",
    "tricologia Porto",
    "clínica capilar Gaia",
    "clínica capilar Vila Nova de Gaia",
    "tratamento queda cabelo Gaia",
    "tratamento couro cabeludo",
    "diagnóstico capilar",
    "microcâmara capilar",
    "tratamento oleosidade cabelo",
    "dermatite seborreica",
    "ritual capilar Gaia",
    "Fábia Oliveira",
    "Hair Clinic Gaia",
    "Hair Clinic Vila Nova de Gaia",
    "saúde capilar",
    "LED tricologia",
    "anamnese capilar",
    "spa capilar Gaia",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Hair Clinic by Fábia Oliveira",
  publisher: "Hair Clinic by Fábia Oliveira",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "pt-PT": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: SITE_URL,
    siteName: "Hair Clinic by Fábia Oliveira",
    title:
      "Hair Clinic by Fábia Oliveira | Tricologia & Tratamentos Capilares",
    description:
      "Clínica capilar especializada em tricologia e diagnóstico avançado. Onde o cuidado começa na raiz. Gaia, Portugal.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hair Clinic by Fábia Oliveira — tricologia e ritual sensorial",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hair Clinic by Fábia Oliveira | Tricologia & Ritual Capilar",
    description:
      "Clínica capilar especializada em tricologia e diagnóstico avançado por microcâmara. Vila Nova de Gaia.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "health",
  classification: "Beauty & Personal Care, Health & Medical",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdfaf5" },
    { media: "(prefers-color-scheme: dark)", color: "#2a2520" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[color:var(--color-cream)] text-stone-800"
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-[color:var(--color-ink)] focus:px-4 focus:py-2 focus:text-[color:var(--color-cream)] focus:text-sm focus:tracking-wider"
        >
          Saltar para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
