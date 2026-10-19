"use client";

import React from "react";
import { motion } from "motion/react";
import { Briefcase, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { usePortfolio } from "./PortfolioProvider";
import { SectionHeader } from "./SectionHeader";

export function ExperienceSection() {
  const { locale, reducedMotion } = usePortfolio();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-20 sm:py-28 bg-surface border-b border-hairline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={
            locale === "en"
              ? "04 // EXPERIENCE & RESPONSIBILITIES"
              : "04 // TAJRIBA & MAS’ULIYATLAR"
          }
          title={locale === "en" ? "Experience" : "Tajriba va Mas’uliyatlar"}
          subtitle={
            locale === "en"
              ? "8 months of practical frontend development experience building modern web applications and interactive user interfaces."
              : "Zamonaviy web-ilovalar va interaktiv foydalanuvchi interfeyslarini yaratish bo‘yicha 8 oylik amaliy tajriba."
          }
          rightMeta="8 MONTHS PRACTICAL EXPERIENCE"
        />

        <div id="experience-heading" className="space-y-8">
          {portfolioData.experience.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: reducedMotion ? 0 : idx * 0.08,
              }}
              className={`p-6 sm:p-8 lg:p-10 border transition-colors ${
                item.isPlaceholder
                  ? "bg-obsidian/70 border-dashed border-gold/40 hover:border-gold/70"
                  : "bg-card border-hairline hover:border-gold/50"
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-6 border-b border-hairline">
                <div className="inline-flex items-center gap-2.5">
                  {item.isPlaceholder ? (
                    <Sparkles
                      className="w-4 h-4 text-gold"
                      aria-hidden="true"
                    />
                  ) : (
                    <Briefcase
                      className="w-4 h-4 text-gold"
                      aria-hidden="true"
                    />
                  )}
                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-gold">
                    {item.period[locale]}
                  </span>
                </div>

                <span
                  className={`px-3 py-1 font-mono text-[11px] uppercase tracking-wider border ${
                    item.isPlaceholder
                      ? "bg-gold/10 text-gold border-gold/40"
                      : "bg-surface text-muted border-hairline"
                  }`}
                >
                  {item.type[locale]}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-4 space-y-2">
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-ivory">
                    {item.role[locale]}
                  </h3>
                  <p className="font-mono text-xs text-gold">
                    {item.organization[locale]}
                  </p>
                  <p className="font-mono text-xs text-muted">
                    {item.location[locale]}
                  </p>
                </div>

                <div className="lg:col-span-8 space-y-5">
                  <p className="text-ivory/90 text-sm sm:text-base leading-relaxed">
                    {item.summary[locale]}
                  </p>

                  <ul className="space-y-2.5 text-muted text-sm">
                    {item.highlights[locale].map((point, pointIdx) => (
                      <li key={pointIdx} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-surface border border-hairline font-mono text-[11px] text-ivory/85"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
