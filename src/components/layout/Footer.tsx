import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <img src={logoWhite} alt="Proletário Digital" className="h-12" />
            <p className="text-primary-foreground/80 leading-relaxed">
              Transformamos ideias em presença digital de alta qualidade. Seu parceiro em soluções web acessíveis e personalizadas.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://wa.me/244999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: "Início", path: "/" },
                { name: "Sobre Nós", path: "/sobre" },
                { name: "Serviços", path: "/servicos" },
                { name: "Portfólio", path: "/portfolio" },
                { name: "Blog", path: "/blog" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Criação de Sites",
                "Templates WordPress",
                "E-mails Corporativos",
                "Identidade Visual",
                "Marketing Digital",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/servicos"
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Luanda, Angola
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <a
                  href="tel:+244999999999"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                >
                  +244 999 999 999
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:contato@proletariodigital.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                >
                  contato@proletariodigital.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} Proletário Digital. Todos os direitos reservados.</p>
          <div className="flex gap-6">
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
