"use client";

import React from "react";

export default function UserResearchSection({ intro, insights, footer }:any) {
  return (
    <section className="w-full pb-16">

      <div className="grid grid-cols-12 gap-10">

        {/* LEFT EMPTY COLUMN (to match PROBLEM layout spacing) */}
        <div className="col-span-4"></div>

        {/* RIGHT COLUMN */}
        <div className="col-span-8 space-y-14">

          {/* Title */}
          <h2 className="text-4xl font-bold text-[#1E1E1E]">User Research</h2>

          {/* Intro Paragraph */}
          <p className="text-[18px] text-[#1E1E1E] leading-[170%] max-w-3xl">
            {intro}
          </p>

          {/* Insights */}
          <div className="space-y-20">
            {insights.map((item:any) => (
              <div key={item.id} className="space-y-6">

                {/* Numbered Insight */}
                <p className="text-[18px] leading-[170%] text-[#1E1E1E]">
                  <span className="font-semibold mr-2">{item.id}.</span>
                  {item.text}
                </p>

                {/* Chat Bubble */}
                <div className="bg-[#1A8CFF] text-white p-8 rounded-3xl max-w-3xl shadow-lg relative">
                  <p className="text-[18px] leading-[170%] whitespace-pre-line">
                    {item.quote.trim()}
                  </p>

                  {/* Bubble Tail */}
                  <div className="absolute -bottom-3 left-14 w-6 h-6 bg-[#1A8CFF] rounded-bl-2xl rotate-45"></div>
                </div>

              </div>
            ))}
          </div>

          {/* Footer */}
          <p className="text-[20px] text-[#1E1E1E] font-semibold leading-[140%] max-w-3xl">{footer}</p>

        </div>
      </div>
    </section>
  );
}
