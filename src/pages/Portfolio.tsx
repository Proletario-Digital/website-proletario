import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useProjects, useProjectCategories } from "@/hooks/usePosts";

const Portfolio = () => {
  const { data: projects, isLoading } = useProjects();
  const { data: categories } = useProjectCategories();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const filteredProjects = activeCategory
    ? projects?.filter((p) => p.categories.some((t) => t.id === activeCategory))
    : projects;

  return (
    <>
      <Helmet>
        <title>Portfólio | Proletário Digital - Nossos Projetos</title>
        <meta
          name="description"
          content="Conheça os projetos de sucesso da Proletário Digital. Sites institucionais, e-commerce, blogs e landing pages desenvolvidos para nossos clientes."
        />
      </Helmet>

      <Header />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-24 page-header-bg">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Projetos que <span className="text-accent">Inspiram</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Conheça alguns dos trabalhos que desenvolvemos com dedicação para nossos clientes.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            {/* Category Filters */}
            {categories && categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                <Button
                  variant={activeCategory === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(null)}
                  className="rounded-full"
                >
                  Todos
                </Button>
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    variant={activeCategory === cat.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(cat.id)}
                    className="rounded-full"
                  >
                    {cat.name}
                  </Button>
                ))}
              </div>
            )}

            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-card rounded-2xl overflow-hidden shadow-sm">
                    {/* Image skeleton */}
                    <div className="relative h-56 overflow-hidden bg-muted">
                      <div className="absolute inset-0 shimmer" />
                    </div>
                    {/* Content skeleton */}
                    <div className="p-6 space-y-3">
                      {/* Badge skeleton */}
                      <div className="flex gap-2">
                        <div className="relative h-5 w-16 rounded-full bg-muted overflow-hidden">
                          <div className="absolute inset-0 shimmer" />
                        </div>
                        <div className="relative h-5 w-20 rounded-full bg-muted overflow-hidden">
                          <div className="absolute inset-0 shimmer" />
                        </div>
                      </div>
                      {/* Title skeleton */}
                      <div className="relative h-6 w-3/4 rounded-lg bg-muted overflow-hidden">
                        <div className="absolute inset-0 shimmer" />
                      </div>
                      <div className="relative h-4 w-1/2 rounded-lg bg-muted overflow-hidden">
                        <div className="absolute inset-0 shimmer" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects?.map((project) => {
                  return (
                    <div
                      key={project.id}
                      className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative h-56 overflow-hidden">
                        {project.featuredImage && (
                          <img
                            src={project.featuredImage}
                            alt={project.title}
                            className="w-full h-[300%] object-cover object-top group-hover:object-bottom"
                            style={{ transition: "object-position 3s cubic-bezier(0.25, 0.1, 0.25, 1)" }}
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                          {project.url && (
                            <Button variant="hero" size="sm" asChild>
                              <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={16} />
                                Ver Projeto
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                      <div className="p-6">
                        {project.categories.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.categories.map((cat) => (
                              <Badge key={cat.id} variant="secondary" className="text-xs">
                                {cat.name}
                              </Badge>
                            ))}
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {filteredProjects?.length === 0 && !isLoading && (
              <p className="text-center text-muted-foreground py-20">
                Nenhum projecto encontrado nesta categoria.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;

