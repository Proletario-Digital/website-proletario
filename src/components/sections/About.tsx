import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
import { useRef, useEffect, useState } from "react";
import aboutImg from "@/assets/about-team.jpg";
import { useProjects } from "@/hooks/usePosts";

const skills = [
  { label: "Web Design & Desenvolvimento", value: 95 },
  { label: "Marketing Digital & SEO", value: 82 },
  { label: "Identidade Visual & Branding", value: 88 },
  { label: "Estratégia Digital", value: 78 },
];

const ProgressBar = ({ label, value, animate }: { label: string; value: number; animate: boolean }) => (
  <div>
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-semibold text-foreground">{label}</span>
      <span className="text-sm font-bold text-accent">{value}%</span>
    </div>
    <div className="progress-track overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-accent to-[hsl(176_80%_55%)] rounded-full transition-all ease-out"
        style={{
          width: animate ? `${value}%` : "0%",
          transitionDuration: "1.2s",
          transitionDelay: "0.2s",
        }}
      />
    </div>
  </div>
);

const About = () => {
  const { data: projects } = useProjects();
  const projectsCount = projects?.length || 5;

  const skillsRef = useRef<HTMLDivElement>(null);
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimateSkills(true); },
      { threshold: 0.3 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="relative section-padding bg-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[hsl(203_77%_15%/0.04)] rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* Left: Image column */}
          <FadeIn direction="left">
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-lg)]">
                <img
                  src={aboutImg}
                  alt="Equipa Proletário Digital"
                  className="w-full h-[520px] object-cover"
                />
                {/* Image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(203_77%_12%/0.4)] to-transparent" />
              </div>

              {/* Floating experience badge */}
              <div className="absolute -bottom-6 -right-6 bg-accent rounded-2xl p-6 shadow-xl">
                <p className="text-5xl font-black text-[hsl(203_77%_10%)] leading-none">5+</p>
                <p className="text-[hsl(203_77%_10%)/80] text-xs font-bold uppercase tracking-wider mt-1">
                  Anos de<br/>Experiência
                </p>
              </div>

              {/* Floating satisfied clients badge */}
              <div className="absolute -top-5 -left-5 bg-white rounded-2xl p-5 shadow-[var(--shadow-md)] border border-border/40">
                <p className="text-4xl font-black text-[hsl(203_77%_12%)] leading-none">{projectsCount}+</p>
                <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider mt-1">
                  Clientes<br/>Satisfeitos
                </p>
              </div>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-accent/40 rounded-tl-xl pointer-events-none" />
            </div>
          </FadeIn>

          {/* Right: Text column */}
          <FadeIn direction="right" delay={0.15}>
            <div>
              {/* Section label */}
              <span className="section-label">Sobre Nós</span>

              <h2 className="section-title mb-6">
                A Sua Parceira em{" "}
                <span className="text-gradient">Soluções Digitais</span>
              </h2>

              <p className="text-muted-foreground text-base leading-relaxed mb-4">
                A Proletário Digital nasceu com a missão de democratizar o acesso a soluções digitais
                de alta qualidade em Angola. Acreditamos que toda empresa, independente do tamanho,
                merece uma presença online profissional e impactante.
              </p>

              <p className="text-muted-foreground text-base leading-relaxed mb-10">
                Com uma equipa dedicada e apaixonada por tecnologia, oferecemos desde a criação de
                sites personalizados até templates prontos, sempre com foco na qualidade e na
                satisfação total do cliente.
              </p>

              {/* Skill Bars */}
              <div ref={skillsRef} className="space-y-5 mb-10">
                {skills.map((skill) => (
                  <ProgressBar
                    key={skill.label}
                    label={skill.label}
                    value={skill.value}
                    animate={animateSkills}
                  />
                ))}
              </div>

              <Button asChild className="bg-[hsl(203_77%_15%)] hover:bg-[hsl(203_77%_12%)] text-white font-bold px-7 py-5 rounded-xl">
                <Link to="/sobre" className="flex items-center gap-2">
                  Conheça Nossa História
                  <ArrowRight size={17} />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;
