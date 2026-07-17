import { Post } from "../../domain/entities/Post";
import { Category } from "../../domain/entities/Category";
import { WPPost, WPCategory, stripHtmlTags } from "../../services/wordpress-api";

export class PostMapper {
  static toDomain(wpPost: WPPost): Post {
    return {
      id: wpPost.id,
      slug: wpPost.slug,
      title: wpPost.title.rendered,
      content: wpPost.content.rendered,
      excerpt: stripHtmlTags(wpPost.excerpt.rendered),
      date: wpPost.date,
      featuredImage: this.getFeaturedImage(wpPost),
      authorName: wpPost._embedded?.author?.[0]?.name || "Equipa PD",
      categories: this.getCategories(wpPost),
    };
  }

  static toCategoryDomain(wpCategory: WPCategory): Category {
    return {
      id: wpCategory.id,
      name: wpCategory.name,
      slug: wpCategory.slug,
      count: wpCategory.count,
    };
  }

  private static getFeaturedImage(post: WPPost): string | null {
    const media = post._embedded?.["wp:featuredmedia"]?.[0];
    if (!media) return null;

    return (
      media.media_details?.sizes?.large?.source_url ||
      media.media_details?.sizes?.medium?.source_url ||
      media.source_url
    );
  }

  private static getCategories(post: WPPost): Array<{ id: number; name: string; slug: string }> {
    const terms = post._embedded?.["wp:term"]?.[0];
    return terms || [];
  }
}

