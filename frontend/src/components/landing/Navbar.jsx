import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: '¿Quiénes somos?', href: '#quienes-somos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Bricolaje', href: '#bricolaje' },
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
      className="sticky top-0 z-50 bg-white"
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
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
            {/* Lightbulb Icon */}
            <div className="w-8 h-8 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="14" cy="18" r="8" fill="#8B7355"/>
                <ellipse cx="14" cy="6" rx="4" ry="4" fill="#FBBF24"/>
                <path d="M12 18h4v4a2 2 0 01-2 2 2 2 0 01-2-2v-4z" fill="#8B7355"/>
              </svg>
            </div>
            <span className="font-outfit text-[18px] font-semibold text-[#1a1a1a] tracking-tight">
              Eureka Servicios
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                data-testid={`nav-link-${link.name.toLowerCase().replace(/[¿?]/g, '').replace(/\s+/g, '-')}`}
                onClick={() => scrollToSection(link.href)}
                className="text-[15px] font-medium text-[#4a4a4a] hover:text-[#1A4D2E] transition-colors"
              >
                {link.name}
              </button>
            ))}
            <button
              data-testid="nav-link-contactanos"
              onClick={() => scrollToSection('#contacto')}
              className="bg-[#1A4D2E] text-white text-[15px] font-medium px-6 py-2.5 rounded-lg hover:bg-[#255938] transition-colors"
            >
              Contáctanos
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            data-testid="mobile-menu-toggle"
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#1a1a1a]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1a1a1a]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav 
            data-testid="mobile-menu"
            className="md:hidden pb-4 border-t border-gray-100"
          >
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  data-testid={`mobile-nav-${link.name.toLowerCase().replace(/[¿?]/g, '').replace(/\s+/g, '-')}`}
                  onClick={() => scrollToSection(link.href)}
                  className="text-left text-[15px] font-medium py-3 px-4 rounded-xl text-[#4a4a4a] hover:bg-[#f0f5ed] hover:text-[#1A4D2E] transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <button
                data-testid="mobile-nav-contactanos"
                onClick={() => scrollToSection('#contacto')}
                className="text-left text-[15px] font-medium py-3 px-4 rounded-xl bg-[#1A4D2E] text-white mt-2"
              >
                Contáctanos
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
