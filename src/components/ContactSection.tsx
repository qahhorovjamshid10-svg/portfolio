"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  Send,
  Github,
  MapPin,
  Copy,
  Check,
  ArrowUpRight,
  FileText,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { usePortfolio } from "./PortfolioProvider";
import { SectionHeader } from "./SectionHeader";

export function ContactSection() {
  const { locale, reducedMotion } = usePortfolio();
  const { personal } = portfolioData;

  const [copiedField, setCopiedField] = useState<"email" | "phone" | null>(null);
  const [senderName, setSenderName] = useState("");
  const [senderContact, setSenderContact] = useState("");
  const [messageBody, setMessageBody] = useState("");
  const [formFeedback, setFormFeedback] = useState<string | null>(null);

  const handleCopy = async (text: string, field: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2200);
    } catch {
      // Fallback if clipboard API is unavailable
    }
  };

  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Inquiry from ${senderName.trim() || "Visitor"}`
    );
    const body = encodeURIComponent(
      `Hello Jamshid,\n\n${messageBody.trim()}\n\n—\nFrom: ${
        senderName.trim() || "Visitor"
      }\nContact: ${senderContact.trim() || "Not provided"}`
    );
    setFormFeedback(
      locale === "en"
        ? "Opening your email client with the prepared message..."
        : "Xabar tayyorlandi, pochta dasturi ochilmoqda..."
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-28 bg-obsidian"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow={
            locale === "en" ? "07 // CONTACT & INQUIRIES" : "07 // ALOQA"
          }
          title={locale === "en" ? "Contact" : "Bog‘lanish"}
          subtitle={
            locale === "en"
              ? "Available for Front-End Developer roles, React & TypeScript application development, and collaborative web projects."
              : "Front-End Developer bo‘sh ish o‘rinlari, React va TypeScript loyihalari hamda hamkorlik uchun ochiqman."
          }
          rightMeta="TASHKENT, UZBEKISTAN"
        />

        <div
          id="contact-heading"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Left Column: Direct Verified Contact Cards */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6 space-y-4"
          >
            {/* Email Card */}
            <div className="p-5 sm:p-6 bg-card border border-hairline hover:border-gold/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-gold">
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>EMAIL</span>
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="block font-mono text-sm sm:text-base text-ivory hover:text-gold transition-colors break-all"
                >
                  {personal.email}
                </a>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(personal.email, "email")}
                className="self-start sm:self-center inline-flex items-center gap-1.5 px-3 py-2 bg-surface border border-hairline hover:border-gold text-xs font-mono uppercase tracking-wider text-ivory transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Copy email address"
              >
                {copiedField === "email" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-gold" />
                    <span className="text-gold">
                      {locale === "en" ? "Copied" : "Nusxa olindi"}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-muted" />
                    <span>{locale === "en" ? "Copy" : "Nusxa"}</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 sm:p-6 bg-card border border-hairline hover:border-gold/50 transition-colors flex flex-row items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-gold">
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{locale === "en" ? "PHONE" : "TELEFON"}</span>
                </div>
                <a
                  href={personal.phoneHref}
                  className="block font-mono text-sm sm:text-base text-ivory hover:text-gold transition-colors"
                >
                  {personal.phone}
                </a>
              </div>

              <button
                type="button"
                onClick={() => handleCopy(personal.phone, "phone")}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-surface border border-hairline hover:border-gold text-xs font-mono uppercase tracking-wider text-ivory transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Copy phone number"
              >
                {copiedField === "phone" ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-gold" />
                    <span className="text-gold">
                      {locale === "en" ? "Copied" : "Nusxa olindi"}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-muted" />
                    <span>{locale === "en" ? "Copy" : "Nusxa"}</span>
                  </>
                )}
              </button>
            </div>

            {/* Telegram & GitHub Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={personal.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 sm:p-6 bg-card border border-hairline hover:border-gold/60 transition-colors flex flex-col justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-gold">
                    <Send className="w-3.5 h-3.5" aria-hidden="true" />
                    TELEGRAM
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-gold transition-colors" />
                </div>
                <span className="font-mono text-sm sm:text-base text-ivory">
                  {personal.telegramHandle}
                </span>
                <span className="text-xs text-muted mt-1">t.me/iflxczz</span>
              </a>

              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 sm:p-6 bg-card border border-hairline hover:border-gold/60 transition-colors flex flex-col justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-gold">
                    <Github className="w-3.5 h-3.5" aria-hidden="true" />
                    GITHUB
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-gold transition-colors" />
                </div>
                <span className="font-mono text-sm sm:text-base text-ivory truncate">
                  {personal.githubHandle}
                </span>
                <span className="text-xs text-muted mt-1">
                  github.com/qahhorovjamshid10-svg
                </span>
              </a>
            </div>

            {/* Location & Original CV Card */}
            <div className="p-5 sm:p-6 bg-surface border border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
                    {locale === "en" ? "BASE LOCATION" : "MANZIL"}
                  </span>
                  <span className="font-display text-sm sm:text-base text-ivory">
                    {personal.location[locale]}
                  </span>
                </div>
              </div>

              <a
                href={personal.cvPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-obsidian border border-hairline hover:border-gold text-xs font-mono uppercase tracking-[0.14em] text-gold transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>
                  {locale === "en" ? "Download CV (PDF)" : "CV Yuklab Olish"}
                </span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Direct Inquiry Composer */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: reducedMotion ? 0 : 0.1 }}
            className="lg:col-span-6"
          >
            <form
              onSubmit={handleMailtoSubmit}
              className="p-6 sm:p-8 bg-card border border-hairline space-y-5"
            >
              <div className="pb-4 border-b border-hairline flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-ivory">
                  {locale === "en"
                    ? "Compose Direct Message"
                    : "To‘g‘ridan-To‘g‘ri Xabar Yuborish"}
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-wider text-gold">
                  DIRECT DISPATCH
                </span>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="sender-name"
                  className="block font-mono text-xs uppercase tracking-[0.14em] text-muted"
                >
                  {locale === "en" ? "Your Name" : "Ismingiz"}
                </label>
                <input
                  id="sender-name"
                  type="text"
                  required
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder={
                    locale === "en" ? "e.g. Alex Rivera" : "Masalan: Azizbek"
                  }
                  className="w-full px-4 py-3 bg-obsidian border border-hairline text-ivory text-sm font-sans placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="sender-contact"
                  className="block font-mono text-xs uppercase tracking-[0.14em] text-muted"
                >
                  {locale === "en"
                    ? "Your Email or Telegram"
                    : "Email yoki Telegram manzilingiz"}
                </label>
                <input
                  id="sender-contact"
                  type="text"
                  required
                  value={senderContact}
                  onChange={(e) => setSenderContact(e.target.value)}
                  placeholder={
                    locale === "en"
                      ? "name@company.com or @username"
                      : "name@company.com yoki @username"
                  }
                  className="w-full px-4 py-3 bg-obsidian border border-hairline text-ivory text-sm font-sans placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="sender-message"
                  className="block font-mono text-xs uppercase tracking-[0.14em] text-muted"
                >
                  {locale === "en" ? "Project or Role Details" : "Xabar mazmuni"}
                </label>
                <textarea
                  id="sender-message"
                  rows={4}
                  required
                  value={messageBody}
                  onChange={(e) => setMessageBody(e.target.value)}
                  placeholder={
                    locale === "en"
                      ? "Tell me about the frontend role, team, or interactive web project..."
                      : "Front-End vakansiyasi yoki loyiha haqida qisqacha yozing..."
                  }
                  className="w-full px-4 py-3 bg-obsidian border border-hairline text-ivory text-sm font-sans placeholder:text-muted/50 focus:outline-none focus:border-gold transition-colors resize-y"
                />
              </div>

              {formFeedback && (
                <p
                  role="status"
                  className="font-mono text-xs text-gold bg-surface border border-gold/30 px-3.5 py-2.5"
                >
                  {formFeedback}
                </p>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-obsidian hover:bg-gold-light font-mono text-xs font-semibold uppercase tracking-[0.14em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  <span>
                    {locale === "en"
                      ? "Send via Email Client"
                      : "Email Orqali Yuborish"}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href={personal.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-surface border border-hairline hover:border-gold text-ivory hover:text-gold font-mono text-xs uppercase tracking-[0.14em] transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Telegram</span>
                </a>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
