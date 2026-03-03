import StackedCards from "./StackedCards"

const CaseStudies = ()=>{
    return(
        <>
        <section className="px-5 md:px-[90px] py-10 md:py-20 flex flex-col gap-10" id="case-studies">
        <h1 className="text-[40px] md:text-[80px]">Case Studies</h1>
        <StackedCards/>
        </section>
        </>
    )
}

export default CaseStudies