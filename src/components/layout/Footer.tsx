import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Mail, Phone, MapPin, Facebook, Instagram, Linkedin,
  ArrowRight, Send
} from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const quickLinks = [
  { name: "Início", path: "/" },
  { name: "Sobre Nós", path: "/sobre" },
  { name: "Serviços", path: "/servicos" },
  { name: "Portfólio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Templates", path: "/templates" },
];

const services = [
  "Criação de Sites",
  "Templates WordPress",
  "E-mails Corporativos",
  "Identidade Visual",
  "Marketing Digital",
  "Apps Mobile",
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = import.meta.env.VITE_WA_PHONE_NUMBER || "244951461526";
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER || "244951461526";
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-[hsl(203_77%_10%)] text-white">

      {/* ── Newsletter Banner ── */}
      <div className="border-b border-white/8">
        <div className="container-custom py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-widest mb-1">Newsletter</p>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Fique por dentro das novidades digitais
              </h3>
            </div>
            <form
              onSubmit={handleNewsletter}
              className="flex w-full md:w-auto gap-0"
              aria-label="Newsletter subscription"
            >
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="O seu melhor e-mail"
                className="bg-white/8 border border-white/15 text-white placeholder:text-white/40 px-5 py-3 rounded-l-lg text-sm w-72 focus:outline-none focus:border-accent transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-accent text-[hsl(203_77%_10%)] font-bold px-5 py-3 rounded-r-lg hover:bg-accent/90 transition-colors duration-200 flex items-center gap-2"
              >
                <Send size={15} />
                <span className="hidden sm:inline">Subscrever</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Column 1 — Brand */}
          <div className="space-y-6 lg:col-span-1">
            <Link to="/">
              <img src={logoWhite} alt="Proletário Digital" className="h-11 w-auto" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Transformamos ideias em presença digital de alta qualidade. Seu parceiro em soluções web acessíveis e personalizadas para Angola e além.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: WhatsAppIcon, href: `https://wa.me/${whatsappNumber}`, label: "WhatsApp" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/8 border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-[hsl(203_77%_10%)] transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors duration-200"
                  >
                    <ArrowRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">
              Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/servicos"
                    className="group flex items-center gap-2 text-sm text-white/60 hover:text-accent transition-colors duration-200"
                  >
                    <ArrowRight
                      size={13}
                      className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200"
                    />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent mb-6">
              Contacto
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={15} className="text-accent" />
                </div>
                <span className="text-sm text-white/60 leading-relaxed">
                  Luanda, Angola
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Phone size={15} className="text-accent" />
                </div>
                <a
                  href={`tel:+${phoneNumber}`}
                  className="text-sm text-white/60 hover:text-accent transition-colors duration-200"
                >
                  +{phoneNumber}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/15 flex items-center justify-center flex-shrink-0">
                  <Mail size={15} className="text-accent" />
                </div>
                <a
                  href="mailto:contacto@proletariodigital.com"
                  className="text-sm text-white/60 hover:text-accent transition-colors duration-200 break-all"
                >
                  contacto@proletariodigital.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/8">
        <div className="container-custom py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/40">
          <p>© {currentYear} Proletário Digital. Todos os direitos reservados.</p>
          <div className="flex gap-5">
            <Link to="/privacidade" className="hover:text-accent transition-colors duration-200">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="hover:text-accent transition-colors duration-200">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
