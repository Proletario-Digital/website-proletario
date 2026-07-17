import { Post } from "../entities/Post";
import { Category } from "../entities/Category";

export interface PostsResponse {
  posts: Post[];
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

export interface PostRepository {
  fetchPosts(params?: FetchPostsParams): Promise<PostsResponse>;
  fetchPostBySlug(slug: string): Promise<Post | null>;
  fetchPostById(id: number): Promise<Post>;
  fetchCategories(): Promise<Category[]>;
}
