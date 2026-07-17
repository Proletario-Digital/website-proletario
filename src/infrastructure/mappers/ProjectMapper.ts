import { Project } from "../../domain/entities/Project";
import { WPProject } from "../../services/wordpress-api";

export class ProjectMapper {
  static toDomain(wpProject: WPProject): Project {
    return {
      id: wpProject.id,
      slug: wpProject.slug,
      title: wpProject.title.rendered,
      date: wpProject.date,
      featuredImage: this.getFeaturedImage(wpProject),
      url: wpProject.acf?.url,
      categories: this.getCategories(wpProject),
    };
  }

  private static getFeaturedImage(project: WPProject): string | null {
    const media = project._embedded?.["wp:featuredmedia"]?.[0];
    if (!media) return null;

    return (
      media.media_details?.sizes?.large?.source_url ||
      media.media_details?.sizes?.medium?.source_url ||
      media.source_url
    );
  }

  private static getCategories(project: WPProject): Array<{ id: number; name: string; slug: string }> {
    const terms = project._embedded?.["wp:term"]?.[0];
    return terms || [];
  }
}
