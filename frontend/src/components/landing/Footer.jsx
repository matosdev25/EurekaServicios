import { MessageCircle, MapPin, Instagram } from 'lucide-react';

const WHATSAPP_NUMBER = '50767059547';
const BRAND_BLUE = '#52b4c3';

const Footer = () => {
  const quickLinks = [
    { name: '¿Quiénes somos?', href: '#quienes-somos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Bricolaje', href: '#bricolaje' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer data-testid="footer" className="bg-[#F7F6F0] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Eureka Servicios" className="w-9 h-9 object-contain" />
              <span className="font-outfit text-xl font-semibold text-[#1a1a1a]">
                Eureka Servicios
              </span>
            </div>

            <p className="text-[#6a6a6a] text-[16px] leading-relaxed max-w-[280px]">
              Soluciones profesionales para tu hogar y negocio en Ciudad de Panamá
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit font-semibold text-[#1a1a1a] mb-4">
              Enlaces rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    data-testid={`footer-link-${index}`}
                    className="text-[#6a6a6a] hover:text-[#1a1a1a] transition-colors text-[16px]"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit font-semibold text-[#1a1a1a] mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <div className="text-[#6a6a6a] text-[16px]">
                  Atendemos Ciudad de Panamá, Colón, playas y alrededores. 
                </div>
              </li>

              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-whatsapp"
                  className="inline-flex items-center gap-2 text-[16px] font-medium transition-colors"
                  style={{ color: BRAND_BLUE }}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-outfit font-semibold text-[#1a1a1a] mb-4">
              Síguenos
            </h4>
            <a
              href="https://instagram.com/eurekaservicios"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram"
              className="inline-flex items-center gap-2 text-[#6a6a6a] hover:text-[#1a1a1a] transition-colors text-[16px]"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-black/10 pt-10">
          <p className="text-center text-[#9a9a9a] text-[14px]">
            © {new Date().getFullYear()} Eureka Servicios. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
