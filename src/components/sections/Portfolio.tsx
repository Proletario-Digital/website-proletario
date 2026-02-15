import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProjects } from "@/hooks/usePosts";
import { getPostFeaturedImage } from "@/services/wordpress-api";

const Portfolio = () => {
  const { data: projects, isLoading } = useProjects();

  const displayProjects = projects?.slice(0, 6) || [];

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
            Portfólio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Projetos que{" "}
            <span className="text-accent">Inspiram Confiança</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça alguns dos projetos que desenvolvemos com dedicação e qualidade
            para nossos clientes.
          </p>
        </div>

        {/* Projects Grid */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-accent" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project) => {
              const image =
                project._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
              const url = project.acf?.url;

              return (
                <div
                  key={project.id}
                  className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {/* Image with scroll effect */}
                  <div className="relative h-56 overflow-hidden">
                    {image && (
                      <img
                        src={image}
                        alt={project.title.rendered}
                        className="w-full h-[200%] object-cover object-top transition-all duration-[2s] ease-in-out group-hover:object-bottom"
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

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                      {project.title.rendered}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="default" size="lg" asChild>
            <Link to="/portfolio">
              Ver Portfólio Completo
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
