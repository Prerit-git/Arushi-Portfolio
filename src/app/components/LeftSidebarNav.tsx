"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "project-brief", label: "Project Brief" },
  { id: "problem", label: "Problem" },
  { id: "user-research", label: "User Research" },
  { id: "impact", label: "Overall Impact" },
  { id: "accordion", label: "Solution" },
];

export default function LeftSidebarNav() {
  const [visibleOrder, setVisibleOrder] = useState<string[]>([]);
  const [selected, setSelected] = useState<string>("");

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
      { threshold: 0.4 }
    );

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* -------------------------------------
     DESKTOP SIDEBAR
  ------------------------------------- */
  const desktopNav = (
    <div className="space-y-4 hidden md:block">
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
     MOBILE DROPDOWN
  ------------------------------------- */
  const mobileDropdown = (
    <div className="md:hidden sticky top-0 z-50 bg-white border-b px-4 py-3">
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
