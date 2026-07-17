import { Template } from "../entities/Template";

export interface TemplateRepository {
  fetchTemplates(): Promise<Template[]>;
}
