import { useQuery } from "@tanstack/react-query";
import {
  fetchPosts,
  fetchPostBySlug,
  fetchCategories,
  FetchPostsParams,
  WPPost,
  WPCategory,
  PostsResponse,
} from "@/services/wordpress-api";

export function usePosts(params: FetchPostsParams = {}) {
  return useQuery<PostsResponse>({
    queryKey: ["posts", params],
    queryFn: () => fetchPosts(params),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function usePostBySlug(slug: string | undefined) {
  return useQuery<WPPost | null>({
    queryKey: ["post", slug],
    queryFn: () => (slug ? fetchPostBySlug(slug) : Promise.resolve(null)),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCategories() {
  return useQuery<WPCategory[]>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: 1000 * 60 * 30, // 30 minutes
  });
}
