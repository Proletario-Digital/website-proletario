import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Partners from "@/components/sections/Partners";
import CTA from "@/components/sections/CTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Proletário Digital | Criação de Sites e Soluções Digitais em Angola</title>
        <meta
          name="description"
          content="A Proletário Digital oferece criação de sites personalizados, templates WordPress, e-mails corporativos e soluções digitais completas para empresas em Angola. Um olho no futuro!"
        />
        <meta
          name="keywords"
          content="criação de sites Angola, desenvolvimento web Luanda, templates WordPress, e-mails corporativos, marketing digital Angola"
        />
        <link rel="canonical" href="https://proletariodigital.com" />
      </Helmet>

      <Header />
      <main>
        <Hero />
        <Partners />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
