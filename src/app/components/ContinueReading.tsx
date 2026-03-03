"use client";

import BlogCard from "@/app/components/BlogCard";
import { WPPost } from "@/types/wordpress";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface Props {
  posts: WPPost[];
}

export default function ContinueReading({ posts }: Props) {
  const router = useRouter();

  return (
    <div className="px-5 md:px-[90px] py-10 pb-20 md:py-20 flex flex-col gap-10 bg-[#FFBBE6]">
      <h1 className="text-[40px] md:text-[80px] text-white font-semibold">
        Continue Reading
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <motion.div
        className="relative flex justify-center"
        whileHover={{ y: -2 }}
        whileTap={{ y: 2 }}
      >
        <motion.button
          onClick={() => router.push("/blogs")}
          className="absolute -bottom-8 z-30 bg-[#FFE2E2] text-black font-semibold text-[16px] w-[172px] h-[46px] rounded-[4px] flex items-center justify-center gap-2 cursor-pointer"
        >
          View All
          <Image
            src={"/arrow-right.png"}
            width={20}
            height={20}
            alt="arrow-right"
          />
        </motion.button>

        <motion.div className="absolute -bottom-[37px] ml-2 z-20 bg-red-800 w-[172px] h-[46px] rounded-[4px]" />
      </motion.div>
    </div>
  );
}