"use client";

export interface ImpactItem {
  title: string;
  description: string;
}

export interface ImpactSectionData {
  heading: string;
  intro: string;
  topItems: ImpactItem[];
}

interface Props {
  data: ImpactSectionData;
}

export default function ImpactSection({ data }: Props) {
  const { heading, intro, topItems } = data;

  return (
    <section className="w-full pb-20">
      <div className="grid grid-cols-12 gap-10">
        
        <div className="col-span-4"></div>

        {/* RIGHT COLUMN */}
        <div className="col-span-8 space-y-14">

          {/* Heading */}
          <h2 className="text-4xl font-bold text-[#1E1E1E]">
            {heading}
          </h2>

          {/* Intro paragraph */}
          <p
            className="text-[18px] text-[#1E1E1E] leading-[170%] max-w-3xl"
            dangerouslySetInnerHTML={{ __html: intro }}
          />

          {/* TOP GRID — 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {topItems.map((item, index) => (
    <div key={index} className="group perspective w-full h-64">
      <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
        {/* Front */}
        <div className="absolute w-full h-full bg-[#1E1E1E] text-white p-8 rounded-3xl shadow-lg flex items-center justify-center backface-hidden">
          <h3 className="text-xl font-semibold">{item.title}</h3>
        </div>
        {/* Back */}
        <div className="absolute w-full h-full bg-[#1E1E1E] text-white p-8 rounded-3xl shadow-lg flex items-center justify-center backface-hidden rotate-y-180">
          <p className="text-[16px] leading-[165%]">{item.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>

<style jsx>{`
  /* Tailwind custom utilities */
  @layer utilities {
    .perspective {
      perspective: 1000px;
    }
    .transform-style-3d {
      transform-style: preserve-3d;
    }
    .backface-hidden {
      backface-visibility: hidden;
    }
    .rotate-y-180 {
      transform: rotateY(180deg);
    }
  }
`}</style>

        </div>
      </div>
    </section>
  );
}
