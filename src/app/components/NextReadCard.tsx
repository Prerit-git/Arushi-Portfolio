"use client";
import { motion } from "framer-motion";

import Image from "next/image";

interface NextReadCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

export default function NextReadCard({
  title,
  description,
  imageUrl,
  onClick,
}: NextReadCardProps) {
  return (
    <section className="w-full bg-[#25293F] rounded-2xl px-6 py-8 md:px-8 md:py-8">
      <p className="text-[32px] font-bold text-white text-center nextReadStyle">
        Your next read
      </p>
      <div className="flex flex-col lg:flex-row items-center gap-6 py-8">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="w-full pt-4">
            <Image src={imageUrl} alt={title} height={179} width={500} className="object-contain rounded-2xl" />
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col text-white">
           <h1 className="text-[20px] md:text-[24px] font-semibold text-[#ffffff] mb-4 leading-[110%]">
                  {title.split("•")[0].trim()}{" "}
                  <span className="text-[#FF0000]">
                    • {title.split("•")[1]?.trim()}
                  </span>
                </h1>

          <p className="text-sm md:text-base text-gray-300 leading-[115%]">
            {description}
          </p>

          <motion.div
            className="relative mt-[32px]"
            whileHover={{ y: -2 }}
            whileTap={{ y: 2 }}
          >
            <motion.button className="absolute -bottom-10 z-30 bg-[#FFE2E2] text-black p-[8px] font-bold text-[16px] w-[172px] h-[46px] rounded-[4px] flex items-center justify-center cursor-pointer gap-2">
              View Case Study
              <span>
                <img
                  src="/arrow-up-right.png"
                  alt="arrow-icon"
                  className="h-[20px] w-[20px]"
                />
              </span>
            </motion.button>
            <motion.div className="absolute left-[5px] bg-red-800 text-black p-[10px] font-extrabold text-[16px] w-[172px] h-[46px] rounded-[4px] flex items-center justify-center cursor-pointer" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
