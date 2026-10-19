"use client";

import React from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import { usePortfolio } from "./PortfolioProvider";
import { SectionHeader } from "./SectionHeader";

export function AboutSection() {
  const { locale, reducedMotion } = usePortfolio();
  const { about } = portfolioData;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 sm:py-28 bg-obsidian border-b border-hairline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={about.eyebrow[locale]}
          title={about.sectionTitle[locale]}
          rightMeta={
            locale === "en"
              ? "FRONT-END ARCHITECTURE"
              : "FRONT-END ARXITEKTURASI"
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Narrative Column */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <p
              id="about-heading"
              className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-ivory leading-[1.35] tracking-editorial"
            >
              {about.lead[locale]}
            </p>

            <div className="space-y-4 text-muted text-sm sm:text-base leading-relaxed">
              {about.paragraphs[locale].map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Verified CV Facts Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {about.facts.map((fact) => (
                <div
                  key={fact.label.en}
                  className="p-4 bg-surface border border-hairline flex flex-col justify-between"
                >
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-gold">
                    {fact.label[locale]}
                  </span>
                  <span className="mt-1.5 font-display text-sm sm:text-base font-medium text-ivory">
                    {fact.value[locale]}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Architectural Pillars Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {about.pillars.map((pillar, index) => (
              <motion.div
                key={pillar.index}
                initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: reducedMotion ? 0 : index * 0.08,
                }}
                className="p-6 bg-card border border-hairline hover:border-gold/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif italic text-lg text-gold">
                    {pillar.index}.
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    CORE FOCUS
                  </span>
                </div>
                <h3 className="font-display text-lg font-semibold text-ivory mb-2">
                  {pillar.title[locale]}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {pillar.description[locale]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
