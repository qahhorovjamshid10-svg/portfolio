import type { Metadata, Viewport } from "next";
import {
  Space_Grotesk,
  Cormorant_Garamond,
  Plus_Jakarta_Sans,
  JetBrains_Mono,
} from "next/font/google";
import "./globals.css";
import { PortfolioProvider } from "@/components/PortfolioProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Jamshid Qahhorov — Front-End Developer",
    template: "%s | Jamshid Qahhorov",
  },
  description:
    "Personal portfolio of Jamshid Qahhorov, Front-End Developer specializing in React.js, JavaScript, TypeScript, Tailwind CSS, responsive user interfaces, REST APIs, and interactive web applications including CELLIX.",
  keywords: [
    "Jamshid Qahhorov",
    "Front-End Developer",
    "React Developer",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "CELLIX",
    "Tashkent Frontend Developer",
  ],
  authors: [{ name: "Jamshid Qahhorov", url: "https://github.com/qahhorovjamshid10-svg" }],
  creator: "Jamshid Qahhorov",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Jamshid Qahhorov — Front-End Developer",
    description:
      "I build modern, interactive web experiences with a focus on thoughtful interfaces, performance, and maintainable code. Creator of CELLIX.",
    siteName: "Jamshid Qahhorov Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jamshid Qahhorov — Front-End Developer",
    description:
      "Front-End Developer specializing in React.js, TypeScript, Tailwind CSS, and interactive web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${cormorantGaramond.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans bg-obsidian text-ivory min-h-screen flex flex-col selection:bg-gold/25 selection:text-ivory">
        <PortfolioProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </PortfolioProvider>
      </body>
    </html>
  );
}
