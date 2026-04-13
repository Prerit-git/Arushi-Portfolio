"use client";

import { useState, useEffect } from "react";
import { WPPost } from "@/types/wordpress";
import { getPosts } from "@/lib/getPosts";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BlogsSection() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="px-5 md:px-[90px] py-10 bg-[#FFBBE6] h-[400px] flex items-center justify-center">
        <p className="text-white text-xl animate-pulse">Loading Blogs...</p>
      </section>
    );
  }

  if (posts.length === 0) return null;

  return (
    <section className="px-5 md:px-[90px] py-10 pb-20 md:py-20 flex flex-col gap-10 bg-[#FFBBE6] h-auto" id="blog-section">
      <h1 className="text-[40px] md:text-[80px] text-white font-bold">Blogs</h1>

      <div className="grid md:grid-cols-3 gap-10 md:gap-[96px]">
        {posts.slice(0, 3).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <motion.div
        className="relative flex justify-center mt-10"
        whileHover={{ y: -2 }}
        whileTap={{ y: 2 }}
      >
        <motion.button 
          onClick={() => router.push("/blogs")}
          className="absolute -bottom-8 z-30 bg-[#FFE2E2] text-black font-bold text-[16px] w-[172px] h-[46px] rounded-[4px] flex items-center justify-center cursor-pointer gap-2"
        >
          View All <span><Image src={"/arrow-right.png"} width={20} height={20} alt="arrow-right"/></span>
        </motion.button>
        <motion.div
          className="absolute -bottom-[37px] ml-2 z-20 bg-red-800 text-black font-extrabold text-[16px] w-[172px] h-[46px] rounded-[4px] flex items-center justify-center cursor-pointer"
        />
      </motion.div>
    </section>
  );
}