"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { Locale } from "@/data/portfolio";

interface PortfolioContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  reducedMotion: boolean;
}

const PortfolioContext = createContext<PortfolioContextValue>({
  locale: "en",
  setLocale: () => {},
  reducedMotion: false,
});

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("jq_portfolio_locale");
    if (saved === "en" || saved === "uz") {
      setLocaleState(saved);
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    try {
      window.localStorage.setItem("jq_portfolio_locale", nextLocale);
    } catch {
      // Ignore storage errors in restricted environments
    }
  };

  return (
    <PortfolioContext.Provider value={{ locale, setLocale, reducedMotion }}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  return useContext(PortfolioContext);
}
