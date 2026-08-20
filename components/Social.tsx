"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MessageCircle,
  Share2,
} from "lucide-react";
import type { ComponentType } from "react";
import type { SocialItem } from "@/types";

const iconMap: Record<string, ComponentType<{ size?: number }>> = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
  whatsapp: MessageCircle,
};

export default function Social({ socials }: { socials: SocialItem[] }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="section-container text-center">
        <span className="section-eyebrow mb-4">
          <Share2 size={14} />
          Stay Connected
        </span>
        <h2 className="section-heading">Connect With Us</h2>
        <p className="mx-auto mt-4 max-w-xl text-navy/60">
          Follow our journey as we prepare to launch. Stay updated on our
          latest news and announcements.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {socials.map((social, i) => {
            const Icon = iconMap[social.id] ?? Share2;
            return (
              <motion.a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                aria-label={social.name}
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-navy/10 bg-graylight text-navy transition-colors duration-300 hover:bg-royal hover:text-white"
              >
                <Icon size={24} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
