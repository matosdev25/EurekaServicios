import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: '¿Quiénes somos?', href: '#quienes-somos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Bricolaje', href: '#bricolaje' },
    { name: 'Contáctanos', href: '#contacto', isActive: true },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header 
      data-testid="navbar"
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            data-testid="navbar-logo"
            className="flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="font-outfit text-2xl font-bold text-eureka-green-900">
              Eureka
            </span>
            <span className="font-outfit text-lg font-medium text-eureka-muted">
              Servicios
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                data-testid={`nav-link-${link.name.toLowerCase().replace(/[¿?]/g, '').replace(/\s+/g, '-')}`}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors ${
                  link.isActive
                    ? 'bg-eureka-green-900 text-white px-5 py-2 rounded-full hover:bg-eureka-green-800'
                    : 'text-eureka-muted hover:text-eureka-green-900'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-eureka-text" />
            ) : (
              <Menu className="w-6 h-6 text-eureka-text" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav 
            data-testid="mobile-menu"
            className="md:hidden pt-4 pb-2 border-t border-gray-100 mt-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  data-testid={`mobile-nav-${link.name.toLowerCase().replace(/[¿?]/g, '').replace(/\s+/g, '-')}`}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left text-sm font-medium py-3 px-4 rounded-xl transition-colors ${
                    link.isActive
                      ? 'bg-eureka-green-900 text-white'
                      : 'text-eureka-muted hover:bg-eureka-cream hover:text-eureka-green-900'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
