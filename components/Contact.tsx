"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import type { CompanyData } from "@/types";

export default function Contact({ company }: { company: CompanyData }) {
  const { contact } = company;

  const cards = [
    {
      icon: Phone,
      label: "Phone",
      value: contact.phone,
      href: `tel:${contact.phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us",
      href: `https://wa.me/${contact.whatsapp.trim()}`,
    },
    {
      icon: MapPin,
      label: "Address",
      value: contact.address,
      href: `https://maps.google.com/?q=${encodeURIComponent(
        contact.address
)}`,
    },
  ];

  return (
    <section id="contact" className="bg-graylight py-20 sm:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow mb-4">Get In Touch</span>
          <h2 className="section-heading">Contact {contact.companyName}</h2>
          <p className="mt-4 text-navy/60">
            Reach out to us directly — no forms, just a message away.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.label === "Address" || c.label === "WhatsApp" ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card flex flex-col items-center gap-4 px-6 py-8 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-royal/10 text-royal">
                <c.icon size={24} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-navy/40">
                  {c.label}
                </p>
                <p className="mt-1.5 break-words text-sm font-medium text-navy">
                  {c.value}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
