import { MessageCircle, MapPin, Instagram } from 'lucide-react';

const WHATSAPP_NUMBER = '50760001234';

const Footer = () => {
  const quickLinks = [
    { name: '¿Quiénes somos?', href: '#quienes-somos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Bricolaje', href: '#bricolaje' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer 
      data-testid="footer"
      className="bg-eureka-text py-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-outfit text-2xl font-bold text-white">
                Eureka
              </span>
              <span className="font-outfit text-lg font-medium text-eureka-muted">
                Servicios
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Soluciones profesionales para tu hogar y negocio en Ciudad de Panamá. 
              Calidad, rapidez y garantía en cada trabajo.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-outfit font-semibold text-white mb-4">
              Enlaces rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    data-testid={`footer-link-${index}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-outfit font-semibold text-white mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-whatsapp"
                  className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  +507 6000-1234
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  Ciudad de Panamá
                </div>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-outfit font-semibold text-white mb-4">
              Síguenos
            </h4>
            <a
              href="https://instagram.com/eurekaservicios"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Instagram className="w-5 h-5" />
              @eurekaservicios
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Eureka Servicios. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
