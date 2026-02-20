import { Star, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';

const WHATSAPP_NUMBER = '50767059547';
const WHATSAPP_MESSAGE = encodeURIComponent('Hola, me gustaría solicitar una cotización.');

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'María González',
      role: 'Propietaria de casa',
      review: 'Excelente servicio. Resolvieron mi problema de filtraciones en menos de 24 horas. Muy profesionales.',
      rating: 5,
    },
    {
      name: 'Carlos Mendoza',
      role: 'Dueño de negocio',
      review: 'Contratamos a Eureka para el mantenimiento de nuestras oficinas. Trabajo impecable y precios justos.',
      rating: 5,
    },
    {
      name: 'Ana Rodríguez',
      role: 'Administradora de edificio',
      review: 'Llevan años atendiéndonos. Son confiables, puntuales y siempre dejan todo limpio.',
      rating: 5,
    },
    {
      name: 'Roberto Jiménez',
      role: 'Propietario de apartamento',
      review: 'Tuve una emergencia con una tubería rota y llegaron en tiempo récord. Muy agradecido.',
      rating: 5,
    },
    {
      name: 'Lucía Fernández',
      role: 'Propietaria de casa',
      review: 'El equipo de pintura hizo un trabajo espectacular. Mi casa parece nueva. Recomendados 100%.',
      rating: 5,
    },
    {
      name: 'Pedro Castillo',
      role: 'Gerente comercial',
      review: 'Profesionalismo y calidad. Eureka se ha convertido en nuestro proveedor de confianza.',
      rating: 5,
    },
  ];

  return (
    <section 
      data-testid="reviews-section"
      className="bg-[#f5fbd4] py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16 space-y-4">
          <h2 
            data-testid="reviews-title"
            className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-eureka-text leading-tight tracking-tight"
          >
            Reseñas de clientes
          </h2>
          <p className="text-lg text-eureka-muted max-w-2xl mx-auto">
            Lo que dicen quienes ya han confiado en nosotros
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              data-testid={`review-card-${index}`}
              className="bg-white rounded-3xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Review Text */}
              <p className="text-eureka-text leading-relaxed mb-6">
                "{review.review}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-eureka-green-100 flex items-center justify-center">
                  <span className="font-outfit font-semibold text-eureka-green-900">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-eureka-text">{review.name}</p>
                  <p className="text-sm text-eureka-muted">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="reviews-cta-btn"
          >
            <Button 
            className="inline-flex items-center justify-center gap-2 bg-[#0B7A1E] text-white font-semibold px-10 py-4 rounded-full hover:bg-[#0A6C1A] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />

              Quiero una cotización
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
