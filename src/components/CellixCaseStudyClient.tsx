"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  ShieldCheck,
  Cpu,
  Database,
  Gamepad2,
  Layers,
  Terminal,
  Sparkles,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { usePortfolio } from "./PortfolioProvider";
import { MagneticButton } from "./MagneticButton";

export function CellixCaseStudyClient() {
  const { locale, reducedMotion } = usePortfolio();
  const project = portfolioData.projects[0];
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);

  const activeScreen =
    project.previewScreens[activeScreenIdx] ?? project.previewScreens[0];

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="bg-obsidian text-ivory min-h-screen"
    >
      {/* Top Case Study Sub-Header */}
      <div className="border-b border-hairline bg-surface/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-muted hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <ArrowLeft className="w-4 h-4 text-gold" aria-hidden="true" />
            <span>
              {locale === "en"
                ? "Back to Selected Projects"
                : "Loyihalarga Qaytish"}
            </span>
          </Link>

          <div className="inline-flex items-center gap-2.5 font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-cellix-red animate-pulse" />
            <span className="text-ivory uppercase tracking-widest">
              CASE STUDY // 01
            </span>
            <span className="text-hairline">|</span>
            <span className="text-cellix-red">{project.status[locale]}</span>
          </div>
        </div>
      </div>

      {/* Hero Overview Section */}
      <section className="py-14 sm:py-20 border-b border-hairline relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cellix-red/50 to-transparent"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-cellix-red/40 font-mono text-[11px] uppercase tracking-[0.18em] text-cellix-red">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{project.category[locale]}</span>
              </div>

              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tightest text-ivory leading-[1.06]">
                {project.title}
              </h1>

              <p className="font-mono text-xs sm:text-sm text-gold uppercase tracking-[0.15em]">
                {project.subtitle[locale]}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-wrap lg:justify-end gap-3">
              <MagneticButton
                href={project.liveUrl}
                external
                variant="cellix"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                href={project.githubUrl}
                external
                variant="secondary"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repo</span>
              </MagneticButton>
            </div>
          </div>

          {/* Interactive Multi-Screen Showcase */}
          <div className="bg-card border border-hairline p-4 sm:p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-hairline">
              <div
                role="tablist"
                aria-label="CELLIX system views"
                className="flex flex-wrap gap-1.5"
              >
                {project.previewScreens.map((screen, idx) => (
                  <button
                    key={screen.id}
                    type="button"
                    role="tab"
                    aria-selected={idx === activeScreenIdx}
                    onClick={() => setActiveScreenIdx(idx)}
                    className={`px-3.5 py-2 text-xs font-mono uppercase tracking-[0.12em] border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                      idx === activeScreenIdx
                        ? "bg-obsidian text-ivory border-cellix-red"
                        : "bg-surface text-muted border-hairline hover:text-ivory"
                    }`}
                  >
                    {screen.label[locale]}
                  </button>
                ))}
              </div>

              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-cellix-red hover:underline inline-flex items-center gap-1.5"
              >
                <span>https://{activeScreen.route}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="relative aspect-[16/10] w-full bg-obsidian border border-hairline overflow-hidden">
              <Image
                src={activeScreen.imagePath}
                alt={`${project.shortTitle} — ${activeScreen.label.en}`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
                className="object-cover"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-muted">
              <span>{activeScreen.caption[locale]}</span>
              <span className="text-gold shrink-0">
                VIEW {activeScreenIdx + 1} / {project.previewScreens.length}
              </span>
            </div>
          </div>

          {/* Extended Narrative & Full Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-4">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                {locale === "en"
                  ? "01 // ARCHITECTURAL OVERVIEW"
                  : "01 // LOYIHA HAQIDA BATAFSIL"}
              </h2>
              <div className="space-y-4 text-muted text-sm sm:text-base leading-relaxed">
                {project.extendedOverview[locale].map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-surface border border-hairline p-6 space-y-4">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                {locale === "en"
                  ? "02 // TECHNOLOGY STACK"
                  : "02 // TEXNOLOGIK STEK"}
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.fullStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-card border border-hairline font-mono text-xs text-ivory"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Layer System Architecture Section */}
      <section className="py-16 sm:py-24 bg-surface border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cellix-red">
              03 // SYSTEM ARCHITECTURE
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ivory">
              {locale === "en"
                ? "Four-Tier Engineering Topology"
                : "To‘rt Qatlamli Tizim Arxitekturasi"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.architectureLayers.map((layer) => (
              <div
                key={layer.code}
                className="p-6 sm:p-8 bg-card border border-hairline hover:border-gold/50 transition-colors flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-hairline pb-3">
                    <span className="font-mono text-xs text-gold font-semibold">
                      {layer.code}
                    </span>
                    <Layers className="w-4 h-4 text-cellix-red" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ivory">
                    {layer.title[locale]}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {layer.description[locale]}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {layer.stack.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 bg-obsidian border border-hairline font-mono text-[11px] text-gold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Modes & Mutation System */}
      <section className="py-16 sm:py-24 bg-obsidian border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Game Modes */}
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
                04 // GAMEPLAY MECHANICS &amp; ARENA MODES
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ivory">
                {locale === "en"
                  ? "Phaser 3 Arena Modes & Combat Systems"
                  : "Phaser 3 O‘yin Rejimlari va Jang Tizimi"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gameModes.map((mode) => (
                <div
                  key={mode.name}
                  className="p-6 sm:p-7 bg-surface border border-hairline space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-xl font-semibold text-ivory inline-flex items-center gap-2.5">
                      <Gamepad2 className="w-4 h-4 text-cellix-red" />
                      {mode.name}
                    </h3>
                    <span className="px-2.5 py-1 bg-obsidian border border-cellix-red/40 font-mono text-[10px] uppercase tracking-wider text-cellix-red">
                      {mode.tag}
                    </span>
                  </div>

                  <p className="text-muted text-sm leading-relaxed">
                    {mode.description[locale]}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-hairline font-mono text-xs text-ivory/85">
                    {mode.highlights[locale].map((hl, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Mutation Tiers & Combos */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 bg-surface border border-hairline p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between border-b border-hairline pb-3">
                <h3 className="font-display text-xl font-semibold text-ivory">
                  {locale === "en"
                    ? "Mutation Drafting & Probability Matrix"
                    : "Mutatsiya Kartalari va Ehtimollik Jadvali"}
                </h3>
                <Cpu className="w-4 h-4 text-gold" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.mutationTiers.map((tier) => (
                  <div
                    key={tier.rarity}
                    className="p-4 bg-card border border-hairline space-y-2"
                  >
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span
                        className="font-bold uppercase"
                        style={{ color: tier.accentColor }}
                      >
                        {tier.rarity}
                      </span>
                      <span className="text-ivory">{tier.probability}</span>
                    </div>
                    <ul className="text-xs text-muted space-y-1 font-mono">
                      {tier.examples.map((ex) => (
                        <li key={ex}>• {ex}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-surface border border-hairline p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between border-b border-hairline pb-3">
                <h3 className="font-display text-xl font-semibold text-ivory">
                  {locale === "en"
                    ? "Mutation Synergy Combos"
                    : "Mutatsiya Combo Effektlari"}
                </h3>
                <span className="font-mono text-xs text-cellix-red">
                  3 SYNERGIES
                </span>
              </div>

              <div className="space-y-3">
                {project.mutationCombos.map((combo) => (
                  <div
                    key={combo.name}
                    className="p-4 bg-card border border-hairline space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-gold">
                        {combo.name}
                      </span>
                      <span className="font-mono text-[11px] text-muted">
                        {combo.recipe}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-ivory">
                      → {combo.effect[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security, Anti-Cheat, Database & REST API Section */}
      <section className="py-16 sm:py-24 bg-surface border-b border-hairline">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-cellix-red">
              05 // SECURITY, DATA MODELS &amp; REST APIs
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ivory">
              {locale === "en"
                ? "Security, Data Layer & API Integration"
                : "Xavfsizlik, Ma’lumotlar Modellari va REST API"}
            </h2>
          </div>

          {/* Security Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.securityHighlights.map((sec, idx) => (
              <div
                key={idx}
                className="p-6 bg-card border border-hairline space-y-3"
              >
                <ShieldCheck className="w-5 h-5 text-cellix-red" />
                <h3 className="font-display text-lg font-semibold text-ivory">
                  {sec.title[locale]}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {sec.detail[locale]}
                </p>
              </div>
            ))}
          </div>

          {/* Database Models & API Endpoints Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Database Schema Models */}
            <div className="lg:col-span-5 bg-card border border-hairline p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-hairline">
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-gold">
                  <Database className="w-4 h-4" />
                  SYSTEM DATA MODELS
                </span>
                <span className="font-mono text-[11px] text-muted">
                  Data Schema
                </span>
              </div>

              <div className="space-y-3">
                {project.databaseModels.map((db) => (
                  <div
                    key={db.model}
                    className="p-3.5 bg-obsidian border border-hairline space-y-1"
                  >
                    <p className="font-mono text-xs font-semibold text-ivory">
                      {db.model}
                    </p>
                    <p className="text-xs text-muted leading-relaxed">
                      {db.purpose[locale]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified REST API Routes */}
            <div className="lg:col-span-7 bg-card border border-hairline p-6 sm:p-7 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-hairline">
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-gold">
                  <Terminal className="w-4 h-4" />
                  REST API ENDPOINTS
                </span>
                <span className="font-mono text-[11px] text-muted">
                  Next.js Route Handlers
                </span>
              </div>

              <div className="space-y-2.5">
                {project.apiEndpoints.map((ep) => (
                  <div
                    key={ep.path}
                    className="p-3.5 bg-obsidian border border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span
                          className={`px-2 py-0.5 font-mono text-[10px] font-bold ${
                            ep.method === "GET"
                              ? "bg-gold/15 text-gold border border-gold/40"
                              : "bg-cellix-red/15 text-cellix-red border border-cellix-red/40"
                          }`}
                        >
                          {ep.method}
                        </span>
                        <code className="font-mono text-xs text-ivory">
                          {ep.path}
                        </code>
                      </div>
                      <p className="text-xs text-muted">
                        {ep.description[locale]}
                      </p>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted shrink-0">
                      {ep.domain}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Callout to Try Live Demo or Return */}
          <div className="p-6 sm:p-8 bg-obsidian border border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <p className="font-display text-xl font-semibold text-ivory">
                {locale === "en"
                  ? "Experience CELLIX Live in the Browser"
                  : "CELLIX Platformasini Brauzerda Sinab Ko‘ring"}
              </p>
              <p className="text-muted text-sm">
                {locale === "en"
                  ? "Explore the deployed application on Vercel or inspect the TypeScript & Phaser 3 source code on GitHub."
                  : "Vercel’dagi jonli demoni oching yoki GitHub’da TypeScript va Phaser 3 manba kodini ko‘zdan kechiring."}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <MagneticButton
                href={project.liveUrl}
                external
                variant="cellix"
              >
                <span>Launch CELLIX</span>
                <ExternalLink className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                href={project.githubUrl}
                external
                variant="secondary"
              >
                <Github className="w-4 h-4" />
                <span>View Source</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
