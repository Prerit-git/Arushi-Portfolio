"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    tag: "2024",
    title: "Opendoor/Mainstay • BLOX design system",
    description:
      "Developed the company-wide design system for Mainstay, Opendoor's enterprise branch, including typography, iconography, color systems, and design components and patterns.",
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
    logo: "CHL_Logo.svg"
  },
  {
    tag: "2025",
    title: "Opendoor/Mainstay • BLOX design system",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate? Reprehenderit, harum!",
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
    logo: "CHL_Logo.svg"
  },
  {
    tag: "2025",
    title: "Opendoor/Mainstay • BLOX design system",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate? Reprehenderit, harum!",
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
    logo: "CHL_Logo.svg"
  },
  {
    tag: "2025",
    title: "Opendoor/Mainstay • BLOX design system",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate? Reprehenderit, harum!",
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
    logo: "CHL_Logo.svg"
  },
];

const StackedCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || cardsRef.current.length === 0) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    containerRef.current.style.setProperty("--cards-count", `${cards.length}`);
    containerRef.current.style.setProperty(
      "--card-height",
      `${cards[0].offsetHeight}px`
    );

    cards.forEach((card, index) => {
      const cardInner = card.querySelector(".card-inner") as HTMLElement;
      if (!cardInner) return;

      const offsetTop = 20 + index * 20;
      card.style.paddingTop = `${offsetTop}px`;

      if (index === cards.length - 1) return;

      const toScale = 1 - (cards.length - 1 - index) * 0.1;
      const nextCard = cards[index + 1];

      ScrollTrigger.create({
        trigger: nextCard,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;

          cardInner.style.transform = `scale(${1 + (toScale - 1) * progress})`;
          cardInner.style.filter = `brightness(${1 - 0.4 * progress})`;
        },
      });
    });

    // Cleanup ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="max-w-8xl mx-auto grid"
      style={
        {
          // These will be overridden dynamically in useEffect
          "--cards-count": cardsData.length,
          "--card-height": "500px",
        } as React.CSSProperties
      }
    >
      {cardsData.map(({ tag, title, description, image, logo }, i) => (
        <div
          key={i}
          className="card sticky top-10 md:top-35"
          ref={(el) => {
            cardsRef.current[i] = el;
          }}
          data-index={i}
        >
          <div className="card-inner will-change-transform bg-white rounded-[16px] flex flex-col md:flex-row overflow-hidden transform-origin-top px-5 md:px-15 py-6 md:py-18 gap-2 shadow-lg h-auto md:h-[520px]">
            <div className="flex-1 flex flex-col gap-[8px] justify-between">
              <div>
              <Image src={logo} alt="logo" width={135} height={40}/>
              </div>
              <div>
              <div className="text-[#9A211F] font-bold bg-[#fce8e8] p-[10px] rounded w-fit mb-0 md:mb-3">
                <h6 className="text-[14px] md:text-[18px]">{tag}</h6>
              </div>

              <h1 className="text-[20px] md:text-[24px] font-semibold text-[#16263a] mb-4 leading-[110%]">
                {title.split("•")[0].trim()}{" "}
                <span className="text-[#9A211F]">
                  • {title.split("•")[1]?.trim()}
                </span>
              </h1>

              <p className="text-[#1E1E1E] text-[14px] mb-4 md:mb-15 pr-0 md:pr-8 leading-[130%]">
                {description}
              </p>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95, y: 2 }}
                className="flex items-center rounded-xl p-0 relative mb-2 md:mb-0"
              >
                <motion.button className="static md:absolute -bottom-4 z-41 bg-[#FFE2E2] text-black p-[2px] md:p-[10px] font-bold md:font-extrabold text-[12px] md:text-[16px] w-[130px] md:w-[172px] h-[40px] md:h-[46px] rounded-[4px] md:flex items-center justify-center cursor-pointer">
                  View Case Study
                </motion.button>
                <motion.div className="absolute -bottom-2 md:-bottom-6 left-2 z-40 bg-red-800 text-black p-[2px] md:p-[10px] font-bold md:font-extrabold text-[12px] md:text-[16px] w-[130px] md:w-[172px] h-[40px] md:h-[46px] rounded-[4px] md:flex items-center justify-center cursor-pointer"></motion.div>
              </motion.div>

              </div>
            </div>

            {/* Right image */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img
                src={image}
                alt={`Card image ${i + 1}`}
                className="object-contain w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      ))}

      <div style={{ height: "90vh" }} />
    </div>
  );
};

export default StackedCards;
