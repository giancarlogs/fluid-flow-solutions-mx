
import { useState } from "react";
import { industries } from "@/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Factory, Filter, FlaskRound, Package } from "lucide-react";

const IndustriesSection = () => {
  const [activeIndustry, setActiveIndustry] = useState<number | null>(null);
  
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case 'factory':
        return <Factory className="h-8 w-8 text-espaf-blue-medium" />;
      case 'filter':
        return <Filter className="h-8 w-8 text-espaf-blue-medium" />;
      case 'flask-round':
        return <FlaskRound className="h-8 w-8 text-espaf-blue-medium" />;
      case 'package':
        return <Package className="h-8 w-8 text-espaf-blue-medium" />;
      default:
        return <Factory className="h-8 w-8 text-espaf-blue-medium" />;
    }
  };
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-espaf-blue-dark">
            Industrias que Atendemos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nuestras soluciones son aplicables a diversas industrias, adaptándose a los requerimientos específicos de cada sector.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {industries.map((industry) => (
            <Card 
              key={industry.id} 
              className={`cursor-pointer transition-all duration-300 border-2 ${
                activeIndustry === industry.id 
                  ? 'border-espaf-yellow shadow-lg scale-105' 
                  : 'border-transparent hover:border-espaf-gray'
              }`}
              onClick={() => setActiveIndustry(industry.id)}
            >
              <CardHeader className="p-4 text-center">
                <div className="mx-auto mb-2">
                  {getIndustryIcon(industry.icon)}
                </div>
                <CardTitle className="text-sm md:text-base font-medium">
                  {industry.name}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
        
        {/* Descripción de la industria seleccionada */}
        <div className="mt-8">
          {activeIndustry ? (
            <Card className="border-t-4 border-t-espaf-yellow animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl md:text-2xl text-espaf-blue-dark">
                  {getIndustryIcon(industries.find(i => i.id === activeIndustry)?.icon || '')}
                  {industries.find(i => i.id === activeIndustry)?.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">
                  {industries.find(i => i.id === activeIndustry)?.description}
                </CardDescription>
                <div className="mt-4">
                  <h4 className="font-semibold text-espaf-blue-dark mb-2">Soluciones para esta industria:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Sistemas de filtración específicos para procesos críticos</li>
                    <li>Automatización de líneas de producción</li>
                    <li>Equipos de purificación de fluidos</li>
                    <li>Mantenimiento preventivo y correctivo</li>
                    <li>Asesoría técnica especializada</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="bg-espaf-gray/20 rounded-lg p-6 text-center">
              <p className="text-gray-600">Selecciona una industria para ver más detalles sobre nuestras soluciones</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
