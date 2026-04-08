import Image from "next/image";

const IBKeyDecisions = () => {
  return (
    <section className="w-full max-w-6xl mx-auto pb-20 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-[100px]">
      <div className="pr-0 md:pr-20">
        <h4 className="text-[#9CA3C7] tracking-widest font-semibold mb-2 text-[18px]">
           KEY DECISIONS
        </h4>
        <div className="w-full h-[2px] bg-[#A90D0D] mb-6" />
        <ul className=" text-[#4F4D4D] space-y-4">
          <li>
            <span className="font-bold">Decision 1:</span> Shift from static pages to story-driven exploration
          </li>
          <li>
            <span className="font-bold">Decision 2:</span> Structure complex CSR data into a navigable information system
          </li>
          <li>
            <span className="font-bold">Decision 3:</span> Simplify deeply layered information without losing depth
          </li>
        </ul>
      </div>

      <div className="gap-10">
        <div className="hidden md:block col-span-4"></div>

        {/* RIGHT COLUMN */}
        <div className="col-span-10 md:col-span-8 mt-18 flex flex-col gap-[16px]">
          <p className="text-[16px] font-bold">
            Decision 1: Structure complex CSR data into a navigable information system
          </p>
          <p className=" text-[#9CA3C7] font-bold">PROBLEM</p>
          <p className=" text-[#4F4D4D]">
            CSR initiatives spanned multiple themes, regions, and programs with no unified structure.
          </p>
          <p className=" text-[#9CA3C7] font-bold">WHAT I DID</p>
          <p className="text-[#4F4D4D]">Defined a clear IA framework that allowed users to explore CSR work through:</p>
          <ul className="list-disc list-inside">
            <li className="text-[#4F4D4D] ">Themes (education, environment, etc.)</li>
            <li className="text-[#4F4D4D] ">Initiatives</li>
            <li className="text-[#4F4D4D] ">Impact layers</li>
          </ul>
          <p className=" text-[#9CA3C7] font-bold">OUTCOME</p>
          <p className="text-[#4F4D4D]">Created a system where users could both browse broadly and dive deep, depending on their intent.</p>
          {/* <video
            src="/chsbcDecision1.mp4"
            className="h-[304px] w-full mt-[16px] border border-gray-200 rounded-lg"
            autoPlay
            loop
            muted
            playsInline
            controls
          /> */}
          <Image src={"/IBImage.svg"} alt="ibImage" width={500} height={500}/>
          <p className="text-[#4F4D4D] text-[12px] text-center italic">Funnel-Aligned Campaign Landing Experiences</p>
        </div>

        <div className="col-span-10 md:col-span-8 mt-18 flex flex-col gap-[16px]">
          <p className="text-[16px] font-bold">
            Decision 2: Shift from static pages to story-driven exploration
          </p>
          <p className=" text-[#9CA3C7] font-bold">PROBLEM</p>
          <p className=" text-[#4F4D4D]">
            Content existed, but lacked narrative and engagement.          
            </p>
          <p className=" text-[#9CA3C7] font-bold">WHAT I DID</p>
          <p className="text-[#4F4D4D]">Reframed the website as a storytelling platform, where each initiative:</p>
          <ul className="list-disc list-inside">
            <li className="text-[#4F4D4D] ">Communicates purpose, scale, and outcomes</li>
            <li className="text-[#4F4D4D] ">Uses structured content blocks for clarity</li>
            <li className="text-[#4F4D4D] ">Builds a cohesive narrative across the site</li>
          </ul>
          <p className=" text-[#9CA3C7] font-bold">OUTCOME</p>
          <p className="text-[#4F4D4D]">Improved how users perceive impact, not just access information.</p>
          <video
            src="/chsbcDecision2.mp4"
            className="h-[304px] w-full mt-[16px] border border-gray-200 rounded-lg"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
          <p className="text-[#4F4D4D] text-[12px] text-center italic">Structural IA Changes Reflected in Global Navigation</p>
        </div>

        <div className="col-span-10 md:col-span-8 mt-18 flex flex-col gap-[16px]">
          <p className="text-[16px] font-bold">
            Decision 3: Simplify deeply layered information without losing depth
          </p>
          <p className=" text-[#9CA3C7] font-bold">PROBLEM</p>
          <p className=" text-[#4F4D4D]">
            Information was highly detailed and interconnected, risking overwhelm.
          </p>
          <p className="text-[14px] text-[#9CA3C7] font-bold">WHAT I DID</p>
          <p className="text-[#4F4D4D]">Introduced layered information hierarchy:</p>
          <ul className="list-disc list-inside">
            <li className="text-[#4F4D4D] ">High-level summaries for quick understanding</li>
            <li className="text-[#4F4D4D] ">Expandable sections for deeper exploration</li>
          </ul>
          <p className=" text-[#9CA3C7] font-bold">OUTCOME</p>
          <p className="text-[#4F4D4D]">Balanced depth with readability, enabling both quick scans and detailed exploration.</p>
         
          <video
            src="/chsbcDecision3.mp4"
            className="h-[304px] w-full mt-[16px] border border-gray-200 rounded-lg"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
          <p className="text-[#4F4D4D] text-[12px] text-center italic">Reducing Cognitive Load in High-Stakes Financial Decision & Lead Capture Journeys</p>
        </div>
      </div>
    </section>
  );
};

export default IBKeyDecisions;
