import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="h-screen flex items-start md:items-center bg-about px-5 md:px-[90px] py-20 md:py-0"
      id="about"
    >
      <div className="w-full md:max-w-3xl flex flex-col gap-2">
        <motion.h3
          className="text-[30px] md:text-[48px] text-[#000000]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ amount: 0.5 }}
        >
        For over 4 years, I’ve helped startups transform ideas into market- ready digital products. I specialize in designing intuitive, user-centered web and mobile experiences, building scalable design systems, 
        </motion.h3>
        <motion.div className="relative mt-5" 
            whileHover={{  y: -2 }}
            whileTap={{  y: 2 }}>
        <motion.button
            className="hidden absolute -bottom-8 z-41 bg-[#FFE2E2] text-black p-[10px] font-extrabold text-[16px] w-[172px] h-[46px] rounded-[4px] md:flex items-center justify-center cursor-pointer"
          >
            Get in touch
          </motion.button>
          <motion.div
            className="hidden absolute -bottom-[37px] left-[5px] z-40 bg-red-800 text-black p-[10px] font-extrabold text-[16px] w-[172px] h-[46px] rounded-[4px] md:flex items-center justify-center cursor-pointer"
          >
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default About;
