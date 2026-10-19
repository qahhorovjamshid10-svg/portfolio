"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { usePortfolio } from "./PortfolioProvider";

export function Footer() {
  const { locale } = usePortfolio();
  const [tashkentTime, setTashkentTime] = useState<string>("");

  useEffect(() => {
    const updateClock = () => {
      try {
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Tashkent",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setTashkentTime(`${formatter.format(new Date())} UZT (UTC+5)`);
      } catch {
        setTashkentTime("UTC+05:00");
      }
    };
    updateClock();
    const timer = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-obsidian border-t border-hairline text-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-hairline">
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-surface border border-hairline font-display text-xs font-bold text-ivory">
                JQ<span className="text-gold">.</span>
              </span>
              <span className="font-display text-base font-semibold tracking-[0.12em] uppercase">
                {portfolioData.personal.name}
              </span>
            </div>
            <p className="text-muted text-sm max-w-sm leading-relaxed">
              {portfolioData.personal.heroStatement[locale]}
            </p>
            <div className="pt-1 font-mono text-xs text-muted flex flex-wrap items-center gap-x-4 gap-y-1">
              <span>{portfolioData.personal.location[locale]}</span>
              <span className="text-gold">•</span>
              <span>{tashkentTime || portfolioData.personal.timezone}</span>
            </div>
          </div>

          {/* Quick Index */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-gold">
              {locale === "en" ? "Directory" : "Bo‘limlar"}
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs font-mono uppercase tracking-[0.12em]">
              {portfolioData.navigation.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-muted hover:text-ivory transition-colors inline-flex items-center gap-1"
                  >
                    <span className="text-gold/60">{item.index}.</span>
                    <span>{item.label[locale]}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/projects/cellix"
                  className="text-cellix-red hover:text-ivory transition-colors inline-flex items-center gap-1"
                >
                  <span>08.</span>
                  <span>CELLIX</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-gold">
              {locale === "en" ? "Verified Links" : "Tasdiqlangan Havolalar"}
            </h3>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a
                  href={portfolioData.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-ivory transition-colors inline-flex items-center gap-1.5"
                >
                  <span>GitHub (@{portfolioData.personal.githubHandle})</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.personal.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-ivory transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Telegram ({portfolioData.personal.telegramHandle})</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gold" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="text-muted hover:text-ivory transition-colors inline-flex items-center gap-1.5 break-all"
                >
                  <span>{portfolioData.personal.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={portfolioData.personal.phoneHref}
                  className="text-muted hover:text-ivory transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{portfolioData.personal.phone}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Colophon */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-muted">
          <div>
            <span>
              © {new Date().getFullYear()} {portfolioData.personal.name}.{" "}
              {locale === "en"
                ? "Built with React, TypeScript, Tailwind CSS & Motion."
                : "React, TypeScript, Tailwind CSS va Motion asosida yaratildi."}
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-2 bg-surface border border-hairline hover:border-gold text-ivory hover:text-gold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            aria-label="Scroll back to top"
          >
            <span>{locale === "en" ? "Back to top" : "Yuqoriga"}</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
