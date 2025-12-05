import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["Todos", "Site Institucional", "E-commerce", "Blog", "Landing Page"];

const projects = [
  {
    title: "Site E-commerce Fashion",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    description: "Loja virtual completa com gestão de produtos e pagamentos integrados.",
  },
  {
    title: "Portal Corporativo ABC",
    category: "Site Institucional",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    description: "Site institucional moderno para empresa de consultoria empresarial.",
  },
  {
    title: "Blog Viajantes",
    category: "Blog",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    description: "Plataforma de conteúdo otimizada para SEO com design imersivo.",
  },
  {
    title: "Landing Page TechStart",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    description: "Página de captura de alta conversão para startup de tecnologia.",
  },
  {
    title: "Site Restaurante Sabores",
    category: "Site Institucional",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
    description: "Presença online elegante com menu digital e reservas online.",
  },
  {
    title: "Plataforma EduOnline",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    description: "Sistema de cursos online com área de alunos e certificados.",
  },
  {
    title: "Landing Page Imobiliária",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
    description: "Página de captação de leads para empresa imobiliária.",
  },
  {
    title: "Blog Fitness",
    category: "Blog",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
    description: "Blog de saúde e fitness com integração a redes sociais.",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProjects =
    activeCategory === "Todos"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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

        {/* Projects Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                      <Button variant="hero" size="sm">
                        <ExternalLink size={16} />
                        Ver Projeto
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-2 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
