import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import ctaBg from "@/assets/cta-bg.jpg";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const CTA = () => {
  const whatsappNumber = import.meta.env.VITE_WA_PHONE_NUMBER || "244951461526";

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${ctaBg})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[hsl(203_77%_10%/0.87)]" />
      {/* Cyan glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent mb-5">
                <span className="block w-6 h-0.5 bg-accent" />
                Fale Connosco
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-5">
                Pronto para Transformar a Sua{" "}
                <span className="text-gradient">Presença Digital?</span>
              </h2>
              <p className="text-white/60 text-base leading-relaxed">
                Entre em contacto connosco hoje mesmo e descubra como podemos
                ajudar o seu negócio a crescer no mundo digital.
                Orçamento sem compromisso!
              </p>

              {/* Trust items */}
              <div className="mt-8 space-y-3">
                {[
                  "Resposta em menos de 24 horas",
                  "Orçamento 100% gratuito",
                  "Suporte dedicado pós-entrega",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/70 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 animate-pulse" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: CTAs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="flex flex-col gap-4"
            >
              {/* Primary CTA */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  to="/contato"
                  className="group flex items-center justify-between w-full bg-accent hover:bg-accent/90 text-[hsl(203_77%_10%)] font-bold px-7 py-5 rounded-2xl shadow-lg hover:shadow-accent/30 transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[hsl(203_77%_10%/0.15)] flex items-center justify-center">
                      <ArrowRight size={18} />
                    </span>
                    Solicitar Orçamento
                  </span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between w-full bg-white/8 hover:bg-white/15 border border-white/15 hover:border-white/30 text-white font-bold px-7 py-5 rounded-2xl transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <WhatsAppIcon size={18} className="text-accent" />
                    </span>
                    Falar pelo WhatsApp
                  </span>
                  <ArrowRight size={18} className="text-white/50 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </motion.div>

              {/* Phone CTA */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <a
                  href={`tel:+${whatsappNumber}`}
                  className="group flex items-center justify-between w-full bg-white/8 hover:bg-white/15 border border-white/15 hover:border-white/30 text-white font-bold px-7 py-5 rounded-2xl transition-all duration-300"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      <Phone size={18} className="text-accent" />
                    </span>
                    Ligar Agora
                  </span>
                  <ArrowRight size={18} className="text-white/50 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
