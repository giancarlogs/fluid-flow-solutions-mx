
import { useState } from "react";
import { products } from "@/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState<"automatization" | "filtration">("automatization");
  
  return (
    <section className="section-padding bg-gradient-to-br from-espaf-gray/10 via-white/50 to-espaf-blue-dark/5 relative overflow-hidden">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23328CC1" fill-opacity="0.03"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20v20h40V20H20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-espaf-blue-dark animate-fade-in">
            Nuestros Productos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Descubre nuestra amplia gama de productos de alta calidad para automatización industrial y purificación de fluidos.
          </p>
        </div>
        
        <Tabs 
          defaultValue="automatization" 
          onValueChange={(value) => setActiveCategory(value as "automatization" | "filtration")}
          className="max-w-5xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md bg-white/80 backdrop-blur-sm shadow-lg border border-espaf-gray/20">
              <TabsTrigger 
                value="automatization" 
                className="text-base py-3 data-[state=active]:bg-espaf-blue-medium data-[state=active]:text-white transition-all duration-300 hover:bg-espaf-blue-medium/10"
              >
                Automatización
              </TabsTrigger>
              <TabsTrigger 
                value="filtration" 
                className="text-base py-3 data-[state=active]:bg-espaf-teal data-[state=active]:text-white transition-all duration-300 hover:bg-espaf-teal/10"
              >
                Filtración y Purificación
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="automatization" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.automatization.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group bg-white/90 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="object-cover w-full h-full transition-all duration-700 group-hover:scale-125 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espaf-blue-dark/30 via-transparent to-espaf-blue-medium/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <div className="bg-espaf-yellow text-espaf-blue-dark text-xs font-bold px-2 py-1 rounded-full">
                        Premium
                      </div>
                    </div>
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-lg text-espaf-blue-dark group-hover:text-espaf-blue-medium transition-all duration-300">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300 mb-3">
                      {product.description}
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full text-espaf-blue-medium border-espaf-blue-medium hover:bg-espaf-blue-medium hover:text-white transition-all duration-300"
                      >
                        Ver detalles
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="filtration" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.filtration.map((product, index) => (
                <Card 
                  key={product.id} 
                  className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer group bg-white/90 backdrop-blur-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="object-cover w-full h-full transition-all duration-700 group-hover:scale-125 group-hover:rotate-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espaf-teal/30 via-transparent to-espaf-teal/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                      <div className="bg-espaf-yellow text-espaf-blue-dark text-xs font-bold px-2 py-1 rounded-full">
                        Premium
                      </div>
                    </div>
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-lg text-espaf-blue-dark group-hover:text-espaf-teal transition-all duration-300">
                      {product.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300 mb-3">
                      {product.description}
                    </p>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full text-espaf-teal border-espaf-teal hover:bg-espaf-teal hover:text-white transition-all duration-300"
                      >
                        Ver detalles
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button 
            asChild 
            className="bg-espaf-yellow hover:bg-espaf-yellow/90 text-espaf-blue-dark hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Link to="/productos" className="flex items-center gap-2">
              <span>Ver Todas las Marcas y Productos</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
