"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { usePortfolio } from "./PortfolioProvider";

export function Navbar() {
  const { locale, setLocale, reducedMotion } = usePortfolio();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-obsidian focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest"
      >
        {locale === "en" ? "Skip to main content" : "Asosiy qismga o‘tish"}
      </a>

      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-300 border-b ${
          scrolled
            ? "bg-obsidian/95 backdrop-blur-md border-hairline"
            : "bg-obsidian/80 backdrop-blur-sm border-hairline/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Monogram & Name */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
              aria-label="Jamshid Qahhorov — Home"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 bg-surface border border-hairline group-hover:border-gold transition-colors font-display text-sm font-bold tracking-tight text-ivory">
                JQ<span className="text-gold">.</span>
              </span>
              <div className="flex flex-col">
                <span className="font-display text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-ivory group-hover:text-gold transition-colors">
                  {portfolioData.personal.name}
                </span>
                <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted hidden sm:inline">
                  {portfolioData.personal.title[locale]}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden xl:flex items-center gap-1"
          >
            {portfolioData.navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group px-3 py-2 text-xs font-mono uppercase tracking-[0.14em] text-muted hover:text-ivory transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <span className="text-gold/60 mr-1 group-hover:text-gold transition-colors">
                  {item.index}.
                </span>
                {item.label[locale]}
              </Link>
            ))}

            <Link
              href="/projects/cellix"
              className={`ml-2 px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.14em] border transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                pathname === "/projects/cellix"
                  ? "border-cellix-red/70 bg-cellix-red/10 text-ivory"
                  : "border-hairline bg-surface text-ivory hover:border-cellix-red/60"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cellix-red" />
              <span>CELLIX {locale === "en" ? "Case Study" : "Tahlil"}</span>
            </Link>
          </nav>

          {/* Right Controls: Language Switcher + CV + Contact CTA */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Language Switcher */}
            <div
              role="group"
              aria-label="Language Switcher"
              className="inline-flex items-center bg-surface border border-hairline p-0.5"
            >
              <button
                type="button"
                onClick={() => setLocale("en")}
                aria-pressed={locale === "en"}
                className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  locale === "en"
                    ? "bg-gold text-obsidian font-semibold"
                    : "text-muted hover:text-ivory"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLocale("uz")}
                aria-pressed={locale === "uz"}
                className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  locale === "uz"
                    ? "bg-gold text-obsidian font-semibold"
                    : "text-muted hover:text-ivory"
                }`}
              >
                UZ
              </button>
            </div>

            {/* CV Link (Desktop) */}
            <a
              href={portfolioData.personal.cvPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 bg-surface border border-hairline hover:border-gold/60 text-xs font-mono uppercase tracking-[0.12em] text-ivory hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              title="Open Original CV PDF"
            >
              <FileText className="w-3.5 h-3.5 text-gold" aria-hidden="true" />
              <span>CV</span>
            </a>

            {/* Primary Contact Link (Desktop) */}
            <Link
              href="/#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-gold text-obsidian hover:bg-gold-light text-xs font-mono font-medium uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian"
            >
              <span>{locale === "en" ? "Contact" : "Aloqa"}</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label={
                mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              className="xl:hidden inline-flex items-center justify-center w-10 h-10 bg-surface border border-hairline text-ivory hover:border-gold hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" aria-hidden="true" />
              ) : (
                <Menu className="w-4 h-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-navigation-drawer"
              initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden border-b border-hairline bg-surface"
            >
              <nav
                aria-label="Mobile Navigation"
                className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col gap-2"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {portfolioData.navigation.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 bg-card border border-hairline hover:border-gold/60 text-xs font-mono uppercase tracking-[0.16em] text-ivory transition-colors"
                    >
                      <span>
                        <span className="text-gold mr-2">{item.index}.</span>
                        {item.label[locale]}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-muted" />
                    </Link>
                  ))}

                  <Link
                    href="/projects/cellix"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-4 py-3 bg-card border border-cellix-red/50 text-xs font-mono uppercase tracking-[0.16em] text-ivory transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cellix-red" />
                      CELLIX {locale === "en" ? "Case Study" : "Tahlil"}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-cellix-red" />
                  </Link>
                </div>

                <div className="pt-4 mt-2 border-t border-hairline flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={portfolioData.personal.cvPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-obsidian border border-hairline text-xs font-mono uppercase tracking-[0.14em] text-ivory hover:border-gold"
                  >
                    <FileText className="w-3.5 h-3.5 text-gold" />
                    <span>
                      {locale === "en" ? "View Original CV (PDF)" : "CV Faylni Ochish (PDF)"}
                    </span>
                  </a>

                  <Link
                    href="/#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-obsidian text-xs font-mono font-semibold uppercase tracking-[0.14em]"
                  >
                    <span>{locale === "en" ? "Contact Me" : "Bog‘lanish"}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
