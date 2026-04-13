import BlogCard from "@/app/components/BlogCard";
import { getPosts } from "@/lib/getPosts";
import BackButton from "../components/BackButton";

export default async function BlogPage() {
 const posts = await getPosts();

  return (
    <div className="bg-white min-h-screen pt-40">
      <div className="pl-2 md:pl-[96px]">
        <BackButton/>
      </div>
      <section className="bg-[#FFBBF6] py-16 text-center px-6 flex flex-col items-center gap-[16px]">
        <span className="text-[18px] text-[#FF0000] font-semibold tracking-widest uppercase bg-white px-3 py-1 rounded-md">
          Blogs
        </span>

        <h1 className="text-4xl md:text-[48px] font-semibold">
          Thinking Out Loud
        </h1>

        <p className="max-w-4xl mx-auto text-[#4E4E4E] text-[20px]">
          My evolving thoughts on UX, product strategy, collaboration, and
          the messy middle of design shaped by real experience,
          experimentation, and reflection.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

    </div>
  );
}

export const revalidate = 60;