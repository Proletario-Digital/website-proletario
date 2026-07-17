import { useRef, useEffect, useState } from "react";
import FadeIn from "@/components/animations/FadeIn";
import ctaBg from "@/assets/cta-bg.jpg";
import { useProjects } from "@/hooks/usePosts";

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();
    let raf: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
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

const StatsCounter = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const { data: projects } = useProjects();
  const projectsCount = projects?.length || 5;

  const stats = [
    { value: projectsCount, suffix: "+", label: "Projetos Entregues" },
    { value: projectsCount, suffix: "+", label: "Clientes Satisfeitos" },
    { value: 5,  suffix: "+", label: "Anos de Experiência" },
    { value: 100, suffix: "%", label: "Dedicação Total" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-28 overflow-hidden">
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
          {stats.map((stat) => (
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
  );
};

export default StatsCounter;
