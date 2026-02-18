import { ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = '50760001234';

const ProblemasSection = () => {
  const problems = [
    {
      title: 'Techo con goteras',
      description: 'Detectamos y reparamos filtraciones en techos de todo tipo de material.',
      image: '/problems/techo-goteras.png',
      whatsappText: 'Hola, tengo goteras en el techo y necesito una evaluación.',
    },
    {
      title: 'Agua dentro de la pared',
      description: 'Identificamos el origen de la humedad y solucionamos el problema de raíz.',
      image: '/problems/agua-pared.png',
      whatsappText: 'Hola, tengo humedad en las paredes y necesito diagnóstico.',
    },
    {
      title: 'Grietas por humedad o temblores',
      description: 'Reparamos grietas estructurales y cosméticas con técnicas profesionales.',
      image: '/problems/grietas.png',
      whatsappText: 'Hola, tengo grietas en mi propiedad y necesito una evaluación.',
    },
  ];

  return (
    <section 
      data-testid="problemas-section"
      className="bg-[#fafdef] py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 
            data-testid="problemas-title"
            className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-eureka-text leading-tight tracking-tight"
          >
            Donde otros ven un problema, <br className="hidden md:block" />
            <span className="text-eureka-green-900">nosotros vemos una solución</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              data-testid={`problem-card-${index}`}
              className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="w-full h-[190px] overflow-hidden rounded-t-3xl bg-gray-100">
  <img
    src={problem.image}
    alt={problem.title}
    className="w-full h-full object-cover"
    loading="lazy"
  />
</div>

              
              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="font-outfit font-semibold text-xl text-eureka-text">
                  {problem.title}
                </h3>
                <p className="text-eureka-muted leading-relaxed">
                  {problem.description}
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(problem.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`problem-cta-${index}`}
                  className="inline-flex items-center gap-2 text-eureka-green-900 font-medium hover:gap-3 transition-all"
                >
                  Solicitar diagnóstico
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemasSection;
