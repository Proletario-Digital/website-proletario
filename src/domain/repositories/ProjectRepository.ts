import { Project } from "../entities/Project";

export interface ProjectRepository {
  fetchProjects(): Promise<Project[]>;
  fetchProjectCategories(): Promise<any[]>; // Using any for now as categories for projects might vary
}
