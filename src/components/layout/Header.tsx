import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, ChevronRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";
import logoBranco from "@/assets/logo-white.png";

const navLinks = [
  { name: "Início", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Serviços", path: "/servicos" },
  { name: "Portfólio", path: "/portfolio" },
  { name: "Blog", path: "/blog" },
  { name: "Templates", path: "/templates" },
  { name: "Contato", path: "/contato" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const whatsappNumber = import.meta.env.VITE_WA_PHONE_NUMBER || "244951461526";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* ── Top Bar ── */}
      <div
        className={`bg-[hsl(203_77%_12%)] text-white/80 text-sm transition-all duration-500 overflow-hidden ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="container-custom flex items-center justify-between py-2.5">
          {/* Contact info */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href={`tel:+${whatsappNumber}`}
              className="flex items-center gap-1.5 hover:text-accent transition-colors duration-200"
            >
              <Phone size={13} />
              <span>+{whatsappNumber}</span>
            </a>
            <a
              href="mailto:contacto@proletariodigital.com"
              className="flex items-center gap-1.5 hover:text-accent transition-colors duration-200"
            >
              <Mail size={13} />
              <span>contacto@proletariodigital.com</span>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 ml-auto">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-accent transition-colors duration-200"
            >
              <Facebook size={14} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-accent transition-colors duration-200"
            >
              <Instagram size={14} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-accent transition-colors duration-200"
            >
              <Linkedin size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Nav ── */}
      <div
        className={`transition-all duration-400 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_-4px_hsl(203_77%_15%/0.15)] py-3"
            : "bg-[hsl(203_77%_12%)/80] backdrop-blur-sm py-4"
        }`}
      >
        <div className="container-custom">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <img
                src={isScrolled ? logo : logoBranco}
                alt="Proletário Digital"
                className="h-10 md:h-11 w-auto"
              />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all duration-200 group ${
                    isActive(link.path)
                      ? "text-accent"
                      : isScrolled
                      ? "text-foreground hover:text-accent"
                      : "text-white/90 hover:text-accent"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-accent rounded-full transition-all duration-300 ${
                      isActive(link.path) ? "w-5" : "w-0 group-hover:w-5"
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-[hsl(203_77%_10%)] font-bold px-6 rounded-lg shadow-md hover:shadow-accent/30 transition-all duration-300"
              >
                <Link to="/contato" className="flex items-center gap-2">
                  Solicitar Orçamento
                  <ChevronRight size={16} />
                </Link>
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
                isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </nav>
        </div>
      </div>

      {/* ── Mobile Dropdown ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden bg-white shadow-xl border-t border-border/30"
          >
            <div className="container-custom py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    isActive(link.path)
                      ? "text-accent bg-accent/8"
                      : "text-foreground hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {link.name}
                  <ChevronRight size={14} className="opacity-40" />
                </Link>
              ))}
              <div className="pt-3 pb-1">
                <Button asChild className="w-full bg-accent text-[hsl(203_77%_10%)] font-bold hover:bg-accent/90">
                  <Link to="/contato">Solicitar Orçamento</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
