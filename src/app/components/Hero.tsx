'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center h-screen w-full lg:max-w-7xl mx-auto pt-0 md:pt-20">
      {/* Left section */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-end md:justify-center px-5">
        <h1 className="text-2xl font-medium">ARUSHI MATHUR</h1>
        <h2 className="text-6xl md:text-8xl font-bold leading-tight">PRODUCT</h2>
      </div>

      {/* Center Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center rounded-xl p-0"
      >
        <img
          src="/heroImage.jpg"
          alt="Portrait"
          className="h-[300px] md:h-[450px] w-[200px] md:w-[300px] object-cover rounded-xl shadow-xl"
        />
      </motion.div>

      {/* Right section */}
      <div className="flex-1 flex flex-col items-center md:items-start justify-start md:justify-center px-10 md:px-5 pt-0 md:pt-25">
        <h2 className="text-6xl md:text-8xl font-bold leading-tight">DESIGNER</h2>
        <p className="mt-4 text-lg text-gray-300 text-center">
          Blending strategy and design to create impact,
          with <span className="font-bold text-white">8 years</span> of UI/UX experience
        </p>
      </div>
    </section>
  );
}
