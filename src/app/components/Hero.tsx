'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center h-screen w-full lg:max-w-8xl mx-auto pt-0 md:pt-25 bg-noise-dark">
      {/* Left section */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-end md:justify-center pb-4 md:pb-30 px-5">
        <h1 className="text-[48px] font-normal text-[#FF0000]">Arushi Mathur</h1>
        <h2 className="text-6xl md:text-[128px] text-[#FFE2E2]">PRODUCT</h2>
      </div>

      {/* Center Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center rounded-xl p-0"
      >
        <img
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
  );
}
