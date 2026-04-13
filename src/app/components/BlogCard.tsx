"use client";

import Link from "next/link";
import Image from "next/image";
import { WPPost } from "@/types/wordpress";

interface Props {
  post: WPPost & { featured_image_src?: string };
}

export default function BlogCard({ post }: Props) {
  const featuredImage = post.featured_image_src;

  return (
    <Link href={`/blogs/${post.slug}`}>
      <div className="group bg-white rounded-[8px] shadow-sm hover:shadow-lg transition duration-300 overflow-hidden w-auto md:w-[384px] h-full flex flex-col">
        <div className="p-6 flex flex-col h-full">
          
          {/* Image Section */}
          <div className="overflow-hidden rounded-lg relative h-[240px] w-full bg-gray-100">
            {featuredImage ? (
              <Image
                src={featuredImage}
                alt={post.title.rendered}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 384px"
                unoptimized
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400 text-sm">
                No Image Available
              </div>
            )}
          </div>

          {/* Title & Arrow */}
          <div className="flex justify-between items-start pt-8 gap-2">
            <h2
              className="text-[24px] text-gray-900 font-semibold h-[64px] leading-[32px] line-clamp-2"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
            <div className="shrink-0 pt-1">
              <Image 
                src="/arrow-up-right.png" 
                width={24} 
                height={24} 
                alt="arrow-icon" 
              />
            </div>
          </div>

          {/* Excerpt */}
          <div
            className="text-[16px] line-clamp-3 pt-[12px] h-[84px] text-gray-500 leading-[24px] flex-grow"
            dangerouslySetInnerHTML={{
              __html: post.excerpt.rendered,
            }}
          />

          {/* Date */}
          <div className="mt-4 text-xs text-[#A90D0D] pt-[12px] font-medium">
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