"use client";

import React, { useState, useEffect, SVGProps } from "react";
import Image from "next/image";
import { motion, AnimatePresence, MotionProps } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About me", href: "/#about" },
  { name: "Case Studies", href: "/#case-studies" },
  { name: "Contact", href: "/#contact" },
];

type MotionPathProps = MotionProps & SVGProps<SVGPathElement>;

const Path = ({
  isCaseStudyPage,
  ...props
}: MotionPathProps & { isCaseStudyPage: boolean }) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={isCaseStudyPage ? "#ffffff" : "white"}
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({
  toggle,
  isOpen,
  isCaseStudyPage,
}: {
  toggle: () => void;
  isOpen: boolean;
  isCaseStudyPage: boolean;
}) => (
  <button
    onClick={toggle}
    className="relative z-61 p-3 rounded-full bg-[#333333] backdrop-blur-md focus:outline-none transition duration-300"
    aria-label="Toggle Navigation"
  >
    <svg width="24" height="24" viewBox="0 0 24 24">
      <Path
        isCaseStudyPage={isCaseStudyPage}
        variants={{
          closed: { d: "M 3 6 L 21 6" },
          open: { d: "M 6 6 L 18 18" },
        }}
        animate={isOpen ? "open" : "closed"}
      />
      <Path
        isCaseStudyPage={isCaseStudyPage}
        d="M 3 12 L 21 12"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
        animate={isOpen ? "open" : "closed"}
      />
      <Path
        isCaseStudyPage={isCaseStudyPage}
        variants={{
          closed: { d: "M 3 18 L 21 18" },
          open: { d: "M 6 18 L 18 6" },
        }}
        animate={isOpen ? "open" : "closed"}
      />
    </svg>
  </button>
);

const MobileNav = ({
  toggle,
  isOpen,
  isCaseStudyPage,
}: {
  toggle: () => void;
  isOpen: boolean;
  isCaseStudyPage: boolean;
}) => {
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring" as const,
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(20px at calc(100% - 40px) 40px)",
      transition: {
        delay: 0.5,
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
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
          className="fixed h-screen inset-0 z-60 lg:hidden bg-[#FFE2E2] flex items-center justify-center p-8"
        >
          <ul className="flex flex-col space-y-8 text-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={toggle}
                  className={`text-4xl font-extrabold ${
                    isCaseStudyPage ? "text-[#1e1e1e]" : "text-white"
                  } hover:text-teal-400 transition-colors duration-300 block p-2`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const pathname = usePathname();
  const isCaseStudyPage = pathname.startsWith("/case-study");

  const toggleOpen = () => setIsOpen(!isOpen);

  const logoUrl = "/ArushiLogo.svg";

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -120 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 p-4 bg-transparent"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex md:hidden items-center space-x-2">
          <Image
            src={logoUrl}
            alt="Logo"
            width={150}
            height={40}
            className="h-15 lg:h-20 w-auto"
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center justify-center mt-10 w-full pl-4">
          <div className="flex gap-[24px] px-[32px] py-[8px] items-center bg-custom-gradient backdrop-blur-sm rounded-sm">
            <Link href="/" className="flex items-center">
              <Image
                src={logoUrl}
                alt="Logo"
                width={54}
                height={54}
                className="h-[54px] w-[54px]"
                priority
              />
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isCaseStudyPage
                    ? "text-[#1e1e1e] hover:text-red-500"
                    : "text-white hover:text-[#FF0000]"
                } text-[18px] uppercase transition-colors duration-300 px-3`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:hidden">
          <MenuToggle
            toggle={toggleOpen}
            isOpen={isOpen}
            isCaseStudyPage={isCaseStudyPage}
          />
        </div>
      </div>

      <MobileNav
        toggle={toggleOpen}
        isOpen={isOpen}
        isCaseStudyPage={isCaseStudyPage}
      />
    </motion.nav>
  );
};

export default Navbar;