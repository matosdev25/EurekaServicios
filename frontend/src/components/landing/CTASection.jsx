import { MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';

const WHATSAPP_NUMBER = '50767059547';
const WHATSAPP_MESSAGE = encodeURIComponent('Hola, estoy listo para empezar mi proyecto. Me gustaría una cotización personalizada.');

const CTASection = () => {
  return (
    <section 
      id="contacto"
      data-testid="cta-section"
      className="py-20 md:py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#21a1ae] rounded-3xl p-10 md:p-16 text-center">
          <h2 
            data-testid="cta-title"
            className="font-outfit text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-6"
          >
            ¿Listo para empezar tu proyecto?
          </h2>
          
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10">
            Contáctanos hoy y recibe una cotización personalizada sin compromiso.
          </p>

          <a
  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
  target="_blank"
  rel="noopener noreferrer"
  data-testid="cta-whatsapp-btn"
>
  <Button
    className="group bg-white text-[#52b4c3] hover:bg-[#F5E96A] hover:text-[#1A4D2E] rounded-full px-10 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all flex items-center gap-3 mx-auto"
  >
    <MessageCircle className="w-5 h-5 text-[#52b4c3] transition-colors group-hover:text-[#1A4D2E]" />
    Hablar por WhatsApp
  </Button>
</a>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
