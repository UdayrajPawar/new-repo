"use client";

import type { CompanyData } from "@/types";

export default function Documents({
  company,
}: {
  company: CompanyData;
}) {
  return (
    <section id="documents" className="bg-white py-20 sm:py-28">
      <div className="section-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="section-heading">
            {company.name} — Built on Trust, Excellence &amp; Innovation
          </h2>
        </div>
      </div>
    </section>
  );
}