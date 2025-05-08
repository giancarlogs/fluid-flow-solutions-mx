
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Box, Factory, Filter, Settings, Truck, Wrench } from "lucide-react";
import { solutions, clients } from "@/data";
import { Link } from "react-router-dom";

const Solutions = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  // Iconos de las soluciones
  const getSolutionIcon = (iconName: string, size = 40) => {
    const iconProps = { size, className: "text-white" };
    
    switch (iconName) {
      case 'box':
        return <Box {...iconProps} />;
      case 'settings':
        return <Settings {...iconProps} />;
      case 'wrench':
        return <Wrench {...iconProps} />;
      default:
        return <Wrench {...iconProps} />;
    }
  };
  
  const serviceIcons = [
    { icon: <Filter className="h-12 w-12 text-espaf-blue-medium" />, title: "Purificación de Fluidos" },
    { icon: <Settings className="h-12 w-12 text-espaf-blue-medium" />, title: "Automatización Industrial" },
    { icon: <Truck className="h-12 w-12 text-espaf-blue-medium" />, title: "Logística Especializada" },
    { icon: <Wrench className="h-12 w-12 text-espaf-blue-medium" />, title: "Mantenimiento" },
  ];
  
  const industrialSectors = [
    { icon: <Factory className="h-8 w-8 text-espaf-blue-dark" />, title: "Farmacéutica", description: "Soluciones que cumplen con normativas internacionales para la industria farmacéutica." },
    { icon: <Filter className="h-8 w-8 text-espaf-blue-dark" />, title: "Química", description: "Sistemas especializados para manejo seguro de fluidos en procesos químicos." },
    { icon: <Box className="h-8 w-8 text-espaf-blue-dark" />, title: "Alimentos y Bebidas", description: "Equipos de grado alimenticio para purificación y control de procesos." },
    { icon: <Settings className="h-8 w-8 text-espaf-blue-dark" />, title: "Manufactura", description: "Automatización y control para optimizar líneas de producción." },
    { icon: <Truck className="h-8 w-8 text-espaf-blue-dark" />, title: "Automotriz", description: "Soluciones precisas para los estrictos estándares del sector automotriz." },
    { icon: <Wrench className="h-8 w-8 text-espaf-blue-dark" />, title: "Tratamiento de Agua", description: "Sistemas completos para purificación y tratamiento de agua industrial." },
  ];
  
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="bg-espaf-blue-dark text-white py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Soluciones y Servicios
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Ofrecemos soluciones integrales en purificación de fluidos y automatización de procesos, adaptadas a las necesidades específicas de cada industria.
            </p>
          </div>
        </div>
      </section>
      
      {/* Líneas de Negocio */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-espaf-blue-dark text-center">
            Nuestras Líneas de Negocio
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <div key={solution.id} className="group relative">
                <Card className="h-full overflow-hidden border-none shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <div className={`h-2 bg-gradient-to-r ${
                    solution.id === 1 ? 'from-espaf-blue-dark to-espaf-blue-medium' : 
                    solution.id === 2 ? 'from-espaf-blue-medium to-espaf-teal' :
                    'from-espaf-teal to-espaf-blue-dark'
                  }`}></div>
                  
                  <div className="flex justify-center mt-8">
                    <div className={`p-5 rounded-full ${
                      solution.id === 1 ? 'bg-espaf-blue-dark' :
                      solution.id === 2 ? 'bg-espaf-blue-medium' :
                      'bg-espaf-teal'
                    } group-hover:scale-110 transition-transform duration-300`}>
                      {getSolutionIcon(solution.icon)}
                    </div>
                  </div>
                  
                  <CardHeader className="text-center">
                    <CardTitle className="text-2xl text-espaf-blue-dark">{solution.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-espaf-blue-dark">Servicios Incluidos:</h4>
                      <ul className="space-y-2 text-left">
                        {solution.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <div className="rounded-full bg-espaf-yellow h-5 w-5 mt-1 flex-shrink-0"></div>
                            <span className="text-gray-700">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Nuestro Enfoque */}
      <section className="section-padding bg-espaf-gray/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-espaf-blue-dark">
              Nuestro Enfoque
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trabajamos en estrecha colaboración con nuestros clientes para entender sus necesidades y ofrecer soluciones que generen valor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/placeholder.svg" 
                alt="Enfoque de trabajo ESPAF" 
                className="rounded-lg shadow-md"
              />
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-espaf-blue-dark">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-espaf-blue-dark text-white flex items-center justify-center font-bold">1</div>
                  <h3 className="text-xl font-semibold text-espaf-blue-dark">Diagnóstico</h3>
                </div>
                <p className="text-gray-600 pl-11">
                  Analizamos en detalle los requerimientos y condiciones específicas de tu operación para identificar áreas de oportunidad.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-espaf-blue-medium">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-espaf-blue-medium text-white flex items-center justify-center font-bold">2</div>
                  <h3 className="text-xl font-semibold text-espaf-blue-dark">Diseño</h3>
                </div>
                <p className="text-gray-600 pl-11">
                  Desarrollamos una solución personalizada considerando aspectos técnicos, operativos y presupuestales.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-espaf-teal">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-espaf-teal text-white flex items-center justify-center font-bold">3</div>
                  <h3 className="text-xl font-semibold text-espaf-blue-dark">Implementación</h3>
                </div>
                <p className="text-gray-600 pl-11">
                  Ejecutamos el proyecto con personal especializado, asegurando la correcta instalación y puesta en marcha.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-espaf-yellow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-espaf-yellow text-espaf-blue-dark flex items-center justify-center font-bold">4</div>
                  <h3 className="text-xl font-semibold text-espaf-blue-dark">Soporte Continuo</h3>
                </div>
                <p className="text-gray-600 pl-11">
                  Brindamos acompañamiento, mantenimiento y optimización constante para garantizar resultados a largo plazo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Servicios Específicos */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-espaf-blue-dark">
              Servicios Específicos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conoce nuestras áreas de especialización para optimizar tus procesos industriales.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceIcons.map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-white shadow-lg rounded-lg p-8 h-full flex flex-col items-center hover:shadow-xl transition-shadow">
                  <div className="mb-4 p-4 bg-espaf-gray/20 rounded-full">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-espaf-blue-dark mb-3">
                    {service.title}
                  </h3>
                  <Button variant="link" className="text-espaf-blue-medium hover:text-espaf-yellow mt-auto">
                    Ver detalles
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industrias Atendidas */}
      <section className="section-padding bg-espaf-blue-dark text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Industrias Atendidas
            </h2>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              Nuestras soluciones son aplicables a diversas industrias, adaptándose a los requerimientos específicos de cada sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrialSectors.map((sector, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-colors">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="p-2 bg-white/10 rounded-lg">
                    {sector.icon}
                  </div>
                  <CardTitle className="text-white">{sector.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-white/80">
                    {sector.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Galería de Proyectos */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-espaf-blue-dark">
              Proyectos Realizados
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conoce algunos de nuestros proyectos más destacados en diferentes industrias.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="overflow-hidden rounded-lg shadow-md group">
                <div className="aspect-square relative">
                  <img 
                    src="/placeholder.svg" 
                    alt={`Proyecto ${item}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espaf-blue-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="font-semibold text-lg">Proyecto Industrial {item}</h3>
                      <p className="text-sm opacity-90">Sistema de purificación y control automático</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Clientes */}
      <section className="section-padding bg-espaf-gray/10">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-espaf-blue-dark">
              Empresas que Confían en Nosotros
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nuestros clientes son nuestro mejor aval. Conoce algunas de las empresas que ya confían en ESPAF.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {clients.map((client) => (
              <div key={client.id} className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-espaf-blue-dark rounded-lg p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Necesitas asesoría especializada?
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90">
              Nuestro equipo técnico está listo para ayudarte a encontrar la mejor solución para tu negocio.
            </p>
            <Button asChild size="lg" className="bg-espaf-yellow hover:bg-espaf-yellow/90 text-espaf-blue-dark">
              <Link to="/contacto">Solicitar Asesoría</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
