import { MessageCircle, CheckCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '50760001234';
const WHATSAPP_MESSAGE = encodeURIComponent('Hola, me gustaría cotizar un servicio de reparación.');

const Hero = () => {
  const benefits = [
    { text: 'Diagnóstico' },
    { text: 'Reparación' },
    { text: 'Mantenimiento' },
  ];

  const heroImages = [
    // Large vertical image (left) - worker with tools
    'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=700&fit=crop&q=80',
    // Top right image - electrician working
    'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=320&fit=crop&q=80',
    // Bottom right image - plumbing work
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=320&fit=crop&q=80',
  ];

  const scrollToServices = () => {
    const element = document.querySelector('#servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      data-testid="hero-section"
      className="bg-[#E8EFD5] py-16 lg:py-20"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 lg:space-y-8">
            <h1 
              data-testid="hero-title"
              className="font-outfit text-[42px] sm:text-[48px] lg:text-[52px] font-bold text-[#1a1a1a] leading-[1.1] tracking-tight"
            >
              Soluciones rápidas y profesionales para tu hogar y negocio
            </h1>
            
            <p 
              data-testid="hero-subtitle"
              className="text-[18px] text-[#5c5c5c] leading-relaxed max-w-[480px]"
            >
              Reparamos filtraciones, grietas y problemas técnicos. 
              Atención en Ciudad de Panamá.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-whatsapp-btn"
                className="inline-flex items-center gap-2.5 bg-[#1A4D2E] hover:bg-[#255938] text-white text-[16px] font-semibold px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Cotizar por WhatsApp
              </a>
              
              <button
                onClick={scrollToServices}
                data-testid="hero-services-btn"
                className="inline-flex items-center gap-2 border-2 border-[#3B9B7A] text-[#3B9B7A] hover:bg-[#3B9B7A] hover:text-white text-[16px] font-semibold px-7 py-[14px] rounded-xl transition-all"
              >
                Ver servicios
              </button>
            </div>

            {/* Benefits Row */}
            <div 
              data-testid="hero-benefits"
              className="flex flex-wrap items-center gap-6 pt-4"
            >
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-[#1A4D2E] fill-[#E0E7D8]" />
                  <span className="text-[15px] font-medium text-[#3a3a3a]">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image Collage */}
          <div 
            data-testid="hero-images"
            className="flex gap-4 h-[420px] lg:h-[500px]"
          >
            {/* Large Vertical Image (Left) */}
            <div className="flex-1 rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <img
                src={heroImages[0]}
                alt="Profesional realizando reparación"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right Column - 2 Stacked Images */}
            <div className="flex flex-col gap-4 w-[42%]">
              {/* Top Right Image */}
              <div className="flex-1 rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                <img
                  src={heroImages[1]}
                  alt="Herramientas de trabajo"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Bottom Right Image */}
              <div className="flex-1 rounded-[20px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                <img
                  src={heroImages[2]}
                  alt="Trabajo de fontanería"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
