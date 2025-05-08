
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { contactInfo, industries } from "@/data";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";
import { toast } from "@/components/ui/use-toast.ts";

const Contact = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Formulario enviado",
      description: "Gracias por contactarnos. Pronto nos pondremos en contacto contigo.",
    });
    // Reset form
    e.currentTarget.reset();
  };
  
  return (
    <div className="pt-16">
      {/* Hero Banner */}
      <section className="bg-espaf-blue-dark text-white py-20 md:py-32">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contáctanos
            </h1>
            <p className="text-xl opacity-90">
              Estamos listos para ayudarte. Contáctanos para recibir asesoría especializada sobre nuestros productos y servicios.
            </p>
          </div>
        </div>
      </section>
      
      {/* Formulario de contacto y mapa */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario */}
            <div>
              <Card className="shadow-lg border-none">
                <CardContent className="p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6 text-espaf-blue-dark">Envíanos un mensaje</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nombre completo*</Label>
                        <Input id="name" placeholder="Tu nombre" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Empresa*</Label>
                        <Input id="company" placeholder="Nombre de tu empresa" required />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico*</Label>
                        <Input id="email" type="email" placeholder="correo@ejemplo.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" placeholder="Tu número de teléfono" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="industry">Industria</Label>
                      <Select>
                        <SelectTrigger id="industry">
                          <SelectValue placeholder="Selecciona tu industria" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry.id} value={industry.name}>
                              {industry.name}
                            </SelectItem>
                          ))}
                          <SelectItem value="other">Otra</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Asunto*</Label>
                      <Select required>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Selecciona un asunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="info">Solicitud de información</SelectItem>
                          <SelectItem value="quote">Cotización</SelectItem>
                          <SelectItem value="support">Soporte técnico</SelectItem>
                          <SelectItem value="complaint">Queja o reclamación</SelectItem>
                          <SelectItem value="other">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje*</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Escribe tu mensaje aquí..." 
                        className="min-h-[120px]"
                        required 
                      />
                    </div>
                    
                    <div>
                      <Button type="submit" className="w-full bg-espaf-blue-dark hover:bg-espaf-blue-medium">
                        <span>Enviar Mensaje</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Información de contacto */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-espaf-blue-dark">Información de contacto</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-espaf-gray/20 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-espaf-blue-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-espaf-blue-dark mb-1">Dirección</h3>
                      <p className="text-gray-600">{contactInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-espaf-gray/20 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-espaf-blue-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-espaf-blue-dark mb-1">Teléfono</h3>
                      <p className="text-gray-600">{contactInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-espaf-gray/20 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-espaf-blue-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-espaf-blue-dark mb-1">Correo Electrónico</h3>
                      <p className="text-gray-600">
                        <a href={`mailto:${contactInfo.email}`} className="text-espaf-blue-medium hover:underline">
                          {contactInfo.email}
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-espaf-gray/20 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-espaf-blue-dark" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-espaf-blue-dark mb-1">Horario de Atención</h3>
                      <p className="text-gray-600">{contactInfo.hours}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mapa */}
              <div className="bg-espaf-gray/20 p-4 rounded-lg">
                <h3 className="font-semibold text-espaf-blue-dark mb-4">Nuestra Ubicación</h3>
                <div className="aspect-video bg-espaf-gray/40 rounded-md overflow-hidden">
                  {/* Aquí iría un mapa interactivo */}
                  <div className="w-full h-full flex items-center justify-center bg-espaf-gray/40 text-gray-500">
                    Mapa de ubicación
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Descarga de catálogo */}
      <section className="section-padding bg-espaf-gray/10">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-espaf-blue-dark to-espaf-blue-medium rounded-lg p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Descarga nuestro catálogo completo
                </h2>
                <p className="mb-6 opacity-90">
                  Accede a toda nuestra información técnica y catálogo de productos en un solo documento.
                </p>
                <Button className="bg-espaf-yellow hover:bg-espaf-yellow/90 text-espaf-blue-dark">
                  Descargar Catálogo
                </Button>
              </div>
              
              <div className="hidden md:block">
                <img 
                  src="/placeholder.svg" 
                  alt="Catálogo ESPAF" 
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-espaf-blue-dark">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Resolvemos tus dudas más comunes. Si tienes alguna pregunta adicional, no dudes en contactarnos.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { 
                question: "¿En qué áreas geográficas ofrecen sus servicios?", 
                answer: "Ofrecemos nuestros servicios principalmente en toda la República Mexicana, aunque también atendemos proyectos internacionales en América Latina." 
              },
              { 
                question: "¿Cuál es el tiempo promedio de entrega de los productos?", 
                answer: "Para productos en inventario, el tiempo de entrega es de 24 a 48 horas. Para productos de importación, el tiempo varía entre 2 y 4 semanas dependiendo de la disponibilidad y origen." 
              },
              { 
                question: "¿Ofrecen garantía en sus productos y servicios?", 
                answer: "Sí, todos nuestros productos cuentan con garantía del fabricante, y nuestros servicios tienen garantía de 12 meses en instalación y mano de obra." 
              },
              { 
                question: "¿Qué métodos de pago aceptan?", 
                answer: "Aceptamos transferencias bancarias, depósitos, tarjetas de crédito empresariales y crédito a clientes con historial previo (sujeto a aprobación)." 
              },
              { 
                question: "¿Ofrecen capacitación para el uso de sus productos?", 
                answer: "Sí, ofrecemos capacitación especializada para el uso y mantenimiento de los equipos que suministramos, tanto en nuestras instalaciones como en las del cliente." 
              }
            ].map((item, i) => (
              <Card key={i} className="border-none shadow-md">
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-espaf-blue-dark">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
