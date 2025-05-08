
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Soluciones y Servicios", path: "/soluciones" },
    { name: "Marcas y Productos", path: "/productos" },
    { name: "Contacto", path: "/contacto" }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Cerrar el menú móvil cuando cambia la ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  return (
    <header className={`fixed w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="text-espaf-blue-dark font-montserrat font-bold text-2xl">
            ESPAF
            <span className="text-espaf-blue-medium text-xl"> Internacional</span>
          </div>
        </Link>
        
        {/* Navegación de escritorio */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition-colors hover:text-espaf-blue-medium ${
                location.pathname === item.path
                  ? 'text-espaf-blue-dark border-b-2 border-espaf-yellow'
                  : isScrolled ? 'text-gray-700' : 'text-gray-800'
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          <Button asChild className="bg-espaf-yellow hover:bg-espaf-yellow/90 text-espaf-blue-dark ml-2">
            <Link to="/contacto" className="flex items-center gap-2">
              <Mail size={18} />
              <span>Contáctanos</span>
            </Link>
          </Button>
        </nav>
        
        {/* Botón de menú móvil */}
        <button 
          className="md:hidden text-espaf-blue-dark hover:text-espaf-blue-medium"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[60px] right-0 w-full bg-white shadow-lg h-auto py-4 z-20 animate-fade-in">
          <div className="container-custom flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`py-2 px-4 font-medium transition-colors hover:bg-espaf-gray/20 ${
                  location.pathname === item.path
                    ? 'text-espaf-blue-dark border-l-4 border-espaf-yellow bg-espaf-gray/10'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <Button asChild className="w-full bg-espaf-yellow hover:bg-espaf-yellow/90 text-espaf-blue-dark mt-2">
              <Link to="/contacto" className="flex items-center justify-center gap-2">
                <Mail size={18} />
                <span>Contáctanos</span>
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
