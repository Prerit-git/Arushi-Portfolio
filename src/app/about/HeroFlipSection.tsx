"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdOutlineFileDownload } from "react-icons/md";
import ApproachSection from "./ApproachSection";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function HeroFlipSection() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const nextSectionRef = useRef<HTMLElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isLayoutReady, setIsLayoutReady] = useState(false);

  useEffect(() => {
    if (!isLayoutReady) return;
    if (window.innerWidth < 768) return;

    const image = imageRef.current;
    const section = sectionRef.current;
    const nextSection = nextSectionRef.current;
    const target = targetRef.current;

    if (!image || !section || !nextSection || !target) return;

    const ctx = gsap.context(() => {
      // 🔥 force scroll to top before measuring
      window.scrollTo(0, 0);

      // wait for layout to settle
      setTimeout(() => {
        const imageRect = image.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();

        // 🔥 FIX: correct delta calculation
        const deltaX = targetRect.left - imageRect.left;
        const deltaY = targetRect.top - imageRect.top;

        gsap.to(image, {
          x: deltaX,
          y: deltaY,
          rotateY: 180,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${nextSection.offsetHeight}`,
            scrub: true,

            onUpdate: (self) => {
              const angle = self.progress * 180;

              if (angle > 90) {
                image.src = "/2ndImageHomePage.png";
              } else {
                image.src = "/Homepage banner image.svg";
              }
            },
          },
        });

        ScrollTrigger.refresh();
      }, 100); 
    });

    return () => ctx.revert();
  }, [isLayoutReady]);

  return (
    <>
      {/* <section className="w-full fixed top-0 p-[10px] md:p-[24px] flex flex-col justify-center items-center bg-[#A90D0D]/80 z-99">
        <p className="text-white text-[18px] md:text-[24px] text-center">
          Under construction, because thoughtful design deserves time. For
          projects or collaborations,
        </p>
        <p className="text-white text-[18px] md:text-[24px] text-center">
          contact me at <span className='text-[#FFD2D2] font-semibold'><a href="mailto:arurajatmathur@gmail.com">arurajatmathur@gmail.com</a></span> or <span className='text-[#FFD2D2] font-semibold'><a href="tel:+917447604055">+917447604055</a></span>
        </p>
      </section> */}
      {/* HERO SECTION */}
      <section
        id=""
        ref={sectionRef}
        className="flex flex-col lg:flex-row justify-between items-center h-auto md:h-screen w-full mx-auto px-5 md:px-[90px] pt-20 md:pt-30 mb-5 md:mb-0"
      >
        {/* Left section */}
        <div className="flex-1 flex flex-col">
          <h1 className="md:self-start text-[35px] md:text-[40px] font-normal text-[#FFE2E2]">
            Hey! I'm Arushi Mathur,
          </h1>
          <h2 className="text-[26px] md:text-[32px] text-[#FFE2E2]">
            a ‘Product Designer’ who enjoys bringing clarity to complex systems.
          </h2>

          <p className="text-[#FFFFFF] my-[54px] w-full md:w-[80%] text-[20px]">
            Over the past 7+ years, I’ve worked across BFSI, eCommerce,
            Automotive, EdTech, and enterprise platforms, designing digital
            products that balance business goals, user needs, and technical
            constraints. <br />
            <br />
            I’m particularly drawn to messy, high-stakes problems, the kind
            where information is dense, decisions matter, and the smallest
            friction can change outcomes. <br />
            <br /> For me, good design isn’t just about aesthetics. <br />
            <br />
            It’s about structure, clarity, and helping people make better
            decisions.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative bottom-0 z-40 md:flex flex-col w-fit"
          >
            <div className="absolute -bottom-[5px] left-[6px] z-[-1] bg-red-800 w-[172px] h-[46px] rounded-[4px]" />

            <a href="/Arushi Mathur_Resume 2025.docx">
              <button className="z-10 bg-[#FFE2E2] text-black p-[10px] font-extrabold text-[16px] w-[172px] h-[46px] rounded-[4px] gap-2 flex items-center justify-center cursor-pointer">
                Download CV{" "}
                <span>
                  <MdOutlineFileDownload className="w-5 h-5" />
                </span>
              </button>
            </a>
          </motion.div>
          <Image src={"/Homepage banner image.svg"} width={373} height={490} alt="homepage banner image" className="flex md:hidden pt-10"/>
        </div>

        {/* Center Image */}
        <motion.div className="hidden md:flex justify-center items-center rounded-xl p-0 relative z-2">
          <img
            ref={imageRef}
            src="/Homepage banner image.svg"
            alt="Portrait"
            className="h-[280px] md:h-[468px] w-auto md:w-[364px] object-cover rounded-xl"
          />
        </motion.div>

        {/* Right section
        <div className="flex-1 flex flex-col items-center md:items-start justify-start md:justify-center px-10 md:px-5 pt-2 md:pt-0">
          <h2 className="text-6xl md:text-[128px] leading-tight">DESIGNER</h2>
          <p className="mt-4 text-[18px] text-white leading-[110%] text-center md:text-left">
            Designing with empathy. Building with intention. Delivering with impact.
          </p>
        </div> */}
      </section>

      <section ref={nextSectionRef}>
        <ApproachSection targetRef={targetRef} onReady={() => setIsLayoutReady(true)}/>
      </section>
    </>
  );
}
