import { Phone } from "lucide-react";
import { motion } from "framer-motion";
import { SOCIAL } from "@/lib/social";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      {/* Telefone */}
      <motion.a
        href={`tel:+${SOCIAL.phone}`}
        aria-label="Ligar agora"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[hsl(203_77%_20%)] border-2 border-white/20 shadow-2xl shadow-black/40 text-white hover:bg-[hsl(203_77%_32%)] transition-colors duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 18 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.93 }}
      >
        <Phone size={22} />
        {/* Tooltip */}
        <span className="absolute right-16 bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          Ligar agora
        </span>
      </motion.a>

      {/* WhatsApp */}
      <motion.a
        href={`${SOCIAL.whatsapp}?text=Olá!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar no WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-2xl shadow-[#25D366]/40 text-white hover:bg-[#20b858] transition-colors duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 18 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.93 }}
      >
        {/* Ping animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <WhatsAppIcon size={26} />
        {/* Tooltip */}
        <span className="absolute right-16 bg-[#25D366] text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg">
          WhatsApp
        </span>
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
