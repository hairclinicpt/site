"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { PRICELIST_URL, WHATSAPP_URL } from "../lib/contact";

const links = [
  { href: "#sobre", label: "A Clínica" },
  { href: "#metodo", label: "O Método" },
  { href: "#tratamentos", label: "Tratamentos" },
  { href: "#resultados", label: "Resultados" },
  { href: "#galeria", label: "Espaço" },
  { href: "#testemunhos", label: "Testemunhos" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      role="banner"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--color-cream)]/95 backdrop-blur-md border-b border-[color:var(--color-beige-dark)] py-3 sm:py-4"
          : "bg-transparent py-4 sm:py-6 md:py-8"
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-[1480px] items-center justify-between px-5 sm:px-6 md:px-14"
      >
        <a
          href="#top"
          aria-label="Hair Clinic by Fábia Oliveira — início"
          className="block flex-shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Hair Clinic by Fábia Oliveira"
            width={600}
            height={430}
            priority
            className={`w-auto transition-all duration-500 ${
              scrolled ? "h-12 sm:h-14 md:h-16" : "h-14 sm:h-20 md:h-24"
            }`}
          />
        </a>

        <ul className="hidden items-center gap-7 xl:flex 2xl:gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-[11px] font-light uppercase tracking-[0.24em] text-[color:var(--color-text)] transition-colors hover:text-[color:var(--color-gold)] focus-visible:text-[color:var(--color-gold)]"
              >
                {l.label}
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-px w-0 bg-[color:var(--color-gold)] transition-all duration-300 group-hover:w-full"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-5 xl:flex">
          <a
            href={PRICELIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-light uppercase tracking-[0.22em] text-[color:var(--color-text)] transition-colors hover:text-[color:var(--color-gold)] focus-visible:text-[color:var(--color-gold)]"
          >
            Preçário
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Marcar consulta via WhatsApp"
            className="bg-[color:var(--color-ink)] px-6 py-3 text-[10px] font-normal uppercase tracking-[0.3em] text-[color:var(--color-cream)] transition-colors hover:bg-[color:var(--color-green-deep)] focus-visible:bg-[color:var(--color-green-deep)]"
          >
            Marcar Consulta
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 xl:hidden"
        >
          <span
            aria-hidden="true"
            className={`block h-px w-6 bg-[color:var(--color-ink)] transition-all duration-300 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            aria-hidden="true"
            className={`block h-px w-6 bg-[color:var(--color-ink)] transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            aria-hidden="true"
            className={`block h-px w-6 bg-[color:var(--color-ink)] transition-all duration-300 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        hidden={!open}
        className={`xl:hidden overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <ul className="flex max-h-[80vh] flex-col gap-1 overflow-y-auto bg-[color:var(--color-cream)] px-5 pb-8 pt-2 sm:px-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-[color:var(--color-beige-dark)] py-5 text-[12px] uppercase tracking-[0.24em] text-[color:var(--color-text)]"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={PRICELIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block border-b border-[color:var(--color-beige-dark)] py-5 text-[12px] uppercase tracking-[0.24em] text-[color:var(--color-text)]"
            >
              Preçário
            </a>
          </li>
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-5 inline-block bg-[color:var(--color-ink)] px-8 py-4 text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-cream)]"
            >
              Marcar Consulta
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
