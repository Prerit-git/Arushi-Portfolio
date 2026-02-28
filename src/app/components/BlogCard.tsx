import Link from "next/link";
import { WPPost } from "@/types/wordpress";

interface Props {
  post: WPPost;
}

export default function BlogCard({ post }: Props) {
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="group bg-white rounded-[8px] shadow-sm hover:shadow-lg transition duration-300 overflow-hidden">
        <div className="p-6">
          {featuredImage && (
            <div className="overflow-hidden">
              <img
                src={featuredImage}
                alt={post.title.rendered}
                className="h-[240px] w-full object-cover transition duration-300 rounded-lg"
              />
            </div>
          )}

          <div className="flex justify-between items-center pt-8">
            <h2
              className="text-[24px] text-gray-900 font-semibold transition"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <img
              src="/arrow-up-right.png"
              alt="arrow-icon"
              className="h-[24px] w-[24px]"
            />
          </div>

          <div
            className="text-[16px] line-clamp-3 pt-[12px] h-[84px] text-gray-500"
            dangerouslySetInnerHTML={{
              __html: post.excerpt.rendered,
            }}
          />

          <div className="mt-4 text-xs text-[#A90D0D] pt-[12px]">
            {new Date(post.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
