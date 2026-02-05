"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "project-brief", label: "Project Brief" },
  { id: "problem", label: "Problem" },
  { id: "strategy", label: "Strategy" },
  { id: "dec-outcome", label: "Decision & Outcome" },
  { id: "constraints", label: "Constraints" },
];

export default function LeftSidebarNav() {
  const [visibleOrder, setVisibleOrder] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>("");

  // 👇 shared scroll visibility state
  const [isScrolling, setIsScrolling] = useState(true);

  /* -------------------------------------
     INTERSECTION OBSERVER
  ------------------------------------- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            setVisibleOrder((prev) =>
              prev.includes(id) ? prev : [...prev, id]
            );

            setSelected(id);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -30% 0px",
      }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* -------------------------------------
     SCROLL SHOW / HIDE (MOBILE + DESKTOP)
  ------------------------------------- */
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 3000);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* -------------------------------------
     DESKTOP SIDEBAR (UPDATED)
  ------------------------------------- */
  const desktopNav = (
    <div
      className={`
        space-y-4 hidden md:block
        transition-all duration-300 ease-in-out absolute z-99 top-15
        ${
          isScrolling
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-4 pointer-events-none"
        }
      `}
    >
      {visibleOrder.map((id) => {
        const sec = sections.find((s) => s.id === id);
        if (!sec) return null;

        return (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className="
              block text-left text-lg font-semibold
              bg-gray-200 text-gray-700 hover:text-black
              transition hover:bg-gray-300 px-3 py-1 rounded-xl
              animate-slideLeftIn
            "
          >
            {sec.label}
          </button>
        );
      })}
    </div>
  );

  /* -------------------------------------
     MOBILE DROPDOWN (UNCHANGED LOGIC)
  ------------------------------------- */
  const mobileDropdown = (
    <div
      className={`
        md:hidden sticky top-0 z-50
        bg-white border-b px-4 py-3
        transition-all duration-300 ease-in-out
        ${
          isScrolling
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }
      `}
    >
      <select
        value={selected}
        onChange={(e) => {
          setSelected(e.target.value);
          scrollToSection(e.target.value);
        }}
        className="
          w-full border rounded-xl px-4 py-3
          text-base font-semibold text-gray-800
          focus:outline-none
        "
      >
        <option value="" disabled>
          Jump to section
        </option>

        {visibleOrder.map((id) => {
          const sec = sections.find((s) => s.id === id);
          if (!sec) return null;

          return (
            <option key={sec.id} value={sec.id}>
              {sec.label}
            </option>
          );
        })}
      </select>
    </div>
  );

  return (
    <>
      {mobileDropdown}
      {desktopNav}
    </>
  );
}
