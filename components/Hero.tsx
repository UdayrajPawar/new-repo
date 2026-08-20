"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FileText, MessageCircle, Sparkles } from "lucide-react";
import type { CompanyData } from "@/types";

export default function Hero({ company }: { company: CompanyData }) {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-graylight pb-20 pt-16 sm:pb-28 sm:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-hero-grid [background-size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-royal/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-navy/5 blur-3xl" />

      <div className="section-container relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-white p-3 shadow-cardHover sm:h-28 sm:w-28"
        >
          <Image
            src="/logo.png"
            alt="Wadaje Motors India logo"
            width={96}
            height={96}
            className="h-full w-full object-contain"
            priority
          />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-eyebrow mb-5"
        >
          <Sparkles size={14} />
          {company.tagline}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="max-w-4xl text-4xl font-extrabold tracking-tight text-navy sm:text-5xl md:text-6xl"
        >
          {company.companyName.toUpperCase()}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="mt-6 max-w-2xl text-lg font-medium text-navy/80 sm:text-xl"
        >
          {company.description}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="mt-4 max-w-2xl text-sm leading-relaxed text-navy/60 sm:text-base"
        >
          {company.subDescription}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-9 flex flex-col gap-3 sm:flex-row"
        >
          <a href="#documents" className="btn-primary">
            <FileText size={18} />
            About Us
          </a>
          <a href="#contact" className="btn-secondary">
            <MessageCircle size={18} />
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
