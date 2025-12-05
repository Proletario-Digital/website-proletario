import { Link } from "react-router-dom";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Sua Parceira em{" "}
              <span className="text-accent">Soluções Digitais</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A Proletário Digital nasceu com a missão de democratizar o acesso a soluções digitais 
              de alta qualidade em Angola. Acreditamos que toda empresa, independente do tamanho, 
              merece uma presença online profissional e impactante.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Com uma equipa dedicada e apaixonada por tecnologia, oferecemos desde a criação de 
              sites personalizados até templates prontos, sempre com foco na qualidade e na 
              satisfação do cliente.
            </p>
            <Button variant="default" asChild>
              <Link to="/sobre">
                Conheça Nossa História
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>

          {/* Right - Mission, Vision, Values */}
          <div className="space-y-6">
            {/* Mission */}
            <div className="group bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                  <Target size={28} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Missão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ajudar empresas e indivíduos a se destacarem no mercado digital com soluções 
                    acessíveis, personalizadas e de alta qualidade.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="group bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                  <Eye size={28} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Visão</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Tornar-se referência em Angola na criação de sites, identidade visual e 
                    estratégias de marketing digital, expandindo para soluções de e-commerce.
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="group bg-card p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-border/50">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-300">
                  <Heart size={28} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Valores</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Qualidade, inovação, acessibilidade e compromisso com o sucesso de cada cliente. 
                    Tecnologia deve ser democrática e acessível a todos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
