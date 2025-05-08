
import { useState } from "react";
import { solutions } from "@/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Box, Settings, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SolutionsSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  const getSolutionIcon = (iconName: string) => {
    switch (iconName) {
      case 'box':
        return <Box className="h-8 w-8" />;
      case 'settings':
        return <Settings className="h-8 w-8" />;
      case 'wrench':
        return <Wrench className="h-8 w-8" />;
      default:
        return <Wrench className="h-8 w-8" />;
    }
  };
  
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-espaf-blue-dark">
            Nuestras Soluciones y Servicios
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales que se adaptan a las necesidades específicas de cada cliente, garantizando calidad y eficiencia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {solutions.map((solution) => (
            <Card 
              key={solution.id} 
              className={`border-none shadow-md transition-all duration-300 ${
                expandedId === solution.id 
                  ? 'ring-2 ring-espaf-yellow transform scale-[1.02]' 
                  : 'hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              <div className={`h-2 bg-gradient-to-r ${
                solution.id === 1 ? 'from-espaf-blue-dark to-espaf-blue-medium' : 
                solution.id === 2 ? 'from-espaf-blue-medium to-espaf-teal' :
                'from-espaf-teal to-espaf-blue-dark'
              }`}></div>
              
              <CardHeader className="flex flex-row items-center gap-4 pt-8">
                <div className={`p-3 rounded-full ${
                  solution.id === 1 ? 'bg-espaf-blue-dark text-white' :
                  solution.id === 2 ? 'bg-espaf-blue-medium text-white' :
                  'bg-espaf-teal text-white'
                }`}>
                  {getSolutionIcon(solution.icon)}
                </div>
                <CardTitle className="text-xl text-espaf-blue-dark">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pb-4">
                <p className="text-gray-600 mb-4">
                  {solution.description}
                </p>
                
                {expandedId === solution.id && (
                  <div className="animate-fade-in mt-4">
                    <h4 className="font-semibold text-espaf-blue-dark mb-2">
                      Nuestros servicios incluyen:
                    </h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {solution.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="text-espaf-blue-medium hover:text-espaf-yellow hover:bg-transparent p-0"
                  onClick={() => setExpandedId(expandedId === solution.id ? null : solution.id)}
                >
                  {expandedId === solution.id ? "Ver menos" : "Ver más"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="bg-espaf-gray/20 rounded-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-espaf-blue-dark">Nuestro Enfoque</h3>
              <p className="text-gray-600 mb-6">
                En ESPAF Internacional nos enfocamos en entender las necesidades específicas 
                de cada cliente para ofrecer soluciones personalizadas que optimicen sus procesos 
                industriales, reduzcan costos y mejoren la eficiencia operativa.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-espaf-blue-dark text-white flex items-center justify-center font-bold">1</div>
                  <span className="text-gray-700">Análisis de necesidades y diagnóstico</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-espaf-blue-medium text-white flex items-center justify-center font-bold">2</div>
                  <span className="text-gray-700">Diseño de solución personalizada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-espaf-teal text-white flex items-center justify-center font-bold">3</div>
                  <span className="text-gray-700">Implementación y puesta en marcha</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-espaf-yellow text-espaf-blue-dark flex items-center justify-center font-bold">4</div>
                  <span className="text-gray-700">Seguimiento y soporte continuo</span>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-espaf-blue-dark hover:bg-espaf-blue-medium">
                  <Link to="/soluciones" className="flex items-center gap-2">
                    <span>Conoce más sobre nuestros servicios</span>
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="hidden md:block">
              <img 
                src="/placeholder.svg" 
                alt="Enfoque ESPAF" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
