import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Eye, ShoppingCart } from "lucide-react";

const categories = ["Todos", "Negócios", "E-commerce", "Blog", "Portfólio", "Restaurante"];

const templates = [
  {
    name: "Business Pro",
    category: "Negócios",
    price: "25.000",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    description: "Template profissional para empresas e consultorias.",
    popular: true,
  },
  {
    name: "Shop Master",
    category: "E-commerce",
    price: "35.000",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    description: "Loja virtual completa com WooCommerce integrado.",
    popular: false,
  },
  {
    name: "Blog Writer",
    category: "Blog",
    price: "15.000",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
    description: "Design elegante para blogs e sites de conteúdo.",
    popular: false,
  },
  {
    name: "Creative Portfolio",
    category: "Portfólio",
    price: "20.000",
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=600&h=400&fit=crop",
    description: "Mostre seus trabalhos com estilo e profissionalismo.",
    popular: true,
  },
  {
    name: "Foodie Restaurant",
    category: "Restaurante",
    price: "30.000",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    description: "Template para restaurantes com menu e reservas.",
    popular: false,
  },
  {
    name: "Corporate Elite",
    category: "Negócios",
    price: "28.000",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    description: "Ideal para grandes empresas e corporações.",
    popular: false,
  },
];

const Templates = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredTemplates =
    activeCategory === "Todos"
      ? templates
      : templates.filter((t) => t.category === activeCategory);

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
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-accent text-sm font-semibold mb-6">
                Marketplace
              </span>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTemplates.map((template, index) => (
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
