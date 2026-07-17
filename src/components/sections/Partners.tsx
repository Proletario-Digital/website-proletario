import wordpressLogo from "@/assets/partners/wordpress.svg";
import googleLogo from "@/assets/partners/google.svg";
import hostingerLogo from "@/assets/partners/hostinger.png";
import woocommerceLogo from "@/assets/partners/woocommerce.png";
import elementorLogo from "@/assets/partners/elementor.svg";
import contaboLogo from "@/assets/partners/contabo.png";
import reactLogo from "@/assets/partners/react.svg";
import claudeLogo from "@/assets/partners/claude.png";
import laravelLogo from "@/assets/partners/laravel.svg";
import figmaLogo from "@/assets/partners/figma.svg";
import flutterLogo from "@/assets/partners/flutter.svg";
import reactNativeLogo from "@/assets/partners/reactnative.svg";
import dotnetLogo from "@/assets/partners/dotnet.svg";
import dockerLogo from "@/assets/partners/docker.svg";
import nodejsLogo from "@/assets/partners/nodejs.svg";

const partners = [
  { name: "WordPress", logo: wordpressLogo },
  { name: "Google", logo: googleLogo },
  { name: "Hostinger", logo: hostingerLogo },
  { name: "WooCommerce", logo: woocommerceLogo },
  { name: "Elementor", logo: elementorLogo },
  { name: "Contabo", logo: contaboLogo },
  { name: "React", logo: reactLogo },
  { name: "Claude AI", logo: claudeLogo },
  { name: "Laravel", logo: laravelLogo },
  { name: "Figma", logo: figmaLogo },
  { name: "Flutter", logo: flutterLogo },
  { name: "React Native", logo: reactNativeLogo },
  { name: ".NET", logo: dotnetLogo },
  { name: "Docker", logo: dockerLogo },
  { name: "Node.js", logo: nodejsLogo },
];

const Partners = () => {
  return (
    <section className="py-16 bg-background border-b border-border/40">
      <div className="container-custom">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground text-center mb-10">
          Parceiros &amp; Tecnologias
        </p>
        <div className="flex flex-wrap justify-center items-center gap-5 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group transition-all duration-300 hover:scale-110 cursor-default flex flex-col items-center justify-center gap-3 bg-white px-6 py-5 rounded-2xl border border-border/50 shadow-sm hover:shadow-lg hover:border-accent/30"
              title={partner.name}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 w-auto object-contain"
                loading="lazy"
              />
              <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
