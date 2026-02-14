import { MessageCircle, Search, Wrench, Settings } from 'lucide-react';
import { Button } from '../ui/button';

const WHATSAPP_NUMBER = '50760001234';
const WHATSAPP_MESSAGE = encodeURIComponent('Hola, me gustaría cotizar un servicio de reparación.');

const Hero = () => {
  const benefits = [
    { icon: Search, text: 'Diagnóstico' },
    { icon: Wrench, text: 'Reparación' },
    { icon: Settings, text: 'Mantenimiento' },
  ];

  const heroImages = [
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
  ];

  return (
    <section 
      data-testid="hero-section"
      className="bg-eureka-cream py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <h1 
              data-testid="hero-title"
              className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold text-eureka-text leading-tight tracking-tight"
            >
              Soluciones rápidas y profesionales para tu hogar y negocio
            </h1>
            
            <p 
              data-testid="hero-subtitle"
              className="text-lg text-eureka-muted leading-relaxed max-w-lg"
            >
              Reparamos filtraciones, grietas y problemas técnicos. 
              Atención en Ciudad de Panamá.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-whatsapp-btn"
            >
              <Button 
                className="bg-eureka-green-900 hover:bg-eureka-green-800 text-white rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Cotizar por WhatsApp
              </Button>
            </a>

            {/* Benefits */}
            <div 
              data-testid="hero-benefits"
              className="flex flex-wrap gap-6 pt-4"
            >
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-eureka-text"
                >
                  <div className="w-10 h-10 rounded-full bg-eureka-green-100 flex items-center justify-center">
                    <benefit.icon className="w-5 h-5 text-eureka-green-900" />
                  </div>
                  <span className="font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Collage */}
          <div 
            data-testid="hero-images"
            className="grid grid-cols-2 gap-4"
          >
            {heroImages.map((img, index) => (
              <div 
                key={index}
                className={`rounded-2xl overflow-hidden shadow-md ${
                  index === 0 ? 'row-span-1' : ''
                } ${index === 1 ? 'mt-8' : ''} ${index === 3 ? '-mt-8' : ''}`}
              >
                <img
                  src={img}
                  alt={`Servicio de reparación ${index + 1}`}
                  className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
