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
  };
}

export default function ProjectBrief({ data }: ProjectBriefProps) {
  return (
    <section className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 pb-16">
      {/* LEFT COLUMN — PROJECT BRIEF */}
      <div>
        <h4 className="text-[#9CA3C7] tracking-widest text-lg font-semibold mb-4">
          PROJECT BRIEF
        </h4>

        <p className="text-[16px] text-gray-700 leading-[160%]">{data.brief}</p>
      </div>

      {/* RIGHT CONTENT (2 COLUMNS) */}
      <div className="md:col-span-2 grid grid-cols-1 gap-10 border-b border-gray-300 pb-16">
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="text-4xl font-bold text-[#1E1E1E] mb-2">
              {data.title}
            </h1>
            {/* <p className="text-gray-500 text-lg">{data.subtitle}</p> */}
          </div>

          <div className="flex gap-15">
            <div>
              <h5 className="text-lg text-gray-400 tracking-widest mb-1">
                ROLE
              </h5>
              <p className="text-gray-800 mb-4">{data.role}</p>

              <h5 className="text-lg text-gray-400 tracking-widest mb-1">
                TEAM
              </h5>
              <p className="text-gray-800">{data.team}</p>
            </div>
            <div>
              <h5 className="text-lg text-gray-400 tracking-widest mb-1">
                TIMELINE
              </h5>
              <p className="text-gray-800 mb-4">{data.timeline}</p>

              <h5 className="text-lg text-gray-400 tracking-widest mb-1">
                SKILLS/TOOLS
              </h5>
              <p className="text-gray-800">{data.skills}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
