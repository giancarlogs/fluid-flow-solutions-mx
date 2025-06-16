import { useEffect, useState } from "react";
import { brands, products } from "@/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BrandModal from "@/components/BrandModal";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "automatization" | "filtration">("all");
  const [selectedBrand, setSelectedBrand] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
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

  const handleBrandClick = (brand: any) => {
    setSelectedBrand(brand);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBrand(null);
  };
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="bg-gradient-to-br from-espaf-blue-dark via-espaf-blue-medium to-espaf-blue-dark text-white py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Marcas y Productos
            </h1>
            <p className="text-xl opacity-90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Representamos las marcas líderes a nivel mundial en automatización industrial y purificación de fluidos.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filtros y Búsqueda - Centrados */}
      <section className="py-8 bg-white border-b border-espaf-gray/30">
        <div className="container-custom">
          <div className="flex flex-col items-center gap-6">
            {/* Tabs centrados */}
            <Tabs 
              defaultValue="all" 
              onValueChange={(value) => setActiveCategory(value as "all" | "automatization" | "filtration")}
              className="w-full max-w-2xl"
            >
              <div className="flex justify-center">
                <TabsList className="grid grid-cols-3 w-full bg-espaf-gray/20 p-1 rounded-lg">
                  <TabsTrigger 
                    value="all" 
                    className="data-[state=active]:bg-espaf-blue-dark data-[state=active]:text-white transition-all duration-300 hover:bg-espaf-blue-dark/10"
                  >
                    Todas las Categorías
                  </TabsTrigger>
                  <TabsTrigger 
                    value="automatization"
                    className="data-[state=active]:bg-espaf-blue-medium data-[state=active]:text-white transition-all duration-300 hover:bg-espaf-blue-medium/10"
                  >
                    Automatización
                  </TabsTrigger>
                  <TabsTrigger 
                    value="filtration"
                    className="data-[state=active]:bg-espaf-teal data-[state=active]:text-white transition-all duration-300 hover:bg-espaf-teal/10"
                  >
                    Filtración y Purificación
                  </TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
            
            {/* Búsqueda centrada */}
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-espaf-blue-medium transition-colors" size={20} />
              <input 
                type="text"
                placeholder="Buscar marcas o productos..."
                className="pl-10 py-3 pr-4 border-2 border-espaf-gray/30 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-espaf-blue-medium focus:border-transparent transition-all duration-300 hover:border-espaf-blue-medium/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Marcas */}
      <section className="section-padding bg-gradient-to-b from-white to-espaf-gray/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-espaf-blue-dark animate-fade-in">
              Nuestras Marcas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Representamos oficialmente marcas líderes en sus categorías, garantizando productos de la más alta calidad.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrands.length > 0 ? (
              filteredBrands.map((brand, index) => (
                <Card 
                  key={brand.id} 
                  className="hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer group bg-white/80 backdrop-blur-sm border-none shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => handleBrandClick(brand)}
                >
                  <div className="bg-gradient-to-br from-espaf-gray/5 to-espaf-blue-dark/5 p-6 flex justify-center items-center h-40 border-b border-espaf-gray/10 group-hover:from-espaf-blue-dark/10 group-hover:to-espaf-blue-medium/10 transition-all duration-500">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-24 max-w-full object-contain transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                    />
                  </div>
                  <CardHeader className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <CardTitle className="text-xl text-espaf-blue-dark group-hover:text-espaf-blue-medium transition-all duration-300">
                        {brand.name}
                      </CardTitle>
                      <span className={`text-xs px-3 py-1 rounded-full transition-all duration-300 ${
                        brand.category === "Automatización" 
                          ? "bg-espaf-blue-medium/10 text-espaf-blue-medium group-hover:bg-espaf-blue-medium group-hover:text-white group-hover:scale-105" 
                          : brand.category === "Filtración y Purificación"
                          ? "bg-espaf-teal/10 text-espaf-teal group-hover:bg-espaf-teal group-hover:text-white group-hover:scale-105"
                          : "bg-espaf-yellow/10 text-espaf-blue-dark group-hover:bg-espaf-yellow group-hover:scale-105"
                      }`}>
                        {brand.category}
                      </span>
                    </div>
                    <CardDescription className="group-hover:text-gray-700 transition-colors duration-300">
                      {brand.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="outline" 
                      className="w-full border-espaf-blue-medium text-espaf-blue-medium hover:bg-espaf-blue-medium hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      Ver productos y detalles
                    </Button>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full text-center py-12 animate-fade-in">
                <p className="text-gray-500 text-lg">No se encontraron marcas que coincidan con tu búsqueda.</p>
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-4 hover:bg-espaf-blue-medium/10 hover:text-espaf-blue-medium transition-all duration-300"
                >
                  Limpiar filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Productos por Categoría */}
      <section className="section-padding bg-gradient-to-br from-espaf-gray/10 via-white/50 to-espaf-blue-dark/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-espaf-blue-dark animate-fade-in">
              Nuestros Productos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Contamos con una amplia gama de productos especializados para diversas aplicaciones industriales.
            </p>
          </div>
          
          <Tabs defaultValue="automatization">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 w-full max-w-md bg-white/80 backdrop-blur-sm shadow-lg">
                <TabsTrigger 
                  value="automatization" 
                  className="text-base py-3 data-[state=active]:bg-espaf-blue-medium data-[state=active]:text-white transition-all duration-300"
                >
                  Automatización
                </TabsTrigger>
                <TabsTrigger 
                  value="filtration" 
                  className="text-base py-3 data-[state=active]:bg-espaf-teal data-[state=active]:text-white transition-all duration-300"
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
                    className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/90 backdrop-blur-sm group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="object-cover w-full h-full transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espaf-blue-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-lg text-espaf-blue-dark group-hover:text-espaf-blue-medium transition-colors duration-300">
                        {product.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">
                        {product.description}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full text-espaf-blue-medium border-espaf-blue-medium hover:bg-espaf-blue-medium hover:text-white transition-all duration-300 hover:scale-105"
                      >
                        Ver detalles
                      </Button>
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
                    className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-white/90 backdrop-blur-sm group animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="object-cover w-full h-full transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-espaf-teal/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    </div>
                    <CardHeader className="p-4 pb-2">
                      <CardTitle className="text-lg text-espaf-blue-dark group-hover:text-espaf-teal transition-colors duration-300">
                        {product.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-700 transition-colors duration-300">
                        {product.description}
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full text-espaf-teal border-espaf-teal hover:bg-espaf-teal hover:text-white transition-all duration-300 hover:scale-105"
                      >
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

      {/* Modal de marca */}
      <BrandModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        brand={selectedBrand}
      />
    </div>
  );
};

export default Products;
