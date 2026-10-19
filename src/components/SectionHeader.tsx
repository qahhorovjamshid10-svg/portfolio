"use client";

import React from "react";
import { motion } from "motion/react";
import { usePortfolio } from "./PortfolioProvider";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  rightMeta?: string;
  accent?: "gold" | "cellix";
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  rightMeta,
  accent = "gold",
}: SectionHeaderProps) {
  const { reducedMotion } = usePortfolio();

  const accentColorClass =
    accent === "cellix" ? "text-cellix-red" : "text-gold";
  const accentDotClass =
    accent === "cellix" ? "bg-cellix-red" : "bg-gold";

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 sm:mb-16 pb-6 border-b border-hairline"
    >
      <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="inline-flex items-center gap-2.5">
          <span className={`w-1.5 h-1.5 rounded-full ${accentDotClass}`} />
          <span
            className={`font-mono text-xs uppercase tracking-[0.2em] ${accentColorClass}`}
          >
            {eyebrow}
          </span>
        </div>
        {rightMeta && (
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            {rightMeta}
          </span>
        )}
      </div>

      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tightest text-ivory leading-[1.08]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted text-sm sm:text-base max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
}
