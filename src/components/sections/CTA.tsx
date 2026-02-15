import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  const whatsappNumber = import.meta.env.VITE_WA_PHONE_NUMBER || "244999999999";
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="relative bg-gradient-hero rounded-3xl p-12 md:p-16 lg:p-20 overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-teal-light/10 blur-3xl" />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
              Pronto para Transformar Sua{" "}
              <span className="text-accent">Presença Digital?</span>
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed">
              Entre em contato conosco hoje mesmo e descubra como podemos ajudar 
              seu negócio a crescer no mundo digital. Orçamento sem compromisso!
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contato">
                  Solicitar Orçamento
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button
                variant="hero-outline"
                size="xl"
                asChild
              >
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-primary-foreground/60 text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Resposta em 24h
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Orçamento Gratuito
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Suporte Dedicado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
