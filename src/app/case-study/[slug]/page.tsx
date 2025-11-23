import LeftSidebarNav from "@/app/components/LeftSidebarNav";
import ProblemSection from "@/app/components/ProblemSection";
import ProjectBrief from "@/app/components/ProjectBrief";
import UserResearchSection from "@/app/components/UserResearchSection";
import { caseStudies } from "@/data/caseStudies";
import Image from "next/image";

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const data = caseStudies.find((item) => item.slug === params.slug);

  if (!data) {
    return <div className="text-center py-20 text-2xl">Case study not found.</div>;
  }

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto pt-10 pb-32 px-4">

        {/* HEADER IMAGE + LOGO */}
        <div className="mb-5">
          <Image
            src={data.logo}
            alt="Logo"
            width={200}
            height={100}
            className="bg-white p-2"
            priority
          />
        </div>

        <img src={data.image} className="w-full h-[500px] rounded-lg mb-10" />

          <div className="fixed left-5 top-90">
            <LeftSidebarNav />
          </div>
        {/* MAIN GRID */}
        <div className="grid grid-cols-12 gap-10">

          {/* LEFT STICKY NAV */}

          {/* RIGHT CONTENT */}
          <div className="col-span-12 space-y-32">
            <section id="project-brief">
              <ProjectBrief
                data={{
                  brief: data?.projectBrief?.brief,
                  role: data?.projectBrief?.role,
                  team: data?.projectBrief?.team,
                  timeline: data?.projectBrief?.timeline,
                  skills: data?.projectBrief?.skills,
                  title: data?.title,
                }}
              />
            </section>

            <section id="problem">
              <ProblemSection
                title={data?.problem?.title}
                content={data?.problem?.content}
              />
            </section>

            <section id="user-research">
              <UserResearchSection
                intro={data?.userResearch?.intro}
                insights={data?.userResearch?.insights}
                footer={data?.userResearch?.footer}
              />
            </section>
          </div>
        </div>

      </div>
    </div>
  );
}
