export interface Project {
  id: number;
  slug: string;
  title: string;
  date: string;
  featuredImage: string | null;
  url?: string;
  categories: Array<{ id: number; name: string; slug: string }>;
}
