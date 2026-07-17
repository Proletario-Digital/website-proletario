import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg-v2.jpg";
import { useProjects } from "@/hooks/usePosts";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 28, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, damping: 14 },
  },
};

const imageVariants = {
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
  },
};

const badges = [
  "50+ Projetos Entregues",
  "Orçamento Gratuito",
  "Suporte Dedicado",
];

const Hero = () => {
  const { data: projects } = useProjects();
  const projectsCount = projects?.length || 5;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(203_77%_12%)]">
      {/* Background image with gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ scale: 1.06, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Layered dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(203_77%_10%)] via-[hsl(203_77%_12%/0.93)] to-[hsl(203_77%_12%/0.65)]" />
        {/* Subtle vignette bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(203_77%_10%)] via-transparent to-transparent opacity-60" />
      </motion.div>

      {/* Geometric decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-right corner geometric */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04]">
          <svg viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <circle cx="300" cy="300" r="295" stroke="white" strokeWidth="1"/>
            <circle cx="300" cy="300" r="200" stroke="white" strokeWidth="1"/>
            <circle cx="300" cy="300" r="100" stroke="white" strokeWidth="1"/>
            <line x1="0" y1="300" x2="600" y2="300" stroke="white" strokeWidth="0.5"/>
            <line x1="300" y1="0" x2="300" y2="600" stroke="white" strokeWidth="0.5"/>
          </svg>
        </div>
        {/* Accent glow blobs */}
        <div className="absolute top-1/3 right-[15%] w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-[10%] w-96 h-64 bg-accent/5 rounded-full blur-[80px]" />
      </div>

      <div className="container-custom relative z-10 pt-36 pb-20 lg:pt-40">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Label */}
            <motion.div variants={itemVariants}>
              <span className="section-label text-accent/90">
                Soluções Digitais em Angola
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight"
              variants={itemVariants}
            >
              Elevamos o Seu{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Negócio</span>
                <motion.svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 220 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M2 8C55 3 165 3 218 8"
                    stroke="hsl(176 100% 38%)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 0.9, ease: "easeOut" }}
                  />
                </motion.svg>
              </span>
              {" "}ao Digital
            </motion.h1>

            {/* Subheading */}
            <motion.p
              className="text-base md:text-lg text-white/65 max-w-xl mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Transformamos a sua ideia em presença digital de alta qualidade.
              Sites personalizados, templates WordPress e soluções completas
              para o seu negócio crescer online em Angola e no mundo.
            </motion.p>

            {/* Trust badges */}
            <motion.div className="flex flex-wrap gap-3 mb-10" variants={itemVariants}>
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/70 bg-white/8 border border-white/12 px-3 py-1.5 rounded-full"
                >
                  <CheckCircle2 size={12} className="text-accent" />
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-[hsl(203_77%_10%)] font-bold px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-accent/30 transition-all duration-300"
                >
                  <Link to="/contato">
                    Solicitar Orçamento
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/25 text-white hover:bg-white/10 hover:border-white/40 px-8 py-6 text-base rounded-xl font-semibold bg-transparent transition-all duration-300"
                >
                  <Link to="/portfolio">Ver Portfólio</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="mt-14 pt-10 border-t border-white/10 grid grid-cols-3 gap-6"
              variants={itemVariants}
            >
              {[
                { number: `${projectsCount}+`, label: "Projetos" },
                { number: `${projectsCount}+`, label: "Clientes" },
                { number: "5+", label: "Anos" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl md:text-4xl font-black text-accent leading-none">{stat.number}</p>
                  <p className="text-white/50 text-xs font-semibold uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual card */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Main image frame */}
              <div className="relative w-[440px] h-[520px] rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_hsl(203_77%_5%/0.8)]">
                <img
                  src={heroBg}
                  alt="Proletário Digital workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(203_77%_10%/0.7)] to-transparent" />
              </div>

              {/* Floating badge: Experiência */}
              <motion.div
                className="absolute -left-8 top-12 bg-white rounded-2xl shadow-xl px-5 py-4"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <p className="text-3xl font-black text-[hsl(203_77%_12%)] leading-none">5+</p>
                <p className="text-xs font-semibold text-muted-foreground mt-0.5">Anos de<br/>Experiência</p>
              </motion.div>

              {/* Floating badge: Projetos */}
              <motion.div
                className="absolute -right-6 bottom-16 bg-[hsl(176_100%_38%)] rounded-2xl shadow-xl px-5 py-4"
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              >
                <p className="text-3xl font-black text-[hsl(203_77%_10%)] leading-none">100%</p>
                <p className="text-xs font-black text-[hsl(203_77%_10%)]/70 mt-0.5">Dedicação<br/>Total</p>
              </motion.div>

              {/* Corner accent line */}
              <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-accent/50 rounded-tr-2xl" />
              <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-accent/50 rounded-bl-2xl" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-white/30 text-xs font-semibold uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-9 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
          <motion.div
            className="w-1 h-2.5 bg-accent rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
