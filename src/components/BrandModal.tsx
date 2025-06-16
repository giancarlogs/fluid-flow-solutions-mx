
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ExternalLink } from "lucide-react";

interface Product {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface BrandModalProps {
  isOpen: boolean;
  onClose: () => void;
  brand: {
    id: string;
    name: string;
    logo: string;
    description: string;
    category: string;
    longDescription?: string;
    products?: Product[];
    technologies?: string[];
    impact?: string[];
  } | null;
}

const BrandModal = ({ isOpen, onClose, brand }: BrandModalProps) => {
  if (!brand) return null;

  const defaultProducts = [
    {
      id: "1",
      name: "Válvulas de Control",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      description: "Válvulas de alta precisión para control de flujo"
    },
    {
      id: "2", 
      name: "Sensores Industriales",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      description: "Sensores de última generación para automatización"
    },
    {
      id: "3",
      name: "Actuadores Neumáticos", 
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      description: "Actuadores robustos para aplicaciones industriales"
    }
  ];

  const products = brand.products || defaultProducts;
  const technologies = brand.technologies || ["Automatización", "Control de Flujo", "Sensores IoT"];
  const impact = brand.impact || ["30% mejora en eficiencia", "50% reducción en tiempos de mantenimiento"];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-espaf-blue-dark to-slate-800 text-white border-espaf-teal">
        <DialogHeader className="relative">
          <div className="flex items-center gap-4 mb-4">
            <Badge className="bg-espaf-teal/20 text-espaf-teal border-espaf-teal">
              Soluciones Empresariales
            </Badge>
          </div>
          
          <DialogTitle className="text-3xl font-bold text-left">
            {brand.name}
          </DialogTitle>
          
          <div className="bg-white/10 rounded-lg p-6 mt-4">
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-16 object-contain mb-4 bg-white/90 rounded px-4 py-2"
            />
            <p className="text-white/90 text-lg leading-relaxed">
              {brand.longDescription || brand.description}
            </p>
          </div>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Descripción del Proyecto */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-espaf-yellow">
              Descripción de Productos
            </h3>
            <p className="text-white/80 leading-relaxed">
              Nuestra línea de productos {brand.name} ofrece soluciones integrales para 
              automatización y control de procesos industriales, garantizando la más alta 
              calidad y confiabilidad en aplicaciones críticas.
            </p>
          </div>

          {/* Productos Destacados */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-espaf-yellow">
              Productos Destacados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {products.slice(0, 3).map((product) => (
                <Card key={product.id} className="bg-white/10 border-white/20 hover:bg-white/15 transition-all">
                  <CardContent className="p-4">
                    <div className="aspect-video rounded-lg overflow-hidden mb-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold text-white mb-2">{product.name}</h4>
                    <p className="text-white/70 text-sm">{product.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Impacto Logrado */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-espaf-yellow">
              Impacto Logrado
            </h3>
            <div className="space-y-2">
              {impact.map((item, index) => (
                <p key={index} className="text-espaf-teal font-medium">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Tecnologías Utilizadas */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-espaf-yellow">
              Tecnologías Utilizadas
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="bg-transparent border-espaf-teal text-espaf-teal hover:bg-espaf-teal hover:text-white"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex gap-4 pt-4">
            <Button className="bg-espaf-yellow hover:bg-espaf-yellow/90 text-espaf-blue-dark">
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Catálogo Completo
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-espaf-blue-dark"
            >
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BrandModal;
