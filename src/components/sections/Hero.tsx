import { Link } from "react-router-dom";
import { ArrowRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-teal-light blur-3xl" />
      </div>

      {/* Floating Eye Icon */}
      <div className="absolute top-1/4 right-[15%] hidden lg:flex items-center justify-center w-24 h-24 rounded-full bg-accent/20 animate-float">
        <Eye size={48} className="text-accent" />
      </div>

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-up opacity-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Soluções Digitais em Angola
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-up opacity-0 animation-delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary-foreground leading-tight mb-6">
            Um Olho no{" "}
            <span className="relative">
              <span className="text-accent">Futuro</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10C50 4 150 4 198 10"
                  stroke="hsl(var(--accent))"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-up opacity-0 animation-delay-200 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed">
            Transformamos a sua ideia em presença digital de alta qualidade. Sites personalizados, 
            templates WordPress e soluções completas para o seu negócio crescer online.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-up opacity-0 animation-delay-300 flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contato">
                Solicitar Orçamento
                <ArrowRight size={20} />
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/portfolio">Ver Portfólio</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-up opacity-0 animation-delay-400 mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projetos Entregues" },
              { number: "30+", label: "Clientes Satisfeitos" },
              { number: "5+", label: "Anos de Experiência" },
              { number: "100%", label: "Dedicação" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <p className="text-3xl md:text-4xl font-bold text-accent">{stat.number}</p>
                <p className="text-primary-foreground/70 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
