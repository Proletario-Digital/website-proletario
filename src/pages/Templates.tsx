import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Eye, ShoppingCart } from "lucide-react";
import { useTemplates } from "@/hooks/useTemplates";

const categories = ["Todos", "Negócios", "E-commerce", "Blog", "Portfólio", "Restaurante"];


/* Shimmer skeleton for a template card */
const TemplateSkeleton = () => (
  <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50">
    <div className="relative h-56 bg-muted overflow-hidden">
      <div className="absolute inset-0 shimmer" />
    </div>
    <div className="p-6 space-y-3">
      <div className="relative h-3 w-16 rounded-full bg-muted overflow-hidden">
        <div className="absolute inset-0 shimmer" />
      </div>
      <div className="relative h-6 w-3/4 rounded-lg bg-muted overflow-hidden">
        <div className="absolute inset-0 shimmer" />
      </div>
      <div className="relative h-4 w-full rounded-lg bg-muted overflow-hidden">
        <div className="absolute inset-0 shimmer" />
      </div>
      <div className="flex items-center justify-between pt-2">
        <div className="relative h-7 w-24 rounded-lg bg-muted overflow-hidden">
          <div className="absolute inset-0 shimmer" />
        </div>
        <div className="relative h-9 w-24 rounded-lg bg-muted overflow-hidden">
          <div className="absolute inset-0 shimmer" />
        </div>
      </div>
    </div>
  </div>
);

const Templates = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const { data: templates, isLoading } = useTemplates();

  const filteredTemplates = activeCategory === "Todos"
    ? templates
    : templates?.filter((t) => t.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Templates WordPress | Proletário Digital - Modelos Prontos</title>
        <meta
          name="description"
          content="Compre templates WordPress prontos e personalizáveis. Modelos para negócios, e-commerce, blogs e mais."
        />
      </Helmet>

      <Header />
      <main>
        {/* Hero */}
        <section className="pt-40 pb-24 page-header-bg">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Templates <span className="text-accent">WordPress</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Modelos prontos e personalizáveis para você ter seu site no ar rapidamente.
              </p>
            </div>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 bg-background border-b border-border/50">
          <div className="container-custom">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <TemplateSkeleton key={i} />
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredTemplates?.map((template, index) => (
                  <div
                    key={index}
                    className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={template.image}
                        alt={template.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {template.popular && (
                        <span className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                          Popular
                        </span>
                      )}
                      <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <Button variant="hero" size="sm">
                          <Eye size={16} />
                          Demo
                        </Button>
                      </div>
                    </div>

                    <div className="p-6">
                      <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                        {template.category}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mt-2 mb-2">
                        {template.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {template.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-foreground">
                          {template.price} <span className="text-sm text-muted-foreground">KZ</span>
                        </span>
                        <Button variant="accent" size="sm" asChild>
                          <Link to="/contato">
                            <ShoppingCart size={16} />
                            Comprar
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Info */}
            <div className="mt-16 bg-accent/10 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Precisa de Personalização?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Todos os templates podem ser personalizados de acordo com a identidade visual 
                da sua marca. Entre em contato para saber mais sobre nossos serviços de customização.
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/contato">Solicitar Personalização</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Templates;
