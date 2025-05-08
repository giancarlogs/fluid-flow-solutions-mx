
import { Link } from "react-router-dom";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-espaf-blue-dark text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Acerca de */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white border-b border-espaf-blue-medium pb-2">
              ESPAF Internacional
            </h3>
            <p className="mb-4 text-gray-300">
              Empresa Mexicana con 23 años de experiencia brindando asesoría, soporte y productos de alta calidad en purificación de fluidos y automatización de procesos industriales.
            </p>
            <Button asChild variant="outline" className="hover:bg-espaf-yellow hover:text-espaf-blue-dark border-espaf-yellow text-espaf-yellow">
              <Link to="/contacto">Solicitar Información</Link>
            </Button>
          </div>
          
          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white border-b border-espaf-blue-medium pb-2">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-espaf-yellow transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/soluciones" className="text-gray-300 hover:text-espaf-yellow transition-colors">
                  Soluciones y Servicios
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-gray-300 hover:text-espaf-yellow transition-colors">
                  Marcas y Productos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-300 hover:text-espaf-yellow transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Columna 3: Información de Contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white border-b border-espaf-blue-medium pb-2">
              Contacto
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="min-w-[20px] h-5 text-espaf-yellow" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="min-w-[20px] h-5 text-espaf-yellow" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="min-w-[20px] h-5 text-espaf-yellow" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-espaf-yellow transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="min-w-[20px] h-5 text-espaf-yellow" />
                <span>{contactInfo.hours}</span>
              </div>
            </div>
          </div>
          
          {/* Columna 4: Boletín */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white border-b border-espaf-blue-medium pb-2">
              Descarga Nuestro Catálogo
            </h3>
            <p className="mb-4 text-gray-300">
              Obtén nuestro catálogo completo con todos nuestros productos y soluciones para tu industria.
            </p>
            <Button className="w-full bg-espaf-yellow hover:bg-espaf-yellow/90 text-espaf-blue-dark">
              Descargar Catálogo
            </Button>
          </div>
        </div>
        
        {/* Separador */}
        <div className="border-t border-espaf-blue-medium pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} ESPAF Internacional SA de CV. Todos los derechos reservados.
            </p>
            <div className="flex space-x-4">
              <a href={contactInfo.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-espaf-yellow">
                Facebook
              </a>
              <a href={contactInfo.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-espaf-yellow">
                LinkedIn
              </a>
              <a href={contactInfo.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-espaf-yellow">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
