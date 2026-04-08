"use client";

import { div } from "motion/react-client";
import { usePathname } from "next/navigation";

interface FooterImpactSectionProps {
  impactBrief: string;
  content: string;
}

export default function FooterImpactSection({
  impactBrief,
  content,
}: FooterImpactSectionProps) {
  const pathname = usePathname();
  const IBPage = pathname.includes("indusind-bank-study");
  return (
    <section className="w-full max-w-6xl mx-auto pb-20 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-[100px]">
      {/* LEFT COLUMN — SECTION LABEL */}
      <div className="pr-0 md:pr-20">
        <h4 className="text-[#9CA3C7] tracking-widest font-semibold mb-2 text-[18px]">
          IMPACT
        </h4>
        <div className="w-full h-[2px] bg-[#A90D0D] mb-6" />
        <p className=" text-[#4F4D4D] leading-[130%] whitespace-pre-line">
          {impactBrief}
        </p>
      </div>
      {/* RIGHT CONTENT */}
      <div className="mt-15">
        {/* <h2 className="text-4xl font-bold text-[#1E1E1E] mb-6">{title}</h2> */}

        <div
          className=" text-[#4F4D4D] leading-[140%] space-y-6 px-[10px] md:px-0"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        {IBPage && (
          <div>
            <h4 className="text-[#9CA3C7] font-semibold mb-2 text-[18px] mt-8">
              NEXT STEPS
            </h4>
            <p className="text-[#4F4D4D] leading-[120%]">
              The design has been approved and signed off, with development
              currently pending due to internal approvals. Once initiated, the
              focus will shift to implementation and post-launch optimization.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
