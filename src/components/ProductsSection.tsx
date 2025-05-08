
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
    <section className="section-padding bg-espaf-gray/10">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-espaf-blue-dark">
            Nuestros Productos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra amplia gama de productos de alta calidad para automatización industrial y purificación de fluidos.
          </p>
        </div>
        
        <Tabs 
          defaultValue="automatization" 
          onValueChange={(value) => setActiveCategory(value as "automatization" | "filtration")}
          className="max-w-5xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 w-full max-w-md">
              <TabsTrigger value="automatization" className="text-base py-3">
                Automatización
              </TabsTrigger>
              <TabsTrigger value="filtration" className="text-base py-3">
                Filtración y Purificación
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="automatization" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.automatization.map((product) => (
                <Card key={product.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-lg text-espaf-blue-dark">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-gray-600 text-sm">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="filtration" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.filtration.map((product) => (
                <Card key={product.id} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="aspect-square relative overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="object-cover w-full h-full transition-transform hover:scale-105 duration-300"
                    />
                  </div>
                  <CardHeader className="p-4 pb-2">
                    <CardTitle className="text-lg text-espaf-blue-dark">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-gray-600 text-sm">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12">
          <Button asChild className="bg-espaf-yellow hover:bg-espaf-yellow/90 text-espaf-blue-dark">
            <Link to="/productos" className="flex items-center gap-2">
              <span>Ver Todas las Marcas y Productos</span>
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
