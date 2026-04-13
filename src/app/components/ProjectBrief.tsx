"use client";
import React from "react";

interface ProjectBriefProps {
  data: {
    brief: string;
    role: string;
    team: string;
    timeline: string;
    skills: string;
    title: string;
    responsibilities: string[];
  };
}

export default function ProjectBrief({ data }: ProjectBriefProps) {
  return (
    <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-[0px] md:gap-[100px] py-16">
      
      {/* LEFT COLUMN */}
      <div className="pr-0 md:pr-20">
        <h4 className="text-[#9CA3C7] tracking-widest font-semibold mb-2 text-[18px]">
          PROJECT BRIEF
        </h4>
        <div className="w-full h-[2px] bg-[#A90D0D] mb-6" />

        <p className="text-[#4F4D4D] leading-[130%] whitespace-pre-line">
          {data.brief}
        </p>
      </div>

      {/* RIGHT COLUMN */}
      <div>
        
        {/* TITLE */}
        {/* <h1 className="text-3xl font-semibold text-[#1E1E1E] mb-10">
          {data.title}
        </h1> */}

        {/* META GRID */}
        <div className="grid grid-cols-2 gap-x-[57px] gap-y-[28px] mb-[28px] mt-15">
          <div>
            <p className=" text-[#4F4D4D] font-bold">
              Role
            </p>
            <p className="text-[#4F4D4D] text-[14px]">{data.role}</p>
          </div>

          <div>
            <p className=" text-[#4F4D4D] font-bold">
              Timeline
            </p>
            <p className="text-[#4F4D4D] text-[14px]">{data.timeline}</p>
          </div>

          <div>
            <p className=" text-[#4F4D4D] font-bold">
              Team
            </p>
            <p className="text-[#4F4D4D] text-[14px]">{data.team}</p>
          </div>

          <div>
            <p className=" text-[#4F4D4D] font-bold">
              Tools
            </p>
            <p className="text-[#4F4D4D] text-[14px]">{data.skills}</p>
          </div>
        </div>

        {/* BULLET LIST */}
        <div>
          <p className="text-[#4F4D4D] font-bold mb-4">
            I led UX strategy and execution end-to-end:
          </p>
          <ul className="list-disc list-inside text-[#4F4D4D] leading-[130%]">
            {data.responsibilities.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
