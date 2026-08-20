"use client";

import Image from "next/image";
import {
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MessageCircle,
  Share2,
} from "lucide-react";
import type { ComponentType } from "react";
import type { CompanyData, SocialItem } from "@/types";

const iconMap: Record<string, ComponentType<{ size?: number }>> = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
  whatsapp: MessageCircle,
};

export default function Footer({
  company,
  socials,
}: {
  company: CompanyData;
  socials: SocialItem[];
}) {
  return (
    <footer className="bg-navy-dark py-12 text-white/70">
      <div className="section-container flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col items-center gap-3 sm:items-start">
          <a href="#home" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Wadaje Motors India logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-md"
            />
            <span className="text-sm font-bold text-white">
              {company.companyName}
            </span>
          </a>
          <p className="max-w-xs text-center text-xs leading-relaxed text-white/50 sm:text-left">
            {company.description}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 sm:items-start">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Quick Links
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:justify-start">
            {company.footer.quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-royal-light"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 sm:items-end">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Follow Us
          </h4>
          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = iconMap[social.id] ?? Share2;
              return (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 transition-colors hover:bg-royal hover:text-white"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="section-container mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
        {company.footer.copyright}
      </div>
    </footer>
  );
}
