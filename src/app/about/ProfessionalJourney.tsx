"use client";

const icons = [
  "/premirePro.svg",
  "/adobePhotoshop.svg",
  "/notion.svg",
  "/icon1.svg",
  "/icon2.svg",
  "/icon3.svg",
  "/icon4.svg",
  "/icon5.svg",
  "/icon6.svg",
  "/icon7.svg",
  "/icon8.svg",
  "/icon9.svg",
];

export default function ProfessionalJourney() {
  return (
    <div className="w-full max-w-6xl mx-auto bg-[#25293F] text-white border-2 border-white rounded-2xl px-6 md:px-[54px] flex flex-col md:flex-row items-center justify-between gap-[54px] my-10 md:my-20">
      
      {/* 🔹 Slider */}
      <div className="order-1 md:order-2 md:w-[120px] w-full flex justify-center overflow-hidden">
        
        {/* ✅ Desktop → Vertical Slider */}
        <div className="hidden md:block h-[746px] w-[80px] overflow-hidden relative slider-mask-vertical">
          <div className="animate-verticalLoop flex flex-col items-center">
            {[...icons, ...icons].map((icon, i) => (
              <img
                key={i}
                src={icon}
                alt="tool"
                className="w-20 h-20 my-8 transition"
              />
            ))}
          </div>
        </div>

        {/* ✅ Mobile → Horizontal Slider */}
        <div className="md:hidden w-full overflow-hidden slider-mask-horizontal pt-5">
          <div className="animate-horizontalLoop flex items-center">
            {[...icons, ...icons, ...icons, ...icons].map((icon, i) => (
              <img
                key={i}
                src={icon}
                alt="tool"
                className="w-12 h-12 mx-4 opacity-80 hover:opacity-100 transition"
              />
            ))}
          </div>
        </div>
      </div>

      {/* 🔹 Content */}
      <div className="order-2 md:order-1 w-full md:w-[75%] space-y-8 pb-5 md:pb-0">
        <h2 className="text-[35px] md:text-[40px] font-normal text-[#FFE2E2]">
          Professional Journey
        </h2>

        <div>
          <p className="font-bold text-[20px]">
            Retail Experience → Foundations in User Behavior
          </p>
          <p className="text-[20px] italic">(2018 - 2021)</p>
          <p className="text-[20px] leading-tight">
            Led in-store customer experience and team operations, developing a
            strong understanding of user behavior, empathy, and real-world
            decision-making.
          </p>
        </div>

        <div>
          <p className="font-bold text-[20px]">
            UX Design → Research-Driven Digital Experiences
          </p>
          <p className="text-[20px] italic">(2022 – 2023)</p>
          <p className="text-[20px] leading-tight">
            At Utopiic designed products across eCommerce, EdTech, and B2B platforms at Utopiic Innovations. Focused on onboarding, dashboards, and usability improvements driven by research and iteration.
          </p>
        </div>

        <div>
          <p className="font-bold text-[20px]">
            Product Design → Systems & Scale
          </p>
          <p className="text-[20px] italic">(2023 – 2025)</p>
          <p className="text-[20px] leading-tight">
           At Axeno Consulting, designed complex enterprise products (BFSI, Automotive, FMCG).
          </p>
          <p className="text-[20px] leading-tight">Worked end-to-end across research, problem framing, scalable design systems, and high-fidelity interfaces, while collaborating closely with cross-functional teams and contributing to RFP-driven business growth.</p>
        </div>
      </div>
    </div>
  );
}