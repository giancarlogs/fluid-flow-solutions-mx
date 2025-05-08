
import { useState, useEffect, useRef } from "react";
import { brands } from "@/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const BrandsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredBrand, setHoveredBrand] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Organizar marcas en grupos para mostrar 3 en móvil, 4 en tableta, 5 en desktop
  const getVisibleBrands = () => {
    const windowWidth = window.innerWidth;
    let visibleCount = 5; // Desktop
    
    if (windowWidth < 640) {
      visibleCount = 3; // Mobile
    } else if (windowWidth < 1024) {
      visibleCount = 4; // Tablet
    }
    
    return visibleCount;
  };
  
  const [visibleBrands, setVisibleBrands] = useState(getVisibleBrands());
  
  useEffect(() => {
    const handleResize = () => {
      setVisibleBrands(getVisibleBrands());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const totalGroups = Math.ceil(brands.length / visibleBrands);
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalGroups);
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + totalGroups) % totalGroups);
  };
  
  // Autoplay para el carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex, totalGroups]);
  
  return (
    <section className="section-padding bg-espaf-gray/10">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-espaf-blue-dark">
            Marcas Representadas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trabajamos con las marcas líderes a nivel mundial para garantizar la mejor calidad en todos nuestros productos y soluciones.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden" ref={carouselRef}>
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {Array.from({ length: totalGroups }).map((_, groupIndex) => (
                <div key={groupIndex} className="min-w-full flex justify-center items-center gap-4 md:gap-8">
                  {brands
                    .slice(groupIndex * visibleBrands, (groupIndex + 1) * visibleBrands)
                    .map((brand) => (
                      <div 
                        key={brand.id} 
                        className="relative flex-1 min-w-0"
                        onMouseEnter={() => setHoveredBrand(brand.id)}
                        onMouseLeave={() => setHoveredBrand(null)}
                      >
                        <div className="bg-white rounded-lg p-4 shadow-md h-24 flex items-center justify-center transition-all duration-300 hover:shadow-lg">
                          <img
                            src={brand.logo}
                            alt={brand.name}
                            className="max-h-16 max-w-full object-contain"
                          />
                        </div>
                        
                        {/* Tooltip con descripción */}
                        {hoveredBrand === brand.id && (
                          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-60 bg-white p-3 rounded-md shadow-lg z-10 text-sm text-gray-700 border border-espaf-gray">
                            <div className="font-semibold text-espaf-blue-dark mb-1">{brand.name}</div>
                            <div>{brand.description}</div>
                            <div className="text-xs mt-1 text-espaf-blue-medium">{brand.category}</div>
                            
                            {/* Triángulo */}
                            <div className="absolute w-3 h-3 bg-white border-r border-b border-espaf-gray rotate-45 left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2"></div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>
          
          {/* Controles de navegación */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white border-espaf-gray text-espaf-blue-dark hover:bg-espaf-yellow hover:text-espaf-blue-dark md:-translate-x-0"
            onClick={prevSlide}
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Anterior</span>
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white border-espaf-gray text-espaf-blue-dark hover:bg-espaf-yellow hover:text-espaf-blue-dark md:translate-x-0"
            onClick={nextSlide}
          >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Siguiente</span>
          </Button>
        </div>
        
        {/* Indicadores */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalGroups }).map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeIndex === index ? 'bg-espaf-blue-medium' : 'bg-espaf-gray'
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ir al grupo ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsCarousel;
