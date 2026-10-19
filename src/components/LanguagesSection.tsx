"use client";

import React from "react";
import { motion } from "motion/react";
import { Languages } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { usePortfolio } from "./PortfolioProvider";
import { SectionHeader } from "./SectionHeader";

export function LanguagesSection() {
  const { locale, reducedMotion } = usePortfolio();

  return (
    <section
      id="languages"
      aria-labelledby="languages-heading"
      className="py-20 sm:py-28 bg-surface border-b border-hairline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={locale === "en" ? "06 // LANGUAGES" : "06 // TILLAR"}
          title={locale === "en" ? "Languages" : "Tillar"}
          subtitle={
            locale === "en"
              ? "Spoken and written communication proficiencies."
              : "Muloqot va kasbiy faoliyatda qo‘llaniladigan tillar."
          }
          rightMeta="UZBEK • ENGLISH B1 • RUSSIAN A2"
        />

        <div
          id="languages-heading"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {portfolioData.languages.map((lang, idx) => (
            <motion.div
              key={lang.id}
              initial={reducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: reducedMotion ? 0 : idx * 0.08,
              }}
              className="p-6 sm:p-8 bg-card border border-hairline hover:border-gold/50 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-hairline">
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-gold">
                    <Languages className="w-3.5 h-3.5" aria-hidden="true" />
                    {lang.levelCode}
                  </span>
                  <span className="font-mono text-xs text-muted">
                    {lang.nativeName}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-semibold text-ivory mb-1">
                  {lang.language[locale]}
                </h3>
                <p className="font-mono text-xs text-gold mb-4">
                  {lang.levelLabel[locale]}
                </p>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {lang.note[locale]}
                </p>
              </div>

              {/* Minimalist Gold Proficiency Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between font-mono text-[11px] text-muted">
                  <span>{locale === "en" ? "PROFICIENCY" : "DARAJA"}</span>
                  <span className="text-ivory">{lang.levelCode}</span>
                </div>
                <div
                  className="w-full h-1.5 bg-obsidian border border-hairline overflow-hidden"
                  role="progressbar"
                  aria-valuenow={lang.proficiencyPercent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${lang.language.en} proficiency: ${lang.levelLabel.en}`}
                >
                  <div
                    className="h-full bg-gold transition-all duration-700"
                    style={{ width: `${lang.proficiencyPercent}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
