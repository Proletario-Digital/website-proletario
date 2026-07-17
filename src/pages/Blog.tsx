import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, User, ArrowRight, Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { usePosts, useCategories } from "@/hooks/usePosts";
import { formatDate, stripHtmlTags } from "@/services/wordpress-api";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(searchParams.get("search") || "");
  
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const searchQuery = searchParams.get("search") || "";
  const categoryFilter = searchParams.get("category") ? parseInt(searchParams.get("category")!, 10) : undefined;

  const { data: postsData, isLoading: postsLoading, error: postsError } = usePosts({
    page: currentPage,
    perPage: 9,
    search: searchQuery || undefined,
    categories: categoryFilter ? [categoryFilter] : undefined,
  });

  const { data: categories } = useCategories();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const newParams = new URLSearchParams(searchParams);
    if (searchInput.trim()) {
      newParams.set("search", searchInput.trim());
    } else {
      newParams.delete("search");
    }
    newParams.set("page", "1");
    setSearchParams(newParams);
  };

  const clearSearch = () => {
    setSearchInput("");
    const newParams = new URLSearchParams(searchParams);
    newParams.delete("search");
    newParams.set("page", "1");
    setSearchParams(newParams);
  };

  const handleCategoryClick = (categoryId: number | null) => {
    const newParams = new URLSearchParams(searchParams);
    if (categoryId) {
      newParams.set("category", categoryId.toString());
    } else {
      newParams.delete("category");
    }
    newParams.set("page", "1");
    setSearchParams(newParams);
  };

  const handlePageChange = (page: number) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", page.toString());
    setSearchParams(newParams);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Blog | Proletário Digital - Dicas de Marketing Digital e Web</title>
        <meta
          name="description"
          content="Artigos e dicas sobre marketing digital, desenvolvimento web, SEO e tendências do mercado digital em Angola."
        />
      </Helmet>

      <Header />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-24 page-header-bg">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Dicas e <span className="text-accent">Insights</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8">
                Conteúdo relevante sobre marketing digital, desenvolvimento web e tendências do mercado.
              </p>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="max-w-xl mx-auto">
                <div className="relative flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
                    <Input
                      type="text"
                      placeholder="Pesquisar artigos..."
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      className="pl-12 pr-10 h-12 bg-background/95 border-0 text-foreground placeholder:text-muted-foreground"
                    />
                    {searchInput && (
                      <button
                        type="button"
                        onClick={clearSearch}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        <X size={18} />
                      </button>
                    )}
                  </div>
                  <Button type="submit" variant="accent" className="h-12 px-6">
                    Pesquisar
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Categories */}
        {categories && categories.length > 0 && (
          <section className="py-6 bg-muted/50 border-b">
            <div className="container-custom">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <Button
                  variant={!categoryFilter ? "accent" : "outline"}
                  size="sm"
                  onClick={() => handleCategoryClick(null)}
                  className="rounded-full"
                >
                  Todas
                </Button>
                {categories.filter(cat => cat.count > 0).map((category) => (
                  <Button
                    key={category.id}
                    variant={categoryFilter === category.id ? "accent" : "outline"}
                    size="sm"
                    onClick={() => handleCategoryClick(category.id)}
                    className="rounded-full"
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Search Results Info */}
        {(searchQuery || categoryFilter) && (
          <section className="py-4 bg-background border-b">
            <div className="container-custom">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  {postsData?.totalPosts || 0} resultado(s) encontrado(s)
                  {searchQuery && <> para "<strong className="text-foreground">{searchQuery}</strong>"</>}
                </p>
                <Button variant="ghost" size="sm" onClick={() => {
                  clearSearch();
                  handleCategoryClick(null);
                }}>
                  Limpar filtros
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            {postsLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="bg-card rounded-2xl overflow-hidden shadow-sm">
                    <Skeleton className="h-48 w-full" />
                    <div className="p-6">
                      <div className="flex gap-4 mb-3">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                      <Skeleton className="h-6 w-full mb-2" />
                      <Skeleton className="h-6 w-3/4 mb-3" />
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-2/3 mb-4" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </div>
                ))}
              </div>
            ) : postsError ? (
              <div className="text-center py-12">
                <p className="text-destructive text-lg mb-4">Erro ao carregar os artigos.</p>
                <Button onClick={() => window.location.reload()} variant="outline">
                  Tentar novamente
                </Button>
              </div>
            ) : postsData?.posts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg mb-4">
                  Nenhum artigo encontrado.
                </p>
                {(searchQuery || categoryFilter) && (
                  <Button onClick={() => {
                    clearSearch();
                    handleCategoryClick(null);
                  }} variant="outline">
                    Ver todos os artigos
                  </Button>
                )}
              </div>
            ) : (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {postsData?.posts.map((post) => {
                    return (
                      <article
                        key={post.id}
                        className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                      >
                        <Link to={`/blog/${post.slug}`}>
                          <div className="relative h-48 overflow-hidden bg-muted">
                            {post.featuredImage ? (
                              <img
                                src={post.featuredImage}
                                alt={stripHtmlTags(post.title)}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                                <span className="text-4xl font-bold text-primary/30">PD</span>
                              </div>
                            )}
                            {post.categories.length > 0 && (
                              <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                                {post.categories[0].name}
                              </Badge>
                            )}
                          </div>
                        </Link>

                        <div className="p-6">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                            <span className="flex items-center gap-1">
                              <User size={14} />
                              {post.authorName}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {formatDate(post.date)}
                            </span>
                          </div>

                          <Link to={`/blog/${post.slug}`}>
                            <h2 
                              className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-200 line-clamp-2"
                              dangerouslySetInnerHTML={{ __html: post.title }}
                            />
                          </Link>

                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>

                          <Link
                            to={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all duration-200"
                          >
                            Ler mais
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      </article>
                    );
                  })}
                </div>

                {/* Pagination */}
                {postsData && postsData.totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-12">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage <= 1}
                    >
                      Anterior
                    </Button>
                    
                    {Array.from({ length: postsData.totalPages }, (_, i) => i + 1)
                      .filter(page => {
                        if (postsData.totalPages <= 5) return true;
                        if (page === 1 || page === postsData.totalPages) return true;
                        if (Math.abs(page - currentPage) <= 1) return true;
                        return false;
                      })
                      .map((page, index, arr) => {
                        const showEllipsis = index > 0 && page - arr[index - 1] > 1;
                        return (
                          <div key={page} className="flex items-center gap-2">
                            {showEllipsis && <span className="px-2 text-muted-foreground">...</span>}
                            <Button
                              variant={currentPage === page ? "accent" : "outline"}
                              size="sm"
                              onClick={() => handlePageChange(page)}
                            >
                              {page}
                            </Button>
                          </div>
                        );
                      })}
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage >= postsData.totalPages}
                    >
                      Próximo
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;

