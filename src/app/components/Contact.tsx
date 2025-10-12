import { motion } from "framer-motion";
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <section className="h-[30vh] md:h-[50vh] bg-black/50 flex flex-col w-full relative mb-0" id="contact">
        <motion.div
          className="flex flex-col md:flex-row justify-center items-start md:items-center gap-5 md:gap-20 pt-10 pl-10 md:pl-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-2xl flex items-center gap-2 text-white">
            <MdOutlineMailOutline />
            <a href="mailto:arurajatmathur@gmail.com">arurajatmathur@gmail.com</a>
          </p>
          <p className="text-2xl flex items-center gap-2 text-white">
            <MdOutlinePhone />
            <a href="tel:7447604055">+91 7447604055</a>
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
        >
          <h1 className="text-[50px] lg:text-[200px] whitespace-nowrap font-semibold text-white/70 absolute bottom-0 uppercase">
            Arushi Mathur
          </h1>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
