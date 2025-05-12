
import Hero from "@/components/Hero";
import FeaturedServices from "@/components/FeaturedServices";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const PaginaInicial = () => {
  // Adicionar logs para depuração
  useEffect(() => {
    console.log("PaginaInicial renderizada");
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />
      <FeaturedServices />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default PaginaInicial;
