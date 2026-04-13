import { WPPost } from "@/types/wordpress";

export async function getPosts(): Promise<WPPost[]> {
  const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || process.env.WORDPRESS_API_URL;

  try {
    const res = await fetch(`${baseUrl}/posts?_embed`);
    if (!res.ok) return [];
    return await res.json();
  } catch (err) {
    console.error("Fetch failed:", err);
    return [];
  }
}