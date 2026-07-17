import { Link } from "react-router-dom";
import { Globe, Mail, Users, Smartphone, Palette, BarChart3, ArrowRight } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import ctaBg from "@/assets/cta-bg.jpg";

const services = [
  {
    icon: Globe,
    title: "Criação de Sites",
    description: "Sites institucionais, e-commerce e landing pages com design responsivo, rápido e personalizado para o seu negócio.",
    tag: "Mais Popular",
  },
  {
    icon: Palette,
    title: "Identidade Visual",
    description: "Logos, paleta de cores e branding completo que transmite a essência e os valores da sua marca.",
    tag: null,
  },
  {
    icon: Mail,
    title: "E-mails Corporativos",
    description: "E-mails profissionais com o domínio da sua empresa para transmitir credibilidade e confiança.",
    tag: null,
  },
  {
    icon: BarChart3,
    title: "Marketing Digital",
    description: "Estratégias de SEO, redes sociais e campanhas pagas para aumentar a visibilidade e vendas.",
    tag: null,
  },
  {
    icon: Smartphone,
    title: "Apps & UI/UX",
    description: "Desenvolvimento de aplicações móveis e interfaces digitais intuitivas e modernas.",
    tag: null,
  },
  {
    icon: Users,
    title: "Rede Freelancer",
    description: "Conectamos empresas com profissionais qualificados em design, programação, fotografia e análise de dados.",
    tag: null,
  },
];

const Services = () => {
  return (
    <section id="servicos" className="relative section-padding overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[hsl(203_77%_12%/0.92)]" />

      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[160px] pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[120px] pointer-events-none z-10" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] z-10"
        style={{
          backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label justify-center">Nossos Serviços</span>
          <h2 className="section-title-white mb-5">
            Soluções Completas para o Seu{" "}
            <span className="text-gradient">Negócio Digital</span>
          </h2>
          <p className="text-white/55 text-base leading-relaxed">
            Do conceito à execução, oferecemos tudo que você precisa para estabelecer
            uma presença digital forte, profissional e de alto impacto.
          </p>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1} direction="up">
              <div className="service-card group h-full">
                {/* Tag */}
                {service.tag && (
                  <span className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-widest bg-accent text-[hsl(203_77%_10%)] px-2.5 py-1 rounded-full">
                    {service.tag}
                  </span>
                )}

                {/* Icon */}
                <div className="service-icon w-14 h-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-6 transition-all duration-500">
                  <service.icon size={26} className="transition-colors duration-500" />
                </div>

                {/* Content */}
                <h3 className="service-title text-xl font-bold mb-3 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="service-desc text-sm leading-relaxed mb-6 transition-colors duration-500">
                  {service.description}
                </p>

                {/* Link */}
                <Link
                  to="/servicos"
                  className="service-link inline-flex items-center gap-2 text-accent text-sm font-bold transition-all duration-300 group-hover:gap-3"
                >
                  Saiba mais
                  <ArrowRight size={15} />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn className="text-center mt-14" delay={0.2}>
          <Link
            to="/servicos"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-[hsl(203_77%_10%)] font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5"
          >
            Ver Todos os Serviços
            <ArrowRight size={17} />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export default Services;
