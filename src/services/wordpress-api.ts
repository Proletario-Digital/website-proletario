const API_BASE_URL = "https://proletariodigital.sharingancode.site/index.php/wp-json";

export interface WPPost {
  id: number;
  date: string;
  date_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{
      id: number;
      name: string;
      avatar_urls?: {
        [key: string]: string;
      };
    }>;
    "wp:featuredmedia"?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
      media_details?: {
        sizes?: {
          medium?: { source_url: string };
          large?: { source_url: string };
          full?: { source_url: string };
        };
      };
    }>;
    "wp:term"?: Array<
      Array<{
        id: number;
        name: string;
        slug: string;
      }>
    >;
  };
}

export interface WPCategory {
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  parent: number;
}

export interface PostsResponse {
  posts: WPPost[];
  totalPages: number;
  totalPosts: number;
}

export interface FetchPostsParams {
  page?: number;
  perPage?: number;
  search?: string;
  categories?: number[];
  orderBy?: "date" | "title" | "id";
  order?: "asc" | "desc";
}

export async function fetchPosts(params: FetchPostsParams = {}): Promise<PostsResponse> {
  const {
    page = 1,
    perPage = 9,
    search,
    categories,
    orderBy = "date",
    order = "desc",
  } = params;

  const queryParams = new URLSearchParams({
    page: page.toString(),
    per_page: perPage.toString(),
    orderby: orderBy,
    order: order,
    _embed: "true",
  });

  if (search) {
    queryParams.append("search", search);
  }

  if (categories && categories.length > 0) {
    queryParams.append("categories", categories.join(","));
  }

  const response = await fetch(`${API_BASE_URL}/wp/v2/posts?${queryParams}`);

  if (!response.ok) {
    throw new Error(`Erro ao buscar posts: ${response.status}`);
  }

  const posts: WPPost[] = await response.json();
  const totalPages = parseInt(response.headers.get("X-WP-TotalPages") || "1", 10);
  const totalPosts = parseInt(response.headers.get("X-WP-Total") || "0", 10);

  return { posts, totalPages, totalPosts };
}

export async function fetchPostBySlug(slug: string): Promise<WPPost | null> {
  const queryParams = new URLSearchParams({
    slug: slug,
    _embed: "true",
  });

  const response = await fetch(`${API_BASE_URL}/wp/v2/posts?${queryParams}`);

  if (!response.ok) {
    throw new Error(`Erro ao buscar post: ${response.status}`);
  }

  const posts: WPPost[] = await response.json();
  return posts.length > 0 ? posts[0] : null;
}

export async function fetchPostById(id: number): Promise<WPPost> {
  const queryParams = new URLSearchParams({
    _embed: "true",
  });

  const response = await fetch(`${API_BASE_URL}/wp/v2/posts/${id}?${queryParams}`);

  if (!response.ok) {
    throw new Error(`Erro ao buscar post: ${response.status}`);
  }

  return response.json();
}

export async function fetchCategories(): Promise<WPCategory[]> {
  const response = await fetch(`${API_BASE_URL}/wp/v2/categories?per_page=100`);

  if (!response.ok) {
    throw new Error(`Erro ao buscar categorias: ${response.status}`);
  }

  return response.json();
}

// Projects (Projecto CPT)
export interface WPProject {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  featured_media: number;
  acf: {
    url?: string;
  };
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
      media_details?: {
        sizes?: {
          medium?: { source_url: string };
          large?: { source_url: string };
          full?: { source_url: string };
        };
      };
    }>;
    "wp:term"?: Array<
      Array<{
        id: number;
        name: string;
        slug: string;
      }>
    >;
  };
}

export async function fetchProjects(): Promise<WPProject[]> {
  const response = await fetch(
    `${API_BASE_URL}/wp/v2/projecto?per_page=100&_embed=true`
  );

  if (!response.ok) {
    throw new Error(`Erro ao buscar projectos: ${response.status}`);
  }

  return response.json();
}

export interface WPProjectCategory {
  id: number;
  count: number;
  name: string;
  slug: string;
}

export async function fetchProjectCategories(): Promise<WPProjectCategory[]> {
  const response = await fetch(`${API_BASE_URL}/wp/v2/categoria-projecto?per_page=100`);

  if (!response.ok) {
    throw new Error(`Erro ao buscar categorias de projecto: ${response.status}`);
  }

  return response.json();
}

export function getProjectCategories(project: WPProject): Array<{ id: number; name: string; slug: string }> {
  const terms = project._embedded?.["wp:term"]?.[0];
  return terms || [];
}

// Utility functions
export function stripHtmlTags(html: string): string {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function getPostFeaturedImage(post: WPPost): string | null {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  if (!media) return null;

  return (
    media.media_details?.sizes?.large?.source_url ||
    media.media_details?.sizes?.medium?.source_url ||
    media.source_url
  );
}

export function getPostAuthorName(post: WPPost): string {
  return post._embedded?.author?.[0]?.name || "Equipa PD";
}

export function getPostCategories(post: WPPost): Array<{ id: number; name: string; slug: string }> {
  const terms = post._embedded?.["wp:term"]?.[0];
  return terms || [];
}
