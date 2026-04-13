"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { RxDoubleArrowRight } from "react-icons/rx";
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter()
  return (
    <section className="relative h-auto md:h-screen w-full overflow-hidden bg-white" id="about">
      <Image
        src="/about_gradient_bg.svg"
        alt="Background"
        fill
        priority
        style={{ objectFit: "cover" }}
        className="z-0"
      />

      {/* Overlay Content */}
      <div className="relative z-20 h-full flex items-start md:items-center px-5 md:px-[90px] py-20 md:py-0">
        <div className="w-full md:w-1/2 flex flex-col gap-2 text-[#000000]">
          <motion.h3
            className="text-[38px] md:text-[48px]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ amount: 0.5 }}
          >
            Hi, I’m Arushi Mathur, a Product Designer with 7+ years of experience creating user-friendly, scalable digital products. I blend research, strategy, and visual design to build intuitive solutions that deliver real impact.
          </motion.h3>

          <motion.div
            className="relative mt-[32px]"
            whileHover={{ y: -2 }}
            whileTap={{ y: 2 }}
          >
            <motion.button
              className="absolute -bottom-8 z-30 bg-[#FFE2E2] text-black p-[10px] font-semibold text-[16px] w-[172px] h-[46px] rounded-[4px] flex items-center justify-center cursor-pointer gap-2"
              onClick={()=>router.push("/about")}
            >
              Give it a try <span><RxDoubleArrowRight className="w-5 h-5"/></span>
            </motion.button>
            <motion.div
              className="absolute -bottom-[37px] left-[5px] z-20 bg-red-800 text-black p-[10px] font-extrabold text-[16px] w-[172px] h-[46px] rounded-[4px] flex items-center justify-center cursor-pointer"
            />
          </motion.div>
        </div>
        <div className="hidden md:block md:w-1/2" />
      </div>
    </section>
  );
};

export default About;
