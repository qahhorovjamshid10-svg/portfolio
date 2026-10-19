import type { Metadata } from "next";
import React from "react";
import { CellixCaseStudyClient } from "@/components/CellixCaseStudyClient";

export const metadata: Metadata = {
  title: "CELLIX — Real-Time Cyberpunk Multiplayer & Arcade Web Game Platform",
  description:
    "Project case study of CELLIX by Jamshid Qahhorov: built with Next.js, React, TypeScript, Tailwind CSS, Phaser 3, WebSockets, REST APIs, and AI-assisted development.",
  openGraph: {
    title: "CELLIX — Case Study | Jamshid Qahhorov",
    description:
      "Real-Time Cyberpunk Multiplayer & Arcade Web Game Platform built with Next.js, React, TypeScript, Tailwind CSS, Phaser 3, WebSockets, and AI-assisted engineering.",
  },
};

export default function CellixCaseStudyPage() {
  return <CellixCaseStudyClient />;
}
