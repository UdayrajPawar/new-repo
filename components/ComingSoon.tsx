"use client";

import { motion } from "framer-motion";
import { Cog, Factory, Tractor, Wrench, Clock } from "lucide-react";
import type { ComponentType } from "react";
import type { CompanyData } from "@/types";

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  "agri-equipment": Tractor,
  "engineering-solutions": Cog,
  "manufacturing-services": Factory,
  "custom-fabrication": Wrench,
};

export default function ComingSoon({ company }: { company: CompanyData }) {
  return (
    <section className="bg-navy py-20 sm:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow mb-4 !bg-white/10 !text-royal-light">
            <Clock size={14} />
            Coming Soon
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Services Launching Soon
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {company.services.map((service, i) => {
            const Icon = iconMap[service.id] ?? Cog;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 text-center transition-colors duration-300 hover:bg-white/[0.07]"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-royal/20 text-royal-light transition-transform duration-300 group-hover:scale-110">
                  <Icon size={26} />
                </div>
                <h3 className="text-base font-semibold text-white">
                  {service.title}
                </h3>
                <span className="mt-3 inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/70">
                  {service.status}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
