"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Cpu,
  ShieldCheck,
  Database,
  Gamepad2,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { ProjectData } from "@/data/portfolio";
import { usePortfolio } from "./PortfolioProvider";
import { MagneticButton } from "./MagneticButton";

interface ProjectCardProps {
  project: ProjectData;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale, reducedMotion } = usePortfolio();
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const parallaxContainerRef = useRef<HTMLDivElement | null>(null);
  const parallaxInnerRef = useRef<HTMLDivElement | null>(null);

  const currentScreen =
    project.previewScreens[activeScreenIndex] ?? project.previewScreens[0];

  // Subtle GSAP ScrollTrigger parallax strictly on the dedicated image wrapper element
  useEffect(() => {
    if (reducedMotion) return;
    if (typeof window === "undefined" || window.innerWidth < 1024) return;
    if (!parallaxContainerRef.current || !parallaxInnerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        parallaxInnerRef.current,
        { yPercent: -3.5 },
        {
          yPercent: 3.5,
          ease: "none",
          scrollTrigger: {
            trigger: parallaxContainerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, parallaxContainerRef);

    return () => ctx.revert();
  }, [reducedMotion]);

  return (
    <article
      aria-labelledby={`project-title-${project.id}`}
      className="relative bg-card border border-hairline hover:border-cellix-red/45 transition-colors duration-300"
    >
      {/* Subtle Top Accent Keyline */}
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-gold via-cellix-red/60 to-transparent"
      />

      {/* Top Project Metadata Bar */}
      <div className="px-5 sm:px-8 py-4 border-b border-hairline flex flex-wrap items-center justify-between gap-4 bg-surface">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-gold font-semibold">
            PROJECT // {project.index}
          </span>
          <span className="text-hairline">•</span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-obsidian border border-cellix-red/40 font-mono text-[11px] uppercase tracking-wider text-cellix-red">
            <span className="w-1.5 h-1.5 rounded-full bg-cellix-red" />
            {project.status[locale]}
          </span>
          <span className="font-mono text-xs text-muted hidden sm:inline">
            {project.category[locale]}
          </span>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs text-muted">
          <span>{project.year}</span>
        </div>
      </div>

      {/* Main Content Split */}
      <div className="p-5 sm:p-8 lg:p-10 space-y-8">
        {/* Large Interactive Project Preview Showcase */}
        <div className="space-y-4">
          {/* Screen Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div
              role="tablist"
              aria-label={`${project.shortTitle} interface views`}
              className="flex flex-wrap gap-1.5"
            >
              {project.previewScreens.map((screen, idx) => {
                const isActive = idx === activeScreenIndex;
                return (
                  <button
                    key={screen.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.12em] border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                      isActive
                        ? "bg-obsidian text-ivory border-cellix-red/70"
                        : "bg-surface text-muted border-hairline hover:text-ivory"
                    }`}
                  >
                    {screen.label[locale]}
                  </button>
                );
              })}
            </div>

            <span className="font-mono text-[11px] text-muted hidden md:inline">
              ROUTE: <span className="text-ivory">{currentScreen.route}</span>
            </span>
          </div>

          {/* Large Preview Image Viewport with GSAP Parallax */}
          <div
            ref={parallaxContainerRef}
            className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian border border-hairline group"
          >
            <div
              ref={parallaxInnerRef}
              className="relative w-full h-[108%] -top-[4%]"
            >
              <Image
                src={currentScreen.imagePath}
                alt={`${project.title} — ${currentScreen.label.en}`}
                fill
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              />
            </div>

            {/* Subtle Corner Overlay Badge */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-3 sm:px-4 sm:py-3 bg-obsidian/90 backdrop-blur-md border border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <p className="font-mono text-xs text-ivory/90 leading-snug">
                {currentScreen.caption[locale]}
              </p>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-cellix-red hover:underline"
              >
                <span>cellix.vercel.app</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Project Title, Overview & Engineering Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-2">
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-2">
              <h3
                id={`project-title-${project.id}`}
                className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ivory tracking-tightest leading-[1.12]"
              >
                {project.title}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-gold uppercase tracking-[0.12em]">
                {project.subtitle[locale]}
              </p>
            </div>

            <p className="text-muted text-sm sm:text-base leading-relaxed">
              {project.summary[locale]}
            </p>

            {/* Complete Technology Stack Tags */}
            <div className="space-y-2.5 pt-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted block">
                {locale === "en"
                  ? "TECHNOLOGY STACK"
                  : "FOYDALANILGAN TEXNOLOGIYALAR"}
              </span>
              <div className="flex flex-wrap gap-2">
                {project.fullStack.map((tech) => {
                  const isRedHighlight =
                    tech.includes("Phaser") ||
                    tech.includes("WebSockets") ||
                    tech.includes("20 TPS");
                  return (
                    <span
                      key={tech}
                      className={`px-3 py-1.5 text-xs font-mono border ${
                        isRedHighlight
                          ? "bg-obsidian border-cellix-red/40 text-ivory"
                          : "bg-surface border-hairline text-ivory/90"
                      }`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Confirmed Architectural Pillars & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 bg-surface border border-hairline p-5 sm:p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-hairline pb-3">
                <span className="font-mono text-xs uppercase tracking-[0.16em] text-gold">
                  {locale === "en"
                    ? "SYSTEM CAPABILITIES"
                    : "TIZIM IMKONIYATLARI"}
                </span>
                <span className="font-mono text-[11px] text-cellix-red">
                  v1.2 LIVE
                </span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-muted">
                <li className="flex items-start gap-3">
                  <Gamepad2 className="w-4 h-4 text-cellix-red shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-ivory font-medium">
                      5 Game Modes &amp; Mutation Loadouts:
                    </strong>{" "}
                    {locale === "en"
                      ? "Classic, Survival (10 waves + Final Boss), Daily Challenge (deterministic seed), Practice, and Multiplayer."
                      : "Classic, Survival (10 to‘lqin + Final Boss), Daily Challenge, Practice va Multiplayer rejimlari."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-ivory font-medium">
                      Real-Time &amp; Authoritative Logic:
                    </strong>{" "}
                    {locale === "en"
                      ? "WebSockets (ws), authoritative 20 TPS game loop design, and Web Audio API procedural sound effects."
                      : "WebSockets (ws), authoritative 20 TPS o‘yin mantiqi va Web Audio API ovoz tizimi."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-ivory font-medium">
                      AI-Assisted Engineering &amp; Performance:
                    </strong>{" "}
                    {locale === "en"
                      ? "Developed using modern AI engineering tools alongside Next.js App Router, React, TypeScript, Tailwind CSS, and REST APIs."
                      : "Zamonaviy AI dasturlash vositalari, Next.js App Router, React, TypeScript, Tailwind CSS va REST API asosida yaratilgan."}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-cellix-red shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-ivory font-medium">
                      Anti-Cheat &amp; Auth Security:
                    </strong>{" "}
                    {locale === "en"
                      ? "Single-use 30-min run tokens, PBKDF2 (100K SHA-512) password hashing, and rate limiting."
                      : "30 daqiqalik bir martalik run-token, PBKDF2 (100K SHA-512) xeshlash va rate limiting."}
                  </span>
                </li>
              </ul>
            </div>

            {/* Action Links: Live Demo, GitHub, Case Study */}
            <div className="pt-4 border-t border-hairline flex flex-col sm:flex-row flex-wrap gap-2.5">
              <MagneticButton
                href={project.liveUrl}
                external
                variant="cellix"
                className="flex-1"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              </MagneticButton>

              <MagneticButton
                href={project.githubUrl}
                external
                variant="secondary"
                className="flex-1"
              >
                <Github className="w-3.5 h-3.5" aria-hidden="true" />
                <span>GitHub</span>
              </MagneticButton>

              <Link
                href={project.caseStudyUrl}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-gold text-obsidian hover:bg-gold-light font-mono text-xs font-semibold uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <span>
                  {locale === "en"
                    ? "Open Full Engineering Case Study"
                    : "Loyiha Arxitekturasi va To‘liq Tahlil"}
                </span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
