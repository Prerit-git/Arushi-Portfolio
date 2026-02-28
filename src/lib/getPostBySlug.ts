import { WPPost } from "@/types/wordpress";

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(
      `https://blogs.designedbyarushi.com/wp-json/wp/v2/posts?slug=${slug}&_embed`,
      { next: { revalidate: 60 } }
    );
    if (!res.ok) return null;

    const data: WPPost[] = await res.json();
    return data[0] || null;
  } catch (err) {
    console.error("Fetch post by slug failed:", err);
    return null;
  }
}