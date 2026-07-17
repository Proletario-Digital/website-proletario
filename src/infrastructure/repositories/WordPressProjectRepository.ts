import { ProjectRepository } from "../../domain/repositories/ProjectRepository";
import { Project } from "../../domain/entities/Project";
import { fetchProjects, fetchProjectCategories } from "../../services/wordpress-api";
import { ProjectMapper } from "../mappers/ProjectMapper";

export class WordPressProjectRepository implements ProjectRepository {
  async fetchProjects(): Promise<Project[]> {
    const wpProjects = await fetchProjects();
    return wpProjects.map(project => ProjectMapper.toDomain(project));
  }

  async fetchProjectCategories(): Promise<any[]> {
    return fetchProjectCategories();
  }
}
