"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck, Target } from "lucide-react";
import type { CompanyData } from "@/types";

const highlights = [
  {
    icon: Building2,
    title: "Emerging Company",
    text: "A newly established engineering and manufacturing venture.",
  },
  {
    icon: Target,
    title: "Clear Mission",
    text: "Delivering quality, reliability and customer trust.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Verified",
    text: "Officially registered with all statutory documentation.",
  },
];

export default function About({ company }: { company: CompanyData }) {
  return (
    <section id="about" className="bg-graylight py-20 sm:py-28">
      <div className="section-container grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-eyebrow mb-4">About Us</span>
          <h2 className="section-heading">{company.about.title}</h2>
          <div className="mt-6 space-y-4">
            {company.about.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-navy/70">
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-1">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card flex items-start gap-4 p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                <h.icon size={22} />
              </div>
              <div>
                <h3 className="font-semibold text-navy">{h.title}</h3>
                <p className="mt-1 text-sm text-navy/60">{h.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
