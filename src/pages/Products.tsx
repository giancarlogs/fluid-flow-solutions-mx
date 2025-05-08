
import { useEffect, useState } from "react";
import { brands, products } from "@/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "automatization" | "filtration">("all");
  
  // Filtrar marcas por categoría y búsqueda
  const filteredBrands = brands.filter(brand => {
    const matchesCategory = 
      activeCategory === "all" || 
      brand.category.toLowerCase() === activeCategory ||
      brand.category === "Ambos";
    
    const matchesSearch = 
      brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brand.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="bg-espaf-blue-dark text-white py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Marcas y Productos
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Representamos las marcas líderes a nivel mundial en automatización industrial y purificación de fluidos.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filtros y Búsqueda */}
      <section className="py-8 bg-white border-b border-espaf-gray/30">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Tabs 
              defaultValue="all" 
              onValueChange={(value) => setActiveCategory(value as "all" | "automatization" | "filtration")}
            >
              <TabsList>
                <TabsTrigger value="all">Todas las Categorías</TabsTrigger>
                <TabsTrigger value="automatization">Automatización</TabsTrigger>
                <TabsTrigger value="filtration">Filtración y Purificación</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text"
                placeholder="Buscar marcas o productos..."
                className="pl-10 py-2 pr-4 border border-espaf-gray/50 rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-espaf-blue-medium"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Marcas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-espaf-blue-dark">
              Nuestras Marcas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Representamos oficialmente marcas líderes en sus categorías, garantizando productos de la más alta calidad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrands.length > 0 ? (
              filteredBrands.map((brand) => (
                <Card key={brand.id} className="hover:shadow-md transition-shadow overflow-hidden">
                  <div className="bg-espaf-gray/10 p-6 flex justify-center items-center h-40 border-b border-espaf-gray/20">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-24 max-w-full object-contain"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-center mb-2">
                      <CardTitle className="text-xl text-espaf-blue-dark">{brand.name}</CardTitle>
                      <span className={`text-xs px-3 py-1 rounded-full ${
                        brand.category === "Automatización" 
                          ? "bg-espaf-blue-medium/10 text-espaf-blue-medium" 
                          : brand.category === "Filtración y Purificación"
                          ? "bg-espaf-teal/10 text-espaf-teal"
                          : "bg-espaf-yellow/10 text-espaf-blue-dark"
                      }`}>
                        {brand.category}
                      </span>
                    </div>
                    <CardDescription>{brand.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full border-espaf-blue-medium text-espaf-blue-medium hover:bg-espaf-blue-medium hover:text-white">
                      Ver productos
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No se encontraron marcas que coincidan con tu búsqueda.</p>
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-4"
                >
                  Limpiar filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Productos por Categoría */}
      <section className="section-padding bg-espaf-gray/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-espaf-blue-dark">
              Nuestros Productos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Contamos con una amplia gama de productos especializados para diversas aplicaciones industriales.
            </p>
          </div>
          
          <Tabs defaultValue="automatization">
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
                      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                      <Button variant="outline" size="sm" className="w-full text-espaf-blue-medium border-espaf-blue-medium hover:bg-espaf-blue-medium hover:text-white">
                        Ver detalles
                      </Button>
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
                      <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                      <Button variant="outline" size="sm" className="w-full text-espaf-blue-medium border-espaf-blue-medium hover:bg-espaf-blue-medium hover:text-white">
                        Ver detalles
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Por qué elegir nuestras marcas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-espaf-blue-dark">
                ¿Por qué elegir nuestras marcas?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="min-w-[36px] h-9 bg-espaf-yellow rounded-full flex items-center justify-center text-espaf-blue-dark font-bold text-lg">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-espaf-blue-dark mb-2">Calidad Certificada</h3>
                    <p className="text-gray-600">
                      Todas nuestras marcas cuentan con certificaciones internacionales que garantizan su calidad y confiabilidad.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="min-w-[36px] h-9 bg-espaf-yellow rounded-full flex items-center justify-center text-espaf-blue-dark font-bold text-lg">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-espaf-blue-dark mb-2">Respaldo Técnico</h3>
                    <p className="text-gray-600">
                      Contamos con un equipo de especialistas capacitados por los fabricantes para brindar soporte técnico inmediato.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="min-w-[36px] h-9 bg-espaf-yellow rounded-full flex items-center justify-center text-espaf-blue-dark font-bold text-lg">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-espaf-blue-dark mb-2">Disponibilidad Inmediata</h3>
                    <p className="text-gray-600">
                      Mantenemos un amplio inventario de productos y refacciones para entrega inmediata.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="min-w-[36px] h-9 bg-espaf-yellow rounded-full flex items-center justify-center text-espaf-blue-dark font-bold text-lg">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-espaf-blue-dark mb-2">Soluciones Personalizadas</h3>
                    <p className="text-gray-600">
                      Adaptamos nuestros productos y servicios a las necesidades específicas de cada cliente y aplicación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="/placeholder.svg" 
                alt="Calidad ESPAF" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Productos Destacados */}
      <section className="section-padding bg-espaf-blue-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Productos Destacados
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Conoce nuestros productos premium y más solicitados por nuestros clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden hover:bg-white/15 transition-colors">
                <div className="aspect-video relative">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Producto destacado ${item}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-espaf-yellow text-espaf-blue-dark text-xs font-medium px-2 py-1 rounded">Destacado</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Producto Premium {item}</h3>
                  <p className="text-white/80 mb-4">Descripción breve del producto destacado y sus principales características.</p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-espaf-blue-dark">
                    Ver Detalles
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-espaf-gray/20 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-espaf-blue-dark">
              ¿Necesitas información técnica sobre algún producto?
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-600">
              Descarga nuestro catálogo completo o contacta con nuestro equipo técnico para recibir asesoría especializada.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-espaf-blue-dark hover:bg-espaf-blue-medium">
                Descargar Catálogo
              </Button>
              <Button asChild className="bg-espaf-yellow hover:bg-espaf-yellow/90 text-espaf-blue-dark">
                <Link to="/contacto" className="flex items-center gap-2">
                  <span>Solicitar Información</span>
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
