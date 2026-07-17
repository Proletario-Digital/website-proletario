import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, User, ArrowLeft, Clock, Tag, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePostBySlug, usePosts } from "@/hooks/usePosts";
import { formatDate, stripHtmlTags } from "@/services/wordpress-api";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading, error } = usePostBySlug(slug);
  
  // Fetch related posts
  const postCategories = post ? post.categories : [];
  const { data: relatedPostsData } = usePosts({
    perPage: 3,
    categories: postCategories.length > 0 ? [postCategories[0].id] : undefined,
  });

  const relatedPosts = relatedPostsData?.posts.filter(p => p.id !== post?.id).slice(0, 2) || [];

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: stripHtmlTags(post.title),
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copiado para a área de transferência!");
    }
  };

  // Calculate reading time
  const getReadingTime = (content: string): number => {
    const text = stripHtmlTags(content);
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="pt-24 pb-16">
          <div className="container-custom max-w-4xl">
            <Skeleton className="h-8 w-64 mb-8" />
            <Skeleton className="h-12 w-full mb-4" />
            <Skeleton className="h-8 w-3/4 mb-8" />
            <div className="flex gap-4 mb-8">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-24" />
            </div>
            <Skeleton className="h-96 w-full mb-8 rounded-2xl" />
            <div className="space-y-4">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-5/6" />
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !post) {
    return (
      <>
        <Helmet>
          <title>Artigo não encontrado | Proletário Digital</title>
        </Helmet>
        <Header />
        <main className="pt-32 pb-16">
          <div className="container-custom text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Artigo não encontrado</h1>
            <p className="text-muted-foreground mb-8">
              O artigo que procura não existe ou foi removido.
            </p>
            <Button asChild variant="accent">
              <Link to="/blog">
                <ArrowLeft size={18} className="mr-2" />
                Voltar ao Blog
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const readingTime = getReadingTime(post.content);
  const pageTitle = stripHtmlTags(post.title);
  const pageDescription = post.excerpt.slice(0, 160);

  return (
    <>
      <Helmet>
        <title>{pageTitle} | Proletário Digital</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        {post.featuredImage && <meta property="og:image" content={post.featuredImage} />}
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:author" content={post.authorName} />
      </Helmet>

      <Header />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-16 page-header-bg">
          <div className="container-custom max-w-4xl">
            {/* Breadcrumb */}
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground">
                      Início
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/blog" className="text-primary-foreground/70 hover:text-primary-foreground">
                      Blog
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/50" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary-foreground truncate max-w-[200px]">
                    {pageTitle}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* Categories */}
            {post.categories.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.categories.map((cat) => (
                  <Badge key={cat.id} className="bg-accent text-accent-foreground">
                    {cat.name}
                  </Badge>
                ))}
              </div>
            )}

            {/* Title */}
            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6"
              dangerouslySetInnerHTML={{ __html: post.title }}
            />

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/80">
              <span className="flex items-center gap-2">
                <User size={18} />
                {post.authorName}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {formatDate(post.date)}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={18} />
                {readingTime} min de leitura
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Share2 size={18} className="mr-2" />
                Partilhar
              </Button>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="container-custom max-w-4xl">
            {/* Featured Image */}
            {post.featuredImage && (
              <div className="relative -mt-16 mb-10 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={post.featuredImage}
                  alt={pageTitle}
                  className="w-full h-auto max-h-[500px] object-cover"
                />
              </div>
            )}

            {/* Article Content */}
            <article 
              className="prose prose-lg max-w-none
                prose-headings:text-foreground prose-headings:font-bold
                prose-p:text-foreground/90 prose-p:leading-relaxed
                prose-a:text-accent prose-a:no-underline hover:prose-a:underline
                prose-strong:text-foreground
                prose-ul:text-foreground/90 prose-ol:text-foreground/90
                prose-li:text-foreground/90
                prose-blockquote:border-accent prose-blockquote:text-foreground/80 prose-blockquote:italic
                prose-img:rounded-xl prose-img:shadow-lg
                prose-code:bg-muted prose-code:text-accent prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
                prose-pre:bg-muted prose-pre:text-foreground"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            {post.categories.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 mt-10 pt-8 border-t border-border">
                <Tag size={18} className="text-muted-foreground" />
                {post.categories.map((cat) => (
                  <Link
                    key={cat.id}
                    to={`/blog?category=${cat.id}`}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Back Button */}
            <div className="mt-10">
              <Button asChild variant="outline">
                <Link to="/blog">
                  <ArrowLeft size={18} className="mr-2" />
                  Voltar ao Blog
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="section-padding bg-muted/50">
            <div className="container-custom">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
                Artigos Relacionados
              </h2>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {relatedPosts.map((relatedPost) => {
                  return (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative h-48 overflow-hidden bg-muted">
                        {relatedPost.featuredImage ? (
                          <img
                            src={relatedPost.featuredImage}
                            alt={stripHtmlTags(relatedPost.title)}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                            <span className="text-4xl font-bold text-primary/30">PD</span>
                          </div>
                        )}
                        {relatedPost.categories.length > 0 && (
                          <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                            {relatedPost.categories[0].name}
                          </Badge>
                        )}
                      </div>
                      <div className="p-6">
                        <p className="text-sm text-muted-foreground mb-2">
                          {formatDate(relatedPost.date)}
                        </p>
                        <h3 
                          className="text-lg font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: relatedPost.title }}
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;

