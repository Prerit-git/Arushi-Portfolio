const DecisionandOutcome = () => {
  return (
    <section className="w-full max-w-6xl mx-auto pb-20 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-[100px]">
      <div className="pr-0 md:pr-20">
        <h4 className="text-[#9CA3C7] tracking-widest font-semibold mb-2 text-[18px]">
          THE CORE KEY DECISIONS AND <br />OUTCOME
        </h4>
        <div className="w-full h-[2px] bg-[#A90D0D] mb-6" />
        <ul className=" text-[#4F4D4D] space-y-4">
          <li>
            <span className="font-bold">Decision 1:</span> Flatten the information architecture
          </li>
          <li>
            <span className="font-bold">Decision 2:</span> Personalize campaign landing pages by funnel stage
          </li>
          <li>
            <span className="font-bold">Decision 3:</span> Rethink calculators & product pages as decision tools
          </li>
        </ul>
      </div>

      <div className="gap-10">
        <div className="hidden md:block col-span-4"></div>

        {/* RIGHT COLUMN */}
        <div className="col-span-10 md:col-span-8 mt-18 flex flex-col gap-[16px]">
          <p className="text-[16px] font-bold">
            Decision 1: Flatten the information architecture
          </p>
          <p className=" text-[#9CA3C7] font-bold">PROBLEM</p>
          <p className=" text-[#4F4D4D]">
            Users couldn’t predict where content lived. Navigation had too many levels and unclear labels.
          </p>
          <p className=" text-[#9CA3C7] font-bold">WHAT I DID</p>
          <ul className="list-disc list-inside">
            <li className="text-[#4F4D4D] ">Designed a flatter, broader IA</li>
            <li className="text-[#4F4D4D] ">Reduced dependency on deep L2/L3 menus</li>
            <li className="text-[#4F4D4D] ">Simplified terminology with SEO + business teams</li>
            <li className="text-[#4F4D4D] ">Rebuilt the footer as a functional navigation tool</li>
            <li className="text-[#4F4D4D] ">Designed IA mobile-first</li>
          </ul>
          <p className=" text-[#9CA3C7] font-bold">OUTCOME</p>
          <ul className="list-disc list-inside">
            <li className="text-[#4F4D4D] ">15% reduction in homepage drop-off within 3 months</li>
            <li className="text-[#4F4D4D] ">Faster task completion and higher navigation confidence</li>
            <li className="text-[#4F4D4D] ">Significant usability improvement for elderly users and agents</li>
          </ul>
          <video
            src="/chsbcDecision1.mp4"
            className="h-[304px] w-full mt-[16px] border border-gray-200 rounded-lg"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
          <p className="text-[#4F4D4D] text-[12px] text-center italic">Structural IA changes reflected in global navigation</p>
        </div>

        <div className="col-span-10 md:col-span-8 mt-18 flex flex-col gap-[16px]">
          <p className="text-[16px] font-bold">
            Decision 2: Personalize campaign landing pages by funnel stage
          </p>
          <p className=" text-[#9CA3C7] font-bold">PROBLEM</p>
          <p className=" text-[#4F4D4D]">
            Every user saw the same landing page and the same long form — regardless of intent.
          </p>
          <p className=" text-[#9CA3C7] font-bold">WHAT I DID</p>
          <ul className="list-disc list-inside">
            <li className="text-[#4F4D4D] ">Audited the entire campaign funnel end-to-end</li>
            <li className="text-[#4F4D4D] ">Defined Top / Mid / Bottom funnel user journeys</li>
            <li className="text-[#4F4D4D] ">Designed templated but personalized landing pages</li>
            <li className="text-[#4F4D4D] ">Introduced conversational, assisted forms for early-stage users</li>
            <li className="text-[#4F4D4D] ">Simplified forms for high-intent users</li>
            <li className="text-[#4F4D4D] ">Ensured strong message match from ad → page → CTA</li>
          </ul>
          <p className=" text-[#9CA3C7] font-bold">OUTCOME</p>
          <ul className="list-disc list-inside">
            <li className="text-[#4F4D4D] ">Immediate improvement in lead capture (metrics confidential)</li>
            <li className="text-[#4F4D4D] ">Higher quality, better-qualified leads for agents</li>
            <li className="text-[#4F4D4D] ">Reduced form abandonment, especially on mobile</li>
          </ul>
          <video
            src="/chsbcDecision2.mp4"
            className="h-[304px] w-full mt-[16px] border border-gray-200 rounded-lg"
            autoPlay
            loop
            muted
            playsInline
            controls
          />
          <p className="text-[#4F4D4D] text-[12px] text-center italic">Funnel-aligned campaign landing experiences</p>
        </div>

        <div className="col-span-10 md:col-span-8 mt-18 flex flex-col gap-[16px]">
          <p className="text-[16px] font-bold">
            Decision 3: Rethink calculators & product pages as decision tools
          </p>
          <p className=" text-[#9CA3C7] font-bold">PROBLEM</p>
          <p className=" text-[#4F4D4D]">
            Calculators felt clinical. Product pages were long, dense, and overwhelming.
          </p>
          <p className="text-[14px] text-[#9CA3C7] font-bold">WHAT I DID</p>
          <ul className="list-disc list-inside">
            <li className="text-[#4F4D4D] ">Reimagined calculators as step-by-step conversations</li>
            <li className="text-[#4F4D4D] ">Limited interactions to ≤3 clicks to results</li>
            <li className="text-[#4F4D4D] ">Used visual outputs instead of raw numbers</li>
            <li className="text-[#4F4D4D] ">Introduced sticky index navigation on long product pages</li>
            <li className="text-[#4F4D4D] ">Converted dense content into scannable visual blocks</li>
          </ul>
          <p className=" text-[#9CA3C7] font-bold">OUTCOME</p>
          <ul className="list-disc list-inside">
            <li className="text-[#4F4D4D] ">5% reduction in homepage-level drop-offs</li>
            <li className="text-[#4F4D4D] ">Increased calculator engagement and product exploration</li>
            <li className="text-[#4F4D4D] ">Agents could use calculators live with customers</li>
            <li className="text-[#4F4D4D] ">Elderly users found results easier to understand and trust</li>
          </ul>
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

export default DecisionandOutcome;
