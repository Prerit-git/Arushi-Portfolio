import BackButton from "@/app/components/BackButton";
import Contact from "@/app/components/Contact";
import ContinueReading from "@/app/components/ContinueReading";
import { getPostBySlug } from "@/lib/getPostBySlug";
import { getRecentPosts } from "@/lib/getRecentPosts";
import { WPPost } from "@/types/wordpress";
import Image from "next/image";

interface Props {
  params: { slug: string };
}

export default async function BlogDetailPage(props: Props) {
  const { slug } = await props.params;

  const post: WPPost | null = await getPostBySlug(slug);
  const recentPosts = await getRecentPosts(slug);

  if (!post)
    return (
      <div className="p-8 text-center text-white flex justify-center items-center h-screen">
        Blog Unavailable
      </div>
    );

  //   const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <section className="pt-20 text-white">
      <div className="max-w-6xl mx-auto py-16 px-6">

        <BackButton/>

        <p className="text-sm text-white flex gap-2 items-center mb-3">
          <span>
            <Image
              src={"/calendar.png"}
              width={20}
              height={20}
              alt="calender-icon"
            />
          </span>
          {new Date(post.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
        <p
          className="text-[32px] md:text-[64px] font-bold mb-4 leading-[110%]"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        <div
          className="max-w-full blog-content"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />
      </div>

      {recentPosts.length > 0 && <ContinueReading posts={recentPosts} />}

      <Contact />
    </section>
  );
}
