"use client";

import React from "react";

interface ProblemSectionProps {
  title: string;
  content: string;
}

export default function ProblemSection({ title, content }: ProblemSectionProps) {
  return (
    <section className="w-full max-w-6xl mx-auto pb-20 grid grid-cols-1 md:grid-cols-3 gap-12">

      {/* LEFT COLUMN — SECTION LABEL */}
      <div>
        <h4 className="text-[#9CA3C7] tracking-[0.3em] text-lg font-semibold">
          PROBLEM
        </h4>
      </div>
      {/* RIGHT CONTENT */}
      <div className="md:col-span-2">
        <h2 className="text-4xl font-bold text-[#1E1E1E] mb-6">{title}</h2>

        <div
          className="text-[18px] text-[#1E1E1E] leading-[170%] space-y-6"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </section>
  );
}
