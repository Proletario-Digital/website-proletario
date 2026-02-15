import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useProjects, useProjectCategories } from "@/hooks/usePosts";
import { getProjectCategories } from "@/services/wordpress-api";

const Portfolio = () => {
  const { data: projects, isLoading } = useProjects();
  const { data: categories } = useProjectCategories();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const filteredProjects = activeCategory
    ? projects?.filter((p) => p._embedded?.["wp:term"]?.[0]?.some((t) => t.id === activeCategory))
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
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-accent text-sm font-semibold mb-6">
                Portfólio
              </span>
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
              <div className="flex justify-center py-20">
                <Loader2 className="w-8 h-8 animate-spin text-accent" />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects?.map((project) => {
                  const image =
                    project._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
                  const url = project.acf?.url;
                  const projectCats = getProjectCategories(project);

                  return (
                    <div
                      key={project.id}
                      className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative h-56 overflow-hidden">
                        {image && (
                          <img
                            src={image}
                            alt={project.title.rendered}
                            className="w-full h-[300%] object-cover object-top transition-[object-position] duration-[3s] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:object-bottom"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                          {url && (
                            <Button variant="hero" size="sm" asChild>
                              <a href={url} target="_blank" rel="noopener noreferrer">
                                <ExternalLink size={16} />
                                Ver Projeto
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                      <div className="p-6">
                        {projectCats.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {projectCats.map((cat) => (
                              <Badge key={cat.id} variant="secondary" className="text-xs">
                                {cat.name}
                              </Badge>
                            ))}
                          </div>
                        )}
                        <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                          {project.title.rendered}
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
