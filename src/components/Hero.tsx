"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Layers,
  Terminal,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { usePortfolio } from "./PortfolioProvider";
import { MagneticButton } from "./MagneticButton";

export function Hero() {
  const { locale, reducedMotion } = usePortfolio();
  const [visualMode, setVisualMode] = useState<"preview" | "telemetry">("preview");
  const featuredProject = portfolioData.projects[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.09,
        delayChildren: reducedMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between border-b border-hairline bg-obsidian overflow-hidden"
    >
      {/* Subtle architectural background grid & champagne gold keyline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-subtle-grid bg-[size:64px_64px] opacity-35"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-14 lg:py-20">
        {/* Top Metadata Eyebrow Row */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 sm:mb-12 border-b border-hairline"
        >
          <div className="inline-flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-gold" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
              {portfolioData.personal.title[locale]}
            </span>
            <span className="text-hairline hidden sm:inline">/</span>
            <span className="font-mono text-xs text-muted hidden sm:inline">
              {portfolioData.personal.experienceSummaryBadge[locale]}
            </span>
          </div>

          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
            <span>{portfolioData.personal.location[locale]}</span>
            <span className="text-gold">•</span>
            <span className="hidden md:inline">
              {portfolioData.personal.coordinates}
            </span>
          </div>
        </motion.div>

        {/* Main Hero Grid: Left Typographic Composition + Right CELLIX Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Monumental Typography & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-8"
          >
            {/* Staggered Name Lockup */}
            <div className="space-y-2">
              <motion.p
                variants={itemVariants}
                className="font-mono text-xs uppercase tracking-[0.22em] text-muted"
              >
                {locale === "en"
                  ? "PERSONAL PORTFOLIO // EDITION 2026"
                  : "SHAXSIY PORTFOLIO // 2026 NASHRI"}
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="font-display text-5xl sm:text-7xl xl:text-[5.4rem] font-bold uppercase tracking-tightest text-ivory leading-[0.94]"
              >
                <span className="block">JAMSHID</span>
                <span className="block text-ivory">
                  QAHHOROV<span className="text-gold">.</span>
                </span>
              </motion.h1>
            </div>

            {/* Concise Professional Headline */}
            <motion.div
              variants={itemVariants}
              className="pl-4 sm:pl-5 border-l-2 border-gold space-y-2"
            >
              <p className="font-display text-lg sm:text-2xl font-medium text-ivory tracking-editorial">
                {portfolioData.personal.headline[locale]}
              </p>
              <p className="text-muted text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl">
                {portfolioData.personal.heroStatement[locale]}
              </p>
            </motion.div>

            {/* Core Focus Pills */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-2"
              aria-label="Core technical focus"
            >
              {portfolioData.personal.professionalFocus.map((focusItem) => (
                <span
                  key={focusItem}
                  className="px-3 py-1.5 bg-surface border border-hairline font-mono text-[11px] uppercase tracking-[0.12em] text-ivory/90"
                >
                  {focusItem}
                </span>
              ))}
            </motion.div>

            {/* Primary & Secondary CTAs */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex flex-wrap items-center gap-3.5"
            >
              <MagneticButton href="/#projects" variant="primary">
                <span>
                  {locale === "en" ? "Explore Projects" : "Loyihalarni Ko‘rish"}
                </span>
                <ArrowDownRight className="w-4 h-4" aria-hidden="true" />
              </MagneticButton>

              <MagneticButton href="/#contact" variant="secondary">
                <span>
                  {locale === "en" ? "Contact Me" : "Bog‘lanish"}
                </span>
                <ArrowUpRight className="w-4 h-4 text-gold" aria-hidden="true" />
              </MagneticButton>

              <Link
                href="/projects/cellix"
                className="inline-flex items-center gap-2 px-4 py-3.5 text-xs font-mono uppercase tracking-[0.14em] text-muted hover:text-ivory transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cellix-red" />
                <span>
                  {locale === "en"
                    ? "CELLIX Case Study →"
                    : "CELLIX Tahlili →"}
                </span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Featured Project CELLIX Visual Frame */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative bg-surface border border-hairline p-4 sm:p-5">
              {/* Architectural Corner Ticks in Champagne Gold */}
              <span
                aria-hidden="true"
                className="absolute -top-px -left-px w-3 h-3 border-t-2 border-l-2 border-gold"
              />
              <span
                aria-hidden="true"
                className="absolute -top-px -right-px w-3 h-3 border-t-2 border-r-2 border-gold"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-px -left-px w-3 h-3 border-b-2 border-l-2 border-gold"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-px -right-px w-3 h-3 border-b-2 border-r-2 border-gold"
              />

              {/* Frame Header with Mode Switch */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 mb-3.5 border-b border-hairline">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cellix-red animate-pulse" />
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ivory">
                    FEATURED // CELLIX
                  </span>
                </div>

                <div
                  role="tablist"
                  aria-label="Hero visual mode"
                  className="inline-flex bg-obsidian border border-hairline p-0.5"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected={visualMode === "preview"}
                    onClick={() => setVisualMode("preview")}
                    className={`px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors ${
                      visualMode === "preview"
                        ? "bg-card text-gold border border-gold/40"
                        : "text-muted hover:text-ivory"
                    }`}
                  >
                    <Layers className="w-3 h-3 inline mr-1" />
                    {locale === "en" ? "Hub View" : "Hub Ko‘rinishi"}
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={visualMode === "telemetry"}
                    onClick={() => setVisualMode("telemetry")}
                    className={`px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors ${
                      visualMode === "telemetry"
                        ? "bg-card text-cellix-red border border-cellix-red/40"
                        : "text-muted hover:text-ivory"
                    }`}
                  >
                    <Terminal className="w-3 h-3 inline mr-1" />
                    {locale === "en" ? "Architecture" : "Arxitektura"}
                  </button>
                </div>
              </div>

              {/* Frame Viewport */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-obsidian border border-hairline">
                {visualMode === "preview" ? (
                  <Image
                    src="/images/projects/cellix-hub.svg"
                    alt="CELLIX — Real-Time Cyberpunk Multiplayer & Arcade Web Game Platform interface preview"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full p-5 flex flex-col justify-between bg-obsidian font-mono text-xs">
                    <div className="flex items-center justify-between border-b border-hairline pb-2.5">
                      <span className="text-cellix-red font-semibold">
                        CELLIX // SYSTEM SPEC
                      </span>
                      <span className="text-gold text-[11px]">20 TPS SERVER</span>
                    </div>

                    <div className="space-y-2.5 my-auto py-2">
                      <div className="p-2.5 bg-surface border border-hairline flex items-center justify-between">
                        <span className="text-muted">FRONTEND</span>
                        <span className="text-ivory">
                          Next.js (App Router) • React • TS • Tailwind
                        </span>
                      </div>
                      <div className="p-2.5 bg-surface border border-hairline flex items-center justify-between">
                        <span className="text-muted">ENGINE</span>
                        <span className="text-ivory">
                          Phaser 3 (Canvas/WebGL) • Web Audio
                        </span>
                      </div>
                      <div className="p-2.5 bg-surface border border-hairline flex items-center justify-between">
                        <span className="text-muted">REAL-TIME</span>
                        <span className="text-cellix-red">
                          WebSockets • REST Full API
                        </span>
                      </div>
                      <div className="p-2.5 bg-surface border border-hairline flex items-center justify-between">
                        <span className="text-muted">WORKFLOW</span>
                        <span className="text-gold">
                          AI Development • Git • GitHub • Vite
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-muted border-t border-hairline pt-2">
                      <span>5 ARENA MODES • 10+ SKINS</span>
                      <span className="text-ivory">LIVE DEPLOYMENT</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Frame Footer Metadata & Direct Verified Links */}
              <div className="mt-4 pt-3 border-t border-hairline flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-display text-sm font-semibold text-ivory">
                    {featuredProject.shortTitle} —{" "}
                    <span className="text-muted font-normal">
                      {locale === "en"
                        ? "Real-Time Web Game Platform"
                        : "Real-Vaqt O‘yin Platformasi"}
                    </span>
                  </p>
                  <p className="font-mono text-[11px] text-muted">
                    Next.js • React • TypeScript • Phaser 3 • WebSockets
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={featuredProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-obsidian border border-cellix-red/50 hover:bg-cellix-red hover:text-obsidian text-[11px] font-mono uppercase tracking-wider text-ivory transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                  <Link
                    href={featuredProject.caseStudyUrl}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-obsidian border border-hairline hover:border-gold text-[11px] font-mono uppercase tracking-wider text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    <Sparkles className="w-3 h-3" aria-hidden="true" />
                    <span>{locale === "en" ? "Details" : "Batafsil"}</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Architectural Ticker Bar */}
      <div className="border-t border-hairline bg-surface/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>
              <strong className="text-gold font-normal">STACK //</strong> React.js •
              TypeScript • JavaScript • Tailwind CSS • HTML5 &amp; CSS3 • SASS
            </span>
            <span className="hidden md:inline text-hairline">|</span>
            <span className="hidden md:inline">
              <strong className="text-gold font-normal">TOOLS //</strong>{" "}
              REST Full API • Git • GitHub • GitLab • Vite • AI Development
            </span>
          </div>
          <a
            href="#about"
            className="text-ivory hover:text-gold transition-colors inline-flex items-center gap-1.5"
          >
            <span>{locale === "en" ? "Scroll to explore" : "Pastga tushish"}</span>
            <ArrowDownRight className="w-3.5 h-3.5 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}
