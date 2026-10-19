"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { usePortfolio } from "./PortfolioProvider";

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "cellix" | "ghost";
  external?: boolean;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
}

export function MagneticButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  ariaLabel,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const { reducedMotion } = usePortfolio();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDesktopPointer, setIsDesktopPointer] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsDesktopPointer(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktopPointer(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (reducedMotion || !isDesktopPointer || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.18;
    const deltaY = (e.clientY - centerY) * 0.18;
    setOffset({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setOffset({ x: 0, y: 0 });
  };

  const variantClasses: Record<NonNullable<MagneticButtonProps["variant"]>, string> = {
    primary:
      "bg-gold text-obsidian border border-gold hover:bg-gold-light font-medium shadow-[0_0_0_1px_rgba(212,175,114,0.2)]",
    secondary:
      "bg-surface text-ivory border border-hairline hover:border-gold/60 hover:text-gold",
    cellix:
      "bg-obsidian text-ivory border border-cellix-red/60 hover:bg-cellix-red hover:text-obsidian hover:border-cellix-red font-medium",
    ghost:
      "bg-transparent text-muted border border-transparent hover:border-hairline hover:text-ivory",
  };

  const sharedStyles: React.CSSProperties | undefined =
    !reducedMotion && isDesktopPointer
      ? {
          transform: `translate3d(${offset.x.toFixed(1)}px, ${offset.y.toFixed(1)}px, 0)`,
          transition:
            offset.x === 0 && offset.y === 0
              ? "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease"
              : "transform 0.08s linear, background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease",
        }
      : undefined;

  const combinedClassName = `inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-mono uppercase tracking-[0.14em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-obsidian ${variantClasses[variant]} ${className}`;

  if (external) {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={sharedStyles}
        className={combinedClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={sharedStyles}
      className={combinedClassName}
    >
      {children}
    </Link>
  );
}
