
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ExperienceSection = () => {
  const experienceCards = [
    {
      title: "Calidad",
      icon: "🏅",
      description: "Productos y servicios que cumplen con los más altos estándares internacionales y normativas del sector."
    },
    {
      title: "Experiencia",
      icon: "🔧",
      description: "23 años de trayectoria brindando soluciones efectivas a las necesidades específicas de cada cliente."
    },
    {
      title: "Atención Personalizada",
      icon: "👥",
      description: "Equipo técnico especializado que asesora y acompaña durante todo el proceso, desde la selección hasta la implementación."
    }
  ];
  
  return (
    <section className="section-padding bg-white" id="experiencia">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-espaf-blue-dark">
            Nuestra Experiencia
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Por más de dos décadas hemos trabajado con las principales empresas e industrias de México, ofreciendo soluciones confiables y de alta calidad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experienceCards.map((card, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 card-hover overflow-hidden h-full">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-espaf-blue-medium to-espaf-blue-dark"></div>
              <CardHeader className="text-center pb-2">
                <div className="text-4xl mb-2">{card.icon}</div>
                <CardTitle className="text-2xl text-espaf-blue-dark">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-gray-600">
                {card.description}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="p-6 md:p-10 bg-espaf-gray/30 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-espaf-blue-dark mb-4">
              Compromiso con la Excelencia
            </h3>
            <p className="text-gray-700">
              En ESPAF Internacional nos comprometemos con la excelencia en cada proyecto. 
              Nuestros servicios están respaldados por certificaciones internacionales 
              y un equipo técnico altamente capacitado que garantiza resultados óptimos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
