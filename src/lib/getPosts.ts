import { WPPost } from "@/types/wordpress";

export async function getPosts(): Promise<WPPost[]> {
  try {
    const res = await fetch(
      "https://blogs.designedbyarushi.com/wp-json/wp/v2/posts?_embed",
      // { next: { revalidate: 60 } }
    );
    if (!res.ok) return [];
    return await res.json();
  } catch (err) {
    console.error("Fetch failed:", err);
    return [];
  }
}