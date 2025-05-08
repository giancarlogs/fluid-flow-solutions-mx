
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-espaf-blue-dark via-espaf-blue-dark to-espaf-blue-medium">
      {/* Patrón de fondo */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjUsMC41KSI+PHBhdHRlcm4gaWQ9InBhdHRlcm4iIHg9IjAiIHk9IjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjE1IiBoZWlnaHQ9IjE1Ii8+PC9wYXR0ZXJuPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvZz48L3N2Zz4=')]"></div>
      
      <div className="container-custom relative z-10 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Especialistas en <span className="text-espaf-yellow">Purificación de Fluidos</span> y <span className="text-espaf-teal">Automatización de Procesos</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Empresa Mexicana con 23 años de experiencia brindando asesoría, soporte y productos de alta calidad que cumplen con las normas más estrictas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-espaf-yellow hover:bg-espaf-yellow/90 text-espaf-blue-dark">
                <Link to="/soluciones" className="flex items-center gap-2">
                  <span>Conoce Nuestras Soluciones</span>
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-espaf-blue-dark">
                <Link to="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-lg border border-white border-opacity-20">
              <img 
                src="/placeholder.svg" 
                alt="Automatización industrial" 
                className="rounded-lg shadow-lg w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Onda inferior */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L48,133.3C96,139,192,149,288,144C384,139,480,117,576,122.7C672,128,768,160,864,165.3C960,171,1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
