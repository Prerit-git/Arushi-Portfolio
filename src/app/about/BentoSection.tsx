"use client";

import Image from "next/image";

export default function BentoSection() {
  return (
    <section className="w-full text-white px-4 md:px-20 py-30">
      {/* Heading */}
      <div className="max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl md:text-[40px] font-normal mb-4 text-[#FFE2E2]">
          Always Curious
        </h2>
        <p className="text-[20px]">
          I enjoy trying new experiences and exploring other people’s interests.
          I’m quite adaptable that way, if something excites the people around
          me, I often find myself curious to try it too. It helps me see things
          from their perspective, step into their shoes, and approach situations
          with empathy.
          <br />
          <br />
          My husband has influenced quite a few of my interests from becoming an
          F1 enthusiast, to reading more books (sci-fi in particular), and even
          occasionally playing video games. Curiosity keeps both life and design
          interesting.
        </p>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="flex flex-col gap-6 md:hidden max-w-6xl mx-auto">

        {/* Traveling */}
        <div className="p-4 bg-[#FFE2E2] text-[#FF0000] rounded-2xl space-y-4">
          <p className="text-[28px] font-bold">Traveling Slowly</p>
          <p className="text-[18px] leading-tight">
            I enjoy slow travel exploring the culture, food, and everyday
            life of a place rather than just visiting tourist spots. Walking
            through neighborhoods, using local transport, and learning small
            parts of the language are often the most memorable parts of a
            trip.
          </p>
        </div>

        {/* Top Image */}
        <div className="rounded-2xl overflow-hidden">
          <Image src="/top.svg" width={500} height={300} alt="top" className="w-full h-full object-cover"/>
        </div>

        {/* Lego */}
        <div className="p-4 bg-[#FF0000] text-white rounded-2xl space-y-2">
          <p className="text-[28px] font-bold">Building Legos</p>
          <p className="text-[18px] leading-tight">
            Collecting and building Lego sets is another hobby I enjoy. I
            especially love building them with my husband it’s a
            surprisingly great way to collaborate, unwind, and bond.
          </p>
        </div>

        {/* Middle Image */}
        <div className="rounded-2xl overflow-hidden">
          <Image src="/middle.svg" width={500} height={300} alt="middle" className="w-full h-full object-cover"/>
        </div>

        {/* Baking */}
        <div className="p-4 bg-[#FFE2E2] text-[#FF0000] rounded-2xl space-y-4">
          <p className="text-[26px] font-bold leading-tight">
            Baking as a Science Experiment
          </p>
          <p className="text-[18px] leading-tight">
            I enjoy cooking cuisines from different parts of the world,
            but baking is my favorite, especially Japanese desserts. Their
            precision fascinates me. Every measurement matters, and the
            process feels more like a science experiment than an art form.
            <br />
            If I weren’t designing products, I’d probably be running a
            small Ghibli-themed bakery studio.
          </p>
        </div>

        {/* Left Image */}
        <div className="rounded-2xl overflow-hidden">
          <Image src="/left.svg" width={500} height={300} alt="left" className="w-full h-full object-cover"/>
        </div>

        {/* Creative */}
        <div className="p-4 bg-[#FF0000] text-white rounded-2xl space-y-2">
          <p className="text-[28px] font-bold">Creative Craft</p>
          <p className="text-[18px] leading-tight">
            I love experimenting with different creative mediums digital
            illustration, clay modelling, origami, and handmade craft
            projects.
            <br />
            Creating decor pieces, cards, and small objects helps me stay
            curious and creative.
          </p>
        </div>

        {/* Right Image */}
        <div className="rounded-2xl overflow-hidden">
          <Image src="/right.svg" width={500} height={500} alt="right" className="w-full h-full object-cover"/>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div className="hidden md:flex max-w-6xl mx-auto min-h-screen flex-row gap-6 p-4">
        {/* LEFT */}
        <div className="w-[70%] flex flex-col gap-6">
          <div className="flex gap-6">
           <div className="w-full md:w-[516px] h-auto md:h-[248px] p-4 bg-[#FFE2E2] text-[#FF0000] space-y-4 rounded-2xl transition ease-in hover:scale-105 duration-300">
              <p className="text-[32px] font-bold">Traveling Slowly</p>
              <p className="text-[18px] leading-tight">
                I enjoy slow travel exploring the culture, food, and everyday
                life of a place rather than just visiting tourist spots. Walking
                through neighborhoods, using local transport, and learning small
                parts of the language are often the most memorable parts of a
                trip.
              </p>
            </div>

            <div className="w-full md:w-[286px] h-auto md:h-[248px] rounded-2xl overflow-hidden transition ease-in hover:scale-105 duration-300">
              <Image
                src={"/top.svg"}
                width={286}
                height={248}
                alt="image-1"
                className="object-cover w-full h-full rounded-2xl"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="w-[286px] flex flex-col gap-6">
              <div className="h-auto md:h-[233px] w-full bg-[#FF0000] p-4 text-white space-y-2 rounded-2xl transition ease-in hover:scale-105 duration-300">
                <p className="text-[32px] font-bold">Building Legos</p>
                <p className="text-[18px] leading-tight">
                  Collecting and building Lego sets is another hobby I enjoy. I
                  especially love building them with my husband it’s a
                  surprisingly great way to collaborate, unwind, and bond.
                </p>
              </div>

              <div className="h-[310px] w-full rounded-2xl overflow-hidden transition ease-in hover:scale-105 duration-300">
                <Image
                  src={"/left.svg"}
                  width={286}
                  height={248}
                  alt="image-1"
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
            </div>

            <div className="w-[516px] flex flex-col gap-6">
              <div className="h-auto md:h-[292px] rounded-2xl overflow-hidden transition ease-in hover:scale-105 duration-300">
                <Image
                  src={"/middle.svg"}
                  width={516}
                  height={292}
                  alt="image-1"
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>

              <div className="h-auto md:h-[248px] p-4 bg-[#FFE2E2] text-[#FF0000] space-y-4 rounded-2xl transition ease-in hover:scale-105 duration-300">
                <p className="text-[28px] font-bold">
                  Baking as a Science Experiment
                </p>
                <p className="text-[18px] leading-tight">
                  I enjoy cooking cuisines from different parts of the world,
                  but baking is my favorite, especially Japanese desserts. Their
                  precision fascinates me. Every measurement matters, and the
                  process feels more like a science experiment than an art form.
                  <br />
                  If I weren’t designing products, I’d probably be running a
                  small Ghibli-themed bakery studio.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="w-[300px] flex flex-col gap-6">
          <div className="h-auto md:h-[275px] bg-[#FF0000] p-4 text-white space-y-2 rounded-2xl transition ease-in hover:scale-105 duration-300">
            <p className="text-[32px] font-bold">Creative Craft</p>
            <p className="text-[18px] leading-tight">
              I love experimenting with different creative mediums digital
              illustration, clay modelling, origami, and handmade craft
              projects.
              <br />
              Creating decor pieces, cards, and small objects helps me stay
              curious and creative.
            </p>
          </div>

          <div className="h-[537px] rounded-2xl overflow-hidden transition ease-in hover:scale-105 duration-300">
            <Image
              src={"/right.svg"}
              width={300}
              height={537}
              alt="image-1"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}