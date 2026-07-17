import { Star, Quote, User } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";

const testimonials = [
  {
    name: "Maria Santos",
    role: "CEO",
    company: "Santos Consultoria",
    content:
      "A Proletário Digital transformou completamente nossa presença online. O site ficou moderno, profissional e nossos clientes adoraram. Recomendo a todos!",
    rating: 5,
  },
  {
    name: "João Fernandes",
    role: "Fundador",
    company: "TechStart Angola",
    content:
      "Excelente equipa! Entregaram o projeto no prazo e com uma qualidade incrível. O suporte pós-venda também é fantástico. São verdadeiros parceiros.",
    rating: 5,
  },
  {
    name: "Ana Correia",
    role: "Diretora",
    company: "Moda AO",
    content:
      "Nossa loja online aumentou as vendas em 200% após o novo site. A equipa entendeu exatamente o que precisávamos e superou as expectativas.",
    rating: 5,
  },
  {
    name: "Pedro Almeida",
    role: "Gerente",
    company: "Restaurante Sabores",
    content:
      "Profissionais dedicados e criativos. O site do nosso restaurante ficou lindo e funcional. As reservas online facilitaram muito nosso trabalho.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-[hsl(210_20%_97%)] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[hsl(203_77%_15%/0.05)] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-label justify-center">Testemunhos</span>
          <h2 className="section-title mb-5">
            O Que Nossos{" "}
            <span className="text-gradient">Clientes Dizem</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            A satisfação dos nossos clientes é o nosso maior prémio.
          </p>
        </FadeIn>

        {/* Testimonial Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="group relative bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] border border-border/40 hover:border-accent/30 hover:shadow-[var(--shadow-md)] transition-all duration-400 h-full flex flex-col">
                {/* Quote icon */}
                <Quote
                  size={40}
                  className="absolute top-6 right-6 text-accent/12 transition-colors duration-400 group-hover:text-accent/20"
                  strokeWidth={1.5}
                />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote text */}
                <p className="text-foreground/80 text-base leading-relaxed flex-1 mb-6 italic">
                  "{t.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* User Icon Avatar instead of photo */}
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center border-2 border-accent/20">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{t.name}</p>
                    {/* Cargo / Função (espaço deixado no código mas oculto conforme pedido) */}
                    {/* <p className="text-muted-foreground text-xs">
                      {t.role} · {t.company}
                    </p> */}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
