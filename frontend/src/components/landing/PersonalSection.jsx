import { Zap, Droplets, Flame, Hammer, Paintbrush, Bug } from 'lucide-react';

const PersonalSection = () => {
  const services = [
    { icon: Zap, name: 'Electricidad', description: 'Instalaciones y reparaciones eléctricas' },
    { icon: Droplets, name: 'Fontanería', description: 'Tuberías, grifos y sistemas de agua' },
    { icon: Flame, name: 'Plomería a gas', description: 'Instalaciones y mantenimiento de gas' },
    { icon: Hammer, name: 'Soldadura', description: 'Trabajos de soldadura profesional' },
    { icon: Paintbrush, name: 'Pintura', description: 'Exterior e interior de alta calidad' },
    { icon: Bug, name: 'Fumigación', description: 'Control de plagas y desinfección' },
  ];

  return (
    <section 
      id="servicios"
      data-testid="personal-section"
      className="bg-[#f5fbd4] py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 
            data-testid="personal-title"
            className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-eureka-text leading-tight tracking-tight"
          >
            Personal idóneo y multidisciplinario
          </h2>
          <p className="text-lg text-eureka-muted max-w-2xl mx-auto">
            Contamos con especialistas en diversas áreas para atender todas tus necesidades
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              data-testid={`service-card-${index}`}
              className="bg-eureka-cream rounded-3xl p-6 md:p-8 hover:bg-eureka-green-50 hover:shadow-md transition-all duration-300 group cursor-pointer"
            >
              <div className="space-y-4">
  <div className="w-14 h-14 rounded-2xl bg-[#52b4c3]/15 group-hover:bg-[#52b4c3] flex items-center justify-center transition-colors">
    <service.icon className="w-7 h-7 text-[#52b4c3] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-outfit font-semibold text-lg text-eureka-text">
                    {service.name}
                  </h3>
                  <p className="text-sm text-eureka-muted mt-1">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
