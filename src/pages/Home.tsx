
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import BrandsCarousel from "@/components/BrandsCarousel";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProductsSection from "@/components/ProductsSection";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Experience Section */}
      <ExperienceSection />
      
      {/* Solutions Section */}
      <SolutionsSection />
      
      {/* Industries Section */}
      <IndustriesSection />
      
      {/* Products Section */}
      <ProductsSection />
      
      {/* Brands Carousel */}
      <BrandsCarousel />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Call to Action */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-espaf-blue-dark to-espaf-blue-medium rounded-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para optimizar tus procesos industriales?
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              Contáctanos hoy mismo y descubre cómo nuestras soluciones pueden mejorar la eficiencia y calidad de tus procesos.
            </p>
            <Button asChild size="lg" className="bg-espaf-yellow hover:bg-espaf-yellow/90 text-espaf-blue-dark">
              <Link to="/contacto" className="flex items-center gap-2">
                <span>Contáctanos Ahora</span>
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
