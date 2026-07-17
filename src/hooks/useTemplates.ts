import { useQuery } from "@tanstack/react-query";
import { MockTemplateRepository } from "../infrastructure/repositories/MockTemplateRepository";

const templateRepository = new MockTemplateRepository();

export function useTemplates() {
  return useQuery({
    queryKey: ["templates"],
    queryFn: () => templateRepository.fetchTemplates(),
    staleTime: 1000 * 60 * 60, // 1 hour
  });
}
