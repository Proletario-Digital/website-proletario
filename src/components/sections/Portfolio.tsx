import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useProjects, useProjectCategories } from "@/hooks/usePosts";
import FadeIn from "@/components/animations/FadeIn";

const Portfolio = () => {
  const { data: projects, isLoading } = useProjects();
  const { data: categories } = useProjectCategories();
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const filteredProjects = activeCategory
    ? projects?.filter((p) => p.categories.some((t) => t.id === activeCategory))
    : projects;

  const displayProjects = filteredProjects?.slice(0, 6) || [];

  return (
    <section id="portfolio" className="section-padding bg-background overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-label justify-center">Portfólio</span>
          <h2 className="section-title mb-5">
            Projetos que{" "}
            <span className="text-gradient">Inspiram Confiança</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Conheça alguns dos projetos que desenvolvemos com dedicação e qualidade
            para nossos clientes em Angola e no mundo.
          </p>
        </FadeIn>

        {/* Category Filters */}
        {categories && categories.length > 0 && (
          <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-2.5 mb-12">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                activeCategory === null
                  ? "bg-[hsl(203_77%_15%)] text-white border-[hsl(203_77%_15%)] shadow-md"
                  : "text-muted-foreground border-border hover:border-[hsl(203_77%_15%)] hover:text-foreground"
              }`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-[hsl(203_77%_15%)] text-white border-[hsl(203_77%_15%)] shadow-md"
                    : "text-muted-foreground border-border hover:border-[hsl(203_77%_15%)] hover:text-foreground"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </FadeIn>
        )}

        {/* Projects Grid */}
        {isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-accent" />
          </div>
        ) : displayProjects.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            Nenhum projeto encontrado nesta categoria.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {displayProjects.map((project, index) => (
              <FadeIn
                key={project.id}
                delay={(index % 3) * 0.1}
                direction="up"
                className="group relative bg-card rounded-2xl overflow-hidden shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] border border-border/40 transition-all duration-400"
              >
                {/* Image area */}
                <div className="relative h-56 overflow-hidden bg-muted">
                  {project.featuredImage ? (
                    <img
                      src={project.featuredImage}
                      alt={project.title}
                      className="w-full h-[300%] object-cover object-top group-hover:object-bottom"
                      style={{ transition: "object-position 3s cubic-bezier(0.25, 0.1, 0.25, 1)" }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[hsl(203_77%_15%)] to-[hsl(176_100%_38%/0.5)]">
                      <span className="text-white/30 text-4xl font-black">{project.title.charAt(0)}</span>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[hsl(203_77%_12%/0.85)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-accent text-[hsl(203_77%_10%)] font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-accent/90 transition-colors duration-200 translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        <ExternalLink size={15} />
                        Ver Projeto
                      </a>
                    )}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  {project.categories.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.categories.map((cat) => (
                        <Badge key={cat.id} variant="secondary" className="text-[11px] font-semibold rounded-full">
                          {cat.name}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-200 leading-snug">
                    {project.title}
                  </h3>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

        {/* CTA */}
        <FadeIn className="text-center mt-14" delay={0.15}>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 font-bold text-[hsl(203_77%_15%)] border-2 border-[hsl(203_77%_15%)] px-8 py-3.5 rounded-xl hover:bg-[hsl(203_77%_15%)] hover:text-white transition-all duration-300 group"
          >
            Ver Portfólio Completo
            <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export default Portfolio;
