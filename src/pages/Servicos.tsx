import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Globe, Mail, Users, MessageCircle, Loader2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useServices } from "@/hooks/useServices";
import { ServicePackage } from "@/domain/entities/Service";

const PricingCard = ({
  pkg,
  currency = "KZ",
}: {
  pkg: ServicePackage;
  currency?: string;
}) => (
  <div
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
);

const Servicos = () => {
  const { data, isLoading } = useServices();

  if (isLoading) {
    return (
      <>
        <Header />
        <main className="flex justify-center items-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-accent" />
        </main>
        <Footer />
      </>
    );
  }

  const {
    sitesPackages = [],
    emailPackages = [],
    freelancerServices = [],
    freelancerMethodology = [],
  } = data || {};

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
        <section className="pt-40 pb-24 page-header-bg">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Pacotes que Cabem no Seu <span className="text-accent">Orçamento</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Escolha o plano ideal para o seu negócio e comece a transformar sua presença digital hoje.
              </p>
            </div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <Tabs defaultValue="sites" className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 h-auto">
                <TabsTrigger value="sites" className="flex items-center gap-2 py-3 text-sm">
                  <Globe size={18} />
                  <span className="hidden sm:inline">Criação de Sites</span>
                  <span className="sm:hidden">Sites</span>
                </TabsTrigger>
                <TabsTrigger value="emails" className="flex items-center gap-2 py-3 text-sm">
                  <Mail size={18} />
                  <span className="hidden sm:inline">E-mails Corporativos</span>
                  <span className="sm:hidden">E-mails</span>
                </TabsTrigger>
                <TabsTrigger value="freelancer" className="flex items-center gap-2 py-3 text-sm">
                  <Users size={18} />
                  <span className="hidden sm:inline">Rede Freelancer</span>
                  <span className="sm:hidden">Freelancer</span>
                </TabsTrigger>
              </TabsList>

              {/* Criação de Sites */}
              <TabsContent value="sites">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {sitesPackages.map((pkg, index) => (
                    <PricingCard key={index} pkg={pkg} />
                  ))}
                </div>

                {/* Pacote Personalizado */}
                <div className="mt-12 text-center bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
                  <h3 className="text-xl font-bold text-foreground mb-2">Pacote Personalizado</h3>
                  <p className="text-muted-foreground mb-6">
                    Precisa de algo diferente? Criamos um pacote sob medida para o seu negócio.
                  </p>
                  <Button variant="default" size="lg" asChild>
                    <Link to="/contato">
                      <MessageCircle size={18} />
                      Entrar em Contacto
                    </Link>
                  </Button>
                </div>
              </TabsContent>

              {/* E-mails Corporativos */}
              <TabsContent value="emails">
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {emailPackages.map((pkg, index) => (
                    <PricingCard key={index} pkg={pkg} />
                  ))}
                </div>

                <div className="mt-12 text-center bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
                  <h3 className="text-xl font-bold text-foreground mb-2">Pacote Personalizado</h3>
                  <p className="text-muted-foreground mb-6">
                    Precisa de mais contas ou funcionalidades específicas? Fale conosco.
                  </p>
                  <Button variant="default" size="lg" asChild>
                    <Link to="/contato">
                      <MessageCircle size={18} />
                      Entrar em Contacto
                    </Link>
                  </Button>
                </div>
              </TabsContent>

              {/* Rede Freelancer */}
              <TabsContent value="freelancer">
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-12">
                    {/* Serviços Disponíveis */}
                    <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
                      <h3 className="text-2xl font-bold text-foreground mb-6">
                        Serviços Disponíveis
                      </h3>
                      <ul className="space-y-4">
                        {freelancerServices.map((service, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check size={20} className="text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{service}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 pt-6 border-t border-border">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Preço:</strong> Sob consulta com o prestador
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          (pagamento de 5% por ambas as partes)
                        </p>
                      </div>
                    </div>

                    {/* Metodologia */}
                    <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
                      <h3 className="text-2xl font-bold text-foreground mb-6">
                        Metodologia
                      </h3>
                      <ol className="space-y-6">
                        {freelancerMethodology.map((step, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent font-bold flex items-center justify-center text-sm">
                              {i + 1}
                            </span>
                            <div className="pt-2">
                              <span className="text-foreground font-medium">{step}</span>
                            </div>
                          </li>
                        ))}
                      </ol>

                      <div className="mt-8">
                        <Button variant="accent" className="w-full" size="lg" asChild>
                          <Link to="/contato">
                            Solicitar Serviço
                            <ArrowRight size={18} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Servicos;
