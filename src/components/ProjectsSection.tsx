"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { usePortfolio } from "./PortfolioProvider";
import { SectionHeader } from "./SectionHeader";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const { locale } = usePortfolio();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-20 sm:py-28 bg-surface border-b border-hairline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={
            locale === "en"
              ? "02 // SELECTED PROJECTS"
              : "02 // ASOSIY LOYIHALAR"
          }
          title={locale === "en" ? "Selected Projects" : "Asosiy Loyihalar"}
          subtitle={
            locale === "en"
              ? "Featured production engineering work combining interactive frontend architecture with real-time web systems."
              : "Zamonaviy frontend arxitekturasi va interaktiv real-vaqt web tizimlarini birlashtirgan asosiy loyiha."
          }
          rightMeta="VERIFIED LIVE & OPEN SOURCE"
          accent="cellix"
        />

        <div id="projects-heading" className="space-y-12">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
