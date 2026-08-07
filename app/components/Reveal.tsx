"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: "div" | "section" | "article" | "header" | "p" | "span";
  className?: string;
};

const delayMs: Record<NonNullable<RevealProps["delay"]>, string> = {
  0: "0ms",
  1: "120ms",
  2: "240ms",
  3: "380ms",
  4: "540ms",
};

export default function Reveal({
  children,
  delay = 0,
  as = "div",
  className = "",
}: RevealProps) {
  // `as` is always a block-level tag; narrow it so JSX resolves a single ref type.
  const Tag = as as "div";
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: delayMs[delay] }}
    >
      {children}
    </Tag>
  );
}
