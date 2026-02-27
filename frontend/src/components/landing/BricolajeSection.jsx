import { MessageCircle, Droplet, Home, Umbrella, Waves, Building, Search, HelpCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Description } from '@radix-ui/react-dialog';
const WHATSAPP_NUMBER = '50767059547';

const BRAND_BLUE = '#52b4c3';
const WHATSAPP_GREEN = '#0B7A1E';

const BricolajeSection = () => {
  const bricolajeItems = [
    {
      icon: Droplet,
      title: 'Filtración en pared',
      description: 'Identificamos el origen de la humedad y solucionamos el problema de raíz.',
      badge: 'Detección con escáner',
      whatsappText: 'Hola, tengo una filtración en la pared y necesito ayuda.',
    },
    {
      icon: Home,
      title: 'Goteo en techo',
      description: 'Detectamos y reparamos filtraciones en techos de todo tipo de material.',
      badge: null,
      whatsappText: 'Hola, tengo goteo en el techo y necesito una evaluación.',
    },
    {
      icon: Umbrella,
      title: 'Trabajo de impermeabilización',
      description: 'Aplicamos soluciones de impermeabilización para proteger tu propiedad.',
      badge: null,
      whatsappText: 'Hola, necesito un trabajo de impermeabilización.',
    },
    {
      icon: Waves,
      title: 'Humedad en paredes y muros',
      description: 'Tratamos problemas de humedad para evitar daños estructurales y estéticos.',
      badge: null,
      whatsappText: 'Hola, tengo problemas de humedad en paredes.',
    },
    {
      icon: Building,
      title: 'Filtraciones en piscinas',
      description: 'Reparamos filtraciones en piscinas para mantenerlas en óptimas condiciones.',
      badge: null,
      whatsappText: 'Hola, tengo filtraciones en mi piscina.',
    },
    {
      icon: Search,
      title: 'Evaluación pre-compra',
      description: 'Realizamos inspecciones para detectar problemas ocultos antes de comprar.',
      badge: null,
      whatsappText: 'Hola, necesito una evaluación pre-compra de una propiedad.',
    },
    {
      icon: HelpCircle,
      title: 'Otros',
      description: 'Si tu problema no está en la lista, contáctanos para encontrar una solución.',
      badge: null,
      whatsappText: 'Hola, tengo un problema que no está en la lista y necesito ayuda.',
    },
  ];

  return (
    <section
      id="bricolaje"
      data-testid="bricolaje-section"
      className="bg-[#fafdef] py-20 md:py-28"
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
              className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Top row: icon + badge */}
              <div className="flex items-start justify-between mb-6">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(82,180,195,0.14)' }}
                >
                  <item.icon className="w-7 h-7" style={{ color: BRAND_BLUE }} />
                </div>

                {/* Badge */}
                {item.badge && (
                  <div className="rounded-full bg-[#F5E96A] px-4 py-2 text-[13px] font-semibold text-[#1a1a1a]">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="font-outfit font-semibold text-lg text-eureka-text mb-6">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-[#6a6a6a] mb-8">
  {item.description}
</p>


              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(item.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
                data-testid={`bricolaje-btn-${index}`}
              >
                <Button
                  className="w-full rounded-full py-6 font-semibold transition-colors flex items-center justify-center gap-2"
                  style={{ backgroundColor: WHATSAPP_GREEN, color: '#fff' }}
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
