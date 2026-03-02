import { WPPost } from "@/types/wordpress";

export async function getRecentPosts(
  excludeSlug: string
): Promise<WPPost[]> {
  try {
    const res = await fetch(
      `https://blogs.designedbyarushi.com/wp-json/wp/v2/posts?_embed&per_page=4`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) return [];

    const data: WPPost[] = await res.json();

    // current post remove karo + sirf 3 return karo
    return data.filter((post) => post.slug !== excludeSlug).slice(0, 3);
  } catch {
    return [];
  }
}