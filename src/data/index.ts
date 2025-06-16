// Datos para el sitio web de Espaf Internacional

// Datos de Industrias
export const industries = [
  {
    id: 1,
    name: "Farmacéutica",
    icon: "flask-round",
    description: "Soluciones de filtración y automatización para la industria farmacéutica cumpliendo con los más altos estándares de calidad."
  },
  {
    id: 2,
    name: "Química",
    icon: "flask-round",
    description: "Sistemas de purificación y control para procesos químicos, garantizando seguridad y eficiencia."
  },
  {
    id: 3,
    name: "Alimentos y Bebidas",
    icon: "package",
    description: "Equipos especializados para la industria alimenticia que cumplen con normas sanitarias nacionales e internacionales."
  },
  {
    id: 4,
    name: "Manufactura",
    icon: "factory",
    description: "Soluciones de automatización para optimizar procesos de manufactura y mejorar la productividad."
  },
  {
    id: 5,
    name: "Automotriz",
    icon: "factory",
    description: "Sistemas de control de calidad y automatización para la exigente industria automotriz."
  },
  {
    id: 6,
    name: "Tratamiento de Agua",
    icon: "filter",
    description: "Equipos y sistemas completos para purificación y tratamiento de agua industrial y comercial."
  }
];

// Datos de Marcas
export const brands = [
  {
    id: 1,
    name: "Thermoval",
    logo: "/lovable-uploads/e32c8001-b7d0-4bcf-b763-371dfa766617.png",
    category: "Automatización",
    description: "Sistemas y componentes para control de temperatura y procesos térmicos industriales."
  },
  {
    id: 2,
    name: "RPE",
    logo: "/lovable-uploads/d8b02c10-493a-4582-998a-357ca09e2c5d.png",
    category: "Automatización",
    description: "Soluciones de control y automatización para procesos industriales."
  },
  {
    id: 3,
    name: "Autovalve",
    logo: "/lovable-uploads/d28e4c6e-f353-4aef-999f-c6d73a713ae9.png",
    category: "Automatización",
    description: "Especialistas en automatización de válvulas para control de procesos industriales."
  },
  {
    id: 4,
    name: "Donaldson",
    logo: "/lovable-uploads/c4a9c558-8ef5-43fc-9631-ab4cb27897f4.png",
    category: "Filtración y Purificación",
    description: "Sistemas de filtración industrial para líquidos y gases de alta calidad."
  },
  {
    id: 5,
    name: "Cobetter",
    logo: "/lovable-uploads/40011bbe-4cb7-46b7-bdcf-4d3a06ac991b.png",
    category: "Filtración y Purificación",
    description: "Soluciones avanzadas de filtración para aplicaciones farmacéuticas e industriales."
  },
  {
    id: 6,
    name: "Instapura",
    logo: "/lovable-uploads/79040d9e-9179-4bbf-9cd5-457326f4ef68.png",
    category: "Filtración y Purificación",
    description: "Sistemas de purificación instantánea para agua y otros fluidos industriales."
  }
];

// Datos de Soluciones
export const solutions = [
  {
    id: 1,
    title: "Proveeduría",
    icon: "box",
    description: "Suministro de productos, MRO y desarrollo de proyectos de aplicación específica.",
    details: [
      "Productos de alta calidad certificados",
      "Soluciones MRO (Mantenimiento, Reparación y Operaciones)",
      "Proyectos de aplicación específica",
      "Asesoría técnica especializada"
    ]
  },
  {
    id: 2,
    title: "Proyectos",
    icon: "settings",
    description: "Desde ingeniería conceptual hasta implementación y mantenimiento de sistemas completos.",
    details: [
      "Ingeniería conceptual y básica",
      "Diseño detallado de sistemas",
      "Implementación y puesta en marcha",
      "Mantenimiento preventivo y correctivo",
      "Actualización de sistemas existentes"
    ]
  },
  {
    id: 3,
    title: "Soluciones Específicas",
    icon: "wrench",
    description: "Especialistas en transferencia de fluidos, filtración y automatización industrial.",
    details: [
      "Sistemas de transferencia de fluidos",
      "Soluciones de filtración avanzada",
      "Automatización de procesos industriales",
      "Sistemas de control y monitoreo",
      "Optimización de procesos existentes"
    ]
  }
];

// Datos de Productos
export const products = {
  automatization: [
    {
      id: 1,
      name: "Válvulas",
      image: "/placeholder.svg",
      description: "Válvulas de control para diversos fluidos y aplicaciones industriales."
    },
    {
      id: 2,
      name: "Actuadores",
      image: "/placeholder.svg",
      description: "Actuadores neumáticos y eléctricos para automatización de válvulas y equipos."
    },
    {
      id: 3,
      name: "Sensores",
      image: "/placeholder.svg",
      description: "Sensores de presión, temperatura, nivel y caudal para monitoreo de procesos."
    },
    {
      id: 4,
      name: "Controladores",
      image: "/placeholder.svg",
      description: "Sistemas de control lógico programable para automatización industrial."
    }
  ],
  filtration: [
    {
      id: 1,
      name: "Equipos de purificación",
      image: "/placeholder.svg",
      description: "Sistemas completos para purificación de agua y otros fluidos industriales."
    },
    {
      id: 2,
      name: "Cartuchos filtrantes",
      image: "/placeholder.svg",
      description: "Elementos filtrantes de diversas micras y materiales para aplicaciones específicas."
    },
    {
      id: 3,
      name: "Sistemas de agua",
      image: "/placeholder.svg",
      description: "Equipos para tratamiento y purificación de agua para uso industrial."
    },
    {
      id: 4,
      name: "Filtros de proceso",
      image: "/placeholder.svg",
      description: "Filtros industriales para aplicaciones críticas en diversos procesos."
    }
  ]
};

// Datos de Testimonios
export const testimonials = [
  {
    id: 1,
    name: "Luis Méndez",
    position: "Gerente de Operaciones",
    company: "Laboratorios Farmacéuticos",
    quote: "El sistema de purificación implementado por Espaf ha mejorado significativamente la calidad de nuestros procesos y cumple con todas las regulaciones del sector."
  },
  {
    id: 2,
    name: "María Rodríguez",
    position: "Directora Técnica",
    company: "Industria Alimenticia",
    quote: "La automatización de nuestra línea de producción aumentó la eficiencia en un 40% y redujo considerablemente los tiempos de inactividad."
  },
  {
    id: 3,
    name: "Carlos Jiménez",
    position: "Jefe de Mantenimiento",
    company: "Sector Automotriz",
    quote: "El soporte técnico y la calidad de los productos ha sido excepcional. Espaf ha sido un socio clave en nuestras operaciones durante más de 10 años."
  }
];

// Clientes importantes
export const clients = [
  { id: 1, name: "Sanofi", logo: "/placeholder.svg" },
  { id: 2, name: "Continental", logo: "/placeholder.svg" },
  { id: 3, name: "ABB", logo: "/placeholder.svg" },
  { id: 4, name: "Bimbo", logo: "/placeholder.svg" },
  { id: 5, name: "Coca-Cola", logo: "/placeholder.svg" }
];

// Información de contacto
export const contactInfo = {
  address: "Av. Industrial #123, Parque Industrial, Ciudad de México",
  phone: "+52 (55) 1234-5678",
  email: "contacto@espaf.com.mx",
  hours: "Lunes a Viernes: 9:00 - 18:00",
  socialMedia: {
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com"
  }
};
