import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="h-screen flex items-start md:items-center bg-[#FFE2E2] px-5 md:px-[90px] py-20 md:py-0"
      id="about"
    >
      <div className="w-full md:max-w-3xl">
        <motion.h3
          className="text-[30px] md:text-[48px] text-[#333333]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ amount: 0.5 }}
        >
         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur culpa quam doloremque, odit ullam beatae, rem iste eius numquam delectus dolorum laudantium excepturi facilis repellat temporibus et. Vero eum fugiat harum doloremque in ullam corrupti vel magnam. Iusto, corrupti magnam!
        </motion.h3>
      </div>
    </section>
  );
};

export default About;
