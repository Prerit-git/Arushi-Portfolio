export interface WPFeaturedMedia {
  source_url: string;
}

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: WPFeaturedMedia[];
  };
}