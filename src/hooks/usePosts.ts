import { useQuery } from "@tanstack/react-query";
import { WordPressPostRepository } from "@/infrastructure/repositories/WordPressPostRepository";
import { WordPressProjectRepository } from "@/infrastructure/repositories/WordPressProjectRepository";
import { FetchPostsParams } from "@/domain/repositories/PostRepository";

const postRepository = new WordPressPostRepository();
const projectRepository = new WordPressProjectRepository();

export function usePosts(params: FetchPostsParams = {}) {
  return useQuery({
    queryKey: ["posts", params],
    queryFn: () => postRepository.fetchPosts(params),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}

export function usePostBySlug(slug: string | undefined) {
  return useQuery({
    queryKey: ["post", slug],
    queryFn: () => (slug ? postRepository.fetchPostBySlug(slug) : Promise.resolve(null)),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
  });
}

export function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => postRepository.fetchCategories(),
    staleTime: 1000 * 60 * 30, // 30 minutes
  });
}

export function useProjects() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: () => projectRepository.fetchProjects(),
    staleTime: 1000 * 60 * 10,
  });
}

export function useProjectCategories() {
  return useQuery({
    queryKey: ["project-categories"],
    queryFn: () => projectRepository.fetchProjectCategories(),
    staleTime: 1000 * 60 * 30,
  });
}

