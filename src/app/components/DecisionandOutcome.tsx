
const DecisionandOutcome = () => {
  return (
     <section className="w-full max-w-6xl mx-auto pb-20 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-[100px]">
          <div className="pr-0 md:pr-20">
            <h4 className="text-[#9CA3C7] tracking-widest font-semibold mb-2 text-[18px]">
             THE CORE KEY DECISIONS AND <br />OUTCOME
            </h4>
            <div className="w-full h-[2px] bg-[#A90D0D] mb-6" />
            <ul className="text-[14px] text-[#4F4D4D] space-y-4">
              <li><span className='font-bold'>Decision 1:</span> Flatten the Information Architecture</li>
              <li><span className='font-bold'>Decision 2:</span> Personalize Campaign Landing Pages by Funnel Stage</li>
              <li><span className='font-bold'>Decision 3:</span> Rethink Calculators & Product Pages as Decision Tools</li>
            </ul>
          </div>
          <div className="gap-10">
            <div className="hidden md:block col-span-4"></div>
    
            {/* RIGHT COLUMN */}
            <div className="col-span-10 md:col-span-8 mt-18 flex flex-col gap-[16px]">
             <p className='text-[16px] font-bold'>Decision 1: Flatten the Information Architecture</p>
             <p className='text-[14px] text-[#9CA3C7] font-bold'>PROBLEM</p>
             <p className='text-[14px] text-[#4F4D4D]'>Users couldn’t predict where content lived. Navigation had too many levels and unclear labels.
             </p>
             <p className='text-[14px] text-[#9CA3C7] font-bold'>WHAT I DID</p>
             <ul className='list-disc list-inside'>
                <li className='text-[#4F4D4D] text-[14px]'>Designed a flatter, broader IA</li>
                <li className='text-[#4F4D4D] text-[14px]'>Reduced dependency on deep L2/L3 menus</li>
                <li className='text-[#4F4D4D] text-[14px]'>Simplified terminology with SEO + business teams</li>
                <li className='text-[#4F4D4D] text-[14px]'>Rebuilt the footer as a functional navigation tool</li>
                <li className='text-[#4F4D4D] text-[14px]'>Designed IA mobile-first</li>
             </ul>
             <p className='text-[14px] text-[#9CA3C7] font-bold'>OUTCOME</p>
             <ul className='list-disc list-inside'>
                <li className='text-[#4F4D4D] text-[14px]'>15% reduction in homepage drop-off within 3 months</li>
                <li className='text-[#4F4D4D] text-[14px]'>Faster task completion and higher navigation confidence</li>
                <li className='text-[#4F4D4D] text-[14px]'>Significant usability improvement for elderly users and agents</li>
             </ul>
             <img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dec1Image" className='h-[304px] w-full mt-[16px]' />
            </div>
            <div className="col-span-10 md:col-span-8 mt-18 flex flex-col gap-[16px]">
             <p className='text-[16px] font-bold'>Decision 2: Personalize Campaign Landing Pages by Funnel Stage</p>
             <p className='text-[14px] text-[#9CA3C7] font-bold'>PROBLEM</p>
             <p className='text-[14px] text-[#4F4D4D]'>Every user saw the same landing page and the same long form — regardless of intent.
             </p>
             <p className='text-[14px] text-[#9CA3C7] font-bold'>WHAT I DID</p>
             <ul className='list-disc list-inside'>
                <li className='text-[#4F4D4D] text-[14px]'>Audited the entire campaign funnel end-to-end</li>
                <li className='text-[#4F4D4D] text-[14px]'>Defined Top / Mid / Bottom funnel user journeys</li>
                <li className='text-[#4F4D4D] text-[14px]'>Designed templated but personalized landing pages</li>
                <li className='text-[#4F4D4D] text-[14px]'>Introduced conversational, assisted forms for early-stage users</li>
                <li className='text-[#4F4D4D] text-[14px]'>Simplified forms for high-intent users</li>
                <li className='text-[#4F4D4D] text-[14px]'>Ensured strong message match from ad → page → CTA</li>
             </ul>
             <p className='text-[14px] text-[#9CA3C7] font-bold'>OUTCOME</p>
             <ul className='list-disc list-inside'>
                <li className='text-[#4F4D4D] text-[14px]'>Immediate improvement in lead capture (metrics confidential)</li>
                <li className='text-[#4F4D4D] text-[14px]'>Higher quality, better-qualified leads for agents</li>
                <li className='text-[#4F4D4D] text-[14px]'>Reduced form abandonment, especially on mobile</li>
             </ul>
             <img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dec1Image" className='h-[304px] w-full mt-[16px]' />
            </div>
            <div className="col-span-10 md:col-span-8 mt-18 flex flex-col gap-[16px]">
             <p className='text-[16px] font-bold'>Decision 3: Rethink Calculators & Product Pages as Decision Tools</p>
             <p className='text-[14px] text-[#9CA3C7] font-bold'>PROBLEM</p>
             <p className='text-[14px] text-[#4F4D4D]'>Calculators felt clinical. Product pages were long, dense, and overwhelming.
             </p>
             <p className='text-[14px] text-[#9CA3C7] font-bold'>WHAT I DID</p>
             <ul className='list-disc list-inside'>
                <li className='text-[#4F4D4D] text-[14px]'>Reimagined calculators as step-by-step conversations</li>
                <li className='text-[#4F4D4D] text-[14px]'>Limited interactions to ≤3 clicks to results</li>
                <li className='text-[#4F4D4D] text-[14px]'>Used visual outputs instead of raw numbers</li>
                <li className='text-[#4F4D4D] text-[14px]'>Introduced sticky index navigation on long product pages</li>
                <li className='text-[#4F4D4D] text-[14px]'>Converted dense content into scannable visual blocks</li>
             </ul>
             <p className='text-[14px] text-[#9CA3C7] font-bold'>OUTCOME</p>
             <ul className='list-disc list-inside'>
                <li className='text-[#4F4D4D] text-[14px]'>5% reduction in homepage-level drop-offs</li>
                <li className='text-[#4F4D4D] text-[14px]'>Increased calculator engagement and product exploration</li>
                <li className='text-[#4F4D4D] text-[14px]'>Agents could use calculators live with customers</li>
                <li className='text-[#4F4D4D] text-[14px]'>Elderly users found results easier to understand and trust</li>
             </ul>
             <img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="dec1Image" className='h-[304px] w-full mt-[16px]' />
            </div>
          </div>
        </section>
  )
}

export default DecisionandOutcome
