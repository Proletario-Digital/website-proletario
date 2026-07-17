import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { sendEmail } from "@/lib/email/emailService";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Mail, Phone, MapPin, Send, Clock,
  CheckCircle2, Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const WHATSAPP_NUMBER = import.meta.env.VITE_WA_PHONE_NUMBER || "244951461526";
const PHONE_NUMBER    = import.meta.env.VITE_PHONE_NUMBER    || "244951461526";
const EMAIL_ADDRESS   = import.meta.env.VITE_CONTACT_EMAIL   || "contacto@proletariodigital.com";

const Contato = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess]           = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail({
        name:    formData.name,
        email:   formData.email,
        subject: formData.subject,
        message: formData.message,
      });
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Erro desconhecido";
      toast({
        title: "Erro ao enviar mensagem",
        description: message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contato | Proletário Digital - Fale Conosco</title>
        <meta
          name="description"
          content="Entre em contato com a Proletário Digital para solicitar orçamento de criação de sites, e-mails corporativos e soluções digitais em Angola."
        />
      </Helmet>

      <Header />
      <main>
        {/* ─── Hero ─── */}
        <section className="pt-40 pb-24 page-header-bg">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Vamos Conversar Sobre o Seu <span className="text-accent">Projeto</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Estamos prontos para ajudar seu negócio a crescer no mundo digital.
              </p>
            </div>
          </div>
        </section>

        {/* ─── Contact Section ─── */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">

              {/* ── Info ── */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Informações de Contato
                </h2>

                <div className="space-y-6 mb-12">
                  {[
                    { icon: MapPin, title: "Endereço",               content: "Luanda, Angola" },
                    { icon: Phone,  title: "Telefone",               content: `+${PHONE_NUMBER}`,  href: `tel:+${PHONE_NUMBER}` },
                    { icon: Mail,   title: "E-mail",                 content: EMAIL_ADDRESS,         href: `mailto:${EMAIL_ADDRESS}` },
                    { icon: Clock,  title: "Horário de Atendimento", content: "Segunda a Sexta, 8h – 18h" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon size={24} className="text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{item.title}</p>
                        {item.href ? (
                          <a href={item.href} className="text-muted-foreground hover:text-accent transition-colors">
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="bg-[#25D366]/10 border border-[#25D366]/20 rounded-2xl p-6">
                  <h3 className="font-bold text-foreground mb-2">Atendimento Rápido</h3>
                  <p className="text-muted-foreground mb-4">
                    Prefere conversar pelo WhatsApp? Estamos disponíveis!
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white font-bold px-5 py-3 rounded-xl transition-colors duration-200 shadow-lg shadow-[#25D366]/30"
                  >
                    <WhatsAppIcon size={20} />
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>

              {/* ── Form ── */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Envie sua Mensagem
                </h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Preencha o formulário e respondemos em até 24 horas úteis.
                </p>

                <AnimatePresence mode="wait">
                  {success ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.92 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center gap-4 py-16 text-center"
                    >
                      <CheckCircle2 size={56} className="text-accent" />
                      <h3 className="text-xl font-bold text-foreground">Mensagem enviada! 📧</h3>
                      <p className="text-muted-foreground text-sm max-w-xs">
                        Recebemos a sua mensagem. Responderemos em até 24 horas úteis.
                      </p>
                      <Button variant="outline" onClick={() => setSuccess(false)}>
                        Enviar outra mensagem
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-5"
                    >
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Nome *
                          </label>
                          <Input
                            id="name" name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Seu nome"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            E-mail *
                          </label>
                          <Input
                            id="email" name="email" type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="seu@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Assunto *
                        </label>
                        <Input
                          id="subject" name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Ex: Orçamento para criação de site"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Mensagem *
                        </label>
                        <Textarea
                          id="message" name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required rows={5}
                          placeholder="Conte-nos sobre seu projeto..."
                        />
                      </div>

                      <Button
                        id="contact-submit"
                        type="submit"
                        variant="accent"
                        size="lg"
                        className="w-full font-bold gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            A enviar...
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            Enviar Mensagem
                          </>
                        )}
                      </Button>

                    </motion.form>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contato;
