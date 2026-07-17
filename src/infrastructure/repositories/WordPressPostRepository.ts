import { PostRepository, FetchPostsParams, PostsResponse } from "../../domain/repositories/PostRepository";
import { Post } from "../../domain/entities/Post";
import { Category } from "../../domain/entities/Category";
import { fetchPosts, fetchPostBySlug, fetchPostById, fetchCategories } from "../../services/wordpress-api";
import { PostMapper } from "../mappers/PostMapper";

export class WordPressPostRepository implements PostRepository {
  async fetchPosts(params?: FetchPostsParams): Promise<PostsResponse> {
    const response = await fetchPosts(params);
    return {
      posts: response.posts.map(post => PostMapper.toDomain(post)),
      totalPages: response.totalPages,
      totalPosts: response.totalPosts,
    };
  }

  async fetchPostBySlug(slug: string): Promise<Post | null> {
    const wpPost = await fetchPostBySlug(slug);
    return wpPost ? PostMapper.toDomain(wpPost) : null;
  }

  async fetchPostById(id: number): Promise<Post> {
    const wpPost = await fetchPostById(id);
    return PostMapper.toDomain(wpPost);
  }

  async fetchCategories(): Promise<Category[]> {
    const wpCategories = await fetchCategories();
    return wpCategories.map(cat => PostMapper.toCategoryDomain(cat));
  }
}
