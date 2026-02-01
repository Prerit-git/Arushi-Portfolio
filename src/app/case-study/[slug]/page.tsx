import AccordionSection from "@/app/components/AccordionSection";
import DecisionandOutcome from "@/app/components/DecisionandOutcome";
import ImpactSection from "@/app/components/ImpactSection";
import LeftSidebarNav from "@/app/components/LeftSidebarNav";
import ProblemSection from "@/app/components/ProblemSection";
import ProjectBrief from "@/app/components/ProjectBrief";
import UserResearchSection from "@/app/components/UserResearchSection";
import { caseStudies } from "@/data/caseStudies";
import Image from "next/image";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyDetail({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const data = caseStudies.find((item) => item.slug === slug);

  if (!data) {
    return <div className="text-center py-20 text-2xl">Case study not found.</div>;
  }

  return (
    <div className="bg-white w-full">
      <div className="w-full  mx-0 md:mx-auto pt-10 pb-32 px-4">
        <div className="w-full max-w-6xl mx-auto">
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
          className="w-full h-auto md:h-[500px] object-cover rounded-lg mb-10"
        />
        </div>

        {/* LEFT SIDEBAR NAV */}
        <div className="sticky top-0 md:left-5 z-40 md:top-24">
          <LeftSidebarNav />
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-12 gap-6 md:gap-10 max-w-6xl mx-auto">
          <div className="col-span-12 space-y-[96px]">
            {/* PROJECT BRIEF */}
            <section id="project-brief" className="scroll-mt-24">
              <ProjectBrief
                data={{
                  brief: data.projectBrief?.brief ?? "",
                  role: data.projectBrief?.role ?? "",
                  team: data.projectBrief?.team ?? "",
                  timeline: data.projectBrief?.timeline ?? "",
                  skills: data.projectBrief?.skills ?? "",
                  title: data.title ?? "",
                  responsibilities: data.projectBrief?.responsibilities ?? [],
                }}
              />
            </section>

            {/* PROBLEM SECTION */}
            <section id="problem" className="scroll-mt-24">
              <ProblemSection
                problemBrief={data.problem?.problemBrief ?? ""}
                content={data.problem?.content ?? ""}
                keyInsight={data.problem?.keyInsight ?? ""}
              />
            </section>

            {/* USER RESEARCH SECTION */}
            {/* <section id="user-research">
              <UserResearchSection
                intro={data.userResearch?.intro ?? ""}
                insights={data.userResearch?.insights ?? []}
                footer={data.userResearch?.footer ?? ""}
              />
            </section> */}

            {/* Impact section */}
            <section id="strategy" className="scroll-mt-24">
              <ImpactSection
                data={{
                  heading: data.impactSection?.heading ?? "",
                  intro: data.impactSection?.intro ?? "",
                  topItems: data.impactSection?.topItems ?? [],
                }}
              />
            </section>

            <section id="dec-outcome" className="scroll-mt-24">
              <DecisionandOutcome/>
            </section>

            {/* Accordion Section */}
            <section id="constraints">
              <AccordionSection items={data.accordionSection ?? []} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
