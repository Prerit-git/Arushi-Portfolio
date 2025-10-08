"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    title: "Case Study 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate? Reprehenderit, harum!",
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  },
  {
    title: "Case Study 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate? Reprehenderit, harum!",
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  },
  {
    title: "Case Study 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate? Reprehenderit, harum!",
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  },
  {
    title: "Case Study 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate? Reprehenderit, harum!",
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=100",
  },
];

const StackedCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || cardsRef.current.length === 0) return;

    const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];

    // Set CSS variables for cards count and card height dynamically
    containerRef.current.style.setProperty("--cards-count", `${cards.length}`);
    containerRef.current.style.setProperty(
      "--card-height",
      `${cards[0].offsetHeight}px`
    );

    cards.forEach((card, index) => {
      const cardInner = card.querySelector(".card-inner") as HTMLElement;
      if (!cardInner) return;

      // Padding top offset for stacking effect
      const offsetTop = 20 + index * 20;
      card.style.paddingTop = `${offsetTop}px`;

      if (index === cards.length - 1) return; // Skip last card

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
      {cardsData.map(({ title, description, image }, i) => (
        <div
          key={i}
          className="card sticky top-10 md:top-35"
          ref={(el) => {
            cardsRef.current[i] = el;
          }}
          data-index={i}
        >
          <div className="card-inner will-change-transform bg-white rounded-4xl flex overflow-hidden transform-origin-top">
            <div className="card-image-container flex-shrink-0 w-2/5">
              <img
                src={image}
                alt={`Card image ${i + 1}`}
                className="card-image object-cover w-full h-full aspect-square"
              />
            </div>
            <div className="card-content p-10 flex flex-col">
              <h1 className="card-title text-4xl font-semibold mb-4 text-[#16263a]">
                {title}
              </h1>
              <p className="card-description text-lg text-[#16263a] leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Extra space below cards to allow scrolling */}
      <div style={{ height: "90vh" }} />
    </div>
  );
};

export default StackedCards;
