"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { CompanyData } from "@/types";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Documents", href: "#documents" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ company }: { company: CompanyData }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-card backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container flex h-16 items-center justify-between sm:h-20">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Wadaje Motors India logo"
            width={40}
            height={40}
            className="h-9 w-9 rounded-md sm:h-10 sm:w-10"
            priority
          />
          <span className="text-sm font-bold tracking-tight text-navy sm:text-base">
            {company.companyName}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/70 transition-colors hover:text-royal"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !px-5 !py-2.5 text-sm">
            Contact Us
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-navy transition-colors hover:bg-navy/5 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-navy/5 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-navy/80 transition-colors hover:bg-navy/5 hover:text-royal"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 text-sm"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
