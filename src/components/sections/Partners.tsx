const partners = [
  { name: "WordPress", logo: "https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg" },
  { name: "Google", logo: "https://cdn.worldvectorlogo.com/logos/google-2015.svg" },
  { name: "Hostinger", logo: "https://cdn.worldvectorlogo.com/logos/hostinger.svg" },
  { name: "WooCommerce", logo: "https://cdn.worldvectorlogo.com/logos/woocommerce.svg" },
  { name: "Elementor", logo: "https://cdn.worldvectorlogo.com/logos/elementor-1.svg" },
];

const Partners = () => {
  return (
    <section className="py-16 bg-muted/30 border-y border-border/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">
            Parceiros e Tecnologias
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
