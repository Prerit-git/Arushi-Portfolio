import LeftSidebarNav from "@/app/components/LeftSidebarNav";
import ProblemSection from "@/app/components/ProblemSection";
import ProjectBrief from "@/app/components/ProjectBrief";
import UserResearchSection from "@/app/components/UserResearchSection";
import { caseStudies } from "@/data/caseStudies";
import Image from "next/image";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export default function CaseStudyDetail({ params }: CaseStudyPageProps) {
  const data = caseStudies.find((item) => item.slug === params.slug);

  if (!data) {
    return (
      <div className="text-center py-20 text-2xl">Case study not found.</div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto pt-10 pb-32 px-4">
        <div className="mb-5">
          <Image
            src={data.logo}
            alt={`${data.title} Logo`}
            width={200}
            height={100}
            className="bg-white p-2"
            priority
          />
        </div>

        <img
          src={data.image}
          alt="Case study featured"
          className="w-full h-[500px] rounded-lg mb-10"
        />

        {/* LEFT SIDEBAR NAV */}
        <div className="fixed left-5 top-90">
          <LeftSidebarNav />
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 space-y-32">
            {/* PROJECT BRIEF */}
            <section id="project-brief">
              <ProjectBrief
                data={{
                  brief: data.projectBrief?.brief ?? "",
                  role: data.projectBrief?.role ?? "",
                  team: data.projectBrief?.team ?? "",
                  timeline: data.projectBrief?.timeline ?? "",
                  skills: data.projectBrief?.skills ?? "",
                  title: data.title ?? "",
                }}
              />
            </section>

            {/* PROBLEM SECTION */}
            <section id="problem">
              <ProblemSection
                title={data.problem?.title ?? ""}
                content={data.problem?.content ?? ""}
              />
            </section>

            {/* USER RESEARCH SECTION */}
            <section id="user-research">
              <UserResearchSection
                intro={data.userResearch?.intro ?? ""}
                insights={data.userResearch?.insights ?? []}
                footer={data.userResearch?.footer ?? ""}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
