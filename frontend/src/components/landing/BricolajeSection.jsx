import { MessageCircle, Droplet, Home, Umbrella, Waves, Building, Search, HelpCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';

const WHATSAPP_NUMBER = '50760001234';

const BricolajeSection = () => {
  const bricolajeItems = [
    {
      icon: Droplet,
      title: 'Filtración en pared',
      badge: null,
      whatsappText: 'Hola, tengo una filtración en la pared y necesito ayuda.',
    },
    {
      icon: Home,
      title: 'Goteo en techo',
      badge: null,
      whatsappText: 'Hola, tengo goteo en el techo y necesito una evaluación.',
    },
    {
      icon: Umbrella,
      title: 'Trabajo de impermeabilización',
      badge: null,
      whatsappText: 'Hola, necesito un trabajo de impermeabilización.',
    },
    {
      icon: Waves,
      title: 'Humedad en paredes y muros',
      badge: 'Detección con equipo',
      whatsappText: 'Hola, tengo problemas de humedad en paredes.',
    },
    {
      icon: Building,
      title: 'Filtraciones en piscinas',
      badge: null,
      whatsappText: 'Hola, tengo filtraciones en mi piscina.',
    },
    {
      icon: Search,
      title: 'Evaluación pre-compra',
      badge: null,
      whatsappText: 'Hola, necesito una evaluación pre-compra de una propiedad.',
    },
    {
      icon: HelpCircle,
      title: 'Otros',
      badge: null,
      whatsappText: 'Hola, tengo un problema que no está en la lista y necesito ayuda.',
    },
  ];

  return (
    <section 
      id="bricolaje"
      data-testid="bricolaje-section"
      className="bg-eureka-cream py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 
            data-testid="bricolaje-title"
            className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-eureka-text leading-tight tracking-tight"
          >
            Bricolaje: soluciones rápidas
          </h2>
          <p className="text-lg text-eureka-muted max-w-2xl mx-auto">
            Selecciona tu caso y agenda una evaluación por WhatsApp. 
            Si no lo ves aquí, elige "Otros".
          </p>
        </div>

        {/* Bricolaje Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {bricolajeItems.map((item, index) => (
            <div
              key={index}
              data-testid={`bricolaje-card-${index}`}
              className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Badge */}
              {item.badge && (
                <Badge 
                  className="bg-eureka-green-100 text-eureka-green-900 hover:bg-eureka-green-100 rounded-full px-3 py-1 text-xs font-medium self-start mb-4"
                >
                  {item.badge}
                </Badge>
              )}
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-eureka-green-50 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-eureka-green-900" />
              </div>
              
              {/* Title */}
              <h3 className="font-outfit font-semibold text-lg text-eureka-text mb-6">
                {item.title}
              </h3>
              
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(item.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
                data-testid={`bricolaje-btn-${index}`}
              >
                <Button 
                  className="w-full bg-eureka-green-900 hover:bg-eureka-green-800 text-white rounded-full py-5 font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Pedir por WhatsApp
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BricolajeSection;
