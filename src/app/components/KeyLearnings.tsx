"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export interface KeyItem {
  title: string;
  description: string;
}

export interface KeyLearningsData {
  heading: string;
  intro: string;
  keyItems: KeyItem[];
}

interface Props {
  data: KeyLearningsData;
}

export default function KeyLearnings({ data }: Props) {
  const { keyItems } = data;
  const pathname = usePathname();
  const IBPage = pathname.includes("indusind-bank-study");

  // Mobile click state
  const [flipped, setFlipped] = useState<boolean[]>(
    Array(keyItems.length).fill(false),
  );

  const toggleFlip = (index: number) => {
    if (IBPage) return;
    setFlipped((prev) => prev.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <section className="w-full max-w-6xl mx-auto pb-20 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-[50px]">
      <div className="pr-0 md:pr-20">
        <h4 className="text-[#9CA3C7] tracking-widest font-semibold mb-2 text-[18px] uppercase">
          Key Learnings
        </h4>
        <div className="w-full h-[2px] bg-[#A90D0D] mb-6" />

        {IBPage ? (
          <p className=" text-[#4F4D4D] leading-[130%]">
            This project pushed me to think beyond structure and deeply consider
            storytelling as a core aspect of UX. It highlighted how the way
            information is framed and sequenced can shape user perception as
            much as the content itself.
          </p>
        ) : (
          <p className=" text-[#4F4D4D] leading-[130%]">
            Beyond the metrics, this revamp shaped my perspective on scalable
            personalization, stakeholder negotiation, and designing within
            real-world constraints.
          </p>
        )}
      </div>

      <div>
        <div className="flex md:grid grid-cols-1 md:grid-cols-2 gap-[25px] flex-col items-center mt-[50px]">
          {keyItems.map((item, index) => (
            <div
              key={index}
              className="flip-card h-[230px] w-[280px] perspective cursor-pointer"
              onClick={() => toggleFlip(index)}
              data-flipped={!IBPage && flipped[index]}
              data-is-ib={IBPage}
            >
              <div className="flip-inner relative w-full h-full rounded-3xl transform-style-3d transition-transform duration-500 ease-in-out transform-gpu">
                {/* FRONT */}
                <div className="absolute inset-0 bg-[#1E1E1E] text-white p-6 rounded-3xl shadow-lg flex items-center justify-center backface-hidden">
                  <p className="text-[18px] leading-[115%]">{item.title}</p>
                </div>

                {/* BACK */}
                {!IBPage && (
                  <div className="absolute inset-0 bg-[#1E1E1E] text-white p-8 rounded-3xl shadow-lg flex items-center justify-center backface-hidden rotate-y-180">
                    <p className="text-[16px] leading-[120%]">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
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

        /* 1. Agar IBPage hai, toh cursor normal rakho aur interaction band kar do */
        .flip-card[data-is-ib="true"] {
          cursor: default !important;
          pointer-events: none; /* Isse hover aur click dono disable ho jayenge */
        }

        /* 2. Desktop hover: Sirf tabhi rotate karo jab IBPage NA HO */
        @media (hover: hover) {
          .flip-card[data-is-ib="false"]:hover .flip-inner {
            transform: rotateY(180deg);
          }
        }

        /* 3. Mobile click: Sirf tabhi rotate karo jab IBPage NA HO */
        @media (hover: none) {
          .flip-card[data-is-ib="false"][data-flipped="true"] .flip-inner {
            transform: rotateY(180deg);
          }
        }

        /* 4. Extra safety: Ensure IBPage cards never have transform applied */
        .flip-card[data-is-ib="true"] .flip-inner {
          transform: none !important;
        }
      `}</style>
    </section>
  );
}
