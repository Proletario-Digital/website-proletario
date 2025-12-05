import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const packages = [
  {
    name: "Básico",
    price: "50.000",
    period: "/mês",
    description: "Ideal para quem está começando",
    features: [
      "Site Institucional até 4 páginas",
      "Design Responsivo",
      "E-mails Corporativos (até 5 contas)",
      "Suporte básico",
      "Manutenção 2x/mês",
    ],
    highlight: false,
  },
  {
    name: "Intermediário",
    price: "75.000",
    period: "/mês",
    description: "Para empresas em crescimento",
    features: [
      "Site Institucional até 7 páginas",
      "Design Responsivo e Personalizado",
      "E-mails Corporativos (até 7 contas)",
      "Blog Integrado",
      "Suporte prioritário",
      "Manutenção 5x/mês",
    ],
    highlight: true,
  },
  {
    name: "Avançado",
    price: "100.000",
    period: "/mês",
    description: "Solução completa para seu negócio",
    features: [
      "E-commerce ou Blog Avançado",
      "Design Responsivo e Personalizado",
      "E-mails Corporativos (até 10 contas)",
      "Suporte premium 24/7",
      "Manutenção 10x/mês",
      "Relatórios mensais",
    ],
    highlight: false,
  },
];

const Servicos = () => {
  return (
    <>
      <Helmet>
        <title>Serviços | Proletário Digital - Criação de Sites e Marketing Digital</title>
        <meta
          name="description"
          content="Conheça nossos pacotes de criação de sites, e-mails corporativos, templates WordPress e soluções de marketing digital em Angola."
        />
      </Helmet>

      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-accent text-sm font-semibold mb-6">
                Nossos Serviços
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Pacotes que Cabem no Seu <span className="text-accent">Orçamento</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Escolha o plano ideal para o seu negócio e comece a transformar sua presença digital hoje.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`relative bg-card rounded-2xl p-8 transition-all duration-300 ${
                    pkg.highlight
                      ? "shadow-lg border-2 border-accent scale-105"
                      : "shadow-sm border border-border/50 hover:shadow-md"
                  }`}
                >
                  {pkg.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                      Mais Popular
                    </span>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                      <span className="text-muted-foreground">KZ{pkg.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={pkg.highlight ? "accent" : "outline"}
                    className="w-full"
                    asChild
                  >
                    <Link to="/contato">
                      Solicitar Orçamento
                      <ArrowRight size={18} />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>

            {/* Custom Package */}
            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-4">
                Precisa de algo diferente? Temos pacotes personalizados!
              </p>
              <Button variant="default" size="lg" asChild>
                <Link to="/contato">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Servicos;
