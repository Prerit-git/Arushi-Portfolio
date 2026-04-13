import { WPPost } from "@/types/wordpress";

export async function getPosts(): Promise<WPPost[]> {
  const baseUrl = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "https://blogs.designedbyarushi.com/wp-json/wp/v2";

  try {
    const res = await fetch(`${baseUrl}/posts`, { 
      cache: 'no-store'
    });
    if (!res.ok) return [];
    return await res.json();
  } catch (err) {
    console.error("Fetch failed:", err);
    return [];
  }
}