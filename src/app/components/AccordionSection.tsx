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
    <section className="w-full pb-20">
      <div className="grid grid-cols-12 gap-10">

        {/* LEFT EMPTY COLUMN */}
        <div className="col-span-4"></div>

        {/* RIGHT COLUMN */}
        <div className="col-span-8 space-y-8">
             <h2 className="text-4xl font-bold text-[#1E1E1E]">Process and Solution</h2>
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
      </div>
    </section>
  );
}

/* --------------------------
    Single Accordion Row
--------------------------- */

function AccordionRow({
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
    <div className="w-full">
      {/* Header */}
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between bg-[#1E1E1E] text-white py-4 px-6 rounded-md text-[18px] font-semibold cursor-pointer"
      >
        {title}

        <FaChevronDown
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Animated Content */}
      <div
        className="transition-all duration-500 overflow-hidden bg-white border border-[#DDD] rounded-md mt-2"
        style={{ height }}
      >
        <div
          ref={ref}
          className="p-6 text-[16px] leading-[170%] text-[#1E1E1E]"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
