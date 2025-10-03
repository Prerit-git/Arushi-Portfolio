"use client";

import React, { useState, SVGProps } from "react";
import Image from "next/image";
import { motion, AnimatePresence, MotionProps } from "framer-motion";
import Link from "next/link";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About me", href: "#about" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "Contact", href: "#contact" },
];

type MotionPathProps = MotionProps & SVGProps<SVGPathElement>;

// --- Hamburger Path ---
const Path = (props: MotionPathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => (
  <button
    onClick={toggle}
    className="relative z-50 p-3 rounded-full bg-black/60 backdrop-blur-md focus:outline-none transition duration-300"
    aria-label="Toggle Navigation"
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 17 L 17 3" },
        }}
        animate={isOpen ? "open" : "closed"}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        animate={isOpen ? "open" : "closed"}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 3 L 17 17" },
        }}
        animate={isOpen ? "open" : "closed"}
      />
    </svg>
  </button>
);

const MobileNav = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => {
  const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring' as const,
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(20px at calc(100% - 40px) 40px)',
    transition: {
      delay: 0.5,
      type: 'spring' as const,
      stiffness: 400,
      damping: 40,
    },
  },
};


  const menuVariants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={sidebar}
          className="fixed h-screen inset-0 z-40 lg:hidden bg-[#FFE2E2] flex items-center justify-center p-8"
        >
          <motion.ul
            variants={menuVariants}
            className="flex flex-col space-y-8 text-center"
          >
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  onClick={toggle}
                  className="text-4xl font-extrabold text-[#1e1e1e] hover:text-teal-400 transition-colors duration-300 block p-2"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const logoUrl = "/ArushiLogo.svg";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 p-4 bg-transparent backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logoUrl}
              alt="Logo"
              width={150}
              height={40}
              className="h-15 lg:h-20 w-auto"
              priority
            />
          </Link>

          {/* <span className="hidden sm:inline-block text-sm font-semibold text-lime-400 lg:hidden">
            Online
          </span> */}
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="flex space-x-8 p-3 bg-[#333333] backdrop-blur-sm rounded-2xl shadow-2xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white text-lg font-medium hover:text-[#FF0000] transition-colors duration-200 px-3 py-1 rounded-full"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: Hamburger on mobile */}
        <div className="lg:hidden">
          <MenuToggle toggle={toggleOpen} isOpen={isOpen} />
        </div>

        {/* Spacer for desktop */}
        <div className="hidden lg:block w-10 h-10" />
      </div>

      {/* Mobile nav overlay */}
      <MobileNav toggle={toggleOpen} isOpen={isOpen} />
    </motion.nav>
  );
};

export default Navbar;
