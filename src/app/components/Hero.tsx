'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import About from './About';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const nextSectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    if (imageRef.current && sectionRef.current && nextSectionRef.current) {
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",                             
          end: () => `+=${nextSectionRef.current!.offsetHeight * 0.8}`, 
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress; 
            const angle = progress * 180;

            if (angle > 90) {
              imageRef.current!.src = "/heroImage.jpg";
            } else {
              imageRef.current!.src = "/hero-illustration.svg";
            }
          },
        },
        y: 700,         
        x: 500,        
        rotateY: 180,   
        ease: "none",
      });
    }
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        ref={sectionRef}
        className="flex flex-col lg:flex-row justify-center items-center h-screen w-full mx-auto px-0 md:px-[90px] pt-0 md:pt-20"
      >
        {/* Left section */}
        <div className="flex-1 flex flex-col items-center md:items-end justify-end md:justify-center pb-4 md:pb-30 px-5">
          <h1 className="md:self-start text-[48px] font-normal text-[#FF0000]">Arushi Mathur</h1>
          <h2 className="text-6xl md:text-[128px] text-[#FFE2E2]">PRODUCT</h2>
        </div>

        {/* Center Image */}
        <motion.div className="flex justify-center items-center rounded-xl p-0">
          <img
            ref={imageRef}
            src="/hero-illustration.svg"
            alt="Portrait"
            className="h-[280px] md:h-[468px] w-auto md:w-[364px] object-cover rounded-xl"
          />
        </motion.div>

        {/* Right section */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-start md:justify-center px-10 md:px-5 pt-2 md:pt-0">
          <h2 className="text-6xl md:text-[128px] leading-tight">DESIGNER</h2>
          <p className="mt-4 text-[18px] text-white leading-[110%] text-center md:text-left">
            Hi, I’m a designer dedicated to crafting beautiful things and experiences that actually help people.
          </p>
        </div>
      </section>

      <section
        ref={nextSectionRef}
      >
        <About/>
      </section>
    </>
  );
}
