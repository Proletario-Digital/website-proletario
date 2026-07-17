import { useQuery } from "@tanstack/react-query";
import { MockServiceRepository } from "../infrastructure/repositories/MockServiceRepository";

const serviceRepository = new MockServiceRepository();

export function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: () => serviceRepository.fetchServices(),
    staleTime: 1000 * 60 * 60, // 1 hour stale time for static mock data
  });
}
