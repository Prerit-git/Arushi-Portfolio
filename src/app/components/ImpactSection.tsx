"use client";

import { useState } from "react";

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
    <section className="w-full max-w-6xl mx-auto pb-20 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-[100px]">
      <div className="pr-0 md:pr-20">
        <h4 className="text-[#9CA3C7] tracking-widest font-semibold mb-2 text-[18px]">
         STRATEGY
        </h4>
        <div className="w-full h-[2px] bg-[#A90D0D] mb-6" />
        <p className="text-[14px] text-[#4F4D4D] leading-[130%] whitespace-pre-line">
          I focused on reducing cognitive load at every decision point by:
        </p>
      </div>
      <div className="gap-10">
        <div className="hidden md:block col-span-4"></div>

        {/* RIGHT COLUMN */}
        <div className="col-span-10 md:col-span-8 space-y-14 mt-15">
          {/* Heading */}
          {/* <h2 className="text-4xl font-bold text-[#1E1E1E]">
            {heading}
          </h2> */}

          {/* Intro */}
          {/* <p
            className="text-[18px] text-[#1E1E1E] leading-[170%] w-full md:max-w-3xl"
            dangerouslySetInnerHTML={{ __html: intro }}
          /> */}

          {/* FLIP CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
            {topItems.map((item, index) => {
              const [flipped, setFlipped] = useState(false);

              return (
                <div
                  key={index}
                  className="perspective h-[230px] w-[250px] cursor-pointer"
                  onClick={() => setFlipped(!flipped)}
                >
                  <div
                    className={`
                      relative w-full h-full
                      transition-transform duration-500
                      transform-style-3d
                      ${flipped ? "rotate-y-180" : ""}
                      md:hover:rotate-y-180
                    `}
                  >
                    {/* FRONT */}
                    <div className="absolute w-full h-full bg-[#1E1E1E] text-white p-8 rounded-3xl shadow-lg flex items-center justify-center backface-hidden">
                      <p className="text-center text-[18px] leading-[130%]">
                        {item.title}
                      </p>
                    </div>

                    {/* BACK */}
                    <div className="absolute w-full h-full bg-[#1E1E1E] text-white p-8 rounded-3xl shadow-lg flex items-center justify-center backface-hidden rotate-y-180">
                      <p className="text-[16px] leading-[165%] text-center">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Utilities */}
          <style jsx>{`
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
