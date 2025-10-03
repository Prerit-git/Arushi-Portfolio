"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loader animation */}
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {/* Main content after loader */}
      {!loading && (
        <div className="bg-[#1E1E1E] text-[#FFE2E2]">
          {/* Only animate content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Navbar />
            <Hero />
          </motion.div>

          {/* Other static components */}
          <About />
          <CaseStudies />
          <Contact />
        </div>
      )}
    </>
  );
}
