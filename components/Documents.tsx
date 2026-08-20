"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  FileText,
  Eye,
  X,
  ShieldCheck,
} from "lucide-react";
import type { CompanyData } from "@/types";

export default function Documents({
  company,
}: {
  company: CompanyData;
}) {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>("");

  // Disable common browser actions
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Disable Ctrl+S
      if (e.ctrlKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
      }

      // Disable Ctrl+P
      if (e.ctrlKey && e.key.toLowerCase() === "p") {
        e.preventDefault();
      }

      // Disable Ctrl+U
      if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
      }

      // Disable Ctrl+Shift+I / DevTools
      if (
        e.ctrlKey &&
        e.shiftKey &&
        e.key.toLowerCase() === "i"
      ) {
        e.preventDefault();
      }

      // Disable F12
      if (e.key === "F12") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const openPdf = (file: string, title: string) => {
    setSelectedPdf(file);
    setSelectedTitle(title);
    document.body.style.overflow = "hidden";
  };

  const closePdf = () => {
    setSelectedPdf(null);
    setSelectedTitle("");
    document.body.style.overflow = "";
  };

  return (
    <>
      <section
        id="documents"
        className="bg-white py-20 sm:py-28"
        onContextMenu={(e) => e.preventDefault()}
        style={{
          userSelect: "none",
          WebkitUserSelect: "none",
        }}
      >
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow mb-4">
              <FileText size={14} />
              Business Credentials
            </span>

            <h2 className="section-heading">
              Official Company Documents
            </h2>

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
                viewport={{
                  once: true,
                  margin: "-60px",
                }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.08,
                }}
                className="card flex flex-col items-center px-6 py-8 text-center"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-royal/10">
                  <FileText
                    className="text-royal"
                    size={28}
                  />
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

                <div className="mt-6 w-full">
                  <button
                    type="button"
                    onClick={() =>
                      openPdf(doc.file, doc.title)
                    }
                    className="btn-primary flex w-full items-center justify-center gap-2 !py-2.5 text-xs"
                  >
                    <Eye size={15} />
                    View Securely
                  </button>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-navy/50">
                  <ShieldCheck size={13} />
                  Protected Document
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {selectedPdf && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-2 sm:p-6"
          onContextMenu={(e) => e.preventDefault()}
          onMouseDown={(e) => {
            if (e.button === 2) {
              e.preventDefault();
            }
          }}
          style={{
            userSelect: "none",
            WebkitUserSelect: "none",
          }}
        >
          <div className="relative flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between border-b bg-white px-4 py-3">
              <div>
                <h3 className="text-sm font-semibold text-navy">
                  {selectedTitle}
                </h3>

                <div className="mt-1 flex items-center gap-1.5 text-[11px] text-emerald-600">
                  <ShieldCheck size={13} />
                  View-only protected document
                </div>
              </div>

              <button
                type="button"
                onClick={closePdf}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200"
                aria-label="Close document"
              >
                <X size={18} />
              </button>
            </div>

            {/* Document Viewer */}
            <div
              className="relative flex-1 overflow-hidden bg-gray-100"
              onContextMenu={(e) => e.preventDefault()}
            >
              {/* Watermark */}
              <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center overflow-hidden">
                <div className="rotate-[-30deg] select-none text-4xl font-bold tracking-widest text-black/10 sm:text-6xl">
                  OFFICIAL DOCUMENT
                </div>
              </div>

              <iframe
                src={`${selectedPdf}#toolbar=0&navpanes=0&scrollbar=1`}
                title={selectedTitle}
                className="h-full w-full border-0"
                style={{
                  userSelect: "none",
                  WebkitUserSelect: "none",
                }}
                onContextMenu={(e) =>
                  e.preventDefault()
                }
              />

              {/* Transparent protection layer */}
              <div
                className="pointer-events-none absolute inset-0 z-20"
                aria-hidden="true"
              />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-center border-t bg-white px-4 py-2">
              <p className="text-center text-[10px] text-gray-400">
                This document is provided for verification purposes only.
                Downloading and redistribution are not permitted.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}