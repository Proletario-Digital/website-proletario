import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Calendar, User, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "5 Dicas para Melhorar a Presença Digital da Sua Empresa",
    excerpt: "Descubra estratégias práticas para destacar seu negócio no ambiente online e atrair mais clientes.",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800&h=500&fit=crop",
    category: "Marketing Digital",
    author: "Equipa PD",
    date: "05 Dez 2025",
    slug: "dicas-presenca-digital",
  },
  {
    title: "Por Que Sua Empresa Precisa de um Site Profissional",
    excerpt: "Entenda a importância de ter uma presença online sólida e como isso impacta seus resultados.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
    category: "Desenvolvimento Web",
    author: "Equipa PD",
    date: "28 Nov 2025",
    slug: "empresa-site-profissional",
  },
  {
    title: "SEO: O Guia Completo para Iniciantes",
    excerpt: "Aprenda os fundamentos de SEO e como otimizar seu site para aparecer nas primeiras posições do Google.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=500&fit=crop",
    category: "SEO",
    author: "Equipa PD",
    date: "20 Nov 2025",
    slug: "guia-seo-iniciantes",
  },
  {
    title: "E-commerce em Angola: Tendências para 2025",
    excerpt: "Conheça as principais tendências do comércio eletrônico que vão dominar o mercado angolano.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
    category: "E-commerce",
    author: "Equipa PD",
    date: "15 Nov 2025",
    slug: "ecommerce-angola-tendencias",
  },
  {
    title: "Como Escolher o Template Ideal para Seu Site",
    excerpt: "Dicas para selecionar o modelo de site perfeito que represente sua marca e atenda suas necessidades.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=500&fit=crop",
    category: "Design",
    author: "Equipa PD",
    date: "10 Nov 2025",
    slug: "escolher-template-site",
  },
  {
    title: "A Importância dos E-mails Corporativos",
    excerpt: "Saiba por que ter um e-mail profissional com o domínio da sua empresa transmite mais credibilidade.",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=500&fit=crop",
    category: "Produtividade",
    author: "Equipa PD",
    date: "05 Nov 2025",
    slug: "emails-corporativos-importancia",
  },
];

const Blog = () => {
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
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-accent text-sm font-semibold mb-6">
                Blog
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Dicas e <span className="text-accent">Insights</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Conteúdo relevante sobre marketing digital, desenvolvimento web e tendências do mercado.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </Link>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                    </div>

                    <Link to={`/blog/${post.slug}`}>
                      <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h2>
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
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
