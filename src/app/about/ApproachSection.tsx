
import AboutAccordion from "./AboutAccordion";
import { aboutAccordionData } from "@/data/aboutAccordion";

export default function ApproachSection({ targetRef }: { targetRef: any }) {

  return (
    <section className="flex flex-col lg:flex-row h-screen w-full mx-auto px-0 md:px-[90px] py-20">
      
      <div
        ref={targetRef}
        className="w-[30%] h-[478px] rounded-xl bg-transparent"
      />

      <div className="flex flex-col justify-start items-start px-5 w-[70%]">
        <h1 className="text-[40px] text-white">How I approach design</h1>
        <p className="text-[20px] text-white">Over time, my design practice has centered around three principles.</p>

        <AboutAccordion
        items={aboutAccordionData}

        containerClass="max-w-full pt-[22px]"
        itemClass="border-b border-gray-700"

        headerClass="py-8 text-lg font-semibold cursor-pointer"

        contentClass="pb-4 text-white text-[20px] leading-[120%]"

        defaultOpenIndex={0}
      />
      </div>
    </section>
  );
}