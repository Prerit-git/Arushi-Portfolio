"use client"

import { WPPost } from "@/types/wordpress";
import BlogCard from "./BlogCard";
import { useEffect, useState } from "react";
import { getPosts } from "@/lib/getPosts";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  posts: WPPost[];
}
const BlogsSection = ()=>{
    const [posts, setPosts] = useState<WPPost[]>([]);
    const router = useRouter();

     useEffect(() => {
    async function fetchPosts() {
       const data = await getPosts();
      setPosts(data);
    }

    fetchPosts();
  }, []);

    return(
        <>
        <section className="px-5 md:px-[90px] py-10 pb-20 md:py-20 flex flex-col gap-10 bg-[#FFBBE6] h-auto" id="blog-section">
        <h1 className="text-[40px] md:text-[80px] text-white">Blogs</h1>

        <div className="grid md:grid-cols-3 gap-[96px]">
      {posts.slice(0, 3).map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>

    <motion.div
            className="relative flex justify-center"
            whileHover={{ y: -2 }}
            whileTap={{ y: 2 }}
          >
            <motion.button onClick={()=> router.push("/blogs")}
              className="absolute -bottom-8 z-30 bg-[#FFE2E2] text-black font-bold text-[16px] w-[172px] h-[46px] rounded-[4px] flex items-center justify-center cursor-pointer gap-2"
            >
              View All <span><Image src={"/arrow-right.png"} width={20} height={20} alt="arrow-right"/></span>
            </motion.button>
            <motion.div
              className="absolute -bottom-[37px] ml-2 z-20 bg-red-800 text-black font-extrabold text-[16px] w-[172px] h-[46px] rounded-[4px] flex items-center justify-center cursor-pointer"
            />
          </motion.div>
        
        </section>
        </>
    )
}

export default BlogsSection