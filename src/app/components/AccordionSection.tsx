"use client";

import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

export interface AccordionItem {
  id: number;
  title: string;
  content: string;
}

interface Props {
  items: AccordionItem[];
}

export default function AccordionSection({ items }: Props) {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full max-w-6xl mx-auto pb-20 grid grid-cols-1 md:grid-cols-2 gap-[0px] md:gap-[20px]">
      <div className="pr-0 md:pr-20">
            <h4 className="text-[#9CA3C7] tracking-widest font-semibold mb-2 text-[18px]">
             CONSTRAINTS
            </h4>
            <div className="w-full h-[2px] bg-[#A90D0D] mb-6" />
            <p>A key challenge throughout the project was balancing competing priorities across business, engineering, and compliance while making deliberate trade-offs to protect scalability and impact.</p>
          </div>

        {/* RIGHT COLUMN */}
        <div className="col-span-4 md:col-span-1 space-y-8 mt-20">
             {/* <h2 className="text-4xl font-bold text-[#1E1E1E]">Process and Solution</h2> */}
          {items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <AccordionRow
                key={item.id}
                isOpen={isOpen}
                title={item.title}
                content={item.content}
                onClick={() => toggle(item.id)}
              />
            );
          })}
        </div>
    </section>
  );
}

/* --------------------------
    Single Accordion Row
--------------------------- */

export function AccordionRow({
  isOpen,
  title,
  content,
  onClick,
}: {
  isOpen: boolean;
  title: string;
  content: string;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setHeight(ref.current?.scrollHeight + "px");
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="w-full md:w-[628px]">
      {/* Header */}
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between bg-[#1E1E1E] text-white py-4 px-6 rounded-md text-[18px] font-semibold cursor-pointer text-left"
      >
        {title}

        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          } w-5 h-5`}
        />
      </button>

      {/* Animated Content */}
      <div
        className="transition-all duration-500 overflow-hidden bg-white border border-[#DDD] rounded-md mt-2"
        style={{ height }}
      >
        <div
          ref={ref}
          className="p-6 text-[16px] leading-[130%] text-[#1E1E1E]"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}