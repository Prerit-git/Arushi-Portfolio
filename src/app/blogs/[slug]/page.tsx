import { getPostBySlug } from "@/lib/getPostBySlug";
import { WPPost } from "@/types/wordpress";

interface Props {
  params: { slug: string };
}

export default async function BlogDetailPage(props: Props) {
  const { slug } = await props.params;

  const post: WPPost | null = await getPostBySlug(slug);

  if (!post) return <div className="p-8 text-center text-white flex justify-center items-center h-screen">Blog Unavailable</div>;

  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <section className="pt-20 text-white">
    <div className="max-w-6xl mx-auto py-16 px-6">
      

      <p className="text-sm text-white">
        {new Date(post.date).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })}
      </p>
      <p
        className="text-[64px] font-bold mb-4 leading-[110%]"
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />


      <div
        className="prose prose-white max-w-full"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>

    </section>
  );
}