import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 bg-obsidian text-ivory">
      <div className="max-w-lg w-full p-8 sm:p-10 bg-surface border border-hairline space-y-6 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold">
          ERROR 404 // ROUTE NOT FOUND
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ivory">
          Page Not Found
        </h1>
        <p className="text-muted text-sm leading-relaxed">
          The requested page does not exist. Return to the main portfolio or explore the CELLIX engineering case study.
        </p>
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 bg-gold text-obsidian font-mono text-xs font-semibold uppercase tracking-[0.14em]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>
          <Link
            href="/projects/cellix"
            className="inline-flex items-center gap-2 px-5 py-3 bg-card border border-hairline hover:border-cellix-red/60 text-ivory font-mono text-xs uppercase tracking-[0.14em]"
          >
            <span>CELLIX Case Study</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
