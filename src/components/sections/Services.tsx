import { Link } from "react-router-dom";
import { Globe, Mail, Users, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Criação de Sites",
    description: "Sites institucionais, e-commerce e blogs com design responsivo e personalizado.",
    features: ["A partir de 50.000 KZ/mês", "Até 10 páginas", "E-mails incluídos", "Suporte e Manutenção"],
    highlight: true,
  },
  {
    icon: Mail,
    title: "E-mails Corporativos",
    description: "E-mails profissionais com o domínio da sua empresa para transmitir credibilidade.",
    features: ["A partir de 18.000 KZ", "Até 10 contas", "Suporte Técnico"],
    highlight: false,
  },
  {
    icon: Users,
    title: "Rede Freelancer",
    description: "Conectamos profissionais qualificados com empresas que precisam de serviços digitais.",
    features: ["Identidade Visual", "Marketing Digital", "Apps e Design UI/UX", "Fotografia e Análise de Dados"],
    highlight: false,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="section-padding bg-muted/50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Soluções Completas para o Seu{" "}
            <span className="text-accent">Negócio Digital</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Do conceito à execução, oferecemos tudo que você precisa para estabelecer 
            uma presença digital forte e profissional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                service.highlight
                  ? "shadow-lg border-2 border-accent"
                  : "shadow-sm border border-border/50 hover:shadow-md"
              }`}
            >
              {service.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                  Popular
                </span>
              )}

              <div
                className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                  service.highlight
                    ? "bg-accent text-accent-foreground"
                    : "bg-primary/10 text-primary group-hover:bg-accent group-hover:text-accent-foreground"
                }`}
              >
                <service.icon size={32} />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-200"
              >
                Saiba mais
                <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="default" size="lg" asChild>
            <Link to="/servicos">
              Ver Todos os Serviços
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
