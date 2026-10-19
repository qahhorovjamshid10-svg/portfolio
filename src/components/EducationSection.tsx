"use client";

import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { usePortfolio } from "./PortfolioProvider";
import { SectionHeader } from "./SectionHeader";

export function EducationSection() {
  const { locale, reducedMotion } = usePortfolio();

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-20 sm:py-28 bg-obsidian border-b border-hairline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={
            locale === "en" ? "05 // EDUCATION" : "05 // TA’LIM VA AKADEMIK YO‘L"
          }
          title={locale === "en" ? "Education" : "Ta’lim"}
          subtitle={
            locale === "en"
              ? "Academic software engineering studies and intensive frontend development training programs."
              : "Dasturiy injinering bo‘yicha oliy ta’lim va ixtisoslashgan frontend dasturlash kurslari."
          }
          rightMeta="ACADEMIC BACKGROUND"
        />

        <div
          id="education-heading"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {portfolioData.education.map((edu, idx) => (
            <motion.article
              key={edu.id}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: reducedMotion ? 0 : idx * 0.08,
              }}
              className="bg-card border border-hairline hover:border-gold/50 transition-colors p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-hairline">
                  <span className="font-mono text-xs text-gold">
                    {edu.index} // {edu.period[locale]}
                  </span>
                  <GraduationCap
                    className="w-4 h-4 text-muted"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-semibold text-ivory mb-1.5">
                  {edu.institution}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-gold mb-4">
                  {edu.program[locale]}
                </p>

                <p className="text-muted text-sm leading-relaxed mb-6">
                  {edu.description[locale]}
                </p>
              </div>

              <div className="pt-4 border-t border-hairline flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-muted">
                  {edu.status[locale]}
                </span>

                {edu.gpa && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-surface border border-gold/40 font-mono text-xs font-semibold text-gold">
                    <Award className="w-3.5 h-3.5" aria-hidden="true" />
                    GPA: {edu.gpa}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
