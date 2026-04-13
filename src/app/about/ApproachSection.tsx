
import { useIsMobile } from "@/lib/useIsMobile";
import AboutAccordion from "./AboutAccordion";
import { aboutAccordionData } from "@/data/aboutAccordion";
import { useEffect } from "react";

export default function ApproachSection({ targetRef, onReady  }: { targetRef: any, onReady:any }) {
  const isMobile = useIsMobile();
  useEffect(() => {
    if (isMobile !== null) {
      onReady?.();
    }
  }, [isMobile]);

  if (isMobile === null) return null;
  return (
    <section className="flex flex-col lg:flex-row h-screen w-full mx-auto px-0 md:px-[90px] py-30">
      
      <div
        ref={targetRef}
        className="w-[30%] h-[478px] rounded-xl bg-transparent"
      />

      <div className="flex flex-col justify-start items-start px-5 w-full md:w-[70%]">
        <h1 className="text-[35px] md:text-[40px] text-white">How I approach design</h1>
        <p className="text-[16px] md:text-[20px] text-white">Over time, my design practice has centered around three principles.</p>

        <AboutAccordion
        items={aboutAccordionData}

        containerClass="max-w-full pt-0 md:pt-[22px]"
        itemClass="border-b border-gray-700"

        headerClass="py-6 md:py-8 text-lg font-semibold cursor-pointer"

        contentClass="pb-4 text-white text-[16px] md:text-[20px] leading-[120%]"

        defaultOpenIndex={isMobile ? 0 : null}
      />
      </div>
    </section>
  );
}