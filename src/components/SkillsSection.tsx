"use client";

import React from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import { usePortfolio } from "./PortfolioProvider";
import { SectionHeader } from "./SectionHeader";

export function SkillsSection() {
  const { locale, reducedMotion } = usePortfolio();

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-20 sm:py-28 bg-obsidian border-b border-hairline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={
            locale === "en"
              ? "03 // SKILLS & TECHNOLOGIES"
              : "03 // TEXNIK KO‘NIKMALAR"
          }
          title={
            locale === "en" ? "Skills and Technologies" : "Texnik Ko‘nikmalar"
          }
          subtitle={
            locale === "en"
              ? "Frontend architecture, interactive web systems, AI-assisted development, and modern developer tooling."
              : "Frontend arxitekturasi, Interaktiv Web, AI Development va zamonaviy dasturlash asboblari."
          }
          rightMeta="TECHNICAL STACK"
        />

        <div
          id="skills-heading"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {portfolioData.skills.map((group, groupIdx) => (
            <motion.div
              key={group.id}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: reducedMotion ? 0 : groupIdx * 0.07,
              }}
              className="bg-surface border border-hairline p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                {/* Group Header */}
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-hairline">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-gold">
                    DOMAIN // {group.index}
                  </span>
                  <span className="font-mono text-[11px] text-muted">
                    {group.skills.length}{" "}
                    {locale === "en" ? "TECHNOLOGIES" : "TEXNOLOGIYA"}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ivory mb-2">
                  {group.title[locale]}
                </h3>
                <p className="text-muted text-xs sm:text-sm mb-6 leading-relaxed">
                  {group.subtitle[locale]}
                </p>

                {/* Skills List */}
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 bg-card border border-hairline hover:border-gold/45 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            skill.isCore ? "bg-gold" : "bg-muted"
                          }`}
                        />
                        <span className="font-mono text-xs sm:text-sm font-medium text-ivory">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-muted text-xs sm:text-right max-w-xs leading-snug">
                        {skill.context[locale]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
