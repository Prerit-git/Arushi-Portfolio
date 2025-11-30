"use client";

import { useEffect, useState } from "react";

export default function LeftSidebarNav() {
  const sections = [
    { id: "project-brief", label: "Project Brief" },
    { id: "problem", label: "Problem" },
    { id: "user-research", label: "User Research" },
    { id: "impact", label: "Overall Impact" },
    { id: "accordion", label: "Solution" },
  ];

  const [visibleOrder, setVisibleOrder] = useState<string[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;

            // Add only once
            setVisibleOrder((prev) =>
              prev.includes(id) ? prev : [...prev, id]
            );
          }
        });
      },
      { threshold: 0.6 }
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

  return (
    <div className="space-y-4">

      {visibleOrder.map((id) => {
        const sec = sections.find((s) => s.id === id);
        if (!sec) return null;

        return (
          <button
            key={sec.id}
            onClick={() => scrollToSection(sec.id)}
            className="
              block text-left text-lg font-semibold bg-gray-200 text-gray-700 hover:text-black transition
              animate-slideLeftIn cursor-pointer hover:bg-gray-300 px-3 py-1 rounded-xl
            "
          >
            {sec.label}
          </button>
        );
      })}

    </div>
  );
}
