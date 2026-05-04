import AccordionSection from "@/app/components/AccordionSection";
import BackButton from "@/app/components/BackButton";
import BlogsSection from "@/app/components/BlogsSection";
import Contact from "@/app/components/Contact";
import DecisionandOutcome from "@/app/components/DecisionandOutcome";
import FooterImpactSection from "@/app/components/FooterImpactSection";
import ImpactSection from "@/app/components/ImpactSection";
import KeyDecisionWrapper from "@/app/components/KeyDecisionWrapper";
import KeyLearnings from "@/app/components/KeyLearnings";
import LeftSidebarNav from "@/app/components/LeftSidebarNav";
import NextReadCard from "@/app/components/NextReadCard";
import ProblemSection from "@/app/components/ProblemSection";
import ProjectBrief from "@/app/components/ProjectBrief";
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
    <>
    <div>
    {/* <Navbar/> */}
    </div>
    <div className="bg-white w-full pt-10 md:pt-25">
      <div className="w-full  mx-0 md:mx-auto pt-10 pb-32 px-4">
          <div className="pl-2 md:pl-[70px]">
            <BackButton imageSrc="/arrow-left-black.png" textColor="#000000"/>
          </div>
        <div className="w-full max-w-6xl mx-auto">
        <div className="mb-5">
          <Image
            src={data.logo}
            alt={`${data.title} Logo`}
            width={135}
            height={40}
            className="bg-white p-2"
            priority
            />
        </div>

        <img
          src={data.image}
          className="w-auto md:w-[1098px] h-auto md:h-[445px] rounded-lg"
        />

        <h2 className="text-[20px] md:text-[48px] text-[#A90D0D] font-[400] pt-[32px] capitalize">{data.title}</h2>
        <p className="text-[16px] text-[#4F4D4D]">{data.description}</p>

        </div>

        {/* LEFT SIDEBAR NAV */}
        <div className="sticky top-0 md:left-5 z-60 md:top-24">
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
              {/* <DecisionandOutcome /> */}
              <KeyDecisionWrapper/>
            </section>

            {/* Accordion Section */}
            <section id="constraints">
              <AccordionSection items={data.accordionSection ?? []} />
            </section>

            <section id="keyLearning" className="scroll-mt-24">
              <KeyLearnings
                data={{
                  heading: data.keyLearningSection?.heading ?? "",
                  intro: data.keyLearningSection?.intro ?? "",
                  keyItems: data.keyLearningSection?.keyItems ?? [],
                }}
              />
            </section>

            <section id="footerImpact" className="scroll-mt-24">
              <FooterImpactSection
                impactBrief={data.footerImpact?.impactBrief ?? ""}
                content={data.footerImpact?.content ?? ""} />
            </section>

            <section>
              <NextReadCard
              title={data.nextRead?.title ?? ""}
              description={data.nextRead?.description ?? ""}
              imageUrl={data.nextRead?.imageUrl ?? ""}
              ctaLink={data.nextRead?.ctaLink ?? ""}
              />
            </section>
          </div>
        </div>
      </div>
      <BlogsSection/>
        <Contact />
    </div>
    </>
  );
}
