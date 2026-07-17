import FadeIn from "@/components/animations/FadeIn";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Descoberta & Planeamento",
    description:
      "Começamos por entender o seu negócio, objetivos e público-alvo. Realizamos uma análise detalhada para criar a estratégia digital ideal.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Design & Prototipagem",
    description:
      "Criamos wireframes e protótipos visuais que refletem a identidade da sua marca. Validamos cada detalhe consigo antes de avançar.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desenvolvimento",
    description:
      "Desenvolvemos a solução com as melhores tecnologias do mercado, garantindo velocidade, segurança e responsividade total.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lançamento & Suporte",
    description:
      "Colocamos o projeto no ar e prestamos suporte dedicado para garantir que tudo funcione perfeitamente após o lançamento.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="relative section-padding bg-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/4 rounded-full blur-[180px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label justify-center">Como Trabalhamos</span>
          <h2 className="section-title mb-5">
            O Nosso Processo{" "}
            <span className="text-gradient">de Trabalho</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Um processo claro e transparente, desenhado para entregar resultados
            excepcionais em cada projeto.
          </p>
        </FadeIn>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[3.25rem] left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.12} direction="up">
                <div className="group relative text-center lg:text-left">
                  {/* Step number + icon */}
                  <div className="relative inline-flex flex-col items-center lg:items-start mb-6">
                    {/* Big number bg */}
                    <span className="absolute -top-4 -left-2 text-8xl font-black text-foreground/[0.04] leading-none select-none pointer-events-none hidden lg:block">
                      {step.number}
                    </span>

                    {/* Icon circle */}
                    <div className="relative z-10 w-16 h-16 rounded-2xl bg-background border-2 border-border group-hover:border-accent flex items-center justify-center shadow-[var(--shadow-sm)] transition-all duration-400">
                      <step.icon
                        size={26}
                        className="text-muted-foreground group-hover:text-accent transition-colors duration-400"
                      />
                    </div>
                  </div>

                  {/* Step label */}
                  <div className="inline-block bg-accent/10 text-accent text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full mb-3">
                    Passo {step.number}
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
