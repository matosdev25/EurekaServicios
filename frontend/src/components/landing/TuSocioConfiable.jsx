import { BadgeCheck, Clock, Shield } from 'lucide-react';

const TuSocioConfiable = () => {
  const features = [
    {
      icon: BadgeCheck,
      title: 'Profesionales certificados',
      description: 'Personal capacitado con experiencia comprobada',
    },
    {
      icon: Clock,
      title: 'Respuesta rápida',
      description: 'Atención inmediata a tu solicitud',
    },
    {
      icon: Shield,
      title: 'Garantía de calidad',
      description: 'Respaldamos todos nuestros trabajos',
    },
  ];

  return (
    <section 
      id="quienes-somos"
      data-testid="socio-confiable-section"
      className="bg-white py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            <h2 
              data-testid="socio-title"
              className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-eureka-text leading-tight tracking-tight"
            >
              Tu socio confiable en soluciones para el hogar
            </h2>
            
            <p className="text-lg text-eureka-muted leading-relaxed">
              En Eureka Servicios nos dedicamos a resolver los problemas de tu hogar y 
              negocio con eficiencia y profesionalismo. Contamos con años de experiencia 
              en el mercado panameño.
            </p>

            {/* Features List */}
            <div className="space-y-6 pt-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  data-testid={`feature-${index}`}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-2xl bg-eureka-green-100 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-eureka-green-900" />
                  </div>
                  <div>
                    <h3 className="font-outfit font-semibold text-eureka-text text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-eureka-muted">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image with Overlay Card */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=500&fit=crop"
                alt="Equipo profesional de Eureka Servicios"
                className="w-full h-[400px] md:h-[500px] object-cover"
                data-testid="socio-image"
              />
            </div>
            
            {/* Overlay Card */}
            <div 
              data-testid="overlay-card"
              className="absolute -bottom-6 -left-6 md:left-auto md:-right-6 bg-white rounded-2xl shadow-xl p-6 max-w-[250px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-eureka-green-900 flex items-center justify-center">
                  <BadgeCheck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-outfit font-bold text-eureka-green-900 text-lg">
                    Eureka!
                  </p>
                  <p className="text-sm text-eureka-muted">
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
