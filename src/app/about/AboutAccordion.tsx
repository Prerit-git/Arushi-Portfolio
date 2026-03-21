"use client";

import { hover } from "motion";
import Image from "next/image";
import { useState } from "react";
import { BsArrowDown } from "react-icons/bs";

export type AccordionItemType = {
  id: number | string;
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItemType[];

  containerClass?: string;
  itemClass?: string;
  headerClass?: string;
  contentClass?: string;

  // behavior
  defaultOpenIndex?: number | null;
  allowMultiple?: boolean;
};

export default function AboutAccordion({
  items,
  containerClass = "w-full",
  itemClass = "w-full",
  headerClass = "w-full",
  contentClass = "",
  defaultOpenIndex = null,
  allowMultiple = false,
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    defaultOpenIndex !== null ? [defaultOpenIndex] : []
  );

  const toggle = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev[0] === index ? [] : [index]));
    }
  };

  return (
    <div className={`w-full ${containerClass}`}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index);

        return (
          <div key={item.id} className={` ${itemClass}`}>
            {/* HEADER */}
            <button
              onClick={() => toggle(index)}
              className={`w-full flex justify-between items-center transition-all ${headerClass}`}
            >
              <h1
                className={`text-[25px] md:text-[32px] font-normal text-left leading-tight md:leading-normal ${
                  isOpen ? "text-[#FFE2E2]" : "text-white"
                }`}
              >
                {item.title}
              </h1>

              <span
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <Image
                  src={"/arrow-down.svg"}
                  width={47}
                  height={47}
                  alt="arrowDown"
                />
              </span>
            </button>

            {/* CONTENT */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div
                className={`${contentClass}`}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}