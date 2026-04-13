"use client";

import { div } from "motion/react-client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

interface ProblemSectionProps {
  problemBrief: string;
  content: string;
  keyInsight: string;
}

export default function ProblemSection({
  problemBrief,
  keyInsight,
  content,
}: ProblemSectionProps) {

  const pathname = usePathname();
  const shouldShowImage = pathname.includes("indusind-bank-study");
  return (
    <section className="w-full max-w-6xl mx-auto pb-20 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-[100px]">
      {/* LEFT COLUMN — SECTION LABEL */}
      <div className="pr-0 md:pr-20">
        <h4 className="text-[#9CA3C7] tracking-widest font-semibold mb-2 text-[18px]">
          THE CORE PROBLEM
        </h4>
        <div className="w-full h-[2px] bg-[#A90D0D] mb-6" />
        <p className=" text-[#4F4D4D] leading-[130%] whitespace-pre-line">
          {problemBrief}
        </p>
      </div>
      {/* RIGHT CONTENT */}
      <div className="mt-15">
        {/* <h2 className="text-4xl font-bold text-[#1E1E1E] mb-6">{title}</h2> */}

        {/* <p className="text-[16px] text-[#4F4D4D] font-[700]">What we observed</p> */}

        <div
          className=" text-[#4F4D4D] leading-[140%] space-y-6 px-[10px] md:px-0"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {shouldShowImage && (
          <div>
          <Image 
            src={"/IBCoreProblemImage.svg"} 
            width={500} 
            height={500} 
            alt="IBimage"
            className="w-full mt-8"
          />
          <p className="text-[#4F4D4D] italic text-[12px] text-center">Funnel-Aligned Campaign Landing Experiences</p>
          </div>
        )}
        <div className="flex justify-start mt-[32px]">
          <div className="relative bg-[#178CFE] rounded-[8px] p-[32px] text-white max-w-[100%]">
            <div
              className="absolute bottom-[-8px] left-[24px] w-0 h-0
                 border-l-[10px] border-l-transparent
                 border-r-[10px] border-r-transparent
                 border-t-[10px] border-t-[#178CFE]"
            ></div>

            <h6 className="font-bold text-[18px]">Key Insight</h6>
            <p
              dangerouslySetInnerHTML={{ __html: keyInsight }}
              className="font-bold leading-[130%] mt-[16px]"
            ></p>
          </div>
        </div>
      </div>
    </section>
  );
}
