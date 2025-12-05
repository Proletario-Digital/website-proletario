import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Santos",
    role: "CEO, Santos Consultoria",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    content:
      "A Proletário Digital transformou completamente nossa presença online. O site ficou moderno, profissional e nossos clientes adoraram. Recomendo a todos!",
    rating: 5,
  },
  {
    name: "João Fernandes",
    role: "Fundador, TechStart Angola",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    content:
      "Excelente equipa! Entregaram o projeto no prazo e com uma qualidade incrível. O suporte pós-venda também é fantástico. São verdadeiros parceiros.",
    rating: 5,
  },
  {
    name: "Ana Correia",
    role: "Diretora, Moda AO",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    content:
      "Nossa loja online aumentou as vendas em 200% após o novo site. A equipa entendeu exatamente o que precisávamos e superou as expectativas.",
    rating: 5,
  },
  {
    name: "Pedro Almeida",
    role: "Gerente, Restaurante Sabores",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    content:
      "Profissionais dedicados e criativos. O site do nosso restaurante ficou lindo e funcional. As reservas online facilitaram muito nosso trabalho.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-teal-light/10 blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-accent text-sm font-semibold mb-6">
            Testemunhos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            O Que Nossos <span className="text-accent">Clientes Dizem</span>
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-lg">
            {/* Quote Icon */}
            <Quote
              size={64}
              className="absolute top-6 left-6 text-accent/20"
              strokeWidth={1}
            />

            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Image */}
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-accent"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} size={20} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Author */}
                <div>
                  <p className="font-bold text-foreground text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center md:justify-end gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                    index === currentIndex ? "bg-accent w-8" : "bg-muted"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
