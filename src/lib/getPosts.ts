import { WPPost } from "@/types/wordpress";

export async function getPosts(): Promise<WPPost[]> {
  const res = await fetch(
    "https://blogs.designedbyarushi.com/wp-json/wp/v2/posts?_embed",
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return [];

  return res.json();
}