/*"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Download, FileText, Eye } from "lucide-react";
import type { CompanyData } from "@/types";

export default function Documents({ company }: { company: CompanyData }) {
  return (
    <section id="documents" className="bg-white py-20 sm:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow mb-4">
            <FileText size={14} />
            Business Credentials
          </span>
         <h2 className="section-heading">Official Company Documents</h2>
          <p className="mt-4 text-navy/60">
            Verify our business credentials and registrations.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {company.documents.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card flex flex-col items-center px-6 py-8 text-center"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-royal/10">
                <FileText className="text-royal" size={28} />
              </div>

              <h3 className="text-base font-semibold text-navy">
                {doc.title}
              </h3>

              {doc.verified && (
                <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                  <BadgeCheck size={14} />
                  Verified
                </span>
              )}

              <div className="mt-6 flex w-full flex-col gap-2.5">
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full !py-2.5 text-xs"
                >
                  <Eye size={15} />
                  View PDF
                </a>
                <a
                  href={doc.file}
                  download
                  className="btn-primary w-full !py-2.5 text-xs"
                >
                  <Download size={15} />
                  Download PDF
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}*/
