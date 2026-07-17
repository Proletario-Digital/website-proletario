export interface Post {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date: string;
  featuredImage: string | null;
  authorName: string;
  categories: Array<{ id: number; name: string; slug: string }>;
}
