"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  if (!loading && window.location.hash) {
    const id = window.location.hash.replace("#", "");

    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}, [loading]);


  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* <AnimatePresence>{loading && <Loader />}</AnimatePresence> */}

      {!loading && (
        <div className="bg-[#1E1E1E] text-[#FFE2E2]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* <Navbar /> */}
            <Hero />
          </motion.div>

          <CaseStudies />
          <Contact />
        </div>
      )}
    </>
  );
}
