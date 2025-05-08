
import { useState, useEffect } from "react";
import { testimonials } from "@/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Rotación automática de testimonios
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="section-padding bg-espaf-blue-dark text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Lo que Nuestros Clientes Dicen
          </h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Empresas líderes en sus sectores confían en nuestras soluciones para optimizar sus procesos industriales.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <Card
                key={testimonial.id}
                className={`bg-white/10 backdrop-blur-sm border-white/20 absolute w-full transition-all duration-700 ease-in-out ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : index < activeIndex 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                }`}
              >
                <CardContent className="p-8">
                  <div className="text-4xl text-espaf-yellow mb-4">"</div>
                  <p className="text-xl italic mb-6">{testimonial.quote}</p>
                </CardContent>
                <CardFooter className="border-t border-white/10 p-6">
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-white/70">{testimonial.position}</p>
                    <p className="text-espaf-yellow text-sm">{testimonial.company}</p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          {/* Navegación de puntos */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index ? "bg-espaf-yellow" : "bg-white/30"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Ir al testimonio ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
