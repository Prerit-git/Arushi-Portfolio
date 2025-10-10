import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="h-screen flex items-start md:items-center bg-[#FFE2E2] px-5 md:px-[90px] py-20 md:py-0"
      id="about"
    >
      <div className="w-full md:max-w-3xl flex flex-col gap-2">
        <motion.h3
          className="text-[30px] md:text-[48px] text-[#333333]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ amount: 0.5 }}
        >
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur culpa quam doloremque, odit ullam beatae, rem iste eius numquam delectus dolorum laudantium excepturi facilis repellat temporibus et. Vero eum fugiat harum doloremque in ullam corrupti vel magnam. Iusto, corrupti magnam!
        </motion.h3>
        <motion.div className="relative">
        <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 2 }}
            className="hidden absolute -bottom-8 z-41 bg-[#FFE2E2] text-black p-[10px] font-extrabold text-[16px] w-[172px] h-[46px] rounded-[4px] md:flex items-center justify-center cursor-pointer"
          >
            Get in touch
          </motion.button>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95, y: 2 }}
            className="hidden absolute -bottom-10 left-2 z-40 bg-red-800 text-black p-[10px] font-extrabold text-[16px] w-[172px] h-[46px] rounded-[4px] md:flex items-center justify-center cursor-pointer"
          >
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default About;
