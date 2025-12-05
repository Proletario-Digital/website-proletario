import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Target, Eye, Heart, Users, Award, Clock } from "lucide-react";

const Sobre = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nós | Proletário Digital - Agência Web em Angola</title>
        <meta
          name="description"
          content="Conheça a história da Proletário Digital, nossa missão de democratizar soluções digitais em Angola e nossa equipa dedicada."
        />
      </Helmet>

      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-gradient-hero">
          <div className="container-custom">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-accent text-sm font-semibold mb-6">
                Sobre Nós
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Nossa <span className="text-accent">História</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                A Proletário Digital nasceu da paixão por tecnologia e do desejo de democratizar 
                o acesso a soluções digitais de qualidade em Angola.
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  De Onde Viemos
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Fundada com a visão de transformar a forma como empresas angolanas se apresentam 
                    no mundo digital, a Proletário Digital começou como um projeto pequeno mas com 
                    grandes ambições.
                  </p>
                  <p>
                    Acreditamos que a tecnologia deve ser democrática e acessível, por isso nos 
                    posicionamos como uma alternativa prática e eficiente para quem busca uma 
                    presença digital de qualidade sem complicações.
                  </p>
                  <p>
                    Nosso foco é entregar sites modernos, funcionais e esteticamente agradáveis, 
                    com templates que podem ser ajustados e personalizados conforme o gosto e as 
                    exigências de cada cliente.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-2xl bg-primary/5 flex items-center justify-center">
                  <Eye size={120} className="text-accent/30" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="section-padding bg-muted/50">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Missão",
                  content:
                    "Ajudar empresas e indivíduos a se destacarem no mercado digital com soluções acessíveis, personalizadas e de alta qualidade.",
                },
                {
                  icon: Eye,
                  title: "Visão",
                  content:
                    "Tornar-se referência em Angola na criação de sites, identidade visual e estratégias de marketing digital.",
                },
                {
                  icon: Heart,
                  title: "Valores",
                  content:
                    "Qualidade, inovação, acessibilidade e compromisso com o sucesso de cada cliente. Tecnologia democrática para todos.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-2xl shadow-sm border border-border/50 text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon size={32} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section-padding bg-primary">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: Users, number: "30+", label: "Clientes Atendidos" },
                { icon: Award, number: "50+", label: "Projetos Entregues" },
                { icon: Clock, number: "5+", label: "Anos de Experiência" },
                { icon: Heart, number: "100%", label: "Satisfação" },
              ].map((stat, index) => (
                <div key={index}>
                  <stat.icon size={32} className="text-accent mx-auto mb-4" />
                  <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                    {stat.number}
                  </p>
                  <p className="text-primary-foreground/70">{stat.label}</p>
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

export default Sobre;
