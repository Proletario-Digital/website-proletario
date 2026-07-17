import { Helmet } from "react-helmet-async";
import { useRef, useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Target, Eye, Heart } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import ctaBg from "@/assets/cta-bg.jpg";
import workspaceImg from "@/assets/about-workspace.jpg";
import { motion } from "framer-motion";
import { useProjects } from "@/hooks/usePosts";

/* ─── Animated counter hook ─── */
function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, active]);
  return count;
}

const StatItem = ({
  value, suffix, label, active,
}: {
  value: number; suffix: string; label: string; active: boolean;
}) => {
  const count = useCountUp(value, 1800, active);
  return (
    <div className="text-center px-4">
      <p className="text-5xl md:text-6xl font-black text-white leading-none mb-2">
        {count}
        <span className="text-accent">{suffix}</span>
      </p>
      <p className="text-white/50 text-sm font-semibold uppercase tracking-widest">{label}</p>
    </div>
  );
};

const Sobre = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const { data: projects } = useProjects();
  const projectsCount = projects?.length || 5;

  const sobreStats = [
    { value: projectsCount, suffix: "+", label: "Projetos Entregues" },
    { value: projectsCount, suffix: "+", label: "Clientes Satisfeitos" },
    { value: 5,   suffix: "+", label: "Anos de Experiência" },
    { value: 100, suffix: "%", label: "Dedicação Total" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

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
        <section className="pt-40 pb-24 page-header-bg">
          <div className="container-custom">
            <div className="max-w-3xl">
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
              <div className="relative flex justify-center items-center px-4">
                <div className="relative">
                  {/* Main image frame */}
                  <div className="relative w-full max-w-[380px] sm:max-w-[420px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_hsl(203_77%_5%/0.8)]">
                    <img
                      src={workspaceImg}
                      alt="Workspace Proletário Digital"
                      className="w-full h-auto object-contain block"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(203_77%_10%/0.25)] to-transparent pointer-events-none" />
                  </div>

                  {/* Floating badge: Experiência */}
                  <motion.div
                    className="absolute -left-6 top-10 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border/40"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  >
                    <p className="text-2xl font-black text-[hsl(203_77%_12%)] leading-none">5+</p>
                    <p className="text-[10px] font-semibold text-muted-foreground mt-0.5 leading-tight">Anos de<br/>Experiência</p>
                  </motion.div>

                  {/* Floating badge: Dedicação */}
                  <motion.div
                    className="absolute -right-6 bottom-12 bg-[hsl(176_100%_38%)] rounded-2xl shadow-xl px-4 py-3"
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
                  >
                    <p className="text-2xl font-black text-[hsl(203_77%_10%)] leading-none">100%</p>
                    <p className="text-[10px] font-black text-[hsl(203_77%_10%)]/70 mt-0.5 leading-tight">Dedicação<br/>Total</p>
                  </motion.div>

                  {/* Corner accent lines */}
                  <div className="absolute -top-3 -right-3 w-20 h-20 border-t-2 border-r-2 border-accent/50 rounded-tr-2xl" />
                  <div className="absolute -bottom-3 -left-3 w-20 h-20 border-b-2 border-l-2 border-accent/50 rounded-bl-2xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── Stats — parallax, identical to home ─── */}
        <section ref={statsRef} className="relative py-28 overflow-hidden">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
            style={{ backgroundImage: `url(${ctaBg})` }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[hsl(203_77%_10%/0.88)]" />
          {/* Accent glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container-custom relative z-10">
            <FadeIn className="text-center mb-14">
              <span className="section-label justify-center text-accent/80">Números que Falam</span>
              <h2 className="section-title-white">
                Resultados que{" "}
                <span className="text-gradient">Comprovamos</span>
              </h2>
            </FadeIn>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
              {sobreStats.map((stat) => (
                <StatItem
                  key={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  active={active}
                />
              ))}
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
      </main>
      <Footer />
    </>
  );
};

export default Sobre;

