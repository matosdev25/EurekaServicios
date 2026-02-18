import { BadgeCheck, Clock, Shield } from 'lucide-react';

const TuSocioConfiable = () => {
  const features = [
    {
      icon: Shield,
      title: 'Profesionales certificados',
      description: 'Todo nuestro equipo cuenta con certificación y experiencia comprobada',
    },
    {
      icon: Clock,
      title: 'Respuesta rápida',
      description: 'Atendemos tus emergencias con la mayor brevedad posible',
    },
    {
      icon: BadgeCheck,
      title: 'Garantía de calidad',
      description: 'Respaldamos nuestro trabajo con garantía en todos los servicios',
    },
  ];

  return (
    <section 
      id="quienes-somos"
      data-testid="socio-confiable-section"
      className="bg-[#FAFDEF] py-20 lg:py-28"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div 
              data-testid="about-badge"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6F1C8] text-[#1A1A1A] text-sm font-semibold"
            >
              {/* Lightbulb Icon */}
             <img src="/logo.png" alt="Eureka Servicios" className="w-5 h-5 object-contain" />
              <span className="text-[15px] font-medium text-[#2a2a2a]">
                ¿Quiénes somos?
              </span>
            </div>

            {/* Heading */}
            <h2 
              data-testid="socio-title"
              className="font-outfit text-[36px] lg:text-[42px] font-bold text-[#1a1a1a] leading-[1.15] tracking-tight"
            >
              Tu socio confiable en soluciones para el hogar
            </h2>
            
            {/* Description Paragraph */}
            <p className="text-[17px] text-[#5c5c5c] leading-[1.7] max-w-[500px]">
              En Eureka Servicios, entendemos que tu hogar y negocio merecen atención profesional. 
              Nuestro equipo multidisciplinario está listo para resolver desde pequeños ajustes 
              hasta reparaciones complejas con la calidad que mereces.
            </p>

            {/* Features List */}
            <div className="space-y-6 pt-2">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  data-testid={`feature-${index}`}
                  className="flex items-start gap-4"
                >
                  {/* Icon with circular border */}
                  <div className="w-12 h-12 rounded-full border-2 border-[#A8E0D8] flex items-center justify-center flex-shrink-0 bg-transparent">
                    <feature.icon className="w-5 h-5 text-[#5CB8A8]" strokeWidth={1.5} />
                  </div>
                  <div className="pt-1">
                    <h3 className="font-outfit font-semibold text-[17px] text-[#1a1a1a] mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[15px] text-[#6a6a6a] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image with Overlay Card */}
          <div className="relative lg:mt-12">
            {/* Main Image */}
            <div 
              className="rounded-[28px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.15)]"
              data-testid="socio-image-container"
            >
              <img
                src="https://images.pexels.com/photos/26776096/pexels-photo-26776096.jpeg?auto=compress&cs=tinysrgb&w=800&h=900&fit=crop"
                alt="Interior elegante con pintura clásica"
                className="w-full h-[480px] lg:h-[560px] object-cover"
                data-testid="socio-image"
              />
            </div>
            
          {/* Overlay Card */}
<div
  data-testid="overlay-card"
  className="absolute bottom-10 left-10 right-10 bg-white rounded-[18px] shadow-[0_16px_40px_rgba(0,0,0,0.12)] p-6"
>
  <div className="flex items-center gap-4">
    {/* Logo */}
    <img
      src="/logo.png"
      alt="Eureka Servicios"
      className="w-10 h-10 object-contain flex-shrink-0"
    />

    <div>
      <p className="font-outfit font-bold text-[18px] text-[#1a1a1a] leading-tight">
        Eureka!
      </p>
      <p className="text-[15px] text-[#6a6a6a]">
        Tu solución profesional
      </p>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TuSocioConfiable;
